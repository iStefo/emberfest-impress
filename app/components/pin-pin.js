var PinPinComponent = Ember.Component.extend({
  classNames: ['handler'],
  oldclientX:0,
  oldclientY:0,
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
    }else{
      this.set('parentView.isRotating',true);
      $('body').on('mousemove', this.mouseMoveRotationHandler.bind(this));
      $('body').on('mouseup', this.releaseMouse.bind(this));      
    }
  },
  mouseMoveRotationHandler:function(ev){
    // rotate

    var oldX = this.get('oldclientX');
    var oldY = this.get('oldclientY');

    this.set('oldclientX',ev.clientX);
    this.set('oldclientY',ev.clientY);
    var deltaX = oldX-ev.clientX;
    var deltaY = oldY-ev.clientY;
    var positive = Math.asin((oldX-ev.clientX)/Math.sqrt(deltaX*deltaX+deltaY*deltaY));
    console.log(positive)
    if (positive<0){
      this.set('parentView.controller.rotate',this.get('parentView.controller.rotate')+1);  
    }else{
      this.set('parentView.controller.rotate',this.get('parentView.controller.rotate')-1);  
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
    if (!this.get('rotation'))  {
      this.set('parentView.isRotating',false);
    }
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
