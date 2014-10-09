var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $shuttleSection = $('.shuttle-section');
var $shuttle = $('.shuttle');
var $shipsSection = $('.ships-section');
var $ships = $('.ships');
var $ships1 = $('.ships-1');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$sun.css('transform','rotate(' + scrollPos / 5 +'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 2 + 'px');

});

$dipperSection.waypoint(function() {
	$dipper.addClass('js-dipper-fade');
}, { offset: '50%' });

$shuttleSection.waypoint(function() {
	$shuttle.addClass('js-shuttle-fade');
}, { offset: '50%' });


$shipsSection.waypoint(function() {
	$ships.addClass('js-ships-fade');
	$ships1.addClass('js-ships-fade-1');
}, { offset: '50%' });





