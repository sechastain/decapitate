(function() {
  function SearchForCaps()
  {
    if(this.nodeType == 1 && (this.tagName.toUpperCase() === 'SCRIPT' || this.tagName.toUpperCase() == 'STYLE')) return;
    var el = $(this);
    var contents = el.contents();
    if(contents.size() == 0)
    {
      var t = el.text();
      var u = t.toLowerCase();
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
var start = $('iframe#canvas_frame'); //search for gmail
//if(start.size() > 0)
//{
//  start = start.contents();
//}
//else
//{
  start = $('body');
//}
start.each(SearchForCaps);
})();

