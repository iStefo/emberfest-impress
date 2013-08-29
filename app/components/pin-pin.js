var PinPinComponent = Ember.Component.extend({
  classNames: ['handler'],
  mouseDown: function (ev) {
    ev.stopImmediatePropagation();
    if (!this.get('rotation'))  {
      console.log('make scaling');
      $('body').on('mousemove', this.mouseMoveHandler.bind(this));
      $('body').on('mouseup', this.releaseMouse.bind(this));

      this.set('initDist', this._calculateDistance(ev));
    }
  },
  mouseMoveHandler: function (ev) {
    var newDist = this._calculateDistance(ev);
    console.log((newDist / this.get('initDist')).toFixed(2));
    this.set('scale', (newDist / this.get('initDist')).toFixed(2));

  },
  releaseMouse: function () {
    console.log('release mouse now');
    $('body').off('mousemove');
    $('body').off('mouseup');
  },
  _calculateDistance: function (ev) {
    var parentView = this.get('parentView').$()[0],
      centerX = parentView.offsetLeft + (parentView.offsetWidth / 2),
      centerY = parentView.offsetTop + (parentView.offsetHeight / 2),
      initX = ev.clientX,
      initY = ev.clientY,
      dist = Math.sqrt(Math.pow(initX - centerX, 2) + Math.pow(initY - centerY, 2));
    return dist;
  }

});

export default PinPinComponent;