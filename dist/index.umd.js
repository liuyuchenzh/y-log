!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.yConsole=e()}(this,function(){var n="log"+(new Date).getTime(),e={},o=function(){var o,t=e.container||((o=document.createElement("div")).id=n,o.style.cssText='\n  z-index: 999;\n  padding: 16px;\n  height: 300px;\n  overflow: auto;\n  line-height: 1.4;\n  background: rgb(36, 36, 36);\n  color: rgb(255, 255, 255);\n  font-size: 16px;\n  font-family: monospace, consolas, "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Arial, sans-serif;\n  border: none;\n  text-align: left;',e.container=o,o),i=document.body.children[0];i&&"object"==typeof i&&i.id===n||document.body.insertBefore(t,i)},t=function(t,i){void 0===i&&(i=!1);var r=function(n){void 0===n&&(n="pre");var e=document.createElement(n);return e.style.cssText="\n    color: #fff;\n    font-size: 14px;\n    line-height: 1.4;\n    padding: 2px 10px;\n  ",e}();(r.innerText=t,i)&&(document.getElementById(n)||o());e.container&&e.container.appendChild(r)},i={init:!1},r={id:n,log:function(n,e){void 0===e&&(e=!1),i.init||(o(),i.init=!0),t(n,e)}};function c(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];for(var o=0;o<n.length;o++)try{r.log(n[o].toString())}catch(e){r.log(""+n[o])}}if(window.console){var d=window.console.log;window.console.log=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];try{d.apply(void 0,n)}catch(n){}c.apply(void 0,n)}}else window.console={log:c};return r});
//# sourceMappingURL=index.umd.js.map
