$(document).ready(function(){
$("#menu").on("click","a", function (event) {
event.preventDefault();
var id = $(this).attr('href'),
top = $(id).offset().top;
$('body,html').animate({scrollTop: top}, 1000);
});
});

$(function() {
$(window).scroll(function() {
if($(this).scrollTop() != 0) {
$('#topNubex').fadeIn();
} else {
$('#topNubex').fadeOut();
}
});
$('#topNubex').click(function() {
$('body,html').animate({scrollTop:0},700);
});
});


$(document).ready(function() {
  $('.spoiler_links').click(function() {
    $(this).parent().children('div.spoiler_body').slideToggle(700);
    return false;
  });
});
