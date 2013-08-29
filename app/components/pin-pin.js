var PinPinComponent = Ember.Component.extend({
  classNames: ['handler'],
  oldclientX:0,
  oldclientY:0,
  mouseDown: function (ev) {
    ev.stopImmediatePropagation();
    if (!this.get('rotation'))  {
      console.log('make scaling');
      $('body').on('mousemove', this.mouseMoveHandler.bind(this));
      $('body').on('mouseup', this.releaseMouse.bind(this));

      this.set('initDist', this._calculateDistance(ev));
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
    var newDist = this._calculateDistance(ev);

    //console.log((newDist / this.get('initDist')).toFixed(2));
    this.set('scale', (newDist / this.get('initDist')).toFixed(2));
    // console.log((newDist / this.get('initDist')).toFixed(2));
    var newScale = parseFloat((newDist / this.get('initDist')).toFixed(2));
    this.get('parentView.controller').set('scale', newScale);

  },
  releaseMouse: function () {
    console.log('release mouse now');
    $('body').off('mousemove');
    $('body').off('mouseup');
    if (!this.get('rotation'))  {
      this.set('parentView.isRotating',false);
    }
  },
  _calculateDistance: function (ev) {
    var parentView = this.get('parentView').$()[0],
      centerX = parentView.offsetLeft + (parentView.offsetWidth / 2),
      centerY = parentView.offsetTop + (parentView.offsetHeight / 2),
      initX = ev.clientX,
      initY = ev.clientY,
      dist = Math.sqrt(Math.pow(initX - centerX, 2) + Math.pow(initY - centerY, 2));
    return dist;
  },
  _calculateDeltaPosition:function(ev){
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