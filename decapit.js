(function() {
  function SearchForCaps(el)
  {
    var children = el.children();
    if(children.size() == 0)
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
      children.each(SearchForCaps);
    }
  }
SearchForCaps($(document));
})();
