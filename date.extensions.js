/*
 * Returns a description of this past date in relative terms.
 * Example: '3 years ago'
 */
Date.prototype.toRelativeTime = function() {
  var delta       = new Date() - this;
  var units       = null;
  var conversions = {
    millisecond: 1, // ms    -> ms
    second: 1000,   // ms    -> sec
    minute: 60,     // sec   -> min
    hour:   60,     // min   -> hour
    day:    24,     // hour  -> day
    month:  30,     // day   -> month (roughly)
    year:   12      // month -> year
  };

  for(var key in conversions) {
    if(delta < conversions[key]) {
      break;
    } else {
      units = key; // keeps track of the selected key over the iteration
      delta = delta / conversions[key];
    }
  }

  // pluralize a unit when the difference is greater than 1.
  delta = Math.floor(delta);
  if(delta !== 1) { units += "s"; }
  return [delta, units, "ago"].join(" ");
};

/*
 * Wraps up a common pattern used with this plugin whereby you take a String 
 * representation of a Date, and want back a date object.
 */
Date.fromString = function(str) {
  return new Date(Date.parse(str));
};
