var n="log"+(new Date).getTime(),o={},e=function(){var e,i=o.container||((e=document.createElement("div")).id=n,e.style.cssText='\n  z-index: 999;\n  padding: 16px;\n  height: 300px;\n  overflow: auto;\n  line-height: 1.4;\n  background: rgb(36, 36, 36);\n  color: rgb(255, 255, 255);\n  font-size: 16px;\n  font-family: monospace, consolas, "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Arial, sans-serif;\n  border: none;\n  text-align: left;',o.container=e,e),t=document.body.children[0];t&&"object"==typeof t&&t.id===n||document.body.insertBefore(i,t)},i=function(i,t){void 0===t&&(t=!1);var r=function(){var n=document.createElement("pre");return n.style.cssText="\n    color: #fff;\n    font-size: 14px;\n    line-height: 1.4;\n    padding: 2px 10px;\n  ",n}();(r.innerHTML=i,t)&&(document.getElementById(n)||e());o.container&&o.container.appendChild(r)},t={init:!1},r={log:function(n,o){void 0===o&&(o=!1),t.init||(e(),t.init=!0),i(n,o)}};if(window.console){var l=window.console.log;window.console.log=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];l.apply(void 0,n);for(var e=0;e<n.length;e++)r.log(n.toString())}}else window.console={log:r};module.exports=r;
//# sourceMappingURL=index.js.map