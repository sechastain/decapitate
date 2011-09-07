(function() {
  function SearchForCaps()
  {
    var el = $(this)
    var children = this.children();
    if(children.size() == 0)
    {
      var t = this.text();
      var u = t.toUpperCase();
      if(t != u)
      {
        this.text(u);
      }
    }
    else
    {
      children.each(SearchForCaps);
    }
  }
$('body').each(SearchForCaps);
})();
