"use strict";(self.webpackChunkUV=self.webpackChunkUV||[]).push([[1627],{1627:(n,e,t)=>{t.r(e),t.d(e,{ion_alert_controller:()=>i});var r=t(2085),o=t(1399),i=function(){function n(n){(0,r.r)(this,n)}return n.prototype.create=function(n){return(0,o.g)("ion-alert",n)},n.prototype.dismiss=function(n,e,t){return(0,o.h)(document,n,e,"ion-alert",t)},n.prototype.getTop=function(){return n=this,e=void 0,r=function(){return function(n,e){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(n,u)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(n){return[2,(0,o.j)(document,"ion-alert")]}))},new((t=void 0)||(t=Promise))((function(o,i){function u(n){try{c(r.next(n))}catch(n){i(n)}}function a(n){try{c(r.throw(n))}catch(n){i(n)}}function c(n){n.done?o(n.value):new t((function(e){e(n.value)})).then(u,a)}c((r=r.apply(n,e||[])).next())}));var n,e,t,r},n}()},1399:(n,e,t)=>{t.d(e,{B:()=>P,a:()=>l,b:()=>s,c:()=>p,d:()=>b,e:()=>w,f:()=>x,g:()=>v,h:()=>m,i:()=>A,j:()=>y,k:()=>f,p:()=>d,s:()=>S});var r=t(2085),o=function(n,e,t,r){return new(t||(t=Promise))((function(o,i){function u(n){try{c(r.next(n))}catch(n){i(n)}}function a(n){try{c(r.throw(n))}catch(n){i(n)}}function c(n){n.done?o(n.value):new t((function(e){e(n.value)})).then(u,a)}c((r=r.apply(n,e||[])).next())}))},i=function(n,e){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(n,u)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},u=void 0,a=0,c=function(n){return{create:function(e){return v(n,e)},dismiss:function(e,t,r){return m(document,e,t,n,r)},getTop:function(){return o(this,void 0,void 0,(function(){return i(this,(function(e){return[2,y(document,n)]}))}))}}},s=c("ion-alert"),l=c("ion-action-sheet"),f=c("ion-picker"),d=c("ion-popover"),p=function(n){var e=document;h(e);var t=a++;n.overlayIndex=t,n.hasAttribute("id")||(n.id="ion-overlay-"+t)},v=function(n,e){return customElements.whenDefined(n).then((function(){var t=document,r=t.createElement(n);return r.classList.add("overlay-hidden"),Object.assign(r,e),k(t).appendChild(r),r.componentOnReady()}))},h=function(n){0===a&&(a=1,n.addEventListener("focusin",(function(e){var t=y(n);if(t&&t.backdropDismiss&&!D(t,e.target)){var r=t.querySelector("input,button");r&&r.focus()}})),n.addEventListener("ionBackButton",(function(e){var t=y(n);t&&t.backdropDismiss&&e.detail.register(100,(function(){return t.dismiss(void 0,P)}))})),n.addEventListener("keyup",(function(e){if("Escape"===e.key){var t=y(n);t&&t.backdropDismiss&&t.dismiss(void 0,P)}})))},m=function(n,e,t,r,o){var i=y(n,r,o);return i?i.dismiss(e,t):Promise.reject("overlay does not exist")},y=function(n,e,t){var r=function(n,e){return void 0===e&&(e="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(n.querySelectorAll(e)).filter((function(n){return n.overlayIndex>0}))}(n,e);return void 0===t?r[r.length-1]:r.find((function(n){return n.id===t}))},b=function(n,e,t,a,c){return o(u,void 0,void 0,(function(){var o;return i(this,(function(i){switch(i.label){case 0:return n.presented?[2]:(n.presented=!0,n.willPresent.emit(),o=n.enterAnimation?n.enterAnimation:r.i.get(e,"ios"===n.mode?t:a),[4,g(n,o,n.el,c)]);case 1:return i.sent()&&n.didPresent.emit(),[2]}}))}))},w=function(n,e,t,a,c,s,l){return o(u,void 0,void 0,(function(){var o,u;return i(this,(function(i){switch(i.label){case 0:if(!n.presented)return[2,!1];n.presented=!1,i.label=1;case 1:return i.trys.push([1,3,,4]),n.willDismiss.emit({data:e,role:t}),o=n.leaveAnimation?n.leaveAnimation:r.i.get(a,"ios"===n.mode?c:s),[4,g(n,o,n.el,l)];case 2:return i.sent(),n.didDismiss.emit({data:e,role:t}),[3,4];case 3:return u=i.sent(),console.error(u),[3,4];case 4:return n.el.remove(),[2,!0]}}))}))},k=function(n){return n.querySelector("ion-app")||n.body},g=function(n,e,a,c){return o(u,void 0,void 0,(function(){var o,u,s,l,f;return i(this,(function(i){switch(i.label){case 0:if(n.animation)return n.animation.destroy(),n.animation=void 0,[2,!1];a.classList.remove("overlay-hidden"),o=a.shadowRoot||n.el,s=!0,i.label=1;case 1:return i.trys.push([1,4,,5]),[4,t.e(7879).then(t.bind(t,7879))];case 2:return[4,i.sent().create(e,o,c)];case 3:return u=i.sent(),[3,5];case 4:return i.sent(),(u=e(o,c)).fill("both"),s=!1,[3,5];case 5:return n.animation=u,n.animated&&r.i.getBoolean("animated",!0)||u.duration(0),n.keyboardClose&&u.beforeAddWrite((function(){var n=a.ownerDocument.activeElement;n&&n.matches("input, ion-input, ion-textarea")&&n.blur()})),[4,u.playAsync()];case 6:return l=i.sent(),f=void 0===l||u.hasCompleted,s&&u.destroy(),n.animation=void 0,[2,f]}}))}))},x=function(n,e){var t,r=new Promise((function(n){return t=n}));return E(n,e,(function(n){t(n.detail)})),r},E=function(n,e,t){var r=function(o){n.removeEventListener(e,r),t(o)};n.addEventListener(e,r)},A=function(n){return"cancel"===n||n===P},D=function(n,e){for(;e;){if(e===n)return!0;e=e.parentElement}return!1},L=function(n){return n()},S=function(n,e){if("function"==typeof n)return r.i.get("_zoneGate",L)((function(){try{return n(e)}catch(n){console.error(n)}}))},P="backdrop"}}]);