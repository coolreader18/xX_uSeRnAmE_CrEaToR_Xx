/* @legume
 * @name script
 * @script jquery
 * @style style.css
 */
var $ = require("jquery");
$("#input").on("input", function() {
  var arr = Array.from(this.value.replace(/\s/g, "_").toLowerCase());
  for (var i = 1; i < arr.length; i+=2) {
	  arr[i] = arr[i].toUpperCase();
  }
  $("#output").text("xX_" + arr.join("") + "_Xx");
})
