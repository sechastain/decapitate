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
      for(int i = 0; i < children.size(); i++) SearchForCaps(children[i]);
    }
  }
SearchForCaps($(document));
})();
