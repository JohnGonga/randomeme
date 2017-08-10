var image = [ 'img/1.jpg',
			  'img/2.jpg',
			  'img/3.jpg',
			  'img/4.jpg',
			  'img/5.jpg',
			  'img/6.jpg',
			  'img/7.jpg',
			  'img/8.jpg',
			  'img/9.jpg',
			  'img/10.jpg',
			  'img/11.jpg',
			  'img/12.jpg',
			  'img/13.jpg',
			  'img/14.jpg',
			  'img/15.jpg',
			  'img/16.jpg',
			  'img/17.jpg',
			  'img/18.jpg',
			  'img/19.jpg',
			  'img/20.jpg',
			  'img/21.png',
			  'img/22.png',
			  'img/23.png',
			  'img/24.png',
			  'img/25.png',
			  'img/26.png',
			  'img/27.png',
			  'img/28.jpg',
			  'img/29.jpg',
			  'img/30.jpg',
			  'img/31.jpg'];
function imggen() {
  var img = image.length
  var rand = Math.floor((Math.random() * img) + 0);
  var ranimg = image[rand];
  $('#meme').prepend("<img src='"+ranimg+"'></img>");
}
$('button').click(function(){
  $('#meme').text("");
  imggen();
 $('img').addClass("img-responsive");
});
$( document ).ready(function() {
    $('button').trigger('click');
});

