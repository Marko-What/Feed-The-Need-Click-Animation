

$('li').on('click', function(){ 
	selectedValue1 = $(this).attr('id'); 
	/*confirm(selectedValue1);*/
	/*selectedValue1 = $('div.select span').text();*/

	$('div#wrapperNone').click();
});



$('div#wrapperNone').bind('click', tripInN);

 function tripInN(){
	
	/*$("#selected").removeClass('feedsC');
	$("#selected").removeClass('newsC');
	$("#selected").removeClass('discoveriesC');*/
	

	$("#selected").removeAttr('class');

	/*$('div#roundLine1').removeClass('feeds');
	$('div#roundLine1').removeClass('news');
	$('div#roundLine1').removeClass('discoveries');*/

	$('div#roundLine1').removeAttr('class');

/*	$('div#roundLine').removeClass('feeds');
	$('div#roundLine').removeClass('news');
	$('div#roundLine').removeClass('discoveries');*/

	$('div#roundLine').removeAttr('class');
/*
	$('div#circle23').removeClass('feedsC');
	$('div#circle23').removeClass('newsC');
	$('div#circle23').removeClass('discoveriesC');*/
	
	$('div#circle23').removeAttr('class');
	


	/*selectedValue = $("#selected").val();*/
	
	/*selectedValue1 = $('div.select span').text();*/
	
	selectedValue = selectedValue1.toLowerCase();
	
	if(selectedValue != "select wwwhaat"){
	
	/*confirm(selectedValue);*/ /* news example ...*/



	/*$('div#feed').animate('',);*/

	$('div#feed').animate({"right" : "15"},80, function(){
		$('div#feed').animate({"right" : "0"},70);	
	});

 	
	$('div#feed').text(selectedValue);
	
	
	$('div#feed').removeAttr('class').addClass(selectedValue);





	$('div#roundLine1, div#roundLine').addClass(selectedValue);
	$('div#circle23').addClass(selectedValue +'C');
	$("#selected").addClass(selectedValue +'C');
	$("div.drop-menu div.select").removeClass('discoveriesb');
	$("div.drop-menu div.select").removeClass('newsb');
	$("div.drop-menu div.select").removeClass('feedsb');
	$("div.drop-menu div.select").addClass(selectedValue+"b");
	} /* end of if */


	$('div#wrapperNone').unbind();
	function tripIn(){

	$('div#circle23').addClass('none').delay(200).queue(function(next){
		$(this).removeClass('none');
		next();
	});
	
	$('div#roundLine1').addClass('none').delay(400).queue(function(next){
		$(this).removeClass('none');
		next();
	});

	
	$('div#roundLine').addClass('none').delay(600).queue(function(next){
		$(this).removeClass('none');
		next();
	});

	

	}
	tripIn();

	setTimeout("$('div#wrapperNone').bind('click',  tripInN);", 800);	

}



	



/*Select Box js*/
$('.drop-menu').click(function () {
       /* $(this).attr('tabindex', 3).focus();*/
        $(this).toggleClass('active');
        $(this).find('.dropeddown').slideToggle(300);
    });
    $('.drop-menu').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropeddown').slideUp(300);
    });
    $('.drop-menu .dropeddown li').click(function () {
        $(this).parents('.drop-menu').find('span').text($(this).text());
        $(this).parents('.drop-menu').find('input').attr('value', $(this).attr('id'));
    });
/*End Select Box js*/


$('.dropeddown li').click(function () {
	$('.msg span').removeAttr('style');
  var input = '<strong>' + $(this).parents('.drop-menu').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value is ';
	
	textColor = $(this).css('background-color');
		
  $('.msg').html(msg + input + '</span>');
	
	$('.msg span strong').css('color', textColor);
}); 





