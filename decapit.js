(function() {
  function SearchForCaps()
  {
    var el = $(this)
    var content = el.content();
    if(content.size() == 0)
    {
      var t = el.text();
      var u = t.toUpperCase();
      if(t != u)
      {
        el.text(u);
      }
    }
    else
    {
      content.each(SearchForCaps);
    }
  }
$('body').each(SearchForCaps);
})();
