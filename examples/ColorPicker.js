L.ColorPicker = L.ToolbarHandler.extend({
	options: {
		toolbarIcon: { className: 'leaflet-color-swatch' }
	},

	initialize: function(map, shape, options) {
		this._shape = shape;

		L.setOptions(this, options);
		L.ToolbarHandler.prototype.initialize.call(this, map, options);
	},

	addHooks: function() {
		L.ToolbarHandler.prototype.addHooks.call(this);

		this._shape.setStyle({ color: this.options.color });
		this.disable();
	},

	_createIcon: function(toolbar, container, args) {
		var colorSwatch = L.DomUtil.create('div'),
			width, height;

		L.ToolbarHandler.prototype._createIcon.call(this, toolbar, container, args);

		L.extend(colorSwatch.style, {
			backgroundColor: this.options.color,
			width: L.DomUtil.getStyle(this._link, 'width'),
			height: L.DomUtil.getStyle(this._link, 'height'),
			border: '3px solid ' + L.DomUtil.getStyle(this._link, 'backgroundColor')
		});

		this._link.appendChild(colorSwatch);
	}
});