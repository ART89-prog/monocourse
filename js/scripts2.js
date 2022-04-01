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


	$('.cats_title').click(function(e){
		e.preventDefault()	
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active");
			$(this).next().slideUp();
		}	
		else
		{
			$(this).addClass("active");
			$(this).next().slideDown();
		}

	})




})