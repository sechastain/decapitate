(function() {
  function SearchForCaps()
  {
    var el = $(this)
    var contents = el.contents();
    if(contents.size() == 0)
    {
      var t = el.text();
      var u = t.toUpperCase();
      if(t != u)
      {
        el.val(u);
      }
    }
    else
    {
      contents.each(SearchForCaps);
    }
  }
$('body').each(SearchForCaps);
})();
