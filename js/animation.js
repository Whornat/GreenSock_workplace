
var tmax_options = {
  //repeat: -1,
  //yoyo: true
};

var Timeline          = new TimelineMax(tmax_options),
	// Les effets d'animations
    tween_options_to = {
      css: {
        transform: 'scale(0)',
        transformOrigin: 'center center'
      },
      ease: Cubic.easeInOut,
      force3D: true
    },
	// les objets
	slogan    = $('#slogan'),
    baseline  = $('#baseline'),
    illustration  = $('#illustration');

;


//function animationpoison(evt:Event):void (
//	trace("working");
//);


// Last Argument is Position Timing.
// Use this argument to stagger the visibility of surrounding circles
//Timeline.to($('svg > circle:nth-of-type(1)'), 1, tween_options_to, 0)
Timeline
		//.to(baseline, 0.8, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 1})
		//.to("#baseline", 0.5, {backgroundColor: "green", width:"200%", padding:"2rem"})
		.from(slogan, 1, {y: "-100%", delay: 2})  // in from left
		.from(baseline, 2, {opacity: "0"})  // in from left
		.from(illustration, 2, {x: "-100%", opacity:0},"-=1")  // in from left
		//.to(slogan, 5, {y: "0%", ease: Bounce.easeNone})  // in from left
		//.fromTo(slogan, 1, {y: "-100%"}, {y: "0%", delay: 10})  // in from left
		//.fromTo(baseline, 0.5, {x: "-200%"}, {x: "0%",  autoAlpha: 1, ease: Elastic.easeIn})  // in from left


// ANIMATION 02

var Timeline2 = new TimelineMax({repeat: -1,yoyo: true});

Timeline2
		.from("#bulles", 1, {opacity:0})  // in from left

