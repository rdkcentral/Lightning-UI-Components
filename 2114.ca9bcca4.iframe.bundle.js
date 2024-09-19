(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2114],{

/***/ "../../../node_modules/@lightningjs/core/devtools/lightning-inspect.js":
/***/ (() => {

/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

window.attachInspector = function({Application, Element, ElementCore, Stage, Component, ElementTexturizer, Texture}) {

    const isAlreadyAttached = window.hasOwnProperty('mutationCounter');
    if (isAlreadyAttached) {
        return;
    }

    window.mutationCounter = 0;
    window.mutatingChildren = false;
    var observer = new MutationObserver(function(mutations) {
        var fa = ["x", "y", "w", "h", "alpha", "mountX", "mountY", "pivotX", "pivotY", "scaleX", "scaleY", "rotation", "visible", "clipping", "rect", "colorUl", "colorUr", "colorBl", "colorBr", "color", "borderWidthLeft", "borderWidthRight", "borderWidthTop", "borderWidthBottom", "borderWidth", "borderColorLeft", "borderColorRight", "borderColorTop", "borderColorBottom", "borderColor", "zIndex", "forceZIndexContext", "renderToTexture", "renderToTextureLazy", "renderOffscreen", "colorizeResultTexture", "texture"];
        var fac = fa.map(function(v) {return v.toLowerCase()});

        mutations.forEach(function(mutation) {
            if (mutation.type == 'childList') {

                var node = mutation.target;
                var c = mutation.target.element;
            }

            if (mutation.type == 'attributes' && mutation.attributeName !== 'style' && mutation.attributeName !== 'class') {
                var n = mutation.attributeName.toLowerCase();
                var c = mutation.target.element;

                if (c.__ignore_attrib_changes === window.mutationCounter) {
                    // Ignore attribute changes that were caused by actual value modifications by js.
                    return;
                }

                var v = mutation.target.getAttribute(mutation.attributeName);

                if (n.startsWith("texture-")) {
                    if (c.displayedTexture) {
                        const att = n.substr(8).split("_")
                        const camelCaseAtt = att[0] + att.slice(1).map(a => {
                            return a.substr(0,1).toUpperCase() + a.substr(1).toLowerCase()
                        }).join()

                        c.displayedTexture[camelCaseAtt] = v
                    }
                    return
                }

                var index = fac.indexOf(n);
                if (index !== -1) {
                    var rn = fa[index];
                    var pv;
                    try {
                        if (v === null) {
                            switch(rn) {
                                case "pivotX":
                                case "pivotY":
                                    pv = 0.5;
                                    break;
                                case "alpha":
                                case "scaleX":
                                case "scaleY":
                                    pv = 1;
                                    break;
                                case "visible":
                                    pv = true;
                                    break;
                                case "clipping":
                                    pv = false;
                                    break;
                                case "rect":
                                    pv = false;
                                    break;
                                case "zIndex":
                                    pv = 0;
                                    break;
                                case "forceZIndexContext":
                                    pv = false;
                                    break;
                                case "color":
                                    pv = 0xffffffff;
                                    break;
                                case "colorUl":
                                case "colorUr":
                                case "colorBl":
                                case "colorBr":
                                    if (mutation.target.hasAttribute("color")) {
                                        // This may happen when the separate values are combined.
                                        return;
                                    }
                                    pv = 0xffffffff;
                                    break;
                                case "renderToTexture":
                                    pv = false
                                    break;
                                case "renderToTextureLazy":
                                    pv = false
                                    break;
                                case "renderOffscreen":
                                    pv = false
                                    break;
                                case "colorizeResultTexture":
                                    pv = false
                                    break;
                                default:
                                    pv = 0;
                            }
                        } else {
                            switch(rn) {
                                case "color":
                                case "colorUl":
                                case "colorUr":
                                case "colorBl":
                                case "colorBr":
                                    pv = parseInt(v, 16);
                                    break;
                                case "visible":
                                case "clipping":
                                case "rect":
                                case "forceZIndexContext":
                                case "renderToTexture":
                                case "renderToTextureLazy":
                                case "renderOffscreen":
                                case "colorizeResultTexture":
                                    pv = (v === "true");
                                    break;
                                case "texture":
                                    pv = JSON.parse(v)
                                    break
                                default:
                                    pv = parseFloat(v);
                                    if (isNaN(pv)) throw "e";
                            }
                        }

                        var fv;
                        switch(rn) {
                            case "color":
                                var f = ['colorUl','colorUr','colorBl','colorBr'].map(function(q) {
                                    return mutation.target.hasAttribute(q);
                                });

                                if (!f[0]) c["colorUl"] = pv;
                                if (!f[1]) c["colorUr"] = pv;
                                if (!f[2]) c["colorBl"] = pv;
                                if (!f[3]) c["colorBr"] = pv;
                                break;
                            default:
                                c[rn] = pv;
                        }

                        // Set final value, not the transitioned value.
                    } catch(e) {
                        console.error('Bad (ignored) attribute value', rn);
                    }
                }
            }
        });

        window.mutationCounter++;
    });

    ElementCore.prototype.dhtml = function() {
        return this._element.dhtml();
    }

    Element.prototype.dhtml = function() {
        if (!this.debugElement) {
            this.debugElement = document.createElement('DIV');
            this.debugElement.setAttribute('type', this.constructor.name);
            this.debugElement.element = this;
            this.debugElement.style.position = 'absolute';

            this.debugElement.id = "" + this.id;
            observer.observe(this.debugElement, {attributes: true});
        }
        if (this.stage.root === this && !this.dhtml_root) {
            // Root element.
            var root = document.createElement('DIV');
            document.body.appendChild(root);
            var self = this;
            let updateRootStyleFromCanvas = function (bcr) {
                const p = self.stage.getRenderPrecision() / self.stage.getOption('devicePixelRatio');
                root.style.left = bcr.left + 'px';
                root.style.top = bcr.top + 'px';
                root.style.width = Math.ceil(bcr.width / p) + 'px';
                root.style.height = Math.ceil(bcr.height / p) + 'px';
                root.style.transformOrigin = '0 0 0';
                root.style.transform = 'scale(' + p + ',' + p + ')';
            }

            if (window.ResizeObserver != null) {
                const resize_ob = new ResizeObserver(function (entries) {
                    updateRootStyleFromCanvas(entries[0].target.getBoundingClientRect());
                });
                // start observing for resize
                resize_ob.observe(this.stage.getCanvas());
            } else {
                setTimeout(function () {
                    updateRootStyleFromCanvas(self.stage.getCanvas().getBoundingClientRect());
                }, 1000);
            }

            root.style.position = 'absolute';
            root.style.overflow = 'hidden';
            root.style.zIndex = '65535';
            root.appendChild(this.debugElement);

            this.dhtml_root = root;
        }
        return this.debugElement;
    };

    var oElement = Element;

    var oSetParent = oElement.prototype._setParent;
    Element.prototype._setParent = function(parent) {
        var prevParent = this.parent;
        oSetParent.apply(this, arguments);

        if (!window.mutatingChildren) {
            if (parent && parent.dhtml) {
                var index = parent._children.getIndex(this);
                if (index == parent._children.get().length - 1) {
                    parent.dhtml().appendChild(this.dhtml());
                } else {
                    parent.dhtml().insertBefore(this.dhtml(), parent.dhtml().children[index]);
                }
            } else {
                if (prevParent && prevParent.dhtml) {
                    prevParent.dhtml().removeChild(this.dhtml());
                }
            }
        }
    };

    var oInit = Stage.prototype.init;
    Stage.prototype.init = function() {
        oInit.apply(this, arguments);

        // Apply stage scaling.
        this.root.core.updateDebugTransforms();
    };

    var oAddTag = oElement.prototype.addTag;
    Element.prototype.addTag = function(tag) {
        oAddTag.apply(this, arguments);

        if (tag) {
            this.dhtml().classList.add(tag);
        }
    };

    var oRemoveTag = oElement.prototype.removeTag;
    Element.prototype.removeTag = function(tag) {
        oRemoveTag.apply(this, arguments);

        if (tag) {
            this.dhtml().classList.remove(tag);
        }
    };

// Change an attribute due to new value inputs.
    var val = function(c, n, v, dv) {
        if (c._element) {
            c = c._element;
        }
        if (v == dv) {
            if (c.dhtmlRemoveAttribute) {
                c.dhtmlRemoveAttribute(n);
            }
        } else {
            if (c.dhtmlSetAttribute) {
                c.dhtmlSetAttribute(n, v);
            }
        }
    };

    var valStrict = function(c, n, v, dv) {
        if (c._element) {
            c = c._element;
        }
        if (v === dv) {
            if (c.dhtmlRemoveAttribute) {
                c.dhtmlRemoveAttribute(n);
            }
        } else {
            if (c.dhtmlSetAttribute) {
                c.dhtmlSetAttribute(n, v);
            }
        }
    };

    Element.prototype.dhtmlRemoveAttribute = function() {
        // We don't want the attribute listeners to be called during the next observer cycle.
        this.__ignore_attrib_changes = window.mutationCounter;
        this.dhtml().removeAttribute.apply(this.dhtml(), arguments);
    };

    Element.prototype.dhtmlSetAttribute = function() {
        this.__ignore_attrib_changes = window.mutationCounter;
        this.dhtml().setAttribute.apply(this.dhtml(), arguments);
    };

    if (typeof Component !== "undefined") {
        Object.defineProperty(Component.prototype, '_state', {
            get: function() {
                return this.__state;
            },
            set: function(v) {
                if (this.__state !== v) {
                    if (this.__state !== null) { // Ignore initial.
                        val(this, 'state', v ? v.__path : "", "");
                    }
                    this.__state = v;
                }
            }
        });
    }

    Element.prototype.$ref = Element.prototype.__ref;
    Object.defineProperty(Element.prototype, '__ref', {
        get: function() {
            return this.$ref;
        },
        set: function(v) {
            if (this.$ref !== v) {
                val(this, 'ref', v, null);
                this.$ref = v;
            }
        }
    });

    ElementCore.prototype.$x = ElementCore.prototype._x;
    Object.defineProperty(ElementCore.prototype, '_x', {
        get: function() {
            return this.$x;
        },
        set: function(v) {
            if (this.$x !== v) {
                val(this, 'x', v, 0);
                this.$x = v;
                this.updateLeft();
            }
        }
    });

    ElementCore.prototype.$y = ElementCore.prototype._y;
    Object.defineProperty(ElementCore.prototype, '_y', {
        get: function() {
            return this.$y;
        },
        set: function(v) {
            if (this.$y !== v) {
                val(this, 'y', v, 0);
                this.$y = v;
                this.updateTop();
            }
        }
    });

    Element.prototype.$w = Element.prototype._w;
    Object.defineProperty(Element.prototype, '_w', {
        get: function() {
            return this.$w;
        },
        set: function(v) {
            if (this.$w !== v) {
                val(this, 'w', v, 0);
                this.$w = v;
            }
        }
    });

    Element.prototype.$h = Element.prototype._h;
    Object.defineProperty(Element.prototype, '_h', {
        get: function() {
            return this.$h;
        },
        set: function(v) {
            if (this.$h !== v) {
                val(this, 'h', v, 0);
                this.$h = v;
            }
        }
    });

    ElementCore.prototype.updateLeft = function() {
        var mx = this._mountX * this._w;
        var x = this._x - mx;
        this.dhtml().style.left = x + 'px';
    };

    ElementCore.prototype.updateTop = function() {
        var my = this._mountY * this._h;
        var y = this._y - my;
        this.dhtml().style.top = y + 'px';
    };

    ElementCore.prototype.__w = 0;
    Object.defineProperty(ElementCore.prototype, '_w', {
        get: function() {
            return this.__w;
        },
        set: function(v) {
            this.__w = v;
            this.dhtml().style.width = v + 'px';
            this.updateLeft();
        }
    });

    ElementCore.prototype.__h = 0;
    Object.defineProperty(ElementCore.prototype, '_h', {
        get: function() {
            return this.__h;
        },
        set: function(v) {
            this.__h = v;
            this.dhtml().style.height = v + 'px';
            this.updateTop();
        }
    });

    ElementCore.prototype.$alpha = 1;
    Object.defineProperty(ElementCore.prototype, '_alpha', {
        get: function() {
            return this.$alpha;
        },
        set: function(v) {
            if (this.$alpha !== v) {
                val(this, 'alpha', v, 1);
                this.$alpha = v;
                this.dhtml().style.opacity = v;
                this.dhtml().style.display = this.$visible && this.$alpha ? 'block' : 'none';
            }
        }
    });

    ElementCore.prototype.$visible = true;
    Object.defineProperty(ElementCore.prototype, '_visible', {
        get: function() {
            return this.$visible;
        },
        set: function(v) {
            if (this.$visible !== v) {
                val(this, 'visible', v, true);
                this.$visible = v;
                this.dhtml().style.visibility = v ? 'visible' : 'hidden';
                this.dhtml().style.display = this.$visible && this.$alpha ? 'block' : 'none';
            }
        }
    });

    ElementCore.prototype.$rotation = 0;
    Object.defineProperty(ElementCore.prototype, '_rotation', {
        get: function() {
            return this.$rotation;
        },
        set: function(v) {
            if (this.$rotation !== v) {
                val(this, 'rotation', v, 0);
                this.$rotation = v;
                this.updateDebugTransforms();
            }
        }
    });


    ElementCore.prototype.$scaleX = 1;
    Object.defineProperty(ElementCore.prototype, '_scaleX', {
        get: function() {
            return this.$scaleX;
        },
        set: function(v) {
            if (this.$scaleX !== v) {
                val(this, 'scaleX', v, 1);
                this.$scaleX = v;
                this.updateDebugTransforms();
            }
        }
    });

    ElementCore.prototype.$scaleY = 1;
    Object.defineProperty(ElementCore.prototype, '_scaleY', {
        get: function() {
            return this.$scaleY;
        },
        set: function(v) {
            if (this.$scaleY !== v) {
                val(this, 'scaleY', v, 1);
                this.$scaleY = v;
                this.updateDebugTransforms();
            }
        }
    });

    ElementCore.prototype.$pivotX = 0.5;
    Object.defineProperty(ElementCore.prototype, '_pivotX', {
        get: function() {
            return this.$pivotX;
        },
        set: function(v) {
            if (this.$pivotX !== v) {
                val(this, 'pivotX', v, 0.5);
                this.$pivotX = v;
                this.updateDebugTransforms();
            }
        }
    });

    ElementCore.prototype.$pivotY = 0.5;
    Object.defineProperty(ElementCore.prototype, '_pivotY', {
        get: function() {
            return this.$pivotY;
        },
        set: function(v) {
            if (this.$pivotY !== v) {
                val(this, 'pivotY', v, 0.5);
                this.$pivotY = v;
                this.updateDebugTransforms();
            }
        }
    });

    ElementCore.prototype.$mountX = 0;
    Object.defineProperty(ElementCore.prototype, '_mountX', {
        get: function() {
            return this.$mountX;
        },
        set: function(v) {
            if (this.$mountX !== v) {
                val(this, 'mountX', v, 0);
                this.$mountX = v;
                this.updateLeft();
            }
        }
    });

    ElementCore.prototype.$mountY = 0;
    Object.defineProperty(ElementCore.prototype, '_mountY', {
        get: function() {
            return this.$mountY;
        },
        set: function(v) {
            if (this.$mountY !== v) {
                val(this, 'mountY', v, 0);
                this.$mountY = v;
                this.updateTop();
            }
        }
    });

    ElementCore.prototype.__zIndex = 0;
    Object.defineProperty(ElementCore.prototype, '_zIndex', {
        get: function() {
            return this.__zIndex;
        },
        set: function(v) {
            if (this.__zIndex !== v) {
                val(this, 'zIndex', v, 0);
                this.__zIndex = v;
                if (this.__zIndex || v) {
                    this.dhtml().style.zIndex = v;
                }
            }
        }
    });

    ElementCore.prototype.__forceZIndexContext = false;
    Object.defineProperty(ElementCore.prototype, '_forceZIndexContext', {
        get: function() {
            return this.__forceZIndexContext;
        },
        set: function(v) {
            if (this.__forceZIndexContext !== v) {
                val(this, 'forceZIndexContext', v, false);
                this.__forceZIndexContext = v;
            }
        }
    });

    ElementCore.prototype.__clipping = false;
    Object.defineProperty(ElementCore.prototype, '_clipping', {
        get: function() {
            return this.__clipping;
        },
        set: function(v) {
            if (this.__clipping !== v) {
                val(this, 'clipping', v, false);
                this.__clipping = v;
                var nv = v ? 'hidden' : 'visible';
                if (v || !v && (this.dhtml().style.overflow == 'hidden')) {
                    this.dhtml().style.overflow = nv;
                }
            }
        }
    });

    ElementCore.prototype.__withinBoundsMargin = false;
    Object.defineProperty(ElementCore.prototype, '_withinBoundsMargin', {
        get: function() {
            return this.__withinBoundsMargin;
        },
        set: function(v) {
            if (this.__withinBoundsMargin !== v) {
                val(this, 'withinBoundsMargin', v, false);
                this.__withinBoundsMargin = v;
            }
        }
    });

    ElementCore.prototype.__colorUl = 0xFFFFFFFF;
    Object.defineProperty(ElementCore.prototype, '_colorUl', {
        get: function() {
            return this.__colorUl;
        },
        set: function(v) {
            if (this.__colorUl !== v) {
                val(this, 'colorUl', v.toString(16), "ffffffff");
                this.__colorUl = v;
                checkColors(this);
            }
        }
    });

    ElementCore.prototype.__colorUr = 0xFFFFFFFF;
    Object.defineProperty(ElementCore.prototype, '_colorUr', {
        get: function() {
            return this.__colorUr;
        },
        set: function(v) {
            if (this.__colorUr !== v) {
                val(this, 'colorUr', v.toString(16), "ffffffff");
                this.__colorUr = v;
                checkColors(this);
            }
        }
    });

    ElementCore.prototype.__colorBl = 0xFFFFFFFF;
    Object.defineProperty(ElementCore.prototype, '_colorBl', {
        get: function() {
            return this.__colorBl;
        },
        set: function(v) {
            if (this.__colorBl !== v) {
                val(this, 'colorBl', v.toString(16), "ffffffff");
                this.__colorBl = v;
                checkColors(this);
            }
        }
    });

    ElementCore.prototype.__colorBr = 0xFFFFFFFF;
    Object.defineProperty(ElementCore.prototype, '_colorBr', {
        get: function() {
            return this.__colorBr;
        },
        set: function(v) {
            if (this.__colorBr !== v) {
                val(this, 'colorBr', v.toString(16), "ffffffff");
                this.__colorBr = v;
                checkColors(this);
            }
        }
    });

    Element.prototype.$texture = null;
    Object.defineProperty(Element.prototype, '__texture', {
        get: function() {
            return this.$texture;
        },
        set: function(v) {
            this.$texture = v;

            val(this, 'rect', this.rect, false);
            val(this, 'src', this.src, null);
        }
    });

    Element.prototype.$testId = null;
    Object.defineProperty(Element.prototype, 'testId', {
        get: function() {
            return this.$testId;
        },
        set: function(v) {
            if (this.$testId !== v) {
                this.$testId = v;
                val(this, 'data-testid', v, null);
            }
        }
    });

    var checkColors = function(elementRenderer) {
        let element = elementRenderer._element;
        if (elementRenderer._colorBr === undefined) {
            // Element initialization.
            return;
        }

        if (elementRenderer._colorUl === elementRenderer._colorUr && elementRenderer._colorUl === elementRenderer._colorBl && elementRenderer._colorUl === elementRenderer._colorBr) {
            if (elementRenderer._colorUl !== 0xffffffff) {
                element.dhtmlSetAttribute('color', elementRenderer._colorUl.toString(16));
            } else {
                element.dhtmlRemoveAttribute('color');
            }
            element.dhtmlRemoveAttribute('colorul');
            element.dhtmlRemoveAttribute('colorur');
            element.dhtmlRemoveAttribute('colorbl');
            element.dhtmlRemoveAttribute('colorbr');
        } else {
            val(element, 'colorUr', elementRenderer.colorUr.toString(16), "ffffffff");
            val(element, 'colorUl', elementRenderer.colorUl.toString(16), "ffffffff");
            val(element, 'colorBr', elementRenderer.colorBr.toString(16), "ffffffff");
            val(element, 'colorBl', elementRenderer.colorBl.toString(16), "ffffffff");
            element.dhtmlRemoveAttribute('color');
        }
    };

    ElementTexturizer.prototype.__enabled = false;
    Object.defineProperty(ElementTexturizer.prototype, '_enabled', {
        get: function() {
            return this.__enabled;
        },
        set: function(v) {
            if (this.__enabled !== v) {
                val(this, 'renderToTexture', v, false);
                this.__enabled = v;
            }
        }
    });

    ElementTexturizer.prototype.__lazy = false;
    Object.defineProperty(ElementTexturizer.prototype, '_lazy', {
        get: function() {
            return this.__lazy;
        },
        set: function(v) {
            if (this.__lazy !== v) {
                val(this, 'renderToTextureLazy', v, false);
                this.__lazy = v;
            }
        }
    });

    ElementTexturizer.prototype.__colorize = false;
    Object.defineProperty(ElementTexturizer.prototype, '_colorize', {
        get: function() {
            return this.__colorize;
        },
        set: function(v) {
            if (this.__colorize !== v) {
                val(this, 'colorizeResultTexture', v, false);
                this.__colorize = v;
            }
        }
    });

    ElementTexturizer.prototype.__renderOffscreen = false;
    Object.defineProperty(ElementTexturizer.prototype, '_renderOffscreen', {
        get: function() {
            return this.__renderOffscreen;
        },
        set: function(v) {
            if (this.__renderOffscreen !== v) {
                val(this, 'renderOffscreen', v, false);
                this.__renderOffscreen = v;
            }
        }
    });

    ElementCore.prototype.updateDebugTransforms = function() {
        const stage = this._element.stage

        if (this._pivotX !== 0.5 || this._pivotY !== 0.5) {
            this.dhtml().style.transformOrigin = (this._pivotX * 100) + '% '  + (this._pivotY * 100) + '%';
        } else if (this.dhtml().style.transformOrigin) {
            this.dhtml().style.transformOrigin = '50% 50%';
        }

        var r = this._rotation;
        var sx = this._scaleX;
        var sy = this._scaleY;

        if ((sx !== undefined && sy !== undefined) && (this._element.id === 0)) {
            // Root element: must be scaled.
            if (stage.options.w !== stage.options.renderWidth || stage.options.h !== stage.options.renderHeight) {
                sx *= (stage.options.w / stage.options.renderWidth);
                sy *= (stage.options.h / stage.options.renderHeight);
            }
        }
        var parts = [];
        if (r) parts.push('rotate(' + r + 'rad)');
        if ((sx !== undefined && sy !== undefined) && (sx !== 1 || sy !== 1)) parts.push('scale(' + sx + ', ' + sy + ')');

        this.dhtml().style.transform = parts.join(' ');
    };

    var updateTextureAttribs = function(element) {
        if (element.texture) {
            const nonDefaults = element.texture.getNonDefaults()
            const keys = Object.keys(nonDefaults)
            keys.forEach(key => {
                let f = ""
                for (let i = 0, n = key.length; i < n; i++) {
                    const c = key.charAt(i)
                    if (c !== c.toLowerCase()) {
                        f += "_" + c.toLowerCase()
                    } else {
                        f += c
                    }
                }
                valStrict(element, `texture-${f}`, nonDefaults[key], false);
            })
        }
    }

    const _performUpdateSource = Texture.prototype._performUpdateSource
    Texture.prototype._performUpdateSource = function() {
        _performUpdateSource.apply(this, arguments)
        this.elements.forEach(v => {
            updateTextureAttribs(v)
        })
    }

    const _setDisplayedTexture = Element.prototype._setDisplayedTexture
    Element.prototype._setDisplayedTexture = function() {
        _setDisplayedTexture.apply(this, arguments)
        updateTextureAttribs(this)
    }

    const _updateFocus = Application.prototype.__updateFocus
    Application.prototype.__updateFocus = function() {
        const prev = this._focusPath && this._focusPath.length ? this._focusPath[this._focusPath.length - 1] : null;
        _updateFocus.apply(this, arguments)
        const focused = this._focusPath && this._focusPath.length ? this._focusPath[this._focusPath.length - 1] : null;

        if (prev != focused) {
            if (prev) {
                val(prev, 'focused', false, false);
            }
            if (focused) {
                val(focused, 'focused', true, false);
            }
        }
    }
};

if (window.lng) {
    // Automatically attach inspector if lng was already loaded.
    attachInspector(lng);
}


/***/ }),

/***/ "../../../node_modules/@lightningjs/core/dist/lightning.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ lightning)
/* harmony export */ });
/*
 * Lightning v2.11.0
 *
 * https://github.com/rdkcentral/Lightning
 */
class StageUtils {
  static mergeNumbers(v1, v2, p) {
    return v1 * p + v2 * (1 - p);
  }
  static rgb(r, g, b) {
    return (r << 16) + (g << 8) + b + 255 * 16777216;
  }
  static rgba(r, g, b, a) {
    return (r << 16) + (g << 8) + b + (a * 255 | 0) * 16777216;
  }
  static getRgbString(color) {
    let r = (color / 65536 | 0) % 256;
    let g = (color / 256 | 0) % 256;
    let b = color % 256;
    return "rgb(" + r + "," + g + "," + b + ")";
  }
  static getRgbaString(color) {
    let r = (color / 65536 | 0) % 256;
    let g = (color / 256 | 0) % 256;
    let b = color % 256;
    let a = (color / 16777216 | 0) / 255;
    return "rgba(" + r + "," + g + "," + b + "," + a.toFixed(4) + ")";
  }
  static getRgbaStringFromArray(color) {
    let r = Math.floor(color[0] * 255);
    let g = Math.floor(color[1] * 255);
    let b = Math.floor(color[2] * 255);
    let a = Math.floor(color[3] * 255) / 255;
    return "rgba(" + r + "," + g + "," + b + "," + a.toFixed(4) + ")";
  }
  static getRgbaComponentsNormalized(argb) {
    let r = (argb / 65536 | 0) % 256;
    let g = (argb / 256 | 0) % 256;
    let b = argb % 256;
    let a = argb / 16777216 | 0;
    return [r / 255, g / 255, b / 255, a / 255];
  }
  static getRgbComponentsNormalized(argb) {
    let r = (argb / 65536 | 0) % 256;
    let g = (argb / 256 | 0) % 256;
    let b = argb % 256;
    return [r / 255, g / 255, b / 255];
  }
  static getRgbaComponents(argb) {
    let r = (argb / 65536 | 0) % 256;
    let g = (argb / 256 | 0) % 256;
    let b = argb % 256;
    let a = argb / 16777216 | 0;
    return [r, g, b, a];
  }
  static getArgbNumber(rgba) {
    rgba[0] = Math.max(0, Math.min(255, rgba[0]));
    rgba[1] = Math.max(0, Math.min(255, rgba[1]));
    rgba[2] = Math.max(0, Math.min(255, rgba[2]));
    rgba[3] = Math.max(0, Math.min(255, rgba[3]));
    let v = ((rgba[3] | 0) << 24) + ((rgba[0] | 0) << 16) + ((rgba[1] | 0) << 8) + (rgba[2] | 0);
    if (v < 0) {
      v = 4294967295 + v + 1;
    }
    return v;
  }
  static mergeColors(c1, c2, p) {
    let r1 = (c1 / 65536 | 0) % 256;
    let g1 = (c1 / 256 | 0) % 256;
    let b1 = c1 % 256;
    let a1 = c1 / 16777216 | 0;
    let r2 = (c2 / 65536 | 0) % 256;
    let g2 = (c2 / 256 | 0) % 256;
    let b2 = c2 % 256;
    let a2 = c2 / 16777216 | 0;
    let r = r1 * p + r2 * (1 - p);
    let g = g1 * p + g2 * (1 - p);
    let b = b1 * p + b2 * (1 - p);
    let a = a1 * p + a2 * (1 - p);
    return Math.round(a) * 16777216 + Math.round(r) * 65536 + Math.round(g) * 256 + Math.round(b);
  }
  static mergeMultiColors(c, p) {
    let r = 0, g = 0, b = 0, a = 0, t = 0;
    let n = c.length;
    for (let i = 0; i < n; i++) {
      let r1 = (c[i] / 65536 | 0) % 256;
      let g1 = (c[i] / 256 | 0) % 256;
      let b1 = c[i] % 256;
      let a1 = c[i] / 16777216 | 0;
      r += r1 * p[i];
      g += g1 * p[i];
      b += b1 * p[i];
      a += a1 * p[i];
      t += p[i];
    }
    t = 1 / t;
    return Math.round(a * t) * 16777216 + Math.round(r * t) * 65536 + Math.round(g * t) * 256 + Math.round(b * t);
  }
  static mergeMultiColorsEqual(c) {
    let r = 0, g = 0, b = 0, a = 0, t = 0;
    let n = c.length;
    for (let i = 0; i < n; i++) {
      let r1 = (c[i] / 65536 | 0) % 256;
      let g1 = (c[i] / 256 | 0) % 256;
      let b1 = c[i] % 256;
      let a1 = c[i] / 16777216 | 0;
      r += r1;
      g += g1;
      b += b1;
      a += a1;
      t += 1;
    }
    t = 1 / t;
    return Math.round(a * t) * 16777216 + Math.round(r * t) * 65536 + Math.round(g * t) * 256 + Math.round(b * t);
  }
  static mergeColorAlpha(c, alpha) {
    let a = (c / 16777216 | 0) * alpha | 0;
    return ((c >> 16 & 255) * a / 255 & 255) + ((c & 65280) * a / 255 & 65280) + (((c & 255) << 16) * a / 255 & 16711680) + (a << 24);
  }
  static rad(deg) {
    return deg * (Math.PI / 180);
  }
  static getTimingBezier(a, b, c, d) {
    let xc = 3 * a;
    let xb = 3 * (c - a) - xc;
    let xa = 1 - xc - xb;
    let yc = 3 * b;
    let yb = 3 * (d - b) - yc;
    let ya = 1 - yc - yb;
    return function(time) {
      if (time >= 1) {
        return 1;
      }
      if (time <= 0) {
        return 0;
      }
      let t = 0.5, cbx, cbxd, dx;
      for (let it = 0; it < 20; it++) {
        cbx = t * (t * (t * xa + xb) + xc);
        dx = time - cbx;
        if (dx > -1e-8 && dx < 1e-8) {
          return t * (t * (t * ya + yb) + yc);
        }
        cbxd = t * (t * (3 * xa) + 2 * xb) + xc;
        if (cbxd > 1e-10 && cbxd < 1e-10) {
          break;
        }
        t += dx / cbxd;
      }
      let minT = 0;
      let maxT = 1;
      for (let it = 0; it < 20; it++) {
        t = 0.5 * (minT + maxT);
        cbx = t * (t * (t * xa + xb) + xc);
        dx = time - cbx;
        if (dx > -1e-8 && dx < 1e-8) {
          return t * (t * (t * ya + yb) + yc);
        }
        if (dx < 0) {
          maxT = t;
        } else {
          minT = t;
        }
      }
    };
  }
  static getTimingFunction(str) {
    switch (str) {
      case "linear":
        return function(time) {
          return time;
        };
      case "ease":
        return StageUtils.getTimingBezier(0.25, 0.1, 0.25, 1);
      case "ease-in":
        return StageUtils.getTimingBezier(0.42, 0, 1, 1);
      case "ease-out":
        return StageUtils.getTimingBezier(0, 0, 0.58, 1);
      case "ease-in-out":
        return StageUtils.getTimingBezier(0.42, 0, 0.58, 1);
      case "step-start":
        return function() {
          return 1;
        };
      case "step-end":
        return function(time) {
          return time === 1 ? 1 : 0;
        };
      default:
        let s = "cubic-bezier(";
        if (str && str.indexOf(s) === 0) {
          let parts = str.substr(s.length, str.length - s.length - 1).split(",");
          if (parts.length !== 4) {
            console.warn("[Lightning] Unknown timing function: " + str);
            return function(time) {
              return time;
            };
          }
          let a = parseFloat(parts[0]);
          let b = parseFloat(parts[1]);
          let c = parseFloat(parts[2]);
          let d = parseFloat(parts[3]);
          if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
            console.warn("[Lightning] Unknown timing function: " + str);
            return function(time) {
              return time;
            };
          }
          return StageUtils.getTimingBezier(a, b, c, d);
        } else {
          console.warn("[Lightning] Unknown timing function: " + str);
          return function(time) {
            return time;
          };
        }
    }
  }
}
let Utils$1 = class Utils {
  static isFunction(value) {
    return typeof value === "function";
  }
  static isNumber(value) {
    return typeof value === "number";
  }
  static isInteger(value) {
    return typeof value === "number" && value % 1 === 0;
  }
  static isBoolean(value) {
    return value === true || value === false;
  }
  static isString(value) {
    return typeof value === "string";
  }
  static clone(v) {
    if (Utils$1.isObjectLiteral(v) || Array.isArray(v)) {
      return Utils$1.getDeepClone(v);
    } else {
      return v;
    }
  }
  static cloneObjShallow(obj) {
    let keys = Object.keys(obj);
    let clone = {};
    for (let i = 0; i < keys.length; i++) {
      clone[keys[i]] = obj[keys[i]];
    }
    return clone;
  }
  static merge(obj1, obj2) {
    let keys = Object.keys(obj2);
    for (let i = 0; i < keys.length; i++) {
      obj1[keys[i]] = obj2[keys[i]];
    }
    return obj1;
  }
  static isObject(value) {
    let type = typeof value;
    return !!value && (type === "object" || type === "function");
  }
  static isPlainObject(value) {
    let type = typeof value;
    return !!value && type === "object";
  }
  static isObjectLiteral(value) {
    return typeof value === "object" && value && value.constructor === Object;
  }
  static getArrayIndex(index, arr) {
    return Utils$1.getModuloIndex(index, arr.length);
  }
  static getModuloIndex(index, len) {
    if (len === 0)
      return index;
    while (index < 0) {
      index += Math.ceil(-index / len) * len;
    }
    index = index % len;
    return index;
  }
  static getDeepClone(obj) {
    let i, c;
    if (Utils$1.isFunction(obj)) {
      return obj;
    }
    if (Array.isArray(obj)) {
      c = [];
      let keys = Object.keys(obj);
      for (i = 0; i < keys.length; i++) {
        c[keys[i]] = Utils$1.getDeepClone(obj[keys[i]]);
      }
      return c;
    } else if (Utils$1.isObject(obj)) {
      c = {};
      let keys = Object.keys(obj);
      for (i = 0; i < keys.length; i++) {
        c[keys[i]] = Utils$1.getDeepClone(obj[keys[i]]);
      }
      return c;
    } else {
      return obj;
    }
  }
  static equalValues(v1, v2) {
    if (typeof v1 !== typeof v2)
      return false;
    if (Utils$1.isObjectLiteral(v1)) {
      return Utils$1.isObjectLiteral(v2) && Utils$1.equalObjectLiterals(v1, v2);
    } else if (Array.isArray(v1)) {
      return Array.isArray(v2) && Utils$1.equalArrays(v1, v2);
    } else {
      return v1 === v2;
    }
  }
  static equalObjectLiterals(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let i = 0, n = keys1.length; i < n; i++) {
      const k1 = keys1[i];
      const k2 = keys2[i];
      if (k1 !== k2) {
        return false;
      }
      const v1 = obj1[k1];
      const v2 = obj2[k2];
      if (!Utils$1.equalValues(v1, v2)) {
        return false;
      }
    }
    return true;
  }
  static equalArrays(v1, v2) {
    if (v1.length !== v2.length) {
      return false;
    }
    for (let i = 0, n = v1.length; i < n; i++) {
      if (!this.equalValues(v1[i], v2[i])) {
        return false;
      }
    }
    return true;
  }
  static setToArray(s) {
    let result = [];
    s.forEach(function(value) {
      result.push(value);
    });
    return result;
  }
  static iteratorToArray(iterator) {
    let result = [];
    let iteratorResult = iterator.next();
    while (!iteratorResult.done) {
      result.push(iteratorResult.value);
      iteratorResult = iterator.next();
    }
    return result;
  }
  static isUcChar(charcode) {
    return charcode >= 65 && charcode <= 90;
  }
};
Utils$1.isWeb = typeof window !== "undefined" && typeof sparkscene === "undefined";
Utils$1.isWPE = Utils$1.isWeb && navigator.userAgent.indexOf("WPE") !== -1;
Utils$1.isSpark = typeof sparkscene !== "undefined";
Utils$1.isNode = typeof window === "undefined" || Utils$1.isSpark;
Utils$1.isPS4 = Utils$1.isWeb && navigator.userAgent.indexOf("PlayStation 4") !== -1;
Utils$1.isZiggo = Utils$1.isWeb && (navigator.userAgent.indexOf("EOSSTB") !== -1 || navigator.userAgent.indexOf("HZNSTB") !== -1);
class Base {
  static defaultSetter(obj, name, value) {
    obj[name] = value;
  }
  static patchObject(obj, settings) {
    if (!Utils$1.isObjectLiteral(settings)) {
      console.error("[Lightning] Settings must be object literal");
    } else {
      let names = Object.keys(settings);
      for (let i = 0, n = names.length; i < n; i++) {
        let name = names[i];
        this.patchObjectProperty(obj, name, settings[name]);
      }
    }
  }
  static patchObjectProperty(obj, name, value) {
    let setter = obj.setSetting || Base.defaultSetter;
    if (name.charAt(0) === "_") {
      if (name !== "__create") {
        console.error("[Lightning] Patch of private property '" + name + "' is not allowed");
      }
    } else if (name !== "type") {
      if (Utils$1.isFunction(value) && value.__local) {
        value = value.__local(obj);
      }
      setter(obj, name, value);
    }
  }
  static local(func) {
    func.__local = true;
  }
}
class SpacingCalculator {
  static getSpacing(mode, numberOfItems, remainingSpace) {
    const itemGaps = numberOfItems - 1;
    let spacePerGap;
    let spacingBefore, spacingBetween;
    switch (mode) {
      case "flex-start":
        spacingBefore = 0;
        spacingBetween = 0;
        break;
      case "flex-end":
        spacingBefore = remainingSpace;
        spacingBetween = 0;
        break;
      case "center":
        spacingBefore = remainingSpace / 2;
        spacingBetween = 0;
        break;
      case "space-between":
        spacingBefore = 0;
        spacingBetween = Math.max(0, remainingSpace) / itemGaps;
        break;
      case "space-around":
        if (remainingSpace < 0) {
          return this.getSpacing("center", numberOfItems, remainingSpace);
        } else {
          spacePerGap = remainingSpace / (itemGaps + 1);
          spacingBefore = 0.5 * spacePerGap;
          spacingBetween = spacePerGap;
        }
        break;
      case "space-evenly":
        if (remainingSpace < 0) {
          return this.getSpacing("center", numberOfItems, remainingSpace);
        } else {
          spacePerGap = remainingSpace / (itemGaps + 2);
          spacingBefore = spacePerGap;
          spacingBetween = spacePerGap;
        }
        break;
      case "stretch":
        spacingBefore = 0;
        spacingBetween = 0;
        break;
      default:
        throw new Error("Unknown mode: " + mode);
    }
    return { spacingBefore, spacingBetween };
  }
}
class ContentAligner {
  constructor(layout) {
    this._layout = layout;
    this._totalCrossAxisSize = 0;
  }
  get _lines() {
    return this._layout._lines;
  }
  init() {
    this._totalCrossAxisSize = this._getTotalCrossAxisSize();
  }
  align() {
    const crossAxisSize = this._layout.crossAxisSize;
    const remainingSpace = crossAxisSize - this._totalCrossAxisSize;
    const { spacingBefore, spacingBetween } = this._getSpacing(remainingSpace);
    const lines = this._lines;
    const mode = this._layout._flexContainer.alignContent;
    let growSize = 0;
    if (mode === "stretch" && lines.length && remainingSpace > 0) {
      growSize = remainingSpace / lines.length;
    }
    let currentPos = spacingBefore;
    for (let i = 0, n = lines.length; i < n; i++) {
      const crossAxisLayoutOffset = currentPos;
      const aligner = lines[i].createItemAligner();
      let finalCrossAxisLayoutSize = lines[i].crossAxisLayoutSize + growSize;
      aligner.setCrossAxisLayoutSize(finalCrossAxisLayoutSize);
      aligner.setCrossAxisLayoutOffset(crossAxisLayoutOffset);
      aligner.align();
      if (aligner.recursiveResizeOccured) {
        lines[i].setItemPositions();
      }
      currentPos += finalCrossAxisLayoutSize;
      currentPos += spacingBetween;
    }
  }
  get totalCrossAxisSize() {
    return this._totalCrossAxisSize;
  }
  _getTotalCrossAxisSize() {
    const lines = this._lines;
    let total = 0;
    for (let i = 0, n = lines.length; i < n; i++) {
      const line = lines[i];
      total += line.crossAxisLayoutSize;
    }
    return total;
  }
  _getSpacing(remainingSpace) {
    const mode = this._layout._flexContainer.alignContent;
    const numberOfItems = this._lines.length;
    return SpacingCalculator.getSpacing(mode, numberOfItems, remainingSpace);
  }
}
class FlexUtils {
  static getParentAxisSizeWithPadding(item, horizontal) {
    const target = item.target;
    const parent = target.getParent();
    if (!parent) {
      return 0;
    } else {
      const flexParent = item.flexParent;
      if (flexParent) {
        return this.getAxisLayoutSize(flexParent, horizontal) + this.getTotalPadding(flexParent, horizontal);
      } else {
        return horizontal ? parent.w : parent.h;
      }
    }
  }
  static getRelAxisSize(item, horizontal) {
    if (horizontal) {
      if (item.funcW) {
        if (this._allowRelAxisSizeFunction(item, true)) {
          return item.funcW(this.getParentAxisSizeWithPadding(item, true));
        } else {
          return 0;
        }
      } else {
        return item.originalWidth;
      }
    } else {
      if (item.funcH) {
        if (this._allowRelAxisSizeFunction(item, false)) {
          return item.funcH(this.getParentAxisSizeWithPadding(item, false));
        } else {
          return 0;
        }
      } else {
        return item.originalHeight;
      }
    }
  }
  static _allowRelAxisSizeFunction(item, horizontal) {
    const flexParent = item.flexParent;
    if (flexParent && flexParent._flex._layout.isAxisFitToContents(horizontal)) {
      return false;
    }
    return true;
  }
  static isZeroAxisSize(item, horizontal) {
    if (horizontal) {
      return !item.originalWidth && !item.funcW;
    } else {
      return !item.originalHeight && !item.funcH;
    }
  }
  static getAxisLayoutPos(item, horizontal) {
    return horizontal ? item.x : item.y;
  }
  static getAxisLayoutSize(item, horizontal) {
    return horizontal ? item.w : item.h;
  }
  static setAxisLayoutPos(item, horizontal, pos) {
    if (horizontal) {
      item.x = pos;
    } else {
      item.y = pos;
    }
  }
  static setAxisLayoutSize(item, horizontal, size) {
    if (horizontal) {
      item.w = size;
    } else {
      item.h = size;
    }
  }
  static getAxisMinSize(item, horizontal) {
    let minSize = this.getPlainAxisMinSize(item, horizontal);
    let flexItemMinSize = 0;
    if (item.isFlexItemEnabled()) {
      flexItemMinSize = item._flexItem._getMinSizeSetting(horizontal);
    }
    const hasLimitedMinSize = flexItemMinSize > 0;
    if (hasLimitedMinSize) {
      minSize = Math.max(minSize, flexItemMinSize);
    }
    return minSize;
  }
  static getPlainAxisMinSize(item, horizontal) {
    if (item.isFlexEnabled()) {
      return item._flex._layout.getAxisMinSize(horizontal);
    } else {
      const isShrinkable = item.flexItem.shrink !== 0;
      if (isShrinkable) {
        return 0;
      } else {
        return this.getRelAxisSize(item, horizontal);
      }
    }
  }
  static resizeAxis(item, horizontal, size) {
    if (item.isFlexEnabled()) {
      const isMainAxis = item._flex._horizontal === horizontal;
      if (isMainAxis) {
        item._flex._layout.resizeMainAxis(size);
      } else {
        item._flex._layout.resizeCrossAxis(size);
      }
    } else {
      this.setAxisLayoutSize(item, horizontal, size);
    }
  }
  static getPaddingOffset(item, horizontal) {
    if (item.isFlexEnabled()) {
      const flex = item._flex;
      if (horizontal) {
        return flex.paddingLeft;
      } else {
        return flex.paddingTop;
      }
    } else {
      return 0;
    }
  }
  static getTotalPadding(item, horizontal) {
    if (item.isFlexEnabled()) {
      const flex = item._flex;
      if (horizontal) {
        return flex.paddingRight + flex.paddingLeft;
      } else {
        return flex.paddingTop + flex.paddingBottom;
      }
    } else {
      return 0;
    }
  }
  static getMarginOffset(item, horizontal) {
    const flexItem = item.flexItem;
    if (flexItem) {
      if (horizontal) {
        return flexItem.marginLeft;
      } else {
        return flexItem.marginTop;
      }
    } else {
      return 0;
    }
  }
  static getTotalMargin(item, horizontal) {
    const flexItem = item.flexItem;
    if (flexItem) {
      if (horizontal) {
        return flexItem.marginRight + flexItem.marginLeft;
      } else {
        return flexItem.marginTop + flexItem.marginBottom;
      }
    } else {
      return 0;
    }
  }
}
class SizeShrinker {
  constructor(line) {
    this._line = line;
    this._amountRemaining = 0;
    this._shrunkSize = 0;
  }
  shrink(amount) {
    this._shrunkSize = 0;
    this._amountRemaining = amount;
    let totalShrinkAmount = this._getTotalShrinkAmount();
    if (totalShrinkAmount) {
      const items = this._line.items;
      do {
        let amountPerShrink = this._amountRemaining / totalShrinkAmount;
        for (let i = this._line.startIndex; i <= this._line.endIndex; i++) {
          const item = items[i];
          const flexItem = item.flexItem;
          const shrinkAmount = flexItem.shrink;
          const isShrinkableItem = shrinkAmount > 0;
          if (isShrinkableItem) {
            let shrink = shrinkAmount * amountPerShrink;
            const minSize = flexItem._getMainAxisMinSize();
            const size = flexItem._getMainAxisLayoutSize();
            if (size > minSize) {
              const maxShrink = size - minSize;
              const isFullyShrunk = shrink >= maxShrink;
              if (isFullyShrunk) {
                shrink = maxShrink;
                totalShrinkAmount -= shrinkAmount;
              }
              const finalSize = size - shrink;
              flexItem._resizeMainAxis(finalSize);
              this._shrunkSize += shrink;
              this._amountRemaining -= shrink;
              if (Math.abs(this._amountRemaining) < 1e-5) {
                return;
              }
            }
          }
        }
      } while (totalShrinkAmount && Math.abs(this._amountRemaining) > 1e-5);
    }
  }
  _getTotalShrinkAmount() {
    let total = 0;
    const items = this._line.items;
    for (let i = this._line.startIndex; i <= this._line.endIndex; i++) {
      const item = items[i];
      const flexItem = item.flexItem;
      if (flexItem.shrink) {
        const minSize = flexItem._getMainAxisMinSize();
        const size = flexItem._getMainAxisLayoutSize();
        if (size > minSize) {
          total += flexItem.shrink;
        }
      }
    }
    return total;
  }
  getShrunkSize() {
    return this._shrunkSize;
  }
}
class SizeGrower {
  constructor(line) {
    this._line = line;
    this._amountRemaining = 0;
    this._grownSize = 0;
  }
  grow(amount) {
    this._grownSize = 0;
    this._amountRemaining = amount;
    let totalGrowAmount = this._getTotalGrowAmount();
    if (totalGrowAmount) {
      const items = this._line.items;
      do {
        let amountPerGrow = this._amountRemaining / totalGrowAmount;
        for (let i = this._line.startIndex; i <= this._line.endIndex; i++) {
          const item = items[i];
          const flexItem = item.flexItem;
          const growAmount = flexItem.grow;
          const isGrowableItem = growAmount > 0;
          if (isGrowableItem) {
            let grow = growAmount * amountPerGrow;
            const maxSize = flexItem._getMainAxisMaxSizeSetting();
            const size = flexItem._getMainAxisLayoutSize();
            if (maxSize > 0) {
              if (size >= maxSize) {
                grow = 0;
              } else {
                const maxGrow = maxSize - size;
                const isFullyGrown = grow >= maxGrow;
                if (isFullyGrown) {
                  grow = maxGrow;
                  totalGrowAmount -= growAmount;
                }
              }
            }
            if (grow > 0) {
              const finalSize = size + grow;
              flexItem._resizeMainAxis(finalSize);
              this._grownSize += grow;
              this._amountRemaining -= grow;
              if (Math.abs(this._amountRemaining) < 1e-5) {
                return;
              }
            }
          }
        }
      } while (totalGrowAmount && Math.abs(this._amountRemaining) > 1e-5);
    }
  }
  _getTotalGrowAmount() {
    let total = 0;
    const items = this._line.items;
    for (let i = this._line.startIndex; i <= this._line.endIndex; i++) {
      const item = items[i];
      const flexItem = item.flexItem;
      if (flexItem.grow) {
        const maxSize = flexItem._getMainAxisMaxSizeSetting();
        const size = flexItem._getMainAxisLayoutSize();
        if (maxSize === 0 || size < maxSize) {
          total += flexItem.grow;
        }
      }
    }
    return total;
  }
  getGrownSize() {
    return this._grownSize;
  }
}
class ItemPositioner {
  constructor(lineLayout) {
    this._line = lineLayout;
  }
  get _layout() {
    return this._line._layout;
  }
  position() {
    const { spacingBefore, spacingBetween } = this._getSpacing();
    let currentPos = spacingBefore;
    const items = this._line.items;
    for (let i = this._line.startIndex; i <= this._line.endIndex; i++) {
      const item = items[i];
      item.flexItem._setMainAxisLayoutPos(currentPos);
      currentPos += item.flexItem._getMainAxisLayoutSizeWithPaddingAndMargin();
      currentPos += spacingBetween;
    }
  }
  _getSpacing() {
    const remainingSpace = this._line._availableSpace;
    let mode = this._layout._flexContainer.justifyContent;
    const numberOfItems = this._line.numberOfItems;
    return SpacingCalculator.getSpacing(mode, numberOfItems, remainingSpace);
  }
}
class ItemAligner {
  constructor(line) {
    this._line = line;
    this._crossAxisLayoutSize = 0;
    this._crossAxisLayoutOffset = 0;
    this._alignItemsSetting = null;
    this._recursiveResizeOccured = false;
    this._isCrossAxisFitToContents = false;
  }
  get _layout() {
    return this._line._layout;
  }
  get _flexContainer() {
    return this._layout._flexContainer;
  }
  setCrossAxisLayoutSize(size) {
    this._crossAxisLayoutSize = size;
  }
  setCrossAxisLayoutOffset(offset) {
    this._crossAxisLayoutOffset = offset;
  }
  align() {
    this._alignItemsSetting = this._flexContainer.alignItems;
    this._isCrossAxisFitToContents = this._layout.isAxisFitToContents(!this._flexContainer._horizontal);
    this._recursiveResizeOccured = false;
    const items = this._line.items;
    for (let i = this._line.startIndex; i <= this._line.endIndex; i++) {
      const item = items[i];
      this._alignItem(item);
    }
  }
  get recursiveResizeOccured() {
    return this._recursiveResizeOccured;
  }
  _alignItem(item) {
    const flexItem = item.flexItem;
    let align = flexItem.alignSelf || this._alignItemsSetting;
    if (align === "stretch" && this._preventStretch(flexItem)) {
      align = "flex-start";
    }
    if (align !== "stretch" && !this._isCrossAxisFitToContents) {
      if (flexItem._hasRelCrossAxisSize()) {
        flexItem._resetCrossAxisLayoutSize();
      }
    }
    switch (align) {
      case "flex-start":
        this._alignItemFlexStart(flexItem);
        break;
      case "flex-end":
        this._alignItemFlexEnd(flexItem);
        break;
      case "center":
        this._alignItemFlexCenter(flexItem);
        break;
      case "stretch":
        this._alignItemStretch(flexItem);
        break;
    }
  }
  _alignItemFlexStart(flexItem) {
    flexItem._setCrossAxisLayoutPos(this._crossAxisLayoutOffset);
  }
  _alignItemFlexEnd(flexItem) {
    const itemCrossAxisSize = flexItem._getCrossAxisLayoutSizeWithPaddingAndMargin();
    flexItem._setCrossAxisLayoutPos(this._crossAxisLayoutOffset + (this._crossAxisLayoutSize - itemCrossAxisSize));
  }
  _alignItemFlexCenter(flexItem) {
    const itemCrossAxisSize = flexItem._getCrossAxisLayoutSizeWithPaddingAndMargin();
    const center = (this._crossAxisLayoutSize - itemCrossAxisSize) / 2;
    flexItem._setCrossAxisLayoutPos(this._crossAxisLayoutOffset + center);
  }
  _alignItemStretch(flexItem) {
    flexItem._setCrossAxisLayoutPos(this._crossAxisLayoutOffset);
    const mainAxisLayoutSizeBeforeResize = flexItem._getMainAxisLayoutSize();
    let size = this._crossAxisLayoutSize - flexItem._getCrossAxisMargin() - flexItem._getCrossAxisPadding();
    const crossAxisMinSizeSetting = flexItem._getCrossAxisMinSizeSetting();
    if (crossAxisMinSizeSetting > 0) {
      size = Math.max(size, crossAxisMinSizeSetting);
    }
    const crossAxisMaxSizeSetting = flexItem._getCrossAxisMaxSizeSetting();
    const crossAxisMaxSizeSettingEnabled = crossAxisMaxSizeSetting > 0;
    if (crossAxisMaxSizeSettingEnabled) {
      size = Math.min(size, crossAxisMaxSizeSetting);
    }
    flexItem._resizeCrossAxis(size);
    const mainAxisLayoutSizeAfterResize = flexItem._getMainAxisLayoutSize();
    const recursiveResize = mainAxisLayoutSizeAfterResize !== mainAxisLayoutSizeBeforeResize;
    if (recursiveResize) {
      this._recursiveResizeOccured = true;
    }
  }
  _preventStretch(flexItem) {
    const hasFixedCrossAxisSize = flexItem._hasFixedCrossAxisSize();
    const forceStretch = flexItem.alignSelf === "stretch";
    return hasFixedCrossAxisSize && !forceStretch;
  }
}
class LineLayout {
  constructor(layout, startIndex, endIndex, availableSpace) {
    this._layout = layout;
    this.items = layout.items;
    this.startIndex = startIndex;
    this.endIndex = endIndex;
    this._availableSpace = availableSpace;
  }
  performLayout() {
    this._setItemSizes();
    this.setItemPositions();
    this._calcLayoutInfo();
  }
  _setItemSizes() {
    if (this._availableSpace > 0) {
      this._growItemSizes(this._availableSpace);
    } else if (this._availableSpace < 0) {
      this._shrinkItemSizes(-this._availableSpace);
    }
  }
  _growItemSizes(amount) {
    const grower = new SizeGrower(this);
    grower.grow(amount);
    this._availableSpace -= grower.getGrownSize();
  }
  _shrinkItemSizes(amount) {
    const shrinker = new SizeShrinker(this);
    shrinker.shrink(amount);
    this._availableSpace += shrinker.getShrunkSize();
  }
  setItemPositions() {
    const positioner = new ItemPositioner(this);
    positioner.position();
  }
  createItemAligner() {
    return new ItemAligner(this);
  }
  _calcLayoutInfo() {
    this._calcCrossAxisMaxLayoutSize();
  }
  getMainAxisMinSize() {
    let mainAxisMinSize = 0;
    for (let i = this.startIndex; i <= this.endIndex; i++) {
      const item = this.items[i];
      mainAxisMinSize += item.flexItem._getMainAxisMinSizeWithPaddingAndMargin();
    }
    return mainAxisMinSize;
  }
  get numberOfItems() {
    return this.endIndex - this.startIndex + 1;
  }
  get crossAxisLayoutSize() {
    const noSpecifiedCrossAxisSize = this._layout.isCrossAxisFitToContents() && !this._layout.resizingCrossAxis;
    const shouldFitToContents = this._layout.isWrapping() || noSpecifiedCrossAxisSize;
    if (shouldFitToContents) {
      return this._crossAxisMaxLayoutSize;
    } else {
      return this._layout.crossAxisSize;
    }
  }
  _calcCrossAxisMaxLayoutSize() {
    this._crossAxisMaxLayoutSize = this._getCrossAxisMaxLayoutSize();
  }
  _getCrossAxisMaxLayoutSize() {
    let crossAxisMaxSize = 0;
    for (let i = this.startIndex; i <= this.endIndex; i++) {
      const item = this.items[i];
      crossAxisMaxSize = Math.max(crossAxisMaxSize, item.flexItem._getCrossAxisLayoutSizeWithPaddingAndMargin());
    }
    return crossAxisMaxSize;
  }
}
class LineLayouter {
  constructor(layout) {
    this._layout = layout;
    this._mainAxisMinSize = -1;
    this._crossAxisMinSize = -1;
    this._mainAxisContentSize = 0;
  }
  get lines() {
    return this._lines;
  }
  get mainAxisMinSize() {
    if (this._mainAxisMinSize === -1) {
      this._mainAxisMinSize = this._getMainAxisMinSize();
    }
    return this._mainAxisMinSize;
  }
  get crossAxisMinSize() {
    if (this._crossAxisMinSize === -1) {
      this._crossAxisMinSize = this._getCrossAxisMinSize();
    }
    return this._crossAxisMinSize;
  }
  get mainAxisContentSize() {
    return this._mainAxisContentSize;
  }
  layoutLines() {
    this._setup();
    const items = this._layout.items;
    const wrap = this._layout.isWrapping();
    let startIndex = 0;
    let i;
    const n = items.length;
    for (i = 0; i < n; i++) {
      const item = items[i];
      this._layoutFlexItem(item);
      const itemMainAxisSize = item.flexItem._getMainAxisLayoutSizeWithPaddingAndMargin();
      if (wrap && i > startIndex) {
        const isOverflowing = this._curMainAxisPos + itemMainAxisSize > this._mainAxisSize;
        if (isOverflowing) {
          this._layoutLine(startIndex, i - 1);
          this._curMainAxisPos = 0;
          startIndex = i;
        }
      }
      this._addToMainAxisPos(itemMainAxisSize);
    }
    if (startIndex < i) {
      this._layoutLine(startIndex, i - 1);
    }
  }
  _layoutFlexItem(item) {
    if (item.isFlexEnabled()) {
      item.flexLayout.updateTreeLayout();
    } else {
      item.flexItem._resetLayoutSize();
    }
  }
  _setup() {
    this._mainAxisSize = this._layout.mainAxisSize;
    this._curMainAxisPos = 0;
    this._maxMainAxisPos = 0;
    this._lines = [];
    this._mainAxisMinSize = -1;
    this._crossAxisMinSize = -1;
    this._mainAxisContentSize = 0;
  }
  _addToMainAxisPos(itemMainAxisSize) {
    this._curMainAxisPos += itemMainAxisSize;
    if (this._curMainAxisPos > this._maxMainAxisPos) {
      this._maxMainAxisPos = this._curMainAxisPos;
    }
  }
  _layoutLine(startIndex, endIndex) {
    const availableSpace = this._getAvailableMainAxisLayoutSpace();
    const line = new LineLayout(this._layout, startIndex, endIndex, availableSpace);
    line.performLayout();
    this._lines.push(line);
    if (this._mainAxisContentSize === 0 || this._curMainAxisPos > this._mainAxisContentSize) {
      this._mainAxisContentSize = this._curMainAxisPos;
    }
  }
  _getAvailableMainAxisLayoutSpace() {
    if (!this._layout.resizingMainAxis && this._layout.isMainAxisFitToContents()) {
      return 0;
    } else {
      return this._mainAxisSize - this._curMainAxisPos;
    }
  }
  _getCrossAxisMinSize() {
    let crossAxisMinSize = 0;
    const items = this._layout.items;
    for (let i = 0, n = items.length; i < n; i++) {
      const item = items[i];
      const itemCrossAxisMinSize = item.flexItem._getCrossAxisMinSizeWithPaddingAndMargin();
      crossAxisMinSize = Math.max(crossAxisMinSize, itemCrossAxisMinSize);
    }
    return crossAxisMinSize;
  }
  _getMainAxisMinSize() {
    if (this._lines.length === 1) {
      return this._lines[0].getMainAxisMinSize();
    } else {
      return this._layout.mainAxisSize;
    }
  }
}
class ItemCoordinatesUpdater {
  constructor(layout) {
    this._layout = layout;
    this._isReverse = this._flexContainer._reverse;
    this._horizontalPaddingOffset = this._layout._getHorizontalPaddingOffset();
    this._verticalPaddingOffset = this._layout._getVerticalPaddingOffset();
  }
  get _flexContainer() {
    return this._layout._flexContainer;
  }
  finalize() {
    const parentFlex = this._layout.getParentFlexContainer();
    if (parentFlex) {
      const updater = new ItemCoordinatesUpdater(parentFlex._layout);
      updater._finalizeItemAndChildren(this._flexContainer.item);
    } else {
      this._finalizeRoot();
      this._finalizeItems();
    }
  }
  _finalizeRoot() {
    const item = this._flexContainer.item;
    let x = FlexUtils.getAxisLayoutPos(item, true);
    let y = FlexUtils.getAxisLayoutPos(item, false);
    let w = FlexUtils.getAxisLayoutSize(item, true);
    let h = FlexUtils.getAxisLayoutSize(item, false);
    w += this._layout._getHorizontalPadding();
    h += this._layout._getVerticalPadding();
    item.clearRecalcFlag();
    item.setLayout(x, y, w, h);
  }
  _finalizeItems() {
    const items = this._layout.items;
    for (let i = 0, n = items.length; i < n; i++) {
      const item = items[i];
      const validCache = this._validateItemCache(item);
      this._finalizeItem(item);
      if (!validCache) {
        this._finalizeItemChildren(item);
      }
    }
  }
  _validateItemCache(item) {
    if (item.recalc === 0) {
      if (item.isFlexEnabled()) {
        const layout = item._flex._layout;
        const dimensionsMatchPreviousResult = item.w === item.target.w && item.h === item.target.h;
        if (dimensionsMatchPreviousResult) {
          return true;
        } else {
          const crossAxisSize = layout.crossAxisSize;
          layout.performResizeMainAxis(layout.mainAxisSize);
          layout.performResizeCrossAxis(crossAxisSize);
        }
      }
    }
    return false;
  }
  _finalizeItemAndChildren(item) {
    this._finalizeItem(item);
    this._finalizeItemChildren(item);
  }
  _finalizeItem(item) {
    if (this._isReverse) {
      this._reverseMainAxisLayoutPos(item);
    }
    let x = FlexUtils.getAxisLayoutPos(item, true);
    let y = FlexUtils.getAxisLayoutPos(item, false);
    let w = FlexUtils.getAxisLayoutSize(item, true);
    let h = FlexUtils.getAxisLayoutSize(item, false);
    x += this._horizontalPaddingOffset;
    y += this._verticalPaddingOffset;
    const flex = item.flex;
    if (flex) {
      w += item._flex._layout._getHorizontalPadding();
      h += item._flex._layout._getVerticalPadding();
    }
    const flexItem = item.flexItem;
    if (flexItem) {
      x += flexItem._getHorizontalMarginOffset();
      y += flexItem._getVerticalMarginOffset();
    }
    item.clearRecalcFlag();
    item.setLayout(x, y, w, h);
  }
  _finalizeItemChildren(item) {
    const flex = item._flex;
    if (flex) {
      const updater = new ItemCoordinatesUpdater(flex._layout);
      updater._finalizeItems();
    }
  }
  _reverseMainAxisLayoutPos(item) {
    const endPos = item.flexItem._getMainAxisLayoutPos() + item.flexItem._getMainAxisLayoutSizeWithPaddingAndMargin();
    const reversedPos = this._layout.mainAxisSize - endPos;
    item.flexItem._setMainAxisLayoutPos(reversedPos);
  }
}
class FlexLayout {
  constructor(flexContainer) {
    this._flexContainer = flexContainer;
    this._lineLayouter = new LineLayouter(this);
    this._resizingMainAxis = false;
    this._resizingCrossAxis = false;
    this._cachedMainAxisSizeAfterLayout = 0;
    this._cachedCrossAxisSizeAfterLayout = 0;
    this._shrunk = false;
  }
  get shrunk() {
    return this._shrunk;
  }
  get recalc() {
    return this.item.recalc;
  }
  layoutTree() {
    const isSubTree = this.item.flexParent !== null;
    if (isSubTree) {
      this._updateSubTreeLayout();
    } else {
      this.updateTreeLayout();
    }
    this.updateItemCoords();
  }
  updateTreeLayout() {
    if (this.recalc) {
      this._performUpdateLayoutTree();
    } else {
      this._performUpdateLayoutTreeFromCache();
    }
  }
  _performUpdateLayoutTree() {
    this._setInitialAxisSizes();
    this._layoutAxes();
    this._refreshLayoutCache();
  }
  _refreshLayoutCache() {
    this._cachedMainAxisSizeAfterLayout = this.mainAxisSize;
    this._cachedCrossAxisSizeAfterLayout = this.crossAxisSize;
  }
  _performUpdateLayoutTreeFromCache() {
    const sizeMightHaveChanged = this.item.funcW || this.item.funcH;
    if (sizeMightHaveChanged) {
      this.item.enableLocalRecalcFlag();
      this._performUpdateLayoutTree();
    } else {
      this.mainAxisSize = this._cachedMainAxisSizeAfterLayout;
      this.crossAxisSize = this._cachedCrossAxisSizeAfterLayout;
    }
  }
  updateItemCoords() {
    const updater = new ItemCoordinatesUpdater(this);
    updater.finalize();
  }
  _updateSubTreeLayout() {
    const crossAxisSize = this.crossAxisSize;
    this._layoutMainAxis();
    this.performResizeCrossAxis(crossAxisSize);
  }
  _setInitialAxisSizes() {
    if (this.item.isFlexItemEnabled()) {
      this.item.flexItem._resetLayoutSize();
    } else {
      this.mainAxisSize = this._getMainAxisBasis();
      this.crossAxisSize = this._getCrossAxisBasis();
    }
    this._resizingMainAxis = false;
    this._resizingCrossAxis = false;
    this._shrunk = false;
  }
  _layoutAxes() {
    this._layoutMainAxis();
    this._layoutCrossAxis();
  }
  _layoutMainAxis() {
    this._layoutLines();
    this._fitMainAxisSizeToContents();
  }
  _layoutLines() {
    this._lineLayouter.layoutLines();
  }
  get _lines() {
    return this._lineLayouter.lines;
  }
  _fitMainAxisSizeToContents() {
    if (!this._resizingMainAxis) {
      if (this.isMainAxisFitToContents()) {
        this.mainAxisSize = this._lineLayouter.mainAxisContentSize;
      }
    }
  }
  _layoutCrossAxis() {
    const aligner = new ContentAligner(this);
    aligner.init();
    this._totalCrossAxisSize = aligner.totalCrossAxisSize;
    this._fitCrossAxisSizeToContents();
    aligner.align();
  }
  _fitCrossAxisSizeToContents() {
    if (!this._resizingCrossAxis) {
      if (this.isCrossAxisFitToContents()) {
        this.crossAxisSize = this._totalCrossAxisSize;
      }
    }
  }
  isWrapping() {
    return this._flexContainer.wrap;
  }
  isAxisFitToContents(horizontal) {
    if (this._horizontal === horizontal) {
      return this.isMainAxisFitToContents();
    } else {
      return this.isCrossAxisFitToContents();
    }
  }
  isMainAxisFitToContents() {
    return !this.isWrapping() && !this._hasFixedMainAxisBasis();
  }
  isCrossAxisFitToContents() {
    return !this._hasFixedCrossAxisBasis();
  }
  _hasFixedMainAxisBasis() {
    return !FlexUtils.isZeroAxisSize(this.item, this._horizontal);
  }
  _hasFixedCrossAxisBasis() {
    return !FlexUtils.isZeroAxisSize(this.item, !this._horizontal);
  }
  getAxisMinSize(horizontal) {
    if (this._horizontal === horizontal) {
      return this._getMainAxisMinSize();
    } else {
      return this._getCrossAxisMinSize();
    }
  }
  _getMainAxisMinSize() {
    return this._lineLayouter.mainAxisMinSize;
  }
  _getCrossAxisMinSize() {
    return this._lineLayouter.crossAxisMinSize;
  }
  resizeMainAxis(size) {
    if (this.mainAxisSize !== size) {
      if (this.recalc > 0) {
        this.performResizeMainAxis(size);
      } else {
        if (this._checkValidCacheMainAxisResize()) {
          this.mainAxisSize = size;
          this._fitCrossAxisSizeToContents();
        } else {
          this.item.enableLocalRecalcFlag();
          this.performResizeMainAxis(size);
        }
      }
    }
  }
  _checkValidCacheMainAxisResize(size) {
    const isFinalMainAxisSize = size === this.targetMainAxisSize;
    if (isFinalMainAxisSize) {
      return true;
    }
    const canIgnoreCacheMiss = !this.isCrossAxisFitToContents();
    if (canIgnoreCacheMiss) {
      return true;
    }
    return false;
  }
  performResizeMainAxis(size) {
    const isShrinking = size < this.mainAxisSize;
    this._shrunk = isShrinking;
    this.mainAxisSize = size;
    this._resizingMainAxis = true;
    this._layoutAxes();
    this._resizingMainAxis = false;
  }
  resizeCrossAxis(size) {
    if (this.crossAxisSize !== size) {
      if (this.recalc > 0) {
        this.performResizeCrossAxis(size);
      } else {
        this.crossAxisSize = size;
      }
    }
  }
  performResizeCrossAxis(size) {
    this.crossAxisSize = size;
    this._resizingCrossAxis = true;
    this._layoutCrossAxis();
    this._resizingCrossAxis = false;
  }
  get targetMainAxisSize() {
    return this._horizontal ? this.item.target.w : this.item.target.h;
  }
  get targetCrossAxisSize() {
    return this._horizontal ? this.item.target.h : this.item.target.w;
  }
  getParentFlexContainer() {
    return this.item.isFlexItemEnabled() ? this.item.flexItem.ctr : null;
  }
  _getHorizontalPadding() {
    return FlexUtils.getTotalPadding(this.item, true);
  }
  _getVerticalPadding() {
    return FlexUtils.getTotalPadding(this.item, false);
  }
  _getHorizontalPaddingOffset() {
    return FlexUtils.getPaddingOffset(this.item, true);
  }
  _getVerticalPaddingOffset() {
    return FlexUtils.getPaddingOffset(this.item, false);
  }
  _getMainAxisBasis() {
    return FlexUtils.getRelAxisSize(this.item, this._horizontal);
  }
  _getCrossAxisBasis() {
    return FlexUtils.getRelAxisSize(this.item, !this._horizontal);
  }
  get _horizontal() {
    return this._flexContainer._horizontal;
  }
  get _reverse() {
    return this._flexContainer._reverse;
  }
  get item() {
    return this._flexContainer.item;
  }
  get items() {
    return this.item.items;
  }
  get resizingMainAxis() {
    return this._resizingMainAxis;
  }
  get resizingCrossAxis() {
    return this._resizingCrossAxis;
  }
  get numberOfItems() {
    return this.items.length;
  }
  get mainAxisSize() {
    return FlexUtils.getAxisLayoutSize(this.item, this._horizontal);
  }
  get crossAxisSize() {
    return FlexUtils.getAxisLayoutSize(this.item, !this._horizontal);
  }
  set mainAxisSize(v) {
    FlexUtils.setAxisLayoutSize(this.item, this._horizontal, v);
  }
  set crossAxisSize(v) {
    FlexUtils.setAxisLayoutSize(this.item, !this._horizontal, v);
  }
}
class FlexContainer {
  constructor(item) {
    this._item = item;
    this._layout = new FlexLayout(this);
    this._horizontal = true;
    this._reverse = false;
    this._wrap = false;
    this._alignItems = "stretch";
    this._justifyContent = "flex-start";
    this._alignContent = "flex-start";
    this._paddingLeft = 0;
    this._paddingTop = 0;
    this._paddingRight = 0;
    this._paddingBottom = 0;
  }
  get item() {
    return this._item;
  }
  _changedDimensions() {
    this._item.changedDimensions();
  }
  _changedContents() {
    this._item.changedContents();
  }
  get direction() {
    return (this._horizontal ? "row" : "column") + (this._reverse ? "-reverse" : "");
  }
  set direction(f) {
    if (this.direction === f)
      return;
    this._horizontal = f === "row" || f === "row-reverse";
    this._reverse = f === "row-reverse" || f === "column-reverse";
    this._changedContents();
  }
  set wrap(v) {
    this._wrap = v;
    this._changedContents();
  }
  get wrap() {
    return this._wrap;
  }
  get alignItems() {
    return this._alignItems;
  }
  set alignItems(v) {
    if (this._alignItems === v)
      return;
    if (FlexContainer.ALIGN_ITEMS.indexOf(v) === -1) {
      throw new Error("Unknown alignItems, options: " + FlexContainer.ALIGN_ITEMS.join(","));
    }
    this._alignItems = v;
    this._changedContents();
  }
  get alignContent() {
    return this._alignContent;
  }
  set alignContent(v) {
    if (this._alignContent === v)
      return;
    if (FlexContainer.ALIGN_CONTENT.indexOf(v) === -1) {
      throw new Error("Unknown alignContent, options: " + FlexContainer.ALIGN_CONTENT.join(","));
    }
    this._alignContent = v;
    this._changedContents();
  }
  get justifyContent() {
    return this._justifyContent;
  }
  set justifyContent(v) {
    if (this._justifyContent === v)
      return;
    if (FlexContainer.JUSTIFY_CONTENT.indexOf(v) === -1) {
      throw new Error("Unknown justifyContent, options: " + FlexContainer.JUSTIFY_CONTENT.join(","));
    }
    this._justifyContent = v;
    this._changedContents();
  }
  set padding(v) {
    this.paddingLeft = v;
    this.paddingTop = v;
    this.paddingRight = v;
    this.paddingBottom = v;
  }
  get padding() {
    return this.paddingLeft;
  }
  set paddingLeft(v) {
    this._paddingLeft = v;
    this._changedDimensions();
  }
  get paddingLeft() {
    return this._paddingLeft;
  }
  set paddingTop(v) {
    this._paddingTop = v;
    this._changedDimensions();
  }
  get paddingTop() {
    return this._paddingTop;
  }
  set paddingRight(v) {
    this._paddingRight = v;
    this._changedDimensions();
  }
  get paddingRight() {
    return this._paddingRight;
  }
  set paddingBottom(v) {
    this._paddingBottom = v;
    this._changedDimensions();
  }
  get paddingBottom() {
    return this._paddingBottom;
  }
  patch(settings) {
    Base.patchObject(this, settings);
  }
}
FlexContainer.ALIGN_ITEMS = ["flex-start", "flex-end", "center", "stretch"];
FlexContainer.ALIGN_CONTENT = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "stretch"];
FlexContainer.JUSTIFY_CONTENT = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];
class FlexItem {
  constructor(item) {
    this._ctr = null;
    this._item = item;
    this._grow = 0;
    this._shrink = FlexItem.SHRINK_AUTO;
    this._alignSelf = void 0;
    this._minWidth = 0;
    this._minHeight = 0;
    this._maxWidth = 0;
    this._maxHeight = 0;
    this._marginLeft = 0;
    this._marginTop = 0;
    this._marginRight = 0;
    this._marginBottom = 0;
  }
  get item() {
    return this._item;
  }
  get grow() {
    return this._grow;
  }
  set grow(v) {
    if (this._grow === v)
      return;
    this._grow = parseInt(v) || 0;
    this._changed();
  }
  get shrink() {
    if (this._shrink === FlexItem.SHRINK_AUTO) {
      return this._getDefaultShrink();
    }
    return this._shrink;
  }
  _getDefaultShrink() {
    if (this.item.isFlexEnabled()) {
      return 1;
    } else {
      return 0;
    }
  }
  set shrink(v) {
    if (this._shrink === v)
      return;
    this._shrink = parseInt(v) || 0;
    this._changed();
  }
  get alignSelf() {
    return this._alignSelf;
  }
  set alignSelf(v) {
    if (this._alignSelf === v)
      return;
    if (v === void 0) {
      this._alignSelf = void 0;
    } else {
      if (FlexContainer.ALIGN_ITEMS.indexOf(v) === -1) {
        throw new Error("Unknown alignSelf, options: " + FlexContainer.ALIGN_ITEMS.join(","));
      }
      this._alignSelf = v;
    }
    this._changed();
  }
  get minWidth() {
    return this._minWidth;
  }
  set minWidth(v) {
    this._minWidth = Math.max(0, v);
    this._item.changedDimensions(true, false);
  }
  get minHeight() {
    return this._minHeight;
  }
  set minHeight(v) {
    this._minHeight = Math.max(0, v);
    this._item.changedDimensions(false, true);
  }
  get maxWidth() {
    return this._maxWidth;
  }
  set maxWidth(v) {
    this._maxWidth = Math.max(0, v);
    this._item.changedDimensions(true, false);
  }
  get maxHeight() {
    return this._maxHeight;
  }
  set maxHeight(v) {
    this._maxHeight = Math.max(0, v);
    this._item.changedDimensions(false, true);
  }
  set margin(v) {
    this.marginLeft = v;
    this.marginTop = v;
    this.marginRight = v;
    this.marginBottom = v;
  }
  get margin() {
    return this.marginLeft;
  }
  set marginLeft(v) {
    this._marginLeft = v;
    this._changed();
  }
  get marginLeft() {
    return this._marginLeft;
  }
  set marginTop(v) {
    this._marginTop = v;
    this._changed();
  }
  get marginTop() {
    return this._marginTop;
  }
  set marginRight(v) {
    this._marginRight = v;
    this._changed();
  }
  get marginRight() {
    return this._marginRight;
  }
  set marginBottom(v) {
    this._marginBottom = v;
    this._changed();
  }
  get marginBottom() {
    return this._marginBottom;
  }
  _changed() {
    if (this.ctr)
      this.ctr._changedContents();
  }
  set ctr(v) {
    this._ctr = v;
  }
  get ctr() {
    return this._ctr;
  }
  patch(settings) {
    Base.patchObject(this, settings);
  }
  _resetLayoutSize() {
    this._resetHorizontalAxisLayoutSize();
    this._resetVerticalAxisLayoutSize();
  }
  _resetCrossAxisLayoutSize() {
    if (this.ctr._horizontal) {
      this._resetVerticalAxisLayoutSize();
    } else {
      this._resetHorizontalAxisLayoutSize();
    }
  }
  _resetHorizontalAxisLayoutSize() {
    let w = FlexUtils.getRelAxisSize(this.item, true);
    if (this._minWidth) {
      w = Math.max(this._minWidth, w);
    }
    if (this._maxWidth) {
      w = Math.min(this._maxWidth, w);
    }
    FlexUtils.setAxisLayoutSize(this.item, true, w);
  }
  _resetVerticalAxisLayoutSize() {
    let h = FlexUtils.getRelAxisSize(this.item, false);
    if (this._minHeight) {
      h = Math.max(this._minHeight, h);
    }
    if (this._maxHeight) {
      h = Math.min(this._maxHeight, h);
    }
    FlexUtils.setAxisLayoutSize(this.item, false, h);
  }
  _getCrossAxisMinSizeSetting() {
    return this._getMinSizeSetting(!this.ctr._horizontal);
  }
  _getCrossAxisMaxSizeSetting() {
    return this._getMaxSizeSetting(!this.ctr._horizontal);
  }
  _getMainAxisMaxSizeSetting() {
    return this._getMaxSizeSetting(this.ctr._horizontal);
  }
  _getMinSizeSetting(horizontal) {
    if (horizontal) {
      return this._minWidth;
    } else {
      return this._minHeight;
    }
  }
  _getMaxSizeSetting(horizontal) {
    if (horizontal) {
      return this._maxWidth;
    } else {
      return this._maxHeight;
    }
  }
  _getMainAxisMinSize() {
    return FlexUtils.getAxisMinSize(this.item, this.ctr._horizontal);
  }
  _getCrossAxisMinSize() {
    return FlexUtils.getAxisMinSize(this.item, !this.ctr._horizontal);
  }
  _getMainAxisLayoutSize() {
    return FlexUtils.getAxisLayoutSize(this.item, this.ctr._horizontal);
  }
  _getMainAxisLayoutPos() {
    return FlexUtils.getAxisLayoutPos(this.item, this.ctr._horizontal);
  }
  _setMainAxisLayoutPos(pos) {
    return FlexUtils.setAxisLayoutPos(this.item, this.ctr._horizontal, pos);
  }
  _setCrossAxisLayoutPos(pos) {
    return FlexUtils.setAxisLayoutPos(this.item, !this.ctr._horizontal, pos);
  }
  _getCrossAxisLayoutSize() {
    return FlexUtils.getAxisLayoutSize(this.item, !this.ctr._horizontal);
  }
  _resizeCrossAxis(size) {
    return FlexUtils.resizeAxis(this.item, !this.ctr._horizontal, size);
  }
  _resizeMainAxis(size) {
    return FlexUtils.resizeAxis(this.item, this.ctr._horizontal, size);
  }
  _getMainAxisPadding() {
    return FlexUtils.getTotalPadding(this.item, this.ctr._horizontal);
  }
  _getCrossAxisPadding() {
    return FlexUtils.getTotalPadding(this.item, !this.ctr._horizontal);
  }
  _getMainAxisMargin() {
    return FlexUtils.getTotalMargin(this.item, this.ctr._horizontal);
  }
  _getCrossAxisMargin() {
    return FlexUtils.getTotalMargin(this.item, !this.ctr._horizontal);
  }
  _getHorizontalMarginOffset() {
    return FlexUtils.getMarginOffset(this.item, true);
  }
  _getVerticalMarginOffset() {
    return FlexUtils.getMarginOffset(this.item, false);
  }
  _getMainAxisMinSizeWithPaddingAndMargin() {
    return this._getMainAxisMinSize() + this._getMainAxisPadding() + this._getMainAxisMargin();
  }
  _getCrossAxisMinSizeWithPaddingAndMargin() {
    return this._getCrossAxisMinSize() + this._getCrossAxisPadding() + this._getCrossAxisMargin();
  }
  _getMainAxisLayoutSizeWithPaddingAndMargin() {
    return this._getMainAxisLayoutSize() + this._getMainAxisPadding() + this._getMainAxisMargin();
  }
  _getCrossAxisLayoutSizeWithPaddingAndMargin() {
    return this._getCrossAxisLayoutSize() + this._getCrossAxisPadding() + this._getCrossAxisMargin();
  }
  _hasFixedCrossAxisSize() {
    return !FlexUtils.isZeroAxisSize(this.item, !this.ctr._horizontal);
  }
  _hasRelCrossAxisSize() {
    return !!(this.ctr._horizontal ? this.item.funcH : this.item.funcW);
  }
}
FlexItem.SHRINK_AUTO = -1;
class FlexTarget {
  constructor(target) {
    this._target = target;
    this._recalc = 0;
    this._enabled = false;
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this._originalX = 0;
    this._originalY = 0;
    this._originalWidth = 0;
    this._originalHeight = 0;
    this._flex = null;
    this._flexItem = null;
    this._flexItemDisabled = false;
    this._items = null;
  }
  get flexLayout() {
    return this.flex ? this.flex._layout : null;
  }
  layoutFlexTree() {
    if (this.isFlexEnabled() && this.isChanged()) {
      this.flexLayout.layoutTree();
    }
  }
  get target() {
    return this._target;
  }
  get flex() {
    return this._flex;
  }
  set flex(v) {
    if (!v) {
      if (this.isFlexEnabled()) {
        this._disableFlex();
      }
    } else {
      if (!this.isFlexEnabled()) {
        this._enableFlex();
      }
      this._flex.patch(v);
    }
  }
  get flexItem() {
    if (this._flexItemDisabled) {
      return false;
    }
    this._ensureFlexItem();
    return this._flexItem;
  }
  set flexItem(v) {
    if (v === false) {
      if (!this._flexItemDisabled) {
        const parent = this.flexParent;
        this._flexItemDisabled = true;
        this._checkEnabled();
        if (parent) {
          parent._clearFlexItemsCache();
          parent.changedContents();
        }
      }
    } else {
      this._ensureFlexItem();
      this._flexItem.patch(v);
      if (this._flexItemDisabled) {
        this._flexItemDisabled = false;
        this._checkEnabled();
        const parent = this.flexParent;
        if (parent) {
          parent._clearFlexItemsCache();
          parent.changedContents();
        }
      }
    }
  }
  _enableFlex() {
    this._flex = new FlexContainer(this);
    this._checkEnabled();
    this.changedDimensions();
    this._enableChildrenAsFlexItems();
  }
  _disableFlex() {
    this.changedDimensions();
    this._flex = null;
    this._checkEnabled();
    this._disableChildrenAsFlexItems();
  }
  _enableChildrenAsFlexItems() {
    const children = this._target._children;
    if (children) {
      for (let i = 0, n = children.length; i < n; i++) {
        const child = children[i];
        child.layout._enableFlexItem();
      }
    }
  }
  _disableChildrenAsFlexItems() {
    const children = this._target._children;
    if (children) {
      for (let i = 0, n = children.length; i < n; i++) {
        const child = children[i];
        child.layout._disableFlexItem();
      }
    }
  }
  _enableFlexItem() {
    this._ensureFlexItem();
    const flexParent = this._target._parent._layout;
    this._flexItem.ctr = flexParent._flex;
    flexParent.changedContents();
    this._checkEnabled();
  }
  _disableFlexItem() {
    if (this._flexItem) {
      this._flexItem.ctr = null;
    }
    this._checkEnabled();
    this._resetOffsets();
  }
  _resetOffsets() {
    this.x = 0;
    this.y = 0;
  }
  _ensureFlexItem() {
    if (!this._flexItem) {
      this._flexItem = new FlexItem(this);
    }
  }
  _checkEnabled() {
    const enabled = this.isEnabled();
    if (this._enabled !== enabled) {
      if (enabled) {
        this._enable();
      } else {
        this._disable();
      }
      this._enabled = enabled;
    }
  }
  _enable() {
    this._setupTargetForFlex();
    this._target.enableFlexLayout();
  }
  _disable() {
    this._restoreTargetToNonFlex();
    this._target.disableFlexLayout();
  }
  isEnabled() {
    return this.isFlexEnabled() || this.isFlexItemEnabled();
  }
  isFlexEnabled() {
    return this._flex !== null;
  }
  isFlexItemEnabled() {
    return this.flexParent !== null;
  }
  _restoreTargetToNonFlex() {
    const target = this._target;
    target.x = this._originalX;
    target.y = this._originalY;
    target.setDimensions(this._originalWidth, this._originalHeight);
  }
  _setupTargetForFlex() {
    const target = this._target;
    this._originalX = target._x;
    this._originalY = target._y;
    this._originalWidth = target._w;
    this._originalHeight = target._h;
  }
  setParent(from, to) {
    if (from && from.isFlexContainer()) {
      from._layout._changedChildren();
    }
    if (to && to.isFlexContainer()) {
      this._enableFlexItem();
      to._layout._changedChildren();
    }
    this._checkEnabled();
  }
  get flexParent() {
    if (this._flexItemDisabled) {
      return null;
    }
    const parent = this._target._parent;
    if (parent && parent.isFlexContainer()) {
      return parent._layout;
    }
    return null;
  }
  setVisible(v) {
    const parent = this.flexParent;
    if (parent) {
      parent._changedChildren();
    }
  }
  get items() {
    if (!this._items) {
      this._items = this._getFlexItems();
    }
    return this._items;
  }
  _getFlexItems() {
    const items = [];
    const children = this._target._children;
    if (children) {
      for (let i = 0, n = children.length; i < n; i++) {
        const item = children[i];
        if (item.visible) {
          if (item.isFlexItem()) {
            items.push(item.layout);
          }
        }
      }
    }
    return items;
  }
  _changedChildren() {
    this._clearFlexItemsCache();
    this.changedContents();
  }
  _clearFlexItemsCache() {
    this._items = null;
  }
  setLayout(x, y, w, h) {
    let originalX = this._originalX;
    let originalY = this._originalY;
    if (this.funcX) {
      originalX = this.funcX(FlexUtils.getParentAxisSizeWithPadding(this, true));
    }
    if (this.funcY) {
      originalY = this.funcY(FlexUtils.getParentAxisSizeWithPadding(this, false));
    }
    if (this.isFlexItemEnabled()) {
      this.target.setLayout(x + originalX, y + originalY, w, h);
    } else {
      this.target.setLayout(originalX, originalY, w, h);
    }
  }
  changedDimensions(changeWidth = true, changeHeight = true) {
    this._updateRecalc(changeWidth, changeHeight);
  }
  changedContents() {
    this._updateRecalc();
  }
  forceLayout() {
    this._updateRecalc();
  }
  isChanged() {
    return this._recalc > 0;
  }
  _updateRecalc(changeExternalWidth = false, changeExternalHeight = false) {
    if (this.isFlexEnabled()) {
      const layout = this._flex._layout;
      changeExternalWidth = changeExternalWidth || layout.isAxisFitToContents(true);
      changeExternalHeight = changeExternalHeight || layout.isAxisFitToContents(false);
    }
    const recalc = 1 + (changeExternalWidth ? 2 : 0) + (changeExternalHeight ? 4 : 0);
    const newRecalcFlags = this.getNewRecalcFlags(recalc);
    this._recalc |= recalc;
    if (newRecalcFlags > 1) {
      if (this.flexParent) {
        this.flexParent._updateRecalcBottomUp(recalc);
      } else {
        this._target.triggerLayout();
      }
    } else {
      this._target.triggerLayout();
    }
  }
  getNewRecalcFlags(flags) {
    return 7 - this._recalc & flags;
  }
  _updateRecalcBottomUp(childRecalc) {
    const newRecalc = this._getRecalcFromChangedChildRecalc(childRecalc);
    const newRecalcFlags = this.getNewRecalcFlags(newRecalc);
    this._recalc |= newRecalc;
    if (newRecalcFlags > 1) {
      const flexParent = this.flexParent;
      if (flexParent) {
        flexParent._updateRecalcBottomUp(newRecalc);
      } else {
        this._target.triggerLayout();
      }
    } else {
      this._target.triggerLayout();
    }
  }
  _getRecalcFromChangedChildRecalc(childRecalc) {
    const layout = this._flex._layout;
    const mainAxisRecalcFlag = layout._horizontal ? 1 : 2;
    const crossAxisRecalcFlag = layout._horizontal ? 2 : 1;
    const crossAxisDimensionsChangedInChild = childRecalc & crossAxisRecalcFlag;
    if (!crossAxisDimensionsChangedInChild) {
      const mainAxisDimensionsChangedInChild = childRecalc & mainAxisRecalcFlag;
      if (mainAxisDimensionsChangedInChild) {
        const mainAxisIsWrapping = layout.isWrapping();
        if (mainAxisIsWrapping) {
          const crossAxisIsFitToContents = layout.isCrossAxisFitToContents();
          if (crossAxisIsFitToContents) {
            childRecalc += crossAxisRecalcFlag;
          }
        }
      }
    }
    let isWidthDynamic = layout.isAxisFitToContents(true);
    let isHeightDynamic = layout.isAxisFitToContents(false);
    if (layout.shrunk) {
      if (layout._horizontal) {
        isWidthDynamic = true;
      } else {
        isHeightDynamic = true;
      }
    }
    const localRecalc = 1 + (isWidthDynamic ? 2 : 0) + (isHeightDynamic ? 4 : 0);
    const combinedRecalc = childRecalc & localRecalc;
    return combinedRecalc;
  }
  get recalc() {
    return this._recalc;
  }
  clearRecalcFlag() {
    this._recalc = 0;
  }
  enableLocalRecalcFlag() {
    this._recalc = 1;
  }
  get originalX() {
    return this._originalX;
  }
  setOriginalXWithoutUpdatingLayout(v) {
    this._originalX = v;
  }
  get originalY() {
    return this._originalY;
  }
  setOriginalYWithoutUpdatingLayout(v) {
    this._originalY = v;
  }
  get originalWidth() {
    return this._originalWidth;
  }
  set originalWidth(v) {
    if (this._originalWidth !== v) {
      this._originalWidth = v;
      this.changedDimensions(true, false);
    }
  }
  get originalHeight() {
    return this._originalHeight;
  }
  set originalHeight(v) {
    if (this._originalHeight !== v) {
      this._originalHeight = v;
      this.changedDimensions(false, true);
    }
  }
  get funcX() {
    return this._target.funcX;
  }
  get funcY() {
    return this._target.funcY;
  }
  get funcW() {
    return this._target.funcW;
  }
  get funcH() {
    return this._target.funcH;
  }
}
class TextureSource {
  constructor(manager, loader = null) {
    this.id = TextureSource.id++;
    this.manager = manager;
    this.stage = manager.stage;
    this.textures = /* @__PURE__ */ new Set();
    this._activeTextureCount = 0;
    this.loader = loader;
    this.lookupId = null;
    this._cancelCb = null;
    this.loadingSince = 0;
    this.w = 0;
    this.h = 0;
    this._nativeTexture = null;
    this.permanent = false;
    this.renderInfo = null;
    this._isResultTexture = !this.loader;
    this._loadError = null;
    this._imageRef = null;
    this._hasAlpha = false;
  }
  get hasAlpha() {
    return this._hasAlpha;
  }
  get loadError() {
    return this._loadError;
  }
  addTexture(v) {
    if (!this.textures.has(v)) {
      this.textures.add(v);
    }
  }
  removeTexture(v) {
    this.textures.delete(v);
  }
  incActiveTextureCount() {
    this._activeTextureCount++;
    if (this._activeTextureCount === 1) {
      this.becomesUsed();
    }
  }
  decActiveTextureCount() {
    this._activeTextureCount--;
    if (this._activeTextureCount === 0) {
      this.becomesUnused();
    }
  }
  get isResultTexture() {
    return this._isResultTexture;
  }
  set isResultTexture(v) {
    this._isResultTexture = v;
  }
  forEachEnabledElement(cb) {
    this.textures.forEach((texture) => {
      texture.elements.forEach(cb);
    });
  }
  hasEnabledElements() {
    return this.textures.size > 0;
  }
  forEachActiveElement(cb) {
    this.textures.forEach((texture) => {
      texture.elements.forEach((element) => {
        if (element.active) {
          cb(element);
        }
      });
    });
  }
  getRenderWidth() {
    return this.w;
  }
  getRenderHeight() {
    return this.h;
  }
  allowCleanup() {
    return !this.permanent && !this.isUsed();
  }
  becomesUsed() {
    this.load();
  }
  becomesUnused() {
    this.cancel();
  }
  cancel() {
    if (this.isLoading()) {
      if (this._cancelCb) {
        this._cancelCb(this);
        this._cancelCb = null;
      }
      this.loadingSince = 0;
    }
  }
  isLoaded() {
    return !!this._nativeTexture;
  }
  isLoading() {
    return this.loadingSince > 0;
  }
  isError() {
    return !!this._loadError;
  }
  reload() {
    this.free();
    if (this.isUsed()) {
      this.load();
    }
  }
  load(forceSync = false) {
    if (this.isResultTexture) {
      return;
    }
    if (!this._nativeTexture && !this.isLoading()) {
      this.loadingSince = new Date().getTime();
      this._cancelCb = this.loader((err, options) => {
        if (this.isLoading()) {
          this._cancelCb = null;
          if (this.manager.stage.destroyed) {
            return;
          }
          if (err) {
            this.onError(err);
          } else if (options && options.source) {
            if (!this.stage.isUpdatingFrame() && !forceSync && options.throttle !== false) {
              const textureThrottler = this.stage.textureThrottler;
              this._cancelCb = textureThrottler.genericCancelCb;
              textureThrottler.add(this, options);
            } else {
              this.processLoadedSource(options);
            }
          }
        }
      }, this);
    }
  }
  processLoadedSource(options) {
    this.loadingSince = 0;
    this.setSource(options);
  }
  setSource(options) {
    const source = options.source;
    this._hasAlpha = options ? options.hasAlpha || false : false;
    this.w = source.width || options && options.w || 0;
    this.h = source.height || options && options.h || 0;
    if (options && options.renderInfo) {
      this.renderInfo = options.renderInfo;
    }
    this.permanent = !!options.permanent;
    if (options && options.imageRef)
      this._imageRef = options.imageRef;
    if (options && options.flipTextureY) {
      this._flipTextureY = options.flipTextureY;
    } else {
      this._flipTextureY = false;
    }
    if (this._isNativeTexture(source)) {
      this._nativeTexture = source;
      this.w = this.w || source.w;
      this.h = this.h || source.h;
      this.permanent = options.hasOwnProperty("permanent") ? options.permanent : true;
    } else {
      this.manager.uploadTextureSource(this, options);
    }
    this._loadError = null;
    this.onLoad();
  }
  isUsed() {
    return this._activeTextureCount > 0;
  }
  onLoad() {
    if (this.isUsed()) {
      this.textures.forEach((texture) => {
        texture.onLoad();
      });
    }
  }
  forceRenderUpdate() {
    if (this._nativeTexture) {
      this._nativeTexture.update = this.stage.frameCounter;
    }
    this.forEachActiveElement(function(element) {
      element.forceRenderUpdate();
    });
  }
  forceUpdateRenderCoords() {
    this.forEachActiveElement(function(element) {
      element._updateTextureCoords();
    });
  }
  get nativeTexture() {
    return this._nativeTexture;
  }
  clearNativeTexture() {
    this._nativeTexture = null;
    this._imageRef = null;
  }
  replaceNativeTexture(newNativeTexture, w, h) {
    let prevNativeTexture = this._nativeTexture;
    this._nativeTexture = newNativeTexture;
    this.w = w;
    this.h = h;
    if (!prevNativeTexture && this._nativeTexture) {
      this.forEachActiveElement((element) => element.onTextureSourceLoaded());
    }
    if (!this._nativeTexture) {
      this.forEachActiveElement((element) => element._setDisplayedTexture(null));
    }
    this.forEachEnabledElement((element) => element._updateDimensions());
  }
  onError(e) {
    this._loadError = e;
    this.loadingSince = 0;
    console.error("[Lightning] texture load error", e, this.lookupId);
    this.forEachActiveElement((element) => element.onTextureSourceLoadError(e));
  }
  free() {
    if (this.isLoaded()) {
      this.manager.freeTextureSource(this);
    }
  }
  _isNativeTexture(source) {
    if (Utils$1.isNode) {
      return source.constructor.name === "WebGLTexture";
    }
    if ("WebGLTexture" in window) {
      return source instanceof WebGLTexture;
    }
    return false;
  }
}
TextureSource.prototype.isTextureSource = true;
TextureSource.id = 1;
class ElementTexturizer {
  constructor(elementCore) {
    this._element = elementCore.element;
    this._core = elementCore;
    this.ctx = this._core.ctx;
    this._enabled = false;
    this.lazy = false;
    this._colorize = false;
    this._renderTexture = null;
    this._renderTextureReused = false;
    this._resultTextureSource = null;
    this._renderOffscreen = false;
    this.empty = false;
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(v) {
    this._enabled = v;
    this._core.updateRenderToTextureEnabled();
  }
  get renderOffscreen() {
    return this._renderOffscreen;
  }
  set renderOffscreen(v) {
    this._renderOffscreen = v;
    this._core.setHasRenderUpdates(1);
    this._core._setRecalc(6);
  }
  get colorize() {
    return this._colorize;
  }
  set colorize(v) {
    if (this._colorize !== v) {
      this._colorize = v;
      this._core.setHasRenderUpdates(1);
    }
  }
  _getTextureSource() {
    if (!this._resultTextureSource) {
      this._resultTextureSource = new TextureSource(this._element.stage.textureManager);
      this.updateResultTexture();
    }
    return this._resultTextureSource;
  }
  hasResultTexture() {
    return !!this._resultTextureSource;
  }
  resultTextureInUse() {
    return this._resultTextureSource && this._resultTextureSource.hasEnabledElements();
  }
  updateResultTexture() {
    let resultTexture = this.getResultTexture();
    if (this._resultTextureSource) {
      if (this._resultTextureSource.nativeTexture !== resultTexture) {
        let w = resultTexture ? resultTexture.w : 0;
        let h = resultTexture ? resultTexture.h : 0;
        this._resultTextureSource.replaceNativeTexture(resultTexture, w, h);
      }
      this._resultTextureSource.forEachEnabledElement((element) => {
        element._updateDimensions();
        element.core.setHasRenderUpdates(3);
      });
    }
  }
  mustRenderToTexture() {
    if (this._enabled && !this.lazy) {
      return true;
    } else if (this._enabled && this.lazy && this._core._hasRenderUpdates < 3) {
      return true;
    }
    return false;
  }
  deactivate() {
    this.release();
  }
  get renderTextureReused() {
    return this._renderTextureReused;
  }
  release() {
    this.releaseRenderTexture();
  }
  releaseRenderTexture() {
    if (this._renderTexture) {
      if (!this._renderTextureReused) {
        this.ctx.releaseRenderTexture(this._renderTexture);
      }
      this._renderTexture = null;
      this._renderTextureReused = false;
      this.updateResultTexture();
    }
  }
  reuseTextureAsRenderTexture(nativeTexture) {
    if (this._renderTexture !== nativeTexture) {
      this.releaseRenderTexture();
      this._renderTexture = nativeTexture;
      this._renderTextureReused = true;
    }
  }
  hasRenderTexture() {
    return !!this._renderTexture;
  }
  getRenderTexture() {
    if (!this._renderTexture) {
      this._renderTexture = this.ctx.allocateRenderTexture(this._core._w, this._core._h);
      this._renderTextureReused = false;
    }
    return this._renderTexture;
  }
  getResultTexture() {
    return this._renderTexture;
  }
}
class ElementCore {
  constructor(element) {
    this._element = element;
    this.ctx = element.stage.ctx;
    this._recalc = 0;
    this._parent = null;
    this._onUpdate = null;
    this._pRecalc = 0;
    this._worldContext = new ElementCoreContext();
    this._hasUpdates = false;
    this._localAlpha = 1;
    this._onAfterCalcs = null;
    this._onAfterUpdate = null;
    this._localPx = 0;
    this._localPy = 0;
    this._localTa = 1;
    this._localTb = 0;
    this._localTc = 0;
    this._localTd = 1;
    this._isComplex = false;
    this._dimsUnknown = false;
    this._clipping = false;
    this._zSort = false;
    this._outOfBounds = 0;
    this._displayedTextureSource = null;
    this._zContextUsage = 0;
    this._children = null;
    this._hasRenderUpdates = 0;
    this._zIndexedChildren = null;
    this._renderContext = this._worldContext;
    this.renderState = this.ctx.renderState;
    this._scissor = null;
    this._shaderOwner = null;
    this._updateTreeOrder = 0;
    this._colorUl = this._colorUr = this._colorBl = this._colorBr = 4294967295;
    this._x = 0;
    this._y = 0;
    this._w = 0;
    this._h = 0;
    this._optFlags = 0;
    this._funcX = null;
    this._funcY = null;
    this._funcW = null;
    this._funcH = null;
    this._scaleX = 1;
    this._scaleY = 1;
    this._pivotX = 0.5;
    this._pivotY = 0.5;
    this._mountX = 0;
    this._mountY = 0;
    this._rotation = 0;
    this._alpha = 1;
    this._visible = true;
    this._ulx = 0;
    this._uly = 0;
    this._brx = 1;
    this._bry = 1;
    this._zIndex = 0;
    this._forceZIndexContext = false;
    this._zParent = null;
    this._isRoot = false;
    this._zIndexResort = false;
    this._shader = null;
    this._renderToTextureEnabled = false;
    this._texturizer = null;
    this._useRenderToTexture = false;
    this._boundsMargin = null;
    this._recBoundsMargin = null;
    this._withinBoundsMargin = false;
    this._viewport = null;
    this._clipbox = true;
    this.render = this._renderSimple;
    this._layout = null;
  }
  get offsetX() {
    if (this._funcX) {
      return this._funcX;
    } else {
      if (this.hasFlexLayout()) {
        return this._layout.originalX;
      } else {
        return this._x;
      }
    }
  }
  set offsetX(v) {
    if (Utils$1.isFunction(v)) {
      this.funcX = v;
    } else {
      this._disableFuncX();
      if (this.hasFlexLayout()) {
        this.x += v - this._layout.originalX;
        this._layout.setOriginalXWithoutUpdatingLayout(v);
      } else {
        this.x = v;
      }
    }
  }
  get x() {
    return this._x;
  }
  set x(v) {
    if (v !== this._x) {
      this._updateLocalTranslateDelta(v - this._x, 0);
      this._x = v;
    }
  }
  get funcX() {
    return this._optFlags & 1 ? this._funcX : null;
  }
  set funcX(v) {
    if (this._funcX !== v) {
      this._optFlags |= 1;
      this._funcX = v;
      if (this.hasFlexLayout()) {
        this._layout.setOriginalXWithoutUpdatingLayout(0);
        this.layout.forceLayout();
      } else {
        this._x = 0;
        this._triggerRecalcTranslate();
      }
    }
  }
  _disableFuncX() {
    this._optFlags = this._optFlags & 65535 - 1;
    this._funcX = null;
  }
  get offsetY() {
    if (this._funcY) {
      return this._funcY;
    } else {
      if (this.hasFlexLayout()) {
        return this._layout.originalY;
      } else {
        return this._y;
      }
    }
  }
  set offsetY(v) {
    if (Utils$1.isFunction(v)) {
      this.funcY = v;
    } else {
      this._disableFuncY();
      if (this.hasFlexLayout()) {
        this.y += v - this._layout.originalY;
        this._layout.setOriginalYWithoutUpdatingLayout(v);
      } else {
        this.y = v;
      }
    }
  }
  get y() {
    return this._y;
  }
  set y(v) {
    if (v !== this._y) {
      this._updateLocalTranslateDelta(0, v - this._y);
      this._y = v;
    }
  }
  get funcY() {
    return this._optFlags & 2 ? this._funcY : null;
  }
  set funcY(v) {
    if (this._funcY !== v) {
      this._optFlags |= 2;
      this._funcY = v;
      if (this.hasFlexLayout()) {
        this._layout.setOriginalYWithoutUpdatingLayout(0);
        this.layout.forceLayout();
      } else {
        this._y = 0;
        this._triggerRecalcTranslate();
      }
    }
  }
  _disableFuncY() {
    this._optFlags = this._optFlags & 65535 - 2;
    this._funcY = null;
  }
  get funcW() {
    return this._optFlags & 4 ? this._funcW : null;
  }
  set funcW(v) {
    if (this._funcW !== v) {
      this._optFlags |= 4;
      this._funcW = v;
      if (this.hasFlexLayout()) {
        this._layout._originalWidth = 0;
        this.layout.changedDimensions(true, false);
      } else {
        this._w = 0;
        this._triggerRecalcTranslate();
      }
    }
  }
  disableFuncW() {
    this._optFlags = this._optFlags & 65535 - 4;
    this._funcW = null;
  }
  get funcH() {
    return this._optFlags & 8 ? this._funcH : null;
  }
  set funcH(v) {
    if (this._funcH !== v) {
      this._optFlags |= 8;
      this._funcH = v;
      if (this.hasFlexLayout()) {
        this._layout._originalHeight = 0;
        this.layout.changedDimensions(false, true);
      } else {
        this._h = 0;
        this._triggerRecalcTranslate();
      }
    }
  }
  disableFuncH() {
    this._optFlags = this._optFlags & 65535 - 8;
    this._funcH = null;
  }
  get w() {
    return this._w;
  }
  getRenderWidth() {
    if (this.hasFlexLayout()) {
      return this._layout.originalWidth;
    } else {
      return this._w;
    }
  }
  get h() {
    return this._h;
  }
  getRenderHeight() {
    if (this.hasFlexLayout()) {
      return this._layout.originalHeight;
    } else {
      return this._h;
    }
  }
  get scaleX() {
    return this._scaleX;
  }
  set scaleX(v) {
    if (this._scaleX !== v) {
      this._scaleX = v;
      this._updateLocalTransform();
    }
  }
  get scaleY() {
    return this._scaleY;
  }
  set scaleY(v) {
    if (this._scaleY !== v) {
      this._scaleY = v;
      this._updateLocalTransform();
    }
  }
  get scale() {
    return this.scaleX;
  }
  set scale(v) {
    if (this._scaleX !== v || this._scaleY !== v) {
      this._scaleX = v;
      this._scaleY = v;
      this._updateLocalTransform();
    }
  }
  get pivotX() {
    return this._pivotX;
  }
  set pivotX(v) {
    if (this._pivotX !== v) {
      this._pivotX = v;
      this._updateLocalTranslate();
    }
  }
  get pivotY() {
    return this._pivotY;
  }
  set pivotY(v) {
    if (this._pivotY !== v) {
      this._pivotY = v;
      this._updateLocalTranslate();
    }
  }
  get pivot() {
    return this._pivotX;
  }
  set pivot(v) {
    if (this._pivotX !== v || this._pivotY !== v) {
      this._pivotX = v;
      this._pivotY = v;
      this._updateLocalTranslate();
    }
  }
  get mountX() {
    return this._mountX;
  }
  set mountX(v) {
    if (this._mountX !== v) {
      this._mountX = v;
      this._updateLocalTranslate();
    }
  }
  get mountY() {
    return this._mountY;
  }
  set mountY(v) {
    if (this._mountY !== v) {
      this._mountY = v;
      this._updateLocalTranslate();
    }
  }
  get mount() {
    return this._mountX;
  }
  set mount(v) {
    if (this._mountX !== v || this._mountY !== v) {
      this._mountX = v;
      this._mountY = v;
      this._updateLocalTranslate();
    }
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(v) {
    if (this._rotation !== v) {
      this._rotation = v;
      this._updateLocalTransform();
    }
  }
  get alpha() {
    return this._alpha;
  }
  set alpha(v) {
    v = v > 1 ? 1 : v < 1e-14 ? 0 : v;
    if (this._alpha !== v) {
      let prev = this._alpha;
      this._alpha = v;
      this._updateLocalAlpha();
      if (prev === 0 !== (v === 0)) {
        this._element._updateEnabledFlag();
      }
    }
  }
  get visible() {
    return this._visible;
  }
  set visible(v) {
    if (this._visible !== v) {
      this._visible = v;
      this._updateLocalAlpha();
      this._element._updateEnabledFlag();
      if (this.hasFlexLayout()) {
        this.layout.setVisible(v);
      }
    }
  }
  _updateLocalTransform() {
    if (this._rotation !== 0 && this._rotation % (2 * Math.PI)) {
      let _sr = Math.sin(this._rotation);
      let _cr = Math.cos(this._rotation);
      this._setLocalTransform(
        _cr * this._scaleX,
        -_sr * this._scaleY,
        _sr * this._scaleX,
        _cr * this._scaleY
      );
    } else {
      this._setLocalTransform(
        this._scaleX,
        0,
        0,
        this._scaleY
      );
    }
    this._updateLocalTranslate();
  }
  _updateLocalTranslate() {
    this._recalcLocalTranslate();
    this._triggerRecalcTranslate();
  }
  _recalcLocalTranslate() {
    let pivotXMul = this._pivotX * this._w;
    let pivotYMul = this._pivotY * this._h;
    let px = this._x - (pivotXMul * this._localTa + pivotYMul * this._localTb) + pivotXMul;
    let py = this._y - (pivotXMul * this._localTc + pivotYMul * this._localTd) + pivotYMul;
    px -= this._mountX * this._w;
    py -= this._mountY * this._h;
    this._localPx = px;
    this._localPy = py;
  }
  _updateLocalTranslateDelta(dx, dy) {
    this._addLocalTranslate(dx, dy);
  }
  _updateLocalAlpha() {
    this._setLocalAlpha(this._visible ? this._alpha : 0);
  }
  setHasRenderUpdates(type) {
    if (this._worldContext.alpha) {
      let p = this;
      p._hasRenderUpdates = Math.max(type, p._hasRenderUpdates);
      while ((p = p._parent) && p._hasRenderUpdates !== 3) {
        p._hasRenderUpdates = 3;
      }
    }
  }
  _setRecalc(type) {
    this._recalc |= type;
    this._setHasUpdates();
    if (this._parent) {
      this._parent.setHasRenderUpdates(3);
    }
  }
  _setHasUpdates() {
    let p = this;
    while (p && !p._hasUpdates) {
      p._hasUpdates = true;
      p = p._parent;
    }
  }
  getParent() {
    return this._parent;
  }
  setParent(parent) {
    if (parent !== this._parent) {
      let prevIsZContext = this.isZContext();
      let prevParent = this._parent;
      this._parent = parent;
      if (this._layout || parent && parent.isFlexContainer()) {
        this.layout.setParent(prevParent, parent);
      }
      if (prevParent) {
        prevParent.setHasRenderUpdates(3);
      }
      this._setRecalc(1 + 2 + 4);
      if (this._parent) {
        this._parent._setHasUpdates();
      }
      if (this._zIndex === 0) {
        this.setZParent(parent);
      } else {
        this.setZParent(parent ? parent.findZContext() : null);
      }
      if (prevIsZContext !== this.isZContext()) {
        if (!this.isZContext()) {
          this.disableZContext();
        } else {
          this.enableZContext(prevParent.findZContext());
        }
      }
      this._zIndexResort = true;
      if (this._zParent) {
        this._zParent.enableZSort();
      }
      if (!this._shader) {
        let newShaderOwner = parent && !parent._renderToTextureEnabled ? parent._shaderOwner : null;
        if (newShaderOwner !== this._shaderOwner) {
          this.setHasRenderUpdates(1);
          this._setShaderOwnerRecursive(newShaderOwner);
        }
      }
    }
  }
  enableZSort(force = false) {
    if (!this._zSort && this._zContextUsage > 0) {
      this._zSort = true;
      if (force) {
        this.ctx.forceZSort(this);
      }
    }
  }
  addChildAt(index, child) {
    if (!this._children)
      this._children = [];
    this._children.splice(index, 0, child);
    child.setParent(this);
  }
  setChildAt(index, child) {
    if (!this._children)
      this._children = [];
    this._children[index].setParent(null);
    this._children[index] = child;
    child.setParent(this);
  }
  removeChildAt(index) {
    let child = this._children[index];
    this._children.splice(index, 1);
    child.setParent(null);
  }
  removeChildren() {
    if (this._children) {
      for (let i = 0, n = this._children.length; i < n; i++) {
        this._children[i].setParent(null);
      }
      this._children.splice(0);
      if (this._zIndexedChildren) {
        this._zIndexedChildren.splice(0);
      }
    }
  }
  syncChildren(removed, added, order) {
    this._children = order;
    for (let i = 0, n = removed.length; i < n; i++) {
      removed[i].setParent(null);
    }
    for (let i = 0, n = added.length; i < n; i++) {
      added[i].setParent(this);
    }
  }
  moveChild(fromIndex, toIndex) {
    let c = this._children[fromIndex];
    this._children.splice(fromIndex, 1);
    this._children.splice(toIndex, 0, c);
    this._zIndexResort = true;
    if (this._zParent) {
      this._zParent.enableZSort();
    }
  }
  _setLocalTransform(a, b, c, d) {
    this._setRecalc(4);
    this._localTa = a;
    this._localTb = b;
    this._localTc = c;
    this._localTd = d;
    this._isComplex = b !== 0 || c !== 0 || a < 0 || d < 0;
  }
  _addLocalTranslate(dx, dy) {
    this._localPx += dx;
    this._localPy += dy;
    this._triggerRecalcTranslate();
  }
  _setLocalAlpha(a) {
    if (!this._worldContext.alpha && (this._parent && this._parent._worldContext.alpha && a)) {
      this._setRecalc(1 + 128);
    } else {
      this._setRecalc(1);
    }
    if (a < 1e-14) {
      a = 0;
    }
    this._localAlpha = a;
  }
  setDimensions(w, h, isEstimate = this._dimsUnknown) {
    this._dimsUnknown = isEstimate;
    if (this.hasFlexLayout()) {
      this._layout.originalWidth = w;
      this._layout.originalHeight = h;
    } else {
      if (this._w !== w || this._h !== h) {
        this._updateDimensions(w, h);
        return true;
      }
    }
    return false;
  }
  _updateDimensions(w, h) {
    if (this._w !== w || this._h !== h) {
      this._w = w;
      this._h = h;
      this._triggerRecalcTranslate();
      if (this._texturizer) {
        this._texturizer.releaseRenderTexture();
        this._texturizer.updateResultTexture();
      }
      this._updateLocalTranslate();
    }
  }
  setTextureCoords(ulx, uly, brx, bry) {
    this.setHasRenderUpdates(3);
    this._ulx = ulx;
    this._uly = uly;
    this._brx = brx;
    this._bry = bry;
  }
  get displayedTextureSource() {
    return this._displayedTextureSource;
  }
  setDisplayedTextureSource(textureSource) {
    this.setHasRenderUpdates(3);
    this._displayedTextureSource = textureSource;
  }
  get isRoot() {
    return this._isRoot;
  }
  setAsRoot() {
    this._parent = new ElementCore(this._element);
    this._parent._hasRenderUpdates = 3;
    this._parent._hasUpdates = true;
    this._isRoot = true;
    this.ctx.root = this;
    this._parent._viewport = [0, 0, this.ctx.stage.coordsWidth, this.ctx.stage.coordsHeight];
    this._parent._scissor = this._parent._viewport;
    this._parent._recBoundsMargin = null;
    this._setRecalc(1 + 2 + 4);
  }
  isAncestorOf(c) {
    let p = c;
    while (p = p._parent) {
      if (this === p) {
        return true;
      }
    }
    return false;
  }
  isZContext() {
    return this._forceZIndexContext || this._renderToTextureEnabled || this._zIndex !== 0 || this._isRoot || !this._parent;
  }
  findZContext() {
    if (this.isZContext()) {
      return this;
    } else {
      return this._parent.findZContext();
    }
  }
  setZParent(newZParent) {
    if (this._zParent !== newZParent) {
      if (this._zParent !== null) {
        if (this._zIndex !== 0) {
          this._zParent.decZContextUsage();
        }
        this._zParent.enableZSort();
      }
      if (newZParent !== null) {
        let hadZContextUsage = newZParent._zContextUsage > 0;
        if (this._zIndex !== 0) {
          newZParent.incZContextUsage();
        }
        if (newZParent._zContextUsage > 0) {
          if (!hadZContextUsage && this._parent === newZParent)
            ;
          else {
            newZParent._zIndexedChildren.push(this);
          }
          newZParent.enableZSort();
        }
      }
      this._zParent = newZParent;
      this._zIndexResort = true;
    }
  }
  incZContextUsage() {
    this._zContextUsage++;
    if (this._zContextUsage === 1) {
      if (!this._zIndexedChildren) {
        this._zIndexedChildren = [];
      }
      if (this._children) {
        for (let i = 0, n = this._children.length; i < n; i++) {
          this._zIndexedChildren.push(this._children[i]);
        }
        this._zSort = false;
      }
    }
  }
  decZContextUsage() {
    this._zContextUsage--;
    if (this._zContextUsage === 0) {
      this._zSort = false;
      this._zIndexedChildren.splice(0);
    }
  }
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(zIndex) {
    if (this._zIndex !== zIndex) {
      this.setHasRenderUpdates(1);
      let newZParent = this._zParent;
      let prevIsZContext = this.isZContext();
      if (zIndex === 0 && this._zIndex !== 0) {
        if (this._parent === this._zParent) {
          if (this._zParent) {
            this._zParent.decZContextUsage();
          }
        } else {
          newZParent = this._parent;
        }
      } else if (zIndex !== 0 && this._zIndex === 0) {
        newZParent = this._parent ? this._parent.findZContext() : null;
        if (newZParent === this._zParent) {
          if (this._zParent) {
            this._zParent.incZContextUsage();
            this._zParent.enableZSort();
          }
        }
      } else if (zIndex !== this._zIndex) {
        if (this._zParent && this._zParent._zContextUsage) {
          this._zParent.enableZSort();
        }
      }
      if (newZParent !== this._zParent) {
        this.setZParent(null);
      }
      this._zIndex = zIndex;
      if (newZParent !== this._zParent) {
        this.setZParent(newZParent);
      }
      if (prevIsZContext !== this.isZContext()) {
        if (!this.isZContext()) {
          this.disableZContext();
        } else {
          this.enableZContext(this._parent.findZContext());
        }
      }
      this._zIndexResort = true;
      if (this._zParent) {
        this._zParent.enableZSort();
      }
    }
  }
  get forceZIndexContext() {
    return this._forceZIndexContext;
  }
  set forceZIndexContext(v) {
    this.setHasRenderUpdates(1);
    let prevIsZContext = this.isZContext();
    this._forceZIndexContext = v;
    if (prevIsZContext !== this.isZContext()) {
      if (!this.isZContext()) {
        this.disableZContext();
      } else {
        this.enableZContext(this._parent.findZContext());
      }
    }
  }
  enableZContext(prevZContext) {
    if (prevZContext && prevZContext._zContextUsage > 0) {
      const results = this._getZIndexedDescs();
      results.forEach((c) => {
        if (this.isAncestorOf(c) && c._zIndex !== 0) {
          c.setZParent(this);
        }
      });
    }
  }
  _getZIndexedDescs() {
    const results = [];
    if (this._children) {
      for (let i = 0, n = this._children.length; i < n; i++) {
        this._children[i]._getZIndexedDescsRec(results);
      }
    }
    return results;
  }
  _getZIndexedDescsRec(results) {
    if (this._zIndex) {
      results.push(this);
    } else if (this._children && !this.isZContext()) {
      for (let i = 0, n = this._children.length; i < n; i++) {
        this._children[i]._getZIndexedDescsRec(results);
      }
    }
  }
  disableZContext() {
    if (this._zContextUsage > 0) {
      let newZParent = this._parent.findZContext();
      if (this._zSort) {
        this.sortZIndexedChildren();
      }
      this._zIndexedChildren.slice().forEach(function(c) {
        if (c._zIndex !== 0) {
          c.setZParent(newZParent);
        }
      });
    }
  }
  get colorUl() {
    return this._colorUl;
  }
  set colorUl(color) {
    if (this._colorUl !== color) {
      this.setHasRenderUpdates(this._displayedTextureSource ? 3 : 1);
      this._colorUl = color;
    }
  }
  get colorUr() {
    return this._colorUr;
  }
  set colorUr(color) {
    if (this._colorUr !== color) {
      this.setHasRenderUpdates(this._displayedTextureSource ? 3 : 1);
      this._colorUr = color;
    }
  }
  get colorBl() {
    return this._colorBl;
  }
  set colorBl(color) {
    if (this._colorBl !== color) {
      this.setHasRenderUpdates(this._displayedTextureSource ? 3 : 1);
      this._colorBl = color;
    }
  }
  get colorBr() {
    return this._colorBr;
  }
  set colorBr(color) {
    if (this._colorBr !== color) {
      this.setHasRenderUpdates(this._displayedTextureSource ? 3 : 1);
      this._colorBr = color;
    }
  }
  set onUpdate(f) {
    this._onUpdate = f;
    this._setRecalc(7);
  }
  set onAfterUpdate(f) {
    this._onAfterUpdate = f;
    this._setRecalc(7);
  }
  set onAfterCalcs(f) {
    this._onAfterCalcs = f;
    this._setRecalc(7);
  }
  get shader() {
    return this._shader;
  }
  set shader(v) {
    this.setHasRenderUpdates(1);
    let prevShader = this._shader;
    this._shader = v;
    if (!v && prevShader) {
      let newShaderOwner = this._parent && !this._parent._renderToTextureEnabled ? this._parent._shaderOwner : null;
      this._setShaderOwnerRecursive(newShaderOwner);
    } else if (v) {
      this._setShaderOwnerRecursive(this);
    }
  }
  get activeShader() {
    return this._shaderOwner ? this._shaderOwner.shader : this.renderState.defaultShader;
  }
  get activeShaderOwner() {
    return this._shaderOwner;
  }
  get clipping() {
    return this._clipping;
  }
  set clipping(v) {
    if (this._clipping !== v) {
      this._clipping = v;
      this._setRecalc(1 + 2);
    }
  }
  get clipbox() {
    return this._clipbox;
  }
  set clipbox(v) {
    this._clipbox = v;
  }
  _setShaderOwnerRecursive(elementCore) {
    this._shaderOwner = elementCore;
    if (this._children && !this._renderToTextureEnabled) {
      for (let i = 0, n = this._children.length; i < n; i++) {
        let c = this._children[i];
        if (!c._shader) {
          c._setShaderOwnerRecursive(elementCore);
          c._hasRenderUpdates = 3;
        }
      }
    }
  }
  _setShaderOwnerChildrenRecursive(elementCore) {
    if (this._children) {
      for (let i = 0, n = this._children.length; i < n; i++) {
        let c = this._children[i];
        if (!c._shader) {
          c._setShaderOwnerRecursive(elementCore);
          c._hasRenderUpdates = 3;
        }
      }
    }
  }
  _hasRenderContext() {
    return this._renderContext !== this._worldContext;
  }
  get renderContext() {
    return this._renderContext;
  }
  updateRenderToTextureEnabled() {
    let v = this.texturizer._enabled;
    if (v) {
      this._enableRenderToTexture();
    } else {
      this._disableRenderToTexture();
      this._texturizer.releaseRenderTexture();
    }
  }
  _enableRenderToTexture() {
    if (!this._renderToTextureEnabled) {
      let prevIsZContext = this.isZContext();
      this._renderToTextureEnabled = true;
      this._renderContext = new ElementCoreContext();
      this._setShaderOwnerChildrenRecursive(null);
      if (!prevIsZContext) {
        this.enableZContext(this._parent ? this._parent.findZContext() : null);
      }
      this.setHasRenderUpdates(3);
      this._setRecalc(7);
      this.render = this._renderAdvanced;
    }
  }
  _disableRenderToTexture() {
    if (this._renderToTextureEnabled) {
      this._renderToTextureEnabled = false;
      this._setShaderOwnerChildrenRecursive(this._shaderOwner);
      this._renderContext = this._worldContext;
      if (!this.isZContext()) {
        this.disableZContext();
      }
      this._setRecalc(7);
      this.setHasRenderUpdates(3);
      this.render = this._renderSimple;
    }
  }
  isWhite() {
    return this._colorUl === 4294967295 && this._colorUr === 4294967295 && this._colorBl === 4294967295 && this._colorBr === 4294967295;
  }
  hasSimpleTexCoords() {
    return this._ulx === 0 && this._uly === 0 && this._brx === 1 && this._bry === 1;
  }
  _stashTexCoords() {
    this._stashedTexCoords = [this._ulx, this._uly, this._brx, this._bry];
    this._ulx = 0;
    this._uly = 0;
    this._brx = 1;
    this._bry = 1;
  }
  _unstashTexCoords() {
    this._ulx = this._stashedTexCoords[0];
    this._uly = this._stashedTexCoords[1];
    this._brx = this._stashedTexCoords[2];
    this._bry = this._stashedTexCoords[3];
    this._stashedTexCoords = null;
  }
  _stashColors() {
    this._stashedColors = [this._colorUl, this._colorUr, this._colorBr, this._colorBl];
    this._colorUl = 4294967295;
    this._colorUr = 4294967295;
    this._colorBr = 4294967295;
    this._colorBl = 4294967295;
  }
  _unstashColors() {
    this._colorUl = this._stashedColors[0];
    this._colorUr = this._stashedColors[1];
    this._colorBr = this._stashedColors[2];
    this._colorBl = this._stashedColors[3];
    this._stashedColors = null;
  }
  isVisible() {
    return this._localAlpha > 1e-14;
  }
  get outOfBounds() {
    return this._outOfBounds;
  }
  set boundsMargin(v) {
    this._boundsMargin = v ? v.slice() : null;
    this._triggerRecalcTranslate();
  }
  get boundsMargin() {
    return this._boundsMargin;
  }
  update() {
    this._recalc |= this._parent._pRecalc;
    if (this._layout && this._layout.isEnabled()) {
      if (this._recalc & 256) {
        this._layout.layoutFlexTree();
      }
    } else if (this._recalc & 2 && this._optFlags) {
      this._applyRelativeDimFuncs();
    }
    if (this._onUpdate) {
      this._hasUpdates = true;
      this._onUpdate(this.element, this);
    }
    const pw = this._parent._worldContext;
    let w = this._worldContext;
    const visible = pw.alpha && this._localAlpha;
    if (this._hasUpdates || this._recalc && visible || w.alpha && !visible) {
      let recalc = this._recalc;
      if (recalc & 1) {
        if (!w.alpha && visible) {
          this._hasRenderUpdates = 3;
        }
        w.alpha = pw.alpha * this._localAlpha;
        if (w.alpha < 1e-14) {
          w.alpha = 0;
        }
      }
      if (recalc & 6) {
        w.px = pw.px + this._localPx * pw.ta;
        w.py = pw.py + this._localPy * pw.td;
        if (pw.tb !== 0)
          w.px += this._localPy * pw.tb;
        if (pw.tc !== 0)
          w.py += this._localPx * pw.tc;
      }
      if (recalc & 4) {
        w.ta = this._localTa * pw.ta;
        w.tb = this._localTd * pw.tb;
        w.tc = this._localTa * pw.tc;
        w.td = this._localTd * pw.td;
        if (this._isComplex) {
          w.ta += this._localTc * pw.tb;
          w.tb += this._localTb * pw.ta;
          w.tc += this._localTc * pw.td;
          w.td += this._localTb * pw.tc;
        }
      }
      const pr = this._parent._renderContext;
      if (this._parent._hasRenderContext()) {
        const init = this._renderContext === this._worldContext;
        if (init) {
          this._renderContext = new ElementCoreContext();
        }
        const r2 = this._renderContext;
        if (init || recalc & 1) {
          r2.alpha = pr.alpha * this._localAlpha;
          if (r2.alpha < 1e-14) {
            r2.alpha = 0;
          }
        }
        if (init || recalc & 6) {
          r2.px = pr.px + this._localPx * pr.ta;
          r2.py = pr.py + this._localPy * pr.td;
          if (pr.tb !== 0)
            r2.px += this._localPy * pr.tb;
          if (pr.tc !== 0)
            r2.py += this._localPx * pr.tc;
        }
        if (init) {
          recalc |= 2;
        }
        if (init || recalc & 4) {
          r2.ta = this._localTa * pr.ta;
          r2.tb = this._localTd * pr.tb;
          r2.tc = this._localTa * pr.tc;
          r2.td = this._localTd * pr.td;
          if (this._isComplex) {
            r2.ta += this._localTc * pr.tb;
            r2.tb += this._localTb * pr.ta;
            r2.tc += this._localTc * pr.td;
            r2.td += this._localTb * pr.tc;
          }
        }
      } else {
        this._renderContext = this._worldContext;
      }
      if (this.ctx.updateTreeOrder === -1) {
        this.ctx.updateTreeOrder = this._updateTreeOrder + 1;
      } else {
        this._updateTreeOrder = this.ctx.updateTreeOrder++;
      }
      const useRenderToTexture = this._renderToTextureEnabled && this._texturizer.mustRenderToTexture();
      if (this._useRenderToTexture !== useRenderToTexture) {
        this._recalc |= 2 + 4;
        recalc |= 2;
        if (!this._useRenderToTexture) {
          this._texturizer.release();
        }
      }
      this._useRenderToTexture = useRenderToTexture;
      const r = this._renderContext;
      const bboxW = this._dimsUnknown ? 2048 : this._w;
      const bboxH = this._dimsUnknown ? 2048 : this._h;
      let sx, sy, ex, ey;
      const rComplex = r.tb !== 0 || r.tc !== 0 || r.ta < 0 || r.td < 0;
      if (rComplex) {
        sx = Math.min(0, bboxW * r.ta, bboxW * r.ta + bboxH * r.tb, bboxH * r.tb) + r.px;
        ex = Math.max(0, bboxW * r.ta, bboxW * r.ta + bboxH * r.tb, bboxH * r.tb) + r.px;
        sy = Math.min(0, bboxW * r.tc, bboxW * r.tc + bboxH * r.td, bboxH * r.td) + r.py;
        ey = Math.max(0, bboxW * r.tc, bboxW * r.tc + bboxH * r.td, bboxH * r.td) + r.py;
      } else {
        sx = r.px;
        ex = r.px + r.ta * bboxW;
        sy = r.py;
        ey = r.py + r.td * bboxH;
      }
      if (this._dimsUnknown && (rComplex || this._localTa < 1 || this._localTb < 1)) {
        const nx = this._x * pr.ta + this._y * pr.tb + pr.px;
        const ny = this._x * pr.tc + this._y * pr.td + pr.py;
        if (nx < sx)
          sx = nx;
        if (ny < sy)
          sy = ny;
        if (nx > ex)
          ex = nx;
        if (ny > ey)
          ey = ny;
      }
      if (recalc & 6 || !this._scissor) {
        if (this._clipping && r.isSquare()) {
          const area = this._parent._useRenderToTexture ? this._parent._viewport : this._parent._scissor;
          if (area) {
            const lx = Math.max(area[0], sx);
            const ly = Math.max(area[1], sy);
            this._scissor = [
              lx,
              ly,
              Math.min(area[2] + area[0], ex) - lx,
              Math.min(area[3] + area[1], ey) - ly
            ];
          } else {
            this._scissor = [sx, sy, ex - sx, ey - sy];
          }
        } else {
          this._scissor = this._parent._useRenderToTexture ? this._parent._viewport : this._parent._scissor;
        }
      }
      if (this._boundsMargin) {
        this._recBoundsMargin = this._boundsMargin;
      } else {
        this._recBoundsMargin = this._parent._recBoundsMargin;
      }
      if (this._onAfterCalcs) {
        if (this._onAfterCalcs(this.element)) {
          if (rComplex) {
            sx = Math.min(0, bboxW * r.ta, bboxW * r.ta + bboxH * r.tb, bboxH * r.tb) + r.px;
            ex = Math.max(0, bboxW * r.ta, bboxW * r.ta + bboxH * r.tb, bboxH * r.tb) + r.px;
            sy = Math.min(0, bboxW * r.tc, bboxW * r.tc + bboxH * r.td, bboxH * r.td) + r.py;
            ey = Math.max(0, bboxW * r.tc, bboxW * r.tc + bboxH * r.td, bboxH * r.td) + r.py;
          } else {
            sx = r.px;
            ex = r.px + r.ta * bboxW;
            sy = r.py;
            ey = r.py + r.td * bboxH;
          }
          if (this._dimsUnknown && (rComplex || this._localTa < 1 || this._localTb < 1)) {
            const nx = this._x * pr.ta + this._y * pr.tb + pr.px;
            const ny = this._x * pr.tc + this._y * pr.td + pr.py;
            if (nx < sx)
              sx = nx;
            if (ny < sy)
              sy = ny;
            if (nx > ex)
              ex = nx;
            if (ny > ey)
              ey = ny;
          }
        }
      }
      if (this._parent._outOfBounds === 2) {
        this._outOfBounds = 2;
        if (this._withinBoundsMargin) {
          this._withinBoundsMargin = false;
          this.element._disableWithinBoundsMargin();
        }
      } else {
        if (recalc & 6) {
          this._outOfBounds = 0;
          let withinMargin = true;
          if (!this._renderToTextureEnabled || !this._texturizer || !this._texturizer.renderOffscreen) {
            if (this._scissor && (this._scissor[2] <= 0 || this._scissor[3] <= 0)) {
              this._outOfBounds = 2;
            } else {
              if (this._scissor[0] > ex || this._scissor[1] > ey || sx > this._scissor[0] + this._scissor[2] || sy > this._scissor[1] + this._scissor[3]) {
                this._outOfBounds = 1;
              }
              if (this._outOfBounds) {
                if (this._clipping || this._useRenderToTexture || this._clipbox && (bboxW && bboxH)) {
                  this._outOfBounds = 2;
                }
              }
            }
            withinMargin = this._outOfBounds === 0;
            if (!withinMargin) {
              if (this._recBoundsMargin) {
                withinMargin = !(ex < this._scissor[0] - this._recBoundsMargin[2] || ey < this._scissor[1] - this._recBoundsMargin[3] || sx > this._scissor[0] + this._scissor[2] + this._recBoundsMargin[0] || sy > this._scissor[1] + this._scissor[3] + this._recBoundsMargin[1]);
              } else {
                withinMargin = !(ex < this._scissor[0] - 100 || ey < this._scissor[1] - 100 || sx > this._scissor[0] + this._scissor[2] + 100 || sy > this._scissor[1] + this._scissor[3] + 100);
              }
              if (withinMargin && this._outOfBounds === 2) {
                this._outOfBounds = 1;
              }
            }
          }
          if (this._withinBoundsMargin !== withinMargin) {
            this._withinBoundsMargin = withinMargin;
            if (this._withinBoundsMargin) {
              this._hasUpdates = true;
              const recalc2 = this._recalc;
              this._recalc = 0;
              this.element._enableWithinBoundsMargin();
              if (this._recalc) {
                return this.update();
              }
              this._recalc = recalc2;
            } else {
              this.element._disableWithinBoundsMargin();
            }
          }
        }
      }
      if (this._useRenderToTexture) {
        if (this._viewport) {
          this._viewport[2] = bboxW;
          this._viewport[3] = bboxH;
        } else {
          this._viewport = [0, 0, bboxW, bboxH];
        }
      }
      this._pRecalc = this._recalc & 135;
      this._recalc = 0;
      this._hasUpdates = false;
      if (this._outOfBounds < 2) {
        if (this._useRenderToTexture) {
          if (this._worldContext.isIdentity()) {
            this._renderContext = this._worldContext;
          } else {
            this._renderContext = ElementCoreContext.IDENTITY;
          }
        }
        if (this._children) {
          for (let i = 0, n = this._children.length; i < n; i++) {
            this._children[i].update();
          }
        }
        if (this._useRenderToTexture) {
          this._renderContext = r;
        }
      } else {
        if (this._children) {
          for (let i = 0, n = this._children.length; i < n; i++) {
            if (this._children[i]._hasUpdates) {
              this._children[i].update();
            } else {
              this._children[i]._recalc |= this._pRecalc;
              this._children[i].updateOutOfBounds();
            }
          }
        }
      }
      if (this._onAfterUpdate) {
        this._onAfterUpdate(this.element);
      }
    } else {
      if (this.ctx.updateTreeOrder === -1 || this._updateTreeOrder >= this.ctx.updateTreeOrder) {
        this.ctx.updateTreeOrder = -1;
      } else {
        this.updateTreeOrder();
      }
    }
  }
  _applyRelativeDimFuncs() {
    if (this._optFlags & 1) {
      const x = this._funcX(this._parent.w);
      if (x !== this._x) {
        this._localPx += x - this._x;
        this._x = x;
      }
    }
    if (this._optFlags & 2) {
      const y = this._funcY(this._parent.h);
      if (y !== this._y) {
        this._localPy += y - this._y;
        this._y = y;
      }
    }
    let changedDims = false;
    if (this._optFlags & 4) {
      const w = this._funcW(this._parent.w);
      if (w !== this._w) {
        this._w = w;
        changedDims = true;
      }
    }
    if (this._optFlags & 8) {
      const h = this._funcH(this._parent.h);
      if (h !== this._h) {
        this._h = h;
        changedDims = true;
      }
    }
    if (changedDims) {
      this._recalcLocalTranslate();
      this.element.onDimensionsChanged(this._w, this._h);
    }
  }
  updateOutOfBounds() {
    if (this._outOfBounds !== 2 && this._renderContext.alpha > 0) {
      this._outOfBounds = 2;
      if (this._withinBoundsMargin) {
        this._withinBoundsMargin = false;
        this.element._disableWithinBoundsMargin();
      }
      if (this._children) {
        for (let i = 0, n = this._children.length; i < n; i++) {
          this._children[i].updateOutOfBounds();
        }
      }
    }
  }
  updateTreeOrder() {
    if (this._localAlpha && this._outOfBounds !== 2) {
      this._updateTreeOrder = this.ctx.updateTreeOrder++;
      if (this._children) {
        for (let i = 0, n = this._children.length; i < n; i++) {
          this._children[i].updateTreeOrder();
        }
      }
    }
  }
  _renderSimple() {
    this._hasRenderUpdates = 0;
    if (this._zSort) {
      this.sortZIndexedChildren();
    }
    if (this._outOfBounds < 2 && this._renderContext.alpha) {
      let renderState = this.renderState;
      if (this._outOfBounds === 0 && this._displayedTextureSource) {
        renderState.setShader(this.activeShader, this._shaderOwner);
        renderState.setScissor(this._scissor);
        this.renderState.addQuad(this);
      }
      if (this._children) {
        if (this._zContextUsage) {
          for (let i = 0, n = this._zIndexedChildren.length; i < n; i++) {
            this._zIndexedChildren[i].render();
          }
        } else {
          for (let i = 0, n = this._children.length; i < n; i++) {
            if (this._children[i]._zIndex === 0) {
              this._children[i].render();
            }
          }
        }
      }
    }
  }
  _renderAdvanced() {
    const hasRenderUpdates = this._hasRenderUpdates;
    this._hasRenderUpdates = 0;
    if (this._zSort) {
      this.sortZIndexedChildren();
    }
    if (this._outOfBounds < 2 && this._renderContext.alpha) {
      let renderState = this.renderState;
      let mustRenderChildren = true;
      let renderTextureInfo;
      let prevRenderTextureInfo;
      if (this._useRenderToTexture) {
        if (this._w === 0 || this._h === 0) {
          return;
        } else if (!this._texturizer.hasRenderTexture() || hasRenderUpdates >= 3) {
          this.ctx.renderToTextureCount++;
          renderState.setShader(renderState.defaultShader, this);
          prevRenderTextureInfo = renderState.renderTextureInfo;
          renderTextureInfo = {
            nativeTexture: null,
            offset: 0,
            w: this._w,
            h: this._h,
            empty: true,
            cleared: false,
            ignore: false,
            cache: false
          };
          if (this._texturizer.hasResultTexture() || !renderState.isCachingTexturizer && hasRenderUpdates < 3) {
            renderTextureInfo.cache = true;
            renderState.isCachingTexturizer = true;
          }
          if (!this._texturizer.hasResultTexture()) {
            this._texturizer.releaseRenderTexture();
          }
          renderState.setRenderTextureInfo(renderTextureInfo);
          renderState.setScissor(null);
          if (this._displayedTextureSource) {
            let r = this._renderContext;
            this._renderContext = ElementCoreContext.IDENTITY;
            this.renderState.addQuad(this);
            this._renderContext = r;
          }
        } else {
          mustRenderChildren = false;
        }
      } else {
        if (this._outOfBounds === 0 && this._displayedTextureSource) {
          renderState.setShader(this.activeShader, this._shaderOwner);
          renderState.setScissor(this._scissor);
          this.renderState.addQuad(this);
        }
      }
      if (mustRenderChildren && this._children) {
        if (this._zContextUsage) {
          for (let i = 0, n = this._zIndexedChildren.length; i < n; i++) {
            this._zIndexedChildren[i].render();
          }
        } else {
          for (let i = 0, n = this._children.length; i < n; i++) {
            if (this._children[i]._zIndex === 0) {
              this._children[i].render();
            }
          }
        }
      }
      if (this._useRenderToTexture) {
        let updateResultTexture = false;
        if (mustRenderChildren) {
          renderState.finishedRenderTexture();
          this._texturizer.empty = renderTextureInfo.empty;
          if (renderTextureInfo.empty) {
            this._texturizer.releaseRenderTexture();
          } else if (renderTextureInfo.nativeTexture) {
            this._texturizer.reuseTextureAsRenderTexture(renderTextureInfo.nativeTexture);
            renderTextureInfo.ignore = true;
          } else {
            if (this._texturizer.renderTextureReused) {
              this._texturizer.releaseRenderTexture();
            }
            renderTextureInfo.nativeTexture = this._texturizer.getRenderTexture();
          }
          renderState.setRenderTextureInfo(prevRenderTextureInfo);
          updateResultTexture = true;
        }
        if (!this._texturizer.empty) {
          let resultTexture = this._texturizer.getResultTexture();
          if (updateResultTexture) {
            if (resultTexture) {
              resultTexture.update = renderState.stage.frameCounter;
            }
            this._texturizer.updateResultTexture();
          }
          if (!this._texturizer.renderOffscreen) {
            renderState.setShader(this.activeShader, this._shaderOwner);
            renderState.setScissor(this._scissor);
            const cache = !renderTextureInfo || renderTextureInfo.cache;
            renderState.setTexturizer(this._texturizer, cache);
            this._stashTexCoords();
            if (!this._texturizer.colorize)
              this._stashColors();
            this.renderState.addQuad(this, true);
            if (!this._texturizer.colorize)
              this._unstashColors();
            this._unstashTexCoords();
            renderState.setTexturizer(null);
          }
        }
      }
      if (renderTextureInfo && renderTextureInfo.cache) {
        renderState.isCachingTexturizer = false;
      }
    }
  }
  get zSort() {
    return this._zSort;
  }
  sortZIndexedChildren() {
    const n = this._zIndexedChildren.length;
    let ptr = 0;
    const a = this._zIndexedChildren;
    const b = [];
    for (let i = 0; i < n; i++) {
      if (a[i]._zParent === this) {
        if (a[i]._zIndexResort) {
          b.push(a[i]);
        } else {
          if (ptr !== i) {
            a[ptr] = a[i];
          }
          ptr++;
        }
      }
    }
    const m = b.length;
    if (m) {
      for (let j = 0; j < m; j++) {
        b[j]._zIndexResort = false;
      }
      b.sort(ElementCore.sortZIndexedChildren);
      const n2 = ptr;
      if (!n2) {
        ptr = 0;
        let j = 0;
        do {
          a[ptr++] = b[j++];
        } while (j < m);
        if (a.length > ptr) {
          a.splice(ptr);
        }
      } else {
        ptr = 0;
        let i = 0;
        let j = 0;
        const mergeResult = [];
        do {
          const v = a[i]._zIndex === b[j]._zIndex ? a[i]._updateTreeOrder - b[j]._updateTreeOrder : a[i]._zIndex - b[j]._zIndex;
          const add = v > 0 ? b[j++] : a[i++];
          if (ptr === 0 || mergeResult[ptr - 1] !== add) {
            mergeResult[ptr++] = add;
          }
          if (i >= n2) {
            do {
              const add2 = b[j++];
              if (ptr === 0 || mergeResult[ptr - 1] !== add2) {
                mergeResult[ptr++] = add2;
              }
            } while (j < m);
            break;
          } else if (j >= m) {
            do {
              const add2 = a[i++];
              if (ptr === 0 || mergeResult[ptr - 1] !== add2) {
                mergeResult[ptr++] = add2;
              }
            } while (i < n2);
            break;
          }
        } while (true);
        this._zIndexedChildren = mergeResult;
      }
    } else {
      if (a.length > ptr) {
        a.splice(ptr);
      }
    }
    this._zSort = false;
  }
  get localTa() {
    return this._localTa;
  }
  get localTb() {
    return this._localTb;
  }
  get localTc() {
    return this._localTc;
  }
  get localTd() {
    return this._localTd;
  }
  get element() {
    return this._element;
  }
  get renderUpdates() {
    return this._hasRenderUpdates;
  }
  get texturizer() {
    if (!this._texturizer) {
      this._texturizer = new ElementTexturizer(this);
    }
    return this._texturizer;
  }
  getCornerPoints() {
    let w = this._worldContext;
    return [
      w.px,
      w.py,
      w.px + this._w * w.ta,
      w.py + this._w * w.tc,
      w.px + this._w * w.ta + this._h * w.tb,
      w.py + this._w * w.tc + this._h * w.td,
      w.px + this._h * w.tb,
      w.py + this._h * w.td
    ];
  }
  getRenderTextureCoords(relX, relY) {
    let r = this._renderContext;
    return [
      r.px + r.ta * relX + r.tb * relY,
      r.py + r.tc * relX + r.td * relY
    ];
  }
  getAbsoluteCoords(relX, relY) {
    let w = this._renderContext;
    return [
      w.px + w.ta * relX + w.tb * relY,
      w.py + w.tc * relX + w.td * relY
    ];
  }
  collectAtCoord(x, y, children) {
    if (this._renderContext.alpha === 0) {
      return;
    }
    if (this.inBound(x, y)) {
      if (this._scissor) {
        if (this.inScissor()) {
          children.push(this);
        }
      } else {
        children.push(this);
      }
    }
    if (this._children) {
      const j = this._children.length;
      for (let i = 0; i < j; i++) {
        this._children[i].collectAtCoord(x, y, children);
      }
    }
    return children.sort(ElementCore.sortZIndexedChildren);
  }
  inBound(tx, ty) {
    const c = this.getCornerPoints();
    return tx > c[0] && tx < c[2] && ty > c[1] && ty < c[7];
  }
  inScissor() {
    const sc = this._scissor;
    const c = this.getCornerPoints();
    return c[2] >= sc[0] && c[0] <= sc[0] + sc[2] && c[7] >= sc[1] && c[1] <= sc[1] + sc[3];
  }
  get layout() {
    this._ensureLayout();
    return this._layout;
  }
  get flex() {
    return this._layout ? this._layout.flex : null;
  }
  set flex(v) {
    this.layout.flex = v;
  }
  get flexItem() {
    return this._layout ? this._layout.flexItem : null;
  }
  set flexItem(v) {
    this.layout.flexItem = v;
  }
  isFlexItem() {
    return !!this._layout && this._layout.isFlexItemEnabled();
  }
  isFlexContainer() {
    return !!this._layout && this._layout.isFlexEnabled();
  }
  enableFlexLayout() {
    this._ensureLayout();
  }
  _ensureLayout() {
    if (!this._layout) {
      this._layout = new FlexTarget(this);
    }
  }
  disableFlexLayout() {
    this._triggerRecalcTranslate();
  }
  hasFlexLayout() {
    return this._layout && this._layout.isEnabled();
  }
  setLayout(x, y, w, h) {
    this.x = x;
    this.y = y;
    this._updateDimensions(w, h);
  }
  triggerLayout() {
    this._setRecalc(256);
  }
  _triggerRecalcTranslate() {
    this._setRecalc(2);
  }
}
class ElementCoreContext {
  constructor() {
    this.alpha = 1;
    this.px = 0;
    this.py = 0;
    this.ta = 1;
    this.tb = 0;
    this.tc = 0;
    this.td = 1;
  }
  isIdentity() {
    return this.alpha === 1 && this.px === 0 && this.py === 0 && this.ta === 1 && this.tb === 0 && this.tc === 0 && this.td === 1;
  }
  isSquare() {
    return this.tb === 0 && this.tc === 0;
  }
}
ElementCoreContext.IDENTITY = new ElementCoreContext();
ElementCore.sortZIndexedChildren = function(a, b) {
  return a._zIndex === b._zIndex ? a._updateTreeOrder - b._updateTreeOrder : a._zIndex - b._zIndex;
};
class EventEmitter {
  constructor() {
    this._hasEventListeners = false;
  }
  on(name, listener) {
    if (!this._hasEventListeners) {
      this._eventFunction = {};
      this._eventListeners = {};
      this._hasEventListeners = true;
    }
    const current = this._eventFunction[name];
    if (!current) {
      this._eventFunction[name] = listener;
    } else {
      if (this._eventFunction[name] !== EventEmitter.combiner) {
        this._eventListeners[name] = [this._eventFunction[name], listener];
        this._eventFunction[name] = EventEmitter.combiner;
      } else {
        this._eventListeners[name].push(listener);
      }
    }
  }
  once(name, listener) {
    const wrapper = (arg1, arg2, arg3) => {
      listener(arg1, arg2, arg3);
      this.off(name, wrapper);
    };
    wrapper.__originalFunc = listener;
    this.on(name, wrapper);
  }
  has(name, listener) {
    if (this._hasEventListeners) {
      const current = this._eventFunction[name];
      if (current) {
        if (current === EventEmitter.combiner) {
          const listeners = this._eventListeners[name];
          for (const l of listeners) {
            if (l === listener || l.__originalFunc == listener) {
              return true;
            }
          }
        } else if (this._eventFunction[name] === listener || this._eventFunction[name].__originalFunc === listener) {
          return true;
        }
      }
    }
    return false;
  }
  off(name, listener) {
    if (this._hasEventListeners) {
      const current = this._eventFunction[name];
      if (current) {
        if (current === EventEmitter.combiner) {
          const listeners = this._eventListeners[name];
          let index = listeners.indexOf(listener);
          if (index >= 0) {
            listeners.splice(index, 1);
          }
          index = listeners.map((l) => l.__originalFunc).indexOf(listener);
          if (index >= 0) {
            listeners.splice(index, 1);
          }
          if (listeners.length === 1) {
            this._eventFunction[name] = listeners[0];
            this._eventListeners[name] = void 0;
          }
        } else if (this._eventFunction[name] === listener || this._eventFunction[name].__originalFunc === listener) {
          this._eventFunction[name] = void 0;
        }
      }
    }
  }
  removeListener(name, listener) {
    this.off(name, listener);
  }
  emit(name, arg1, arg2, arg3) {
    if (this._hasEventListeners) {
      const func = this._eventFunction[name];
      if (func) {
        if (func === EventEmitter.combiner) {
          func(this, name, arg1, arg2, arg3);
        } else {
          func(arg1, arg2, arg3);
        }
      }
    }
  }
  listenerCount(name) {
    if (this._hasEventListeners) {
      const func = this._eventFunction[name];
      if (func) {
        if (func === EventEmitter.combiner) {
          return this._eventListeners[name].length;
        } else {
          return 1;
        }
      }
    }
    return 0;
  }
  removeAllListeners(name) {
    if (this._hasEventListeners) {
      delete this._eventFunction[name];
      delete this._eventListeners[name];
    }
  }
}
EventEmitter.combiner = function(object, name, arg1, arg2, arg3) {
  const listeners = object._eventListeners[name];
  if (listeners) {
    for (const listener of [...listeners]) {
      listener(arg1, arg2, arg3);
    }
  }
};
EventEmitter.addAsMixin = function(cls) {
  cls.prototype.on = EventEmitter.prototype.on;
  cls.prototype.once = EventEmitter.prototype.once;
  cls.prototype.has = EventEmitter.prototype.has;
  cls.prototype.off = EventEmitter.prototype.off;
  cls.prototype.removeListener = EventEmitter.prototype.removeListener;
  cls.prototype.emit = EventEmitter.prototype.emit;
  cls.prototype.listenerCount = EventEmitter.prototype.listenerCount;
  cls.prototype.removeAllListeners = EventEmitter.prototype.removeAllListeners;
};
class Shader {
  constructor(coreContext) {
    this._initialized = false;
    this.ctx = coreContext;
    this._elements = /* @__PURE__ */ new Set();
  }
  static create(stage, v) {
    let shader;
    if (Utils$1.isObjectLiteral(v)) {
      if (v.type) {
        shader = stage.renderer.createShader(stage.ctx, v);
      } else {
        shader = this.shader;
      }
      if (shader) {
        Base.patchObject(shader, v);
      }
    } else if (v === null) {
      shader = stage.ctx.renderState.defaultShader;
    } else if (v === void 0) {
      shader = null;
    } else {
      if (v.isShader) {
        if (!stage.renderer.isValidShaderType(v.constructor)) {
          console.error("[Lightning] Invalid shader type");
          v = null;
        }
        shader = v;
      } else {
        console.error("[Lightning] Please specify a shader type.");
        return;
      }
    }
    return shader;
  }
  static getWebGL() {
    return void 0;
  }
  static getC2d() {
    return void 0;
  }
  addElement(elementCore) {
    this._elements.add(elementCore);
  }
  removeElement(elementCore) {
    this._elements.delete(elementCore);
    if (!this._elements) {
      this.cleanup();
    }
  }
  redraw() {
    this._elements.forEach((elementCore) => {
      elementCore.setHasRenderUpdates(2);
    });
  }
  patch(settings) {
    Base.patchObject(this, settings);
  }
  useDefault() {
    return false;
  }
  addEmpty() {
    return false;
  }
  cleanup() {
  }
  get isShader() {
    return true;
  }
}
class Texture {
  constructor(stage) {
    this.stage = stage;
    this.manager = this.stage.textureManager;
    this.id = Texture.id++;
    this.elements = /* @__PURE__ */ new Set();
    this._activeCount = 0;
    this._source = null;
    this._resizeMode = null;
    this._x = 0;
    this._y = 0;
    this._w = 0;
    this._h = 0;
    this._precision = 1;
    this.mw = 0;
    this.mh = 0;
    this.clipping = false;
    this._mustUpdate = true;
  }
  get source() {
    if (this._mustUpdate || this.stage.hasUpdateSourceTexture(this)) {
      this._performUpdateSource(true);
      this.stage.removeUpdateSourceTexture(this);
    }
    return this._source;
  }
  addElement(v) {
    if (!this.elements.has(v)) {
      this.elements.add(v);
      if (this.elements.size === 1) {
        if (this._source) {
          this._source.addTexture(this);
        }
      }
      if (v.active) {
        this.incActiveCount();
      }
    }
  }
  removeElement(v) {
    if (this.elements.delete(v)) {
      if (this.elements.size === 0) {
        if (this._source) {
          this._source.removeTexture(this);
        }
      }
      if (v.active) {
        this.decActiveCount();
      }
    }
  }
  incActiveCount() {
    const source = this.source;
    if (source) {
      this._checkForNewerReusableTextureSource();
    }
    this._activeCount++;
    if (this._activeCount === 1) {
      this.becomesUsed();
    }
  }
  decActiveCount() {
    this.source;
    this._activeCount--;
    if (!this._activeCount) {
      this.becomesUnused();
    }
  }
  becomesUsed() {
    if (this.source) {
      this.source.incActiveTextureCount();
    }
  }
  onLoad() {
    if (this._resizeMode) {
      this._applyResizeMode();
    }
    this.elements.forEach((element) => {
      if (element.active) {
        element.onTextureSourceLoaded();
      }
    });
  }
  _checkForNewerReusableTextureSource() {
    const source = this.source;
    if (!source.isLoaded()) {
      const reusable = this._getReusableTextureSource();
      if (reusable && reusable.isLoaded() && reusable !== source) {
        this._replaceTextureSource(reusable);
      }
    } else {
      if (this._resizeMode) {
        this._applyResizeMode();
      }
    }
  }
  becomesUnused() {
    if (this.source) {
      this.source.decActiveTextureCount();
    }
  }
  isUsed() {
    return this._activeCount > 0;
  }
  _getLookupId() {
    return null;
  }
  _getSourceLoader() {
    throw new Error("Texture.generate must be implemented.");
  }
  get isValid() {
    return this._getIsValid();
  }
  _getIsValid() {
    return true;
  }
  _changed() {
    if (this.isUsed()) {
      this._updateSource();
    } else {
      this._mustUpdate = true;
    }
  }
  _updateSource() {
    this.stage.addUpdateSourceTexture(this);
  }
  _performUpdateSource(force = false) {
    if (force || this.isUsed()) {
      this._mustUpdate = false;
      let source = this._getTextureSource();
      this._replaceTextureSource(source);
    }
  }
  _getTextureSource() {
    let source = null;
    if (this._getIsValid()) {
      const lookupId = this._getLookupId();
      source = this._getReusableTextureSource(lookupId);
      if (!source) {
        source = this.manager.getTextureSource(this._getSourceLoader(), lookupId);
      }
    }
    return source;
  }
  _getReusableTextureSource(lookupId = this._getLookupId()) {
    if (this._getIsValid()) {
      if (lookupId) {
        return this.manager.getReusableTextureSource(lookupId);
      }
    }
    return null;
  }
  _replaceTextureSource(newSource = null) {
    let oldSource = this._source;
    this._source = newSource;
    if (this.elements.size) {
      if (oldSource) {
        if (this._activeCount) {
          oldSource.decActiveTextureCount();
        }
        oldSource.removeTexture(this);
        if (this["text"] && !oldSource.isUsed()) {
          this.manager.freeTextureSource(oldSource);
        }
      }
      if (newSource) {
        newSource.addTexture(this);
        if (this._activeCount) {
          newSource.incActiveTextureCount();
        }
      }
    }
    if (this.isUsed()) {
      if (newSource) {
        if (newSource.isLoaded()) {
          if (this._resizeMode) {
            this._applyResizeMode();
          }
          this.elements.forEach((element) => {
            if (element.active) {
              element._setDisplayedTexture(this);
            }
          });
        } else {
          const loadError = newSource.loadError;
          if (loadError) {
            this.elements.forEach((element) => {
              if (element.active) {
                element.onTextureSourceLoadError(loadError);
              }
            });
          }
        }
      } else {
        this.elements.forEach((element) => {
          if (element.active) {
            element._setDisplayedTexture(null);
          }
        });
      }
    }
  }
  load() {
    if (this.source) {
      if (!this.isLoaded()) {
        this.source.load(true);
      }
    }
  }
  isLoaded() {
    return this._source && this._source.isLoaded();
  }
  get loadError() {
    return this._source && this._source.loadError;
  }
  free() {
    if (this._source) {
      this._source.free();
    }
  }
  set resizeMode({ type = "cover", w = 0, h = 0, clipX = 0.5, clipY = 0.5 }) {
    this._resizeMode = { type, w, h, clipX, clipY };
    if (this.isLoaded()) {
      this._applyResizeMode();
    }
  }
  get resizeMode() {
    return this._resizeMode;
  }
  _clearResizeMode() {
    this._resizeMode = null;
  }
  _applyResizeMode() {
    if (this._resizeMode.type === "cover") {
      this._applyResizeCover();
    } else if (this._resizeMode.type === "contain") {
      this._applyResizeContain();
    }
    this._updatePrecision();
    this._updateClipping();
  }
  _applyResizeCover() {
    const scaleX = this._resizeMode.w / this._source.w;
    const scaleY = this._resizeMode.h / this._source.h;
    let scale = Math.max(scaleX, scaleY);
    if (!scale)
      return;
    this._precision = 1 / scale;
    if (scaleX && scaleX < scale) {
      const desiredSize = this._precision * this._resizeMode.w;
      const choppedOffPixels = this._source.w - desiredSize;
      this._x = choppedOffPixels * this._resizeMode.clipX;
      this._w = this._source.w - choppedOffPixels;
    }
    if (scaleY && scaleY < scale) {
      const desiredSize = this._precision * this._resizeMode.h;
      const choppedOffPixels = this._source.h - desiredSize;
      this._y = choppedOffPixels * this._resizeMode.clipY;
      this._h = this._source.h - choppedOffPixels;
    }
  }
  _applyResizeContain() {
    const scaleX = this._resizeMode.w / this._source.w;
    const scaleY = this._resizeMode.h / this._source.h;
    let scale = scaleX;
    if (!scale || scaleY < scale) {
      scale = scaleY;
    }
    if (!scale)
      return;
    this._precision = 1 / scale;
  }
  enableClipping(x, y, w, h) {
    this._clearResizeMode();
    x *= this._precision;
    y *= this._precision;
    w *= this._precision;
    h *= this._precision;
    if (this._x !== x || this._y !== y || this._w !== w || this._h !== h) {
      this._x = x;
      this._y = y;
      this._w = w;
      this._h = h;
      this._updateClipping(true);
    }
  }
  disableClipping() {
    this._clearResizeMode();
    if (this._x || this._y || this._w || this._h) {
      this._x = 0;
      this._y = 0;
      this._w = 0;
      this._h = 0;
      this._updateClipping();
    }
  }
  _updateClipping() {
    this.clipping = !!(this._x || this._y || this._w || this._h);
    let self = this;
    this.elements.forEach(function(element) {
      if (element.displayedTexture === self) {
        element.onDisplayedTextureClippingChanged();
      }
    });
  }
  _updatePrecision() {
    let self = this;
    this.elements.forEach(function(element) {
      if (element.displayedTexture === self) {
        element.onPrecisionChanged();
      }
    });
  }
  getNonDefaults() {
    let nonDefaults = {};
    nonDefaults["type"] = this.constructor.name;
    if (this.x !== 0)
      nonDefaults["x"] = this.x;
    if (this.y !== 0)
      nonDefaults["y"] = this.y;
    if (this.w !== 0)
      nonDefaults["w"] = this.w;
    if (this.h !== 0)
      nonDefaults["h"] = this.h;
    if (this.precision !== 1)
      nonDefaults["precision"] = this.precision;
    return nonDefaults;
  }
  get px() {
    return this._x;
  }
  get py() {
    return this._y;
  }
  get pw() {
    return this._w;
  }
  get ph() {
    return this._h;
  }
  get x() {
    return this._x / this._precision;
  }
  set x(v) {
    this._clearResizeMode();
    v = v * this._precision;
    if (this._x !== v) {
      this._x = v;
      this._updateClipping();
    }
  }
  get y() {
    return this._y / this._precision;
  }
  set y(v) {
    this._clearResizeMode();
    v = v * this._precision;
    if (this._y !== v) {
      this._y = v;
      this._updateClipping();
    }
  }
  get w() {
    return this._w / this._precision;
  }
  set w(v) {
    this._clearResizeMode();
    v = v * this._precision;
    if (this._w !== v) {
      this._w = v;
      this._updateClipping();
    }
  }
  get h() {
    return this._h / this._precision;
  }
  set h(v) {
    this._clearResizeMode();
    v = v * this._precision;
    if (this._h !== v) {
      this._h = v;
      this._updateClipping();
    }
  }
  get precision() {
    return this._precision;
  }
  set precision(v) {
    this._clearResizeMode();
    if (this._precision !== v) {
      this._precision = v;
      this._updatePrecision();
    }
  }
  isAutosizeTexture() {
    return true;
  }
  getRenderWidth() {
    if (!this.isAutosizeTexture()) {
      return 0;
    }
    return (this._w || (this._source ? this._source.getRenderWidth() - this._x : 0)) / this._precision;
  }
  getRenderHeight() {
    if (!this.isAutosizeTexture()) {
      return 0;
    }
    return (this._h || (this._source ? this._source.getRenderHeight() - this._y : 0)) / this._precision;
  }
  patch(settings) {
    Base.patchObject(this, settings);
  }
}
Texture.prototype.isTexture = true;
Texture.id = 0;
class ImageTexture extends Texture {
  constructor(stage) {
    super(stage);
    this._src = void 0;
    this._hasAlpha = false;
  }
  get src() {
    return this._src;
  }
  set src(v) {
    if (this._src !== v) {
      this._src = v;
      this._changed();
    }
  }
  get hasAlpha() {
    return this._hasAlpha;
  }
  set hasAlpha(v) {
    if (this._hasAlpha !== v) {
      this._hasAlpha = v;
      this._changed();
    }
  }
  _getIsValid() {
    return !!this._src;
  }
  _getLookupId() {
    return this._src;
  }
  _getSourceLoader() {
    let src = this._src;
    let hasAlpha = this._hasAlpha;
    if (this.stage.getOption("srcBasePath")) {
      var fc = src.charCodeAt(0);
      if (src.indexOf("//") === -1 && (fc >= 65 && fc <= 90 || fc >= 97 && fc <= 122 || fc == 46)) {
        src = this.stage.getOption("srcBasePath") + src;
      }
    }
    return (cb) => {
      return this.stage.platform.loadSrcTexture({ src, hasAlpha }, cb);
    };
  }
  getNonDefaults() {
    const obj = super.getNonDefaults();
    if (this._src) {
      obj.src = this._src;
    }
    return obj;
  }
}
function getFontSetting(fontFace, fontStyle, fontSize, precision, defaultFontFace) {
  let ff = fontFace;
  if (!Array.isArray(ff)) {
    ff = [ff];
  }
  let ffs = [];
  for (let i = 0, n = ff.length; i < n; i++) {
    let curFf = ff[i];
    if (curFf === null) {
      curFf = defaultFontFace;
    }
    if (curFf === "serif" || curFf === "sans-serif") {
      ffs.push(curFf);
    } else {
      ffs.push(`"${curFf}"`);
    }
  }
  return `${fontStyle} ${fontSize * precision}px ${ffs.join(",")}`;
}
function isZeroWidthSpace(space) {
  return space === "" || space === "​";
}
function isSpace(space) {
  return isZeroWidthSpace(space) || space === " ";
}
function tokenizeString(tokenRegex, text) {
  const delimeters = text.match(tokenRegex) || [];
  const words = text.split(tokenRegex) || [];
  let final = [];
  for (let i = 0; i < words.length; i++) {
    final.push(words[i], delimeters[i]);
  }
  final.pop();
  return final.filter((word) => word != "");
}
function measureText(context, word, space = 0) {
  if (!space) {
    return context.measureText(word).width;
  }
  return word.split("").reduce((acc, char) => {
    if (isZeroWidthSpace(char)) {
      return acc;
    }
    return acc + context.measureText(char).width + space;
  }, 0);
}
function wrapText(context, text, wordWrapWidth, letterSpacing, indent) {
  const spaceRegex = / |\u200B/g;
  let lines = text.split(/\r?\n/g);
  let allLines = [];
  let realNewlines = [];
  for (let i = 0; i < lines.length; i++) {
    let resultLines = [];
    let result = "";
    let spaceLeft = wordWrapWidth - indent;
    let words = lines[i].split(spaceRegex);
    let spaces = lines[i].match(spaceRegex) || [];
    for (let j = 0; j < words.length; j++) {
      const space = spaces[j - 1] || "";
      const word = words[j];
      const wordWidth = measureText(context, word, letterSpacing);
      const wordWidthWithSpace = wordWidth + measureText(context, space, letterSpacing);
      if (j === 0 || wordWidthWithSpace > spaceLeft) {
        if (j > 0) {
          resultLines.push(result);
          result = "";
        }
        result += word;
        spaceLeft = wordWrapWidth - wordWidth - (j === 0 ? indent : 0);
      } else {
        spaceLeft -= wordWidthWithSpace;
        result += space + word;
      }
    }
    resultLines.push(result);
    result = "";
    allLines = allLines.concat(resultLines);
    if (i < lines.length - 1) {
      realNewlines.push(allLines.length);
    }
  }
  return { l: allLines, n: realNewlines };
}
class TextTextureRenderer {
  constructor(stage, canvas, settings) {
    this._stage = stage;
    this._canvas = canvas;
    this._context = this._canvas.getContext("2d");
    this._settings = settings;
  }
  getPrecision() {
    return this._settings.precision;
  }
  setFontProperties() {
    this._context.font = getFontSetting(
      this._settings.fontFace,
      this._settings.fontStyle,
      this._settings.fontSize,
      this.getPrecision(),
      this._stage.getOption("defaultFontFace")
    );
    this._context.textBaseline = this._settings.textBaseline;
  }
  _load() {
    if (Utils$1.isWeb && document.fonts) {
      const fontSetting = getFontSetting(
        this._settings.fontFace,
        this._settings.fontStyle,
        this._settings.fontSize,
        this.getPrecision(),
        this._stage.getOption("defaultFontFace")
      );
      try {
        if (!document.fonts.check(fontSetting, this._settings.text)) {
          return document.fonts.load(fontSetting, this._settings.text).catch((err) => {
            console.warn("[Lightning] Font load error", err, fontSetting);
          }).then(() => {
            if (!document.fonts.check(fontSetting, this._settings.text)) {
              console.warn("[Lightning] Font not found", fontSetting);
            }
          });
        }
      } catch (e) {
        console.warn("[Lightning] Can't check font loading for " + fontSetting);
      }
    }
  }
  draw() {
    const loadPromise = this._load();
    if (!loadPromise) {
      return Utils$1.isSpark ? this._stage.platform.drawText(this) : this._draw();
    } else {
      return loadPromise.then(() => {
        return Utils$1.isSpark ? this._stage.platform.drawText(this) : this._draw();
      });
    }
  }
  _calculateRenderInfo() {
    let renderInfo = {};
    const precision = this.getPrecision();
    const paddingLeft = this._settings.paddingLeft * precision;
    const paddingRight = this._settings.paddingRight * precision;
    const fontSize = this._settings.fontSize * precision;
    let offsetY = this._settings.offsetY === null ? null : this._settings.offsetY * precision;
    let lineHeight = this._settings.lineHeight * precision;
    const w = this._settings.w * precision;
    const h = this._settings.h * precision;
    let wordWrapWidth = this._settings.wordWrapWidth * precision;
    const cutSx = this._settings.cutSx * precision;
    const cutEx = this._settings.cutEx * precision;
    const cutSy = this._settings.cutSy * precision;
    const cutEy = this._settings.cutEy * precision;
    const letterSpacing = (this._settings.letterSpacing || 0) * precision;
    const textIndent = this._settings.textIndent * precision;
    this.setFontProperties();
    let width = w || this._stage.getOption("w");
    let innerWidth = width - paddingLeft;
    if (innerWidth < 10) {
      width += 10 - innerWidth;
      innerWidth = 10;
    }
    if (!wordWrapWidth) {
      wordWrapWidth = innerWidth;
    }
    if (this._settings.textOverflow && !this._settings.wordWrap) {
      let suffix;
      switch (this._settings.textOverflow) {
        case "clip":
          suffix = "";
          break;
        case "ellipsis":
          suffix = this._settings.maxLinesSuffix;
          break;
        default:
          suffix = this._settings.textOverflow;
      }
      this._settings.text = this.wrapWord(this._settings.text, wordWrapWidth - textIndent, suffix);
    }
    let linesInfo;
    if (this._settings.wordWrap) {
      linesInfo = this.wrapText(this._settings.text, wordWrapWidth, letterSpacing, textIndent);
    } else {
      linesInfo = { l: this._settings.text.split(/(?:\r\n|\r|\n)/), n: [] };
      let n = linesInfo.l.length;
      for (let i = 0; i < n - 1; i++) {
        linesInfo.n.push(i);
      }
    }
    let lines = linesInfo.l;
    if (this._settings.maxLines && lines.length > this._settings.maxLines) {
      let usedLines = lines.slice(0, this._settings.maxLines);
      let otherLines = null;
      if (this._settings.maxLinesSuffix) {
        let w2 = this._settings.maxLinesSuffix ? this.measureText(this._settings.maxLinesSuffix) : 0;
        let al = this.wrapText(usedLines[usedLines.length - 1], wordWrapWidth - w2, letterSpacing, textIndent);
        usedLines[usedLines.length - 1] = al.l[0] + this._settings.maxLinesSuffix;
        otherLines = [al.l.length > 1 ? al.l[1] : ""];
      } else {
        otherLines = [""];
      }
      let i, n = lines.length;
      let j = 0;
      let m = linesInfo.n.length;
      for (i = this._settings.maxLines; i < n; i++) {
        otherLines[j] += (otherLines[j] ? " " : "") + lines[i];
        if (i + 1 < m && linesInfo.n[i + 1]) {
          j++;
        }
      }
      renderInfo.remainingText = otherLines.join("\n");
      renderInfo.moreTextLines = true;
      lines = usedLines;
    } else {
      renderInfo.moreTextLines = false;
      renderInfo.remainingText = "";
    }
    let maxLineWidth = 0;
    let lineWidths = [];
    for (let i = 0; i < lines.length; i++) {
      let lineWidth = this.measureText(lines[i], letterSpacing) + (i === 0 ? textIndent : 0);
      lineWidths.push(lineWidth);
      maxLineWidth = Math.max(maxLineWidth, lineWidth);
    }
    renderInfo.lineWidths = lineWidths;
    if (!w) {
      width = maxLineWidth + paddingLeft + paddingRight;
      innerWidth = maxLineWidth;
    }
    lineHeight = lineHeight || fontSize;
    let height;
    if (h) {
      height = h;
    } else {
      const baselineOffset = this._settings.textBaseline != "bottom" ? 0.5 * fontSize : 0;
      height = lineHeight * (lines.length - 1) + baselineOffset + Math.max(lineHeight, fontSize) + offsetY;
    }
    if (offsetY === null) {
      offsetY = fontSize;
    }
    renderInfo.w = width;
    renderInfo.h = height;
    renderInfo.lines = lines;
    renderInfo.precision = precision;
    if (!width) {
      width = 1;
    }
    if (!height) {
      height = 1;
    }
    if (cutSx || cutEx) {
      width = Math.min(width, cutEx - cutSx);
    }
    if (cutSy || cutEy) {
      height = Math.min(height, cutEy - cutSy);
    }
    renderInfo.width = width;
    renderInfo.innerWidth = innerWidth;
    renderInfo.height = height;
    renderInfo.fontSize = fontSize;
    renderInfo.cutSx = cutSx;
    renderInfo.cutSy = cutSy;
    renderInfo.cutEx = cutEx;
    renderInfo.cutEy = cutEy;
    renderInfo.lineHeight = lineHeight;
    renderInfo.lineWidths = lineWidths;
    renderInfo.offsetY = offsetY;
    renderInfo.paddingLeft = paddingLeft;
    renderInfo.paddingRight = paddingRight;
    renderInfo.letterSpacing = letterSpacing;
    renderInfo.textIndent = textIndent;
    return renderInfo;
  }
  _draw() {
    const renderInfo = this._calculateRenderInfo();
    const precision = this.getPrecision();
    this._canvas.width = Math.ceil(renderInfo.width + this._stage.getOption("textRenderIssueMargin"));
    this._canvas.height = Math.ceil(renderInfo.height);
    this.setFontProperties();
    if (renderInfo.fontSize >= 128) {
      this._context.globalAlpha = 0.01;
      this._context.fillRect(0, 0, 0.01, 0.01);
      this._context.globalAlpha = 1;
    }
    if (renderInfo.cutSx || renderInfo.cutSy) {
      this._context.translate(-renderInfo.cutSx, -renderInfo.cutSy);
    }
    let linePositionX;
    let linePositionY;
    let drawLines = [];
    for (let i = 0, n = renderInfo.lines.length; i < n; i++) {
      linePositionX = i === 0 ? renderInfo.textIndent : 0;
      linePositionY = i * renderInfo.lineHeight + renderInfo.offsetY;
      if (this._settings.verticalAlign == "middle") {
        linePositionY += (renderInfo.lineHeight - renderInfo.fontSize) / 2;
      } else if (this._settings.verticalAlign == "bottom") {
        linePositionY += renderInfo.lineHeight - renderInfo.fontSize;
      }
      if (this._settings.textAlign === "right") {
        linePositionX += renderInfo.innerWidth - renderInfo.lineWidths[i];
      } else if (this._settings.textAlign === "center") {
        linePositionX += (renderInfo.innerWidth - renderInfo.lineWidths[i]) / 2;
      }
      linePositionX += renderInfo.paddingLeft;
      drawLines.push({ text: renderInfo.lines[i], x: linePositionX, y: linePositionY, w: renderInfo.lineWidths[i] });
    }
    if (this._settings.highlight) {
      let color = this._settings.highlightColor || 0;
      let hlHeight = this._settings.highlightHeight * precision || renderInfo.fontSize * 1.5;
      const offset = this._settings.highlightOffset * precision;
      const hlPaddingLeft = this._settings.highlightPaddingLeft !== null ? this._settings.highlightPaddingLeft * precision : renderInfo.paddingLeft;
      const hlPaddingRight = this._settings.highlightPaddingRight !== null ? this._settings.highlightPaddingRight * precision : renderInfo.paddingRight;
      this._context.fillStyle = StageUtils.getRgbaString(color);
      for (let i = 0; i < drawLines.length; i++) {
        let drawLine = drawLines[i];
        this._context.fillRect(drawLine.x - hlPaddingLeft, drawLine.y - renderInfo.offsetY + offset, drawLine.w + hlPaddingRight + hlPaddingLeft, hlHeight);
      }
    }
    let prevShadowSettings = null;
    if (this._settings.shadow) {
      prevShadowSettings = [this._context.shadowColor, this._context.shadowOffsetX, this._context.shadowOffsetY, this._context.shadowBlur];
      this._context.shadowColor = StageUtils.getRgbaString(this._settings.shadowColor);
      this._context.shadowOffsetX = this._settings.shadowOffsetX * precision;
      this._context.shadowOffsetY = this._settings.shadowOffsetY * precision;
      this._context.shadowBlur = this._settings.shadowBlur * precision;
    }
    this._context.fillStyle = StageUtils.getRgbaString(this._settings.textColor);
    for (let i = 0, n = drawLines.length; i < n; i++) {
      let drawLine = drawLines[i];
      if (renderInfo.letterSpacing === 0) {
        this._context.fillText(drawLine.text, drawLine.x, drawLine.y);
      } else {
        const textSplit = drawLine.text.split("");
        let x = drawLine.x;
        for (let i2 = 0, j = textSplit.length; i2 < j; i2++) {
          this._context.fillText(textSplit[i2], x, drawLine.y);
          x += this.measureText(textSplit[i2], renderInfo.letterSpacing);
        }
      }
    }
    if (prevShadowSettings) {
      this._context.shadowColor = prevShadowSettings[0];
      this._context.shadowOffsetX = prevShadowSettings[1];
      this._context.shadowOffsetY = prevShadowSettings[2];
      this._context.shadowBlur = prevShadowSettings[3];
    }
    if (renderInfo.cutSx || renderInfo.cutSy) {
      this._context.translate(renderInfo.cutSx, renderInfo.cutSy);
    }
    this.renderInfo = renderInfo;
  }
  wrapWord(word, wordWrapWidth, suffix) {
    const suffixWidth = this.measureText(suffix);
    const wordLen = word.length;
    const wordWidth = this.measureText(word);
    if (wordWidth <= wordWrapWidth) {
      return word;
    }
    let cutoffIndex = Math.floor(wordWrapWidth * wordLen / wordWidth);
    let truncWordWidth = this.measureText(word.substring(0, cutoffIndex)) + suffixWidth;
    if (truncWordWidth > wordWrapWidth) {
      while (cutoffIndex > 0) {
        truncWordWidth = this.measureText(word.substring(0, cutoffIndex)) + suffixWidth;
        if (truncWordWidth > wordWrapWidth) {
          cutoffIndex -= 1;
        } else {
          break;
        }
      }
    } else {
      while (cutoffIndex < wordLen) {
        truncWordWidth = this.measureText(word.substring(0, cutoffIndex)) + suffixWidth;
        if (truncWordWidth < wordWrapWidth) {
          cutoffIndex += 1;
        } else {
          cutoffIndex -= 1;
          break;
        }
      }
    }
    return word.substring(0, cutoffIndex) + (wordWrapWidth >= suffixWidth ? suffix : "");
  }
  wrapText(text, wordWrapWidth, letterSpacing, indent = 0) {
    return wrapText(this._context, text, wordWrapWidth, letterSpacing, indent);
  }
  measureText(word, space = 0) {
    return measureText(this._context, word, space);
  }
}
class TextTextureRendererAdvanced {
  constructor(stage, canvas, settings) {
    this._stage = stage;
    this._canvas = canvas;
    this._context = this._canvas.getContext("2d");
    this._settings = settings;
  }
  getPrecision() {
    return this._settings.precision;
  }
  setFontProperties() {
    const font = getFontSetting(
      this._settings.fontFace,
      this._settings.fontStyle,
      this._settings.fontSize,
      this.getPrecision(),
      this._stage.getOption("defaultFontFace")
    );
    this._context.font = font;
    this._context.textBaseline = this._settings.textBaseline;
    return font;
  }
  _load() {
    if (Utils$1.isWeb && document.fonts) {
      const fontSetting = getFontSetting(
        this._settings.fontFace,
        this._settings.fontStyle,
        this._settings.fontSize,
        this.getPrecision(),
        this._stage.getOption("defaultFontFace")
      );
      try {
        if (!document.fonts.check(fontSetting, this._settings.text)) {
          return document.fonts.load(fontSetting, this._settings.text).catch((err) => {
            console.warn("Font load error", err, fontSetting);
          }).then(() => {
            if (!document.fonts.check(fontSetting, this._settings.text)) {
              console.warn("Font not found", fontSetting);
            }
          });
        }
      } catch (e) {
        console.warn("Can't check font loading for " + fontSetting);
      }
    }
  }
  draw() {
    const loadPromise = this._load();
    if (!loadPromise) {
      return Utils$1.isSpark ? this._stage.platform.drawText(this) : this._draw();
    } else {
      return loadPromise.then(() => {
        return Utils$1.isSpark ? this._stage.platform.drawText(this) : this._draw();
      });
    }
  }
  _calculateRenderInfo() {
    let renderInfo = {};
    const precision = this.getPrecision();
    const paddingLeft = this._settings.paddingLeft * precision;
    const paddingRight = this._settings.paddingRight * precision;
    const fontSize = this._settings.fontSize * precision;
    const lineHeight = this._settings.lineHeight * precision || fontSize;
    const w = this._settings.w != 0 ? this._settings.w * precision : this._stage.getOption("w");
    const wordWrapWidth = this._settings.wordWrapWidth * precision;
    const cutSx = this._settings.cutSx * precision;
    const cutEx = this._settings.cutEx * precision;
    const cutSy = this._settings.cutSy * precision;
    const cutEy = this._settings.cutEy * precision;
    const letterSpacing = this._settings.letterSpacing || 0;
    renderInfo.baseFont = this.setFontProperties();
    renderInfo.w = w;
    renderInfo.width = w;
    renderInfo.text = this._settings.text;
    renderInfo.precision = precision;
    renderInfo.fontSize = fontSize;
    renderInfo.fontBaselineRatio = this._settings.fontBaselineRatio;
    renderInfo.lineHeight = lineHeight;
    renderInfo.letterSpacing = letterSpacing;
    renderInfo.textAlign = this._settings.textAlign;
    renderInfo.textColor = this._settings.textColor;
    renderInfo.verticalAlign = this._settings.verticalAlign;
    renderInfo.highlight = this._settings.highlight;
    renderInfo.highlightColor = this._settings.highlightColor;
    renderInfo.highlightHeight = this._settings.highlightHeight;
    renderInfo.highlightPaddingLeft = this._settings.highlightPaddingLeft;
    renderInfo.highlightPaddingRight = this._settings.highlightPaddingRight;
    renderInfo.highlightOffset = this._settings.highlightOffset;
    renderInfo.paddingLeft = this._settings.paddingLeft;
    renderInfo.paddingRight = this._settings.paddingRight;
    renderInfo.maxLines = this._settings.maxLines;
    renderInfo.maxLinesSuffix = this._settings.maxLinesSuffix;
    renderInfo.textOverflow = this._settings.textOverflow;
    renderInfo.wordWrap = this._settings.wordWrap;
    renderInfo.wordWrapWidth = wordWrapWidth;
    renderInfo.shadow = this._settings.shadow;
    renderInfo.shadowColor = this._settings.shadowColor;
    renderInfo.shadowOffsetX = this._settings.shadowOffsetX;
    renderInfo.shadowOffsetY = this._settings.shadowOffsetY;
    renderInfo.shadowBlur = this._settings.shadowBlur;
    renderInfo.cutSx = cutSx;
    renderInfo.cutEx = cutEx;
    renderInfo.cutSy = cutSy;
    renderInfo.cutEy = cutEy;
    renderInfo.textIndent = this._settings.textIndent * precision;
    renderInfo.wordBreak = this._settings.wordBreak;
    let text = renderInfo.text;
    let wrapWidth = renderInfo.wordWrap ? renderInfo.wordWrapWidth || renderInfo.width : renderInfo.width;
    if (renderInfo.textOverflow && !renderInfo.wordWrap) {
      let suffix;
      switch (this._settings.textOverflow) {
        case "clip":
          suffix = "";
          break;
        case "ellipsis":
          suffix = this._settings.maxLinesSuffix;
          break;
        default:
          suffix = this._settings.textOverflow;
      }
      text = this.wrapWord(text, wordWrapWidth || renderInfo.w, suffix);
    }
    text = this.tokenize(text);
    text = this.parse(text);
    text = this.measure(text, letterSpacing, renderInfo.baseFont);
    if (renderInfo.textIndent) {
      text = this.indent(text, renderInfo.textIndent);
    }
    if (renderInfo.wordBreak) {
      text = text.reduce((acc, t) => acc.concat(this.wordBreak(t, wrapWidth, renderInfo.baseFont)), []);
      this.resetFontStyle();
    }
    let x = paddingLeft;
    let lineNo = 0;
    for (const t of text) {
      if (renderInfo.wordWrap && x + t.width > wrapWidth || t.text == "\n") {
        x = paddingLeft;
        lineNo += 1;
      }
      t.lineNo = lineNo;
      if (t.text == "\n") {
        continue;
      }
      t.x = x;
      x += t.width;
    }
    renderInfo.lineNum = lineNo + 1;
    if (this._settings.h) {
      renderInfo.h = this._settings.h;
    } else if (renderInfo.maxLines && renderInfo.maxLines < renderInfo.lineNum) {
      renderInfo.h = renderInfo.maxLines * renderInfo.lineHeight + fontSize / 2;
    } else {
      renderInfo.h = renderInfo.lineNum * renderInfo.lineHeight + fontSize / 2;
    }
    const baselineOffsetInPx = renderInfo.fontBaselineRatio * renderInfo.fontSize;
    let vaOffset = 0;
    if (renderInfo.verticalAlign == "top" && this._context.textBaseline == "alphabetic") {
      vaOffset = -baselineOffsetInPx;
    } else if (renderInfo.verticalAlign == "middle") {
      vaOffset = (renderInfo.lineHeight - renderInfo.fontSize - baselineOffsetInPx) / 2;
    } else if (this._settings.verticalAlign == "bottom") {
      vaOffset = renderInfo.lineHeight - renderInfo.fontSize;
    }
    renderInfo.lines = [];
    for (let i = 0; i < renderInfo.lineNum; i++) {
      renderInfo.lines[i] = {
        width: 0,
        x: 0,
        y: renderInfo.lineHeight * i + vaOffset,
        text: []
      };
    }
    for (let t of text) {
      renderInfo.lines[t.lineNo].text.push(t);
    }
    for (const l of renderInfo.lines) {
      if (l.text.length == 0) {
        continue;
      }
      const firstWord = l.text[0].text;
      const lastWord = l.text[l.text.length - 1].text;
      if (firstWord == "\n") {
        l.text.shift();
      }
      if (isSpace(lastWord) || lastWord == "\n") {
        l.text.pop();
      }
    }
    for (let l of renderInfo.lines) {
      l.width = l.text.reduce((acc, t) => acc + t.width, 0);
    }
    renderInfo.width = this._settings.w != 0 ? this._settings.w * precision : Math.max(...renderInfo.lines.map((l) => l.width)) + paddingRight;
    renderInfo.w = renderInfo.width;
    if (renderInfo.maxLines && renderInfo.lineNum > renderInfo.maxLines && renderInfo.maxLinesSuffix) {
      const index = renderInfo.maxLines - 1;
      let lastLineText = text.filter((t) => t.lineNo == index);
      let suffix = renderInfo.maxLinesSuffix;
      suffix = this.tokenize(suffix);
      suffix = this.parse(suffix);
      suffix = this.measure(suffix, renderInfo.letterSpacing, renderInfo.baseFont);
      for (const s of suffix) {
        s.lineNo = index;
        s.x = 0;
        lastLineText.push(s);
      }
      const spl = suffix.length + 1;
      let _w = lastLineText.reduce((acc, t) => acc + t.width, 0);
      while (_w > renderInfo.width || isSpace(lastLineText[lastLineText.length - spl].text)) {
        lastLineText.splice(lastLineText.length - spl, 1);
        _w = lastLineText.reduce((acc, t) => acc + t.width, 0);
        if (lastLineText.length < spl) {
          break;
        }
      }
      this.alignLine(lastLineText, lastLineText[0].x);
      renderInfo.lines[index].text = lastLineText;
      renderInfo.lines[index].width = _w;
    }
    if (renderInfo.textAlign == "center") {
      for (let l of renderInfo.lines) {
        l.x = (renderInfo.width - l.width - paddingLeft) / 2;
      }
    } else if (renderInfo.textAlign == "right") {
      for (let l of renderInfo.lines) {
        l.x = renderInfo.width - l.width - paddingLeft;
      }
    }
    return renderInfo;
  }
  _draw() {
    const renderInfo = this._calculateRenderInfo();
    const precision = this.getPrecision();
    const paddingLeft = renderInfo.paddingLeft * precision;
    let canvasWidth = renderInfo.w || renderInfo.width;
    if (renderInfo.cutSx || renderInfo.cutEx) {
      canvasWidth = Math.min(renderInfo.w, renderInfo.cutEx - renderInfo.cutSx);
    }
    let canvasHeight = renderInfo.h;
    if (renderInfo.cutSy || renderInfo.cutEy) {
      canvasHeight = Math.min(renderInfo.h, renderInfo.cutEy - renderInfo.cutSy);
    }
    this._canvas.width = Math.ceil(canvasWidth + this._stage.getOption("textRenderIssueMargin"));
    this._canvas.height = Math.ceil(canvasHeight);
    this.setFontProperties();
    if (renderInfo.fontSize >= 128) {
      this._context.globalAlpha = 0.01;
      this._context.fillRect(0, 0, 0.01, 0.01);
      this._context.globalAlpha = 1;
    }
    if (renderInfo.cutSx || renderInfo.cutSy) {
      this._context.translate(-renderInfo.cutSx, -renderInfo.cutSy);
    }
    if (renderInfo.highlight) {
      const hlColor = renderInfo.highlightColor || 0;
      const hlHeight = renderInfo.highlightHeight ? renderInfo.highlightHeight * precision : renderInfo.fontSize * 1.5;
      const hlOffset = renderInfo.highlightOffset ? renderInfo.highlightOffset * precision : 0;
      const hlPaddingLeft = renderInfo.highlightPaddingLeft !== null ? renderInfo.highlightPaddingLeft * precision : renderInfo.paddingLeft;
      const hlPaddingRight = renderInfo.highlightPaddingRight !== null ? renderInfo.highlightPaddingRight * precision : renderInfo.paddingRight;
      this._context.fillStyle = StageUtils.getRgbaString(hlColor);
      const lineNum = renderInfo.maxLines ? Math.min(renderInfo.maxLines, renderInfo.lineNum) : renderInfo.lineNum;
      for (let i = 0; i < lineNum; i++) {
        const l = renderInfo.lines[i];
        this._context.fillRect(l.x - hlPaddingLeft + paddingLeft, l.y + hlOffset, l.width + hlPaddingLeft + hlPaddingRight, hlHeight);
      }
    }
    let prevShadowSettings = null;
    if (this._settings.shadow) {
      prevShadowSettings = [this._context.shadowColor, this._context.shadowOffsetX, this._context.shadowOffsetY, this._context.shadowBlur];
      this._context.shadowColor = StageUtils.getRgbaString(this._settings.shadowColor);
      this._context.shadowOffsetX = this._settings.shadowOffsetX * precision;
      this._context.shadowOffsetY = this._settings.shadowOffsetY * precision;
      this._context.shadowBlur = this._settings.shadowBlur * precision;
    }
    const defaultColor = StageUtils.getRgbaString(this._settings.textColor);
    let currentColor = defaultColor;
    this._context.fillStyle = defaultColor;
    for (const line of renderInfo.lines) {
      for (const t of line.text) {
        let lx = 0;
        if (t.text == "\n") {
          continue;
        }
        if (renderInfo.maxLines && t.lineNo >= renderInfo.maxLines) {
          continue;
        }
        if (t.color != currentColor) {
          currentColor = t.color;
          this._context.fillStyle = currentColor;
        }
        this._context.font = t.fontStyle;
        if (t.letters) {
          for (let l of t.letters) {
            const _x = renderInfo.lines[t.lineNo].x + t.x + lx;
            this._context.fillText(l.text, _x, renderInfo.lines[t.lineNo].y + renderInfo.fontSize);
            lx += l.width;
          }
        } else {
          const _x = renderInfo.lines[t.lineNo].x + t.x;
          this._context.fillText(t.text, _x, renderInfo.lines[t.lineNo].y + renderInfo.fontSize);
        }
      }
    }
    if (prevShadowSettings) {
      this._context.shadowColor = prevShadowSettings[0];
      this._context.shadowOffsetX = prevShadowSettings[1];
      this._context.shadowOffsetY = prevShadowSettings[2];
      this._context.shadowBlur = prevShadowSettings[3];
    }
    if (renderInfo.cutSx || renderInfo.cutSy) {
      this._context.translate(renderInfo.cutSx, renderInfo.cutSy);
    }
    renderInfo.lines = renderInfo.lines.map((l) => l.text.reduce((acc, v) => acc + v.text, ""));
    if (renderInfo.maxLines) {
      renderInfo.lines = renderInfo.lines.slice(0, renderInfo.maxLines);
    }
    this.renderInfo = renderInfo;
  }
  measureText(word, space = 0) {
    return measureText(this._context, word, space);
  }
  tokenize(text) {
    return tokenizeString(/ |\u200B|\n|<i>|<\/i>|<b>|<\/b>|<color=0[xX][0-9a-fA-F]{8}>|<\/color>/g, text);
  }
  parse(tokens) {
    let italic = 0;
    let bold = 0;
    let colorStack = [StageUtils.getRgbaString(this._settings.textColor)];
    let color = 0;
    const colorRegexp = /<color=(0[xX][0-9a-fA-F]{8})>/;
    return tokens.map((t) => {
      if (t == "<i>") {
        italic += 1;
        t = "";
      } else if (t == "</i>" && italic > 0) {
        italic -= 1;
        t = "";
      } else if (t == "<b>") {
        bold += 1;
        t = "";
      } else if (t == "</b>" && bold > 0) {
        bold -= 1;
        t = "";
      } else if (t == "</color>") {
        if (colorStack.length > 1) {
          color -= 1;
          colorStack.pop();
        }
        t = "";
      } else if (colorRegexp.test(t)) {
        const matched = colorRegexp.exec(t);
        colorStack.push(
          StageUtils.getRgbaString(parseInt(matched[1]))
        );
        color += 1;
        t = "";
      }
      return {
        text: t,
        italic,
        bold,
        color: colorStack[color]
      };
    }).filter((o) => o.text != "");
  }
  applyFontStyle(word, baseFont) {
    let font = baseFont;
    if (word.bold) {
      font = "bold " + font;
    }
    if (word.italic) {
      font = "italic " + font;
    }
    this._context.font = font;
    word.fontStyle = font;
  }
  resetFontStyle(baseFont) {
    this._context.font = baseFont;
  }
  measure(parsed, letterSpacing = 0, baseFont) {
    for (const p of parsed) {
      this.applyFontStyle(p, baseFont);
      p.width = this.measureText(p.text, letterSpacing);
      if (letterSpacing > 0) {
        p.letters = p.text.split("").map((l) => {
          return { text: l };
        });
        for (let l of p.letters) {
          l.width = this.measureText(l.text, letterSpacing);
        }
      }
    }
    this.resetFontStyle(baseFont);
    return parsed;
  }
  indent(parsed, textIndent) {
    parsed.splice(0, 0, { text: "", width: textIndent });
    return parsed;
  }
  wrapWord(word, wordWrapWidth, suffix) {
    const suffixWidth = this.measureText(suffix);
    const wordLen = word.length;
    const wordWidth = this.measureText(word);
    if (wordWidth <= wordWrapWidth) {
      return word;
    }
    let cutoffIndex = Math.floor(wordWrapWidth * wordLen / wordWidth);
    let truncWordWidth = this.measureText(word.substring(0, cutoffIndex)) + suffixWidth;
    if (truncWordWidth > wordWrapWidth) {
      while (cutoffIndex > 0) {
        truncWordWidth = this.measureText(word.substring(0, cutoffIndex)) + suffixWidth;
        if (truncWordWidth > wordWrapWidth) {
          cutoffIndex -= 1;
        } else {
          break;
        }
      }
    } else {
      while (cutoffIndex < wordLen) {
        truncWordWidth = this.measureText(word.substring(0, cutoffIndex)) + suffixWidth;
        if (truncWordWidth < wordWrapWidth) {
          cutoffIndex += 1;
        } else {
          cutoffIndex -= 1;
          break;
        }
      }
    }
    return word.substring(0, cutoffIndex) + (wordWrapWidth >= suffixWidth ? suffix : "");
  }
  _getBreakIndex(word, width) {
    const wordLen = word.length;
    const wordWidth = this.measureText(word);
    if (wordWidth <= width) {
      return { breakIndex: word.length, truncWordWidth: wordWidth };
    }
    let breakIndex = Math.floor(width * wordLen / wordWidth);
    let truncWordWidth = this.measureText(word.substring(0, breakIndex));
    if (truncWordWidth > width) {
      while (breakIndex > 0) {
        truncWordWidth = this.measureText(word.substring(0, breakIndex));
        if (truncWordWidth > width) {
          breakIndex -= 1;
        } else {
          break;
        }
      }
    } else {
      while (breakIndex < wordLen) {
        truncWordWidth = this.measureText(word.substring(0, breakIndex));
        if (truncWordWidth < width) {
          breakIndex += 1;
        } else {
          breakIndex -= 1;
          truncWordWidth = this.measureText(word.substring(0, breakIndex));
          break;
        }
      }
    }
    return { breakIndex, truncWordWidth };
  }
  wordBreak(word, width, baseFont) {
    if (!word.text) {
      return word;
    }
    this.applyFontStyle(word, baseFont);
    const parts = [];
    let text = word.text;
    if (!word.letters) {
      while (true) {
        const { breakIndex, truncWordWidth } = this._getBreakIndex(text, width);
        parts.push({ ...word });
        parts[parts.length - 1].text = text.slice(0, breakIndex);
        parts[parts.length - 1].width = truncWordWidth;
        if (breakIndex === text.length) {
          break;
        }
        text = text.slice(breakIndex);
      }
    } else {
      let totalWidth = 0;
      let letters = [];
      let breakIndex = 0;
      for (const l of word.letters) {
        if (totalWidth + l.width >= width) {
          parts.push({ ...word });
          parts[parts.length - 1].text = text.slice(0, breakIndex);
          parts[parts.length - 1].width = totalWidth;
          parts[parts.length - 1].letters = letters;
          text = text.slice(breakIndex);
          totalWidth = 0;
          letters = [];
          breakIndex = 0;
        } else {
          breakIndex += 1;
          letters.push(l);
          totalWidth += l.width;
        }
      }
      if (totalWidth > 0) {
        parts.push({ ...word });
        parts[parts.length - 1].text = text.slice(0, breakIndex);
        parts[parts.length - 1].width = totalWidth;
        parts[parts.length - 1].letters = letters;
      }
    }
    return parts;
  }
  alignLine(parsed, initialX = 0) {
    let prevWidth = 0;
    let prevX = initialX;
    for (const word of parsed) {
      if (word.text == "\n") {
        continue;
      }
      word.x = prevX + prevWidth;
      prevX = word.x;
      prevWidth = word.width;
    }
  }
}
class TextTexture extends Texture {
  constructor(stage) {
    super(stage);
    this._precision = this.stage.getOption("precision");
  }
  static renderer(stage, canvas, settings) {
    if (this.advancedRenderer) {
      return new TextTextureRendererAdvanced(stage, canvas, settings);
    } else {
      return new TextTextureRenderer(stage, canvas, settings);
    }
  }
  get text() {
    return this._text;
  }
  set text(v) {
    if (this._text !== v) {
      this._text = "" + v;
      this._changed();
    }
  }
  get w() {
    return this._w;
  }
  set w(v) {
    if (this._w !== v) {
      this._w = v;
      this._changed();
    }
  }
  get h() {
    return this._h;
  }
  set h(v) {
    if (this._h !== v) {
      this._h = v;
      this._changed();
    }
  }
  get fontStyle() {
    return this._fontStyle;
  }
  set fontStyle(v) {
    if (this._fontStyle !== v) {
      this._fontStyle = v;
      this._changed();
    }
  }
  get fontBaselineRatio() {
    return this._fontBaselineRatio;
  }
  set fontBaselineRatio(v) {
    if (this._fontBaselineRatio !== v) {
      this._fontBaselineRatio = v;
      this._changed();
    }
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(v) {
    if (this._fontSize !== v) {
      this._fontSize = v;
      this._changed();
    }
  }
  get fontFace() {
    return this._fontFace;
  }
  set fontFace(v) {
    if (this._fontFace !== v) {
      this._fontFace = v;
      this._changed();
    }
  }
  get wordWrap() {
    return this._wordWrap;
  }
  set wordWrap(v) {
    if (this._wordWrap !== v) {
      this._wordWrap = v;
      this._changed();
    }
  }
  get wordWrapWidth() {
    return this._wordWrapWidth;
  }
  set wordWrapWidth(v) {
    if (this._wordWrapWidth !== v) {
      this._wordWrapWidth = v;
      this._changed();
    }
  }
  get wordBreak() {
    return this._wordBreak;
  }
  set wordBreak(v) {
    if (this._wordBreak !== v) {
      this._wordBreak = v;
      this._changed();
    }
  }
  get textOverflow() {
    return this._textOverflow;
  }
  set textOverflow(v) {
    if (v != this._textOverflow) {
      this._textOverflow = v;
      this._changed();
    }
  }
  get lineHeight() {
    return this._lineHeight;
  }
  set lineHeight(v) {
    if (this._lineHeight !== v) {
      this._lineHeight = v;
      this._changed();
    }
  }
  get textBaseline() {
    return this._textBaseline;
  }
  set textBaseline(v) {
    if (this._textBaseline !== v) {
      this._textBaseline = v;
      this._changed();
    }
  }
  get textAlign() {
    return this._textAlign;
  }
  set textAlign(v) {
    if (this._textAlign !== v) {
      this._textAlign = v;
      this._changed();
    }
  }
  get verticalAlign() {
    return this._verticalAlign;
  }
  set verticalAlign(v) {
    if (this._verticalAlign !== v) {
      this._verticalAlign = v;
      this._changed();
    }
  }
  get offsetY() {
    return this._offsetY;
  }
  set offsetY(v) {
    if (this._offsetY !== v) {
      this._offsetY = v;
      this._changed();
    }
  }
  get maxLines() {
    return this._maxLines;
  }
  set maxLines(v) {
    if (this._maxLines !== v) {
      this._maxLines = v;
      this._changed();
    }
  }
  get maxLinesSuffix() {
    return this._maxLinesSuffix;
  }
  set maxLinesSuffix(v) {
    if (this._maxLinesSuffix !== v) {
      this._maxLinesSuffix = v;
      this._changed();
    }
  }
  get textColor() {
    return this._textColor;
  }
  set textColor(v) {
    if (this._textColor !== v) {
      this._textColor = v;
      this._changed();
    }
  }
  get paddingLeft() {
    return this._paddingLeft;
  }
  set paddingLeft(v) {
    if (this._paddingLeft !== v) {
      this._paddingLeft = v;
      this._changed();
    }
  }
  get paddingRight() {
    return this._paddingRight;
  }
  set paddingRight(v) {
    if (this._paddingRight !== v) {
      this._paddingRight = v;
      this._changed();
    }
  }
  get shadow() {
    return this._shadow;
  }
  set shadow(v) {
    if (this._shadow !== v) {
      this._shadow = v;
      this._changed();
    }
  }
  get shadowColor() {
    return this._shadowColor;
  }
  set shadowColor(v) {
    if (this._shadowColor !== v) {
      this._shadowColor = v;
      this._changed();
    }
  }
  get shadowOffsetX() {
    return this._shadowOffsetX;
  }
  set shadowOffsetX(v) {
    if (this._shadowOffsetX !== v) {
      this._shadowOffsetX = v;
      this._changed();
    }
  }
  get shadowOffsetY() {
    return this._shadowOffsetY;
  }
  set shadowOffsetY(v) {
    if (this._shadowOffsetY !== v) {
      this._shadowOffsetY = v;
      this._changed();
    }
  }
  get shadowBlur() {
    return this._shadowBlur;
  }
  set shadowBlur(v) {
    if (this._shadowBlur !== v) {
      this._shadowBlur = v;
      this._changed();
    }
  }
  get highlight() {
    return this._highlight;
  }
  set highlight(v) {
    if (this._highlight !== v) {
      this._highlight = v;
      this._changed();
    }
  }
  get highlightHeight() {
    return this._highlightHeight;
  }
  set highlightHeight(v) {
    if (this._highlightHeight !== v) {
      this._highlightHeight = v;
      this._changed();
    }
  }
  get highlightColor() {
    return this._highlightColor;
  }
  set highlightColor(v) {
    if (this._highlightColor !== v) {
      this._highlightColor = v;
      this._changed();
    }
  }
  get highlightOffset() {
    return this._highlightOffset;
  }
  set highlightOffset(v) {
    if (this._highlightOffset !== v) {
      this._highlightOffset = v;
      this._changed();
    }
  }
  get highlightPaddingLeft() {
    return this._highlightPaddingLeft;
  }
  set highlightPaddingLeft(v) {
    if (this._highlightPaddingLeft !== v) {
      this._highlightPaddingLeft = v;
      this._changed();
    }
  }
  get highlightPaddingRight() {
    return this._highlightPaddingRight;
  }
  set highlightPaddingRight(v) {
    if (this._highlightPaddingRight !== v) {
      this._highlightPaddingRight = v;
      this._changed();
    }
  }
  get cutSx() {
    return this._cutSx;
  }
  set cutSx(v) {
    if (this._cutSx !== v) {
      this._cutSx = v;
      this._changed();
    }
  }
  get cutEx() {
    return this._cutEx;
  }
  set cutEx(v) {
    if (this._cutEx !== v) {
      this._cutEx = v;
      this._changed();
    }
  }
  get cutSy() {
    return this._cutSy;
  }
  set cutSy(v) {
    if (this._cutSy !== v) {
      this._cutSy = v;
      this._changed();
    }
  }
  get cutEy() {
    return this._cutEy;
  }
  set cutEy(v) {
    if (this._cutEy !== v) {
      this._cutEy = v;
      this._changed();
    }
  }
  get advancedRenderer() {
    return this._advancedRenderer;
  }
  set advancedRenderer(v) {
    if (this._advancedRenderer !== v) {
      this._advancedRenderer = v;
      this._changed();
    }
  }
  set letterSpacing(v) {
    if (this._letterSpacing !== v) {
      this._letterSpacing = v;
      this._changed();
    }
  }
  get letterSpacing() {
    return this._letterSpacing;
  }
  set textIndent(v) {
    if (this._textIndent !== v) {
      this._textIndent = v;
      this._changed();
    }
  }
  get textIndent() {
    return this._textIndent;
  }
  get precision() {
    return super.precision;
  }
  set precision(v) {
    if (this.precision !== v) {
      super.precision = v;
      this._changed();
    }
  }
  _getIsValid() {
    return !!this.text;
  }
  _getLookupId() {
    let parts = [];
    if (this.w !== 0)
      parts.push("w " + this.w);
    if (this.h !== 0)
      parts.push("h " + this.h);
    if (this.fontStyle !== "normal")
      parts.push("fS" + this.fontStyle);
    if (this.fontSize !== 40)
      parts.push("fs" + this.fontSize);
    if (this.fontBaselineRatio !== 0)
      parts.push("fb" + this.fontBaselineRatio);
    if (this.fontFace !== null)
      parts.push("ff" + (Array.isArray(this.fontFace) ? this.fontFace.join(",") : this.fontFace));
    if (this.wordWrap !== true)
      parts.push("wr" + (this.wordWrap ? 1 : 0));
    if (this.wordWrapWidth !== 0)
      parts.push("ww" + this.wordWrapWidth);
    if (this.wordBreak !== false)
      parts.push("wb" + this.wordBreak ? 1 : 0);
    if (this.textOverflow != "")
      parts.push("to" + this.textOverflow);
    if (this.lineHeight !== null)
      parts.push("lh" + this.lineHeight);
    if (this.textBaseline !== "alphabetic")
      parts.push("tb" + this.textBaseline);
    if (this.textAlign !== "left")
      parts.push("ta" + this.textAlign);
    if (this.verticalAlign !== "top")
      parts.push("va" + this.verticalAlign);
    if (this.offsetY !== null)
      parts.push("oy" + this.offsetY);
    if (this.maxLines !== 0)
      parts.push("ml" + this.maxLines);
    if (this.maxLinesSuffix !== "..")
      parts.push("ms" + this.maxLinesSuffix);
    parts.push("pc" + this.precision);
    if (this.textColor !== 4294967295)
      parts.push("co" + this.textColor.toString(16));
    if (this.paddingLeft !== 0)
      parts.push("pl" + this.paddingLeft);
    if (this.paddingRight !== 0)
      parts.push("pr" + this.paddingRight);
    if (this.shadow !== false)
      parts.push("sh" + (this.shadow ? 1 : 0));
    if (this.shadowColor !== 4278190080)
      parts.push("sc" + this.shadowColor.toString(16));
    if (this.shadowOffsetX !== 0)
      parts.push("sx" + this.shadowOffsetX);
    if (this.shadowOffsetY !== 0)
      parts.push("sy" + this.shadowOffsetY);
    if (this.shadowBlur !== 5)
      parts.push("sb" + this.shadowBlur);
    if (this.highlight !== false)
      parts.push("hL" + (this.highlight ? 1 : 0));
    if (this.highlightHeight !== 0)
      parts.push("hh" + this.highlightHeight);
    if (this.highlightColor !== 4278190080)
      parts.push("hc" + this.highlightColor.toString(16));
    if (this.highlightOffset !== null)
      parts.push("ho" + this.highlightOffset);
    if (this.highlightPaddingLeft !== null)
      parts.push("hl" + this.highlightPaddingLeft);
    if (this.highlightPaddingRight !== null)
      parts.push("hr" + this.highlightPaddingRight);
    if (this.letterSpacing !== null)
      parts.push("ls" + this.letterSpacing);
    if (this.textIndent !== null)
      parts.push("ti" + this.textIndent);
    if (this.cutSx)
      parts.push("csx" + this.cutSx);
    if (this.cutEx)
      parts.push("cex" + this.cutEx);
    if (this.cutSy)
      parts.push("csy" + this.cutSy);
    if (this.cutEy)
      parts.push("cey" + this.cutEy);
    if (this.advancedRenderer)
      parts.push("aR" + this.advancedRenderer ? 1 : 0);
    let id = "TX$" + parts.join("|") + ":" + this.text;
    return id;
  }
  _getSourceLoader() {
    const args = this.cloneArgs();
    const gl = this.stage.gl;
    return function(cb) {
      const canvas = this.stage.platform.getDrawingCanvas();
      const renderer = args.advancedRenderer ? new TextTextureRendererAdvanced(this.stage, canvas, args) : new TextTextureRenderer(this.stage, canvas, args);
      const p = renderer.draw();
      const texParams = {};
      const sharpCfg = this.stage.getOption("fontSharp");
      let sharpen = false;
      if (Utils$1.isBoolean(sharpCfg)) {
        sharpen = sharpCfg;
      } else if (Utils$1.isObject(sharpCfg)) {
        const precision = this.stage.getRenderPrecision();
        sharpen = precision <= sharpCfg.precision && args.fontSize <= sharpCfg.fontSize;
      }
      if (gl && sharpen) {
        texParams[gl.TEXTURE_MAG_FILTER] = gl.NEAREST;
      }
      if (p) {
        p.then(() => {
          cb(null, Object.assign({
            renderInfo: renderer.renderInfo,
            throttle: false,
            texParams
          }, this.stage.platform.getTextureOptionsForDrawingCanvas(canvas)));
        }).catch((err) => {
          cb(err);
        });
      } else {
        cb(null, Object.assign({
          renderInfo: renderer.renderInfo,
          throttle: false,
          texParams
        }, this.stage.platform.getTextureOptionsForDrawingCanvas(canvas)));
      }
    };
  }
  getNonDefaults() {
    const nonDefaults = super.getNonDefaults();
    if (this.text !== "")
      nonDefaults["text"] = this.text;
    if (this.w !== 0)
      nonDefaults["w"] = this.w;
    if (this.h !== 0)
      nonDefaults["h"] = this.h;
    if (this.fontStyle !== "normal")
      nonDefaults["fontStyle"] = this.fontStyle;
    if (this.fontSize !== 40)
      nonDefaults["fontSize"] = this.fontSize;
    if (this.fontBaselineRatio !== 0)
      nonDefaults["fontBaselineRatio"] = this.fontBaselineRatio;
    if (this.fontFace !== null)
      nonDefaults["fontFace"] = this.fontFace;
    if (this.wordWrap !== true)
      nonDefaults["wordWrap"] = this.wordWrap;
    if (this.wordWrapWidth !== 0)
      nonDefaults["wordWrapWidth"] = this.wordWrapWidth;
    if (this.wordBreak !== false)
      nonDefaults["wordBreak"] = this.wordBreak;
    if (this.textOverflow != "")
      nonDefaults["textOverflow"] = this.textOverflow;
    if (this.lineHeight !== null)
      nonDefaults["lineHeight"] = this.lineHeight;
    if (this.textBaseline !== "alphabetic")
      nonDefaults["textBaseline"] = this.textBaseline;
    if (this.textAlign !== "left")
      nonDefaults["textAlign"] = this.textAlign;
    if (this.verticalAlign !== "top")
      nonDefaults["verticalAlign"] = this.verticalAlign;
    if (this.offsetY !== null)
      nonDefaults["offsetY"] = this.offsetY;
    if (this.maxLines !== 0)
      nonDefaults["maxLines"] = this.maxLines;
    if (this.maxLinesSuffix !== "..")
      nonDefaults["maxLinesSuffix"] = this.maxLinesSuffix;
    if (this.precision !== this.stage.getOption("precision"))
      nonDefaults["precision"] = this.precision;
    if (this.textColor !== 4294967295)
      nonDefaults["textColor"] = this.textColor;
    if (this.paddingLeft !== 0)
      nonDefaults["paddingLeft"] = this.paddingLeft;
    if (this.paddingRight !== 0)
      nonDefaults["paddingRight"] = this.paddingRight;
    if (this.shadow !== false)
      nonDefaults["shadow"] = this.shadow;
    if (this.shadowColor !== 4278190080)
      nonDefaults["shadowColor"] = this.shadowColor;
    if (this.shadowOffsetX !== 0)
      nonDefaults["shadowOffsetX"] = this.shadowOffsetX;
    if (this.shadowOffsetY !== 0)
      nonDefaults["shadowOffsetY"] = this.shadowOffsetY;
    if (this.shadowBlur !== 5)
      nonDefaults["shadowBlur"] = this.shadowBlur;
    if (this.highlight !== false)
      nonDefaults["highlight"] = this.highlight;
    if (this.highlightHeight !== 0)
      nonDefaults["highlightHeight"] = this.highlightHeight;
    if (this.highlightColor !== 4278190080)
      nonDefaults["highlightColor"] = this.highlightColor;
    if (this.highlightOffset !== 0)
      nonDefaults["highlightOffset"] = this.highlightOffset;
    if (this.highlightPaddingLeft !== 0)
      nonDefaults["highlightPaddingLeft"] = this.highlightPaddingLeft;
    if (this.highlightPaddingRight !== 0)
      nonDefaults["highlightPaddingRight"] = this.highlightPaddingRight;
    if (this.letterSpacing !== 0)
      nonDefaults["letterSpacing"] = this.letterSpacing;
    if (this.textIndent !== 0)
      nonDefaults["textIndent"] = this.textIndent;
    if (this.cutSx)
      nonDefaults["cutSx"] = this.cutSx;
    if (this.cutEx)
      nonDefaults["cutEx"] = this.cutEx;
    if (this.cutSy)
      nonDefaults["cutSy"] = this.cutSy;
    if (this.cutEy)
      nonDefaults["cutEy"] = this.cutEy;
    if (this.advancedRenderer)
      nonDefaults["renderer"] = this.advancedRenderer;
    return nonDefaults;
  }
  cloneArgs() {
    let obj = {};
    obj.text = this._text;
    obj.w = this._w;
    obj.h = this._h;
    obj.fontStyle = this._fontStyle;
    obj.fontSize = this._fontSize;
    obj.fontBaselineRatio = this._fontBaselineRatio;
    obj.fontFace = this._fontFace;
    obj.wordWrap = this._wordWrap;
    obj.wordWrapWidth = this._wordWrapWidth;
    obj.wordBreak = this._wordBreak;
    obj.textOverflow = this._textOverflow;
    obj.lineHeight = this._lineHeight;
    obj.textBaseline = this._textBaseline;
    obj.textAlign = this._textAlign;
    obj.verticalAlign = this._verticalAlign;
    obj.offsetY = this._offsetY;
    obj.maxLines = this._maxLines;
    obj.maxLinesSuffix = this._maxLinesSuffix;
    obj.precision = this._precision;
    obj.textColor = this._textColor;
    obj.paddingLeft = this._paddingLeft;
    obj.paddingRight = this._paddingRight;
    obj.shadow = this._shadow;
    obj.shadowColor = this._shadowColor;
    obj.shadowOffsetX = this._shadowOffsetX;
    obj.shadowOffsetY = this._shadowOffsetY;
    obj.shadowBlur = this._shadowBlur;
    obj.highlight = this._highlight;
    obj.highlightHeight = this._highlightHeight;
    obj.highlightColor = this._highlightColor;
    obj.highlightOffset = this._highlightOffset;
    obj.highlightPaddingLeft = this._highlightPaddingLeft;
    obj.highlightPaddingRight = this._highlightPaddingRight;
    obj.letterSpacing = this._letterSpacing;
    obj.textIndent = this._textIndent;
    obj.cutSx = this._cutSx;
    obj.cutEx = this._cutEx;
    obj.cutSy = this._cutSy;
    obj.cutEy = this._cutEy;
    obj.advancedRenderer = this._advancedRenderer;
    return obj;
  }
}
let proto = TextTexture.prototype;
proto._text = "";
proto._w = 0;
proto._h = 0;
proto._fontStyle = "normal";
proto._fontSize = 40;
proto._fontFace = null;
proto._wordWrap = true;
proto._wordWrapWidth = 0;
proto._wordBreak = false;
proto._textOverflow = "";
proto._lineHeight = null;
proto._textBaseline = "alphabetic";
proto._textAlign = "left";
proto._verticalAlign = "top";
proto._offsetY = null;
proto._maxLines = 0;
proto._maxLinesSuffix = "..";
proto._textColor = 4294967295;
proto._paddingLeft = 0;
proto._paddingRight = 0;
proto._shadow = false;
proto._shadowColor = 4278190080;
proto._shadowOffsetX = 0;
proto._shadowOffsetY = 0;
proto._shadowBlur = 5;
proto._highlight = false;
proto._highlightHeight = 0;
proto._highlightColor = 4278190080;
proto._highlightOffset = 0;
proto._highlightPaddingLeft = 0;
proto._highlightPaddingRight = 0;
proto._letterSpacing = 0;
proto._textIndent = 0;
proto._cutSx = 0;
proto._cutEx = 0;
proto._cutSy = 0;
proto._cutEy = 0;
proto._advancedRenderer = false;
proto._fontBaselineRatio = 0;
class SourceTexture extends Texture {
  constructor(stage) {
    super(stage);
    this._textureSource = void 0;
  }
  get textureSource() {
    return this._textureSource;
  }
  set textureSource(v) {
    if (v !== this._textureSource) {
      if (v.isResultTexture) {
        this._precision = this.stage.getRenderPrecision();
      }
      this._textureSource = v;
      this._changed();
    }
  }
  _getTextureSource() {
    return this._textureSource;
  }
}
class Transition extends EventEmitter {
  constructor(manager, settings, element, property) {
    super();
    this.manager = manager;
    this._settings = settings;
    this._element = element;
    this._getter = element.constructor.getGetter(property);
    this._setter = element.constructor.getSetter(property);
    this._merger = settings.merger;
    if (!this._merger) {
      this._merger = element.constructor.getMerger(property);
    }
    this._startValue = this._getter(this._element);
    this._targetValue = this._startValue;
    this._p = 1;
    this._delayLeft = 0;
  }
  start(targetValue) {
    this._startValue = this._getter(this._element);
    if (!this.isAttached()) {
      this._targetValue = targetValue;
      this._p = 1;
      this._updateDrawValue();
    } else {
      if (targetValue === this._startValue) {
        this.reset(targetValue, 1);
      } else {
        this._targetValue = targetValue;
        this._p = 0;
        this._delayLeft = this._settings.delay;
        this.emit("start");
        this.add();
      }
    }
  }
  finish() {
    if (this._p < 1) {
      this._p = 1;
    }
  }
  stop() {
    this.emit("stop");
    this.manager.removeActive(this);
  }
  pause() {
    this.stop();
  }
  play() {
    this.manager.addActive(this);
  }
  reset(targetValue, p) {
    if (!this.isAttached()) {
      this._startValue = this._getter(this._element);
      this._targetValue = targetValue;
      this._p = 1;
      this._updateDrawValue();
    } else {
      this._startValue = this._getter(this._element);
      this._targetValue = targetValue;
      this._p = p;
      this.add();
    }
  }
  _updateDrawValue() {
    this._setter(this._element, this.getDrawValue());
  }
  add() {
    this.manager.addActive(this);
  }
  isAttached() {
    return this._element.attached;
  }
  isRunning() {
    return this._p < 1;
  }
  progress(dt) {
    if (!this.isAttached()) {
      this._p = 1;
    }
    if (this.p < 1) {
      if (this.delayLeft > 0) {
        this._delayLeft -= dt;
        if (this.delayLeft < 0) {
          dt = -this.delayLeft;
          this._delayLeft = 0;
          this.emit("delayEnd");
        } else {
          return;
        }
      }
      if (this._settings.duration == 0) {
        this._p = 1;
      } else {
        this._p += dt / this._settings.duration;
      }
      if (this._p >= 1) {
        this._p = 1;
      }
    }
    this._updateDrawValue();
    this.invokeListeners();
  }
  invokeListeners() {
    this.emit("progress", this.p);
    if (this.p === 1) {
      this.emit("finish");
    }
  }
  updateTargetValue(targetValue) {
    let t = this._settings.timingFunctionImpl(this.p);
    if (t === 1) {
      this._targetValue = targetValue;
    } else if (t === 0) {
      this._startValue = this._targetValue;
      this._targetValue = targetValue;
    } else {
      this._startValue = targetValue - (targetValue - this._targetValue) / (1 - t);
      this._targetValue = targetValue;
    }
  }
  getDrawValue() {
    if (this.p >= 1) {
      return this.targetValue;
    } else {
      let v = this._settings._timingFunctionImpl(this.p);
      return this._merger(this.targetValue, this.startValue, v);
    }
  }
  skipDelay() {
    this._delayLeft = 0;
  }
  get startValue() {
    return this._startValue;
  }
  get targetValue() {
    return this._targetValue;
  }
  get p() {
    return this._p;
  }
  get delayLeft() {
    return this._delayLeft;
  }
  get element() {
    return this._element;
  }
  get settings() {
    return this._settings;
  }
  set settings(v) {
    this._settings = v;
  }
}
Transition.prototype.isTransition = true;
class ObjectList {
  constructor() {
    this._items = [];
    this._refs = {};
  }
  get() {
    return this._items;
  }
  get first() {
    return this._items[0];
  }
  get last() {
    return this._items.length ? this._items[this._items.length - 1] : void 0;
  }
  add(item) {
    this.addAt(item, this._items.length);
  }
  addAt(item, index) {
    if (index >= 0 && index <= this._items.length) {
      let currentIndex = this._items.indexOf(item);
      if (currentIndex === index) {
        return item;
      }
      if (Utils$1.isObjectLiteral(item)) {
        const o = item;
        item = this.createItem(o);
        item.patch(o);
      }
      if (currentIndex != -1) {
        this.setAt(item, index);
      } else {
        if (item.ref) {
          this._refs[item.ref] = item;
        }
        this._items.splice(index, 0, item);
        this.onAdd(item, index);
      }
    } else {
      throw new Error("addAt: The index " + index + " is out of bounds " + this._items.length);
    }
  }
  replaceByRef(item) {
    if (item.ref) {
      const existingItem = this.getByRef(item.ref);
      if (!existingItem) {
        throw new Error("replaceByRef: no item found with reference: " + item.ref);
      }
      this.replace(item, existingItem);
    } else {
      throw new Error("replaceByRef: no ref specified in item");
    }
    this.addAt(item, this._items.length);
  }
  replace(item, prevItem) {
    const index = this.getIndex(prevItem);
    if (index === -1) {
      throw new Error("replace: The previous item does not exist");
    }
    this.setAt(item, index);
  }
  setAt(item, index) {
    if (index >= 0 && index < this._items.length) {
      if (Utils$1.isObjectLiteral(item)) {
        const o = item;
        item = this.createItem(o);
        item.patch(o);
      }
      let currentIndex = this._items.indexOf(item);
      if (currentIndex != -1) {
        if (currentIndex !== index) {
          const fromIndex = currentIndex;
          if (fromIndex !== index) {
            this._items.splice(fromIndex, 1);
            this._items.splice(index, 0, item);
            this.onMove(item, fromIndex, index);
          }
        }
      } else {
        if (index < this._items.length) {
          if (this._items[index].ref) {
            this._refs[this._items[index].ref] = void 0;
          }
        }
        const prevItem = this._items[index];
        this._items[index] = item;
        if (item.ref) {
          this._refs[item.ref] = item;
        }
        this.onSet(item, index, prevItem);
      }
    } else {
      throw new Error("setAt: The index " + index + " is out of bounds " + this._items.length);
    }
  }
  getAt(index) {
    return this._items[index];
  }
  getIndex(item) {
    return this._items.indexOf(item);
  }
  remove(item) {
    let index = this._items.indexOf(item);
    if (index !== -1) {
      this.removeAt(index);
    }
  }
  removeAt(index) {
    if (index >= 0 && index < this._items.length) {
      const item = this._items[index];
      if (item.ref) {
        this._refs[item.ref] = void 0;
      }
      this._items.splice(index, 1);
      this.onRemove(item, index);
      return item;
    } else {
      throw new Error(`removeAt: The index ${index} is out of bounds ${this._items.length - 1}`);
    }
  }
  clear() {
    let n = this._items.length;
    if (n) {
      let prev = this._items;
      this._items = [];
      this._refs = {};
      this.onSync(prev, [], []);
    }
  }
  a(o) {
    if (Utils$1.isObjectLiteral(o)) {
      let c = this.createItem(o);
      c.patch(o);
      this.add(c);
      return c;
    } else if (Array.isArray(o)) {
      for (let i = 0, n = o.length; i < n; i++) {
        this.a(o[i]);
      }
      return null;
    } else if (this.isItem(o)) {
      this.add(o);
      return o;
    }
  }
  get length() {
    return this._items.length;
  }
  _getRefs() {
    return this._refs;
  }
  getByRef(ref) {
    return this._refs[ref];
  }
  clearRef(ref) {
    delete this._refs[ref];
  }
  setRef(ref, child) {
    this._refs[ref] = child;
  }
  patch(settings) {
    if (Utils$1.isObjectLiteral(settings)) {
      this._setByObject(settings);
    } else if (Array.isArray(settings)) {
      this._setByArray(settings);
    }
  }
  _setByObject(settings) {
    let refs = this._getRefs();
    let crefs = Object.keys(settings);
    for (let i = 0, n = crefs.length; i < n; i++) {
      let cref = crefs[i];
      let s = settings[cref];
      let c = refs[cref];
      if (!c) {
        if (this.isItem(s)) {
          s.ref = cref;
          this.add(s);
        } else {
          c = this.createItem(s);
          c.ref = cref;
          c.patch(s);
          this.add(c);
        }
      } else {
        if (this.isItem(s)) {
          if (c !== s) {
            let idx = this.getIndex(c);
            s.ref = cref;
            this.setAt(s, idx);
          }
        } else {
          c.patch(s);
        }
      }
    }
  }
  _equalsArray(array) {
    let same = true;
    if (array.length === this._items.length) {
      for (let i = 0, n = this._items.length; i < n && same; i++) {
        same = same && this._items[i] === array[i];
      }
    } else {
      same = false;
    }
    return same;
  }
  _setByArray(array) {
    if (this._equalsArray(array)) {
      return;
    }
    for (let i = 0, n = this._items.length; i < n; i++) {
      this._items[i].marker = true;
    }
    let refs;
    let newItems = [];
    for (let i = 0, n = array.length; i < n; i++) {
      let s = array[i];
      if (this.isItem(s)) {
        s.marker = false;
        newItems.push(s);
      } else {
        let cref = s.ref;
        let c;
        if (cref) {
          if (!refs)
            refs = this._getRefs();
          c = refs[cref];
        }
        if (!c) {
          c = this.createItem(s);
        } else {
          c.marker = false;
        }
        if (Utils$1.isObjectLiteral(s)) {
          c.patch(s);
        }
        newItems.push(c);
      }
    }
    this._setItems(newItems);
  }
  _setItems(newItems) {
    let prevItems = this._items;
    this._items = newItems;
    let removed = prevItems.filter((item) => {
      let m = item.marker;
      delete item.marker;
      return m;
    });
    let added = newItems.filter((item) => prevItems.indexOf(item) === -1);
    if (removed.length || added.length) {
      this._refs = {};
      for (let i = 0, n = this._items.length; i < n; i++) {
        let ref = this._items[i].ref;
        if (ref) {
          this._refs[ref] = this._items[i];
        }
      }
    }
    this.onSync(removed, added, newItems);
  }
  sort(f) {
    const items = this._items.slice();
    items.sort(f);
    this._setByArray(items);
  }
  onAdd(item, index) {
  }
  onRemove(item, index) {
  }
  onSync(removed, added, order) {
  }
  onSet(item, index, prevItem) {
  }
  onMove(item, fromIndex, toIndex) {
  }
  createItem(object) {
    throw new Error("ObjectList.createItem must create and return a new object");
  }
  isItem(object) {
    return false;
  }
  forEach(f) {
    this.get().forEach(f);
  }
}
class ElementChildList extends ObjectList {
  constructor(element) {
    super();
    this._element = element;
  }
  _connectParent(item) {
    const prevParent = item.parent;
    if (prevParent && prevParent !== this._element) {
      const prevChildList = item.parent.childList;
      const index = prevChildList.getIndex(item);
      if (item.ref) {
        prevChildList._refs[item.ref] = void 0;
      }
      prevChildList._items.splice(index, 1);
      prevParent.core.removeChildAt(index);
    }
    item._setParent(this._element);
  }
  onAdd(item, index) {
    this._connectParent(item);
    this._element.core.addChildAt(index, item.core);
  }
  onRemove(item, index) {
    item._setParent(null);
    this._element.core.removeChildAt(index);
  }
  onSync(removed, added, order) {
    for (let i = 0, n = removed.length; i < n; i++) {
      removed[i]._setParent(null);
    }
    for (let i = 0, n = added.length; i < n; i++) {
      this._connectParent(added[i]);
    }
    let gc = (i) => i.core;
    this._element.core.syncChildren(removed.map(gc), added.map(gc), order.map(gc));
  }
  onSet(item, index, prevItem) {
    prevItem._setParent(null);
    this._connectParent(item);
    this._element.core.setChildAt(index, item.core);
  }
  onMove(item, fromIndex, toIndex) {
    this._element.core.moveChild(fromIndex, toIndex);
  }
  createItem(object) {
    if (object.type) {
      return new object.type(this._element.stage);
    } else {
      return this._element.stage.createElement();
    }
  }
  isItem(object) {
    return object.isElement;
  }
}
class Element {
  constructor(stage) {
    this.stage = stage;
    this.__id = Element.id++;
    this.__start();
    this._hasEventListeners = false;
    this.__core = new ElementCore(this);
    this.__ref = null;
    this.__attached = false;
    this.__enabled = false;
    this.__active = false;
    this.__parent = null;
    this.__texture = null;
    this.__displayedTexture = null;
    this.__tags = null;
    this.__treeTags = null;
    this.__tagRoot = false;
    this.__childList = null;
    this._w = 0;
    this._h = 0;
  }
  __start() {
  }
  get id() {
    return this.__id;
  }
  set ref(ref) {
    if (this.__ref !== ref) {
      const charcode = ref.charCodeAt(0);
      if (!Utils$1.isUcChar(charcode)) {
        this._throwError("Ref must start with an upper case character: " + ref);
      }
      if (this.__ref !== null) {
        this.removeTag(this.__ref);
        if (this.__parent) {
          this.__parent.__childList.clearRef(this.__ref);
        }
      }
      this.__ref = ref;
      if (this.__ref) {
        this._addTag(this.__ref);
        if (this.__parent) {
          this.__parent.__childList.setRef(this.__ref, this);
        }
      }
    }
  }
  get ref() {
    return this.__ref;
  }
  get core() {
    return this.__core;
  }
  setAsRoot() {
    this.__core.setAsRoot();
    this._updateAttachedFlag();
    this._updateEnabledFlag();
  }
  get isRoot() {
    return this.__core.isRoot;
  }
  _setParent(parent) {
    if (this.__parent === parent)
      return;
    if (this.__parent) {
      this._unsetTagsParent();
    }
    this.__parent = parent;
    if (parent) {
      this._setTagsParent();
    }
    this._updateAttachedFlag();
    this._updateEnabledFlag();
    this._updateCollision();
    if (this.isRoot && parent) {
      this._throwError("Root should not be added as a child! Results are unspecified!");
    }
  }
  getDepth() {
    let depth = 0;
    let p = this.__parent;
    while (p) {
      depth++;
      p = p.__parent;
    }
    return depth;
  }
  getAncestor(l) {
    let p = this;
    while (l > 0 && p.__parent) {
      p = p.__parent;
      l--;
    }
    return p;
  }
  getAncestors() {
    const a = [];
    let p = this;
    while (p) {
      a.push(p);
      p = p.__parent;
    }
    return a;
  }
  getAncestorAtDepth(depth) {
    let levels = this.getDepth() - depth;
    if (levels < 0) {
      return null;
    }
    return this.getAncestor(levels);
  }
  isAncestorOf(c) {
    let p = c;
    while (p = p.parent) {
      if (this === p) {
        return true;
      }
    }
    return false;
  }
  getSharedAncestor(c) {
    let o1 = this;
    let o2 = c;
    let l1 = o1.getDepth();
    let l2 = o2.getDepth();
    if (l1 > l2) {
      o1 = o1.getAncestor(l1 - l2);
    } else if (l2 > l1) {
      o2 = o2.getAncestor(l2 - l1);
    }
    do {
      if (o1 === o2) {
        return o1;
      }
      o1 = o1.__parent;
      o2 = o2.__parent;
    } while (o1 && o2);
    return null;
  }
  get attached() {
    return this.__attached;
  }
  get enabled() {
    return this.__enabled;
  }
  get active() {
    return this.__active;
  }
  _isAttached() {
    return this.__parent ? this.__parent.__attached : this.stage.root === this;
  }
  _isEnabled() {
    return this.__core.visible && this.__core.alpha > 0 && (this.__parent ? this.__parent.__enabled : this.stage.root === this);
  }
  _isActive() {
    return this._isEnabled() && this.withinBoundsMargin;
  }
  _updateAttachedFlag() {
    let newAttached = this._isAttached();
    if (this.__attached !== newAttached) {
      this.__attached = newAttached;
      if (newAttached) {
        this._onSetup();
      }
      let children = this._children.get();
      if (children) {
        let m = children.length;
        if (m > 0) {
          for (let i = 0; i < m; i++) {
            children[i]._updateAttachedFlag();
          }
        }
      }
      if (newAttached) {
        this._onAttach();
      } else {
        this._onDetach();
      }
    }
  }
  _updateEnabledFlag() {
    let newEnabled = this._isEnabled();
    if (this.__enabled !== newEnabled) {
      if (newEnabled) {
        this._onEnabled();
        this._setEnabledFlag();
      } else {
        this._onDisabled();
        this._unsetEnabledFlag();
      }
      let children = this._children.get();
      if (children) {
        let m = children.length;
        if (m > 0) {
          for (let i = 0; i < m; i++) {
            children[i]._updateEnabledFlag();
          }
        }
      }
    }
  }
  _setEnabledFlag() {
    this.__enabled = true;
    this._updateDimensions();
    this._updateTextureCoords();
    if (this.__texture) {
      this.__texture.addElement(this);
    }
    if (this.withinBoundsMargin) {
      this._setActiveFlag();
    }
    if (this.__core.shader) {
      this.__core.shader.addElement(this.__core);
    }
  }
  _unsetEnabledFlag() {
    if (this.__active) {
      this._unsetActiveFlag();
    }
    if (this.__texture) {
      this.__texture.removeElement(this);
    }
    if (this.__core.shader) {
      this.__core.shader.removeElement(this.__core);
    }
    if (this._texturizer) {
      this.texturizer.filters.forEach((filter) => filter.removeElement(this.__core));
    }
    this.__enabled = false;
  }
  _setActiveFlag() {
    this.__active = true;
    if (this.__texture) {
      this.__texture.incActiveCount();
    }
    if (this.__texture) {
      this._enableTexture();
    }
    this._onActive();
  }
  _unsetActiveFlag() {
    if (this.__texture) {
      this.__texture.decActiveCount();
    }
    this.__active = false;
    if (this.__texture) {
      this._disableTexture();
    }
    if (this._hasTexturizer()) {
      this.texturizer.deactivate();
    }
    this._onInactive();
  }
  _onSetup() {
  }
  _onAttach() {
  }
  _onDetach() {
  }
  _onEnabled() {
  }
  _onDisabled() {
  }
  _onActive() {
  }
  _onInactive() {
  }
  _onResize() {
  }
  _getRenderWidth() {
    if (this._w) {
      return this._w;
    } else if (this.__displayedTexture) {
      return this.__displayedTexture.getRenderWidth();
    } else if (this.__texture) {
      return this.__texture.getRenderWidth();
    } else {
      return 0;
    }
  }
  _getRenderHeight() {
    if (this._h) {
      return this._h;
    } else if (this.__displayedTexture) {
      return this.__displayedTexture.getRenderHeight();
    } else if (this.__texture) {
      return this.__texture.getRenderHeight();
    } else {
      return 0;
    }
  }
  get renderWidth() {
    if (this.__enabled) {
      return this.__core.getRenderWidth();
    } else {
      return this._getRenderWidth();
    }
  }
  get renderHeight() {
    if (this.__enabled) {
      return this.__core.getRenderHeight();
    } else {
      return this._getRenderHeight();
    }
  }
  get finalX() {
    return this.__core.x;
  }
  get finalY() {
    return this.__core.y;
  }
  get finalW() {
    return this.__core.w;
  }
  get finalH() {
    return this.__core.h;
  }
  textureIsLoaded() {
    return this.__texture && this.__texture.isLoaded();
  }
  loadTexture() {
    if (this.__texture) {
      this.__texture.load();
      if (!this.__texture.isUsed() || !this._isEnabled()) {
        this._updateDimensions();
      }
    }
  }
  _enableTextureError() {
    const loadError = this.__texture.loadError;
    if (loadError) {
      this.emit("txError", loadError, this.__texture._source);
    }
  }
  _enableTexture() {
    if (this.__texture.isLoaded()) {
      this._setDisplayedTexture(this.__texture);
    } else {
      this._setDisplayedTexture(null);
      this._enableTextureError();
    }
  }
  _disableTexture() {
    this._setDisplayedTexture(null);
  }
  get texture() {
    return this.__texture;
  }
  set texture(v) {
    let texture;
    if (Utils$1.isObjectLiteral(v)) {
      if (v.type) {
        texture = new v.type(this.stage);
      } else {
        texture = this.texture;
      }
      if (texture) {
        Base.patchObject(texture, v);
      }
    } else if (!v) {
      texture = null;
    } else {
      if (v.isTexture) {
        texture = v;
      } else if (v.isTextureSource) {
        texture = new SourceTexture(this.stage);
        texture.textureSource = v;
      } else {
        console.error("[Lightning] Please specify a texture type.");
        return;
      }
    }
    const prevTexture = this.__texture;
    if (texture !== prevTexture) {
      this.__texture = texture;
      if (this.__texture) {
        if (this.__enabled) {
          this.__texture.addElement(this);
          if (this.withinBoundsMargin) {
            if (this.__texture.isLoaded()) {
              this._setDisplayedTexture(this.__texture);
            } else {
              this._enableTextureError();
            }
          }
        }
      } else {
        this._setDisplayedTexture(null);
      }
      if (prevTexture && prevTexture !== this.__displayedTexture) {
        prevTexture.removeElement(this);
      }
      this._updateDimensions();
    }
  }
  get displayedTexture() {
    return this.__displayedTexture;
  }
  _setDisplayedTexture(v) {
    let prevTexture = this.__displayedTexture;
    if (prevTexture && v !== prevTexture) {
      if (this.__texture !== prevTexture) {
        prevTexture.removeElement(this);
      }
    }
    const prevSource = this.__core.displayedTextureSource ? this.__core.displayedTextureSource._source : null;
    const sourceChanged = (v ? v._source : null) !== prevSource;
    this.__displayedTexture = v;
    this._updateDimensions();
    if (this.__displayedTexture) {
      if (sourceChanged) {
        this._updateTextureCoords();
        this.__core.setDisplayedTextureSource(this.__displayedTexture._source);
      }
    } else {
      this.__core.setDisplayedTextureSource(null);
    }
    if (sourceChanged) {
      if (this.__displayedTexture) {
        this.emit("txLoaded", this.__displayedTexture);
      } else {
        this.emit("txUnloaded", this.__displayedTexture);
      }
    }
  }
  onTextureSourceLoaded() {
    if (this.active) {
      this._setDisplayedTexture(this.__texture);
    }
  }
  onTextureSourceLoadError(e) {
    this.emit("txError", e, this.__texture._source);
  }
  forceRenderUpdate() {
    this.__core.setHasRenderUpdates(3);
  }
  onDisplayedTextureClippingChanged() {
    this._updateDimensions();
    this._updateTextureCoords();
  }
  onPrecisionChanged() {
    this._updateDimensions();
  }
  onDimensionsChanged(w, h) {
    if (this.texture instanceof TextTexture) {
      this.texture.w = w;
      this.texture.h = h;
      this.w = w;
      this.h = h;
    }
  }
  _updateDimensions() {
    let w = this._getRenderWidth();
    let h = this._getRenderHeight();
    let unknownSize = false;
    if (!w || !h) {
      if (!this.__displayedTexture && this.__texture) {
        w = w || this.__texture.mw;
        h = h || this.__texture.mh;
        if ((!w || !h) && this.__texture.isAutosizeTexture()) {
          unknownSize = true;
        }
      }
    }
    if (this.__core.setDimensions(w, h, unknownSize)) {
      this._onResize();
    }
  }
  _updateTextureCoords() {
    if (this.displayedTexture && this.displayedTexture._source) {
      let displayedTexture = this.displayedTexture;
      let displayedTextureSource = this.displayedTexture._source;
      let tx1 = 0, ty1 = 0, tx2 = 1, ty2 = 1;
      if (displayedTexture.clipping) {
        let w = displayedTextureSource.getRenderWidth();
        let h = displayedTextureSource.getRenderHeight();
        let iw, ih, rw, rh;
        iw = 1 / w;
        ih = 1 / h;
        if (displayedTexture.pw) {
          rw = displayedTexture.pw * iw;
        } else {
          rw = (w - displayedTexture.px) * iw;
        }
        if (displayedTexture.ph) {
          rh = displayedTexture.ph * ih;
        } else {
          rh = (h - displayedTexture.py) * ih;
        }
        iw *= displayedTexture.px;
        ih *= displayedTexture.py;
        tx1 = iw;
        ty1 = ih;
        tx2 = tx2 * rw + iw;
        ty2 = ty2 * rh + ih;
        tx1 = Math.max(0, tx1);
        ty1 = Math.max(0, ty1);
        tx2 = Math.min(1, tx2);
        ty2 = Math.min(1, ty2);
      }
      if (displayedTextureSource._flipTextureY) {
        let tempty = ty2;
        ty2 = ty1;
        ty1 = tempty;
      }
      this.__core.setTextureCoords(tx1, ty1, tx2, ty2);
    }
  }
  getCornerPoints() {
    return this.__core.getCornerPoints();
  }
  _unsetTagsParent() {
    if (this.__tags) {
      this.__tags.forEach((tag) => {
        let p = this;
        while (p = p.__parent) {
          let parentTreeTags = p.__treeTags.get(tag);
          parentTreeTags.delete(this);
          if (p.__tagRoot) {
            break;
          }
        }
      });
    }
    let tags = null;
    let n = 0;
    if (this.__treeTags) {
      if (!this.__tagRoot) {
        tags = Utils$1.iteratorToArray(this.__treeTags.keys());
        n = tags.length;
        if (n > 0) {
          for (let i = 0; i < n; i++) {
            let tagSet = this.__treeTags.get(tags[i]);
            let p = this;
            while (p = p.__parent) {
              let parentTreeTags = p.__treeTags.get(tags[i]);
              tagSet.forEach(function(comp) {
                parentTreeTags.delete(comp);
              });
              if (p.__tagRoot) {
                break;
              }
            }
          }
        }
      }
    }
  }
  _setTagsParent() {
    if (this.__tags) {
      this.__tags.forEach((tag) => {
        let p = this;
        while (p = p.__parent) {
          if (!p.__treeTags) {
            p.__treeTags = /* @__PURE__ */ new Map();
          }
          let s = p.__treeTags.get(tag);
          if (!s) {
            s = /* @__PURE__ */ new Set();
            p.__treeTags.set(tag, s);
          }
          s.add(this);
          if (p.__tagRoot) {
            break;
          }
        }
      });
    }
    if (this.__treeTags && this.__treeTags.size) {
      if (!this.__tagRoot) {
        this.__treeTags.forEach((tagSet, tag) => {
          let p = this;
          while (!p.__tagRoot && (p = p.__parent)) {
            if (p.__tagRoot)
              ;
            if (!p.__treeTags) {
              p.__treeTags = /* @__PURE__ */ new Map();
            }
            let s = p.__treeTags.get(tag);
            if (!s) {
              s = /* @__PURE__ */ new Set();
              p.__treeTags.set(tag, s);
            }
            tagSet.forEach(function(comp) {
              s.add(comp);
            });
          }
        });
      }
    }
  }
  _getByTag(tag) {
    if (!this.__treeTags) {
      return [];
    }
    let t = this.__treeTags.get(tag);
    return t ? Utils$1.setToArray(t) : [];
  }
  getTags() {
    return this.__tags ? this.__tags : [];
  }
  setTags(tags) {
    tags = tags.reduce((acc, tag) => {
      return acc.concat(tag.split(" "));
    }, []);
    if (this.__ref) {
      tags.push(this.__ref);
    }
    let i, n = tags.length;
    let removes = [];
    let adds = [];
    for (i = 0; i < n; i++) {
      if (!this.hasTag(tags[i])) {
        adds.push(tags[i]);
      }
    }
    let currentTags = this.tags || [];
    n = currentTags.length;
    for (i = 0; i < n; i++) {
      if (tags.indexOf(currentTags[i]) == -1) {
        removes.push(currentTags[i]);
      }
    }
    for (i = 0; i < removes.length; i++) {
      this.removeTag(removes[i]);
    }
    for (i = 0; i < adds.length; i++) {
      this.addTag(adds[i]);
    }
  }
  addTag(tag) {
    if (tag.indexOf(" ") === -1) {
      if (Utils$1.isUcChar(tag.charCodeAt(0))) {
        this._throwError("Tag may not start with an upper case character.");
      }
      this._addTag(tag);
    } else {
      const tags = tag.split(" ");
      for (let i = 0, m = tags.length; i < m; i++) {
        const tag2 = tags[i];
        if (Utils$1.isUcChar(tag2.charCodeAt(0))) {
          this._throwError("Tag may not start with an upper case character.");
        }
        this._addTag(tag2);
      }
    }
  }
  _addTag(tag) {
    if (!this.__tags) {
      this.__tags = [];
    }
    if (this.__tags.indexOf(tag) === -1) {
      this.__tags.push(tag);
      let p = this.__parent;
      if (p) {
        do {
          if (!p.__treeTags) {
            p.__treeTags = /* @__PURE__ */ new Map();
          }
          let s = p.__treeTags.get(tag);
          if (!s) {
            s = /* @__PURE__ */ new Set();
            p.__treeTags.set(tag, s);
          }
          s.add(this);
        } while (!p.__tagRoot && (p = p.__parent));
      }
    }
  }
  removeTag(tag) {
    let i = this.__tags.indexOf(tag);
    if (i !== -1) {
      this.__tags.splice(i, 1);
      let p = this.__parent;
      if (p) {
        do {
          let list = p.__treeTags.get(tag);
          if (list) {
            list.delete(this);
          }
        } while (!p.__tagRoot && (p = p.__parent));
      }
    }
  }
  hasTag(tag) {
    return this.__tags && this.__tags.indexOf(tag) !== -1;
  }
  _tag(tag) {
    if (tag.indexOf(".") !== -1) {
      return this.mtag(tag)[0];
    } else {
      if (this.__treeTags) {
        let t = this.__treeTags.get(tag);
        if (t) {
          const item = t.values().next();
          return item ? item.value : void 0;
        }
      }
    }
  }
  get tag() {
    return this._tag;
  }
  set tag(t) {
    this.tags = t;
  }
  mtag(tag) {
    let idx = tag.indexOf(".");
    if (idx >= 0) {
      let parts = tag.split(".");
      let res = this._getByTag(parts[0]);
      let level = 1;
      let c = parts.length;
      while (res.length && level < c) {
        let resn = [];
        for (let j = 0, n = res.length; j < n; j++) {
          resn = resn.concat(res[j]._getByTag(parts[level]));
        }
        res = resn;
        level++;
      }
      return res;
    } else {
      return this._getByTag(tag);
    }
  }
  stag(tag, settings) {
    let t = this.mtag(tag);
    let n = t.length;
    for (let i = 0; i < n; i++) {
      Base.patchObject(t[i], settings);
    }
  }
  get tagRoot() {
    return this.__tagRoot;
  }
  set tagRoot(v) {
    if (this.__tagRoot !== v) {
      if (!v) {
        this._setTagsParent();
      } else {
        this._unsetTagsParent();
      }
      this.__tagRoot = v;
    }
  }
  sel(path) {
    const results = this.select(path);
    if (results.length) {
      return results[0];
    } else {
      return void 0;
    }
  }
  select(path) {
    if (path.indexOf(",") !== -1) {
      let selectors = path.split(",");
      let res = [];
      for (let i = 0; i < selectors.length; i++) {
        res = res.concat(this._select(selectors[i]));
      }
      return res;
    } else {
      return this._select(path);
    }
  }
  _select(path) {
    if (path === "")
      return [this];
    let pointIdx = path.indexOf(".");
    let arrowIdx = path.indexOf(">");
    if (pointIdx === -1 && arrowIdx === -1) {
      return this.mtag(path);
    }
    let isRef;
    if (arrowIdx === 0) {
      isRef = true;
      path = path.substr(1);
    } else if (pointIdx === 0) {
      isRef = false;
      path = path.substr(1);
    } else {
      isRef = false;
    }
    return this._selectChilds(path, isRef);
  }
  _selectChilds(path, isRef) {
    const pointIdx = path.indexOf(".");
    const arrowIdx = path.indexOf(">");
    if (pointIdx === -1 && arrowIdx === -1) {
      if (isRef) {
        const ref = this.getByRef(path);
        return ref ? [ref] : [];
      } else {
        return this.mtag(path);
      }
    }
    if (arrowIdx === -1 || pointIdx !== -1 && pointIdx < arrowIdx) {
      let next;
      const str = path.substr(0, pointIdx);
      if (isRef) {
        const ref = this.getByRef(str);
        next = ref ? [ref] : [];
      } else {
        next = this.mtag(str);
      }
      let total = [];
      const subPath = path.substr(pointIdx + 1);
      for (let i = 0, n = next.length; i < n; i++) {
        total = total.concat(next[i]._selectChilds(subPath, false));
      }
      return total;
    } else {
      let next;
      const str = path.substr(0, arrowIdx);
      if (isRef) {
        const ref = this.getByRef(str);
        next = ref ? [ref] : [];
      } else {
        next = this.mtag(str);
      }
      let total = [];
      const subPath = path.substr(arrowIdx + 1);
      for (let i = 0, n = next.length; i < n; i++) {
        total = total.concat(next[i]._selectChilds(subPath, true));
      }
      return total;
    }
  }
  getByRef(ref) {
    return this.childList.getByRef(ref);
  }
  getLocationString() {
    let i;
    i = this.__parent ? this.__parent._children.getIndex(this) : "R";
    let localTags = this.getTags();
    let str = this.__parent ? this.__parent.getLocationString() : "";
    if (this.ref) {
      str += ":[" + i + "]" + this.ref;
    } else if (localTags.length) {
      str += ":[" + i + "]" + localTags.join(",");
    } else {
      str += ":[" + i + "]#" + this.id;
    }
    return str;
  }
  toString() {
    let obj = this.getSettings();
    return Element.getPrettyString(obj, "");
  }
  static getPrettyString(obj, indent) {
    let children = obj.children;
    delete obj.children;
    let colorKeys = ["color", "colorUl", "colorUr", "colorBl", "colorBr"];
    let str = JSON.stringify(obj, function(k, v) {
      if (colorKeys.indexOf(k) !== -1) {
        return "COLOR[" + v.toString(16) + "]";
      }
      return v;
    });
    str = str.replace(/"COLOR\[([a-f0-9]{1,8})\]"/g, "0x$1");
    if (children) {
      let childStr = "";
      if (Utils$1.isObjectLiteral(children)) {
        let refs = Object.keys(children);
        childStr = "";
        for (let i = 0, n = refs.length; i < n; i++) {
          childStr += `
${indent}  "${refs[i]}":`;
          delete children[refs[i]].ref;
          childStr += Element.getPrettyString(children[refs[i]], indent + "  ") + (i < n - 1 ? "," : "");
        }
        let isEmpty = str === "{}";
        str = str.substr(0, str.length - 1) + (isEmpty ? "" : ",") + childStr + "\n" + indent + "}";
      } else {
        let n = children.length;
        childStr = "[";
        for (let i = 0; i < n; i++) {
          childStr += Element.getPrettyString(children[i], indent + "  ") + (i < n - 1 ? "," : "") + "\n";
        }
        childStr += indent + "]}";
        let isEmpty = str === "{}";
        str = str.substr(0, str.length - 1) + (isEmpty ? "" : ",") + '"children":\n' + indent + childStr + "}";
      }
    }
    return str;
  }
  getSettings() {
    let settings = this.getNonDefaults();
    let children = this._children.get();
    if (children) {
      let n = children.length;
      if (n) {
        const childArray = [];
        let missing = false;
        for (let i = 0; i < n; i++) {
          childArray.push(children[i].getSettings());
          missing = missing || !children[i].ref;
        }
        if (!missing) {
          settings.children = {};
          childArray.forEach((child) => {
            settings.children[child.ref] = child;
          });
        } else {
          settings.children = childArray;
        }
      }
    }
    settings.id = this.id;
    return settings;
  }
  getNonDefaults() {
    let settings = {};
    if (this.constructor !== Element) {
      settings.type = this.constructor.name;
    }
    if (this.__ref) {
      settings.ref = this.__ref;
    }
    if (this.__tags && this.__tags.length) {
      settings.tags = this.__tags;
    }
    if (this.x !== 0)
      settings.x = this.x;
    if (this.y !== 0)
      settings.y = this.y;
    if (this.w !== 0)
      settings.w = this.w;
    if (this.h !== 0)
      settings.h = this.h;
    if (this.scaleX === this.scaleY) {
      if (this.scaleX !== 1)
        settings.scale = this.scaleX;
    } else {
      if (this.scaleX !== 1)
        settings.scaleX = this.scaleX;
      if (this.scaleY !== 1)
        settings.scaleY = this.scaleY;
    }
    if (this.pivotX === this.pivotY) {
      if (this.pivotX !== 0.5)
        settings.pivot = this.pivotX;
    } else {
      if (this.pivotX !== 0.5)
        settings.pivotX = this.pivotX;
      if (this.pivotY !== 0.5)
        settings.pivotY = this.pivotY;
    }
    if (this.mountX === this.mountY) {
      if (this.mountX !== 0)
        settings.mount = this.mountX;
    } else {
      if (this.mountX !== 0)
        settings.mountX = this.mountX;
      if (this.mountY !== 0)
        settings.mountY = this.mountY;
    }
    if (this.alpha !== 1)
      settings.alpha = this.alpha;
    if (!this.visible)
      settings.visible = false;
    if (this.rotation !== 0)
      settings.rotation = this.rotation;
    if (this.colorUl === this.colorUr && this.colorBl === this.colorBr && this.colorUl === this.colorBl) {
      if (this.colorUl !== 4294967295)
        settings.color = this.colorUl.toString(16);
    } else {
      if (this.colorUl !== 4294967295)
        settings.colorUl = this.colorUl.toString(16);
      if (this.colorUr !== 4294967295)
        settings.colorUr = this.colorUr.toString(16);
      if (this.colorBl !== 4294967295)
        settings.colorBl = this.colorBl.toString(16);
      if (this.colorBr !== 4294967295)
        settings.colorBr = this.colorBr.toString(16);
    }
    if (this.zIndex)
      settings.zIndex = this.zIndex;
    if (this.forceZIndexContext)
      settings.forceZIndexContext = true;
    if (this.clipping)
      settings.clipping = this.clipping;
    if (!this.clipbox)
      settings.clipbox = this.clipbox;
    if (this.__texture) {
      let tnd = this.__texture.getNonDefaults();
      if (Object.keys(tnd).length) {
        settings.texture = tnd;
      }
    }
    if (this.shader && Utils$1.isFunction(this.shader.getNonDefaults)) {
      let tnd = this.shader.getNonDefaults();
      if (Object.keys(tnd).length) {
        settings.shader = tnd;
      }
    }
    if (this._hasTexturizer()) {
      if (this.texturizer.enabled) {
        settings.renderToTexture = this.texturizer.enabled;
      }
      if (this.texturizer.lazy) {
        settings.renderToTextureLazy = this.texturizer.lazy;
      }
      if (this.texturizer.colorize) {
        settings.colorizeResultTexture = this.texturizer.colorize;
      }
      if (this.texturizer.renderOffscreen) {
        settings.renderOffscreen = this.texturizer.renderOffscreen;
      }
    }
    return settings;
  }
  static getGetter(propertyPath) {
    let getter = Element.PROP_GETTERS.get(propertyPath);
    if (!getter) {
      getter = new Function("obj", "return obj." + propertyPath);
      Element.PROP_GETTERS.set(propertyPath, getter);
    }
    return getter;
  }
  static getSetter(propertyPath) {
    let setter = Element.PROP_SETTERS.get(propertyPath);
    if (!setter) {
      setter = new Function("obj", "v", "obj." + propertyPath + " = v");
      Element.PROP_SETTERS.set(propertyPath, setter);
    }
    return setter;
  }
  get withinBoundsMargin() {
    return this.__core._withinBoundsMargin;
  }
  _enableWithinBoundsMargin() {
    if (this.__enabled) {
      this._setActiveFlag();
    }
  }
  _disableWithinBoundsMargin() {
    if (this.__active) {
      this._unsetActiveFlag();
    }
  }
  set boundsMargin(v) {
    if (!Array.isArray(v) && v !== null) {
      throw new Error("boundsMargin should be an array of left-top-right-bottom values or null (inherit margin)");
    }
    this.__core.boundsMargin = v;
  }
  get boundsMargin() {
    return this.__core.boundsMargin;
  }
  get x() {
    return this.__core.offsetX;
  }
  set x(v) {
    this.__core.offsetX = v;
  }
  get y() {
    return this.__core.offsetY;
  }
  set y(v) {
    this.__core.offsetY = v;
  }
  get w() {
    return this._w;
  }
  set w(v) {
    if (Utils$1.isFunction(v)) {
      this._w = 0;
      this.__core.funcW = v;
    } else {
      v = Math.max(v, 0);
      if (this._w !== v) {
        this.__core.disableFuncW();
        this._w = v;
        this._updateDimensions();
      }
    }
  }
  get h() {
    return this._h;
  }
  set h(v) {
    if (Utils$1.isFunction(v)) {
      this._h = 0;
      this.__core.funcH = v;
    } else {
      v = Math.max(v, 0);
      if (this._h !== v) {
        this.__core.disableFuncH();
        this._h = v;
        this._updateDimensions();
      }
    }
  }
  get collision() {
    return this._collision;
  }
  set collision(v) {
    this._collision = v;
  }
  _updateCollision() {
    if (this.collision && this.__parent && this.__parent.collision === void 0) {
      this.__parent.collision = 2;
    }
  }
  get scaleX() {
    return this.__core.scaleX;
  }
  set scaleX(v) {
    this.__core.scaleX = v;
  }
  get scaleY() {
    return this.__core.scaleY;
  }
  set scaleY(v) {
    this.__core.scaleY = v;
  }
  get scale() {
    return this.__core.scale;
  }
  set scale(v) {
    this.__core.scale = v;
  }
  get pivotX() {
    return this.__core.pivotX;
  }
  set pivotX(v) {
    this.__core.pivotX = v;
  }
  get pivotY() {
    return this.__core.pivotY;
  }
  set pivotY(v) {
    this.__core.pivotY = v;
  }
  get pivot() {
    return this.__core.pivot;
  }
  set pivot(v) {
    this.__core.pivot = v;
  }
  get mountX() {
    return this.__core.mountX;
  }
  set mountX(v) {
    this.__core.mountX = v;
  }
  get mountY() {
    return this.__core.mountY;
  }
  set mountY(v) {
    this.__core.mountY = v;
  }
  get mount() {
    return this.__core.mount;
  }
  set mount(v) {
    this.__core.mount = v;
  }
  get rotation() {
    return this.__core.rotation;
  }
  set rotation(v) {
    this.__core.rotation = v;
  }
  get alpha() {
    return this.__core.alpha;
  }
  set alpha(v) {
    this.__core.alpha = v;
  }
  get visible() {
    return this.__core.visible;
  }
  set visible(v) {
    this.__core.visible = v;
  }
  get colorUl() {
    return this.__core.colorUl;
  }
  set colorUl(v) {
    this.__core.colorUl = v;
  }
  get colorUr() {
    return this.__core.colorUr;
  }
  set colorUr(v) {
    this.__core.colorUr = v;
  }
  get colorBl() {
    return this.__core.colorBl;
  }
  set colorBl(v) {
    this.__core.colorBl = v;
  }
  get colorBr() {
    return this.__core.colorBr;
  }
  set colorBr(v) {
    this.__core.colorBr = v;
  }
  get color() {
    return this.__core.colorUl;
  }
  set color(v) {
    if (this.colorUl !== v || this.colorUr !== v || this.colorBl !== v || this.colorBr !== v) {
      this.colorUl = v;
      this.colorUr = v;
      this.colorBl = v;
      this.colorBr = v;
    }
  }
  get colorTop() {
    return this.colorUl;
  }
  set colorTop(v) {
    if (this.colorUl !== v || this.colorUr !== v) {
      this.colorUl = v;
      this.colorUr = v;
    }
  }
  get colorBottom() {
    return this.colorBl;
  }
  set colorBottom(v) {
    if (this.colorBl !== v || this.colorBr !== v) {
      this.colorBl = v;
      this.colorBr = v;
    }
  }
  get colorLeft() {
    return this.colorUl;
  }
  set colorLeft(v) {
    if (this.colorUl !== v || this.colorBl !== v) {
      this.colorUl = v;
      this.colorBl = v;
    }
  }
  get colorRight() {
    return this.colorUr;
  }
  set colorRight(v) {
    if (this.colorUr !== v || this.colorBr !== v) {
      this.colorUr = v;
      this.colorBr = v;
    }
  }
  get zIndex() {
    return this.__core.zIndex;
  }
  set zIndex(v) {
    this.__core.zIndex = v;
  }
  get forceZIndexContext() {
    return this.__core.forceZIndexContext;
  }
  set forceZIndexContext(v) {
    this.__core.forceZIndexContext = v;
  }
  get clipping() {
    return this.__core.clipping;
  }
  set clipping(v) {
    this.__core.clipping = v;
  }
  get clipbox() {
    return this.__core.clipbox;
  }
  set clipbox(v) {
    this.__core.clipbox = v;
  }
  get tags() {
    return this.getTags();
  }
  set tags(v) {
    if (!Array.isArray(v))
      v = [v];
    this.setTags(v);
  }
  set t(v) {
    this.tags = v;
  }
  get _children() {
    if (!this.__childList) {
      this.__childList = new ElementChildList(this, false);
    }
    return this.__childList;
  }
  get childList() {
    if (!this._allowChildrenAccess()) {
      this._throwError("Direct access to children is not allowed in " + this.getLocationString());
    }
    return this._children;
  }
  hasChildren() {
    return this._allowChildrenAccess() && this.__childList && this.__childList.length > 0;
  }
  _allowChildrenAccess() {
    return true;
  }
  get children() {
    return this.childList.get();
  }
  set children(children) {
    this.childList.patch(children);
  }
  add(o) {
    return this.childList.a(o);
  }
  get p() {
    return this.__parent;
  }
  get parent() {
    return this.__parent;
  }
  get src() {
    if (this.texture && this.texture instanceof ImageTexture) {
      return this.texture._src;
    } else {
      return void 0;
    }
  }
  set src(v) {
    const texture = new ImageTexture(this.stage);
    texture.src = v;
    this.texture = texture;
  }
  set mw(v) {
    if (this.texture) {
      this.texture.mw = v;
      this._updateDimensions();
    } else {
      this._throwError("Please set mw after setting a texture.");
    }
  }
  set mh(v) {
    if (this.texture) {
      this.texture.mh = v;
      this._updateDimensions();
    } else {
      this._throwError("Please set mh after setting a texture.");
    }
  }
  get rect() {
    return this.texture === this.stage.rectangleTexture;
  }
  set rect(v) {
    if (v) {
      this.texture = this.stage.rectangleTexture;
    } else {
      this.texture = null;
    }
  }
  enableTextTexture() {
    if (!this.texture || !(this.texture instanceof TextTexture)) {
      this.texture = new TextTexture(this.stage);
      if (!this.texture.w && !this.texture.h) {
        this.texture.w = this.w;
        this.texture.h = this.h;
      }
    }
    return this.texture;
  }
  get text() {
    if (this.texture && this.texture instanceof TextTexture) {
      return this.texture;
    } else {
      return null;
    }
  }
  set text(v) {
    if (!this.texture || !(this.texture instanceof TextTexture)) {
      this.enableTextTexture();
    }
    if (Utils$1.isString(v)) {
      this.texture.text = v;
    } else {
      this.texture.patch(v);
    }
  }
  set onUpdate(f) {
    this.__core.onUpdate = f;
  }
  set onAfterCalcs(f) {
    this.__core.onAfterCalcs = f;
  }
  set onAfterUpdate(f) {
    this.__core.onAfterUpdate = f;
  }
  forceUpdate() {
    this.__core._setHasUpdates();
  }
  get shader() {
    return this.__core.shader;
  }
  set shader(v) {
    if (Utils$1.isObjectLiteral(v) && !v.type) {
      if (this.shader) {
        this.shader.patch(v);
      }
    } else {
      const shader = Shader.create(this.stage, v);
      if (this.__enabled && this.__core.shader) {
        this.__core.shader.removeElement(this.__core);
      }
      this.__core.shader = shader;
      if (this.__enabled && this.__core.shader) {
        this.__core.shader.addElement(this.__core);
      }
    }
  }
  _hasTexturizer() {
    return !!this.__core._texturizer;
  }
  get renderToTexture() {
    return this.rtt;
  }
  set renderToTexture(v) {
    this.rtt = v;
  }
  get rtt() {
    return this._hasTexturizer() && this.texturizer.enabled;
  }
  set rtt(v) {
    this.texturizer.enabled = v;
  }
  get rttLazy() {
    return this._hasTexturizer() && this.texturizer.lazy;
  }
  set rttLazy(v) {
    this.texturizer.lazy = v;
  }
  get renderOffscreen() {
    return this._hasTexturizer() && this.texturizer.renderOffscreen;
  }
  set renderOffscreen(v) {
    this.texturizer.renderOffscreen = v;
  }
  get colorizeResultTexture() {
    return this._hasTexturizer() && this.texturizer.colorize;
  }
  set colorizeResultTexture(v) {
    this.texturizer.colorize = v;
  }
  getTexture() {
    return this.texturizer._getTextureSource();
  }
  get texturizer() {
    return this.__core.texturizer;
  }
  patch(settings) {
    let paths = Object.keys(settings);
    for (let i = 0, n = paths.length; i < n; i++) {
      let path = paths[i];
      const v = settings[path];
      const firstCharCode = path.charCodeAt(0);
      if (Utils$1.isUcChar(firstCharCode)) {
        const child = this.getByRef(path);
        if (!child) {
          if (v !== void 0) {
            let c;
            if (Utils$1.isObjectLiteral(v)) {
              c = this.childList.createItem(v);
              c.patch(v);
            } else if (Utils$1.isObject(v)) {
              c = v;
            }
            if (c.isElement) {
              c.ref = path;
            }
            this.childList.a(c);
          }
        } else {
          if (v === void 0) {
            if (child.parent) {
              child.parent.childList.remove(child);
            }
          } else if (Utils$1.isObjectLiteral(v)) {
            child.patch(v);
          } else if (v.isElement) {
            v.ref = path;
            this.childList.replace(v, child);
          } else {
            this._throwError("Unexpected value for path: " + path);
          }
        }
      } else {
        Base.patchObjectProperty(this, path, v);
      }
    }
  }
  _throwError(message) {
    throw new Error(this.constructor.name + " (" + this.getLocationString() + "): " + message);
  }
  animation(settings) {
    return this.stage.animations.createAnimation(this, settings);
  }
  transition(property, settings = null) {
    if (settings === null) {
      return this._getTransition(property);
    } else {
      this._setTransition(property, settings);
      return null;
    }
  }
  set transitions(object) {
    let keys = Object.keys(object);
    keys.forEach((property) => {
      this.transition(property, object[property]);
    });
  }
  set smooth(object) {
    let keys = Object.keys(object);
    keys.forEach((property) => {
      let value = object[property];
      if (Array.isArray(value)) {
        this.setSmooth(property, value[0], value[1]);
      } else {
        this.setSmooth(property, value);
      }
    });
  }
  fastForward(property) {
    if (this._transitions) {
      let t = this._transitions[property];
      if (t && t.isTransition) {
        t.finish();
      }
    }
  }
  _getTransition(property) {
    if (!this._transitions) {
      this._transitions = {};
    }
    let t = this._transitions[property];
    if (!t) {
      t = new Transition(this.stage.transitions, this.stage.transitions.defaultTransitionSettings, this, property);
    } else if (t.isTransitionSettings) {
      t = new Transition(
        this.stage.transitions,
        t,
        this,
        property
      );
    }
    this._transitions[property] = t;
    return t;
  }
  _setTransition(property, settings) {
    if (!settings) {
      this._removeTransition(property);
    } else {
      if (Utils$1.isObjectLiteral(settings)) {
        settings = this.stage.transitions.createSettings(settings);
      }
      if (!this._transitions) {
        this._transitions = {};
      }
      let current = this._transitions[property];
      if (current && current.isTransition) {
        current.settings = settings;
        return current;
      } else {
        this._transitions[property] = settings;
      }
    }
  }
  _removeTransition(property) {
    if (this._transitions) {
      delete this._transitions[property];
    }
  }
  getSmooth(property, v) {
    let t = this._getTransition(property);
    if (t && t.isAttached()) {
      return t.targetValue;
    } else {
      return v;
    }
  }
  setSmooth(property, v, settings) {
    if (settings) {
      this._setTransition(property, settings);
    }
    let t = this._getTransition(property);
    t.start(v);
    return t;
  }
  get flex() {
    return this.__core.flex;
  }
  set flex(v) {
    this.__core.flex = v;
  }
  get flexItem() {
    return this.__core.flexItem;
  }
  set flexItem(v) {
    this.__core.flexItem = v;
  }
  static isColorProperty(property) {
    return property.toLowerCase().indexOf("color") >= 0;
  }
  static getMerger(property) {
    if (Element.isColorProperty(property)) {
      return StageUtils.mergeColors;
    } else {
      return StageUtils.mergeNumbers;
    }
  }
  toJSON() {
    const ref = [`${this.constructor.name}`];
    const tree = {};
    tree[ref] = {};
    if (this.hasChildren()) {
      Element.collectChildren(tree[ref], this.__childList);
    } else {
      tree[ref] = { ...Element.getProperties(this) };
    }
    return tree;
  }
  static collectChildren(tree, children) {
    const childList = children;
    for (let i = 0, j = childList.length; i < j; i++) {
      const element = childList.getAt(i);
      const ref = `${element.__ref || `Element-${element.id}`}`;
      const properties = this.getProperties(element);
      tree[ref] = { ...properties };
      if (element.hasChildren()) {
        tree[ref].children = {};
        this.collectChildren(
          tree[ref].children,
          element.__childList
        );
      }
    }
  }
  static getProperties(element) {
    const props = {};
    const list = [
      "alpha",
      "active",
      "attached",
      "boundsMargin",
      "color",
      "clipping",
      "enabled",
      "h",
      "id",
      "isComponent",
      "mount",
      "mountY",
      "mountX",
      "pivot",
      "pivotX",
      "pivotY",
      "ref",
      "renderOffscreen",
      "renderToTexture",
      "scale",
      "scaleX",
      "scaleY",
      "state",
      "tag",
      "visible",
      "w",
      "x",
      "y",
      "zIndex",
      "!!flex",
      "!!flexItem",
      "hasFocus()",
      "hasFinalFocus()"
    ];
    let n = list.length;
    while (n--) {
      let key = list[n];
      const getBoolean = /^!{2}/;
      const isFunction = /\(\)$/;
      if (getBoolean.test(key)) {
        key = key.substring(2, key.length);
        props[key] = !!element[key];
      } else if (isFunction.test(key)) {
        key = key.substring(0, key.length - 2);
        if (typeof element[key] === "function") {
          props[key] = element[key]();
        }
      } else {
        props[key] = element[key];
      }
    }
    return { ...props, ...element.getNonDefaults() };
  }
}
EventEmitter.addAsMixin(Element);
Element.prototype.isElement = 1;
Element.id = 1;
Element.PROP_GETTERS = /* @__PURE__ */ new Map();
Element.PROP_SETTERS = /* @__PURE__ */ new Map();
class StateMachine {
  constructor() {
    StateMachine.setupStateMachine(this);
  }
  static setupStateMachine(target) {
    const targetConstructor = target.constructor;
    const router = StateMachine.create(targetConstructor);
    Object.setPrototypeOf(target, router.prototype);
    target.constructor = targetConstructor;
    target._initStateMachine();
  }
  static create(type) {
    if (!type.hasOwnProperty("_sm")) {
      const stateMachineType = new StateMachineType(type);
      type._sm = stateMachineType;
    }
    return type._sm.router;
  }
  fire(event, ...args) {
    if (this._hasMethod(event)) {
      return this[event](...args);
    }
  }
  _getState() {
    return this._state.__path;
  }
  _inState(statePath, currentStatePath = this._state.__path) {
    const state = this._sm.getStateByPath(statePath);
    const currentState = this._sm.getStateByPath(currentStatePath);
    const level = state.__level;
    const stateAtLevel = StateMachine._getStateAtLevel(currentState, level);
    return stateAtLevel === state;
  }
  _hasMember(name) {
    return !!this.constructor.prototype[name];
  }
  _hasMethod(name) {
    const member = this.constructor.prototype[name];
    return !!member && typeof member === "function";
  }
  _setState(statePath, args) {
    const setStateId = ++this._setStateCounter;
    this._setStateId = setStateId;
    if (this._state.__path !== statePath) {
      let newState = this._sm._stateMap[statePath];
      if (!newState) {
        newState = this._sm.getStateByPath(statePath);
      }
      const prevState = this._state;
      const hasDifferentEnterMethod = newState.prototype.$enter !== this._state.prototype.$enter;
      const hasDifferentExitMethod = newState.prototype.$exit !== this._state.prototype.$exit;
      if (hasDifferentEnterMethod || hasDifferentExitMethod) {
        const sharedState = StateMachine._getSharedState(this._state, newState);
        const context = {
          newState: newState.__path,
          prevState: prevState.__path,
          sharedState: sharedState.__path
        };
        const sharedLevel = sharedState.__level;
        if (hasDifferentExitMethod) {
          const exitStates = StateMachine._getStatesUntilLevel(this._state, sharedLevel);
          for (let i = 0, n = exitStates.length; i < n; i++) {
            this.__setState(exitStates[i]);
            this._callExit(this._state, args, context);
            const stateChangeOverridden = this._setStateId !== setStateId;
            if (stateChangeOverridden) {
              return;
            }
          }
        }
        if (hasDifferentEnterMethod) {
          const enterStates = StateMachine._getStatesUntilLevel(newState, sharedLevel).reverse();
          for (let i = 0, n = enterStates.length; i < n; i++) {
            this.__setState(enterStates[i]);
            this._callEnter(this._state, args, context);
            const stateChangeOverridden = this._setStateId !== setStateId;
            if (stateChangeOverridden) {
              return;
            }
          }
        }
      }
      this.__setState(newState);
      if (this._changedState) {
        const context = {
          newState: newState.__path,
          prevState: prevState.__path
        };
        if (args) {
          this._changedState(context, ...args);
        } else {
          this._changedState(context);
        }
      }
      if (this._onStateChange) {
        const context = {
          newState: newState.__path,
          prevState: prevState.__path
        };
        this._onStateChange(context);
      }
    }
  }
  _callEnter(state, args = [], context) {
    const hasParent = !!state.__parent;
    if (state.prototype.$enter) {
      if (!hasParent || state.__parent.prototype.$enter !== state.prototype.$enter) {
        state.prototype.$enter.apply(this, [context, ...args]);
      }
    }
  }
  _callExit(state, args = [], context) {
    const hasParent = !!state.__parent;
    if (state.prototype.$exit) {
      if (!hasParent || state.__parent.prototype.$exit !== state.prototype.$exit) {
        state.prototype.$exit.apply(this, [context, ...args]);
      }
    }
  }
  __setState(state) {
    this._state = state;
    this._stateIndex = state.__index;
    this.constructor = state;
  }
  _initStateMachine() {
    this._state = null;
    this._stateIndex = 0;
    this._setStateCounter = 0;
    this._sm = this._routedType._sm;
    this.__setState(this._sm.getStateByPath(""));
    const context = { newState: "", prevState: void 0, sharedState: void 0 };
    this._callEnter(this._state, [], context);
    this._onStateChange = void 0;
  }
  _getMostSpecificHandledMember(memberNames) {
    let cur = this._state;
    do {
      for (let i = 0, n = memberNames.length; i < n; i++) {
        const memberName = memberNames[i];
        if (!cur.__parent) {
          if (cur.prototype[memberName]) {
            return memberName;
          }
        } else {
          const alias = StateMachineType.getStateMemberAlias(cur.__path, memberName);
          if (this[alias]) {
            return memberName;
          }
        }
      }
      cur = cur.__parent;
    } while (cur);
  }
  static _getStatesUntilLevel(state, level) {
    const states = [];
    while (state.__level > level) {
      states.push(state);
      state = state.__parent;
    }
    return states;
  }
  static _getSharedState(state1, state2) {
    const state1Array = StateMachine._getAncestorStates(state1);
    const state2Array = StateMachine._getAncestorStates(state2);
    const n = Math.min(state1Array.length, state2Array.length);
    for (let i = 0; i < n; i++) {
      if (state1Array[i] !== state2Array[i]) {
        return state1Array[i - 1];
      }
    }
    return state1Array[n - 1];
  }
  static _getAncestorStates(state) {
    const result = [];
    do {
      result.push(state);
    } while (state = state.__parent);
    return result.reverse();
  }
  static _getStateAtLevel(state, level) {
    if (level > state.__level) {
      return void 0;
    }
    while (level < state.__level) {
      state = state.__parent;
    }
    return state;
  }
}
class StateMachineType {
  constructor(type) {
    this._type = type;
    this._router = null;
    this.init();
  }
  get router() {
    return this._router;
  }
  init() {
    this._router = this._createRouter();
    this._stateMap = this._getStateMap();
    this._addStateMemberDelegatorsToRouter();
  }
  _createRouter() {
    const type = this._type;
    const router = class StateMachineRouter extends type {
      constructor() {
        super(...arguments);
        if (!this.constructor.hasOwnProperty("_isRouter")) {
          throw new Error(`You need to extend ${type.name}.original instead of ${type.name}.`);
        }
      }
    };
    router._isRouter = true;
    router.prototype._routedType = type;
    router.original = type;
    this._mixinStateMachineMethods(router);
    return router;
  }
  _mixinStateMachineMethods(router) {
    const names = Object.getOwnPropertyNames(StateMachine.prototype);
    for (let i = 0, n = names.length; i < n; i++) {
      const name = names[i];
      if (name !== "constructor") {
        const descriptor = Object.getOwnPropertyDescriptor(StateMachine.prototype, name);
        Object.defineProperty(router.prototype, name, descriptor);
      }
    }
  }
  _addStateMemberDelegatorsToRouter() {
    const members = this._getAllMemberNames();
    members.forEach((member) => {
      this._addMemberRouter(member);
    });
  }
  _addMemberRouter(member) {
    const statePaths = Object.keys(this._stateMap);
    const descriptors = [];
    const aliases = [];
    statePaths.forEach((statePath, index) => {
      const state = this._stateMap[statePath];
      const descriptor = this._getDescriptor(state, member);
      if (descriptor) {
        descriptors[index] = descriptor;
        const alias = StateMachineType.getStateMemberAlias(descriptor._source.__path, member);
        aliases[index] = alias;
        if (!this._router.prototype.hasOwnProperty(alias)) {
          Object.defineProperty(this._router.prototype, alias, descriptor);
        }
      } else {
        descriptors[index] = null;
        aliases[index] = null;
      }
    });
    let type = void 0;
    descriptors.forEach((descriptor) => {
      if (descriptor) {
        const descType = this._getDescriptorType(descriptor);
        if (type && type !== descType) {
          console.warn(`[Lightning] Member ${member} in ${this._type.name} has inconsistent types.`);
          return;
        }
        type = descType;
      }
    });
    switch (type) {
      case "method":
        this._addMethodRouter(member, descriptors, aliases);
        break;
      case "getter":
        this._addGetterSetterRouters(member);
        break;
      case "property":
        console.warn("[Lightning] Fixed properties are not supported; please use a getter instead!");
        break;
    }
  }
  _getDescriptor(state, member, isValid = () => true) {
    let type = state;
    let curState = state;
    do {
      const descriptor = Object.getOwnPropertyDescriptor(type.prototype, member);
      if (descriptor) {
        if (isValid(descriptor)) {
          descriptor._source = curState;
          return descriptor;
        }
      }
      type = Object.getPrototypeOf(type);
      if (type && type.hasOwnProperty("__state")) {
        curState = type;
      }
    } while (type && type.prototype);
    return void 0;
  }
  _getDescriptorType(descriptor) {
    if (descriptor.get || descriptor.set) {
      return "getter";
    } else {
      if (typeof descriptor.value === "function") {
        return "method";
      } else {
        return "property";
      }
    }
  }
  static _supportsSpread() {
    if (this.__supportsSpread === void 0) {
      this.__supportsSpread = false;
      try {
        const func = new Function("return [].concat(...arguments);");
        func();
        this.__supportsSpread = true;
      } catch (e) {
      }
    }
    return this.__supportsSpread;
  }
  _addMethodRouter(member, descriptors, aliases) {
    const code = [
      "//@ sourceURL=StateMachineRouter.js",
      "var i = this._stateIndex;"
    ];
    let cur = aliases[0];
    const supportsSpread = StateMachineType._supportsSpread();
    for (let i = 1, n = aliases.length; i < n; i++) {
      const alias = aliases[i];
      if (alias !== cur) {
        if (cur) {
          if (supportsSpread) {
            code.push(`if (i < ${i}) return this["${cur}"](...arguments); else`);
          } else {
            code.push(`if (i < ${i}) return this["${cur}"].apply(this, arguments); else`);
          }
        } else {
          code.push(`if (i < ${i}) return ; else`);
        }
      }
      cur = alias;
    }
    if (cur) {
      if (supportsSpread) {
        code.push(`return this["${cur}"](...arguments);`);
      } else {
        code.push(`return this["${cur}"].apply(this, arguments);`);
      }
    } else {
      code.push(`;`);
    }
    const functionBody = code.join("\n");
    const router = new Function([], functionBody);
    const descriptor = { value: router };
    Object.defineProperty(this._router.prototype, member, descriptor);
  }
  _addGetterSetterRouters(member) {
    const getter = this._getGetterRouter(member);
    const setter = this._getSetterRouter(member);
    const descriptor = {
      get: getter,
      set: setter
    };
    Object.defineProperty(this._router.prototype, member, descriptor);
  }
  _getGetterRouter(member) {
    const statePaths = Object.keys(this._stateMap);
    const aliases = [];
    statePaths.forEach((statePath, index) => {
      const state = this._stateMap[statePath];
      const descriptor = this._getDescriptor(state, member, (descriptor2) => descriptor2.get);
      if (descriptor) {
        const alias = StateMachineType.getStateMemberAlias(descriptor._source.__path, member);
        aliases[index] = alias;
        if (!this._router.prototype.hasOwnProperty(alias)) {
          Object.defineProperty(this._router.prototype, alias, descriptor);
        }
      } else {
        aliases[index] = null;
      }
    });
    const code = [
      "//@ sourceURL=StateMachineRouter.js",
      "var i = this._stateIndex;"
    ];
    let cur = aliases[0];
    for (let i = 1, n = aliases.length; i < n; i++) {
      const alias = aliases[i];
      if (alias !== cur) {
        if (cur) {
          code.push(`if (i < ${i}) return this["${cur}"]; else`);
        } else {
          code.push(`if (i < ${i}) return ; else`);
        }
      }
      cur = alias;
    }
    if (cur) {
      code.push(`return this["${cur}"];`);
    } else {
      code.push(`;`);
    }
    const functionBody = code.join("\n");
    const router = new Function([], functionBody);
    return router;
  }
  _getSetterRouter(member) {
    const statePaths = Object.keys(this._stateMap);
    const aliases = [];
    statePaths.forEach((statePath, index) => {
      const state = this._stateMap[statePath];
      const descriptor = this._getDescriptor(state, member, (descriptor2) => descriptor2.set);
      if (descriptor) {
        const alias = StateMachineType.getStateMemberAlias(descriptor._source.__path, member);
        aliases[index] = alias;
        if (!this._router.prototype.hasOwnProperty(alias)) {
          Object.defineProperty(this._router.prototype, alias, descriptor);
        }
      } else {
        aliases[index] = null;
      }
    });
    const code = [
      "//@ sourceURL=StateMachineRouter.js",
      "var i = this._stateIndex;"
    ];
    let cur = aliases[0];
    for (let i = 1, n = aliases.length; i < n; i++) {
      const alias = aliases[i];
      if (alias !== cur) {
        if (cur) {
          code.push(`if (i < ${i}) this["${cur}"] = arg; else`);
        } else {
          code.push(`if (i < ${i}) ; else`);
        }
      }
      cur = alias;
    }
    if (cur) {
      code.push(`this["${cur}"] = arg;`);
    } else {
      code.push(`;`);
    }
    const functionBody = code.join("\n");
    const router = new Function(["arg"], functionBody);
    return router;
  }
  static getStateMemberAlias(path, member) {
    return "$" + (path ? path + "." : "") + member;
  }
  _getAllMemberNames() {
    const stateMap = this._stateMap;
    const map = Object.keys(stateMap);
    let members = /* @__PURE__ */ new Set();
    map.forEach((statePath) => {
      if (statePath === "") {
        return;
      }
      const state = stateMap[statePath];
      const names = this._getStateMemberNames(state);
      names.forEach((name) => {
        members.add(name);
      });
    });
    return [...members];
  }
  _getStateMemberNames(state) {
    let type = state;
    let members = /* @__PURE__ */ new Set();
    const isRoot = this._type === state;
    do {
      const names = this._getStateMemberNamesForType(type);
      names.forEach((name) => {
        members.add(name);
      });
      type = Object.getPrototypeOf(type);
    } while (type && type.prototype && (!type.hasOwnProperty("__state") || isRoot));
    return members;
  }
  _getStateMemberNamesForType(type) {
    const memberNames = Object.getOwnPropertyNames(type.prototype);
    return memberNames.filter((memberName) => {
      return memberName !== "constructor" && !StateMachineType._isStateLocalMember(memberName);
    });
  }
  static _isStateLocalMember(memberName) {
    return memberName === "$enter" || memberName === "$exit";
  }
  getStateByPath(statePath) {
    if (this._stateMap[statePath]) {
      return this._stateMap[statePath];
    }
    const parts = statePath.split(".");
    while (parts.pop()) {
      const statePath2 = parts.join(".");
      if (this._stateMap[statePath2]) {
        return this._stateMap[statePath2];
      }
    }
  }
  _getStateMap() {
    if (!this._stateMap) {
      this._stateMap = this._createStateMap();
    }
    return this._stateMap;
  }
  _createStateMap() {
    const stateMap = {};
    this._addState(this._type, null, "", stateMap);
    return stateMap;
  }
  _addState(state, parentState, name, stateMap) {
    state.__state = true;
    state.__name = name;
    this._addStaticStateProperty(state, parentState);
    const parentPath = parentState ? parentState.__path : "";
    let path = (parentPath ? parentPath + "." : "") + name;
    state.__path = path;
    state.__level = parentState ? parentState.__level + 1 : 0;
    state.__parent = parentState;
    state.__index = Object.keys(stateMap).length;
    stateMap[path] = state;
    const states = state._states;
    if (states) {
      const isInheritedFromParent = parentState && parentState._states === states;
      if (!isInheritedFromParent) {
        const subStates = state._states();
        subStates.forEach((subState) => {
          const stateName = StateMachineType._getStateName(subState);
          this._addState(subState, state, stateName, stateMap);
        });
      }
    }
  }
  static _getStateName(state) {
    const name = state.name;
    const index = name.indexOf("$");
    if (index > 0) {
      return name.substr(0, index);
    }
    return name;
  }
  _addStaticStateProperty(state, parentState) {
    if (parentState) {
      const isClassStateLevel = parentState && !parentState.__parent;
      if (isClassStateLevel) {
        this._router[state.__name] = state;
      } else {
        parentState[state.__name] = state;
      }
    }
  }
}
class Component extends Element {
  constructor(stage, properties) {
    super(stage);
    this.tagRoot = true;
    if (Utils$1.isObjectLiteral(properties)) {
      Object.assign(this, properties);
    }
    this.__initialized = false;
    this.__firstActive = false;
    this.__firstEnable = false;
    this.__signals = void 0;
    this.__passSignals = void 0;
    this.__construct();
    const func = this.constructor.getTemplateFunc(this);
    func.f(this, func.a);
    this._build();
  }
  __start() {
    StateMachine.setupStateMachine(this);
    this._onStateChange = Component.prototype.__onStateChange;
  }
  get state() {
    return this._getState();
  }
  __onStateChange() {
    if (this.application) {
      this.application.updateFocusPath();
    }
  }
  _refocus() {
    if (this.application) {
      this.application.updateFocusPath();
    }
  }
  static bindProp(name, func = null) {
    return { __propertyBinding: true, __name: name, __func: func };
  }
  __bindProperty(propObj, targetObj, targetProp) {
    const obj = targetObj;
    const prop = targetProp;
    const propDependencies = Array.isArray(propObj.__name) ? propObj.__name : [propObj.__name];
    for (let i = 0; i < propDependencies.length; i++) {
      const propName = propDependencies[i];
      const func = propObj.__func ? propObj.__func : (context) => context[propName];
      if (!this.hasOwnProperty(propName)) {
        this[`__prop_bindings_${propName}`] = [{ __obj: obj, __prop: prop, __func: func }];
        Object.defineProperty(this, propName, {
          set: (value) => {
            this[`__prop_${propName}`] = value;
            for (const { __obj, __prop, __func } of this[`__prop_bindings_${propName}`]) {
              __obj[__prop] = __func(this);
            }
          },
          get: () => this[`__prop_${propName}`]
        });
      } else {
        this[`__prop_bindings_${propName}`].push({ __obj: obj, __prop: prop, __func: func });
      }
    }
  }
  static getTemplateFunc(ctx) {
    const name = "_templateFunc";
    const hasName = "__has" + name;
    if (this[hasName] !== this) {
      this[hasName] = this;
      this[name] = this.parseTemplate(this._template(ctx));
    }
    return this[name];
  }
  static parseTemplate(obj) {
    const context = {
      loc: [],
      store: [],
      rid: 0
    };
    this.parseTemplateRec(obj, context, "element");
    const code = context.loc.join(";\n");
    const f = new Function("element", "store", code);
    return { f, a: context.store };
  }
  static parseTemplateRec(obj, context, cursor) {
    const store = context.store;
    const loc = context.loc;
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      let value = obj[key];
      if (Utils$1.isUcChar(key.charCodeAt(0))) {
        if (Utils$1.isObjectLiteral(value)) {
          const childCursor = `r${key.replace(/[^a-z0-9]/gi, "") + context.rid}`;
          let type = value.type ? value.type : Element;
          if (type === Element) {
            loc.push(`var ${childCursor} = element.stage.createElement()`);
          } else {
            store.push(type);
            loc.push(`var ${childCursor} = new store[${store.length - 1}](${cursor}.stage)`);
          }
          loc.push(`${childCursor}.ref = "${key}"`);
          context.rid++;
          this.parseTemplateRec(value, context, childCursor);
          loc.push(`${cursor}.childList.add(${childCursor})`);
        } else if (Utils$1.isObject(value)) {
          store.push(value);
          loc.push(`${cursor}.childList.add(store[${store.length - 1}])`);
        }
      } else {
        if (key === "text") {
          const propKey = cursor + "__text";
          loc.push(`var ${propKey} = ${cursor}.enableTextTexture()`);
          if (value.__propertyBinding === true) {
            store.push(value);
            loc.push(`element.__bindProperty(store[${store.length - 1}], ${cursor}, "${key}")`);
          } else {
            this.parseTemplatePropRec(value, context, propKey);
          }
        } else if (key === "shader" && Utils$1.isObjectLiteral(value)) {
          const shaderCursor = `${cursor}["shader"]`;
          store.push(value);
          loc.push(`${cursor}["${key}"] = store[${store.length - 1}]`);
          this.parsePropertyBindings(value, context, shaderCursor);
        } else if (key === "texture" && Utils$1.isObjectLiteral(value)) {
          const propKey = cursor + "__texture";
          const type = value.type;
          if (type) {
            store.push(type);
            loc.push(`var ${propKey} = new store[${store.length - 1}](${cursor}.stage)`);
            this.parseTemplatePropRec(value, context, propKey);
            loc.push(`${cursor}["${key}"] = ${propKey}`);
          } else {
            loc.push(`${propKey} = ${cursor}.texture`);
            this.parseTemplatePropRec(value, context, propKey);
          }
        } else if (Utils$1.isObjectLiteral(value) && value.__propertyBinding === true) {
          store.push(value);
          loc.push(`element.__bindProperty(store[${store.length - 1}], ${cursor}, "${key}")`);
        } else {
          if (Utils$1.isNumber(value)) {
            loc.push(`${cursor}["${key}"] = ${value}`);
          } else if (Utils$1.isBoolean(value)) {
            loc.push(`${cursor}["${key}"] = ${value ? "true" : "false"}`);
          } else if (Utils$1.isObject(value) || Array.isArray(value)) {
            store.push(value);
            loc.push(`${cursor}["${key}"] = store[${store.length - 1}]`);
          } else {
            loc.push(`${cursor}["${key}"] = ${JSON.stringify(value)}`);
          }
        }
      }
    });
  }
  static parseTemplatePropRec(obj, context, cursor) {
    const store = context.store;
    const loc = context.loc;
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      if (key !== "type") {
        const value = obj[key];
        if (Utils$1.isNumber(value)) {
          loc.push(`${cursor}["${key}"] = ${value}`);
        } else if (Utils$1.isBoolean(value)) {
          loc.push(`${cursor}["${key}"] = ${value ? "true" : "false"}`);
        } else if (Utils$1.isObject(value) && value.__propertyBinding === true) {
          store.push(value);
          loc.push(`element.__bindProperty(store[${store.length - 1}], ${cursor}, "${key}")`);
        } else if (Utils$1.isObject(value) || Array.isArray(value)) {
          store.push(value);
          loc.push(`${cursor}["${key}"] = store[${store.length - 1}]`);
        } else {
          loc.push(`${cursor}["${key}"] = ${JSON.stringify(value)}`);
        }
      }
    });
  }
  static parsePropertyBindings(obj, context, cursor) {
    const store = context.store;
    const loc = context.loc;
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      if (key !== "type") {
        const value = obj[key];
        if (Utils$1.isObjectLiteral(value) && value.__propertyBinding === true) {
          store.push(value);
          loc.push(`element.__bindProperty(store[${store.length - 1}], ${cursor}, "${key}")`);
        }
      }
    });
  }
  _onSetup() {
    if (!this.__initialized) {
      this._setup();
    }
  }
  _setup() {
  }
  _onAttach() {
    if (!this.__initialized) {
      this.__init();
      this.__initialized = true;
    }
    this._attach();
  }
  _attach() {
  }
  _onDetach() {
    this._detach();
  }
  _detach() {
  }
  _onEnabled() {
    if (!this.__firstEnable) {
      this._firstEnable();
      this.__firstEnable = true;
    }
    this._enable();
  }
  _firstEnable() {
  }
  _enable() {
  }
  _onDisabled() {
    this._disable();
  }
  _disable() {
  }
  _onActive() {
    if (!this.__firstActive) {
      this._firstActive();
      this.__firstActive = true;
    }
    this._active();
  }
  _firstActive() {
  }
  _active() {
  }
  _onInactive() {
    this._inactive();
  }
  _inactive() {
  }
  get application() {
    return this.stage.application;
  }
  __construct() {
    this._construct();
  }
  _construct() {
  }
  _build() {
  }
  __init() {
    this._init();
  }
  _init() {
  }
  _focus(newTarget, prevTarget) {
  }
  _unfocus(newTarget) {
  }
  _focusChange(target, newTarget) {
  }
  _getFocused() {
    return this;
  }
  _setFocusSettings(settings) {
  }
  _handleFocusSettings(settings) {
  }
  static _template() {
    return {};
  }
  hasFinalFocus() {
    let path = this.application._focusPath;
    return path && path.length && path[path.length - 1] === this;
  }
  hasFocus() {
    let path = this.application._focusPath;
    return path && path.indexOf(this) >= 0;
  }
  get cparent() {
    return Component.getParent(this);
  }
  seekAncestorByType(type) {
    let c = this.cparent;
    while (c) {
      if (c.constructor === type) {
        return c;
      }
      c = c.cparent;
    }
  }
  getSharedAncestorComponent(element) {
    let ancestor = this.getSharedAncestor(element);
    while (ancestor && !ancestor.isComponent) {
      ancestor = ancestor.parent;
    }
    return ancestor;
  }
  get signals() {
    return this.__signals;
  }
  set signals(v) {
    if (!Utils$1.isObjectLiteral(v)) {
      this._throwError("Signals: specify an object with signal-to-fire mappings");
    }
    this.__signals = v;
  }
  set alterSignals(v) {
    if (!Utils$1.isObjectLiteral(v)) {
      this._throwError("Signals: specify an object with signal-to-fire mappings");
    }
    if (!this.__signals) {
      this.__signals = {};
    }
    for (let key in v) {
      const d = v[key];
      if (d === void 0) {
        delete this.__signals[key];
      } else {
        this.__signals[key] = v;
      }
    }
  }
  get passSignals() {
    return this.__passSignals || {};
  }
  set passSignals(v) {
    this.__passSignals = Object.assign(this.__passSignals || {}, v);
  }
  set alterPassSignals(v) {
    if (!Utils$1.isObjectLiteral(v)) {
      this._throwError("Signals: specify an object with signal-to-fire mappings");
    }
    if (!this.__passSignals) {
      this.__passSignals = {};
    }
    for (let key in v) {
      const d = v[key];
      if (d === void 0) {
        delete this.__passSignals[key];
      } else {
        this.__passSignals[key] = v;
      }
    }
  }
  signal(event, ...args) {
    return this._signal(event, args);
  }
  _signal(event, args) {
    const signalParent = this._getParentSignalHandler();
    if (signalParent) {
      if (this.__signals) {
        let fireEvent = this.__signals[event];
        if (fireEvent === false) {
          return;
        }
        if (fireEvent) {
          if (fireEvent === true) {
            fireEvent = event;
          }
          if (Utils$1.isFunction(fireEvent)) {
            return fireEvent(...args);
          }
          if (signalParent._hasMethod(fireEvent)) {
            return signalParent[fireEvent](...args);
          }
        }
      }
      let passSignal = this.__passSignals && this.__passSignals[event];
      if (passSignal) {
        if (passSignal && passSignal !== true) {
          event = passSignal;
        }
        return signalParent._signal(event, args);
      }
    }
  }
  _getParentSignalHandler() {
    return this.cparent ? this.cparent._getSignalHandler() : null;
  }
  _getSignalHandler() {
    if (this._signalProxy) {
      return this.cparent ? this.cparent._getSignalHandler() : null;
    }
    return this;
  }
  get _signalProxy() {
    return false;
  }
  fireAncestors(name, ...args) {
    if (!name.startsWith("$")) {
      throw new Error("Ancestor event name must be prefixed by dollar sign.");
    }
    const parent = this._getParentSignalHandler();
    if (parent) {
      return parent._doFireAncestors(name, args);
    }
  }
  _doFireAncestors(name, args) {
    if (this._hasMethod(name)) {
      return this.fire(name, ...args);
    } else {
      const signalParent = this._getParentSignalHandler();
      if (signalParent) {
        return signalParent._doFireAncestors(name, args);
      }
    }
  }
  static collectSubComponents(subs, element) {
    if (element.hasChildren()) {
      const childList = element.__childList;
      for (let i = 0, n = childList.length; i < n; i++) {
        const child = childList.getAt(i);
        if (child.isComponent) {
          subs.push(child);
        } else {
          Component.collectSubComponents(subs, child);
        }
      }
    }
  }
  static getComponent(element) {
    let parent = element;
    while (parent && !parent.isComponent) {
      parent = parent.parent;
    }
    return parent;
  }
  static getParent(element) {
    return Component.getComponent(element.parent);
  }
}
Component.prototype.isComponent = true;
class CoreQuadList {
  constructor(ctx) {
    this.ctx = ctx;
    this.quadTextures = [];
    this.quadElements = [];
  }
  get length() {
    return this.quadTextures.length;
  }
  reset() {
    this.quadTextures = [];
    this.quadElements = [];
    this.dataLength = 0;
  }
  getElement(index) {
    return this.quadElements[index]._element;
  }
  getElementCore(index) {
    return this.quadElements[index];
  }
  getTexture(index) {
    return this.quadTextures[index];
  }
  getTextureWidth(index) {
    let nativeTexture = this.quadTextures[index];
    if (nativeTexture.w) {
      return nativeTexture.w;
    } else {
      return this.quadElements[index]._displayedTextureSource.w;
    }
  }
  getTextureHeight(index) {
    let nativeTexture = this.quadTextures[index];
    if (nativeTexture.h) {
      return nativeTexture.h;
    } else {
      return this.quadElements[index]._displayedTextureSource.h;
    }
  }
}
class WebGLCoreQuadList extends CoreQuadList {
  constructor(ctx) {
    super(ctx);
    const byteSize = ctx.stage.getOption("bufferMemory");
    this.dataLength = 0;
    this.data = new ArrayBuffer(byteSize);
    this.floats = new Float32Array(this.data);
    this.uints = new Uint32Array(this.data);
  }
  getAttribsDataByteOffset(index) {
    return index * 80;
  }
  getQuadContents() {
    let floats = this.floats;
    let uints = this.uints;
    let lines = [];
    for (let i = 1; i <= this.length; i++) {
      let str = "entry " + i + ": ";
      for (let j = 0; j < 4; j++) {
        let b = i * 20 + j * 4;
        str += floats[b] + "," + floats[b + 1] + ":" + floats[b + 2] + "," + floats[b + 3] + "[" + uints[b + 4].toString(16) + "] ";
      }
      lines.push(str);
    }
    return lines;
  }
}
class CoreQuadOperation {
  constructor(ctx, shader, shaderOwner, renderTextureInfo, scissor, index) {
    this.ctx = ctx;
    this.shader = shader;
    this.shaderOwner = shaderOwner;
    this.renderTextureInfo = renderTextureInfo;
    this.scissor = scissor;
    this.index = index;
    this.length = 0;
  }
  get quads() {
    return this.ctx.renderState.quads;
  }
  getTexture(index) {
    return this.quads.getTexture(this.index + index);
  }
  getElementCore(index) {
    return this.quads.getElementCore(this.index + index);
  }
  getElement(index) {
    return this.quads.getElement(this.index + index);
  }
  getElementWidth(index) {
    return this.getElement(index).renderWidth;
  }
  getElementHeight(index) {
    return this.getElement(index).renderHeight;
  }
  getTextureWidth(index) {
    return this.quads.getTextureWidth(this.index + index);
  }
  getTextureHeight(index) {
    return this.quads.getTextureHeight(this.index + index);
  }
  getRenderWidth() {
    if (this.renderTextureInfo) {
      return this.renderTextureInfo.w;
    } else {
      return this.ctx.stage.w;
    }
  }
  getRenderHeight() {
    if (this.renderTextureInfo) {
      return this.renderTextureInfo.h;
    } else {
      return this.ctx.stage.h;
    }
  }
}
class WebGLCoreQuadOperation extends CoreQuadOperation {
  constructor(ctx, shader, shaderOwner, renderTextureInfo, scissor, index) {
    super(ctx, shader, shaderOwner, renderTextureInfo, scissor, index);
    this.extraAttribsDataByteOffset = 0;
  }
  getAttribsDataByteOffset(index) {
    return this.quads.getAttribsDataByteOffset(this.index + index);
  }
  getNormalRenderTextureCoords(x, y) {
    let coords = this.shaderOwner.getRenderTextureCoords(x, y);
    coords[0] /= this.getRenderWidth();
    coords[1] /= this.getRenderHeight();
    coords[0] = coords[0] * 2 - 1;
    coords[1] = 1 - coords[1] * 2;
    return coords;
  }
  getProjection() {
    if (this.renderTextureInfo === null) {
      return this.ctx.renderExec._projection;
    } else {
      return this.renderTextureInfo.nativeTexture.projection;
    }
  }
}
class CoreRenderExecutor {
  constructor(ctx) {
    this.ctx = ctx;
    this.renderState = ctx.renderState;
    this.gl = this.ctx.stage.gl;
  }
  destroy() {
    this.ctx = null;
    this.renderState = null;
    this.gl = null;
    delete this.ctx;
    delete this.renderState;
    delete this.gl;
  }
  _reset() {
    this._bindRenderTexture(null);
    this._setScissor(null);
    this._clearRenderTexture();
  }
  execute() {
    this._reset();
    let qops = this.renderState.quadOperations;
    let i = 0, n = qops.length;
    while (i < n) {
      this._processQuadOperation(qops[i]);
      i++;
    }
  }
  _processQuadOperation(quadOperation) {
    if (quadOperation.renderTextureInfo && quadOperation.renderTextureInfo.ignore) {
      return;
    }
    this._setupQuadOperation(quadOperation);
    this._execQuadOperation(quadOperation);
  }
  _setupQuadOperation(quadOperation) {
  }
  _execQuadOperation(op) {
    let nativeTexture = op.renderTextureInfo ? op.renderTextureInfo.nativeTexture : null;
    if (this._renderTexture !== nativeTexture) {
      this._bindRenderTexture(nativeTexture);
    }
    if (op.renderTextureInfo && !op.renderTextureInfo.cleared) {
      this._setScissor(null);
      this._clearRenderTexture();
      op.renderTextureInfo.cleared = true;
      this._setScissor(op.scissor);
    } else {
      this._setScissor(op.scissor);
    }
    this._renderQuadOperation(op);
  }
  _renderQuadOperation(op) {
  }
  _bindRenderTexture(renderTexture) {
    this._renderTexture = renderTexture;
  }
  _clearRenderTexture(renderTexture) {
  }
  _setScissor(area) {
  }
}
class WebGLCoreRenderExecutor extends CoreRenderExecutor {
  constructor(ctx) {
    super(ctx);
    this.gl = this.ctx.stage.gl;
    this.init();
  }
  init() {
    let gl = this.gl;
    this._attribsBuffer = gl.createBuffer();
    let maxQuads = Math.floor(this.renderState.quads.data.byteLength / 80);
    let allIndices = new Uint16Array(maxQuads * 6);
    for (let i = 0, j = 0; i < maxQuads; i += 6, j += 4) {
      allIndices[i] = j;
      allIndices[i + 1] = j + 1;
      allIndices[i + 2] = j + 2;
      allIndices[i + 3] = j;
      allIndices[i + 4] = j + 2;
      allIndices[i + 5] = j + 3;
    }
    this._quadsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._quadsBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, allIndices, gl.STATIC_DRAW);
    this._projection = new Float32Array([2 / this.ctx.stage.coordsWidth, -2 / this.ctx.stage.coordsHeight]);
  }
  destroy() {
    super.destroy();
    this.gl.deleteBuffer(this._attribsBuffer);
    this.gl.deleteBuffer(this._quadsBuffer);
    this.gl = null;
    delete this.gl;
  }
  _reset() {
    super._reset();
    let gl = this.gl;
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.enable(gl.BLEND);
    gl.disable(gl.DEPTH_TEST);
    this._stopShaderProgram();
    this._setupBuffers();
  }
  _setupBuffers() {
    let gl = this.gl;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._quadsBuffer);
    let element = new Float32Array(this.renderState.quads.data, 0, this.renderState.quads.dataLength);
    gl.bindBuffer(gl.ARRAY_BUFFER, this._attribsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, element, gl.DYNAMIC_DRAW);
  }
  _setupQuadOperation(quadOperation) {
    super._setupQuadOperation(quadOperation);
    this._useShaderProgram(quadOperation.shader, quadOperation);
  }
  _renderQuadOperation(op) {
    let shader = op.shader;
    if (op.length || op.shader.addEmpty()) {
      shader.beforeDraw(op);
      shader.draw(op);
      shader.afterDraw(op);
    }
  }
  _useShaderProgram(shader, operation) {
    if (!shader.hasSameProgram(this._currentShaderProgram)) {
      if (this._currentShaderProgram) {
        this._currentShaderProgram.stopProgram();
      }
      shader.useProgram();
      this._currentShaderProgram = shader;
    }
    shader.setupUniforms(operation);
  }
  _stopShaderProgram() {
    if (this._currentShaderProgram) {
      this._currentShaderProgram.stopProgram();
      this._currentShaderProgram = null;
    }
  }
  _bindRenderTexture(renderTexture) {
    super._bindRenderTexture(renderTexture);
    let gl = this.gl;
    if (!this._renderTexture) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, this.ctx.stage.w, this.ctx.stage.h);
    } else {
      gl.bindFramebuffer(gl.FRAMEBUFFER, this._renderTexture.framebuffer);
      gl.viewport(0, 0, this._renderTexture.w, this._renderTexture.h);
    }
  }
  _clearRenderTexture() {
    super._clearRenderTexture();
    let gl = this.gl;
    if (!this._renderTexture) {
      let glClearColor = this.ctx.stage.getClearColor();
      if (glClearColor) {
        gl.clearColor(glClearColor[0] * glClearColor[3], glClearColor[1] * glClearColor[3], glClearColor[2] * glClearColor[3], glClearColor[3]);
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
    } else {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
  }
  _setScissor(area) {
    super._setScissor(area);
    if (this._scissor === area) {
      return;
    }
    this._scissor = area;
    let gl = this.gl;
    if (!area) {
      gl.disable(gl.SCISSOR_TEST);
    } else {
      gl.enable(gl.SCISSOR_TEST);
      let precision = this.ctx.stage.getRenderPrecision();
      let y = area[1];
      if (this._renderTexture === null) {
        y = this.ctx.stage.h / precision - (area[1] + area[3]);
      }
      gl.scissor(Math.round(area[0] * precision), Math.round(y * precision), Math.round(area[2] * precision), Math.round(area[3] * precision));
    }
  }
}
class CoreRenderState {
  constructor(ctx) {
    this.ctx = ctx;
    this.stage = ctx.stage;
    this.defaultShader = this.stage.renderer.getDefaultShader(ctx);
    this.renderer = ctx.stage.renderer;
    this.quads = this.renderer.createCoreQuadList(ctx);
  }
  reset() {
    this._renderTextureInfo = null;
    this._scissor = null;
    this._shader = null;
    this._shaderOwner = null;
    this._realShader = null;
    this._check = false;
    this.quadOperations = [];
    this._texturizer = null;
    this._texturizerTemporary = false;
    this._quadOperation = null;
    this.quads.reset();
    this._temporaryTexturizers = [];
    this._isCachingTexturizer = false;
  }
  get length() {
    return this.quads.quadTextures.length;
  }
  setShader(shader, owner) {
    if (this._shaderOwner !== owner || this._realShader !== shader) {
      this._realShader = shader;
      if (shader.useDefault()) {
        shader = this.defaultShader;
      }
      if (this._shader !== shader || this._shaderOwner !== owner) {
        this._shader = shader;
        this._shaderOwner = owner;
        this._check = true;
      }
    }
  }
  get renderTextureInfo() {
    return this._renderTextureInfo;
  }
  setScissor(area) {
    if (this._scissor !== area) {
      if (area) {
        this._scissor = area;
      } else {
        this._scissor = null;
      }
      this._check = true;
    }
  }
  getScissor() {
    return this._scissor;
  }
  setRenderTextureInfo(renderTextureInfo) {
    if (this._renderTextureInfo !== renderTextureInfo) {
      this._renderTextureInfo = renderTextureInfo;
      this._scissor = null;
      this._check = true;
    }
  }
  setTexturizer(texturizer, cache = false) {
    this._texturizer = texturizer;
    this._cacheTexturizer = cache;
  }
  set isCachingTexturizer(v) {
    this._isCachingTexturizer = v;
  }
  get isCachingTexturizer() {
    return this._isCachingTexturizer;
  }
  addQuad(elementCore) {
    if (!this._quadOperation) {
      this._createQuadOperation();
    } else if (this._check && this._hasChanges()) {
      this._finishQuadOperation();
      this._check = false;
    }
    let nativeTexture = null;
    if (this._texturizer) {
      nativeTexture = this._texturizer.getResultTexture();
      if (!this._cacheTexturizer) {
        this._temporaryTexturizers.push(this._texturizer);
      }
    }
    if (!nativeTexture) {
      nativeTexture = elementCore._displayedTextureSource.nativeTexture;
    }
    if (this._renderTextureInfo) {
      if (this._shader === this.defaultShader && this._renderTextureInfo.empty) {
        this._renderTextureInfo.nativeTexture = nativeTexture;
        this._renderTextureInfo.offset = this.length;
      } else {
        this._renderTextureInfo.nativeTexture = null;
      }
      this._renderTextureInfo.empty = false;
    }
    this.quads.quadTextures.push(nativeTexture);
    this.quads.quadElements.push(elementCore);
    this._quadOperation.length++;
    this.renderer.addQuad(this, this.quads, this.length - 1);
  }
  finishedRenderTexture() {
    if (this._renderTextureInfo.nativeTexture) {
      if (!this._isRenderTextureReusable()) {
        this._renderTextureInfo.nativeTexture = null;
      }
    }
  }
  _isRenderTextureReusable() {
    const offset = this._renderTextureInfo.offset;
    return this.quads.quadTextures[offset].w === this._renderTextureInfo.w && this.quads.quadTextures[offset].h === this._renderTextureInfo.h && this.renderer.isRenderTextureReusable(this, this._renderTextureInfo);
  }
  _hasChanges() {
    let q = this._quadOperation;
    if (this._shader !== q.shader)
      return true;
    if (this._shaderOwner !== q.shaderOwner)
      return true;
    if (this._renderTextureInfo !== q.renderTextureInfo)
      return true;
    if (this._scissor !== q.scissor) {
      if (this._scissor[0] !== q.scissor[0] || this._scissor[1] !== q.scissor[1] || this._scissor[2] !== q.scissor[2] || this._scissor[3] !== q.scissor[3]) {
        return true;
      }
    }
    return false;
  }
  _finishQuadOperation(create = true) {
    if (this._quadOperation) {
      if (this._quadOperation.length || this._shader.addEmpty()) {
        if (!this._quadOperation.scissor || this._quadOperation.scissor[2] > 0 && this._quadOperation.scissor[3] > 0) {
          this.quadOperations.push(this._quadOperation);
        }
      }
      if (this._temporaryTexturizers.length) {
        for (let i = 0, n = this._temporaryTexturizers.length; i < n; i++) {
          this._temporaryTexturizers[i].releaseRenderTexture();
        }
        this._temporaryTexturizers = [];
      }
      this._quadOperation = null;
    }
    if (create) {
      this._createQuadOperation();
    }
  }
  _createQuadOperation() {
    this._quadOperation = this.renderer.createCoreQuadOperation(
      this.ctx,
      this._shader,
      this._shaderOwner,
      this._renderTextureInfo,
      this._scissor,
      this.length
    );
    this._check = false;
  }
  finish() {
    if (this._quadOperation) {
      this._finishQuadOperation(false);
    }
    this.renderer.finishRenderState(this);
  }
}
class WebGLShaderProgram {
  constructor(vertexShaderSource, fragmentShaderSource) {
    this.vertexShaderSource = vertexShaderSource;
    this.fragmentShaderSource = fragmentShaderSource;
    this._program = null;
    this.gl = null;
    this._uniformLocations = /* @__PURE__ */ new Map();
    this._attributeLocations = /* @__PURE__ */ new Map();
    this._currentUniformValues = {};
  }
  compile(gl) {
    if (this._program)
      return;
    this.gl = gl;
    this._program = gl.createProgram();
    let glVertShader = this._glCompile(gl.VERTEX_SHADER, this.vertexShaderSource);
    let glFragShader = this._glCompile(gl.FRAGMENT_SHADER, this.fragmentShaderSource);
    gl.attachShader(this._program, glVertShader);
    gl.attachShader(this._program, glFragShader);
    gl.linkProgram(this._program);
    if (!gl.getProgramParameter(this._program, gl.LINK_STATUS)) {
      console.error("[Lightning] Error: Could not initialize shader.");
      console.error("[Lightning] gl.VALIDATE_STATUS", gl.getProgramParameter(this._program, gl.VALIDATE_STATUS));
      console.error("[Lightning] gl.getError()", gl.getError());
      if (gl.getProgramInfoLog(this._program) !== "") {
        console.warn("[Lightning] Warning: gl.getProgramInfoLog()", gl.getProgramInfoLog(this._program));
      }
      gl.deleteProgram(this._program);
      this._program = null;
    }
    gl.deleteShader(glVertShader);
    gl.deleteShader(glFragShader);
  }
  _glCompile(type, src) {
    let shader = this.gl.createShader(type);
    this.gl.shaderSource(shader, src);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      console.error("[Lightning]", this.constructor.name, "Type: " + (type === this.gl.VERTEX_SHADER ? "vertex shader" : "fragment shader"));
      console.error("[Lightning]", this.gl.getShaderInfoLog(shader));
      let idx = 0;
      console.error("[Lightning]", "========== source ==========\n" + src.split("\n").map((line) => "" + ++idx + ": " + line).join("\n"));
      return null;
    }
    return shader;
  }
  getUniformLocation(name) {
    let location = this._uniformLocations.get(name);
    if (location === void 0) {
      location = this.gl.getUniformLocation(this._program, name);
      this._uniformLocations.set(name, location);
    }
    return location;
  }
  getAttribLocation(name) {
    let location = this._attributeLocations.get(name);
    if (location === void 0) {
      location = this.gl.getAttribLocation(this._program, name);
      this._attributeLocations.set(name, location);
    }
    return location;
  }
  destroy() {
    if (this._program) {
      this.gl.deleteProgram(this._program);
    }
    this._attributeLocations = null;
    this._currentUniformValues = null;
    this.fragmentShaderSource = null;
    this._program = null;
    this.gl = null;
    this._uniformLocations = null;
    this.vertexShaderSource = null;
    delete this.vertexShaderSource;
    delete this._program;
    delete this._currentUniformValues;
    delete this.fragmentShaderSource;
    delete this.gl;
    delete this._uniformLocations;
    delete this._attributeLocations;
  }
  get glProgram() {
    return this._program;
  }
  get compiled() {
    return !!this._program;
  }
  _valueEquals(v1, v2) {
    if (v1.length && v2.length) {
      for (let i = 0, n = v1.length; i < n; i++) {
        if (v1[i] !== v2[i])
          return false;
      }
      return true;
    } else {
      return v1 === v2;
    }
  }
  _valueClone(v) {
    if (v.length) {
      return v.slice(0);
    } else {
      return v;
    }
  }
  setUniformValue(name, value, glFunction) {
    let v = this._currentUniformValues[name];
    if (v === void 0 || !this._valueEquals(v, value)) {
      let clonedValue = this._valueClone(value);
      this._currentUniformValues[name] = clonedValue;
      let loc = this.getUniformLocation(name);
      if (loc) {
        let isMatrix = glFunction === this.gl.uniformMatrix2fv || glFunction === this.gl.uniformMatrix3fv || glFunction === this.gl.uniformMatrix4fv;
        if (isMatrix) {
          glFunction.call(this.gl, loc, false, clonedValue);
        } else {
          glFunction.call(this.gl, loc, clonedValue);
        }
      }
    }
  }
}
class WebGLShader extends Shader {
  constructor(ctx) {
    super(ctx);
    const stage = ctx.stage;
    this._program = stage.renderer.shaderPrograms.get(this.constructor);
    if (!this._program) {
      this._program = new WebGLShaderProgram(this.constructor.vertexShaderSource, this.constructor.fragmentShaderSource);
      stage.renderer.shaderPrograms.set(this.constructor, this._program);
    }
    this.gl = stage.gl;
  }
  get glProgram() {
    return this._program.glProgram;
  }
  _init() {
    if (!this._initialized) {
      this.initialize();
      this._initialized = true;
    }
  }
  initialize() {
    this._program.compile(this.gl);
  }
  get initialized() {
    return this._initialized;
  }
  _uniform(name) {
    return this._program.getUniformLocation(name);
  }
  _attrib(name) {
    return this._program.getAttribLocation(name);
  }
  _setUniform(name, value, glFunction) {
    this._program.setUniformValue(name, value, glFunction);
  }
  useProgram() {
    this._init();
    this.gl.useProgram(this.glProgram);
    this.beforeUsage();
    this.enableAttribs();
  }
  stopProgram() {
    this.afterUsage();
    this.disableAttribs();
  }
  hasSameProgram(other) {
    return other && (other === this || other._program === this._program);
  }
  beforeUsage() {
  }
  afterUsage() {
  }
  enableAttribs() {
  }
  disableAttribs() {
  }
  getExtraAttribBytesPerVertex() {
    return 0;
  }
  getVertexAttribPointerOffset(operation) {
    return operation.extraAttribsDataByteOffset - operation.index * 4 * this.getExtraAttribBytesPerVertex();
  }
  setExtraAttribsInBuffer(operation) {
  }
  setupUniforms(operation) {
  }
  _getProjection(operation) {
    return operation.getProjection();
  }
  getFlipY(operation) {
    return this._getProjection(operation)[1] < 0;
  }
  beforeDraw(operation) {
  }
  draw(operation) {
  }
  afterDraw(operation) {
  }
  cleanup() {
    this._initialized = false;
  }
}
let DefaultShader$1 = class DefaultShader extends WebGLShader {
  enableAttribs() {
    let gl = this.gl;
    gl.vertexAttribPointer(this._attrib("aVertexPosition"), 2, gl.FLOAT, false, 20, 0);
    gl.enableVertexAttribArray(this._attrib("aVertexPosition"));
    if (this._attrib("aTextureCoord") !== -1) {
      gl.vertexAttribPointer(this._attrib("aTextureCoord"), 2, gl.FLOAT, false, 20, 2 * 4);
      gl.enableVertexAttribArray(this._attrib("aTextureCoord"));
    }
    if (this._attrib("aColor") !== -1) {
      gl.vertexAttribPointer(this._attrib("aColor"), 4, gl.UNSIGNED_BYTE, true, 20, 4 * 4);
      gl.enableVertexAttribArray(this._attrib("aColor"));
    }
  }
  disableAttribs() {
    let gl = this.gl;
    gl.disableVertexAttribArray(this._attrib("aVertexPosition"));
    if (this._attrib("aTextureCoord") !== -1) {
      gl.disableVertexAttribArray(this._attrib("aTextureCoord"));
    }
    if (this._attrib("aColor") !== -1) {
      gl.disableVertexAttribArray(this._attrib("aColor"));
    }
  }
  setupUniforms(operation) {
    this._setUniform("projection", this._getProjection(operation), this.gl.uniform2fv, false);
  }
  draw(operation) {
    let gl = this.gl;
    let length = operation.length;
    if (length) {
      let glTexture = operation.getTexture(0);
      let pos = 0;
      for (let i = 0; i < length; i++) {
        let tx = operation.getTexture(i);
        if (glTexture !== tx) {
          gl.bindTexture(gl.TEXTURE_2D, glTexture);
          gl.drawElements(gl.TRIANGLES, 6 * (i - pos), gl.UNSIGNED_SHORT, (pos + operation.index) * 6 * 2);
          glTexture = tx;
          pos = i;
        }
      }
      gl.bindTexture(gl.TEXTURE_2D, glTexture);
      gl.drawElements(gl.TRIANGLES, 6 * (length - pos), gl.UNSIGNED_SHORT, (pos + operation.index) * 6 * 2);
    }
  }
};
DefaultShader$1.vertexShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    attribute vec2 aVertexPosition;
    attribute vec2 aTextureCoord;
    attribute vec4 aColor;
    uniform vec2 projection;
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    void main(void){
        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);
        vTextureCoord = aTextureCoord;
        vColor = aColor;
        gl_Position.y = -sign(projection.y) * gl_Position.y;
    }
`;
DefaultShader$1.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    void main(void){
        gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor;
    }
`;
class Renderer {
  constructor(stage) {
    this.stage = stage;
    this._defaultShader = void 0;
  }
  gc(aggressive) {
  }
  destroy() {
  }
  getDefaultShader(ctx = this.stage.ctx) {
    if (!this._defaultShader) {
      this._defaultShader = this._createDefaultShader(ctx);
    }
    return this._defaultShader;
  }
  _createDefaultShader(ctx) {
  }
  isValidShaderType(shaderType) {
    return shaderType.prototype instanceof this._getShaderBaseType();
  }
  createShader(ctx, settings) {
    const shaderType = settings.type;
    if (!this.isValidShaderType(shaderType)) {
      const convertedShaderType = this._getShaderAlternative(shaderType);
      if (!convertedShaderType) {
        console.warn("[Lightning] Shader has no implementation for render target: " + shaderType.name);
        return this._createDefaultShader(ctx);
      }
      return new convertedShaderType(ctx);
    } else {
      const shader = new shaderType(ctx);
      Base.patchObject(this, settings);
      return shader;
    }
  }
  _getShaderBaseType() {
  }
  _getShaderAlternative(shaderType) {
    return this.getDefaultShader();
  }
  copyRenderTexture(renderTexture, nativeTexture, options) {
    console.warn("[Lightning] copyRenderTexture not supported by renderer");
  }
}
class WebGLRenderer extends Renderer {
  constructor(stage) {
    super(stage);
    this.shaderPrograms = /* @__PURE__ */ new Map();
    this._compressedTextureExtensions = {
      astc: stage.gl.getExtension("WEBGL_compressed_texture_astc"),
      etc1: stage.gl.getExtension("WEBGL_compressed_texture_etc1"),
      s3tc: stage.gl.getExtension("WEBGL_compressed_texture_s3tc"),
      pvrtc: stage.gl.getExtension("WEBGL_compressed_texture_pvrtc")
    };
  }
  getCompressedTextureExtensions() {
    return this._compressedTextureExtensions;
  }
  destroy() {
    this.shaderPrograms.forEach((shaderProgram) => shaderProgram.destroy());
    this.shaderPrograms = null;
    this._compressedTextureExtensions = null;
    delete this.shaderPrograms;
    delete this._compressedTextureExtensions;
  }
  _createDefaultShader(ctx) {
    return new DefaultShader$1(ctx);
  }
  _getShaderBaseType() {
    return WebGLShader;
  }
  _getShaderAlternative(shaderType) {
    return shaderType.getWebGL && shaderType.getWebGL();
  }
  createCoreQuadList(ctx) {
    return new WebGLCoreQuadList(ctx);
  }
  createCoreQuadOperation(ctx, shader, shaderOwner, renderTextureInfo, scissor, index) {
    return new WebGLCoreQuadOperation(ctx, shader, shaderOwner, renderTextureInfo, scissor, index);
  }
  createCoreRenderExecutor(ctx) {
    return new WebGLCoreRenderExecutor(ctx);
  }
  createCoreRenderState(ctx) {
    return new CoreRenderState(ctx);
  }
  createRenderTexture(w, h, pw, ph) {
    const gl = this.stage.gl;
    const glTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, glTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, pw, ph, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    glTexture.params = {};
    glTexture.params[gl.TEXTURE_MAG_FILTER] = gl.LINEAR;
    glTexture.params[gl.TEXTURE_MIN_FILTER] = gl.LINEAR;
    glTexture.params[gl.TEXTURE_WRAP_S] = gl.CLAMP_TO_EDGE;
    glTexture.params[gl.TEXTURE_WRAP_T] = gl.CLAMP_TO_EDGE;
    glTexture.options = { format: gl.RGBA, internalFormat: gl.RGBA, type: gl.UNSIGNED_BYTE };
    glTexture.framebuffer = gl.createFramebuffer();
    glTexture.projection = new Float32Array([2 / w, 2 / h]);
    gl.bindFramebuffer(gl.FRAMEBUFFER, glTexture.framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, glTexture, 0);
    return glTexture;
  }
  freeRenderTexture(glTexture) {
    let gl = this.stage.gl;
    gl.deleteFramebuffer(glTexture.framebuffer);
    gl.deleteTexture(glTexture);
  }
  _getBytesPerPixel(fmt, type) {
    const gl = this.stage.gl;
    if (fmt === gl.RGBA) {
      switch (type) {
        case gl.UNSIGNED_BYTE:
          return 4;
        case gl.UNSIGNED_SHORT_4_4_4_4:
          return 2;
        case gl.UNSIGNED_SHORT_5_5_5_1:
          return 2;
        default:
          throw new Error("Invalid type specified for GL_RGBA format");
      }
    } else if (fmt === gl.RGB) {
      switch (type) {
        case gl.UNSIGNED_BYTE:
          return 3;
        case gl.UNSIGNED_BYTE_5_6_5:
          return 2;
        default:
          throw new Error("Invalid type specified for GL_RGB format");
      }
    } else {
      throw new Error("Invalid format specified in call to _getBytesPerPixel()");
    }
  }
  uploadTextureSource(textureSource, options) {
    const gl = this.stage.gl;
    const source = options.source;
    let compressed = false;
    if (options.renderInfo) {
      compressed = options.renderInfo.compressed || false;
    }
    const format = {
      premultiplyAlpha: true,
      hasAlpha: true
    };
    if (options && options.hasOwnProperty("premultiplyAlpha")) {
      format.premultiplyAlpha = options.premultiplyAlpha;
    }
    if (options && options.hasOwnProperty("flipBlueRed")) {
      format.flipBlueRed = options.flipBlueRed;
    }
    if (options && options.hasOwnProperty("hasAlpha")) {
      format.hasAlpha = options.hasAlpha;
    }
    if (!format.hasAlpha) {
      format.premultiplyAlpha = false;
    }
    format.texParams = options.texParams || {};
    format.texOptions = options.texOptions || {};
    let glTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, glTexture);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, format.premultiplyAlpha);
    if (Utils$1.isNode) {
      gl.pixelStorei(gl.UNPACK_FLIP_BLUE_RED, !!format.flipBlueRed);
    }
    const texParams = format.texParams;
    if (!texParams[gl.TEXTURE_MAG_FILTER])
      texParams[gl.TEXTURE_MAG_FILTER] = gl.LINEAR;
    if (!texParams[gl.TEXTURE_MIN_FILTER])
      texParams[gl.TEXTURE_MIN_FILTER] = gl.LINEAR;
    if (!texParams[gl.TEXTURE_WRAP_S])
      texParams[gl.TEXTURE_WRAP_S] = gl.CLAMP_TO_EDGE;
    if (!texParams[gl.TEXTURE_WRAP_T])
      texParams[gl.TEXTURE_WRAP_T] = gl.CLAMP_TO_EDGE;
    Object.keys(texParams).forEach((key) => {
      const value = texParams[key];
      gl.texParameteri(gl.TEXTURE_2D, parseInt(key), value);
    });
    if (compressed) {
      this.stage.platform.uploadCompressedGlTexture(gl, textureSource, source);
      return glTexture;
    }
    const texOptions = format.texOptions;
    texOptions.format = texOptions.format || (format.hasAlpha ? gl.RGBA : gl.RGB);
    texOptions.type = texOptions.type || gl.UNSIGNED_BYTE;
    texOptions.internalFormat = texOptions.internalFormat || texOptions.format;
    if (options && options.imageRef) {
      texOptions.imageRef = options.imageRef;
    }
    this.stage.platform.uploadGlTexture(gl, textureSource, source, texOptions);
    glTexture.params = Utils$1.cloneObjShallow(texParams);
    glTexture.options = Utils$1.cloneObjShallow(texOptions);
    glTexture.bytesPerPixel = this._getBytesPerPixel(texOptions.format, texOptions.type);
    return glTexture;
  }
  freeTextureSource(textureSource) {
    this.stage.gl.deleteTexture(textureSource.nativeTexture);
  }
  addQuad(renderState, quads, index) {
    let offset = index * 20;
    const elementCore = quads.quadElements[index];
    let r = elementCore._renderContext;
    let floats = renderState.quads.floats;
    let uints = renderState.quads.uints;
    const mca = StageUtils.mergeColorAlpha;
    if (r.tb !== 0 || r.tc !== 0) {
      floats[offset++] = r.px;
      floats[offset++] = r.py;
      floats[offset++] = elementCore._ulx;
      floats[offset++] = elementCore._uly;
      uints[offset++] = mca(elementCore._colorUl, r.alpha);
      floats[offset++] = r.px + elementCore._w * r.ta;
      floats[offset++] = r.py + elementCore._w * r.tc;
      floats[offset++] = elementCore._brx;
      floats[offset++] = elementCore._uly;
      uints[offset++] = mca(elementCore._colorUr, r.alpha);
      floats[offset++] = r.px + elementCore._w * r.ta + elementCore._h * r.tb;
      floats[offset++] = r.py + elementCore._w * r.tc + elementCore._h * r.td;
      floats[offset++] = elementCore._brx;
      floats[offset++] = elementCore._bry;
      uints[offset++] = mca(elementCore._colorBr, r.alpha);
      floats[offset++] = r.px + elementCore._h * r.tb;
      floats[offset++] = r.py + elementCore._h * r.td;
      floats[offset++] = elementCore._ulx;
      floats[offset++] = elementCore._bry;
      uints[offset] = mca(elementCore._colorBl, r.alpha);
    } else {
      let cx = r.px + elementCore._w * r.ta;
      let cy = r.py + elementCore._h * r.td;
      floats[offset++] = r.px;
      floats[offset++] = r.py;
      floats[offset++] = elementCore._ulx;
      floats[offset++] = elementCore._uly;
      uints[offset++] = mca(elementCore._colorUl, r.alpha);
      floats[offset++] = cx;
      floats[offset++] = r.py;
      floats[offset++] = elementCore._brx;
      floats[offset++] = elementCore._uly;
      uints[offset++] = mca(elementCore._colorUr, r.alpha);
      floats[offset++] = cx;
      floats[offset++] = cy;
      floats[offset++] = elementCore._brx;
      floats[offset++] = elementCore._bry;
      uints[offset++] = mca(elementCore._colorBr, r.alpha);
      floats[offset++] = r.px;
      floats[offset++] = cy;
      floats[offset++] = elementCore._ulx;
      floats[offset++] = elementCore._bry;
      uints[offset] = mca(elementCore._colorBl, r.alpha);
    }
  }
  isRenderTextureReusable(renderState, renderTextureInfo) {
    let offset = renderState._renderTextureInfo.offset * 80 / 4;
    let floats = renderState.quads.floats;
    let uints = renderState.quads.uints;
    return floats[offset] === 0 && floats[offset + 1] === 0 && floats[offset + 2] === 0 && floats[offset + 3] === 0 && uints[offset + 4] === 4294967295 && floats[offset + 5] === renderTextureInfo.w && floats[offset + 6] === 0 && floats[offset + 7] === 1 && floats[offset + 8] === 0 && uints[offset + 9] === 4294967295 && floats[offset + 10] === renderTextureInfo.w && floats[offset + 11] === renderTextureInfo.h && floats[offset + 12] === 1 && floats[offset + 13] === 1 && uints[offset + 14] === 4294967295 && floats[offset + 15] === 0 && floats[offset + 16] === renderTextureInfo.h && floats[offset + 17] === 0 && floats[offset + 18] === 1 && uints[offset + 19] === 4294967295;
  }
  finishRenderState(renderState) {
    let offset = renderState.length * 80;
    for (let i = 0, n = renderState.quadOperations.length; i < n; i++) {
      renderState.quadOperations[i].extraAttribsDataByteOffset = offset;
      let extra = renderState.quadOperations[i].shader.getExtraAttribBytesPerVertex() * 4 * renderState.quadOperations[i].length;
      offset += extra;
      if (extra) {
        renderState.quadOperations[i].shader.setExtraAttribsInBuffer(renderState.quadOperations[i], renderState.quads);
      }
    }
    renderState.quads.dataLength = offset;
  }
  copyRenderTexture(renderTexture, nativeTexture, options) {
    const gl = this.stage.gl;
    gl.bindTexture(gl.TEXTURE_2D, nativeTexture);
    gl.bindFramebuffer(gl.FRAMEBUFFER, renderTexture.framebuffer);
    const precision = renderTexture.precision;
    gl.copyTexSubImage2D(
      gl.TEXTURE_2D,
      0,
      precision * (options.sx || 0),
      precision * (options.sy || 0),
      precision * (options.x || 0),
      precision * (options.y || 0),
      precision * (options.w || renderTexture.ow),
      precision * (options.h || renderTexture.oh)
    );
  }
}
class C2dCoreQuadList extends CoreQuadList {
  constructor(ctx) {
    super(ctx);
    this.renderContexts = [];
    this.modes = [];
  }
  setRenderContext(index, v) {
    this.renderContexts[index] = v;
  }
  setSimpleTc(index, v) {
    if (v) {
      this.modes[index] |= 1;
    } else {
      this.modes[index] -= this.modes[index] & 1;
    }
  }
  setWhite(index, v) {
    if (v) {
      this.modes[index] |= 2;
    } else {
      this.modes[index] -= this.modes[index] & 2;
    }
  }
  getRenderContext(index) {
    return this.renderContexts[index];
  }
  getSimpleTc(index) {
    return this.modes[index] & 1;
  }
  getWhite(index) {
    return this.modes[index] & 2;
  }
}
class C2dCoreQuadOperation extends CoreQuadOperation {
  getRenderContext(index) {
    return this.quads.getRenderContext(this.index + index);
  }
  getSimpleTc(index) {
    return this.quads.getSimpleTc(this.index + index);
  }
  getWhite(index) {
    return this.quads.getWhite(this.index + index);
  }
}
class C2dCoreRenderExecutor extends CoreRenderExecutor {
  init() {
    this._mainRenderTexture = this.ctx.stage.getCanvas();
  }
  _renderQuadOperation(op) {
    let shader = op.shader;
    if (op.length || op.shader.addEmpty()) {
      const target = this._renderTexture || this._mainRenderTexture;
      shader.beforeDraw(op, target);
      shader.draw(op, target);
      shader.afterDraw(op, target);
    }
  }
  _clearRenderTexture() {
    const ctx = this._getContext();
    let clearColor = [0, 0, 0, 0];
    if (this._mainRenderTexture.ctx === ctx) {
      clearColor = this.ctx.stage.getClearColor();
    }
    const renderTexture = ctx.canvas;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (!clearColor[0] && !clearColor[1] && !clearColor[2] && !clearColor[3]) {
      ctx.clearRect(0, 0, renderTexture.width, renderTexture.height);
    } else {
      ctx.fillStyle = StageUtils.getRgbaStringFromArray(clearColor);
      ctx.globalCompositeOperation = "copy";
      ctx.beginPath();
      ctx.rect(0, 0, renderTexture.width, renderTexture.height);
      ctx.closePath();
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    }
  }
  _getContext() {
    if (this._renderTexture) {
      return this._renderTexture.ctx;
    } else {
      return this._mainRenderTexture.ctx;
    }
  }
  _restoreContext() {
    const ctx = this._getContext();
    ctx.restore();
    ctx.save();
    ctx._scissor = null;
  }
  _setScissor(area) {
    const ctx = this._getContext();
    if (!C2dCoreRenderExecutor._equalScissorAreas(ctx.canvas, ctx._scissor, area)) {
      this._restoreContext();
      let precision = this.ctx.stage.getRenderPrecision();
      if (area) {
        ctx.beginPath();
        ctx.rect(Math.round(area[0] * precision), Math.round(area[1] * precision), Math.round(area[2] * precision), Math.round(area[3] * precision));
        ctx.closePath();
        ctx.clip();
      }
      ctx._scissor = area;
    }
  }
  static _equalScissorAreas(canvas, area, current) {
    if (!area) {
      area = [0, 0, canvas.width, canvas.height];
    }
    if (!current) {
      current = [0, 0, canvas.width, canvas.height];
    }
    return Utils$1.equalValues(area, current);
  }
}
class C2dShader extends Shader {
  beforeDraw(operation) {
  }
  draw(operation) {
  }
  afterDraw(operation) {
  }
}
class DefaultShader2 extends C2dShader {
  constructor(ctx) {
    super(ctx);
    this._rectangleTexture = ctx.stage.rectangleTexture.source.nativeTexture;
    this._tintManager = this.ctx.stage.renderer.tintManager;
  }
  draw(operation, target) {
    const ctx = target.ctx;
    let length = operation.length;
    for (let i = 0; i < length; i++) {
      const tx = operation.getTexture(i);
      const vc = operation.getElementCore(i);
      const rc = operation.getRenderContext(i);
      const white = operation.getWhite(i);
      const stc = operation.getSimpleTc(i);
      const precision = this.ctx.stage.getRenderPrecision();
      ctx.setTransform(rc.ta * precision, rc.tc * precision, rc.tb * precision, rc.td * precision, rc.px * precision, rc.py * precision);
      const rect = tx === this._rectangleTexture;
      const info = { operation, target, index: i, rect };
      if (rect) {
        if (white) {
          ctx.fillStyle = "white";
        } else {
          this._setColorGradient(ctx, vc);
        }
        ctx.globalAlpha = rc.alpha;
        this._beforeDrawEl(info);
        ctx.fillRect(0, 0, vc.w, vc.h);
        this._afterDrawEl(info);
        ctx.globalAlpha = 1;
      } else {
        ctx.globalAlpha = rc.alpha;
        this._beforeDrawEl(info);
        const sourceX = stc ? 0 : vc._ulx * tx.w;
        const sourceY = stc ? 0 : vc._uly * tx.h;
        const sourceW = (stc ? 1 : vc._brx - vc._ulx) * tx.w;
        const sourceH = (stc ? 1 : vc._bry - vc._uly) * tx.h;
        let colorize = !white;
        if (colorize) {
          let color = vc._colorUl;
          if (vc._colorUl !== vc._colorUr || vc._colorUr !== vc._colorBl || vc._colorBr !== vc._colorBl) {
            color = StageUtils.mergeMultiColorsEqual([vc._colorUl, vc._colorUr, vc._colorBl, vc._colorBr]);
          }
          const alpha = (color / 16777216 | 0) / 255;
          ctx.globalAlpha *= alpha;
          const rgb = color & 16777215;
          const tintTexture = this._tintManager.getTintTexture(tx, rgb);
          ctx.fillStyle = "white";
          ctx.drawImage(tintTexture, sourceX, sourceY, sourceW, sourceH, 0, 0, vc.w, vc.h);
        } else {
          ctx.fillStyle = "white";
          ctx.drawImage(tx, sourceX, sourceY, sourceW, sourceH, 0, 0, vc.w, vc.h);
        }
        this._afterDrawEl(info);
        ctx.globalAlpha = 1;
      }
    }
  }
  _setColorGradient(ctx, vc, w = vc.w, h = vc.h, transparency = true) {
    let color = vc._colorUl;
    let gradient;
    if (vc._colorUl === vc._colorUr) {
      if (vc._colorBl === vc._colorBr) {
        if (vc._colorUl === vc.colorBl)
          ;
        else {
          gradient = ctx.createLinearGradient(0, 0, 0, h);
          if (transparency) {
            gradient.addColorStop(0, StageUtils.getRgbaString(vc._colorUl));
            gradient.addColorStop(1, StageUtils.getRgbaString(vc._colorBl));
          } else {
            gradient.addColorStop(0, StageUtils.getRgbString(vc._colorUl));
            gradient.addColorStop(1, StageUtils.getRgbString(vc._colorBl));
          }
        }
      }
    } else {
      if (vc._colorUl === vc._colorBl && vc._colorUr === vc._colorBr) {
        gradient = ctx.createLinearGradient(0, 0, w, 0);
        if (transparency) {
          gradient.addColorStop(0, StageUtils.getRgbaString(vc._colorUl));
          gradient.addColorStop(1, StageUtils.getRgbaString(vc._colorBr));
        } else {
          gradient.addColorStop(0, StageUtils.getRgbString(vc._colorUl));
          gradient.addColorStop(1, StageUtils.getRgbString(vc._colorBr));
        }
      }
    }
    if (gradient) {
      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle = transparency ? StageUtils.getRgbaString(color) : StageUtils.getRgbString(color);
    }
  }
  _beforeDrawEl(info) {
  }
  _afterDrawEl(info) {
  }
}
class C2dTextureTintManager {
  constructor(stage) {
    this.stage = stage;
    this._usedMemory = 0;
    this._cachedNativeTextures = /* @__PURE__ */ new Set();
  }
  destroy() {
    this.gc(true);
    this.stage = null;
    delete this.stage;
  }
  _addMemoryUsage(delta) {
    this._usedMemory += delta;
    this.stage.addMemoryUsage(delta);
  }
  delete(nativeTexture) {
    if (this._hasCache(nativeTexture)) {
      const cache = this._getCache(nativeTexture);
      const prevMemUsage = cache.memoryUsage;
      cache.clear();
      this._cachedNativeTextures.delete(nativeTexture);
      this._addMemoryUsage(cache.memoryUsage - prevMemUsage);
    }
  }
  getTintTexture(nativeTexture, color) {
    const frame = this.stage.frameCounter;
    this._cachedNativeTextures.add(nativeTexture);
    const cache = this._getCache(nativeTexture);
    const item = cache.get(color);
    item.lf = frame;
    if (item.tx) {
      if (nativeTexture.update > item.u) {
        this._tintTexture(item.tx, nativeTexture, color);
      }
      return item.tx;
    } else {
      const before = cache.memoryUsage;
      let target = cache.reuseTexture(frame);
      if (target) {
        target.ctx.clearRect(0, 0, target.width, target.height);
      } else {
        target = document.createElement("canvas");
        target.width = nativeTexture.w;
        target.height = nativeTexture.h;
        target.ctx = target.getContext("2d");
      }
      this._tintTexture(target, nativeTexture, color);
      cache.set(color, target, frame);
      const after = cache.memoryUsage;
      if (after !== before) {
        this._addMemoryUsage(after - before);
      }
      return target;
    }
  }
  _tintTexture(target, source, color) {
    let col = color.toString(16);
    while (col.length < 6) {
      col = "0" + col;
    }
    target.ctx.fillStyle = "#" + col;
    target.ctx.globalCompositeOperation = "copy";
    target.ctx.fillRect(0, 0, source.w, source.h);
    target.ctx.globalCompositeOperation = "multiply";
    target.ctx.drawImage(source, 0, 0, source.w, source.h, 0, 0, target.width, target.height);
    target.ctx.globalCompositeOperation = "destination-in";
    target.ctx.drawImage(source, 0, 0, source.w, source.h, 0, 0, target.width, target.height);
  }
  _hasCache(nativeTexture) {
    return !!nativeTexture._tintCache;
  }
  _getCache(nativeTexture) {
    if (!nativeTexture._tintCache) {
      nativeTexture._tintCache = new C2dTintCache(nativeTexture);
    }
    return nativeTexture._tintCache;
  }
  gc(aggressive = false) {
    const frame = this.stage.frameCounter;
    let delta = 0;
    this._cachedNativeTextures.forEach((texture) => {
      const cache = this._getCache(texture);
      if (aggressive) {
        delta += cache.memoryUsage;
        cache.clear();
      } else {
        const before = cache.memoryUsage;
        cache.cleanup(frame);
        cache.releaseBlancoTextures();
        delta += cache.memoryUsage - before;
      }
    });
    if (aggressive) {
      this._cachedNativeTextures.clear();
    }
    if (delta) {
      this._addMemoryUsage(delta);
    }
  }
}
class C2dTintCache {
  constructor(nativeTexture) {
    this._tx = nativeTexture;
    this._colors = /* @__PURE__ */ new Map();
    this._blancoTextures = null;
    this._lastCleanupFrame = 0;
    this._memTextures = 0;
  }
  get memoryUsage() {
    return this._memTextures * this._tx.w * this._tx.h;
  }
  releaseBlancoTextures() {
    this._memTextures -= this._blancoTextures.length;
    this._blancoTextures = [];
  }
  clear() {
    this._blancoTextures = null;
    this._colors.clear();
    this._memTextures = 0;
  }
  get(color) {
    let item = this._colors.get(color);
    if (!item) {
      item = { lf: -1, tx: void 0, u: -1 };
      this._colors.set(color, item);
    }
    return item;
  }
  set(color, texture, frame) {
    const item = this.get(color);
    item.lf = frame;
    item.tx = texture;
    item.u = frame;
    this._memTextures++;
  }
  cleanup(frame) {
    if (this._lastCleanupFrame !== frame) {
      this._blancoTextures = [];
      this._colors.forEach((item, color) => {
        if (item.lf < frame - 1) {
          if (item.tx) {
            this._blancoTextures.push(item.tx);
          }
          this._colors.delete(color);
        }
      });
      this._lastCleanupFrame = frame;
    }
  }
  reuseTexture(frame) {
    this.cleanup(frame);
    if (this._blancoTextures && this._blancoTextures.length) {
      this._memTextures--;
      return this._blancoTextures.pop();
    }
  }
}
class C2dRenderer extends Renderer {
  constructor(stage) {
    super(stage);
    this.tintManager = new C2dTextureTintManager(stage);
    this.setupC2d(this.stage.c2d.canvas);
  }
  destroy() {
    this.tintManager.destroy();
    this.tintManager = null;
    delete this.tintManager;
  }
  _createDefaultShader(ctx) {
    return new DefaultShader2(ctx);
  }
  _getShaderBaseType() {
    return C2dShader;
  }
  _getShaderAlternative(shaderType) {
    return shaderType.getC2d && shaderType.getC2d();
  }
  createCoreQuadList(ctx) {
    return new C2dCoreQuadList(ctx);
  }
  createCoreQuadOperation(ctx, shader, shaderOwner, renderTextureInfo, scissor, index) {
    return new C2dCoreQuadOperation(ctx, shader, shaderOwner, renderTextureInfo, scissor, index);
  }
  createCoreRenderExecutor(ctx) {
    return new C2dCoreRenderExecutor(ctx);
  }
  createCoreRenderState(ctx) {
    return new CoreRenderState(ctx);
  }
  createRenderTexture(w, h, pw, ph) {
    const canvas = document.createElement("canvas");
    canvas.width = pw;
    canvas.height = ph;
    this.setupC2d(canvas);
    return canvas;
  }
  freeRenderTexture(nativeTexture) {
    this.tintManager.delete(nativeTexture);
  }
  gc(aggressive) {
    this.tintManager.gc(aggressive);
  }
  uploadTextureSource(textureSource, options) {
    if (options.source.buffer) {
      const canvas = document.createElement("canvas");
      canvas.width = options.w;
      canvas.height = options.h;
      const imageData = new ImageData(new Uint8ClampedArray(options.source.buffer), options.w, options.h);
      canvas.getContext("2d").putImageData(imageData, 0, 0);
      return canvas;
    }
    return options.source;
  }
  freeTextureSource(textureSource) {
    this.tintManager.delete(textureSource.nativeTexture);
  }
  addQuad(renderState, quads, index) {
    const elementCore = quads.quadElements[index];
    quads.setRenderContext(index, elementCore._renderContext);
    quads.setWhite(index, elementCore.isWhite());
    quads.setSimpleTc(index, elementCore.hasSimpleTexCoords());
  }
  isRenderTextureReusable(renderState, renderTextureInfo) {
    return false;
  }
  finishRenderState(renderState) {
  }
  setupC2d(canvas) {
    const ctx = canvas.getContext("2d");
    canvas.ctx = ctx;
    ctx._scissor = null;
    canvas.ctx.save();
  }
}
class SparkShader extends WebGLShader {
  enableAttribs() {
    let gl = this.gl;
    gl.vertexAttribPointer(this._attrib("aVertexPosition"), 2, gl.FLOAT, false, 20, 0);
    gl.enableVertexAttribArray(this._attrib("aVertexPosition"));
    if (this._attrib("aTextureCoord") !== -1) {
      gl.vertexAttribPointer(this._attrib("aTextureCoord"), 2, gl.FLOAT, false, 20, 2 * 4);
      gl.enableVertexAttribArray(this._attrib("aTextureCoord"));
    }
    if (this._attrib("aColor") !== -1) {
      gl.vertexAttribPointer(this._attrib("aColor"), 4, gl.UNSIGNED_BYTE, true, 20, 4 * 4);
      gl.enableVertexAttribArray(this._attrib("aColor"));
    }
  }
  disableAttribs() {
    let gl = this.gl;
    gl.disableVertexAttribArray(this._attrib("aVertexPosition"));
    if (this._attrib("aTextureCoord") !== -1) {
      gl.disableVertexAttribArray(this._attrib("aTextureCoord"));
    }
    if (this._attrib("aColor") !== -1) {
      gl.disableVertexAttribArray(this._attrib("aColor"));
    }
  }
  setupUniforms(operation) {
    this._setUniform("projection", this._getProjection(operation), this.gl.uniform2fv, false);
  }
  draw(operation) {
    let gl = this.gl;
    let length = operation.length;
    if (length) {
      let glTexture = operation.getTexture(0);
      let pos = 0;
      for (let i = 0; i < length; i++) {
        let tx = operation.getTexture(i);
        if (glTexture !== tx) {
          if (glTexture.options && glTexture.options.imageRef) {
            let elementPostion = i > 0 ? i - 1 : i;
            const precision = this.ctx.stage.getOption("precision");
            let vc = operation.getElementCore(elementPostion);
            this.ctx.stage.platform.paint(gl, glTexture.options.imageRef, vc._worldContext.px * precision, vc._worldContext.py * precision, vc._colorUl, vc);
          } else {
            gl.bindTexture(gl.TEXTURE_2D, glTexture);
            gl.drawElements(gl.TRIANGLES, 6 * (i - pos), gl.UNSIGNED_SHORT, (pos + operation.index) * 6 * 2);
          }
          glTexture = tx;
          pos = i;
        }
      }
      if (pos < length) {
        if (glTexture.options && glTexture.options.imageRef) {
          const precision = this.ctx.stage.getOption("precision");
          let vc = operation.getElementCore(pos);
          this.ctx.stage.platform.paint(gl, glTexture.options.imageRef, vc._worldContext.px * precision, vc._worldContext.py * precision, vc._colorUl, vc);
        } else {
          gl.bindTexture(gl.TEXTURE_2D, glTexture);
          gl.drawElements(gl.TRIANGLES, 6 * (length - pos), gl.UNSIGNED_SHORT, (pos + operation.index) * 6 * 2);
        }
      }
    }
  }
}
SparkShader.vertexShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    attribute vec2 aVertexPosition;
    attribute vec2 aTextureCoord;
    attribute vec4 aColor;
    uniform vec2 projection;
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    void main(void){
        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);
        vTextureCoord = aTextureCoord;
        vColor = aColor;
        gl_Position.y = -sign(projection.y) * gl_Position.y;
    }
`;
SparkShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    void main(void){
        gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor;
    }
`;
class SparkRenderer extends WebGLRenderer {
  constructor(stage) {
    super(stage);
  }
  _createDefaultShader(ctx) {
    return new SparkShader(ctx);
  }
  createCoreRenderExecutor(ctx) {
    __webpack_require__.g.beginDrawing();
    let ret = super.createCoreRenderExecutor(ctx);
    __webpack_require__.g.endDrawing();
    return ret;
  }
}
class ImageWorker {
  constructor(options = {}) {
    this._items = /* @__PURE__ */ new Map();
    this._id = 0;
    this._initWorker();
  }
  destroy() {
    if (this._worker) {
      this._worker.terminate();
    }
    this._items = null;
    this._worker = null;
    delete this._items;
    delete this._worker;
  }
  _initWorker() {
    const code = `(${createWorker.toString()})()`;
    const blob = new Blob([code.replace('"use strict";', "")]);
    const blobURL = (window.URL ? URL : webkitURL).createObjectURL(blob, {
      type: "application/javascript; charset=utf-8"
    });
    this._worker = new Worker(blobURL);
    this._worker.postMessage({ type: "config", config: { path: window.location.href, protocol: window.location.protocol } });
    this._worker.onmessage = (e) => {
      if (e.data && e.data.id) {
        const id = e.data.id;
        const item = this._items.get(id);
        if (item) {
          if (e.data.type == "data") {
            this.finish(item, e.data.info);
          } else {
            this.error(item, e.data.info);
          }
        }
      }
    };
  }
  create(src) {
    const id = ++this._id;
    const item = new ImageWorkerImage(this, id, src);
    this._items.set(id, item);
    this._worker.postMessage({ type: "add", id, src });
    return item;
  }
  cancel(image) {
    this._worker.postMessage({ type: "cancel", id: image.id });
    this._items.delete(image.id);
  }
  error(image, info) {
    image.error(info);
    this._items.delete(image.id);
  }
  finish(image, info) {
    image.load(info);
    this._items.delete(image.id);
  }
}
class ImageWorkerImage {
  constructor(manager, id, src) {
    this._manager = manager;
    this._id = id;
    this._src = src;
    this._onError = null;
    this._onLoad = null;
  }
  get id() {
    return this._id;
  }
  get src() {
    return this._src;
  }
  set onError(f) {
    this._onError = f;
  }
  set onLoad(f) {
    this._onLoad = f;
  }
  cancel() {
    this._manager.cancel(this);
  }
  load(info) {
    if (this._onLoad) {
      this._onLoad(info);
    }
  }
  error(info) {
    if (this._onError) {
      this._onError(info);
    }
  }
}
const createWorker = function() {
  function ImageWorkerServer() {
    this.items = /* @__PURE__ */ new Map();
    var t = this;
    onmessage = function(e) {
      t._receiveMessage(e);
    };
  }
  ImageWorkerServer.isPathAbsolute = function(path) {
    return /^(?:\/|[a-z]+:\/\/)/.test(path) || path.substr(0, 5) == "data:";
  };
  ImageWorkerServer.prototype._receiveMessage = function(e) {
    if (e.data.type === "config") {
      this.config = e.data.config;
      var base = this.config.path;
      var hasHashPath = /#.*?\//;
      if (hasHashPath.test(base)) {
        base = base.replace(/#.*$/, "");
      }
      var parts = base.split("/");
      parts.pop();
      this._relativeBase = parts.join("/") + "/";
    } else if (e.data.type === "add") {
      this.add(e.data.id, e.data.src);
    } else if (e.data.type === "cancel") {
      this.cancel(e.data.id);
    }
  };
  ImageWorkerServer.prototype.add = function(id, src) {
    if (!ImageWorkerServer.isPathAbsolute(src)) {
      src = this._relativeBase + src;
    }
    if (src.substr(0, 2) === "//") {
      src = this.config.protocol + src;
    }
    var item = new ImageWorkerServerItem(id, src);
    var t = this;
    item.onFinish = function(result) {
      t.finish(item, result);
    };
    item.onError = function(info) {
      t.error(item, info);
    };
    this.items.set(id, item);
    item.start();
  };
  ImageWorkerServer.prototype.cancel = function(id) {
    var item = this.items.get(id);
    if (item) {
      item.cancel();
      this.items.delete(id);
    }
  };
  ImageWorkerServer.prototype.finish = function(item, { imageBitmap, hasAlphaChannel }) {
    postMessage({
      type: "data",
      id: item.id,
      info: {
        imageBitmap,
        hasAlphaChannel
      }
    }, [imageBitmap]);
    this.items.delete(item.id);
  };
  ImageWorkerServer.prototype.error = function(item, { type, message }) {
    postMessage({
      type: "error",
      id: item.id,
      info: {
        type,
        message
      }
    });
    this.items.delete(item.id);
  };
  ImageWorkerServer.isWPEBrowser = function() {
    return navigator.userAgent.indexOf("WPE") !== -1;
  };
  function ImageWorkerServerItem(id, src) {
    this._onError = void 0;
    this._onFinish = void 0;
    this._id = id;
    this._src = src;
    this._xhr = void 0;
    this._mimeType = void 0;
    this._canceled = false;
  }
  Object.defineProperty(ImageWorkerServerItem.prototype, "id", {
    get: function() {
      return this._id;
    }
  });
  Object.defineProperty(ImageWorkerServerItem.prototype, "onFinish", {
    get: function() {
      return this._onFinish;
    },
    set: function(f) {
      this._onFinish = f;
    }
  });
  Object.defineProperty(ImageWorkerServerItem.prototype, "onError", {
    get: function() {
      return this._onError;
    },
    set: function(f) {
      this._onError = f;
    }
  });
  ImageWorkerServerItem.prototype.start = function() {
    this._xhr = new XMLHttpRequest();
    this._xhr.open("GET", this._src, true);
    this._xhr.responseType = "blob";
    var t = this;
    this._xhr.onerror = function(oEvent) {
      t.error({ type: "connection", message: "Connection error" });
    };
    this._xhr.onload = function(oEvent) {
      var blob = t._xhr.response;
      t._mimeType = blob.type;
      t._createImageBitmap(blob);
    };
    this._xhr.send();
  };
  ImageWorkerServerItem.prototype._createImageBitmap = function(blob) {
    var t = this;
    createImageBitmap(blob, { premultiplyAlpha: "premultiply", colorSpaceConversion: "none", imageOrientation: "none" }).then(function(imageBitmap) {
      t.finish({
        imageBitmap,
        hasAlphaChannel: t._hasAlphaChannel()
      });
    }).catch(function(e) {
      t.error({ type: "parse", message: "Error parsing image data" });
    });
  };
  ImageWorkerServerItem.prototype._hasAlphaChannel = function() {
    if (ImageWorkerServer.isWPEBrowser()) {
      return true;
    } else {
      return this._mimeType.indexOf("image/png") !== -1;
    }
  };
  ImageWorkerServerItem.prototype.cancel = function() {
    if (this._canceled)
      return;
    if (this._xhr) {
      this._xhr.abort();
    }
    this._canceled = true;
  };
  ImageWorkerServerItem.prototype.error = function(type, message) {
    if (!this._canceled && this._onError) {
      this._onError({ type, message });
    }
  };
  ImageWorkerServerItem.prototype.finish = function(info) {
    if (!this._canceled && this._onFinish) {
      this._onFinish(info);
    }
  };
  new ImageWorkerServer();
};
class WebPlatform {
  init(stage) {
    this.stage = stage;
    this._looping = false;
    this._awaitingLoop = false;
    this._loopHandler = null;
    this._idleLoopCounter = 0;
    this._idleLoopDelay = 60;
    if (this.stage.getOption("useImageWorker")) {
      if (!window.createImageBitmap || !window.Worker) {
        console.warn("[Lightning] Can't use image worker because browser does not have createImageBitmap and Web Worker support");
      } else {
        this._imageWorker = new ImageWorker();
      }
    }
    this._registerVisibilityChangeHandler();
  }
  destroy() {
    if (this._imageWorker) {
      this._imageWorker.destroy();
    }
    clearInterval(this._loopHandler);
    this._removeKeyHandler();
    this._removeClickHandler();
    this._removeHoverHandler();
    this._removeScrollWheelHandler();
    this._removeVisibilityChangeHandler();
    this.stage = null;
    delete this.stage;
  }
  startLoop() {
    this._looping = true;
    if (!this._awaitingLoop) {
      this.loop();
    }
  }
  stopLoop() {
    this._looping = false;
  }
  switchLoop() {
    if (this._idleLoopCounter < this._idleLoopDelay) {
      this._idleLoopCounter++;
      return;
    }
    if (!this.stage.ctx.hasRenderUpdates()) {
      this.stopLoop();
      this._loopHandler = setInterval(() => {
        this.stage.updateFrame();
        this.stage.idleFrame();
        if (this.stage.ctx.hasRenderUpdates()) {
          clearInterval(this._loopHandler);
          this.startLoop();
        }
      }, 1e3 / 60);
    } else {
      this._idleLoopCounter = 0;
    }
  }
  loop() {
    let self = this;
    let lp = function() {
      self._awaitingLoop = false;
      if (self._looping) {
        self.stage.updateFrame();
        if (self.stage.getOption("pauseRafLoopOnIdle")) {
          self.switchLoop();
        }
        self.stage.renderFrame();
        requestAnimationFrame(lp);
        self._awaitingLoop = true;
      }
    };
    requestAnimationFrame(lp);
  }
  uploadCompressedGlTexture(gl, textureSource, source, options) {
    const view = !source.pvr ? new DataView(source.mipmaps[0]) : source.mipmaps[0];
    gl.compressedTexImage2D(
      gl.TEXTURE_2D,
      0,
      source.glInternalFormat,
      source.pixelWidth,
      source.pixelHeight,
      0,
      view
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  }
  uploadGlTexture(gl, textureSource, source, options) {
    if (source instanceof ImageData || source instanceof HTMLImageElement || source instanceof HTMLVideoElement || window.ImageBitmap && source instanceof ImageBitmap) {
      gl.texImage2D(gl.TEXTURE_2D, 0, options.internalFormat, options.format, options.type, source);
    } else if (source instanceof HTMLCanvasElement) {
      if (Utils$1.isZiggo || this.stage.getOption("forceTxCanvasSource")) {
        gl.texImage2D(gl.TEXTURE_2D, 0, options.internalFormat, options.format, options.type, source);
      } else if (source.width > 0 && source.height > 0) {
        const ctx = source.getContext("2d");
        gl.texImage2D(gl.TEXTURE_2D, 0, options.internalFormat, options.format, options.type, ctx.getImageData(0, 0, source.width, source.height));
      }
    } else {
      gl.texImage2D(gl.TEXTURE_2D, 0, options.internalFormat, textureSource.w, textureSource.h, 0, options.format, options.type, source);
    }
  }
  handleKtxLoad(cb, src) {
    var self = this;
    return function() {
      var arraybuffer = this.response;
      var view = new DataView(arraybuffer);
      var targetIdentifier = 3632701469;
      if (targetIdentifier !== view.getUint32(0) + view.getUint32(4) + view.getUint32(8)) {
        cb("Parsing failed: identifier ktx mismatch:", src);
      }
      var littleEndian = view.getUint32(12) === 16909060 ? true : false;
      var data = {
        glType: view.getUint32(16, littleEndian),
        glTypeSize: view.getUint32(20, littleEndian),
        glFormat: view.getUint32(24, littleEndian),
        glInternalFormat: view.getUint32(28, littleEndian),
        glBaseInternalFormat: view.getUint32(32, littleEndian),
        pixelWidth: view.getUint32(36, littleEndian),
        pixelHeight: view.getUint32(40, littleEndian),
        pixelDepth: view.getUint32(44, littleEndian),
        numberOfArrayElements: view.getUint32(48, littleEndian),
        numberOfFaces: view.getUint32(52, littleEndian),
        numberOfMipmapLevels: view.getUint32(56, littleEndian),
        bytesOfKeyValueData: view.getUint32(60, littleEndian),
        kvps: [],
        mipmaps: [],
        get width() {
          return this.pixelWidth;
        },
        get height() {
          return this.pixelHeight;
        }
      };
      const props = (obj) => {
        const p = [];
        for (let v in obj) {
          p.push(obj[v]);
        }
        return p;
      };
      const formats = Object.values(self.stage.renderer.getCompressedTextureExtensions()).filter((obj) => obj != null).map((obj) => props(obj)).reduce((prev, current) => prev.concat(current));
      if (!formats.includes(data.glInternalFormat)) {
        console.warn("[Lightning] Unrecognized texture extension format:", src, data.glInternalFormat, self.stage.renderer.getCompressedTextureExtensions());
      }
      var offset = 64;
      offset += data.bytesOfKeyValueData;
      for (var i = 0; i < data.numberOfMipmapLevels; i++) {
        var imageSize = view.getUint32(offset);
        offset += 4;
        data.mipmaps.push(view.buffer.slice(offset, imageSize));
        offset += imageSize;
      }
      cb(null, {
        source: data,
        renderInfo: { src, compressed: true }
      });
    };
  }
  handlePvrLoad(cb, src) {
    return function() {
      const pvrHeaderLength = 13;
      const pvrFormatEtc1 = 36196;
      const pvrWidth = 7;
      const pvrHeight = 6;
      const pvrMipmapCount = 11;
      const pvrMetadata = 12;
      const arrayBuffer = this.response;
      const header = new Int32Array(arrayBuffer, 0, pvrHeaderLength);
      const dataOffset = header[pvrMetadata] + 52;
      const pvrtcData = new Uint8Array(arrayBuffer, dataOffset);
      var data = {
        glInternalFormat: pvrFormatEtc1,
        pixelWidth: header[pvrWidth],
        pixelHeight: header[pvrHeight],
        numberOfMipmapLevels: header[pvrMipmapCount],
        mipmaps: [],
        pvr: true,
        get width() {
          return this.pixelWidth;
        },
        get height() {
          return this.pixelHeight;
        }
      };
      let offset = 0;
      let width = data.pixelWidth;
      let height = data.pixelHeight;
      for (var i = 0; i < data.numberOfMipmapLevels; i++) {
        const level = (width + 3 >> 2) * (height + 3 >> 2) * 8;
        const view = new Uint8Array(arrayBuffer, pvrtcData.byteOffset + offset, level);
        data.mipmaps.push(view);
        offset += level;
        width = width >> 1;
        height = height >> 1;
      }
      cb(null, {
        source: data,
        renderInfo: { src, compressed: true }
      });
    };
  }
  loadSrcTexture({ src, hasAlpha }, cb) {
    let cancelCb = void 0;
    let isPng = src.toLowerCase().indexOf(".png") >= 0 || src.substr(0, 21) == "data:image/png;base64";
    let isKtx = src.indexOf(".ktx") >= 0;
    let isPvr = src.indexOf(".pvr") >= 0;
    if (isKtx || isPvr) {
      let request = new XMLHttpRequest();
      request.addEventListener(
        "load",
        isKtx ? this.handleKtxLoad(cb, src) : this.handlePvrLoad(cb, src)
      );
      request.open("GET", src);
      request.responseType = "arraybuffer";
      request.send();
      cancelCb = function() {
        request.abort();
      };
    } else if (this._imageWorker) {
      const image = this._imageWorker.create(src);
      image.onError = function(err) {
        return cb("Image load error");
      };
      image.onLoad = function({ imageBitmap, hasAlphaChannel }) {
        cb(null, {
          source: imageBitmap,
          renderInfo: { src, compressed: false },
          hasAlpha: hasAlphaChannel,
          premultiplyAlpha: true
        });
      };
      cancelCb = function() {
        image.cancel();
      };
    } else {
      let image = new Image();
      if (!(src.substr(0, 5) == "data:") && !Utils$1.isPS4) {
        image.crossOrigin = "Anonymous";
      }
      image.onerror = function(err) {
        if (image.src) {
          return cb("Image load error");
        }
      };
      image.onload = function() {
        cb(null, {
          source: image,
          renderInfo: { src, compressed: false },
          hasAlpha: isPng || hasAlpha
        });
      };
      image.src = src;
      cancelCb = function() {
        image.onerror = null;
        image.onload = null;
        image.removeAttribute("src");
      };
    }
    return cancelCb;
  }
  createWebGLContext(w, h) {
    let canvas = this.stage.getOption("canvas") || document.createElement("canvas");
    if (w && h) {
      canvas.width = w;
      canvas.height = h;
    }
    let opts = {
      alpha: true,
      antialias: false,
      premultipliedAlpha: true,
      stencil: true,
      preserveDrawingBuffer: false
    };
    let gl = canvas.getContext("webgl", opts) || canvas.getContext("experimental-webgl", opts) || canvas.getContext("webgl2", opts);
    if (!gl) {
      throw new Error("This browser does not support webGL.");
    }
    return gl;
  }
  createCanvasContext(w, h) {
    let canvas = this.stage.getOption("canvas") || document.createElement("canvas");
    if (w && h) {
      canvas.width = w;
      canvas.height = h;
    }
    let c2d = canvas.getContext("2d");
    if (!c2d) {
      throw new Error("This browser does not support 2d canvas.");
    }
    return c2d;
  }
  getHrTime() {
    return window.performance ? window.performance.now() : new Date().getTime();
  }
  getDrawingCanvas() {
    return document.createElement("canvas");
  }
  getTextureOptionsForDrawingCanvas(canvas) {
    let options = {};
    options.source = canvas;
    return options;
  }
  nextFrame(changes) {
  }
  registerKeydownHandler(keyhandler) {
    this._keydownListener = (e) => {
      keyhandler(e);
    };
    window.addEventListener("keydown", this._keydownListener);
  }
  registerKeyupHandler(keyhandler) {
    this._keyupListener = (e) => {
      keyhandler(e);
    };
    window.addEventListener("keyup", this._keyupListener);
  }
  _removeKeyHandler() {
    if (this._keydownListener) {
      window.removeEventListener("keydown", this._keydownListener);
    }
    if (this._keyupListener) {
      window.removeEventListener("keyup", this._keyupListener);
    }
  }
  registerClickHandler(clickHandler) {
    this._clickListener = (e) => {
      clickHandler(e);
    };
    window.addEventListener("mousedown", this._clickListener);
  }
  _removeClickHandler() {
    if (this._clickListener) {
      window.removeEventListener("mousedown", this._clickListener);
    }
  }
  registerHoverHandler(hoverHandler) {
    this._hoverListener = (e) => {
      hoverHandler(e);
    };
    window.addEventListener("mousemove", this._hoverListener);
  }
  _removeHoverHandler() {
    if (this._hoverListener) {
      window.removeEventListener("mousemove", this._hoverListener);
    }
  }
  registerScrollWheelHandler(registerScrollWheelHandler) {
    this._scrollWheelListener = (e) => {
      registerScrollWheelHandler(e);
    };
    window.addEventListener("wheel", this._scrollWheelListener);
  }
  _removeScrollWheelHandler() {
    if (this._scrollWheelListener) {
      window.removeEventListener("wheel", this._scrollWheelListener);
    }
  }
  _registerVisibilityChangeHandler() {
    this._visibilityChangeHandler = () => {
      if (document.visibilityState === "visible") {
        this.stage.root.core.setHasRenderUpdates(2);
        this.stage.renderFrame();
      }
    };
    document.addEventListener("visibilitychange", this._visibilityChangeHandler);
  }
  _removeVisibilityChangeHandler() {
    if (this._visibilityChangeHandler) {
      document.removeEventListener("visibilitychange", this._visibilityChangeHandler);
    }
  }
}
class PlatformLoader {
  static load(options) {
    if (options.platform) {
      return options.platform;
    } else {
      return WebPlatform;
    }
  }
}
class Utils2 {
  static isFunction(value) {
    return typeof value === "function";
  }
  static isNumber(value) {
    return typeof value === "number";
  }
  static isInteger(value) {
    return typeof value === "number" && value % 1 === 0;
  }
  static isBoolean(value) {
    return value === true || value === false;
  }
  static isString(value) {
    return typeof value == "string";
  }
  static isObject(value) {
    let type = typeof value;
    return !!value && (type == "object" || type == "function");
  }
  static isPlainObject(value) {
    let type = typeof value;
    return !!value && type == "object";
  }
  static isObjectLiteral(value) {
    return typeof value === "object" && value && value.constructor === Object;
  }
  static getArrayIndex(index, arr) {
    return Utils2.getModuloIndex(index, arr.length);
  }
  static equalValues(v1, v2) {
    if (typeof v1 !== typeof v2)
      return false;
    if (Utils2.isObjectLiteral(v1)) {
      return Utils2.isObjectLiteral(v2) && Utils2.equalObjectLiterals(v1, v2);
    } else if (Array.isArray(v1)) {
      return Array.isArray(v2) && Utils2.equalArrays(v1, v2);
    } else {
      return v1 === v2;
    }
  }
  static equalObjectLiterals(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let i = 0, n = keys1.length; i < n; i++) {
      const k1 = keys1[i];
      const k2 = keys2[i];
      if (k1 !== k2) {
        return false;
      }
      const v1 = obj1[k1];
      const v2 = obj2[k2];
      if (!Utils2.equalValues(v1, v2)) {
        return false;
      }
    }
    return true;
  }
  static equalArrays(v1, v2) {
    if (v1.length !== v2.length) {
      return false;
    }
    for (let i = 0, n = v1.length; i < n; i++) {
      if (!this.equalValues(v1[i], v2[i])) {
        return false;
      }
    }
    return true;
  }
}
class WebGLState {
  constructor(id, gl) {
    this._id = id;
    this._gl = gl;
    this._program = void 0;
    this._buffers = /* @__PURE__ */ new Map();
    this._framebuffers = /* @__PURE__ */ new Map();
    this._renderbuffers = /* @__PURE__ */ new Map();
    this._vertexAttribs = new Array(16);
    this._nonDefaultFlags = /* @__PURE__ */ new Set();
    this._settings = /* @__PURE__ */ new Map();
    this._textures = new Array(8);
    this._maxTexture = 0;
    this._activeTexture = gl.TEXTURE0;
    this._pixelStorei = new Array(5);
  }
  _getDefaultFlag(cap) {
    return cap === this._gl.DITHER;
  }
  setFlag(cap, v) {
    const def = this._getDefaultFlag(cap);
    if (v === def) {
      return this._nonDefaultFlags.delete(cap);
    } else {
      if (!this._nonDefaultFlags.has(cap)) {
        this._nonDefaultFlags.add(cap);
        return true;
      } else {
        return false;
      }
    }
  }
  setBuffer(target, buffer) {
    const change = this._buffers.get(target) !== buffer;
    this._buffers.set(target, buffer);
    if (change && target === this._gl.ARRAY_BUFFER) {
      this._vertexAttribs = [];
    }
    return change;
  }
  setFramebuffer(target, buffer) {
    const change = this._framebuffers.get(target) !== buffer;
    this._framebuffers.set(target, buffer);
    return change;
  }
  setRenderbuffer(target, buffer) {
    const change = this._renderbuffers.get(target) !== buffer;
    this._renderbuffers.set(target, buffer);
    return change;
  }
  setProgram(program) {
    const change = this._program !== program;
    this._program = program;
    return change;
  }
  setSetting(func, v) {
    const s = this._settings.get(func);
    const change = !s || !Utils2.equalValues(s, v);
    this._settings.set(func, v);
    return change;
  }
  disableVertexAttribArray(index) {
    const va = this._vertexAttribs[index];
    if (va && va[5]) {
      va[5] = false;
      return true;
    }
    return false;
  }
  enableVertexAttribArray(index) {
    const va = this._vertexAttribs[index];
    if (va) {
      if (!va[0]) {
        va[0] = true;
        return true;
      }
    } else {
      this._vertexAttribs[index] = [0, 0, 0, 0, 0, true];
      return true;
    }
    return false;
  }
  vertexAttribPointer(index, props) {
    let va = this._vertexAttribs[index];
    let equal = false;
    if (va) {
      equal = va[0] === props[0] && va[1] === props[1] && va[2] === props[2] && va[3] === props[3] && va[4] === props[4];
    }
    if (equal) {
      return false;
    } else {
      props[5] = va ? va[5] : false;
      return true;
    }
  }
  setActiveTexture(texture) {
    const changed = this._activeTexture !== texture;
    this._activeTexture = texture;
    return changed;
  }
  bindTexture(target, texture) {
    const activeIndex = WebGLState._getTextureIndex(this._activeTexture);
    this._maxTexture = Math.max(this._maxTexture, activeIndex + 1);
    const current = this._textures[activeIndex];
    const targetIndex = WebGLState._getTextureTargetIndex(target);
    if (current) {
      if (current[targetIndex] === texture) {
        return false;
      }
      current[targetIndex] = texture;
      return true;
    } else {
      if (texture) {
        this._textures[activeIndex] = [];
        this._textures[activeIndex][targetIndex] = texture;
        return true;
      } else {
        return false;
      }
    }
  }
  setPixelStorei(pname, param) {
    const i = WebGLState._getPixelStoreiIndex(pname);
    const change = !Utils2.equalValues(this._pixelStorei[i], param);
    this._pixelStorei[i] = param;
    return change;
  }
  migrate(s) {
    const t = this;
    this._migrateFlags(t, s);
    if (s._program !== t._program) {
      this._gl._useProgram(s._program);
    }
    this._migrateFramebuffers(t, s);
    this._migrateRenderbuffers(t, s);
    const buffersChanged = this._migrateBuffers(t, s);
    this._migrateAttributes(t, s, buffersChanged);
    this._migrateFlags(t, s);
    this._migrateSettings(t, s);
    this._migratePixelStorei(t, s);
    this._migrateTextures(t, s);
  }
  _migratePixelStorei(t, s) {
    for (let i = 0, n = t._pixelStorei.length; i < n; i++) {
      if (t._pixelStorei[i] !== s._pixelStorei[i]) {
        const value = s._pixelStorei[i] !== void 0 ? s._pixelStorei[i] : WebGLState._getDefaultPixelStoreiByIndex(i);
        this._gl._pixelStorei(WebGLState._getPixelStoreiByIndex(i), value);
      }
    }
  }
  _migrateTextures(t, s) {
    const max = Math.max(t._maxTexture, s._maxTexture);
    let activeTexture = t._activeTexture;
    for (let i = 0; i < max; i++) {
      const sTargets = s._textures[i];
      const tTargets = t._textures[i];
      const textureNumb = WebGLState._getTextureByIndex(i);
      const targetMax = Math.max(tTargets ? tTargets.length : 0, sTargets ? sTargets.length : 0);
      for (let j = 0, n = targetMax; j < n; j++) {
        const target = WebGLState._getTextureTargetByIndex(j);
        if (activeTexture !== textureNumb) {
          this._gl._activeTexture(textureNumb);
          activeTexture = textureNumb;
        }
        const texture = sTargets && sTargets[j] || null;
        this._gl._bindTexture(target, texture);
      }
    }
    if (s._activeTexture !== activeTexture) {
      this._gl._activeTexture(s._activeTexture);
    }
  }
  _migrateBuffers(t, s) {
    s._buffers.forEach((framebuffer, target) => {
      if (t._buffers.get(target) !== framebuffer) {
        this._gl._bindBuffer(target, framebuffer);
      }
    });
    t._buffers.forEach((buffer, target) => {
      const b = s._buffers.get(target);
      if (b === void 0) {
        this._gl._bindBuffer(target, null);
      }
    });
    return s._buffers.get(this._gl.ARRAY_BUFFER) !== t._buffers.get(this._gl.ARRAY_BUFFER);
  }
  _migrateFramebuffers(t, s) {
    s._framebuffers.forEach((framebuffer, target) => {
      if (t._framebuffers.get(target) !== framebuffer) {
        this._gl._bindFramebuffer(target, framebuffer);
      }
    });
    t._framebuffers.forEach((framebuffer, target) => {
      const fb = s._framebuffers.get(target);
      if (fb === void 0) {
        this._gl._bindFramebuffer(target, null);
      }
    });
  }
  _migrateRenderbuffers(t, s) {
    s._renderbuffers.forEach((renderbuffer, target) => {
      if (t._renderbuffers.get(target) !== renderbuffer) {
        this._gl._bindRenderbuffer(target, renderbuffer);
      }
    });
    t._renderbuffers.forEach((renderbuffer, target) => {
      const fb = s._renderbuffers.get(target);
      if (fb === void 0) {
        this._gl._bindRenderbuffer(target, null);
      }
    });
  }
  _migrateAttributes(t, s, buffersChanged) {
    if (!buffersChanged) {
      t._vertexAttribs.forEach((attrib, index) => {
        if (!s._vertexAttribs[index]) {
          this._gl._disableVertexAttribArray(index);
        }
      });
      s._vertexAttribs.forEach((attrib, index) => {
        this._gl._vertexAttribPointer(index, attrib[0], attrib[1], attrib[2], attrib[4]);
        if (attrib[5]) {
          this._gl._enableVertexAttribArray(index);
        } else {
          this._gl._disableVertexAttribArray(index);
        }
      });
    } else {
      s._vertexAttribs.forEach((attrib, index) => {
        if (attrib[0]) {
          this._gl._vertexAttribPointer(index, attrib[0], attrib[1], attrib[2], attrib[3], attrib[4]);
        }
        if (attrib[5]) {
          this._gl._enableVertexAttribArray(index);
        }
      });
    }
  }
  _migrateSettings(t, s) {
    const defaults = this.constructor.getDefaultSettings();
    t._settings.forEach((value, func) => {
      const name = func.name || func.xname;
      if (!s._settings.has(func)) {
        let args = defaults.get(name);
        if (Utils2.isFunction(args)) {
          args = args(this._gl);
        }
        s._settings.set(func, args);
        func.apply(this._gl, args);
      }
    });
    s._settings.forEach((value, func) => {
      const tValue = t._settings.get(func);
      if (!tValue || !Utils2.equalValues(tValue, value)) {
        func.apply(this._gl, value);
      }
    });
  }
  _migrateFlags(t, s) {
    t._nonDefaultFlags.forEach((setting) => {
      if (!s._nonDefaultFlags.has(setting)) {
        if (this._getDefaultFlag(setting)) {
          this._gl._enable(setting);
        } else {
          this._gl._disable(setting);
        }
      }
    });
    s._nonDefaultFlags.forEach((setting) => {
      if (!t._nonDefaultFlags.has(setting)) {
        if (this._getDefaultFlag(setting)) {
          this._gl._disable(setting);
        } else {
          this._gl._enable(setting);
        }
      }
    });
  }
  static getDefaultSettings() {
    if (!this._defaultSettings) {
      this._defaultSettings = /* @__PURE__ */ new Map();
      const d = this._defaultSettings;
      const g = WebGLRenderingContext.prototype;
      d.set("viewport", function(gl) {
        return [0, 0, gl.canvas.width, gl.canvas.height];
      });
      d.set("scissor", function(gl) {
        return [0, 0, gl.canvas.width, gl.canvas.height];
      });
      d.set("blendColor", [0, 0, 0, 0]);
      d.set("blendEquation", [g.FUNC_ADD]);
      d.set("blendEquationSeparate", [g.FUNC_ADD, g.FUNC_ADD]);
      d.set("blendFunc", [g.ONE, g.ZERO]);
      d.set("blendFuncSeparate", [g.ONE, g.ZERO, g.ONE, g.ZERO]);
      d.set("clearColor", [0, 0, 0, 0]);
      d.set("clearDepth", [1]);
      d.set("clearStencil", [0]);
      d.set("colorMask", [true, true, true, true]);
      d.set("cullFace", [g.BACK]);
      d.set("depthFunc", [g.LESS]);
      d.set("depthMask", [true]);
      d.set("depthRange", [0, 1]);
      d.set("frontFace", [g.CCW]);
      d.set("lineWidth", [1]);
      d.set("polygonOffset", [0, 0]);
      d.set("sampleCoverage", [1, false]);
      d.set("stencilFunc", [g.ALWAYS, 0, 1]);
      d.set("_stencilFuncSeparateFront", [g.ALWAYS, 0, 1]);
      d.set("_stencilFuncSeparateBack", [g.ALWAYS, 0, 1]);
      d.set("_stencilFuncSeparateFrontAndBack", [g.ALWAYS, 0, 1]);
      d.set("stencilMask", [1]);
      d.set("_stencilMaskSeparateFront", [1]);
      d.set("_stencilMaskSeparateBack", [1]);
      d.set("_stencilMaskSeparateFrontAndBack", [1]);
      d.set("stencilOp", [g.KEEP, g.KEEP, g.KEEP]);
      d.set("_stencilOpSeparateFront", [g.KEEP, g.KEEP, g.KEEP]);
      d.set("_stencilOpSeparateBack", [g.KEEP, g.KEEP, g.KEEP]);
      d.set("_stencilOpSeparateFrontAndBack", [g.KEEP, g.KEEP, g.KEEP]);
      d.set("vertexAttrib1f", []);
      d.set("vertexAttrib1fv", []);
      d.set("vertexAttrib2f", []);
      d.set("vertexAttrib2fv", []);
      d.set("vertexAttrib3f", []);
      d.set("vertexAttrib3fv", []);
      d.set("vertexAttrib4f", []);
      d.set("vertexAttrib4fv", []);
    }
    return this._defaultSettings;
  }
  static _getTextureTargetIndex(target) {
    switch (target) {
      case 3553:
        return 0;
      case 34067:
        return 1;
      default:
        throw new Error("Unknown texture target: " + target);
    }
  }
  static _getTextureTargetByIndex(index) {
    if (!this._textureTargetIndices) {
      this._textureTargetIndices = [3553, 34067];
    }
    return this._textureTargetIndices[index];
  }
  static _getTextureIndex(index) {
    return index - 33984;
  }
  static _getTextureByIndex(index) {
    return index + 33984;
  }
  static _getPixelStoreiIndex(pname) {
    switch (pname) {
      case 3333:
        return 0;
      case 3317:
        return 1;
      case 37440:
        return 2;
      case 37441:
        return 3;
      case 37443:
        return 4;
      case 37445:
        return 5;
      default:
        throw new Error("Unknown pixelstorei: " + pname);
    }
  }
  static _getPixelStoreiByIndex(index) {
    if (!this._pixelStoreiIndices) {
      this._pixelStoreiIndices = [3333, 3317, 37440, 37441, 37443];
    }
    return this._pixelStoreiIndices[index];
  }
  static _getDefaultPixelStoreiByIndex(index) {
    if (!this._pixelStoreiDefaults) {
      this._pixelStoreiDefaults = [4, 4, false, false, WebGLRenderingContext.prototype.BROWSER_DEFAULT_WEBGL];
    }
    return this._pixelStoreiDefaults[index];
  }
}
class WebGLStateManager {
  _initStateManager(id = "default") {
    this._states = {};
    this._state = this._getState(id);
  }
  _getState(id) {
    if (!this._states[id]) {
      this._states[id] = new WebGLState(id, this);
    }
    return this._states[id];
  }
  switchState(id = "default") {
    if (this._state._id !== id) {
      const newState = this._getState(id);
      this._state.migrate(newState);
      this._state = newState;
    }
  }
  $useProgram(program) {
    if (this._state.setProgram(program))
      this._useProgram(program);
  }
  $bindBuffer(target, fb) {
    if (this._state.setBuffer(target, fb))
      this._bindBuffer(target, fb);
  }
  $bindFramebuffer(target, fb) {
    if (this._state.setFramebuffer(target, fb))
      this._bindFramebuffer(target, fb);
  }
  $bindRenderbuffer(target, fb) {
    if (this._state.setRenderbuffer(target, fb))
      this._bindRenderbuffer(target, fb);
  }
  $enable(cap) {
    if (this._state.setFlag(cap, true))
      this._enable(cap);
  }
  $disable(cap) {
    if (this._state.setFlag(cap, false))
      this._disable(cap);
  }
  $viewport(x, y, w, h) {
    if (this._state.setSetting(this._viewport, [x, y, w, h]))
      this._viewport(x, y, w, h);
  }
  $scissor(x, y, w, h) {
    if (this._state.setSetting(this._scissor, [x, y, w, h]))
      this._scissor(x, y, w, h);
  }
  $disableVertexAttribArray(index) {
    if (this._state.disableVertexAttribArray(index))
      this._disableVertexAttribArray(index);
  }
  $enableVertexAttribArray(index) {
    if (this._state.enableVertexAttribArray(index))
      this._enableVertexAttribArray(index);
  }
  $vertexAttribPointer(index, size, type, normalized, stride, offset) {
    if (this._state.vertexAttribPointer(index, [size, type, normalized, stride, offset]))
      this._vertexAttribPointer(index, size, type, normalized, stride, offset);
  }
  $activeTexture(texture) {
    if (this._state.setActiveTexture(texture))
      this._activeTexture(texture);
  }
  $bindTexture(target, texture) {
    if (this._state.bindTexture(target, texture))
      this._bindTexture(target, texture);
  }
  $pixelStorei(pname, param) {
    if (this._state.setPixelStorei(pname, param)) {
      this._pixelStorei(pname, param);
    }
  }
  $stencilFuncSeparate(face, func, ref, mask) {
    let f;
    switch (face) {
      case this.FRONT:
        f = this._stencilFuncSeparateFront;
        break;
      case this.BACK:
        f = this._stencilFuncSeparateBack;
        break;
      case this.FRONT_AND_BACK:
        f = this._stencilFuncSeparateFrontAndBack;
        break;
    }
    if (this._state.setSetting(f, [func, ref, mask]))
      f.apply(this, [func, ref, mask]);
  }
  _stencilFuncSeparateFront(func, ref, mask) {
    this._stencilFuncSeparate(this.FRONT, func, ref, mask);
  }
  _stencilFuncSeparateBack(func, ref, mask) {
    this._stencilFuncSeparate(this.BACK, func, ref, mask);
  }
  _stencilFuncSeparateFrontAndBack(func, ref, mask) {
    this._stencilFuncSeparate(this.FRONT_AND_BACK, func, ref, mask);
  }
  $stencilMaskSeparate(face, mask) {
    let f;
    switch (face) {
      case this.FRONT:
        f = this._stencilMaskSeparateFront;
        break;
      case this.BACK:
        f = this._stencilMaskSeparateBack;
        break;
      case this.FRONT_AND_BACK:
        f = this._stencilMaskSeparateFrontAndBack;
        break;
    }
    if (this._state.setSetting(f, [mask]))
      f.apply(this, [mask]);
  }
  _stencilMaskSeparateFront(mask) {
    this._stencilMaskSeparate(this.FRONT, mask);
  }
  _stencilMaskSeparateBack(mask) {
    this._stencilMaskSeparate(this.BACK, mask);
  }
  _stencilMaskSeparateFrontAndBack(mask) {
    this._stencilMaskSeparate(this.FRONT_AND_BACK, mask);
  }
  $stencilOpSeparate(face, fail, zfail, zpass) {
    let f;
    switch (face) {
      case this.FRONT:
        f = this._stencilOpSeparateFront;
        break;
      case this.BACK:
        f = this._stencilOpSeparateBack;
        break;
      case this.FRONT_AND_BACK:
        f = this._stencilOpSeparateFrontAndBack;
        break;
    }
    if (this._state.setSetting(f, [fail, zfail, zpass]))
      f.apply(this, [fail, zfail, zpass]);
  }
  _stencilOpSeparateFront(fail, zfail, zpass) {
    this._stencilOpSeparate(this.FRONT, fail, zfail, zpass);
  }
  _stencilOpSeparateBack(fail, zfail, zpass) {
    this._stencilOpSeparate(this.BACK, fail, zfail, zpass);
  }
  _stencilOpSeparateFrontAndBack(fail, zfail, zpass) {
    this._stencilOpSeparate(this.FRONT_AND_BACK, fail, zfail, zpass);
  }
  $blendColor(red, green, blue, alpha) {
    if (this._state.setSetting(this._blendColor, [red, green, blue, alpha]))
      this._blendColor(red, green, blue, alpha);
  }
  $blendEquation(mode) {
    if (this._state.setSetting(this._blendEquation, [mode]))
      this._blendEquation(mode);
  }
  $blendEquationSeparate(modeRGB, modeAlpha) {
    if (this._state.setSetting(this._blendEquationSeparate, [modeRGB, modeAlpha]))
      this._blendEquationSeparate(modeRGB, modeAlpha);
  }
  $blendFunc(sfactor, dfactor) {
    if (this._state.setSetting(this._blendFunc, [sfactor, dfactor]))
      this._blendFunc(sfactor, dfactor);
  }
  $blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha) {
    if (this._state.setSetting(this._blendFuncSeparate, [srcRGB, dstRGB, srcAlpha, dstAlpha]))
      this._blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
  }
  $clearColor(red, green, blue, alpha) {
    if (this._state.setSetting(this._clearColor, [red, green, blue, alpha]))
      this._clearColor(red, green, blue, alpha);
  }
  $clearDepth(depth) {
    if (this._state.setSetting(this._clearDepth, [depth]))
      this._clearDepth(depth);
  }
  $clearStencil(s) {
    if (this._state.setSetting(this._clearStencil, [s]))
      this._clearStencil(s);
  }
  $colorMask(red, green, blue, alpha) {
    if (this._state.setSetting(this._colorMask, [red, green, blue, alpha]))
      this._colorMask(red, green, blue, alpha);
  }
  $cullFace(mode) {
    if (this._state.setSetting(this._cullFace, [mode]))
      this._cullFace(mode);
  }
  $depthFunc(func) {
    if (this._state.setSetting(this._depthFunc, [func]))
      this._depthFunc(func);
  }
  $depthMask(flag) {
    if (this._state.setSetting(this._depthMask, [flag]))
      this._depthMask(flag);
  }
  $depthRange(zNear, zFar) {
    if (this._state.setSetting(this._depthRange, [zNear, zFar]))
      this._depthRange(zNear, zFar);
  }
  $frontFace(mode) {
    if (this._state.setSetting(this._frontFace, [mode]))
      this._frontFace(mode);
  }
  $lineWidth(width) {
    if (this._state.setSetting(this._lineWidth, [width]))
      this._lineWidth(width);
  }
  $polygonOffset(factor, units) {
    if (this._state.setSetting(this._polygonOffset, [factor, units]))
      this._polygonOffset(factor, units);
  }
  $sampleCoverage(value, invert) {
    if (this._state.setSetting(this._sampleCoverage, [value, invert]))
      this._sampleCoverage(value, invert);
  }
  $stencilFunc(func, ref, mask) {
    if (this._state.setSetting(this._stencilFunc, [func, ref, mask]))
      this._stencilFunc(func, ref, mask);
  }
  $stencilMask(mask) {
    if (this._state.setSetting(this._stencilMask, [mask]))
      this._stencilMask(mask);
  }
  $stencilOp(fail, zfail, zpass) {
    if (this._state.setSetting(this._stencilOp, [fail, zfail, zpass]))
      this._stencilOp(fail, zfail, zpass);
  }
  $vertexAttrib1f(indx, x) {
    if (this._state.setSetting(this._vertexAttrib1f, [indx, x]))
      this._vertexAttrib1f(indx, x);
  }
  $vertexAttrib1fv(indx, values) {
    if (this._state.setSetting(this._vertexAttrib1fv, [indx, values]))
      this._vertexAttrib1fv(indx, values);
  }
  $vertexAttrib2f(indx, x, y) {
    if (this._state.setSetting(this._vertexAttrib2f, [indx, x, y]))
      this._vertexAttrib2f(indx, x, y);
  }
  $vertexAttrib2fv(indx, values) {
    if (this._state.setSetting(this._vertexAttrib2fv, [indx, values]))
      this._vertexAttrib2fv(indx, values);
  }
  $vertexAttrib3f(indx, x, y, z) {
    if (this._state.setSetting(this._vertexAttrib3f, [indx, x, y, z]))
      this._vertexAttrib3f(indx, x, y, z);
  }
  $vertexAttrib3fv(indx, values) {
    if (this._state.setSetting(this._vertexAttrib3fv, [indx, values]))
      this._vertexAttrib3fv(indx, values);
  }
  $vertexAttrib4f(indx, x, y, z, w) {
    if (this._state.setSetting(this._vertexAttrib4f, [indx, x, y, z, w]))
      this._vertexAttrib4f(indx, x, y, z, w);
  }
  $vertexAttrib4fv(indx, values) {
    if (this._state.setSetting(this._vertexAttrib4fv, [indx, values]))
      this._vertexAttrib4fv(indx, values);
  }
  static enable(gl, id = "default") {
    const names = Object.getOwnPropertyNames(WebGLStateManager.prototype);
    gl.__proto__;
    names.forEach((name) => {
      if (name !== "constructor") {
        const method = WebGLStateManager.prototype[name];
        if (name.charAt(0) === "$") {
          name = name.substr(1);
        }
        if (gl[name] !== method) {
          if (gl[name]) {
            if (!gl[name].name) {
              gl[name].xname = name;
            }
            gl["_" + name] = gl[name];
          }
          gl[name] = method;
        }
      }
    });
    WebGLStateManager.prototype._initStateManager.call(gl, id);
    return gl;
  }
}
class TextureManager {
  constructor(stage) {
    this.stage = stage;
    this._usedMemory = 0;
    this._uploadedTextureSources = [];
    this.textureSourceHashmap = /* @__PURE__ */ new Map();
  }
  get usedMemory() {
    return this._usedMemory;
  }
  destroy() {
    for (let i = 0, n = this._uploadedTextureSources.length; i < n; i++) {
      this._nativeFreeTextureSource(this._uploadedTextureSources[i]);
    }
    this.textureSourceHashmap.clear();
    this._usedMemory = 0;
  }
  getReusableTextureSource(id) {
    return this.textureSourceHashmap.get(id);
  }
  getTextureSource(func, id) {
    let textureSource = id ? this.textureSourceHashmap.get(id) : null;
    if (!textureSource) {
      textureSource = new TextureSource(this, func);
      if (id) {
        textureSource.lookupId = id;
        this.textureSourceHashmap.set(id, textureSource);
      }
    }
    return textureSource;
  }
  uploadTextureSource(textureSource, options) {
    if (textureSource.isLoaded())
      return;
    this._addMemoryUsage(textureSource.w * textureSource.h);
    const nativeTexture = this._nativeUploadTextureSource(textureSource, options);
    textureSource._nativeTexture = nativeTexture;
    nativeTexture.w = textureSource.w;
    nativeTexture.h = textureSource.h;
    nativeTexture.update = this.stage.frameCounter;
    this._uploadedTextureSources.push(textureSource);
    this.addToLookupMap(textureSource);
    this._updateVramUsage(textureSource, 1);
  }
  _addMemoryUsage(delta) {
    this._usedMemory += delta;
    this.stage.addMemoryUsage(delta);
  }
  _updateVramUsage(textureSource, sign) {
    const nativeTexture = textureSource.nativeTexture;
    var usage;
    if (!Stage.isWebglSupported())
      return;
    if (!textureSource.isLoaded())
      return;
    if (!nativeTexture.hasOwnProperty("bytesPerPixel") || isNaN(nativeTexture.bytesPerPixel))
      return;
    usage = sign * (textureSource.w * textureSource.h * nativeTexture.bytesPerPixel);
    this.stage.addVramUsage(usage, textureSource.hasAlpha);
  }
  addToLookupMap(textureSource) {
    const lookupId = textureSource.lookupId;
    if (lookupId) {
      if (!this.textureSourceHashmap.has(lookupId)) {
        this.textureSourceHashmap.set(lookupId, textureSource);
      }
    }
  }
  gc() {
    this.freeUnusedTextureSources();
    this._cleanupLookupMap();
  }
  freeUnusedTextureSources() {
    let remainingTextureSources = [];
    for (let i = 0, n = this._uploadedTextureSources.length; i < n; i++) {
      let ts = this._uploadedTextureSources[i];
      if (ts.allowCleanup()) {
        this._freeManagedTextureSource(ts);
      } else {
        remainingTextureSources.push(ts);
      }
    }
    this._uploadedTextureSources = remainingTextureSources;
    this._cleanupLookupMap();
  }
  _freeManagedTextureSource(textureSource) {
    if (textureSource.isLoaded()) {
      this._nativeFreeTextureSource(textureSource);
      this._addMemoryUsage(-textureSource.w * textureSource.h);
      this._updateVramUsage(textureSource, -1);
    }
    textureSource.loadingSince = null;
  }
  _cleanupLookupMap() {
    this.textureSourceHashmap.forEach((textureSource, lookupId) => {
      if (!(textureSource.isLoaded() || textureSource.isLoading()) && !textureSource.isUsed()) {
        this.textureSourceHashmap.delete(lookupId);
      }
    });
  }
  freeTextureSource(textureSource) {
    const index = this._uploadedTextureSources.indexOf(textureSource);
    const managed = index !== -1;
    if (textureSource.isLoaded()) {
      if (managed) {
        this._addMemoryUsage(-textureSource.w * textureSource.h);
        this._uploadedTextureSources.splice(index, 1);
      }
      this._nativeFreeTextureSource(textureSource);
    }
    textureSource.loadingSince = null;
  }
  _nativeUploadTextureSource(textureSource, options) {
    return this.stage.renderer.uploadTextureSource(textureSource, options);
  }
  _nativeFreeTextureSource(textureSource) {
    this.stage.renderer.freeTextureSource(textureSource);
    textureSource.clearNativeTexture();
  }
}
class TextureThrottler {
  constructor(stage) {
    this.stage = stage;
    this.genericCancelCb = (textureSource) => {
      this._remove(textureSource);
    };
    this._sources = [];
    this._data = [];
  }
  destroy() {
    this._sources = [];
    this._data = [];
    this.stage = null;
    delete this._sources;
    delete this._data;
    delete this.stage;
  }
  processSome() {
    if (this._sources.length) {
      const start = Date.now();
      do {
        this._processItem();
      } while (this._sources.length && Date.now() - start < TextureThrottler.MAX_UPLOAD_TIME_PER_FRAME);
    }
  }
  _processItem() {
    const source = this._sources.pop();
    const data = this._data.pop();
    if (source.isLoading()) {
      source.processLoadedSource(data);
    }
  }
  add(textureSource, data) {
    this._sources.push(textureSource);
    this._data.push(data);
  }
  _remove(textureSource) {
    const index = this._sources.indexOf(textureSource);
    if (index >= 0) {
      this._sources.splice(index, 1);
      this._data.splice(index, 1);
    }
  }
}
TextureThrottler.MAX_UPLOAD_TIME_PER_FRAME = 10;
class CoreContext {
  constructor(stage) {
    this.stage = stage;
    this.root = null;
    this.updateTreeOrder = 0;
    this.renderState = this.stage.renderer.createCoreRenderState(this);
    this.renderExec = this.stage.renderer.createCoreRenderExecutor(this);
    this.renderExec.init();
    this._usedMemory = 0;
    this._renderTexturePool = [];
    this._renderTextureId = 1;
    this._zSorts = [];
    this.renderToTextureCount = 0;
  }
  get usedMemory() {
    return this._usedMemory;
  }
  destroy() {
    this._renderTexturePool.forEach((texture) => this._freeRenderTexture(texture));
    this._usedMemory = 0;
    this.stage = null;
    this.root = null;
    this.renderState = null;
    this.renderExec = null;
    this._renderTexturePool = null;
    this._zSorts = null;
    delete this.stage;
    delete this.root;
    delete this.renderState;
    delete this.renderExec;
    delete this._renderTexturePool;
    delete this._zSorts;
  }
  hasRenderUpdates() {
    return !!this.root._parent._hasRenderUpdates;
  }
  render() {
    this.root._parent._hasRenderUpdates = 0;
    this._render();
  }
  update() {
    this._update();
    if (this.root._hasUpdates) {
      this._update();
    }
    this._performForcedZSorts();
  }
  _performForcedZSorts() {
    const n = this._zSorts.length;
    if (n) {
      for (let i = 0, n2 = this._zSorts.length; i < n2; i++) {
        if (this._zSorts[i].zSort) {
          this._zSorts[i].sortZIndexedChildren();
        }
      }
      this._zSorts = [];
    }
  }
  _update() {
    this.updateTreeOrder = 0;
    this.root.update();
  }
  _render() {
    const debugFrame = this.stage.getOption("debugFrame");
    this._fillRenderState();
    if (this.stage.getOption("readPixelsBeforeDraw")) {
      this._readPixels();
    }
    this._performRender();
    if (debugFrame) {
      console.log(`[Lightning] RTT Renders in frame: ${this.renderToTextureCount}`);
    }
    if (this.stage.getOption("readPixelsAfterDraw") && this.renderToTextureCount >= this.stage.getOption("readPixelsAfterDrawThreshold")) {
      if (debugFrame) {
        console.log(`[Lightning] readPixelsAfterDraw behavior triggered`);
      }
      this._readPixels();
    }
    this.renderToTextureCount = 0;
  }
  _readPixels() {
    const pixels = new Uint8Array(4);
    const gl = this.stage.gl;
    gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  }
  _fillRenderState() {
    this.renderState.reset();
    this.root.render();
    this.renderState.finish();
  }
  _performRender() {
    this.renderExec.execute();
  }
  _addMemoryUsage(delta) {
    this._usedMemory += delta;
    this.stage.addMemoryUsage(delta);
  }
  allocateRenderTexture(w, h) {
    let prec = this.stage.getRenderPrecision();
    let pw = Math.max(1, Math.round(w * prec));
    let ph = Math.max(1, Math.round(h * prec));
    const n = this._renderTexturePool.length;
    for (let i = n - 1; i >= 0; i--) {
      const texture2 = this._renderTexturePool[i];
      if (texture2.w === pw && texture2.h === ph && texture2.update !== this.stage.frameCounter) {
        texture2.f = this.stage.frameCounter;
        this._renderTexturePool.splice(i, 1);
        return texture2;
      }
    }
    const texture = this._createRenderTexture(w, h, pw, ph);
    texture.precision = prec;
    return texture;
  }
  releaseRenderTexture(texture) {
    this._renderTexturePool.push(texture);
  }
  freeUnusedRenderTextures(maxAge = 60) {
    let limit = this.stage.frameCounter - maxAge;
    this._renderTexturePool = this._renderTexturePool.filter((texture) => {
      if (texture.f <= limit) {
        this._freeRenderTexture(texture);
        return false;
      }
      return true;
    });
  }
  _createRenderTexture(w, h, pw, ph) {
    this._addMemoryUsage(pw * ph);
    const texture = this.stage.renderer.createRenderTexture(w, h, pw, ph);
    texture.id = this._renderTextureId++;
    texture.f = this.stage.frameCounter;
    texture.ow = w;
    texture.oh = h;
    texture.w = pw;
    texture.h = ph;
    return texture;
  }
  _freeRenderTexture(nativeTexture) {
    this.stage.renderer.freeRenderTexture(nativeTexture);
    this._addMemoryUsage(-nativeTexture.w * nativeTexture.h);
  }
  copyRenderTexture(renderTexture, nativeTexture, options) {
    this.stage.renderer.copyRenderTexture(renderTexture, nativeTexture, options);
  }
  forceZSort(elementCore) {
    this._zSorts.push(elementCore);
  }
}
class TransitionSettings {
  constructor(stage) {
    this.stage = stage;
    this._timingFunction = "ease";
    this._timingFunctionImpl = StageUtils.getTimingFunction(this._timingFunction);
    this.delay = 0;
    this.duration = 0.2;
    this.merger = null;
  }
  get timingFunction() {
    return this._timingFunction;
  }
  set timingFunction(v) {
    this._timingFunction = v;
    this._timingFunctionImpl = StageUtils.getTimingFunction(v);
  }
  get timingFunctionImpl() {
    return this._timingFunctionImpl;
  }
  patch(settings) {
    Base.patchObject(this, settings);
  }
}
TransitionSettings.prototype.isTransitionSettings = true;
class TransitionManager {
  constructor(stage) {
    this.stage = stage;
    this.stage.on("frameStart", () => this.progress());
    this.active = /* @__PURE__ */ new Set();
    this.defaultTransitionSettings = new TransitionSettings(this.stage);
  }
  progress() {
    if (this.active.size) {
      let dt = this.stage.dt;
      let filter = false;
      this.active.forEach(function(a) {
        a.progress(dt);
        if (!a.isRunning()) {
          filter = true;
        }
      });
      if (filter) {
        this.active = new Set([...this.active].filter((t) => t.isRunning()));
      }
    }
  }
  createSettings(settings) {
    const transitionSettings = new TransitionSettings();
    Base.patchObject(transitionSettings, settings);
    return transitionSettings;
  }
  addActive(transition) {
    this.active.add(transition);
  }
  removeActive(transition) {
    this.active.delete(transition);
  }
}
class MultiSpline {
  constructor() {
    this._clear();
  }
  _clear() {
    this._p = [];
    this._pe = [];
    this._idp = [];
    this._f = [];
    this._v = [];
    this._lv = [];
    this._sm = [];
    this._s = [];
    this._ve = [];
    this._sme = [];
    this._se = [];
    this._length = 0;
  }
  parse(rgba, def) {
    let i, n;
    if (!Utils$1.isObjectLiteral(def)) {
      def = { 0: def };
    }
    let defaultSmoothness = 0.5;
    let items = [];
    for (let key in def) {
      if (def.hasOwnProperty(key)) {
        let obj = def[key];
        if (!Utils$1.isObjectLiteral(obj)) {
          obj = { v: obj };
        }
        let p = parseFloat(key);
        if (key === "sm") {
          defaultSmoothness = obj.v;
        } else if (!isNaN(p) && p >= 0 && p <= 2) {
          obj.p = p;
          obj.f = Utils$1.isFunction(obj.v);
          obj.lv = obj.f ? obj.v(0, 0) : obj.v;
          items.push(obj);
        }
      }
    }
    items = items.sort(function(a, b) {
      return a.p - b.p;
    });
    n = items.length;
    for (i = 0; i < n; i++) {
      let last = i === n - 1;
      if (!items[i].hasOwnProperty("pe")) {
        items[i].pe = last ? items[i].p <= 1 ? 1 : 2 : items[i + 1].p;
      } else {
        const max = i < n - 1 ? items[i + 1].p : 1;
        if (items[i].pe > max) {
          items[i].pe = max;
        }
      }
      if (items[i].pe === items[i].p) {
        items[i].idp = 0;
      } else {
        items[i].idp = 1 / (items[i].pe - items[i].p);
      }
    }
    for (i = 0; i < n; i++) {
      if (!items[i].hasOwnProperty("sm")) {
        items[i].sm = defaultSmoothness;
      }
      if (!items[i].hasOwnProperty("s")) {
        if (i === 0 || i === n - 1 || items[i].p === 1) {
          items[i].s = rgba ? [0, 0, 0, 0] : 0;
        } else {
          const pi = items[i - 1];
          const ni = items[i + 1];
          if (pi.p === ni.p) {
            items[i].s = rgba ? [0, 0, 0, 0] : 0;
          } else {
            if (rgba) {
              const nc = MultiSpline.getRgbaComponents(ni.lv);
              const pc = MultiSpline.getRgbaComponents(pi.lv);
              const d = 1 / (ni.p - pi.p);
              items[i].s = [
                d * (nc[0] - pc[0]),
                d * (nc[1] - pc[1]),
                d * (nc[2] - pc[2]),
                d * (nc[3] - pc[3])
              ];
            } else {
              items[i].s = (ni.lv - pi.lv) / (ni.p - pi.p);
            }
          }
        }
      }
    }
    for (i = 0; i < n - 1; i++) {
      if (!items[i].f) {
        let last = i === n - 1;
        if (!items[i].hasOwnProperty("ve")) {
          items[i].ve = last ? items[i].lv : items[i + 1].lv;
        }
        if (Utils$1.isNumber(items[i].v) && Utils$1.isNumber(items[i].lv)) {
          if (!items[i].hasOwnProperty("sme")) {
            items[i].sme = last ? defaultSmoothness : items[i + 1].sm;
          }
          if (!items[i].hasOwnProperty("se")) {
            items[i].se = last ? rgba ? [0, 0, 0, 0] : 0 : items[i + 1].s;
          }
          if (rgba) {
            items[i].v = MultiSpline.getSplineRgbaValueFunction(items[i].v, items[i].ve, items[i].p, items[i].pe, items[i].sm, items[i].sme, items[i].s, items[i].se);
          } else {
            items[i].v = MultiSpline.getSplineValueFunction(items[i].v, items[i].ve, items[i].p, items[i].pe, items[i].sm, items[i].sme, items[i].s, items[i].se);
          }
          items[i].f = true;
        }
      }
    }
    if (this.length) {
      this._clear();
    }
    for (i = 0, n = items.length; i < n; i++) {
      this._add(items[i]);
    }
  }
  _add(item) {
    this._p.push(item.p || 0);
    this._pe.push(item.pe || 0);
    this._idp.push(item.idp || 0);
    this._f.push(item.f || false);
    this._v.push(item.hasOwnProperty("v") ? item.v : 0);
    this._lv.push(item.lv || 0);
    this._sm.push(item.sm || 0);
    this._s.push(item.s || 0);
    this._ve.push(item.ve || 0);
    this._sme.push(item.sme || 0);
    this._se.push(item.se || 0);
    this._length++;
  }
  _getItem(p) {
    const n = this._length;
    if (!n) {
      return -1;
    }
    if (p < this._p[0]) {
      return 0;
    }
    for (let i = 0; i < n; i++) {
      if (this._p[i] <= p && p < this._pe[i]) {
        return i;
      }
    }
    return n - 1;
  }
  getValue(p) {
    const i = this._getItem(p);
    if (i === -1) {
      return void 0;
    } else {
      if (this._f[i]) {
        const o = Math.min(1, Math.max(0, (p - this._p[i]) * this._idp[i]));
        return this._v[i](o);
      } else {
        return this._v[i];
      }
    }
  }
  get length() {
    return this._length;
  }
  static getRgbaComponents(argb) {
    let r = (argb / 65536 | 0) % 256;
    let g = (argb / 256 | 0) % 256;
    let b = argb % 256;
    let a = argb / 16777216 | 0;
    return [r, g, b, a];
  }
  static getSplineValueFunction(v1, v2, p1, p2, o1, i2, s1, s2) {
    let dp = p2 - p1;
    s1 *= dp;
    s2 *= dp;
    let helpers = MultiSpline.getSplineHelpers(v1, v2, o1, i2, s1, s2);
    if (!helpers) {
      return function(p) {
        if (p === 0)
          return v1;
        if (p === 1)
          return v2;
        return v2 * p + v1 * (1 - p);
      };
    } else {
      return function(p) {
        if (p === 0)
          return v1;
        if (p === 1)
          return v2;
        return MultiSpline.calculateSpline(helpers, p);
      };
    }
  }
  static getSplineRgbaValueFunction(v1, v2, p1, p2, o1, i2, s1, s2) {
    let dp = p2 - p1;
    s1[0] *= dp;
    s1[1] *= dp;
    s1[2] *= dp;
    s1[3] *= dp;
    s2[0] *= dp;
    s2[1] *= dp;
    s2[2] *= dp;
    s2[3] *= dp;
    let cv1 = MultiSpline.getRgbaComponents(v1);
    let cv2 = MultiSpline.getRgbaComponents(v2);
    let helpers = [
      MultiSpline.getSplineHelpers(cv1[0], cv2[0], o1, i2, s1[0], s2[0]),
      MultiSpline.getSplineHelpers(cv1[1], cv2[1], o1, i2, s1[1], s2[1]),
      MultiSpline.getSplineHelpers(cv1[2], cv2[2], o1, i2, s1[2], s2[2]),
      MultiSpline.getSplineHelpers(cv1[3], cv2[3], o1, i2, s1[3], s2[3])
    ];
    if (!helpers[0]) {
      return function(p) {
        if (p === 0)
          return v1;
        if (p === 1)
          return v2;
        return MultiSpline.mergeColors(v2, v1, p);
      };
    } else {
      return function(p) {
        if (p === 0)
          return v1;
        if (p === 1)
          return v2;
        return MultiSpline.getArgbNumber([
          Math.min(255, MultiSpline.calculateSpline(helpers[0], p)),
          Math.min(255, MultiSpline.calculateSpline(helpers[1], p)),
          Math.min(255, MultiSpline.calculateSpline(helpers[2], p)),
          Math.min(255, MultiSpline.calculateSpline(helpers[3], p))
        ]);
      };
    }
  }
  static getSplineHelpers(v1, v2, o1, i2, s1, s2) {
    if (!o1 && !i2) {
      return null;
    }
    let csx = o1;
    let csy = v1 + s1 * o1;
    let cex = 1 - i2;
    let cey = v2 - s2 * i2;
    let xa = 3 * csx - 3 * cex + 1;
    let xb = -6 * csx + 3 * cex;
    let xc = 3 * csx;
    let ya = 3 * csy - 3 * cey + v2 - v1;
    let yb = 3 * (cey + v1) - 6 * csy;
    let yc = 3 * (csy - v1);
    let yd = v1;
    return [xa, xb, xc, ya, yb, yc, yd];
  }
  static calculateSpline(helpers, p) {
    let xa = helpers[0];
    let xb = helpers[1];
    let xc = helpers[2];
    let ya = helpers[3];
    let yb = helpers[4];
    let yc = helpers[5];
    let yd = helpers[6];
    if (xa === -2 && ya === -2 && xc === 0 && yc === 0) {
      return p;
    }
    let t = 0.5, cbx, dx;
    for (let it = 0; it < 20; it++) {
      cbx = t * (t * (t * xa + xb) + xc);
      dx = p - cbx;
      if (dx > -1e-8 && dx < 1e-8) {
        return t * (t * (t * ya + yb) + yc) + yd;
      }
      let cbxd = t * (t * (3 * xa) + 2 * xb) + xc;
      if (cbxd > 1e-10 && cbxd < 1e-10) {
        break;
      }
      t += dx / cbxd;
    }
    let minT = 0;
    let maxT = 1;
    for (let it = 0; it < 20; it++) {
      t = 0.5 * (minT + maxT);
      cbx = t * (t * (t * xa + xb) + xc);
      dx = p - cbx;
      if (dx > -1e-8 && dx < 1e-8) {
        return t * (t * (t * ya + yb) + yc) + yd;
      }
      if (dx < 0) {
        maxT = t;
      } else {
        minT = t;
      }
    }
    return t;
  }
  static mergeColors(c1, c2, p) {
    let r1 = (c1 / 65536 | 0) % 256;
    let g1 = (c1 / 256 | 0) % 256;
    let b1 = c1 % 256;
    let a1 = c1 / 16777216 | 0;
    let r2 = (c2 / 65536 | 0) % 256;
    let g2 = (c2 / 256 | 0) % 256;
    let b2 = c2 % 256;
    let a2 = c2 / 16777216 | 0;
    let r = r1 * p + r2 * (1 - p);
    let g = g1 * p + g2 * (1 - p);
    let b = b1 * p + b2 * (1 - p);
    let a = a1 * p + a2 * (1 - p);
    return Math.round(a) * 16777216 + Math.round(r) * 65536 + Math.round(g) * 256 + Math.round(b);
  }
  static getArgbNumber(rgba) {
    rgba[0] = Math.max(0, Math.min(255, rgba[0]));
    rgba[1] = Math.max(0, Math.min(255, rgba[1]));
    rgba[2] = Math.max(0, Math.min(255, rgba[2]));
    rgba[3] = Math.max(0, Math.min(255, rgba[3]));
    let v = ((rgba[3] | 0) << 24) + ((rgba[0] | 0) << 16) + ((rgba[1] | 0) << 8) + (rgba[2] | 0);
    if (v < 0) {
      v = 4294967295 + v + 1;
    }
    return v;
  }
}
class AnimationActionSettings {
  constructor(animationSettings) {
    this.animationSettings = animationSettings;
    this._selector = "";
    this._items = new MultiSpline();
    this._props = [];
    this._propSetters = [];
    this._resetValue = void 0;
    this._hasResetValue = false;
    this._hasColorProperty = void 0;
  }
  getResetValue() {
    if (this._hasResetValue) {
      return this._resetValue;
    } else {
      return this._items.getValue(0);
    }
  }
  apply(element, p, factor) {
    const elements = this.getAnimatedElements(element);
    let v = this._items.getValue(p);
    if (v === void 0 || !elements.length) {
      return;
    }
    if (factor !== 1) {
      let sv = this.getResetValue();
      if (Utils$1.isNumber(v) && Utils$1.isNumber(sv)) {
        if (this.hasColorProperty()) {
          v = StageUtils.mergeColors(v, sv, factor);
        } else {
          v = StageUtils.mergeNumbers(v, sv, factor);
        }
      }
    }
    const n = this._propSetters.length;
    const m = elements.length;
    for (let j = 0; j < m; j++) {
      for (let i = 0; i < n; i++) {
        this._propSetters[i](elements[j], v);
      }
    }
  }
  getAnimatedElements(element) {
    return element.select(this._selector);
  }
  reset(element) {
    const elements = this.getAnimatedElements(element);
    let v = this.getResetValue();
    if (v === void 0 || !elements.length) {
      return;
    }
    const n = this._propSetters.length;
    const m = elements.length;
    for (let j = 0; j < m; j++) {
      for (let i = 0; i < n; i++) {
        this._propSetters[i](elements[j], v);
      }
    }
  }
  set selector(v) {
    this._selector = v;
  }
  set t(v) {
    this.selector = v;
  }
  get resetValue() {
    return this._resetValue;
  }
  set resetValue(v) {
    this._resetValue = v;
    this._hasResetValue = v !== void 0;
  }
  set rv(v) {
    this.resetValue = v;
  }
  set value(v) {
    this._items.parse(this.hasColorProperty(), v);
  }
  set v(v) {
    this.value = v;
  }
  set properties(v) {
    if (!Array.isArray(v)) {
      v = [v];
    }
    this._props = [];
    v.forEach((prop) => {
      this._props.push(prop);
      this._propSetters.push(Element.getSetter(prop));
    });
  }
  set property(v) {
    this._hasColorProperty = void 0;
    this.properties = v;
  }
  set p(v) {
    this.properties = v;
  }
  patch(settings) {
    Base.patchObject(this, settings);
  }
  hasColorProperty() {
    if (this._hasColorProperty === void 0) {
      this._hasColorProperty = this._props.length ? Element.isColorProperty(this._props[0]) : false;
    }
    return this._hasColorProperty;
  }
}
AnimationActionSettings.prototype.isAnimationActionSettings = true;
class AnimationSettings {
  constructor() {
    this._actions = [];
    this.delay = 0;
    this.duration = 1;
    this.repeat = 0;
    this.repeatOffset = 0;
    this.repeatDelay = 0;
    this.autostop = false;
    this.stopMethod = AnimationSettings.STOP_METHODS.FADE;
    this._stopTimingFunction = "ease";
    this._stopTimingFunctionImpl = StageUtils.getTimingFunction(this._stopTimingFunction);
    this.stopDuration = 0;
    this.stopDelay = 0;
  }
  get actions() {
    return this._actions;
  }
  set actions(v) {
    this._actions = [];
    for (let i = 0, n = v.length; i < n; i++) {
      const e = v[i];
      if (!e.isAnimationActionSettings) {
        const aas = new AnimationActionSettings(this);
        aas.patch(e);
        this._actions.push(aas);
      } else {
        this._actions.push(e);
      }
    }
  }
  apply(element, p, factor = 1) {
    this._actions.forEach(function(action) {
      action.apply(element, p, factor);
    });
  }
  reset(element) {
    this._actions.forEach(function(action) {
      action.reset(element);
    });
  }
  get stopTimingFunction() {
    return this._stopTimingFunction;
  }
  set stopTimingFunction(v) {
    this._stopTimingFunction = v;
    this._stopTimingFunctionImpl = StageUtils.getTimingFunction(v);
  }
  get stopTimingFunctionImpl() {
    return this._stopTimingFunctionImpl;
  }
  patch(settings) {
    Base.patchObject(this, settings);
  }
}
AnimationSettings.STOP_METHODS = {
  FADE: "fade",
  REVERSE: "reverse",
  FORWARD: "forward",
  IMMEDIATE: "immediate",
  ONETOTWO: "onetotwo"
};
class Animation extends EventEmitter {
  constructor(manager, settings, element) {
    super();
    this.manager = manager;
    this._settings = settings;
    this._element = element;
    this._state = Animation.STATES.IDLE;
    this._p = 0;
    this._delayLeft = 0;
    this._repeatsLeft = 0;
    this._stopDelayLeft = 0;
    this._stopP = 0;
  }
  start() {
    if (this._element && this._element.attached) {
      this._p = 0;
      this._delayLeft = this.settings.delay;
      this._repeatsLeft = this.settings.repeat;
      this._state = Animation.STATES.PLAYING;
      this.emit("start");
      this.checkActive();
    } else {
      console.warn("[Lightning] Element must be attached before starting animation");
    }
  }
  play() {
    if (this._state === Animation.STATES.PAUSED) {
      this._state = Animation.STATES.PLAYING;
      this.checkActive();
      this.emit("resume");
    } else if (this._state == Animation.STATES.STOPPING && this.settings.stopMethod == AnimationSettings.STOP_METHODS.REVERSE) {
      this._state = Animation.STATES.PLAYING;
      this.emit("stopContinue");
    } else if (this._state != Animation.STATES.PLAYING && this._state != Animation.STATES.FINISHED) {
      this.start();
    }
  }
  pause() {
    if (this._state === Animation.STATES.PLAYING) {
      this._state = Animation.STATES.PAUSED;
      this.emit("pause");
    }
  }
  replay() {
    if (this._state == Animation.STATES.FINISHED) {
      this.start();
    } else {
      this.play();
    }
  }
  skipDelay() {
    this._delayLeft = 0;
    this._stopDelayLeft = 0;
  }
  finish() {
    if (this._state === Animation.STATES.PLAYING) {
      this._delayLeft = 0;
      this._p = 1;
    } else if (this._state === Animation.STATES.STOPPING) {
      this._stopDelayLeft = 0;
      this._p = 0;
    }
  }
  stop() {
    if (this._state === Animation.STATES.STOPPED || this._state === Animation.STATES.IDLE)
      return;
    this._stopDelayLeft = this.settings.stopDelay || 0;
    if (this.settings.stopMethod === AnimationSettings.STOP_METHODS.IMMEDIATE && !this._stopDelayLeft || this._delayLeft > 0) {
      this._state = Animation.STATES.STOPPING;
      this.emit("stop");
    } else {
      if (this.settings.stopMethod === AnimationSettings.STOP_METHODS.FADE) {
        this._stopP = 0;
      }
      this._state = Animation.STATES.STOPPING;
      this.emit("stop");
    }
    this.checkActive();
  }
  stopNow() {
    if (this._state !== Animation.STATES.STOPPED || this._state !== Animation.STATES.IDLE) {
      this._state = Animation.STATES.STOPPING;
      this._p = 0;
      this.emit("stop");
      this.reset();
      this._state = Animation.STATES.STOPPED;
      this.emit("stopFinish");
    }
  }
  isPaused() {
    return this._state === Animation.STATES.PAUSED;
  }
  isPlaying() {
    return this._state === Animation.STATES.PLAYING;
  }
  isStopping() {
    return this._state === Animation.STATES.STOPPING;
  }
  isFinished() {
    return this._state === Animation.STATES.FINISHED;
  }
  checkActive() {
    if (this.isActive()) {
      this.manager.addActive(this);
    }
  }
  isActive() {
    return (this._state == Animation.STATES.PLAYING || this._state == Animation.STATES.STOPPING) && this._element && this._element.attached;
  }
  progress(dt) {
    if (!this._element)
      return;
    this._progress(dt);
    this.apply();
  }
  _progress(dt) {
    if (this._state == Animation.STATES.STOPPING) {
      this._stopProgress(dt);
      return;
    }
    if (this._state != Animation.STATES.PLAYING) {
      return;
    }
    if (this._delayLeft > 0) {
      this._delayLeft -= dt;
      if (this._delayLeft < 0) {
        dt = -this._delayLeft;
        this._delayLeft = 0;
        this.emit("delayEnd");
      } else {
        return;
      }
    }
    if (this.settings.duration === 0) {
      this._p = 1;
    } else if (this.settings.duration > 0) {
      this._p += dt / this.settings.duration;
    }
    if (this._p >= 1) {
      if (this.settings.repeat == -1 || this._repeatsLeft > 0) {
        if (this._repeatsLeft > 0) {
          this._repeatsLeft--;
        }
        this._p = this.settings.repeatOffset;
        this.emit("progress", this._p);
        if (this.settings.repeatDelay) {
          this._delayLeft = this.settings.repeatDelay;
        }
        this.emit("repeat", this._repeatsLeft);
      } else {
        this._p = 1;
        this.emit("progress", this._p);
        this._state = Animation.STATES.FINISHED;
        this.emit("finish");
        if (this.settings.autostop) {
          this.stop();
        }
      }
    } else {
      this.emit("progress", this._p);
    }
  }
  _stopProgress(dt) {
    let duration = this._getStopDuration();
    if (this._stopDelayLeft > 0) {
      this._stopDelayLeft -= dt;
      if (this._stopDelayLeft < 0) {
        dt = -this._stopDelayLeft;
        this._stopDelayLeft = 0;
        this.emit("stopDelayEnd");
      } else {
        return;
      }
    }
    if (this.settings.stopMethod == AnimationSettings.STOP_METHODS.IMMEDIATE) {
      this._state = Animation.STATES.STOPPED;
      this.emit("stopFinish");
    } else if (this.settings.stopMethod == AnimationSettings.STOP_METHODS.REVERSE) {
      if (duration === 0) {
        this._p = 0;
      } else if (duration > 0) {
        this._p -= dt / duration;
      }
      if (this._p <= 0) {
        this._p = 0;
        this._state = Animation.STATES.STOPPED;
        this.emit("stopFinish");
      }
    } else if (this.settings.stopMethod == AnimationSettings.STOP_METHODS.FADE) {
      this._progressStopTransition(dt);
      if (this._stopP >= 1) {
        this._p = 0;
        this._state = Animation.STATES.STOPPED;
        this.emit("stopFinish");
      }
    } else if (this.settings.stopMethod == AnimationSettings.STOP_METHODS.ONETOTWO) {
      if (this._p < 2) {
        if (duration === 0) {
          this._p = 2;
        } else if (duration > 0) {
          if (this._p < 1) {
            this._p += dt / this.settings.duration;
          } else {
            this._p += dt / duration;
          }
        }
        if (this._p >= 2) {
          this._p = 2;
          this._state = Animation.STATES.STOPPED;
          this.emit("stopFinish");
        } else {
          this.emit("progress", this._p);
        }
      }
    } else if (this.settings.stopMethod == AnimationSettings.STOP_METHODS.FORWARD) {
      if (this._p < 1) {
        if (this.settings.duration == 0) {
          this._p = 1;
        } else {
          this._p += dt / this.settings.duration;
        }
        if (this._p >= 1) {
          if (this.settings.stopMethod == AnimationSettings.STOP_METHODS.FORWARD) {
            this._p = 1;
            this._state = Animation.STATES.STOPPED;
            this.emit("stopFinish");
          } else {
            if (this._repeatsLeft > 0) {
              this._repeatsLeft--;
              this._p = 0;
              this.emit("repeat", this._repeatsLeft);
            } else {
              this._p = 1;
              this._state = Animation.STATES.STOPPED;
              this.emit("stopFinish");
            }
          }
        } else {
          this.emit("progress", this._p);
        }
      }
    }
  }
  _progressStopTransition(dt) {
    if (this._stopP < 1) {
      if (this._stopDelayLeft > 0) {
        this._stopDelayLeft -= dt;
        if (this._stopDelayLeft < 0) {
          dt = -this._stopDelayLeft;
          this._stopDelayLeft = 0;
          this.emit("delayEnd");
        } else {
          return;
        }
      }
      const duration = this._getStopDuration();
      if (duration == 0) {
        this._stopP = 1;
      } else {
        this._stopP += dt / duration;
      }
      if (this._stopP >= 1) {
        this._stopP = 1;
      }
    }
  }
  _getStopDuration() {
    return this.settings.stopDuration || this.settings.duration;
  }
  apply() {
    if (this._state === Animation.STATES.STOPPED) {
      this.reset();
    } else {
      let factor = 1;
      if (this._state === Animation.STATES.STOPPING && this.settings.stopMethod === AnimationSettings.STOP_METHODS.FADE) {
        factor = 1 - this.settings.stopTimingFunctionImpl(this._stopP);
      }
      this._settings.apply(this._element, this._p, factor);
    }
  }
  reset() {
    this._settings.reset(this._element);
  }
  get state() {
    return this._state;
  }
  get p() {
    return this._p;
  }
  get delayLeft() {
    return this._delayLeft;
  }
  get element() {
    return this._element;
  }
  get frame() {
    return Math.round(this._p * this._settings.duration * 60);
  }
  get settings() {
    return this._settings;
  }
}
Animation.STATES = {
  IDLE: 0,
  PLAYING: 1,
  STOPPING: 2,
  STOPPED: 3,
  FINISHED: 4,
  PAUSED: 5
};
class AnimationManager {
  constructor(stage) {
    this.stage = stage;
    this.stage.on("frameStart", () => this.progress());
    this.active = /* @__PURE__ */ new Set();
  }
  progress() {
    if (this.active.size) {
      let dt = this.stage.dt;
      let filter = false;
      this.active.forEach(function(a) {
        if (a.isActive()) {
          a.progress(dt);
        } else {
          filter = true;
        }
      });
      if (filter) {
        this.active = new Set([...this.active].filter((t) => t.isActive()));
      }
    }
  }
  createAnimation(element, settings) {
    if (Utils$1.isObjectLiteral(settings)) {
      settings = this.createSettings(settings);
    }
    return new Animation(
      this,
      settings,
      element
    );
  }
  createSettings(settings) {
    const animationSettings = new AnimationSettings();
    Base.patchObject(animationSettings, settings);
    return animationSettings;
  }
  addActive(transition) {
    this.active.add(transition);
  }
}
class RectangleTexture extends Texture {
  _getLookupId() {
    return "__whitepix";
  }
  _getSourceLoader() {
    return function(cb) {
      var whitePixel = new Uint8Array([255, 255, 255, 255]);
      cb(null, { source: whitePixel, w: 1, h: 1, permanent: true });
    };
  }
  isAutosizeTexture() {
    return false;
  }
}
class Stage extends EventEmitter {
  constructor(options = {}) {
    super();
    this._setOptions(options);
    this._usedMemory = 0;
    this._lastGcFrame = 0;
    this._usedVramAlpha = 0;
    this._usedVramNonAlpha = 0;
    const platformType = Stage.platform ? Stage.platform : PlatformLoader.load(options);
    this.platform = new platformType();
    if (this.platform.init) {
      this.platform.init(this);
    }
    this.gl = null;
    this.c2d = null;
    const context = this.getOption("context");
    if (context) {
      if (context.useProgram) {
        this.gl = context;
      } else {
        this.c2d = context;
      }
    } else {
      if (Utils$1.isWeb && (!Stage.isWebglSupported() || this.getOption("canvas2d"))) {
        this.c2d = this.platform.createCanvasContext(this.getOption("w"), this.getOption("h"));
      } else {
        this.gl = this.platform.createWebGLContext(this.getOption("w"), this.getOption("h"));
      }
    }
    if (this.gl) {
      WebGLStateManager.enable(this.gl, "lightning");
    }
    this._mode = this.gl ? 0 : 1;
    if (this.getCanvas()) {
      if (this.getOption("devicePixelRatio") !== 1) {
        const ratio = this.getOption("devicePixelRatio");
        this.getCanvas().style.width = this._options["w"] / ratio + "px";
        this.getCanvas().style.height = this._options["h"] / ratio + "px";
      }
      this._options.w = this.getCanvas().width;
      this._options.h = this.getCanvas().height;
    }
    if (this._mode === 0) {
      if (Utils$1.isSpark) {
        this._renderer = new SparkRenderer(this);
      } else {
        this._renderer = new WebGLRenderer(this);
      }
    } else {
      this._renderer = new C2dRenderer(this);
    }
    this.setClearColor(this.getOption("clearColor"));
    this.frameCounter = 0;
    this.transitions = new TransitionManager(this);
    this.animations = new AnimationManager(this);
    this.textureManager = new TextureManager(this);
    this.textureThrottler = new TextureThrottler(this);
    this.startTime = 0;
    this.currentTime = 0;
    this.dt = 0;
    this.rectangleTexture = new RectangleTexture(this);
    this.rectangleTexture.load();
    this.rectangleTexture.source.permanent = true;
    this.ctx = new CoreContext(this);
    this._updateSourceTextures = /* @__PURE__ */ new Set();
  }
  get renderer() {
    return this._renderer;
  }
  static isWebglSupported() {
    if (Utils$1.isNode) {
      return true;
    }
    try {
      return !!window.WebGLRenderingContext;
    } catch (e) {
      return false;
    }
  }
  get mode() {
    return this._mode;
  }
  isWebgl() {
    return this.mode === 0;
  }
  isC2d() {
    return this.mode === 1;
  }
  getOption(name) {
    return this._options[name];
  }
  _setOptions(o) {
    this._options = {};
    let opt = (name, def) => {
      let value = o[name];
      if (value === void 0) {
        this._options[name] = def;
      } else {
        this._options[name] = value;
      }
    };
    opt("canvas", null);
    opt("context", null);
    opt("w", 1920);
    opt("h", 1080);
    opt("srcBasePath", null);
    opt("memoryPressure", 24e6);
    opt("bufferMemory", 2e6);
    opt("textRenderIssueMargin", 0);
    opt("fontSharp", { precision: 0.6666666667, fontSize: 24 });
    opt("clearColor", [0, 0, 0, 0]);
    opt("defaultFontFace", "sans-serif");
    opt("fixedDt", 0);
    opt("useImageWorker", true);
    opt("autostart", true);
    opt("precision", 1);
    opt("canvas2d", false);
    opt("platform", null);
    opt("readPixelsBeforeDraw", false);
    opt("devicePixelRatio", 1);
    opt("readPixelsAfterDraw", false);
    opt("readPixelsAfterDrawThreshold", 0);
    opt("debugFrame", false);
    opt("forceTxCanvasSource", false);
    opt("pauseRafLoopOnIdle", false);
    if (o["devicePixelRatio"] != null && o["devicePixelRatio"] !== 1) {
      this._options["precision"] *= o["devicePixelRatio"];
      this._options["w"] *= o["devicePixelRatio"];
      this._options["h"] *= o["devicePixelRatio"];
    }
  }
  setApplication(app) {
    this.application = app;
  }
  init() {
    if (this.application.getOption("debug") && this.platform._imageWorker) {
      console.log("[Lightning] Using image worker!");
    }
    if (this.application.getOption("debug") && this.c2d) {
      console.log("[Lightning] Using canvas2d renderer");
    }
    this.application.setAsRoot();
    if (this.getOption("autostart")) {
      this.platform.startLoop();
    }
  }
  destroy() {
    this.platform.stopLoop();
    this.platform.destroy();
    this.ctx.destroy();
    this.textureManager.destroy();
    this._renderer.destroy();
    if (this.gl) {
      this.gl.clearColor(0, 0, 0, 0);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    } else if (this.c2d) {
      this.c2d.clearRect(
        0,
        0,
        this.c2d.canvas.width,
        this.c2d.canvas.height
      );
    }
    this.gl = null;
    this.c2d = null;
    this.ctx = null;
    this._options = null;
    this.platform = null;
    this.textureManager = null;
    this._renderer = null;
    delete this.gl;
    delete this.c2d;
    delete this.ctx;
    delete this._options;
    delete this.platform;
    delete this.textureManager;
    delete this._renderer;
  }
  stop() {
    this.platform.stopLoop();
  }
  resume() {
    this.platform.startLoop();
  }
  get root() {
    return this.application;
  }
  getCanvas() {
    return this._mode ? this.c2d.canvas : this.gl.canvas;
  }
  getRenderPrecision() {
    return this._options.precision;
  }
  addUpdateSourceTexture(texture) {
    if (this._updatingFrame) {
      texture._performUpdateSource();
    } else {
      this._updateSourceTextures.add(texture);
    }
  }
  removeUpdateSourceTexture(texture) {
    if (this._updateSourceTextures) {
      this._updateSourceTextures.delete(texture);
    }
  }
  hasUpdateSourceTexture(texture) {
    return this._updateSourceTextures && this._updateSourceTextures.has(texture);
  }
  _performUpdateSource() {
    if (this._updateSourceTextures.size) {
      this._updateSourceTextures.forEach((texture) => {
        texture._performUpdateSource();
      });
      this._updateSourceTextures = /* @__PURE__ */ new Set();
    }
  }
  _calculateDt() {
    this.startTime = this.currentTime;
    this.currentTime = this.platform.getHrTime();
    if (this._options.fixedDt) {
      this.dt = this._options.fixedDt;
    } else {
      this.dt = !this.startTime ? 0.02 : 1e-3 * (this.currentTime - this.startTime);
    }
  }
  updateFrame() {
    this._calculateDt();
    this.emit("frameStart");
    this._performUpdateSource();
    this.emit("update");
  }
  idleFrame() {
    this.textureThrottler.processSome();
    this.emit("frameEnd");
    this.frameCounter++;
  }
  renderFrame() {
    const changes = this.ctx.hasRenderUpdates();
    this.textureThrottler.processSome();
    if (changes) {
      this._updatingFrame = true;
      this.ctx.update();
      this.ctx.render();
      this._updatingFrame = false;
    }
    this.platform.nextFrame(changes);
    this.emit("frameEnd");
    this.frameCounter++;
  }
  isUpdatingFrame() {
    return this._updatingFrame;
  }
  drawFrame() {
    this.updateFrame();
    this.renderFrame();
  }
  forceRenderUpdate() {
    if (this.root) {
      this.root.core._parent.setHasRenderUpdates(1);
    }
  }
  setClearColor(clearColor) {
    this.forceRenderUpdate();
    if (clearColor === null) {
      this._clearColor = null;
    } else if (Array.isArray(clearColor)) {
      this._clearColor = clearColor;
    } else {
      this._clearColor = StageUtils.getRgbaComponentsNormalized(clearColor);
    }
  }
  getClearColor() {
    return this._clearColor;
  }
  createElement(settings) {
    if (settings) {
      return this.element(settings);
    } else {
      return new Element(this);
    }
  }
  createShader(settings) {
    return Shader.create(this, settings);
  }
  element(settings) {
    if (settings.isElement)
      return settings;
    let element;
    if (settings.type) {
      element = new settings.type(this);
    } else {
      element = new Element(this);
    }
    element.patch(settings);
    return element;
  }
  c(settings) {
    return this.element(settings);
  }
  get w() {
    return this._options.w;
  }
  get h() {
    return this._options.h;
  }
  get coordsWidth() {
    return this.w / this._options.precision;
  }
  get coordsHeight() {
    return this.h / this._options.precision;
  }
  addMemoryUsage(delta) {
    this._usedMemory += delta;
    if (this._lastGcFrame !== this.frameCounter) {
      if (this._usedMemory > this.getOption("memoryPressure")) {
        this.gc(false);
        if (this._usedMemory > this.getOption("memoryPressure") - 2e6) {
          this.gc(true);
        }
      }
    }
  }
  get usedMemory() {
    return this._usedMemory;
  }
  addVramUsage(delta, alpha) {
    if (alpha) {
      this._usedVramAlpha += delta;
    } else {
      this._usedVramNonAlpha += delta;
    }
  }
  get usedVramAlpha() {
    return this._usedVramAlpha;
  }
  get usedVramNonAlpha() {
    return this._usedVramNonAlpha;
  }
  get usedVram() {
    return this._usedVramAlpha + this._usedVramNonAlpha;
  }
  gc(aggressive) {
    if (this._lastGcFrame !== this.frameCounter) {
      this._lastGcFrame = this.frameCounter;
      const memoryUsageBefore = this._usedMemory;
      this.gcTextureMemory(aggressive);
      this.gcRenderTextureMemory(aggressive);
      this.renderer.gc(aggressive);
      if (this.application.getOption("debug")) {
        console.log(`[Lightning] GC${aggressive ? "[aggressive]" : ""}! Frame ${this._lastGcFrame} Freed ${((memoryUsageBefore - this._usedMemory) / 1e6).toFixed(2)}MP from GPU memory. Remaining: ${(this._usedMemory / 1e6).toFixed(2)}MP`);
        const other = this._usedMemory - this.textureManager.usedMemory - this.ctx.usedMemory;
        console.log(`[Lightning] Textures: ${(this.textureManager.usedMemory / 1e6).toFixed(2)}MP, Render Textures: ${(this.ctx.usedMemory / 1e6).toFixed(2)}MP, Renderer caches: ${(other / 1e6).toFixed(2)}MP`);
      }
    }
  }
  gcTextureMemory(aggressive = false) {
    if (aggressive && this.ctx.root.visible) {
      this.ctx.root.visible = false;
      this.textureManager.gc();
      this.ctx.root.visible = true;
    } else {
      this.textureManager.gc();
    }
  }
  gcRenderTextureMemory(aggressive = false) {
    if (aggressive && this.root.visible) {
      this.root.visible = false;
      this.ctx.freeUnusedRenderTextures(0);
      this.root.visible = true;
    } else {
      this.ctx.freeUnusedRenderTextures(0);
    }
  }
  getDrawingCanvas() {
    return this.platform.getDrawingCanvas();
  }
  update() {
    this.ctx.update();
  }
  addServiceProvider(serviceprovider) {
    if (Utils$1.isSpark) {
      this.platform.addServiceProvider(serviceprovider);
    }
  }
  getChildrenByPosition(x, y) {
    const children = [];
    this.root.core.update();
    this.root.core.collectAtCoord(x, y, children);
    return children;
  }
}
class Application extends Component {
  constructor(options = {}, properties) {
    Application._temp_options = options;
    Application.booting = true;
    const stage = new Stage(options.stage);
    super(stage, properties);
    Application.booting = false;
    this.__updateFocusCounter = 0;
    this.__keypressTimers = /* @__PURE__ */ new Map();
    this.__hoveredChild = null;
    this.stage.init();
    this.updateFocusSettings();
    this.__keymap = this.getOption("keys");
    if (this.__keymap) {
      this.stage.platform.registerKeydownHandler((e) => {
        this._receiveKeydown(e);
      });
      this.stage.platform.registerKeyupHandler((e) => {
        this._receiveKeyup(e);
      });
    }
    if (this.getOption("enablePointer")) {
      this.stage.platform.registerClickHandler((e) => {
        this._receiveClick(e);
      });
      this.stage.platform.registerHoverHandler((e) => {
        this._receiveHover(e);
      });
      this.stage.platform.registerScrollWheelHandler((e) => {
        this._recieveScrollWheel(e);
      });
      this.cursor = "default";
    }
  }
  getOption(name) {
    return this.__options[name];
  }
  _setOptions(o) {
    this.__options = {};
    let opt = (name, def) => {
      let value = o[name];
      if (value === void 0) {
        this.__options[name] = def;
      } else {
        this.__options[name] = value;
      }
    };
    opt("debug", false);
    opt("keys", {
      38: "Up",
      40: "Down",
      37: "Left",
      39: "Right",
      13: "Enter",
      8: "Back",
      27: "Exit"
    });
    opt("enablePointer", false);
  }
  __construct() {
    this.stage.setApplication(this);
    this._setOptions(Application._temp_options);
    delete Application._temp_options;
    super.__construct();
  }
  __init() {
    super.__init();
    this.__updateFocus();
  }
  updateFocusPath() {
    this.__updateFocus();
  }
  __updateFocus() {
    const notOverridden = this.__updateFocusRec();
    if (!Application.booting && notOverridden) {
      this.updateFocusSettings();
    }
  }
  __updateFocusRec() {
    const updateFocusId = ++this.__updateFocusCounter;
    this.__updateFocusId = updateFocusId;
    const newFocusPath = this.__getFocusPath();
    const newFocusedComponent = newFocusPath[newFocusPath.length - 1];
    const prevFocusedComponent = this._focusPath ? this._focusPath[this._focusPath.length - 1] : void 0;
    if (!prevFocusedComponent) {
      this._focusPath = [];
      for (let i = 0, n = newFocusPath.length; i < n; i++) {
        this._focusPath.push(newFocusPath[i]);
        this._focusPath[i]._focus(newFocusedComponent, void 0);
        const focusOverridden = this.__updateFocusId !== updateFocusId;
        if (focusOverridden) {
          return false;
        }
      }
      return true;
    } else {
      let m = Math.min(this._focusPath.length, newFocusPath.length);
      let index;
      for (index = 0; index < m; index++) {
        if (this._focusPath[index] !== newFocusPath[index]) {
          break;
        }
      }
      if (this._focusPath.length !== newFocusPath.length || index !== newFocusPath.length) {
        if (this.getOption("debug")) {
          console.log("[Lightning] Focus changed: " + newFocusedComponent.getLocationString());
        }
        for (let i = this._focusPath.length - 1; i >= index; i--) {
          const unfocusedElement = this._focusPath.pop();
          unfocusedElement._unfocus(newFocusedComponent, prevFocusedComponent);
          const focusOverridden = this.__updateFocusId !== updateFocusId;
          if (focusOverridden) {
            return false;
          }
        }
        for (let i = index, n = newFocusPath.length; i < n; i++) {
          this._focusPath.push(newFocusPath[i]);
          this._focusPath[i]._focus(newFocusedComponent, prevFocusedComponent);
          const focusOverridden = this.__updateFocusId !== updateFocusId;
          if (focusOverridden) {
            return false;
          }
        }
        for (let i = 0; i < index; i++) {
          this._focusPath[i]._focusChange(newFocusedComponent, prevFocusedComponent);
        }
      }
    }
    return true;
  }
  updateFocusSettings() {
    const focusedComponent = this._focusPath[this._focusPath.length - 1];
    const focusSettings = {};
    const defaultSetFocusSettings = Component.prototype._setFocusSettings;
    for (let i = 0, n = this._focusPath.length; i < n; i++) {
      if (this._focusPath[i]._setFocusSettings !== defaultSetFocusSettings) {
        this._focusPath[i]._setFocusSettings(focusSettings);
      }
    }
    const defaultHandleFocusSettings = Component.prototype._handleFocusSettings;
    for (let i = 0, n = this._focusPath.length; i < n; i++) {
      if (this._focusPath[i]._handleFocusSettings !== defaultHandleFocusSettings) {
        this._focusPath[i]._handleFocusSettings(focusSettings, this.__prevFocusSettings, focusedComponent);
      }
    }
    this.__prevFocusSettings = focusSettings;
  }
  _handleFocusSettings(settings, prevSettings, focused, prevFocused) {
  }
  __getFocusPath() {
    const path = [this];
    let current = this;
    do {
      const nextFocus = current._getFocused();
      if (!nextFocus || nextFocus === current) {
        break;
      }
      let ptr = nextFocus.cparent;
      if (ptr === current) {
        path.push(nextFocus);
      } else {
        const newParts = [nextFocus];
        do {
          if (!ptr) {
            current._throwError("Return value for _getFocused must be an attached descendant component but its '" + nextFocus.getLocationString() + "'");
          }
          newParts.push(ptr);
          ptr = ptr.cparent;
        } while (ptr !== current);
        for (let i = 0, n = newParts.length; i < n; i++) {
          path.push(newParts[n - i - 1]);
        }
      }
      current = nextFocus;
    } while (true);
    return path;
  }
  get focusPath() {
    return this._focusPath;
  }
  focusTopDownEvent(events, ...args) {
    const path = this.focusPath;
    const n = path.length;
    for (let i = 0; i < n; i++) {
      const event = path[i]._getMostSpecificHandledMember(events);
      if (event !== void 0) {
        const returnValue = path[i][event](...args);
        if (returnValue !== false) {
          return true;
        }
      }
    }
    return false;
  }
  focusBottomUpEvent(events, ...args) {
    const path = this.focusPath;
    const n = path.length;
    for (let i = n - 1; i >= 0; i--) {
      const event = path[i]._getMostSpecificHandledMember(events);
      if (event !== void 0) {
        const returnValue = path[i][event](...args);
        if (returnValue !== false) {
          return true;
        }
      }
    }
    return false;
  }
  _receiveKeydown(e) {
    const obj = e;
    const key = this.__keymap[e.keyCode];
    const path = this.focusPath;
    let keys;
    if (key) {
      keys = Array.isArray(key) ? key : [key];
    }
    if (keys) {
      for (let i = 0, n = keys.length; i < n; i++) {
        const hasTimer = this.__keypressTimers.has(keys[i]);
        if (path[path.length - 1].longpress && hasTimer) {
          return;
        }
        if (!this.stage.application.focusTopDownEvent([`_capture${keys[i]}`, "_captureKey"], obj)) {
          this.stage.application.focusBottomUpEvent([`_handle${keys[i]}`, "_handleKey"], obj);
        }
      }
    } else {
      if (!this.stage.application.focusTopDownEvent(["_captureKey"], obj)) {
        this.stage.application.focusBottomUpEvent(["_handleKey"], obj);
      }
    }
    this.updateFocusPath();
    const consumer = path[path.length - 1];
    if (keys && consumer.longpress) {
      for (let i = 0, n = keys.length; i < n; i++) {
        this._startLongpressTimer(keys[i], consumer);
      }
    }
  }
  _receiveKeyup(e) {
    const obj = e;
    const key = this.__keymap[e.keyCode];
    let keys;
    if (key) {
      keys = Array.isArray(key) ? key : [key];
    }
    if (keys) {
      for (let i = 0, n = keys.length; i < n; i++) {
        if (!this.stage.application.focusTopDownEvent([`_capture${keys[i]}Release`, "_captureKeyRelease"], obj)) {
          this.stage.application.focusBottomUpEvent([`_handle${keys[i]}Release`, "_handleKeyRelease"], obj);
        }
      }
    } else {
      if (!this.stage.application.focusTopDownEvent(["_captureKeyRelease"], obj)) {
        this.stage.application.focusBottomUpEvent(["_handleKeyRelease"], obj);
      }
    }
    this.updateFocusPath();
    if (keys) {
      for (let i = 0, n = keys.length; i < n; i++) {
        if (this.__keypressTimers.has(keys[i])) {
          clearTimeout(this.__keypressTimers.get(keys[i]));
          this.__keypressTimers.delete(keys[i]);
        }
      }
    }
  }
  _startLongpressTimer(key, element) {
    const config = element.longpress;
    const lookup = key.toLowerCase();
    if (config[lookup]) {
      const timeout = config[lookup];
      if (!Utils$1.isNumber(timeout)) {
        element._throwError("config value for longpress must be a number");
      } else {
        this.__keypressTimers.set(key, setTimeout(() => {
          if (!this.stage.application.focusTopDownEvent([`_capture${key}Long`, "_captureKey"], {})) {
            this.stage.application.focusBottomUpEvent([`_handle${key}Long`, "_handleKey"], {});
          }
          this.__keypressTimers.delete(key);
        }, timeout || 500));
      }
    }
    return;
  }
  _recieveScrollWheel(e) {
    const obj = e;
    const { clientX, clientY } = obj;
    if (clientX <= this.stage.w && clientY <= this.stage.h) {
      if (!this.fireTopDownScrollWheelHandler("_captureScroll", obj)) {
        this.fireBottomUpScrollWheelHandler("_handleScroll", obj);
      }
    }
  }
  fireTopDownScrollWheelHandler(event, obj) {
    let children = this.stage.application.children;
    let affected = this._findChildren([], children).reverse();
    let n = affected.length;
    while (n--) {
      const child = affected[n];
      if (child && child[event]) {
        child._captureScroll(obj);
        return true;
      }
    }
    return false;
  }
  fireBottomUpScrollWheelHandler(event, obj) {
    const { clientX, clientY } = obj;
    const target = this._getTargetChild(clientX, clientY);
    let child = target;
    while (child !== null) {
      if (child && child[event]) {
        child._handleScroll(obj);
        return true;
      }
      child = child.parent;
    }
    return false;
  }
  _receiveClick(e) {
    const obj = e;
    const { clientX, clientY } = obj;
    if (clientX <= this.stage.w && clientY <= this.stage.h) {
      this.stage.application.fireBottomUpClickHandler(obj);
    }
  }
  fireBottomUpClickHandler(obj) {
    const { clientX, clientY } = obj;
    const target = this._getTargetChild(clientX, clientY);
    const precision = this.stage.getRenderPrecision() / this.stage.getOption("devicePixelRatio");
    let child = target;
    while (child !== null) {
      if (child && child["_handleClick"]) {
        const { px, py } = child.core._worldContext;
        const cx = px * precision;
        const cy = py * precision;
        const localCoords = {
          x: clientX - cx,
          y: clientY - cy
        };
        const returnValue = child._handleClick(target, localCoords);
        if (returnValue !== false) {
          break;
        }
      }
      child = child.parent;
    }
  }
  _receiveHover(e) {
    const obj = e;
    const { clientX, clientY } = obj;
    if (clientX <= this.stage.w && clientY <= this.stage.h) {
      this.stage.application.fireBottomUpHoverHandler(obj);
    }
  }
  fireBottomUpHoverHandler(obj) {
    const { clientX, clientY } = obj;
    const target = this._getTargetChild(clientX, clientY);
    if (target !== this.__hoveredChild) {
      let hoveredBranch = /* @__PURE__ */ new Set();
      let newHoveredBranch = /* @__PURE__ */ new Set();
      if (target) {
        newHoveredBranch = new Set(target.getAncestors());
      }
      if (this.__hoveredChild) {
        hoveredBranch = new Set(this.__hoveredChild.getAncestors());
        for (const elem of [...hoveredBranch].filter((e) => !newHoveredBranch.has(e))) {
          const c = Component.getComponent(elem);
          if (c["_handleUnhover"]) {
            c._handleUnhover(elem);
          }
          if (elem.parent && elem.parent.cursor) {
            this.stage.getCanvas().style.cursor = elem.parent.cursor;
          }
        }
      }
      this.__hoveredChild = target;
      const diffBranch = [...newHoveredBranch].filter((e) => !hoveredBranch.has(e));
      for (const elem of diffBranch) {
        const c = Component.getComponent(elem);
        if (c["_handleHover"]) {
          c._handleHover(elem);
        }
      }
      const lastElement = diffBranch[0];
      if (lastElement && lastElement.cursor) {
        this.stage.getCanvas().style.cursor = lastElement.cursor;
      }
      if (diffBranch.length === 0 && target) {
        const c = Component.getComponent(target);
        if (c["_handleHover"]) {
          c._handleHover(target);
        }
      }
    }
  }
  _getTargetChild(clientX, clientY) {
    let children = this.stage.application.children;
    let affected = this._findChildren([], children);
    let hoverableChildren = this._withinClickableRange(affected, clientX, clientY);
    hoverableChildren.sort((a, b) => {
      if (a.zIndex > b.zIndex) {
        return 1;
      } else if (a.zIndex < b.zIndex) {
        return -1;
      } else {
        return a.id > b.id ? 1 : -1;
      }
    });
    if (hoverableChildren.length) {
      return hoverableChildren.slice(-1)[0];
    } else {
      return null;
    }
  }
  _findChildren(bucket, children) {
    let n = children.length;
    while (n--) {
      const child = children[n];
      if (child.__active && child.collision) {
        if (child.collision === true) {
          bucket.push(child);
        }
        if (child.hasChildren()) {
          this._findChildren(bucket, child.children);
        }
      }
    }
    return bucket;
  }
  _withinClickableRange(affectedChildren, cursorX, cursorY) {
    let n = affectedChildren.length;
    const candidates = [];
    while (n--) {
      const child = affectedChildren[n];
      const precision = this.stage.getRenderPrecision() / this.stage.getOption("devicePixelRatio");
      const ctx = child.core._worldContext;
      const cx = ctx.px * precision;
      const cy = ctx.py * precision;
      const cw = child.finalW * ctx.ta * precision;
      const ch = child.finalH * ctx.td * precision;
      if (cx > this.stage.w || cy > this.stage.h) {
        continue;
      }
      if (child.parent.core._scissor) {
        const scissor = child.parent.core._scissor.map((v) => v * precision);
        if (!this._testCollision(cursorX, cursorY, ...scissor))
          continue;
      }
      if (this._testCollision(cursorX, cursorY, cx, cy, cw, ch)) {
        candidates.push(child);
      }
    }
    return candidates;
  }
  _testCollision(px, py, cx, cy, cw, ch) {
    if (px >= cx && px <= cx + cw && py >= cy && py <= cy + ch) {
      return true;
    }
    return false;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroy();
      this.stage.destroy();
      this._destroyed = true;
    }
  }
  _destroy() {
    this.stage.setApplication(void 0);
    this._updateAttachedFlag();
    this._updateEnabledFlag();
    if (this.__keypressTimers.size) {
      for (const timer of this.__keypressTimers.values()) {
        clearTimeout(timer);
      }
      this.__keypressTimers.clear();
    }
  }
  getCanvas() {
    return this.stage.getCanvas();
  }
}
class StaticCanvasTexture extends Texture {
  constructor(stage) {
    super(stage);
    this._factory = void 0;
    this._lookupId = void 0;
  }
  set content({ factory, lookupId = void 0 }) {
    this._factory = factory;
    this._lookupId = lookupId;
    this._changed();
  }
  _getIsValid() {
    return !!this._factory;
  }
  _getLookupId() {
    return this._lookupId;
  }
  _getSourceLoader() {
    const f = this._factory;
    return (cb) => {
      return f((err, canvas) => {
        if (err) {
          return cb(err);
        }
        cb(null, this.stage.platform.getTextureOptionsForDrawingCanvas(canvas));
      }, this.stage);
    };
  }
}
class Tools {
  static getCanvasTexture(canvasFactory, lookupId) {
    return { type: StaticCanvasTexture, content: { factory: canvasFactory, lookupId } };
  }
  static getRoundRect(w, h, radius, strokeWidth, strokeColor, fill, fillColor) {
    if (!Array.isArray(radius)) {
      radius = [radius, radius, radius, radius];
    }
    let factory = (cb, stage) => {
      if (Utils$1.isSpark) {
        stage.platform.createRoundRect(cb, stage, w, h, radius, strokeWidth, strokeColor, fill, fillColor);
      } else {
        cb(null, this.createRoundRect(stage, w, h, radius, strokeWidth, strokeColor, fill, fillColor));
      }
    };
    let id = "rect" + [w, h, strokeWidth, strokeColor, fill ? 1 : 0, fillColor].concat(radius).join(",");
    return Tools.getCanvasTexture(factory, id);
  }
  static createRoundRect(stage, w, h, radius, strokeWidth, strokeColor, fill, fillColor) {
    if (fill === void 0)
      fill = true;
    if (strokeWidth === void 0)
      strokeWidth = 0;
    let canvas = stage.platform.getDrawingCanvas();
    let ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    canvas.width = w + strokeWidth + 2;
    canvas.height = h + strokeWidth + 2;
    ctx.beginPath();
    let x = 0.5 * strokeWidth + 1, y = 0.5 * strokeWidth + 1;
    ctx.moveTo(x + radius[0], y);
    ctx.lineTo(x + w - radius[1], y);
    ctx.arcTo(x + w, y, x + w, y + radius[1], radius[1]);
    ctx.lineTo(x + w, y + h - radius[2]);
    ctx.arcTo(x + w, y + h, x + w - radius[2], y + h, radius[2]);
    ctx.lineTo(x + radius[3], y + h);
    ctx.arcTo(x, y + h, x, y + h - radius[3], radius[3]);
    ctx.lineTo(x, y + radius[0]);
    ctx.arcTo(x, y, x + radius[0], y, radius[0]);
    ctx.closePath();
    if (fill) {
      if (Utils$1.isNumber(fillColor)) {
        ctx.fillStyle = StageUtils.getRgbaString(fillColor);
      } else {
        ctx.fillStyle = "white";
      }
      ctx.fill();
    }
    if (strokeWidth) {
      if (Utils$1.isNumber(strokeColor)) {
        ctx.strokeStyle = StageUtils.getRgbaString(strokeColor);
      } else {
        ctx.strokeStyle = "white";
      }
      ctx.lineWidth = strokeWidth;
      ctx.stroke();
    }
    return canvas;
  }
  static getShadowRect(w, h, radius = 0, blur = 5, margin = blur * 2) {
    if (!Array.isArray(radius)) {
      radius = [radius, radius, radius, radius];
    }
    let factory = (cb, stage) => {
      if (Utils$1.isSpark) {
        stage.platform.createShadowRect(cb, stage, w, h, radius, blur, margin);
      } else {
        cb(null, this.createShadowRect(stage, w, h, radius, blur, margin));
      }
    };
    let id = "shadow" + [w, h, blur, margin].concat(radius).join(",");
    return Tools.getCanvasTexture(factory, id);
  }
  static createShadowRect(stage, w, h, radius, blur, margin) {
    let canvas = stage.platform.getDrawingCanvas();
    let ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    canvas.width = w + margin * 2;
    canvas.height = h + margin * 2;
    ctx.globalAlpha = 0.01;
    ctx.fillRect(0, 0, 0.01, 0.01);
    ctx.globalAlpha = 1;
    ctx.shadowColor = StageUtils.getRgbaString(4294967295);
    ctx.fillStyle = StageUtils.getRgbaString(4294967295);
    ctx.shadowBlur = blur;
    ctx.shadowOffsetX = w + 10 + margin;
    ctx.shadowOffsetY = margin;
    ctx.beginPath();
    const x = -(w + 10);
    const y = 0;
    ctx.moveTo(x + radius[0], y);
    ctx.lineTo(x + w - radius[1], y);
    ctx.arcTo(x + w, y, x + w, y + radius[1], radius[1]);
    ctx.lineTo(x + w, y + h - radius[2]);
    ctx.arcTo(x + w, y + h, x + w - radius[2], y + h, radius[2]);
    ctx.lineTo(x + radius[3], y + h);
    ctx.arcTo(x, y + h, x, y + h - radius[3], radius[3]);
    ctx.lineTo(x, y + radius[0]);
    ctx.arcTo(x, y, x + radius[0], y, radius[0]);
    ctx.closePath();
    ctx.fill();
    return canvas;
  }
  static getSvgTexture(url, w, h) {
    let factory = (cb, stage) => {
      if (Utils$1.isSpark) {
        stage.platform.createSvg(cb, stage, url, w, h);
      } else {
        this.createSvg(cb, stage, url, w, h);
      }
    };
    let id = "svg" + [w, h, url].join(",");
    return Tools.getCanvasTexture(factory, id);
  }
  static createSvg(cb, stage, url, w, h) {
    let canvas = stage.platform.getDrawingCanvas();
    let ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    let img = new Image();
    img.onload = () => {
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      cb(null, canvas);
    };
    img.onError = (err) => {
      cb(err);
    };
    if (!Utils$1.isPS4) {
      img.crossOrigin = "Anonymous";
    }
    img.src = url;
  }
}
class ObjMerger {
  static isMf(f) {
    return Utils$1.isFunction(f) && f.__mf;
  }
  static mf(f) {
    f.__mf = true;
    return f;
  }
  static merge(a, b) {
    const aks = Object.keys(a);
    const bks = Object.keys(b);
    if (!bks.length) {
      return a;
    }
    const ai = {};
    const bi = {};
    for (let i = 0, n = bks.length; i < n; i++) {
      const key = bks[i];
      ai[key] = -1;
      bi[key] = i;
    }
    for (let i = 0, n = aks.length; i < n; i++) {
      const key = aks[i];
      ai[key] = i;
      if (bi[key] === void 0) {
        bi[key] = -1;
      }
    }
    const aksl = aks.length;
    const result = {};
    for (let i = 0, n = bks.length; i < n; i++) {
      const key = bks[i];
      const aIndex = ai[key];
      let curIndex2 = aIndex;
      while (--curIndex2 >= 0) {
        const akey = aks[curIndex2];
        if (bi[akey] !== -1) {
          break;
        }
      }
      while (++curIndex2 < aIndex) {
        const akey = aks[curIndex2];
        result[akey] = a[akey];
      }
      const bv = b[key];
      const av = a[key];
      let r;
      if (this.isMf(bv)) {
        r = bv(av);
      } else {
        if (!Utils$1.isObjectLiteral(av) || !Utils$1.isObjectLiteral(bv)) {
          r = bv;
        } else {
          r = ObjMerger.merge(av, bv);
        }
      }
      if (r !== void 0) {
        result[key] = r;
      }
    }
    let curIndex = aksl;
    while (--curIndex >= 0) {
      const akey = aks[curIndex];
      if (bi[akey] !== -1) {
        break;
      }
    }
    while (++curIndex < aksl) {
      const akey = aks[curIndex];
      result[akey] = a[akey];
    }
    return result;
  }
}
class ObjectListProxy extends ObjectList {
  constructor(target) {
    super();
    this._target = target;
  }
  onAdd(item, index) {
    this._target.addAt(item, index);
  }
  onRemove(item, index) {
    this._target.removeAt(index);
  }
  onSync(removed, added, order) {
    this._target._setByArray(order);
  }
  onSet(item, index) {
    this._target.setAt(item, index);
  }
  onMove(item, fromIndex, toIndex) {
    this._target.setAt(item, toIndex);
  }
  createItem(object) {
    return this._target.createItem(object);
  }
  isItem(object) {
    return this._target.isItem(object);
  }
}
class ObjectListWrapper extends ObjectListProxy {
  constructor(target, wrap) {
    super(target);
    this._wrap = wrap;
  }
  wrap(item) {
    let wrapper = this._wrap(item);
    item._wrapper = wrapper;
    return wrapper;
  }
  onAdd(item, index) {
    item = this.wrap(item);
    super.onAdd(item, index);
  }
  onRemove(item, index) {
    super.onRemove(item, index);
  }
  onSync(removed, added, order) {
    added.forEach((a) => this.wrap(a));
    order = order.map((a) => a._wrapper);
    super.onSync(removed, added, order);
  }
  onSet(item, index) {
    item = this.wrap(item);
    super.onSet(item, index);
  }
  onMove(item, fromIndex, toIndex) {
    super.onMove(item, fromIndex, toIndex);
  }
}
class NoiseTexture extends Texture {
  _getLookupId() {
    return "__noise";
  }
  _getSourceLoader() {
    const gl = this.stage.gl;
    return function(cb) {
      const noise = new Uint8Array(128 * 128 * 4);
      for (let i = 0; i < 128 * 128 * 4; i += 4) {
        const v = Math.floor(Math.random() * 256);
        noise[i] = v;
        noise[i + 1] = v;
        noise[i + 2] = v;
        noise[i + 3] = 255;
      }
      const texParams = {};
      if (gl) {
        texParams[gl.TEXTURE_WRAP_S] = gl.REPEAT;
        texParams[gl.TEXTURE_WRAP_T] = gl.REPEAT;
        texParams[gl.TEXTURE_MIN_FILTER] = gl.NEAREST;
        texParams[gl.TEXTURE_MAG_FILTER] = gl.NEAREST;
      }
      cb(null, { source: noise, w: 128, h: 128, texParams });
    };
  }
}
class HtmlTexture extends Texture {
  constructor(stage) {
    super(stage);
    this._htmlElement = void 0;
    this._scale = 1;
  }
  set htmlElement(v) {
    this._htmlElement = v;
    this._changed();
  }
  get htmlElement() {
    return this._htmlElement;
  }
  set scale(v) {
    this._scale = v;
    this._changed();
  }
  get scale() {
    return this._scale;
  }
  set html(v) {
    if (!v) {
      this.htmlElement = void 0;
    } else {
      const d = document.createElement("div");
      d.innerHTML = "<div>" + v + "</div>";
      this.htmlElement = d.firstElementChild;
    }
  }
  get html() {
    return this._htmlElement.innerHTML;
  }
  _getIsValid() {
    return this.htmlElement;
  }
  _getLookupId() {
    return this._scale + ":" + this._htmlElement.innerHTML;
  }
  _getSourceLoader() {
    const htmlElement = this._htmlElement;
    const scale = this._scale;
    return function(cb) {
      if (!window.html2canvas) {
        return cb(new Error("Please include html2canvas (https://html2canvas.hertzen.com/)"));
      }
      const area = HtmlTexture.getPreloadArea();
      area.appendChild(htmlElement);
      html2canvas(htmlElement, { backgroundColor: null, scale }).then(function(canvas) {
        area.removeChild(htmlElement);
        if (canvas.height === 0) {
          return cb(new Error("Canvas height is 0"));
        }
        cb(null, { source: canvas, width: canvas.width, height: canvas.height });
      }).catch((e) => {
        console.error("[Lightning]", e);
      });
    };
  }
  static getPreloadArea() {
    if (!this._preloadArea) {
      this._preloadArea = document.createElement("div");
      if (this._preloadArea.attachShadow) {
        this._preloadArea.attachShadow({ mode: "closed" });
      }
      this._preloadArea.style.opacity = 0;
      this._preloadArea.style.pointerEvents = "none";
      this._preloadArea.style.position = "fixed";
      this._preloadArea.style.display = "block";
      this._preloadArea.style.top = "100vh";
      this._preloadArea.style.overflow = "hidden";
      document.body.appendChild(this._preloadArea);
    }
    return this._preloadArea;
  }
}
class StaticTexture extends Texture {
  constructor(stage, options) {
    super(stage);
    this._options = options;
  }
  set options(v) {
    if (this._options !== v) {
      this._options = v;
      this._changed();
    }
  }
  get options() {
    return this._options;
  }
  _getIsValid() {
    return !!this._options;
  }
  _getSourceLoader() {
    return (cb) => {
      cb(null, this._options);
    };
  }
}
class ListComponent extends Component {
  constructor(stage) {
    super(stage);
    this._wrapper = super._children.a({});
    this._reloadVisibleElements = false;
    this._visibleItems = /* @__PURE__ */ new Set();
    this._index = 0;
    this._started = false;
    this._scrollTransitionSettings = this.stage.transitions.createSettings({});
    this._itemSize = 100;
    this._viewportScrollOffset = 0;
    this._itemScrollOffset = 0;
    this._roll = false;
    this._rollMin = 0;
    this._rollMax = 0;
    this._progressAnimation = null;
    this._invertDirection = false;
    this._horizontal = true;
    this.itemList = new ListItems(this);
  }
  _allowChildrenAccess() {
    return false;
  }
  get items() {
    return this.itemList.get();
  }
  set items(children) {
    this.itemList.patch(children);
  }
  start() {
    this._wrapper.transition(this.property, this._scrollTransitionSettings);
    this._scrollTransition = this._wrapper.transition(this.property);
    this._scrollTransition.on("progress", (p) => this.update());
    this.setIndex(0, true, true);
    this._started = true;
    this.update();
  }
  setIndex(index, immediate = false, closest = false) {
    let nElements = this.length;
    if (!nElements)
      return;
    this.emit("unfocus", this.getElement(this.realIndex), this._index, this.realIndex);
    if (closest) {
      let offset = Utils$1.getModuloIndex(index, nElements);
      let o = Utils$1.getModuloIndex(this.index, nElements);
      let diff = offset - o;
      if (diff > 0.5 * nElements) {
        diff -= nElements;
      } else if (diff < -0.5 * nElements) {
        diff += nElements;
      }
      this._index += diff;
    } else {
      this._index = index;
    }
    if (this._roll || this.viewportSize > this._itemSize * nElements) {
      this._index = Utils$1.getModuloIndex(this._index, nElements);
    }
    let direction = this._horizontal ^ this._invertDirection ? -1 : 1;
    let value = direction * this._index * this._itemSize;
    if (this._roll) {
      let min, max, scrollDelta;
      if (direction == 1) {
        max = (nElements - 1) * this._itemSize;
        scrollDelta = this._viewportScrollOffset * this.viewportSize - this._itemScrollOffset * this._itemSize;
        max -= scrollDelta;
        min = this.viewportSize - (this._itemSize + scrollDelta);
        if (this._rollMin)
          min -= this._rollMin;
        if (this._rollMax)
          max += this._rollMax;
        value = Math.max(Math.min(value, max), min);
      } else {
        max = nElements * this._itemSize - this.viewportSize;
        scrollDelta = this._viewportScrollOffset * this.viewportSize - this._itemScrollOffset * this._itemSize;
        max += scrollDelta;
        let min2 = scrollDelta;
        if (this._rollMin)
          min2 -= this._rollMin;
        if (this._rollMax)
          max += this._rollMax;
        value = Math.min(Math.max(-max, value), -min2);
      }
    }
    this._scrollTransition.start(value);
    if (immediate) {
      this._scrollTransition.finish();
    }
    this.emit("focus", this.getElement(this.realIndex), this._index, this.realIndex);
  }
  getAxisPosition() {
    let target = -this._scrollTransition._targetValue;
    let direction = this._horizontal ^ this._invertDirection ? -1 : 1;
    let value = -direction * this._index * this._itemSize;
    return this._viewportScrollOffset * this.viewportSize + (value - target);
  }
  update() {
    if (!this._started)
      return;
    let nElements = this.length;
    if (!nElements)
      return;
    let direction = this._horizontal ^ this._invertDirection ? -1 : 1;
    let v = this._horizontal ? this._wrapper.x : this._wrapper.y;
    let viewportSize = this.viewportSize;
    let scrollDelta = this._viewportScrollOffset * viewportSize - this._itemScrollOffset * this._itemSize;
    v += scrollDelta;
    let s, e, ps, pe;
    if (direction == -1) {
      s = Math.floor(-v / this._itemSize);
      ps = 1 - (-v / this._itemSize - s);
      e = Math.floor((viewportSize - v) / this._itemSize);
      pe = (viewportSize - v) / this._itemSize - e;
    } else {
      s = Math.ceil(v / this._itemSize);
      ps = 1 + v / this._itemSize - s;
      e = Math.ceil((v - viewportSize) / this._itemSize);
      pe = e - (v - viewportSize) / this._itemSize;
    }
    if (this._roll || viewportSize > this._itemSize * nElements) {
      if (e >= nElements) {
        e = nElements - 1;
        pe = 1;
      }
      if (s >= nElements) {
        s = nElements - 1;
        ps = 1;
      }
      if (e <= -1) {
        e = 0;
        pe = 1;
      }
      if (s <= -1) {
        s = 0;
        ps = 1;
      }
    }
    let offset = -direction * s * this._itemSize;
    let item;
    for (let index = s; direction == -1 ? index <= e : index >= e; direction == -1 ? index++ : index--) {
      let realIndex = Utils$1.getModuloIndex(index, nElements);
      let element = this.getElement(realIndex);
      item = element.parent;
      this._visibleItems.delete(item);
      if (this._horizontal) {
        item.x = offset + scrollDelta;
      } else {
        item.y = offset + scrollDelta;
      }
      let wasVisible = item.visible;
      item.visible = true;
      if (!wasVisible || this._reloadVisibleElements) {
        this.emit("visible", index, realIndex);
      }
      if (this._progressAnimation) {
        let p = 1;
        if (index == s) {
          p = ps;
        } else if (index == e) {
          p = pe;
        }
        this._progressAnimation.apply(element, p);
      }
      offset += this._itemSize;
    }
    let self = this;
    this._visibleItems.forEach(function(invisibleItem) {
      invisibleItem.visible = false;
      self._visibleItems.delete(invisibleItem);
    });
    for (let index = s; direction == -1 ? index <= e : index >= e; direction == -1 ? index++ : index--) {
      let realIndex = Utils$1.getModuloIndex(index, nElements);
      this._visibleItems.add(this.getWrapper(realIndex));
    }
    this._reloadVisibleElements = false;
  }
  setPrevious() {
    this.setIndex(this._index - 1);
  }
  setNext() {
    this.setIndex(this._index + 1);
  }
  getWrapper(index) {
    return this._wrapper.children[index];
  }
  getElement(index) {
    let e = this._wrapper.children[index];
    return e ? e.children[0] : null;
  }
  reload() {
    this._reloadVisibleElements = true;
    this.update();
  }
  get element() {
    let e = this._wrapper.children[this.realIndex];
    return e ? e.children[0] : null;
  }
  get length() {
    return this._wrapper.children.length;
  }
  get property() {
    return this._horizontal ? "x" : "y";
  }
  get viewportSize() {
    return this._horizontal ? this.w : this.h;
  }
  get index() {
    return this._index;
  }
  get realIndex() {
    return Utils$1.getModuloIndex(this._index, this.length);
  }
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(v) {
    this._itemSize = v;
    this.update();
  }
  get viewportScrollOffset() {
    return this._viewportScrollOffset;
  }
  set viewportScrollOffset(v) {
    this._viewportScrollOffset = v;
    this.update();
  }
  get itemScrollOffset() {
    return this._itemScrollOffset;
  }
  set itemScrollOffset(v) {
    this._itemScrollOffset = v;
    this.update();
  }
  get scrollTransitionSettings() {
    return this._scrollTransitionSettings;
  }
  set scrollTransitionSettings(v) {
    this._scrollTransitionSettings.patch(v);
  }
  set scrollTransition(v) {
    this._scrollTransitionSettings.patch(v);
  }
  get scrollTransition() {
    return this._scrollTransition;
  }
  get progressAnimation() {
    return this._progressAnimation;
  }
  set progressAnimation(v) {
    if (Utils$1.isObjectLiteral(v)) {
      this._progressAnimation = this.stage.animations.createSettings(v);
    } else {
      this._progressAnimation = v;
    }
    this.update();
  }
  get roll() {
    return this._roll;
  }
  set roll(v) {
    this._roll = v;
    this.update();
  }
  get rollMin() {
    return this._rollMin;
  }
  set rollMin(v) {
    this._rollMin = v;
    this.update();
  }
  get rollMax() {
    return this._rollMax;
  }
  set rollMax(v) {
    this._rollMax = v;
    this.update();
  }
  get invertDirection() {
    return this._invertDirection;
  }
  set invertDirection(v) {
    if (!this._started) {
      this._invertDirection = v;
    }
  }
  get horizontal() {
    return this._horizontal;
  }
  set horizontal(v) {
    if (v !== this._horizontal) {
      if (!this._started) {
        this._horizontal = v;
      }
    }
  }
}
class ListItems extends ObjectListWrapper {
  constructor(list) {
    let wrap = (item) => {
      let parent = item.stage.createElement();
      parent.add(item);
      parent.visible = false;
      return parent;
    };
    super(list._wrapper._children, wrap);
    this.list = list;
  }
  onAdd(item, index) {
    super.onAdd(item, index);
    this.checkStarted(index);
  }
  checkStarted(index) {
    this.list._reloadVisibleElements = true;
    if (!this.list._started) {
      this.list.start();
    } else {
      if (this.list.length === 1) {
        this.list.setIndex(0, true, true);
      } else {
        if (this.list._index >= this.list.length) {
          this.list.setIndex(0);
        }
      }
      this.list.update();
    }
  }
  onRemove(item, index) {
    super.onRemove(item, index);
    let ri = this.list.realIndex;
    if (ri === index) {
      if (ri === this.list.length) {
        ri--;
      }
      if (ri >= 0) {
        this.list.setIndex(ri);
      }
    } else if (ri > index) {
      this.list.setIndex(ri - 1);
    }
    this.list._reloadVisibleElements = true;
  }
  onSet(item, index) {
    super.onSet(item, index);
    this.checkStarted(index);
  }
  onSync(removed, added, order) {
    super.onSync(removed, added, order);
    this.checkStarted(0);
  }
  get _signalProxy() {
    return true;
  }
}
class LinearBlurShader extends DefaultShader$1 {
  constructor(context) {
    super(context);
    this._direction = new Float32Array([1, 0]);
    this._kernelRadius = 1;
  }
  get x() {
    return this._direction[0];
  }
  set x(v) {
    this._direction[0] = v;
    this.redraw();
  }
  get y() {
    return this._direction[1];
  }
  set y(v) {
    this._direction[1] = v;
    this.redraw();
  }
  get kernelRadius() {
    return this._kernelRadius;
  }
  set kernelRadius(v) {
    this._kernelRadius = v;
    this.redraw();
  }
  useDefault() {
    return this._kernelRadius === 0;
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    this._setUniform("direction", this._direction, this.gl.uniform2fv);
    this._setUniform("kernelRadius", this._kernelRadius, this.gl.uniform1i);
    const w = operation.getRenderWidth();
    const h = operation.getRenderHeight();
    this._setUniform("resolution", new Float32Array([w, h]), this.gl.uniform2fv);
  }
}
LinearBlurShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    uniform vec2 resolution;
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    uniform vec2 direction;
    uniform int kernelRadius;
    
    vec4 blur1(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
        vec4 color = vec4(0.0);
        vec2 off1 = vec2(1.3333333333333333) * direction;
        color += texture2D(image, uv) * 0.29411764705882354;
        color += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;
        color += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;
        return color; 
    }
    
    vec4 blur2(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
        vec4 color = vec4(0.0);
        vec2 off1 = vec2(1.3846153846) * direction;
        vec2 off2 = vec2(3.2307692308) * direction;
        color += texture2D(image, uv) * 0.2270270270;
        color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
        color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
        color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
        color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
        return color;
    }
    
    vec4 blur3(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
        vec4 color = vec4(0.0);
        vec2 off1 = vec2(1.411764705882353) * direction;
        vec2 off2 = vec2(3.2941176470588234) * direction;
        vec2 off3 = vec2(5.176470588235294) * direction;
        color += texture2D(image, uv) * 0.1964825501511404;
        color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
        color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
        color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
        color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
        color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
        color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
        return color;
    }    

    void main(void){
        if (kernelRadius == 1) {
            gl_FragColor = blur1(uSampler, vTextureCoord, resolution, direction) * vColor;
        } else if (kernelRadius == 2) {
            gl_FragColor = blur2(uSampler, vTextureCoord, resolution, direction) * vColor;
        } else {
            gl_FragColor = blur3(uSampler, vTextureCoord, resolution, direction) * vColor;
        }
    }
`;
class BoxBlurShader extends DefaultShader$1 {
  setupUniforms(operation) {
    super.setupUniforms(operation);
    const dx = 1 / operation.getTextureWidth(0);
    const dy = 1 / operation.getTextureHeight(0);
    this._setUniform("stepTextureCoord", new Float32Array([dx, dy]), this.gl.uniform2fv);
  }
}
BoxBlurShader.vertexShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    uniform vec2 stepTextureCoord;
    attribute vec2 aVertexPosition;
    attribute vec2 aTextureCoord;
    attribute vec4 aColor;
    uniform vec2 projection;
    varying vec4 vColor;
    varying vec2 vTextureCoordUl;
    varying vec2 vTextureCoordUr;
    varying vec2 vTextureCoordBl;
    varying vec2 vTextureCoordBr;
    void main(void){
        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);
        vTextureCoordUl = aTextureCoord - stepTextureCoord;
        vTextureCoordBr = aTextureCoord + stepTextureCoord;
        vTextureCoordUr = vec2(vTextureCoordBr.x, vTextureCoordUl.y);
        vTextureCoordBl = vec2(vTextureCoordUl.x, vTextureCoordBr.y);
        vColor = aColor;
        gl_Position.y = -sign(projection.y) * gl_Position.y;
    }
`;
BoxBlurShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoordUl;
    varying vec2 vTextureCoordUr;
    varying vec2 vTextureCoordBl;
    varying vec2 vTextureCoordBr;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    void main(void){
        vec4 color = 0.25 * (texture2D(uSampler, vTextureCoordUl) + texture2D(uSampler, vTextureCoordUr) + texture2D(uSampler, vTextureCoordBl) + texture2D(uSampler, vTextureCoordBr));
        gl_FragColor = color * vColor;
    }
`;
class BlurShader extends DefaultShader2 {
  constructor(context) {
    super(context);
    this._kernelRadius = 1;
  }
  get kernelRadius() {
    return this._kernelRadius;
  }
  set kernelRadius(v) {
    this._kernelRadius = v;
    this.redraw();
  }
  useDefault() {
    return this._amount === 0;
  }
  _beforeDrawEl({ target }) {
    target.ctx.filter = "blur(" + this._kernelRadius + "px)";
  }
  _afterDrawEl({ target }) {
    target.ctx.filter = "none";
  }
}
class FastBlurComponent extends Component {
  static _template() {
    return {};
  }
  get wrap() {
    return this.tag("Wrap");
  }
  set content(v) {
    return this.wrap.content = v;
  }
  get content() {
    return this.wrap.content;
  }
  set padding(v) {
    this.wrap._paddingX = v;
    this.wrap._paddingY = v;
    this.wrap._updateBlurSize();
  }
  set paddingX(v) {
    this.wrap._paddingX = v;
    this.wrap._updateBlurSize();
  }
  set paddingY(v) {
    this.wrap._paddingY = v;
    this.wrap._updateBlurSize();
  }
  set amount(v) {
    return this.wrap.amount = v;
  }
  get amount() {
    return this.wrap.amount;
  }
  _onResize() {
    this.wrap.w = this.renderWidth;
    this.wrap.h = this.renderHeight;
  }
  get _signalProxy() {
    return true;
  }
  _build() {
    this.patch({
      Wrap: { type: this.stage.gl ? WebGLFastBlurComponent : C2dFastBlurComponent }
    });
  }
}
class C2dFastBlurComponent extends Component {
  static _template() {
    return {
      forceZIndexContext: true,
      rtt: true,
      Textwrap: { shader: { type: BlurShader }, Content: {} }
    };
  }
  constructor(stage) {
    super(stage);
    this._textwrap = this.sel("Textwrap");
    this._wrapper = this.sel("Textwrap>Content");
    this._amount = 0;
    this._paddingX = 0;
    this._paddingY = 0;
  }
  static getSpline() {
    if (!this._multiSpline) {
      this._multiSpline = new MultiSpline();
      this._multiSpline.parse(false, { 0: 0, 0.25: 1.5, 0.5: 5.5, 0.75: 18, 1: 39 });
    }
    return this._multiSpline;
  }
  get content() {
    return this.sel("Textwrap>Content");
  }
  set content(v) {
    this.sel("Textwrap>Content").patch(v, true);
  }
  set padding(v) {
    this._paddingX = v;
    this._paddingY = v;
    this._updateBlurSize();
  }
  set paddingX(v) {
    this._paddingX = v;
    this._updateBlurSize();
  }
  set paddingY(v) {
    this._paddingY = v;
    this._updateBlurSize();
  }
  _updateBlurSize() {
    let w = this.renderWidth;
    let h = this.renderHeight;
    let paddingX = this._paddingX;
    let paddingY = this._paddingY;
    this._wrapper.x = paddingX;
    this._textwrap.x = -paddingX;
    this._wrapper.y = paddingY;
    this._textwrap.y = -paddingY;
    this._textwrap.w = w + paddingX * 2;
    this._textwrap.h = h + paddingY * 2;
  }
  get amount() {
    return this._amount;
  }
  set amount(v) {
    this._amount = v;
    this._textwrap.shader.kernelRadius = C2dFastBlurComponent._amountToKernelRadius(v);
  }
  static _amountToKernelRadius(v) {
    return C2dFastBlurComponent.getSpline().getValue(Math.min(1, v * 0.25));
  }
  get _signalProxy() {
    return true;
  }
}
class WebGLFastBlurComponent extends Component {
  static _template() {
    const onUpdate = function(element, elementCore) {
      if (elementCore._recalc & 2 + 128) {
        const w = elementCore.w;
        const h = elementCore.h;
        let cur = elementCore;
        do {
          cur = cur._children[0];
          cur._element.w = w;
          cur._element.h = h;
        } while (cur._children);
      }
    };
    return {
      Textwrap: { rtt: true, forceZIndexContext: true, renderOffscreen: true, Content: {} },
      Layers: {
        L0: { rtt: true, onUpdate, renderOffscreen: true, visible: false, Content: { shader: { type: BoxBlurShader } } },
        L1: { rtt: true, onUpdate, renderOffscreen: true, visible: false, Content: { shader: { type: BoxBlurShader } } },
        L2: { rtt: true, onUpdate, renderOffscreen: true, visible: false, Content: { shader: { type: BoxBlurShader } } },
        L3: { rtt: true, onUpdate, renderOffscreen: true, visible: false, Content: { shader: { type: BoxBlurShader } } }
      },
      Result: { shader: { type: FastBlurOutputShader }, visible: false }
    };
  }
  get _signalProxy() {
    return true;
  }
  constructor(stage) {
    super(stage);
    this._textwrap = this.sel("Textwrap");
    this._wrapper = this.sel("Textwrap>Content");
    this._layers = this.sel("Layers");
    this._output = this.sel("Result");
    this._amount = 0;
    this._paddingX = 0;
    this._paddingY = 0;
  }
  _buildLayers() {
    const filterShaderSettings = [{ x: 1, y: 0, kernelRadius: 1 }, { x: 0, y: 1, kernelRadius: 1 }, { x: 1.5, y: 0, kernelRadius: 1 }, { x: 0, y: 1.5, kernelRadius: 1 }];
    const filterShaders = filterShaderSettings.map((s) => {
      const shader = Shader.create(this.stage, Object.assign({ type: LinearBlurShader }, s));
      return shader;
    });
    this._setLayerTexture(this.getLayerContents(0), this._textwrap.getTexture(), []);
    this._setLayerTexture(this.getLayerContents(1), this.getLayer(0).getTexture(), [filterShaders[0], filterShaders[1]]);
    this._setLayerTexture(this.getLayerContents(2), this.getLayer(1).getTexture(), [filterShaders[0], filterShaders[1], filterShaders[2], filterShaders[3]]);
    this._setLayerTexture(this.getLayerContents(3), this.getLayer(2).getTexture(), [filterShaders[0], filterShaders[1], filterShaders[2], filterShaders[3]]);
  }
  _setLayerTexture(element, texture, steps) {
    if (!steps.length) {
      element.texture = texture;
    } else {
      const step = steps.pop();
      const child = element.stage.c({ rtt: true, shader: step });
      this._setLayerTexture(child, texture, steps);
      element.childList.add(child);
    }
    return element;
  }
  get content() {
    return this.sel("Textwrap>Content");
  }
  set content(v) {
    this.sel("Textwrap>Content").patch(v, true);
  }
  set padding(v) {
    this._paddingX = v;
    this._paddingY = v;
    this._updateBlurSize();
  }
  set paddingX(v) {
    this._paddingX = v;
    this._updateBlurSize();
  }
  set paddingY(v) {
    this._paddingY = v;
    this._updateBlurSize();
  }
  getLayer(i) {
    return this._layers.sel("L" + i);
  }
  getLayerContents(i) {
    return this.getLayer(i).sel("Content");
  }
  _onResize() {
    this._updateBlurSize();
  }
  _updateBlurSize() {
    let w = this.renderWidth;
    let h = this.renderHeight;
    let paddingX = this._paddingX;
    let paddingY = this._paddingY;
    let fw = w + paddingX * 2;
    let fh = h + paddingY * 2;
    this._textwrap.w = fw;
    this._wrapper.x = paddingX;
    this.getLayer(0).w = this.getLayerContents(0).w = fw / 2;
    this.getLayer(1).w = this.getLayerContents(1).w = fw / 4;
    this.getLayer(2).w = this.getLayerContents(2).w = fw / 8;
    this.getLayer(3).w = this.getLayerContents(3).w = fw / 16;
    this._output.x = -paddingX;
    this._textwrap.x = -paddingX;
    this._output.w = fw;
    this._textwrap.h = fh;
    this._wrapper.y = paddingY;
    this.getLayer(0).h = this.getLayerContents(0).h = fh / 2;
    this.getLayer(1).h = this.getLayerContents(1).h = fh / 4;
    this.getLayer(2).h = this.getLayerContents(2).h = fh / 8;
    this.getLayer(3).h = this.getLayerContents(3).h = fh / 16;
    this._output.y = -paddingY;
    this._textwrap.y = -paddingY;
    this._output.h = fh;
    this.w = w;
    this.h = h;
  }
  set amount(v) {
    this._amount = v;
    this._update();
  }
  get amount() {
    return this._amount;
  }
  _update() {
    let v = Math.min(4, Math.max(0, this._amount));
    if (v === 0) {
      this._textwrap.renderToTexture = false;
      this._output.shader.otherTextureSource = null;
      this._output.visible = false;
    } else {
      this._textwrap.renderToTexture = true;
      this._output.visible = true;
      this.getLayer(0).visible = v > 0;
      this.getLayer(1).visible = v > 1;
      this.getLayer(2).visible = v > 2;
      this.getLayer(3).visible = v > 3;
      if (v <= 1) {
        this._output.texture = this._textwrap.getTexture();
        this._output.shader.otherTextureSource = this.getLayer(0).getTexture();
        this._output.shader.a = v;
      } else if (v <= 2) {
        this._output.texture = this.getLayer(0).getTexture();
        this._output.shader.otherTextureSource = this.getLayer(1).getTexture();
        this._output.shader.a = v - 1;
      } else if (v <= 3) {
        this._output.texture = this.getLayer(1).getTexture();
        this._output.shader.otherTextureSource = this.getLayer(2).getTexture();
        this._output.shader.a = v - 2;
      } else if (v <= 4) {
        this._output.texture = this.getLayer(2).getTexture();
        this._output.shader.otherTextureSource = this.getLayer(3).getTexture();
        this._output.shader.a = v - 3;
      }
    }
  }
  set shader(s) {
    super.shader = s;
    if (!this.renderToTexture) {
      console.warn("[Lightning] Please enable renderToTexture to use with a shader.");
    }
  }
  _firstActive() {
    this._buildLayers();
  }
}
class FastBlurOutputShader extends DefaultShader$1 {
  constructor(ctx) {
    super(ctx);
    this._a = 0;
    this._otherTextureSource = null;
  }
  get a() {
    return this._a;
  }
  set a(v) {
    this._a = v;
    this.redraw();
  }
  set otherTextureSource(v) {
    this._otherTextureSource = v;
    this.redraw();
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    this._setUniform("a", this._a, this.gl.uniform1f);
    this._setUniform("uSampler2", 1, this.gl.uniform1i);
  }
  beforeDraw(operation) {
    let glTexture = this._otherTextureSource ? this._otherTextureSource.nativeTexture : null;
    let gl = this.gl;
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, glTexture);
    gl.activeTexture(gl.TEXTURE0);
  }
}
FastBlurOutputShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    uniform sampler2D uSampler2;
    uniform float a;
    void main(void){
        if (a == 1.0) {
            gl_FragColor = texture2D(uSampler2, vTextureCoord) * vColor;
        } else {
            gl_FragColor = ((1.0 - a) * texture2D(uSampler, vTextureCoord) + (a * texture2D(uSampler2, vTextureCoord))) * vColor;
        }
    }
`;
class BloomComponent extends Component {
  static _template() {
    const onUpdate = function(element, elementCore) {
      if (elementCore._recalc & 2 + 128) {
        const w = elementCore.w;
        const h = elementCore.h;
        let cur = elementCore;
        do {
          cur = cur._children[0];
          cur._element.w = w;
          cur._element.h = h;
        } while (cur._children);
      }
    };
    return {
      Textwrap: {
        rtt: true,
        forceZIndexContext: true,
        renderOffscreen: true,
        BloomBase: {
          shader: { type: BloomBaseShader },
          Content: {}
        }
      },
      Layers: {
        L0: { rtt: true, onUpdate, scale: 2, pivot: 0, visible: false, Content: { shader: { type: BoxBlurShader } } },
        L1: { rtt: true, onUpdate, scale: 4, pivot: 0, visible: false, Content: { shader: { type: BoxBlurShader } } },
        L2: { rtt: true, onUpdate, scale: 8, pivot: 0, visible: false, Content: { shader: { type: BoxBlurShader } } },
        L3: { rtt: true, onUpdate, scale: 16, pivot: 0, visible: false, Content: { shader: { type: BoxBlurShader } } }
      }
    };
  }
  get _signalProxy() {
    return true;
  }
  constructor(stage) {
    super(stage);
    this._textwrap = this.sel("Textwrap");
    this._wrapper = this.sel("Textwrap.Content");
    this._layers = this.sel("Layers");
    this._amount = 0;
    this._paddingX = 0;
    this._paddingY = 0;
  }
  _build() {
    const filterShaderSettings = [{ x: 1, y: 0, kernelRadius: 3 }, { x: 0, y: 1, kernelRadius: 3 }, { x: 1.5, y: 0, kernelRadius: 3 }, { x: 0, y: 1.5, kernelRadius: 3 }];
    const filterShaders = filterShaderSettings.map((s) => {
      const shader = this.stage.createShader(Object.assign({ type: LinearBlurShader }, s));
      return shader;
    });
    this._setLayerTexture(this.getLayerContents(0), this._textwrap.getTexture(), []);
    this._setLayerTexture(this.getLayerContents(1), this.getLayer(0).getTexture(), [filterShaders[0], filterShaders[1]]);
    this._setLayerTexture(this.getLayerContents(2), this.getLayer(1).getTexture(), [filterShaders[0], filterShaders[1], filterShaders[2], filterShaders[3]]);
    this._setLayerTexture(this.getLayerContents(3), this.getLayer(2).getTexture(), [filterShaders[0], filterShaders[1], filterShaders[2], filterShaders[3]]);
  }
  _setLayerTexture(element, texture, steps) {
    if (!steps.length) {
      element.texture = texture;
    } else {
      const step = steps.pop();
      const child = element.stage.c({ rtt: true, shader: step });
      this._setLayerTexture(child, texture, steps);
      element.childList.add(child);
    }
    return element;
  }
  get content() {
    return this.sel("Textwrap.Content");
  }
  set content(v) {
    this.sel("Textwrap.Content").patch(v);
  }
  set padding(v) {
    this._paddingX = v;
    this._paddingY = v;
    this._updateBlurSize();
  }
  set paddingX(v) {
    this._paddingX = v;
    this._updateBlurSize();
  }
  set paddingY(v) {
    this._paddingY = v;
    this._updateBlurSize();
  }
  getLayer(i) {
    return this._layers.sel("L" + i);
  }
  getLayerContents(i) {
    return this.getLayer(i).sel("Content");
  }
  _onResize() {
    this._updateBlurSize();
  }
  _updateBlurSize() {
    let w = this.renderWidth;
    let h = this.renderHeight;
    let paddingX = this._paddingX;
    let paddingY = this._paddingY;
    let fw = w + paddingX * 2;
    let fh = h + paddingY * 2;
    this._textwrap.w = fw;
    this._wrapper.x = paddingX;
    this.getLayer(0).w = this.getLayerContents(0).w = fw / 2;
    this.getLayer(1).w = this.getLayerContents(1).w = fw / 4;
    this.getLayer(2).w = this.getLayerContents(2).w = fw / 8;
    this.getLayer(3).w = this.getLayerContents(3).w = fw / 16;
    this._textwrap.x = -paddingX;
    this._textwrap.h = fh;
    this._wrapper.y = paddingY;
    this.getLayer(0).h = this.getLayerContents(0).h = fh / 2;
    this.getLayer(1).h = this.getLayerContents(1).h = fh / 4;
    this.getLayer(2).h = this.getLayerContents(2).h = fh / 8;
    this.getLayer(3).h = this.getLayerContents(3).h = fh / 16;
    this._textwrap.y = -paddingY;
    this.w = w;
    this.h = h;
  }
  set amount(v) {
    this._amount = v;
    this._update();
  }
  get amount() {
    return this._amount;
  }
  _update() {
    let v = Math.min(4, Math.max(0, this._amount));
    if (v > 0) {
      this.getLayer(0).visible = v > 0;
      this.getLayer(1).visible = v > 1;
      this.getLayer(2).visible = v > 2;
      this.getLayer(3).visible = v > 3;
    }
  }
  set shader(s) {
    super.shader = s;
    if (!this.renderToTexture) {
      console.warn("[Lightning] Please enable renderToTexture to use with a shader.");
    }
  }
  _firstActive() {
    this._build();
  }
}
class BloomBaseShader extends DefaultShader$1 {
}
BloomBaseShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    void main(void){
        vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
        float m = max(max(color.r, color.g), color.b);
        float c = max(0.0, (m - 0.80)) * 5.0;
        color = color * c;
        gl_FragColor = color;
    }
`;
class SmoothScaleComponent extends Component {
  static _template() {
    return {
      ContentWrap: {
        renderOffscreen: true,
        forceZIndexContext: true,
        onAfterUpdate: SmoothScaleComponent._updateDimensions,
        Content: {}
      },
      Scale: { visible: false }
    };
  }
  constructor(stage) {
    super(stage);
    this._smoothScale = 1;
    this._iterations = 0;
  }
  get content() {
    return this.tag("Content");
  }
  set content(v) {
    this.tag("Content").patch(v, true);
  }
  get smoothScale() {
    return this._smoothScale;
  }
  set smoothScale(v) {
    if (this._smoothScale !== v) {
      let its = 0;
      while (v < 0.5 && its < 12) {
        its++;
        v = v * 2;
      }
      this.scale = v;
      this._setIterations(its);
      this._smoothScale = v;
    }
  }
  _setIterations(its) {
    if (this._iterations !== its) {
      const scalers = this.sel("Scale").childList;
      const content = this.sel("ContentWrap");
      while (scalers.length < its) {
        const first = scalers.length === 0;
        const texture = first ? content.getTexture() : scalers.last.getTexture();
        scalers.a({ rtt: true, renderOffscreen: true, texture });
      }
      SmoothScaleComponent._updateDimensions(this.tag("ContentWrap"), true);
      const useScalers = its > 0;
      this.patch({
        ContentWrap: { renderToTexture: useScalers },
        Scale: { visible: useScalers }
      });
      for (let i = 0, n = scalers.length; i < n; i++) {
        scalers.getAt(i).patch({
          visible: i < its,
          renderOffscreen: i !== its - 1
        });
      }
      this._iterations = its;
    }
  }
  static _updateDimensions(contentWrap, force) {
    const content = contentWrap.children[0];
    let w = content.renderWidth;
    let h = content.renderHeight;
    if (w !== contentWrap.w || h !== contentWrap.h || force) {
      contentWrap.w = w;
      contentWrap.h = h;
      const scalers = contentWrap.parent.tag("Scale").children;
      for (let i = 0, n = scalers.length; i < n; i++) {
        w = w * 0.5;
        h = h * 0.5;
        scalers[i].w = w;
        scalers[i].h = h;
      }
    }
  }
  get _signalProxy() {
    return true;
  }
}
class BorderComponent extends Component {
  static _template() {
    return {
      Content: {},
      Borders: {
        Top: { rect: true, visible: false, mountY: 1 },
        Right: { rect: true, visible: false },
        Bottom: { rect: true, visible: false },
        Left: { rect: true, visible: false, mountX: 1 }
      }
    };
  }
  get _signalProxy() {
    return true;
  }
  constructor(stage) {
    super(stage);
    this._borderTop = this.tag("Top");
    this._borderRight = this.tag("Right");
    this._borderBottom = this.tag("Bottom");
    this._borderLeft = this.tag("Left");
    this.onAfterUpdate = function(element) {
      const content = element.childList.first;
      let w = element.core.w || content.renderWidth;
      let h = element.core.h || content.renderHeight;
      element._borderTop.w = w;
      element._borderBottom.y = h;
      element._borderBottom.w = w;
      element._borderLeft.h = h + element._borderTop.h + element._borderBottom.h;
      element._borderLeft.y = -element._borderTop.h;
      element._borderRight.x = w;
      element._borderRight.h = h + element._borderTop.h + element._borderBottom.h;
      element._borderRight.y = -element._borderTop.h;
    };
    this.borderWidth = 1;
  }
  get content() {
    return this.sel("Content");
  }
  set content(v) {
    this.sel("Content").patch(v, true);
  }
  get borderWidth() {
    return this.borderWidthTop;
  }
  get borderWidthTop() {
    return this._borderTop.h;
  }
  get borderWidthRight() {
    return this._borderRight.w;
  }
  get borderWidthBottom() {
    return this._borderBottom.h;
  }
  get borderWidthLeft() {
    return this._borderLeft.w;
  }
  set borderWidth(v) {
    this.borderWidthTop = v;
    this.borderWidthRight = v;
    this.borderWidthBottom = v;
    this.borderWidthLeft = v;
  }
  set borderWidthTop(v) {
    this._borderTop.h = v;
    this._borderTop.visible = v > 0;
  }
  set borderWidthRight(v) {
    this._borderRight.w = v;
    this._borderRight.visible = v > 0;
  }
  set borderWidthBottom(v) {
    this._borderBottom.h = v;
    this._borderBottom.visible = v > 0;
  }
  set borderWidthLeft(v) {
    this._borderLeft.w = v;
    this._borderLeft.visible = v > 0;
  }
  get colorBorder() {
    return this.colorBorderTop;
  }
  get colorBorderTop() {
    return this._borderTop.color;
  }
  get colorBorderRight() {
    return this._borderRight.color;
  }
  get colorBorderBottom() {
    return this._borderBottom.color;
  }
  get colorBorderLeft() {
    return this._borderLeft.color;
  }
  set colorBorder(v) {
    this.colorBorderTop = v;
    this.colorBorderRight = v;
    this.colorBorderBottom = v;
    this.colorBorderLeft = v;
  }
  set colorBorderTop(v) {
    this._borderTop.color = v;
  }
  set colorBorderRight(v) {
    this._borderRight.color = v;
  }
  set colorBorderBottom(v) {
    this._borderBottom.color = v;
  }
  set colorBorderLeft(v) {
    this._borderLeft.color = v;
  }
  get borderTop() {
    return this._borderTop;
  }
  set borderTop(settings) {
    this.borderTop.patch(settings);
  }
  get borderRight() {
    return this._borderRight;
  }
  set borderRight(settings) {
    this.borderRight.patch(settings);
  }
  get borderBottom() {
    return this._borderBottom;
  }
  set borderBottom(settings) {
    this.borderBottom.patch(settings);
  }
  get borderLeft() {
    return this._borderLeft;
  }
  set borderLeft(settings) {
    this.borderLeft.patch(settings);
  }
  set borders(settings) {
    this.borderTop = settings;
    this.borderLeft = settings;
    this.borderBottom = settings;
    this.borderRight = settings;
  }
}
class WebGLGrayscaleShader extends DefaultShader$1 {
  constructor(context) {
    super(context);
    this._amount = 1;
  }
  static getC2d() {
    return C2dGrayscaleShader;
  }
  set amount(v) {
    this._amount = v;
    this.redraw();
  }
  get amount() {
    return this._amount;
  }
  useDefault() {
    return this._amount === 0;
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    this._setUniform("amount", this._amount, this.gl.uniform1f);
  }
}
WebGLGrayscaleShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    uniform float amount;
    void main(void){
        vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
        float grayness = 0.2 * color.r + 0.6 * color.g + 0.2 * color.b;
        gl_FragColor = vec4(amount * vec3(grayness, grayness, grayness) + (1.0 - amount) * color.rgb, color.a);
    }
`;
class C2dGrayscaleShader extends DefaultShader2 {
  constructor(context) {
    super(context);
    this._amount = 1;
  }
  static getWebGL() {
    return WebGLGrayscaleShader;
  }
  set amount(v) {
    this._amount = v;
    this.redraw();
  }
  get amount() {
    return this._amount;
  }
  useDefault() {
    return this._amount === 0;
  }
  _beforeDrawEl({ target }) {
    target.ctx.filter = "grayscale(" + this._amount + ")";
  }
  _afterDrawEl({ target }) {
    target.ctx.filter = "none";
  }
}
class DitheringShader extends DefaultShader$1 {
  constructor(ctx) {
    super(ctx);
    this._noiseTexture = new NoiseTexture(ctx.stage);
    this._graining = 1 / 256;
    this._random = false;
  }
  set graining(v) {
    this._graining = v;
    this.redraw();
  }
  set random(v) {
    this._random = v;
    this.redraw();
  }
  setExtraAttribsInBuffer(operation) {
    this._noiseTexture.load();
    let offset = operation.extraAttribsDataByteOffset / 4;
    let floats = operation.quads.floats;
    let length = operation.length;
    for (let i = 0; i < length; i++) {
      let brx = operation.getElementWidth(i) / this._noiseTexture.getRenderWidth();
      let bry = operation.getElementHeight(i) / this._noiseTexture.getRenderHeight();
      let ulx = 0;
      let uly = 0;
      if (this._random) {
        ulx = Math.random();
        uly = Math.random();
        brx += ulx;
        bry += uly;
        if (Math.random() < 0.5) {
          const t = ulx;
          ulx = brx;
          brx = t;
        }
        if (Math.random() < 0.5) {
          const t = uly;
          uly = bry;
          bry = t;
        }
      }
      floats[offset] = ulx;
      floats[offset + 1] = uly;
      floats[offset + 2] = brx;
      floats[offset + 3] = uly;
      floats[offset + 4] = brx;
      floats[offset + 5] = bry;
      floats[offset + 6] = ulx;
      floats[offset + 7] = bry;
      offset += 8;
    }
  }
  beforeDraw(operation) {
    let gl = this.gl;
    gl.vertexAttribPointer(this._attrib("aNoiseTextureCoord"), 2, gl.FLOAT, false, 8, this.getVertexAttribPointerOffset(operation));
    let glTexture = this._noiseTexture.source.nativeTexture;
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, glTexture);
    gl.activeTexture(gl.TEXTURE0);
  }
  getExtraAttribBytesPerVertex() {
    return 8;
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    this._setUniform("uNoiseSampler", 1, this.gl.uniform1i);
    this._setUniform("graining", 2 * this._graining, this.gl.uniform1f);
  }
  enableAttribs() {
    super.enableAttribs();
    let gl = this.gl;
    gl.enableVertexAttribArray(this._attrib("aNoiseTextureCoord"));
  }
  disableAttribs() {
    super.disableAttribs();
    let gl = this.gl;
    gl.disableVertexAttribArray(this._attrib("aNoiseTextureCoord"));
  }
  useDefault() {
    return this._graining === 0;
  }
  afterDraw(operation) {
    if (this._random) {
      this.redraw();
    }
  }
}
DitheringShader.vertexShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    attribute vec2 aVertexPosition;
    attribute vec2 aTextureCoord;
    attribute vec2 aNoiseTextureCoord;
    attribute vec4 aColor;
    uniform vec2 projection;
    varying vec2 vTextureCoord;
    varying vec2 vNoiseTextureCoord;
    varying vec4 vColor;
    void main(void){
        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);
        vTextureCoord = aTextureCoord;
        vNoiseTextureCoord = aNoiseTextureCoord;
        vColor = aColor;
        gl_Position.y = -sign(projection.y) * gl_Position.y;
    }
`;
DitheringShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec2 vNoiseTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    uniform sampler2D uNoiseSampler;
    uniform float graining;
    void main(void){
        vec4 noise = texture2D(uNoiseSampler, vNoiseTextureCoord);
        vec4 color = texture2D(uSampler, vTextureCoord);
        gl_FragColor = (color * vColor) + graining * (noise.r - 0.5);
    }
`;
class CircularPushShader extends DefaultShader$1 {
  constructor(ctx) {
    super(ctx);
    this._inputValue = 0;
    this._maxDerivative = 0.01;
    this._normalizedValue = 0;
    this._offset = 0;
    this._amount = 0.1;
    this._aspectRatio = 1;
    this._offsetX = 0;
    this._offsetY = 0;
    this.buckets = 100;
  }
  get aspectRatio() {
    return this._aspectRatio;
  }
  set aspectRatio(v) {
    this._aspectRatio = v;
    this.redraw();
  }
  get offsetX() {
    return this._offsetX;
  }
  set offsetX(v) {
    this._offsetX = v;
    this.redraw();
  }
  get offsetY() {
    return this._offsetY;
  }
  set offsetY(v) {
    this._offsetY = v;
    this.redraw();
  }
  set amount(v) {
    this._amount = v;
    this.redraw();
  }
  get amount() {
    return this._amount;
  }
  set inputValue(v) {
    this._inputValue = v;
  }
  get inputValue() {
    return this._inputValue;
  }
  set maxDerivative(v) {
    this._maxDerivative = v;
  }
  get maxDerivative() {
    return this._maxDerivative;
  }
  set buckets(v) {
    if (v > 100) {
      console.warn("[Lightning] CircularPushShader: supports max 100 buckets");
      v = 100;
    }
    this._buckets = v;
    this._values = new Uint8Array(this._getValues(v));
    this.redraw();
  }
  get buckets() {
    return this._buckets;
  }
  _getValues(n) {
    const v = [];
    for (let i = 0; i < n; i++) {
      v.push(this._inputValue);
    }
    return v;
  }
  progress(o) {
    this._offset += o * this._buckets;
    const full = Math.floor(this._offset);
    this._offset -= full;
    this._shiftBuckets(full);
    this.redraw();
  }
  _shiftBuckets(n) {
    for (let i = this._buckets - 1; i >= 0; i--) {
      const targetIndex = i - n;
      if (targetIndex < 0) {
        this._normalizedValue = Math.min(this._normalizedValue + this._maxDerivative, Math.max(this._normalizedValue - this._maxDerivative, this._inputValue));
        this._values[i] = 255 * this._normalizedValue;
      } else {
        this._values[i] = this._values[targetIndex];
      }
    }
  }
  set offset(v) {
    this._offset = v;
    this.redraw();
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    this._setUniform("aspectRatio", this._aspectRatio, this.gl.uniform1f);
    this._setUniform("offsetX", this._offsetX, this.gl.uniform1f);
    this._setUniform("offsetY", this._offsetY, this.gl.uniform1f);
    this._setUniform("amount", this._amount, this.gl.uniform1f);
    this._setUniform("offset", this._offset, this.gl.uniform1f);
    this._setUniform("buckets", this._buckets, this.gl.uniform1f);
    this._setUniform("uValueSampler", 1, this.gl.uniform1i);
  }
  useDefault() {
    return this._amount === 0;
  }
  beforeDraw(operation) {
    const gl = this.gl;
    gl.activeTexture(gl.TEXTURE1);
    if (!this._valuesTexture) {
      this._valuesTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, this._valuesTexture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      if (Utils$1.isNode) {
        gl.pixelStorei(gl.UNPACK_FLIP_BLUE_RED, false);
      }
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    } else {
      gl.bindTexture(gl.TEXTURE_2D, this._valuesTexture);
    }
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.ALPHA, this._buckets, 1, 0, gl.ALPHA, gl.UNSIGNED_BYTE, this._values);
    gl.activeTexture(gl.TEXTURE0);
  }
  cleanup() {
    if (this._valuesTexture) {
      this.gl.deleteTexture(this._valuesTexture);
    }
  }
}
CircularPushShader.vertexShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    attribute vec2 aVertexPosition;
    attribute vec2 aTextureCoord;
    attribute vec4 aColor;
    uniform vec2 projection;
    uniform float offsetX;
    uniform float offsetY;
    uniform float aspectRatio;
    varying vec2 vTextureCoord;
    varying vec2 vPos;
    varying vec4 vColor;
    void main(void){
        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);
        vTextureCoord = aTextureCoord;
        vPos = vTextureCoord * 2.0 - 1.0;
        vPos.y = vPos.y * aspectRatio;
        vPos.y = vPos.y + offsetY;
        vPos.x = vPos.x + offsetX;
        vColor = aColor;
        gl_Position.y = -sign(projection.y) * gl_Position.y;
    }
`;
CircularPushShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    varying vec2 vPos;
    uniform float amount;
    uniform float offset;
    uniform float values[100];
    uniform float buckets;
    uniform sampler2D uSampler;
    uniform sampler2D uValueSampler;
    void main(void){
        float l = length(vPos);
        float m = (l * buckets * 0.678 - offset) / buckets;
        float f = texture2D(uValueSampler, vec2(m, 0.0)).a * amount;
        vec2 unit = vPos / l;
        gl_FragColor = texture2D(uSampler, vTextureCoord - f * unit) * vColor;
    }
`;
class InversionShader extends DefaultShader$1 {
  constructor(context) {
    super(context);
    this._amount = 1;
  }
  set amount(v) {
    this._amount = v;
    this.redraw();
  }
  get amount() {
    return this._amount;
  }
  useDefault() {
    return this._amount === 0;
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    this._setUniform("amount", this._amount, this.gl.uniform1f);
  }
}
InversionShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    uniform float amount;
    void main(void){
        vec4 color = texture2D(uSampler, vTextureCoord);
        color.rgb = color.rgb * (1.0 - amount) + amount * (1.0 * color.a - color.rgb); 
        gl_FragColor = color * vColor;
    }
`;
class OutlineShader extends DefaultShader$1 {
  constructor(ctx) {
    super(ctx);
    this._width = 5;
    this._col = 4294967295;
    this._color = [1, 1, 1, 1];
  }
  set width(v) {
    this._width = v;
    this.redraw();
  }
  get color() {
    return this._col;
  }
  set color(v) {
    if (this._col !== v) {
      const col = StageUtils.getRgbaComponentsNormalized(v);
      col[0] = col[0] * col[3];
      col[1] = col[1] * col[3];
      col[2] = col[2] * col[3];
      this._color = col;
      this.redraw();
      this._col = v;
    }
  }
  useDefault() {
    return this._width === 0 || this._col[3] === 0;
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    let gl = this.gl;
    this._setUniform("color", new Float32Array(this._color), gl.uniform4fv);
  }
  enableAttribs() {
    super.enableAttribs();
    this.gl.enableVertexAttribArray(this._attrib("aCorner"));
  }
  disableAttribs() {
    super.disableAttribs();
    this.gl.disableVertexAttribArray(this._attrib("aCorner"));
  }
  setExtraAttribsInBuffer(operation) {
    let offset = operation.extraAttribsDataByteOffset / 4;
    let floats = operation.quads.floats;
    let length = operation.length;
    for (let i = 0; i < length; i++) {
      const elementCore = operation.getElementCore(i);
      const ddw = this._width / elementCore.w;
      const dw = ddw / (1 - 2 * ddw);
      const ddh = this._width / elementCore.h;
      const dh = ddh / (1 - 2 * ddh);
      floats[offset] = -dw;
      floats[offset + 1] = -dh;
      floats[offset + 2] = 1 + dw;
      floats[offset + 3] = -dh;
      floats[offset + 4] = 1 + dw;
      floats[offset + 5] = 1 + dh;
      floats[offset + 6] = -dw;
      floats[offset + 7] = 1 + dh;
      offset += 8;
    }
  }
  beforeDraw(operation) {
    let gl = this.gl;
    gl.vertexAttribPointer(this._attrib("aCorner"), 2, gl.FLOAT, false, 8, this.getVertexAttribPointerOffset(operation));
  }
  getExtraAttribBytesPerVertex() {
    return 8;
  }
}
OutlineShader.vertexShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    attribute vec2 aVertexPosition;
    attribute vec2 aTextureCoord;
    attribute vec4 aColor;
    attribute vec2 aCorner;
    uniform vec2 projection;
    varying vec2 vTextureCoord;
    varying vec2 vCorner;
    varying vec4 vColor;
    void main(void){
        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);
        vTextureCoord = aTextureCoord;
        vCorner = aCorner;
        vColor = aColor;
        gl_Position.y = -sign(projection.y) * gl_Position.y;
    }
`;
OutlineShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    varying vec2 vCorner;
    uniform vec4 color;
    uniform sampler2D uSampler;
    void main(void){
        vec2 m = min(vCorner, 1.0 - vCorner);
        float value = step(0.0, min(m.x, m.y));
        gl_FragColor = mix(color, texture2D(uSampler, vTextureCoord) * vColor, value);
    }
`;
class PixelateShader extends DefaultShader$1 {
  constructor(ctx) {
    super(ctx);
    this._size = new Float32Array([4, 4]);
  }
  get x() {
    return this._size[0];
  }
  set x(v) {
    this._size[0] = v;
    this.redraw();
  }
  get y() {
    return this._size[1];
  }
  set y(v) {
    this._size[1] = v;
    this.redraw();
  }
  get size() {
    return this._size[0];
  }
  set size(v) {
    this._size[0] = v;
    this._size[1] = v;
    this.redraw();
  }
  useDefault() {
    return this._size[0] === 0 && this._size[1] === 0;
  }
  static getWebGLImpl() {
    return WebGLPixelateShaderImpl;
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    let gl = this.gl;
    this._setUniform("size", new Float32Array(this._size), gl.uniform2fv);
  }
  getExtraAttribBytesPerVertex() {
    return 8;
  }
  enableAttribs() {
    super.enableAttribs();
    this.gl.enableVertexAttribArray(this._attrib("aTextureRes"));
  }
  disableAttribs() {
    super.disableAttribs();
    this.gl.disableVertexAttribArray(this._attrib("aTextureRes"));
  }
  setExtraAttribsInBuffer(operation) {
    let offset = operation.extraAttribsDataByteOffset / 4;
    let floats = operation.quads.floats;
    let length = operation.length;
    for (let i = 0; i < length; i++) {
      let w = operation.quads.getTextureWidth(operation.index + i);
      let h = operation.quads.getTextureHeight(operation.index + i);
      floats[offset] = w;
      floats[offset + 1] = h;
      floats[offset + 2] = w;
      floats[offset + 3] = h;
      floats[offset + 4] = w;
      floats[offset + 5] = h;
      floats[offset + 6] = w;
      floats[offset + 7] = h;
      offset += 8;
    }
  }
  beforeDraw(operation) {
    let gl = this.gl;
    gl.vertexAttribPointer(this._attrib("aTextureRes"), 2, gl.FLOAT, false, this.getExtraAttribBytesPerVertex(), this.getVertexAttribPointerOffset(operation));
  }
}
PixelateShader.vertexShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    attribute vec2 aVertexPosition;
    attribute vec2 aTextureCoord;
    attribute vec4 aColor;
    attribute vec2 aTextureRes;
    uniform vec2 projection;
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    varying vec2 vTextureRes;
    void main(void){
        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);
        vTextureCoord = aTextureCoord;
        vColor = aColor;
        vTextureRes = aTextureRes;
        gl_Position.y = -sign(projection.y) * gl_Position.y;
    }
`;
PixelateShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    varying vec2 vTextureRes;

    uniform vec2 size;
    uniform sampler2D uSampler;
    
    vec2 mapCoord( vec2 coord )
    {
        coord *= vTextureRes.xy;
        return coord;
    }
    
    vec2 unmapCoord( vec2 coord )
    {
        coord /= vTextureRes.xy;
        return coord;
    }
    
    vec2 pixelate(vec2 coord, vec2 size)
    {
        return floor( coord / size ) * size;
    }
    
    void main(void)
    {
        vec2 coord = mapCoord(vTextureCoord);
        coord = pixelate(coord, size);
        coord = unmapCoord(coord);
        gl_FragColor = texture2D(uSampler, coord) * vColor;
    }
`;
class RadialFilterShader extends DefaultShader$1 {
  constructor(context) {
    super(context);
    this._radius = 0;
    this._cutoff = 1;
  }
  set radius(v) {
    this._radius = v;
    this.redraw();
  }
  get radius() {
    return this._radius;
  }
  set cutoff(v) {
    this._cutoff = v;
    this.redraw();
  }
  get cutoff() {
    return this._cutoff;
  }
  useDefault() {
    return this._radius === 0;
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    this._setUniform("radius", 2 * (this._radius - 0.5) / operation.getRenderWidth(), this.gl.uniform1f);
    this._setUniform("cutoff", 0.5 * operation.getRenderWidth() / this._cutoff, this.gl.uniform1f);
  }
}
RadialFilterShader.vertexShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    attribute vec2 aVertexPosition;
    attribute vec2 aTextureCoord;
    attribute vec4 aColor;
    uniform vec2 projection;
    varying vec2 pos;
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    void main(void){
        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);
        vTextureCoord = aTextureCoord;
        vColor = aColor;
        gl_Position.y = -sign(projection.y) * gl_Position.y;
        pos = gl_Position.xy;
    }
`;
RadialFilterShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec2 pos;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    uniform float radius;
    uniform float cutoff;
    void main(void){
        vec4 color = texture2D(uSampler, vTextureCoord);
        float f = max(0.0, min(1.0, 1.0 - (length(pos) - radius) * cutoff));
        gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor * f;
    }
`;
class RoundedRectangleShader extends DefaultShader$1 {
  constructor(context) {
    super(context);
    this._blend = 0;
    this._radius = [1, 1, 1, 1];
    this._stroke = 0;
    this._fc = 16777215;
    this._fillColor = this._getNormalizedColor(4294967295);
    this._strokeColor = this._getNormalizedColor(16777215);
  }
  set blend(p) {
    this._blend = Math.min(Math.max(p, 0), 1);
  }
  set radius(v) {
    if (Array.isArray(v)) {
      if (v.length === 2) {
        this._radius = [v[0], v[1], v[0], v[1]];
      } else if (v.length === 3) {
        this._radius = [v[0], v[1], v[2], this._radius[3]];
      } else if (v.length === 4) {
        this._radius = v;
      } else {
        this._radius = [v[0], v[0], v[0], v[0]];
      }
    } else {
      this._radius = [v, v, v, v];
    }
    this.redraw();
  }
  get radius() {
    return this._radius;
  }
  set topLeft(num) {
    this._radius[0] = num;
    this.redraw();
  }
  get topLeft() {
    return this._radius[0];
  }
  set topRight(num) {
    this._radius[1] = num;
    this.redraw();
  }
  get topRight() {
    return this._radius[1];
  }
  set bottomRight(num) {
    this._radius[2] = num;
    this.redraw();
  }
  get bottomRight() {
    return this._radius[2];
  }
  set bottomLeft(num) {
    this._radius[3] = num;
    this.redraw();
  }
  get bottomLeft() {
    return this._radius[4];
  }
  set strokeColor(argb) {
    this._sc = argb;
    this._strokeColor = this._getNormalizedColor(argb);
    this.redraw();
  }
  get strokeColor() {
    return this._sc;
  }
  set fillColor(argb) {
    this._fc = argb;
    this._fillColor = this._getNormalizedColor(argb);
    this.redraw();
  }
  get fillColor() {
    return this._fc;
  }
  set stroke(num) {
    this._stroke = num;
    this.redraw();
  }
  get stroke() {
    return this._stroke;
  }
  _getNormalizedColor(color) {
    const col = StageUtils.getRgbaComponentsNormalized(color);
    col[0] *= col[3];
    col[1] *= col[3];
    col[2] *= col[3];
    return new Float32Array(col);
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    const owner = operation.shaderOwner;
    const renderPrecision = this.ctx.stage.getRenderPrecision();
    const _radius = this._radius.map((r) => (r + 0.5) * renderPrecision);
    this._setUniform("radius", new Float32Array(_radius), this.gl.uniform4fv);
    this._setUniform("alpha", operation.getElementCore(0).renderContext.alpha, this.gl.uniform1f);
    this._setUniform("blend", this._blend, this.gl.uniform1f);
    this._setUniform("strokeColor", this._strokeColor, this.gl.uniform4fv);
    this._setUniform("fillColor", this._fillColor, this.gl.uniform4fv);
    this._setUniform("stroke", this._stroke * renderPrecision, this.gl.uniform1f);
    this._setUniform("resolution", new Float32Array([owner._w * renderPrecision, owner._h * renderPrecision]), this.gl.uniform2fv);
  }
}
RoundedRectangleShader.vertexShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    attribute vec2 aVertexPosition;
    attribute vec2 aTextureCoord;

    attribute vec4 aColor;
    uniform vec2 projection;
    varying vec2 vTextureCoord;
    varying vec4 vColor;

    void main(void){
        gl_Position = vec4(aVertexPosition.x * projection.x - 1.0, aVertexPosition.y * -abs(projection.y) + 1.0, 0.0, 1.0);
        vTextureCoord = aTextureCoord;
        vColor = aColor;
        gl_Position.y = -sign(projection.y) * gl_Position.y;
    }
`;
RoundedRectangleShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif

    #define PI 3.14159265359

    varying vec2 vTextureCoord;
    varying vec4 vColor;

    uniform sampler2D uSampler;
    uniform vec2 resolution;
    uniform vec4 radius;
    uniform float stroke;
    uniform vec4 strokeColor;
    uniform vec4 fillColor;
    uniform float alpha;
    uniform float fill;
    uniform float blend;
    
    float boxDist(vec2 p, vec2 size, float radius){
        size -= vec2(radius);
        vec2 d = abs(p) - size;
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;
    }
    
    float fillMask(float dist){
        return clamp(-dist, 0.0, 1.0);
    }
    
    float innerBorderMask(float dist, float width){
        float alpha1 = clamp(dist + width, 0.0, 1.0);
        float alpha2 = clamp(dist, 0.0, 1.0);
        return alpha1 - alpha2;
    }

    void main() {
        vec2 halfRes = 0.5 * resolution.xy;
        float r = 0.0;
        if (vTextureCoord.x < 0.5 && vTextureCoord.y < 0.5) {
            r = radius[0];
        } else if (vTextureCoord.x >= 0.5 && vTextureCoord.y < 0.5) {
            r = radius[1];
        } else if (vTextureCoord.x >= 0.5 && vTextureCoord.y >= 0.5) {
            r = radius[2];
        } else {
            r = radius[3];
        }
        
        float b = boxDist(vTextureCoord.xy * resolution - halfRes, halfRes - 0.005, r);
        vec4 tex = texture2D(uSampler, vTextureCoord) * vColor;
        vec4 blend = mix(vec4(1.0) * alpha, tex, blend);     
        vec4 layer1 = mix(vec4(0.0), tex * fillColor, fillMask(b));
        gl_FragColor = mix(layer1, blend * strokeColor, innerBorderMask(b, stroke));
    }
`;
class FadeOutShader extends DefaultShader$1 {
  constructor(context) {
    super(context);
    this._fade = [0, 0, 0, 0];
  }
  set top(num) {
    this._fade[0] = num;
    this.redraw();
  }
  get top() {
    return this._fade[0];
  }
  set right(num) {
    this._fade[1] = num;
    this.redraw();
  }
  get right() {
    return this._fade[1];
  }
  set bottom(num) {
    this._fade[2] = num;
    this.redraw();
  }
  get bottom() {
    return this._fade[2];
  }
  set left(num) {
    this._fade[3] = num;
    this.redraw();
  }
  get left() {
    return this._fade[3];
  }
  set fade(v) {
    if (Array.isArray(v)) {
      if (v.length === 2) {
        this._fade = [v[0], v[1], v[0], v[1]];
      } else if (v.length === 3) {
        this._fade = [v[0], v[1], v[2], this._fade[3]];
      } else if (v.length === 4) {
        this._fade = v;
      } else {
        this._fade = [v[0], v[0], v[0], v[0]];
      }
    } else {
      this._fade = [v, v, v, v];
    }
    this.redraw();
  }
  get fade() {
    return this._fade;
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    const owner = operation.shaderOwner;
    const renderPrecision = this.ctx.stage.getRenderPrecision();
    const fade = this._fade.map((f) => f * renderPrecision);
    this._setUniform("fade", new Float32Array(fade), this.gl.uniform4fv);
    this._setUniform("resolution", new Float32Array([owner._w * renderPrecision, owner._h * renderPrecision]), this.gl.uniform2fv);
  }
}
FadeOutShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    uniform vec2 resolution;
    uniform vec4 fade;
    
    void main() {
        vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
        vec2 halfRes = 0.5 * resolution.xy;
        vec2 point = vTextureCoord.xy * resolution.xy;
        
        vec2 pos1;
        vec2 pos2;
        vec2 d;
        float c;
        float t = 0.0;
             
        if(fade[0] > 0.0) {
            pos1 = vec2(point.x, point.y);
            pos2 = vec2(point.x, point.y + fade[0]);
            d = pos2 - pos1;
            c = dot(pos1, d) / dot(d, d);
            t = smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0));
            color = mix(vec4(0.0), color, t);
        }
        
        if(fade[1] > 0.0) {
            vec2 pos1 = vec2(point.x - resolution.x - fade[1], vTextureCoord.y);
            vec2 pos2 = vec2(point.x - resolution.x, vTextureCoord.y);
            d = pos1 - pos2;
            c = dot(pos2, d) / dot(d, d);
            t = smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0));
            color = mix(vec4(0.0), color, t);
        }
        
        if(fade[2] > 0.0) {
            vec2 pos1 = vec2(vTextureCoord.x, point.y - resolution.y - fade[2]);
            vec2 pos2 = vec2(vTextureCoord.x, point.y - resolution.y);
            d = pos1 - pos2;
            c = dot(pos2, d) / dot(d, d);
            t = smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0));
            color = mix(vec4(0.0), color, t);
        }
        
        if(fade[3] > 0.0) {
            pos1 = vec2(point.x, point.y);
            pos2 = vec2(point.x + fade[3], point.y);
            d = pos2 - pos1;
            c = dot(pos1, d) / dot(d, d);
            t = smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0));
            color = mix(vec4(0.0), color, t);
        }
        
        gl_FragColor = color;
    }
`;
class VignetteShader extends DefaultShader$1 {
  constructor(context) {
    super(context);
    this._magnitude = 1.3;
    this._intensity = 0.7;
    this._pivot = [0.5, 0.5];
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    this._setUniform("magnitude", this._magnitude, this.gl.uniform1f);
    this._setUniform("intensity", this._intensity, this.gl.uniform1f);
    this._setUniform("pivot", new Float32Array(this._pivot), this.gl.uniform2fv);
    this.redraw();
  }
  set pivot(v) {
    if (Array.isArray(v)) {
      this._pivot = v;
    } else {
      this._pivot = [v, v];
    }
    this.redraw();
  }
  get pivotX() {
    return this._pivot[0];
  }
  set pivotX(v) {
    this._pivot[0] = v;
    this.redraw();
  }
  get pivotY() {
    return this._pivot[1];
  }
  set pivotY(v) {
    this._pivot[1] = v;
    this.redraw();
  }
  get intensity() {
    return this._intensity;
  }
  set intensity(v) {
    this._intensity = v;
    this.redraw();
  }
  get magnitude() {
    return this._magnitude;
  }
  set magnitude(v) {
    this._magnitude = v;
    this.redraw();
  }
}
VignetteShader.vertexShaderSource = DefaultShader$1.vertexShaderSource;
VignetteShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;

    uniform float magnitude;
    uniform float intensity;
    uniform vec2 pivot;

    void main() {
        vec2 uv = vTextureCoord.xy - pivot + vec2(0.5);
        uv.x = clamp(uv.x, 0.0, 1.0);
        uv.y = clamp(uv.y, 0.0, 1.0);
   
        uv *=  1.00 - uv.yx;
        float vig = uv.x * uv.y * 25.0 * intensity;
        vig = pow(vig, 0.45 * magnitude);
        vec4 fragColor = vec4(vig) * vColor;
        gl_FragColor = texture2D(uSampler, vTextureCoord) * fragColor;

    }
`;
class SpinnerShader extends DefaultShader$1 {
  constructor(ctx) {
    super(ctx);
    this._radius = 100;
    this._width = 50;
    this._period = 1;
    this._angle = 0.5;
    this._smooth = 5e-3;
    this._color = 4294967295;
    this._backgroundColor = 4278190080;
    this._time = Date.now();
  }
  set radius(v) {
    this._radius = v;
    this.redraw();
  }
  set width(v) {
    this._width = v;
    this.redraw();
  }
  set period(v) {
    this._period = v;
    this.redraw();
  }
  set angle(v) {
    this._angle = v;
    this.redraw();
  }
  set smooth(v) {
    this._smooth = v;
    this.redraw();
  }
  set color(v) {
    this._color = v;
    this.redraw();
  }
  set backgroundColor(v) {
    this._backgroundColor = v;
    this.redraw();
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    const owner = operation.shaderOwner;
    this._setUniform("iTime", Date.now() - this._time, this.gl.uniform1f);
    const renderPrecision = this.ctx.stage.getRenderPrecision();
    this._setUniform("radius", this._radius * renderPrecision, this.gl.uniform1f);
    this._setUniform("width", this._width * renderPrecision, this.gl.uniform1f);
    this._setUniform("period", this._period, this.gl.uniform1f);
    this._setUniform("angle", this._angle, this.gl.uniform1f);
    this._setUniform("smooth", this._smooth, this.gl.uniform1f);
    this._setUniform("color", new Float32Array(StageUtils.getRgbaComponentsNormalized(this._color)), this.gl.uniform4fv);
    this._setUniform("backgroundColor", new Float32Array(StageUtils.getRgbaComponentsNormalized(this._backgroundColor)), this.gl.uniform4fv);
    this._setUniform("resolution", new Float32Array([owner._w * renderPrecision, owner._h * renderPrecision]), this.gl.uniform2fv);
    this.redraw();
  }
}
SpinnerShader.vertexShaderSource = DefaultShader$1.vertexShaderSource;
SpinnerShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;

    uniform float iTime;
    uniform float radius;
    uniform float width;
    uniform float period;
    uniform float angle;
    uniform float smooth;
    uniform vec2 resolution;

    uniform vec4 color;
    uniform vec4 backgroundColor;

    float ratio = resolution.y / resolution.x;

    vec2 transpose_pos(vec2 pos) {
        if (ratio < 1.) {
            float diff = 0.5 - pos.x;
            pos.x = 0.5 - diff / ratio;
        } else {
            float diff = 0.5 - pos.y;
            pos.y = 0.5 - diff * ratio;
        }
        return pos;
    }

    float get_angle(vec2 pos) {
        pos = transpose_pos(pos);
        float a = atan(pos.y - 0.5, pos.x - 0.5);
        a = (1.0+a/3.14159)/2.0;
        
        return a;
    }

    float dist(vec2 pos1, vec2 pos2) {
        pos1 = transpose_pos(pos1);
        return distance(pos1, pos2);
    }

    void main()
    {
        vec2 fragCoord = vTextureCoord;
        vec4 fragColor = vColor;
        
        vec2 st = vTextureCoord;
        float pct = dist(st, vec2(0.5));

        float a = get_angle(st);
        float t = iTime / 1000.0 / period;

        float inner = max((radius - width) / resolution.x, (radius - width) / resolution.y);
        float outer = max(radius / resolution.x, radius / resolution.y);

        float x1 = mod(t, 1.0);
        float x2 = mod(t + angle, 1.0);

        if (x1 < x2) {
            if (a > x1 && a < x2) {
                float val = (1.0 - (x2 - a) / angle) * smoothstep(0.0, 3. * smooth, (x2 - a));
                fragColor = mix(backgroundColor, color, val);
            } else {
                fragColor = backgroundColor;
            }
        } else {
            if (a < x2) {
                float val = (1.0 - (x2 - a) / angle) * smoothstep(0.0, 3. * smooth, (x2 - a));
                fragColor = mix(backgroundColor, color, val);
            } else if (a > x1) {
                float val = (1.0 - (1.0 + x2 - a) / angle) * smoothstep(0.0, 3. * smooth, (1.0 + x2 - a));
                fragColor = mix(backgroundColor, color, val);
            } else {
                fragColor = backgroundColor;
            }
        }

        float s = smoothstep(inner, inner + smooth + 0.00001, pct) * (1.0 - smoothstep(outer, outer + smooth + 0.00001, pct));
        gl_FragColor = texture2D(uSampler, fragCoord) * vColor * (1. - s * fragColor.a) + fragColor * s;
    }
`;
class HoleShader extends DefaultShader$1 {
  constructor(context) {
    super(context);
    this._x = 0;
    this._y = 0;
    this._w = 0;
    this._h = 0;
    this._radius = 0;
  }
  get x() {
    return this._x;
  }
  set x(v) {
    this._x = v;
    this.redraw();
  }
  get y() {
    return this._y;
  }
  set y(v) {
    this._y = v;
    this.redraw();
  }
  get w() {
    return this._w;
  }
  set w(v) {
    this._w = v;
    this.redraw();
  }
  get h() {
    return this._h;
  }
  set h(v) {
    this._h = v;
    this.redraw();
  }
  get radius() {
    return this._radius;
  }
  set radius(v) {
    this._radius = v;
    this.redraw();
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    const owner = operation.shaderOwner;
    const renderPrecision = this.ctx.stage.getRenderPrecision();
    this._setUniform("x", this._x * renderPrecision, this.gl.uniform1f);
    this._setUniform("y", this._y * renderPrecision, this.gl.uniform1f);
    this._setUniform("w", this._w * renderPrecision, this.gl.uniform1f);
    this._setUniform("h", this._h * renderPrecision, this.gl.uniform1f);
    this._setUniform("radius", (this._radius + 0.5) * renderPrecision, this.gl.uniform1f);
    this._setUniform("resolution", new Float32Array([owner._w * renderPrecision, owner._h * renderPrecision]), this.gl.uniform2fv);
  }
  useDefault() {
    return this._x === 0 && this._y === 0 && this._w === 0 && this._h === 0;
  }
}
HoleShader.vertexShaderSource = DefaultShader$1.vertexShaderSource;
HoleShader.fragmentShaderSource = `
   #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    uniform float x;
    uniform float y;
    uniform float w;
    uniform float h;
    uniform vec2 resolution;
    uniform float radius;

    float roundBox(vec2 p, vec2 b, float r) {
        float d = length(max(abs(p)-b+r, 0.1))-r;
        return smoothstep(1.0, 0.0, d);
    }

    void main(void){
        vec4 color = texture2D(uSampler, vTextureCoord);
        vec2 pos = vTextureCoord.xy * resolution - vec2(x, y) - vec2(w, h) / 2.0;
        vec2 size = vec2(w, h) / 2.0;
        float b = roundBox(pos, size, radius);
        gl_FragColor = mix(color, vec4(0.0), b) * vColor;
    }
`;
class RadialGradientShader extends DefaultShader$1 {
  constructor(context) {
    super(context);
    this._pivot = [0, 0];
    this._ic = 4294967295;
    this._normalizedIC = this._getNormalizedColor(this._ic);
    this._oc = 16777215;
    this._normalizedOC = this._getNormalizedColor(this._oc);
    this._radius = 0;
  }
  set radiusX(v) {
    this.radius = v;
  }
  get radiusX() {
    return this._radius;
  }
  set radiusY(v) {
    this._radiusY = v;
    this.redraw();
  }
  get radiusY() {
    return this._radiusY;
  }
  set radius(v) {
    this._radius = v;
    this.redraw();
  }
  set innerColor(argb) {
    this._ic = argb;
    this._normalizedIC = this._getNormalizedColor(argb);
    this.redraw();
  }
  get innerColor() {
    return this._ic;
  }
  set outerColor(argb) {
    this._oc = argb;
    this._normalizedOC = this._getNormalizedColor(argb);
    this.redraw();
  }
  set color(argb) {
    this.innerColor = argb;
  }
  get color() {
    return this.innerColor;
  }
  get outerColor() {
    return this._ic;
  }
  set x(f) {
    this._x = f;
    this.redraw();
  }
  set y(f) {
    this._y = f;
    this.redraw();
  }
  set pivot(v) {
    if (Array.isArray(v) && v.length === 2) {
      this._pivot = v;
    } else if (Array.isArray(v)) {
      this._pivot = [v[0], v[1] || v[0]];
    } else {
      this._pivot = [v, v];
    }
    this.redraw();
  }
  get pivot() {
    return this._pivot[0];
  }
  set pivotY(f) {
    this._pivot[1] = f;
    this.redraw();
  }
  get pivotY() {
    return this._pivot[1];
  }
  set pivotX(f) {
    this._pivot[0] = f;
    this.redraw();
  }
  get pivotX() {
    return this._pivot[0];
  }
  _getNormalizedColor(color) {
    const col = StageUtils.getRgbaComponentsNormalized(color);
    col[0] *= col[3];
    col[1] *= col[3];
    col[2] *= col[3];
    return new Float32Array(col);
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    const owner = operation.shaderOwner;
    if (this._x) {
      this._pivot[0] = this._x / owner.w;
    }
    if (this._y) {
      this._pivot[1] = this._y / owner.h;
    }
    if (this._radius === 0) {
      this._radius = owner.w * 0.5;
    }
    this._setUniform("innerColor", this._normalizedIC, this.gl.uniform4fv);
    this._setUniform("fill", StageUtils.getRgbaComponentsNormalized(this._oc)[3], this.gl.uniform1f);
    this._setUniform("outerColor", this._normalizedOC, this.gl.uniform4fv);
    this._setUniform("pivot", new Float32Array(this._pivot), this.gl.uniform2fv);
    this._setUniform("resolution", new Float32Array([owner._w, owner._h]), this.gl.uniform2fv);
    this._setUniform("alpha", operation.getElementCore(0).renderContext.alpha, this.gl.uniform1f);
    this._setUniform("radius", this._radius, this.gl.uniform1f);
    this._setUniform("radiusY", this._radiusY || this._radius, this.gl.uniform1f);
  }
}
RadialGradientShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    
    #define PI 3.14159265359
    
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;
    uniform vec2 resolution;
    uniform vec2 pivot;
    uniform vec4 innerColor;
    uniform vec4 outerColor;
    uniform float radius;
    uniform float radiusY;
    uniform float alpha;
    uniform float fill;
    uniform float aspectRatio;
    
    void main() {
        vec2 point = vTextureCoord.xy * resolution;
        vec2 projection = vec2(pivot.x * resolution.x, pivot.y * resolution.y);
        float d = length((point - projection) / vec2(radius * 2.0, radiusY * 2.0));
        vec4 color = mix(texture2D(uSampler, vTextureCoord) * vColor, outerColor * alpha, fill);
        gl_FragColor = mix(innerColor * alpha, color, smoothstep(0.0, 1.0, d));
    }
`;
class Light3dShader extends DefaultShader$1 {
  constructor(ctx) {
    super(ctx);
    this._strength = 0.5;
    this._ambient = 0.5;
    this._fudge = 0.4;
    this._rx = 0;
    this._ry = 0;
    this._z = 0;
    this._pivotX = NaN;
    this._pivotY = NaN;
    this._pivotZ = 0;
    this._lightY = 0;
    this._lightZ = 0;
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    let vr = operation.shaderOwner;
    let element = vr.element;
    let pivotX = isNaN(this._pivotX) ? element.pivotX * vr.w : this._pivotX;
    let pivotY = isNaN(this._pivotY) ? element.pivotY * vr.h : this._pivotY;
    let coords = vr.getRenderTextureCoords(pivotX, pivotY);
    let rz = -Math.atan2(vr._renderContext.tc, vr._renderContext.ta);
    let gl = this.gl;
    this._setUniform("pivot", new Float32Array([coords[0], coords[1], this._pivotZ]), gl.uniform3fv);
    this._setUniform("rot", new Float32Array([this._rx, this._ry, rz]), gl.uniform3fv);
    this._setUniform("z", this._z, gl.uniform1f);
    this._setUniform("lightY", this.lightY, gl.uniform1f);
    this._setUniform("lightZ", this.lightZ, gl.uniform1f);
    this._setUniform("strength", this._strength, gl.uniform1f);
    this._setUniform("ambient", this._ambient, gl.uniform1f);
    this._setUniform("fudge", this._fudge, gl.uniform1f);
  }
  set strength(v) {
    this._strength = v;
    this.redraw();
  }
  get strength() {
    return this._strength;
  }
  set ambient(v) {
    this._ambient = v;
    this.redraw();
  }
  get ambient() {
    return this._ambient;
  }
  set fudge(v) {
    this._fudge = v;
    this.redraw();
  }
  get fudge() {
    return this._fudge;
  }
  get rx() {
    return this._rx;
  }
  set rx(v) {
    this._rx = v;
    this.redraw();
  }
  get ry() {
    return this._ry;
  }
  set ry(v) {
    this._ry = v;
    this.redraw();
  }
  get z() {
    return this._z;
  }
  set z(v) {
    this._z = v;
    this.redraw();
  }
  get pivotX() {
    return this._pivotX;
  }
  set pivotX(v) {
    this._pivotX = v + 1;
    this.redraw();
  }
  get pivotY() {
    return this._pivotY;
  }
  set pivotY(v) {
    this._pivotY = v + 1;
    this.redraw();
  }
  get lightY() {
    return this._lightY;
  }
  set lightY(v) {
    this._lightY = v;
    this.redraw();
  }
  get pivotZ() {
    return this._pivotZ;
  }
  set pivotZ(v) {
    this._pivotZ = v;
    this.redraw();
  }
  get lightZ() {
    return this._lightZ;
  }
  set lightZ(v) {
    this._lightZ = v;
    this.redraw();
  }
  useDefault() {
    return this._rx === 0 && this._ry === 0 && this._z === 0 && this._strength === 0 && this._ambient === 1;
  }
}
Light3dShader.vertexShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    attribute vec2 aVertexPosition;
    attribute vec2 aTextureCoord;
    attribute vec4 aColor;
    uniform vec2 projection;
    varying vec2 vTextureCoord;
    varying vec4 vColor;

    uniform float fudge;
    uniform float strength;
    uniform float ambient;
    uniform float z;
    uniform float lightY;
    uniform float lightZ;
    uniform vec3 pivot;
    uniform vec3 rot;
    varying vec3 pos;

    void main(void) {
        pos = vec3(aVertexPosition.xy, z);
        
        pos -= pivot;
        
        // Undo XY rotation
        mat2 iRotXy = mat2( cos(rot.z), sin(rot.z), 
                           -sin(rot.z), cos(rot.z));
        pos.xy = iRotXy * pos.xy;
        
        // Perform 3d rotations
        gl_Position.x = cos(rot.x) * pos.x - sin(rot.x) * pos.z;
        gl_Position.y = pos.y;
        gl_Position.z = sin(rot.x) * pos.x + cos(rot.x) * pos.z;
        
        pos.x = gl_Position.x;
        pos.y = cos(rot.y) * gl_Position.y - sin(rot.y) * gl_Position.z;
        pos.z = sin(rot.y) * gl_Position.y + cos(rot.y) * gl_Position.z;
        
        // Redo XY rotation
        iRotXy[0][1] = -iRotXy[0][1];
        iRotXy[1][0] = -iRotXy[1][0];
        pos.xy = iRotXy * pos.xy; 

        // Undo translate to pivot position
        pos.xyz += pivot;

        pos = vec3(pos.x * projection.x - 1.0, pos.y * -abs(projection.y) + 1.0, pos.z * projection.x);
        
        // Set depth perspective
        float perspective = 1.0 + fudge * pos.z;

        pos.z += lightZ * projection.x;

        // Map coords to gl coordinate space.
        // Set z to 0 because we don't want to perform z-clipping
        gl_Position = vec4(pos.xy, 0.0, perspective);

        // Correct light source position.
        pos.y += lightY * abs(projection.y);

        vTextureCoord = aTextureCoord;
        vColor = aColor;
        
        gl_Position.y = -sign(projection.y) * gl_Position.y;
    }
`;
Light3dShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    varying vec3 pos;
    uniform sampler2D uSampler;
    uniform float ambient;
    uniform float strength;
    void main(void){
        vec4 rgba = texture2D(uSampler, vTextureCoord);
        float d = length(pos);
        float n = 1.0 / max(0.1, d);
        rgba.rgb = rgba.rgb * (strength * n + ambient);
        gl_FragColor = rgba * vColor;
    }
`;
class PerspectiveShader extends DefaultShader$1 {
  constructor(ctx) {
    super(ctx);
    this._fudge = 0.2;
    this._rx = 0;
    this._ry = 0;
    this._z = 1;
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    const vr = operation.shaderOwner;
    const element = vr.element;
    const pivotX = element.pivotX * vr.w;
    const pivotY = element.pivotY * vr.h;
    const coords = vr.getRenderTextureCoords(pivotX, pivotY);
    const rz = -Math.atan2(vr._renderContext.tc, vr._renderContext.ta);
    const gl = this.gl;
    this._setUniform("pivot", new Float32Array([coords[0], coords[1], 0]), gl.uniform3fv);
    this._setUniform("rot", new Float32Array([this._rx, this._ry, rz]), gl.uniform3fv);
    this._setUniform("z", this._z, gl.uniform1f);
    this._setUniform("fudge", this._fudge, gl.uniform1f);
  }
  set fudge(v) {
    this._fudge = v;
    this.redraw();
  }
  get fudge() {
    return this._fudge;
  }
  get rx() {
    return this._rx;
  }
  set rx(v) {
    this._rx = v;
    this.redraw();
  }
  get ry() {
    return this._ry;
  }
  set ry(v) {
    this._ry = v;
    this.redraw();
  }
  get z() {
    return this._z;
  }
  set z(v) {
    this._z = v;
    this.redraw();
  }
  useDefault() {
    return this._rx === 0 && this._ry === 0 && this._z === 0;
  }
}
PerspectiveShader.vertexShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    attribute vec2 aVertexPosition;
    attribute vec2 aTextureCoord;
    attribute vec4 aColor;
    uniform vec2 projection;
    varying vec2 vTextureCoord;
    varying vec4 vColor;

    uniform float z;
    uniform vec3 pivot;
    uniform vec3 rot;
    varying vec3 pos;

    void main(void) {
        pos = vec3(aVertexPosition.xy, z);
        
        pos -= pivot;
        
        // Undo XY rotation
        mat2 iRotXy = mat2( cos(rot.z), sin(rot.z), 
                           -sin(rot.z), cos(rot.z));
        pos.xy = iRotXy * pos.xy;
        
        // Perform 3d rotations
        gl_Position.x = cos(rot.x) * pos.x - sin(rot.x) * pos.z;
        gl_Position.y = pos.y;
        gl_Position.z = sin(rot.x) * pos.x + cos(rot.x) * pos.z;
        
        pos.x = gl_Position.x;
        pos.y = cos(rot.y) * gl_Position.y - sin(rot.y) * gl_Position.z;
        pos.z = sin(rot.y) * gl_Position.y + cos(rot.y) * gl_Position.z;
        
        // Redo XY rotation
        iRotXy[0][1] = -iRotXy[0][1];
        iRotXy[1][0] = -iRotXy[1][0];
        pos.xy = iRotXy * pos.xy; 

        // Undo translate to pivot position
        pos.xyz += pivot;

        pos = vec3(pos.x * projection.x - 1.0, pos.y * -abs(projection.y) + 1.0, pos.z * projection.x);
        
        // Map coords to gl coordinate space.
        // Set z to 0 because we don't want to perform z-clipping
        gl_Position = vec4(pos.xy, 0.0, z);

        vTextureCoord = aTextureCoord;
        vColor = aColor;
        
        gl_Position.y = -sign(projection.y) * gl_Position.y;
    }
`;
PerspectiveShader.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    uniform sampler2D uSampler;

    uniform vec3 rot;
    uniform float fudge;

    void main(void) {
        vec2 coords = vTextureCoord;

        coords.xy -= vec2(0.5);
        coords.y = coords.y + (sign(rot[0]) * 0.5 - coords.x) * sin(rot[0]) * fudge * coords.y;
        coords.x = coords.x + (sign(rot[1]) * 0.5 - coords.y) * sin(rot[1]) * fudge * coords.x;
        coords.xy += vec2(0.5);

        if (coords.x < 0.0 || coords.x > 1.0 || coords.y < 0.0 || coords.y > 1.0) {
            gl_FragColor = vec4(0.0);
        } else {
            gl_FragColor = texture2D(uSampler, coords) * vColor;
        }
    }
`;
class MagnifierShader extends DefaultShader$1 {
  constructor(context) {
    super(context);
    this._x = 0;
    this._y = 0;
    this._w = 0;
    this._h = 0;
    this._radius = 0;
    this._magnification = 0.6;
  }
  get x() {
    return this._x;
  }
  set x(v) {
    this._x = v;
    this.redraw();
  }
  get y() {
    return this._y;
  }
  set y(v) {
    this._y = v;
    this.redraw();
  }
  get w() {
    return this._w;
  }
  set w(v) {
    this._w = v;
    this.redraw();
  }
  get h() {
    return this._h;
  }
  set h(v) {
    this._h = v;
    this.redraw();
  }
  get magnification() {
    return this._magnification;
  }
  set magnification(v) {
    this._magnification = v;
    this.redraw();
  }
  get radius() {
    return this._radius;
  }
  set radius(v) {
    this._radius = v;
    this.redraw();
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    const owner = operation.shaderOwner;
    const renderPrecision = this.ctx.stage.getRenderPrecision();
    this._setUniform("x", this._x * renderPrecision, this.gl.uniform1f);
    this._setUniform("y", this._y * renderPrecision, this.gl.uniform1f);
    this._setUniform("w", this._w * renderPrecision, this.gl.uniform1f);
    this._setUniform("h", this._h * renderPrecision, this.gl.uniform1f);
    this._setUniform("magnification", this._magnification, this.gl.uniform1f);
    this._setUniform(
      "radius",
      (this._radius + 0.5) * renderPrecision,
      this.gl.uniform1f
    );
    this._setUniform(
      "resolution",
      new Float32Array([
        owner._w * renderPrecision,
        owner._h * renderPrecision
      ]),
      this.gl.uniform2fv
    );
  }
  useDefault() {
    return this._w === 0 && this._h === 0;
  }
}
MagnifierShader.vertexShaderSource = DefaultShader$1.vertexShaderSource;
MagnifierShader.fragmentShaderSource = `
	  #ifdef GL_ES
		# ifdef GL_FRAGMENT_PRECISION_HIGH
		precision highp float;
		# else
		precision lowp float;
		# endif
	  #endif

	  varying vec2 vTextureCoord;
	  varying vec4 vColor;
	  uniform sampler2D uSampler;
	  uniform float x;
	  uniform float y;
	  uniform float w;
	  uniform float h;
	  uniform vec2 resolution;
	  uniform float radius;
	  uniform float magnification;
  
	  float roundBox(vec2 p, vec2 b, float r) {
		  float d = length(max(abs(p)-b+r, 0.1))-r;
		  return smoothstep(1.0, 0.0, d);
	  }

	  float inside(vec2 v) {
		vec2 s = step(vec2(0.0, 0.0), v) - step(vec2(1.0, 1.0), v);
		return s.x * s.y;   
      }
  
	  void main(void) {
		vec4 color = texture2D(uSampler, vTextureCoord);
		vec2 pos = vTextureCoord.xy * resolution - vec2(x, y) - vec2(w, h) / 2.0;
		vec2 size = vec2(w, h) / 2.0;
		float b = roundBox(pos, size, radius);
		vec2 pos2 = (vTextureCoord.xy * magnification * resolution + vec2(x, y) * magnification) / resolution;
		gl_FragColor = mix(color, texture2D(uSampler, pos2) * inside(pos2), b) * vColor;
	  }
  `;
class SpinnerShader2 extends DefaultShader$1 {
  constructor(context) {
    super(context);
    this._period = 1;
    this._stroke = 0;
    this._showDot = true;
    this._clockwise = true;
    this._bc = 4278190080;
    this._normalizedBC = this._getNormalizedColor(this._bc);
    this._c = 4294967295;
    this._normalizedC = this._getNormalizedColor(this._c);
  }
  set radius(v) {
    if (v === 0) {
      v = 1;
    }
    this._radius = v;
  }
  set stroke(value) {
    this._stroke = Math.abs(value);
  }
  get stroke() {
    return this._stroke;
  }
  set color(argb) {
    this._c = argb;
    this._normalizedC = this._getNormalizedColor(argb);
  }
  get color() {
    return this._c;
  }
  set backgroundColor(argb) {
    this._bc = argb;
    this._normalizedBC = this._getNormalizedColor(argb);
  }
  get backgroundColor() {
    return this._sc;
  }
  set showDot(bool) {
    this._showDot = bool;
  }
  get showDot() {
    return this._showDot;
  }
  set clockwise(bool) {
    this._clockwise = bool;
  }
  get clockwise() {
    return this._clockwise;
  }
  set period(v) {
    this._period = v;
  }
  get period() {
    return this._period;
  }
  _getNormalizedColor(color) {
    const col = StageUtils.getRgbaComponentsNormalized(color);
    col[0] *= col[3];
    col[1] *= col[3];
    col[2] *= col[3];
    return new Float32Array(col);
  }
  setupUniforms(operation) {
    super.setupUniforms(operation);
    const owner = operation.shaderOwner;
    const radius = this._radius || owner._w / 2;
    if (this._stroke === 0) {
      this._stroke = radius * 0.33;
    }
    this._setUniform("resolution", new Float32Array([owner._w, owner._h]), this.gl.uniform2fv);
    this._setUniform("color", this._normalizedC, this.gl.uniform4fv);
    this._setUniform("backgroundColor", this._normalizedBC, this.gl.uniform4fv);
    this._setUniform("stroke", this._stroke, this.gl.uniform1f);
    this._setUniform("radius", radius, this.gl.uniform1f);
    this._setUniform("direction", this._clockwise ? -1 : 1, this.gl.uniform1f);
    this._setUniform("showDot", !!this._showDot, this.gl.uniform1f);
    this._setUniform("time", Date.now() - SpinnerShader2.spinSync, this.gl.uniform1f);
    this._setUniform("period", this._period, this.gl.uniform1f);
    this._setUniform("alpha", operation.getElementCore(0).renderContext.alpha, this.gl.uniform1f);
    if (this._sc !== this._bc || this._stroke !== radius * 0.5) {
      this.redraw();
    }
  }
}
SpinnerShader2.spinSync = Date.now();
SpinnerShader2.fragmentShaderSource = `
    #ifdef GL_ES
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision lowp float;
    # endif
    #endif
    
    #define PI 3.14159265359
    
    varying vec2 vTextureCoord;
    varying vec4 vColor;
    
    uniform sampler2D uSampler;
    uniform vec2 resolution;
    uniform vec4 color;
    uniform vec4 backgroundColor;
    uniform float direction;
    uniform float radius;
    uniform float time;
    uniform float stroke;
    uniform float showDot;
    uniform float period;
    uniform float alpha;
    
    float circleDist(vec2 p, float radius){
        return length(p) - radius;
    }
    
    float fillMask(float dist){
        return clamp(-dist, 0.0, 1.0);
    }
    
    void main() {
        vec2 halfRes = 0.5 * resolution.xy;
        vec2 center = vTextureCoord.xy * resolution - halfRes;
        
        float c = max(-circleDist(center, radius - stroke), circleDist(center, radius));
        float rot = -(time / 1000.0 / period) * 6.0 * direction;
        center *= mat2(cos(rot), sin(rot), -sin(rot), cos(rot));
        
        float a = direction * atan(center.x, center.y) * PI * 0.05 + 0.45;
        
        float strokeRad = stroke * 0.5;
        a = mix(a, max(a, fillMask(circleDist(vec2(center.x, center.y + (radius - strokeRad)), strokeRad))), showDot);
        vec4 base = mix(vec4(0.0), backgroundColor * alpha, fillMask(c));
        gl_FragColor = mix(base, color * alpha, fillMask(c) * a);
    }
`;
const lightning = {
  Application,
  Component,
  Base,
  Utils: Utils$1,
  StageUtils,
  Element,
  Tools,
  Stage,
  ElementCore,
  ElementTexturizer,
  Texture,
  EventEmitter,
  shaders: {
    Grayscale: WebGLGrayscaleShader,
    BoxBlur: BoxBlurShader,
    Dithering: DitheringShader,
    CircularPush: CircularPushShader,
    Inversion: InversionShader,
    LinearBlur: LinearBlurShader,
    Outline: OutlineShader,
    Pixelate: PixelateShader,
    RadialFilter: RadialFilterShader,
    RoundedRectangle: RoundedRectangleShader,
    Spinner2: SpinnerShader2,
    FadeOut: FadeOutShader,
    Hole: HoleShader,
    Vignette: VignetteShader,
    Spinner: SpinnerShader,
    RadialGradient: RadialGradientShader,
    Light3d: Light3dShader,
    Perspective: PerspectiveShader,
    Magnifier: MagnifierShader,
    WebGLShader,
    WebGLDefaultShader: DefaultShader$1,
    C2dShader,
    C2dDefaultShader: DefaultShader2,
    c2d: {
      Grayscale: C2dGrayscaleShader,
      Blur: BlurShader
    }
  },
  textures: {
    RectangleTexture,
    NoiseTexture,
    TextTexture,
    ImageTexture,
    HtmlTexture,
    StaticTexture,
    StaticCanvasTexture,
    SourceTexture
  },
  components: {
    FastBlurComponent,
    BloomComponent,
    SmoothScaleComponent,
    BorderComponent,
    ListComponent
  },
  tools: {
    ObjMerger,
    ObjectListProxy,
    ObjectListWrapper
  }
};
if (Utils$1.isWeb) {
  window.lng = lightning;
}

//# sourceMappingURL=lightning.esm.js.map


/***/ }),

/***/ "../../../node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports __commonJS, __export, __toESM */
var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty;var __commonJS=(cb,mod)=>function(){return mod||(0, cb[__getOwnPropNames(cb)[0]])((mod={exports:{}}).exports,mod),mod.exports};var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0});},__copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:!0}):target,mod));




/***/ }),

/***/ "../../../node_modules/@storybook/addon-docs/dist/preview.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parameters: () => (/* binding */ parameters)
/* harmony export */ });
/* harmony import */ var _chunk_H6MOWX77_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs");
/* harmony import */ var _storybook_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@storybook/global");
/* harmony import */ var _storybook_global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_global__WEBPACK_IMPORTED_MODULE_1__);



var excludeTags=Object.entries(_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global.TAGS_OPTIONS??{}).reduce((acc,entry)=>{let[tag,option]=entry;return option.excludeFromDocsStories&&(acc[tag]=!0),acc},{}),parameters={docs:{renderer:async()=>{let{DocsRenderer}=await Promise.all(/* import() */[__webpack_require__.e(5600), __webpack_require__.e(451)]).then(__webpack_require__.bind(__webpack_require__, "../../../node_modules/@storybook/addon-docs/dist/DocsRenderer-CFRXHY34.mjs"));return new DocsRenderer},stories:{filter:story=>(story.tags||[]).filter(tag=>excludeTags[tag]).length===0&&!story.parameters.docs?.disable}}};




/***/ }),

/***/ "../../../node_modules/@storybook/addon-essentials/dist/actions/preview.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  argsEnhancers: () => (/* reexport */ argsEnhancers),
  loaders: () => (/* reexport */ loaders)
});

// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("storybook/internal/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__"
var external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_ = __webpack_require__("storybook/internal/preview-errors");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
;// CONCATENATED MODULE: ../../../node_modules/uuid/dist/esm-browser/native.js
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const esm_browser_native = ({
  randomUUID
});
;// CONCATENATED MODULE: ../../../node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
;// CONCATENATED MODULE: ../../../node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_browser_stringify = ((/* unused pure expression or super */ null && (stringify)));
;// CONCATENATED MODULE: ../../../node_modules/uuid/dist/esm-browser/v4.js




function v4(options, buf, offset) {
  if (esm_browser_native.randomUUID && !buf && !options) {
    return esm_browser_native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

/* harmony default export */ const esm_browser_v4 = (v4);
;// CONCATENATED MODULE: ../../../node_modules/@storybook/addon-actions/dist/preview.mjs





var ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`;var config={depth:10,clearOnStoryChange:!0,limit:50};var findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return !proto||callback(proto)?proto:findProto(proto,callback)},isReactSyntheticEvent=e=>!!(typeof e=="object"&&e&&findProto(e,proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name))&&typeof e.persist=="function"),serializeArg=a=>{if(isReactSyntheticEvent(a)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return typeof view=="object"&&view?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}return a},generateId=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?esm_browser_v4():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__" in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(render=>render.phase==="playing"||render.phase==="rendering");if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(deprecated)console.warn(error);else throw error}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),minDepth=5,serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:minDepth+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit);};return handler.isAction=!0,handler.implicit=options.implicit,handler}var isInInitialArgs=(name,initialArgs)=>typeof initialArgs[name]>"u"&&!(name in initialArgs),inferActionsFromArgTypesRegex=context=>{let{initialArgs,argTypes,id,parameters:{actions}}=context;if(!actions||actions.disable||!actions.argTypesRegex||!argTypes)return {};let argTypesRegex=new RegExp(actions.argTypesRegex);return Object.entries(argTypes).filter(([name])=>!!argTypesRegex.test(name)).reduce((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action(name,{implicit:!0,id})),acc),{})},addActionsFromArgTypes=context=>{let{initialArgs,argTypes,parameters:{actions}}=context;return actions?.disable||!argTypes?{}:Object.entries(argTypes).filter(([name,argType])=>!!argType.action).reduce((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action(typeof argType.action=="string"?argType.action:name)),acc),{})};var argsEnhancers=[addActionsFromArgTypes,inferActionsFromArgTypesRegex];var subscribed=!1,logActionsWhenMockCalled=context=>{let{parameters:{actions}}=context;if(!actions?.disable&&!subscribed&&"__STORYBOOK_TEST_ON_MOCK_CALL__" in external_STORYBOOK_MODULE_GLOBAL_.global&&typeof external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let onMockCall=external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__;onMockCall((mock,args)=>{let name=mock.getMockName();name!=="spy"&&(!/^next\/.*::/.test(name)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(prefix=>name.startsWith(prefix)))&&action(name)(args);}),subscribed=!0;}},loaders=[logActionsWhenMockCalled];



;// CONCATENATED MODULE: ../../../node_modules/@storybook/addon-essentials/dist/actions/preview.mjs



/***/ }),

/***/ "../../../node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: external "__STORYBOOK_MODULE_CORE_EVENTS__"
var external_STORYBOOK_MODULE_CORE_EVENTS_ = __webpack_require__("storybook/internal/core-events");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("storybook/internal/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
;// CONCATENATED MODULE: ../../../node_modules/@storybook/addon-highlight/dist/preview.mjs




var ADDON_ID="storybook/highlight",HIGHLIGHT_STYLE_ID="storybookHighlight",HIGHLIGHT=`${ADDON_ID}/add`,RESET_HIGHLIGHT=`${ADDON_ID}/reset`;var{document: preview_document}=external_STORYBOOK_MODULE_GLOBAL_.global,highlightStyle=(color="#FF4785",style="dashed")=>`
  outline: 2px ${style} ${color};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),highlight=infos=>{let id=HIGHLIGHT_STYLE_ID;resetHighlight();let elements=Array.from(new Set(infos.elements)),sheet=preview_document.createElement("style");sheet.setAttribute("id",id),sheet.innerHTML=elements.map(target=>`${target}{
          ${highlightStyle(infos.color,infos.style)}
         }`).join(" "),preview_document.head.appendChild(sheet);},resetHighlight=()=>{let id=HIGHLIGHT_STYLE_ID,sheetToBeRemoved=preview_document.getElementById(id);sheetToBeRemoved&&sheetToBeRemoved.parentNode?.removeChild(sheetToBeRemoved);};channel.on(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED,resetHighlight);channel.on(RESET_HIGHLIGHT,resetHighlight);channel.on(HIGHLIGHT,highlight);

;// CONCATENATED MODULE: ../../../node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs



/***/ }),

/***/ "../../../node_modules/@storybook/core/dist/docs-tools/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C2: () => (/* binding */ cv),
/* harmony export */   Op: () => (/* binding */ yv),
/* harmony export */   Y1: () => (/* binding */ Dg)
/* harmony export */ });
/* unused harmony exports ADDON_ID, MAX_DEFAULT_VALUE_SUMMARY_LENGTH, MAX_TYPE_SUMMARY_LENGTH, PANEL_ID, PARAM_KEY, TypeSystem, convert, createSummaryValue, extractComponentDescription, extractComponentProps, extractComponentSectionArray, extractComponentSectionObject, getDocgenDescription, getDocgenSection, hasDocgen, hasDocsOrControls, isDefaultValueBlacklisted, isTooLongForDefaultValueSummary, isTooLongForTypeSummary, isValidDocgenSection, normalizeNewlines, parseJsDoc, str */
/* harmony import */ var _storybook_core_preview_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("storybook/internal/preview-errors");
/* harmony import */ var _storybook_core_preview_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_core_preview_errors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsdoc_type_pratt_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../node_modules/jsdoc-type-pratt-parser/dist/index.js");
/* harmony import */ var jsdoc_type_pratt_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsdoc_type_pratt_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_core_preview_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("storybook/internal/preview-api");
/* harmony import */ var _storybook_core_preview_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_core_preview_api__WEBPACK_IMPORTED_MODULE_2__);
var ii = Object.create;
var he = Object.defineProperty;
var si = Object.getOwnPropertyDescriptor;
var ui = Object.getOwnPropertyNames;
var pi = Object.getPrototypeOf, ci = Object.prototype.hasOwnProperty;
var t = (e, r) => he(e, "name", { value: r, configurable: !0 });
var i = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var li = (e, r, n, o) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let a of ui(r))
      !ci.call(e, a) && a !== n && he(e, a, { get: () => r[a], enumerable: !(o = si(r, a)) || o.enumerable });
  return e;
};
var fi = (e, r, n) => (n = e != null ? ii(pi(e)) : {}, li(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  r || !e || !e.__esModule ? he(n, "default", { value: e, enumerable: !0 }) : n,
  e
));

// ../node_modules/lodash/_freeGlobal.js
var Te = i((wg, rr) => {
  var hi = typeof __webpack_require__.g == "object" && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
  rr.exports = hi;
});

// ../node_modules/lodash/_root.js
var D = i((Ag, tr) => {
  var Ti = Te(), xi = typeof self == "object" && self && self.Object === Object && self, bi = Ti || xi || Function("return this")();
  tr.exports = bi;
});

// ../node_modules/lodash/_Symbol.js
var B = i((Eg, nr) => {
  var vi = D(), Di = vi.Symbol;
  nr.exports = Di;
});

// ../node_modules/lodash/_getRawTag.js
var sr = i((jg, ir) => {
  var or = B(), ar = Object.prototype, Pi = ar.hasOwnProperty, qi = ar.toString, z = or ? or.toStringTag : void 0;
  function Si(e) {
    var r = Pi.call(e, z), n = e[z];
    try {
      e[z] = void 0;
      var o = !0;
    } catch {
    }
    var a = qi.call(e);
    return o && (r ? e[z] = n : delete e[z]), a;
  }
  t(Si, "getRawTag");
  ir.exports = Si;
});

// ../node_modules/lodash/_objectToString.js
var pr = i((Ig, ur) => {
  var _i = Object.prototype, Oi = _i.toString;
  function wi(e) {
    return Oi.call(e);
  }
  t(wi, "objectToString");
  ur.exports = wi;
});

// ../node_modules/lodash/_baseGetTag.js
var j = i((Ng, fr) => {
  var cr = B(), Ai = sr(), Ei = pr(), ji = "[object Null]", Ci = "[object Undefined]", lr = cr ? cr.toStringTag : void 0;
  function Ii(e) {
    return e == null ? e === void 0 ? Ci : ji : lr && lr in Object(e) ? Ai(e) : Ei(e);
  }
  t(Ii, "baseGetTag");
  fr.exports = Ii;
});

// ../node_modules/lodash/isObject.js
var re = i((Lg, mr) => {
  function Fi(e) {
    var r = typeof e;
    return e != null && (r == "object" || r == "function");
  }
  t(Fi, "isObject");
  mr.exports = Fi;
});

// ../node_modules/lodash/isFunction.js
var xe = i((Jg, gr) => {
  var Ni = j(), Ri = re(), Li = "[object AsyncFunction]", Mi = "[object Function]", Ji = "[object GeneratorFunction]", Ui = "[object Proxy]";
  function Gi(e) {
    if (!Ri(e))
      return !1;
    var r = Ni(e);
    return r == Mi || r == Ji || r == Li || r == Ui;
  }
  t(Gi, "isFunction");
  gr.exports = Gi;
});

// ../node_modules/lodash/_coreJsData.js
var dr = i((Gg, yr) => {
  var Vi = D(), Bi = Vi["__core-js_shared__"];
  yr.exports = Bi;
});

// ../node_modules/lodash/_isMasked.js
var xr = i((Vg, Tr) => {
  var be = dr(), hr = function() {
    var e = /[^.]+$/.exec(be && be.keys && be.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function zi(e) {
    return !!hr && hr in e;
  }
  t(zi, "isMasked");
  Tr.exports = zi;
});

// ../node_modules/lodash/_toSource.js
var ve = i((zg, br) => {
  var ki = Function.prototype, Hi = ki.toString;
  function Ki(e) {
    if (e != null) {
      try {
        return Hi.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  t(Ki, "toSource");
  br.exports = Ki;
});

// ../node_modules/lodash/_baseIsNative.js
var Dr = i((Hg, vr) => {
  var $i = xe(), Wi = xr(), Yi = re(), Xi = ve(), Qi = /[\\^$.*+?()[\]{}|]/g, Zi = /^\[object .+?Constructor\]$/, es = Function.prototype, rs = Object.
  prototype, ts = es.toString, ns = rs.hasOwnProperty, os = RegExp(
    "^" + ts.call(ns).replace(Qi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function as(e) {
    if (!Yi(e) || Wi(e))
      return !1;
    var r = $i(e) ? os : Zi;
    return r.test(Xi(e));
  }
  t(as, "baseIsNative");
  vr.exports = as;
});

// ../node_modules/lodash/_getValue.js
var qr = i(($g, Pr) => {
  function is(e, r) {
    return e?.[r];
  }
  t(is, "getValue");
  Pr.exports = is;
});

// ../node_modules/lodash/_getNative.js
var S = i((Yg, Sr) => {
  var ss = Dr(), us = qr();
  function ps(e, r) {
    var n = us(e, r);
    return ss(n) ? n : void 0;
  }
  t(ps, "getNative");
  Sr.exports = ps;
});

// ../node_modules/lodash/_defineProperty.js
var Or = i((Qg, _r) => {
  var cs = S(), ls = function() {
    try {
      var e = cs(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  }();
  _r.exports = ls;
});

// ../node_modules/lodash/_baseAssignValue.js
var Er = i((Zg, Ar) => {
  var wr = Or();
  function fs(e, r, n) {
    r == "__proto__" && wr ? wr(e, r, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : e[r] = n;
  }
  t(fs, "baseAssignValue");
  Ar.exports = fs;
});

// ../node_modules/lodash/_createBaseFor.js
var Cr = i((ry, jr) => {
  function ms(e) {
    return function(r, n, o) {
      for (var a = -1, s = Object(r), u = o(r), p = u.length; p--; ) {
        var c = u[e ? p : ++a];
        if (n(s[c], c, s) === !1)
          break;
      }
      return r;
    };
  }
  t(ms, "createBaseFor");
  jr.exports = ms;
});

// ../node_modules/lodash/_baseFor.js
var Fr = i((ny, Ir) => {
  var gs = Cr(), ys = gs();
  Ir.exports = ys;
});

// ../node_modules/lodash/_baseTimes.js
var Rr = i((oy, Nr) => {
  function ds(e, r) {
    for (var n = -1, o = Array(e); ++n < e; )
      o[n] = r(n);
    return o;
  }
  t(ds, "baseTimes");
  Nr.exports = ds;
});

// ../node_modules/lodash/isObjectLike.js
var C = i((iy, Lr) => {
  function hs(e) {
    return e != null && typeof e == "object";
  }
  t(hs, "isObjectLike");
  Lr.exports = hs;
});

// ../node_modules/lodash/_baseIsArguments.js
var Jr = i((uy, Mr) => {
  var Ts = j(), xs = C(), bs = "[object Arguments]";
  function vs(e) {
    return xs(e) && Ts(e) == bs;
  }
  t(vs, "baseIsArguments");
  Mr.exports = vs;
});

// ../node_modules/lodash/isArguments.js
var De = i((cy, Vr) => {
  var Ur = Jr(), Ds = C(), Gr = Object.prototype, Ps = Gr.hasOwnProperty, qs = Gr.propertyIsEnumerable, Ss = Ur(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Ur : function(e) {
    return Ds(e) && Ps.call(e, "callee") && !qs.call(e, "callee");
  };
  Vr.exports = Ss;
});

// ../node_modules/lodash/isArray.js
var P = i((ly, Br) => {
  var _s = Array.isArray;
  Br.exports = _s;
});

// ../node_modules/lodash/stubFalse.js
var kr = i((fy, zr) => {
  function Os() {
    return !1;
  }
  t(Os, "stubFalse");
  zr.exports = Os;
});

// ../node_modules/lodash/isBuffer.js
var Pe = i((k, I) => {
  var ws = D(), As = kr(), $r = typeof k == "object" && k && !k.nodeType && k, Hr = $r && typeof I == "object" && I && !I.nodeType && I, Es = Hr &&
  Hr.exports === $r, Kr = Es ? ws.Buffer : void 0, js = Kr ? Kr.isBuffer : void 0, Cs = js || As;
  I.exports = Cs;
});

// ../node_modules/lodash/_isIndex.js
var qe = i((gy, Wr) => {
  var Is = 9007199254740991, Fs = /^(?:0|[1-9]\d*)$/;
  function Ns(e, r) {
    var n = typeof e;
    return r = r ?? Is, !!r && (n == "number" || n != "symbol" && Fs.test(e)) && e > -1 && e % 1 == 0 && e < r;
  }
  t(Ns, "isIndex");
  Wr.exports = Ns;
});

// ../node_modules/lodash/isLength.js
var te = i((dy, Yr) => {
  var Rs = 9007199254740991;
  function Ls(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rs;
  }
  t(Ls, "isLength");
  Yr.exports = Ls;
});

// ../node_modules/lodash/_baseIsTypedArray.js
var Qr = i((Ty, Xr) => {
  var Ms = j(), Js = te(), Us = C(), Gs = "[object Arguments]", Vs = "[object Array]", Bs = "[object Boolean]", zs = "[object Date]", ks = "\
[object Error]", Hs = "[object Function]", Ks = "[object Map]", $s = "[object Number]", Ws = "[object Object]", Ys = "[object RegExp]", Xs = "\
[object Set]", Qs = "[object String]", Zs = "[object WeakMap]", eu = "[object ArrayBuffer]", ru = "[object DataView]", tu = "[object Float32\
Array]", nu = "[object Float64Array]", ou = "[object Int8Array]", au = "[object Int16Array]", iu = "[object Int32Array]", su = "[object Uint\
8Array]", uu = "[object Uint8ClampedArray]", pu = "[object Uint16Array]", cu = "[object Uint32Array]", m = {};
  m[tu] = m[nu] = m[ou] = m[au] = m[iu] = m[su] = m[uu] = m[pu] = m[cu] = !0;
  m[Gs] = m[Vs] = m[eu] = m[Bs] = m[ru] = m[zs] = m[ks] = m[Hs] = m[Ks] = m[$s] = m[Ws] = m[Ys] = m[Xs] = m[Qs] = m[Zs] = !1;
  function lu(e) {
    return Us(e) && Js(e.length) && !!m[Ms(e)];
  }
  t(lu, "baseIsTypedArray");
  Xr.exports = lu;
});

// ../node_modules/lodash/_baseUnary.js
var et = i((by, Zr) => {
  function fu(e) {
    return function(r) {
      return e(r);
    };
  }
  t(fu, "baseUnary");
  Zr.exports = fu;
});

// ../node_modules/lodash/_nodeUtil.js
var tt = i((H, F) => {
  var mu = Te(), rt = typeof H == "object" && H && !H.nodeType && H, K = rt && typeof F == "object" && F && !F.nodeType && F, gu = K && K.exports ===
  rt, Se = gu && mu.process, yu = function() {
    try {
      var e = K && K.require && K.require("util").types;
      return e || Se && Se.binding && Se.binding("util");
    } catch {
    }
  }();
  F.exports = yu;
});

// ../node_modules/lodash/isTypedArray.js
var _e = i((Dy, at) => {
  var du = Qr(), hu = et(), nt = tt(), ot = nt && nt.isTypedArray, Tu = ot ? hu(ot) : du;
  at.exports = Tu;
});

// ../node_modules/lodash/_arrayLikeKeys.js
var st = i((Py, it) => {
  var xu = Rr(), bu = De(), vu = P(), Du = Pe(), Pu = qe(), qu = _e(), Su = Object.prototype, _u = Su.hasOwnProperty;
  function Ou(e, r) {
    var n = vu(e), o = !n && bu(e), a = !n && !o && Du(e), s = !n && !o && !a && qu(e), u = n || o || a || s, p = u ? xu(e.length, String) :
    [], c = p.length;
    for (var l in e)
      (r || _u.call(e, l)) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
      (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      a && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      s && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
      Pu(l, c))) && p.push(l);
    return p;
  }
  t(Ou, "arrayLikeKeys");
  it.exports = Ou;
});

// ../node_modules/lodash/_isPrototype.js
var pt = i((Sy, ut) => {
  var wu = Object.prototype;
  function Au(e) {
    var r = e && e.constructor, n = typeof r == "function" && r.prototype || wu;
    return e === n;
  }
  t(Au, "isPrototype");
  ut.exports = Au;
});

// ../node_modules/lodash/_overArg.js
var lt = i((Oy, ct) => {
  function Eu(e, r) {
    return function(n) {
      return e(r(n));
    };
  }
  t(Eu, "overArg");
  ct.exports = Eu;
});

// ../node_modules/lodash/_nativeKeys.js
var mt = i((Ay, ft) => {
  var ju = lt(), Cu = ju(Object.keys, Object);
  ft.exports = Cu;
});

// ../node_modules/lodash/_baseKeys.js
var yt = i((Ey, gt) => {
  var Iu = pt(), Fu = mt(), Nu = Object.prototype, Ru = Nu.hasOwnProperty;
  function Lu(e) {
    if (!Iu(e))
      return Fu(e);
    var r = [];
    for (var n in Object(e))
      Ru.call(e, n) && n != "constructor" && r.push(n);
    return r;
  }
  t(Lu, "baseKeys");
  gt.exports = Lu;
});

// ../node_modules/lodash/isArrayLike.js
var ht = i((Cy, dt) => {
  var Mu = xe(), Ju = te();
  function Uu(e) {
    return e != null && Ju(e.length) && !Mu(e);
  }
  t(Uu, "isArrayLike");
  dt.exports = Uu;
});

// ../node_modules/lodash/keys.js
var ne = i((Fy, Tt) => {
  var Gu = st(), Vu = yt(), Bu = ht();
  function zu(e) {
    return Bu(e) ? Gu(e) : Vu(e);
  }
  t(zu, "keys");
  Tt.exports = zu;
});

// ../node_modules/lodash/_baseForOwn.js
var bt = i((Ry, xt) => {
  var ku = Fr(), Hu = ne();
  function Ku(e, r) {
    return e && ku(e, r, Hu);
  }
  t(Ku, "baseForOwn");
  xt.exports = Ku;
});

// ../node_modules/lodash/_listCacheClear.js
var Dt = i((My, vt) => {
  function $u() {
    this.__data__ = [], this.size = 0;
  }
  t($u, "listCacheClear");
  vt.exports = $u;
});

// ../node_modules/lodash/eq.js
var Oe = i((Uy, Pt) => {
  function Wu(e, r) {
    return e === r || e !== e && r !== r;
  }
  t(Wu, "eq");
  Pt.exports = Wu;
});

// ../node_modules/lodash/_assocIndexOf.js
var $ = i((Vy, qt) => {
  var Yu = Oe();
  function Xu(e, r) {
    for (var n = e.length; n--; )
      if (Yu(e[n][0], r))
        return n;
    return -1;
  }
  t(Xu, "assocIndexOf");
  qt.exports = Xu;
});

// ../node_modules/lodash/_listCacheDelete.js
var _t = i((zy, St) => {
  var Qu = $(), Zu = Array.prototype, ep = Zu.splice;
  function rp(e) {
    var r = this.__data__, n = Qu(r, e);
    if (n < 0)
      return !1;
    var o = r.length - 1;
    return n == o ? r.pop() : ep.call(r, n, 1), --this.size, !0;
  }
  t(rp, "listCacheDelete");
  St.exports = rp;
});

// ../node_modules/lodash/_listCacheGet.js
var wt = i((Hy, Ot) => {
  var tp = $();
  function np(e) {
    var r = this.__data__, n = tp(r, e);
    return n < 0 ? void 0 : r[n][1];
  }
  t(np, "listCacheGet");
  Ot.exports = np;
});

// ../node_modules/lodash/_listCacheHas.js
var Et = i(($y, At) => {
  var op = $();
  function ap(e) {
    return op(this.__data__, e) > -1;
  }
  t(ap, "listCacheHas");
  At.exports = ap;
});

// ../node_modules/lodash/_listCacheSet.js
var Ct = i((Yy, jt) => {
  var ip = $();
  function sp(e, r) {
    var n = this.__data__, o = ip(n, e);
    return o < 0 ? (++this.size, n.push([e, r])) : n[o][1] = r, this;
  }
  t(sp, "listCacheSet");
  jt.exports = sp;
});

// ../node_modules/lodash/_ListCache.js
var W = i((Qy, It) => {
  var up = Dt(), pp = _t(), cp = wt(), lp = Et(), fp = Ct();
  function N(e) {
    var r = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++r < n; ) {
      var o = e[r];
      this.set(o[0], o[1]);
    }
  }
  t(N, "ListCache");
  N.prototype.clear = up;
  N.prototype.delete = pp;
  N.prototype.get = cp;
  N.prototype.has = lp;
  N.prototype.set = fp;
  It.exports = N;
});

// ../node_modules/lodash/_stackClear.js
var Nt = i((ed, Ft) => {
  var mp = W();
  function gp() {
    this.__data__ = new mp(), this.size = 0;
  }
  t(gp, "stackClear");
  Ft.exports = gp;
});

// ../node_modules/lodash/_stackDelete.js
var Lt = i((td, Rt) => {
  function yp(e) {
    var r = this.__data__, n = r.delete(e);
    return this.size = r.size, n;
  }
  t(yp, "stackDelete");
  Rt.exports = yp;
});

// ../node_modules/lodash/_stackGet.js
var Jt = i((od, Mt) => {
  function dp(e) {
    return this.__data__.get(e);
  }
  t(dp, "stackGet");
  Mt.exports = dp;
});

// ../node_modules/lodash/_stackHas.js
var Gt = i((id, Ut) => {
  function hp(e) {
    return this.__data__.has(e);
  }
  t(hp, "stackHas");
  Ut.exports = hp;
});

// ../node_modules/lodash/_Map.js
var oe = i((ud, Vt) => {
  var Tp = S(), xp = D(), bp = Tp(xp, "Map");
  Vt.exports = bp;
});

// ../node_modules/lodash/_nativeCreate.js
var Y = i((pd, Bt) => {
  var vp = S(), Dp = vp(Object, "create");
  Bt.exports = Dp;
});

// ../node_modules/lodash/_hashClear.js
var Ht = i((cd, kt) => {
  var zt = Y();
  function Pp() {
    this.__data__ = zt ? zt(null) : {}, this.size = 0;
  }
  t(Pp, "hashClear");
  kt.exports = Pp;
});

// ../node_modules/lodash/_hashDelete.js
var $t = i((fd, Kt) => {
  function qp(e) {
    var r = this.has(e) && delete this.__data__[e];
    return this.size -= r ? 1 : 0, r;
  }
  t(qp, "hashDelete");
  Kt.exports = qp;
});

// ../node_modules/lodash/_hashGet.js
var Yt = i((gd, Wt) => {
  var Sp = Y(), _p = "__lodash_hash_undefined__", Op = Object.prototype, wp = Op.hasOwnProperty;
  function Ap(e) {
    var r = this.__data__;
    if (Sp) {
      var n = r[e];
      return n === _p ? void 0 : n;
    }
    return wp.call(r, e) ? r[e] : void 0;
  }
  t(Ap, "hashGet");
  Wt.exports = Ap;
});

// ../node_modules/lodash/_hashHas.js
var Qt = i((dd, Xt) => {
  var Ep = Y(), jp = Object.prototype, Cp = jp.hasOwnProperty;
  function Ip(e) {
    var r = this.__data__;
    return Ep ? r[e] !== void 0 : Cp.call(r, e);
  }
  t(Ip, "hashHas");
  Xt.exports = Ip;
});

// ../node_modules/lodash/_hashSet.js
var en = i((Td, Zt) => {
  var Fp = Y(), Np = "__lodash_hash_undefined__";
  function Rp(e, r) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = Fp && r === void 0 ? Np : r, this;
  }
  t(Rp, "hashSet");
  Zt.exports = Rp;
});

// ../node_modules/lodash/_Hash.js
var tn = i((bd, rn) => {
  var Lp = Ht(), Mp = $t(), Jp = Yt(), Up = Qt(), Gp = en();
  function R(e) {
    var r = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++r < n; ) {
      var o = e[r];
      this.set(o[0], o[1]);
    }
  }
  t(R, "Hash");
  R.prototype.clear = Lp;
  R.prototype.delete = Mp;
  R.prototype.get = Jp;
  R.prototype.has = Up;
  R.prototype.set = Gp;
  rn.exports = R;
});

// ../node_modules/lodash/_mapCacheClear.js
var an = i((Dd, on) => {
  var nn = tn(), Vp = W(), Bp = oe();
  function zp() {
    this.size = 0, this.__data__ = {
      hash: new nn(),
      map: new (Bp || Vp)(),
      string: new nn()
    };
  }
  t(zp, "mapCacheClear");
  on.exports = zp;
});

// ../node_modules/lodash/_isKeyable.js
var un = i((qd, sn) => {
  function kp(e) {
    var r = typeof e;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
  }
  t(kp, "isKeyable");
  sn.exports = kp;
});

// ../node_modules/lodash/_getMapData.js
var X = i((_d, pn) => {
  var Hp = un();
  function Kp(e, r) {
    var n = e.__data__;
    return Hp(r) ? n[typeof r == "string" ? "string" : "hash"] : n.map;
  }
  t(Kp, "getMapData");
  pn.exports = Kp;
});

// ../node_modules/lodash/_mapCacheDelete.js
var ln = i((wd, cn) => {
  var $p = X();
  function Wp(e) {
    var r = $p(this, e).delete(e);
    return this.size -= r ? 1 : 0, r;
  }
  t(Wp, "mapCacheDelete");
  cn.exports = Wp;
});

// ../node_modules/lodash/_mapCacheGet.js
var mn = i((Ed, fn) => {
  var Yp = X();
  function Xp(e) {
    return Yp(this, e).get(e);
  }
  t(Xp, "mapCacheGet");
  fn.exports = Xp;
});

// ../node_modules/lodash/_mapCacheHas.js
var yn = i((Cd, gn) => {
  var Qp = X();
  function Zp(e) {
    return Qp(this, e).has(e);
  }
  t(Zp, "mapCacheHas");
  gn.exports = Zp;
});

// ../node_modules/lodash/_mapCacheSet.js
var hn = i((Fd, dn) => {
  var ec = X();
  function rc(e, r) {
    var n = ec(this, e), o = n.size;
    return n.set(e, r), this.size += n.size == o ? 0 : 1, this;
  }
  t(rc, "mapCacheSet");
  dn.exports = rc;
});

// ../node_modules/lodash/_MapCache.js
var ae = i((Rd, Tn) => {
  var tc = an(), nc = ln(), oc = mn(), ac = yn(), ic = hn();
  function L(e) {
    var r = -1, n = e == null ? 0 : e.length;
    for (this.clear(); ++r < n; ) {
      var o = e[r];
      this.set(o[0], o[1]);
    }
  }
  t(L, "MapCache");
  L.prototype.clear = tc;
  L.prototype.delete = nc;
  L.prototype.get = oc;
  L.prototype.has = ac;
  L.prototype.set = ic;
  Tn.exports = L;
});

// ../node_modules/lodash/_stackSet.js
var bn = i((Md, xn) => {
  var sc = W(), uc = oe(), pc = ae(), cc = 200;
  function lc(e, r) {
    var n = this.__data__;
    if (n instanceof sc) {
      var o = n.__data__;
      if (!uc || o.length < cc - 1)
        return o.push([e, r]), this.size = ++n.size, this;
      n = this.__data__ = new pc(o);
    }
    return n.set(e, r), this.size = n.size, this;
  }
  t(lc, "stackSet");
  xn.exports = lc;
});

// ../node_modules/lodash/_Stack.js
var we = i((Ud, vn) => {
  var fc = W(), mc = Nt(), gc = Lt(), yc = Jt(), dc = Gt(), hc = bn();
  function M(e) {
    var r = this.__data__ = new fc(e);
    this.size = r.size;
  }
  t(M, "Stack");
  M.prototype.clear = mc;
  M.prototype.delete = gc;
  M.prototype.get = yc;
  M.prototype.has = dc;
  M.prototype.set = hc;
  vn.exports = M;
});

// ../node_modules/lodash/_setCacheAdd.js
var Pn = i((Vd, Dn) => {
  var Tc = "__lodash_hash_undefined__";
  function xc(e) {
    return this.__data__.set(e, Tc), this;
  }
  t(xc, "setCacheAdd");
  Dn.exports = xc;
});

// ../node_modules/lodash/_setCacheHas.js
var Sn = i((zd, qn) => {
  function bc(e) {
    return this.__data__.has(e);
  }
  t(bc, "setCacheHas");
  qn.exports = bc;
});

// ../node_modules/lodash/_SetCache.js
var On = i((Hd, _n) => {
  var vc = ae(), Dc = Pn(), Pc = Sn();
  function ie(e) {
    var r = -1, n = e == null ? 0 : e.length;
    for (this.__data__ = new vc(); ++r < n; )
      this.add(e[r]);
  }
  t(ie, "SetCache");
  ie.prototype.add = ie.prototype.push = Dc;
  ie.prototype.has = Pc;
  _n.exports = ie;
});

// ../node_modules/lodash/_arraySome.js
var An = i(($d, wn) => {
  function qc(e, r) {
    for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
      if (r(e[n], n, e))
        return !0;
    return !1;
  }
  t(qc, "arraySome");
  wn.exports = qc;
});

// ../node_modules/lodash/_cacheHas.js
var jn = i((Yd, En) => {
  function Sc(e, r) {
    return e.has(r);
  }
  t(Sc, "cacheHas");
  En.exports = Sc;
});

// ../node_modules/lodash/_equalArrays.js
var Ae = i((Qd, Cn) => {
  var _c = On(), Oc = An(), wc = jn(), Ac = 1, Ec = 2;
  function jc(e, r, n, o, a, s) {
    var u = n & Ac, p = e.length, c = r.length;
    if (p != c && !(u && c > p))
      return !1;
    var l = s.get(e), f = s.get(r);
    if (l && f)
      return l == r && f == e;
    var d = -1, g = !0, x = n & Ec ? new _c() : void 0;
    for (s.set(e, r), s.set(r, e); ++d < p; ) {
      var h = e[d], T = r[d];
      if (o)
        var v = u ? o(T, h, d, r, e, s) : o(h, T, d, e, r, s);
      if (v !== void 0) {
        if (v)
          continue;
        g = !1;
        break;
      }
      if (x) {
        if (!Oc(r, function(O, w) {
          if (!wc(x, w) && (h === O || a(h, O, n, o, s)))
            return x.push(w);
        })) {
          g = !1;
          break;
        }
      } else if (!(h === T || a(h, T, n, o, s))) {
        g = !1;
        break;
      }
    }
    return s.delete(e), s.delete(r), g;
  }
  t(jc, "equalArrays");
  Cn.exports = jc;
});

// ../node_modules/lodash/_Uint8Array.js
var Fn = i((eh, In) => {
  var Cc = D(), Ic = Cc.Uint8Array;
  In.exports = Ic;
});

// ../node_modules/lodash/_mapToArray.js
var Rn = i((rh, Nn) => {
  function Fc(e) {
    var r = -1, n = Array(e.size);
    return e.forEach(function(o, a) {
      n[++r] = [a, o];
    }), n;
  }
  t(Fc, "mapToArray");
  Nn.exports = Fc;
});

// ../node_modules/lodash/_setToArray.js
var Mn = i((nh, Ln) => {
  function Nc(e) {
    var r = -1, n = Array(e.size);
    return e.forEach(function(o) {
      n[++r] = o;
    }), n;
  }
  t(Nc, "setToArray");
  Ln.exports = Nc;
});

// ../node_modules/lodash/_equalByTag.js
var Bn = i((ah, Vn) => {
  var Jn = B(), Un = Fn(), Rc = Oe(), Lc = Ae(), Mc = Rn(), Jc = Mn(), Uc = 1, Gc = 2, Vc = "[object Boolean]", Bc = "[object Date]", zc = "\
[object Error]", kc = "[object Map]", Hc = "[object Number]", Kc = "[object RegExp]", $c = "[object Set]", Wc = "[object String]", Yc = "[ob\
ject Symbol]", Xc = "[object ArrayBuffer]", Qc = "[object DataView]", Gn = Jn ? Jn.prototype : void 0, Ee = Gn ? Gn.valueOf : void 0;
  function Zc(e, r, n, o, a, s, u) {
    switch (n) {
      case Qc:
        if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
          return !1;
        e = e.buffer, r = r.buffer;
      case Xc:
        return !(e.byteLength != r.byteLength || !s(new Un(e), new Un(r)));
      case Vc:
      case Bc:
      case Hc:
        return Rc(+e, +r);
      case zc:
        return e.name == r.name && e.message == r.message;
      case Kc:
      case Wc:
        return e == r + "";
      case kc:
        var p = Mc;
      case $c:
        var c = o & Uc;
        if (p || (p = Jc), e.size != r.size && !c)
          return !1;
        var l = u.get(e);
        if (l)
          return l == r;
        o |= Gc, u.set(e, r);
        var f = Lc(p(e), p(r), o, a, s, u);
        return u.delete(e), f;
      case Yc:
        if (Ee)
          return Ee.call(e) == Ee.call(r);
    }
    return !1;
  }
  t(Zc, "equalByTag");
  Vn.exports = Zc;
});

// ../node_modules/lodash/_arrayPush.js
var kn = i((sh, zn) => {
  function el(e, r) {
    for (var n = -1, o = r.length, a = e.length; ++n < o; )
      e[a + n] = r[n];
    return e;
  }
  t(el, "arrayPush");
  zn.exports = el;
});

// ../node_modules/lodash/_baseGetAllKeys.js
var Kn = i((ph, Hn) => {
  var rl = kn(), tl = P();
  function nl(e, r, n) {
    var o = r(e);
    return tl(e) ? o : rl(o, n(e));
  }
  t(nl, "baseGetAllKeys");
  Hn.exports = nl;
});

// ../node_modules/lodash/_arrayFilter.js
var Wn = i((lh, $n) => {
  function ol(e, r) {
    for (var n = -1, o = e == null ? 0 : e.length, a = 0, s = []; ++n < o; ) {
      var u = e[n];
      r(u, n, e) && (s[a++] = u);
    }
    return s;
  }
  t(ol, "arrayFilter");
  $n.exports = ol;
});

// ../node_modules/lodash/stubArray.js
var Xn = i((mh, Yn) => {
  function al() {
    return [];
  }
  t(al, "stubArray");
  Yn.exports = al;
});

// ../node_modules/lodash/_getSymbols.js
var eo = i((yh, Zn) => {
  var il = Wn(), sl = Xn(), ul = Object.prototype, pl = ul.propertyIsEnumerable, Qn = Object.getOwnPropertySymbols, cl = Qn ? function(e) {
    return e == null ? [] : (e = Object(e), il(Qn(e), function(r) {
      return pl.call(e, r);
    }));
  } : sl;
  Zn.exports = cl;
});

// ../node_modules/lodash/_getAllKeys.js
var to = i((dh, ro) => {
  var ll = Kn(), fl = eo(), ml = ne();
  function gl(e) {
    return ll(e, ml, fl);
  }
  t(gl, "getAllKeys");
  ro.exports = gl;
});

// ../node_modules/lodash/_equalObjects.js
var ao = i((Th, oo) => {
  var no = to(), yl = 1, dl = Object.prototype, hl = dl.hasOwnProperty;
  function Tl(e, r, n, o, a, s) {
    var u = n & yl, p = no(e), c = p.length, l = no(r), f = l.length;
    if (c != f && !u)
      return !1;
    for (var d = c; d--; ) {
      var g = p[d];
      if (!(u ? g in r : hl.call(r, g)))
        return !1;
    }
    var x = s.get(e), h = s.get(r);
    if (x && h)
      return x == r && h == e;
    var T = !0;
    s.set(e, r), s.set(r, e);
    for (var v = u; ++d < c; ) {
      g = p[d];
      var O = e[g], w = r[g];
      if (o)
        var er = u ? o(w, O, g, r, e, s) : o(O, w, g, e, r, s);
      if (!(er === void 0 ? O === w || a(O, w, n, o, s) : er)) {
        T = !1;
        break;
      }
      v || (v = g == "constructor");
    }
    if (T && !v) {
      var Z = e.constructor, ee = r.constructor;
      Z != ee && "constructor" in e && "constructor" in r && !(typeof Z == "function" && Z instanceof Z && typeof ee == "function" && ee instanceof
      ee) && (T = !1);
    }
    return s.delete(e), s.delete(r), T;
  }
  t(Tl, "equalObjects");
  oo.exports = Tl;
});

// ../node_modules/lodash/_DataView.js
var so = i((bh, io) => {
  var xl = S(), bl = D(), vl = xl(bl, "DataView");
  io.exports = vl;
});

// ../node_modules/lodash/_Promise.js
var po = i((vh, uo) => {
  var Dl = S(), Pl = D(), ql = Dl(Pl, "Promise");
  uo.exports = ql;
});

// ../node_modules/lodash/_Set.js
var lo = i((Dh, co) => {
  var Sl = S(), _l = D(), Ol = Sl(_l, "Set");
  co.exports = Ol;
});

// ../node_modules/lodash/_WeakMap.js
var mo = i((Ph, fo) => {
  var wl = S(), Al = D(), El = wl(Al, "WeakMap");
  fo.exports = El;
});

// ../node_modules/lodash/_getTag.js
var Do = i((qh, vo) => {
  var je = so(), Ce = oe(), Ie = po(), Fe = lo(), Ne = mo(), bo = j(), J = ve(), go = "[object Map]", jl = "[object Object]", yo = "[object \
Promise]", ho = "[object Set]", To = "[object WeakMap]", xo = "[object DataView]", Cl = J(je), Il = J(Ce), Fl = J(Ie), Nl = J(Fe), Rl = J(Ne),
  A = bo;
  (je && A(new je(new ArrayBuffer(1))) != xo || Ce && A(new Ce()) != go || Ie && A(Ie.resolve()) != yo || Fe && A(new Fe()) != ho || Ne && A(
  new Ne()) != To) && (A = /* @__PURE__ */ t(function(e) {
    var r = bo(e), n = r == jl ? e.constructor : void 0, o = n ? J(n) : "";
    if (o)
      switch (o) {
        case Cl:
          return xo;
        case Il:
          return go;
        case Fl:
          return yo;
        case Nl:
          return ho;
        case Rl:
          return To;
      }
    return r;
  }, "getTag"));
  vo.exports = A;
});

// ../node_modules/lodash/_baseIsEqualDeep.js
var Eo = i((_h, Ao) => {
  var Re = we(), Ll = Ae(), Ml = Bn(), Jl = ao(), Po = Do(), qo = P(), So = Pe(), Ul = _e(), Gl = 1, _o = "[object Arguments]", Oo = "[objec\
t Array]", se = "[object Object]", Vl = Object.prototype, wo = Vl.hasOwnProperty;
  function Bl(e, r, n, o, a, s) {
    var u = qo(e), p = qo(r), c = u ? Oo : Po(e), l = p ? Oo : Po(r);
    c = c == _o ? se : c, l = l == _o ? se : l;
    var f = c == se, d = l == se, g = c == l;
    if (g && So(e)) {
      if (!So(r))
        return !1;
      u = !0, f = !1;
    }
    if (g && !f)
      return s || (s = new Re()), u || Ul(e) ? Ll(e, r, n, o, a, s) : Ml(e, r, c, n, o, a, s);
    if (!(n & Gl)) {
      var x = f && wo.call(e, "__wrapped__"), h = d && wo.call(r, "__wrapped__");
      if (x || h) {
        var T = x ? e.value() : e, v = h ? r.value() : r;
        return s || (s = new Re()), a(T, v, n, o, s);
      }
    }
    return g ? (s || (s = new Re()), Jl(e, r, n, o, a, s)) : !1;
  }
  t(Bl, "baseIsEqualDeep");
  Ao.exports = Bl;
});

// ../node_modules/lodash/_baseIsEqual.js
var Le = i((wh, Io) => {
  var zl = Eo(), jo = C();
  function Co(e, r, n, o, a) {
    return e === r ? !0 : e == null || r == null || !jo(e) && !jo(r) ? e !== e && r !== r : zl(e, r, n, o, Co, a);
  }
  t(Co, "baseIsEqual");
  Io.exports = Co;
});

// ../node_modules/lodash/_baseIsMatch.js
var No = i((Eh, Fo) => {
  var kl = we(), Hl = Le(), Kl = 1, $l = 2;
  function Wl(e, r, n, o) {
    var a = n.length, s = a, u = !o;
    if (e == null)
      return !s;
    for (e = Object(e); a--; ) {
      var p = n[a];
      if (u && p[2] ? p[1] !== e[p[0]] : !(p[0] in e))
        return !1;
    }
    for (; ++a < s; ) {
      p = n[a];
      var c = p[0], l = e[c], f = p[1];
      if (u && p[2]) {
        if (l === void 0 && !(c in e))
          return !1;
      } else {
        var d = new kl();
        if (o)
          var g = o(l, f, c, e, r, d);
        if (!(g === void 0 ? Hl(f, l, Kl | $l, o, d) : g))
          return !1;
      }
    }
    return !0;
  }
  t(Wl, "baseIsMatch");
  Fo.exports = Wl;
});

// ../node_modules/lodash/_isStrictComparable.js
var Me = i((Ch, Ro) => {
  var Yl = re();
  function Xl(e) {
    return e === e && !Yl(e);
  }
  t(Xl, "isStrictComparable");
  Ro.exports = Xl;
});

// ../node_modules/lodash/_getMatchData.js
var Mo = i((Fh, Lo) => {
  var Ql = Me(), Zl = ne();
  function ef(e) {
    for (var r = Zl(e), n = r.length; n--; ) {
      var o = r[n], a = e[o];
      r[n] = [o, a, Ql(a)];
    }
    return r;
  }
  t(ef, "getMatchData");
  Lo.exports = ef;
});

// ../node_modules/lodash/_matchesStrictComparable.js
var Je = i((Rh, Jo) => {
  function rf(e, r) {
    return function(n) {
      return n == null ? !1 : n[e] === r && (r !== void 0 || e in Object(n));
    };
  }
  t(rf, "matchesStrictComparable");
  Jo.exports = rf;
});

// ../node_modules/lodash/_baseMatches.js
var Go = i((Mh, Uo) => {
  var tf = No(), nf = Mo(), of = Je();
  function af(e) {
    var r = nf(e);
    return r.length == 1 && r[0][2] ? of(r[0][0], r[0][1]) : function(n) {
      return n === e || tf(n, e, r);
    };
  }
  t(af, "baseMatches");
  Uo.exports = af;
});

// ../node_modules/lodash/isSymbol.js
var ue = i((Uh, Vo) => {
  var sf = j(), uf = C(), pf = "[object Symbol]";
  function cf(e) {
    return typeof e == "symbol" || uf(e) && sf(e) == pf;
  }
  t(cf, "isSymbol");
  Vo.exports = cf;
});

// ../node_modules/lodash/_isKey.js
var pe = i((Vh, Bo) => {
  var lf = P(), ff = ue(), mf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gf = /^\w*$/;
  function yf(e, r) {
    if (lf(e))
      return !1;
    var n = typeof e;
    return n == "number" || n == "symbol" || n == "boolean" || e == null || ff(e) ? !0 : gf.test(e) || !mf.test(e) || r != null && e in Object(
    r);
  }
  t(yf, "isKey");
  Bo.exports = yf;
});

// ../node_modules/lodash/memoize.js
var Ho = i((zh, ko) => {
  var zo = ae(), df = "Expected a function";
  function Ue(e, r) {
    if (typeof e != "function" || r != null && typeof r != "function")
      throw new TypeError(df);
    var n = /* @__PURE__ */ t(function() {
      var o = arguments, a = r ? r.apply(this, o) : o[0], s = n.cache;
      if (s.has(a))
        return s.get(a);
      var u = e.apply(this, o);
      return n.cache = s.set(a, u) || s, u;
    }, "memoized");
    return n.cache = new (Ue.Cache || zo)(), n;
  }
  t(Ue, "memoize");
  Ue.Cache = zo;
  ko.exports = Ue;
});

// ../node_modules/lodash/_memoizeCapped.js
var $o = i((Hh, Ko) => {
  var hf = Ho(), Tf = 500;
  function xf(e) {
    var r = hf(e, function(o) {
      return n.size === Tf && n.clear(), o;
    }), n = r.cache;
    return r;
  }
  t(xf, "memoizeCapped");
  Ko.exports = xf;
});

// ../node_modules/lodash/_stringToPath.js
var Yo = i(($h, Wo) => {
  var bf = $o(), vf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Df = /\\(\\)?/g, Pf = bf(
  function(e) {
    var r = [];
    return e.charCodeAt(0) === 46 && r.push(""), e.replace(vf, function(n, o, a, s) {
      r.push(a ? s.replace(Df, "$1") : o || n);
    }), r;
  });
  Wo.exports = Pf;
});

// ../node_modules/lodash/_arrayMap.js
var Qo = i((Wh, Xo) => {
  function qf(e, r) {
    for (var n = -1, o = e == null ? 0 : e.length, a = Array(o); ++n < o; )
      a[n] = r(e[n], n, e);
    return a;
  }
  t(qf, "arrayMap");
  Xo.exports = qf;
});

// ../node_modules/lodash/_baseToString.js
var oa = i((Xh, na) => {
  var Zo = B(), Sf = Qo(), _f = P(), Of = ue(), wf = 1 / 0, ea = Zo ? Zo.prototype : void 0, ra = ea ? ea.toString : void 0;
  function ta(e) {
    if (typeof e == "string")
      return e;
    if (_f(e))
      return Sf(e, ta) + "";
    if (Of(e))
      return ra ? ra.call(e) : "";
    var r = e + "";
    return r == "0" && 1 / e == -wf ? "-0" : r;
  }
  t(ta, "baseToString");
  na.exports = ta;
});

// ../node_modules/lodash/toString.js
var ia = i((Zh, aa) => {
  var Af = oa();
  function Ef(e) {
    return e == null ? "" : Af(e);
  }
  t(Ef, "toString");
  aa.exports = Ef;
});

// ../node_modules/lodash/_castPath.js
var Ge = i((rT, sa) => {
  var jf = P(), Cf = pe(), If = Yo(), Ff = ia();
  function Nf(e, r) {
    return jf(e) ? e : Cf(e, r) ? [e] : If(Ff(e));
  }
  t(Nf, "castPath");
  sa.exports = Nf;
});

// ../node_modules/lodash/_toKey.js
var Q = i((nT, ua) => {
  var Rf = ue(), Lf = 1 / 0;
  function Mf(e) {
    if (typeof e == "string" || Rf(e))
      return e;
    var r = e + "";
    return r == "0" && 1 / e == -Lf ? "-0" : r;
  }
  t(Mf, "toKey");
  ua.exports = Mf;
});

// ../node_modules/lodash/_baseGet.js
var Ve = i((aT, pa) => {
  var Jf = Ge(), Uf = Q();
  function Gf(e, r) {
    r = Jf(r, e);
    for (var n = 0, o = r.length; e != null && n < o; )
      e = e[Uf(r[n++])];
    return n && n == o ? e : void 0;
  }
  t(Gf, "baseGet");
  pa.exports = Gf;
});

// ../node_modules/lodash/get.js
var la = i((sT, ca) => {
  var Vf = Ve();
  function Bf(e, r, n) {
    var o = e == null ? void 0 : Vf(e, r);
    return o === void 0 ? n : o;
  }
  t(Bf, "get");
  ca.exports = Bf;
});

// ../node_modules/lodash/_baseHasIn.js
var ma = i((pT, fa) => {
  function zf(e, r) {
    return e != null && r in Object(e);
  }
  t(zf, "baseHasIn");
  fa.exports = zf;
});

// ../node_modules/lodash/_hasPath.js
var ya = i((lT, ga) => {
  var kf = Ge(), Hf = De(), Kf = P(), $f = qe(), Wf = te(), Yf = Q();
  function Xf(e, r, n) {
    r = kf(r, e);
    for (var o = -1, a = r.length, s = !1; ++o < a; ) {
      var u = Yf(r[o]);
      if (!(s = e != null && n(e, u)))
        break;
      e = e[u];
    }
    return s || ++o != a ? s : (a = e == null ? 0 : e.length, !!a && Wf(a) && $f(u, a) && (Kf(e) || Hf(e)));
  }
  t(Xf, "hasPath");
  ga.exports = Xf;
});

// ../node_modules/lodash/hasIn.js
var ha = i((mT, da) => {
  var Qf = ma(), Zf = ya();
  function em(e, r) {
    return e != null && Zf(e, r, Qf);
  }
  t(em, "hasIn");
  da.exports = em;
});

// ../node_modules/lodash/_baseMatchesProperty.js
var xa = i((yT, Ta) => {
  var rm = Le(), tm = la(), nm = ha(), om = pe(), am = Me(), im = Je(), sm = Q(), um = 1, pm = 2;
  function cm(e, r) {
    return om(e) && am(r) ? im(sm(e), r) : function(n) {
      var o = tm(n, e);
      return o === void 0 && o === r ? nm(n, e) : rm(r, o, um | pm);
    };
  }
  t(cm, "baseMatchesProperty");
  Ta.exports = cm;
});

// ../node_modules/lodash/identity.js
var va = i((hT, ba) => {
  function lm(e) {
    return e;
  }
  t(lm, "identity");
  ba.exports = lm;
});

// ../node_modules/lodash/_baseProperty.js
var Pa = i((xT, Da) => {
  function fm(e) {
    return function(r) {
      return r?.[e];
    };
  }
  t(fm, "baseProperty");
  Da.exports = fm;
});

// ../node_modules/lodash/_basePropertyDeep.js
var Sa = i((vT, qa) => {
  var mm = Ve();
  function gm(e) {
    return function(r) {
      return mm(r, e);
    };
  }
  t(gm, "basePropertyDeep");
  qa.exports = gm;
});

// ../node_modules/lodash/property.js
var Oa = i((PT, _a) => {
  var ym = Pa(), dm = Sa(), hm = pe(), Tm = Q();
  function xm(e) {
    return hm(e) ? ym(Tm(e)) : dm(e);
  }
  t(xm, "property");
  _a.exports = xm;
});

// ../node_modules/lodash/_baseIteratee.js
var Aa = i((ST, wa) => {
  var bm = Go(), vm = xa(), Dm = va(), Pm = P(), qm = Oa();
  function Sm(e) {
    return typeof e == "function" ? e : e == null ? Dm : typeof e == "object" ? Pm(e) ? vm(e[0], e[1]) : bm(e) : qm(e);
  }
  t(Sm, "baseIteratee");
  wa.exports = Sm;
});

// ../node_modules/lodash/mapValues.js
var ja = i((OT, Ea) => {
  var _m = Er(), Om = bt(), wm = Aa();
  function Am(e, r) {
    var n = {};
    return r = wm(r, 3), Om(e, function(o, a, s) {
      _m(n, a, r(o, a, s));
    }), n;
  }
  t(Am, "mapValues");
  Ea.exports = Am;
});

// src/docs-tools/argTypes/convert/flow/convert.ts

var gi = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => e.name === "literal", "isLiteral"))), yi = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => e.value.replace(/['|"]/g, ""), "toEnumOp\
tion"))), di = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => {
  switch (e.type) {
    case "function":
      return { name: "function" };
    case "object":
      let r = {};
      return e.signature.properties.forEach((n) => {
        r[n.key] = E(n.value);
      }), {
        name: "object",
        value: r
      };
    default:
      throw new mi({ type: e, language: "Flow" });
  }
}, "convertSig"))), E = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => {
  let { name: r, raw: n } = e, o = {};
  switch (typeof n < "u" && (o.raw = n), e.name) {
    case "literal":
      return { ...o, name: "other", value: e.value };
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...o, name: r };
    case "Array":
      return { ...o, name: "array", value: e.elements.map(E) };
    case "signature":
      return { ...o, ...di(e) };
    case "union":
      return e.elements?.every(gi) ? { ...o, name: "enum", value: e.elements?.map(yi) } : { ...o, name: r, value: e.elements?.map(E) };
    case "intersection":
      return { ...o, name: r, value: e.elements?.map(E) };
    default:
      return { ...o, name: "other", value: r };
  }
}, "convert")));

// src/docs-tools/argTypes/convert/proptypes/convert.ts
var Ia = fi(ja(), 1);

// src/docs-tools/argTypes/convert/utils.ts
var Ca = /^['"]|['"]$/g, Em = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => e.replace(Ca, ""), "trimQuotes"))), jm = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => Ca.test(e), "includes\
Quotes"))), ce = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => {
  let r = Em(e);
  return jm(e) || Number.isNaN(Number(r)) ? r : Number(r);
}, "parseLiteral")));

// src/docs-tools/argTypes/convert/proptypes/convert.ts
var Cm = /^\(.*\) => /, U = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => {
  let { name: r, raw: n, computed: o, value: a } = e, s = {};
  switch (typeof n < "u" && (s.raw = n), r) {
    case "enum": {
      let p = o ? a : a.map((c) => ce(c.value));
      return { ...s, name: r, value: p };
    }
    case "string":
    case "number":
    case "symbol":
      return { ...s, name: r };
    case "func":
      return { ...s, name: "function" };
    case "bool":
    case "boolean":
      return { ...s, name: "boolean" };
    case "arrayOf":
    case "array":
      return { ...s, name: "array", value: a && U(a) };
    case "object":
      return { ...s, name: r };
    case "objectOf":
      return { ...s, name: r, value: U(a) };
    case "shape":
    case "exact":
      let u = (0, Ia.default)(a, (p) => U(p));
      return { ...s, name: "object", value: u };
    case "union":
      return { ...s, name: "union", value: a.map((p) => U(p)) };
    case "instanceOf":
    case "element":
    case "elementType":
    default: {
      if (r?.indexOf("|") > 0)
        try {
          let l = r.split("|").map((f) => JSON.parse(f));
          return { ...s, name: "enum", value: l };
        } catch {
        }
      let p = a ? `${r}(${a})` : r, c = Cm.test(r) ? "function" : "other";
      return { ...s, name: c, value: p };
    }
  }
}, "convert")));

// src/docs-tools/argTypes/convert/typescript/convert.ts

var Fm = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => {
  switch (e.type) {
    case "function":
      return { name: "function" };
    case "object":
      let r = {};
      return e.signature.properties.forEach((n) => {
        r[n.key] = G(n.value);
      }), {
        name: "object",
        value: r
      };
    default:
      throw new Im({ type: e, language: "Typescript" });
  }
}, "convertSig"))), G = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => {
  let { name: r, raw: n } = e, o = {};
  switch (typeof n < "u" && (o.raw = n), e.name) {
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...o, name: r };
    case "Array":
      return { ...o, name: "array", value: e.elements.map(G) };
    case "signature":
      return { ...o, ...Fm(e) };
    case "union":
      let a;
      return e.elements?.every((s) => s.name === "literal") ? a = {
        ...o,
        name: "enum",
        // @ts-expect-error fix types
        value: e.elements?.map((s) => ce(s.value))
      } : a = { ...o, name: r, value: e.elements?.map(G) }, a;
    case "intersection":
      return { ...o, name: r, value: e.elements?.map(G) };
    default:
      return { ...o, name: "other", value: r };
  }
}, "convert")));

// src/docs-tools/argTypes/convert/index.ts
var le = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => {
  let { type: r, tsType: n, flowType: o } = e;
  try {
    if (r != null)
      return U(r);
    if (n != null)
      return G(n);
    if (o != null)
      return E(o);
  } catch (a) {
    console.error(a);
  }
  return null;
}, "convert")));

// src/docs-tools/argTypes/docgen/types.ts
var Nm = /* @__PURE__ */ ((a) => (a.JAVASCRIPT = "JavaScript", a.FLOW = "Flow", a.TYPESCRIPT = "TypeScript", a.UNKNOWN = "Unknown", a))(Nm ||
{});

// src/docs-tools/argTypes/docgen/utils/defaultValue.ts
var Rm = ["null", "undefined"];
function V(e) {
  return Rm.some((r) => r === e);
}
t(V, "isDefaultValueBlacklisted");

// src/docs-tools/argTypes/docgen/utils/string.ts
var Fa = /* @__PURE__ */ t((e) => {
  if (!e)
    return "";
  if (typeof e == "string")
    return e;
  throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`);
}, "str");

// src/docs-tools/argTypes/docgen/utils/docgenInfo.ts
function Na(e) {
  return !!e.__docgenInfo;
}
t(Na, "hasDocgen");
function Ra(e) {
  return e != null && Object.keys(e).length > 0;
}
t(Ra, "isValidDocgenSection");
function La(e, r) {
  return Na(e) ? e.__docgenInfo[r] : null;
}
t(La, "getDocgenSection");
function Ma(e) {
  return Na(e) ? Fa(e.__docgenInfo.description) : "";
}
t(Ma, "getDocgenDescription");

// ../node_modules/comment-parser/es6/primitives.js
var b;
(function(e) {
  e.start = "/**", e.nostart = "/***", e.delim = "*", e.end = "*/";
})(b = b || (b = {}));

// ../node_modules/comment-parser/es6/util.js
function Be(e) {
  return /^\s+$/.test(e);
}
t(Be, "isSpace");
function Ja(e) {
  let r = e.match(/\r+$/);
  return r == null ? ["", e] : [e.slice(-r[0].length), e.slice(0, -r[0].length)];
}
t(Ja, "splitCR");
function q(e) {
  let r = e.match(/^\s+/);
  return r == null ? ["", e] : [e.slice(0, r[0].length), e.slice(r[0].length)];
}
t(q, "splitSpace");
function Ua(e) {
  return e.split(/\n/);
}
t(Ua, "splitLines");
function Ga(e = {}) {
  return Object.assign({ tag: "", name: "", type: "", optional: !1, description: "", problems: [], source: [] }, e);
}
t(Ga, "seedSpec");
function ze(e = {}) {
  return Object.assign({ start: "", delimiter: "", postDelimiter: "", tag: "", postTag: "", name: "", postName: "", type: "", postType: "", description: "",
  end: "", lineEnd: "" }, e);
}
t(ze, "seedTokens");

// ../node_modules/comment-parser/es6/parser/block-parser.js
var Lm = /^@\S+/;
function ke({ fence: e = "```" } = {}) {
  let r = Mm(e), n = /* @__PURE__ */ t((o, a) => r(o) ? !a : a, "toggleFence");
  return /* @__PURE__ */ t(function(a) {
    let s = [[]], u = !1;
    for (let p of a)
      Lm.test(p.tokens.description) && !u ? s.push([p]) : s[s.length - 1].push(p), u = n(p.tokens.description, u);
    return s;
  }, "parseBlock");
}
t(ke, "getParser");
function Mm(e) {
  return typeof e == "string" ? (r) => r.split(e).length % 2 === 0 : e;
}
t(Mm, "getFencer");

// ../node_modules/comment-parser/es6/parser/source-parser.js
function He({ startLine: e = 0, markers: r = b } = {}) {
  let n = null, o = e;
  return /* @__PURE__ */ t(function(s) {
    let u = s, p = ze();
    if ([p.lineEnd, u] = Ja(u), [p.start, u] = q(u), n === null && u.startsWith(r.start) && !u.startsWith(r.nostart) && (n = [], p.delimiter =
    u.slice(0, r.start.length), u = u.slice(r.start.length), [p.postDelimiter, u] = q(u)), n === null)
      return o++, null;
    let c = u.trimRight().endsWith(r.end);
    if (p.delimiter === "" && u.startsWith(r.delim) && !u.startsWith(r.end) && (p.delimiter = r.delim, u = u.slice(r.delim.length), [p.postDelimiter,
    u] = q(u)), c) {
      let l = u.trimRight();
      p.end = u.slice(l.length - r.end.length), u = l.slice(0, -r.end.length);
    }
    if (p.description = u, n.push({ number: o, source: s, tokens: p }), o++, c) {
      let l = n.slice();
      return n = null, l;
    }
    return null;
  }, "parseSource");
}
t(He, "getParser");

// ../node_modules/comment-parser/es6/parser/spec-parser.js
function Ke({ tokenizers: e }) {
  return /* @__PURE__ */ t(function(n) {
    var o;
    let a = Ga({ source: n });
    for (let s of e)
      if (a = s(a), !((o = a.problems[a.problems.length - 1]) === null || o === void 0) && o.critical)
        break;
    return a;
  }, "parseSpec");
}
t(Ke, "getParser");

// ../node_modules/comment-parser/es6/parser/tokenizers/tag.js
function fe() {
  return (e) => {
    let { tokens: r } = e.source[0], n = r.description.match(/\s*(@(\S+))(\s*)/);
    return n === null ? (e.problems.push({
      code: "spec:tag:prefix",
      message: 'tag should start with "@" symbol',
      line: e.source[0].number,
      critical: !0
    }), e) : (r.tag = n[1], r.postTag = n[3], r.description = r.description.slice(n[0].length), e.tag = n[2], e);
  };
}
t(fe, "tagTokenizer");

// ../node_modules/comment-parser/es6/parser/tokenizers/type.js
function me(e = "compact") {
  let r = Um(e);
  return (n) => {
    let o = 0, a = [];
    for (let [p, { tokens: c }] of n.source.entries()) {
      let l = "";
      if (p === 0 && c.description[0] !== "{")
        return n;
      for (let f of c.description)
        if (f === "{" && o++, f === "}" && o--, l += f, o === 0)
          break;
      if (a.push([c, l]), o === 0)
        break;
    }
    if (o !== 0)
      return n.problems.push({
        code: "spec:type:unpaired-curlies",
        message: "unpaired curlies",
        line: n.source[0].number,
        critical: !0
      }), n;
    let s = [], u = a[0][0].postDelimiter.length;
    for (let [p, [c, l]] of a.entries())
      c.type = l, p > 0 && (c.type = c.postDelimiter.slice(u) + l, c.postDelimiter = c.postDelimiter.slice(0, u)), [c.postType, c.description] =
      q(c.description.slice(l.length)), s.push(c.type);
    return s[0] = s[0].slice(1), s[s.length - 1] = s[s.length - 1].slice(0, -1), n.type = r(s), n;
  };
}
t(me, "typeTokenizer");
var Jm = /* @__PURE__ */ t((e) => e.trim(), "trim");
function Um(e) {
  return e === "compact" ? (r) => r.map(Jm).join("") : e === "preserve" ? (r) => r.join(`
`) : e;
}
t(Um, "getJoiner");

// ../node_modules/comment-parser/es6/parser/tokenizers/name.js
var Gm = /* @__PURE__ */ t((e) => e && e.startsWith('"') && e.endsWith('"'), "isQuoted");
function ge() {
  let e = /* @__PURE__ */ t((r, { tokens: n }, o) => n.type === "" ? r : o, "typeEnd");
  return (r) => {
    let { tokens: n } = r.source[r.source.reduce(e, 0)], o = n.description.trimLeft(), a = o.split('"');
    if (a.length > 1 && a[0] === "" && a.length % 2 === 1)
      return r.name = a[1], n.name = `"${a[1]}"`, [n.postName, n.description] = q(o.slice(n.name.length)), r;
    let s = 0, u = "", p = !1, c;
    for (let f of o) {
      if (s === 0 && Be(f))
        break;
      f === "[" && s++, f === "]" && s--, u += f;
    }
    if (s !== 0)
      return r.problems.push({
        code: "spec:name:unpaired-brackets",
        message: "unpaired brackets",
        line: r.source[0].number,
        critical: !0
      }), r;
    let l = u;
    if (u[0] === "[" && u[u.length - 1] === "]") {
      p = !0, u = u.slice(1, -1);
      let f = u.split("=");
      if (u = f[0].trim(), f[1] !== void 0 && (c = f.slice(1).join("=").trim()), u === "")
        return r.problems.push({
          code: "spec:name:empty-name",
          message: "empty name",
          line: r.source[0].number,
          critical: !0
        }), r;
      if (c === "")
        return r.problems.push({
          code: "spec:name:empty-default",
          message: "empty default value",
          line: r.source[0].number,
          critical: !0
        }), r;
      if (!Gm(c) && /=(?!>)/.test(c))
        return r.problems.push({
          code: "spec:name:invalid-default",
          message: "invalid default value syntax",
          line: r.source[0].number,
          critical: !0
        }), r;
    }
    return r.optional = p, r.name = u, n.name = l, c !== void 0 && (r.default = c), [n.postName, n.description] = q(o.slice(n.name.length)),
    r;
  };
}
t(ge, "nameTokenizer");

// ../node_modules/comment-parser/es6/parser/tokenizers/description.js
function ye(e = "compact", r = b) {
  let n = $e(e);
  return (o) => (o.description = n(o.source, r), o);
}
t(ye, "descriptionTokenizer");
function $e(e) {
  return e === "compact" ? Vm : e === "preserve" ? km : e;
}
t($e, "getJoiner");
function Vm(e, r = b) {
  return e.map(({ tokens: { description: n } }) => n.trim()).filter((n) => n !== "").join(" ");
}
t(Vm, "compactJoiner");
var Bm = /* @__PURE__ */ t((e, { tokens: r }, n) => r.type === "" ? e : n, "lineNo"), zm = /* @__PURE__ */ t(({ tokens: e }) => (e.delimiter ===
"" ? e.start : e.postDelimiter.slice(1)) + e.description, "getDescription");
function km(e, r = b) {
  if (e.length === 0)
    return "";
  e[0].tokens.description === "" && e[0].tokens.delimiter === r.start && (e = e.slice(1));
  let n = e[e.length - 1];
  return n !== void 0 && n.tokens.description === "" && n.tokens.end.endsWith(r.end) && (e = e.slice(0, -1)), e = e.slice(e.reduce(Bm, 0)), e.
  map(zm).join(`
`);
}
t(km, "preserveJoiner");

// ../node_modules/comment-parser/es6/parser/index.js
function We({ startLine: e = 0, fence: r = "```", spacing: n = "compact", markers: o = b, tokenizers: a = [
  fe(),
  me(n),
  ge(),
  ye(n)
] } = {}) {
  if (e < 0 || e % 1 > 0)
    throw new Error("Invalid startLine");
  let s = He({ startLine: e, markers: o }), u = ke({ fence: r }), p = Ke({ tokenizers: a }), c = $e(n);
  return function(l) {
    let f = [];
    for (let d of Ua(l)) {
      let g = s(d);
      if (g === null)
        continue;
      let x = u(g), h = x.slice(1).map(p);
      f.push({
        description: c(x[0], o),
        tags: h,
        source: g,
        problems: h.reduce((T, v) => T.concat(v.problems), [])
      });
    }
    return f;
  };
}
t(We, "getParser");

// ../node_modules/comment-parser/es6/stringifier/index.js
function Hm(e) {
  return e.start + e.delimiter + e.postDelimiter + e.tag + e.postTag + e.type + e.postType + e.name + e.postName + e.description + e.end + e.
  lineEnd;
}
t(Hm, "join");
function Ye() {
  return (e) => e.source.map(({ tokens: r }) => Hm(r)).join(`
`);
}
t(Ye, "getStringifier");

// ../node_modules/comment-parser/es6/stringifier/inspect.js
var Km = {
  line: 0,
  start: 0,
  delimiter: 0,
  postDelimiter: 0,
  tag: 0,
  postTag: 0,
  name: 0,
  postName: 0,
  type: 0,
  postType: 0,
  description: 0,
  end: 0,
  lineEnd: 0
};
var Hx = Object.keys(Km);

// ../node_modules/comment-parser/es6/index.js
function Va(e, r = {}) {
  return We(r)(e);
}
t(Va, "parse");
var mb = Ye();

// src/docs-tools/argTypes/jsdocParser.ts

function Xm(e) {
  return e != null && e.includes("@");
}
t(Xm, "containsJsDoc");
function Qm(e) {
  let o = `/**
` + (e ?? "").split(`
`).map((s) => ` * ${s}`).join(`
`) + `
*/`, a = Va(o, {
    spacing: "preserve"
  });
  if (!a || a.length === 0)
    throw new Error("Cannot parse JSDoc tags.");
  return a[0];
}
t(Qm, "parse");
var Zm = {
  tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"]
}, Ba = /* @__PURE__ */ t((e, r = Zm) => {
  if (!Xm(e))
    return {
      includesJsDoc: !1,
      ignore: !1
    };
  let n = Qm(e), o = eg(n, r.tags);
  return o.ignore ? {
    includesJsDoc: !0,
    ignore: !0
  } : {
    includesJsDoc: !0,
    ignore: !1,
    // Always use the parsed description to ensure JSDoc is removed from the description.
    description: n.description.trim(),
    extractedTags: o
  };
}, "parseJsDoc");
function eg(e, r) {
  let n = {
    params: null,
    deprecated: null,
    returns: null,
    ignore: !1
  };
  for (let o of e.tags)
    if (!(r !== void 0 && !r.includes(o.tag)))
      if (o.tag === "ignore") {
        n.ignore = !0;
        break;
      } else
        switch (o.tag) {
          case "param":
          case "arg":
          case "argument": {
            let a = tg(o);
            a != null && (n.params == null && (n.params = []), n.params.push(a));
            break;
          }
          case "deprecated": {
            let a = ng(o);
            a != null && (n.deprecated = a);
            break;
          }
          case "returns": {
            let a = og(o);
            a != null && (n.returns = a);
            break;
          }
          default:
            break;
        }
  return n;
}
t(eg, "extractJsDocTags");
function rg(e) {
  return e.replace(/[\.-]$/, "");
}
t(rg, "normaliseParamName");
function tg(e) {
  if (!e.name || e.name === "-")
    return null;
  let r = Ha(e.type);
  return {
    name: e.name,
    type: r,
    description: ka(e.description),
    getPrettyName: /* @__PURE__ */ t(() => rg(e.name), "getPrettyName"),
    getTypeName: /* @__PURE__ */ t(() => r ? Ka(r) : null, "getTypeName")
  };
}
t(tg, "extractParam");
function ng(e) {
  return e.name ? za(e.name, e.description) : null;
}
t(ng, "extractDeprecated");
function za(e, r) {
  let n = e === "" ? r : `${e} ${r}`;
  return ka(n);
}
t(za, "joinNameAndDescription");
function ka(e) {
  let r = e.replace(/^- /g, "").trim();
  return r === "" ? null : r;
}
t(ka, "normaliseDescription");
function og(e) {
  let r = Ha(e.type);
  return r ? {
    type: r,
    description: za(e.name, e.description),
    getTypeName: /* @__PURE__ */ t(() => Ka(r), "getTypeName")
  } : null;
}
t(og, "extractReturns");
var _ = (0,jsdoc_type_pratt_parser__WEBPACK_IMPORTED_MODULE_1__.stringifyRules)(), ag = _.JsdocTypeObject;
_.JsdocTypeAny = () => "any";
_.JsdocTypeObject = (e, r) => `(${ag(e, r)})`;
_.JsdocTypeOptional = (e, r) => r(e.element);
_.JsdocTypeNullable = (e, r) => r(e.element);
_.JsdocTypeNotNullable = (e, r) => r(e.element);
_.JsdocTypeUnion = (e, r) => e.elements.map(r).join("|");
function Ha(e) {
  try {
    return (0,jsdoc_type_pratt_parser__WEBPACK_IMPORTED_MODULE_1__.parse)(e, "typescript");
  } catch {
    return null;
  }
}
t(Ha, "extractType");
function Ka(e) {
  return (0,jsdoc_type_pratt_parser__WEBPACK_IMPORTED_MODULE_1__.transform)(_, e);
}
t(Ka, "extractTypeName");

// src/docs-tools/argTypes/utils.ts
var Db = 90, Pb = 50;
function Qe(e) {
  return e.length > 90;
}
t(Qe, "isTooLongForTypeSummary");
function $a(e) {
  return e.length > 50;
}
t($a, "isTooLongForDefaultValueSummary");
function y(e, r) {
  return e === r ? { summary: e } : { summary: e, detail: r };
}
t(y, "createSummaryValue");
var qb = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => e.replace(/\\r\\n/g, "\\n"), "normalizeNewlines")));

// src/docs-tools/argTypes/docgen/flow/createDefaultValue.ts
function Wa(e, r) {
  if (e != null) {
    let { value: n } = e;
    if (!V(n))
      return $a(n) ? y(r?.name, n) : y(n);
  }
  return null;
}
t(Wa, "createDefaultValue");

// src/docs-tools/argTypes/docgen/flow/createType.ts
function Ya({ name: e, value: r, elements: n, raw: o }) {
  return r ?? (n != null ? n.map(Ya).join(" | ") : o ?? e);
}
t(Ya, "generateUnionElement");
function ig({ name: e, raw: r, elements: n }) {
  return n != null ? y(n.map(Ya).join(" | ")) : r != null ? y(r.replace(/^\|\s*/, "")) : y(e);
}
t(ig, "generateUnion");
function sg({ type: e, raw: r }) {
  return r != null ? y(r) : y(e);
}
t(sg, "generateFuncSignature");
function ug({ type: e, raw: r }) {
  return r != null ? Qe(r) ? y(e, r) : y(r) : y(e);
}
t(ug, "generateObjectSignature");
function pg(e) {
  let { type: r } = e;
  return r === "object" ? ug(e) : sg(e);
}
t(pg, "generateSignature");
function cg({ name: e, raw: r }) {
  return r != null ? Qe(r) ? y(e, r) : y(r) : y(e);
}
t(cg, "generateDefault");
function Xa(e) {
  if (e == null)
    return null;
  switch (e.name) {
    case "union":
      return ig(e);
    case "signature":
      return pg(e);
    default:
      return cg(e);
  }
}
t(Xa, "createType");

// src/docs-tools/argTypes/docgen/flow/createPropDef.ts
var Qa = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e, r) => {
  let { flowType: n, description: o, required: a, defaultValue: s } = r;
  return {
    name: e,
    type: Xa(n),
    required: a,
    description: o,
    defaultValue: Wa(s ?? null, n ?? null)
  };
}, "createFlowPropDef")));

// src/docs-tools/argTypes/docgen/typeScript/createDefaultValue.ts
function Za({ defaultValue: e }) {
  if (e != null) {
    let { value: r } = e;
    if (!V(r))
      return y(r);
  }
  return null;
}
t(Za, "createDefaultValue");

// src/docs-tools/argTypes/docgen/typeScript/createType.ts
function ei({ tsType: e, required: r }) {
  if (e == null)
    return null;
  let n = e.name;
  return r || (n = n.replace(" | undefined", "")), y(
    ["Array", "Record", "signature"].includes(e.name) ? e.raw : n
  );
}
t(ei, "createType");

// src/docs-tools/argTypes/docgen/typeScript/createPropDef.ts
var ri = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e, r) => {
  let { description: n, required: o } = r;
  return {
    name: e,
    type: ei(r),
    required: o,
    description: n,
    defaultValue: Za(r)
  };
}, "createTsPropDef")));

// src/docs-tools/argTypes/docgen/createPropDef.ts
function lg(e) {
  return e != null ? y(e.name) : null;
}
t(lg, "createType");
function fg(e) {
  let { computed: r, func: n } = e;
  return typeof r > "u" && typeof n > "u";
}
t(fg, "isReactDocgenTypescript");
function mg(e) {
  return e ? e.name === "string" ? !0 : e.name === "enum" ? Array.isArray(e.value) && e.value.every(
    ({ value: r }) => typeof r == "string" && r[0] === '"' && r[r.length - 1] === '"'
  ) : !1 : !1;
}
t(mg, "isStringValued");
function gg(e, r) {
  if (e != null) {
    let { value: n } = e;
    if (!V(n))
      return fg(e) && mg(r) ? y(JSON.stringify(n)) : y(n);
  }
  return null;
}
t(gg, "createDefaultValue");
function ti(e, r, n) {
  let { description: o, required: a, defaultValue: s } = n;
  return {
    name: e,
    type: lg(r),
    required: a,
    description: o,
    defaultValue: gg(s, r)
  };
}
t(ti, "createBasicPropDef");
function de(e, r) {
  if (r?.includesJsDoc) {
    let { description: n, extractedTags: o } = r;
    n != null && (e.description = r.description);
    let a = {
      ...o,
      params: o?.params?.map(
        (s) => ({
          name: s.getPrettyName(),
          description: s.description
        })
      )
    };
    Object.values(a).filter(Boolean).length > 0 && (e.jsDocTags = a);
  }
  return e;
}
t(de, "applyJsDocResult");
var yg = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e, r, n) => {
  let o = ti(e, r.type, r);
  return o.sbType = le(r), de(o, n);
}, "javaScriptFactory"))), dg = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e, r, n) => {
  let o = ri(e, r);
  return o.sbType = le(r), de(o, n);
}, "tsFactory"))), hg = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e, r, n) => {
  let o = Qa(e, r);
  return o.sbType = le(r), de(o, n);
}, "flowFactory"))), Tg = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e, r, n) => {
  let o = ti(e, { name: "unknown" }, r);
  return de(o, n);
}, "unknownFactory"))), Ze = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => {
  switch (e) {
    case "JavaScript":
      return yg;
    case "TypeScript":
      return dg;
    case "Flow":
      return hg;
    default:
      return Tg;
  }
}, "getPropDefFactory")));

// src/docs-tools/argTypes/docgen/extractDocgenProps.ts
var ni = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => e.type != null ? "JavaScript" : e.flowType != null ? "Flow" : e.tsType != null ? "TypeScript" : "Unknown",
"getTypeSystem"))), xg = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => {
  let r = ni(e[0]), n = Ze(r);
  return e.map((o) => {
    let a = o;
    return o.type?.elements && (a = {
      ...o,
      type: {
        ...o.type,
        value: o.type.elements
      }
    }), oi(a.name, a, r, n);
  });
}, "extractComponentSectionArray"))), bg = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => {
  let r = Object.keys(e), n = ni(e[r[0]]), o = Ze(n);
  return r.map((a) => {
    let s = e[a];
    return s != null ? oi(a, s, n, o) : null;
  }).filter(Boolean);
}, "extractComponentSectionObject"))), av = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e, r) => {
  let n = La(e, r);
  return Ra(n) ? Array.isArray(n) ? xg(n) : bg(n) : [];
}, "extractComponentProps")));
function oi(e, r, n, o) {
  let a = Ba(r.description);
  return a.includesJsDoc && a.ignore ? null : {
    propDef: o(e, r, a),
    jsDocTags: a.extractedTags,
    docgenInfo: r,
    typeSystem: n
  };
}
t(oi, "extractProp");
function iv(e) {
  return e != null ? Ma(e) : "";
}
t(iv, "extractComponentDescription");

// src/docs-tools/argTypes/enhanceArgTypes.ts

var cv = /* @__PURE__ */ t((e) => {
  let {
    component: r,
    argTypes: n,
    parameters: { docs: o = {} }
  } = e, { extractArgTypes: a } = o, s = a && r ? a(r) : {};
  return s ? (0,_storybook_core_preview_api__WEBPACK_IMPORTED_MODULE_2__.combineParameters)(s, n) : n;
}, "enhanceArgTypes");

// src/docs-tools/shared.ts
var ai = "storybook/docs", mv = (/* unused pure expression or super */ null && (`${ai}/panel`)), gv = "docs", yv = `${ai}/snippet-rendered`, Dg = /* @__PURE__ */ ((o) => (o.AUTO = "auto", o.
CODE = "code", o.DYNAMIC = "dynamic", o))(Dg || {});

// src/docs-tools/hasDocsOrControls.ts
var Pg = /(addons\/|addon-|addon-essentials\/)(docs|controls)/, hv = /* @__PURE__ */ (/* unused pure expression or super */ null && (t((e) => e.presetsList?.some((r) => Pg.test(r.name)), "\
hasDocsOrControls")));



/***/ }),

/***/ "../../../node_modules/@storybook/core/dist/theming/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C6: () => (/* binding */ zr),
/* harmony export */   D8: () => (/* binding */ pc),
/* harmony export */   DP: () => (/* binding */ Mt),
/* harmony export */   EG: () => (/* binding */ sr),
/* harmony export */   I4: () => (/* binding */ Tr),
/* harmony export */   Il: () => (/* binding */ H),
/* harmony export */   NP: () => (/* binding */ jt),
/* harmony export */   Zj: () => (/* binding */ Ne),
/* harmony export */   a: () => (/* binding */ yo),
/* harmony export */   i7: () => (/* binding */ be),
/* harmony export */   v_: () => (/* binding */ gc),
/* harmony export */   yW: () => (/* binding */ g)
/* harmony export */ });
/* unused harmony exports CacheProvider, ClassNames, Global, background, create, createCache, createGlobal, createReset, css, darken, jsx, withTheme */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/react/index.js");
/* harmony import */ var _storybook_core_client_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("storybook/internal/client-logger");
/* harmony import */ var _storybook_core_client_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_core_client_logger__WEBPACK_IMPORTED_MODULE_1__);
var Bn = Object.create;
var or = Object.defineProperty;
var $n = Object.getOwnPropertyDescriptor;
var Hn = Object.getOwnPropertyNames;
var Vn = Object.getPrototypeOf, Un = Object.prototype.hasOwnProperty;
var a = (e, r) => or(e, "name", { value: r, configurable: !0 }), Ee = /* @__PURE__ */ ((e) =>  true ? __webpack_require__("../../../node_modules/@storybook/core/dist/theming sync recursive") : 0)(function(e) {
  if (true) return __webpack_require__("../../../node_modules/@storybook/core/dist/theming sync recursive").apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var Le = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var Wn = (e, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let o of Hn(r))
      !Un.call(e, o) && o !== t && or(e, o, { get: () => r[o], enumerable: !(n = $n(r, o)) || n.enumerable });
  return e;
};
var ir = (e, r, t) => (t = e != null ? Bn(Vn(e)) : {}, Wn(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  r || !e || !e.__esModule ? or(t, "default", { value: e, enumerable: !0 }) : t,
  e
));

// ../node_modules/react-is/cjs/react-is.development.js
var ct = Le((R) => {
  "use strict";
  (function() {
    "use strict";
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114,
    s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111,
    d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") :
    60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116,
    m = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118,
    E = e ? Symbol.for("react.scope") : 60119;
    function A(b) {
      return typeof b == "string" || typeof b == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      b === n || b === d || b === i || b === o || b === l || b === p || typeof b == "object" && b !== null && (b.$$typeof === h || b.$$typeof ===
      v || b.$$typeof === s || b.$$typeof === u || b.$$typeof === f || b.$$typeof === y || b.$$typeof === x || b.$$typeof === E || b.$$typeof ===
      m);
    }
    a(A, "isValidElementType");
    function T(b) {
      if (typeof b == "object" && b !== null) {
        var ar = b.$$typeof;
        switch (ar) {
          case r:
            var Pe = b.type;
            switch (Pe) {
              case c:
              case d:
              case n:
              case i:
              case o:
              case l:
                return Pe;
              default:
                var Br = Pe && Pe.$$typeof;
                switch (Br) {
                  case u:
                  case f:
                  case h:
                  case v:
                  case s:
                    return Br;
                  default:
                    return ar;
                }
            }
          case t:
            return ar;
        }
      }
    }
    a(T, "typeOf");
    var C = c, N = d, S = u, xe = s, W = r, G = f, er = n, rr = h, tr = v, nr = t, Tn = i, Cn = o, Rn = l, jr = !1;
    function An(b) {
      return jr || (jr = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update you\
r code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Dr(b) || T(b) === c;
    }
    a(An, "isAsyncMode");
    function Dr(b) {
      return T(b) === d;
    }
    a(Dr, "isConcurrentMode");
    function _n(b) {
      return T(b) === u;
    }
    a(_n, "isContextConsumer");
    function Fn(b) {
      return T(b) === s;
    }
    a(Fn, "isContextProvider");
    function Nn(b) {
      return typeof b == "object" && b !== null && b.$$typeof === r;
    }
    a(Nn, "isElement");
    function In(b) {
      return T(b) === f;
    }
    a(In, "isForwardRef");
    function kn(b) {
      return T(b) === n;
    }
    a(kn, "isFragment");
    function Pn(b) {
      return T(b) === h;
    }
    a(Pn, "isLazy");
    function Ln(b) {
      return T(b) === v;
    }
    a(Ln, "isMemo");
    function zn(b) {
      return T(b) === t;
    }
    a(zn, "isPortal");
    function Mn(b) {
      return T(b) === i;
    }
    a(Mn, "isProfiler");
    function jn(b) {
      return T(b) === o;
    }
    a(jn, "isStrictMode");
    function Dn(b) {
      return T(b) === l;
    }
    a(Dn, "isSuspense"), R.AsyncMode = C, R.ConcurrentMode = N, R.ContextConsumer = S, R.ContextProvider = xe, R.Element = W, R.ForwardRef =
    G, R.Fragment = er, R.Lazy = rr, R.Memo = tr, R.Portal = nr, R.Profiler = Tn, R.StrictMode = Cn, R.Suspense = Rn, R.isAsyncMode = An, R.
    isConcurrentMode = Dr, R.isContextConsumer = _n, R.isContextProvider = Fn, R.isElement = Nn, R.isForwardRef = In, R.isFragment = kn, R.isLazy =
    Pn, R.isMemo = Ln, R.isPortal = zn, R.isProfiler = Mn, R.isStrictMode = jn, R.isSuspense = Dn, R.isValidElementType = A, R.typeOf = T;
  })();
});

// ../node_modules/react-is/index.js
var lt = Le((xi, ft) => {
  "use strict";
  ft.exports = ct();
});

// ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var mr = Le((Ei, bt) => {
  "use strict";
  var dr = lt(), ua = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, ca = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, fa = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, ht = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, pr = {};
  pr[dr.ForwardRef] = fa;
  pr[dr.Memo] = ht;
  function dt(e) {
    return dr.isMemo(e) ? ht : pr[e.$$typeof] || ua;
  }
  a(dt, "getStatics");
  var la = Object.defineProperty, da = Object.getOwnPropertyNames, pt = Object.getOwnPropertySymbols, pa = Object.getOwnPropertyDescriptor, ma = Object.
  getPrototypeOf, mt = Object.prototype;
  function gt(e, r, t) {
    if (typeof r != "string") {
      if (mt) {
        var n = ma(r);
        n && n !== mt && gt(e, n, t);
      }
      var o = da(r);
      pt && (o = o.concat(pt(r)));
      for (var i = dt(e), s = dt(r), u = 0; u < o.length; ++u) {
        var c = o[u];
        if (!ca[c] && !(t && t[c]) && !(s && s[c]) && !(i && i[c])) {
          var d = pa(r, c);
          try {
            la(e, c, d);
          } catch {
          }
        }
      }
    }
    return e;
  }
  a(gt, "hoistNonReactStatics");
  bt.exports = gt;
});

// ../node_modules/memoizerific/memoizerific.js
var ln = Le((fn, Ir) => {
  (function(e) {
    if (typeof fn == "object" && typeof Ir < "u")
      Ir.exports = e();
    else if (typeof define == "function" && __webpack_require__.amdO)
      define([], e);
    else {
      var r;
      typeof window < "u" ? r = window : typeof __webpack_require__.g < "u" ? r = __webpack_require__.g : typeof self < "u" ? r = self : r = this, r.memoizerific = e();
    }
  })(function() {
    var e, r, t;
    return (/* @__PURE__ */ a(function n(o, i, s) {
      function u(f, l) {
        if (!i[f]) {
          if (!o[f]) {
            var p = typeof Ee == "function" && Ee;
            if (!l && p) return p(f, !0);
            if (c) return c(f, !0);
            var v = new Error("Cannot find module '" + f + "'");
            throw v.code = "MODULE_NOT_FOUND", v;
          }
          var h = i[f] = { exports: {} };
          o[f][0].call(h.exports, function(m) {
            var y = o[f][1][m];
            return u(y || m);
          }, h, h.exports, n, o, i, s);
        }
        return i[f].exports;
      }
      a(u, "s");
      for (var c = typeof Ee == "function" && Ee, d = 0; d < s.length; d++) u(s[d]);
      return u;
    }, "e"))({ 1: [function(n, o, i) {
      o.exports = function(s) {
        if (typeof Map != "function" || s) {
          var u = n("./similar");
          return new u();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(n, o, i) {
      function s() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      a(s, "Similar"), s.prototype.get = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u))
          return this.lastItem.val;
        if (c = this.indexOf(u), c >= 0)
          return this.lastItem = this.list[c], this.list[c].val;
      }, s.prototype.set = function(u, c) {
        var d;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? (this.lastItem.val = c, this) : (d = this.indexOf(u), d >= 0 ? (this.lastItem =
        this.list[d], this.list[d].val = c, this) : (this.lastItem = { key: u, val: c }, this.list.push(this.lastItem), this.size++, this));
      }, s.prototype.delete = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u) && (this.lastItem = void 0), c = this.indexOf(u), c >= 0)
          return this.size--, this.list.splice(c, 1)[0];
      }, s.prototype.has = function(u) {
        var c;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? !0 : (c = this.indexOf(u), c >= 0 ? (this.lastItem = this.list[c], !0) :
        !1);
      }, s.prototype.forEach = function(u, c) {
        var d;
        for (d = 0; d < this.size; d++)
          u.call(c || this, this.list[d].val, this.list[d].key, this);
      }, s.prototype.indexOf = function(u) {
        var c;
        for (c = 0; c < this.size; c++)
          if (this.isEqual(this.list[c].key, u))
            return c;
        return -1;
      }, s.prototype.isEqual = function(u, c) {
        return u === c || u !== u && c !== c;
      }, o.exports = s;
    }, {}], 3: [function(n, o, i) {
      var s = n("map-or-similar");
      o.exports = function(f) {
        var l = new s(!1), p = [];
        return function(v) {
          var h = /* @__PURE__ */ a(function() {
            var m = l, y, x, E = arguments.length - 1, A = Array(E + 1), T = !0, C;
            if ((h.numArgs || h.numArgs === 0) && h.numArgs !== E + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (C = 0; C < E; C++) {
              if (A[C] = {
                cacheItem: m,
                arg: arguments[C]
              }, m.has(arguments[C])) {
                m = m.get(arguments[C]);
                continue;
              }
              T = !1, y = new s(!1), m.set(arguments[C], y), m = y;
            }
            return T && (m.has(arguments[E]) ? x = m.get(arguments[E]) : T = !1), T || (x = v.apply(null, arguments), m.set(arguments[E], x)),
            f > 0 && (A[E] = {
              cacheItem: m,
              arg: arguments[E]
            }, T ? u(p, A) : p.push(A), p.length > f && c(p.shift())), h.wasMemoized = T, h.numArgs = E + 1, x;
          }, "memoizerific");
          return h.limit = f, h.wasMemoized = !1, h.cache = l, h.lru = p, h;
        };
      };
      function u(f, l) {
        var p = f.length, v = l.length, h, m, y;
        for (m = 0; m < p; m++) {
          for (h = !0, y = 0; y < v; y++)
            if (!d(f[m][y].arg, l[y].arg)) {
              h = !1;
              break;
            }
          if (h)
            break;
        }
        f.push(f.splice(m, 1)[0]);
      }
      a(u, "moveToMostRecentLru");
      function c(f) {
        var l = f.length, p = f[l - 1], v, h;
        for (p.cacheItem.delete(p.arg), h = l - 2; h >= 0 && (p = f[h], v = p.cacheItem.get(p.arg), !v || !v.size); h--)
          p.cacheItem.delete(p.arg);
      }
      a(c, "removeCachedResult");
      function d(f, l) {
        return f === l || f !== f && l !== l;
      }
      a(d, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});

// ../node_modules/@babel/runtime/helpers/esm/extends.js
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, j.apply(null, arguments);
}
a(j, "_extends");

// ../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js


// ../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function ze(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
a(ze, "memoize");

// ../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var Yn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
sr = /* @__PURE__ */ ze(
  function(e) {
    return Yn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);

// ../node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js



// ../node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js
function Gn(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
a(Gn, "sheetForTag");
function qn(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode(
  "")), r.setAttribute("data-s", ""), r;
}
a(qn, "createStyleElement");
var $r = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i =
      n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? !1 : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container =
    t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  a(e, "StyleSheet");
  var r = e.prototype;
  return r.hydrate = /* @__PURE__ */ a(function(n) {
    n.forEach(this._insertTag);
  }, "hydrate"), r.insert = /* @__PURE__ */ a(function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(qn(this));
    var o = this.tags[this.tags.length - 1], i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
    if (i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure\
 that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule ||
    !i, this.isSpeedy) {
      var s = Gn(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (u) {
        /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.
        test(n) || console.error('There was a problem inserting the following rule: "' + n + '"', u);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, "insert"), r.flush = /* @__PURE__ */ a(function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, this._alreadyInsertedOrderInsensitiveRule = !1;
  }, "flush"), e;
}();

// ../node_modules/stylis/src/Enum.js
var k = "-ms-", we = "-moz-", O = "-webkit-", ae = "comm", oe = "rule", ie = "decl";
var Hr = "@import";
var Me = "@keyframes";
var Vr = "@layer";

// ../node_modules/stylis/src/Utility.js
var Ur = Math.abs, X = String.fromCharCode, Wr = Object.assign;
function Yr(e, r) {
  return _(e, 0) ^ 45 ? (((r << 2 ^ _(e, 0)) << 2 ^ _(e, 1)) << 2 ^ _(e, 2)) << 2 ^ _(e, 3) : 0;
}
a(Yr, "hash");
function je(e) {
  return e.trim();
}
a(je, "trim");
function ur(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
a(ur, "match");
function w(e, r, t) {
  return e.replace(r, t);
}
a(w, "replace");
function Se(e, r) {
  return e.indexOf(r);
}
a(Se, "indexof");
function _(e, r) {
  return e.charCodeAt(r) | 0;
}
a(_, "charat");
function q(e, r, t) {
  return e.slice(r, t);
}
a(q, "substr");
function P(e) {
  return e.length;
}
a(P, "strlen");
function se(e) {
  return e.length;
}
a(se, "sizeof");
function ue(e, r) {
  return r.push(e), e;
}
a(ue, "append");
function cr(e, r) {
  return e.map(r).join("");
}
a(cr, "combine");

// ../node_modules/stylis/src/Tokenizer.js
var De = 1, ce = 1, Gr = 0, L = 0, F = 0, le = "";
function Oe(e, r, t, n, o, i, s) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: De, column: ce, length: s, return: "" };
}
a(Oe, "node");
function de(e, r) {
  return Wr(Oe("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
a(de, "copy");
function qr() {
  return F;
}
a(qr, "char");
function Jr() {
  return F = L > 0 ? _(le, --L) : 0, ce--, F === 10 && (ce = 1, De--), F;
}
a(Jr, "prev");
function z() {
  return F = L < Gr ? _(le, L++) : 0, ce++, F === 10 && (ce = 1, De++), F;
}
a(z, "next");
function D() {
  return _(le, L);
}
a(D, "peek");
function Te() {
  return L;
}
a(Te, "caret");
function pe(e, r) {
  return q(le, e, r);
}
a(pe, "slice");
function fe(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
a(fe, "token");
function Be(e) {
  return De = ce = 1, Gr = P(le = e), L = 0, [];
}
a(Be, "alloc");
function $e(e) {
  return le = "", e;
}
a($e, "dealloc");
function me(e) {
  return je(pe(L - 1, fr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
a(me, "delimit");
function Zr(e) {
  for (; (F = D()) && F < 33; )
    z();
  return fe(e) > 2 || fe(F) > 3 ? "" : " ";
}
a(Zr, "whitespace");
function Kr(e, r) {
  for (; --r && z() && !(F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97); )
    ;
  return pe(e, Te() + (r < 6 && D() == 32 && z() == 32));
}
a(Kr, "escaping");
function fr(e) {
  for (; z(); )
    switch (F) {
      case e:
        return L;
      case 34:
      case 39:
        e !== 34 && e !== 39 && fr(F);
        break;
      case 40:
        e === 41 && fr(e);
        break;
      case 92:
        z();
        break;
    }
  return L;
}
a(fr, "delimiter");
function Xr(e, r) {
  for (; z() && e + F !== 57; )
    if (e + F === 84 && D() === 47)
      break;
  return "/*" + pe(r, L - 1) + "*" + X(e === 47 ? e : z());
}
a(Xr, "commenter");
function Qr(e) {
  for (; !fe(D()); )
    z();
  return pe(e, L);
}
a(Qr, "identifier");

// ../node_modules/stylis/src/Parser.js
function tt(e) {
  return $e(He("", null, null, null, [""], e = Be(e), 0, [0], e));
}
a(tt, "compile");
function He(e, r, t, n, o, i, s, u, c) {
  for (var d = 0, f = 0, l = s, p = 0, v = 0, h = 0, m = 1, y = 1, x = 1, E = 0, A = "", T = o, C = i, N = n, S = A; y; )
    switch (h = E, E = z()) {
      case 40:
        if (h != 108 && _(S, l - 1) == 58) {
          Se(S += w(me(E), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += me(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Zr(h);
        break;
      case 92:
        S += Kr(Te() - 1, 7);
        continue;
      case 47:
        switch (D()) {
          case 42:
          case 47:
            ue(Jn(Xr(z(), Te()), r, t), c);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * m:
        u[d++] = P(S) * x;
      case 125 * m:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            y = 0;
          case 59 + f:
            x == -1 && (S = w(S, /\f/g, "")), v > 0 && P(S) - l && ue(v > 32 ? rt(S + ";", n, t, l - 1) : rt(w(S, " ", "") + ";", n, t, l - 2),
            c);
            break;
          case 59:
            S += ";";
          default:
            if (ue(N = et(S, r, t, d, f, o, u, A, T = [], C = [], l), i), E === 123)
              if (f === 0)
                He(S, r, N, N, T, i, l, u, C);
              else
                switch (p === 99 && _(S, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    He(e, N, N, n && ue(et(e, N, N, 0, 0, o, u, A, o, T = [], l), C), o, C, l, u, n ? T : C);
                    break;
                  default:
                    He(S, N, N, N, [""], C, 0, u, C);
                }
        }
        d = f = v = 0, m = x = 1, A = S = "", l = s;
        break;
      case 58:
        l = 1 + P(S), v = h;
      default:
        if (m < 1) {
          if (E == 123)
            --m;
          else if (E == 125 && m++ == 0 && Jr() == 125)
            continue;
        }
        switch (S += X(E), E * m) {
          case 38:
            x = f > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            u[d++] = (P(S) - 1) * x, x = 1;
            break;
          case 64:
            D() === 45 && (S += me(z())), p = D(), f = l = P(A = S += Qr(Te())), E++;
            break;
          case 45:
            h === 45 && P(S) == 2 && (m = 0);
        }
    }
  return i;
}
a(He, "parse");
function et(e, r, t, n, o, i, s, u, c, d, f) {
  for (var l = o - 1, p = o === 0 ? i : [""], v = se(p), h = 0, m = 0, y = 0; h < n; ++h)
    for (var x = 0, E = q(e, l + 1, l = Ur(m = s[h])), A = e; x < v; ++x)
      (A = je(m > 0 ? p[x] + " " + E : w(E, /&\f/g, p[x]))) && (c[y++] = A);
  return Oe(e, r, t, o === 0 ? oe : u, c, d, f);
}
a(et, "ruleset");
function Jn(e, r, t) {
  return Oe(e, r, t, ae, X(qr()), q(e, 2, -2), 0);
}
a(Jn, "comment");
function rt(e, r, t, n) {
  return Oe(e, r, t, ie, q(e, 0, n), q(e, n + 1, -1), n);
}
a(rt, "declaration");

// ../node_modules/stylis/src/Serializer.js
function Q(e, r) {
  for (var t = "", n = se(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
a(Q, "serialize");
function nt(e, r, t, n) {
  switch (e.type) {
    case Vr:
      if (e.children.length) break;
    case Hr:
    case ie:
      return e.return = e.return || e.value;
    case ae:
      return "";
    case Me:
      return e.return = e.value + "{" + Q(e.children, n) + "}";
    case oe:
      e.value = e.props.join(",");
  }
  return P(t = Q(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
a(nt, "stringify");

// ../node_modules/stylis/src/Middleware.js
function at(e) {
  var r = se(e);
  return function(t, n, o, i) {
    for (var s = "", u = 0; u < r; u++)
      s += e[u](t, n, o, i) || "";
    return s;
  };
}
a(at, "middleware");

// ../node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var lr = /* @__PURE__ */ a(function(r) {
  var t = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (t.has(n))
      return t.get(n);
    var o = r(n);
    return t.set(n, o), o;
  };
}, "weakMemoize");

// ../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var Zn = /* @__PURE__ */ a(function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = D(), o === 38 && i === 12 && (t[n] = 1), !fe(i); )
    z();
  return pe(r, L);
}, "identifierWithPointTracking"), Kn = /* @__PURE__ */ a(function(r, t) {
  var n = -1, o = 44;
  do
    switch (fe(o)) {
      case 0:
        o === 38 && D() === 12 && (t[n] = 1), r[n] += Zn(L - 1, t, n);
        break;
      case 2:
        r[n] += me(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = D() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += X(o);
    }
  while (o = z());
  return r;
}, "toRules"), Xn = /* @__PURE__ */ a(function(r, t) {
  return $e(Kn(Be(r), t));
}, "getRules"), ot = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ a(function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !ot.get(n)) && !o) {
      ot.set(r, !0);
      for (var i = [], s = Xn(t, i), u = n.props, c = 0, d = 0; c < s.length; c++)
        for (var f = 0; f < u.length; f++, d++)
          r.props[d] = i[c] ? s[c].replace(/&\f/g, u[f]) : u[f] + " " + s[c];
    }
  }
}, "compat"), ea = /* @__PURE__ */ a(function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, "removeLabel"), ra = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", ta = /* @__PURE__ */ a(
function(r) {
  return r.type === "comm" && r.children.indexOf(ra) > -1;
}, "isIgnoringComment"), na = /* @__PURE__ */ a(function(r) {
  return function(t, n, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var s = !!t.parent, u = s ? t.parent.children : (
          // global rule at the root level
          o
        ), c = u.length - 1; c >= 0; c--) {
          var d = u[c];
          if (d.line < t.line)
            break;
          if (d.column < t.column) {
            if (ta(d))
              return;
            break;
          }
        }
        i.forEach(function(f) {
          console.error('The pseudo class "' + f + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + f.split(
          "-child")[0] + '-of-type".');
        });
      }
    }
  };
}, "createUnsafeSelectorsAlarm"), st = /* @__PURE__ */ a(function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, "isImportRule"), aa = /* @__PURE__ */ a(function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!st(t[n]))
      return !0;
  return !1;
}, "isPrependedWithRegularRules"), it = /* @__PURE__ */ a(function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, "nullifyElement"), oa = /* @__PURE__ */ a(function(r, t, n) {
  st(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before\
 regular rules. Keep in mind that they can only be used within global styles."), it(r)) : aa(t, n) && (console.error("`@import` rules can't \
be after other rules. Please put your `@import` rules before your other rules."), it(r)));
}, "incorrectImportAlarm");
function ut(e, r) {
  switch (Yr(e, r)) {
    case 5103:
      return O + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return O + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return O + e + we + e + k + e + e;
    case 6828:
    case 4268:
      return O + e + k + e + e;
    case 6165:
      return O + e + k + "flex-" + e + e;
    case 5187:
      return O + e + w(e, /(\w+).+(:[^]+)/, O + "box-$1$2" + k + "flex-$1$2") + e;
    case 5443:
      return O + e + k + "flex-item-" + w(e, /flex-|-self/, "") + e;
    case 4675:
      return O + e + k + "flex-line-pack" + w(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return O + e + k + w(e, "shrink", "negative") + e;
    case 5292:
      return O + e + k + w(e, "basis", "preferred-size") + e;
    case 6060:
      return O + "box-" + w(e, "-grow", "") + O + e + k + w(e, "grow", "positive") + e;
    case 4554:
      return O + w(e, /([^-])(transform)/g, "$1" + O + "$2") + e;
    case 6187:
      return w(w(w(e, /(zoom-|grab)/, O + "$1"), /(image-set)/, O + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return w(e, /(image-set\([^]*)/, O + "$1$`$1");
    case 4968:
      return w(w(e, /(.+:)(flex-)?(.*)/, O + "box-pack:$3" + k + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + O + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return w(e, /(.+)-inline(.+)/, O + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (P(e) - 1 - r > 6) switch (_(e, r + 1)) {
        case 109:
          if (_(e, r + 4) !== 45) break;
        case 102:
          return w(e, /(.+:)(.+)-([^]+)/, "$1" + O + "$2-$3$1" + we + (_(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Se(e, "stretch") ? ut(w(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    case 4949:
      if (_(e, r + 1) !== 115) break;
    case 6444:
      switch (_(e, P(e) - 3 - (~Se(e, "!important") && 10))) {
        case 107:
          return w(e, ":", ":" + O) + e;
        case 101:
          return w(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + O + (_(e, 14) === 45 ? "inline-" : "") + "box$3$1" + O + "$2$3$1" + k + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (_(e, r + 11)) {
        case 114:
          return O + e + k + w(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return O + e + k + w(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return O + e + k + w(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return O + e + k + e + e;
  }
  return e;
}
a(ut, "prefix");
var ia = /* @__PURE__ */ a(function(r, t, n, o) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case ie:
      r.return = ut(r.value, r.length);
      break;
    case Me:
      return Q([de(r, {
        value: w(r.value, "@", "@" + O)
      })], o);
    case oe:
      if (r.length) return cr(r.props, function(i) {
        switch (ur(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Q([de(r, {
              props: [w(i, /:(read-\w+)/, ":" + we + "$1")]
            })], o);
          case "::placeholder":
            return Q([de(r, {
              props: [w(i, /:(plac\w+)/, ":" + O + "input-$1")]
            }), de(r, {
              props: [w(i, /:(plac\w+)/, ":" + we + "$1")]
            }), de(r, {
              props: [w(i, /:(plac\w+)/, k + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, "prefixer"), sa = [ia], Ve = /* @__PURE__ */ a(function(r) {
  var t = r.key;
  if (!t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for link\
ing styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(m) {
      var y = m.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || sa;
  if (/[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, s, u = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(m) {
      for (var y = m.getAttribute("data-emotion").split(" "), x = 1; x < y.length; x++)
        i[y[x]] = !0;
      u.push(m);
    }
  );
  var c, d = [Qn, ea];
  d.push(na({
    get compat() {
      return h.compat;
    }
  }), oa);
  {
    var f, l = [nt, function(m) {
      m.root || (m.return ? f.insert(m.return) : m.value && m.type !== ae && f.insert(m.value + "{}"));
    }], p = at(d.concat(o, l)), v = /* @__PURE__ */ a(function(y) {
      return Q(tt(y), p);
    }, "stylis");
    c = /* @__PURE__ */ a(function(y, x, E, A) {
      f = E, x.map !== void 0 && (f = {
        insert: /* @__PURE__ */ a(function(C) {
          E.insert(C + x.map);
        }, "insert")
      }), v(y ? y + "{" + x.styles + "}" : x.styles), A && (h.inserted[x.name] = !0);
    }, "insert");
  }
  var h = {
    key: t,
    sheet: new $r({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: c
  };
  return h.sheet.hydrate(u), h;
}, "createCache");

// ../node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js
var vt = ir(mr());
var yt = /* @__PURE__ */ a(function(e, r) {
  return (0, vt.default)(e, r);
}, "hoistNonReactStatics");

// ../node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var ha = !0;
function he(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
a(he, "getRegisteredStyles");
var ee = /* @__PURE__ */ a(function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ha === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, "registerStyles"), re = /* @__PURE__ */ a(function(r, t, n) {
  ee(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
}, "insertStyles");

// ../node_modules/@emotion/hash/dist/emotion-hash.esm.js
function xt(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
a(xt, "murmur2");

// ../node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var Et = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// ../node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
var wt = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should bec\
ome "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, ga = "You \
have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", ba = /[A-Z]|^ms/g,
Ft = /_EMO_([^_]+?)_([^]*?)_EMO_/g, br = /* @__PURE__ */ a(function(r) {
  return r.charCodeAt(1) === 45;
}, "isCustomProperty"), St = /* @__PURE__ */ a(function(r) {
  return r != null && typeof r != "boolean";
}, "isProcessableValue"), hr = /* @__PURE__ */ ze(function(e) {
  return br(e) ? e : e.replace(ba, "-$&").toLowerCase();
}), Ue = /* @__PURE__ */ a(function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Ft, function(n, o, i) {
          return $ = {
            name: o,
            styles: i,
            next: $
          }, o;
        });
  }
  return Et[r] !== 1 && !br(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, "processStyleValue");
Ot = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Tt = ["normal", "none", "\
initial", "inherit", "unset"], Ct = Ue, Rt = /^-ms-/, At = /-(.)/g, gr = {}, Ue = /* @__PURE__ */ a(function(r, t) {
  if (r === "content" && (typeof t != "string" || Tt.indexOf(t) === -1 && !Ot.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(
  0) !== '"' && t.charAt(0) !== "'")))
    throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
  var n = Ct(r, t);
  return n !== "" && !br(r) && r.indexOf("-") !== -1 && gr[r] === void 0 && (gr[r] = !0, console.error("Using kebab-case for css properties \
in objects is not supported. Did you mean " + r.replace(Rt, "ms-").replace(At, function(o, i) {
    return i.toUpperCase();
  }) + "?")), n;
}, "processStyleValue");
var Ot, Tt, Ct, Rt, At, gr, Nt = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or\
 another Emotion-aware compiler transform.";
function Ce(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Nt);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return $ = {
          name: t.name,
          styles: t.styles,
          next: $
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            $ = {
              name: n.name,
              styles: n.styles,
              next: $
            }, n = n.next;
        var o = t.styles + ";";
        return t.map !== void 0 && (o += t.map), o;
      }
      return va(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = $, s = t(e);
        return $ = i, Ce(e, r, s);
      } else console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props,\
 create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with\
 props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      var u = [], c = t.replace(Ft, function(f, l, p) {
        var v = "animation" + u.length;
        return u.push("const " + v + " = keyframes`" + p.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + v + "}";
      });
      u.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" +
      [].concat(u, ["`" + c + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + c + "`"));
      break;
  }
  if (r == null)
    return t;
  var d = r[t];
  return d !== void 0 ? d : t;
}
a(Ce, "handleInterpolation");
function va(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Ce(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var s = t[i];
      if (typeof s != "object")
        r != null && r[s] !== void 0 ? n += i + "{" + r[s] + "}" : St(s) && (n += hr(i) + ":" + Ue(i, s) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR")
          throw new Error(Nt);
        if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
          for (var u = 0; u < s.length; u++)
            St(s[u]) && (n += hr(i) + ":" + Ue(i, s[u]) + ";");
        else {
          var c = Ce(e, r, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += hr(i) + ":" + c + ";";
              break;
            }
            default:
              i === "undefined" && console.error(ga), n += i + "{" + c + "}";
          }
        }
      }
    }
  return n;
}
a(va, "createStringFromObject");
var _t = /label:\s*([^\s;\n{]+)\s*(;|$)/g, It;
It = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var $, Y = /* @__PURE__ */ a(function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, i = "";
  $ = void 0;
  var s = r[0];
  s == null || s.raw === void 0 ? (o = !1, i += Ce(n, t, s)) : (s[0] === void 0 && console.error(wt), i += s[0]);
  for (var u = 1; u < r.length; u++)
    i += Ce(n, t, r[u]), o && (s[u] === void 0 && console.error(wt), i += s[u]);
  var c;
  i = i.replace(It, function(p) {
    return c = p, "";
  }), _t.lastIndex = 0;
  for (var d = "", f; (f = _t.exec(i)) !== null; )
    d += "-" + // $FlowFixMe we know it's not null
    f[1];
  var l = xt(i) + d;
  return {
    name: l,
    styles: i,
    map: c,
    next: $,
    toString: /* @__PURE__ */ a(function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `\
className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }, "toString")
  };
}, "serializeStyles");

// ../node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js

var ya = /* @__PURE__ */ a(function(r) {
  return r();
}, "syncFallback"), kt = react__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect ? react__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect : !1, ge = kt || ya, vr = kt || react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;

// ../node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js
var Er = !0, We = {}.hasOwnProperty, Ae = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ve({
    key: "css"
  }) : null
);
Ae.displayName = "EmotionCacheContext";
var zt = Ae.Provider;
var J = /* @__PURE__ */ a(function(r) {
  return /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function(t, n) {
    var o = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Ae);
    return r(t, o, n);
  });
}, "withEmotionCache");
Er || (J = /* @__PURE__ */ a(function(r) {
  return function(t) {
    var n = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Ae);
    return n === null ? (n = Ve({
      key: "css"
    }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ae.Provider, {
      value: n
    }, r(t, n))) : r(t, n);
  };
}, "withEmotionCache"));
var B = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
B.displayName = "EmotionThemeContext";
var Mt = /* @__PURE__ */ a(function() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(B);
}, "useTheme"), Ea = /* @__PURE__ */ a(function(r, t) {
  if (typeof t == "function") {
    var n = t(r);
    if (n == null || typeof n != "object" || Array.isArray(n))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (t == null || typeof t != "object" || Array.isArray(t))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return j({}, r, t);
}, "getTheme"), wa = /* @__PURE__ */ lr(function(e) {
  return lr(function(r) {
    return Ea(e, r);
  });
}), jt = /* @__PURE__ */ a(function(r) {
  var t = react__WEBPACK_IMPORTED_MODULE_0__.useContext(B);
  return r.theme !== t && (t = wa(t)(r.theme)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(B.Provider, {
    value: t
  }, r.children);
}, "ThemeProvider");
function Dt(e) {
  var r = e.displayName || e.name || "Component", t = /* @__PURE__ */ a(function(i, s) {
    var u = react__WEBPACK_IMPORTED_MODULE_0__.useContext(B);
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(e, j({
      theme: u,
      ref: s
    }, i));
  }, "render"), n = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(t);
  return n.displayName = "WithTheme(" + r + ")", yt(n, e);
}
a(Dt, "withTheme");
var Pt = /* @__PURE__ */ (/* unused pure expression or super */ null && (a(function(r) {
  var t = r.split(".");
  return t[t.length - 1];
}, "getLastPart"))), Sa = /* @__PURE__ */ (/* unused pure expression or super */ null && (a(function(r) {
  var t = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(r);
  if (t || (t = /^([A-Za-z0-9$.]+)@/.exec(r), t)) return Pt(t[1]);
}, "getFunctionNameFromStackTraceLine"))), Oa = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToS\
tring"]), Ta = /* @__PURE__ */ (/* unused pure expression or super */ null && (a(function(r) {
  return r.replace(/\$/g, "-");
}, "sanitizeIdentifier"))), Ca = /* @__PURE__ */ (/* unused pure expression or super */ null && (a(function(r) {
  if (r)
    for (var t = r.split(`
`), n = 0; n < t.length; n++) {
      var o = Sa(t[n]);
      if (o) {
        if (Oa.has(o)) break;
        if (/^[A-Z]/.test(o)) return Ta(o);
      }
    }
}, "getLabelFromStackTrace"))), yr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", xr = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Bt = /* @__PURE__ */ (/* unused pure expression or super */ null && (a(
function(r, t) {
  if (typeof t.css == "string" && // check if there is a css declaration
  t.css.indexOf(":") !== -1)
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: c\
ss`" + t.css + "`");
  var n = {};
  for (var o in t)
    We.call(t, o) && (n[o] = t[o]);
  if (n[yr] = r, t.css && (typeof t.css != "object" || typeof t.css.name != "string" || t.css.name.indexOf("-") === -1)) {
    var i = Ca(new Error().stack);
    i && (n[xr] = i);
  }
  return n;
}, "createEmotionProps"))), Ra = /* @__PURE__ */ a(function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return ee(t, n, o), ge(function() {
    return re(t, n, o);
  }), null;
}, "Insertion"), $t = /* @__PURE__ */ J(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[yr], i = [n], s = "";
  typeof e.className == "string" ? s = he(r.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var u = Y(i, void 0, react__WEBPACK_IMPORTED_MODULE_0__.useContext(B));
  if (u.name.indexOf("-") === -1) {
    var c = e[xr];
    c && (u = Y([u, "label:" + c + ";"]));
  }
  s += r.key + "-" + u.name;
  var d = {};
  for (var f in e)
    We.call(e, f) && f !== "css" && f !== yr && f !== xr && (d[f] = e[f]);
  return d.ref = t, d.className = s, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ra, {
    cache: r,
    serialized: u,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(o, d));
});
$t.displayName = "EmotionCssPropInternal";
var Ht = (/* unused pure expression or super */ null && ($t));

// ../node_modules/@emotion/react/dist/emotion-react.browser.esm.js

var rs = ir(mr());
var Aa = {
  name: "@emotion/react",
  version: "11.11.4",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, _a = /* @__PURE__ */ (/* unused pure expression or super */ null && (a(function(r, t) {
  var n = arguments;
  if (t == null || !We.call(t, "css"))
    return M.createElement.apply(void 0, n);
  var o = n.length, i = new Array(o);
  i[0] = Ht, i[1] = Bt(r, t);
  for (var s = 2; s < o; s++)
    i[s] = n[s];
  return M.createElement.apply(null, i);
}, "jsx"))), Vt = !1, Wt = /* @__PURE__ */ J(function(e, r) {
  !Vt && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"),
  Vt = !0);
  var t = e.styles, n = Y([t], void 0, react__WEBPACK_IMPORTED_MODULE_0__.useContext(B));
  if (!Er) {
    for (var o, i = n.name, s = n.styles, u = n.next; u !== void 0; )
      i += " " + u.name, s += u.styles, u = u.next;
    var c = r.compat === !0, d = r.insert("", {
      name: i,
      styles: s
    }, r.sheet, c);
    return c ? null : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", (o = {}, o["data-emotion"] = r.key + "-global " + i, o.dangerouslySetInnerHTML =
    {
      __html: d
    }, o.nonce = r.sheet.nonce, o));
  }
  var f = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  return vr(function() {
    var l = r.key + "-global", p = new r.sheet.constructor({
      key: l,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), v = !1, h = document.querySelector('style[data-emotion="' + l + " " + n.name + '"]');
    return r.sheet.tags.length && (p.before = r.sheet.tags[0]), h !== null && (v = !0, h.setAttribute("data-emotion", l), p.hydrate([h])), f.
    current = [p, v], function() {
      p.flush();
    };
  }, [r]), vr(function() {
    var l = f.current, p = l[0], v = l[1];
    if (v) {
      l[1] = !1;
      return;
    }
    if (n.next !== void 0 && re(r, n.next, !0), p.tags.length) {
      var h = p.tags[p.tags.length - 1].nextElementSibling;
      p.before = h, p.flush();
    }
    r.insert("", n, p, !1);
  }, [r, n.name]), null;
});
Wt.displayName = "EmotionGlobal";
function _e() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return Y(r);
}
a(_e, "css");
var be = /* @__PURE__ */ a(function() {
  var r = _e.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: /* @__PURE__ */ a(function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }, "toString")
  };
}, "keyframes"), Fa = /* @__PURE__ */ a(function e(r) {
  for (var t = r.length, n = 0, o = ""; n < t; n++) {
    var i = r[n];
    if (i != null) {
      var s = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            s = e(i);
          else {
            i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` packa\
ge to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `cs\
s` received from <ClassNames/> component."), s = "";
            for (var u in i)
              i[u] && u && (s && (s += " "), s += u);
          }
          break;
        }
        default:
          s = i;
      }
      s && (o && (o += " "), o += s);
    }
  }
  return o;
}, "classnames");
function Na(e, r, t) {
  var n = [], o = he(e, n, t);
  return n.length < 2 ? t : o + r(n);
}
a(Na, "merge");
var Ia = /* @__PURE__ */ a(function(r) {
  var t = r.cache, n = r.serializedArr;
  return ge(function() {
    for (var o = 0; o < n.length; o++)
      re(t, n[o], !1);
  }), null;
}, "Insertion"), Yt = /* @__PURE__ */ J(function(e, r) {
  var t = !1, n = [], o = /* @__PURE__ */ a(function() {
    if (t)
      throw new Error("css can only be used during render");
    for (var d = arguments.length, f = new Array(d), l = 0; l < d; l++)
      f[l] = arguments[l];
    var p = Y(f, r.registered);
    return n.push(p), ee(r, p, !1), r.key + "-" + p.name;
  }, "css"), i = /* @__PURE__ */ a(function() {
    if (t)
      throw new Error("cx can only be used during render");
    for (var d = arguments.length, f = new Array(d), l = 0; l < d; l++)
      f[l] = arguments[l];
    return Na(r.registered, o, Fa(f));
  }, "cx"), s = {
    css: o,
    cx: i,
    theme: react__WEBPACK_IMPORTED_MODULE_0__.useContext(B)
  }, u = e.children(s);
  return t = !0, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ia, {
    cache: r,
    serializedArr: n
  }), u);
});
Yt.displayName = "EmotionClassNames";
wr = !0, Ut = typeof jest < "u" || typeof vi < "u", wr && !Ut && (Sr = // $FlowIgnore
typeof globalThis < "u" ? globalThis : wr ? window : __webpack_require__.g, Or = "__EMOTION_REACT_" + Aa.version.split(".")[0] + "__", Sr[Or] && console.warn(
"You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versio\
ns are used, or if multiple builds of the same version are used."), Sr[Or] = !0);
var wr, Ut, Sr, Or;

// ../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
var ka = sr, Pa = /* @__PURE__ */ a(function(r) {
  return r !== "theme";
}, "testOmitPropsOnComponent"), Gt = /* @__PURE__ */ a(function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? ka : Pa;
}, "getDefaultShouldForwardProp"), qt = /* @__PURE__ */ a(function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(s) {
      return r.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, "composeShouldForwardProps"), Jt = `You have illegal escape sequence in your template literal, most likely inside content's property valu\
e.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should bec\
ome "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, La = /* @__PURE__ */ a(
function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return ee(t, n, o), ge(function() {
    return re(t, n, o);
  }), null;
}, "Insertion"), Zt = /* @__PURE__ */ a(function e(r, t) {
  if (r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, s;
  t !== void 0 && (i = t.label, s = t.target);
  var u = qt(r, t, n), c = u || Gt(o), d = !c("as");
  return function() {
    var f = arguments, l = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && l.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      l.push.apply(l, f);
    else {
      f[0][0] === void 0 && console.error(Jt), l.push(f[0][0]);
      for (var p = f.length, v = 1; v < p; v++)
        f[0][v] === void 0 && console.error(Jt), l.push(f[v], f[0][v]);
    }
    var h = J(function(m, y, x) {
      var E = d && m.as || o, A = "", T = [], C = m;
      if (m.theme == null) {
        C = {};
        for (var N in m)
          C[N] = m[N];
        C.theme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(B);
      }
      typeof m.className == "string" ? A = he(y.registered, T, m.className) : m.className != null && (A = m.className + " ");
      var S = Y(l.concat(T), y.registered, C);
      A += y.key + "-" + S.name, s !== void 0 && (A += " " + s);
      var xe = d && u === void 0 ? Gt(E) : c, W = {};
      for (var G in m)
        d && G === "as" || // $FlowFixMe
        xe(G) && (W[G] = m[G]);
      return W.className = A, W.ref = x, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(La, {
        cache: y,
        serialized: S,
        isStringTag: typeof E == "string"
      }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(E, W));
    });
    return h.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", h.defaultProps =
    r.defaultProps, h.__emotion_real = h, h.__emotion_base = o, h.__emotion_styles = l, h.__emotion_forwardProp = u, Object.defineProperty(h,
    "toString", {
      value: /* @__PURE__ */ a(function() {
        return s === void 0 ? "NO_COMPONENT_SELECTOR" : "." + s;
      }, "value")
    }), h.withComponent = function(m, y) {
      return e(m, j({}, t, y, {
        shouldForwardProp: qt(h, y, !0)
      })).apply(void 0, l);
    }, h;
  };
}, "createStyled");

// ../node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js

var za = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Tr = Zt.bind();
za.forEach(function(e) {
  Tr[e] = Tr(e);
});

// ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function Kt(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
a(Kt, "_assertThisInitialized");

// ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function K(e, r) {
  return K = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, K(e, r);
}
a(K, "_setPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function Xt(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, K(e, r);
}
a(Xt, "_inheritsLoose");

// ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function Ye(e) {
  return Ye = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ye(e);
}
a(Ye, "_getPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function Qt(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
a(Qt, "_isNativeFunction");

// ../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function Cr() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Cr = /* @__PURE__ */ a(function() {
    return !!e;
  }, "_isNativeReflectConstruct"))();
}
a(Cr, "_isNativeReflectConstruct");

// ../node_modules/@babel/runtime/helpers/esm/construct.js
function en(e, r, t) {
  if (Cr()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, r);
  var o = new (e.bind.apply(e, n))();
  return t && K(o, t.prototype), o;
}
a(en, "_construct");

// ../node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function Ge(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ge = /* @__PURE__ */ a(function(n) {
    if (n === null || !Qt(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(n)) return r.get(n);
      r.set(n, o);
    }
    function o() {
      return en(n, arguments, Ye(this).constructor);
    }
    return a(o, "Wrapper"), o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), K(o, n);
  }, "_wrapNativeSuper"), Ge(e);
}
a(Ge, "_wrapNativeSuper");

// ../node_modules/polished/dist/polished.esm.js
var Ma = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0\
.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, satura\
tion: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, bl\
ue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: \
205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animatio\
n please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function ja() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  var n = r[0], o = [], i;
  for (i = 1; i < r.length; i += 1)
    o.push(r[i]);
  return o.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
a(ja, "format");
var V = /* @__PURE__ */ function(e) {
  Xt(r, e);
  function r(t) {
    for (var n, o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
      i[s - 1] = arguments[s];
    return n = e.call(this, ja.apply(void 0, [Ma[t]].concat(i))) || this, Kt(n);
  }
  return a(r, "PolishedError"), r;
}(/* @__PURE__ */ Ge(Error));
function Rr(e) {
  return Math.round(e * 255);
}
a(Rr, "colorToInt");
function Da(e, r, t) {
  return Rr(e) + "," + Rr(r) + "," + Rr(t);
}
a(Da, "convertToInt");
function Fe(e, r, t, n) {
  if (n === void 0 && (n = Da), r === 0)
    return n(t, t, t);
  var o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * t - 1)) * r, s = i * (1 - Math.abs(o % 2 - 1)), u = 0, c = 0, d = 0;
  o >= 0 && o < 1 ? (u = i, c = s) : o >= 1 && o < 2 ? (u = s, c = i) : o >= 2 && o < 3 ? (c = i, d = s) : o >= 3 && o < 4 ? (c = s, d = i) :
  o >= 4 && o < 5 ? (u = s, d = i) : o >= 5 && o < 6 && (u = i, d = s);
  var f = t - i / 2, l = u + f, p = c + f, v = d + f;
  return n(l, p, v);
}
a(Fe, "hslToRgb");
var rn = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function Ba(e) {
  if (typeof e != "string") return e;
  var r = e.toLowerCase();
  return rn[r] ? "#" + rn[r] : e;
}
a(Ba, "nameToHex");
var $a = /^#[a-fA-F0-9]{6}$/, Ha = /^#[a-fA-F0-9]{8}$/, Va = /^#[a-fA-F0-9]{3}$/, Ua = /^#[a-fA-F0-9]{4}$/, Ar = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
Wa = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Ya = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
Ga = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Je(e) {
  if (typeof e != "string")
    throw new V(3);
  var r = Ba(e);
  if (r.match($a))
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16)
    };
  if (r.match(Ha)) {
    var t = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16),
      alpha: t
    };
  }
  if (r.match(Va))
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16)
    };
  if (r.match(Ua)) {
    var n = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16),
      alpha: n
    };
  }
  var o = Ar.exec(r);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10)
    };
  var i = Wa.exec(r.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4]) > 1 ? parseFloat("" + i[4]) / 100 : parseFloat("" + i[4])
    };
  var s = Ya.exec(r);
  if (s) {
    var u = parseInt("" + s[1], 10), c = parseInt("" + s[2], 10) / 100, d = parseInt("" + s[3], 10) / 100, f = "rgb(" + Fe(u, c, d) + ")", l = Ar.
    exec(f);
    if (!l)
      throw new V(4, r, f);
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10)
    };
  }
  var p = Ga.exec(r.substring(0, 50));
  if (p) {
    var v = parseInt("" + p[1], 10), h = parseInt("" + p[2], 10) / 100, m = parseInt("" + p[3], 10) / 100, y = "rgb(" + Fe(v, h, m) + ")", x = Ar.
    exec(y);
    if (!x)
      throw new V(4, r, y);
    return {
      red: parseInt("" + x[1], 10),
      green: parseInt("" + x[2], 10),
      blue: parseInt("" + x[3], 10),
      alpha: parseFloat("" + p[4]) > 1 ? parseFloat("" + p[4]) / 100 : parseFloat("" + p[4])
    };
  }
  throw new V(5);
}
a(Je, "parseToRgb");
function qa(e) {
  var r = e.red / 255, t = e.green / 255, n = e.blue / 255, o = Math.max(r, t, n), i = Math.min(r, t, n), s = (o + i) / 2;
  if (o === i)
    return e.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: s,
      alpha: e.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: s
    };
  var u, c = o - i, d = s > 0.5 ? c / (2 - o - i) : c / (o + i);
  switch (o) {
    case r:
      u = (t - n) / c + (t < n ? 6 : 0);
      break;
    case t:
      u = (n - r) / c + 2;
      break;
    default:
      u = (r - t) / c + 4;
      break;
  }
  return u *= 60, e.alpha !== void 0 ? {
    hue: u,
    saturation: d,
    lightness: s,
    alpha: e.alpha
  } : {
    hue: u,
    saturation: d,
    lightness: s
  };
}
a(qa, "rgbToHsl");
function tn(e) {
  return qa(Je(e));
}
a(tn, "parseToHsl");
var Ja = /* @__PURE__ */ a(function(r) {
  return r.length === 7 && r[1] === r[2] && r[3] === r[4] && r[5] === r[6] ? "#" + r[1] + r[3] + r[5] : r;
}, "reduceHexValue"), Fr = Ja;
function te(e) {
  var r = e.toString(16);
  return r.length === 1 ? "0" + r : r;
}
a(te, "numberToHex");
function _r(e) {
  return te(Math.round(e * 255));
}
a(_r, "colorToHex");
function Za(e, r, t) {
  return Fr("#" + _r(e) + _r(r) + _r(t));
}
a(Za, "convertToHex");
function qe(e, r, t) {
  return Fe(e, r, t, Za);
}
a(qe, "hslToHex");
function Ka(e, r, t) {
  if (typeof e == "number" && typeof r == "number" && typeof t == "number")
    return qe(e, r, t);
  if (typeof e == "object" && r === void 0 && t === void 0)
    return qe(e.hue, e.saturation, e.lightness);
  throw new V(1);
}
a(Ka, "hsl");
function Xa(e, r, t, n) {
  if (typeof e == "number" && typeof r == "number" && typeof t == "number" && typeof n == "number")
    return n >= 1 ? qe(e, r, t) : "rgba(" + Fe(e, r, t) + "," + n + ")";
  if (typeof e == "object" && r === void 0 && t === void 0 && n === void 0)
    return e.alpha >= 1 ? qe(e.hue, e.saturation, e.lightness) : "rgba(" + Fe(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new V(2);
}
a(Xa, "hsla");
function Nr(e, r, t) {
  if (typeof e == "number" && typeof r == "number" && typeof t == "number")
    return Fr("#" + te(e) + te(r) + te(t));
  if (typeof e == "object" && r === void 0 && t === void 0)
    return Fr("#" + te(e.red) + te(e.green) + te(e.blue));
  throw new V(6);
}
a(Nr, "rgb");
function ve(e, r, t, n) {
  if (typeof e == "string" && typeof r == "number") {
    var o = Je(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + r + ")";
  } else {
    if (typeof e == "number" && typeof r == "number" && typeof t == "number" && typeof n == "number")
      return n >= 1 ? Nr(e, r, t) : "rgba(" + e + "," + r + "," + t + "," + n + ")";
    if (typeof e == "object" && r === void 0 && t === void 0 && n === void 0)
      return e.alpha >= 1 ? Nr(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new V(7);
}
a(ve, "rgba");
var Qa = /* @__PURE__ */ a(function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && (typeof r.alpha != "number" || typeof r.alpha >
  "u");
}, "isRgb"), eo = /* @__PURE__ */ a(function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && typeof r.alpha == "number";
}, "isRgba"), ro = /* @__PURE__ */ a(function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && (typeof r.alpha != "number" || typeof r.
  alpha > "u");
}, "isHsl"), to = /* @__PURE__ */ a(function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && typeof r.alpha == "number";
}, "isHsla");
function nn(e) {
  if (typeof e != "object") throw new V(8);
  if (eo(e)) return ve(e);
  if (Qa(e)) return Nr(e);
  if (to(e)) return Xa(e);
  if (ro(e)) return Ka(e);
  throw new V(8);
}
a(nn, "toColorString");
function an(e, r, t) {
  return /* @__PURE__ */ a(function() {
    var o = t.concat(Array.prototype.slice.call(arguments));
    return o.length >= r ? e.apply(this, o) : an(e, r, o);
  }, "fn");
}
a(an, "curried");
function Ze(e) {
  return an(e, e.length, []);
}
a(Ze, "curry");
function Ke(e, r, t) {
  return Math.max(e, Math.min(r, t));
}
a(Ke, "guard");
function no(e, r) {
  if (r === "transparent") return r;
  var t = tn(r);
  return nn(j({}, t, {
    lightness: Ke(0, 1, t.lightness - parseFloat(e))
  }));
}
a(no, "darken");
var ao = /* @__PURE__ */ Ze(no), on = ao;
function oo(e, r) {
  if (r === "transparent") return r;
  var t = tn(r);
  return nn(j({}, t, {
    lightness: Ke(0, 1, t.lightness + parseFloat(e))
  }));
}
a(oo, "lighten");
var io = /* @__PURE__ */ Ze(oo), sn = io;
function so(e, r) {
  if (r === "transparent") return r;
  var t = Je(r), n = typeof t.alpha == "number" ? t.alpha : 1, o = j({}, t, {
    alpha: Ke(0, 1, (n * 100 + parseFloat(e) * 100) / 100)
  });
  return ve(o);
}
a(so, "opacify");
var uo = /* @__PURE__ */ Ze(so), un = uo;
function co(e, r) {
  if (r === "transparent") return r;
  var t = Je(r), n = typeof t.alpha == "number" ? t.alpha : 1, o = j({}, t, {
    alpha: Ke(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return ve(o);
}
a(co, "transparentize");
var fo = /* @__PURE__ */ Ze(co), cn = fo;

// src/theming/base.ts
var g = {
  // Official color palette
  primary: "#FF4785",
  // coral
  secondary: "#029CFD",
  // ocean
  tertiary: "#FAFBFC",
  ancillary: "#22a699",
  // Complimentary
  orange: "#FC521F",
  gold: "#FFAE00",
  green: "#66BF3C",
  seafoam: "#37D5D3",
  purple: "#6F2CAC",
  ultraviolet: "#2A0481",
  // Monochrome
  lightest: "#FFFFFF",
  lighter: "#F7FAFC",
  light: "#EEF3F6",
  mediumlight: "#ECF4F9",
  medium: "#D9E8F2",
  mediumdark: "#73828C",
  dark: "#5C6870",
  darker: "#454E54",
  darkest: "#2E3438",
  // For borders
  border: "hsla(203, 50%, 30%, 0.15)",
  // Status
  positive: "#66BF3C",
  negative: "#FF4400",
  warning: "#E69D00",
  critical: "#FFFFFF",
  // Text
  defaultText: "#2E3438",
  inverseText: "#FFFFFF",
  positiveText: "#448028",
  negativeText: "#D43900",
  warningText: "#A15C20"
}, U = {
  app: "#F6F9FC",
  bar: g.lightest,
  content: g.lightest,
  preview: g.lightest,
  gridCellSize: 10,
  hoverable: cn(0.9, g.secondary),
  // hover state for items in a list
  // Notification, error, and warning backgrounds
  positive: "#E1FFD4",
  negative: "#FEDED2",
  warning: "#FFF5CF",
  critical: "#FF4400"
}, H = {
  fonts: {
    base: [
      '"Nunito Sans"',
      "-apple-system",
      '".SFNSText-Regular"',
      '"San Francisco"',
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(", "),
    mono: [
      "ui-monospace",
      "Menlo",
      "Monaco",
      '"Roboto Mono"',
      '"Oxygen Mono"',
      '"Ubuntu Monospace"',
      '"Source Code Pro"',
      '"Droid Sans Mono"',
      '"Courier New"',
      "monospace"
    ].join(", ")
  },
  weight: {
    regular: 400,
    bold: 700
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90
  }
};

// src/theming/global.ts
var kr = ir(ln(), 1), dn = (0, kr.default)(1)(
  ({ typography: e }) => ({
    body: {
      fontFamily: e.fonts.base,
      fontSize: e.size.s3,
      margin: 0,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitOverflowScrolling: "touch"
    },
    "*": {
      boxSizing: "border-box"
    },
    "h1, h2, h3, h4, h5, h6": {
      fontWeight: e.weight.regular,
      margin: 0,
      padding: 0
    },
    "button, input, textarea, select": {
      fontFamily: "inherit",
      fontSize: "inherit",
      boxSizing: "border-box"
    },
    sub: {
      fontSize: "0.8em",
      bottom: "-0.2em"
    },
    sup: {
      fontSize: "0.8em",
      top: "-0.2em"
    },
    "b, strong": {
      fontWeight: e.weight.bold
    },
    hr: {
      border: "none",
      borderTop: "1px solid silver",
      clear: "both",
      marginBottom: "1.25rem"
    },
    code: {
      fontFamily: e.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      display: "inline-block",
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: "baseline",
      color: "inherit"
    },
    pre: {
      fontFamily: e.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      lineHeight: "18px",
      padding: "11px 1rem",
      whiteSpace: "pre-wrap",
      color: "inherit",
      borderRadius: 3,
      margin: "1rem 0"
    }
  })
), lo = (0, kr.default)(1)(({
  color: e,
  background: r,
  typography: t
}) => {
  let n = dn({ typography: t });
  return {
    ...n,
    body: {
      ...n.body,
      color: e.defaultText,
      background: r.app,
      overflow: "hidden"
    },
    hr: {
      ...n.hr,
      borderTop: `1px solid ${e.border}`
    }
  };
});

// src/theming/themes/dark.ts
var po = {
  base: "dark",
  // Storybook-specific color palette
  colorPrimary: "#FF4785",
  // coral
  colorSecondary: "#029CFD",
  // ocean
  // UI
  appBg: "#222425",
  appContentBg: "#1B1C1D",
  appPreviewBg: g.lightest,
  appBorderColor: "rgba(255,255,255,.1)",
  appBorderRadius: 4,
  // Fonts
  fontBase: H.fonts.base,
  fontCode: H.fonts.mono,
  // Text colors
  textColor: "#C9CDCF",
  textInverseColor: "#222425",
  textMutedColor: "#798186",
  // Toolbar default and active colors
  barTextColor: g.mediumdark,
  barHoverColor: g.secondary,
  barSelectedColor: g.secondary,
  barBg: "#292C2E",
  // Form colors
  buttonBg: "#222425",
  buttonBorder: "rgba(255,255,255,.1)",
  booleanBg: "#222425",
  booleanSelectedBg: "#2E3438",
  inputBg: "#1B1C1D",
  inputBorder: "rgba(255,255,255,.1)",
  inputTextColor: g.lightest,
  inputBorderRadius: 4
}, pn = po;

// src/theming/themes/light.ts
var mo = {
  base: "light",
  // Storybook-specific color palette
  colorPrimary: "#FF4785",
  // coral
  colorSecondary: "#029CFD",
  // ocean
  // UI
  appBg: U.app,
  appContentBg: g.lightest,
  appPreviewBg: g.lightest,
  appBorderColor: g.border,
  appBorderRadius: 4,
  // Fonts
  fontBase: H.fonts.base,
  fontCode: H.fonts.mono,
  // Text colors
  textColor: g.darkest,
  textInverseColor: g.lightest,
  textMutedColor: g.dark,
  // Toolbar default and active colors
  barTextColor: g.mediumdark,
  barHoverColor: g.secondary,
  barSelectedColor: g.secondary,
  barBg: g.lightest,
  // Form colors
  buttonBg: U.app,
  buttonBorder: g.medium,
  booleanBg: g.mediumlight,
  booleanSelectedBg: g.lightest,
  inputBg: g.lightest,
  inputBorder: g.border,
  inputTextColor: g.darkest,
  inputBorderRadius: 4
}, ye = mo;

// ../node_modules/@storybook/global/dist/index.mjs
var mn = (() => {
  let e;
  return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof __webpack_require__.g < "u" ? e = __webpack_require__.g : typeof self < "u" ?
  e = self : e = {}, e;
})();

// src/theming/utils.ts

var { window: Pr } = mn, hn = /* @__PURE__ */ a((e) => ({ color: e }), "mkColor"), go = /* @__PURE__ */ a((e) => typeof e != "string" ? (_storybook_core_client_logger__WEBPACK_IMPORTED_MODULE_1__.logger.
warn(
  `Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`
), !1) : !0, "isColorString"), bo = /* @__PURE__ */ a((e) => !/(gradient|var|calc)/.test(e), "isValidColorForPolished"), vo = /* @__PURE__ */ a(
(e, r) => e === "darken" ? ve(`${on(1, r)}`, 0.95) : e === "lighten" ? ve(`${sn(1, r)}`, 0.95) : r, "applyPolished"), gn = /* @__PURE__ */ a(
(e) => (r) => {
  if (!go(r) || !bo(r))
    return r;
  try {
    return vo(e, r);
  } catch {
    return r;
  }
}, "colorFactory"), yo = gn("lighten"), xo = gn("darken"), Xe = /* @__PURE__ */ a(() => !Pr || !Pr.matchMedia ? "light" : Pr.matchMedia("(pr\
efers-color-scheme: dark)").matches ? "dark" : "light", "getPreferredColorScheme");

// src/theming/create.ts
var Ne = {
  light: ye,
  dark: pn,
  normal: ye
}, Lr = Xe(), bu = /* @__PURE__ */ (/* unused pure expression or super */ null && (a((e = { base: Lr }, r) => {
  let t = {
    ...Ne[Lr],
    ...Ne[e.base] || {},
    ...e,
    base: Ne[e.base] ? e.base : Lr
  };
  return {
    ...r,
    ...t,
    barSelectedColor: e.barSelectedColor || t.colorSecondary
  };
}, "create")));

// src/theming/animation.ts
var bn = {
  rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)"
}, Eo = be`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, vn = be`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`, wo = be`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`, So = be`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`, Oo = _e`
  animation: ${vn} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`, To = _e`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`, yn = {
  rotate360: Eo,
  glow: vn,
  float: wo,
  jiggle: So,
  inlineGlow: Oo,
  hoverable: To
};

// src/theming/modules/syntax.ts
var xn = {
  BASE_FONT_FAMILY: "Menlo, monospace",
  BASE_FONT_SIZE: "11px",
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
  BASE_COLOR: "rgb(213, 213, 213)",
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
  OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
  OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
  OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
  OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
  HTML_TAG_COLOR: "rgb(93, 176, 215)",
  HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
  HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
  HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
  HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
  HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
  HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
  ARROW_COLOR: "rgb(145, 145, 145)",
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: "0",
  TREENODE_FONT_FAMILY: "Menlo, monospace",
  TREENODE_FONT_SIZE: "11px",
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
  TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
  TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
  TABLE_SORT_ICON_COLOR: "black",
  // 'rgb(48, 57, 66)',
  TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(\
51, 139, 255, 0.0980392))",
  TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
}, En = {
  BASE_FONT_FAMILY: "Menlo, monospace",
  BASE_FONT_SIZE: "11px",
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: "white",
  BASE_COLOR: "black",
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
  OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
  OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
  OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
  OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
  HTML_TAG_COLOR: "rgb(168, 148, 166)",
  HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
  HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
  HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
  HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
  HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
  HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
  ARROW_COLOR: "#6e6e6e",
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: "0",
  TREENODE_FONT_FAMILY: "Menlo, monospace",
  TREENODE_FONT_SIZE: "11px",
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: "#aaa",
  TABLE_TH_BACKGROUND_COLOR: "#eee",
  TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
  TABLE_SORT_ICON_COLOR: "#6e6e6e",
  TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
  TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
}, Co = /* @__PURE__ */ a((e) => Object.entries(e).reduce((r, [t, n]) => ({ ...r, [t]: hn(n) }), {}), "convertColors"), wn = /* @__PURE__ */ a(
({ colors: e, mono: r }) => {
  let t = Co(e);
  return {
    token: {
      fontFamily: r,
      WebkitFontSmoothing: "antialiased",
      "&.tag": t.red3,
      "&.comment": { ...t.green1, fontStyle: "italic" },
      "&.prolog": { ...t.green1, fontStyle: "italic" },
      "&.doctype": { ...t.green1, fontStyle: "italic" },
      "&.cdata": { ...t.green1, fontStyle: "italic" },
      "&.string": t.red1,
      "&.url": t.cyan1,
      "&.symbol": t.cyan1,
      "&.number": t.cyan1,
      "&.boolean": t.cyan1,
      "&.variable": t.cyan1,
      "&.constant": t.cyan1,
      "&.inserted": t.cyan1,
      "&.atrule": t.blue1,
      "&.keyword": t.blue1,
      "&.attr-value": t.blue1,
      "&.punctuation": t.gray1,
      "&.operator": t.gray1,
      "&.function": t.gray1,
      "&.deleted": t.red2,
      "&.important": {
        fontWeight: "bold"
      },
      "&.bold": {
        fontWeight: "bold"
      },
      "&.italic": {
        fontStyle: "italic"
      },
      "&.class-name": t.cyan2,
      "&.selector": t.red3,
      "&.attr-name": t.red4,
      "&.property": t.red4,
      "&.regex": t.red4,
      "&.entity": t.red4,
      "&.directive.tag .tag": {
        background: "#ffff00",
        ...t.gray1
      }
    },
    "language-json .token.boolean": t.blue1,
    "language-json .token.number": t.blue1,
    "language-json .token.property": t.cyan2,
    namespace: {
      opacity: 0.7
    }
  };
}, "create");

// src/theming/convert.ts
var Ro = {
  green1: "#008000",
  red1: "#A31515",
  red2: "#9a050f",
  red3: "#800000",
  red4: "#ff0000",
  gray1: "#393A34",
  cyan1: "#36acaa",
  cyan2: "#2B91AF",
  blue1: "#0000ff",
  blue2: "#00009f"
}, Ao = {
  green1: "#7C7C7C",
  red1: "#92C379",
  red2: "#9a050f",
  red3: "#A8FF60",
  red4: "#96CBFE",
  gray1: "#EDEDED",
  cyan1: "#C6C5FE",
  cyan2: "#FFFFB6",
  blue1: "#B474DD",
  blue2: "#00009f"
}, _o = /* @__PURE__ */ a((e) => ({
  // Changeable colors
  primary: e.colorPrimary,
  secondary: e.colorSecondary,
  tertiary: g.tertiary,
  ancillary: g.ancillary,
  // Complimentary
  orange: g.orange,
  gold: g.gold,
  green: g.green,
  seafoam: g.seafoam,
  purple: g.purple,
  ultraviolet: g.ultraviolet,
  // Monochrome
  lightest: g.lightest,
  lighter: g.lighter,
  light: g.light,
  mediumlight: g.mediumlight,
  medium: g.medium,
  mediumdark: g.mediumdark,
  dark: g.dark,
  darker: g.darker,
  darkest: g.darkest,
  // For borders
  border: g.border,
  // Status
  positive: g.positive,
  negative: g.negative,
  warning: g.warning,
  critical: g.critical,
  defaultText: e.textColor || g.darkest,
  inverseText: e.textInverseColor || g.lightest,
  positiveText: g.positiveText,
  negativeText: g.negativeText,
  warningText: g.warningText
}), "createColors"), zr = /* @__PURE__ */ a((e = Ne[Xe()]) => {
  let {
    base: r,
    colorPrimary: t,
    colorSecondary: n,
    appBg: o,
    appContentBg: i,
    appPreviewBg: s,
    appBorderColor: u,
    appBorderRadius: c,
    fontBase: d,
    fontCode: f,
    textColor: l,
    textInverseColor: p,
    barTextColor: v,
    barHoverColor: h,
    barSelectedColor: m,
    barBg: y,
    buttonBg: x,
    buttonBorder: E,
    booleanBg: A,
    booleanSelectedBg: T,
    inputBg: C,
    inputBorder: N,
    inputTextColor: S,
    inputBorderRadius: xe,
    brandTitle: W,
    brandUrl: G,
    brandImage: er,
    brandTarget: rr,
    gridCellSize: tr,
    ...nr
  } = e;
  return {
    ...nr,
    base: r,
    color: _o(e),
    background: {
      app: o,
      bar: y,
      content: i,
      preview: s,
      gridCellSize: tr || U.gridCellSize,
      hoverable: U.hoverable,
      positive: U.positive,
      negative: U.negative,
      warning: U.warning,
      critical: U.critical
    },
    typography: {
      fonts: {
        base: d,
        mono: f
      },
      weight: H.weight,
      size: H.size
    },
    animation: yn,
    easing: bn,
    input: {
      background: C,
      border: N,
      borderRadius: xe,
      color: S
    },
    button: {
      background: x || C,
      border: E || N
    },
    boolean: {
      background: A || N,
      selectedBackground: T || C
    },
    // UI
    layoutMargin: 10,
    appBorderColor: u,
    appBorderRadius: c,
    // Toolbar default/active colors
    barTextColor: v,
    barHoverColor: h || n,
    barSelectedColor: m || n,
    barBg: y,
    // Brand logo/text
    brand: {
      title: W,
      url: G,
      image: er || (W ? null : void 0),
      target: rr
    },
    code: wn({
      colors: r === "light" ? Ro : Ao,
      mono: f
    }),
    // Addon actions theme
    // API example https://github.com/storybookjs/react-inspector/blob/master/src/styles/themes/chromeLight.tsx
    addonActionsTheme: {
      ...r === "light" ? En : xn,
      BASE_FONT_FAMILY: f,
      BASE_FONT_SIZE: H.size.s2 - 1,
      BASE_LINE_HEIGHT: "18px",
      BASE_BACKGROUND_COLOR: "transparent",
      BASE_COLOR: l,
      ARROW_COLOR: un(0.2, u),
      ARROW_MARGIN_RIGHT: 4,
      ARROW_FONT_SIZE: 8,
      TREENODE_FONT_FAMILY: f,
      TREENODE_FONT_SIZE: H.size.s2 - 1,
      TREENODE_LINE_HEIGHT: "18px",
      TREENODE_PADDING_LEFT: 12
    }
  };
}, "convert");

// src/theming/ensure.ts


// ../node_modules/deep-object-diff/mjs/utils.js
var Mr = /* @__PURE__ */ a((e) => Object.keys(e).length === 0, "isEmpty"), ne = /* @__PURE__ */ a((e) => e != null && typeof e == "object", "\
isObject"), Ie = /* @__PURE__ */ a((e, ...r) => Object.prototype.hasOwnProperty.call(e, ...r), "hasOwnProperty");
var ke = /* @__PURE__ */ a(() => /* @__PURE__ */ Object.create(null), "makeObjectWithoutPrototype");

// ../node_modules/deep-object-diff/mjs/deleted.js
var Sn = /* @__PURE__ */ a((e, r) => e === r || !ne(e) || !ne(r) ? {} : Object.keys(e).reduce((t, n) => {
  if (Ie(r, n)) {
    let o = Sn(e[n], r[n]);
    return ne(o) && Mr(o) || (t[n] = o), t;
  }
  return t[n] = void 0, t;
}, ke()), "deletedDiff"), Qe = Sn;

// ../node_modules/ts-dedent/esm/index.js
function On(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  var n = Array.from(typeof e == "string" ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var o = n.reduce(function(u, c) {
    var d = c.match(/\n([\t ]+|(?!\s).)/g);
    return d ? u.concat(d.map(function(f) {
      var l, p;
      return (p = (l = f.match(/[\t ]/g)) === null || l === void 0 ? void 0 : l.length) !== null && p !== void 0 ? p : 0;
    })) : u;
  }, []);
  if (o.length) {
    var i = new RegExp(`
[	 ]{` + Math.min.apply(Math, o) + "}", "g");
    n = n.map(function(u) {
      return u.replace(i, `
`);
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var s = n[0];
  return r.forEach(function(u, c) {
    var d = s.match(/(?:^|\n)( *)$/), f = d ? d[1] : "", l = u;
    typeof u == "string" && u.includes(`
`) && (l = String(u).split(`
`).map(function(p, v) {
      return v === 0 ? p : "" + f + p;
    }).join(`
`)), s += l + n[c + 1];
  }), s;
}
a(On, "dedent");

// src/theming/ensure.ts
var pc = /* @__PURE__ */ a((e) => {
  if (!e)
    return zr(ye);
  let r = Qe(ye, e);
  return Object.keys(r).length && _storybook_core_client_logger__WEBPACK_IMPORTED_MODULE_1__.logger.warn(
    On`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `,
    r
  ), zr(e);
}, "ensure");

// src/theming/index.ts
var gc = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";



/***/ }),

/***/ "../../../node_modules/@storybook/html/dist/chunk-CEH6MNVV.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ __export)
/* harmony export */ });
var __defProp=Object.defineProperty;var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0});};




/***/ }),

/***/ "../../../node_modules/@storybook/html/dist/entry-preview-docs.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   argTypesEnhancers: () => (/* binding */ argTypesEnhancers),
/* harmony export */   decorators: () => (/* binding */ decorators),
/* harmony export */   parameters: () => (/* binding */ parameters)
/* harmony export */ });
/* harmony import */ var _chunk_CEH6MNVV_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@storybook/html/dist/chunk-CEH6MNVV.mjs");
/* harmony import */ var storybook_internal_docs_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../node_modules/@storybook/core/dist/docs-tools/index.js");
/* harmony import */ var storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("storybook/internal/preview-api");
/* harmony import */ var storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_1__);




function skipSourceRender(context){let sourceParams=context?.parameters.docs?.source,isArgsStory=context?.parameters.__isArgsStory;return sourceParams?.type===storybook_internal_docs_tools__WEBPACK_IMPORTED_MODULE_2__/* .SourceType */ .Y1.DYNAMIC?!1:!isArgsStory||sourceParams?.code||sourceParams?.type===storybook_internal_docs_tools__WEBPACK_IMPORTED_MODULE_2__/* .SourceType */ .Y1.CODE}var sourceDecorator=(storyFn,context)=>{let story=storyFn(),renderedForSource=context?.parameters.docs?.source?.excludeDecorators?context.originalStoryFn(context.args,context):story,source;return skipSourceRender(context)||(typeof renderedForSource=="string"?source=renderedForSource:renderedForSource instanceof Element&&(source=renderedForSource.outerHTML)),(0,storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{let{id,unmappedArgs}=context;source&&storybook_internal_preview_api__WEBPACK_IMPORTED_MODULE_1__.addons.getChannel().emit(storybook_internal_docs_tools__WEBPACK_IMPORTED_MODULE_2__/* .SNIPPET_RENDERED */ .Op,{id,args:unmappedArgs,source});}),story};var decorators=[sourceDecorator],parameters={docs:{story:{inline:!0},source:{type:storybook_internal_docs_tools__WEBPACK_IMPORTED_MODULE_2__/* .SourceType */ .Y1.DYNAMIC,language:"html",code:void 0,excludeDecorators:void 0}}},argTypesEnhancers=[storybook_internal_docs_tools__WEBPACK_IMPORTED_MODULE_2__/* .enhanceArgTypes */ .C2];




/***/ }),

/***/ "../../../node_modules/@storybook/html/dist/entry-preview.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  parameters: () => (/* reexport */ parameters),
  render: () => (/* reexport */ render),
  renderToCanvas: () => (/* reexport */ renderToCanvas)
});

// EXTERNAL MODULE: ../../../node_modules/@storybook/html/dist/chunk-CEH6MNVV.mjs
var chunk_CEH6MNVV = __webpack_require__("../../../node_modules/@storybook/html/dist/chunk-CEH6MNVV.mjs");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("storybook/internal/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
// EXTERNAL MODULE: ../../../node_modules/ts-dedent/esm/index.js
var esm = __webpack_require__("../../../node_modules/ts-dedent/esm/index.js");
;// CONCATENATED MODULE: ../../../node_modules/@storybook/html/dist/chunk-EVBQXENU.mjs





var entry_preview_exports={};(0,chunk_CEH6MNVV/* __export */.V)(entry_preview_exports,{parameters:()=>parameters,render:()=>render,renderToCanvas:()=>renderToCanvas});var {Node}=external_STORYBOOK_MODULE_GLOBAL_.global,render=(args,context)=>{let{id,component:Component}=context;if(typeof Component=="string"){let output=Component;return Object.keys(args).forEach(key=>{output=output.replace(`{{${key}}}`,args[key]);}),output}if(Component instanceof HTMLElement){let output=Component.cloneNode(!0);return Object.keys(args).forEach(key=>{output.setAttribute(key,typeof args[key]=="string"?args[key]:JSON.stringify(args[key]));}),output}if(typeof Component=="function")return Component(args,context);throw console.warn((0,esm/* dedent */.T)`
    Storybook's HTML renderer only supports rendering DOM elements and strings.
    Received: ${Component}
  `),new Error(`Unable to render story ${id}`)};function renderToCanvas({storyFn,kind,name,showMain,showError,forceRemount},canvasElement){let element=storyFn();if(showMain(),typeof element=="string")canvasElement.innerHTML=element,(0,external_STORYBOOK_MODULE_PREVIEW_API_.simulatePageLoad)(canvasElement);else if(element instanceof Node){if(canvasElement.firstChild===element&&forceRemount===!1)return;canvasElement.innerHTML="",canvasElement.appendChild(element),(0,external_STORYBOOK_MODULE_PREVIEW_API_.simulateDOMContentLoaded)();}else showError({title:`Expecting an HTML snippet or DOM node from the story: "${name}" of "${kind}".`,description:(0,esm/* dedent */.T)`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `});}var parameters={renderer:"html"};



;// CONCATENATED MODULE: ../../../node_modules/@storybook/html/dist/entry-preview.mjs




/***/ }),

/***/ "../../../node_modules/jsdoc-type-pratt-parser/dist/index.js":
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
     true ? factory(exports) :
    0;
})(this, (function (exports) { 'use strict';

    function tokenToString(token) {
        if (token.text !== undefined && token.text !== '') {
            return `'${token.type}' with value '${token.text}'`;
        }
        else {
            return `'${token.type}'`;
        }
    }
    class NoParsletFoundError extends Error {
        constructor(token) {
            super(`No parslet found for token: ${tokenToString(token)}`);
            this.token = token;
            Object.setPrototypeOf(this, NoParsletFoundError.prototype);
        }
        getToken() {
            return this.token;
        }
    }
    class EarlyEndOfParseError extends Error {
        constructor(token) {
            super(`The parsing ended early. The next token was: ${tokenToString(token)}`);
            this.token = token;
            Object.setPrototypeOf(this, EarlyEndOfParseError.prototype);
        }
        getToken() {
            return this.token;
        }
    }
    class UnexpectedTypeError extends Error {
        constructor(result, message) {
            let error = `Unexpected type: '${result.type}'.`;
            if (message !== undefined) {
                error += ` Message: ${message}`;
            }
            super(error);
            Object.setPrototypeOf(this, UnexpectedTypeError.prototype);
        }
    }
    // export class UnexpectedTokenError extends Error {
    //   private expected: Token
    //   private found: Token
    //
    //   constructor (expected: Token, found: Token) {
    //     super(`The parsing ended early. The next token was: ${tokenToString(token)}`)
    //
    //     this.token = token
    //
    //     Object.setPrototypeOf(this, EarlyEndOfParseError.prototype)
    //   }
    //
    //   getToken() {
    //     return this.token
    //   }
    // }

    function makePunctuationRule(type) {
        return text => {
            if (text.startsWith(type)) {
                return { type, text: type };
            }
            else {
                return null;
            }
        };
    }
    function getQuoted(text) {
        let position = 0;
        let char;
        const mark = text[0];
        let escaped = false;
        if (mark !== '\'' && mark !== '"') {
            return null;
        }
        while (position < text.length) {
            position++;
            char = text[position];
            if (!escaped && char === mark) {
                position++;
                break;
            }
            escaped = !escaped && char === '\\';
        }
        if (char !== mark) {
            throw new Error('Unterminated String');
        }
        return text.slice(0, position);
    }
    const identifierStartRegex = /[$_\p{ID_Start}]|\\u\p{Hex_Digit}{4}|\\u\{0*(?:\p{Hex_Digit}{1,5}|10\p{Hex_Digit}{4})\}/u;
    // A hyphen is not technically allowed, but to keep it liberal for now,
    //  adding it here
    const identifierContinueRegex = /[$\-\p{ID_Continue}\u200C\u200D]|\\u\p{Hex_Digit}{4}|\\u\{0*(?:\p{Hex_Digit}{1,5}|10\p{Hex_Digit}{4})\}/u;
    function getIdentifier(text) {
        let char = text[0];
        if (!identifierStartRegex.test(char)) {
            return null;
        }
        let position = 1;
        do {
            char = text[position];
            if (!identifierContinueRegex.test(char)) {
                break;
            }
            position++;
        } while (position < text.length);
        return text.slice(0, position);
    }
    // we are a bit more liberal than TypeScript here and allow `NaN`, `Infinity` and `-Infinity`
    const numberRegex = /^(NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity))/;
    function getNumber(text) {
        var _a, _b;
        return (_b = (_a = numberRegex.exec(text)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
    }
    const identifierRule = text => {
        const value = getIdentifier(text);
        if (value == null) {
            return null;
        }
        return {
            type: 'Identifier',
            text: value
        };
    };
    function makeKeyWordRule(type) {
        return text => {
            if (!text.startsWith(type)) {
                return null;
            }
            const prepends = text[type.length];
            if (prepends !== undefined && identifierContinueRegex.test(prepends)) {
                return null;
            }
            return {
                type,
                text: type
            };
        };
    }
    const stringValueRule = text => {
        const value = getQuoted(text);
        if (value == null) {
            return null;
        }
        return {
            type: 'StringValue',
            text: value
        };
    };
    const eofRule = text => {
        if (text.length > 0) {
            return null;
        }
        return {
            type: 'EOF',
            text: ''
        };
    };
    const numberRule = text => {
        const value = getNumber(text);
        if (value === null) {
            return null;
        }
        return {
            type: 'Number',
            text: value
        };
    };
    const rules = [
        eofRule,
        makePunctuationRule('=>'),
        makePunctuationRule('('),
        makePunctuationRule(')'),
        makePunctuationRule('{'),
        makePunctuationRule('}'),
        makePunctuationRule('['),
        makePunctuationRule(']'),
        makePunctuationRule('|'),
        makePunctuationRule('&'),
        makePunctuationRule('<'),
        makePunctuationRule('>'),
        makePunctuationRule(','),
        makePunctuationRule(';'),
        makePunctuationRule('*'),
        makePunctuationRule('?'),
        makePunctuationRule('!'),
        makePunctuationRule('='),
        makePunctuationRule(':'),
        makePunctuationRule('...'),
        makePunctuationRule('.'),
        makePunctuationRule('#'),
        makePunctuationRule('~'),
        makePunctuationRule('/'),
        makePunctuationRule('@'),
        makeKeyWordRule('undefined'),
        makeKeyWordRule('null'),
        makeKeyWordRule('function'),
        makeKeyWordRule('this'),
        makeKeyWordRule('new'),
        makeKeyWordRule('module'),
        makeKeyWordRule('event'),
        makeKeyWordRule('external'),
        makeKeyWordRule('typeof'),
        makeKeyWordRule('keyof'),
        makeKeyWordRule('readonly'),
        makeKeyWordRule('import'),
        makeKeyWordRule('is'),
        makeKeyWordRule('in'),
        makeKeyWordRule('asserts'),
        numberRule,
        identifierRule,
        stringValueRule
    ];
    const breakingWhitespaceRegex = /^\s*\n\s*/;
    class Lexer {
        static create(text) {
            const current = this.read(text);
            text = current.text;
            const next = this.read(text);
            text = next.text;
            return new Lexer(text, undefined, current.token, next.token);
        }
        constructor(text, previous, current, next) {
            this.text = '';
            this.text = text;
            this.previous = previous;
            this.current = current;
            this.next = next;
        }
        static read(text, startOfLine = false) {
            startOfLine = startOfLine || breakingWhitespaceRegex.test(text);
            text = text.trim();
            for (const rule of rules) {
                const partial = rule(text);
                if (partial !== null) {
                    const token = Object.assign(Object.assign({}, partial), { startOfLine });
                    text = text.slice(token.text.length);
                    return { text, token };
                }
            }
            throw new Error('Unexpected Token ' + text);
        }
        advance() {
            const next = Lexer.read(this.text);
            return new Lexer(next.text, this.current, this.next, next.token);
        }
    }

    /**
     * Throws an error if the provided result is not a {@link RootResult}
     */
    function assertRootResult(result) {
        if (result === undefined) {
            throw new Error('Unexpected undefined');
        }
        if (result.type === 'JsdocTypeKeyValue' || result.type === 'JsdocTypeParameterList' ||
            result.type === 'JsdocTypeProperty' || result.type === 'JsdocTypeReadonlyProperty' ||
            result.type === 'JsdocTypeObjectField' || result.type === 'JsdocTypeJsdocObjectField' ||
            result.type === 'JsdocTypeIndexSignature' || result.type === 'JsdocTypeMappedType') {
            throw new UnexpectedTypeError(result);
        }
        return result;
    }
    function assertPlainKeyValueOrRootResult(result) {
        if (result.type === 'JsdocTypeKeyValue') {
            return assertPlainKeyValueResult(result);
        }
        return assertRootResult(result);
    }
    function assertPlainKeyValueOrNameResult(result) {
        if (result.type === 'JsdocTypeName') {
            return result;
        }
        return assertPlainKeyValueResult(result);
    }
    function assertPlainKeyValueResult(result) {
        if (result.type !== 'JsdocTypeKeyValue') {
            throw new UnexpectedTypeError(result);
        }
        return result;
    }
    function assertNumberOrVariadicNameResult(result) {
        var _a;
        if (result.type === 'JsdocTypeVariadic') {
            if (((_a = result.element) === null || _a === void 0 ? void 0 : _a.type) === 'JsdocTypeName') {
                return result;
            }
            throw new UnexpectedTypeError(result);
        }
        if (result.type !== 'JsdocTypeNumber' && result.type !== 'JsdocTypeName') {
            throw new UnexpectedTypeError(result);
        }
        return result;
    }
    function isSquaredProperty(result) {
        return result.type === 'JsdocTypeIndexSignature' || result.type === 'JsdocTypeMappedType';
    }

    // higher precedence = higher importance
    var Precedence;
    (function (Precedence) {
        Precedence[Precedence["ALL"] = 0] = "ALL";
        Precedence[Precedence["PARAMETER_LIST"] = 1] = "PARAMETER_LIST";
        Precedence[Precedence["OBJECT"] = 2] = "OBJECT";
        Precedence[Precedence["KEY_VALUE"] = 3] = "KEY_VALUE";
        Precedence[Precedence["INDEX_BRACKETS"] = 4] = "INDEX_BRACKETS";
        Precedence[Precedence["UNION"] = 5] = "UNION";
        Precedence[Precedence["INTERSECTION"] = 6] = "INTERSECTION";
        Precedence[Precedence["PREFIX"] = 7] = "PREFIX";
        Precedence[Precedence["INFIX"] = 8] = "INFIX";
        Precedence[Precedence["TUPLE"] = 9] = "TUPLE";
        Precedence[Precedence["SYMBOL"] = 10] = "SYMBOL";
        Precedence[Precedence["OPTIONAL"] = 11] = "OPTIONAL";
        Precedence[Precedence["NULLABLE"] = 12] = "NULLABLE";
        Precedence[Precedence["KEY_OF_TYPE_OF"] = 13] = "KEY_OF_TYPE_OF";
        Precedence[Precedence["FUNCTION"] = 14] = "FUNCTION";
        Precedence[Precedence["ARROW"] = 15] = "ARROW";
        Precedence[Precedence["ARRAY_BRACKETS"] = 16] = "ARRAY_BRACKETS";
        Precedence[Precedence["GENERIC"] = 17] = "GENERIC";
        Precedence[Precedence["NAME_PATH"] = 18] = "NAME_PATH";
        Precedence[Precedence["PARENTHESIS"] = 19] = "PARENTHESIS";
        Precedence[Precedence["SPECIAL_TYPES"] = 20] = "SPECIAL_TYPES";
    })(Precedence || (Precedence = {}));

    class Parser {
        constructor(grammar, textOrLexer, baseParser) {
            this.grammar = grammar;
            if (typeof textOrLexer === 'string') {
                this._lexer = Lexer.create(textOrLexer);
            }
            else {
                this._lexer = textOrLexer;
            }
            this.baseParser = baseParser;
        }
        get lexer() {
            return this._lexer;
        }
        /**
         * Parses a given string and throws an error if the parse ended before the end of the string.
         */
        parse() {
            const result = this.parseType(Precedence.ALL);
            if (this.lexer.current.type !== 'EOF') {
                throw new EarlyEndOfParseError(this.lexer.current);
            }
            return result;
        }
        /**
         * Parses with the current lexer and asserts that the result is a {@link RootResult}.
         */
        parseType(precedence) {
            return assertRootResult(this.parseIntermediateType(precedence));
        }
        /**
         * The main parsing function. First it tries to parse the current state in the prefix step, and then it continues
         * to parse the state in the infix step.
         */
        parseIntermediateType(precedence) {
            const result = this.tryParslets(null, precedence);
            if (result === null) {
                throw new NoParsletFoundError(this.lexer.current);
            }
            return this.parseInfixIntermediateType(result, precedence);
        }
        /**
         * In the infix parsing step the parser continues to parse the current state with all parslets until none returns
         * a result.
         */
        parseInfixIntermediateType(left, precedence) {
            let result = this.tryParslets(left, precedence);
            while (result !== null) {
                left = result;
                result = this.tryParslets(left, precedence);
            }
            return left;
        }
        /**
         * Tries to parse the current state with all parslets in the grammar and returns the first non null result.
         */
        tryParslets(left, precedence) {
            for (const parslet of this.grammar) {
                const result = parslet(this, precedence, left);
                if (result !== null) {
                    return result;
                }
            }
            return null;
        }
        /**
         * If the given type equals the current type of the {@link Lexer} advance the lexer. Return true if the lexer was
         * advanced.
         */
        consume(types) {
            if (!Array.isArray(types)) {
                types = [types];
            }
            if (types.includes(this.lexer.current.type)) {
                this._lexer = this.lexer.advance();
                return true;
            }
            else {
                return false;
            }
        }
        acceptLexerState(parser) {
            this._lexer = parser.lexer;
        }
    }

    function isQuestionMarkUnknownType(next) {
        return next === 'EOF' || next === '|' || next === ',' || next === ')' || next === '>';
    }

    const nullableParslet = (parser, precedence, left) => {
        const type = parser.lexer.current.type;
        const next = parser.lexer.next.type;
        const accept = ((left == null) && type === '?' && !isQuestionMarkUnknownType(next)) ||
            ((left != null) && type === '?');
        if (!accept) {
            return null;
        }
        parser.consume('?');
        if (left == null) {
            return {
                type: 'JsdocTypeNullable',
                element: parser.parseType(Precedence.NULLABLE),
                meta: {
                    position: 'prefix'
                }
            };
        }
        else {
            return {
                type: 'JsdocTypeNullable',
                element: assertRootResult(left),
                meta: {
                    position: 'suffix'
                }
            };
        }
    };

    function composeParslet(options) {
        const parslet = (parser, curPrecedence, left) => {
            const type = parser.lexer.current.type;
            const next = parser.lexer.next.type;
            if (left === null) {
                if ('parsePrefix' in options) {
                    if (options.accept(type, next)) {
                        return options.parsePrefix(parser);
                    }
                }
            }
            else {
                if ('parseInfix' in options) {
                    if (options.precedence > curPrecedence && options.accept(type, next)) {
                        return options.parseInfix(parser, left);
                    }
                }
            }
            return null;
        };
        // for debugging
        Object.defineProperty(parslet, 'name', {
            value: options.name
        });
        return parslet;
    }

    const optionalParslet = composeParslet({
        name: 'optionalParslet',
        accept: type => type === '=',
        precedence: Precedence.OPTIONAL,
        parsePrefix: parser => {
            parser.consume('=');
            return {
                type: 'JsdocTypeOptional',
                element: parser.parseType(Precedence.OPTIONAL),
                meta: {
                    position: 'prefix'
                }
            };
        },
        parseInfix: (parser, left) => {
            parser.consume('=');
            return {
                type: 'JsdocTypeOptional',
                element: assertRootResult(left),
                meta: {
                    position: 'suffix'
                }
            };
        }
    });

    const numberParslet = composeParslet({
        name: 'numberParslet',
        accept: type => type === 'Number',
        parsePrefix: parser => {
            const value = parseFloat(parser.lexer.current.text);
            parser.consume('Number');
            return {
                type: 'JsdocTypeNumber',
                value
            };
        }
    });

    const parenthesisParslet = composeParslet({
        name: 'parenthesisParslet',
        accept: type => type === '(',
        parsePrefix: parser => {
            parser.consume('(');
            if (parser.consume(')')) {
                return {
                    type: 'JsdocTypeParameterList',
                    elements: []
                };
            }
            const result = parser.parseIntermediateType(Precedence.ALL);
            if (!parser.consume(')')) {
                throw new Error('Unterminated parenthesis');
            }
            if (result.type === 'JsdocTypeParameterList') {
                return result;
            }
            else if (result.type === 'JsdocTypeKeyValue') {
                return {
                    type: 'JsdocTypeParameterList',
                    elements: [result]
                };
            }
            return {
                type: 'JsdocTypeParenthesis',
                element: assertRootResult(result)
            };
        }
    });

    const specialTypesParslet = composeParslet({
        name: 'specialTypesParslet',
        accept: (type, next) => (type === '?' && isQuestionMarkUnknownType(next)) ||
            type === 'null' || type === 'undefined' || type === '*',
        parsePrefix: parser => {
            if (parser.consume('null')) {
                return {
                    type: 'JsdocTypeNull'
                };
            }
            if (parser.consume('undefined')) {
                return {
                    type: 'JsdocTypeUndefined'
                };
            }
            if (parser.consume('*')) {
                return {
                    type: 'JsdocTypeAny'
                };
            }
            if (parser.consume('?')) {
                return {
                    type: 'JsdocTypeUnknown'
                };
            }
            throw new Error('Unacceptable token: ' + parser.lexer.current.text);
        }
    });

    const notNullableParslet = composeParslet({
        name: 'notNullableParslet',
        accept: type => type === '!',
        precedence: Precedence.NULLABLE,
        parsePrefix: parser => {
            parser.consume('!');
            return {
                type: 'JsdocTypeNotNullable',
                element: parser.parseType(Precedence.NULLABLE),
                meta: {
                    position: 'prefix'
                }
            };
        },
        parseInfix: (parser, left) => {
            parser.consume('!');
            return {
                type: 'JsdocTypeNotNullable',
                element: assertRootResult(left),
                meta: {
                    position: 'suffix'
                }
            };
        }
    });

    function createParameterListParslet({ allowTrailingComma }) {
        return composeParslet({
            name: 'parameterListParslet',
            accept: type => type === ',',
            precedence: Precedence.PARAMETER_LIST,
            parseInfix: (parser, left) => {
                const elements = [
                    assertPlainKeyValueOrRootResult(left)
                ];
                parser.consume(',');
                do {
                    try {
                        const next = parser.parseIntermediateType(Precedence.PARAMETER_LIST);
                        elements.push(assertPlainKeyValueOrRootResult(next));
                    }
                    catch (e) {
                        if (allowTrailingComma && e instanceof NoParsletFoundError) {
                            break;
                        }
                        else {
                            throw e;
                        }
                    }
                } while (parser.consume(','));
                if (elements.length > 0 && elements.slice(0, -1).some(e => e.type === 'JsdocTypeVariadic')) {
                    throw new Error('Only the last parameter may be a rest parameter');
                }
                return {
                    type: 'JsdocTypeParameterList',
                    elements
                };
            }
        });
    }

    const genericParslet = composeParslet({
        name: 'genericParslet',
        accept: (type, next) => type === '<' || (type === '.' && next === '<'),
        precedence: Precedence.GENERIC,
        parseInfix: (parser, left) => {
            const dot = parser.consume('.');
            parser.consume('<');
            const objects = [];
            do {
                objects.push(parser.parseType(Precedence.PARAMETER_LIST));
            } while (parser.consume(','));
            if (!parser.consume('>')) {
                throw new Error('Unterminated generic parameter list');
            }
            return {
                type: 'JsdocTypeGeneric',
                left: assertRootResult(left),
                elements: objects,
                meta: {
                    brackets: 'angle',
                    dot
                }
            };
        }
    });

    const unionParslet = composeParslet({
        name: 'unionParslet',
        accept: type => type === '|',
        precedence: Precedence.UNION,
        parseInfix: (parser, left) => {
            parser.consume('|');
            const elements = [];
            do {
                elements.push(parser.parseType(Precedence.UNION));
            } while (parser.consume('|'));
            return {
                type: 'JsdocTypeUnion',
                elements: [assertRootResult(left), ...elements]
            };
        }
    });

    const baseGrammar = [
        nullableParslet,
        optionalParslet,
        numberParslet,
        parenthesisParslet,
        specialTypesParslet,
        notNullableParslet,
        createParameterListParslet({
            allowTrailingComma: true
        }),
        genericParslet,
        unionParslet,
        optionalParslet
    ];

    function createNamePathParslet({ allowSquareBracketsOnAnyType, allowJsdocNamePaths, pathGrammar }) {
        return function namePathParslet(parser, precedence, left) {
            if ((left == null) || precedence >= Precedence.NAME_PATH) {
                return null;
            }
            const type = parser.lexer.current.type;
            const next = parser.lexer.next.type;
            const accept = (type === '.' && next !== '<') ||
                (type === '[' && (allowSquareBracketsOnAnyType || left.type === 'JsdocTypeName')) ||
                (allowJsdocNamePaths && (type === '~' || type === '#'));
            if (!accept) {
                return null;
            }
            let pathType;
            let brackets = false;
            if (parser.consume('.')) {
                pathType = 'property';
            }
            else if (parser.consume('[')) {
                pathType = 'property-brackets';
                brackets = true;
            }
            else if (parser.consume('~')) {
                pathType = 'inner';
            }
            else {
                parser.consume('#');
                pathType = 'instance';
            }
            const pathParser = pathGrammar !== null
                ? new Parser(pathGrammar, parser.lexer, parser)
                : parser;
            const parsed = pathParser.parseIntermediateType(Precedence.NAME_PATH);
            parser.acceptLexerState(pathParser);
            let right;
            switch (parsed.type) {
                case 'JsdocTypeName':
                    right = {
                        type: 'JsdocTypeProperty',
                        value: parsed.value,
                        meta: {
                            quote: undefined
                        }
                    };
                    break;
                case 'JsdocTypeNumber':
                    right = {
                        type: 'JsdocTypeProperty',
                        value: parsed.value.toString(10),
                        meta: {
                            quote: undefined
                        }
                    };
                    break;
                case 'JsdocTypeStringValue':
                    right = {
                        type: 'JsdocTypeProperty',
                        value: parsed.value,
                        meta: {
                            quote: parsed.meta.quote
                        }
                    };
                    break;
                case 'JsdocTypeSpecialNamePath':
                    if (parsed.specialType === 'event') {
                        right = parsed;
                    }
                    else {
                        throw new UnexpectedTypeError(parsed, 'Type \'JsdocTypeSpecialNamePath\' is only allowed with specialType \'event\'');
                    }
                    break;
                default:
                    throw new UnexpectedTypeError(parsed, 'Expecting \'JsdocTypeName\', \'JsdocTypeNumber\', \'JsdocStringValue\' or \'JsdocTypeSpecialNamePath\'');
            }
            if (brackets && !parser.consume(']')) {
                const token = parser.lexer.current;
                throw new Error(`Unterminated square brackets. Next token is '${token.type}' ` +
                    `with text '${token.text}'`);
            }
            return {
                type: 'JsdocTypeNamePath',
                left: assertRootResult(left),
                right,
                pathType
            };
        };
    }

    function createNameParslet({ allowedAdditionalTokens }) {
        return composeParslet({
            name: 'nameParslet',
            accept: type => type === 'Identifier' || type === 'this' || type === 'new' || allowedAdditionalTokens.includes(type),
            parsePrefix: parser => {
                const { type, text } = parser.lexer.current;
                parser.consume(type);
                return {
                    type: 'JsdocTypeName',
                    value: text
                };
            }
        });
    }

    const stringValueParslet = composeParslet({
        name: 'stringValueParslet',
        accept: type => type === 'StringValue',
        parsePrefix: parser => {
            const text = parser.lexer.current.text;
            parser.consume('StringValue');
            return {
                type: 'JsdocTypeStringValue',
                value: text.slice(1, -1),
                meta: {
                    quote: text[0] === '\'' ? 'single' : 'double'
                }
            };
        }
    });

    function createSpecialNamePathParslet({ pathGrammar, allowedTypes }) {
        return composeParslet({
            name: 'specialNamePathParslet',
            accept: type => allowedTypes.includes(type),
            parsePrefix: parser => {
                const type = parser.lexer.current.type;
                parser.consume(type);
                if (!parser.consume(':')) {
                    return {
                        type: 'JsdocTypeName',
                        value: type
                    };
                }
                let result;
                let token = parser.lexer.current;
                if (parser.consume('StringValue')) {
                    result = {
                        type: 'JsdocTypeSpecialNamePath',
                        value: token.text.slice(1, -1),
                        specialType: type,
                        meta: {
                            quote: token.text[0] === '\'' ? 'single' : 'double'
                        }
                    };
                }
                else {
                    let value = '';
                    const allowed = ['Identifier', '@', '/'];
                    while (allowed.some(type => parser.consume(type))) {
                        value += token.text;
                        token = parser.lexer.current;
                    }
                    result = {
                        type: 'JsdocTypeSpecialNamePath',
                        value,
                        specialType: type,
                        meta: {
                            quote: undefined
                        }
                    };
                }
                const moduleParser = new Parser(pathGrammar, parser.lexer, parser);
                const moduleResult = moduleParser.parseInfixIntermediateType(result, Precedence.ALL);
                parser.acceptLexerState(moduleParser);
                return assertRootResult(moduleResult);
            }
        });
    }

    const basePathGrammar = [
        createNameParslet({
            allowedAdditionalTokens: ['external', 'module']
        }),
        stringValueParslet,
        numberParslet,
        createNamePathParslet({
            allowSquareBracketsOnAnyType: false,
            allowJsdocNamePaths: true,
            pathGrammar: null
        })
    ];
    const pathGrammar = [
        ...basePathGrammar,
        createSpecialNamePathParslet({
            allowedTypes: ['event'],
            pathGrammar: basePathGrammar
        })
    ];

    function getParameters(value) {
        let parameters;
        if (value.type === 'JsdocTypeParameterList') {
            parameters = value.elements;
        }
        else if (value.type === 'JsdocTypeParenthesis') {
            parameters = [value.element];
        }
        else {
            throw new UnexpectedTypeError(value);
        }
        return parameters.map(p => assertPlainKeyValueOrRootResult(p));
    }
    function getUnnamedParameters(value) {
        const parameters = getParameters(value);
        if (parameters.some(p => p.type === 'JsdocTypeKeyValue')) {
            throw new Error('No parameter should be named');
        }
        return parameters;
    }
    function createFunctionParslet({ allowNamedParameters, allowNoReturnType, allowWithoutParenthesis, allowNewAsFunctionKeyword }) {
        return composeParslet({
            name: 'functionParslet',
            accept: (type, next) => type === 'function' || (allowNewAsFunctionKeyword && type === 'new' && next === '('),
            parsePrefix: parser => {
                const newKeyword = parser.consume('new');
                parser.consume('function');
                const hasParenthesis = parser.lexer.current.type === '(';
                if (!hasParenthesis) {
                    if (!allowWithoutParenthesis) {
                        throw new Error('function is missing parameter list');
                    }
                    return {
                        type: 'JsdocTypeName',
                        value: 'function'
                    };
                }
                let result = {
                    type: 'JsdocTypeFunction',
                    parameters: [],
                    arrow: false,
                    constructor: newKeyword,
                    parenthesis: hasParenthesis
                };
                const value = parser.parseIntermediateType(Precedence.FUNCTION);
                if (allowNamedParameters === undefined) {
                    result.parameters = getUnnamedParameters(value);
                }
                else if (newKeyword && value.type === 'JsdocTypeFunction' && value.arrow) {
                    result = value;
                    result.constructor = true;
                    return result;
                }
                else {
                    result.parameters = getParameters(value);
                    for (const p of result.parameters) {
                        if (p.type === 'JsdocTypeKeyValue' && (!allowNamedParameters.includes(p.key))) {
                            throw new Error(`only allowed named parameters are ${allowNamedParameters.join(', ')} but got ${p.type}`);
                        }
                    }
                }
                if (parser.consume(':')) {
                    result.returnType = parser.parseType(Precedence.PREFIX);
                }
                else {
                    if (!allowNoReturnType) {
                        throw new Error('function is missing return type');
                    }
                }
                return result;
            }
        });
    }

    function createVariadicParslet({ allowPostfix, allowEnclosingBrackets }) {
        return composeParslet({
            name: 'variadicParslet',
            accept: type => type === '...',
            precedence: Precedence.PREFIX,
            parsePrefix: parser => {
                parser.consume('...');
                const brackets = allowEnclosingBrackets && parser.consume('[');
                try {
                    const element = parser.parseType(Precedence.PREFIX);
                    if (brackets && !parser.consume(']')) {
                        throw new Error('Unterminated variadic type. Missing \']\'');
                    }
                    return {
                        type: 'JsdocTypeVariadic',
                        element: assertRootResult(element),
                        meta: {
                            position: 'prefix',
                            squareBrackets: brackets
                        }
                    };
                }
                catch (e) {
                    if (e instanceof NoParsletFoundError) {
                        if (brackets) {
                            throw new Error('Empty square brackets for variadic are not allowed.');
                        }
                        return {
                            type: 'JsdocTypeVariadic',
                            meta: {
                                position: undefined,
                                squareBrackets: false
                            }
                        };
                    }
                    else {
                        throw e;
                    }
                }
            },
            parseInfix: allowPostfix
                ? (parser, left) => {
                    parser.consume('...');
                    return {
                        type: 'JsdocTypeVariadic',
                        element: assertRootResult(left),
                        meta: {
                            position: 'suffix',
                            squareBrackets: false
                        }
                    };
                }
                : undefined
        });
    }

    const symbolParslet = composeParslet({
        name: 'symbolParslet',
        accept: type => type === '(',
        precedence: Precedence.SYMBOL,
        parseInfix: (parser, left) => {
            if (left.type !== 'JsdocTypeName') {
                throw new Error('Symbol expects a name on the left side. (Reacting on \'(\')');
            }
            parser.consume('(');
            const result = {
                type: 'JsdocTypeSymbol',
                value: left.value
            };
            if (!parser.consume(')')) {
                const next = parser.parseIntermediateType(Precedence.SYMBOL);
                result.element = assertNumberOrVariadicNameResult(next);
                if (!parser.consume(')')) {
                    throw new Error('Symbol does not end after value');
                }
            }
            return result;
        }
    });

    const arrayBracketsParslet = composeParslet({
        name: 'arrayBracketsParslet',
        precedence: Precedence.ARRAY_BRACKETS,
        accept: (type, next) => type === '[' && next === ']',
        parseInfix: (parser, left) => {
            parser.consume('[');
            parser.consume(']');
            return {
                type: 'JsdocTypeGeneric',
                left: {
                    type: 'JsdocTypeName',
                    value: 'Array'
                },
                elements: [
                    assertRootResult(left)
                ],
                meta: {
                    brackets: 'square',
                    dot: false
                }
            };
        }
    });

    function createObjectParslet({ objectFieldGrammar, allowKeyTypes }) {
        return composeParslet({
            name: 'objectParslet',
            accept: type => type === '{',
            parsePrefix: parser => {
                parser.consume('{');
                const result = {
                    type: 'JsdocTypeObject',
                    meta: {
                        separator: 'comma'
                    },
                    elements: []
                };
                if (!parser.consume('}')) {
                    let separator;
                    const fieldParser = new Parser(objectFieldGrammar, parser.lexer, parser);
                    while (true) {
                        fieldParser.acceptLexerState(parser);
                        let field = fieldParser.parseIntermediateType(Precedence.OBJECT);
                        parser.acceptLexerState(fieldParser);
                        if (field === undefined && allowKeyTypes) {
                            field = parser.parseIntermediateType(Precedence.OBJECT);
                        }
                        let optional = false;
                        if (field.type === 'JsdocTypeNullable') {
                            optional = true;
                            field = field.element;
                        }
                        if (field.type === 'JsdocTypeNumber' || field.type === 'JsdocTypeName' || field.type === 'JsdocTypeStringValue') {
                            let quote;
                            if (field.type === 'JsdocTypeStringValue') {
                                quote = field.meta.quote;
                            }
                            result.elements.push({
                                type: 'JsdocTypeObjectField',
                                key: field.value.toString(),
                                right: undefined,
                                optional,
                                readonly: false,
                                meta: {
                                    quote
                                }
                            });
                        }
                        else if (field.type === 'JsdocTypeObjectField' || field.type === 'JsdocTypeJsdocObjectField') {
                            result.elements.push(field);
                        }
                        else {
                            throw new UnexpectedTypeError(field);
                        }
                        if (parser.lexer.current.startOfLine) {
                            separator = 'linebreak';
                        }
                        else if (parser.consume(',')) {
                            separator = 'comma';
                        }
                        else if (parser.consume(';')) {
                            separator = 'semicolon';
                        }
                        else {
                            break;
                        }
                        const type = parser.lexer.current.type;
                        if (type === '}') {
                            break;
                        }
                    }
                    result.meta.separator = separator !== null && separator !== void 0 ? separator : 'comma'; // TODO: use undefined here
                    if (!parser.consume('}')) {
                        throw new Error('Unterminated record type. Missing \'}\'');
                    }
                }
                return result;
            }
        });
    }

    function createObjectFieldParslet({ allowSquaredProperties, allowKeyTypes, allowReadonly, allowOptional }) {
        return composeParslet({
            name: 'objectFieldParslet',
            precedence: Precedence.KEY_VALUE,
            accept: type => type === ':',
            parseInfix: (parser, left) => {
                var _a;
                let optional = false;
                let readonlyProperty = false;
                if (allowOptional && left.type === 'JsdocTypeNullable') {
                    optional = true;
                    left = left.element;
                }
                if (allowReadonly && left.type === 'JsdocTypeReadonlyProperty') {
                    readonlyProperty = true;
                    left = left.element;
                }
                // object parslet uses a special grammar and for the value we want to switch back to the parent
                const parentParser = (_a = parser.baseParser) !== null && _a !== void 0 ? _a : parser;
                parentParser.acceptLexerState(parser);
                if (left.type === 'JsdocTypeNumber' || left.type === 'JsdocTypeName' || left.type === 'JsdocTypeStringValue' ||
                    isSquaredProperty(left)) {
                    if (isSquaredProperty(left) && !allowSquaredProperties) {
                        throw new UnexpectedTypeError(left);
                    }
                    parentParser.consume(':');
                    let quote;
                    if (left.type === 'JsdocTypeStringValue') {
                        quote = left.meta.quote;
                    }
                    const right = parentParser.parseType(Precedence.KEY_VALUE);
                    parser.acceptLexerState(parentParser);
                    return {
                        type: 'JsdocTypeObjectField',
                        key: isSquaredProperty(left) ? left : left.value.toString(),
                        right,
                        optional,
                        readonly: readonlyProperty,
                        meta: {
                            quote
                        }
                    };
                }
                else {
                    if (!allowKeyTypes) {
                        throw new UnexpectedTypeError(left);
                    }
                    parentParser.consume(':');
                    const right = parentParser.parseType(Precedence.KEY_VALUE);
                    parser.acceptLexerState(parentParser);
                    return {
                        type: 'JsdocTypeJsdocObjectField',
                        left: assertRootResult(left),
                        right
                    };
                }
            }
        });
    }

    function createKeyValueParslet({ allowOptional, allowVariadic }) {
        return composeParslet({
            name: 'keyValueParslet',
            precedence: Precedence.KEY_VALUE,
            accept: type => type === ':',
            parseInfix: (parser, left) => {
                let optional = false;
                let variadic = false;
                if (allowOptional && left.type === 'JsdocTypeNullable') {
                    optional = true;
                    left = left.element;
                }
                if (allowVariadic && left.type === 'JsdocTypeVariadic' && left.element !== undefined) {
                    variadic = true;
                    left = left.element;
                }
                if (left.type !== 'JsdocTypeName') {
                    throw new UnexpectedTypeError(left);
                }
                parser.consume(':');
                const right = parser.parseType(Precedence.KEY_VALUE);
                return {
                    type: 'JsdocTypeKeyValue',
                    key: left.value,
                    right,
                    optional,
                    variadic
                };
            }
        });
    }

    const jsdocBaseGrammar = [
        ...baseGrammar,
        createFunctionParslet({
            allowWithoutParenthesis: true,
            allowNamedParameters: ['this', 'new'],
            allowNoReturnType: true,
            allowNewAsFunctionKeyword: false
        }),
        stringValueParslet,
        createSpecialNamePathParslet({
            allowedTypes: ['module', 'external', 'event'],
            pathGrammar
        }),
        createVariadicParslet({
            allowEnclosingBrackets: true,
            allowPostfix: true
        }),
        createNameParslet({
            allowedAdditionalTokens: ['keyof']
        }),
        symbolParslet,
        arrayBracketsParslet,
        createNamePathParslet({
            allowSquareBracketsOnAnyType: false,
            allowJsdocNamePaths: true,
            pathGrammar
        })
    ];
    const jsdocGrammar = [
        ...jsdocBaseGrammar,
        createObjectParslet({
            // jsdoc syntax allows full types as keys, so we need to pull in the full grammar here
            // we leave out the object type deliberately
            objectFieldGrammar: [
                createNameParslet({
                    allowedAdditionalTokens: ['module', 'in']
                }),
                createObjectFieldParslet({
                    allowSquaredProperties: false,
                    allowKeyTypes: true,
                    allowOptional: false,
                    allowReadonly: false
                }),
                ...jsdocBaseGrammar
            ],
            allowKeyTypes: true
        }),
        createKeyValueParslet({
            allowOptional: true,
            allowVariadic: true
        })
    ];

    const typeOfParslet = composeParslet({
        name: 'typeOfParslet',
        accept: type => type === 'typeof',
        parsePrefix: parser => {
            parser.consume('typeof');
            return {
                type: 'JsdocTypeTypeof',
                element: assertRootResult(parser.parseType(Precedence.KEY_OF_TYPE_OF))
            };
        }
    });

    const objectFieldGrammar$1 = [
        createNameParslet({
            allowedAdditionalTokens: ['module', 'keyof', 'event', 'external', 'in']
        }),
        nullableParslet,
        optionalParslet,
        stringValueParslet,
        numberParslet,
        createObjectFieldParslet({
            allowSquaredProperties: false,
            allowKeyTypes: false,
            allowOptional: false,
            allowReadonly: false
        })
    ];
    const closureGrammar = [
        ...baseGrammar,
        createObjectParslet({
            allowKeyTypes: false,
            objectFieldGrammar: objectFieldGrammar$1
        }),
        createNameParslet({
            allowedAdditionalTokens: ['event', 'external', 'in']
        }),
        typeOfParslet,
        createFunctionParslet({
            allowWithoutParenthesis: false,
            allowNamedParameters: ['this', 'new'],
            allowNoReturnType: true,
            allowNewAsFunctionKeyword: false
        }),
        createVariadicParslet({
            allowEnclosingBrackets: false,
            allowPostfix: false
        }),
        // additional name parslet is needed for some special cases
        createNameParslet({
            allowedAdditionalTokens: ['keyof']
        }),
        createSpecialNamePathParslet({
            allowedTypes: ['module'],
            pathGrammar
        }),
        createNamePathParslet({
            allowSquareBracketsOnAnyType: false,
            allowJsdocNamePaths: true,
            pathGrammar
        }),
        createKeyValueParslet({
            allowOptional: false,
            allowVariadic: false
        }),
        symbolParslet
    ];

    const assertsParslet = composeParslet({
        name: 'assertsParslet',
        accept: type => type === 'asserts',
        parsePrefix: (parser) => {
            parser.consume('asserts');
            const left = parser.parseIntermediateType(Precedence.SYMBOL);
            if (left.type !== 'JsdocTypeName') {
                throw new UnexpectedTypeError(left, 'A typescript asserts always has to have a name on the left side.');
            }
            parser.consume('is');
            return {
                type: 'JsdocTypeAsserts',
                left,
                right: assertRootResult(parser.parseIntermediateType(Precedence.INFIX))
            };
        }
    });

    function createTupleParslet({ allowQuestionMark }) {
        return composeParslet({
            name: 'tupleParslet',
            accept: type => type === '[',
            parsePrefix: parser => {
                parser.consume('[');
                const result = {
                    type: 'JsdocTypeTuple',
                    elements: []
                };
                if (parser.consume(']')) {
                    return result;
                }
                const typeList = parser.parseIntermediateType(Precedence.ALL);
                if (typeList.type === 'JsdocTypeParameterList') {
                    if (typeList.elements[0].type === 'JsdocTypeKeyValue') {
                        result.elements = typeList.elements.map(assertPlainKeyValueResult);
                    }
                    else {
                        result.elements = typeList.elements.map(assertRootResult);
                    }
                }
                else {
                    if (typeList.type === 'JsdocTypeKeyValue') {
                        result.elements = [assertPlainKeyValueResult(typeList)];
                    }
                    else {
                        result.elements = [assertRootResult(typeList)];
                    }
                }
                if (!parser.consume(']')) {
                    throw new Error('Unterminated \'[\'');
                }
                if (!allowQuestionMark && result.elements.some((e) => e.type === 'JsdocTypeUnknown')) {
                    throw new Error('Question mark in tuple not allowed');
                }
                return result;
            }
        });
    }

    const keyOfParslet = composeParslet({
        name: 'keyOfParslet',
        accept: type => type === 'keyof',
        parsePrefix: parser => {
            parser.consume('keyof');
            return {
                type: 'JsdocTypeKeyof',
                element: assertRootResult(parser.parseType(Precedence.KEY_OF_TYPE_OF))
            };
        }
    });

    const importParslet = composeParslet({
        name: 'importParslet',
        accept: type => type === 'import',
        parsePrefix: parser => {
            parser.consume('import');
            if (!parser.consume('(')) {
                throw new Error('Missing parenthesis after import keyword');
            }
            const path = parser.parseType(Precedence.PREFIX);
            if (path.type !== 'JsdocTypeStringValue') {
                throw new Error('Only string values are allowed as paths for imports');
            }
            if (!parser.consume(')')) {
                throw new Error('Missing closing parenthesis after import keyword');
            }
            return {
                type: 'JsdocTypeImport',
                element: path
            };
        }
    });

    const readonlyPropertyParslet = composeParslet({
        name: 'readonlyPropertyParslet',
        accept: type => type === 'readonly',
        parsePrefix: parser => {
            parser.consume('readonly');
            return {
                type: 'JsdocTypeReadonlyProperty',
                element: parser.parseType(Precedence.KEY_VALUE)
            };
        }
    });

    const arrowFunctionParslet = composeParslet({
        name: 'arrowFunctionParslet',
        precedence: Precedence.ARROW,
        accept: type => type === '=>',
        parseInfix: (parser, left) => {
            parser.consume('=>');
            return {
                type: 'JsdocTypeFunction',
                parameters: getParameters(left).map(assertPlainKeyValueOrNameResult),
                arrow: true,
                constructor: false,
                parenthesis: true,
                returnType: parser.parseType(Precedence.OBJECT)
            };
        }
    });

    const intersectionParslet = composeParslet({
        name: 'intersectionParslet',
        accept: type => type === '&',
        precedence: Precedence.INTERSECTION,
        parseInfix: (parser, left) => {
            parser.consume('&');
            const elements = [];
            do {
                elements.push(parser.parseType(Precedence.INTERSECTION));
            } while (parser.consume('&'));
            return {
                type: 'JsdocTypeIntersection',
                elements: [assertRootResult(left), ...elements]
            };
        }
    });

    const predicateParslet = composeParslet({
        name: 'predicateParslet',
        precedence: Precedence.INFIX,
        accept: type => type === 'is',
        parseInfix: (parser, left) => {
            if (left.type !== 'JsdocTypeName') {
                throw new UnexpectedTypeError(left, 'A typescript predicate always has to have a name on the left side.');
            }
            parser.consume('is');
            return {
                type: 'JsdocTypePredicate',
                left,
                right: assertRootResult(parser.parseIntermediateType(Precedence.INFIX))
            };
        }
    });

    const objectSquaredPropertyParslet = composeParslet({
        name: 'objectSquareBracketPropertyParslet',
        accept: type => type === '[',
        parsePrefix: parser => {
            if (parser.baseParser === undefined) {
                throw new Error('Only allowed inside object grammar');
            }
            parser.consume('[');
            const key = parser.lexer.current.text;
            parser.consume('Identifier');
            let result;
            if (parser.consume(':')) {
                const parentParser = parser.baseParser;
                parentParser.acceptLexerState(parser);
                result = {
                    type: 'JsdocTypeIndexSignature',
                    key,
                    right: parentParser.parseType(Precedence.INDEX_BRACKETS)
                };
                parser.acceptLexerState(parentParser);
            }
            else if (parser.consume('in')) {
                const parentParser = parser.baseParser;
                parentParser.acceptLexerState(parser);
                result = {
                    type: 'JsdocTypeMappedType',
                    key,
                    right: parentParser.parseType(Precedence.ARRAY_BRACKETS)
                };
                parser.acceptLexerState(parentParser);
            }
            else {
                throw new Error('Missing \':\' or \'in\' inside square bracketed property.');
            }
            if (!parser.consume(']')) {
                throw new Error('Unterminated square brackets');
            }
            return result;
        }
    });

    const objectFieldGrammar = [
        readonlyPropertyParslet,
        createNameParslet({
            allowedAdditionalTokens: ['module', 'event', 'keyof', 'event', 'external', 'in']
        }),
        nullableParslet,
        optionalParslet,
        stringValueParslet,
        numberParslet,
        createObjectFieldParslet({
            allowSquaredProperties: true,
            allowKeyTypes: false,
            allowOptional: true,
            allowReadonly: true
        }),
        objectSquaredPropertyParslet
    ];
    const typescriptGrammar = [
        ...baseGrammar,
        createObjectParslet({
            allowKeyTypes: false,
            objectFieldGrammar
        }),
        typeOfParslet,
        keyOfParslet,
        importParslet,
        stringValueParslet,
        createFunctionParslet({
            allowWithoutParenthesis: true,
            allowNoReturnType: false,
            allowNamedParameters: ['this', 'new', 'args'],
            allowNewAsFunctionKeyword: true
        }),
        createTupleParslet({
            allowQuestionMark: false
        }),
        createVariadicParslet({
            allowEnclosingBrackets: false,
            allowPostfix: false
        }),
        assertsParslet,
        createNameParslet({
            allowedAdditionalTokens: ['event', 'external', 'in']
        }),
        createSpecialNamePathParslet({
            allowedTypes: ['module'],
            pathGrammar
        }),
        arrayBracketsParslet,
        arrowFunctionParslet,
        createNamePathParslet({
            allowSquareBracketsOnAnyType: true,
            allowJsdocNamePaths: false,
            pathGrammar
        }),
        intersectionParslet,
        predicateParslet,
        createKeyValueParslet({
            allowVariadic: true,
            allowOptional: true
        })
    ];

    /**
     * This function parses the given expression in the given mode and produces a {@link RootResult}.
     * @param expression
     * @param mode
     */
    function parse(expression, mode) {
        switch (mode) {
            case 'closure':
                return (new Parser(closureGrammar, expression)).parse();
            case 'jsdoc':
                return (new Parser(jsdocGrammar, expression)).parse();
            case 'typescript':
                return (new Parser(typescriptGrammar, expression)).parse();
        }
    }
    /**
     * This function tries to parse the given expression in multiple modes and returns the first successful
     * {@link RootResult}. By default it tries `'typescript'`, `'closure'` and `'jsdoc'` in this order. If
     * no mode was successful it throws the error that was produced by the last parsing attempt.
     * @param expression
     * @param modes
     */
    function tryParse(expression, modes = ['typescript', 'closure', 'jsdoc']) {
        let error;
        for (const mode of modes) {
            try {
                return parse(expression, mode);
            }
            catch (e) {
                error = e;
            }
        }
        throw error;
    }

    function transform(rules, parseResult) {
        const rule = rules[parseResult.type];
        if (rule === undefined) {
            throw new Error(`In this set of transform rules exists no rule for type ${parseResult.type}.`);
        }
        return rule(parseResult, aParseResult => transform(rules, aParseResult));
    }
    function notAvailableTransform(parseResult) {
        throw new Error('This transform is not available. Are you trying the correct parsing mode?');
    }
    function extractSpecialParams(source) {
        const result = {
            params: []
        };
        for (const param of source.parameters) {
            if (param.type === 'JsdocTypeKeyValue') {
                if (param.key === 'this') {
                    result.this = param.right;
                }
                else if (param.key === 'new') {
                    result.new = param.right;
                }
                else {
                    result.params.push(param);
                }
            }
            else {
                result.params.push(param);
            }
        }
        return result;
    }

    function applyPosition(position, target, value) {
        return position === 'prefix' ? value + target : target + value;
    }
    function quote(value, quote) {
        switch (quote) {
            case 'double':
                return `"${value}"`;
            case 'single':
                return `'${value}'`;
            case undefined:
                return value;
        }
    }
    function stringifyRules() {
        return {
            JsdocTypeParenthesis: (result, transform) => `(${result.element !== undefined ? transform(result.element) : ''})`,
            JsdocTypeKeyof: (result, transform) => `keyof ${transform(result.element)}`,
            JsdocTypeFunction: (result, transform) => {
                if (!result.arrow) {
                    let stringified = result.constructor ? 'new' : 'function';
                    if (!result.parenthesis) {
                        return stringified;
                    }
                    stringified += `(${result.parameters.map(transform).join(', ')})`;
                    if (result.returnType !== undefined) {
                        stringified += `: ${transform(result.returnType)}`;
                    }
                    return stringified;
                }
                else {
                    if (result.returnType === undefined) {
                        throw new Error('Arrow function needs a return type.');
                    }
                    let stringified = `(${result.parameters.map(transform).join(', ')}) => ${transform(result.returnType)}`;
                    if (result.constructor) {
                        stringified = 'new ' + stringified;
                    }
                    return stringified;
                }
            },
            JsdocTypeName: result => result.value,
            JsdocTypeTuple: (result, transform) => `[${result.elements.map(transform).join(', ')}]`,
            JsdocTypeVariadic: (result, transform) => result.meta.position === undefined
                ? '...'
                : applyPosition(result.meta.position, transform(result.element), '...'),
            JsdocTypeNamePath: (result, transform) => {
                const left = transform(result.left);
                const right = transform(result.right);
                switch (result.pathType) {
                    case 'inner':
                        return `${left}~${right}`;
                    case 'instance':
                        return `${left}#${right}`;
                    case 'property':
                        return `${left}.${right}`;
                    case 'property-brackets':
                        return `${left}[${right}]`;
                }
            },
            JsdocTypeStringValue: result => quote(result.value, result.meta.quote),
            JsdocTypeAny: () => '*',
            JsdocTypeGeneric: (result, transform) => {
                if (result.meta.brackets === 'square') {
                    const element = result.elements[0];
                    const transformed = transform(element);
                    if (element.type === 'JsdocTypeUnion' || element.type === 'JsdocTypeIntersection') {
                        return `(${transformed})[]`;
                    }
                    else {
                        return `${transformed}[]`;
                    }
                }
                else {
                    return `${transform(result.left)}${result.meta.dot ? '.' : ''}<${result.elements.map(transform).join(', ')}>`;
                }
            },
            JsdocTypeImport: (result, transform) => `import(${transform(result.element)})`,
            JsdocTypeObjectField: (result, transform) => {
                let text = '';
                if (result.readonly) {
                    text += 'readonly ';
                }
                if (typeof result.key === 'string') {
                    text += quote(result.key, result.meta.quote);
                }
                else {
                    text += transform(result.key);
                }
                if (result.optional) {
                    text += '?';
                }
                if (result.right === undefined) {
                    return text;
                }
                else {
                    return text + `: ${transform(result.right)}`;
                }
            },
            JsdocTypeJsdocObjectField: (result, transform) => {
                return `${transform(result.left)}: ${transform(result.right)}`;
            },
            JsdocTypeKeyValue: (result, transform) => {
                let text = result.key;
                if (result.optional) {
                    text += '?';
                }
                if (result.variadic) {
                    text = '...' + text;
                }
                if (result.right === undefined) {
                    return text;
                }
                else {
                    return text + `: ${transform(result.right)}`;
                }
            },
            JsdocTypeSpecialNamePath: result => `${result.specialType}:${quote(result.value, result.meta.quote)}`,
            JsdocTypeNotNullable: (result, transform) => applyPosition(result.meta.position, transform(result.element), '!'),
            JsdocTypeNull: () => 'null',
            JsdocTypeNullable: (result, transform) => applyPosition(result.meta.position, transform(result.element), '?'),
            JsdocTypeNumber: result => result.value.toString(),
            JsdocTypeObject: (result, transform) => `{${result.elements.map(transform).join((result.meta.separator === 'comma' ? ',' : ';') + ' ')}}`,
            JsdocTypeOptional: (result, transform) => applyPosition(result.meta.position, transform(result.element), '='),
            JsdocTypeSymbol: (result, transform) => `${result.value}(${result.element !== undefined ? transform(result.element) : ''})`,
            JsdocTypeTypeof: (result, transform) => `typeof ${transform(result.element)}`,
            JsdocTypeUndefined: () => 'undefined',
            JsdocTypeUnion: (result, transform) => result.elements.map(transform).join(' | '),
            JsdocTypeUnknown: () => '?',
            JsdocTypeIntersection: (result, transform) => result.elements.map(transform).join(' & '),
            JsdocTypeProperty: result => quote(result.value, result.meta.quote),
            JsdocTypePredicate: (result, transform) => `${transform(result.left)} is ${transform(result.right)}`,
            JsdocTypeIndexSignature: (result, transform) => `[${result.key}: ${transform(result.right)}]`,
            JsdocTypeMappedType: (result, transform) => `[${result.key} in ${transform(result.right)}]`,
            JsdocTypeAsserts: (result, transform) => `asserts ${transform(result.left)} is ${transform(result.right)}`
        };
    }
    const storedStringifyRules = stringifyRules();
    function stringify(result) {
        return transform(storedStringifyRules, result);
    }

    const reservedWords = [
        'null',
        'true',
        'false',
        'break',
        'case',
        'catch',
        'class',
        'const',
        'continue',
        'debugger',
        'default',
        'delete',
        'do',
        'else',
        'export',
        'extends',
        'finally',
        'for',
        'function',
        'if',
        'import',
        'in',
        'instanceof',
        'new',
        'return',
        'super',
        'switch',
        'this',
        'throw',
        'try',
        'typeof',
        'var',
        'void',
        'while',
        'with',
        'yield'
    ];
    function makeName(value) {
        const result = {
            type: 'NameExpression',
            name: value
        };
        if (reservedWords.includes(value)) {
            result.reservedWord = true;
        }
        return result;
    }
    const catharsisTransformRules = {
        JsdocTypeOptional: (result, transform) => {
            const transformed = transform(result.element);
            transformed.optional = true;
            return transformed;
        },
        JsdocTypeNullable: (result, transform) => {
            const transformed = transform(result.element);
            transformed.nullable = true;
            return transformed;
        },
        JsdocTypeNotNullable: (result, transform) => {
            const transformed = transform(result.element);
            transformed.nullable = false;
            return transformed;
        },
        JsdocTypeVariadic: (result, transform) => {
            if (result.element === undefined) {
                throw new Error('dots without value are not allowed in catharsis mode');
            }
            const transformed = transform(result.element);
            transformed.repeatable = true;
            return transformed;
        },
        JsdocTypeAny: () => ({
            type: 'AllLiteral'
        }),
        JsdocTypeNull: () => ({
            type: 'NullLiteral'
        }),
        JsdocTypeStringValue: result => makeName(quote(result.value, result.meta.quote)),
        JsdocTypeUndefined: () => ({
            type: 'UndefinedLiteral'
        }),
        JsdocTypeUnknown: () => ({
            type: 'UnknownLiteral'
        }),
        JsdocTypeFunction: (result, transform) => {
            const params = extractSpecialParams(result);
            const transformed = {
                type: 'FunctionType',
                params: params.params.map(transform)
            };
            if (params.this !== undefined) {
                transformed.this = transform(params.this);
            }
            if (params.new !== undefined) {
                transformed.new = transform(params.new);
            }
            if (result.returnType !== undefined) {
                transformed.result = transform(result.returnType);
            }
            return transformed;
        },
        JsdocTypeGeneric: (result, transform) => ({
            type: 'TypeApplication',
            applications: result.elements.map(o => transform(o)),
            expression: transform(result.left)
        }),
        JsdocTypeSpecialNamePath: result => makeName(result.specialType + ':' + quote(result.value, result.meta.quote)),
        JsdocTypeName: result => {
            if (result.value !== 'function') {
                return makeName(result.value);
            }
            else {
                return {
                    type: 'FunctionType',
                    params: []
                };
            }
        },
        JsdocTypeNumber: result => makeName(result.value.toString()),
        JsdocTypeObject: (result, transform) => {
            const transformed = {
                type: 'RecordType',
                fields: []
            };
            for (const field of result.elements) {
                if (field.type !== 'JsdocTypeObjectField' && field.type !== 'JsdocTypeJsdocObjectField') {
                    transformed.fields.push({
                        type: 'FieldType',
                        key: transform(field),
                        value: undefined
                    });
                }
                else {
                    transformed.fields.push(transform(field));
                }
            }
            return transformed;
        },
        JsdocTypeObjectField: (result, transform) => {
            if (typeof result.key !== 'string') {
                throw new Error('Index signatures and mapped types are not supported');
            }
            return {
                type: 'FieldType',
                key: makeName(quote(result.key, result.meta.quote)),
                value: result.right === undefined ? undefined : transform(result.right)
            };
        },
        JsdocTypeJsdocObjectField: (result, transform) => ({
            type: 'FieldType',
            key: transform(result.left),
            value: transform(result.right)
        }),
        JsdocTypeUnion: (result, transform) => ({
            type: 'TypeUnion',
            elements: result.elements.map(e => transform(e))
        }),
        JsdocTypeKeyValue: (result, transform) => {
            return {
                type: 'FieldType',
                key: makeName(result.key),
                value: result.right === undefined ? undefined : transform(result.right)
            };
        },
        JsdocTypeNamePath: (result, transform) => {
            const leftResult = transform(result.left);
            let rightValue;
            if (result.right.type === 'JsdocTypeSpecialNamePath') {
                rightValue = transform(result.right).name;
            }
            else {
                rightValue = quote(result.right.value, result.right.meta.quote);
            }
            const joiner = result.pathType === 'inner' ? '~' : result.pathType === 'instance' ? '#' : '.';
            return makeName(`${leftResult.name}${joiner}${rightValue}`);
        },
        JsdocTypeSymbol: result => {
            let value = '';
            let element = result.element;
            let trailingDots = false;
            if ((element === null || element === void 0 ? void 0 : element.type) === 'JsdocTypeVariadic') {
                if (element.meta.position === 'prefix') {
                    value = '...';
                }
                else {
                    trailingDots = true;
                }
                element = element.element;
            }
            if ((element === null || element === void 0 ? void 0 : element.type) === 'JsdocTypeName') {
                value += element.value;
            }
            else if ((element === null || element === void 0 ? void 0 : element.type) === 'JsdocTypeNumber') {
                value += element.value.toString();
            }
            if (trailingDots) {
                value += '...';
            }
            return makeName(`${result.value}(${value})`);
        },
        JsdocTypeParenthesis: (result, transform) => transform(assertRootResult(result.element)),
        JsdocTypeMappedType: notAvailableTransform,
        JsdocTypeIndexSignature: notAvailableTransform,
        JsdocTypeImport: notAvailableTransform,
        JsdocTypeKeyof: notAvailableTransform,
        JsdocTypeTuple: notAvailableTransform,
        JsdocTypeTypeof: notAvailableTransform,
        JsdocTypeIntersection: notAvailableTransform,
        JsdocTypeProperty: notAvailableTransform,
        JsdocTypePredicate: notAvailableTransform,
        JsdocTypeAsserts: notAvailableTransform
    };
    function catharsisTransform(result) {
        return transform(catharsisTransformRules, result);
    }

    function getQuoteStyle(quote) {
        switch (quote) {
            case undefined:
                return 'none';
            case 'single':
                return 'single';
            case 'double':
                return 'double';
        }
    }
    function getMemberType(type) {
        switch (type) {
            case 'inner':
                return 'INNER_MEMBER';
            case 'instance':
                return 'INSTANCE_MEMBER';
            case 'property':
                return 'MEMBER';
            case 'property-brackets':
                return 'MEMBER';
        }
    }
    function nestResults(type, results) {
        if (results.length === 2) {
            return {
                type,
                left: results[0],
                right: results[1]
            };
        }
        else {
            return {
                type,
                left: results[0],
                right: nestResults(type, results.slice(1))
            };
        }
    }
    const jtpRules = {
        JsdocTypeOptional: (result, transform) => ({
            type: 'OPTIONAL',
            value: transform(result.element),
            meta: {
                syntax: result.meta.position === 'prefix' ? 'PREFIX_EQUAL_SIGN' : 'SUFFIX_EQUALS_SIGN'
            }
        }),
        JsdocTypeNullable: (result, transform) => ({
            type: 'NULLABLE',
            value: transform(result.element),
            meta: {
                syntax: result.meta.position === 'prefix' ? 'PREFIX_QUESTION_MARK' : 'SUFFIX_QUESTION_MARK'
            }
        }),
        JsdocTypeNotNullable: (result, transform) => ({
            type: 'NOT_NULLABLE',
            value: transform(result.element),
            meta: {
                syntax: result.meta.position === 'prefix' ? 'PREFIX_BANG' : 'SUFFIX_BANG'
            }
        }),
        JsdocTypeVariadic: (result, transform) => {
            const transformed = {
                type: 'VARIADIC',
                meta: {
                    syntax: result.meta.position === 'prefix'
                        ? 'PREFIX_DOTS'
                        : result.meta.position === 'suffix' ? 'SUFFIX_DOTS' : 'ONLY_DOTS'
                }
            };
            if (result.element !== undefined) {
                transformed.value = transform(result.element);
            }
            return transformed;
        },
        JsdocTypeName: result => ({
            type: 'NAME',
            name: result.value
        }),
        JsdocTypeTypeof: (result, transform) => ({
            type: 'TYPE_QUERY',
            name: transform(result.element)
        }),
        JsdocTypeTuple: (result, transform) => ({
            type: 'TUPLE',
            entries: result.elements.map(transform)
        }),
        JsdocTypeKeyof: (result, transform) => ({
            type: 'KEY_QUERY',
            value: transform(result.element)
        }),
        JsdocTypeImport: result => ({
            type: 'IMPORT',
            path: {
                type: 'STRING_VALUE',
                quoteStyle: getQuoteStyle(result.element.meta.quote),
                string: result.element.value
            }
        }),
        JsdocTypeUndefined: () => ({
            type: 'NAME',
            name: 'undefined'
        }),
        JsdocTypeAny: () => ({
            type: 'ANY'
        }),
        JsdocTypeFunction: (result, transform) => {
            const specialParams = extractSpecialParams(result);
            const transformed = {
                type: result.arrow ? 'ARROW' : 'FUNCTION',
                params: specialParams.params.map(param => {
                    if (param.type === 'JsdocTypeKeyValue') {
                        if (param.right === undefined) {
                            throw new Error('Function parameter without \':\' is not expected to be \'KEY_VALUE\'');
                        }
                        return {
                            type: 'NAMED_PARAMETER',
                            name: param.key,
                            typeName: transform(param.right)
                        };
                    }
                    else {
                        return transform(param);
                    }
                }),
                new: null,
                returns: null
            };
            if (specialParams.this !== undefined) {
                transformed.this = transform(specialParams.this);
            }
            else if (!result.arrow) {
                transformed.this = null;
            }
            if (specialParams.new !== undefined) {
                transformed.new = transform(specialParams.new);
            }
            if (result.returnType !== undefined) {
                transformed.returns = transform(result.returnType);
            }
            return transformed;
        },
        JsdocTypeGeneric: (result, transform) => {
            const transformed = {
                type: 'GENERIC',
                subject: transform(result.left),
                objects: result.elements.map(transform),
                meta: {
                    syntax: result.meta.brackets === 'square' ? 'SQUARE_BRACKET' : result.meta.dot ? 'ANGLE_BRACKET_WITH_DOT' : 'ANGLE_BRACKET'
                }
            };
            if (result.meta.brackets === 'square' && result.elements[0].type === 'JsdocTypeFunction' && !result.elements[0].parenthesis) {
                transformed.objects[0] = {
                    type: 'NAME',
                    name: 'function'
                };
            }
            return transformed;
        },
        JsdocTypeObjectField: (result, transform) => {
            if (typeof result.key !== 'string') {
                throw new Error('Index signatures and mapped types are not supported');
            }
            if (result.right === undefined) {
                return {
                    type: 'RECORD_ENTRY',
                    key: result.key,
                    quoteStyle: getQuoteStyle(result.meta.quote),
                    value: null,
                    readonly: false
                };
            }
            let right = transform(result.right);
            if (result.optional) {
                right = {
                    type: 'OPTIONAL',
                    value: right,
                    meta: {
                        syntax: 'SUFFIX_KEY_QUESTION_MARK'
                    }
                };
            }
            return {
                type: 'RECORD_ENTRY',
                key: result.key.toString(),
                quoteStyle: getQuoteStyle(result.meta.quote),
                value: right,
                readonly: false
            };
        },
        JsdocTypeJsdocObjectField: () => {
            throw new Error('Keys may not be typed in jsdoctypeparser.');
        },
        JsdocTypeKeyValue: (result, transform) => {
            if (result.right === undefined) {
                return {
                    type: 'RECORD_ENTRY',
                    key: result.key,
                    quoteStyle: 'none',
                    value: null,
                    readonly: false
                };
            }
            let right = transform(result.right);
            if (result.optional) {
                right = {
                    type: 'OPTIONAL',
                    value: right,
                    meta: {
                        syntax: 'SUFFIX_KEY_QUESTION_MARK'
                    }
                };
            }
            return {
                type: 'RECORD_ENTRY',
                key: result.key,
                quoteStyle: 'none',
                value: right,
                readonly: false
            };
        },
        JsdocTypeObject: (result, transform) => {
            const entries = [];
            for (const field of result.elements) {
                if (field.type === 'JsdocTypeObjectField' || field.type === 'JsdocTypeJsdocObjectField') {
                    entries.push(transform(field));
                }
            }
            return {
                type: 'RECORD',
                entries
            };
        },
        JsdocTypeSpecialNamePath: result => {
            if (result.specialType !== 'module') {
                throw new Error(`jsdoctypeparser does not support type ${result.specialType} at this point.`);
            }
            return {
                type: 'MODULE',
                value: {
                    type: 'FILE_PATH',
                    quoteStyle: getQuoteStyle(result.meta.quote),
                    path: result.value
                }
            };
        },
        JsdocTypeNamePath: (result, transform) => {
            let hasEventPrefix = false;
            let name;
            let quoteStyle;
            if (result.right.type === 'JsdocTypeSpecialNamePath' && result.right.specialType === 'event') {
                hasEventPrefix = true;
                name = result.right.value;
                quoteStyle = getQuoteStyle(result.right.meta.quote);
            }
            else {
                name = result.right.value;
                quoteStyle = getQuoteStyle(result.right.meta.quote);
            }
            const transformed = {
                type: getMemberType(result.pathType),
                owner: transform(result.left),
                name,
                quoteStyle,
                hasEventPrefix
            };
            if (transformed.owner.type === 'MODULE') {
                const tModule = transformed.owner;
                transformed.owner = transformed.owner.value;
                tModule.value = transformed;
                return tModule;
            }
            else {
                return transformed;
            }
        },
        JsdocTypeUnion: (result, transform) => nestResults('UNION', result.elements.map(transform)),
        JsdocTypeParenthesis: (result, transform) => ({
            type: 'PARENTHESIS',
            value: transform(assertRootResult(result.element))
        }),
        JsdocTypeNull: () => ({
            type: 'NAME',
            name: 'null'
        }),
        JsdocTypeUnknown: () => ({
            type: 'UNKNOWN'
        }),
        JsdocTypeStringValue: result => ({
            type: 'STRING_VALUE',
            quoteStyle: getQuoteStyle(result.meta.quote),
            string: result.value
        }),
        JsdocTypeIntersection: (result, transform) => nestResults('INTERSECTION', result.elements.map(transform)),
        JsdocTypeNumber: result => ({
            type: 'NUMBER_VALUE',
            number: result.value.toString()
        }),
        JsdocTypeSymbol: notAvailableTransform,
        JsdocTypeProperty: notAvailableTransform,
        JsdocTypePredicate: notAvailableTransform,
        JsdocTypeMappedType: notAvailableTransform,
        JsdocTypeIndexSignature: notAvailableTransform,
        JsdocTypeAsserts: notAvailableTransform
    };
    function jtpTransform(result) {
        return transform(jtpRules, result);
    }

    function identityTransformRules() {
        return {
            JsdocTypeIntersection: (result, transform) => ({
                type: 'JsdocTypeIntersection',
                elements: result.elements.map(transform)
            }),
            JsdocTypeGeneric: (result, transform) => ({
                type: 'JsdocTypeGeneric',
                left: transform(result.left),
                elements: result.elements.map(transform),
                meta: {
                    dot: result.meta.dot,
                    brackets: result.meta.brackets
                }
            }),
            JsdocTypeNullable: result => result,
            JsdocTypeUnion: (result, transform) => ({
                type: 'JsdocTypeUnion',
                elements: result.elements.map(transform)
            }),
            JsdocTypeUnknown: result => result,
            JsdocTypeUndefined: result => result,
            JsdocTypeTypeof: (result, transform) => ({
                type: 'JsdocTypeTypeof',
                element: transform(result.element)
            }),
            JsdocTypeSymbol: (result, transform) => {
                const transformed = {
                    type: 'JsdocTypeSymbol',
                    value: result.value
                };
                if (result.element !== undefined) {
                    transformed.element = transform(result.element);
                }
                return transformed;
            },
            JsdocTypeOptional: (result, transform) => ({
                type: 'JsdocTypeOptional',
                element: transform(result.element),
                meta: {
                    position: result.meta.position
                }
            }),
            JsdocTypeObject: (result, transform) => ({
                type: 'JsdocTypeObject',
                meta: {
                    separator: 'comma'
                },
                elements: result.elements.map(transform)
            }),
            JsdocTypeNumber: result => result,
            JsdocTypeNull: result => result,
            JsdocTypeNotNullable: (result, transform) => ({
                type: 'JsdocTypeNotNullable',
                element: transform(result.element),
                meta: {
                    position: result.meta.position
                }
            }),
            JsdocTypeSpecialNamePath: result => result,
            JsdocTypeObjectField: (result, transform) => ({
                type: 'JsdocTypeObjectField',
                key: result.key,
                right: result.right === undefined ? undefined : transform(result.right),
                optional: result.optional,
                readonly: result.readonly,
                meta: result.meta
            }),
            JsdocTypeJsdocObjectField: (result, transform) => ({
                type: 'JsdocTypeJsdocObjectField',
                left: transform(result.left),
                right: transform(result.right)
            }),
            JsdocTypeKeyValue: (result, transform) => {
                return {
                    type: 'JsdocTypeKeyValue',
                    key: result.key,
                    right: result.right === undefined ? undefined : transform(result.right),
                    optional: result.optional,
                    variadic: result.variadic
                };
            },
            JsdocTypeImport: (result, transform) => ({
                type: 'JsdocTypeImport',
                element: transform(result.element)
            }),
            JsdocTypeAny: result => result,
            JsdocTypeStringValue: result => result,
            JsdocTypeNamePath: result => result,
            JsdocTypeVariadic: (result, transform) => {
                const transformed = {
                    type: 'JsdocTypeVariadic',
                    meta: {
                        position: result.meta.position,
                        squareBrackets: result.meta.squareBrackets
                    }
                };
                if (result.element !== undefined) {
                    transformed.element = transform(result.element);
                }
                return transformed;
            },
            JsdocTypeTuple: (result, transform) => ({
                type: 'JsdocTypeTuple',
                elements: result.elements.map(transform)
            }),
            JsdocTypeName: result => result,
            JsdocTypeFunction: (result, transform) => {
                const transformed = {
                    type: 'JsdocTypeFunction',
                    arrow: result.arrow,
                    parameters: result.parameters.map(transform),
                    constructor: result.constructor,
                    parenthesis: result.parenthesis
                };
                if (result.returnType !== undefined) {
                    transformed.returnType = transform(result.returnType);
                }
                return transformed;
            },
            JsdocTypeKeyof: (result, transform) => ({
                type: 'JsdocTypeKeyof',
                element: transform(result.element)
            }),
            JsdocTypeParenthesis: (result, transform) => ({
                type: 'JsdocTypeParenthesis',
                element: transform(result.element)
            }),
            JsdocTypeProperty: result => result,
            JsdocTypePredicate: (result, transform) => ({
                type: 'JsdocTypePredicate',
                left: transform(result.left),
                right: transform(result.right)
            }),
            JsdocTypeIndexSignature: (result, transform) => ({
                type: 'JsdocTypeIndexSignature',
                key: result.key,
                right: transform(result.right)
            }),
            JsdocTypeMappedType: (result, transform) => ({
                type: 'JsdocTypeMappedType',
                key: result.key,
                right: transform(result.right)
            }),
            JsdocTypeAsserts: (result, transform) => ({
                type: 'JsdocTypeAsserts',
                left: transform(result.left),
                right: transform(result.right)
            })
        };
    }

    const visitorKeys = {
        JsdocTypeAny: [],
        JsdocTypeFunction: ['parameters', 'returnType'],
        JsdocTypeGeneric: ['left', 'elements'],
        JsdocTypeImport: [],
        JsdocTypeIndexSignature: ['right'],
        JsdocTypeIntersection: ['elements'],
        JsdocTypeKeyof: ['element'],
        JsdocTypeKeyValue: ['right'],
        JsdocTypeMappedType: ['right'],
        JsdocTypeName: [],
        JsdocTypeNamePath: ['left', 'right'],
        JsdocTypeNotNullable: ['element'],
        JsdocTypeNull: [],
        JsdocTypeNullable: ['element'],
        JsdocTypeNumber: [],
        JsdocTypeObject: ['elements'],
        JsdocTypeObjectField: ['right'],
        JsdocTypeJsdocObjectField: ['left', 'right'],
        JsdocTypeOptional: ['element'],
        JsdocTypeParenthesis: ['element'],
        JsdocTypeSpecialNamePath: [],
        JsdocTypeStringValue: [],
        JsdocTypeSymbol: ['element'],
        JsdocTypeTuple: ['elements'],
        JsdocTypeTypeof: ['element'],
        JsdocTypeUndefined: [],
        JsdocTypeUnion: ['elements'],
        JsdocTypeUnknown: [],
        JsdocTypeVariadic: ['element'],
        JsdocTypeProperty: [],
        JsdocTypePredicate: ['left', 'right'],
        JsdocTypeAsserts: ['left', 'right']
    };

    function _traverse(node, parentNode, property, onEnter, onLeave) {
        onEnter === null || onEnter === void 0 ? void 0 : onEnter(node, parentNode, property);
        const keysToVisit = visitorKeys[node.type];
        for (const key of keysToVisit) {
            const value = node[key];
            if (value !== undefined) {
                if (Array.isArray(value)) {
                    for (const element of value) {
                        _traverse(element, node, key, onEnter, onLeave);
                    }
                }
                else {
                    _traverse(value, node, key, onEnter, onLeave);
                }
            }
        }
        onLeave === null || onLeave === void 0 ? void 0 : onLeave(node, parentNode, property);
    }
    /**
     * A function to traverse an AST. It traverses it depth first.
     * @param node the node to start traversing at.
     * @param onEnter node visitor function that will be called on entering the node. This corresponds to preorder traversing.
     * @param onLeave node visitor function that will be called on leaving the node. This corresponds to postorder traversing.
     */
    function traverse(node, onEnter, onLeave) {
        _traverse(node, undefined, undefined, onEnter, onLeave);
    }

    exports.catharsisTransform = catharsisTransform;
    exports.identityTransformRules = identityTransformRules;
    exports.jtpTransform = jtpTransform;
    exports.parse = parse;
    exports.stringify = stringify;
    exports.stringifyRules = stringifyRules;
    exports.transform = transform;
    exports.traverse = traverse;
    exports.tryParse = tryParse;
    exports.visitorKeys = visitorKeys;

}));


/***/ }),

/***/ "../../../node_modules/react/cjs/react.production.min.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ "../../../node_modules/react/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../../node_modules/react/cjs/react.production.min.js");
} else {}


/***/ }),

/***/ "../../../node_modules/ts-dedent/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ dedent)
/* harmony export */ });
function dedent(templ) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var strings = Array.from(typeof templ === 'string' ? [templ] : templ);
    strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, '');
    var indentLengths = strings.reduce(function (arr, str) {
        var matches = str.match(/\n([\t ]+|(?!\s).)/g);
        if (matches) {
            return arr.concat(matches.map(function (match) { var _a, _b; return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0; }));
        }
        return arr;
    }, []);
    if (indentLengths.length) {
        var pattern_1 = new RegExp("\n[\t ]{" + Math.min.apply(Math, indentLengths) + "}", 'g');
        strings = strings.map(function (str) { return str.replace(pattern_1, '\n'); });
    }
    strings[0] = strings[0].replace(/^\r?\n/, '');
    var string = strings[0];
    values.forEach(function (value, i) {
        var endentations = string.match(/(?:^|\n)( *)$/);
        var endentation = endentations ? endentations[1] : '';
        var indentedValue = value;
        if (typeof value === 'string' && value.includes('\n')) {
            indentedValue = String(value)
                .split('\n')
                .map(function (str, i) {
                return i === 0 ? str : "" + endentation + str;
            })
                .join('\n');
        }
        string += indentedValue + strings[i + 1];
    });
    return string;
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (dedent)));
//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=2114.ca9bcca4.iframe.bundle.js.map