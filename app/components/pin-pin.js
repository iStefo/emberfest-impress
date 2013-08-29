var PinPinComponent = Ember.Component.extend({
  classNames: ['handler'],
  mouseDown: function (ev) {
    ev.stopImmediatePropagation();
    if (!this.get('rotation'))  {
      console.log('make scaling');
      $('body').on('mousemove', this._mMH = $.proxy(this.mouseMoveHandler, this));
      $('body').on('mouseup', this._mUH = $.proxy(this.releaseMouse, this));

      var centerPoint = this._calculateParentCenter();
      var ownPoint = { x: ev.clientX, y: ev.clientY };
      var pointDistance = this._calculateDistance(centerPoint, ownPoint);
      console.log(pointDistance);
      this.set('initDist', pointDistance);
    }
  },

  mouseMoveHandler: function (ev) {
    var centerPoint = this._calculateParentCenter();
    var ownPoint = { x: ev.clientX, y: ev.clientY };
    var dist = this._calculateDistance(centerPoint, ownPoint);
    var newScale = dist / this.get('initDist');
    this.get('parentView.controller').set('scale', newScale);

  },
  releaseMouse: function () {
    console.log('release mouse now');
    $('body').off('mousemove', this._mMH);
    $('body').off('mouseup',  this._mUH);
  },

  _calculateParentCenter: function() {
    var parentView = this.get('parentView').$()[0],
      parentScale = this.get('parentView.controller.scale'),
      centerX = (parentView.getBoundingClientRect().left + (parentView.offsetWidth / 2) * parentScale),
      centerY = (parentView.getBoundingClientRect().top + (parentView.offsetHeight / 2) * parentScale );
    return {
      x: centerX,
      y: centerY
    };
  }, 

  _calculateDistance: function (point1, point2) {
    return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
  }

});

export default PinPinComponent;