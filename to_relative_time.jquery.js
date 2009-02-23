(function($) {
    /*
     * A handy jQuery wrapper for converting tags with JavaScript parse()-able
     * time-stamps into relative time strings.
     *
     * Usage:
     *   Suppose numerous Date.parse()-able time-stamps are available in the 
     *   inner-HTML of some <span class="rel"> elements...
     *
     *   $("span.rel").toRelativeTime()
     *
     * Examples: '5 years ago', '45 minutes ago'
     *
     * Requires date.extensions.js to be loaded first.
     */
    $.fn.toRelativeTime = function() {
      this.each(function() {
        var $this = $(this);
        $this.text(Date.fromString($this.html()).toRelativeTime());
      });
    };
  })(jQuery);
