/**
 * Created by narendrasisodiya on 12/08/16.
 */

var startTime = Date.now();

var domNode = document.querySelector("#timelog");

window.setInterval(function () {
  //This will be called per minute
  domNode.innerHTML = Date.now() - startTime;
}, 1000);