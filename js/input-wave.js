$(function(){
  var waves = new SineWaves({
    el: document.getElementById('waves'),

    speed: 10,

    width: function() {
      return $(window).width();
    },

    wavesWidth: '100%',

    ease: 'Linear',

    waves: [
      {
        timeModifier: 1,
        lineWidth: 5,
        amplitude: 0,
        wavelength: 0,
        segmentLength: 1,
        // strokeStyle: 'rgba(255, 255, 255, 0.5)'
      }
    ],

    initialize: function (){

    },

    resizeEvent: function() {
      var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.5)");

      var index = -1;
      var length = this.waves.length;
        while(++index < length){
        this.waves[index].strokeStyle = gradient;
      }

      // Clean Up
      index = void 0;
      length = void 0;
      gradient = void 0;

  }
});
});