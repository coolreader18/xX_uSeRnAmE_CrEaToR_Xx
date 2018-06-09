/* @legume
 * @name script
 * @require npm:stdio.js/build/stdio-primer.min.js as stdio
 */
stdio.loadStyleSheet().add(
  {
    type: "textInput",
    name: "input"
  },
  {
    type: "checkbox",
    name: "cap",
    label: "Switch Capitilization",
    options: [""]
  },
  {
    type: "output",
    link: "input",
    transform: function(inp) {
      var switched = true;
      var arr = Array.from(inp.replace(/\s/g, "_").toLowerCase());
      for (var i = switched ? 0 : 1; i < arr.length; i+=2) {
        arr[i] = arr[i].toUpperCase();
      }
      return "xX_" + arr.join("") + "_Xx";
    }
  }
)
