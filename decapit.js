(function() {
  function SearchForCaps()
  {
    if(this.nodeType == 1 && this.tagName.toUpperCase() === 'SCRIPT') return;
    var el = $(this);
    var contents = el.contents();
    if(contents.size() == 0)
    {
      var t = el.text();
      var u = t.toUpperCase();
      if(t != u)
      {
        el.replaceWith(u);
      }
    }
    else
    {
      contents.each(SearchForCaps);
    }
  }
var start = $('ifram#canvas_frame body'); //search for gmail
if(start.size() == 0)
{
  start = $('body');
}
start.each(SearchForCaps);
})();

