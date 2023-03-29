"use strict";(self.webpackChunkUV=self.webpackChunkUV||[]).push([[1114],{9292:(e,t,n)=>{n.d(t,{a:()=>o,b:()=>s,c:()=>a,d:()=>d,e:()=>b,f:()=>i,h:()=>r,i:()=>h,n:()=>u,p:()=>l,r:()=>c});var o=function(e){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)},r=function(e){return!!e.shadowRoot&&!!e.attachShadow},i=function(e){var t=e.closest("ion-item");return t?t.querySelector("ion-label"):null},c=function(e,t,n,o,i){if(e||r(t)){var c=t.querySelector("input.aux-input");c||((c=t.ownerDocument.createElement("input")).type="hidden",c.classList.add("aux-input"),t.appendChild(c)),c.disabled=i,c.name=n,c.value=o||""}},a=function(e,t,n){return Math.max(e,Math.min(t,n))},s=function(e,t){if(!e){var n="ASSERT: "+t;throw console.error(n),new Error(n)}},u=function(e){return e.timeStamp||Date.now()},l=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},h=function(e){var t="rtl"===document.dir;switch(e){case"start":return t;case"end":return!t;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}},d=function(e,t){var n=e._original||e;return{_original:e,emit:b(n.emit.bind(n),t)}},b=function(e,t){var n;return void 0===t&&(t=0),function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];clearTimeout(n),n=setTimeout.apply(void 0,[e,t].concat(o))}}},1114:(e,t,n)=>{n.r(t),n.d(t,{ion_checkbox:()=>c});var o=n(2085),r=n(9292),i=n(9114),c=function(){function e(e){var t=this;(0,o.r)(this,e),this.inputId="ion-cb-"+a++,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=function(){t.setFocus(),t.checked=!t.checked,t.indeterminate=!1},this.onFocus=function(){t.ionFocus.emit()},this.onBlur=function(){t.ionBlur.emit()},this.ionChange=(0,o.c)(this,"ionChange",7),this.ionFocus=(0,o.c)(this,"ionFocus",7),this.ionBlur=(0,o.c)(this,"ionBlur",7),this.ionStyle=(0,o.c)(this,"ionStyle",7)}return e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.disabledChanged=function(){this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})},e.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},e.prototype.render=function(){var e,t=this,n=this,c=n.inputId,a=n.indeterminate,s=n.disabled,u=n.checked,l=n.value,h=n.color,d=n.el,b=c+"-lbl",f=(0,o.f)(this),p=(0,r.f)(d);p&&(p.id=b),(0,r.r)(!0,d,this.name,u?l:"",s);var m=a?(0,o.h)("path",{d:"M6 12L18 12"}):(0,o.h)("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===f&&(m=a?(0,o.h)("path",{d:"M2 12H22"}):(0,o.h)("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),(0,o.h)(o.H,{onClick:this.onClick,role:"checkbox","aria-disabled":s?"true":null,"aria-checked":""+u,"aria-labelledby":b,class:Object.assign(Object.assign({},(0,i.c)(h)),(e={},e[f]=!0,e["in-item"]=(0,i.h)("ion-item",d),e["checkbox-checked"]=u,e["checkbox-disabled"]=s,e["checkbox-indeterminate"]=a,e.interactive=!0,e))},(0,o.h)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},m),(0,o.h)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:function(e){return t.buttonEl=e}}))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,o.d)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.51);--background:var(--ion-item-background,var(--ion-background-color,#fff));--transition:background 180ms cubic-bezier(0.4,0,0.2,1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30;stroke-width:3}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"},enumerable:!0,configurable:!0}),e}(),a=0},9114:(e,t,n)=>{n.d(t,{c:()=>r,g:()=>i,h:()=>o,o:()=>a});var o=function(e,t){return null!==t.closest(e)},r=function(e){var t;return"string"==typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0},i=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},c=/^[a-z][a-z0-9+\-.]*:/,a=function(e,t,n){return o=void 0,r=void 0,a=function(){var o;return function(e,t){var n,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((r=(r=c.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(r){return null!=e&&"#"!==e[0]&&!c.test(e)&&(o=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,o.push(e,n)]):[2,!1]}))},new((i=void 0)||(i=Promise))((function(e,t){function n(e){try{s(a.next(e))}catch(e){t(e)}}function c(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){t.done?e(t.value):new i((function(e){e(t.value)})).then(n,c)}s((a=a.apply(o,r||[])).next())}));var o,r,i,a}}}]);