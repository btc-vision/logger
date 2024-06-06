var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.d(t,{q$:()=>re,Vy:()=>se,$7:()=>o,rE:()=>n});var o={};e.r(o),e.d(o,{DebugLevel:()=>re,Logger:()=>se,version:()=>n});var n="1.0.0";function i(e,t){e=e.replace("#","");var o=parseInt(e,16),n=Math.round(2.55*t),i=(o>>16)+n,r=(o>>8&255)+n,s=(255&o)+n;return(16777216+65536*(i<255?i<1?0:i:255)+256*(r<255?r<1?0:r:255)+(s<255?s<1?0:s:255)).toString(16).slice(1)}const r=(e=0)=>t=>`[${t+e}m`,s=(e=0)=>t=>`[${38+e};5;${t}m`,a=(e=0)=>(t,o,n)=>`[${38+e};2;${t};${o};${n}m`,l={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],gray:[90,39],grey:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgGray:[100,49],bgGrey:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};Object.keys(l.modifier),Object.keys(l.color),Object.keys(l.bgColor);const c=function(){const e=new Map;for(const[t,o]of Object.entries(l)){for(const[t,n]of Object.entries(o))l[t]={open:`[${n[0]}m`,close:`[${n[1]}m`},o[t]=l[t],e.set(n[0],n[1]);Object.defineProperty(l,t,{value:o,enumerable:!1})}return Object.defineProperty(l,"codes",{value:e,enumerable:!1}),l.color.close="[39m",l.bgColor.close="[49m",l.color.ansi=r(),l.color.ansi256=s(),l.color.ansi16m=a(),l.bgColor.ansi=r(10),l.bgColor.ansi256=s(10),l.bgColor.ansi16m=a(10),Object.defineProperties(l,{rgbToAnsi256:{value:(e,t,o)=>e===t&&t===o?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(t/255*5)+Math.round(o/255*5),enumerable:!1},hexToRgb:{value(e){const t=/[a-f\d]{6}|[a-f\d]{3}/i.exec(e.toString(16));if(!t)return[0,0,0];let[o]=t;3===o.length&&(o=[...o].map((e=>e+e)).join(""));const n=Number.parseInt(o,16);return[n>>16&255,n>>8&255,255&n]},enumerable:!1},hexToAnsi256:{value:e=>l.rgbToAnsi256(...l.hexToRgb(e)),enumerable:!1},ansi256ToAnsi:{value(e){if(e<8)return 30+e;if(e<16)return e-8+90;let t,o,n;if(e>=232)t=(10*(e-232)+8)/255,o=t,n=t;else{const i=(e-=16)%36;t=Math.floor(e/36)/5,o=Math.floor(i/6)/5,n=i%6/5}const i=2*Math.max(t,o,n);if(0===i)return 30;let r=30+(Math.round(n)<<2|Math.round(o)<<1|Math.round(t));return 2===i&&(r+=60),r},enumerable:!1},rgbToAnsi:{value:(e,t,o)=>l.ansi256ToAnsi(l.rgbToAnsi256(e,t,o)),enumerable:!1},hexToAnsi:{value:e=>l.ansi256ToAnsi(l.hexToAnsi256(e)),enumerable:!1}}),l}(),h=(()=>{if(navigator.userAgentData){const e=navigator.userAgentData.brands.find((({brand:e})=>"Chromium"===e));if(e&&e.version>93)return 3}return/\b(Chrome|Chromium)\//.test(navigator.userAgent)?1:0})(),u=0!==h&&{level:h,hasBasic:!0,has256:h>=2,has16m:h>=3},f={stdout:u,stderr:u};function g(e,t,o){let n=e.indexOf(t);if(-1===n)return e;const i=t.length;let r=0,s="";do{s+=e.slice(r,n)+t+o,r=n+i,n=e.indexOf(t,r)}while(-1!==n);return s+=e.slice(r),s}const{stdout:b,stderr:p}=f,y=Symbol("GENERATOR"),d=Symbol("STYLER"),v=Symbol("IS_EMPTY"),m=["ansi","ansi","ansi256","ansi16m"],k=Object.create(null);class x{constructor(e){return O(e)}}const O=e=>{const t=(...e)=>e.join(" ");return((e,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const o=b?b.level:0;e.level=void 0===t.level?o:t.level})(t,e),Object.setPrototypeOf(t,w.prototype),t};function w(e){return O(e)}Object.setPrototypeOf(w.prototype,Function.prototype);for(const[e,t]of Object.entries(c))k[e]={get(){const o=M(this,j(t.open,t.close,this[d]),this[v]);return Object.defineProperty(this,e,{value:o}),o}};k.visible={get(){const e=M(this,this[d],!0);return Object.defineProperty(this,"visible",{value:e}),e}};const P=(e,t,o,...n)=>"rgb"===e?"ansi16m"===t?c[o].ansi16m(...n):"ansi256"===t?c[o].ansi256(c.rgbToAnsi256(...n)):c[o].ansi(c.rgbToAnsi(...n)):"hex"===e?P("rgb",t,o,...c.hexToRgb(...n)):c[o][e](...n),S=["rgb","hex","ansi256"];for(const e of S)k[e]={get(){const{level:t}=this;return function(...o){const n=j(P(e,m[t],"color",...o),c.color.close,this[d]);return M(this,n,this[v])}}},k["bg"+e[0].toUpperCase()+e.slice(1)]={get(){const{level:t}=this;return function(...o){const n=j(P(e,m[t],"bgColor",...o),c.bgColor.close,this[d]);return M(this,n,this[v])}}};const L=Object.defineProperties((()=>{}),{...k,level:{enumerable:!0,get(){return this[y].level},set(e){this[y].level=e}}}),j=(e,t,o)=>{let n,i;return void 0===o?(n=e,i=t):(n=o.openAll+e,i=t+o.closeAll),{open:e,close:t,openAll:n,closeAll:i,parent:o}},M=(e,t,o)=>{const n=(...e)=>T(n,1===e.length?""+e[0]:e.join(" "));return Object.setPrototypeOf(n,L),n[y]=e,n[d]=t,n[v]=o,n},T=(e,t)=>{if(e.level<=0||!t)return e[v]?"":t;let o=e[d];if(void 0===o)return t;const{openAll:n,closeAll:i}=o;if(t.includes(""))for(;void 0!==o;)t=g(t,o.close,o.open),o=o.parent;const r=t.indexOf("\n");return-1!==r&&(t=function(e,t,o,n){let i=0,r="";do{const s="\r"===e[n-1];r+=e.slice(i,s?n-1:n)+t+(s?"\r\n":"\n")+o,i=n+1,n=e.indexOf("\n",i)}while(-1!==n);return r+=e.slice(i),r}(t,i,n,r)),n+t+i};function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function A(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,C(n.key),n)}}function E(e,t,o){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,o)}function B(e,t,o){return(t=C(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function C(e){var t=function(e,t){if("object"!=N(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!=N(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==N(t)?t:t+""}function R(e,t){return e.get(function(e,t,o){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:o;throw new TypeError("Private element is not present on this object")}(e,t))}Object.defineProperties(w.prototype,k),w(),w({level:p?p.level:0});var W=new WeakMap,I=new WeakMap,$=new WeakMap,G=new WeakMap,_=new WeakMap,D=new WeakMap,U=new WeakMap,F=new WeakMap,Y=new WeakMap,q=new WeakMap,V=new WeakMap,z=new WeakMap,H=new WeakMap,J=new WeakMap,K=new WeakMap,Q=new WeakMap,X=new WeakMap,Z=function(){return e=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new x;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),B(this,"chalk",void 0),B(this,"moduleName",""),B(this,"logColor","#00bfff"),B(this,"enableLogs",!0),B(this,"hideLogs",!1),E(this,W,"#ff00ff"),E(this,I,i(R(W,this),75)),E(this,$,"#9400d3"),E(this,G,i(R($,this),15)),E(this,_,i(R(G,this),15)),E(this,D,"#7cfc00"),E(this,U,i(R(D,this),15)),E(this,F,"#ffdead"),E(this,Y,i(R(F,this),15)),E(this,q,"#ff8c00"),E(this,V,i(R(q,this),15)),E(this,z,"#ff4500"),E(this,H,i(R(z,this),15)),E(this,J,"#ffffff"),E(this,K,i(R(J,this),15)),E(this,Q,"#8b0000"),E(this,X,i(R(Q,this),15)),B(this,"prefix",""),this.chalk=t,this.moduleName=this.constructor.name},t=[{key:"setLogPrefix",value:function(e){this.prefix=e}},{key:"getStartPrefix",value:function(){return this.prefix}},{key:"disable",value:function(){this.enableLogs=!1}},{key:"enable",value:function(){this.enableLogs=!0}},{key:"fancyLog",value:function(e,t,o,n,i){this.enableLogs&&console.log(this.chalk.hex(R(W,this))("".concat(this.getStartPrefix(),"[").concat(this.moduleName," INFO]: "))+this.chalk.hex(R(J,this))(e)+" "+this.chalk.hex(R(V,this))(t)+" "+this.chalk.hex(R(J,this))(o)+" "+this.chalk.hex(R(_,this))(n)+" "+this.chalk.hex(R(J,this))(i))}},{key:"log",value:function(){if(this.enableLogs&&!this.hideLogs){var e=i(this.logColor,15);console.log(this.chalk.hex(this.logColor)("".concat(this.getStartPrefix(),"[").concat(this.moduleName," LOG]: "))+this.chalk.hex(e).apply(void 0,arguments))}}},{key:"lightOrangeLog",value:function(){this.enableLogs&&(this.hideLogs||console.log(this.chalk.hex(R(V,this))("".concat(this.getStartPrefix(),"[").concat(this.moduleName," LOG]: "))+this.chalk.hex(R(J,this)).apply(void 0,arguments)))}},{key:"error",value:function(){this.enableLogs&&console.log(this.chalk.hex(R(z,this))("".concat(this.getStartPrefix(),"[").concat(this.moduleName," ERROR]: "))+this.chalk.hex(R(H,this)).apply(void 0,arguments))}},{key:"warn",value:function(){this.enableLogs&&console.log(this.chalk.hex(R(q,this))("".concat(this.getStartPrefix(),"[").concat(this.moduleName," WARN]: "))+this.chalk.hex(R(V,this)).apply(void 0,arguments))}},{key:"debug",value:function(){this.enableLogs&&(this.hideLogs||console.log(this.chalk.hex(R(F,this))("".concat(this.getStartPrefix(),"[").concat(this.moduleName," DEBUG]: "))+this.chalk.hex(R(Y,this)).apply(void 0,arguments)))}},{key:"success",value:function(){this.enableLogs&&(this.hideLogs||console.log(this.chalk.hex(R(D,this))("".concat(this.getStartPrefix(),"[").concat(this.moduleName," SUCCESS]: "))+this.chalk.hex(R(U,this)).apply(void 0,arguments)))}},{key:"fail",value:function(){this.enableLogs&&(this.hideLogs||console.log(this.chalk.hex(R(z,this))("".concat(this.getStartPrefix(),"[").concat(this.moduleName," FAIL]: "))+this.chalk.hex(R(H,this)).apply(void 0,arguments)))}},{key:"debugBright",value:function(){this.enableLogs&&(this.hideLogs||console.log(this.chalk.hex(R($,this))("".concat(this.getStartPrefix(),"[").concat(this.moduleName," DEBUG]: "))+this.chalk.hex(R(G,this)).apply(void 0,arguments)))}},{key:"important",value:function(){this.enableLogs&&console.log(this.chalk.hex(R(W,this))("".concat(this.getStartPrefix(),"[").concat(this.moduleName," IMPORTANT]: "))+this.chalk.hex(R(I,this)).apply(void 0,arguments))}},{key:"panic",value:function(){this.enableLogs&&console.log(this.chalk.hex(R(Q,this))("".concat(this.getStartPrefix(),"[").concat(this.moduleName," HELP PANIC]: "))+this.chalk.hex(R(X,this)).apply(void 0,arguments))}},{key:"info",value:function(){this.enableLogs&&console.log(this.chalk.hex(R(W,this))("".concat(this.getStartPrefix(),"[").concat(this.moduleName," INFO]: "))+this.chalk.hex(R(J,this)).apply(void 0,arguments))}},{key:"securityNotice",value:function(){this.enableLogs&&console.log(this.chalk.hex("#22d8e6")("".concat(this.getStartPrefix(),"[").concat(this.moduleName," SECURITY NOTICE]: "))+this.chalk.hex("#22e3e6").apply(void 0,arguments))}},{key:"traceLog",value:function(){this.enableLogs&&console.log(this.chalk.hex("#ffffff")("".concat(this.getStartPrefix(),"[").concat(this.moduleName," TRACE LOG]: "))+this.chalk.hex(R(K,this)).apply(void 0,arguments))}}],t&&A(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function ee(e){return ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(e)}function te(e,t,o){return t=ne(t),function(e,t){if(t&&("object"===ee(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,oe()?Reflect.construct(t,o||[],ne(e).constructor):t.apply(e,o))}function oe(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(oe=function(){return!!e})()}function ne(e){return ne=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ne(e)}function ie(e,t){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ie(e,t)}var re,se=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),te(this,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ie(e,t)}(t,Z),o=t,Object.defineProperty(o,"prototype",{writable:!1}),o;var o}();!function(e){e[e.NONE=0]="NONE",e[e.ERROR=1]="ERROR",e[e.WARN=2]="WARN",e[e.INFO=3]="INFO",e[e.DEBUG=4]="DEBUG",e[e.TRACE=5]="TRACE",e[e.ALL=6]="ALL"}(re||(re={}));var ae=t.q$,le=t.Vy,ce=t.$7,he=t.rE;export{ae as DebugLevel,le as Logger,ce as opnet,he as version};