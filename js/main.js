(function(){
  var nav_links = $('#nav').children();
  $.each(nav_links, function(i, link){
    $(link).click(function(){
      $($(this).attr("href")).ScrollTo(2400);
      return false;
    });
  });
})();
//$('html, body').animate({scrollTop:600}, '600');