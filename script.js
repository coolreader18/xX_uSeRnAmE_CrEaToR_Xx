/* @legume
 * @name script
 * @script npm:jquery
 * @style style.css
 */
var $ = require("jquery");
var switched = false;
$("#input").on("input", gen)
function gen() {
  var arr = Array.from($("#input").val().replace(/\s/g, "_").toLowerCase());
  for (var i = switched ? 0 : 1; i < arr.length; i+=2) {
    arr[i] = arr[i].toUpperCase();
  }
  $("#output").text("xX_" + arr.join("") + "_Xx");
}
$("#switch").change(function() {
  switched = this.checked;
  gen();
})
