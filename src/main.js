/**
 * Created by narendrasisodiya on 12/08/16.
 */

var startTime = Date.now();

var domNode = document.querySelector("#timelog");


var ta = require('time-ago')();

window.setInterval(function () {
  //This will be called per minute
  domNode.innerHTML = ta.ago(startTime).replace("ago", "");
}, 1000);