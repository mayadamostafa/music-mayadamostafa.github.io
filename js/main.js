

//nicescroll
$(function() {  
    $("html").niceScroll();


});
$(document).ready(function(){
        $(".do-nicescrol").niceScroll("{horizrailenabled:false}");
});


//button
$('.from-left').hover(function (){
   
   $(this).find('span').eq(0).animate({

   width:'100%'
    
   }, 200);


}, function(){

 $(this).find('span').eq(0).animate({

   width:0
    
   }, 200);

})



//show first info
$('.info').first().show().animate({width:'40%'});
// show info on click
$('.item').click(function(){
 $(this)
 .next().show().animate({width:'40%'})
 .siblings('.info').animate({width:0},function(){ $(this).hide()});
});

$(document).ready(function(){

 $('.heading').funnyText({
 	speed: 400,
 	borderColor: 'white',
 	activeColor: '#ffc728',
 	color: '#ffc728',
 	fontSize: '30px',
    direction: 'both'
 });
  
});
//gallery
$('.thumbnails img').on('click', function(){

	$(this).addClass('active').siblings().removeClass()
	$('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn(500);
});

//right
$('.master-img .fa-chevron-right').on('click',function(){
   
   if ($('.thumbnails .active').is(':last-child')) {
      
      $('.thumbnails img').eq(0).click();
      
   }
   else{
   	$('.thumbnails .active').next().click();
   }



	
});
//left

$('.master-img .fa-chevron-left').on('click',function(){


	  if ($('.thumbnails .active').is(':first-child')) {
      
      $('.thumbnails img:last').eq().click();
      
   }
   else{
   	$('.thumbnails .active').next().click();
   }
	
});
