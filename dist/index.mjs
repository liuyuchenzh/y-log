var n="log"+(new Date).getTime(),o={},e=function(){var e,t=o.container||((e=document.createElement("div")).id=n,e.style.cssText='\n  z-index: 999;\n  padding: 16px;\n  height: 300px;\n  overflow: auto;\n  line-height: 1.4;\n  background: rgb(36, 36, 36);\n  color: rgb(255, 255, 255);\n  font-size: 16px;\n  font-family: monospace, consolas, "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Arial, sans-serif;\n  border: none;\n  text-align: left;',o.container=e,e),i=document.body.children[0];i&&"object"==typeof i&&i.id===n||document.body.insertBefore(t,i)},t=function(t,i){void 0===i&&(i=!1);var r=function(n){void 0===n&&(n="pre");var o=document.createElement(n);return o.style.cssText="\n    color: #fff;\n    font-size: 14px;\n    line-height: 1.4;\n    padding: 2px 10px;\n  ",o}();(r.innerText=t,i)&&(document.getElementById(n)||e());o.container&&o.container.appendChild(r)},i={init:!1},r={id:n,log:function(n,o){void 0===o&&(o=!1),i.init||(e(),i.init=!0),t(n,o)}};function c(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];for(var e=0;e<n.length;e++)try{r.log(n[e].toString())}catch(o){r.log(""+n[e])}}if(window.console){var l=window.console.log;window.console.log=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];try{l.apply(void 0,n)}catch(n){}c.apply(void 0,n)}}else window.console={log:c};export default r;
//# sourceMappingURL=index.mjs.map
