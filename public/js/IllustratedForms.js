/* src/components/IllustratedForms.html generated by Svelte v2.9.1 */
var IllustratedForms = (function() { "use strict";

	function data() {
	return {
		sets: [{
			title: "Illustration"
		},{
			title: "Illustration"
		},{
			title: "Illustration"
		},{
			title: "Illustration"
		},{
			title: "Illustration"
		},{
			title: "Illustration"
		},{
			title: "Illustration"
		},{
			title: "Illustration"
		}]
	}
};

	function add_css() {
		var style = createElement("style");
		style.id = 'svelte-y9qxnt-style';
		style.textContent = ".grid.svelte-y9qxnt{display:grid;grid-template-columns:repeat(auto-fill, minmax(100px, 200px));grid-gap:80px;width:100%;justify-content:center}.illustration.svelte-y9qxnt{position:relative;height:300px;width:100%}.shape.svelte-y9qxnt{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.title.svelte-y9qxnt{text-align:center}img.svelte-y9qxnt{max-width:100%}";
		appendNode(style, document.head);
	}

	function create_main_fragment(component, ctx) {
		var div;

		var each_value = ctx.sets;

		var each_blocks = [];

		for (var i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block(component, get_each_context(ctx, each_value, i));
		}

		return {
			c() {
				div = createElement("div");

				for (var i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}
				div.className = "grid svelte-y9qxnt";
			},

			m(target, anchor) {
				insertNode(div, target, anchor);

				for (var i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(div, null);
				}
			},

			p(changed, ctx) {
				if (changed.sets) {
					each_value = ctx.sets;

					for (var i = 0; i < each_value.length; i += 1) {
						const child_ctx = get_each_context(ctx, each_value, i);

						if (each_blocks[i]) {
							each_blocks[i].p(changed, child_ctx);
						} else {
							each_blocks[i] = create_each_block(component, child_ctx);
							each_blocks[i].c();
							each_blocks[i].m(div, null);
						}
					}

					for (; i < each_blocks.length; i += 1) {
						each_blocks[i].d(1);
					}
					each_blocks.length = each_value.length;
				}
			},

			d(detach) {
				if (detach) {
					detachNode(div);
				}

				destroyEach(each_blocks, detach);
			}
		};
	}

	// (2:1) {#each sets as set, i}
	function create_each_block(component, ctx) {
		var div, div_1, text_3, p, text_4_value = ctx.set.title, text_4, text_5, text_6_value = ctx.i+1, text_6;

		return {
			c() {
				div = createElement("div");
				div_1 = createElement("div");
				div_1.innerHTML = "<div class=\"shape svelte-y9qxnt\"><img src=\"assets/triangle.svg\" alt=undefined style=\"transform: rotate(\" class=\"svelte-y9qxnt\"></div>\n\t\t\t\t<div class=\"shape svelte-y9qxnt\"><img src=\"assets/dot-slash.svg\" alt=undefined style=\"transform: rotate(\" class=\"svelte-y9qxnt\"></div>\n\t\t\t\t<div class=\"shape svelte-y9qxnt\"><img src=\"assets/curves.svg\" alt=undefined style=\"transform: rotate(\" class=\"svelte-y9qxnt\"></div>";
				text_3 = createText("\n\t\t\t");
				p = createElement("p");
				text_4 = createText(text_4_value);
				text_5 = createText(" ");
				text_6 = createText(text_6_value);
				div_1.className = "illustration svelte-y9qxnt";
				p.className = "title svelte-y9qxnt";
				div.className = "set set-" + ctx.i + " svelte-y9qxnt";
			},

			m(target, anchor) {
				insertNode(div, target, anchor);
				appendNode(div_1, div);
				appendNode(text_3, div);
				appendNode(p, div);
				appendNode(text_4, p);
				appendNode(text_5, p);
				appendNode(text_6, p);
			},

			p(changed, ctx) {
				if ((changed.sets) && text_4_value !== (text_4_value = ctx.set.title)) {
					text_4.data = text_4_value;
				}
			},

			d(detach) {
				if (detach) {
					detachNode(div);
				}
			}
		};
	}

	function get_each_context(ctx, list, i) {
		const child_ctx = Object.create(ctx);
		child_ctx.set = list[i];
		child_ctx.each_value = list;
		child_ctx.i = i;
		return child_ctx;
	}

	function IllustratedForms(options) {
		init(this, options);
		this._state = assign(data(), options.data);
		this._intro = true;

		if (!document.getElementById("svelte-y9qxnt-style")) add_css();

		this._fragment = create_main_fragment(this, this._state);

		if (options.target) {
			this._fragment.c();
			this._mount(options.target, options.anchor);
		}
	}

	assign(IllustratedForms.prototype, {
	 	destroy: destroy,
	 	get: get,
	 	fire: fire,
	 	on: on,
	 	set: set,
	 	_set: _set,
	 	_mount: _mount,
	 	_differs: _differs
	 });

	IllustratedForms.prototype._recompute = noop;

	function createElement(name) {
		return document.createElement(name);
	}

	function appendNode(node, target) {
		target.appendChild(node);
	}

	function insertNode(node, target, anchor) {
		target.insertBefore(node, anchor);
	}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function destroyEach(iterations, detach) {
		for (var i = 0; i < iterations.length; i += 1) {
			if (iterations[i]) iterations[i].d(detach);
		}
	}

	function createText(data) {
		return document.createTextNode(data);
	}

	function init(component, options) {
		component._handlers = blankObject();
		component._bind = options._bind;

		component.options = options;
		component.root = options.root || component;
		component.store = options.store || component.root.store;
	}

	function assign(tar, src) {
		for (var k in src) tar[k] = src[k];
		return tar;
	}

	function destroy(detach) {
		this.destroy = noop;
		this.fire('destroy');
		this.set = noop;

		this._fragment.d(detach !== false);
		this._fragment = null;
		this._state = {};
	}

	function get() {
		return this._state;
	}

	function fire(eventName, data) {
		var handlers =
			eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			var handler = handlers[i];

			if (!handler.__calling) {
				handler.__calling = true;
				handler.call(this, data);
				handler.__calling = false;
			}
		}
	}

	function on(eventName, handler) {
		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	}

	function set(newState) {
		this._set(assign({}, newState));
		if (this.root._lock) return;
		this.root._lock = true;
		callAll(this.root._beforecreate);
		callAll(this.root._oncreate);
		callAll(this.root._aftercreate);
		this.root._lock = false;
	}

	function _set(newState) {
		var oldState = this._state,
			changed = {},
			dirty = false;

		for (var key in newState) {
			if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
		}
		if (!dirty) return;

		this._state = assign(assign({}, oldState), newState);
		this._recompute(changed, this._state);
		if (this._bind) this._bind(changed, this._state);

		if (this._fragment) {
			this.fire("state", { changed: changed, current: this._state, previous: oldState });
			this._fragment.p(changed, this._state);
			this.fire("update", { changed: changed, current: this._state, previous: oldState });
		}
	}

	function _mount(target, anchor) {
		this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
	}

	function _differs(a, b) {
		return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
	}

	function noop() {}

	function blankObject() {
		return Object.create(null);
	}

	function callAll(fns) {
		while (fns && fns.length) fns.shift()();
	}
	return IllustratedForms;
}());