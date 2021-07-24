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