function changeStyle(page) {
  setTimeout(function() {
  if (localStorage.getItem('Dark') == '1') {
      localStorage.removeItem('Dark');
      localStorage.setItem('Dark', '0');
      top.$( "iframe" ).attr('src', `light/${page}.html`);
  } else if (localStorage.getItem('Dark') == '0') {
      localStorage.removeItem('Dark');
      localStorage.setItem('Dark', '1');
      top.$( "iframe" ).attr('src', `dark/${page}.html`);
  } else {
      localStorage.removeItem('Dark');
      localStorage.setItem('Dark', '0');
      changeStyle(page)
  }
  }, 50)
}

function checkStyle(page) {
  setTimeout(function() {
  if (localStorage.getItem('Dark') == '0') {
    top.$( "iframe" ).attr('src', `light/${page}.html`);

  } else if (localStorage.getItem('Dark') == '1') {
    top.$( "iframe" ).attr('src', `dark/${page}.html`);
  } else {
      localStorage.removeItem('Dark');
      localStorage.setItem('Dark', '1');
      changeStyle(page)
  }
  }, 50)
}

$(window).scroll(function(){
	if ($(this).scrollTop() > 300){
		$('.btn_gotop').show();
	} else{
		$('.btn_gotop').hide();
	}
});
$('.btn_gotop').click(function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
});