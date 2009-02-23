window.addEvent("domready", function() {
  Date.allToRelativeTime = function(elems) {
    $each(elems, function(elem) {
      elem.set("text", Date.fromString(elem.get("text")).toRelativeTime());
    });
  };
});
