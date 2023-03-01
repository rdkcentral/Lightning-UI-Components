export function heroUpdaterGenerator() {
  return function heroUpdater(Base) {
    return class WithHeroUpdater extends Base {
      _resetItems() {
        setTimeout(() => {
          this.fireAncestors('$updateHero');
        }, 1000)
        super._resetItems();
      }

      _selectedChange(selected, prevSelected) {
        super._selectedChange(selected, prevSelected);
        this.fireAncestors('$updateHero');
      }
    };
  };
}
