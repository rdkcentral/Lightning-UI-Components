import lng from '@lightningjs/core';
import TextMagnifier from '../../components/TextMagnifier/TextMagnifier';

function isSubclass(Subclass, Superclass) {
  // Traverse up the prototype chain to check if the Superclass is found
  while (Subclass) {
    if (Subclass === Superclass) {
      return true;
    }
    Subclass = Object.getPrototypeOf(Subclass);
  }
  return false;
}

export default function (Base) {
  if (!isSubclass(Base, lng.Application)) {
    console.error(
      'withTextMagnifier can only be applied to an application class'
    );
    return Base;
  }

  return class extends Base {
    set textMagnifierEnabled(val) {
      this._textMagnifierEnabled = val;
      this._updateTextMagnifier(true);
    }

    get textMagnifierEnabled() {
      return this._textMagnifierEnabled;
    }

    get _focusedElement() {
      return this.application?.focusPath?.[
        this.application.focusPath.length - 1
      ];
    }

    get _location() {
      const { py: focusedY } = this._focusedElement?.core?.renderContext || {};
      return focusedY > this.stage.h / 2 ? 'top' : 'bottom';
    }

    get _focusText() {
      const { title, description, announce } = this._focusedElement || {};
      const focusText = title || description || announce || '';
      return Array.isArray(focusText)
        ? focusText.filter(Boolean).join('. ').replace(/\.$/, '')
        : focusText.replace(/\.$/, '');
    }

    _focusChange() {
      this._updateTextMagnifier();
      super._focusChange();
    }

    _updateTextMagnifier() {
      if (
        !this.textMagnifierEnabled ||
        !this._focusedElement ||
        !this._focusText.length
      ) {
        if (this.tag('TextMagnifier')) {
          this.patch({ TextMagnifier: undefined });
        }
        return;
      }

      this.patch({
        TextMagnifier: {
          type: TextMagnifier,
          location: this._location,
          content: this._focusText
        }
      });
    }
  };
}
