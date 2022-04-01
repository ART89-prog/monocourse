$(() => {

	// Фильтр
	$('body').on('click', '.mob_filter_link', function(e) {
    	e.preventDefault()

    	if( $(this).hasClass('active') ) {
			$(this).removeClass('active')
			$('aside .filter').fadeOut(200)
		} else {
			$(this).addClass('active')
			$('aside .filter').fadeIn(300)
		}
	})

	$('aside .filter .close, .overlay, aside .filter_title .close').click(function(e){
		e.preventDefault()
	    $('aside .mob_filter_link').removeClass('active')
		$('aside .filter').fadeOut(200)
	})


	$('select').niceSelect();


	$('.tab_filter_title span, .tab_filter_title i').click(function(e){
		e.preventDefault()	
		if($(this).parent().hasClass("active"))
		{
			$(this).parent().removeClass("active");
			$(this).parent().next().slideUp();
		}	
		else
		{
			$(this).parent().addClass("active");
			$(this).parent().next().slideDown();
		}

	})


})