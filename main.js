var wow = new WOW({
	boxClass: "wow", // animated element css class (default is wow)
	animateClass: "animated", // animation css class (default is animated)
	offset: 0, // distance to the element when triggering the animation (default is 0)
	mobile: true, // trigger animations on mobile devices (default is true)
	live: true, // act on asynchronously loaded content (default is true)
	callback: function (box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
	},
	scrollContainer: null, // optional scroll container selector, otherwise use window,
	resetAnimation: true // reset animation on end (default is true)
});
wow.init();
$('document').ready(function(){
	var typed = new Typed('.animate', {
		strings:["I'm Abdulloh Irgashev"," Front End Developer" ],
		typeSpeed: 50,
		backSpeed:50,
		showCursor:false,
		loop:true
	  });
});
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }