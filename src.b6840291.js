parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JF4W":[function(require,module,exports) {
module.exports=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];
},{}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={startBtn:document.querySelector('[data-action="start"]'),stopBtn:document.querySelector('[data-action="stop"]')};exports.default=t;
},{}],"SbnA":[function(require,module,exports) {
"use strict";var t,e=r(require("../db/colors.json")),n=r(require("../js/refs"));function r(t){return t&&t.__esModule?t:{default:t}}function a(){n.default.startBtn.disabled=!0,t=setInterval(function(){document.body.style.background=e.default[u(0,e.default.length-1)]},1e3)}function d(){clearInterval(t),n.default.startBtn.disabled=!1}n.default.startBtn.addEventListener("click",a),n.default.stopBtn.addEventListener("click",d);var u=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)};
},{"../db/colors.json":"JF4W","../js/refs":"VyiV"}],"Focm":[function(require,module,exports) {
"use strict";require("./js/color-switch");
},{"./js/color-switch":"SbnA"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/src.b6840291.js.map