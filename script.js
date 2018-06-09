/* @legume
 * @name script
 * @require npm:stdio.js@0.1.5/build/stdio-primer.min.js as stdio
 */

stdio.loadStyleSheet().title("xX_uSeRnAmE_CrEaToR_Xx").add(
  {
    type: "textInput",
    name: "input"
  },
  {
    type: "switch",
    name: "cap",
    label: "Switch Capitilization"
  },
  {
    type: "output",
    transform: function(scope) {
      var switched = true;
      var arr = Array.from(scope.input.replace(/\s/g, "_").toLowerCase());
      for (var i = scope.cap ? 0 : 1; i < arr.length; i+=2) {
        arr[i] = arr[i].toUpperCase();
      }
      return "xX_" + arr.join("") + "_Xx";
    }
  }
)
