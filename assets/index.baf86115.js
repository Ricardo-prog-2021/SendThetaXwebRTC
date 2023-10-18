const t_=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}};t_();var sl=function(n,e){return sl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},sl(n,e)};function Ce(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");sl(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var vs=function(){return vs=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},vs.apply(this,arguments)};function K(n,e,t,i){function r(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(l){try{c(i.next(l))}catch(h){s(h)}}function u(l){try{c(i.throw(l))}catch(h){s(h)}}function c(l){l.done?o(l.value):r(l.value).then(a,u)}c((i=i.apply(n,e||[])).next())})}function j(n,e){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(l){return u([c,l])}}function u(c){if(i)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(t=0)),t;)try{if(i=1,r&&(o=c[0]&2?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,r=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){t.label=c[1];break}if(c[0]===6&&t.label<o[1]){t.label=o[1],o=c;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(c);break}o[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(n,t)}catch(l){c=[6,l],r=0}finally{i=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function pc(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function aa(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,o=[],s;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(a){s={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(s)throw s.error}}return o}function yt(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,o;i<r;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return n.concat(o||Array.prototype.slice.call(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vm=function(n){for(var e=[],t=0,i=0;i<n.length;i++){var r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},n_=function(n){for(var e=[],t=0,i=0;t<n.length;){var r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){var o=n[t++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){var o=n[t++],s=n[t++],a=n[t++],u=((r&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{var o=n[t++],s=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|s&63)}}return e.join("")},i_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray:function(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[],r=0;r<n.length;r+=3){var o=n[r],s=r+1<n.length,a=s?n[r+1]:0,u=r+2<n.length,c=u?n[r+2]:0,l=o>>2,h=(o&3)<<4|a>>4,f=(a&15)<<2|c>>6,p=c&63;u||(p=64,s||(f=64)),i.push(t[l],t[h],t[f],t[p])}return i.join("")},encodeString:function(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vm(n),e)},decodeString:function(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):n_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray:function(n,e){this.init_();for(var t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[],r=0;r<n.length;){var o=t[n.charAt(r++)],s=r<n.length,a=s?t[n.charAt(r)]:0;++r;var u=r<n.length,c=u?t[n.charAt(r)]:64;++r;var l=r<n.length,h=l?t[n.charAt(r)]:64;if(++r,o==null||a==null||c==null||h==null)throw Error();var f=o<<2|a>>4;if(i.push(f),c!==64){var p=a<<4&240|c>>2;if(i.push(p),h!==64){var g=c<<6&192|h;i.push(g)}}}return i},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},r_=function(n){var e=vm(n);return i_.encodeByteArray(e,!0)},Ef=function(n){return r_(n).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(n){return ys(void 0,n)}function ys(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:var t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(var i in e)!e.hasOwnProperty(i)||!s_(i)||(n[i]=ys(n[i],e[i]));return n}function s_(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var a_=function(){function n(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(t,i){e.resolve=t,e.reject=i})}return n.prototype.wrapCallback=function(e){var t=this;return function(i,r){i?t.reject(i):t.resolve(r),typeof e=="function"&&(t.promise.catch(function(){}),e.length===1?e(i):e(i,r))}},n}();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var s=vs({iss:"https://securetoken.google.com/"+i,aud:i,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ef(JSON.stringify(t)),Ef(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c_(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xr())}function ym(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function l_(){return typeof self=="object"&&self.self===self}function h_(){var n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function f_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function d_(){return xr().indexOf("Electron/")>=0}function p_(){var n=xr();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function m_(){return xr().indexOf("MSAppHost/")>=0}function g_(){return!ym()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var v_="FirebaseError",y_=function(n){Ce(e,n);function e(t,i,r){var o=n.call(this,i)||this;return o.code=t,o.customData=r,o.name=v_,Object.setPrototypeOf(o,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,ql.prototype.create),o}return e}(Error),ql=function(){function n(e,t,i){this.service=e,this.serviceName=t,this.errors=i}return n.prototype.create=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var r=t[0]||{},o=this.service+"/"+e,s=this.errors[e],a=s?__(s,r):"Error",u=this.serviceName+": "+a+" ("+o+").",c=new y_(o,u,r);return c},n}();function __(n,e){return n.replace(E_,function(t,i){var r=e[i];return r!=null?String(r):"<"+i+"?>"})}var E_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function S_(n,e){var t=new x_(n,e);return t.subscribe.bind(t)}var x_=function(){function n(e,t){var i=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(i)}).catch(function(r){i.error(r)})}return n.prototype.next=function(e){this.forEachObserver(function(t){t.next(e)})},n.prototype.error=function(e){this.forEachObserver(function(t){t.error(e)}),this.close(e)},n.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},n.prototype.subscribe=function(e,t,i){var r=this,o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");b_(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=mc),o.error===void 0&&(o.error=mc),o.complete===void 0&&(o.complete=mc);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{r.finalError?o.error(r.finalError):o.complete()}catch{}}),this.observers.push(o),s},n.prototype.unsubscribeOne=function(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))},n.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},n.prototype.sendOne=function(e,t){var i=this;this.task.then(function(){if(i.observers!==void 0&&i.observers[e]!==void 0)try{t(i.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})},n.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},n}();function b_(n,e){if(typeof n!="object"||n===null)return!1;for(var t=0,i=e;t<i.length;t++){var r=i[t];if(r in n&&typeof n[r]=="function")return!0}return!1}function mc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n){return n&&n._delegate?n._delegate:n}var Cu=function(){function n(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return n.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},n.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},n.prototype.setServiceProps=function(e){return this.serviceProps=e,this},n.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},n}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T_=function(){function n(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return n.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var i=new a_;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise},n.prototype.getImmediate=function(e){var t,i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error("Service "+this.name+" is not available")}},n.prototype.getComponent=function(){return this.component},n.prototype.setComponent=function(e){var t,i;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(w_(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}try{for(var r=pc(this.instancesDeferred.entries()),o=r.next();!o.done;o=r.next()){var s=aa(o.value,2),a=s[0],u=s[1],c=this.normalizeInstanceIdentifier(a);try{var l=this.getOrInitializeService({instanceIdentifier:c});u.resolve(l)}catch{}}}catch(h){t={error:h}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}}},n.prototype.clearInstance=function(e){e===void 0&&(e=ur),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},n.prototype.delete=function(){return K(this,void 0,void 0,function(){var e;return j(this,function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(yt(yt([],aa(e.filter(function(i){return"INTERNAL"in i}).map(function(i){return i.INTERNAL.delete()}))),aa(e.filter(function(i){return"_delete"in i}).map(function(i){return i._delete()}))))];case 1:return t.sent(),[2]}})})},n.prototype.isComponentSet=function(){return this.component!=null},n.prototype.isInitialized=function(e){return e===void 0&&(e=ur),this.instances.has(e)},n.prototype.getOptions=function(e){return e===void 0&&(e=ur),this.instancesOptions.get(e)||{}},n.prototype.initialize=function(e){var t,i;e===void 0&&(e={});var r=e.options,o=r===void 0?{}:r,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var u=pc(this.instancesDeferred.entries()),c=u.next();!c.done;c=u.next()){var l=aa(c.value,2),h=l[0],f=l[1],p=this.normalizeInstanceIdentifier(h);s===p&&f.resolve(a)}}catch(g){t={error:g}}finally{try{c&&!c.done&&(i=u.return)&&i.call(u)}finally{if(t)throw t.error}}return a},n.prototype.onInit=function(e,t){var i,r=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);var s=this.instances.get(r);return s&&e(s,r),function(){o.delete(e)}},n.prototype.invokeOnInitCallbacks=function(e,t){var i,r,o=this.onInitCallbacks.get(t);if(!!o)try{for(var s=pc(o),a=s.next();!a.done;a=s.next()){var u=a.value;try{u(e,t)}catch{}}}catch(c){i={error:c}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}},n.prototype.getOrInitializeService=function(e){var t=e.instanceIdentifier,i=e.options,r=i===void 0?{}:i,o=this.instances.get(t);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:M_(t),options:r}),this.instances.set(t,o),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(o,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,o)}catch{}return o||null},n.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=ur),this.component?this.component.multipleInstances?e:ur:e},n.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},n}();function M_(n){return n===ur?void 0:n}function w_(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A_=function(){function n(e){this.name=e,this.providers=new Map}return n.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},n.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},n.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new T_(e,this);return this.providers.set(e,t),t},n.prototype.getProviders=function(){return Array.from(this.providers.values())},n}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function zn(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var i=Array(n),r=0,e=0;e<t;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,r++)i[r]=o[s];return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ir,jl=[],rt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(rt||(rt={}));var _m={debug:rt.DEBUG,verbose:rt.VERBOSE,info:rt.INFO,warn:rt.WARN,error:rt.ERROR,silent:rt.SILENT},R_=rt.INFO,C_=(ir={},ir[rt.DEBUG]="log",ir[rt.VERBOSE]="log",ir[rt.INFO]="info",ir[rt.WARN]="warn",ir[rt.ERROR]="error",ir),I_=function(n,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];if(!(e<n.logLevel)){var r=new Date().toISOString(),o=C_[e];if(o)console[o].apply(console,zn(["["+r+"]  "+n.name+":"],t));else throw new Error("Attempted to log a message with an invalid logType (value: "+e+")")}},Em=function(){function n(e){this.name=e,this._logLevel=R_,this._logHandler=I_,this._userLogHandler=null,jl.push(this)}return Object.defineProperty(n.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in rt))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),n.prototype.setLogLevel=function(e){this._logLevel=typeof e=="string"?_m[e]:e},Object.defineProperty(n.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),n.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,zn([this,rt.DEBUG],e)),this._logHandler.apply(this,zn([this,rt.DEBUG],e))},n.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,zn([this,rt.VERBOSE],e)),this._logHandler.apply(this,zn([this,rt.VERBOSE],e))},n.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,zn([this,rt.INFO],e)),this._logHandler.apply(this,zn([this,rt.INFO],e))},n.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,zn([this,rt.WARN],e)),this._logHandler.apply(this,zn([this,rt.WARN],e))},n.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,zn([this,rt.ERROR],e)),this._logHandler.apply(this,zn([this,rt.ERROR],e))},n}();function P_(n){jl.forEach(function(e){e.setLogLevel(n)})}function D_(n,e){for(var t=function(s){var a=null;e&&e.level&&(a=_m[e.level]),n===null?s.userLogHandler=null:s.userLogHandler=function(u,c){for(var l=[],h=2;h<arguments.length;h++)l[h-2]=arguments[h];var f=l.map(function(p){if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(function(p){return p}).join(" ");c>=(a!=null?a:u.logLevel)&&n({level:rt[c].toLowerCase(),message:f,args:l,type:u.name})}},i=0,r=jl;i<r.length;i++){var o=r[i];t(o)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ti,L_=(Ti={},Ti["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",Ti["bad-app-name"]="Illegal App name: '{$appName}",Ti["duplicate-app"]="Firebase App named '{$appName}' already exists",Ti["app-deleted"]="Firebase App named '{$appName}' already deleted",Ti["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",Ti["invalid-log-argument"]="First argument to `onLog` must be null or a function.",Ti),uo=new ql("app","Firebase",L_),Sm="@firebase/app",N_="0.6.30",U_="@firebase/analytics",O_="@firebase/app-check",F_="@firebase/auth",B_="@firebase/database",k_="@firebase/functions",V_="@firebase/installations",z_="@firebase/messaging",G_="@firebase/performance",H_="@firebase/remote-config",W_="@firebase/storage",q_="@firebase/firestore",j_="firebase-wrapper";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt,Ya="[DEFAULT]",X_=(Kt={},Kt[Sm]="fire-core",Kt[U_]="fire-analytics",Kt[O_]="fire-app-check",Kt[F_]="fire-auth",Kt[B_]="fire-rtdb",Kt[k_]="fire-fn",Kt[V_]="fire-iid",Kt[z_]="fire-fcm",Kt[G_]="fire-perf",Kt[H_]="fire-rc",Kt[W_]="fire-gcs",Kt[q_]="fire-fst",Kt["fire-js"]="fire-js",Kt[j_]="fire-js-all",Kt);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var So=new Em("@firebase/app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Va=function(){function n(e,t,i){var r=this;this.firebase_=i,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=o_(e),this.container=new A_(t.name),this._addComponent(new Cu("app",function(){return r},"PUBLIC")),this.firebase_.INTERNAL.components.forEach(function(o){return r._addComponent(o)})}return Object.defineProperty(n.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),n.prototype.delete=function(){var e=this;return new Promise(function(t){e.checkDestroyed_(),t()}).then(function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map(function(t){return t.delete()}))}).then(function(){e.isDeleted_=!0})},n.prototype._getService=function(e,t){var i;t===void 0&&(t=Ya),this.checkDestroyed_();var r=this.container.getProvider(e);return!r.isInitialized()&&((i=r.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:t})},n.prototype._removeServiceInstance=function(e,t){t===void 0&&(t=Ya),this.container.getProvider(e).clearInstance(t)},n.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){So.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},n.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},n.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},n.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw uo.create("app-deleted",{appName:this.name_})},n}();Va.prototype.name&&Va.prototype.options||Va.prototype.delete||console.log("dc");var K_="8.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(n){var e={},t=new Map,i={__esModule:!0,initializeApp:s,app:o,registerVersion:c,setLogLevel:P_,onLog:l,apps:null,SDK_VERSION:K_,INTERNAL:{registerComponent:u,removeApp:r,components:t,useAsService:h}};i.default=i,Object.defineProperty(i,"apps",{get:a});function r(f){delete e[f]}function o(f){if(f=f||Ya,!Sf(e,f))throw uo.create("no-app",{appName:f});return e[f]}o.App=n;function s(f,p){if(p===void 0&&(p={}),typeof p!="object"||p===null){var g=p;p={name:g}}var v=p;v.name===void 0&&(v.name=Ya);var m=v.name;if(typeof m!="string"||!m)throw uo.create("bad-app-name",{appName:String(m)});if(Sf(e,m))throw uo.create("duplicate-app",{appName:m});var d=new n(f,v,i);return e[m]=d,d}function a(){return Object.keys(e).map(function(f){return e[f]})}function u(f){var p=f.name;if(t.has(p))return So.debug("There were multiple attempts to register component "+p+"."),f.type==="PUBLIC"?i[p]:null;if(t.set(p,f),f.type==="PUBLIC"){var g=function(S){if(S===void 0&&(S=o()),typeof S[p]!="function")throw uo.create("invalid-app-argument",{appName:p});return S[p]()};f.serviceProps!==void 0&&ys(g,f.serviceProps),i[p]=g,n.prototype[p]=function(){for(var S=[],y=0;y<arguments.length;y++)S[y]=arguments[y];var x=this._getService.bind(this,p);return x.apply(this,f.multipleInstances?S:[])}}for(var v=0,m=Object.keys(e);v<m.length;v++){var d=m[v];e[d]._addComponent(f)}return f.type==="PUBLIC"?i[p]:null}function c(f,p,g){var v,m=(v=X_[f])!==null&&v!==void 0?v:f;g&&(m+="-"+g);var d=m.match(/\s|\//),S=p.match(/\s|\//);if(d||S){var y=['Unable to register library "'+m+'" with version "'+p+'":'];d&&y.push('library name "'+m+'" contains illegal characters (whitespace or "/")'),d&&S&&y.push("and"),S&&y.push('version name "'+p+'" contains illegal characters (whitespace or "/")'),So.warn(y.join(" "));return}u(new Cu(m+"-version",function(){return{library:m,version:p}},"VERSION"))}function l(f,p){if(f!==null&&typeof f!="function")throw uo.create("invalid-log-argument");D_(f,p)}function h(f,p){if(p==="serverAuth")return null;var g=p;return g}return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(){var n=Y_(Va);n.INTERNAL=vs(vs({},n.INTERNAL),{createFirebaseNamespace:xm,extendNamespace:e,createSubscribe:S_,ErrorFactory:ql,deepExtend:ys});function e(t){ys(n,t)}return n}var Xl=xm();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $_=function(){function n(e){this.container=e}return n.prototype.getPlatformInfoString=function(){var e=this.container.getProviders();return e.map(function(t){if(Q_(t)){var i=t.getImmediate();return i.library+"/"+i.version}else return null}).filter(function(t){return t}).join(" ")},n}();function Q_(n){var e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(n,e){n.INTERNAL.registerComponent(new Cu("platform-logger",function(t){return new $_(t)},"PRIVATE")),n.registerVersion(Sm,N_,e),n.registerVersion("fire-js","")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(l_()&&self.firebase!==void 0){So.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);var xf=self.firebase.SDK_VERSION;xf&&xf.indexOf("LITE")>=0&&So.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}var J_=Xl.initializeApp;Xl.initializeApp=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return ym()&&So.warn(`
      Warning: This is a browser-targeted Firebase bundle but it appears it is being
      run in a Node environment.  If running in a Node environment, make sure you
      are using the bundle specified by the "main" field in package.json.
      
      If you are using Webpack, you can specify "main" as the first item in
      "resolve.mainFields":
      https://webpack.js.org/configuration/resolve/#resolvemainfields
      
      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"
      as the first item in "mainFields", e.g. ['main', 'module'].
      https://github.com/rollup/@rollup/plugin-node-resolve
      `),J_.apply(void 0,n)};var br=Xl;Z_(br);var e0="firebase",bm="8.10.1";/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */br.registerVersion(e0,bm,"app");br.SDK_VERSION=bm;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var al=function(n,e){return al=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},al(n,e)};function t0(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");al(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Tm(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var n0=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},_e,Kl=Kl||{},ze=n0||self;function $a(){}function ul(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Bs(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function i0(n){return Object.prototype.hasOwnProperty.call(n,gc)&&n[gc]||(n[gc]=++r0)}var gc="closure_uid_"+(1e9*Math.random()>>>0),r0=0;function o0(n,e,t){return n.call.apply(n.bind,arguments)}function s0(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function Wt(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Wt=o0:Wt=s0,Wt.apply(null,arguments)}function ua(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function Xt(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(i,r,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return e.prototype[r].apply(i,s)}}function Yi(){this.s=this.s,this.o=this.o}var a0=0;Yi.prototype.s=!1;Yi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),a0!=0)&&i0(this)};Yi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var Mm=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(var t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},wm=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){for(var i=n.length,r=typeof n=="string"?n.split(""):n,o=0;o<i;o++)o in r&&e.call(t,r[o],o,n)};function u0(n){e:{for(var e=J0,t=n.length,i=typeof n=="string"?n.split(""):n,r=0;r<t;r++)if(r in i&&e.call(void 0,i[r],r,n)){e=r;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function bf(n){return Array.prototype.concat.apply([],arguments)}function Yl(n){var e=n.length;if(0<e){for(var t=Array(e),i=0;i<e;i++)t[i]=n[i];return t}return[]}function Qa(n){return/^[\s\xa0]*$/.test(n)}var Tf=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function hn(n,e){return n.indexOf(e)!=-1}function vc(n,e){return n<e?-1:n>e?1:0}var fn;e:{var Mf=ze.navigator;if(Mf){var wf=Mf.userAgent;if(wf){fn=wf;break e}}fn=""}function $l(n,e,t){for(var i in n)e.call(t,n[i],i,n)}function Am(n){var e={};for(var t in n)e[t]=n[t];return e}var Af="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rm(n,e){for(var t,i,r=1;r<arguments.length;r++){i=arguments[r];for(t in i)n[t]=i[t];for(var o=0;o<Af.length;o++)t=Af[o],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function Ql(n){return Ql[" "](n),n}Ql[" "]=$a;function c0(n){var e=f0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var l0=hn(fn,"Opera"),xo=hn(fn,"Trident")||hn(fn,"MSIE"),Cm=hn(fn,"Edge"),cl=Cm||xo,Im=hn(fn,"Gecko")&&!(hn(fn.toLowerCase(),"webkit")&&!hn(fn,"Edge"))&&!(hn(fn,"Trident")||hn(fn,"MSIE"))&&!hn(fn,"Edge"),h0=hn(fn.toLowerCase(),"webkit")&&!hn(fn,"Edge");function Pm(){var n=ze.document;return n?n.documentMode:void 0}var Za;e:{var yc="",_c=function(){var n=fn;if(Im)return/rv:([^\);]+)(\)|;)/.exec(n);if(Cm)return/Edge\/([\d\.]+)/.exec(n);if(xo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(h0)return/WebKit\/(\S+)/.exec(n);if(l0)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(_c&&(yc=_c?_c[1]:""),xo){var Ec=Pm();if(Ec!=null&&Ec>parseFloat(yc)){Za=String(Ec);break e}}Za=yc}var f0={};function d0(){return c0(function(){for(var n=0,e=Tf(String(Za)).split("."),t=Tf("9").split("."),i=Math.max(e.length,t.length),r=0;n==0&&r<i;r++){var o=e[r]||"",s=t[r]||"";do{if(o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o[0].length==0&&s[0].length==0)break;n=vc(o[1].length==0?0:parseInt(o[1],10),s[1].length==0?0:parseInt(s[1],10))||vc(o[2].length==0,s[2].length==0)||vc(o[2],s[2]),o=o[3],s=s[3]}while(n==0)}return 0<=n})}var ll;if(ze.document&&xo){var Rf=Pm();ll=Rf||parseInt(Za,10)||void 0}else ll=void 0;var p0=ll,m0=function(){if(!ze.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{ze.addEventListener("test",$a,e),ze.removeEventListener("test",$a,e)}catch{}return n}();function tn(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}tn.prototype.h=function(){this.defaultPrevented=!0};function _s(n,e){if(tn.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Im){e:{try{Ql(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:g0[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&_s.Z.h.call(this)}}Xt(_s,tn);var g0={2:"touch",3:"pen",4:"mouse"};_s.prototype.h=function(){_s.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var ks="closure_listenable_"+(1e6*Math.random()|0),v0=0;function y0(n,e,t,i,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.ia=r,this.key=++v0,this.ca=this.fa=!1}function Iu(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function Pu(n){this.src=n,this.g={},this.h=0}Pu.prototype.add=function(n,e,t,i,r){var o=n.toString();n=this.g[o],n||(n=this.g[o]=[],this.h++);var s=fl(n,e,i,r);return-1<s?(e=n[s],t||(e.fa=!1)):(e=new y0(e,this.src,o,!!i,r),e.fa=t,n.push(e)),e};function hl(n,e){var t=e.type;if(t in n.g){var i=n.g[t],r=Mm(i,e),o;(o=0<=r)&&Array.prototype.splice.call(i,r,1),o&&(Iu(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function fl(n,e,t,i){for(var r=0;r<n.length;++r){var o=n[r];if(!o.ca&&o.listener==e&&o.capture==!!t&&o.ia==i)return r}return-1}var Zl="closure_lm_"+(1e6*Math.random()|0),Sc={};function Dm(n,e,t,i,r){if(i&&i.once)return Nm(n,e,t,i,r);if(Array.isArray(e)){for(var o=0;o<e.length;o++)Dm(n,e[o],t,i,r);return null}return t=th(t),n&&n[ks]?n.N(e,t,Bs(i)?!!i.capture:!!i,r):Lm(n,e,t,!1,i,r)}function Lm(n,e,t,i,r,o){if(!e)throw Error("Invalid event type");var s=Bs(r)?!!r.capture:!!r,a=eh(n);if(a||(n[Zl]=a=new Pu(n)),t=a.add(e,t,i,s,o),t.proxy)return t;if(i=_0(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)m0||(r=s),r===void 0&&(r=!1),n.addEventListener(e.toString(),i,r);else if(n.attachEvent)n.attachEvent(Om(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function _0(){function n(t){return e.call(n.src,n.listener,t)}var e=E0;return n}function Nm(n,e,t,i,r){if(Array.isArray(e)){for(var o=0;o<e.length;o++)Nm(n,e[o],t,i,r);return null}return t=th(t),n&&n[ks]?n.O(e,t,Bs(i)?!!i.capture:!!i,r):Lm(n,e,t,!0,i,r)}function Um(n,e,t,i,r){if(Array.isArray(e))for(var o=0;o<e.length;o++)Um(n,e[o],t,i,r);else i=Bs(i)?!!i.capture:!!i,t=th(t),n&&n[ks]?(n=n.i,e=String(e).toString(),e in n.g&&(o=n.g[e],t=fl(o,t,i,r),-1<t&&(Iu(o[t]),Array.prototype.splice.call(o,t,1),o.length==0&&(delete n.g[e],n.h--)))):n&&(n=eh(n))&&(e=n.g[e.toString()],n=-1,e&&(n=fl(e,t,i,r)),(t=-1<n?e[n]:null)&&Jl(t))}function Jl(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[ks])hl(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(Om(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=eh(e))?(hl(t,n),t.h==0&&(t.src=null,e[Zl]=null)):Iu(n)}}}function Om(n){return n in Sc?Sc[n]:Sc[n]="on"+n}function E0(n,e){if(n.ca)n=!0;else{e=new _s(e,this);var t=n.listener,i=n.ia||n.src;n.fa&&Jl(n),n=t.call(i,e)}return n}function eh(n){return n=n[Zl],n instanceof Pu?n:null}var xc="__closure_events_fn_"+(1e9*Math.random()>>>0);function th(n){return typeof n=="function"?n:(n[xc]||(n[xc]=function(e){return n.handleEvent(e)}),n[xc])}function kt(){Yi.call(this),this.i=new Pu(this),this.P=this,this.I=null}Xt(kt,Yi);kt.prototype[ks]=!0;kt.prototype.removeEventListener=function(n,e,t,i){Um(this,n,e,t,i)};function qt(n,e){var t,i=n.I;if(i)for(t=[];i;i=i.I)t.push(i);if(n=n.P,i=e.type||e,typeof e=="string")e=new tn(e,n);else if(e instanceof tn)e.target=e.target||n;else{var r=e;e=new tn(i,n),Rm(e,r)}if(r=!0,t)for(var o=t.length-1;0<=o;o--){var s=e.g=t[o];r=ca(s,i,!0,e)&&r}if(s=e.g=n,r=ca(s,i,!0,e)&&r,r=ca(s,i,!1,e)&&r,t)for(o=0;o<t.length;o++)s=e.g=t[o],r=ca(s,i,!1,e)&&r}kt.prototype.M=function(){if(kt.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)Iu(t[i]);delete n.g[e],n.h--}}this.I=null};kt.prototype.N=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};kt.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function ca(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ca&&s.capture==t){var a=s.listener,u=s.ia||s.src;s.fa&&hl(n.i,s),r=a.call(u,i)!==!1&&r}}return r&&!i.defaultPrevented}var nh=ze.JSON.stringify;function S0(){var n=Bm,e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}var x0=function(){function n(){this.h=this.g=null}return n.prototype.add=function(e,t){var i=Fm.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i},n}(),Fm=new(function(){function n(e,t){this.i=e,this.j=t,this.h=0,this.g=null}return n.prototype.get=function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e},n}())(function(){return new b0},function(n){return n.reset()}),b0=function(){function n(){this.next=this.g=this.h=null}return n.prototype.set=function(e,t){this.h=e,this.g=t,this.next=null},n.prototype.reset=function(){this.next=this.g=this.h=null},n}();function T0(n){ze.setTimeout(function(){throw n},0)}function ih(n,e){dl||M0(),pl||(dl(),pl=!0),Bm.add(n,e)}var dl;function M0(){var n=ze.Promise.resolve(void 0);dl=function(){n.then(w0)}}var pl=!1,Bm=new x0;function w0(){for(var n;n=S0();){try{n.h.call(n.g)}catch(t){T0(t)}var e=Fm;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}pl=!1}function Du(n,e){kt.call(this),this.h=n||1,this.g=e||ze,this.j=Wt(this.kb,this),this.l=Date.now()}Xt(Du,kt);_e=Du.prototype;_e.da=!1;_e.S=null;_e.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),qt(this,"tick"),this.da&&(rh(this),this.start()))}};_e.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rh(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}_e.M=function(){Du.Z.M.call(this),rh(this),delete this.g};function oh(n,e,t){if(typeof n=="function")t&&(n=Wt(n,t));else if(n&&typeof n.handleEvent=="function")n=Wt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ze.setTimeout(n,e||0)}function km(n){n.g=oh(function(){n.g=null,n.i&&(n.i=!1,km(n))},n.j);var e=n.h;n.h=null,n.m.apply(null,e)}var A0=function(n){t0(e,n);function e(t,i){var r=n.call(this)||this;return r.m=t,r.j=i,r.h=null,r.i=!1,r.g=null,r}return e.prototype.l=function(t){this.h=arguments,this.g?this.i=!0:km(this)},e.prototype.M=function(){n.prototype.M.call(this),this.g&&(ze.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(Yi);function Es(n){Yi.call(this),this.h=n,this.g={}}Xt(Es,Yi);var Cf=[];function Vm(n,e,t,i){Array.isArray(t)||(t&&(Cf[0]=t.toString()),t=Cf);for(var r=0;r<t.length;r++){var o=Dm(e,t[r],i||n.handleEvent,!1,n.h||n);if(!o)break;n.g[o.key]=o}}function zm(n){$l(n.g,function(e,t){this.g.hasOwnProperty(t)&&Jl(e)},n),n.g={}}Es.prototype.M=function(){Es.Z.M.call(this),zm(this)};Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Lu(){this.g=!0}Lu.prototype.Aa=function(){this.g=!1};function R0(n,e,t,i,r,o){n.info(function(){if(n.g)if(o)for(var s="",a=o.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");s=2<=h.length&&h[1]=="type"?s+(l+"="+c+"&"):s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+t+`
`+s})}function C0(n,e,t,i,r,o,s){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+t+`
`+o+" "+s})}function po(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+P0(n,t)+(i?" "+i:"")})}function I0(n,e){n.info(function(){return"TIMEOUT: "+e})}Lu.prototype.info=function(){};function P0(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var o=r[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<r.length;s++)r[s]=""}}}}return nh(t)}catch{return e}}var Lr={},If=null;function Nu(){return If=If||new kt}Lr.Ma="serverreachability";function Gm(n){tn.call(this,Lr.Ma,n)}Xt(Gm,tn);function Ss(n){var e=Nu();qt(e,new Gm(e))}Lr.STAT_EVENT="statevent";function Hm(n,e){tn.call(this,Lr.STAT_EVENT,n),this.stat=e}Xt(Hm,tn);function dn(n){var e=Nu();qt(e,new Hm(e,n))}Lr.Na="timingevent";function Wm(n,e){tn.call(this,Lr.Na,n),this.size=e}Xt(Wm,tn);function Vs(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return ze.setTimeout(function(){n()},e)}var Uu={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},qm={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function sh(){}sh.prototype.h=null;function Pf(n){return n.h||(n.h=n.i())}function jm(){}var zs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ah(){tn.call(this,"d")}Xt(ah,tn);function uh(){tn.call(this,"c")}Xt(uh,tn);var ml;function Ou(){}Xt(Ou,sh);Ou.prototype.g=function(){return new XMLHttpRequest};Ou.prototype.i=function(){return{}};ml=new Ou;function Gs(n,e,t,i){this.l=n,this.j=e,this.m=t,this.X=i||1,this.V=new Es(this),this.P=D0,n=cl?125:void 0,this.W=new Du(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Xm}function Xm(){this.i=null,this.g="",this.h=!1}var D0=45e3,gl={},Ja={};_e=Gs.prototype;_e.setTimeout=function(n){this.P=n};function vl(n,e,t){n.K=1,n.v=Bu(Si(e)),n.s=t,n.U=!0,Km(n,null)}function Km(n,e){n.F=Date.now(),Hs(n),n.A=Si(n.v);var t=n.A,i=n.X;Array.isArray(i)||(i=[String(i)]),tg(t.h,"t",i),n.C=0,t=n.l.H,n.h=new Xm,n.g=Sg(n.l,t?e:null,!n.s),0<n.O&&(n.L=new A0(Wt(n.Ia,n,n.g),n.O)),Vm(n.V,n.g,"readystatechange",n.gb),e=n.H?Am(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),Ss(),R0(n.j,n.u,n.A,n.m,n.X,n.s)}_e.gb=function(n){n=n.target;var e=this.L;e&&pi(n)==3?e.l():this.Ia(n)};_e.Ia=function(n){try{if(n==this.g)e:{var e=pi(this.g),t=this.g.Da(),i=this.g.ba();if(!(3>e)&&(e!=3||cl||this.g&&(this.h.h||this.g.ga()||Uf(this.g)))){this.I||e!=4||t==7||(t==8||0>=i?Ss(3):Ss(2)),Fu(this);var r=this.g.ba();this.N=r;t:if(Ym(this)){var o=Uf(this.g);n="";var s=o.length,a=pi(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){fr(this),cs(this);var u="";break t}this.h.i=new ze.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,n+=this.h.i.decode(o[t],{stream:a&&t==s-1});o.splice(0,s),this.h.g+=n,this.C=0,u=this.h.g}else u=this.g.ga();if(this.i=r==200,C0(this.j,this.u,this.A,this.m,this.X,e,r),this.i){if(this.$&&!this.J){t:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qa(c)){var h=c;break t}}h=null}if(r=h)po(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,yl(this,r);else{this.i=!1,this.o=3,dn(12),fr(this),cs(this);break e}}this.U?($m(this,e,u),cl&&this.i&&e==3&&(Vm(this.V,this.W,"tick",this.fb),this.W.start())):(po(this.j,this.m,u,null),yl(this,u)),e==4&&fr(this),this.i&&!this.I&&(e==4?vg(this.l,this):(this.i=!1,Hs(this)))}else r==400&&0<u.indexOf("Unknown SID")?(this.o=3,dn(12)):(this.o=0,dn(13)),fr(this),cs(this)}}}catch{}finally{}};function Ym(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function $m(n,e,t){for(var i=!0,r;!n.I&&n.C<t.length;)if(r=L0(n,t),r==Ja){e==4&&(n.o=4,dn(14),i=!1),po(n.j,n.m,null,"[Incomplete Response]");break}else if(r==gl){n.o=4,dn(15),po(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else po(n.j,n.m,r,null),yl(n,r);Ym(n)&&r!=Ja&&r!=gl&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,dn(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),vh(e),e.L=!0,dn(11))):(po(n.j,n.m,t,"[Invalid Chunked Response]"),fr(n),cs(n))}_e.fb=function(){if(this.g){var n=pi(this.g),e=this.g.ga();this.C<e.length&&(Fu(this),$m(this,n,e),this.i&&n!=4&&Hs(this))}};function L0(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?Ja:(t=Number(e.substring(t,i)),isNaN(t)?gl:(i+=1,i+t>e.length?Ja:(e=e.substr(i,t),n.C=i+t,e)))}_e.cancel=function(){this.I=!0,fr(this)};function Hs(n){n.Y=Date.now()+n.P,Qm(n,n.P)}function Qm(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Vs(Wt(n.eb,n),e)}function Fu(n){n.B&&(ze.clearTimeout(n.B),n.B=null)}_e.eb=function(){this.B=null;var n=Date.now();0<=n-this.Y?(I0(this.j,this.A),this.K!=2&&(Ss(),dn(17)),fr(this),this.o=2,cs(this)):Qm(this,this.Y-n)};function cs(n){n.l.G==0||n.I||vg(n.l,n)}function fr(n){Fu(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,rh(n.W),zm(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function yl(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||_l(t.i,n))){if(t.I=n.N,!n.J&&_l(t.i,n)&&t.G==3){try{var i=t.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)iu(t),zu(t);else break e;gh(t),dn(18)}}else t.ta=r[1],0<t.ta-t.U&&37500>r[2]&&t.N&&t.A==0&&!t.v&&(t.v=Vs(Wt(t.ab,t),6e3));if(1>=rg(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else dr(t,11)}else if((n.J||t.g==n)&&iu(t),!Qa(e))for(r=t.Ca.g.parse(e),e=0;e<r.length;e++){var o=r[e];if(t.U=o[0],o=o[1],t.G==2)if(o[0]=="c"){t.J=o[1],t.la=o[2];var s=o[3];s!=null&&(t.ma=s,t.h.info("VER="+t.ma));var a=o[4];a!=null&&(t.za=a,t.h.info("SVER="+t.za));var u=o[5];u!=null&&typeof u=="number"&&0<u&&(i=1.5*u,t.K=i,t.h.info("backChannelRequestTimeoutMs_="+i)),i=t;var c=n.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=i.i;!h.g&&(hn(l,"spdy")||hn(l,"quic")||hn(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(hh(h,h.h),h.h=null))}if(i.D){var f=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(i.sa=f,pt(i.F,i.D,f))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),i=t;var p=n;if(i.oa=Eg(i,i.H?i.la:null,i.W),p.J){og(i.i,p);var g=p,v=i.K;v&&g.setTimeout(v),g.B&&(Fu(g),Hs(g)),i.g=p}else mg(i);0<t.l.length&&Gu(t)}else o[0]!="stop"&&o[0]!="close"||dr(t,7);else t.G==3&&(o[0]=="stop"||o[0]=="close"?o[0]=="stop"?dr(t,7):mh(t):o[0]!="noop"&&t.j&&t.j.wa(o),t.A=0)}}Ss(4)}catch{}}function N0(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(ul(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function ch(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ul(n)||typeof n=="string")wm(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(ul(n)||typeof n=="string"){t=[];for(var i=n.length,r=0;r<i;r++)t.push(r)}else for(r in t=[],i=0,n)t[i++]=r;i=N0(n),r=i.length;for(var o=0;o<r;o++)e.call(void 0,i[o],t&&t[o],n)}}function Ho(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var i=0;i<t;i+=2)this.set(arguments[i],arguments[i+1])}else if(n)if(n instanceof Ho)for(t=n.T(),i=0;i<t.length;i++)this.set(t[i],n.get(t[i]));else for(i in n)this.set(i,n[i])}_e=Ho.prototype;_e.R=function(){lh(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};_e.T=function(){return lh(this),this.g.concat()};function lh(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var i=n.g[e];Tr(n.h,i)&&(n.g[t++]=i),e++}n.g.length=t}if(n.i!=n.g.length){var r={};for(t=e=0;e<n.g.length;)i=n.g[e],Tr(r,i)||(n.g[t++]=i,r[i]=1),e++;n.g.length=t}}_e.get=function(n,e){return Tr(this.h,n)?this.h[n]:e};_e.set=function(n,e){Tr(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};_e.forEach=function(n,e){for(var t=this.T(),i=0;i<t.length;i++){var r=t[i],o=this.get(r);n.call(e,o,r,this)}};function Tr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var Zm=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function U0(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),r=null;if(0<=i){var o=n[t].substring(0,i);r=n[t].substring(i+1)}else o=n[t];e(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Mr(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof Mr){this.g=e!==void 0?e:n.g,eu(this,n.j),this.s=n.s,tu(this,n.i),nu(this,n.m),this.l=n.l,e=n.h;var t=new xs;t.i=e.i,e.g&&(t.g=new Ho(e.g),t.h=e.h),Df(this,t),this.o=n.o}else n&&(t=String(n).match(Zm))?(this.g=!!e,eu(this,t[1]||"",!0),this.s=ls(t[2]||""),tu(this,t[3]||"",!0),nu(this,t[4]),this.l=ls(t[5]||"",!0),Df(this,t[6]||"",!0),this.o=ls(t[7]||"")):(this.g=!!e,this.h=new xs(null,this.g))}Mr.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ss(e,Lf,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ss(e,Lf,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(ss(t,t.charAt(0)=="/"?V0:k0,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ss(t,G0)),n.join("")};function Si(n){return new Mr(n)}function eu(n,e,t){n.j=t?ls(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function tu(n,e,t){n.i=t?ls(e,!0):e}function nu(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Df(n,e,t){e instanceof xs?(n.h=e,H0(n.h,n.g)):(t||(e=ss(e,z0)),n.h=new xs(e,n.g))}function pt(n,e,t){n.h.set(e,t)}function Bu(n){return pt(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function O0(n){return n instanceof Mr?Si(n):new Mr(n,void 0)}function F0(n,e,t,i){var r=new Mr(null,void 0);return n&&eu(r,n),e&&tu(r,e),t&&nu(r,t),i&&(r.l=i),r}function ls(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ss(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,B0),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function B0(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Lf=/[#\/\?@]/g,k0=/[#\?:]/g,V0=/[#\?]/g,z0=/[#\?@]/g,G0=/#/g;function xs(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function $i(n){n.g||(n.g=new Ho,n.h=0,n.i&&U0(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}_e=xs.prototype;_e.add=function(n,e){$i(this),this.i=null,n=Wo(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Jm(n,e){$i(n),e=Wo(n,e),Tr(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,Tr(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&lh(n)))}function eg(n,e){return $i(n),e=Wo(n,e),Tr(n.g.h,e)}_e.forEach=function(n,e){$i(this),this.g.forEach(function(t,i){wm(t,function(r){n.call(e,r,i,this)},this)},this)};_e.T=function(){$i(this);for(var n=this.g.R(),e=this.g.T(),t=[],i=0;i<e.length;i++)for(var r=n[i],o=0;o<r.length;o++)t.push(e[i]);return t};_e.R=function(n){$i(this);var e=[];if(typeof n=="string")eg(this,n)&&(e=bf(e,this.g.get(Wo(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=bf(e,n[t])}return e};_e.set=function(n,e){return $i(this),this.i=null,n=Wo(this,n),eg(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};_e.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function tg(n,e,t){Jm(n,e),0<t.length&&(n.i=null,n.g.set(Wo(n,e),Yl(t)),n.h+=t.length)}_e.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var i=e[t],r=encodeURIComponent(String(i));i=this.R(i);for(var o=0;o<i.length;o++){var s=r;i[o]!==""&&(s+="="+encodeURIComponent(String(i[o]))),n.push(s)}}return this.i=n.join("&")};function Wo(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function H0(n,e){e&&!n.j&&($i(n),n.i=null,n.g.forEach(function(t,i){var r=i.toLowerCase();i!=r&&(Jm(this,i),tg(this,r,t))},n)),n.j=e}var W0=function(){function n(e,t){this.h=e,this.g=t}return n}();function ng(n){this.l=n||q0,ze.PerformanceNavigationTiming?(n=ze.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(ze.g&&ze.g.Ea&&ze.g.Ea()&&ze.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var q0=10;function ig(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function rg(n){return n.h?1:n.g?n.g.size:0}function _l(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function hh(n,e){n.g?n.g.add(e):n.h=e}function og(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}ng.prototype.cancel=function(){var n,e;if(this.i=sg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){try{for(var t=Tm(this.g.values()),i=t.next();!i.done;i=t.next()){var r=i.value;r.cancel()}}catch(o){n={error:o}}finally{try{i&&!i.done&&(e=t.return)&&e.call(t)}finally{if(n)throw n.error}}this.g.clear()}};function sg(n){var e,t;if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){var i=n.i;try{for(var r=Tm(n.g.values()),o=r.next();!o.done;o=r.next()){var s=o.value;i=i.concat(s.D)}}catch(a){e={error:a}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}return i}return Yl(n.i)}function fh(){}fh.prototype.stringify=function(n){return ze.JSON.stringify(n,void 0)};fh.prototype.parse=function(n){return ze.JSON.parse(n,void 0)};function j0(){this.g=new fh}function X0(n,e,t){var i=t||"";try{ch(n,function(r,o){var s=r;Bs(r)&&(s=nh(r)),e.push(i+o+"="+encodeURIComponent(s))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function K0(n,e){var t=new Lu;if(ze.Image){var i=new Image;i.onload=ua(la,t,i,"TestLoadImage: loaded",!0,e),i.onerror=ua(la,t,i,"TestLoadImage: error",!1,e),i.onabort=ua(la,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=ua(la,t,i,"TestLoadImage: timeout",!1,e),ze.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function la(n,e,t,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Ws(n){this.l=n.$b||null,this.j=n.ib||!1}Xt(Ws,sh);Ws.prototype.g=function(){return new ku(this.l,this.j)};Ws.prototype.i=function(n){return function(){return n}}({});function ku(n,e){kt.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=dh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xt(ku,kt);var dh=0;_e=ku.prototype;_e.open=function(n,e){if(this.readyState!=dh)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,bs(this)};_e.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||ze).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};_e.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=dh};_e.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof ze.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ag(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function ag(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}_e.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?qs(this):bs(this),this.readyState==3&&ag(this)}};_e.Ua=function(n){this.g&&(this.response=this.responseText=n,qs(this))};_e.Ta=function(n){this.g&&(this.response=n,qs(this))};_e.ha=function(){this.g&&qs(this)};function qs(n){n.readyState=4,n.l=null,n.j=null,n.A=null,bs(n)}_e.setRequestHeader=function(n,e){this.v.append(n,e)};_e.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};_e.getAllResponseHeaders=function(){if(!this.h)return"";for(var n=[],e=this.h.entries(),t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function bs(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(ku.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Y0=ze.JSON.parse;function Rt(n){kt.call(this),this.headers=new Ho,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ug,this.K=this.L=!1}Xt(Rt,kt);var ug="",$0=/^https?$/i,Q0=["POST","PUT"];_e=Rt.prototype;_e.ea=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ml.g(),this.C=this.u?Pf(this.u):Pf(ml),this.g.onreadystatechange=Wt(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(o){Nf(this,o);return}n=t||"";var r=new Ho(this.headers);i&&ch(i,function(o,s){r.set(s,o)}),i=u0(r.T()),t=ze.FormData&&n instanceof ze.FormData,!(0<=Mm(Q0,e))||i||t||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(o,s){this.g.setRequestHeader(s,o)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{hg(this),0<this.B&&((this.K=Z0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Wt(this.pa,this)):this.A=oh(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(o){Nf(this,o)}};function Z0(n){return xo&&d0()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function J0(n){return n.toLowerCase()=="content-type"}_e.pa=function(){typeof Kl!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qt(this,"timeout"),this.abort(8))};function Nf(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,cg(n),Vu(n)}function cg(n){n.D||(n.D=!0,qt(n,"complete"),qt(n,"error"))}_e.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,qt(this,"complete"),qt(this,"abort"),Vu(this))};_e.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vu(this,!0)),Rt.Z.M.call(this)};_e.Fa=function(){this.s||(this.F||this.v||this.l?lg(this):this.cb())};_e.cb=function(){lg(this)};function lg(n){if(n.h&&typeof Kl!="undefined"&&(!n.C[1]||pi(n)!=4||n.ba()!=2)){if(n.v&&pi(n)==4)oh(n.Fa,0,n);else if(qt(n,"readystatechange"),pi(n)==4){n.h=!1;try{var e=n.ba();e:switch(e){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var i;if(!(i=t)){var r;if(r=e===0){var o=String(n.H).match(Zm)[1]||null;if(!o&&ze.self&&ze.self.location){var s=ze.self.location.protocol;o=s.substr(0,s.length-1)}r=!$0.test(o?o.toLowerCase():"")}i=r}if(i)qt(n,"complete"),qt(n,"success");else{n.m=6;try{var a=2<pi(n)?n.g.statusText:""}catch{a=""}n.j=a+" ["+n.ba()+"]",cg(n)}}finally{Vu(n)}}}}function Vu(n,e){if(n.g){hg(n);var t=n.g,i=n.C[0]?$a:null;n.g=null,n.C=null,e||qt(n,"ready");try{t.onreadystatechange=i}catch{}}}function hg(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(ze.clearTimeout(n.A),n.A=null)}function pi(n){return n.g?n.g.readyState:0}_e.ba=function(){try{return 2<pi(this)?this.g.status:-1}catch{return-1}};_e.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};_e.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Y0(e)}};function Uf(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case ug:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}_e.Da=function(){return this.m};_e.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function eE(n){var e="";return $l(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function ph(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=eE(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):pt(n,e,t))}function es(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function fg(n){this.za=0,this.l=[],this.h=new Lu,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=es("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=es("baseRetryDelayMs",5e3,n),this.$a=es("retryDelaySeedMs",1e4,n),this.Ya=es("forwardChannelMaxRetries",2,n),this.ra=es("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new ng(n&&n.concurrentRequestLimit),this.Ca=new j0,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}_e=fg.prototype;_e.ma=8;_e.G=1;function mh(n){if(dg(n),n.G==3){var e=n.V++,t=Si(n.F);pt(t,"SID",n.J),pt(t,"RID",e),pt(t,"TYPE","terminate"),js(n,t),e=new Gs(n,n.h,e,void 0),e.K=2,e.v=Bu(Si(t)),t=!1,ze.navigator&&ze.navigator.sendBeacon&&(t=ze.navigator.sendBeacon(e.v.toString(),"")),!t&&ze.Image&&(new Image().src=e.v,t=!0),t||(e.g=Sg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Hs(e)}_g(n)}_e.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function zu(n){n.g&&(vh(n),n.g.cancel(),n.g=null)}function dg(n){zu(n),n.u&&(ze.clearTimeout(n.u),n.u=null),iu(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&ze.clearTimeout(n.m),n.m=null)}function bc(n,e){n.l.push(new W0(n.Za++,e)),n.G==3&&Gu(n)}function Gu(n){ig(n.i)||n.m||(n.m=!0,ih(n.Ha,n),n.C=0)}function tE(n,e){return rg(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=Vs(Wt(n.Ha,n,e),yg(n,n.C)),n.C++,!0)}_e.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;var e=new Gs(this,this.h,n,void 0),t=this.s;if(this.P&&(t?(t=Am(t),Rm(t,this.P)):t=this.P),this.o===null&&(e.H=t),this.ja)e:{for(var i=0,r=0;r<this.l.length;r++){t:{var o=this.l[r];if("__data__"in o.g&&(o=o.g.__data__,typeof o=="string")){o=o.length;break t}o=void 0}if(o===void 0)break;if(i+=o,4096<i){i=r;break e}if(i===4096||r===this.l.length-1){i=r+1;break e}}i=1e3}else i=1e3;i=pg(this,e,i),r=Si(this.F),pt(r,"RID",n),pt(r,"CVER",22),this.D&&pt(r,"X-HTTP-Session-Id",this.D),js(this,r),this.o&&t&&ph(r,this.o,t),hh(this.i,e),this.Ra&&pt(r,"TYPE","init"),this.ja?(pt(r,"$req",i),pt(r,"SID","null"),e.$=!0,vl(e,r,null)):vl(e,r,i),this.G=2}}else this.G==3&&(n?Of(this,n):this.l.length==0||ig(this.i)||Of(this))};function Of(n,e){var t;e?t=e.m:t=n.V++;var i=Si(n.F);pt(i,"SID",n.J),pt(i,"RID",t),pt(i,"AID",n.U),js(n,i),n.o&&n.s&&ph(i,n.o,n.s),t=new Gs(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=pg(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),hh(n.i,t),vl(t,i,e)}function js(n,e){n.j&&ch({},function(t,i){pt(e,i,t)})}function pg(n,e,t){t=Math.min(n.l.length,t);var i=n.j?Wt(n.j.Oa,n.j,n):null;e:for(var r=n.l,o=-1;;){var s=["count="+t];o==-1?0<t?(o=r[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);for(var a=!0,u=0;u<t;u++){var c=r[u].h,l=r[u].g;if(c-=o,0>c)o=Math.max(0,r[u].h-100),a=!1;else try{X0(l,s,"req"+c+"_")}catch{i&&i(l)}}if(a){i=s.join("&");break e}}return n=n.l.splice(0,t),e.D=n,i}function mg(n){n.g||n.u||(n.Y=1,ih(n.Ga,n),n.A=0)}function gh(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=Vs(Wt(n.Ga,n),yg(n,n.A)),n.A++,!0)}_e.Ga=function(){if(this.u=null,gg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=Vs(Wt(this.bb,this),n)}};_e.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,dn(10),zu(this),gg(this))};function vh(n){n.B!=null&&(ze.clearTimeout(n.B),n.B=null)}function gg(n){n.g=new Gs(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=Si(n.oa);pt(e,"RID","rpc"),pt(e,"SID",n.J),pt(e,"CI",n.N?"0":"1"),pt(e,"AID",n.U),js(n,e),pt(e,"TYPE","xmlhttp"),n.o&&n.s&&ph(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=Bu(Si(e)),t.s=null,t.U=!0,Km(t,n)}_e.ab=function(){this.v!=null&&(this.v=null,zu(this),gh(this),dn(19))};function iu(n){n.v!=null&&(ze.clearTimeout(n.v),n.v=null)}function vg(n,e){var t=null;if(n.g==e){iu(n),vh(n),n.g=null;var i=2}else if(_l(n.i,e))t=e.D,og(n.i,e),i=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var r=n.C;i=Nu(),qt(i,new Wm(i,t)),Gu(n)}else mg(n);else if(r=e.o,r==3||r==0&&0<n.I||!(i==1&&tE(n,e)||i==2&&gh(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),r){case 1:dr(n,5);break;case 4:dr(n,10);break;case 3:dr(n,6);break;default:dr(n,2)}}}function yg(n,e){var t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function dr(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var i=Wt(n.jb,n);t||(t=new Mr("//www.google.com/images/cleardot.gif"),ze.location&&ze.location.protocol=="http"||eu(t,"https"),Bu(t)),K0(t.toString(),i)}else dn(2);n.G=0,n.j&&n.j.va(e),_g(n),dg(n)}_e.jb=function(n){n?(this.h.info("Successfully pinged google.com"),dn(2)):(this.h.info("Failed to ping google.com"),dn(1))};function _g(n){n.G=0,n.I=-1,n.j&&((sg(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,Yl(n.l),n.l.length=0),n.j.ua())}function Eg(n,e,t){var i=O0(t);if(i.i!="")e&&tu(i,e+"."+i.i),nu(i,i.m);else{var r=ze.location;i=F0(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,t)}return n.aa&&$l(n.aa,function(o,s){pt(i,s,o)}),e=n.D,t=n.sa,e&&t&&pt(i,e,t),pt(i,"VER",n.ma),js(n,i),i}function Sg(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new Rt(new Ws({ib:!0})):new Rt(n.qa),e.L=n.H,e}function xg(){}_e=xg.prototype;_e.xa=function(){};_e.wa=function(){};_e.va=function(){};_e.ua=function(){};_e.Oa=function(){};function ru(){if(xo&&!(10<=Number(p0)))throw Error("Environmental error: no available transport.")}ru.prototype.g=function(n,e){return new Nn(n,e)};function Nn(n,e){kt.call(this),this.g=new fg(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!Qa(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Qa(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new qo(this)}Xt(Nn,kt);Nn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),ih(Wt(n.hb,n,e))),dn(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=Eg(n,null,n.W),Gu(n)};Nn.prototype.close=function(){mh(this.g)};Nn.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,bc(this.g,e)}else this.v?(e={},e.__data__=nh(n),bc(this.g,e)):bc(this.g,n)};Nn.prototype.M=function(){this.g.j=null,delete this.j,mh(this.g),delete this.g,Nn.Z.M.call(this)};function bg(n){ah.call(this);var e=n.__sm__;if(e){e:{for(var t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Xt(bg,ah);function Tg(){uh.call(this),this.status=1}Xt(Tg,uh);function qo(n){this.g=n}Xt(qo,xg);qo.prototype.xa=function(){qt(this.g,"a")};qo.prototype.wa=function(n){qt(this.g,new bg(n))};qo.prototype.va=function(n){qt(this.g,new Tg)};qo.prototype.ua=function(){qt(this.g,"b")};ru.prototype.createWebChannel=ru.prototype.g;Nn.prototype.send=Nn.prototype.u;Nn.prototype.open=Nn.prototype.m;Nn.prototype.close=Nn.prototype.close;Uu.NO_ERROR=0;Uu.TIMEOUT=8;Uu.HTTP_ERROR=6;qm.COMPLETE="complete";jm.EventType=zs;zs.OPEN="a";zs.CLOSE="b";zs.ERROR="c";zs.MESSAGE="d";kt.prototype.listen=kt.prototype.N;Rt.prototype.listenOnce=Rt.prototype.O;Rt.prototype.getLastError=Rt.prototype.La;Rt.prototype.getLastErrorCode=Rt.prototype.Da;Rt.prototype.getStatus=Rt.prototype.ba;Rt.prototype.getResponseJson=Rt.prototype.Qa;Rt.prototype.getResponseText=Rt.prototype.ga;Rt.prototype.send=Rt.prototype.ea;var nE=function(){return new ru},iE=function(){return Nu()},Tc=Uu,rE=qm,oE=Lr,Ff={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},sE=Ws,ha=jm,aE=Rt;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var In=function(){function n(e,t){var i=this;this.previousValue=e,t&&(t.sequenceNumberHandler=function(r){return i.t(r)},this.i=function(r){return t.writeSequenceNumber(r)})}return n.prototype.t=function(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue},n.prototype.next=function(){var e=++this.previousValue;return this.i&&this.i(e),e},n}();In.o=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},Z=function(n){function e(t,i){var r=this;return(r=n.call(this,i)||this).code=t,r.message=i,r.name="FirebaseError",r.toString=function(){return r.name+": [code="+r.code+"]: "+r.message},r}return Ce(e,n),e}(Error),qn=new Em("@firebase/firestore");function El(){return qn.logLevel}function ue(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(qn.logLevel<=rt.DEBUG){var i=e.map(yh);qn.debug.apply(qn,yt(["Firestore (8.10.1): "+n],i))}}function wt(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(qn.logLevel<=rt.ERROR){var i=e.map(yh);qn.error.apply(qn,yt(["Firestore (8.10.1): "+n],i))}}function ou(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(qn.logLevel<=rt.WARN){var i=e.map(yh);qn.warn.apply(qn,yt(["Firestore (8.10.1): "+n],i))}}function yh(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n){n===void 0&&(n="Unexpected state");var e="FIRESTORE (8.10.1) INTERNAL ASSERTION FAILED: "+n;throw wt(e),new Error(e)}function Ue(n,e){n||Te()}function ve(n,e){return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(n){var e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(var i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mg=function(){function n(){}return n.u=function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,i="";i.length<20;)for(var r=uE(40),o=0;o<r.length;++o)i.length<20&&r[o]<t&&(i+=e.charAt(r[o]%e.length));return i},n}();function et(n,e){return n<e?-1:n>e?1:0}function bo(n,e,t){return n.length===e.length&&n.every(function(i,r){return t(i,e[r])})}function wg(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yn=function(){function n(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}return n.now=function(){return n.fromMillis(Date.now())},n.fromDate=function(e){return n.fromMillis(e.getTime())},n.fromMillis=function(e){var t=Math.floor(e/1e3);return new n(t,Math.floor(1e6*(e-1e3*t)))},n.prototype.toDate=function(){return new Date(this.toMillis())},n.prototype.toMillis=function(){return 1e3*this.seconds+this.nanoseconds/1e6},n.prototype._compareTo=function(e){return this.seconds===e.seconds?et(this.nanoseconds,e.nanoseconds):et(this.seconds,e.seconds)},n.prototype.isEqual=function(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds},n.prototype.toString=function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"},n.prototype.toJSON=function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}},n.prototype.valueOf=function(){var e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")},n}(),Qe=function(){function n(e){this.timestamp=e}return n.fromTimestamp=function(e){return new n(e)},n.min=function(){return new n(new yn(0,0))},n.prototype.compareTo=function(e){return this.timestamp._compareTo(e.timestamp)},n.prototype.isEqual=function(e){return this.timestamp.isEqual(e.timestamp)},n.prototype.toMicroseconds=function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3},n.prototype.toString=function(){return"SnapshotVersion("+this.timestamp.toString()+")"},n.prototype.toTimestamp=function(){return this.timestamp},n}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(n){var e=0;for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Nr(n,e){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ag(n){for(var e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rg=function(){function n(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}return Object.defineProperty(n.prototype,"length",{get:function(){return this.len},enumerable:!1,configurable:!0}),n.prototype.isEqual=function(e){return n.comparator(this,e)===0},n.prototype.child=function(e){var t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(function(i){t.push(i)}):t.push(e),this.construct(t)},n.prototype.limit=function(){return this.offset+this.length},n.prototype.popFirst=function(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)},n.prototype.popLast=function(){return this.construct(this.segments,this.offset,this.length-1)},n.prototype.firstSegment=function(){return this.segments[this.offset]},n.prototype.lastSegment=function(){return this.get(this.length-1)},n.prototype.get=function(e){return this.segments[this.offset+e]},n.prototype.isEmpty=function(){return this.length===0},n.prototype.isPrefixOf=function(e){if(e.length<this.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0},n.prototype.isImmediateParentOf=function(e){if(this.length+1!==e.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0},n.prototype.forEach=function(e){for(var t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])},n.prototype.toArray=function(){return this.segments.slice(this.offset,this.limit())},n.comparator=function(e,t){for(var i=Math.min(e.length,t.length),r=0;r<i;r++){var o=e.get(r),s=t.get(r);if(o<s)return-1;if(o>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0},n}(),ot=function(n){function e(){return n!==null&&n.apply(this,arguments)||this}return Ce(e,n),e.prototype.construct=function(t,i,r){return new e(t,i,r)},e.prototype.canonicalString=function(){return this.toArray().join("/")},e.prototype.toString=function(){return this.canonicalString()},e.fromString=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];for(var r=[],o=0,s=t;o<s.length;o++){var a=s[o];if(a.indexOf("//")>=0)throw new Z(F.INVALID_ARGUMENT,"Invalid segment ("+a+"). Paths must not contain // in them.");r.push.apply(r,a.split("/").filter(function(u){return u.length>0}))}return new e(r)},e.emptyPath=function(){return new e([])},e}(Rg),cE=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Kn=function(n){function e(){return n!==null&&n.apply(this,arguments)||this}return Ce(e,n),e.prototype.construct=function(t,i,r){return new e(t,i,r)},e.isValidIdentifier=function(t){return cE.test(t)},e.prototype.canonicalString=function(){return this.toArray().map(function(t){return t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),e.isValidIdentifier(t)||(t="`"+t+"`"),t}).join(".")},e.prototype.toString=function(){return this.canonicalString()},e.prototype.isKeyField=function(){return this.length===1&&this.get(0)==="__name__"},e.keyField=function(){return new e(["__name__"])},e.fromServerFormat=function(t){for(var i=[],r="",o=0,s=function(){if(r.length===0)throw new Z(F.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not be empty, begin with '.', end with '.', or contain '..'");i.push(r),r=""},a=!1;o<t.length;){var u=t[o];if(u==="\\"){if(o+1===t.length)throw new Z(F.INVALID_ARGUMENT,"Path has trailing escape character: "+t);var c=t[o+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,o+=2}else u==="`"?(a=!a,o++):u!=="."||a?(r+=u,o++):(s(),o++)}if(s(),a)throw new Z(F.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new e(i)},e.emptyPath=function(){return new e([])},e}(Rg),To=function(){function n(e){this.fields=e,e.sort(Kn.comparator)}return n.prototype.covers=function(e){for(var t=0,i=this.fields;t<i.length;t++)if(i[t].isPrefixOf(e))return!0;return!1},n.prototype.isEqual=function(e){return bo(this.fields,e.fields,function(t,i){return t.isEqual(i)})},n}(),Sn=function(){function n(e){this.binaryString=e}return n.fromBase64String=function(e){return new n(atob(e))},n.fromUint8Array=function(e){return new n(function(t){for(var i="",r=0;r<t.length;++r)i+=String.fromCharCode(t[r]);return i}(e))},n.prototype.toBase64=function(){return e=this.binaryString,btoa(e);var e},n.prototype.toUint8Array=function(){return function(e){for(var t=new Uint8Array(e.length),i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)},n.prototype.approximateByteSize=function(){return 2*this.binaryString.length},n.prototype.compareTo=function(e){return et(this.binaryString,e.binaryString)},n.prototype.isEqual=function(e){return this.binaryString===e.binaryString},n}();Sn.EMPTY_BYTE_STRING=new Sn("");var lE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ji(n){if(Ue(!!n),typeof n=="string"){var e=0,t=lE.exec(n);if(Ue(!!t),t[1]){var i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}var r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Mt(n.seconds),nanos:Mt(n.nanos)}}function Mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Mo(n){return typeof n=="string"?Sn.fromBase64String(n):Sn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Cg(n){var e=n.mapValue.fields.__previous_value__;return _h(e)?Cg(e):e}function Ts(n){var e=ji(n.mapValue.fields.__local_write_time__.timestampValue);return new yn(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(n){return n==null}function su(n){return n===0&&1/n==-1/0}function Ig(n){return typeof n=="number"&&Number.isInteger(n)&&!su(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae=function(){function n(e){this.path=e}return n.fromPath=function(e){return new n(ot.fromString(e))},n.fromName=function(e){return new n(ot.fromString(e).popFirst(5))},n.prototype.hasCollectionId=function(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e},n.prototype.isEqual=function(e){return e!==null&&ot.comparator(this.path,e.path)===0},n.prototype.toString=function(){return this.path.toString()},n.comparator=function(e,t){return ot.comparator(e.path,t.path)},n.isDocumentKey=function(e){return e.length%2==0},n.fromSegments=function(e){return new n(new ot(e.slice()))},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_h(n)?4:10:Te()}function ni(n,e){var t=wr(n);if(t!==wr(e))return!1;switch(t){case 0:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ts(n).isEqual(Ts(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;var o=ji(i.timestampValue),s=ji(r.timestampValue);return o.seconds===s.seconds&&o.nanos===s.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,r){return Mo(i.bytesValue).isEqual(Mo(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,r){return Mt(i.geoPointValue.latitude)===Mt(r.geoPointValue.latitude)&&Mt(i.geoPointValue.longitude)===Mt(r.geoPointValue.longitude)}(n,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return Mt(i.integerValue)===Mt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){var o=Mt(i.doubleValue),s=Mt(r.doubleValue);return o===s?su(o)===su(s):isNaN(o)&&isNaN(s)}return!1}(n,e);case 9:return bo(n.arrayValue.values||[],e.arrayValue.values||[],ni);case 10:return function(i,r){var o=i.mapValue.fields||{},s=r.mapValue.fields||{};if(Bf(o)!==Bf(s))return!1;for(var a in o)if(o.hasOwnProperty(a)&&(s[a]===void 0||!ni(o[a],s[a])))return!1;return!0}(n,e);default:return Te()}}function Ms(n,e){return(n.values||[]).find(function(t){return ni(t,e)})!==void 0}function wo(n,e){var t=wr(n),i=wr(e);if(t!==i)return et(t,i);switch(t){case 0:return 0;case 1:return et(n.booleanValue,e.booleanValue);case 2:return function(r,o){var s=Mt(r.integerValue||r.doubleValue),a=Mt(o.integerValue||o.doubleValue);return s<a?-1:s>a?1:s===a?0:isNaN(s)?isNaN(a)?0:-1:1}(n,e);case 3:return kf(n.timestampValue,e.timestampValue);case 4:return kf(Ts(n),Ts(e));case 5:return et(n.stringValue,e.stringValue);case 6:return function(r,o){var s=Mo(r),a=Mo(o);return s.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){for(var s=r.split("/"),a=o.split("/"),u=0;u<s.length&&u<a.length;u++){var c=et(s[u],a[u]);if(c!==0)return c}return et(s.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){var s=et(Mt(r.latitude),Mt(o.latitude));return s!==0?s:et(Mt(r.longitude),Mt(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,o){for(var s=r.values||[],a=o.values||[],u=0;u<s.length&&u<a.length;++u){var c=wo(s[u],a[u]);if(c)return c}return et(s.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,o){var s=r.fields||{},a=Object.keys(s),u=o.fields||{},c=Object.keys(u);a.sort(),c.sort();for(var l=0;l<a.length&&l<c.length;++l){var h=et(a[l],c[l]);if(h!==0)return h;var f=wo(s[a[l]],u[c[l]]);if(f!==0)return f}return et(a.length,c.length)}(n.mapValue,e.mapValue);default:throw Te()}}function kf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return et(n,e);var t=ji(n),i=ji(e),r=et(t.seconds,i.seconds);return r!==0?r:et(t.nanos,i.nanos)}function Eh(n){return Sl(n)}function Sl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(i){var r=ji(i);return"time("+r.seconds+","+r.nanos+")"}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Mo(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,Ae.fromName(t).toString()):"geoPointValue"in n?"geo("+(e=n.geoPointValue).latitude+","+e.longitude+")":"arrayValue"in n?function(i){for(var r="[",o=!0,s=0,a=i.values||[];s<a.length;s++)o?o=!1:r+=",",r+=Sl(a[s]);return r+"]"}(n.arrayValue):"mapValue"in n?function(i){for(var r="{",o=!0,s=0,a=Object.keys(i.fields||{}).sort();s<a.length;s++){var u=a[s];o?o=!1:r+=",",r+=u+":"+Sl(i.fields[u])}return r+"}"}(n.mapValue):Te();var e,t}function au(n,e){return{referenceValue:"projects/"+n.projectId+"/databases/"+n.database+"/documents/"+e.path.canonicalString()}}function xl(n){return!!n&&"integerValue"in n}function Sh(n){return!!n&&"arrayValue"in n}function Vf(n){return!!n&&"nullValue"in n}function zf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function za(n){return!!n&&"mapValue"in n}function hs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){var e={mapValue:{fields:{}}};return Nr(n.mapValue.fields,function(r,o){return e.mapValue.fields[r]=hs(o)}),e}if(n.arrayValue){for(var t={arrayValue:{values:[]}},i=0;i<(n.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=hs(n.arrayValue.values[i]);return t}return Object.assign({},n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn=function(){function n(e){this.value=e}return n.empty=function(){return new n({mapValue:{}})},n.prototype.field=function(e){if(e.isEmpty())return this.value;for(var t=this.value,i=0;i<e.length-1;++i)if(!za(t=(t.mapValue.fields||{})[e.get(i)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null},n.prototype.set=function(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hs(t)},n.prototype.setAll=function(e){var t=this,i=Kn.emptyPath(),r={},o=[];e.forEach(function(a,u){if(!i.isImmediateParentOf(u)){var c=t.getFieldsMap(i);t.applyChanges(c,r,o),r={},o=[],i=u.popLast()}a?r[u.lastSegment()]=hs(a):o.push(u.lastSegment())});var s=this.getFieldsMap(i);this.applyChanges(s,r,o)},n.prototype.delete=function(e){var t=this.field(e.popLast());za(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]},n.prototype.isEqual=function(e){return ni(this.value,e.value)},n.prototype.getFieldsMap=function(e){var t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(var i=0;i<e.length;++i){var r=t.mapValue.fields[e.get(i)];za(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields},n.prototype.applyChanges=function(e,t,i){Nr(t,function(a,u){return e[a]=u});for(var r=0,o=i;r<o.length;r++){var s=o[r];delete e[s]}},n.prototype.clone=function(){return new n(hs(this.value))},n}();function Pg(n){var e=[];return Nr(n.fields,function(t,i){var r=new Kn([t]);if(za(i)){var o=Pg(i.mapValue).fields;if(o.length===0)e.push(r);else for(var s=0,a=o;s<a.length;s++){var u=a[s];e.push(r.child(u))}}else e.push(r)}),new To(e)}var nn=function(){function n(e,t,i,r,o){this.key=e,this.documentType=t,this.version=i,this.data=r,this.documentState=o}return n.newInvalidDocument=function(e){return new n(e,0,Qe.min(),Cn.empty(),0)},n.newFoundDocument=function(e,t,i){return new n(e,1,t,i,0)},n.newNoDocument=function(e,t){return new n(e,2,t,Cn.empty(),0)},n.newUnknownDocument=function(e,t){return new n(e,3,t,Cn.empty(),2)},n.prototype.convertToFoundDocument=function(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this},n.prototype.convertToNoDocument=function(e){return this.version=e,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this},n.prototype.convertToUnknownDocument=function(e){return this.version=e,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this},n.prototype.setHasCommittedMutations=function(){return this.documentState=2,this},n.prototype.setHasLocalMutations=function(){return this.documentState=1,this},Object.defineProperty(n.prototype,"hasLocalMutations",{get:function(){return this.documentState===1},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"hasCommittedMutations",{get:function(){return this.documentState===2},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"hasPendingWrites",{get:function(){return this.hasLocalMutations||this.hasCommittedMutations},enumerable:!1,configurable:!0}),n.prototype.isValidDocument=function(){return this.documentType!==0},n.prototype.isFoundDocument=function(){return this.documentType===1},n.prototype.isNoDocument=function(){return this.documentType===2},n.prototype.isUnknownDocument=function(){return this.documentType===3},n.prototype.isEqual=function(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)},n.prototype.clone=function(){return new n(this.key,this.documentType,this.version,this.data.clone(),this.documentState)},n.prototype.toString=function(){return"Document("+this.key+", "+this.version+", "+JSON.stringify(this.data.value)+", {documentType: "+this.documentType+"}), {documentState: "+this.documentState+"})"},n}(),hE=function(n,e,t,i,r,o,s){e===void 0&&(e=null),t===void 0&&(t=[]),i===void 0&&(i=[]),r===void 0&&(r=null),o===void 0&&(o=null),s===void 0&&(s=null),this.path=n,this.collectionGroup=e,this.orderBy=t,this.filters=i,this.limit=r,this.startAt=o,this.endAt=s,this.h=null};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n,e,t,i,r,o,s){return e===void 0&&(e=null),t===void 0&&(t=[]),i===void 0&&(i=[]),r===void 0&&(r=null),o===void 0&&(o=null),s===void 0&&(s=null),new hE(n,e,t,i,r,o,s)}function Xs(n){var e=ve(n);if(e.h===null){var t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(function(i){return function(r){return r.field.canonicalString()+r.op.toString()+Eh(r.value)}(i)}).join(","),t+="|ob:",t+=e.orderBy.map(function(i){return function(r){return r.field.canonicalString()+r.dir}(i)}).join(","),Ur(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=cu(e.startAt)),e.endAt&&(t+="|ub:",t+=cu(e.endAt)),e.h=t}return e.h}function Hu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(var t=0;t<n.orderBy.length;t++)if(!_E(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(var i=0;i<n.filters.length;i++)if(r=n.filters[i],o=e.filters[i],r.op!==o.op||!r.field.isEqual(o.field)||!ni(r.value,o.value))return!1;var r,o;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Wf(n.startAt,e.startAt)&&Wf(n.endAt,e.endAt)}function uu(n){return Ae.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var Pn=function(n){function e(t,i,r){var o=this;return(o=n.call(this)||this).field=t,o.op=i,o.value=r,o}return Ce(e,n),e.create=function(t,i,r){return t.isKeyField()?i==="in"||i==="not-in"?this.l(t,i,r):new fE(t,i,r):i==="array-contains"?new mE(t,r):i==="in"?new gE(t,r):i==="not-in"?new vE(t,r):i==="array-contains-any"?new yE(t,r):new e(t,i,r)},e.l=function(t,i,r){return i==="in"?new dE(t,r):new pE(t,r)},e.prototype.matches=function(t){var i=t.data.field(this.field);return this.op==="!="?i!==null&&this.m(wo(i,this.value)):i!==null&&wr(this.value)===wr(i)&&this.m(wo(i,this.value))},e.prototype.m=function(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Te()}},e.prototype.g=function(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0},e}(function(){}),fE=function(n){function e(t,i,r){var o=this;return(o=n.call(this,t,i,r)||this).key=Ae.fromName(r.referenceValue),o}return Ce(e,n),e.prototype.matches=function(t){var i=Ae.comparator(t.key,this.key);return this.m(i)},e}(Pn),dE=function(n){function e(t,i){var r=this;return(r=n.call(this,t,"in",i)||this).keys=Dg("in",i),r}return Ce(e,n),e.prototype.matches=function(t){return this.keys.some(function(i){return i.isEqual(t.key)})},e}(Pn),pE=function(n){function e(t,i){var r=this;return(r=n.call(this,t,"not-in",i)||this).keys=Dg("not-in",i),r}return Ce(e,n),e.prototype.matches=function(t){return!this.keys.some(function(i){return i.isEqual(t.key)})},e}(Pn);function Dg(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(function(i){return Ae.fromName(i.referenceValue)})}var mE=function(n){function e(t,i){return n.call(this,t,"array-contains",i)||this}return Ce(e,n),e.prototype.matches=function(t){var i=t.data.field(this.field);return Sh(i)&&Ms(i.arrayValue,this.value)},e}(Pn),gE=function(n){function e(t,i){return n.call(this,t,"in",i)||this}return Ce(e,n),e.prototype.matches=function(t){var i=t.data.field(this.field);return i!==null&&Ms(this.value.arrayValue,i)},e}(Pn),vE=function(n){function e(t,i){return n.call(this,t,"not-in",i)||this}return Ce(e,n),e.prototype.matches=function(t){if(Ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;var i=t.data.field(this.field);return i!==null&&!Ms(this.value.arrayValue,i)},e}(Pn),yE=function(n){function e(t,i){return n.call(this,t,"array-contains-any",i)||this}return Ce(e,n),e.prototype.matches=function(t){var i=this,r=t.data.field(this.field);return!(!Sh(r)||!r.arrayValue.values)&&r.arrayValue.values.some(function(o){return Ms(i.value.arrayValue,o)})},e}(Pn),ws=function(n,e){this.position=n,this.before=e};function cu(n){return(n.before?"b":"a")+":"+n.position.map(function(e){return Eh(e)}).join(",")}var vo=function(n,e){e===void 0&&(e="asc"),this.field=n,this.dir=e};function _E(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function Hf(n,e,t){for(var i=0,r=0;r<n.position.length;r++){var o=e[r],s=n.position[r];if(i=o.field.isKeyField()?Ae.comparator(Ae.fromName(s.referenceValue),t.key):wo(s,t.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return n.before?i<=0:i<0}function Wf(n,e){if(n===null)return e===null;if(e===null||n.before!==e.before||n.position.length!==e.position.length)return!1;for(var t=0;t<n.position.length;t++)if(!ni(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bi=function(n,e,t,i,r,o,s,a){e===void 0&&(e=null),t===void 0&&(t=[]),i===void 0&&(i=[]),r===void 0&&(r=null),o===void 0&&(o="F"),s===void 0&&(s=null),a===void 0&&(a=null),this.path=n,this.collectionGroup=e,this.explicitOrderBy=t,this.filters=i,this.limit=r,this.limitType=o,this.startAt=s,this.endAt=a,this.p=null,this.T=null,this.startAt,this.endAt};function Lg(n,e,t,i,r,o,s,a){return new bi(n,e,t,i,r,o,s,a)}function Ks(n){return new bi(n)}function Ga(n){return!Ur(n.limit)&&n.limitType==="F"}function lu(n){return!Ur(n.limit)&&n.limitType==="L"}function xh(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function bh(n){for(var e=0,t=n.filters;e<t.length;e++){var i=t[e];if(i.g())return i.field}return null}function Th(n){return n.collectionGroup!==null}function Ao(n){var e=ve(n);if(e.p===null){e.p=[];var t=bh(e),i=xh(e);if(t!==null&&i===null)t.isKeyField()||e.p.push(new vo(t)),e.p.push(new vo(Kn.keyField(),"asc"));else{for(var r=!1,o=0,s=e.explicitOrderBy;o<s.length;o++){var a=s[o];e.p.push(a),a.field.isKeyField()&&(r=!0)}if(!r){var u=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.p.push(new vo(Kn.keyField(),u))}}}return e.p}function ii(n){var e=ve(n);if(!e.T)if(e.limitType==="F")e.T=Gf(e.path,e.collectionGroup,Ao(e),e.filters,e.limit,e.startAt,e.endAt);else{for(var t=[],i=0,r=Ao(e);i<r.length;i++){var o=r[i],s=o.dir==="desc"?"asc":"desc";t.push(new vo(o.field,s))}var a=e.endAt?new ws(e.endAt.position,!e.endAt.before):null,u=e.startAt?new ws(e.startAt.position,!e.startAt.before):null;e.T=Gf(e.path,e.collectionGroup,t,e.filters,e.limit,a,u)}return e.T}function Ng(n,e,t){return new bi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ys(n,e){return Hu(ii(n),ii(e))&&n.limitType===e.limitType}function Ug(n){return Xs(ii(n))+"|lt:"+n.limitType}function bl(n){return"Query(target="+function(e){var t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=", filters: ["+e.filters.map(function(i){return(r=i).field.canonicalString()+" "+r.op+" "+Eh(r.value);var r}).join(", ")+"]"),Ur(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=", orderBy: ["+e.orderBy.map(function(i){return function(r){return r.field.canonicalString()+" ("+r.dir+")"}(i)}).join(", ")+"]"),e.startAt&&(t+=", startAt: "+cu(e.startAt)),e.endAt&&(t+=", endAt: "+cu(e.endAt)),"Target("+t+")"}(ii(n))+"; limitType="+n.limitType+")"}function $s(n,e){return e.isFoundDocument()&&function(t,i){var r=i.key.path;return t.collectionGroup!==null?i.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):Ae.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(n,e)&&function(t,i){for(var r=0,o=t.explicitOrderBy;r<o.length;r++){var s=o[r];if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1}return!0}(n,e)&&function(t,i){for(var r=0,o=t.filters;r<o.length;r++)if(!o[r].matches(i))return!1;return!0}(n,e)&&function(t,i){return!(t.startAt&&!Hf(t.startAt,Ao(t),i))&&(!t.endAt||!Hf(t.endAt,Ao(t),i))}(n,e)}function Og(n){return function(e,t){for(var i=!1,r=0,o=Ao(n);r<o.length;r++){var s=o[r],a=EE(s,e,t);if(a!==0)return a;i=i||s.field.isKeyField()}return 0}}function EE(n,e,t){var i=n.field.isKeyField()?Ae.comparator(e.key,t.key):function(r,o,s){var a=o.data.field(r),u=s.data.field(r);return a!==null&&u!==null?wo(a,u):Te()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(n,e){if(n.I){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:su(e)?"-0":e}}function Bg(n){return{integerValue:""+n}}function kg(n,e){return Ig(e)?Bg(e):Fg(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wu=function(){this._=void 0};function SE(n,e,t){return n instanceof Ro?function(i,r){var o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(o.fields.__previous_value__=r),{mapValue:o}}(t,e):n instanceof Ar?zg(n,e):n instanceof Rr?Gg(n,e):function(i,r){var o=Vg(i,r),s=qf(o)+qf(i.A);return xl(o)&&xl(i.A)?Bg(s):Fg(i.R,s)}(n,e)}function xE(n,e,t){return n instanceof Ar?zg(n,e):n instanceof Rr?Gg(n,e):t}function Vg(n,e){return n instanceof Co?xl(t=e)||function(i){return!!i&&"doubleValue"in i}(t)?e:{integerValue:0}:null;var t}var Ro=function(n){function e(){return n!==null&&n.apply(this,arguments)||this}return Ce(e,n),e}(Wu),Ar=function(n){function e(t){var i=this;return(i=n.call(this)||this).elements=t,i}return Ce(e,n),e}(Wu);function zg(n,e){for(var t=Hg(e),i=function(s){t.some(function(a){return ni(a,s)})||t.push(s)},r=0,o=n.elements;r<o.length;r++)i(o[r]);return{arrayValue:{values:t}}}var Rr=function(n){function e(t){var i=this;return(i=n.call(this)||this).elements=t,i}return Ce(e,n),e}(Wu);function Gg(n,e){for(var t=Hg(e),i=function(s){t=t.filter(function(a){return!ni(a,s)})},r=0,o=n.elements;r<o.length;r++)i(o[r]);return{arrayValue:{values:t}}}var Co=function(n){function e(t,i){var r=this;return(r=n.call(this)||this).R=t,r.A=i,r}return Ce(e,n),e}(Wu);function qf(n){return Mt(n.integerValue||n.doubleValue)}function Hg(n){return Sh(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qs=function(n,e){this.field=n,this.transform=e},bE=function(n,e){this.version=n,this.transformResults=e},en=function(){function n(e,t){this.updateTime=e,this.exists=t}return n.none=function(){return new n},n.exists=function(e){return new n(void 0,e)},n.updateTime=function(e){return new n(e)},Object.defineProperty(n.prototype,"isNone",{get:function(){return this.updateTime===void 0&&this.exists===void 0},enumerable:!1,configurable:!0}),n.prototype.isEqual=function(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)},n}();function Ha(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var qu=function(){};function TE(n,e,t){n instanceof Zs?function(i,r,o){var s=i.value.clone(),a=Kf(i.fieldTransforms,r,o.transformResults);s.setAll(a),r.convertToFoundDocument(o.version,s).setHasCommittedMutations()}(n,e,t):n instanceof Qi?function(i,r,o){if(Ha(i.precondition,r)){var s=Kf(i.fieldTransforms,r,o.transformResults),a=r.data;a.setAll(Wg(i)),a.setAll(s),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}else r.convertToUnknownDocument(o.version)}(n,e,t):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Tl(n,e,t){n instanceof Zs?function(i,r,o){if(Ha(i.precondition,r)){var s=i.value.clone(),a=Yf(i.fieldTransforms,o,r);s.setAll(a),r.convertToFoundDocument(Xf(r),s).setHasLocalMutations()}}(n,e,t):n instanceof Qi?function(i,r,o){if(Ha(i.precondition,r)){var s=Yf(i.fieldTransforms,o,r),a=r.data;a.setAll(Wg(i)),a.setAll(s),r.convertToFoundDocument(Xf(r),a).setHasLocalMutations()}}(n,e,t):function(i,r){Ha(i.precondition,r)&&r.convertToNoDocument(Qe.min())}(n,e)}function ME(n,e){for(var t=null,i=0,r=n.fieldTransforms;i<r.length;i++){var o=r[i],s=e.data.field(o.field),a=Vg(o.transform,s||null);a!=null&&(t==null&&(t=Cn.empty()),t.set(o.field,a))}return t||null}function jf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,i){return t===void 0&&i===void 0||!(!t||!i)&&bo(t,i,function(r,o){return function(s,a){return s.field.isEqual(a.field)&&function(u,c){return u instanceof Ar&&c instanceof Ar||u instanceof Rr&&c instanceof Rr?bo(u.elements,c.elements,ni):u instanceof Co&&c instanceof Co?ni(u.A,c.A):u instanceof Ro&&c instanceof Ro}(s.transform,a.transform)}(r,o)})}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}function Xf(n){return n.isFoundDocument()?n.version:Qe.min()}var Zs=function(n){function e(t,i,r,o){o===void 0&&(o=[]);var s=this;return(s=n.call(this)||this).key=t,s.value=i,s.precondition=r,s.fieldTransforms=o,s.type=0,s}return Ce(e,n),e}(qu),Qi=function(n){function e(t,i,r,o,s){s===void 0&&(s=[]);var a=this;return(a=n.call(this)||this).key=t,a.data=i,a.fieldMask=r,a.precondition=o,a.fieldTransforms=s,a.type=1,a}return Ce(e,n),e}(qu);function Wg(n){var e=new Map;return n.fieldMask.fields.forEach(function(t){if(!t.isEmpty()){var i=n.data.field(t);e.set(t,i)}}),e}function Kf(n,e,t){var i=new Map;Ue(n.length===t.length);for(var r=0;r<t.length;r++){var o=n[r],s=o.transform,a=e.data.field(o.field);i.set(o.field,xE(s,a,t[r]))}return i}function Yf(n,e,t){for(var i=new Map,r=0,o=n;r<o.length;r++){var s=o[r],a=s.transform,u=t.data.field(s.field);i.set(s.field,SE(a,u,e))}return i}var Tt,tt,Js=function(n){function e(t,i){var r=this;return(r=n.call(this)||this).key=t,r.precondition=i,r.type=2,r.fieldTransforms=[],r}return Ce(e,n),e}(qu),Mh=function(n){function e(t,i){var r=this;return(r=n.call(this)||this).key=t,r.precondition=i,r.type=3,r.fieldTransforms=[],r}return Ce(e,n),e}(qu),wE=function(n){this.count=n};function qg(n){switch(n){case F.OK:return Te();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return Te()}}function jg(n){if(n===void 0)return wt("GRPC error has no .code"),F.UNKNOWN;switch(n){case Tt.OK:return F.OK;case Tt.CANCELLED:return F.CANCELLED;case Tt.UNKNOWN:return F.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return F.INTERNAL;case Tt.UNAVAILABLE:return F.UNAVAILABLE;case Tt.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Tt.NOT_FOUND:return F.NOT_FOUND;case Tt.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Tt.ABORTED:return F.ABORTED;case Tt.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Tt.DATA_LOSS:return F.DATA_LOSS;default:return Te()}}(tt=Tt||(Tt={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rn=function(){function n(e,t){this.comparator=e,this.root=t||Ui.EMPTY}return n.prototype.insert=function(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ui.BLACK,null,null))},n.prototype.remove=function(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ui.BLACK,null,null))},n.prototype.get=function(e){for(var t=this.root;!t.isEmpty();){var i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null},n.prototype.indexOf=function(e){for(var t=0,i=this.root;!i.isEmpty();){var r=this.comparator(e,i.key);if(r===0)return t+i.left.size;r<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1},n.prototype.isEmpty=function(){return this.root.isEmpty()},Object.defineProperty(n.prototype,"size",{get:function(){return this.root.size},enumerable:!1,configurable:!0}),n.prototype.minKey=function(){return this.root.minKey()},n.prototype.maxKey=function(){return this.root.maxKey()},n.prototype.inorderTraversal=function(e){return this.root.inorderTraversal(e)},n.prototype.forEach=function(e){this.inorderTraversal(function(t,i){return e(t,i),!1})},n.prototype.toString=function(){var e=[];return this.inorderTraversal(function(t,i){return e.push(t+":"+i),!1}),"{"+e.join(", ")+"}"},n.prototype.reverseTraversal=function(e){return this.root.reverseTraversal(e)},n.prototype.getIterator=function(){return new fa(this.root,null,this.comparator,!1)},n.prototype.getIteratorFrom=function(e){return new fa(this.root,e,this.comparator,!1)},n.prototype.getReverseIterator=function(){return new fa(this.root,null,this.comparator,!0)},n.prototype.getReverseIteratorFrom=function(e){return new fa(this.root,e,this.comparator,!0)},n}(),fa=function(){function n(e,t,i,r){this.isReverse=r,this.nodeStack=[];for(var o=1;!e.isEmpty();)if(o=t?i(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}return n.prototype.getNext=function(){var e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t},n.prototype.hasNext=function(){return this.nodeStack.length>0},n.prototype.peek=function(){if(this.nodeStack.length===0)return null;var e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}},n}(),Ui=function(){function n(e,t,i,r,o){this.key=e,this.value=t,this.color=i!=null?i:n.RED,this.left=r!=null?r:n.EMPTY,this.right=o!=null?o:n.EMPTY,this.size=this.left.size+1+this.right.size}return n.prototype.copy=function(e,t,i,r,o){return new n(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,r!=null?r:this.left,o!=null?o:this.right)},n.prototype.isEmpty=function(){return!1},n.prototype.inorderTraversal=function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)},n.prototype.reverseTraversal=function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)},n.prototype.min=function(){return this.left.isEmpty()?this:this.left.min()},n.prototype.minKey=function(){return this.min().key},n.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},n.prototype.insert=function(e,t,i){var r=this,o=i(e,r.key);return(r=o<0?r.copy(null,null,null,r.left.insert(e,t,i),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,i))).fixUp()},n.prototype.removeMin=function(){if(this.left.isEmpty())return n.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()},n.prototype.remove=function(e,t){var i,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return n.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()},n.prototype.isRed=function(){return this.color},n.prototype.fixUp=function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e},n.prototype.moveRedLeft=function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e},n.prototype.moveRedRight=function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e},n.prototype.rotateLeft=function(){var e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)},n.prototype.rotateRight=function(){var e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)},n.prototype.colorFlip=function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)},n.prototype.checkMaxDepth=function(){var e=this.check();return Math.pow(2,e)<=this.size+1},n.prototype.check=function(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();var e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)},n}();Ui.EMPTY=null,Ui.RED=!0,Ui.BLACK=!1,Ui.EMPTY=new(function(){function n(){this.size=0}return Object.defineProperty(n.prototype,"key",{get:function(){throw Te()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"value",{get:function(){throw Te()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"color",{get:function(){throw Te()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"left",{get:function(){throw Te()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"right",{get:function(){throw Te()},enumerable:!1,configurable:!0}),n.prototype.copy=function(e,t,i,r,o){return this},n.prototype.insert=function(e,t,i){return new Ui(e,t)},n.prototype.remove=function(e,t){return this},n.prototype.isEmpty=function(){return!0},n.prototype.inorderTraversal=function(e){return!1},n.prototype.reverseTraversal=function(e){return!1},n.prototype.minKey=function(){return null},n.prototype.maxKey=function(){return null},n.prototype.isRed=function(){return!1},n.prototype.checkMaxDepth=function(){return!0},n.prototype.check=function(){return 0},n}());/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt=function(){function n(e){this.comparator=e,this.data=new rn(this.comparator)}return n.prototype.has=function(e){return this.data.get(e)!==null},n.prototype.first=function(){return this.data.minKey()},n.prototype.last=function(){return this.data.maxKey()},Object.defineProperty(n.prototype,"size",{get:function(){return this.data.size},enumerable:!1,configurable:!0}),n.prototype.indexOf=function(e){return this.data.indexOf(e)},n.prototype.forEach=function(e){this.data.inorderTraversal(function(t,i){return e(t),!1})},n.prototype.forEachInRange=function(e,t){for(var i=this.data.getIteratorFrom(e[0]);i.hasNext();){var r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}},n.prototype.forEachWhile=function(e,t){var i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return},n.prototype.firstAfterOrEqual=function(e){var t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null},n.prototype.getIterator=function(){return new $f(this.data.getIterator())},n.prototype.getIteratorFrom=function(e){return new $f(this.data.getIteratorFrom(e))},n.prototype.add=function(e){return this.copy(this.data.remove(e).insert(e,!0))},n.prototype.delete=function(e){return this.has(e)?this.copy(this.data.remove(e)):this},n.prototype.isEmpty=function(){return this.data.isEmpty()},n.prototype.unionWith=function(e){var t=this;return t.size<e.size&&(t=e,e=this),e.forEach(function(i){t=t.add(i)}),t},n.prototype.isEqual=function(e){if(!(e instanceof n)||this.size!==e.size)return!1;for(var t=this.data.getIterator(),i=e.data.getIterator();t.hasNext();){var r=t.getNext().key,o=i.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0},n.prototype.toArray=function(){var e=[];return this.forEach(function(t){e.push(t)}),e},n.prototype.toString=function(){var e=[];return this.forEach(function(t){return e.push(t)}),"SortedSet("+e.toString()+")"},n.prototype.copy=function(e){var t=new n(this.comparator);return t.data=e,t},n}(),$f=function(){function n(e){this.iter=e}return n.prototype.getNext=function(){return this.iter.getNext().key},n.prototype.hasNext=function(){return this.iter.hasNext()},n}(),AE=new rn(Ae.comparator);function jn(){return AE}var RE=new rn(Ae.comparator);function Ml(){return RE}var CE=new rn(Ae.comparator);function IE(){return CE}var PE=new Dt(Ae.comparator);function ut(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];for(var t=PE,i=0,r=n;i<r.length;i++){var o=r[i];t=t.add(o)}return t}var DE=new Dt(et);function ju(){return DE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wh=function(){function n(e,t,i,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=o}return n.createSynthesizedRemoteEventForCurrentChange=function(e,t){var i=new Map;return i.set(e,Ah.createSynthesizedTargetChangeForCurrentChange(e,t)),new n(Qe.min(),i,ju(),jn(),ut())},n}(),Ah=function(){function n(e,t,i,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=o}return n.createSynthesizedTargetChangeForCurrentChange=function(e,t){return new n(Sn.EMPTY_BYTE_STRING,t,ut(),ut(),ut())},n}(),Wa=function(n,e,t,i){this.v=n,this.removedTargetIds=e,this.key=t,this.P=i},Xg=function(n,e){this.targetId=n,this.V=e},Kg=function(n,e,t,i){t===void 0&&(t=Sn.EMPTY_BYTE_STRING),i===void 0&&(i=null),this.state=n,this.targetIds=e,this.resumeToken=t,this.cause=i},Qf=function(){function n(){this.S=0,this.D=Jf(),this.C=Sn.EMPTY_BYTE_STRING,this.N=!1,this.k=!0}return Object.defineProperty(n.prototype,"current",{get:function(){return this.N},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"resumeToken",{get:function(){return this.C},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"F",{get:function(){return this.S!==0},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"$",{get:function(){return this.k},enumerable:!1,configurable:!0}),n.prototype.O=function(e){e.approximateByteSize()>0&&(this.k=!0,this.C=e)},n.prototype.M=function(){var e=ut(),t=ut(),i=ut();return this.D.forEach(function(r,o){switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:i=i.add(r);break;default:Te()}}),new Ah(this.C,this.N,e,t,i)},n.prototype.L=function(){this.k=!1,this.D=Jf()},n.prototype.B=function(e,t){this.k=!0,this.D=this.D.insert(e,t)},n.prototype.q=function(e){this.k=!0,this.D=this.D.remove(e)},n.prototype.U=function(){this.S+=1},n.prototype.K=function(){this.S-=1},n.prototype.j=function(){this.k=!0,this.N=!0},n}(),LE=function(){function n(e){this.W=e,this.G=new Map,this.H=jn(),this.J=Zf(),this.Y=new Dt(et)}return n.prototype.X=function(e){for(var t=0,i=e.v;t<i.length;t++){var r=i[t];e.P&&e.P.isFoundDocument()?this.Z(r,e.P):this.tt(r,e.key,e.P)}for(var o=0,s=e.removedTargetIds;o<s.length;o++)r=s[o],this.tt(r,e.key,e.P)},n.prototype.et=function(e){var t=this;this.forEachTarget(e,function(i){var r=t.nt(i);switch(e.state){case 0:t.st(i)&&r.O(e.resumeToken);break;case 1:r.K(),r.F||r.L(),r.O(e.resumeToken);break;case 2:r.K(),r.F||t.removeTarget(i);break;case 3:t.st(i)&&(r.j(),r.O(e.resumeToken));break;case 4:t.st(i)&&(t.it(i),r.O(e.resumeToken));break;default:Te()}})},n.prototype.forEachTarget=function(e,t){var i=this;e.targetIds.length>0?e.targetIds.forEach(t):this.G.forEach(function(r,o){i.st(o)&&t(o)})},n.prototype.rt=function(e){var t=e.targetId,i=e.V.count,r=this.ot(t);if(r){var o=r.target;if(uu(o))if(i===0){var s=new Ae(o.path);this.tt(t,s,nn.newNoDocument(s,Qe.min()))}else Ue(i===1);else this.ct(t)!==i&&(this.it(t),this.Y=this.Y.add(t))}},n.prototype.ut=function(e){var t=this,i=new Map;this.G.forEach(function(s,a){var u=t.ot(a);if(u){if(s.current&&uu(u.target)){var c=new Ae(u.target.path);t.H.get(c)!==null||t.at(a,c)||t.tt(a,c,nn.newNoDocument(c,e))}s.$&&(i.set(a,s.M()),s.L())}});var r=ut();this.J.forEach(function(s,a){var u=!0;a.forEachWhile(function(c){var l=t.ot(c);return!l||l.purpose===2||(u=!1,!1)}),u&&(r=r.add(s))});var o=new wh(e,i,this.Y,this.H,r);return this.H=jn(),this.J=Zf(),this.Y=new Dt(et),o},n.prototype.Z=function(e,t){if(this.st(e)){var i=this.at(e,t.key)?2:0;this.nt(e).B(t.key,i),this.H=this.H.insert(t.key,t),this.J=this.J.insert(t.key,this.ht(t.key).add(e))}},n.prototype.tt=function(e,t,i){if(this.st(e)){var r=this.nt(e);this.at(e,t)?r.B(t,1):r.q(t),this.J=this.J.insert(t,this.ht(t).delete(e)),i&&(this.H=this.H.insert(t,i))}},n.prototype.removeTarget=function(e){this.G.delete(e)},n.prototype.ct=function(e){var t=this.nt(e).M();return this.W.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size},n.prototype.U=function(e){this.nt(e).U()},n.prototype.nt=function(e){var t=this.G.get(e);return t||(t=new Qf,this.G.set(e,t)),t},n.prototype.ht=function(e){var t=this.J.get(e);return t||(t=new Dt(et),this.J=this.J.insert(e,t)),t},n.prototype.st=function(e){var t=this.ot(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t},n.prototype.ot=function(e){var t=this.G.get(e);return t&&t.F?null:this.W.lt(e)},n.prototype.it=function(e){var t=this;this.G.set(e,new Qf),this.W.getRemoteKeysForTarget(e).forEach(function(i){t.tt(e,i,null)})},n.prototype.at=function(e,t){return this.W.getRemoteKeysForTarget(e).has(t)},n}();function Zf(){return new rn(Ae.comparator)}function Jf(){return new rn(Ae.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var NE={asc:"ASCENDING",desc:"DESCENDING"},UE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OE=function(n,e){this.databaseId=n,this.I=e};function As(n,e){return n.I?new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")+"."+("000000000"+e.nanoseconds).slice(-9)+"Z":{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yg(n,e){return n.I?e.toBase64():e.toUint8Array()}function FE(n,e){return As(n,e.toTimestamp())}function pn(n){return Ue(!!n),Qe.fromTimestamp(function(e){var t=ji(e);return new yn(t.seconds,t.nanos)}(n))}function Rh(n,e){return function(t){return new ot(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function $g(n){var e=ot.fromString(n);return Ue(iv(e)),e}function Rs(n,e){return Rh(n.databaseId,e.path)}function yi(n,e){var t=$g(e);if(t.get(1)!==n.databaseId.projectId)throw new Z(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Z(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ae(Zg(t))}function wl(n,e){return Rh(n.databaseId,e)}function Qg(n){var e=$g(n);return e.length===4?ot.emptyPath():Zg(e)}function Cs(n){return new ot(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Zg(n){return Ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ed(n,e,t){return{name:Rs(n,e),fields:t.value.mapValue.fields}}function BE(n,e,t){var i=yi(n,e.name),r=pn(e.updateTime),o=new Cn({mapValue:{fields:e.fields}}),s=nn.newFoundDocument(i,r,o);return t&&s.setHasCommittedMutations(),t?s.setHasCommittedMutations():s}function hu(n,e){var t;if(e instanceof Zs)t={update:ed(n,e.key,e.value)};else if(e instanceof Js)t={delete:Rs(n,e.key)};else if(e instanceof Qi)t={update:ed(n,e.key,e.data),updateMask:HE(e.fieldMask)};else{if(!(e instanceof Mh))return Te();t={verify:Rs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(function(i){return function(r,o){var s=o.transform;if(s instanceof Ro)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(s instanceof Ar)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:s.elements}};if(s instanceof Rr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:s.elements}};if(s instanceof Co)return{fieldPath:o.field.canonicalString(),increment:s.A};throw Te()}(0,i)})),e.precondition.isNone||(t.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:FE(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Te()}(n,e.precondition)),t}function td(n,e){var t=e.currentDocument?function(c){return c.updateTime!==void 0?en.updateTime(pn(c.updateTime)):c.exists!==void 0?en.exists(c.exists):en.none()}(e.currentDocument):en.none(),i=e.updateTransforms?e.updateTransforms.map(function(c){return function(l,h){var f=null;if("setToServerValue"in h)Ue(h.setToServerValue==="REQUEST_TIME"),f=new Ro;else if("appendMissingElements"in h){var p=h.appendMissingElements.values||[];f=new Ar(p)}else if("removeAllFromArray"in h){var g=h.removeAllFromArray.values||[];f=new Rr(g)}else"increment"in h?f=new Co(l,h.increment):Te();var v=Kn.fromServerFormat(h.fieldPath);return new Qs(v,f)}(n,c)}):[];if(e.update){e.update.name;var r=yi(n,e.update.name),o=new Cn({mapValue:{fields:e.update.fields}});if(e.updateMask){var s=function(c){var l=c.fieldPaths||[];return new To(l.map(function(h){return Kn.fromServerFormat(h)}))}(e.updateMask);return new Qi(r,o,s,t,i)}return new Zs(r,o,t,i)}if(e.delete){var a=yi(n,e.delete);return new Js(a,t)}if(e.verify){var u=yi(n,e.verify);return new Mh(u,t)}return Te()}function Jg(n,e){return{documents:[wl(n,e.path)]}}function ev(n,e){var t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=wl(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=wl(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);var r=function(a){if(a.length!==0){var u=a.map(function(c){return function(l){if(l.op==="=="){if(zf(l.value))return{unaryFilter:{field:Gr(l.field),op:"IS_NAN"}};if(Vf(l.value))return{unaryFilter:{field:Gr(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(zf(l.value))return{unaryFilter:{field:Gr(l.field),op:"IS_NOT_NAN"}};if(Vf(l.value))return{unaryFilter:{field:Gr(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(l.field),op:VE(l.op),value:l.value}}}(c)});return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}}(e.filters);r&&(t.structuredQuery.where=r);var o=function(a){if(a.length!==0)return a.map(function(u){return function(c){return{field:Gr(c.field),direction:kE(c.dir)}}(u)})}(e.orderBy);o&&(t.structuredQuery.orderBy=o);var s=function(a,u){return a.I||Ur(u)?u:{value:u}}(n,e.limit);return s!==null&&(t.structuredQuery.limit=s),e.startAt&&(t.structuredQuery.startAt=nd(e.startAt)),e.endAt&&(t.structuredQuery.endAt=nd(e.endAt)),t}function tv(n){var e=Qg(n.parent),t=n.structuredQuery,i=t.from?t.from.length:0,r=null;if(i>0){Ue(i===1);var o=t.from[0];o.allDescendants?r=o.collectionId:e=e.child(o.collectionId)}var s=[];t.where&&(s=nv(t.where));var a=[];t.orderBy&&(a=t.orderBy.map(function(h){return function(f){return new vo(mo(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)}));var u=null;t.limit&&(u=function(h){var f;return Ur(f=typeof h=="object"?h.value:h)?null:f}(t.limit));var c=null;t.startAt&&(c=id(t.startAt));var l=null;return t.endAt&&(l=id(t.endAt)),Lg(e,r,a,s,u,"F",c,l)}function nv(n){return n?n.unaryFilter!==void 0?[GE(n)]:n.fieldFilter!==void 0?[zE(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(function(e){return nv(e)}).reduce(function(e,t){return e.concat(t)}):Te():[]}function nd(n){return{before:n.before,values:n.position}}function id(n){var e=!!n.before,t=n.values||[];return new ws(t,e)}function kE(n){return NE[n]}function VE(n){return UE[n]}function Gr(n){return{fieldPath:n.canonicalString()}}function mo(n){return Kn.fromServerFormat(n.fieldPath)}function zE(n){return Pn.create(mo(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return Te()}}(n.fieldFilter.op),n.fieldFilter.value)}function GE(n){switch(n.unaryFilter.op){case"IS_NAN":var e=mo(n.unaryFilter.field);return Pn.create(e,"==",{doubleValue:NaN});case"IS_NULL":var t=mo(n.unaryFilter.field);return Pn.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":var i=mo(n.unaryFilter.field);return Pn.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":var r=mo(n.unaryFilter.field);return Pn.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return Te()}}function HE(n){var e=[];return n.fields.forEach(function(t){return e.push(t.canonicalString())}),{fieldPaths:e}}function iv(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(n){for(var e="",t=0;t<n.length;t++)e.length>0&&(e=rd(e)),e=WE(n.get(t),e);return rd(e)}function WE(n,e){for(var t=e,i=n.length,r=0;r<i;r++){var o=n.charAt(r);switch(o){case"\0":t+="";break;case"":t+="";break;default:t+=o}}return t}function rd(n){return n+""}function mi(n){var e=n.length;if(Ue(e>=2),e===2)return Ue(n.charAt(0)===""&&n.charAt(1)===""),ot.emptyPath();for(var t=e-2,i=[],r="",o=0;o<e;){var s=n.indexOf("",o);switch((s<0||s>t)&&Te(),n.charAt(s+1)){case"":var a=n.substring(o,s),u=void 0;r.length===0?u=a:(u=r+=a,r=""),i.push(u);break;case"":r+=n.substring(o,s),r+="\0";break;case"":r+=n.substring(o,s+1);break;default:Te()}o=s+2}return new ot(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qE=function(n,e){this.seconds=n,this.nanoseconds=e},An=function(n,e,t){this.ownerId=n,this.allowTabSynchronization=e,this.leaseTimestampMs=t};An.store="owner",An.key="owner";var zi=function(n,e,t){this.userId=n,this.lastAcknowledgedBatchId=e,this.lastStreamToken=t};zi.store="mutationQueues",zi.keyPath="userId";var ft=function(n,e,t,i,r){this.userId=n,this.batchId=e,this.localWriteTimeMs=t,this.baseMutations=i,this.mutations=r};ft.store="mutations",ft.keyPath="batchId",ft.userMutationsIndex="userMutationsIndex",ft.userMutationsKeyPath=["userId","batchId"];var Qt=function(){function n(){}return n.prefixForUser=function(e){return[e]},n.prefixForPath=function(e,t){return[e,Xn(t)]},n.key=function(e,t,i){return[e,Xn(t),i]},n}();Qt.store="documentMutations",Qt.PLACEHOLDER=new Qt;var jE=function(n,e){this.path=n,this.readTime=e},XE=function(n,e){this.path=n,this.version=e},vt=function(n,e,t,i,r,o){this.unknownDocument=n,this.noDocument=e,this.document=t,this.hasCommittedMutations=i,this.readTime=r,this.parentPath=o};vt.store="remoteDocuments",vt.readTimeIndex="readTimeIndex",vt.readTimeIndexPath="readTime",vt.collectionReadTimeIndex="collectionReadTimeIndex",vt.collectionReadTimeIndexPath=["parentPath","readTime"];var Zn=function(n){this.byteSize=n};Zn.store="remoteDocumentGlobal",Zn.key="remoteDocumentGlobalKey";var vn=function(n,e,t,i,r,o,s){this.targetId=n,this.canonicalId=e,this.readTime=t,this.resumeToken=i,this.lastListenSequenceNumber=r,this.lastLimboFreeSnapshotVersion=o,this.query=s};vn.store="targets",vn.keyPath="targetId",vn.queryTargetsIndexName="queryTargetsIndex",vn.queryTargetsKeyPath=["canonicalId","targetId"];var Gt=function(n,e,t){this.targetId=n,this.path=e,this.sequenceNumber=t};Gt.store="targetDocuments",Gt.keyPath=["targetId","path"],Gt.documentTargetsIndex="documentTargetsIndex",Gt.documentTargetsKeyPath=["path","targetId"];var Rn=function(n,e,t,i){this.highestTargetId=n,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=t,this.targetCount=i};Rn.key="targetGlobalKey",Rn.store="targetGlobal";var gr=function(n,e){this.collectionId=n,this.parent=e};gr.store="collectionParents",gr.keyPath=["collectionId","parent"];var _i=function(n,e,t,i){this.clientId=n,this.updateTimeMs=e,this.networkEnabled=t,this.inForeground=i};_i.store="clientMetadata",_i.keyPath="clientId";var Io=function(n,e,t){this.bundleId=n,this.createTime=e,this.version=t};Io.store="bundles",Io.keyPath="bundleId";var Po=function(n,e,t){this.name=n,this.readTime=e,this.bundledQuery=t};Po.store="namedQueries",Po.keyPath="name";var KE=yt(yt([],yt(yt([],yt(yt([],yt(yt([],[zi.store,ft.store,Qt.store,vt.store,vn.store,An.store,Rn.store,Gt.store]),[_i.store])),[Zn.store])),[gr.store])),[Io.store,Po.store]),rv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",ov=function(){function n(){this.onCommittedListeners=[]}return n.prototype.addOnCommittedListener=function(e){this.onCommittedListeners.push(e)},n.prototype.raiseOnCommittedEvent=function(){this.onCommittedListeners.forEach(function(e){return e()})},n}(),xn=function(){var n=this;this.promise=new Promise(function(e,t){n.resolve=e,n.reject=t})},ne=function(){function n(e){var t=this;this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(function(i){t.isDone=!0,t.result=i,t.nextCallback&&t.nextCallback(i)},function(i){t.isDone=!0,t.error=i,t.catchCallback&&t.catchCallback(i)})}return n.prototype.catch=function(e){return this.next(void 0,e)},n.prototype.next=function(e,t){var i=this;return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n(function(r,o){i.nextCallback=function(s){i.wrapSuccess(e,s).next(r,o)},i.catchCallback=function(s){i.wrapFailure(t,s).next(r,o)}})},n.prototype.toPromise=function(){var e=this;return new Promise(function(t,i){e.next(t,i)})},n.prototype.wrapUserFunction=function(e){try{var t=e();return t instanceof n?t:n.resolve(t)}catch(i){return n.reject(i)}},n.prototype.wrapSuccess=function(e,t){return e?this.wrapUserFunction(function(){return e(t)}):n.resolve(t)},n.prototype.wrapFailure=function(e,t){return e?this.wrapUserFunction(function(){return e(t)}):n.reject(t)},n.resolve=function(e){return new n(function(t,i){t(e)})},n.reject=function(e){return new n(function(t,i){i(e)})},n.waitFor=function(e){return new n(function(t,i){var r=0,o=0,s=!1;e.forEach(function(a){++r,a.next(function(){++o,s&&o===r&&t()},function(u){return i(u)})}),s=!0,o===r&&t()})},n.or=function(e){for(var t=n.resolve(!1),i=function(s){t=t.next(function(a){return a?n.resolve(a):s()})},r=0,o=e;r<o.length;r++)i(o[r]);return t},n.forEach=function(e,t){var i=this,r=[];return e.forEach(function(o,s){r.push(t.call(i,o,s))}),this.waitFor(r)},n}(),sv=function(){function n(e,t){var i=this;this.action=e,this.transaction=t,this.aborted=!1,this.ft=new xn,this.transaction.oncomplete=function(){i.ft.resolve()},this.transaction.onabort=function(){t.error?i.ft.reject(new fs(e,t.error)):i.ft.resolve()},this.transaction.onerror=function(r){var o=Ch(r.target.error);i.ft.reject(new fs(e,o))}}return n.open=function(e,t,i,r){try{return new n(t,e.transaction(r,i))}catch(o){throw new fs(t,o)}},Object.defineProperty(n.prototype,"dt",{get:function(){return this.ft.promise},enumerable:!1,configurable:!0}),n.prototype.abort=function(e){e&&this.ft.reject(e),this.aborted||(ue("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())},n.prototype.store=function(e){var t=this.transaction.objectStore(e);return new $E(t)},n}(),Do=function(){function n(e,t,i){this.name=e,this.version=t,this.wt=i,n._t(xr())===12.2&&wt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}return n.delete=function(e){return ue("SimpleDb","Removing database:",e),lr(window.indexedDB.deleteDatabase(e)).toPromise()},n.yt=function(){if(typeof indexedDB=="undefined")return!1;if(n.gt())return!0;var e=xr(),t=n._t(e),i=0<t&&t<10,r=n.Et(e),o=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||i||o)},n.gt=function(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Tt)==="YES"},n.It=function(e,t){return e.store(t)},n._t=function(e){var t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(i)},n.Et=function(e){var t=e.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)},n.prototype.At=function(e){return K(this,void 0,void 0,function(){var t,i=this;return j(this,function(r){switch(r.label){case 0:return this.db?[3,2]:(ue("SimpleDb","Opening database:",this.name),t=this,[4,new Promise(function(o,s){var a=indexedDB.open(i.name,i.version);a.onsuccess=function(u){var c=u.target.result;o(c)},a.onblocked=function(){s(new fs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=function(u){var c=u.target.error;c.name==="VersionError"?s(new Z(F.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):s(new fs(e,c))},a.onupgradeneeded=function(u){ue("SimpleDb",'Database "'+i.name+'" requires upgrade from version:',u.oldVersion);var c=u.target.result;i.wt.Rt(c,a.transaction,u.oldVersion,i.version).next(function(){ue("SimpleDb","Database upgrade to version "+i.version+" complete")})}})]);case 1:t.db=r.sent(),r.label=2;case 2:return[2,(this.bt&&(this.db.onversionchange=function(o){return i.bt(o)}),this.db)]}})})},n.prototype.vt=function(e){this.bt=e,this.db&&(this.db.onversionchange=function(t){return e(t)})},n.prototype.runTransaction=function(e,t,i,r){return K(this,void 0,void 0,function(){var o,s,a,u,c;return j(this,function(l){switch(l.label){case 0:o=t==="readonly",s=0,a=function(){var h,f,p,g,v;return j(this,function(m){switch(m.label){case 0:++s,m.label=1;case 1:return m.trys.push([1,4,,5]),[4,u.At(e)];case 2:return u.db=m.sent(),h=sv.open(u.db,e,o?"readonly":"readwrite",i),f=r(h).catch(function(d){return h.abort(d),ne.reject(d)}).toPromise(),p={},f.catch(function(){}),[4,h.dt];case 3:return[2,(p.value=(m.sent(),f),p)];case 4:return g=m.sent(),v=g.name!=="FirebaseError"&&s<3,ue("SimpleDb","Transaction failed with error:",g.message,"Retrying:",v),u.close(),v?[3,5]:[2,{value:Promise.reject(g)}];case 5:return[2]}})},u=this,l.label=1;case 1:return[5,a()];case 2:if(typeof(c=l.sent())=="object")return[2,c.value];l.label=3;case 3:return[3,1];case 4:return[2]}})})},n.prototype.close=function(){this.db&&this.db.close(),this.db=void 0},n}(),YE=function(){function n(e){this.Pt=e,this.Vt=!1,this.St=null}return Object.defineProperty(n.prototype,"isDone",{get:function(){return this.Vt},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"Dt",{get:function(){return this.St},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"cursor",{set:function(e){this.Pt=e},enumerable:!1,configurable:!0}),n.prototype.done=function(){this.Vt=!0},n.prototype.Ct=function(e){this.St=e},n.prototype.delete=function(){return lr(this.Pt.delete())},n}(),fs=function(n){function e(t,i){var r=this;return(r=n.call(this,F.UNAVAILABLE,"IndexedDB transaction '"+t+"' failed: "+i)||this).name="IndexedDbTransactionError",r}return Ce(e,n),e}(Z);function Or(n){return n.name==="IndexedDbTransactionError"}var $E=function(){function n(e){this.store=e}return n.prototype.put=function(e,t){var i;return t!==void 0?(ue("SimpleDb","PUT",this.store.name,e,t),i=this.store.put(t,e)):(ue("SimpleDb","PUT",this.store.name,"<auto-key>",e),i=this.store.put(e)),lr(i)},n.prototype.add=function(e){return ue("SimpleDb","ADD",this.store.name,e,e),lr(this.store.add(e))},n.prototype.get=function(e){var t=this;return lr(this.store.get(e)).next(function(i){return i===void 0&&(i=null),ue("SimpleDb","GET",t.store.name,e,i),i})},n.prototype.delete=function(e){return ue("SimpleDb","DELETE",this.store.name,e),lr(this.store.delete(e))},n.prototype.count=function(){return ue("SimpleDb","COUNT",this.store.name),lr(this.store.count())},n.prototype.Nt=function(e,t){var i=this.cursor(this.options(e,t)),r=[];return this.xt(i,function(o,s){r.push(s)}).next(function(){return r})},n.prototype.kt=function(e,t){ue("SimpleDb","DELETE ALL",this.store.name);var i=this.options(e,t);i.Ft=!1;var r=this.cursor(i);return this.xt(r,function(o,s,a){return a.delete()})},n.prototype.$t=function(e,t){var i;t?i=e:(i={},t=e);var r=this.cursor(i);return this.xt(r,t)},n.prototype.Ot=function(e){var t=this.cursor({});return new ne(function(i,r){t.onerror=function(o){var s=Ch(o.target.error);r(s)},t.onsuccess=function(o){var s=o.target.result;s?e(s.primaryKey,s.value).next(function(a){a?s.continue():i()}):i()}})},n.prototype.xt=function(e,t){var i=[];return new ne(function(r,o){e.onerror=function(s){o(s.target.error)},e.onsuccess=function(s){var a=s.target.result;if(a){var u=new YE(a),c=t(a.primaryKey,a.value,u);if(c instanceof ne){var l=c.catch(function(h){return u.done(),ne.reject(h)});i.push(l)}u.isDone?r():u.Dt===null?a.continue():a.continue(u.Dt)}else r()}}).next(function(){return ne.waitFor(i)})},n.prototype.options=function(e,t){var i;return e!==void 0&&(typeof e=="string"?i=e:t=e),{index:i,range:t}},n.prototype.cursor=function(e){var t="next";if(e.reverse&&(t="prev"),e.index){var i=this.store.index(e.index);return e.Ft?i.openKeyCursor(e.range,t):i.openCursor(e.range,t)}return this.store.openCursor(e.range,t)},n}();function lr(n){return new ne(function(e,t){n.onsuccess=function(i){var r=i.target.result;e(r)},n.onerror=function(i){var r=Ch(i.target.error);t(r)}})}var od=!1;function Ch(n){var e=Do._t(xr());if(e>=12.2&&e<13){var t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){var i=new Z("internal","IOS_INDEXEDDB_BUG1: IndexedDb has thrown '"+t+"'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");return od||(od=!0,setTimeout(function(){throw i},0)),i}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sd=function(n){function e(t,i){var r=this;return(r=n.call(this)||this).Mt=t,r.currentSequenceNumber=i,r}return Ce(e,n),e}(ov);function bn(n,e){var t=ve(n);return Do.It(t.Mt,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ih=function(){function n(e,t,i,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=r}return n.prototype.applyToRemoteDocument=function(e,t){for(var i=t.mutationResults,r=0;r<this.mutations.length;r++){var o=this.mutations[r];o.key.isEqual(e.key)&&TE(o,e,i[r])}},n.prototype.applyToLocalView=function(e){for(var t=0,i=this.baseMutations;t<i.length;t++)(s=i[t]).key.isEqual(e.key)&&Tl(s,e,this.localWriteTime);for(var r=0,o=this.mutations;r<o.length;r++){var s;(s=o[r]).key.isEqual(e.key)&&Tl(s,e,this.localWriteTime)}},n.prototype.applyToLocalDocumentSet=function(e){var t=this;this.mutations.forEach(function(i){var r=e.get(i.key),o=r;t.applyToLocalView(o),r.isValidDocument()||o.convertToNoDocument(Qe.min())})},n.prototype.keys=function(){return this.mutations.reduce(function(e,t){return e.add(t.key)},ut())},n.prototype.isEqual=function(e){return this.batchId===e.batchId&&bo(this.mutations,e.mutations,function(t,i){return jf(t,i)})&&bo(this.baseMutations,e.baseMutations,function(t,i){return jf(t,i)})},n}(),QE=function(){function n(e,t,i,r){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=r}return n.from=function(e,t,i){Ue(e.mutations.length===i.length);for(var r=IE(),o=e.mutations,s=0;s<o.length;s++)r=r.insert(o[s].key,i[s].version);return new n(e,t,i,r)},n}(),Xu=function(){function n(e,t,i,r,o,s,a){o===void 0&&(o=Qe.min()),s===void 0&&(s=Qe.min()),a===void 0&&(a=Sn.EMPTY_BYTE_STRING),this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}return n.prototype.withSequenceNumber=function(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)},n.prototype.withResumeToken=function(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)},n.prototype.withLastLimboFreeSnapshotVersion=function(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)},n}(),av=function(n){this.Lt=n};function Al(n,e){if(e.document)return BE(n.Lt,e.document,!!e.hasCommittedMutations);if(e.noDocument){var t=Ae.fromSegments(e.noDocument.path),i=No(e.noDocument.readTime),r=nn.newNoDocument(t,i);return e.hasCommittedMutations?r.setHasCommittedMutations():r}if(e.unknownDocument){var o=Ae.fromSegments(e.unknownDocument.path);return i=No(e.unknownDocument.version),nn.newUnknownDocument(o,i)}return Te()}function ad(n,e,t){var i=Ph(t),r=e.key.path.popLast().toArray();if(e.isFoundDocument()){var o=function(h,f){return{name:Rs(h,f.key),fields:f.data.value.mapValue.fields,updateTime:As(h,f.version.toTimestamp())}}(n.Lt,e),s=e.hasCommittedMutations;return new vt(null,null,o,s,i,r)}if(e.isNoDocument()){var a=e.key.path.toArray(),u=Lo(e.version);return s=e.hasCommittedMutations,new vt(null,new jE(a,u),null,s,i,r)}if(e.isUnknownDocument()){var c=e.key.path.toArray(),l=Lo(e.version);return new vt(new XE(c,l),null,null,!0,i,r)}return Te()}function Ph(n){var e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function uv(n){var e=new yn(n[0],n[1]);return Qe.fromTimestamp(e)}function Lo(n){var e=n.toTimestamp();return new qE(e.seconds,e.nanoseconds)}function No(n){var e=new yn(n.seconds,n.nanoseconds);return Qe.fromTimestamp(e)}function co(n,e){for(var t=(e.baseMutations||[]).map(function(u){return td(n.Lt,u)}),i=0;i<e.mutations.length-1;++i){var r=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){var o=e.mutations[i+1];r.updateTransforms=o.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}var s=e.mutations.map(function(u){return td(n.Lt,u)}),a=yn.fromMillis(e.localWriteTimeMs);return new Ih(e.batchId,a,t,s)}function as(n){var e,t,i=No(n.readTime),r=n.lastLimboFreeSnapshotVersion!==void 0?No(n.lastLimboFreeSnapshotVersion):Qe.min();return n.query.documents!==void 0?(Ue((t=n.query).documents.length===1),e=ii(Ks(Qg(t.documents[0])))):e=function(o){return ii(tv(o))}(n.query),new Xu(e,n.targetId,0,n.lastListenSequenceNumber,i,r,Sn.fromBase64String(n.resumeToken))}function cv(n,e){var t,i=Lo(e.snapshotVersion),r=Lo(e.lastLimboFreeSnapshotVersion);t=uu(e.target)?Jg(n.Lt,e.target):ev(n.Lt,e.target);var o=e.resumeToken.toBase64();return new vn(e.targetId,Xs(e.target),i,o,e.sequenceNumber,r,t)}function lv(n){var e=tv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ng(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ZE=function(){function n(){}return n.prototype.getBundleMetadata=function(e,t){return ud(e).get(t).next(function(i){if(i)return{id:(r=i).bundleId,createTime:No(r.createTime),version:r.version};var r})},n.prototype.saveBundleMetadata=function(e,t){return ud(e).put({bundleId:(i=t).id,createTime:Lo(pn(i.createTime)),version:i.version});var i},n.prototype.getNamedQuery=function(e,t){return cd(e).get(t).next(function(i){if(i)return{name:(r=i).name,query:lv(r.bundledQuery),readTime:No(r.readTime)};var r})},n.prototype.saveNamedQuery=function(e,t){return cd(e).put(function(i){return{name:i.name,readTime:Lo(pn(i.readTime)),bundledQuery:i.bundledQuery}}(t))},n}();function ud(n){return bn(n,Io.store)}function cd(n){return bn(n,Po.store)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var JE=function(){function n(){this.Bt=new Dh}return n.prototype.addToCollectionParentIndex=function(e,t){return this.Bt.add(t),ne.resolve()},n.prototype.getCollectionParents=function(e,t){return ne.resolve(this.Bt.getEntries(t))},n}(),Dh=function(){function n(){this.index={}}return n.prototype.add=function(e){var t=e.lastSegment(),i=e.popLast(),r=this.index[t]||new Dt(ot.comparator),o=!r.has(i);return this.index[t]=r.add(i),o},n.prototype.has=function(e){var t=e.lastSegment(),i=e.popLast(),r=this.index[t];return r&&r.has(i)},n.prototype.getEntries=function(e){return(this.index[e]||new Dt(ot.comparator)).toArray()},n}(),eS=function(){function n(){this.qt=new Dh}return n.prototype.addToCollectionParentIndex=function(e,t){var i=this;if(!this.qt.has(t)){var r=t.lastSegment(),o=t.popLast();e.addOnCommittedListener(function(){i.qt.add(t)});var s={collectionId:r,parent:Xn(o)};return ld(e).put(s)}return ne.resolve()},n.prototype.getCollectionParents=function(e,t){var i=[],r=IDBKeyRange.bound([t,""],[wg(t),""],!1,!0);return ld(e).Nt(r).next(function(o){for(var s=0,a=o;s<a.length;s++){var u=a[s];if(u.collectionId!==t)break;i.push(mi(u.parent))}return i})},n}();function ld(n){return bn(n,gr.store)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$n=function(){function n(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}return n.withCacheSize=function(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(n,e,t){var i=n.store(ft.store),r=n.store(Qt.store),o=[],s=IDBKeyRange.only(t.batchId),a=0,u=i.$t({range:s},function(g,v,m){return a++,m.delete()});o.push(u.next(function(){Ue(a===1)}));for(var c=[],l=0,h=t.mutations;l<h.length;l++){var f=h[l],p=Qt.key(e,f.key.path,t.batchId);o.push(r.delete(p)),c.push(f.key)}return ne.waitFor(o).next(function(){return c})}function fu(n){if(!n)return 0;var e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw Te();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n.DEFAULT_COLLECTION_PERCENTILE=10,$n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$n.DEFAULT=new $n(41943040,$n.DEFAULT_COLLECTION_PERCENTILE,$n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$n.DISABLED=new $n(-1,0,0);var tS=function(){function n(e,t,i,r){this.userId=e,this.R=t,this.Ut=i,this.referenceDelegate=r,this.Kt={}}return n.Qt=function(e,t,i,r){return Ue(e.uid!==""),new n(e.isAuthenticated()?e.uid:"",t,i,r)},n.prototype.checkEmpty=function(e){var t=!0,i=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Mi(e).$t({index:ft.userMutationsIndex,range:i},function(r,o,s){t=!1,s.done()}).next(function(){return t})},n.prototype.addMutationBatch=function(e,t,i,r){var o=this,s=lo(e),a=Mi(e);return a.add({}).next(function(u){Ue(typeof u=="number");for(var c=new Ih(u,t,i,r),l=function(d,S,y){var x=y.baseMutations.map(function(C){return hu(d.Lt,C)}),T=y.mutations.map(function(C){return hu(d.Lt,C)});return new ft(S,y.batchId,y.localWriteTime.toMillis(),x,T)}(o.R,o.userId,c),h=[],f=new Dt(function(d,S){return et(d.canonicalString(),S.canonicalString())}),p=0,g=r;p<g.length;p++){var v=g[p],m=Qt.key(o.userId,v.key.path,u);f=f.add(v.key.path.popLast()),h.push(a.put(l)),h.push(s.put(m,Qt.PLACEHOLDER))}return f.forEach(function(d){h.push(o.Ut.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(function(){o.Kt[u]=c.keys()}),ne.waitFor(h).next(function(){return c})})},n.prototype.lookupMutationBatch=function(e,t){var i=this;return Mi(e).get(t).next(function(r){return r?(Ue(r.userId===i.userId),co(i.R,r)):null})},n.prototype.jt=function(e,t){var i=this;return this.Kt[t]?ne.resolve(this.Kt[t]):this.lookupMutationBatch(e,t).next(function(r){if(r){var o=r.keys();return i.Kt[t]=o,o}return null})},n.prototype.getNextMutationBatchAfterBatchId=function(e,t){var i=this,r=t+1,o=IDBKeyRange.lowerBound([this.userId,r]),s=null;return Mi(e).$t({index:ft.userMutationsIndex,range:o},function(a,u,c){u.userId===i.userId&&(Ue(u.batchId>=r),s=co(i.R,u)),c.done()}).next(function(){return s})},n.prototype.getHighestUnacknowledgedBatchId=function(e){var t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),i=-1;return Mi(e).$t({index:ft.userMutationsIndex,range:t,reverse:!0},function(r,o,s){i=o.batchId,s.done()}).next(function(){return i})},n.prototype.getAllMutationBatches=function(e){var t=this,i=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Mi(e).Nt(ft.userMutationsIndex,i).next(function(r){return r.map(function(o){return co(t.R,o)})})},n.prototype.getAllMutationBatchesAffectingDocumentKey=function(e,t){var i=this,r=Qt.prefixForPath(this.userId,t.path),o=IDBKeyRange.lowerBound(r),s=[];return lo(e).$t({range:o},function(a,u,c){var l=a[0],h=a[1],f=a[2],p=mi(h);if(l===i.userId&&t.path.isEqual(p))return Mi(e).get(f).next(function(g){if(!g)throw Te();Ue(g.userId===i.userId),s.push(co(i.R,g))});c.done()}).next(function(){return s})},n.prototype.getAllMutationBatchesAffectingDocumentKeys=function(e,t){var i=this,r=new Dt(et),o=[];return t.forEach(function(s){var a=Qt.prefixForPath(i.userId,s.path),u=IDBKeyRange.lowerBound(a),c=lo(e).$t({range:u},function(l,h,f){var p=l[0],g=l[1],v=l[2],m=mi(g);p===i.userId&&s.path.isEqual(m)?r=r.add(v):f.done()});o.push(c)}),ne.waitFor(o).next(function(){return i.Wt(e,r)})},n.prototype.getAllMutationBatchesAffectingQuery=function(e,t){var i=this,r=t.path,o=r.length+1,s=Qt.prefixForPath(this.userId,r),a=IDBKeyRange.lowerBound(s),u=new Dt(et);return lo(e).$t({range:a},function(c,l,h){var f=c[0],p=c[1],g=c[2],v=mi(p);f===i.userId&&r.isPrefixOf(v)?v.length===o&&(u=u.add(g)):h.done()}).next(function(){return i.Wt(e,u)})},n.prototype.Wt=function(e,t){var i=this,r=[],o=[];return t.forEach(function(s){o.push(Mi(e).get(s).next(function(a){if(a===null)throw Te();Ue(a.userId===i.userId),r.push(co(i.R,a))}))}),ne.waitFor(o).next(function(){return r})},n.prototype.removeMutationBatch=function(e,t){var i=this;return hv(e.Mt,this.userId,t).next(function(r){return e.addOnCommittedListener(function(){i.Gt(t.batchId)}),ne.forEach(r,function(o){return i.referenceDelegate.markPotentiallyOrphaned(e,o)})})},n.prototype.Gt=function(e){delete this.Kt[e]},n.prototype.performConsistencyCheck=function(e){var t=this;return this.checkEmpty(e).next(function(i){if(!i)return ne.resolve();var r=IDBKeyRange.lowerBound(Qt.prefixForUser(t.userId)),o=[];return lo(e).$t({range:r},function(s,a,u){if(s[0]===t.userId){var c=mi(s[1]);o.push(c)}else u.done()}).next(function(){Ue(o.length===0)})})},n.prototype.containsKey=function(e,t){return fv(e,this.userId,t)},n.prototype.zt=function(e){var t=this;return dv(e).get(this.userId).next(function(i){return i||new zi(t.userId,-1,"")})},n}();function fv(n,e,t){var i=Qt.prefixForPath(e,t.path),r=i[1],o=IDBKeyRange.lowerBound(i),s=!1;return lo(n).$t({range:o,Ft:!0},function(a,u,c){var l=a[0],h=a[1];a[2],l===e&&h===r&&(s=!0),c.done()}).next(function(){return s})}function Mi(n){return bn(n,ft.store)}function lo(n){return bn(n,Qt.store)}function dv(n){return bn(n,zi.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var du=function(){function n(e){this.Ht=e}return n.prototype.next=function(){return this.Ht+=2,this.Ht},n.Jt=function(){return new n(0)},n.Yt=function(){return new n(-1)},n}(),nS=function(){function n(e,t){this.referenceDelegate=e,this.R=t}return n.prototype.allocateTargetId=function(e){var t=this;return this.Xt(e).next(function(i){var r=new du(i.highestTargetId);return i.highestTargetId=r.next(),t.Zt(e,i).next(function(){return i.highestTargetId})})},n.prototype.getLastRemoteSnapshotVersion=function(e){return this.Xt(e).next(function(t){return Qe.fromTimestamp(new yn(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))})},n.prototype.getHighestSequenceNumber=function(e){return this.Xt(e).next(function(t){return t.highestListenSequenceNumber})},n.prototype.setTargetsMetadata=function(e,t,i){var r=this;return this.Xt(e).next(function(o){return o.highestListenSequenceNumber=t,i&&(o.lastRemoteSnapshotVersion=i.toTimestamp()),t>o.highestListenSequenceNumber&&(o.highestListenSequenceNumber=t),r.Zt(e,o)})},n.prototype.addTargetData=function(e,t){var i=this;return this.te(e,t).next(function(){return i.Xt(e).next(function(r){return r.targetCount+=1,i.ee(t,r),i.Zt(e,r)})})},n.prototype.updateTargetData=function(e,t){return this.te(e,t)},n.prototype.removeTargetData=function(e,t){var i=this;return this.removeMatchingKeysForTargetId(e,t.targetId).next(function(){return Hr(e).delete(t.targetId)}).next(function(){return i.Xt(e)}).next(function(r){return Ue(r.targetCount>0),r.targetCount-=1,i.Zt(e,r)})},n.prototype.removeTargets=function(e,t,i){var r=this,o=0,s=[];return Hr(e).$t(function(a,u){var c=as(u);c.sequenceNumber<=t&&i.get(c.targetId)===null&&(o++,s.push(r.removeTargetData(e,c)))}).next(function(){return ne.waitFor(s)}).next(function(){return o})},n.prototype.forEachTarget=function(e,t){return Hr(e).$t(function(i,r){var o=as(r);t(o)})},n.prototype.Xt=function(e){return fd(e).get(Rn.key).next(function(t){return Ue(t!==null),t})},n.prototype.Zt=function(e,t){return fd(e).put(Rn.key,t)},n.prototype.te=function(e,t){return Hr(e).put(cv(this.R,t))},n.prototype.ee=function(e,t){var i=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,i=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,i=!0),i},n.prototype.getTargetCount=function(e){return this.Xt(e).next(function(t){return t.targetCount})},n.prototype.getTargetData=function(e,t){var i=Xs(t),r=IDBKeyRange.bound([i,Number.NEGATIVE_INFINITY],[i,Number.POSITIVE_INFINITY]),o=null;return Hr(e).$t({range:r,index:vn.queryTargetsIndexName},function(s,a,u){var c=as(a);Hu(t,c.target)&&(o=c,u.done())}).next(function(){return o})},n.prototype.addMatchingKeys=function(e,t,i){var r=this,o=[],s=Oi(e);return t.forEach(function(a){var u=Xn(a.path);o.push(s.put(new Gt(i,u))),o.push(r.referenceDelegate.addReference(e,i,a))}),ne.waitFor(o)},n.prototype.removeMatchingKeys=function(e,t,i){var r=this,o=Oi(e);return ne.forEach(t,function(s){var a=Xn(s.path);return ne.waitFor([o.delete([i,a]),r.referenceDelegate.removeReference(e,i,s)])})},n.prototype.removeMatchingKeysForTargetId=function(e,t){var i=Oi(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return i.delete(r)},n.prototype.getMatchingKeysForTargetId=function(e,t){var i=IDBKeyRange.bound([t],[t+1],!1,!0),r=Oi(e),o=ut();return r.$t({range:i,Ft:!0},function(s,a,u){var c=mi(s[1]),l=new Ae(c);o=o.add(l)}).next(function(){return o})},n.prototype.containsKey=function(e,t){var i=Xn(t.path),r=IDBKeyRange.bound([i],[wg(i)],!1,!0),o=0;return Oi(e).$t({index:Gt.documentTargetsIndex,Ft:!0,range:r},function(s,a,u){var c=s[0];s[1],c!==0&&(o++,u.done())}).next(function(){return o>0})},n.prototype.lt=function(e,t){return Hr(e).get(t).next(function(i){return i?as(i):null})},n}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n){return bn(n,vn.store)}function fd(n){return bn(n,Rn.store)}function Oi(n){return bn(n,Gt.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n){return K(this,void 0,void 0,function(){return j(this,function(e){if(n.code!==F.FAILED_PRECONDITION||n.message!==rv)throw n;return ue("LocalStore","Unexpectedly lost primary lease"),[2]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(n,e){var t=n[0],i=n[1],r=e[0],o=e[1],s=et(t,r);return s===0?et(i,o):s}var iS=function(){function n(e){this.ne=e,this.buffer=new Dt(dd),this.se=0}return n.prototype.ie=function(){return++this.se},n.prototype.re=function(e){var t=[e,this.ie()];if(this.buffer.size<this.ne)this.buffer=this.buffer.add(t);else{var i=this.buffer.last();dd(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}},Object.defineProperty(n.prototype,"maxValue",{get:function(){return this.buffer.last()[0]},enumerable:!1,configurable:!0}),n}(),rS=function(){function n(e,t){this.garbageCollector=e,this.asyncQueue=t,this.oe=!1,this.ce=null}return n.prototype.start=function(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.ue(e)},n.prototype.stop=function(){this.ce&&(this.ce.cancel(),this.ce=null)},Object.defineProperty(n.prototype,"started",{get:function(){return this.ce!==null},enumerable:!1,configurable:!0}),n.prototype.ue=function(e){var t=this,i=this.oe?3e5:6e4;ue("LruGarbageCollector","Garbage collection scheduled in "+i+"ms"),this.ce=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",i,function(){return K(t,void 0,void 0,function(){var r;return j(this,function(o){switch(o.label){case 0:this.ce=null,this.oe=!0,o.label=1;case 1:return o.trys.push([1,3,,7]),[4,e.collectGarbage(this.garbageCollector)];case 2:return o.sent(),[3,7];case 3:return Or(r=o.sent())?(ue("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r),[3,6]):[3,4];case 4:return[4,Fr(r)];case 5:o.sent(),o.label=6;case 6:return[3,7];case 7:return[4,this.ue(e)];case 8:return o.sent(),[2]}})})})},n}(),oS=function(){function n(e,t){this.ae=e,this.params=t}return n.prototype.calculateTargetCount=function(e,t){return this.ae.he(e).next(function(i){return Math.floor(t/100*i)})},n.prototype.nthSequenceNumber=function(e,t){var i=this;if(t===0)return ne.resolve(In.o);var r=new iS(t);return this.ae.forEachTarget(e,function(o){return r.re(o.sequenceNumber)}).next(function(){return i.ae.le(e,function(o){return r.re(o)})}).next(function(){return r.maxValue})},n.prototype.removeTargets=function(e,t,i){return this.ae.removeTargets(e,t,i)},n.prototype.removeOrphanedDocuments=function(e,t){return this.ae.removeOrphanedDocuments(e,t)},n.prototype.collect=function(e,t){var i=this;return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),ne.resolve(hd)):this.getCacheSize(e).next(function(r){return r<i.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector","Garbage collection skipped; Cache size "+r+" is lower than threshold "+i.params.cacheSizeCollectionThreshold),hd):i.fe(e,t)})},n.prototype.getCacheSize=function(e){return this.ae.getCacheSize(e)},n.prototype.fe=function(e,t){var i,r,o,s,a,u,c,l=this,h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(function(f){return f>l.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector","Capping sequence numbers to collect down to the maximum of "+l.params.maximumSequenceNumbersToCollect+" from "+f),r=l.params.maximumSequenceNumbersToCollect):r=f,s=Date.now(),l.nthSequenceNumber(e,r)}).next(function(f){return i=f,a=Date.now(),l.removeTargets(e,i,t)}).next(function(f){return o=f,u=Date.now(),l.removeOrphanedDocuments(e,i)}).next(function(f){return c=Date.now(),El()<=rt.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in `+(s-h)+`ms
	Determined least recently used `+r+" in "+(a-s)+`ms
	Removed `+o+" targets in "+(u-a)+`ms
	Removed `+f+" documents in "+(c-u)+`ms
Total Duration: `+(c-h)+"ms"),ne.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:o,documentsRemoved:f})})},n}(),sS=function(){function n(e,t){this.db=e,this.garbageCollector=function(i,r){return new oS(i,r)}(this,t)}return n.prototype.he=function(e){var t=this.de(e);return this.db.getTargetCache().getTargetCount(e).next(function(i){return t.next(function(r){return i+r})})},n.prototype.de=function(e){var t=0;return this.le(e,function(i){t++}).next(function(){return t})},n.prototype.forEachTarget=function(e,t){return this.db.getTargetCache().forEachTarget(e,t)},n.prototype.le=function(e,t){return this.we(e,function(i,r){return t(r)})},n.prototype.addReference=function(e,t,i){return da(e,i)},n.prototype.removeReference=function(e,t,i){return da(e,i)},n.prototype.removeTargets=function(e,t,i){return this.db.getTargetCache().removeTargets(e,t,i)},n.prototype.markPotentiallyOrphaned=function(e,t){return da(e,t)},n.prototype._e=function(e,t){return function(i,r){var o=!1;return dv(i).Ot(function(s){return fv(i,s,r).next(function(a){return a&&(o=!0),ne.resolve(!a)})}).next(function(){return o})}(e,t)},n.prototype.removeOrphanedDocuments=function(e,t){var i=this,r=this.db.getRemoteDocumentCache().newChangeBuffer(),o=[],s=0;return this.we(e,function(a,u){if(u<=t){var c=i._e(e,a).next(function(l){if(!l)return s++,r.getEntry(e,a).next(function(){return r.removeEntry(a),Oi(e).delete([0,Xn(a.path)])})});o.push(c)}}).next(function(){return ne.waitFor(o)}).next(function(){return r.apply(e)}).next(function(){return s})},n.prototype.removeTarget=function(e,t){var i=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,i)},n.prototype.updateLimboDocument=function(e,t){return da(e,t)},n.prototype.we=function(e,t){var i,r=Oi(e),o=In.o;return r.$t({index:Gt.documentTargetsIndex},function(s,a){var u=s[0];s[1];var c=a.path,l=a.sequenceNumber;u===0?(o!==In.o&&t(new Ae(mi(i)),o),o=l,i=c):o=In.o}).next(function(){o!==In.o&&t(new Ae(mi(i)),o)})},n.prototype.getCacheSize=function(e){return this.db.getRemoteDocumentCache().getSize(e)},n}();function da(n,e){return Oi(n).put(function(t,i){return new Gt(0,Xn(t.path),i)}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jo=function(){function n(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}return n.prototype.get=function(e){var t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0)for(var r=0,o=i;r<o.length;r++){var s=o[r],a=s[0],u=s[1];if(this.equalsFn(a,e))return u}},n.prototype.has=function(e){return this.get(e)!==void 0},n.prototype.set=function(e,t){var i=this.mapKeyFn(e),r=this.inner[i];if(r!==void 0){for(var o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t])}else this.inner[i]=[[e,t]]},n.prototype.delete=function(e){var t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(var r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[t]:i.splice(r,1),!0;return!1},n.prototype.forEach=function(e){Nr(this.inner,function(t,i){for(var r=0,o=i;r<o.length;r++){var s=o[r],a=s[0],u=s[1];e(a,u)}})},n.prototype.isEmpty=function(){return Ag(this.inner)},n}(),pv=function(){function n(){this.changes=new jo(function(e){return e.toString()},function(e,t){return e.isEqual(t)}),this.changesApplied=!1}return n.prototype.getReadTime=function(e){var t=this.changes.get(e);return t?t.readTime:Qe.min()},n.prototype.addEntry=function(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})},n.prototype.removeEntry=function(e,t){t===void 0&&(t=null),this.assertNotApplied(),this.changes.set(e,{document:nn.newInvalidDocument(e),readTime:t})},n.prototype.getEntry=function(e,t){this.assertNotApplied();var i=this.changes.get(t);return i!==void 0?ne.resolve(i.document):this.getFromCache(e,t)},n.prototype.getEntries=function(e,t){return this.getAllFromCache(e,t)},n.prototype.apply=function(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)},n.prototype.assertNotApplied=function(){},n}(),aS=function(){function n(e,t){this.R=e,this.Ut=t}return n.prototype.addEntry=function(e,t,i){return Di(e).put(pa(t),i)},n.prototype.removeEntry=function(e,t){var i=Di(e),r=pa(t);return i.delete(r)},n.prototype.updateMetadata=function(e,t){var i=this;return this.getMetadata(e).next(function(r){return r.byteSize+=t,i.me(e,r)})},n.prototype.getEntry=function(e,t){var i=this;return Di(e).get(pa(t)).next(function(r){return i.ye(t,r)})},n.prototype.ge=function(e,t){var i=this;return Di(e).get(pa(t)).next(function(r){return{document:i.ye(t,r),size:fu(r)}})},n.prototype.getEntries=function(e,t){var i=this,r=jn();return this.pe(e,t,function(o,s){var a=i.ye(o,s);r=r.insert(o,a)}).next(function(){return r})},n.prototype.Ee=function(e,t){var i=this,r=jn(),o=new rn(Ae.comparator);return this.pe(e,t,function(s,a){var u=i.ye(s,a);r=r.insert(s,u),o=o.insert(s,fu(a))}).next(function(){return{documents:r,Te:o}})},n.prototype.pe=function(e,t,i){if(t.isEmpty())return ne.resolve();var r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),o=t.getIterator(),s=o.getNext();return Di(e).$t({range:r},function(a,u,c){for(var l=Ae.fromSegments(a);s&&Ae.comparator(s,l)<0;)i(s,null),s=o.getNext();s&&s.isEqual(l)&&(i(s,u),s=o.hasNext()?o.getNext():null),s?c.Ct(s.path.toArray()):c.done()}).next(function(){for(;s;)i(s,null),s=o.hasNext()?o.getNext():null})},n.prototype.getDocumentsMatchingQuery=function(e,t,i){var r=this,o=jn(),s=t.path.length+1,a={};if(i.isEqual(Qe.min())){var u=t.path.toArray();a.range=IDBKeyRange.lowerBound(u)}else{var c=t.path.toArray(),l=Ph(i);a.range=IDBKeyRange.lowerBound([c,l],!0),a.index=vt.collectionReadTimeIndex}return Di(e).$t(a,function(h,f,p){if(h.length===s){var g=Al(r.R,f);t.path.isPrefixOf(g.key.path)?$s(t,g)&&(o=o.insert(g.key,g)):p.done()}}).next(function(){return o})},n.prototype.newChangeBuffer=function(e){return new uS(this,!!e&&e.trackRemovals)},n.prototype.getSize=function(e){return this.getMetadata(e).next(function(t){return t.byteSize})},n.prototype.getMetadata=function(e){return pd(e).get(Zn.key).next(function(t){return Ue(!!t),t})},n.prototype.me=function(e,t){return pd(e).put(Zn.key,t)},n.prototype.ye=function(e,t){if(t){var i=Al(this.R,t);if(!i.isNoDocument()||!i.version.isEqual(Qe.min()))return i}return nn.newInvalidDocument(e)},n}(),uS=function(n){function e(t,i){var r=this;return(r=n.call(this)||this).Ie=t,r.trackRemovals=i,r.Ae=new jo(function(o){return o.toString()},function(o,s){return o.isEqual(s)}),r}return Ce(e,n),e.prototype.applyChanges=function(t){var i=this,r=[],o=0,s=new Dt(function(a,u){return et(a.canonicalString(),u.canonicalString())});return this.changes.forEach(function(a,u){var c=i.Ae.get(a);if(u.document.isValidDocument()){var l=ad(i.Ie.R,u.document,i.getReadTime(a));s=s.add(a.path.popLast());var h=fu(l);o+=h-c,r.push(i.Ie.addEntry(t,a,l))}else if(o-=c,i.trackRemovals){var f=ad(i.Ie.R,nn.newNoDocument(a,Qe.min()),i.getReadTime(a));r.push(i.Ie.addEntry(t,a,f))}else r.push(i.Ie.removeEntry(t,a))}),s.forEach(function(a){r.push(i.Ie.Ut.addToCollectionParentIndex(t,a))}),r.push(this.Ie.updateMetadata(t,o)),ne.waitFor(r)},e.prototype.getFromCache=function(t,i){var r=this;return this.Ie.ge(t,i).next(function(o){return r.Ae.set(i,o.size),o.document})},e.prototype.getAllFromCache=function(t,i){var r=this;return this.Ie.Ee(t,i).next(function(o){var s=o.documents;return o.Te.forEach(function(a,u){r.Ae.set(a,u)}),s})},e}(pv);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n){return bn(n,Zn.store)}function Di(n){return bn(n,vt.store)}function pa(n){return n.path.toArray()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cS=function(){function n(e){this.R=e}return n.prototype.Rt=function(e,t,i,r){var o=this;Ue(i<r&&i>=0&&r<=11);var s=new sv("createOrUpgrade",t);i<1&&r>=1&&(function(u){u.createObjectStore(An.store)}(e),function(u){u.createObjectStore(zi.store,{keyPath:zi.keyPath}),u.createObjectStore(ft.store,{keyPath:ft.keyPath,autoIncrement:!0}).createIndex(ft.userMutationsIndex,ft.userMutationsKeyPath,{unique:!0}),u.createObjectStore(Qt.store)}(e),md(e),function(u){u.createObjectStore(vt.store)}(e));var a=ne.resolve();return i<3&&r>=3&&(i!==0&&(function(u){u.deleteObjectStore(Gt.store),u.deleteObjectStore(vn.store),u.deleteObjectStore(Rn.store)}(e),md(e)),a=a.next(function(){return function(u){var c=u.store(Rn.store),l=new Rn(0,0,Qe.min().toTimestamp(),0);return c.put(Rn.key,l)}(s)})),i<4&&r>=4&&(i!==0&&(a=a.next(function(){return function(u,c){return c.store(ft.store).Nt().next(function(l){u.deleteObjectStore(ft.store),u.createObjectStore(ft.store,{keyPath:ft.keyPath,autoIncrement:!0}).createIndex(ft.userMutationsIndex,ft.userMutationsKeyPath,{unique:!0});var h=c.store(ft.store),f=l.map(function(p){return h.put(p)});return ne.waitFor(f)})}(e,s)})),a=a.next(function(){(function(u){u.createObjectStore(_i.store,{keyPath:_i.keyPath})})(e)})),i<5&&r>=5&&(a=a.next(function(){return o.Re(s)})),i<6&&r>=6&&(a=a.next(function(){return function(u){u.createObjectStore(Zn.store)}(e),o.be(s)})),i<7&&r>=7&&(a=a.next(function(){return o.ve(s)})),i<8&&r>=8&&(a=a.next(function(){return o.Pe(e,s)})),i<9&&r>=9&&(a=a.next(function(){(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e),function(u){var c=u.objectStore(vt.store);c.createIndex(vt.readTimeIndex,vt.readTimeIndexPath,{unique:!1}),c.createIndex(vt.collectionReadTimeIndex,vt.collectionReadTimeIndexPath,{unique:!1})}(t)})),i<10&&r>=10&&(a=a.next(function(){return o.Ve(s)})),i<11&&r>=11&&(a=a.next(function(){(function(u){u.createObjectStore(Io.store,{keyPath:Io.keyPath})})(e),function(u){u.createObjectStore(Po.store,{keyPath:Po.keyPath})}(e)})),a},n.prototype.be=function(e){var t=0;return e.store(vt.store).$t(function(i,r){t+=fu(r)}).next(function(){var i=new Zn(t);return e.store(Zn.store).put(Zn.key,i)})},n.prototype.Re=function(e){var t=this,i=e.store(zi.store),r=e.store(ft.store);return i.Nt().next(function(o){return ne.forEach(o,function(s){var a=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.Nt(ft.userMutationsIndex,a).next(function(u){return ne.forEach(u,function(c){Ue(c.userId===s.userId);var l=co(t.R,c);return hv(e,s.userId,l).next(function(){})})})})})},n.prototype.ve=function(e){var t=e.store(Gt.store),i=e.store(vt.store);return e.store(Rn.store).get(Rn.key).next(function(r){var o=[];return i.$t(function(s,a){var u=new ot(s),c=function(l){return[0,Xn(l)]}(u);o.push(t.get(c).next(function(l){return l?ne.resolve():function(h){return t.put(new Gt(0,Xn(h),r.highestListenSequenceNumber))}(u)}))}).next(function(){return ne.waitFor(o)})})},n.prototype.Pe=function(e,t){e.createObjectStore(gr.store,{keyPath:gr.keyPath});var i=t.store(gr.store),r=new Dh,o=function(s){if(r.add(s)){var a=s.lastSegment(),u=s.popLast();return i.put({collectionId:a,parent:Xn(u)})}};return t.store(vt.store).$t({Ft:!0},function(s,a){var u=new ot(s);return o(u.popLast())}).next(function(){return t.store(Qt.store).$t({Ft:!0},function(s,a){s[0];var u=s[1];s[2];var c=mi(u);return o(c.popLast())})})},n.prototype.Ve=function(e){var t=this,i=e.store(vn.store);return i.$t(function(r,o){var s=as(o),a=cv(t.R,s);return i.put(a)})},n}();function md(n){n.createObjectStore(Gt.store,{keyPath:Gt.keyPath}).createIndex(Gt.documentTargetsIndex,Gt.documentTargetsKeyPath,{unique:!0}),n.createObjectStore(vn.store,{keyPath:vn.keyPath}).createIndex(vn.queryTargetsIndexName,vn.queryTargetsKeyPath,{unique:!0}),n.createObjectStore(Rn.store)}var Mc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",lS=function(){function n(e,t,i,r,o,s,a,u,c,l){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=i,this.Se=o,this.window=s,this.document=a,this.De=c,this.Ce=l,this.Ne=null,this.xe=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ke=null,this.inForeground=!1,this.Fe=null,this.$e=null,this.Oe=Number.NEGATIVE_INFINITY,this.Me=function(h){return Promise.resolve()},!n.yt())throw new Z(F.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new sS(this,r),this.Le=t+"main",this.R=new av(u),this.Be=new Do(this.Le,11,new cS(this.R)),this.qe=new nS(this.referenceDelegate,this.R),this.Ut=new eS,this.Ue=function(h,f){return new aS(h,f)}(this.R,this.Ut),this.Ke=new ZE,this.window&&this.window.localStorage?this.Qe=this.window.localStorage:(this.Qe=null,l===!1&&wt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}return n.prototype.start=function(){var e=this;return this.je().then(function(){if(!e.isPrimary&&!e.allowTabSynchronization)throw new Z(F.FAILED_PRECONDITION,Mc);return e.We(),e.Ge(),e.ze(),e.runTransaction("getHighestListenSequenceNumber","readonly",function(t){return e.qe.getHighestSequenceNumber(t)})}).then(function(t){e.Ne=new In(t,e.De)}).then(function(){e.xe=!0}).catch(function(t){return e.Be&&e.Be.close(),Promise.reject(t)})},n.prototype.He=function(e){var t=this;return this.Me=function(i){return K(t,void 0,void 0,function(){return j(this,function(r){return this.started?[2,e(i)]:[2]})})},e(this.isPrimary)},n.prototype.setDatabaseDeletedListener=function(e){var t=this;this.Be.vt(function(i){return K(t,void 0,void 0,function(){return j(this,function(r){switch(r.label){case 0:return i.newVersion===null?[4,e()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})})},n.prototype.setNetworkEnabled=function(e){var t=this;this.networkEnabled!==e&&(this.networkEnabled=e,this.Se.enqueueAndForget(function(){return K(t,void 0,void 0,function(){return j(this,function(i){switch(i.label){case 0:return this.started?[4,this.je()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})}))},n.prototype.je=function(){var e=this;return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",function(t){return ma(t).put(new _i(e.clientId,Date.now(),e.networkEnabled,e.inForeground)).next(function(){if(e.isPrimary)return e.Je(t).next(function(i){i||(e.isPrimary=!1,e.Se.enqueueRetryable(function(){return e.Me(!1)}))})}).next(function(){return e.Ye(t)}).next(function(i){return e.isPrimary&&!i?e.Xe(t).next(function(){return!1}):!!i&&e.Ze(t).next(function(){return!0})})}).catch(function(t){if(Or(t))return ue("IndexedDbPersistence","Failed to extend owner lease: ",t),e.isPrimary;if(!e.allowTabSynchronization)throw t;return ue("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(function(t){e.isPrimary!==t&&e.Se.enqueueRetryable(function(){return e.Me(t)}),e.isPrimary=t})},n.prototype.Je=function(e){var t=this;return ts(e).get(An.key).next(function(i){return ne.resolve(t.tn(i))})},n.prototype.en=function(e){return ma(e).delete(this.clientId)},n.prototype.nn=function(){return K(this,void 0,void 0,function(){var e,t,i,r,o=this;return j(this,function(s){switch(s.label){case 0:return!this.isPrimary||this.sn(this.Oe,18e5)?[3,2]:(this.Oe=Date.now(),[4,this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",function(a){var u=bn(a,_i.store);return u.Nt().next(function(c){var l=o.rn(c,18e5),h=c.filter(function(f){return l.indexOf(f)===-1});return ne.forEach(h,function(f){return u.delete(f.clientId)}).next(function(){return h})})}).catch(function(){return[]})]);case 1:if(e=s.sent(),this.Qe)for(t=0,i=e;t<i.length;t++)r=i[t],this.Qe.removeItem(this.on(r.clientId));s.label=2;case 2:return[2]}})})},n.prototype.ze=function(){var e=this;this.$e=this.Se.enqueueAfterDelay("client_metadata_refresh",4e3,function(){return e.je().then(function(){return e.nn()}).then(function(){return e.ze()})})},n.prototype.tn=function(e){return!!e&&e.ownerId===this.clientId},n.prototype.Ye=function(e){var t=this;return this.Ce?ne.resolve(!0):ts(e).get(An.key).next(function(i){if(i!==null&&t.sn(i.leaseTimestampMs,5e3)&&!t.cn(i.ownerId)){if(t.tn(i)&&t.networkEnabled)return!0;if(!t.tn(i)){if(!i.allowTabSynchronization)throw new Z(F.FAILED_PRECONDITION,Mc);return!1}}return!(!t.networkEnabled||!t.inForeground)||ma(e).Nt().next(function(r){return t.rn(r,5e3).find(function(o){if(t.clientId!==o.clientId){var s=!t.networkEnabled&&o.networkEnabled,a=!t.inForeground&&o.inForeground,u=t.networkEnabled===o.networkEnabled;if(s||a&&u)return!0}return!1})===void 0})}).next(function(i){return t.isPrimary!==i&&ue("IndexedDbPersistence","Client "+(i?"is":"is not")+" eligible for a primary lease."),i})},n.prototype.shutdown=function(){return K(this,void 0,void 0,function(){var e=this;return j(this,function(t){switch(t.label){case 0:return this.xe=!1,this.un(),this.$e&&(this.$e.cancel(),this.$e=null),this.an(),this.hn(),[4,this.Be.runTransaction("shutdown","readwrite",[An.store,_i.store],function(i){var r=new sd(i,In.o);return e.Xe(r).next(function(){return e.en(r)})})];case 1:return t.sent(),this.Be.close(),this.ln(),[2]}})})},n.prototype.rn=function(e,t){var i=this;return e.filter(function(r){return i.sn(r.updateTimeMs,t)&&!i.cn(r.clientId)})},n.prototype.fn=function(){var e=this;return this.runTransaction("getActiveClients","readonly",function(t){return ma(t).Nt().next(function(i){return e.rn(i,18e5).map(function(r){return r.clientId})})})},Object.defineProperty(n.prototype,"started",{get:function(){return this.xe},enumerable:!1,configurable:!0}),n.prototype.getMutationQueue=function(e){return tS.Qt(e,this.R,this.Ut,this.referenceDelegate)},n.prototype.getTargetCache=function(){return this.qe},n.prototype.getRemoteDocumentCache=function(){return this.Ue},n.prototype.getIndexManager=function(){return this.Ut},n.prototype.getBundleCache=function(){return this.Ke},n.prototype.runTransaction=function(e,t,i){var r=this;ue("IndexedDbPersistence","Starting transaction:",e);var o,s=t==="readonly"?"readonly":"readwrite";return this.Be.runTransaction(e,s,KE,function(a){return o=new sd(a,r.Ne?r.Ne.next():In.o),t==="readwrite-primary"?r.Je(o).next(function(u){return!!u||r.Ye(o)}).next(function(u){if(!u)throw wt("Failed to obtain primary lease for action '"+e+"'."),r.isPrimary=!1,r.Se.enqueueRetryable(function(){return r.Me(!1)}),new Z(F.FAILED_PRECONDITION,rv);return i(o)}).next(function(u){return r.Ze(o).next(function(){return u})}):r.dn(o).next(function(){return i(o)})}).then(function(a){return o.raiseOnCommittedEvent(),a})},n.prototype.dn=function(e){var t=this;return ts(e).get(An.key).next(function(i){if(i!==null&&t.sn(i.leaseTimestampMs,5e3)&&!t.cn(i.ownerId)&&!t.tn(i)&&!(t.Ce||t.allowTabSynchronization&&i.allowTabSynchronization))throw new Z(F.FAILED_PRECONDITION,Mc)})},n.prototype.Ze=function(e){var t=new An(this.clientId,this.allowTabSynchronization,Date.now());return ts(e).put(An.key,t)},n.yt=function(){return Do.yt()},n.prototype.Xe=function(e){var t=this,i=ts(e);return i.get(An.key).next(function(r){return t.tn(r)?(ue("IndexedDbPersistence","Releasing primary lease."),i.delete(An.key)):ne.resolve()})},n.prototype.sn=function(e,t){var i=Date.now();return!(e<i-t||e>i&&(wt("Detected an update time that is in the future: "+e+" > "+i),1))},n.prototype.We=function(){var e=this;this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Fe=function(){e.Se.enqueueAndForget(function(){return e.inForeground=e.document.visibilityState==="visible",e.je()})},this.document.addEventListener("visibilitychange",this.Fe),this.inForeground=this.document.visibilityState==="visible")},n.prototype.an=function(){this.Fe&&(this.document.removeEventListener("visibilitychange",this.Fe),this.Fe=null)},n.prototype.Ge=function(){var e,t=this;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ke=function(){t.un(),g_()&&navigator.appVersion.match("Version/14")&&t.Se.enterRestrictedMode(!0),t.Se.enqueueAndForget(function(){return t.shutdown()})},this.window.addEventListener("pagehide",this.ke))},n.prototype.hn=function(){this.ke&&(this.window.removeEventListener("pagehide",this.ke),this.ke=null)},n.prototype.cn=function(e){var t;try{var i=((t=this.Qe)===null||t===void 0?void 0:t.getItem(this.on(e)))!==null;return ue("IndexedDbPersistence","Client '"+e+"' "+(i?"is":"is not")+" zombied in LocalStorage"),i}catch(r){return wt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}},n.prototype.un=function(){if(this.Qe)try{this.Qe.setItem(this.on(this.clientId),String(Date.now()))}catch(e){wt("Failed to set zombie client id.",e)}},n.prototype.ln=function(){if(this.Qe)try{this.Qe.removeItem(this.on(this.clientId))}catch{}},n.prototype.on=function(e){return"firestore_zombie_"+this.persistenceKey+"_"+e},n}();function ts(n){return bn(n,An.store)}function ma(n){return bn(n,_i.store)}function Lh(n,e){var t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}var mv=function(){function n(e,t,i){this.Ue=e,this._n=t,this.Ut=i}return n.prototype.mn=function(e,t){var i=this;return this._n.getAllMutationBatchesAffectingDocumentKey(e,t).next(function(r){return i.yn(e,t,r)})},n.prototype.yn=function(e,t,i){return this.Ue.getEntry(e,t).next(function(r){for(var o=0,s=i;o<s.length;o++)s[o].applyToLocalView(r);return r})},n.prototype.gn=function(e,t){e.forEach(function(i,r){for(var o=0,s=t;o<s.length;o++)s[o].applyToLocalView(r)})},n.prototype.pn=function(e,t){var i=this;return this.Ue.getEntries(e,t).next(function(r){return i.En(e,r).next(function(){return r})})},n.prototype.En=function(e,t){var i=this;return this._n.getAllMutationBatchesAffectingDocumentKeys(e,t).next(function(r){return i.gn(t,r)})},n.prototype.getDocumentsMatchingQuery=function(e,t,i){return function(r){return Ae.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.Tn(e,t.path):Th(t)?this.In(e,t,i):this.An(e,t,i)},n.prototype.Tn=function(e,t){return this.mn(e,new Ae(t)).next(function(i){var r=Ml();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})},n.prototype.In=function(e,t,i){var r=this,o=t.collectionGroup,s=Ml();return this.Ut.getCollectionParents(e,o).next(function(a){return ne.forEach(a,function(u){var c=function(l,h){return new bi(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,u.child(o));return r.An(e,c,i).next(function(l){l.forEach(function(h,f){s=s.insert(h,f)})})}).next(function(){return s})})},n.prototype.An=function(e,t,i){var r,o,s=this;return this.Ue.getDocumentsMatchingQuery(e,t,i).next(function(a){return r=a,s._n.getAllMutationBatchesAffectingQuery(e,t)}).next(function(a){return o=a,s.Rn(e,o,r).next(function(u){r=u;for(var c=0,l=o;c<l.length;c++)for(var h=l[c],f=0,p=h.mutations;f<p.length;f++){var g=p[f],v=g.key,m=r.get(v);m==null&&(m=nn.newInvalidDocument(v),r=r.insert(v,m)),Tl(g,m,h.localWriteTime),m.isFoundDocument()||(r=r.remove(v))}})}).next(function(){return r.forEach(function(a,u){$s(t,u)||(r=r.remove(a))}),r})},n.prototype.Rn=function(e,t,i){for(var r=ut(),o=0,s=t;o<s.length;o++)for(var a=0,u=s[o].mutations;a<u.length;a++){var c=u[a];c instanceof Qi&&i.get(c.key)===null&&(r=r.add(c.key))}var l=i;return this.Ue.getEntries(e,r).next(function(h){return h.forEach(function(f,p){p.isFoundDocument()&&(l=l.insert(f,p))}),l})},n}(),hS=function(){function n(e,t,i,r){this.targetId=e,this.fromCache=t,this.bn=i,this.vn=r}return n.Pn=function(e,t){for(var i=ut(),r=ut(),o=0,s=t.docChanges;o<s.length;o++){var a=s[o];switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:r=r.add(a.doc.key)}}return new n(e,t.fromCache,i,r)},n}(),gv=function(){function n(){}return n.prototype.Vn=function(e){this.Sn=e},n.prototype.getDocumentsMatchingQuery=function(e,t,i,r){var o=this;return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(t)||i.isEqual(Qe.min())?this.Dn(e,t):this.Sn.pn(e,r).next(function(s){var a=o.Cn(t,s);return(Ga(t)||lu(t))&&o.Nn(t.limitType,a,r,i)?o.Dn(e,t):(El()<=rt.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bl(t)),o.Sn.getDocumentsMatchingQuery(e,t,i).next(function(u){return a.forEach(function(c){u=u.insert(c.key,c)}),u}))})},n.prototype.Cn=function(e,t){var i=new Dt(Og(e));return t.forEach(function(r,o){$s(e,o)&&(i=i.add(o))}),i},n.prototype.Nn=function(e,t,i,r){if(i.size!==t.size)return!0;var o=e==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)},n.prototype.Dn=function(e,t){return El()<=rt.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",bl(t)),this.Sn.getDocumentsMatchingQuery(e,t,Qe.min())},n}(),fS=function(){function n(e,t,i,r){this.persistence=e,this.xn=t,this.R=r,this.kn=new rn(et),this.Fn=new jo(function(o){return Xs(o)},Hu),this.$n=Qe.min(),this._n=e.getMutationQueue(i),this.On=e.getRemoteDocumentCache(),this.qe=e.getTargetCache(),this.Mn=new mv(this.On,this._n,this.persistence.getIndexManager()),this.Ke=e.getBundleCache(),this.xn.Vn(this.Mn)}return n.prototype.collectGarbage=function(e){var t=this;return this.persistence.runTransaction("Collect garbage","readwrite-primary",function(i){return e.collect(i,t.kn)})},n}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(n,e,t,i){return new fS(n,e,t,i)}function yv(n,e){return K(this,void 0,void 0,function(){var t,i,r,o;return j(this,function(s){switch(s.label){case 0:return t=ve(n),i=t._n,r=t.Mn,[4,t.persistence.runTransaction("Handle user change","readonly",function(a){var u;return t._n.getAllMutationBatches(a).next(function(c){return u=c,i=t.persistence.getMutationQueue(e),r=new mv(t.On,i,t.persistence.getIndexManager()),i.getAllMutationBatches(a)}).next(function(c){for(var l=[],h=[],f=ut(),p=0,g=u;p<g.length;p++){var v=g[p];l.push(v.batchId);for(var m=0,d=v.mutations;m<d.length;m++){var S=d[m];f=f.add(S.key)}}for(var y=0,x=c;y<x.length;y++){var T=x[y];h.push(T.batchId);for(var C=0,w=T.mutations;C<w.length;C++){var H=w[C];f=f.add(H.key)}}return r.pn(a,f).next(function(E){return{Ln:E,removedBatchIds:l,addedBatchIds:h}})})})];case 1:return o=s.sent(),[2,(t._n=i,t.Mn=r,t.xn.Vn(t.Mn),o)]}})})}function dS(n,e){var t=ve(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",function(i){var r=e.batch.keys(),o=t.On.newChangeBuffer({trackRemovals:!0});return function(s,a,u,c){var l=u.batch,h=l.keys(),f=ne.resolve();return h.forEach(function(p){f=f.next(function(){return c.getEntry(a,p)}).next(function(g){var v=u.docVersions.get(p);Ue(v!==null),g.version.compareTo(v)<0&&(l.applyToRemoteDocument(g,u),g.isValidDocument()&&c.addEntry(g,u.commitVersion))})}),f.next(function(){return s._n.removeMutationBatch(a,l)})}(t,i,e,o).next(function(){return o.apply(i)}).next(function(){return t._n.performConsistencyCheck(i)}).next(function(){return t.Mn.pn(i,r)})})}function _v(n){var e=ve(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",function(t){return e.qe.getLastRemoteSnapshotVersion(t)})}function pS(n,e){var t=ve(n),i=e.snapshotVersion,r=t.kn;return t.persistence.runTransaction("Apply remote event","readwrite-primary",function(o){var s=t.On.newChangeBuffer({trackRemovals:!0});r=t.kn;var a=[];e.targetChanges.forEach(function(l,h){var f=r.get(h);if(f){a.push(t.qe.removeMatchingKeys(o,l.removedDocuments,h).next(function(){return t.qe.addMatchingKeys(o,l.addedDocuments,h)}));var p=l.resumeToken;if(p.approximateByteSize()>0){var g=f.withResumeToken(p,i).withSequenceNumber(o.currentSequenceNumber);r=r.insert(h,g),function(v,m,d){return Ue(m.resumeToken.approximateByteSize()>0),v.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0}(f,g,l)&&a.push(t.qe.updateTargetData(o,g))}}});var u=jn();if(e.documentUpdates.forEach(function(l,h){e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(o,l))}),a.push(mS(o,s,e.documentUpdates,i,void 0).next(function(l){u=l})),!i.isEqual(Qe.min())){var c=t.qe.getLastRemoteSnapshotVersion(o).next(function(l){return t.qe.setTargetsMetadata(o,o.currentSequenceNumber,i)});a.push(c)}return ne.waitFor(a).next(function(){return s.apply(o)}).next(function(){return t.Mn.En(o,u)}).next(function(){return u})}).then(function(o){return t.kn=r,o})}function mS(n,e,t,i,r){var o=ut();return t.forEach(function(s){return o=o.add(s)}),e.getEntries(n,o).next(function(s){var a=jn();return t.forEach(function(u,c){var l=s.get(u),h=(r==null?void 0:r.get(u))||i;c.isNoDocument()&&c.version.isEqual(Qe.min())?(e.removeEntry(u,h),a=a.insert(u,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c,h),a=a.insert(u,c)):ue("LocalStore","Ignoring outdated watch update for ",u,". Current version:",l.version," Watch version:",c.version)}),a})}function gS(n,e){var t=ve(n);return t.persistence.runTransaction("Get next mutation batch","readonly",function(i){return e===void 0&&(e=-1),t._n.getNextMutationBatchAfterBatchId(i,e)})}function pu(n,e){var t=ve(n);return t.persistence.runTransaction("Allocate target","readwrite",function(i){var r;return t.qe.getTargetData(i,e).next(function(o){return o?(r=o,ne.resolve(r)):t.qe.allocateTargetId(i).next(function(s){return r=new Xu(e,s,0,i.currentSequenceNumber),t.qe.addTargetData(i,r).next(function(){return r})})})}).then(function(i){var r=t.kn.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.kn=t.kn.insert(i.targetId,i),t.Fn.set(e,i.targetId)),i})}function Uo(n,e,t){return K(this,void 0,void 0,function(){var i,r,o,s;return j(this,function(a){switch(a.label){case 0:i=ve(n),r=i.kn.get(e),o=t?"readwrite":"readwrite-primary",a.label=1;case 1:return a.trys.push([1,4,,5]),t?[3,3]:[4,i.persistence.runTransaction("Release target",o,function(u){return i.persistence.referenceDelegate.removeTarget(u,r)})];case 2:a.sent(),a.label=3;case 3:return[3,5];case 4:if(!Or(s=a.sent()))throw s;return ue("LocalStore","Failed to update sequence numbers for target "+e+": "+s),[3,5];case 5:return i.kn=i.kn.remove(e),i.Fn.delete(r.target),[2]}})})}function mu(n,e,t){var i=ve(n),r=Qe.min(),o=ut();return i.persistence.runTransaction("Execute query","readonly",function(s){return function(a,u,c){var l=ve(a),h=l.Fn.get(c);return h!==void 0?ne.resolve(l.kn.get(h)):l.qe.getTargetData(u,c)}(i,s,ii(e)).next(function(a){if(a)return r=a.lastLimboFreeSnapshotVersion,i.qe.getMatchingKeysForTargetId(s,a.targetId).next(function(u){o=u})}).next(function(){return i.xn.getDocumentsMatchingQuery(s,e,t?r:Qe.min(),t?o:ut())}).next(function(a){return{documents:a,Bn:o}})})}function Ev(n,e){var t=ve(n),i=ve(t.qe),r=t.kn.get(e);return r?Promise.resolve(r.target):t.persistence.runTransaction("Get target data","readonly",function(o){return i.lt(o,e).next(function(s){return s?s.target:null})})}function Sv(n){var e=ve(n);return e.persistence.runTransaction("Get new document changes","readonly",function(t){return function(i,r,o){var s=ve(i),a=jn(),u=Ph(o),c=Di(r),l=IDBKeyRange.lowerBound(u,!0);return c.$t({index:vt.readTimeIndex,range:l},function(h,f){var p=Al(s.R,f);a=a.insert(p.key,p),u=f.readTime}).next(function(){return{wn:a,readTime:uv(u)}})}(e.On,t,e.$n)}).then(function(t){var i=t.wn,r=t.readTime;return e.$n=r,i})}function vS(n){return K(this,void 0,void 0,function(){var e;return j(this,function(t){return[2,(e=ve(n)).persistence.runTransaction("Synchronize last document change read time","readonly",function(i){return function(r){var o=Di(r),s=Qe.min();return o.$t({index:vt.readTimeIndex,reverse:!0},function(a,u,c){u.readTime&&(s=uv(u.readTime)),c.done()}).next(function(){return s})}(i)}).then(function(i){e.$n=i})]})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yS=function(){function n(e){this.R=e,this.Qn=new Map,this.jn=new Map}return n.prototype.getBundleMetadata=function(e,t){return ne.resolve(this.Qn.get(t))},n.prototype.saveBundleMetadata=function(e,t){var i;return this.Qn.set(t.id,{id:(i=t).id,version:i.version,createTime:pn(i.createTime)}),ne.resolve()},n.prototype.getNamedQuery=function(e,t){return ne.resolve(this.jn.get(t))},n.prototype.saveNamedQuery=function(e,t){return this.jn.set(t.name,function(i){return{name:i.name,query:lv(i.bundledQuery),readTime:pn(i.readTime)}}(t)),ne.resolve()},n}(),Nh=function(){function n(){this.Wn=new Dt(Ft.Gn),this.zn=new Dt(Ft.Hn)}return n.prototype.isEmpty=function(){return this.Wn.isEmpty()},n.prototype.addReference=function(e,t){var i=new Ft(e,t);this.Wn=this.Wn.add(i),this.zn=this.zn.add(i)},n.prototype.Jn=function(e,t){var i=this;e.forEach(function(r){return i.addReference(r,t)})},n.prototype.removeReference=function(e,t){this.Yn(new Ft(e,t))},n.prototype.Xn=function(e,t){var i=this;e.forEach(function(r){return i.removeReference(r,t)})},n.prototype.Zn=function(e){var t=this,i=new Ae(new ot([])),r=new Ft(i,e),o=new Ft(i,e+1),s=[];return this.zn.forEachInRange([r,o],function(a){t.Yn(a),s.push(a.key)}),s},n.prototype.ts=function(){var e=this;this.Wn.forEach(function(t){return e.Yn(t)})},n.prototype.Yn=function(e){this.Wn=this.Wn.delete(e),this.zn=this.zn.delete(e)},n.prototype.es=function(e){var t=new Ae(new ot([])),i=new Ft(t,e),r=new Ft(t,e+1),o=ut();return this.zn.forEachInRange([i,r],function(s){o=o.add(s.key)}),o},n.prototype.containsKey=function(e){var t=new Ft(e,0),i=this.Wn.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)},n}(),Ft=function(){function n(e,t){this.key=e,this.ns=t}return n.Gn=function(e,t){return Ae.comparator(e.key,t.key)||et(e.ns,t.ns)},n.Hn=function(e,t){return et(e.ns,t.ns)||Ae.comparator(e.key,t.key)},n}(),_S=function(){function n(e,t){this.Ut=e,this.referenceDelegate=t,this._n=[],this.ss=1,this.rs=new Dt(Ft.Gn)}return n.prototype.checkEmpty=function(e){return ne.resolve(this._n.length===0)},n.prototype.addMutationBatch=function(e,t,i,r){var o=this.ss;this.ss++,this._n.length>0&&this._n[this._n.length-1];var s=new Ih(o,t,i,r);this._n.push(s);for(var a=0,u=r;a<u.length;a++){var c=u[a];this.rs=this.rs.add(new Ft(c.key,o)),this.Ut.addToCollectionParentIndex(e,c.key.path.popLast())}return ne.resolve(s)},n.prototype.lookupMutationBatch=function(e,t){return ne.resolve(this.os(t))},n.prototype.getNextMutationBatchAfterBatchId=function(e,t){var i=t+1,r=this.cs(i),o=r<0?0:r;return ne.resolve(this._n.length>o?this._n[o]:null)},n.prototype.getHighestUnacknowledgedBatchId=function(){return ne.resolve(this._n.length===0?-1:this.ss-1)},n.prototype.getAllMutationBatches=function(e){return ne.resolve(this._n.slice())},n.prototype.getAllMutationBatchesAffectingDocumentKey=function(e,t){var i=this,r=new Ft(t,0),o=new Ft(t,Number.POSITIVE_INFINITY),s=[];return this.rs.forEachInRange([r,o],function(a){var u=i.os(a.ns);s.push(u)}),ne.resolve(s)},n.prototype.getAllMutationBatchesAffectingDocumentKeys=function(e,t){var i=this,r=new Dt(et);return t.forEach(function(o){var s=new Ft(o,0),a=new Ft(o,Number.POSITIVE_INFINITY);i.rs.forEachInRange([s,a],function(u){r=r.add(u.ns)})}),ne.resolve(this.us(r))},n.prototype.getAllMutationBatchesAffectingQuery=function(e,t){var i=t.path,r=i.length+1,o=i;Ae.isDocumentKey(o)||(o=o.child(""));var s=new Ft(new Ae(o),0),a=new Dt(et);return this.rs.forEachWhile(function(u){var c=u.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(a=a.add(u.ns)),!0)},s),ne.resolve(this.us(a))},n.prototype.us=function(e){var t=this,i=[];return e.forEach(function(r){var o=t.os(r);o!==null&&i.push(o)}),i},n.prototype.removeMutationBatch=function(e,t){var i=this;Ue(this.hs(t.batchId,"removed")===0),this._n.shift();var r=this.rs;return ne.forEach(t.mutations,function(o){var s=new Ft(o.key,t.batchId);return r=r.delete(s),i.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(function(){i.rs=r})},n.prototype.Gt=function(e){},n.prototype.containsKey=function(e,t){var i=new Ft(t,0),r=this.rs.firstAfterOrEqual(i);return ne.resolve(t.isEqual(r&&r.key))},n.prototype.performConsistencyCheck=function(e){return this._n.length,ne.resolve()},n.prototype.hs=function(e,t){return this.cs(e)},n.prototype.cs=function(e){return this._n.length===0?0:e-this._n[0].batchId},n.prototype.os=function(e){var t=this.cs(e);return t<0||t>=this._n.length?null:this._n[t]},n}(),ES=function(){function n(e,t){this.Ut=e,this.ls=t,this.docs=new rn(Ae.comparator),this.size=0}return n.prototype.addEntry=function(e,t,i){var r=t.key,o=this.docs.get(r),s=o?o.size:0,a=this.ls(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:a,readTime:i}),this.size+=a-s,this.Ut.addToCollectionParentIndex(e,r.path.popLast())},n.prototype.removeEntry=function(e){var t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)},n.prototype.getEntry=function(e,t){var i=this.docs.get(t);return ne.resolve(i?i.document.clone():nn.newInvalidDocument(t))},n.prototype.getEntries=function(e,t){var i=this,r=jn();return t.forEach(function(o){var s=i.docs.get(o);r=r.insert(o,s?s.document.clone():nn.newInvalidDocument(o))}),ne.resolve(r)},n.prototype.getDocumentsMatchingQuery=function(e,t,i){for(var r=jn(),o=new Ae(t.path.child("")),s=this.docs.getIteratorFrom(o);s.hasNext();){var a=s.getNext(),u=a.key,c=a.value,l=c.document,h=c.readTime;if(!t.path.isPrefixOf(u.path))break;h.compareTo(i)<=0||$s(t,l)&&(r=r.insert(l.key,l.clone()))}return ne.resolve(r)},n.prototype.fs=function(e,t){return ne.forEach(this.docs,function(i){return t(i)})},n.prototype.newChangeBuffer=function(e){return new SS(this)},n.prototype.getSize=function(e){return ne.resolve(this.size)},n}(),SS=function(n){function e(t){var i=this;return(i=n.call(this)||this).Ie=t,i}return Ce(e,n),e.prototype.applyChanges=function(t){var i=this,r=[];return this.changes.forEach(function(o,s){s.document.isValidDocument()?r.push(i.Ie.addEntry(t,s.document,i.getReadTime(o))):i.Ie.removeEntry(o)}),ne.waitFor(r)},e.prototype.getFromCache=function(t,i){return this.Ie.getEntry(t,i)},e.prototype.getAllFromCache=function(t,i){return this.Ie.getEntries(t,i)},e}(pv),xS=function(){function n(e){this.persistence=e,this.ds=new jo(function(t){return Xs(t)},Hu),this.lastRemoteSnapshotVersion=Qe.min(),this.highestTargetId=0,this.ws=0,this._s=new Nh,this.targetCount=0,this.ys=du.Jt()}return n.prototype.forEachTarget=function(e,t){return this.ds.forEach(function(i,r){return t(r)}),ne.resolve()},n.prototype.getLastRemoteSnapshotVersion=function(e){return ne.resolve(this.lastRemoteSnapshotVersion)},n.prototype.getHighestSequenceNumber=function(e){return ne.resolve(this.ws)},n.prototype.allocateTargetId=function(e){return this.highestTargetId=this.ys.next(),ne.resolve(this.highestTargetId)},n.prototype.setTargetsMetadata=function(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ws&&(this.ws=t),ne.resolve()},n.prototype.te=function(e){this.ds.set(e.target,e);var t=e.targetId;t>this.highestTargetId&&(this.ys=new du(t),this.highestTargetId=t),e.sequenceNumber>this.ws&&(this.ws=e.sequenceNumber)},n.prototype.addTargetData=function(e,t){return this.te(t),this.targetCount+=1,ne.resolve()},n.prototype.updateTargetData=function(e,t){return this.te(t),ne.resolve()},n.prototype.removeTargetData=function(e,t){return this.ds.delete(t.target),this._s.Zn(t.targetId),this.targetCount-=1,ne.resolve()},n.prototype.removeTargets=function(e,t,i){var r=this,o=0,s=[];return this.ds.forEach(function(a,u){u.sequenceNumber<=t&&i.get(u.targetId)===null&&(r.ds.delete(a),s.push(r.removeMatchingKeysForTargetId(e,u.targetId)),o++)}),ne.waitFor(s).next(function(){return o})},n.prototype.getTargetCount=function(e){return ne.resolve(this.targetCount)},n.prototype.getTargetData=function(e,t){var i=this.ds.get(t)||null;return ne.resolve(i)},n.prototype.addMatchingKeys=function(e,t,i){return this._s.Jn(t,i),ne.resolve()},n.prototype.removeMatchingKeys=function(e,t,i){this._s.Xn(t,i);var r=this.persistence.referenceDelegate,o=[];return r&&t.forEach(function(s){o.push(r.markPotentiallyOrphaned(e,s))}),ne.waitFor(o)},n.prototype.removeMatchingKeysForTargetId=function(e,t){return this._s.Zn(t),ne.resolve()},n.prototype.getMatchingKeysForTargetId=function(e,t){var i=this._s.es(t);return ne.resolve(i)},n.prototype.containsKey=function(e,t){return ne.resolve(this._s.containsKey(t))},n}(),bS=function(){function n(e,t){var i=this;this.gs={},this.Ne=new In(0),this.xe=!1,this.xe=!0,this.referenceDelegate=e(this),this.qe=new xS(this),this.Ut=new JE,this.Ue=function(r,o){return new ES(r,function(s){return i.referenceDelegate.ps(s)})}(this.Ut),this.R=new av(t),this.Ke=new yS(this.R)}return n.prototype.start=function(){return Promise.resolve()},n.prototype.shutdown=function(){return this.xe=!1,Promise.resolve()},Object.defineProperty(n.prototype,"started",{get:function(){return this.xe},enumerable:!1,configurable:!0}),n.prototype.setDatabaseDeletedListener=function(){},n.prototype.setNetworkEnabled=function(){},n.prototype.getIndexManager=function(){return this.Ut},n.prototype.getMutationQueue=function(e){var t=this.gs[e.toKey()];return t||(t=new _S(this.Ut,this.referenceDelegate),this.gs[e.toKey()]=t),t},n.prototype.getTargetCache=function(){return this.qe},n.prototype.getRemoteDocumentCache=function(){return this.Ue},n.prototype.getBundleCache=function(){return this.Ke},n.prototype.runTransaction=function(e,t,i){var r=this;ue("MemoryPersistence","Starting transaction:",e);var o=new TS(this.Ne.next());return this.referenceDelegate.Es(),i(o).next(function(s){return r.referenceDelegate.Ts(o).next(function(){return s})}).toPromise().then(function(s){return o.raiseOnCommittedEvent(),s})},n.prototype.Is=function(e,t){return ne.or(Object.values(this.gs).map(function(i){return function(){return i.containsKey(e,t)}}))},n}(),TS=function(n){function e(t){var i=this;return(i=n.call(this)||this).currentSequenceNumber=t,i}return Ce(e,n),e}(ov),MS=function(){function n(e){this.persistence=e,this.As=new Nh,this.Rs=null}return n.bs=function(e){return new n(e)},Object.defineProperty(n.prototype,"vs",{get:function(){if(this.Rs)return this.Rs;throw Te()},enumerable:!1,configurable:!0}),n.prototype.addReference=function(e,t,i){return this.As.addReference(i,t),this.vs.delete(i.toString()),ne.resolve()},n.prototype.removeReference=function(e,t,i){return this.As.removeReference(i,t),this.vs.add(i.toString()),ne.resolve()},n.prototype.markPotentiallyOrphaned=function(e,t){return this.vs.add(t.toString()),ne.resolve()},n.prototype.removeTarget=function(e,t){var i=this;this.As.Zn(t.targetId).forEach(function(o){return i.vs.add(o.toString())});var r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(function(o){o.forEach(function(s){return i.vs.add(s.toString())})}).next(function(){return r.removeTargetData(e,t)})},n.prototype.Es=function(){this.Rs=new Set},n.prototype.Ts=function(e){var t=this,i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ne.forEach(this.vs,function(r){var o=Ae.fromPath(r);return t.Ps(e,o).next(function(s){s||i.removeEntry(o)})}).next(function(){return t.Rs=null,i.apply(e)})},n.prototype.updateLimboDocument=function(e,t){var i=this;return this.Ps(e,t).next(function(r){r?i.vs.delete(t.toString()):i.vs.add(t.toString())})},n.prototype.ps=function(e){return 0},n.prototype.Ps=function(e,t){var i=this;return ne.or([function(){return ne.resolve(i.As.containsKey(t))},function(){return i.persistence.getTargetCache().containsKey(e,t)},function(){return i.persistence.Is(e,t)}])},n}(),zt=function(){function n(e){this.uid=e}return n.prototype.isAuthenticated=function(){return this.uid!=null},n.prototype.toKey=function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"},n.prototype.isEqual=function(e){return e.uid===this.uid},n}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(n,e){return"firestore_clients_"+n+"_"+e}function vd(n,e,t){var i="firestore_mutations_"+n+"_"+t;return e.isAuthenticated()&&(i+="_"+e.uid),i}function wc(n,e){return"firestore_targets_"+n+"_"+e}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");var yd=function(){function n(e,t,i,r){this.user=e,this.batchId=t,this.state=i,this.error=r}return n.Vs=function(e,t,i){var r,o=JSON.parse(i),s=typeof o=="object"&&["pending","acknowledged","rejected"].indexOf(o.state)!==-1&&(o.error===void 0||typeof o.error=="object");return s&&o.error&&(s=typeof o.error.message=="string"&&typeof o.error.code=="string")&&(r=new Z(o.error.code,o.error.message)),s?new n(e,t,o.state,r):(wt("SharedClientState","Failed to parse mutation state for ID '"+t+"': "+i),null)},n.prototype.Ss=function(){var e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)},n}(),Ac=function(){function n(e,t,i){this.targetId=e,this.state=t,this.error=i}return n.Vs=function(e,t){var i,r=JSON.parse(t),o=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string")&&(i=new Z(r.error.code,r.error.message)),o?new n(e,r.state,i):(wt("SharedClientState","Failed to parse target state for ID '"+e+"': "+t),null)},n.prototype.Ss=function(){var e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)},n}(),_d=function(){function n(e,t){this.clientId=e,this.activeTargetIds=t}return n.Vs=function(e,t){for(var i=JSON.parse(t),r=typeof i=="object"&&i.activeTargetIds instanceof Array,o=ju(),s=0;r&&s<i.activeTargetIds.length;++s)r=Ig(i.activeTargetIds[s]),o=o.add(i.activeTargetIds[s]);return r?new n(e,o):(wt("SharedClientState","Failed to parse client data for instance '"+e+"': "+t),null)},n}(),wS=function(){function n(e,t){this.clientId=e,this.onlineState=t}return n.Vs=function(e){var t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new n(t.clientId,t.onlineState):(wt("SharedClientState","Failed to parse online state: "+e),null)},n}(),Rl=function(){function n(){this.activeTargetIds=ju()}return n.prototype.Ds=function(e){this.activeTargetIds=this.activeTargetIds.add(e)},n.prototype.Cs=function(e){this.activeTargetIds=this.activeTargetIds.delete(e)},n.prototype.Ss=function(){var e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)},n}(),Rc=function(){function n(e,t,i,r,o){this.window=e,this.Se=t,this.persistenceKey=i,this.Ns=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.xs=this.ks.bind(this),this.Fs=new rn(et),this.started=!1,this.$s=[];var s=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=o,this.Os=gd(this.persistenceKey,this.Ns),this.Ms=function(a){return"firestore_sequence_number_"+a}(this.persistenceKey),this.Fs=this.Fs.insert(this.Ns,new Rl),this.Ls=new RegExp("^firestore_clients_"+s+"_([^_]*)$"),this.Bs=new RegExp("^firestore_mutations_"+s+"_(\\d+)(?:_(.*))?$"),this.qs=new RegExp("^firestore_targets_"+s+"_(\\d+)$"),this.Us=function(a){return"firestore_online_state_"+a}(this.persistenceKey),this.Ks=function(a){return"firestore_bundle_loaded_"+a}(this.persistenceKey),this.window.addEventListener("storage",this.xs)}return n.yt=function(e){return!(!e||!e.localStorage)},n.prototype.start=function(){return K(this,void 0,void 0,function(){var e,t,i,r,o,s,a,u,c,l,h,f=this;return j(this,function(p){switch(p.label){case 0:return[4,this.syncEngine.fn()];case 1:for(e=p.sent(),t=0,i=e;t<i.length;t++)(r=i[t])!==this.Ns&&(o=this.getItem(gd(this.persistenceKey,r)))&&(s=_d.Vs(r,o))&&(this.Fs=this.Fs.insert(s.clientId,s));for(this.Qs(),(a=this.storage.getItem(this.Us))&&(u=this.js(a))&&this.Ws(u),c=0,l=this.$s;c<l.length;c++)h=l[c],this.ks(h);return this.$s=[],this.window.addEventListener("pagehide",function(){return f.shutdown()}),this.started=!0,[2]}})})},n.prototype.writeSequenceNumber=function(e){this.setItem(this.Ms,JSON.stringify(e))},n.prototype.getAllActiveQueryTargets=function(){return this.Gs(this.Fs)},n.prototype.isActiveQueryTarget=function(e){var t=!1;return this.Fs.forEach(function(i,r){r.activeTargetIds.has(e)&&(t=!0)}),t},n.prototype.addPendingMutation=function(e){this.zs(e,"pending")},n.prototype.updateMutationState=function(e,t,i){this.zs(e,t,i),this.Hs(e)},n.prototype.addLocalQueryTarget=function(e){var t="not-current";if(this.isActiveQueryTarget(e)){var i=this.storage.getItem(wc(this.persistenceKey,e));if(i){var r=Ac.Vs(e,i);r&&(t=r.state)}}return this.Js.Ds(e),this.Qs(),t},n.prototype.removeLocalQueryTarget=function(e){this.Js.Cs(e),this.Qs()},n.prototype.isLocalQueryTarget=function(e){return this.Js.activeTargetIds.has(e)},n.prototype.clearQueryState=function(e){this.removeItem(wc(this.persistenceKey,e))},n.prototype.updateQueryState=function(e,t,i){this.Ys(e,t,i)},n.prototype.handleUserChange=function(e,t,i){var r=this;t.forEach(function(o){r.Hs(o)}),this.currentUser=e,i.forEach(function(o){r.addPendingMutation(o)})},n.prototype.setOnlineState=function(e){this.Xs(e)},n.prototype.notifyBundleLoaded=function(){this.Zs()},n.prototype.shutdown=function(){this.started&&(this.window.removeEventListener("storage",this.xs),this.removeItem(this.Os),this.started=!1)},n.prototype.getItem=function(e){var t=this.storage.getItem(e);return ue("SharedClientState","READ",e,t),t},n.prototype.setItem=function(e,t){ue("SharedClientState","SET",e,t),this.storage.setItem(e,t)},n.prototype.removeItem=function(e){ue("SharedClientState","REMOVE",e),this.storage.removeItem(e)},n.prototype.ks=function(e){var t=this,i=e;if(i.storageArea===this.storage){if(ue("SharedClientState","EVENT",i.key,i.newValue),i.key===this.Os)return void wt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Se.enqueueRetryable(function(){return K(t,void 0,void 0,function(){var r,o,s,a,u,c;return j(this,function(l){if(this.started){if(i.key!==null){if(this.Ls.test(i.key)){if(i.newValue==null)return r=this.ti(i.key),[2,this.ei(r,null)];if(o=this.ni(i.key,i.newValue))return[2,this.ei(o.clientId,o)]}else if(this.Bs.test(i.key)){if(i.newValue!==null&&(s=this.si(i.key,i.newValue)))return[2,this.ii(s)]}else if(this.qs.test(i.key)){if(i.newValue!==null&&(a=this.ri(i.key,i.newValue)))return[2,this.oi(a)]}else if(i.key===this.Us){if(i.newValue!==null&&(u=this.js(i.newValue)))return[2,this.Ws(u)]}else if(i.key===this.Ms)(c=function(h){var f=In.o;if(h!=null)try{var p=JSON.parse(h);Ue(typeof p=="number"),f=p}catch(g){wt("SharedClientState","Failed to read sequence number from WebStorage",g)}return f}(i.newValue))!==In.o&&this.sequenceNumberHandler(c);else if(i.key===this.Ks)return[2,this.syncEngine.ci()]}}else this.$s.push(i);return[2]})})})}},Object.defineProperty(n.prototype,"Js",{get:function(){return this.Fs.get(this.Ns)},enumerable:!1,configurable:!0}),n.prototype.Qs=function(){this.setItem(this.Os,this.Js.Ss())},n.prototype.zs=function(e,t,i){var r=new yd(this.currentUser,e,t,i),o=vd(this.persistenceKey,this.currentUser,e);this.setItem(o,r.Ss())},n.prototype.Hs=function(e){var t=vd(this.persistenceKey,this.currentUser,e);this.removeItem(t)},n.prototype.Xs=function(e){var t={clientId:this.Ns,onlineState:e};this.storage.setItem(this.Us,JSON.stringify(t))},n.prototype.Ys=function(e,t,i){var r=wc(this.persistenceKey,e),o=new Ac(e,t,i);this.setItem(r,o.Ss())},n.prototype.Zs=function(){this.setItem(this.Ks,"value-not-used")},n.prototype.ti=function(e){var t=this.Ls.exec(e);return t?t[1]:null},n.prototype.ni=function(e,t){var i=this.ti(e);return _d.Vs(i,t)},n.prototype.si=function(e,t){var i=this.Bs.exec(e),r=Number(i[1]),o=i[2]!==void 0?i[2]:null;return yd.Vs(new zt(o),r,t)},n.prototype.ri=function(e,t){var i=this.qs.exec(e),r=Number(i[1]);return Ac.Vs(r,t)},n.prototype.js=function(e){return wS.Vs(e)},n.prototype.ii=function(e){return K(this,void 0,void 0,function(){return j(this,function(t){return e.user.uid===this.currentUser.uid?[2,this.syncEngine.ui(e.batchId,e.state,e.error)]:(ue("SharedClientState","Ignoring mutation for non-active user "+e.user.uid),[2])})})},n.prototype.oi=function(e){return this.syncEngine.ai(e.targetId,e.state,e.error)},n.prototype.ei=function(e,t){var i=this,r=t?this.Fs.insert(e,t):this.Fs.remove(e),o=this.Gs(this.Fs),s=this.Gs(r),a=[],u=[];return s.forEach(function(c){o.has(c)||a.push(c)}),o.forEach(function(c){s.has(c)||u.push(c)}),this.syncEngine.hi(a,u).then(function(){i.Fs=r})},n.prototype.Ws=function(e){this.Fs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)},n.prototype.Gs=function(e){var t=ju();return e.forEach(function(i,r){t=t.unionWith(r.activeTargetIds)}),t},n}(),xv=function(){function n(){this.li=new Rl,this.fi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}return n.prototype.addPendingMutation=function(e){},n.prototype.updateMutationState=function(e,t,i){},n.prototype.addLocalQueryTarget=function(e){return this.li.Ds(e),this.fi[e]||"not-current"},n.prototype.updateQueryState=function(e,t,i){this.fi[e]=t},n.prototype.removeLocalQueryTarget=function(e){this.li.Cs(e)},n.prototype.isLocalQueryTarget=function(e){return this.li.activeTargetIds.has(e)},n.prototype.clearQueryState=function(e){delete this.fi[e]},n.prototype.getAllActiveQueryTargets=function(){return this.li.activeTargetIds},n.prototype.isActiveQueryTarget=function(e){return this.li.activeTargetIds.has(e)},n.prototype.start=function(){return this.li=new Rl,Promise.resolve()},n.prototype.handleUserChange=function(e,t,i){},n.prototype.setOnlineState=function(e){},n.prototype.shutdown=function(){},n.prototype.writeSequenceNumber=function(e){},n.prototype.notifyBundleLoaded=function(){},n}(),AS=function(){function n(){}return n.prototype.di=function(e){},n.prototype.shutdown=function(){},n}(),Ed=function(){function n(){var e=this;this.wi=function(){return e._i()},this.mi=function(){return e.yi()},this.gi=[],this.pi()}return n.prototype.di=function(e){this.gi.push(e)},n.prototype.shutdown=function(){window.removeEventListener("online",this.wi),window.removeEventListener("offline",this.mi)},n.prototype.pi=function(){window.addEventListener("online",this.wi),window.addEventListener("offline",this.mi)},n.prototype._i=function(){ue("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(var e=0,t=this.gi;e<t.length;e++)(0,t[e])(0)},n.prototype.yi=function(){ue("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(var e=0,t=this.gi;e<t.length;e++)(0,t[e])(1)},n.yt=function(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0},n}(),RS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"},CS=function(){function n(e){this.Ei=e.Ei,this.Ti=e.Ti}return n.prototype.Ii=function(e){this.Ai=e},n.prototype.Ri=function(e){this.bi=e},n.prototype.onMessage=function(e){this.vi=e},n.prototype.close=function(){this.Ti()},n.prototype.send=function(e){this.Ei(e)},n.prototype.Pi=function(){this.Ai()},n.prototype.Vi=function(e){this.bi(e)},n.prototype.Si=function(e){this.vi(e)},n}(),IS=function(n){function e(t){var i=this;return(i=n.call(this,t)||this).forceLongPolling=t.forceLongPolling,i.autoDetectLongPolling=t.autoDetectLongPolling,i.useFetchStreams=t.useFetchStreams,i}return Ce(e,n),e.prototype.Fi=function(t,i,r,o){return new Promise(function(s,a){var u=new aE;u.listenOnce(rE.COMPLETE,function(){try{switch(u.getLastErrorCode()){case Tc.NO_ERROR:var l=u.getResponseJson();ue("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Tc.TIMEOUT:ue("Connection",'RPC "'+t+'" timed out'),a(new Z(F.DEADLINE_EXCEEDED,"Request time out"));break;case Tc.HTTP_ERROR:var h=u.getStatus();if(ue("Connection",'RPC "'+t+'" failed with status:',h,"response text:",u.getResponseText()),h>0){var f=u.getResponseJson().error;if(f&&f.status&&f.message){var p=function(g){var v=g.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(v)>=0?v:F.UNKNOWN}(f.status);a(new Z(p,f.message))}else a(new Z(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new Z(F.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{ue("Connection",'RPC "'+t+'" completed.')}});var c=JSON.stringify(o);u.send(i,"POST",c,r,15)})},e.prototype.Oi=function(t,i){var r=[this.Di,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=nE(),s=iE(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new sE({})),this.ki(a.initMessageHeaders,i),c_()||f_()||d_()||p_()||m_()||h_()||(a.httpHeadersOverwriteParam="$httpHeaders");var u=r.join("");ue("Connection","Creating WebChannel: "+u,a);var c=o.createWebChannel(u,a),l=!1,h=!1,f=new CS({Ei:function(g){h?ue("Connection","Not sending because WebChannel is closed:",g):(l||(ue("Connection","Opening WebChannel transport."),c.open(),l=!0),ue("Connection","WebChannel sending:",g),c.send(g))},Ti:function(){return c.close()}}),p=function(g,v,m){g.listen(v,function(d){try{m(d)}catch(S){setTimeout(function(){throw S},0)}})};return p(c,ha.EventType.OPEN,function(){h||ue("Connection","WebChannel transport opened.")}),p(c,ha.EventType.CLOSE,function(){h||(h=!0,ue("Connection","WebChannel transport closed"),f.Vi())}),p(c,ha.EventType.ERROR,function(g){h||(h=!0,ou("Connection","WebChannel transport errored:",g),f.Vi(new Z(F.UNAVAILABLE,"The operation could not be completed")))}),p(c,ha.EventType.MESSAGE,function(g){var v;if(!h){var m=g.data[0];Ue(!!m);var d=m,S=d.error||((v=d[0])===null||v===void 0?void 0:v.error);if(S){ue("Connection","WebChannel received error:",S);var y=S.status,x=function(C){var w=Tt[C];if(w!==void 0)return jg(w)}(y),T=S.message;x===void 0&&(x=F.INTERNAL,T="Unknown error status: "+y+" with message "+S.message),h=!0,f.Vi(new Z(x,T)),c.close()}else ue("Connection","WebChannel received:",m),f.Si(m)}}),p(s,oE.STAT_EVENT,function(g){g.stat===Ff.PROXY?ue("Connection","Detected buffering proxy"):g.stat===Ff.NOPROXY&&ue("Connection","Detected no buffering proxy")}),setTimeout(function(){f.Pi()},0),f},e}(function(){function n(e){this.databaseInfo=e,this.databaseId=e.databaseId;var t=e.ssl?"https":"http";this.Di=t+"://"+e.host,this.Ci="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}return n.prototype.Ni=function(e,t,i,r){var o=this.xi(e,t);ue("RestConnection","Sending: ",o,i);var s={};return this.ki(s,r),this.Fi(e,o,s,i).then(function(a){return ue("RestConnection","Received: ",a),a},function(a){throw ou("RestConnection",e+" failed with error: ",a,"url: ",o,"request:",i),a})},n.prototype.$i=function(e,t,i,r){return this.Ni(e,t,i,r)},n.prototype.ki=function(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/8.10.1",e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(var i in t.authHeaders)t.authHeaders.hasOwnProperty(i)&&(e[i]=t.authHeaders[i])},n.prototype.xi=function(e,t){var i=RS[e];return this.Di+"/v1/"+t+":"+i},n}());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(){return typeof window!="undefined"?window:null}function qa(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(n){return new OE(n,!0)}var Uh=function(){function n(e,t,i,r,o){i===void 0&&(i=1e3),r===void 0&&(r=1.5),o===void 0&&(o=6e4),this.Se=e,this.timerId=t,this.Mi=i,this.Li=r,this.Bi=o,this.qi=0,this.Ui=null,this.Ki=Date.now(),this.reset()}return n.prototype.reset=function(){this.qi=0},n.prototype.Qi=function(){this.qi=this.Bi},n.prototype.ji=function(e){var t=this;this.cancel();var i=Math.floor(this.qi+this.Wi()),r=Math.max(0,Date.now()-this.Ki),o=Math.max(0,i-r);o>0&&ue("ExponentialBackoff","Backing off for "+o+" ms (base delay: "+this.qi+" ms, delay with jitter: "+i+" ms, last attempt: "+r+" ms ago)"),this.Ui=this.Se.enqueueAfterDelay(this.timerId,o,function(){return t.Ki=Date.now(),e()}),this.qi*=this.Li,this.qi<this.Mi&&(this.qi=this.Mi),this.qi>this.Bi&&(this.qi=this.Bi)},n.prototype.Gi=function(){this.Ui!==null&&(this.Ui.skipDelay(),this.Ui=null)},n.prototype.cancel=function(){this.Ui!==null&&(this.Ui.cancel(),this.Ui=null)},n.prototype.Wi=function(){return(Math.random()-.5)*this.qi},n}(),Tv=function(){function n(e,t,i,r,o,s){this.Se=e,this.zi=i,this.Hi=r,this.Ji=o,this.listener=s,this.state=0,this.Yi=0,this.Xi=null,this.stream=null,this.Zi=new Uh(e,t)}return n.prototype.tr=function(){return this.state===1||this.state===2||this.state===4},n.prototype.er=function(){return this.state===2},n.prototype.start=function(){this.state!==3?this.auth():this.nr()},n.prototype.stop=function(){return K(this,void 0,void 0,function(){return j(this,function(e){switch(e.label){case 0:return this.tr()?[4,this.close(0)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})},n.prototype.sr=function(){this.state=0,this.Zi.reset()},n.prototype.ir=function(){var e=this;this.er()&&this.Xi===null&&(this.Xi=this.Se.enqueueAfterDelay(this.zi,6e4,function(){return e.rr()}))},n.prototype.cr=function(e){this.ur(),this.stream.send(e)},n.prototype.rr=function(){return K(this,void 0,void 0,function(){return j(this,function(e){return this.er()?[2,this.close(0)]:[2]})})},n.prototype.ur=function(){this.Xi&&(this.Xi.cancel(),this.Xi=null)},n.prototype.close=function(e,t){return K(this,void 0,void 0,function(){return j(this,function(i){switch(i.label){case 0:return this.ur(),this.Zi.cancel(),this.Yi++,e!==3?this.Zi.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(wt(t.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.Zi.Qi()):t&&t.code===F.UNAUTHENTICATED&&this.Ji.invalidateToken(),this.stream!==null&&(this.ar(),this.stream.close(),this.stream=null),this.state=e,[4,this.listener.Ri(t)];case 1:return i.sent(),[2]}})})},n.prototype.ar=function(){},n.prototype.auth=function(){var e=this;this.state=1;var t=this.hr(this.Yi),i=this.Yi;this.Ji.getToken().then(function(r){e.Yi===i&&e.lr(r)},function(r){t(function(){var o=new Z(F.UNKNOWN,"Fetching auth token failed: "+r.message);return e.dr(o)})})},n.prototype.lr=function(e){var t=this,i=this.hr(this.Yi);this.stream=this.wr(e),this.stream.Ii(function(){i(function(){return t.state=2,t.listener.Ii()})}),this.stream.Ri(function(r){i(function(){return t.dr(r)})}),this.stream.onMessage(function(r){i(function(){return t.onMessage(r)})})},n.prototype.nr=function(){var e=this;this.state=4,this.Zi.ji(function(){return K(e,void 0,void 0,function(){return j(this,function(t){return this.state=0,this.start(),[2]})})})},n.prototype.dr=function(e){return ue("PersistentStream","close with error: "+e),this.stream=null,this.close(3,e)},n.prototype.hr=function(e){var t=this;return function(i){t.Se.enqueueAndForget(function(){return t.Yi===e?i():(ue("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())})}},n}(),PS=function(n){function e(t,i,r,o,s){var a=this;return(a=n.call(this,t,"listen_stream_connection_backoff","listen_stream_idle",i,r,s)||this).R=o,a}return Ce(e,n),e.prototype.wr=function(t){return this.Hi.Oi("Listen",t)},e.prototype.onMessage=function(t){this.Zi.reset();var i=function(o,s){var a;if("targetChange"in s){s.targetChange;var u=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Te()}(s.targetChange.targetChangeType||"NO_CHANGE"),c=s.targetChange.targetIds||[],l=function(m,d){return m.I?(Ue(d===void 0||typeof d=="string"),Sn.fromBase64String(d||"")):(Ue(d===void 0||d instanceof Uint8Array),Sn.fromUint8Array(d||new Uint8Array))}(o,s.targetChange.resumeToken),h=(f=s.targetChange.cause)&&function(m){var d=m.code===void 0?F.UNKNOWN:jg(m.code);return new Z(d,m.message||"")}(f);a=new Kg(u,c,l,h||null)}else if("documentChange"in s){s.documentChange,(u=s.documentChange).document,u.document.name,u.document.updateTime,c=yi(o,u.document.name),l=pn(u.document.updateTime);var f=new Cn({mapValue:{fields:u.document.fields}}),p=(h=nn.newFoundDocument(c,l,f),u.targetIds||[]),g=u.removedTargetIds||[];a=new Wa(p,g,h.key,h)}else if("documentDelete"in s)s.documentDelete,(u=s.documentDelete).document,c=yi(o,u.document),l=u.readTime?pn(u.readTime):Qe.min(),f=nn.newNoDocument(c,l),h=u.removedTargetIds||[],a=new Wa([],h,f.key,f);else if("documentRemove"in s)s.documentRemove,(u=s.documentRemove).document,c=yi(o,u.document),l=u.removedTargetIds||[],a=new Wa([],l,c,null);else{if(!("filter"in s))return Te();s.filter;var v=s.filter;v.targetId,u=v.count||0,c=new wE(u),l=v.targetId,a=new Xg(l,c)}return a}(this.R,t),r=function(o){if(!("targetChange"in o))return Qe.min();var s=o.targetChange;return s.targetIds&&s.targetIds.length?Qe.min():s.readTime?pn(s.readTime):Qe.min()}(t);return this.listener._r(i,r)},e.prototype.mr=function(t){var i={};i.database=Cs(this.R),i.addTarget=function(o,s){var a,u=s.target;return(a=uu(u)?{documents:Jg(o,u)}:{query:ev(o,u)}).targetId=s.targetId,s.resumeToken.approximateByteSize()>0?a.resumeToken=Yg(o,s.resumeToken):s.snapshotVersion.compareTo(Qe.min())>0&&(a.readTime=As(o,s.snapshotVersion.toTimestamp())),a}(this.R,t);var r=function(o,s){var a=function(u,c){switch(c){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Te()}}(0,s.purpose);return a==null?null:{"goog-listen-tags":a}}(this.R,t);r&&(i.labels=r),this.cr(i)},e.prototype.yr=function(t){var i={};i.database=Cs(this.R),i.removeTarget=t,this.cr(i)},e}(Tv),DS=function(n){function e(t,i,r,o,s){var a=this;return(a=n.call(this,t,"write_stream_connection_backoff","write_stream_idle",i,r,s)||this).R=o,a.gr=!1,a}return Ce(e,n),Object.defineProperty(e.prototype,"pr",{get:function(){return this.gr},enumerable:!1,configurable:!0}),e.prototype.start=function(){this.gr=!1,this.lastStreamToken=void 0,n.prototype.start.call(this)},e.prototype.ar=function(){this.gr&&this.Er([])},e.prototype.wr=function(t){return this.Hi.Oi("Write",t)},e.prototype.onMessage=function(t){if(Ue(!!t.streamToken),this.lastStreamToken=t.streamToken,this.gr){this.Zi.reset();var i=function(o,s){return o&&o.length>0?(Ue(s!==void 0),o.map(function(a){return function(u,c){var l=u.updateTime?pn(u.updateTime):pn(c);return l.isEqual(Qe.min())&&(l=pn(c)),new bE(l,u.transformResults||[])}(a,s)})):[]}(t.writeResults,t.commitTime),r=pn(t.commitTime);return this.listener.Tr(r,i)}return Ue(!t.writeResults||t.writeResults.length===0),this.gr=!0,this.listener.Ir()},e.prototype.Ar=function(){var t={};t.database=Cs(this.R),this.cr(t)},e.prototype.Er=function(t){var i=this,r={streamToken:this.lastStreamToken,writes:t.map(function(o){return hu(i.R,o)})};this.cr(r)},e}(Tv),LS=function(n){function e(t,i,r){var o=this;return(o=n.call(this)||this).credentials=t,o.Hi=i,o.R=r,o.Rr=!1,o}return Ce(e,n),e.prototype.br=function(){if(this.Rr)throw new Z(F.FAILED_PRECONDITION,"The client has already been terminated.")},e.prototype.Ni=function(t,i,r){var o=this;return this.br(),this.credentials.getToken().then(function(s){return o.Hi.Ni(t,i,r,s)}).catch(function(s){throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&o.credentials.invalidateToken(),s):new Z(F.UNKNOWN,s.toString())})},e.prototype.$i=function(t,i,r){var o=this;return this.br(),this.credentials.getToken().then(function(s){return o.Hi.$i(t,i,r,s)}).catch(function(s){throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&o.credentials.invalidateToken(),s):new Z(F.UNKNOWN,s.toString())})},e.prototype.terminate=function(){this.Rr=!0},e}(function(){}),NS=function(){function n(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.vr=0,this.Pr=null,this.Vr=!0}return n.prototype.Sr=function(){var e=this;this.vr===0&&(this.Dr("Unknown"),this.Pr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,function(){return e.Pr=null,e.Cr("Backend didn't respond within 10 seconds."),e.Dr("Offline"),Promise.resolve()}))},n.prototype.Nr=function(e){this.state==="Online"?this.Dr("Unknown"):(this.vr++,this.vr>=1&&(this.kr(),this.Cr("Connection failed 1 times. Most recent error: "+e.toString()),this.Dr("Offline")))},n.prototype.set=function(e){this.kr(),this.vr=0,e==="Online"&&(this.Vr=!1),this.Dr(e)},n.prototype.Dr=function(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))},n.prototype.Cr=function(e){var t="Could not reach Cloud Firestore backend. "+e+`
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Vr?(wt(t),this.Vr=!1):ue("OnlineStateTracker",t)},n.prototype.kr=function(){this.Pr!==null&&(this.Pr.cancel(),this.Pr=null)},n}(),US=function(n,e,t,i,r){var o=this;this.localStore=n,this.datastore=e,this.asyncQueue=t,this.remoteSyncer={},this.Fr=[],this.$r=new Map,this.Or=new Set,this.Mr=[],this.Lr=r,this.Lr.di(function(s){t.enqueueAndForget(function(){return K(o,void 0,void 0,function(){return j(this,function(a){switch(a.label){case 0:return Zi(this)?(ue("RemoteStore","Restarting streams for network reachability change."),[4,function(u){return K(this,void 0,void 0,function(){var c;return j(this,function(l){switch(l.label){case 0:return(c=ve(u)).Or.add(4),[4,Xo(c)];case 1:return l.sent(),c.Br.set("Unknown"),c.Or.delete(4),[4,ea(c)];case 2:return l.sent(),[2]}})})}(this)]):[3,2];case 1:a.sent(),a.label=2;case 2:return[2]}})})})}),this.Br=new NS(t,i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(n){return K(this,void 0,void 0,function(){var e,t;return j(this,function(i){switch(i.label){case 0:if(!Zi(n))return[3,4];e=0,t=n.Mr,i.label=1;case 1:return e<t.length?[4,(0,t[e])(!0)]:[3,4];case 2:i.sent(),i.label=3;case 3:return e++,[3,1];case 4:return[2]}})})}function Xo(n){return K(this,void 0,void 0,function(){var e,t;return j(this,function(i){switch(i.label){case 0:e=0,t=n.Mr,i.label=1;case 1:return e<t.length?[4,(0,t[e])(!1)]:[3,4];case 2:i.sent(),i.label=3;case 3:return e++,[3,1];case 4:return[2]}})})}function Yu(n,e){var t=ve(n);t.$r.has(e.targetId)||(t.$r.set(e.targetId,e),Bh(t)?Fh(t):Yo(t).er()&&Oh(t,e))}function Is(n,e){var t=ve(n),i=Yo(t);t.$r.delete(e),i.er()&&Mv(t,e),t.$r.size===0&&(i.er()?i.ir():Zi(t)&&t.Br.set("Unknown"))}function Oh(n,e){n.qr.U(e.targetId),Yo(n).mr(e)}function Mv(n,e){n.qr.U(e),Yo(n).yr(e)}function Fh(n){n.qr=new LE({getRemoteKeysForTarget:function(e){return n.remoteSyncer.getRemoteKeysForTarget(e)},lt:function(e){return n.$r.get(e)||null}}),Yo(n).start(),n.Br.Sr()}function Bh(n){return Zi(n)&&!Yo(n).tr()&&n.$r.size>0}function Zi(n){return ve(n).Or.size===0}function wv(n){n.qr=void 0}function OS(n){return K(this,void 0,void 0,function(){return j(this,function(e){return n.$r.forEach(function(t,i){Oh(n,t)}),[2]})})}function FS(n,e){return K(this,void 0,void 0,function(){return j(this,function(t){return wv(n),Bh(n)?(n.Br.Nr(e),Fh(n)):n.Br.set("Unknown"),[2]})})}function BS(n,e,t){return K(this,void 0,void 0,function(){var i,r,o;return j(this,function(s){switch(s.label){case 0:if(n.Br.set("Online"),!(e instanceof Kg&&e.state===2&&e.cause))return[3,6];s.label=1;case 1:return s.trys.push([1,3,,5]),[4,function(a,u){return K(this,void 0,void 0,function(){var c,l,h,f;return j(this,function(p){switch(p.label){case 0:c=u.cause,l=0,h=u.targetIds,p.label=1;case 1:return l<h.length?(f=h[l],a.$r.has(f)?[4,a.remoteSyncer.rejectListen(f,c)]:[3,3]):[3,5];case 2:p.sent(),a.$r.delete(f),a.qr.removeTarget(f),p.label=3;case 3:p.label=4;case 4:return l++,[3,1];case 5:return[2]}})})}(n,e)];case 2:return s.sent(),[3,5];case 3:return i=s.sent(),ue("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),[4,gu(n,i)];case 4:return s.sent(),[3,5];case 5:return[3,13];case 6:if(e instanceof Wa?n.qr.X(e):e instanceof Xg?n.qr.rt(e):n.qr.et(e),t.isEqual(Qe.min()))return[3,13];s.label=7;case 7:return s.trys.push([7,11,,13]),[4,_v(n.localStore)];case 8:return r=s.sent(),t.compareTo(r)>=0?[4,function(a,u){var c=a.qr.ut(u);return c.targetChanges.forEach(function(l,h){if(l.resumeToken.approximateByteSize()>0){var f=a.$r.get(h);f&&a.$r.set(h,f.withResumeToken(l.resumeToken,u))}}),c.targetMismatches.forEach(function(l){var h=a.$r.get(l);if(h){a.$r.set(l,h.withResumeToken(Sn.EMPTY_BYTE_STRING,h.snapshotVersion)),Mv(a,l);var f=new Xu(h.target,l,1,h.sequenceNumber);Oh(a,f)}}),a.remoteSyncer.applyRemoteEvent(c)}(n,t)]:[3,10];case 9:s.sent(),s.label=10;case 10:return[3,13];case 11:return ue("RemoteStore","Failed to raise snapshot:",o=s.sent()),[4,gu(n,o)];case 12:return s.sent(),[3,13];case 13:return[2]}})})}function gu(n,e,t){return K(this,void 0,void 0,function(){var i=this;return j(this,function(r){switch(r.label){case 0:if(!Or(e))throw e;return n.Or.add(1),[4,Xo(n)];case 1:return r.sent(),n.Br.set("Offline"),t||(t=function(){return _v(n.localStore)}),n.asyncQueue.enqueueRetryable(function(){return K(i,void 0,void 0,function(){return j(this,function(o){switch(o.label){case 0:return ue("RemoteStore","Retrying IndexedDB access"),[4,t()];case 1:return o.sent(),n.Or.delete(1),[4,ea(n)];case 2:return o.sent(),[2]}})})}),[2]}})})}function Av(n,e){return e().catch(function(t){return gu(n,t,e)})}function Ko(n){return K(this,void 0,void 0,function(){var e,t,i,r,o;return j(this,function(s){switch(s.label){case 0:e=ve(n),t=Xi(e),i=e.Fr.length>0?e.Fr[e.Fr.length-1].batchId:-1,s.label=1;case 1:if(!function(a){return Zi(a)&&a.Fr.length<10}(e))return[3,7];s.label=2;case 2:return s.trys.push([2,4,,6]),[4,gS(e.localStore,i)];case 3:return(r=s.sent())===null?(e.Fr.length===0&&t.ir(),[3,7]):(i=r.batchId,function(a,u){a.Fr.push(u);var c=Xi(a);c.er()&&c.pr&&c.Er(u.mutations)}(e,r),[3,6]);case 4:return o=s.sent(),[4,gu(e,o)];case 5:return s.sent(),[3,6];case 6:return[3,1];case 7:return Rv(e)&&Cv(e),[2]}})})}function Rv(n){return Zi(n)&&!Xi(n).tr()&&n.Fr.length>0}function Cv(n){Xi(n).start()}function kS(n){return K(this,void 0,void 0,function(){return j(this,function(e){return Xi(n).Ar(),[2]})})}function VS(n){return K(this,void 0,void 0,function(){var e,t,i,r;return j(this,function(o){for(e=Xi(n),t=0,i=n.Fr;t<i.length;t++)r=i[t],e.Er(r.mutations);return[2]})})}function zS(n,e,t){return K(this,void 0,void 0,function(){var i,r;return j(this,function(o){switch(o.label){case 0:return i=n.Fr.shift(),r=QE.from(i,e,t),[4,Av(n,function(){return n.remoteSyncer.applySuccessfulWrite(r)})];case 1:return o.sent(),[4,Ko(n)];case 2:return o.sent(),[2]}})})}function GS(n,e){return K(this,void 0,void 0,function(){return j(this,function(t){switch(t.label){case 0:return e&&Xi(n).pr?[4,function(i,r){return K(this,void 0,void 0,function(){var o,s;return j(this,function(a){switch(a.label){case 0:return qg(s=r.code)&&s!==F.ABORTED?(o=i.Fr.shift(),Xi(i).sr(),[4,Av(i,function(){return i.remoteSyncer.rejectFailedWrite(o.batchId,r)})]):[3,3];case 1:return a.sent(),[4,Ko(i)];case 2:a.sent(),a.label=3;case 3:return[2]}})})}(n,e)]:[3,2];case 1:t.sent(),t.label=2;case 2:return Rv(n)&&Cv(n),[2]}})})}function Cl(n,e){return K(this,void 0,void 0,function(){var t;return j(this,function(i){switch(i.label){case 0:return t=ve(n),e?(t.Or.delete(2),[4,ea(t)]):[3,2];case 1:return i.sent(),[3,5];case 2:return e?[3,4]:(t.Or.add(2),[4,Xo(t)]);case 3:i.sent(),t.Br.set("Unknown"),i.label=4;case 4:i.label=5;case 5:return[2]}})})}function Yo(n){var e=this;return n.Ur||(n.Ur=function(t,i,r){var o=ve(t);return o.br(),new PS(i,o.Hi,o.credentials,o.R,r)}(n.datastore,n.asyncQueue,{Ii:OS.bind(null,n),Ri:FS.bind(null,n),_r:BS.bind(null,n)}),n.Mr.push(function(t){return K(e,void 0,void 0,function(){return j(this,function(i){switch(i.label){case 0:return t?(n.Ur.sr(),Bh(n)?Fh(n):n.Br.set("Unknown"),[3,3]):[3,1];case 1:return[4,n.Ur.stop()];case 2:i.sent(),wv(n),i.label=3;case 3:return[2]}})})})),n.Ur}function Xi(n){var e=this;return n.Kr||(n.Kr=function(t,i,r){var o=ve(t);return o.br(),new DS(i,o.Hi,o.credentials,o.R,r)}(n.datastore,n.asyncQueue,{Ii:kS.bind(null,n),Ri:GS.bind(null,n),Ir:VS.bind(null,n),Tr:zS.bind(null,n)}),n.Mr.push(function(t){return K(e,void 0,void 0,function(){return j(this,function(i){switch(i.label){case 0:return t?(n.Kr.sr(),[4,Ko(n)]):[3,2];case 1:return i.sent(),[3,4];case 2:return[4,n.Kr.stop()];case 3:i.sent(),n.Fr.length>0&&(ue("RemoteStore","Stopping write stream with "+n.Fr.length+" pending writes"),n.Fr=[]),i.label=4;case 4:return[2]}})})})),n.Kr}var HS=function(){function n(e,t,i,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=o,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(function(s){})}return n.createAndSchedule=function(e,t,i,r,o){var s=new n(e,t,Date.now()+i,r,o);return s.start(i),s},n.prototype.start=function(e){var t=this;this.timerHandle=setTimeout(function(){return t.handleDelayElapsed()},e)},n.prototype.skipDelay=function(){return this.handleDelayElapsed()},n.prototype.cancel=function(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))},n.prototype.handleDelayElapsed=function(){var e=this;this.asyncQueue.enqueueAndForget(function(){return e.timerHandle!==null?(e.clearTimeout(),e.op().then(function(t){return e.deferred.resolve(t)})):Promise.resolve()})},n.prototype.clearTimeout=function(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)},n}();function $o(n,e){if(wt("AsyncQueue",e+": "+n),Or(n))return new Z(F.UNAVAILABLE,e+": "+n);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Iv=function(){function n(e){this.comparator=e?function(t,i){return e(t,i)||Ae.comparator(t.key,i.key)}:function(t,i){return Ae.comparator(t.key,i.key)},this.keyedMap=Ml(),this.sortedSet=new rn(this.comparator)}return n.emptySet=function(e){return new n(e.comparator)},n.prototype.has=function(e){return this.keyedMap.get(e)!=null},n.prototype.get=function(e){return this.keyedMap.get(e)},n.prototype.first=function(){return this.sortedSet.minKey()},n.prototype.last=function(){return this.sortedSet.maxKey()},n.prototype.isEmpty=function(){return this.sortedSet.isEmpty()},n.prototype.indexOf=function(e){var t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1},Object.defineProperty(n.prototype,"size",{get:function(){return this.sortedSet.size},enumerable:!1,configurable:!0}),n.prototype.forEach=function(e){this.sortedSet.inorderTraversal(function(t,i){return e(t),!1})},n.prototype.add=function(e){var t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))},n.prototype.delete=function(e){var t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this},n.prototype.isEqual=function(e){if(!(e instanceof n)||this.size!==e.size)return!1;for(var t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();t.hasNext();){var r=t.getNext().key,o=i.getNext().key;if(!r.isEqual(o))return!1}return!0},n.prototype.toString=function(){var e=[];return this.forEach(function(t){e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`},n.prototype.copy=function(e,t){var i=new n;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i},n}(),Sd=function(){function n(){this.Qr=new rn(Ae.comparator)}return n.prototype.track=function(e){var t=e.doc.key,i=this.Qr.get(t);i?e.type!==0&&i.type===3?this.Qr=this.Qr.insert(t,e):e.type===3&&i.type!==1?this.Qr=this.Qr.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Qr=this.Qr.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Qr=this.Qr.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Qr=this.Qr.remove(t):e.type===1&&i.type===2?this.Qr=this.Qr.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Qr=this.Qr.insert(t,{type:2,doc:e.doc}):Te():this.Qr=this.Qr.insert(t,e)},n.prototype.jr=function(){var e=[];return this.Qr.inorderTraversal(function(t,i){e.push(i)}),e},n}(),vu=function(){function n(e,t,i,r,o,s,a,u){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=u}return n.fromInitialDocuments=function(e,t,i,r){var o=[];return t.forEach(function(s){o.push({type:0,doc:s})}),new n(e,t,Iv.emptySet(t),o,i,r,!0,!1)},Object.defineProperty(n.prototype,"hasPendingWrites",{get:function(){return!this.mutatedKeys.isEmpty()},enumerable:!1,configurable:!0}),n.prototype.isEqual=function(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ys(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;var t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(var r=0;r<t.length;r++)if(t[r].type!==i[r].type||!t[r].doc.isEqual(i[r].doc))return!1;return!0},n}(),WS=function(){this.Wr=void 0,this.listeners=[]},qS=function(){this.queries=new jo(function(n){return Ug(n)},Ys),this.onlineState="Unknown",this.Gr=new Set};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(n,e){return K(this,void 0,void 0,function(){var t,i,r,o,s,a,u;return j(this,function(c){switch(c.label){case 0:if(t=ve(n),i=e.query,r=!1,(o=t.queries.get(i))||(r=!0,o=new WS),!r)return[3,4];c.label=1;case 1:return c.trys.push([1,3,,4]),s=o,[4,t.onListen(i)];case 2:return s.Wr=c.sent(),[3,4];case 3:return a=c.sent(),u=$o(a,"Initialization of query '"+bl(e.query)+"' failed"),[2,void e.onError(u)];case 4:return t.queries.set(i,o),o.listeners.push(e),e.zr(t.onlineState),o.Wr&&e.Hr(o.Wr)&&zh(t),[2]}})})}function Vh(n,e){return K(this,void 0,void 0,function(){var t,i,r,o,s;return j(this,function(a){return t=ve(n),i=e.query,r=!1,(o=t.queries.get(i))&&(s=o.listeners.indexOf(e))>=0&&(o.listeners.splice(s,1),r=o.listeners.length===0),r?[2,(t.queries.delete(i),t.onUnlisten(i))]:[2]})})}function jS(n,e){for(var t=ve(n),i=!1,r=0,o=e;r<o.length;r++){var s=o[r],a=s.query,u=t.queries.get(a);if(u){for(var c=0,l=u.listeners;c<l.length;c++)l[c].Hr(s)&&(i=!0);u.Wr=s}}i&&zh(t)}function XS(n,e,t){var i=ve(n),r=i.queries.get(e);if(r)for(var o=0,s=r.listeners;o<s.length;o++)s[o].onError(t);i.queries.delete(e)}function zh(n){n.Gr.forEach(function(e){e.next()})}var Gh=function(){function n(e,t,i){this.query=e,this.Jr=t,this.Yr=!1,this.Xr=null,this.onlineState="Unknown",this.options=i||{}}return n.prototype.Hr=function(e){if(!this.options.includeMetadataChanges){for(var t=[],i=0,r=e.docChanges;i<r.length;i++){var o=r[i];o.type!==3&&t.push(o)}e=new vu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}var s=!1;return this.Yr?this.Zr(e)&&(this.Jr.next(e),s=!0):this.eo(e,this.onlineState)&&(this.no(e),s=!0),this.Xr=e,s},n.prototype.onError=function(e){this.Jr.error(e)},n.prototype.zr=function(e){this.onlineState=e;var t=!1;return this.Xr&&!this.Yr&&this.eo(this.Xr,e)&&(this.no(this.Xr),t=!0),t},n.prototype.eo=function(e,t){if(!e.fromCache)return!0;var i=t!=="Offline";return!(this.options.so&&i||e.docs.isEmpty()&&t!=="Offline")},n.prototype.Zr=function(e){if(e.docChanges.length>0)return!0;var t=this.Xr&&this.Xr.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0},n.prototype.no=function(e){e=vu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Yr=!0,this.Jr.next(e)},n}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pv=function(n){this.key=n},Dv=function(n){this.key=n},Lv=function(){function n(e,t){this.query=e,this.uo=t,this.ao=null,this.current=!1,this.ho=ut(),this.mutatedKeys=ut(),this.lo=Og(e),this.fo=new Iv(this.lo)}return Object.defineProperty(n.prototype,"wo",{get:function(){return this.uo},enumerable:!1,configurable:!0}),n.prototype._o=function(e,t){var i=this,r=t?t.mo:new Sd,o=t?t.fo:this.fo,s=t?t.mutatedKeys:this.mutatedKeys,a=o,u=!1,c=Ga(this.query)&&o.size===this.query.limit?o.last():null,l=lu(this.query)&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(function(f,p){var g=o.get(f),v=$s(i.query,p)?p:null,m=!!g&&i.mutatedKeys.has(g.key),d=!!v&&(v.hasLocalMutations||i.mutatedKeys.has(v.key)&&v.hasCommittedMutations),S=!1;g&&v?g.data.isEqual(v.data)?m!==d&&(r.track({type:3,doc:v}),S=!0):i.yo(g,v)||(r.track({type:2,doc:v}),S=!0,(c&&i.lo(v,c)>0||l&&i.lo(v,l)<0)&&(u=!0)):!g&&v?(r.track({type:0,doc:v}),S=!0):g&&!v&&(r.track({type:1,doc:g}),S=!0,(c||l)&&(u=!0)),S&&(v?(a=a.add(v),s=d?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),Ga(this.query)||lu(this.query))for(;a.size>this.query.limit;){var h=Ga(this.query)?a.last():a.first();a=a.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{fo:a,mo:r,Nn:u,mutatedKeys:s}},n.prototype.yo=function(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations},n.prototype.applyChanges=function(e,t,i){var r=this,o=this.fo;this.fo=e.fo,this.mutatedKeys=e.mutatedKeys;var s=e.mo.jr();s.sort(function(l,h){return function(f,p){var g=function(v){switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return g(f)-g(p)}(l.type,h.type)||r.lo(l.doc,h.doc)}),this.po(i);var a=t?this.Eo():[],u=this.ho.size===0&&this.current?1:0,c=u!==this.ao;return this.ao=u,s.length!==0||c?{snapshot:new vu(this.query,e.fo,o,s,e.mutatedKeys,u===0,c,!1),To:a}:{To:a}},n.prototype.zr=function(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({fo:this.fo,mo:new Sd,mutatedKeys:this.mutatedKeys,Nn:!1},!1)):{To:[]}},n.prototype.Io=function(e){return!this.uo.has(e)&&!!this.fo.has(e)&&!this.fo.get(e).hasLocalMutations},n.prototype.po=function(e){var t=this;e&&(e.addedDocuments.forEach(function(i){return t.uo=t.uo.add(i)}),e.modifiedDocuments.forEach(function(i){}),e.removedDocuments.forEach(function(i){return t.uo=t.uo.delete(i)}),this.current=e.current)},n.prototype.Eo=function(){var e=this;if(!this.current)return[];var t=this.ho;this.ho=ut(),this.fo.forEach(function(r){e.Io(r.key)&&(e.ho=e.ho.add(r.key))});var i=[];return t.forEach(function(r){e.ho.has(r)||i.push(new Dv(r))}),this.ho.forEach(function(r){t.has(r)||i.push(new Pv(r))}),i},n.prototype.Ao=function(e){this.uo=e.Bn,this.ho=ut();var t=this._o(e.documents);return this.applyChanges(t,!0)},n.prototype.Ro=function(){return vu.fromInitialDocuments(this.query,this.fo,this.mutatedKeys,this.ao===0)},n}(),KS=function(n,e,t){this.query=n,this.targetId=e,this.view=t},YS=function(n){this.key=n,this.bo=!1},$S=function(){function n(e,t,i,r,o,s){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.vo={},this.Po=new jo(function(a){return Ug(a)},Ys),this.Vo=new Map,this.So=new Set,this.Do=new rn(Ae.comparator),this.Co=new Map,this.No=new Nh,this.xo={},this.ko=new Map,this.Fo=du.Yt(),this.onlineState="Unknown",this.$o=void 0}return Object.defineProperty(n.prototype,"isPrimaryClient",{get:function(){return this.$o===!0},enumerable:!1,configurable:!0}),n}();function QS(n,e){return K(this,void 0,void 0,function(){var t,i,r,o,s,a;return j(this,function(u){switch(u.label){case 0:return t=Xh(n),(o=t.Po.get(e))?(i=o.targetId,t.sharedClientState.addLocalQueryTarget(i),r=o.view.Ro(),[3,4]):[3,1];case 1:return[4,pu(t.localStore,ii(e))];case 2:return s=u.sent(),a=t.sharedClientState.addLocalQueryTarget(s.targetId),i=s.targetId,[4,Hh(t,e,i,a==="current")];case 3:r=u.sent(),t.isPrimaryClient&&Yu(t.remoteStore,s),u.label=4;case 4:return[2,r]}})})}function Hh(n,e,t,i){return K(this,void 0,void 0,function(){var r,o,s,a,u,c;return j(this,function(l){switch(l.label){case 0:return n.Oo=function(h,f,p){return function(g,v,m,d){return K(this,void 0,void 0,function(){var S,y,x;return j(this,function(T){switch(T.label){case 0:return S=v.view._o(m),S.Nn?[4,mu(g.localStore,v.query,!1).then(function(C){var w=C.documents;return v.view._o(w,S)})]:[3,2];case 1:S=T.sent(),T.label=2;case 2:return y=d&&d.targetChanges.get(v.targetId),x=v.view.applyChanges(S,g.isPrimaryClient,y),[2,(Il(g,v.targetId,x.To),x.snapshot)]}})})}(n,h,f,p)},[4,mu(n.localStore,e,!0)];case 1:return r=l.sent(),o=new Lv(e,r.Bn),s=o._o(r.documents),a=Ah.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline"),u=o.applyChanges(s,n.isPrimaryClient,a),Il(n,t,u.To),c=new KS(e,t,o),[2,(n.Po.set(e,c),n.Vo.has(t)?n.Vo.get(t).push(e):n.Vo.set(t,[e]),u.snapshot)]}})})}function ZS(n,e){return K(this,void 0,void 0,function(){var t,i,r;return j(this,function(o){switch(o.label){case 0:return t=ve(n),i=t.Po.get(e),(r=t.Vo.get(i.targetId)).length>1?[2,(t.Vo.set(i.targetId,r.filter(function(s){return!Ys(s,e)})),void t.Po.delete(e))]:t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)?[3,2]:[4,Uo(t.localStore,i.targetId,!1).then(function(){t.sharedClientState.clearQueryState(i.targetId),Is(t.remoteStore,i.targetId),Oo(t,i.targetId)}).catch(Fr)]):[3,3];case 1:o.sent(),o.label=2;case 2:return[3,5];case 3:return Oo(t,i.targetId),[4,Uo(t.localStore,i.targetId,!0)];case 4:o.sent(),o.label=5;case 5:return[2]}})})}function JS(n,e,t){return K(this,void 0,void 0,function(){var i,r,o,s;return j(this,function(a){switch(a.label){case 0:i=Kh(n),a.label=1;case 1:return a.trys.push([1,5,,6]),[4,function(u,c){var l,h=ve(u),f=yn.now(),p=c.reduce(function(g,v){return g.add(v.key)},ut());return h.persistence.runTransaction("Locally write mutations","readwrite",function(g){return h.Mn.pn(g,p).next(function(v){l=v;for(var m=[],d=0,S=c;d<S.length;d++){var y=S[d],x=ME(y,l.get(y.key));x!=null&&m.push(new Qi(y.key,x,Pg(x.value.mapValue),en.exists(!0)))}return h._n.addMutationBatch(g,f,m,c)})}).then(function(g){return g.applyToLocalDocumentSet(l),{batchId:g.batchId,changes:l}})}(i.localStore,e)];case 2:return r=a.sent(),i.sharedClientState.addPendingMutation(r.batchId),function(u,c,l){var h=u.xo[u.currentUser.toKey()];h||(h=new rn(et)),h=h.insert(c,l),u.xo[u.currentUser.toKey()]=h}(i,r.batchId,t),[4,Ji(i,r.changes)];case 3:return a.sent(),[4,Ko(i.remoteStore)];case 4:return a.sent(),[3,6];case 5:return o=a.sent(),s=$o(o,"Failed to persist write"),t.reject(s),[3,6];case 6:return[2]}})})}function Nv(n,e){return K(this,void 0,void 0,function(){var t,i;return j(this,function(r){switch(r.label){case 0:t=ve(n),r.label=1;case 1:return r.trys.push([1,4,,6]),[4,pS(t.localStore,e)];case 2:return i=r.sent(),e.targetChanges.forEach(function(o,s){var a=t.Co.get(s);a&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?a.bo=!0:o.modifiedDocuments.size>0?Ue(a.bo):o.removedDocuments.size>0&&(Ue(a.bo),a.bo=!1))}),[4,Ji(t,i,e)];case 3:return r.sent(),[3,6];case 4:return[4,Fr(r.sent())];case 5:return r.sent(),[3,6];case 6:return[2]}})})}function xd(n,e,t){var i=ve(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){var r=[];i.Po.forEach(function(o,s){var a=s.view.zr(e);a.snapshot&&r.push(a.snapshot)}),function(o,s){var a=ve(o);a.onlineState=s;var u=!1;a.queries.forEach(function(c,l){for(var h=0,f=l.listeners;h<f.length;h++)f[h].zr(s)&&(u=!0)}),u&&zh(a)}(i.eventManager,e),r.length&&i.vo._r(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}function ex(n,e,t){return K(this,void 0,void 0,function(){var i,r,o,s,a,u;return j(this,function(c){switch(c.label){case 0:return(i=ve(n)).sharedClientState.updateQueryState(e,"rejected",t),r=i.Co.get(e),(o=r&&r.key)?(s=(s=new rn(Ae.comparator)).insert(o,nn.newNoDocument(o,Qe.min())),a=ut().add(o),u=new wh(Qe.min(),new Map,new Dt(et),s,a),[4,Nv(i,u)]):[3,2];case 1:return c.sent(),i.Do=i.Do.remove(o),i.Co.delete(e),jh(i),[3,4];case 2:return[4,Uo(i.localStore,e,!1).then(function(){return Oo(i,e,t)}).catch(Fr)];case 3:c.sent(),c.label=4;case 4:return[2]}})})}function tx(n,e){return K(this,void 0,void 0,function(){var t,i,r;return j(this,function(o){switch(o.label){case 0:t=ve(n),i=e.batch.batchId,o.label=1;case 1:return o.trys.push([1,4,,6]),[4,dS(t.localStore,e)];case 2:return r=o.sent(),qh(t,i,null),Wh(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),[4,Ji(t,r)];case 3:return o.sent(),[3,6];case 4:return[4,Fr(o.sent())];case 5:return o.sent(),[3,6];case 6:return[2]}})})}function nx(n,e,t){return K(this,void 0,void 0,function(){var i,r;return j(this,function(o){switch(o.label){case 0:i=ve(n),o.label=1;case 1:return o.trys.push([1,4,,6]),[4,function(s,a){var u=ve(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",function(c){var l;return u._n.lookupMutationBatch(c,a).next(function(h){return Ue(h!==null),l=h.keys(),u._n.removeMutationBatch(c,h)}).next(function(){return u._n.performConsistencyCheck(c)}).next(function(){return u.Mn.pn(c,l)})})}(i.localStore,e)];case 2:return r=o.sent(),qh(i,e,t),Wh(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),[4,Ji(i,r)];case 3:return o.sent(),[3,6];case 4:return[4,Fr(o.sent())];case 5:return o.sent(),[3,6];case 6:return[2]}})})}function ix(n,e){return K(this,void 0,void 0,function(){var t,i,r,o,s;return j(this,function(a){switch(a.label){case 0:Zi((t=ve(n)).remoteStore)||ue("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,function(u){var c=ve(u);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",function(l){return c._n.getHighestUnacknowledgedBatchId(l)})}(t.localStore)];case 2:return(i=a.sent())===-1?[2,void e.resolve()]:((r=t.ko.get(i)||[]).push(e),t.ko.set(i,r),[3,4]);case 3:return o=a.sent(),s=$o(o,"Initialization of waitForPendingWrites() operation failed"),e.reject(s),[3,4];case 4:return[2]}})})}function Wh(n,e){(n.ko.get(e)||[]).forEach(function(t){t.resolve()}),n.ko.delete(e)}function qh(n,e,t){var i=ve(n),r=i.xo[i.currentUser.toKey()];if(r){var o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),i.xo[i.currentUser.toKey()]=r}}function Oo(n,e,t){t===void 0&&(t=null),n.sharedClientState.removeLocalQueryTarget(e);for(var i=0,r=n.Vo.get(e);i<r.length;i++){var o=r[i];n.Po.delete(o),t&&n.vo.Mo(o,t)}n.Vo.delete(e),n.isPrimaryClient&&n.No.Zn(e).forEach(function(s){n.No.containsKey(s)||Uv(n,s)})}function Uv(n,e){n.So.delete(e.path.canonicalString());var t=n.Do.get(e);t!==null&&(Is(n.remoteStore,t),n.Do=n.Do.remove(e),n.Co.delete(t),jh(n))}function Il(n,e,t){for(var i=0,r=t;i<r.length;i++){var o=r[i];o instanceof Pv?(n.No.addReference(o.key,e),rx(n,o)):o instanceof Dv?(ue("SyncEngine","Document no longer in limbo: "+o.key),n.No.removeReference(o.key,e),n.No.containsKey(o.key)||Uv(n,o.key)):Te()}}function rx(n,e){var t=e.key,i=t.path.canonicalString();n.Do.get(t)||n.So.has(i)||(ue("SyncEngine","New document in limbo: "+t),n.So.add(i),jh(n))}function jh(n){for(;n.So.size>0&&n.Do.size<n.maxConcurrentLimboResolutions;){var e=n.So.values().next().value;n.So.delete(e);var t=new Ae(ot.fromString(e)),i=n.Fo.next();n.Co.set(i,new YS(t)),n.Do=n.Do.insert(t,i),Yu(n.remoteStore,new Xu(ii(Ks(t.path)),i,2,In.o))}}function Ji(n,e,t){return K(this,void 0,void 0,function(){var i,r,o,s;return j(this,function(a){switch(a.label){case 0:return i=ve(n),r=[],o=[],s=[],i.Po.isEmpty()?[3,3]:(i.Po.forEach(function(u,c){s.push(i.Oo(c,e,t).then(function(l){if(l){i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);var h=hS.Pn(c.targetId,l);o.push(h)}}))}),[4,Promise.all(s)]);case 1:return a.sent(),i.vo._r(r),[4,function(u,c){return K(this,void 0,void 0,function(){var l,h,f,p,g,v,m,d,S;return j(this,function(y){switch(y.label){case 0:l=ve(u),y.label=1;case 1:return y.trys.push([1,3,,4]),[4,l.persistence.runTransaction("notifyLocalViewChanges","readwrite",function(x){return ne.forEach(c,function(T){return ne.forEach(T.bn,function(C){return l.persistence.referenceDelegate.addReference(x,T.targetId,C)}).next(function(){return ne.forEach(T.vn,function(C){return l.persistence.referenceDelegate.removeReference(x,T.targetId,C)})})})})];case 2:return y.sent(),[3,4];case 3:if(!Or(h=y.sent()))throw h;return ue("LocalStore","Failed to update sequence numbers: "+h),[3,4];case 4:for(f=0,p=c;f<p.length;f++)g=p[f],v=g.targetId,g.fromCache||(m=l.kn.get(v),d=m.snapshotVersion,S=m.withLastLimboFreeSnapshotVersion(d),l.kn=l.kn.insert(v,S));return[2]}})})}(i.localStore,o)];case 2:a.sent(),a.label=3;case 3:return[2]}})})}function ox(n,e){return K(this,void 0,void 0,function(){var t,i;return j(this,function(r){switch(r.label){case 0:return(t=ve(n)).currentUser.isEqual(e)?[3,3]:(ue("SyncEngine","User change. New user:",e.toKey()),[4,yv(t.localStore,e)]);case 1:return i=r.sent(),t.currentUser=e,function(o,s){o.ko.forEach(function(a){a.forEach(function(u){u.reject(new Z(F.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),o.ko.clear()}(t),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),[4,Ji(t,i.Ln)];case 2:r.sent(),r.label=3;case 3:return[2]}})})}function sx(n,e){var t=ve(n),i=t.Co.get(e);if(i&&i.bo)return ut().add(i.key);var r=ut(),o=t.Vo.get(e);if(!o)return r;for(var s=0,a=o;s<a.length;s++){var u=a[s],c=t.Po.get(u);r=r.unionWith(c.view.wo)}return r}function ax(n,e){return K(this,void 0,void 0,function(){var t,i,r;return j(this,function(o){switch(o.label){case 0:return[4,mu((t=ve(n)).localStore,e.query,!0)];case 1:return i=o.sent(),r=e.view.Ao(i),[2,(t.isPrimaryClient&&Il(t,e.targetId,r.To),r)]}})})}function ux(n){return K(this,void 0,void 0,function(){var e;return j(this,function(t){return[2,Sv((e=ve(n)).localStore).then(function(i){return Ji(e,i)})]})})}function cx(n,e,t,i){return K(this,void 0,void 0,function(){var r,o;return j(this,function(s){switch(s.label){case 0:return[4,function(a,u){var c=ve(a),l=ve(c._n);return c.persistence.runTransaction("Lookup mutation documents","readonly",function(h){return l.jt(h,u).next(function(f){return f?c.Mn.pn(h,f):ne.resolve(null)})})}((r=ve(n)).localStore,e)];case 1:return(o=s.sent())===null?[3,6]:t!=="pending"?[3,3]:[4,Ko(r.remoteStore)];case 2:return s.sent(),[3,4];case 3:t==="acknowledged"||t==="rejected"?(qh(r,e,i||null),Wh(r,e),function(a,u){ve(ve(a)._n).Gt(u)}(r.localStore,e)):Te(),s.label=4;case 4:return[4,Ji(r,o)];case 5:return s.sent(),[3,7];case 6:ue("SyncEngine","Cannot apply mutation batch with id: "+e),s.label=7;case 7:return[2]}})})}function lx(n,e){return K(this,void 0,void 0,function(){var t,i,r,o,s,a,u,c;return j(this,function(l){switch(l.label){case 0:return Xh(t=ve(n)),Kh(t),e!==!0||t.$o===!0?[3,3]:(i=t.sharedClientState.getAllActiveQueryTargets(),[4,bd(t,i.toArray())]);case 1:return r=l.sent(),t.$o=!0,[4,Cl(t.remoteStore,!0)];case 2:for(l.sent(),o=0,s=r;o<s.length;o++)a=s[o],Yu(t.remoteStore,a);return[3,7];case 3:return e!==!1||t.$o===!1?[3,7]:(u=[],c=Promise.resolve(),t.Vo.forEach(function(h,f){t.sharedClientState.isLocalQueryTarget(f)?u.push(f):c=c.then(function(){return Oo(t,f),Uo(t.localStore,f,!0)}),Is(t.remoteStore,f)}),[4,c]);case 4:return l.sent(),[4,bd(t,u)];case 5:return l.sent(),function(h){var f=ve(h);f.Co.forEach(function(p,g){Is(f.remoteStore,g)}),f.No.ts(),f.Co=new Map,f.Do=new rn(Ae.comparator)}(t),t.$o=!1,[4,Cl(t.remoteStore,!1)];case 6:l.sent(),l.label=7;case 7:return[2]}})})}function bd(n,e,t){return K(this,void 0,void 0,function(){var i,r,o,s,a,u,c,l,h,f,p,g,v,m;return j(this,function(d){switch(d.label){case 0:i=ve(n),r=[],o=[],s=0,a=e,d.label=1;case 1:return s<a.length?(u=a[s],c=void 0,(l=i.Vo.get(u))&&l.length!==0?[4,pu(i.localStore,ii(l[0]))]:[3,7]):[3,13];case 2:c=d.sent(),h=0,f=l,d.label=3;case 3:return h<f.length?(p=f[h],g=i.Po.get(p),[4,ax(i,g)]):[3,6];case 4:(v=d.sent()).snapshot&&o.push(v.snapshot),d.label=5;case 5:return h++,[3,3];case 6:return[3,11];case 7:return[4,Ev(i.localStore,u)];case 8:return m=d.sent(),[4,pu(i.localStore,m)];case 9:return c=d.sent(),[4,Hh(i,Ov(m),u,!1)];case 10:d.sent(),d.label=11;case 11:r.push(c),d.label=12;case 12:return s++,[3,1];case 13:return[2,(i.vo._r(o),r)]}})})}function Ov(n){return Lg(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function hx(n){var e=ve(n);return ve(ve(e.localStore).persistence).fn()}function fx(n,e,t,i){return K(this,void 0,void 0,function(){var r,o,s;return j(this,function(a){switch(a.label){case 0:return(r=ve(n)).$o?(ue("SyncEngine","Ignoring unexpected query state notification."),[3,8]):[3,1];case 1:if(!r.Vo.has(e))return[3,8];switch(t){case"current":case"not-current":return[3,2];case"rejected":return[3,5]}return[3,7];case 2:return[4,Sv(r.localStore)];case 3:return o=a.sent(),s=wh.createSynthesizedRemoteEventForCurrentChange(e,t==="current"),[4,Ji(r,o,s)];case 4:return a.sent(),[3,8];case 5:return[4,Uo(r.localStore,e,!0)];case 6:return a.sent(),Oo(r,e,i),[3,8];case 7:Te(),a.label=8;case 8:return[2]}})})}function dx(n,e,t){return K(this,void 0,void 0,function(){var i,r,o,s,a,u,c,l,h,f;return j(this,function(p){switch(p.label){case 0:if(!(i=Xh(n)).$o)return[3,10];r=0,o=e,p.label=1;case 1:return r<o.length?(s=o[r],i.Vo.has(s)?(ue("SyncEngine","Adding an already active target "+s),[3,5]):[4,Ev(i.localStore,s)]):[3,6];case 2:return a=p.sent(),[4,pu(i.localStore,a)];case 3:return u=p.sent(),[4,Hh(i,Ov(a),u.targetId,!1)];case 4:p.sent(),Yu(i.remoteStore,u),p.label=5;case 5:return r++,[3,1];case 6:c=function(g){return j(this,function(v){switch(v.label){case 0:return i.Vo.has(g)?[4,Uo(i.localStore,g,!1).then(function(){Is(i.remoteStore,g),Oo(i,g)}).catch(Fr)]:[3,2];case 1:v.sent(),v.label=2;case 2:return[2]}})},l=0,h=t,p.label=7;case 7:return l<h.length?(f=h[l],[5,c(f)]):[3,10];case 8:p.sent(),p.label=9;case 9:return l++,[3,7];case 10:return[2]}})})}function Xh(n){var e=ve(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ex.bind(null,e),e.vo._r=jS.bind(null,e.eventManager),e.vo.Mo=XS.bind(null,e.eventManager),e}function Kh(n){var e=ve(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nx.bind(null,e),e}var Fv=function(){function n(){this.synchronizeTabs=!1}return n.prototype.initialize=function(e){return K(this,void 0,void 0,function(){return j(this,function(t){switch(t.label){case 0:return this.R=Ku(e.databaseInfo.databaseId),this.sharedClientState=this.Bo(e),this.persistence=this.qo(e),[4,this.persistence.start()];case 1:return t.sent(),this.gcScheduler=this.Uo(e),this.localStore=this.Ko(e),[2]}})})},n.prototype.Uo=function(e){return null},n.prototype.Ko=function(e){return vv(this.persistence,new gv,e.initialUser,this.R)},n.prototype.qo=function(e){return new bS(MS.bs,this.R)},n.prototype.Bo=function(e){return new xv},n.prototype.terminate=function(){return K(this,void 0,void 0,function(){return j(this,function(e){switch(e.label){case 0:return this.gcScheduler&&this.gcScheduler.stop(),[4,this.sharedClientState.shutdown()];case 1:return e.sent(),[4,this.persistence.shutdown()];case 2:return e.sent(),[2]}})})},n}(),Bv=function(n){function e(t,i,r){var o=this;return(o=n.call(this)||this).Qo=t,o.cacheSizeBytes=i,o.forceOwnership=r,o.synchronizeTabs=!1,o}return Ce(e,n),e.prototype.initialize=function(t){return K(this,void 0,void 0,function(){var i=this;return j(this,function(r){switch(r.label){case 0:return[4,n.prototype.initialize.call(this,t)];case 1:return r.sent(),[4,vS(this.localStore)];case 2:return r.sent(),[4,this.Qo.initialize(this,t)];case 3:return r.sent(),[4,Kh(this.Qo.syncEngine)];case 4:return r.sent(),[4,Ko(this.Qo.remoteStore)];case 5:return r.sent(),[4,this.persistence.He(function(){return i.gcScheduler&&!i.gcScheduler.started&&i.gcScheduler.start(i.localStore),Promise.resolve()})];case 6:return r.sent(),[2]}})})},e.prototype.Ko=function(t){return vv(this.persistence,new gv,t.initialUser,this.R)},e.prototype.Uo=function(t){var i=this.persistence.referenceDelegate.garbageCollector;return new rS(i,t.asyncQueue)},e.prototype.qo=function(t){var i=Lh(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?$n.withCacheSize(this.cacheSizeBytes):$n.DEFAULT;return new lS(this.synchronizeTabs,i,t.clientId,r,t.asyncQueue,bv(),qa(),this.R,this.sharedClientState,!!this.forceOwnership)},e.prototype.Bo=function(t){return new xv},e}(Fv),px=function(n){function e(t,i){var r=this;return(r=n.call(this,t,i,!1)||this).Qo=t,r.cacheSizeBytes=i,r.synchronizeTabs=!0,r}return Ce(e,n),e.prototype.initialize=function(t){return K(this,void 0,void 0,function(){var i,r=this;return j(this,function(o){switch(o.label){case 0:return[4,n.prototype.initialize.call(this,t)];case 1:return o.sent(),i=this.Qo.syncEngine,this.sharedClientState instanceof Rc?(this.sharedClientState.syncEngine={ui:cx.bind(null,i),ai:fx.bind(null,i),hi:dx.bind(null,i),fn:hx.bind(null,i),ci:ux.bind(null,i)},[4,this.sharedClientState.start()]):[3,3];case 2:o.sent(),o.label=3;case 3:return[4,this.persistence.He(function(s){return K(r,void 0,void 0,function(){return j(this,function(a){switch(a.label){case 0:return[4,lx(this.Qo.syncEngine,s)];case 1:return a.sent(),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):s||this.gcScheduler.stop()),[2]}})})})];case 4:return o.sent(),[2]}})})},e.prototype.Bo=function(t){var i=bv();if(!Rc.yt(i))throw new Z(F.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");var r=Lh(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Rc(i,t.asyncQueue,r,t.clientId,t.initialUser)},e}(Bv),Pl=function(){function n(){}return n.prototype.initialize=function(e,t){return K(this,void 0,void 0,function(){var i=this;return j(this,function(r){switch(r.label){case 0:return this.localStore?[3,2]:(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=function(o){return xd(i.syncEngine,o,1)},this.remoteStore.remoteSyncer.handleCredentialChange=ox.bind(null,this.syncEngine),[4,Cl(this.remoteStore,this.syncEngine.isPrimaryClient)]);case 1:r.sent(),r.label=2;case 2:return[2]}})})},n.prototype.createEventManager=function(e){return new qS},n.prototype.createDatastore=function(e){var t,i=Ku(e.databaseInfo.databaseId),r=(t=e.databaseInfo,new IS(t));return function(o,s,a){return new LS(o,s,a)}(e.credentials,r,i)},n.prototype.createRemoteStore=function(e){var t,i,r,o,s,a=this;return t=this.localStore,i=this.datastore,r=e.asyncQueue,o=function(u){return xd(a.syncEngine,u,0)},s=Ed.yt()?new Ed:new AS,new US(t,i,r,o,s)},n.prototype.createSyncEngine=function(e,t){return function(i,r,o,s,a,u,c){var l=new $S(i,r,o,s,a,u);return c&&(l.$o=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)},n.prototype.terminate=function(){return function(e){return K(this,void 0,void 0,function(){var t;return j(this,function(i){switch(i.label){case 0:return t=ve(e),ue("RemoteStore","RemoteStore shutting down."),t.Or.add(5),[4,Xo(t)];case 1:return i.sent(),t.Lr.shutdown(),t.Br.set("Unknown"),[2]}})})}(this.remoteStore)},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $u=function(){function n(e){this.observer=e,this.muted=!1}return n.prototype.next=function(e){this.observer.next&&this.jo(this.observer.next,e)},n.prototype.error=function(e){this.observer.error?this.jo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)},n.prototype.Wo=function(){this.muted=!0},n.prototype.jo=function(e,t){var i=this;this.muted||setTimeout(function(){i.muted||e(t)},0)},n}(),mx=function(){function n(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}return n.prototype.lookup=function(e){return K(this,void 0,void 0,function(){var t,i=this;return j(this,function(r){switch(r.label){case 0:if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Z(F.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");return[4,function(o,s){return K(this,void 0,void 0,function(){var a,u,c,l,h,f;return j(this,function(p){switch(p.label){case 0:return a=ve(o),u=Cs(a.R)+"/documents",c={documents:s.map(function(g){return Rs(a.R,g)})},[4,a.$i("BatchGetDocuments",u,c)];case 1:return l=p.sent(),h=new Map,l.forEach(function(g){var v=function(m,d){return"found"in d?function(S,y){Ue(!!y.found),y.found.name,y.found.updateTime;var x=yi(S,y.found.name),T=pn(y.found.updateTime),C=new Cn({mapValue:{fields:y.found.fields}});return nn.newFoundDocument(x,T,C)}(m,d):"missing"in d?function(S,y){Ue(!!y.missing),Ue(!!y.readTime);var x=yi(S,y.missing),T=pn(y.readTime);return nn.newNoDocument(x,T)}(m,d):Te()}(a.R,g);h.set(v.key.toString(),v)}),f=[],[2,(s.forEach(function(g){var v=h.get(g.toString());Ue(!!v),f.push(v)}),f)]}})})}(this.datastore,e)];case 1:return[2,((t=r.sent()).forEach(function(o){return i.recordVersion(o)}),t)]}})})},n.prototype.set=function(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())},n.prototype.update=function(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())},n.prototype.delete=function(e){this.write(new Js(e,this.precondition(e))),this.writtenDocs.add(e.toString())},n.prototype.commit=function(){return K(this,void 0,void 0,function(){var e,t=this;return j(this,function(i){switch(i.label){case 0:if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;return e=this.readVersions,this.mutations.forEach(function(r){e.delete(r.key.toString())}),e.forEach(function(r,o){var s=Ae.fromPath(o);t.mutations.push(new Mh(s,t.precondition(s)))}),[4,function(r,o){return K(this,void 0,void 0,function(){var s,a,u;return j(this,function(c){switch(c.label){case 0:return s=ve(r),a=Cs(s.R)+"/documents",u={writes:o.map(function(l){return hu(s.R,l)})},[4,s.Ni("Commit",a,u)];case 1:return c.sent(),[2]}})})}(this.datastore,this.mutations)];case 1:return i.sent(),this.committed=!0,[2]}})})},n.prototype.recordVersion=function(e){var t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Te();t=Qe.min()}var i=this.readVersions.get(e.key.toString());if(i){if(!t.isEqual(i))throw new Z(F.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)},n.prototype.precondition=function(e){var t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?en.updateTime(t):en.none()},n.prototype.preconditionForUpdate=function(e){var t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Qe.min()))throw new Z(F.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return en.updateTime(t)}return en.exists(!0)},n.prototype.write=function(e){this.ensureCommitNotCalled(),this.mutations.push(e)},n.prototype.ensureCommitNotCalled=function(){},n}(),gx=function(){function n(e,t,i,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=i,this.deferred=r,this.ec=5,this.Zi=new Uh(this.asyncQueue,"transaction_retry")}return n.prototype.run=function(){this.ec-=1,this.nc()},n.prototype.nc=function(){var e=this;this.Zi.ji(function(){return K(e,void 0,void 0,function(){var t,i,r=this;return j(this,function(o){return t=new mx(this.datastore),(i=this.sc(t))&&i.then(function(s){r.asyncQueue.enqueueAndForget(function(){return t.commit().then(function(){r.deferred.resolve(s)}).catch(function(a){r.ic(a)})})}).catch(function(s){r.ic(s)}),[2]})})})},n.prototype.sc=function(e){try{var t=this.updateFunction(e);return!Ur(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(i){return this.deferred.reject(i),null}},n.prototype.ic=function(e){var t=this;this.ec>0&&this.rc(e)?(this.ec-=1,this.asyncQueue.enqueueAndForget(function(){return t.nc(),Promise.resolve()})):this.deferred.reject(e)},n.prototype.rc=function(e){if(e.name==="FirebaseError"){var t=e.code;return t==="aborted"||t==="failed-precondition"||!qg(t)}return!1},n}(),vx=function(){function n(e,t,i){var r=this;this.credentials=e,this.asyncQueue=t,this.databaseInfo=i,this.user=zt.UNAUTHENTICATED,this.clientId=Mg.u(),this.credentialListener=function(){return Promise.resolve()},this.credentials.setChangeListener(t,function(o){return K(r,void 0,void 0,function(){return j(this,function(s){switch(s.label){case 0:return ue("FirestoreClient","Received user=",o.uid),[4,this.credentialListener(o)];case 1:return s.sent(),this.user=o,[2]}})})})}return n.prototype.getConfiguration=function(){return K(this,void 0,void 0,function(){return j(this,function(e){return[2,{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}]})})},n.prototype.setCredentialChangeListener=function(e){this.credentialListener=e},n.prototype.verifyNotTerminated=function(){if(this.asyncQueue.isShuttingDown)throw new Z(F.FAILED_PRECONDITION,"The client has already been terminated.")},n.prototype.terminate=function(){var e=this;this.asyncQueue.enterRestrictedMode();var t=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(function(){return K(e,void 0,void 0,function(){var i,r;return j(this,function(o){switch(o.label){case 0:return o.trys.push([0,5,,6]),this.onlineComponents?[4,this.onlineComponents.terminate()]:[3,2];case 1:o.sent(),o.label=2;case 2:return this.offlineComponents?[4,this.offlineComponents.terminate()]:[3,4];case 3:o.sent(),o.label=4;case 4:return this.credentials.removeChangeListener(),t.resolve(),[3,6];case 5:return i=o.sent(),r=$o(i,"Failed to shutdown persistence"),t.reject(r),[3,6];case 6:return[2]}})})}),t.promise},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(n,e){return K(this,void 0,void 0,function(){var t,i,r=this;return j(this,function(o){switch(o.label){case 0:return n.asyncQueue.verifyOperationInProgress(),ue("FirestoreClient","Initializing OfflineComponentProvider"),[4,n.getConfiguration()];case 1:return t=o.sent(),[4,e.initialize(t)];case 2:return o.sent(),i=t.initialUser,n.setCredentialChangeListener(function(s){return K(r,void 0,void 0,function(){return j(this,function(a){switch(a.label){case 0:return i.isEqual(s)?[3,2]:[4,yv(e.localStore,s)];case 1:a.sent(),i=s,a.label=2;case 2:return[2]}})})}),e.persistence.setDatabaseDeletedListener(function(){return n.terminate()}),n.offlineComponents=e,[2]}})})}function Vv(n,e){return K(this,void 0,void 0,function(){var t,i;return j(this,function(r){switch(r.label){case 0:return n.asyncQueue.verifyOperationInProgress(),[4,Yh(n)];case 1:return t=r.sent(),ue("FirestoreClient","Initializing OnlineComponentProvider"),[4,n.getConfiguration()];case 2:return i=r.sent(),[4,e.initialize(t,i)];case 3:return r.sent(),n.setCredentialChangeListener(function(o){return function(s,a){return K(this,void 0,void 0,function(){var u,c;return j(this,function(l){switch(l.label){case 0:return(u=ve(s)).asyncQueue.verifyOperationInProgress(),ue("RemoteStore","RemoteStore received new credentials"),c=Zi(u),u.Or.add(3),[4,Xo(u)];case 1:return l.sent(),c&&u.Br.set("Unknown"),[4,u.remoteSyncer.handleCredentialChange(a)];case 2:return l.sent(),u.Or.delete(3),[4,ea(u)];case 3:return l.sent(),[2]}})})}(e.remoteStore,o)}),n.onlineComponents=e,[2]}})})}function Yh(n){return K(this,void 0,void 0,function(){return j(this,function(e){switch(e.label){case 0:return n.offlineComponents?[3,2]:(ue("FirestoreClient","Using default OfflineComponentProvider"),[4,kv(n,new Fv)]);case 1:e.sent(),e.label=2;case 2:return[2,n.offlineComponents]}})})}function Qu(n){return K(this,void 0,void 0,function(){return j(this,function(e){switch(e.label){case 0:return n.onlineComponents?[3,2]:(ue("FirestoreClient","Using default OnlineComponentProvider"),[4,Vv(n,new Pl)]);case 1:e.sent(),e.label=2;case 2:return[2,n.onlineComponents]}})})}function Td(n){return Yh(n).then(function(e){return e.persistence})}function zv(n){return Yh(n).then(function(e){return e.localStore})}function Md(n){return Qu(n).then(function(e){return e.remoteStore})}function Gv(n){return Qu(n).then(function(e){return e.syncEngine})}function Fo(n){return K(this,void 0,void 0,function(){var e,t;return j(this,function(i){switch(i.label){case 0:return[4,Qu(n)];case 1:return e=i.sent(),[2,((t=e.eventManager).onListen=QS.bind(null,e.syncEngine),t.onUnlisten=ZS.bind(null,e.syncEngine),t)]}})})}function wd(n,e,t){var i=this;t===void 0&&(t={});var r=new xn;return n.asyncQueue.enqueueAndForget(function(){return K(i,void 0,void 0,function(){var o;return j(this,function(s){switch(s.label){case 0:return o=function(a,u,c,l,h){var f=new $u({next:function(g){u.enqueueAndForget(function(){return Vh(a,p)});var v=g.docs.has(c);!v&&g.fromCache?h.reject(new Z(F.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&l&&l.source==="server"?h.reject(new Z(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:function(g){return h.reject(g)}}),p=new Gh(Ks(c.path),f,{includeMetadataChanges:!0,so:!0});return kh(a,p)},[4,Fo(n)];case 1:return[2,o.apply(void 0,[s.sent(),n.asyncQueue,e,t,r])]}})})}),r.promise}function Ad(n,e,t){var i=this;t===void 0&&(t={});var r=new xn;return n.asyncQueue.enqueueAndForget(function(){return K(i,void 0,void 0,function(){var o;return j(this,function(s){switch(s.label){case 0:return o=function(a,u,c,l,h){var f=new $u({next:function(g){u.enqueueAndForget(function(){return Vh(a,p)}),g.fromCache&&l.source==="server"?h.reject(new Z(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:function(g){return h.reject(g)}}),p=new Gh(c,f,{includeMetadataChanges:!0,so:!0});return kh(a,p)},[4,Fo(n)];case 1:return[2,o.apply(void 0,[s.sent(),n.asyncQueue,e,t,r])]}})})}),r.promise}var yx=function(n,e,t,i,r,o,s,a){this.databaseId=n,this.appId=e,this.persistenceKey=t,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a},yu=function(){function n(e,t){this.projectId=e,this.database=t||"(default)"}return Object.defineProperty(n.prototype,"isDefaultDatabase",{get:function(){return this.database==="(default)"},enumerable:!1,configurable:!0}),n.prototype.isEqual=function(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database},n}(),Rd=new Map,Hv=function(n,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+n},Cd=function(){function n(){this.changeListener=null}return n.prototype.getToken=function(){return Promise.resolve(null)},n.prototype.invalidateToken=function(){},n.prototype.setChangeListener=function(e,t){this.changeListener=t,e.enqueueRetryable(function(){return t(zt.UNAUTHENTICATED)})},n.prototype.removeChangeListener=function(){this.changeListener=null},n}(),_x=function(){function n(e){this.token=e,this.changeListener=null}return n.prototype.getToken=function(){return Promise.resolve(this.token)},n.prototype.invalidateToken=function(){},n.prototype.setChangeListener=function(e,t){var i=this;this.changeListener=t,e.enqueueRetryable(function(){return t(i.token.user)})},n.prototype.removeChangeListener=function(){this.changeListener=null},n}(),Ex=function(){function n(e){var t=this;this.currentUser=zt.UNAUTHENTICATED,this.oc=new xn,this.cc=0,this.forceRefresh=!1,this.auth=null,this.asyncQueue=null,this.uc=function(){t.cc++,t.currentUser=t.ac(),t.oc.resolve(),t.changeListener&&t.asyncQueue.enqueueRetryable(function(){return t.changeListener(t.currentUser)})};var i=function(r){ue("FirebaseCredentialsProvider","Auth detected"),t.auth=r,t.auth.addAuthTokenListener(t.uc)};e.onInit(function(r){return i(r)}),setTimeout(function(){if(!t.auth){var r=e.getImmediate({optional:!0});r?i(r):(ue("FirebaseCredentialsProvider","Auth not yet detected"),t.oc.resolve())}},0)}return n.prototype.getToken=function(){var e=this,t=this.cc,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(function(r){return e.cc!==t?(ue("FirebaseCredentialsProvider","getToken aborted due to token change."),e.getToken()):r?(Ue(typeof r.accessToken=="string"),new Hv(r.accessToken,e.currentUser)):null}):Promise.resolve(null)},n.prototype.invalidateToken=function(){this.forceRefresh=!0},n.prototype.setChangeListener=function(e,t){var i=this;this.asyncQueue=e,this.asyncQueue.enqueueRetryable(function(){return K(i,void 0,void 0,function(){return j(this,function(r){switch(r.label){case 0:return[4,this.oc.promise];case 1:return r.sent(),[4,t(this.currentUser)];case 2:return r.sent(),this.changeListener=t,[2]}})})})},n.prototype.removeChangeListener=function(){this.auth&&this.auth.removeAuthTokenListener(this.uc),this.changeListener=function(){return Promise.resolve()}},n.prototype.ac=function(){var e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new zt(e)},n}(),Sx=function(){function n(e,t,i){this.hc=e,this.lc=t,this.fc=i,this.type="FirstParty",this.user=zt.FIRST_PARTY}return Object.defineProperty(n.prototype,"authHeaders",{get:function(){var e={"X-Goog-AuthUser":this.lc},t=this.hc.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.fc&&(e["X-Goog-Iam-Authorization-Token"]=this.fc),e},enumerable:!1,configurable:!0}),n}(),xx=function(){function n(e,t,i){this.hc=e,this.lc=t,this.fc=i}return n.prototype.getToken=function(){return Promise.resolve(new Sx(this.hc,this.lc,this.fc))},n.prototype.setChangeListener=function(e,t){e.enqueueRetryable(function(){return t(zt.FIRST_PARTY)})},n.prototype.removeChangeListener=function(){},n.prototype.invalidateToken=function(){},n}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n,e,t){if(!t)throw new Z(F.INVALID_ARGUMENT,"Function "+n+"() cannot be called with an empty "+e+".")}function Qh(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new Z(F.INVALID_ARGUMENT,"Invalid options passed to function "+n+'(): You cannot specify both "merge" and "mergeFields".');return e}function Wv(n,e,t,i){if(e===!0&&i===!0)throw new Z(F.INVALID_ARGUMENT,n+" and "+t+" cannot be used together.")}function Id(n){if(!Ae.isDocumentKey(n))throw new Z(F.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but "+n+" has "+n.length+".")}function Pd(n){if(Ae.isDocumentKey(n))throw new Z(F.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but "+n+" has "+n.length+".")}function Zu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=n.substring(0,20)+"..."),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";var e=function(t){if(t.constructor){var i=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(i&&i.length>1)return i[1]}return null}(n);return e?"a custom "+e+" object":"an object"}return typeof n=="function"?"a function":Te()}function st(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Z(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var t=Zu(n);throw new Z(F.INVALID_ARGUMENT,"Expected type '"+e.name+"', but it was: "+t)}return n}function Dd(n,e){if(e<=0)throw new Z(F.INVALID_ARGUMENT,"Function "+n+"() requires a positive number, but it was: "+e+".")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ld=function(){function n(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Wv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}return n.prototype.isEqual=function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams},n}(),Ps=function(){function n(e,t){this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ld({}),this._settingsFrozen=!1,e instanceof yu?(this._databaseId=e,this._credentials=new Cd):(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new Z(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yu(i.options.projectId)}(e),this._credentials=new Ex(t))}return Object.defineProperty(n.prototype,"app",{get:function(){if(!this._app)throw new Z(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"_initialized",{get:function(){return this._settingsFrozen},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"_terminated",{get:function(){return this._terminateTask!==void 0},enumerable:!1,configurable:!0}),n.prototype._setSettings=function(e){if(this._settingsFrozen)throw new Z(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ld(e),e.credentials!==void 0&&(this._credentials=function(t){if(!t)return new Cd;switch(t.type){case"gapi":var i=t.client;return Ue(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new xx(i,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Z(F.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))},n.prototype._getSettings=function(){return this._settings},n.prototype._freezeSettings=function(){return this._settingsFrozen=!0,this._settings},n.prototype._delete=function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask},n.prototype.toJSON=function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}},n.prototype._terminate=function(){return e=this,(t=Rd.get(e))&&(ue("ComponentProvider","Removing Datastore"),Rd.delete(e),t.terminate()),Promise.resolve();var e,t},n}(),mt=function(){function n(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}return Object.defineProperty(n.prototype,"_path",{get:function(){return this._key.path},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"id",{get:function(){return this._key.path.lastSegment()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"path",{get:function(){return this._key.path.canonicalString()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"parent",{get:function(){return new Gi(this.firestore,this.converter,this._key.path.popLast())},enumerable:!1,configurable:!0}),n.prototype.withConverter=function(e){return new n(this.firestore,e,this._key)},n}(),Dn=function(){function n(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}return n.prototype.withConverter=function(e){return new n(this.firestore,e,this._query)},n}(),Gi=function(n){function e(t,i,r){var o=this;return(o=n.call(this,t,i,Ks(r))||this)._path=r,o.type="collection",o}return Ce(e,n),Object.defineProperty(e.prototype,"id",{get:function(){return this._query.path.lastSegment()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this._query.path.canonicalString()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new Ae(t))},enumerable:!1,configurable:!0}),e.prototype.withConverter=function(t){return new e(this.firestore,t,this._path)},e}(Dn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(n,e){for(var t,i=[],r=2;r<arguments.length;r++)i[r-2]=arguments[r];if(n=At(n),$h("collection","path",e),n instanceof Ps)return Pd(t=ot.fromString.apply(ot,yt([e],i))),new Gi(n,null,t);if(!(n instanceof mt||n instanceof Gi))throw new Z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");return Pd(t=ot.fromString.apply(ot,yt([n.path],i)).child(ot.fromString(e))),new Gi(n.firestore,null,t)}function ja(n,e){for(var t,i=[],r=2;r<arguments.length;r++)i[r-2]=arguments[r];if(n=At(n),arguments.length===1&&(e=Mg.u()),$h("doc","path",e),n instanceof Ps)return Id(t=ot.fromString.apply(ot,yt([e],i))),new mt(n,null,new Ae(t));if(!(n instanceof mt||n instanceof Gi))throw new Z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");return Id(t=n._path.child(ot.fromString.apply(ot,yt([e],i)))),new mt(n.firestore,n instanceof Gi?n.converter:null,new Ae(t))}function jv(n,e){return n=At(n),e=At(e),(n instanceof mt||n instanceof Gi)&&(e instanceof mt||e instanceof Gi)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Xv(n,e){return n=At(n),e=At(e),n instanceof Dn&&e instanceof Dn&&n.firestore===e.firestore&&Ys(n._query,e._query)&&n.converter===e.converter}var bx=function(){function n(){var e=this;this.dc=Promise.resolve(),this.wc=[],this._c=!1,this.mc=[],this.yc=null,this.gc=!1,this.Ec=!1,this.Tc=[],this.Zi=new Uh(this,"async_queue_retry"),this.Ic=function(){var i=qa();i&&ue("AsyncQueue","Visibility state changed to "+i.visibilityState),e.Zi.Gi()};var t=qa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Ic)}return Object.defineProperty(n.prototype,"isShuttingDown",{get:function(){return this._c},enumerable:!1,configurable:!0}),n.prototype.enqueueAndForget=function(e){this.enqueue(e)},n.prototype.enqueueAndForgetEvenWhileRestricted=function(e){this.Ac(),this.Rc(e)},n.prototype.enterRestrictedMode=function(e){if(!this._c){this._c=!0,this.Ec=e||!1;var t=qa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Ic)}},n.prototype.enqueue=function(e){var t=this;if(this.Ac(),this._c)return new Promise(function(){});var i=new xn;return this.Rc(function(){return t._c&&t.Ec?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)}).then(function(){return i.promise})},n.prototype.enqueueRetryable=function(e){var t=this;this.enqueueAndForget(function(){return t.wc.push(e),t.bc()})},n.prototype.bc=function(){return K(this,void 0,void 0,function(){var e,t=this;return j(this,function(i){switch(i.label){case 0:if(this.wc.length===0)return[3,5];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.wc[0]()];case 2:return i.sent(),this.wc.shift(),this.Zi.reset(),[3,4];case 3:if(!Or(e=i.sent()))throw e;return ue("AsyncQueue","Operation failed with retryable error: "+e),[3,4];case 4:this.wc.length>0&&this.Zi.ji(function(){return t.bc()}),i.label=5;case 5:return[2]}})})},n.prototype.Rc=function(e){var t=this,i=this.dc.then(function(){return t.gc=!0,e().catch(function(r){throw t.yc=r,t.gc=!1,wt("INTERNAL UNHANDLED ERROR: ",function(o){var s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(r)),r}).then(function(r){return t.gc=!1,r})});return this.dc=i,i},n.prototype.enqueueAfterDelay=function(e,t,i){var r=this;this.Ac(),this.Tc.indexOf(e)>-1&&(t=0);var o=HS.createAndSchedule(this,e,t,i,function(s){return r.vc(s)});return this.mc.push(o),o},n.prototype.Ac=function(){this.yc&&Te()},n.prototype.verifyOperationInProgress=function(){},n.prototype.Pc=function(){return K(this,void 0,void 0,function(){var e;return j(this,function(t){switch(t.label){case 0:return[4,e=this.dc];case 1:t.sent(),t.label=2;case 2:if(e!==this.dc)return[3,0];t.label=3;case 3:return[2]}})})},n.prototype.Vc=function(e){for(var t=0,i=this.mc;t<i.length;t++)if(i[t].timerId===e)return!0;return!1},n.prototype.Sc=function(e){var t=this;return this.Pc().then(function(){t.mc.sort(function(s,a){return s.targetTimeMs-a.targetTimeMs});for(var i=0,r=t.mc;i<r.length;i++){var o=r[i];if(o.skipDelay(),e!=="all"&&o.timerId===e)break}return t.Pc()})},n.prototype.Dc=function(e){this.Tc.push(e)},n.prototype.vc=function(e){var t=this.mc.indexOf(e);this.mc.splice(t,1)},n}();function Bo(n){return function(e,t){if(typeof e!="object"||e===null)return!1;for(var i=e,r=0,o=["next","error","complete"];r<o.length;r++){var s=o[r];if(s in i&&typeof i[s]=="function")return!0}return!1}(n)}var Tx=-1,Pt=function(n){function e(t,i){var r=this;return(r=n.call(this,t,i)||this).type="firestore",r._queue=new bx,r._persistenceKey="name"in t?t.name:"[DEFAULT]",r}return Ce(e,n),e.prototype._terminate=function(){return this._firestoreClient||Kv(this),this._firestoreClient.terminate()},e}(Ps);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(n){return n._firestoreClient||Kv(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Kv(n){var e,t=n._freezeSettings(),i=function(r,o,s,a){return new yx(r,o,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new vx(n._credentials,n._queue,i)}function Nd(n,e,t){var i=this,r=new xn;return n.asyncQueue.enqueue(function(){return K(i,void 0,void 0,function(){var o;return j(this,function(s){switch(s.label){case 0:return s.trys.push([0,3,,4]),[4,kv(n,t)];case 1:return s.sent(),[4,Vv(n,e)];case 2:return s.sent(),r.resolve(),[3,4];case 3:if(!function(a){return a.name==="FirebaseError"?a.code===F.FAILED_PRECONDITION||a.code===F.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(o=s.sent()))throw o;return console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+o),r.reject(o),[3,4];case 4:return[2]}})})}).then(function(){return r.promise})}function Ud(n){if(n._initialized||n._terminated)throw new Z(F.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jn=function(){function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i=0;i<e.length;++i)if(e[i].length===0)throw new Z(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kn(e)}return n.prototype.isEqual=function(e){return this._internalPath.isEqual(e._internalPath)},n}(),Cr=function(){function n(e){this._byteString=e}return n.fromBase64String=function(e){try{return new n(Sn.fromBase64String(e))}catch(t){throw new Z(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}},n.fromUint8Array=function(e){return new n(Sn.fromUint8Array(e))},n.prototype.toBase64=function(){return this._byteString.toBase64()},n.prototype.toUint8Array=function(){return this._byteString.toUint8Array()},n.prototype.toString=function(){return"Bytes(base64: "+this.toBase64()+")"},n.prototype.isEqual=function(e){return this._byteString.isEqual(e._byteString)},n}(),Br=function(n){this._methodName=n},Ju=function(){function n(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}return Object.defineProperty(n.prototype,"latitude",{get:function(){return this._lat},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"longitude",{get:function(){return this._long},enumerable:!1,configurable:!0}),n.prototype.isEqual=function(e){return this._lat===e._lat&&this._long===e._long},n.prototype.toJSON=function(){return{latitude:this._lat,longitude:this._long}},n.prototype._compareTo=function(e){return et(this._lat,e._lat)||et(this._long,e._long)},n}(),Mx=/^__.*__$/,wx=function(){function n(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}return n.prototype.toMutation=function(e,t){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zs(e,this.data,t,this.fieldTransforms)},n}(),Yv=function(){function n(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}return n.prototype.toMutation=function(e,t){return new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms)},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}var Qv=function(){function n(e,t,i,r,o,s){this.settings=e,this.databaseId=t,this.R=i,this.ignoreUndefinedProperties=r,o===void 0&&this.Cc(),this.fieldTransforms=o||[],this.fieldMask=s||[]}return Object.defineProperty(n.prototype,"path",{get:function(){return this.settings.path},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"Nc",{get:function(){return this.settings.Nc},enumerable:!1,configurable:!0}),n.prototype.xc=function(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.R,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)},n.prototype.kc=function(e){var t,i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.xc({path:i,Fc:!1});return r.$c(e),r},n.prototype.Oc=function(e){var t,i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.xc({path:i,Fc:!1});return r.Cc(),r},n.prototype.Mc=function(e){return this.xc({path:void 0,Fc:!0})},n.prototype.Lc=function(e){return _u(e,this.settings.methodName,this.settings.Bc||!1,this.path,this.settings.qc)},n.prototype.contains=function(e){return this.fieldMask.find(function(t){return e.isPrefixOf(t)})!==void 0||this.fieldTransforms.find(function(t){return e.isPrefixOf(t.field)})!==void 0},n.prototype.Cc=function(){if(this.path)for(var e=0;e<this.path.length;e++)this.$c(this.path.get(e))},n.prototype.$c=function(e){if(e.length===0)throw this.Lc("Document fields must not be empty");if($v(this.Nc)&&Mx.test(e))throw this.Lc('Document fields cannot begin and end with "__"')},n}(),Ax=function(){function n(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.R=i||Ku(e)}return n.prototype.Uc=function(e,t,i,r){return r===void 0&&(r=!1),new Qv({Nc:e,methodName:t,qc:i,path:Kn.emptyPath(),Fc:!1,Bc:r},this.databaseId,this.R,this.ignoreUndefinedProperties)},n}();function kr(n){var e=n._freezeSettings(),t=Ku(n._databaseId);return new Ax(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ec(n,e,t,i,r,o){o===void 0&&(o={});var s=n.Uc(o.merge||o.mergeFields?2:0,e,t,r);tf("Data must be an object, but it was:",s,i);var a,u,c=ey(i,s);if(o.merge)a=new To(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){for(var l=[],h=0,f=o.mergeFields;h<f.length;h++){var p=Dl(e,f[h],t);if(!s.contains(p))throw new Z(F.INVALID_ARGUMENT,"Field '"+p+"' is specified in your field mask but missing from your input data.");ny(l,p)||l.push(p)}a=new To(l),u=s.fieldTransforms.filter(function(g){return a.covers(g.field)})}else a=null,u=s.fieldTransforms;return new wx(new Cn(c),a,u)}var Zh=function(n){function e(){return n!==null&&n.apply(this,arguments)||this}return Ce(e,n),e.prototype._toFieldTransform=function(t){if(t.Nc!==2)throw t.Nc===1?t.Lc(this._methodName+"() can only appear at the top level of your update data"):t.Lc(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null},e.prototype.isEqual=function(t){return t instanceof e},e}(Br);function Zv(n,e,t){return new Qv({Nc:3,qc:e.settings.qc,methodName:n._methodName,Fc:t},e.databaseId,e.R,e.ignoreUndefinedProperties)}var Rx=function(n){function e(){return n!==null&&n.apply(this,arguments)||this}return Ce(e,n),e.prototype._toFieldTransform=function(t){return new Qs(t.path,new Ro)},e.prototype.isEqual=function(t){return t instanceof e},e}(Br),Cx=function(n){function e(t,i){var r=this;return(r=n.call(this,t)||this).Kc=i,r}return Ce(e,n),e.prototype._toFieldTransform=function(t){var i=Zv(this,t,!0),r=this.Kc.map(function(s){return Vr(s,i)}),o=new Ar(r);return new Qs(t.path,o)},e.prototype.isEqual=function(t){return this===t},e}(Br),Ix=function(n){function e(t,i){var r=this;return(r=n.call(this,t)||this).Kc=i,r}return Ce(e,n),e.prototype._toFieldTransform=function(t){var i=Zv(this,t,!0),r=this.Kc.map(function(s){return Vr(s,i)}),o=new Rr(r);return new Qs(t.path,o)},e.prototype.isEqual=function(t){return this===t},e}(Br),Px=function(n){function e(t,i){var r=this;return(r=n.call(this,t)||this).Qc=i,r}return Ce(e,n),e.prototype._toFieldTransform=function(t){var i=new Co(t.R,kg(t.R,this.Qc));return new Qs(t.path,i)},e.prototype.isEqual=function(t){return this===t},e}(Br);function Jh(n,e,t,i){var r=n.Uc(1,e,t);tf("Data must be an object, but it was:",r,i);var o=[],s=Cn.empty();Nr(i,function(u,c){var l=nf(e,u,t);c=At(c);var h=r.Oc(l);if(c instanceof Zh)o.push(l);else{var f=Vr(c,h);f!=null&&(o.push(l),s.set(l,f))}});var a=new To(o);return new Yv(s,a,r.fieldTransforms)}function ef(n,e,t,i,r,o){var s=n.Uc(1,e,t),a=[Dl(e,i,t)],u=[r];if(o.length%2!=0)throw new Z(F.INVALID_ARGUMENT,"Function "+e+"() needs to be called with an even number of arguments that alternate between field names and values.");for(var c=0;c<o.length;c+=2)a.push(Dl(e,o[c])),u.push(o[c+1]);for(var l=[],h=Cn.empty(),f=a.length-1;f>=0;--f)if(!ny(l,a[f])){var p=a[f],g=u[f];g=At(g);var v=s.Oc(p);if(g instanceof Zh)l.push(p);else{var m=Vr(g,v);m!=null&&(l.push(p),h.set(p,m))}}var d=new To(l);return new Yv(h,d,s.fieldTransforms)}function Jv(n,e,t,i){return i===void 0&&(i=!1),Vr(t,n.Uc(i?4:3,e))}function Vr(n,e){if(ty(n=At(n)))return tf("Unsupported field value:",e,n),ey(n,e);if(n instanceof Br)return function(t,i){if(!$v(i.Nc))throw i.Lc(t._methodName+"() can only be used with update() and set()");if(!i.path)throw i.Lc(t._methodName+"() is not currently supported inside arrays");var r=t._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Fc&&e.Nc!==4)throw e.Lc("Nested arrays are not supported");return function(t,i){for(var r=[],o=0,s=0,a=t;s<a.length;s++){var u=Vr(a[s],i.Mc(o));u==null&&(u={nullValue:"NULL_VALUE"}),r.push(u),o++}return{arrayValue:{values:r}}}(n,e)}return function(t,i){if((t=At(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return kg(i.R,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){var r=yn.fromDate(t);return{timestampValue:As(i.R,r)}}if(t instanceof yn)return r=new yn(t.seconds,1e3*Math.floor(t.nanoseconds/1e3)),{timestampValue:As(i.R,r)};if(t instanceof Ju)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Cr)return{bytesValue:Yg(i.R,t._byteString)};if(t instanceof mt){r=i.databaseId;var o=t.firestore._databaseId;if(!o.isEqual(r))throw i.Lc("Document reference is for database "+o.projectId+"/"+o.database+" but should be for database "+r.projectId+"/"+r.database);return{referenceValue:Rh(t.firestore._databaseId||i.databaseId,t._key.path)}}throw i.Lc("Unsupported field value: "+Zu(t))}(n,e)}function ey(n,e){var t={};return Ag(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nr(n,function(i,r){var o=Vr(r,e.kc(i));o!=null&&(t[i]=o)}),{mapValue:{fields:t}}}function ty(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof yn||n instanceof Ju||n instanceof Cr||n instanceof mt||n instanceof Br)}function tf(n,e,t){if(!ty(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){var i=Zu(t);throw i==="an object"?e.Lc(n+" a custom object"):e.Lc(n+" "+i)}}function Dl(n,e,t){if((e=At(e))instanceof Jn)return e._internalPath;if(typeof e=="string")return nf(n,e);throw _u("Field path arguments must be of type string or FieldPath.",n,!1,void 0,t)}var Dx=new RegExp("[~\\*/\\[\\]]");function nf(n,e,t){if(e.search(Dx)>=0)throw _u("Invalid field path ("+e+"). Paths must not contain '~', '*', '/', '[', or ']'",n,!1,void 0,t);try{return new(Jn.bind.apply(Jn,yt([void 0],e.split("."))))()._internalPath}catch{throw _u("Invalid field path ("+e+"). Paths must not be empty, begin with '.', end with '.', or contain '..'",n,!1,void 0,t)}}function _u(n,e,t,i,r){var o=i&&!i.isEmpty(),s=r!==void 0,a="Function "+e+"() called with invalid data";t&&(a+=" (via `toFirestore()`)");var u="";return(o||s)&&(u+=" (found",o&&(u+=" in field "+i),s&&(u+=" in document "+r),u+=")"),new Z(F.INVALID_ARGUMENT,(a+=". ")+n+u)}function ny(n,e){return n.some(function(t){return t.isEqual(e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ds=function(){function n(e,t,i,r,o){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=o}return Object.defineProperty(n.prototype,"id",{get:function(){return this._key.path.lastSegment()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"ref",{get:function(){return new mt(this._firestore,this._converter,this._key)},enumerable:!1,configurable:!0}),n.prototype.exists=function(){return this._document!==null},n.prototype.data=function(){if(this._document){if(this._converter){var e=new Lx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}},n.prototype.get=function(e){if(this._document){var t=this._document.data.field(Eu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}},n}(),Lx=function(n){function e(){return n!==null&&n.apply(this,arguments)||this}return Ce(e,n),e.prototype.data=function(){return n.prototype.data.call(this)},e}(Ds);function Eu(n,e){return typeof e=="string"?nf(n,e):e instanceof Jn?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pr=function(){function n(e,t){this.hasPendingWrites=e,this.fromCache=t}return n.prototype.isEqual=function(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache},n}(),Ei=function(n){function e(t,i,r,o,s,a){var u=this;return(u=n.call(this,t,i,r,o,a)||this)._firestore=t,u._firestoreImpl=t,u.metadata=s,u}return Ce(e,n),e.prototype.exists=function(){return n.prototype.exists.call(this)},e.prototype.data=function(t){if(t===void 0&&(t={}),this._document){if(this._converter){var i=new ds(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}},e.prototype.get=function(t,i){if(i===void 0&&(i={}),this._document){var r=this._document.data.field(Eu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,i.serverTimestamps)}},e}(Ds),ds=function(n){function e(){return n!==null&&n.apply(this,arguments)||this}return Ce(e,n),e.prototype.data=function(t){return t===void 0&&(t={}),n.prototype.data.call(this,t)},e}(Ei),Fi=function(){function n(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new pr(r.hasPendingWrites,r.fromCache),this.query=i}return Object.defineProperty(n.prototype,"docs",{get:function(){var e=[];return this.forEach(function(t){return e.push(t)}),e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"size",{get:function(){return this._snapshot.docs.size},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"empty",{get:function(){return this.size===0},enumerable:!1,configurable:!0}),n.prototype.forEach=function(e,t){var i=this;this._snapshot.docs.forEach(function(r){e.call(t,new ds(i._firestore,i._userDataWriter,r.key,r,new pr(i._snapshot.mutatedKeys.has(r.key),i._snapshot.fromCache),i.query.converter))})},n.prototype.docChanges=function(e){e===void 0&&(e={});var t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Z(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){var o=0;return i._snapshot.docChanges.map(function(a){return{type:"added",doc:new ds(i._firestore,i._userDataWriter,a.doc.key,a.doc,new pr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:o++}})}var s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(function(a){return r||a.type!==3}).map(function(a){var u=new ds(i._firestore,i._userDataWriter,a.doc.key,a.doc,new pr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter),c=-1,l=-1;return a.type!==0&&(c=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(l=(s=s.add(a.doc)).indexOf(a.doc.key)),{type:Nx(a.type),doc:u,oldIndex:c,newIndex:l}})}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges},n}();function Nx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}function iy(n,e){return n instanceof Ei&&e instanceof Ei?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Fi&&e instanceof Fi&&n._firestore===e._firestore&&Xv(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(n){if(lu(n)&&n.explicitOrderBy.length===0)throw new Z(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var ta=function(){};function wi(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];for(var i=0,r=e;i<r.length;i++){var o=r[i];n=o._apply(n)}return n}var Ux=function(n){function e(t,i,r){var o=this;return(o=n.call(this)||this).jc=t,o.Wc=i,o.Gc=r,o.type="where",o}return Ce(e,n),e.prototype._apply=function(t){var i=kr(t.firestore),r=function(o,s,a,u,c,l,h){var f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new Z(F.INVALID_ARGUMENT,"Invalid Query. You can't perform '"+l+"' queries on FieldPath.documentId().");if(l==="in"||l==="not-in"){Vd(h,l);for(var p=[],g=0,v=h;g<v.length;g++){var m=v[g];p.push(kd(u,o,m))}f={arrayValue:{values:p}}}else f=kd(u,o,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Vd(h,l),f=Jv(a,"where",h,l==="in"||l==="not-in");var d=Pn.create(c,l,f);return function(S,y){if(y.g()){var x=bh(S);if(x!==null&&!x.isEqual(y.field))throw new Z(F.INVALID_ARGUMENT,"Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '"+x.toString()+"' and '"+y.field.toString()+"'");var T=xh(S);T!==null&&sy(S,y.field,T)}var C=function(w,H){for(var E=0,A=w.filters;E<A.length;E++){var q=A[E];if(H.indexOf(q.op)>=0)return q.op}return null}(S,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(C!==null)throw C===y.op?new Z(F.INVALID_ARGUMENT,"Invalid query. You cannot use more than one '"+y.op.toString()+"' filter."):new Z(F.INVALID_ARGUMENT,"Invalid query. You cannot use '"+y.op.toString()+"' filters with '"+C.toString()+"' filters.")}(o,d),d}(t._query,0,i,t.firestore._databaseId,this.jc,this.Wc,this.Gc);return new Dn(t.firestore,t.converter,function(o,s){var a=o.filters.concat([s]);return new bi(o.path,o.collectionGroup,o.explicitOrderBy.slice(),a,o.limit,o.limitType,o.startAt,o.endAt)}(t._query,r))},e}(ta),Ox=function(n){function e(t,i){var r=this;return(r=n.call(this)||this).jc=t,r.zc=i,r.type="orderBy",r}return Ce(e,n),e.prototype._apply=function(t){var i=function(r,o,s){if(r.startAt!==null)throw new Z(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new Z(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");var a=new vo(o,s);return function(u,c){if(xh(u)===null){var l=bh(u);l!==null&&sy(u,l,c.field)}}(r,a),a}(t._query,this.jc,this.zc);return new Dn(t.firestore,t.converter,function(r,o){var s=r.explicitOrderBy.concat([o]);return new bi(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,i))},e}(ta),Od=function(n){function e(t,i,r){var o=this;return(o=n.call(this)||this).type=t,o.Hc=i,o.Jc=r,o}return Ce(e,n),e.prototype._apply=function(t){return new Dn(t.firestore,t.converter,Ng(t._query,this.Hc,this.Jc))},e}(ta),Fd=function(n){function e(t,i,r){var o=this;return(o=n.call(this)||this).type=t,o.Yc=i,o.Xc=r,o}return Ce(e,n),e.prototype._apply=function(t){var i=oy(t,this.type,this.Yc,this.Xc);return new Dn(t.firestore,t.converter,function(r,o){return new bi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,o,r.endAt)}(t._query,i))},e}(ta),Bd=function(n){function e(t,i,r){var o=this;return(o=n.call(this)||this).type=t,o.Yc=i,o.Xc=r,o}return Ce(e,n),e.prototype._apply=function(t){var i=oy(t,this.type,this.Yc,this.Xc);return new Dn(t.firestore,t.converter,function(r,o){return new bi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,o)}(t._query,i))},e}(ta);function oy(n,e,t,i){if(t[0]=At(t[0]),t[0]instanceof Ds)return function(o,s,a,u,c){if(!u)throw new Z(F.NOT_FOUND,"Can't use a DocumentSnapshot that doesn't exist for "+a+"().");for(var l=[],h=0,f=Ao(o);h<f.length;h++){var p=f[h];if(p.field.isKeyField())l.push(au(s,u.key));else{var g=u.data.field(p.field);if(_h(g))throw new Z(F.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){var v=p.field.canonicalString();throw new Z(F.INVALID_ARGUMENT,"Invalid query. You are trying to start or end a query using a document for which the field '"+v+"' (used as the orderBy) does not exist.")}l.push(g)}}return new ws(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,i);var r=kr(n.firestore);return function(o,s,a,u,c,l){var h=o.explicitOrderBy;if(c.length>h.length)throw new Z(F.INVALID_ARGUMENT,"Too many arguments provided to "+u+"(). The number of arguments must be less than or equal to the number of orderBy() clauses");for(var f=[],p=0;p<c.length;p++){var g=c[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new Z(F.INVALID_ARGUMENT,"Invalid query. Expected a string for document ID in "+u+"(), but got a "+typeof g);if(!Th(o)&&g.indexOf("/")!==-1)throw new Z(F.INVALID_ARGUMENT,"Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to "+u+"() must be a plain document ID, but '"+g+"' contains a slash.");var v=o.path.child(ot.fromString(g));if(!Ae.isDocumentKey(v))throw new Z(F.INVALID_ARGUMENT,"Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to "+u+"() must result in a valid document path, but '"+v+"' is not because it contains an odd number of segments.");var m=new Ae(v);f.push(au(s,m))}else{var d=Jv(a,u,g);f.push(d)}}return new ws(f,l)}(n._query,n.firestore._databaseId,r,e,t,i)}function kd(n,e,t){if(typeof(t=At(t))=="string"){if(t==="")throw new Z(F.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Th(e)&&t.indexOf("/")!==-1)throw new Z(F.INVALID_ARGUMENT,"Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '"+t+"' contains a '/' character.");var i=e.path.child(ot.fromString(t));if(!Ae.isDocumentKey(i))throw new Z(F.INVALID_ARGUMENT,"Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '"+i+"' is not because it has an odd number of segments ("+i.length+").");return au(n,new Ae(i))}if(t instanceof mt)return au(n,t._key);throw new Z(F.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: "+Zu(t)+".")}function Vd(n,e){if(!Array.isArray(n)||n.length===0)throw new Z(F.INVALID_ARGUMENT,"Invalid Query. A non-empty array is required for '"+e.toString()+"' filters.");if(n.length>10)throw new Z(F.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters support a maximum of 10 elements in the value array.")}function sy(n,e,t){if(!t.isEqual(e))throw new Z(F.INVALID_ARGUMENT,"Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '"+e.toString()+"' and so you must also use '"+e.toString()+"' as your first argument to orderBy(), but your first orderBy() is on field '"+t.toString()+"' instead.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rf=function(){function n(){}return n.prototype.convertValue=function(e,t){switch(t===void 0&&(t="none"),wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Te()}},n.prototype.convertObject=function(e,t){var i=this,r={};return Nr(e.fields,function(o,s){r[o]=i.convertValue(s,t)}),r},n.prototype.convertGeoPoint=function(e){return new Ju(Mt(e.latitude),Mt(e.longitude))},n.prototype.convertArray=function(e,t){var i=this;return(e.values||[]).map(function(r){return i.convertValue(r,t)})},n.prototype.convertServerTimestamp=function(e,t){switch(t){case"previous":var i=Cg(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ts(e));default:return null}},n.prototype.convertTimestamp=function(e){var t=ji(e);return new yn(t.seconds,t.nanos)},n.prototype.convertDocumentKey=function(e,t){var i=ot.fromString(e);Ue(iv(i));var r=new yu(i.get(1),i.get(3)),o=new Ae(i.popFirst(5));return r.isEqual(t)||wt("Document "+o+" contains a document reference within a different database ("+r.projectId+"/"+r.database+") which is not supported. It will be treated as a reference in the current database ("+t.projectId+"/"+t.database+") instead."),o},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(n,e,t){return n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e}var Fx=function(n){function e(t){var i=this;return(i=n.call(this)||this).firestore=t,i}return Ce(e,n),e.prototype.convertBytes=function(t){return new Cr(t)},e.prototype.convertReference=function(t){var i=this.convertDocumentKey(t,this.firestore._databaseId);return new mt(this.firestore,null,i)},e}(rf),Bx=function(){function n(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=kr(e)}return n.prototype.set=function(e,t,i){this._verifyNotCommitted();var r=Bi(e,this._firestore),o=tc(r.converter,t,i),s=ec(this._dataReader,"WriteBatch.set",r._key,o,r.converter!==null,i);return this._mutations.push(s.toMutation(r._key,en.none())),this},n.prototype.update=function(e,t,i){for(var r=[],o=3;o<arguments.length;o++)r[o-3]=arguments[o];this._verifyNotCommitted();var s,a=Bi(e,this._firestore);return s=typeof(t=At(t))=="string"||t instanceof Jn?ef(this._dataReader,"WriteBatch.update",a._key,t,i,r):Jh(this._dataReader,"WriteBatch.update",a._key,t),this._mutations.push(s.toMutation(a._key,en.exists(!0))),this},n.prototype.delete=function(e){this._verifyNotCommitted();var t=Bi(e,this._firestore);return this._mutations=this._mutations.concat(new Js(t._key,en.none())),this},n.prototype.commit=function(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()},n.prototype._verifyNotCommitted=function(){if(this._committed)throw new Z(F.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")},n}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n,e){if((n=At(n)).firestore!==e)throw new Z(F.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vr=function(n){function e(t){var i=this;return(i=n.call(this)||this).firestore=t,i}return Ce(e,n),e.prototype.convertBytes=function(t){return new Cr(t)},e.prototype.convertReference=function(t){var i=this.convertDocumentKey(t,this.firestore._databaseId);return new mt(this.firestore,null,i)},e}(rf);function zd(n,e,t){n=st(n,mt);var i=st(n.firestore,Pt),r=tc(n.converter,e,t);return na(i,[ec(kr(i),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,en.none())])}function Gd(n,e,t){for(var i=[],r=3;r<arguments.length;r++)i[r-3]=arguments[r];n=st(n,mt);var o=st(n.firestore,Pt),s=kr(o);return na(o,[(typeof(e=At(e))=="string"||e instanceof Jn?ef(s,"updateDoc",n._key,e,t,i):Jh(s,"updateDoc",n._key,e)).toMutation(n._key,en.exists(!0))])}function ay(n){for(var e,t,i,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];n=At(n);var s={includeMetadataChanges:!1},a=0;typeof r[a]!="object"||Bo(r[a])||(s=r[a],a++);var u,c,l,h={includeMetadataChanges:s.includeMetadataChanges};if(Bo(r[a])){var f=r[a];r[a]=(e=f.next)===null||e===void 0?void 0:e.bind(f),r[a+1]=(t=f.error)===null||t===void 0?void 0:t.bind(f),r[a+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}if(n instanceof mt)c=st(n.firestore,Pt),l=Ks(n._key.path),u={next:function(v){r[a]&&r[a](Ll(c,n,v))},error:r[a+1],complete:r[a+2]};else{var p=st(n,Dn);c=st(p.firestore,Pt),l=p._query;var g=new vr(c);u={next:function(v){r[a]&&r[a](new Fi(c,g,p,v))},error:r[a+1],complete:r[a+2]},ry(n._query)}return function(v,m,d,S){var y=this,x=new $u(S),T=new Gh(m,x,d);return v.asyncQueue.enqueueAndForget(function(){return K(y,void 0,void 0,function(){var C;return j(this,function(w){switch(w.label){case 0:return C=kh,[4,Fo(v)];case 1:return[2,C.apply(void 0,[w.sent(),T])]}})})}),function(){x.Wo(),v.asyncQueue.enqueueAndForget(function(){return K(y,void 0,void 0,function(){var C;return j(this,function(w){switch(w.label){case 0:return C=Vh,[4,Fo(v)];case 1:return[2,C.apply(void 0,[w.sent(),T])]}})})})}}(Zt(c),l,h,u)}function na(n,e){return function(t,i){var r=this,o=new xn;return t.asyncQueue.enqueueAndForget(function(){return K(r,void 0,void 0,function(){var s;return j(this,function(a){switch(a.label){case 0:return s=JS,[4,Gv(t)];case 1:return[2,s.apply(void 0,[a.sent(),i,o])]}})})}),o.promise}(Zt(n),e)}function Ll(n,e,t){var i=t.docs.get(e._key),r=new vr(n);return new Ei(n,r,e._key,i,new pr(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kx=function(n){function e(t,i){var r=this;return(r=n.call(this,t,i)||this)._firestore=t,r}return Ce(e,n),e.prototype.get=function(t){var i=this,r=Bi(t,this._firestore),o=new vr(this._firestore);return n.prototype.get.call(this,t).then(function(s){return new Ei(i._firestore,o,r._key,s._document,new pr(!1,!1),r.converter)})},e}(function(){function n(e,t){this._firestore=e,this._transaction=t,this._dataReader=kr(e)}return n.prototype.get=function(e){var t=this,i=Bi(e,this._firestore),r=new Fx(this._firestore);return this._transaction.lookup([i._key]).then(function(o){if(!o||o.length!==1)return Te();var s=o[0];if(s.isFoundDocument())return new Ds(t._firestore,r,s.key,s,i.converter);if(s.isNoDocument())return new Ds(t._firestore,r,i._key,null,i.converter);throw Te()})},n.prototype.set=function(e,t,i){var r=Bi(e,this._firestore),o=tc(r.converter,t,i),s=ec(this._dataReader,"Transaction.set",r._key,o,r.converter!==null,i);return this._transaction.set(r._key,s),this},n.prototype.update=function(e,t,i){for(var r=[],o=3;o<arguments.length;o++)r[o-3]=arguments[o];var s,a=Bi(e,this._firestore);return s=typeof(t=At(t))=="string"||t instanceof Jn?ef(this._dataReader,"Transaction.update",a._key,t,i,r):Jh(this._dataReader,"Transaction.update",a._key,t),this._transaction.update(a._key,s),this},n.prototype.delete=function(e){var t=Bi(e,this._firestore);return this._transaction.delete(t._key),this},n}());/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(){if(typeof Uint8Array=="undefined")throw new Z(F.UNIMPLEMENTED,"Uint8Arrays are not available in this environment.")}function Wd(){if(typeof atob=="undefined")throw new Z(F.UNIMPLEMENTED,"Blobs are unavailable in Firestore in this environment.")}var uy=function(){function n(e){this._delegate=e}return n.fromBase64String=function(e){return Wd(),new n(Cr.fromBase64String(e))},n.fromUint8Array=function(e){return Hd(),new n(Cr.fromUint8Array(e))},n.prototype.toBase64=function(){return Wd(),this._delegate.toBase64()},n.prototype.toUint8Array=function(){return Hd(),this._delegate.toUint8Array()},n.prototype.isEqual=function(e){return this._delegate.isEqual(e._delegate)},n.prototype.toString=function(){return"Blob(base64: "+this.toBase64()+")"},n}(),Vx=function(){function n(){}return n.prototype.enableIndexedDbPersistence=function(e,t){return function(i,r){Ud(i=st(i,Pt));var o=Zt(i),s=i._freezeSettings(),a=new Pl;return Nd(o,a,new Bv(a,s.cacheSizeBytes,r==null?void 0:r.forceOwnership))}(e._delegate,{forceOwnership:t})},n.prototype.enableMultiTabIndexedDbPersistence=function(e){return function(t){Ud(t=st(t,Pt));var i=Zt(t),r=t._freezeSettings(),o=new Pl;return Nd(i,o,new px(o,r.cacheSizeBytes))}(e._delegate)},n.prototype.clearIndexedDbPersistence=function(e){return function(t){var i=this;if(t._initialized&&!t._terminated)throw new Z(F.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");var r=new xn;return t._queue.enqueueAndForgetEvenWhileRestricted(function(){return K(i,void 0,void 0,function(){var o;return j(this,function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,function(a){return K(this,void 0,void 0,function(){var u;return j(this,function(c){switch(c.label){case 0:return Do.yt()?(u=a+"main",[4,Do.delete(u)]):[2,Promise.resolve()];case 1:return c.sent(),[2]}})})}(Lh(t._databaseId,t._persistenceKey))];case 1:return s.sent(),r.resolve(),[3,3];case 2:return o=s.sent(),r.reject(o),[3,3];case 3:return[2]}})})}),r.promise}(e._delegate)},n}(),cy=function(){function n(e,t,i){var r=this;this._delegate=t,this.Zc=i,this.INTERNAL={delete:function(){return r.terminate()}},e instanceof yu||(this.tu=e)}return Object.defineProperty(n.prototype,"_databaseId",{get:function(){return this._delegate._databaseId},enumerable:!1,configurable:!0}),n.prototype.settings=function(e){var t=this._delegate._getSettings();e.merge||t.host===e.host||ou("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)},n.prototype.useEmulator=function(e,t,i){i===void 0&&(i={}),function(r,o,s,a){var u;a===void 0&&(a={});var c=(r=st(r,Ps))._getSettings();if(c.host!=="firestore.googleapis.com"&&c.host!==o&&ou("Host has been set in both settings() and useEmulator(), emulator host will be used"),r._setSettings(Object.assign(Object.assign({},c),{host:o+":"+s,ssl:!1})),a.mockUserToken){var l,h;if(typeof a.mockUserToken=="string")l=a.mockUserToken,h=zt.MOCK_USER;else{l=u_(a.mockUserToken,(u=r._app)===null||u===void 0?void 0:u.options.projectId);var f=a.mockUserToken.sub||a.mockUserToken.user_id;if(!f)throw new Z(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new zt(f)}r._credentials=new _x(new Hv(l,h))}}(this._delegate,e,t,i)},n.prototype.enableNetwork=function(){return function(e){var t=this;return e.asyncQueue.enqueue(function(){return K(t,void 0,void 0,function(){var i,r;return j(this,function(o){switch(o.label){case 0:return[4,Td(e)];case 1:return i=o.sent(),[4,Md(e)];case 2:return r=o.sent(),[2,(i.setNetworkEnabled(!0),function(s){var a=ve(s);return a.Or.delete(0),ea(a)}(r))]}})})})}(Zt(st(this._delegate,Pt)))},n.prototype.disableNetwork=function(){return function(e){var t=this;return e.asyncQueue.enqueue(function(){return K(t,void 0,void 0,function(){var i,r;return j(this,function(o){switch(o.label){case 0:return[4,Td(e)];case 1:return i=o.sent(),[4,Md(e)];case 2:return r=o.sent(),[2,(i.setNetworkEnabled(!1),function(s){return K(this,void 0,void 0,function(){var a;return j(this,function(u){switch(u.label){case 0:return(a=ve(s)).Or.add(0),[4,Xo(a)];case 1:return u.sent(),a.Br.set("Offline"),[2]}})})}(r))]}})})})}(Zt(st(this._delegate,Pt)))},n.prototype.enablePersistence=function(e){var t=!1,i=!1;return e&&Wv("synchronizeTabs",t=!!e.synchronizeTabs,"experimentalForceOwningTab",i=!!e.experimentalForceOwningTab),t?this.Zc.enableMultiTabIndexedDbPersistence(this):this.Zc.enableIndexedDbPersistence(this,i)},n.prototype.clearPersistence=function(){return this.Zc.clearIndexedDbPersistence(this)},n.prototype.terminate=function(){return this.tu&&(this.tu._removeServiceInstance("firestore"),this.tu._removeServiceInstance("firestore-exp")),this._delegate._delete()},n.prototype.waitForPendingWrites=function(){return function(e){var t=this,i=new xn;return e.asyncQueue.enqueueAndForget(function(){return K(t,void 0,void 0,function(){var r;return j(this,function(o){switch(o.label){case 0:return r=ix,[4,Gv(e)];case 1:return[2,r.apply(void 0,[o.sent(),i])]}})})}),i.promise}(Zt(st(this._delegate,Pt)))},n.prototype.onSnapshotsInSync=function(e){return function(t,i){return function(r,o){var s=this,a=new $u(o);return r.asyncQueue.enqueueAndForget(function(){return K(s,void 0,void 0,function(){var u;return j(this,function(c){switch(c.label){case 0:return u=function(l,h){ve(l).Gr.add(h),h.next()},[4,Fo(r)];case 1:return[2,u.apply(void 0,[c.sent(),a])]}})})}),function(){a.Wo(),r.asyncQueue.enqueueAndForget(function(){return K(s,void 0,void 0,function(){var u;return j(this,function(c){switch(c.label){case 0:return u=function(l,h){ve(l).Gr.delete(h)},[4,Fo(r)];case 1:return[2,u.apply(void 0,[c.sent(),a])]}})})})}}(Zt(t=st(t,Pt)),Bo(i)?i:{next:i})}(this._delegate,e)},Object.defineProperty(n.prototype,"app",{get:function(){if(!this.tu)throw new Z(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this.tu},enumerable:!1,configurable:!0}),n.prototype.collection=function(e){try{return new Su(this,qv(this._delegate,e))}catch(t){throw cn(t,"collection()","Firestore.collection()")}},n.prototype.doc=function(e){try{return new yr(this,ja(this._delegate,e))}catch(t){throw cn(t,"doc()","Firestore.doc()")}},n.prototype.collectionGroup=function(e){try{return new rc(this,function(t,i){if(t=st(t,Ps),$h("collectionGroup","collection id",i),i.indexOf("/")>=0)throw new Z(F.INVALID_ARGUMENT,"Invalid collection ID '"+i+"' passed to function collectionGroup(). Collection IDs must not contain '/'.");return new Dn(t,null,function(r){return new bi(ot.emptyPath(),r)}(i))}(this._delegate,e))}catch(t){throw cn(t,"collectionGroup()","Firestore.collectionGroup()")}},n.prototype.runTransaction=function(e){var t=this;return function(i,r){return function(o,s){var a=this,u=new xn;return o.asyncQueue.enqueueAndForget(function(){return K(a,void 0,void 0,function(){var c;return j(this,function(l){switch(l.label){case 0:return[4,function(h){return Qu(h).then(function(f){return f.datastore})}(o)];case 1:return c=l.sent(),new gx(o.asyncQueue,c,s,u).run(),[2]}})})}),u.promise}(Zt(i),function(o){return r(new kx(i,o))})}(this._delegate,function(i){return e(new ly(t,i))})},n.prototype.batch=function(){var e=this;return Zt(this._delegate),new hy(new Bx(this._delegate,function(t){return na(e._delegate,t)}))},n.prototype.loadBundle=function(e){throw new Z(F.FAILED_PRECONDITION,'"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?')},n.prototype.namedQuery=function(e){throw new Z(F.FAILED_PRECONDITION,'"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?')},n}(),nc=function(n){function e(t){var i=this;return(i=n.call(this)||this).firestore=t,i}return Ce(e,n),e.prototype.convertBytes=function(t){return new uy(new Cr(t))},e.prototype.convertReference=function(t){var i=this.convertDocumentKey(t,this.firestore._databaseId);return yr.eu(i,this.firestore,null)},e}(rf);function zx(n){var e;e=n,qn.setLogLevel(e)}var ly=function(){function n(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new nc(e)}return n.prototype.get=function(e){var t=this,i=mr(e);return this._delegate.get(i).then(function(r){return new Ls(t._firestore,new Ei(t._firestore._delegate,t._userDataWriter,r._key,r._document,r.metadata,i.converter))})},n.prototype.set=function(e,t,i){var r=mr(e);return i?(Qh("Transaction.set",i),this._delegate.set(r,t,i)):this._delegate.set(r,t),this},n.prototype.update=function(e,t,i){for(var r,o=[],s=3;s<arguments.length;s++)o[s-3]=arguments[s];var a=mr(e);return arguments.length===2?this._delegate.update(a,t):(r=this._delegate).update.apply(r,yt([a,t,i],o)),this},n.prototype.delete=function(e){var t=mr(e);return this._delegate.delete(t),this},n}(),hy=function(){function n(e){this._delegate=e}return n.prototype.set=function(e,t,i){var r=mr(e);return i?(Qh("WriteBatch.set",i),this._delegate.set(r,t,i)):this._delegate.set(r,t),this},n.prototype.update=function(e,t,i){for(var r,o=[],s=3;s<arguments.length;s++)o[s-3]=arguments[s];var a=mr(e);return arguments.length===2?this._delegate.update(a,t):(r=this._delegate).update.apply(r,yt([a,t,i],o)),this},n.prototype.delete=function(e){var t=mr(e);return this._delegate.delete(t),this},n.prototype.commit=function(){return this._delegate.commit()},n}(),ic=function(){function n(e,t,i){this._firestore=e,this._userDataWriter=t,this._delegate=i}return n.prototype.fromFirestore=function(e,t){var i=new ds(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ns(this._firestore,i),t!=null?t:{})},n.prototype.toFirestore=function(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)},n.nu=function(e,t){var i=n.su,r=i.get(e);r||(r=new WeakMap,i.set(e,r));var o=r.get(t);return o||(o=new n(e,new nc(e),t),r.set(t,o)),o},n}();ic.su=new WeakMap;var yr=function(){function n(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new nc(e)}return n.iu=function(e,t,i){if(e.length%2!=0)throw new Z(F.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but "+e.canonicalString()+" has "+e.length);return new n(t,new mt(t._delegate,i,new Ae(e)))},n.eu=function(e,t,i){return new n(t,new mt(t._delegate,i,e))},Object.defineProperty(n.prototype,"id",{get:function(){return this._delegate.id},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"parent",{get:function(){return new Su(this.firestore,this._delegate.parent)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"path",{get:function(){return this._delegate.path},enumerable:!1,configurable:!0}),n.prototype.collection=function(e){try{return new Su(this.firestore,qv(this._delegate,e))}catch(t){throw cn(t,"collection()","DocumentReference.collection()")}},n.prototype.isEqual=function(e){return(e=At(e))instanceof mt&&jv(this._delegate,e)},n.prototype.set=function(e,t){t=Qh("DocumentReference.set",t);try{return t?zd(this._delegate,e,t):zd(this._delegate,e)}catch(i){throw cn(i,"setDoc()","DocumentReference.set()")}},n.prototype.update=function(e,t){for(var i=[],r=2;r<arguments.length;r++)i[r-2]=arguments[r];try{return arguments.length===1?Gd(this._delegate,e):Gd.apply(void 0,yt([this._delegate,e,t],i))}catch(o){throw cn(o,"updateDoc()","DocumentReference.update()")}},n.prototype.delete=function(){return na(st((e=this._delegate).firestore,Pt),[new Js(e._key,en.none())]);var e},n.prototype.onSnapshot=function(){for(var e=this,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var r=fy(t),o=dy(t,function(s){return new Ls(e.firestore,new Ei(e.firestore._delegate,e._userDataWriter,s._key,s._document,s.metadata,e._delegate.converter))});return ay(this._delegate,r,o)},n.prototype.get=function(e){var t=this;return((e==null?void 0:e.source)==="cache"?function(i){i=st(i,mt);var r=st(i.firestore,Pt),o=Zt(r),s=new vr(r);return function(a,u){var c=this,l=new xn;return a.asyncQueue.enqueueAndForget(function(){return K(c,void 0,void 0,function(){var h;return j(this,function(f){switch(f.label){case 0:return h=function(p,g,v){return K(this,void 0,void 0,function(){var m,d;return j(this,function(S){switch(S.label){case 0:return S.trys.push([0,2,,3]),[4,function(y,x){var T=ve(y);return T.persistence.runTransaction("read document","readonly",function(C){return T.Mn.mn(C,x)})}(p,g)];case 1:return(d=S.sent()).isFoundDocument()?v.resolve(d):d.isNoDocument()?v.resolve(null):v.reject(new Z(F.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")),[3,3];case 2:return m=S.sent(),d=$o(m,"Failed to get document '"+g+" from cache"),v.reject(d),[3,3];case 3:return[2]}})})},[4,zv(a)];case 1:return[2,h.apply(void 0,[f.sent(),u,l])]}})})}),l.promise}(o,i._key).then(function(a){return new Ei(r,s,i._key,a,new pr(a!==null&&a.hasLocalMutations,!0),i.converter)})}(this._delegate):(e==null?void 0:e.source)==="server"?function(i){i=st(i,mt);var r=st(i.firestore,Pt);return wd(Zt(r),i._key,{source:"server"}).then(function(o){return Ll(r,i,o)})}(this._delegate):function(i){i=st(i,mt);var r=st(i.firestore,Pt);return wd(Zt(r),i._key).then(function(o){return Ll(r,i,o)})}(this._delegate)).then(function(i){return new Ls(t.firestore,new Ei(t.firestore._delegate,t._userDataWriter,i._key,i._document,i.metadata,t._delegate.converter))})},n.prototype.withConverter=function(e){return new n(this.firestore,e?this._delegate.withConverter(ic.nu(this.firestore,e)):this._delegate.withConverter(null))},n}();function cn(n,e,t){return n.message=n.message.replace(e,t),n}function fy(n){for(var e=0,t=n;e<t.length;e++){var i=t[e];if(typeof i=="object"&&!Bo(i))return i}return{}}function dy(n,e){var t,i,r;return{next:function(o){r.next&&r.next(e(o))},error:(t=(r=Bo(n[0])?n[0]:Bo(n[1])?n[1]:typeof n[0]=="function"?{next:n[0],error:n[1],complete:n[2]}:{next:n[1],error:n[2],complete:n[3]}).error)===null||t===void 0?void 0:t.bind(r),complete:(i=r.complete)===null||i===void 0?void 0:i.bind(r)}}var Ls=function(){function n(e,t){this._firestore=e,this._delegate=t}return Object.defineProperty(n.prototype,"ref",{get:function(){return new yr(this._firestore,this._delegate.ref)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"id",{get:function(){return this._delegate.id},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"metadata",{get:function(){return this._delegate.metadata},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"exists",{get:function(){return this._delegate.exists()},enumerable:!1,configurable:!0}),n.prototype.data=function(e){return this._delegate.data(e)},n.prototype.get=function(e,t){return this._delegate.get(e,t)},n.prototype.isEqual=function(e){return iy(this._delegate,e._delegate)},n}(),Ns=function(n){function e(){return n!==null&&n.apply(this,arguments)||this}return Ce(e,n),e.prototype.data=function(t){return this._delegate.data(t)},e}(Ls),rc=function(){function n(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new nc(e)}return n.prototype.where=function(e,t,i){try{return new n(this.firestore,wi(this._delegate,function(r,o,s){var a=o,u=Eu("where",r);return new Ux(u,a,s)}(e,t,i)))}catch(r){throw cn(r,/(orderBy|where)\(\)/,"Query.$1()")}},n.prototype.orderBy=function(e,t){try{return new n(this.firestore,wi(this._delegate,function(i,r){r===void 0&&(r="asc");var o=r,s=Eu("orderBy",i);return new Ox(s,o)}(e,t)))}catch(i){throw cn(i,/(orderBy|where)\(\)/,"Query.$1()")}},n.prototype.limit=function(e){try{return new n(this.firestore,wi(this._delegate,function(t){return Dd("limit",t),new Od("limit",t,"F")}(e)))}catch(t){throw cn(t,"limit()","Query.limit()")}},n.prototype.limitToLast=function(e){try{return new n(this.firestore,wi(this._delegate,function(t){return Dd("limitToLast",t),new Od("limitToLast",t,"L")}(e)))}catch(t){throw cn(t,"limitToLast()","Query.limitToLast()")}},n.prototype.startAt=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return new n(this.firestore,wi(this._delegate,function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];return new Fd("startAt",i,!0)}.apply(void 0,e)))}catch(i){throw cn(i,"startAt()","Query.startAt()")}},n.prototype.startAfter=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return new n(this.firestore,wi(this._delegate,function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];return new Fd("startAfter",i,!1)}.apply(void 0,e)))}catch(i){throw cn(i,"startAfter()","Query.startAfter()")}},n.prototype.endBefore=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return new n(this.firestore,wi(this._delegate,function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];return new Bd("endBefore",i,!0)}.apply(void 0,e)))}catch(i){throw cn(i,"endBefore()","Query.endBefore()")}},n.prototype.endAt=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return new n(this.firestore,wi(this._delegate,function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];return new Bd("endAt",i,!1)}.apply(void 0,e)))}catch(i){throw cn(i,"endAt()","Query.endAt()")}},n.prototype.isEqual=function(e){return Xv(this._delegate,e._delegate)},n.prototype.get=function(e){var t=this;return((e==null?void 0:e.source)==="cache"?function(i){i=st(i,Dn);var r=st(i.firestore,Pt),o=Zt(r),s=new vr(r);return function(a,u){var c=this,l=new xn;return a.asyncQueue.enqueueAndForget(function(){return K(c,void 0,void 0,function(){var h;return j(this,function(f){switch(f.label){case 0:return h=function(p,g,v){return K(this,void 0,void 0,function(){var m,d,S,y,x;return j(this,function(T){switch(T.label){case 0:return T.trys.push([0,2,,3]),[4,mu(p,g,!0)];case 1:return x=T.sent(),m=new Lv(g,x.Bn),d=m._o(x.documents),S=m.applyChanges(d,!1),v.resolve(S.snapshot),[3,3];case 2:return y=T.sent(),x=$o(y,"Failed to execute query '"+g+" against cache"),v.reject(x),[3,3];case 3:return[2]}})})},[4,zv(a)];case 1:return[2,h.apply(void 0,[f.sent(),u,l])]}})})}),l.promise}(o,i._query).then(function(a){return new Fi(r,s,i,a)})}(this._delegate):(e==null?void 0:e.source)==="server"?function(i){i=st(i,Dn);var r=st(i.firestore,Pt),o=Zt(r),s=new vr(r);return Ad(o,i._query,{source:"server"}).then(function(a){return new Fi(r,s,i,a)})}(this._delegate):function(i){i=st(i,Dn);var r=st(i.firestore,Pt),o=Zt(r),s=new vr(r);return ry(i._query),Ad(o,i._query).then(function(a){return new Fi(r,s,i,a)})}(this._delegate)).then(function(i){return new Nl(t.firestore,new Fi(t.firestore._delegate,t._userDataWriter,t._delegate,i._snapshot))})},n.prototype.onSnapshot=function(){for(var e=this,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var r=fy(t),o=dy(t,function(s){return new Nl(e.firestore,new Fi(e.firestore._delegate,e._userDataWriter,e._delegate,s._snapshot))});return ay(this._delegate,r,o)},n.prototype.withConverter=function(e){return new n(this.firestore,e?this._delegate.withConverter(ic.nu(this.firestore,e)):this._delegate.withConverter(null))},n}(),Gx=function(){function n(e,t){this._firestore=e,this._delegate=t}return Object.defineProperty(n.prototype,"type",{get:function(){return this._delegate.type},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"doc",{get:function(){return new Ns(this._firestore,this._delegate.doc)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"oldIndex",{get:function(){return this._delegate.oldIndex},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"newIndex",{get:function(){return this._delegate.newIndex},enumerable:!1,configurable:!0}),n}(),Nl=function(){function n(e,t){this._firestore=e,this._delegate=t}return Object.defineProperty(n.prototype,"query",{get:function(){return new rc(this._firestore,this._delegate.query)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"metadata",{get:function(){return this._delegate.metadata},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"size",{get:function(){return this._delegate.size},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"empty",{get:function(){return this._delegate.empty},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"docs",{get:function(){var e=this;return this._delegate.docs.map(function(t){return new Ns(e._firestore,t)})},enumerable:!1,configurable:!0}),n.prototype.docChanges=function(e){var t=this;return this._delegate.docChanges(e).map(function(i){return new Gx(t._firestore,i)})},n.prototype.forEach=function(e,t){var i=this;this._delegate.forEach(function(r){e.call(t,new Ns(i._firestore,r))})},n.prototype.isEqual=function(e){return iy(this._delegate,e._delegate)},n}(),Su=function(n){function e(t,i){var r=this;return(r=n.call(this,t,i)||this).firestore=t,r._delegate=i,r}return Ce(e,n),Object.defineProperty(e.prototype,"id",{get:function(){return this._delegate.id},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this._delegate.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=this._delegate.parent;return t?new yr(this.firestore,t):null},enumerable:!1,configurable:!0}),e.prototype.doc=function(t){try{return new yr(this.firestore,t===void 0?ja(this._delegate):ja(this._delegate,t))}catch(i){throw cn(i,"doc()","CollectionReference.doc()")}},e.prototype.add=function(t){var i=this;return function(r,o){var s=st(r.firestore,Pt),a=ja(r),u=tc(r.converter,o);return na(s,[ec(kr(r.firestore),"addDoc",a._key,u,r.converter!==null,{}).toMutation(a._key,en.exists(!1))]).then(function(){return a})}(this._delegate,t).then(function(r){return new yr(i.firestore,r)})},e.prototype.isEqual=function(t){return jv(this._delegate,t._delegate)},e.prototype.withConverter=function(t){return new e(this.firestore,t?this._delegate.withConverter(ic.nu(this.firestore,t)):this._delegate.withConverter(null))},e}(rc);function mr(n){return st(n,mt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hx=function(){function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._delegate=new(Jn.bind.apply(Jn,yt([void 0],e)))}return n.documentId=function(){return new n(Kn.keyField().canonicalString())},n.prototype.isEqual=function(e){return(e=At(e))instanceof Jn&&this._delegate._internalPath.isEqual(e._internalPath)},n}(),Wx=function(){function n(e){this._delegate=e}return n.serverTimestamp=function(){var e=new Rx("serverTimestamp");return e._methodName="FieldValue.serverTimestamp",new n(e)},n.delete=function(){var e=new Zh("deleteField");return e._methodName="FieldValue.delete",new n(e)},n.arrayUnion=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return new Cx("arrayUnion",r)}.apply(void 0,e);return i._methodName="FieldValue.arrayUnion",new n(i)},n.arrayRemove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return new Ix("arrayRemove",r)}.apply(void 0,e);return i._methodName="FieldValue.arrayRemove",new n(i)},n.increment=function(e){var t=function(i){return new Px("increment",i)}(e);return t._methodName="FieldValue.increment",new n(t)},n.prototype.isEqual=function(e){return this._delegate.isEqual(e._delegate)},n}(),qx={Firestore:cy,GeoPoint:Ju,Timestamp:yn,Blob:uy,Transaction:ly,WriteBatch:hy,DocumentReference:yr,DocumentSnapshot:Ls,Query:rc,QueryDocumentSnapshot:Ns,QuerySnapshot:Nl,CollectionReference:Su,FieldPath:Hx,FieldValue:Wx,setLogLevel:zx,CACHE_SIZE_UNLIMITED:Tx};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(n){(function(e,t){e.INTERNAL.registerComponent(new Cu("firestore",function(i){var r=i.getProvider("app").getImmediate();return t(r,i.getProvider("auth-internal"))},"PUBLIC").setServiceProps(Object.assign({},qx)))})(n,function(e,t){return new cy(e,new Pt(e,t),new Vx)}),n.registerVersion("@firebase/firestore","2.4.1")}jx(br);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const of="157",Wr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xx=0,qd=1,Kx=2,py=1,Yx=2,hi=3,Ki=0,_n=1,di=2,Hi=0,yo=1,jd=2,Xd=3,Kd=4,$x=5,ho=100,Qx=101,Zx=102,Yd=103,$d=104,Jx=200,eb=201,tb=202,nb=203,my=204,gy=205,ib=206,rb=207,ob=208,sb=209,ab=210,ub=0,cb=1,lb=2,Ul=3,hb=4,fb=5,db=6,pb=7,vy=0,mb=1,gb=2,Wi=0,vb=1,yb=2,_b=3,Eb=4,Sb=5,yy=300,ko=301,Vo=302,Ol=303,Fl=304,oc=306,Bl=1e3,Hn=1001,kl=1002,ln=1003,Qd=1004,Cc=1005,mn=1006,xb=1007,Us=1008,qi=1009,bb=1010,Tb=1011,sf=1012,_y=1013,ki=1014,Vi=1015,Os=1016,Ey=1017,Sy=1018,_r=1020,Mb=1021,Wn=1023,wb=1024,Ab=1025,Er=1026,zo=1027,Rb=1028,xy=1029,Cb=1030,by=1031,Ty=1033,Ic=33776,Pc=33777,Dc=33778,Lc=33779,Zd=35840,Jd=35841,ep=35842,tp=35843,Ib=36196,np=37492,ip=37496,rp=37808,op=37809,sp=37810,ap=37811,up=37812,cp=37813,lp=37814,hp=37815,fp=37816,dp=37817,pp=37818,mp=37819,gp=37820,vp=37821,Nc=36492,yp=36494,_p=36495,Pb=36283,Ep=36284,Sp=36285,xp=36286,My=3e3,Sr=3001,Db=3200,Lb=3201,Nb=0,Ub=1,Bn="",Bt="srgb",xi="srgb-linear",af="display-p3",sc="display-p3-linear",xu="linear",ht="srgb",bu="rec709",Tu="p3",Uc=7680,Ob=519,Fb=512,Bb=513,kb=514,Vb=515,zb=516,Gb=517,Hb=518,Wb=519,bp=35044,Tp="300 es",Vl=1035,gi=2e3,Mu=2001;class zr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mp=1234567;const ps=Math.PI/180,Fs=180/Math.PI;function Qo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Jt(n,e,t){return Math.max(e,Math.min(t,n))}function uf(n,e){return(n%e+e)%e}function qb(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function jb(n,e,t){return n!==e?(t-n)/(e-n):0}function ms(n,e,t){return(1-t)*n+t*e}function Xb(n,e,t,i){return ms(n,e,1-Math.exp(-t*i))}function Kb(n,e=1){return e-Math.abs(uf(n,e*2)-e)}function Yb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $b(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Qb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Zb(n,e){return n+Math.random()*(e-n)}function Jb(n){return n*(.5-Math.random())}function eT(n){n!==void 0&&(Mp=n);let e=Mp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tT(n){return n*ps}function nT(n){return n*Fs}function zl(n){return(n&n-1)===0&&n!==0}function iT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rT(n,e,t,i,r){const o=Math.cos,s=Math.sin,a=o(t/2),u=s(t/2),c=o((e+i)/2),l=s((e+i)/2),h=o((e-i)/2),f=s((e-i)/2),p=o((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(a*l,u*h,u*f,a*c);break;case"YZY":n.set(u*f,a*l,u*h,a*c);break;case"ZXZ":n.set(u*h,u*f,a*l,a*c);break;case"XZX":n.set(a*l,u*g,u*p,a*c);break;case"YXY":n.set(u*p,a*l,u*g,a*c);break;case"ZYZ":n.set(u*g,u*p,a*l,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const oT={DEG2RAD:ps,RAD2DEG:Fs,generateUUID:Qo,clamp:Jt,euclideanModulo:uf,mapLinear:qb,inverseLerp:jb,lerp:ms,damp:Xb,pingpong:Kb,smoothstep:Yb,smootherstep:$b,randInt:Qb,randFloat:Zb,randFloatSpread:Jb,seededRandom:eT,degToRad:tT,radToDeg:nT,isPowerOfTwo:zl,ceilPowerOfTwo:iT,floorPowerOfTwo:wu,setQuaternionFromProperEuler:rT,normalize:an,denormalize:fo};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,o,s,a,u,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,u,c)}set(e,t,i,r,o,s,a,u,c){const l=this.elements;return l[0]=e,l[1]=r,l[2]=a,l[3]=t,l[4]=o,l[5]=u,l[6]=i,l[7]=s,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],u=i[6],c=i[1],l=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=r[0],m=r[3],d=r[6],S=r[1],y=r[4],x=r[7],T=r[2],C=r[5],w=r[8];return o[0]=s*v+a*S+u*T,o[3]=s*m+a*y+u*C,o[6]=s*d+a*x+u*w,o[1]=c*v+l*S+h*T,o[4]=c*m+l*y+h*C,o[7]=c*d+l*x+h*w,o[2]=f*v+p*S+g*T,o[5]=f*m+p*y+g*C,o[8]=f*d+p*x+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],l=e[8];return t*s*l-t*a*c-i*o*l+i*a*u+r*o*c-r*s*u}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],l=e[8],h=l*s-a*c,f=a*u-l*o,p=c*o-s*u,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-l*i)*v,e[2]=(a*i-r*s)*v,e[3]=f*v,e[4]=(l*t-r*u)*v,e[5]=(r*o-a*t)*v,e[6]=p*v,e[7]=(i*u-c*t)*v,e[8]=(s*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){const u=Math.cos(o),c=Math.sin(o);return this.set(i*u,i*c,-i*(u*s+c*a)+s+e,-r*c,r*u,-r*(-c*s+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Oc.makeScale(e,t)),this}rotate(e){return this.premultiply(Oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oc=new Ye;function wy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Au(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sT(){const n=Au("canvas");return n.style.display="block",n}const wp={};function gs(n){n in wp||(wp[n]=!0,console.warn(n))}const Ap=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rp=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ga={[xi]:{transfer:xu,primaries:bu,toReference:n=>n,fromReference:n=>n},[Bt]:{transfer:ht,primaries:bu,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[sc]:{transfer:xu,primaries:Tu,toReference:n=>n.applyMatrix3(Rp),fromReference:n=>n.applyMatrix3(Ap)},[af]:{transfer:ht,primaries:Tu,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Rp),fromReference:n=>n.applyMatrix3(Ap).convertLinearToSRGB()}},aT=new Set([xi,sc]),at={enabled:!0,_workingColorSpace:xi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!aT.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ga[e].toReference,r=ga[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ga[n].primaries},getTransfer:function(n){return n===Bn?xu:ga[n].transfer}};function _o(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let jr;class Ay{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jr===void 0&&(jr=Au("canvas")),jr.width=e.width,jr.height=e.height;const i=jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Au("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=_o(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_o(t[i]/255)*255):t[i]=_o(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uT=0;class Ry{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=Qo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Bc(r[s].image)):o.push(Bc(r[s]))}else o=Bc(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Bc(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Ay.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cT=0;class En extends zr{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,i=Hn,r=Hn,o=mn,s=Us,a=Wn,u=qi,c=En.DEFAULT_ANISOTROPY,l=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=Qo(),this.name="",this.source=new Ry(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===Sr?Bt:Bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bl:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bl:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bt?Sr:My}set encoding(e){gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sr?Bt:Bn}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=yy;En.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const u=e.elements,c=u[0],l=u[4],h=u[8],f=u[1],p=u[5],g=u[9],v=u[2],m=u[6],d=u[10];if(Math.abs(l-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(p+1)/2,T=(d+1)/2,C=(l+f)/4,w=(h+v)/4,H=(g+m)/4;return y>x&&y>T?y<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(y),r=C/i,o=w/i):x>T?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=C/r,o=H/r):T<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(T),i=w/o,r=H/o),this.set(i,r,o,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-l)*(f-l));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-v)/S,this.z=(f-l)/S,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lT extends zr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(gs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Sr?Bt:Bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new En(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ry(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends lT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cy extends En{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hT extends En{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let u=i[r+0],c=i[r+1],l=i[r+2],h=i[r+3];const f=o[s+0],p=o[s+1],g=o[s+2],v=o[s+3];if(a===0){e[t+0]=u,e[t+1]=c,e[t+2]=l,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||u!==f||c!==p||l!==g){let m=1-a;const d=u*f+c*p+l*g+h*v,S=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const T=Math.sqrt(y),C=Math.atan2(T,d*S);m=Math.sin(m*C)/T,a=Math.sin(a*C)/T}const x=a*S;if(u=u*m+f*x,c=c*m+p*x,l=l*m+g*x,h=h*m+v*x,m===1-a){const T=1/Math.sqrt(u*u+c*c+l*l+h*h);u*=T,c*=T,l*=T,h*=T}}e[t]=u,e[t+1]=c,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,o,s){const a=i[r],u=i[r+1],c=i[r+2],l=i[r+3],h=o[s],f=o[s+1],p=o[s+2],g=o[s+3];return e[t]=a*g+l*h+u*p-c*f,e[t+1]=u*g+l*f+c*h-a*p,e[t+2]=c*g+l*p+a*f-u*h,e[t+3]=l*g-a*h-u*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,u=Math.sin,c=a(i/2),l=a(r/2),h=a(o/2),f=u(i/2),p=u(r/2),g=u(o/2);switch(s){case"XYZ":this._x=f*l*h+c*p*g,this._y=c*p*h-f*l*g,this._z=c*l*g+f*p*h,this._w=c*l*h-f*p*g;break;case"YXZ":this._x=f*l*h+c*p*g,this._y=c*p*h-f*l*g,this._z=c*l*g-f*p*h,this._w=c*l*h+f*p*g;break;case"ZXY":this._x=f*l*h-c*p*g,this._y=c*p*h+f*l*g,this._z=c*l*g+f*p*h,this._w=c*l*h-f*p*g;break;case"ZYX":this._x=f*l*h-c*p*g,this._y=c*p*h+f*l*g,this._z=c*l*g-f*p*h,this._w=c*l*h+f*p*g;break;case"YZX":this._x=f*l*h+c*p*g,this._y=c*p*h+f*l*g,this._z=c*l*g-f*p*h,this._w=c*l*h-f*p*g;break;case"XZY":this._x=f*l*h-c*p*g,this._y=c*p*h-f*l*g,this._z=c*l*g+f*p*h,this._w=c*l*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],u=t[9],c=t[2],l=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(l-u)*p,this._y=(o-c)*p,this._z=(s-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(l-u)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(o-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(u+l)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(s-r)/p,this._x=(o+c)/p,this._y=(u+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,u=t._y,c=t._z,l=t._w;return this._x=i*l+s*a+r*c-o*u,this._y=r*l+s*u+o*a-i*c,this._z=o*l+s*c+i*u-r*a,this._w=s*l-i*a-r*u-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const u=1-a*a;if(u<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(u),l=Math.atan2(c,a),h=Math.sin((1-t)*l)/c,f=Math.sin(t*l)/c;return this._w=s*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=o*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,u=e.w,c=u*t+s*r-a*i,l=u*i+a*t-o*r,h=u*r+o*i-s*t,f=-o*t-s*i-a*r;return this.x=c*u+f*-o+l*-a-h*-s,this.y=l*u+f*-s+h*-o-c*-a,this.z=h*u+f*-a+c*-s-l*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,u=t.z;return this.x=r*u-o*a,this.y=o*s-i*u,this.z=i*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kc=new N,Cp=new Pr;class ia{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox),Xr.applyMatrix4(e.matrixWorld),this.union(Xr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let s=0,a=o.count;s<a;s++)si.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(si)}else r.boundingBox===null&&r.computeBoundingBox(),Xr.copy(r.boundingBox),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),va.subVectors(this.max,ns),Kr.subVectors(e.a,ns),Yr.subVectors(e.b,ns),$r.subVectors(e.c,ns),Ai.subVectors(Yr,Kr),Ri.subVectors($r,Yr),rr.subVectors(Kr,$r);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-rr.z,rr.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,rr.z,0,-rr.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-rr.y,rr.x,0];return!Vc(t,Kr,Yr,$r,va)||(t=[1,0,0,0,1,0,0,0,1],!Vc(t,Kr,Yr,$r,va))?!1:(ya.crossVectors(Ai,Ri),t=[ya.x,ya.y,ya.z],Vc(t,Kr,Yr,$r,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new N,new N,new N,new N,new N,new N,new N,new N],si=new N,Xr=new ia,Kr=new N,Yr=new N,$r=new N,Ai=new N,Ri=new N,rr=new N,ns=new N,va=new N,ya=new N,or=new N;function Vc(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){or.fromArray(n,o);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),u=e.dot(or),c=t.dot(or),l=i.dot(or);if(Math.max(-Math.max(u,c,l),Math.min(u,c,l))>a)return!1}return!0}const fT=new ia,is=new N,zc=new N;class cf{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fT.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);const t=is.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(is,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(zc)),this.expandByPoint(is.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new N,Gc=new N,_a=new N,Ci=new N,Hc=new N,Ea=new N,Wc=new N;class Iy{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gc.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Gc);const o=e.distanceTo(t)*.5,s=-this.direction.dot(_a),a=Ci.dot(this.direction),u=-Ci.dot(_a),c=Ci.lengthSq(),l=Math.abs(1-s*s);let h,f,p,g;if(l>0)if(h=s*u-a,f=s*a-u,g=o*l,h>=0)if(f>=-g)if(f<=g){const v=1/l;h*=v,f*=v,p=h*(h+s*f+2*a)+f*(s*h+f+2*u)+c}else f=o,h=Math.max(0,-(s*f+a)),p=-h*h+f*(f+2*u)+c;else f=-o,h=Math.max(0,-(s*f+a)),p=-h*h+f*(f+2*u)+c;else f<=-g?(h=Math.max(0,-(-s*o+a)),f=h>0?-o:Math.min(Math.max(-o,-u),o),p=-h*h+f*(f+2*u)+c):f<=g?(h=0,f=Math.min(Math.max(-o,-u),o),p=f*(f+2*u)+c):(h=Math.max(0,-(s*o+a)),f=h>0?o:Math.min(Math.max(-o,-u),o),p=-h*h+f*(f+2*u)+c);else f=s>0?-o:o,h=Math.max(0,-(s*f+a)),p=-h*h+f*(f+2*u)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Gc).addScaledVector(_a,f),p}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,u=i+s;return u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,u;const c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),l>=0?(o=(e.min.y-f.y)*l,s=(e.max.y-f.y)*l):(o=(e.max.y-f.y)*l,s=(e.min.y-f.y)*l),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-f.z)*h,u=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,u=(e.min.z-f.z)*h),i>u||a>r)||((a>i||i!==i)&&(i=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,r,o){Hc.subVectors(t,e),Ea.subVectors(i,e),Wc.crossVectors(Hc,Ea);let s=this.direction.dot(Wc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ci.subVectors(this.origin,e);const u=a*this.direction.dot(Ea.crossVectors(Ci,Ea));if(u<0)return null;const c=a*this.direction.dot(Hc.cross(Ci));if(c<0||u+c>s)return null;const l=-a*Ci.dot(Wc);return l<0?null:this.at(l/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,i,r,o,s,a,u,c,l,h,f,p,g,v,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,u,c,l,h,f,p,g,v,m)}set(e,t,i,r,o,s,a,u,c,l,h,f,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=o,d[5]=s,d[9]=a,d[13]=u,d[2]=c,d[6]=l,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),o=1/Qr.setFromMatrixColumn(e,1).length(),s=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),u=Math.cos(r),c=Math.sin(r),l=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const f=s*l,p=s*h,g=a*l,v=a*h;t[0]=u*l,t[4]=-u*h,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*u,t[2]=v-f*c,t[6]=g+p*c,t[10]=s*u}else if(e.order==="YXZ"){const f=u*l,p=u*h,g=c*l,v=c*h;t[0]=f+v*a,t[4]=g*a-p,t[8]=s*c,t[1]=s*h,t[5]=s*l,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=s*u}else if(e.order==="ZXY"){const f=u*l,p=u*h,g=c*l,v=c*h;t[0]=f-v*a,t[4]=-s*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=s*l,t[9]=v-f*a,t[2]=-s*c,t[6]=a,t[10]=s*u}else if(e.order==="ZYX"){const f=s*l,p=s*h,g=a*l,v=a*h;t[0]=u*l,t[4]=g*c-p,t[8]=f*c+v,t[1]=u*h,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*u,t[10]=s*u}else if(e.order==="YZX"){const f=s*u,p=s*c,g=a*u,v=a*c;t[0]=u*l,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=s*l,t[9]=-a*l,t[2]=-c*l,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=s*u,p=s*c,g=a*u,v=a*c;t[0]=u*l,t[4]=-h,t[8]=c*l,t[1]=f*h+v,t[5]=s*l,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*l,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dT,e,pT)}lookAt(e,t,i){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ii.crossVectors(i,Mn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ii.crossVectors(i,Mn)),Ii.normalize(),Sa.crossVectors(Mn,Ii),r[0]=Ii.x,r[4]=Sa.x,r[8]=Mn.x,r[1]=Ii.y,r[5]=Sa.y,r[9]=Mn.y,r[2]=Ii.z,r[6]=Sa.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],u=i[8],c=i[12],l=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],S=i[3],y=i[7],x=i[11],T=i[15],C=r[0],w=r[4],H=r[8],E=r[12],A=r[1],q=r[5],ee=r[9],ie=r[13],P=r[2],G=r[6],Y=r[10],W=r[14],ce=r[3],J=r[7],$=r[11],D=r[15];return o[0]=s*C+a*A+u*P+c*ce,o[4]=s*w+a*q+u*G+c*J,o[8]=s*H+a*ee+u*Y+c*$,o[12]=s*E+a*ie+u*W+c*D,o[1]=l*C+h*A+f*P+p*ce,o[5]=l*w+h*q+f*G+p*J,o[9]=l*H+h*ee+f*Y+p*$,o[13]=l*E+h*ie+f*W+p*D,o[2]=g*C+v*A+m*P+d*ce,o[6]=g*w+v*q+m*G+d*J,o[10]=g*H+v*ee+m*Y+d*$,o[14]=g*E+v*ie+m*W+d*D,o[3]=S*C+y*A+x*P+T*ce,o[7]=S*w+y*q+x*G+T*J,o[11]=S*H+y*ee+x*Y+T*$,o[15]=S*E+y*ie+x*W+T*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],u=e[9],c=e[13],l=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+o*u*h-r*c*h-o*a*f+i*c*f+r*a*p-i*u*p)+v*(+t*u*p-t*c*f+o*s*f-r*s*p+r*c*l-o*u*l)+m*(+t*c*h-t*a*p-o*s*h+i*s*p+o*a*l-i*c*l)+d*(-r*a*l-t*u*h+t*a*f+r*s*h-i*s*f+i*u*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],u=e[6],c=e[7],l=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],S=h*m*c-v*f*c+v*u*p-a*m*p-h*u*d+a*f*d,y=g*f*c-l*m*c-g*u*p+s*m*p+l*u*d-s*f*d,x=l*v*c-g*h*c+g*a*p-s*v*p-l*a*d+s*h*d,T=g*h*u-l*v*u-g*a*f+s*v*f+l*a*m-s*h*m,C=t*S+i*y+r*x+o*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=S*w,e[1]=(v*f*o-h*m*o-v*r*p+i*m*p+h*r*d-i*f*d)*w,e[2]=(a*m*o-v*u*o+v*r*c-i*m*c-a*r*d+i*u*d)*w,e[3]=(h*u*o-a*f*o-h*r*c+i*f*c+a*r*p-i*u*p)*w,e[4]=y*w,e[5]=(l*m*o-g*f*o+g*r*p-t*m*p-l*r*d+t*f*d)*w,e[6]=(g*u*o-s*m*o-g*r*c+t*m*c+s*r*d-t*u*d)*w,e[7]=(s*f*o-l*u*o+l*r*c-t*f*c-s*r*p+t*u*p)*w,e[8]=x*w,e[9]=(g*h*o-l*v*o-g*i*p+t*v*p+l*i*d-t*h*d)*w,e[10]=(s*v*o-g*a*o+g*i*c-t*v*c-s*i*d+t*a*d)*w,e[11]=(l*a*o-s*h*o-l*i*c+t*h*c+s*i*p-t*a*p)*w,e[12]=T*w,e[13]=(l*v*r-g*h*r+g*i*f-t*v*f-l*i*m+t*h*m)*w,e[14]=(g*a*r-s*v*r-g*i*u+t*v*u+s*i*m-t*a*m)*w,e[15]=(s*h*r-l*a*r+l*i*u-t*h*u-s*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,u=e.z,c=o*s,l=o*a;return this.set(c*s+i,c*a-r*u,c*u+r*a,0,c*a+r*u,l*a+i,l*u-r*s,0,c*u-r*a,l*u+r*s,o*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,s=t._y,a=t._z,u=t._w,c=o+o,l=s+s,h=a+a,f=o*c,p=o*l,g=o*h,v=s*l,m=s*h,d=a*h,S=u*c,y=u*l,x=u*h,T=i.x,C=i.y,w=i.z;return r[0]=(1-(v+d))*T,r[1]=(p+x)*T,r[2]=(g-y)*T,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(f+d))*C,r[6]=(m+S)*C,r[7]=0,r[8]=(g+y)*w,r[9]=(m-S)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=Qr.set(r[0],r[1],r[2]).length();const s=Qr.set(r[4],r[5],r[6]).length(),a=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const c=1/o,l=1/s,h=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=l,kn.elements[5]*=l,kn.elements[6]*=l,kn.elements[8]*=h,kn.elements[9]*=h,kn.elements[10]*=h,t.setFromRotationMatrix(kn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,t,i,r,o,s,a=gi){const u=this.elements,c=2*o/(t-e),l=2*o/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===gi)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===Mu)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=l,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=p,u[14]=g,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=gi){const u=this.elements,c=1/(t-e),l=1/(i-r),h=1/(s-o),f=(t+e)*c,p=(i+r)*l;let g,v;if(a===gi)g=(s+o)*h,v=-2*h;else if(a===Mu)g=o*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=2*c,u[4]=0,u[8]=0,u[12]=-f,u[1]=0,u[5]=2*l,u[9]=0,u[13]=-p,u[2]=0,u[6]=0,u[10]=v,u[14]=-g,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qr=new N,kn=new jt,dT=new N(0,0,0),pT=new N(1,1,1),Ii=new N,Sa=new N,Mn=new N,Ip=new jt,Pp=new Pr;class ac{constructor(e=0,t=0,i=0,r=ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],u=r[1],c=r[5],l=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ip,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pp.setFromEuler(this),this.setFromQuaternion(Pp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ac.DEFAULT_ORDER="XYZ";class Py{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mT=0;const Dp=new N,Zr=new Pr,ui=new jt,xa=new N,rs=new N,gT=new N,vT=new Pr,Lp=new N(1,0,0),Np=new N(0,1,0),Up=new N(0,0,1),yT={type:"added"},_T={type:"removed"};class Ln extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new N,t=new ac,i=new Pr,r=new N(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ye}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Py,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Lp,e)}rotateY(e){return this.rotateOnAxis(Np,e)}rotateZ(e){return this.rotateOnAxis(Up,e)}translateOnAxis(e,t){return Dp.copy(e).applyQuaternion(this.quaternion),this.position.add(Dp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lp,e)}translateY(e){return this.translateOnAxis(Np,e)}translateZ(e){return this.translateOnAxis(Up,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xa.copy(e):xa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(rs,xa,this.up):ui.lookAt(xa,rs,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(ui),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_T)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,t);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,gT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,vT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,l=u.length;c<l;c++){const h=u[c];o(e.shapes,h)}else o(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(o(e.materials,this.material[u]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(o(e.animations,u))}}if(t){const a=s(e.geometries),u=s(e.materials),c=s(e.textures),l=s(e.images),h=s(e.shapes),f=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),c.length>0&&(i.textures=c),l.length>0&&(i.images=l),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const u=[];for(const c in a){const l=a[c];delete l.metadata,u.push(l)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ln.DEFAULT_UP=new N(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new N,ci=new N,qc=new N,li=new N,Jr=new N,eo=new N,Op=new N,jc=new N,Xc=new N,Kc=new N;let ba=!1;class Gn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vn.subVectors(e,t),r.cross(Vn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Vn.subVectors(r,t),ci.subVectors(i,t),qc.subVectors(e,t);const s=Vn.dot(Vn),a=Vn.dot(ci),u=Vn.dot(qc),c=ci.dot(ci),l=ci.dot(qc),h=s*c-a*a;if(h===0)return o.set(-2,-1,-1);const f=1/h,p=(c*u-a*l)*f,g=(s*l-a*u)*f;return o.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,li),li.x>=0&&li.y>=0&&li.x+li.y<=1}static getUV(e,t,i,r,o,s,a,u){return ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ba=!0),this.getInterpolation(e,t,i,r,o,s,a,u)}static getInterpolation(e,t,i,r,o,s,a,u){return this.getBarycoord(e,t,i,r,li),u.setScalar(0),u.addScaledVector(o,li.x),u.addScaledVector(s,li.y),u.addScaledVector(a,li.z),u}static isFrontFacing(e,t,i,r){return Vn.subVectors(i,t),ci.subVectors(e,t),Vn.cross(ci).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Vn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ba=!0),Gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}getInterpolation(e,t,i,r,o){return Gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let s,a;Jr.subVectors(r,i),eo.subVectors(o,i),jc.subVectors(e,i);const u=Jr.dot(jc),c=eo.dot(jc);if(u<=0&&c<=0)return t.copy(i);Xc.subVectors(e,r);const l=Jr.dot(Xc),h=eo.dot(Xc);if(l>=0&&h<=l)return t.copy(r);const f=u*h-l*c;if(f<=0&&u>=0&&l<=0)return s=u/(u-l),t.copy(i).addScaledVector(Jr,s);Kc.subVectors(e,o);const p=Jr.dot(Kc),g=eo.dot(Kc);if(g>=0&&p<=g)return t.copy(o);const v=p*c-u*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(eo,a);const m=l*g-p*h;if(m<=0&&h-l>=0&&p-g>=0)return Op.subVectors(o,r),a=(h-l)/(h-l+(p-g)),t.copy(r).addScaledVector(Op,a);const d=1/(m+v+f);return s=v*d,a=f*d,t.copy(i).addScaledVector(Jr,s).addScaledVector(eo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ET=0;class uc extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=yo,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=my,this.blendDst=gy,this.blendEquation=ho,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ob,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uc,this.stencilZFail=Uc,this.stencilZPass=Uc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const u=o[a];delete u.metadata,s.push(u)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Dy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function Yc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=uf(e,1),t=Jt(t,0,1),i=Jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=Yc(s,o,e+1/3),this.g=Yc(s,o,e),this.b=Yc(s,o,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=Bt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const i=Dy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}copyLinearToSRGB(e){return this.r=Fc(e.r),this.g=Fc(e.g),this.b=Fc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return at.fromWorkingColorSpace($t.copy(this),e),Math.round(Jt($t.r*255,0,255))*65536+Math.round(Jt($t.g*255,0,255))*256+Math.round(Jt($t.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace($t.copy(this),t);const i=$t.r,r=$t.g,o=$t.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let u,c;const l=(a+s)/2;if(a===s)u=0,c=0;else{const h=s-a;switch(c=l<=.5?h/(s+a):h/(2-s-a),s){case i:u=(r-o)/h+(r<o?6:0);break;case r:u=(o-i)/h+2;break;case o:u=(i-r)/h+4;break}u/=6}return e.h=u,e.s=c,e.l=l,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Bt){at.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,r=$t.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Ta);const i=ms(Pi.h,Ta.h,t),r=ms(Pi.s,Ta.s,t),o=ms(Pi.l,Ta.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new dt;dt.NAMES=Dy;class lf extends uc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new N,Ma=new $e;class ei{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bp,this.updateRange={offset:0,count:-1},this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fo(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fo(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fo(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),r=an(r,this.array),o=an(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ly extends ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ny extends ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ti extends ei{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ST=0;const On=new jt,$c=new Ln,to=new N,wn=new ia,os=new ia,Ot=new N;class er extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wy(e)?Ny:Ly)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ye().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,i){return On.makeTranslation(e,t,i),this.applyMatrix4(On),this}scale(e,t,i){return On.makeScale(e,t,i),this.applyMatrix4(On),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ti(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];wn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];os.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(wn.min,os.min),wn.expandByPoint(Ot),Ot.addVectors(wn.max,os.max),wn.expandByPoint(Ot)):(wn.expandByPoint(os.min),wn.expandByPoint(os.max))}wn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ot.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ot));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],u=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)Ot.fromBufferAttribute(a,c),u&&(to.fromBufferAttribute(e,c),Ot.add(to)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,c=[],l=[];for(let A=0;A<a;A++)c[A]=new N,l[A]=new N;const h=new N,f=new N,p=new N,g=new $e,v=new $e,m=new $e,d=new N,S=new N;function y(A,q,ee){h.fromArray(r,A*3),f.fromArray(r,q*3),p.fromArray(r,ee*3),g.fromArray(s,A*2),v.fromArray(s,q*2),m.fromArray(s,ee*2),f.sub(h),p.sub(h),v.sub(g),m.sub(g);const ie=1/(v.x*m.y-m.x*v.y);!isFinite(ie)||(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(ie),S.copy(p).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(ie),c[A].add(d),c[q].add(d),c[ee].add(d),l[A].add(S),l[q].add(S),l[ee].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let A=0,q=x.length;A<q;++A){const ee=x[A],ie=ee.start,P=ee.count;for(let G=ie,Y=ie+P;G<Y;G+=3)y(i[G+0],i[G+1],i[G+2])}const T=new N,C=new N,w=new N,H=new N;function E(A){w.fromArray(o,A*3),H.copy(w);const q=c[A];T.copy(q),T.sub(w.multiplyScalar(w.dot(q))).normalize(),C.crossVectors(H,q);const ie=C.dot(l[A])<0?-1:1;u[A*4]=T.x,u[A*4+1]=T.y,u[A*4+2]=T.z,u[A*4+3]=ie}for(let A=0,q=x.length;A<q;++A){const ee=x[A],ie=ee.start,P=ee.count;for(let G=ie,Y=ie+P;G<Y;G+=3)E(i[G+0]),E(i[G+1]),E(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new N,o=new N,s=new N,a=new N,u=new N,c=new N,l=new N,h=new N;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),l.subVectors(s,o),h.subVectors(r,o),l.cross(h),a.fromBufferAttribute(i,g),u.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(l),u.add(l),c.add(l),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,u.x,u.y,u.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),l.subVectors(s,o),h.subVectors(r,o),l.cross(h),i.setXYZ(f+0,l.x,l.y,l.z),i.setXYZ(f+1,l.x,l.y,l.z),i.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,u){const c=a.array,l=a.itemSize,h=a.normalized,f=new c.constructor(u.length*l);let p=0,g=0;for(let v=0,m=u.length;v<m;v++){a.isInterleavedBufferAttribute?p=u[v]*a.data.stride+a.offset:p=u[v]*l;for(let d=0;d<l;d++)f[g++]=c[p++]}return new ei(f,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new er,i=this.index.array,r=this.attributes;for(const a in r){const u=r[a],c=e(u,i);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const u=[],c=o[a];for(let l=0,h=c.length;l<h;l++){const f=c[l],p=e(f,i);u.push(p)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,u=s.length;a<u;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const u in i){const c=i[u];e.data.attributes[u]=c.toJSON(e.data)}const r={};let o=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],l=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];l.push(p.toJSON(e.data))}l.length>0&&(r[u]=l,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const l=r[c];this.setAttribute(c,l.clone(t))}const o=e.morphAttributes;for(const c in o){const l=[],h=o[c];for(let f=0,p=h.length;f<p;f++)l.push(h[f].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,l=s.length;c<l;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fp=new jt,sr=new Iy,wa=new cf,Bp=new N,no=new N,io=new N,ro=new N,Qc=new N,Aa=new N,Ra=new $e,Ca=new $e,Ia=new $e,kp=new N,Vp=new N,zp=new N,Pa=new N,Da=new N;class vi extends Ln{constructor(e=new er,t=new lf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Aa.set(0,0,0);for(let u=0,c=o.length;u<c;u++){const l=a[u],h=o[u];l!==0&&(Qc.fromBufferAttribute(h,e),s?Aa.addScaledVector(Qc,l):Aa.addScaledVector(Qc.sub(t),l))}t.add(Aa)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(o),sr.copy(e.ray).recast(e.near),!(wa.containsPoint(sr.origin)===!1&&(sr.intersectSphere(wa,Bp)===null||sr.origin.distanceToSquared(Bp)>(e.far-e.near)**2))&&(Fp.copy(o).invert(),sr.copy(e.ray).applyMatrix4(Fp),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,i){let r;const o=this.geometry,s=this.material,a=o.index,u=o.attributes.position,c=o.attributes.uv,l=o.attributes.uv1,h=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=s[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,T=y;x<T;x+=3){const C=a.getX(x),w=a.getX(x+1),H=a.getX(x+2);r=La(this,d,e,i,c,l,h,C,w,H),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const S=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=La(this,s,e,i,c,l,h,S,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=s[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(u.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,T=y;x<T;x+=3){const C=x,w=x+1,H=x+2;r=La(this,d,e,i,c,l,h,C,w,H),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(u.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const S=m,y=m+1,x=m+2;r=La(this,s,e,i,c,l,h,S,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function xT(n,e,t,i,r,o,s,a){let u;if(e.side===_n?u=i.intersectTriangle(s,o,r,!0,a):u=i.intersectTriangle(r,o,s,e.side===Ki,a),u===null)return null;Da.copy(a),Da.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Da);return c<t.near||c>t.far?null:{distance:c,point:Da.clone(),object:n}}function La(n,e,t,i,r,o,s,a,u,c){n.getVertexPosition(a,no),n.getVertexPosition(u,io),n.getVertexPosition(c,ro);const l=xT(n,e,t,i,no,io,ro,Pa);if(l){r&&(Ra.fromBufferAttribute(r,a),Ca.fromBufferAttribute(r,u),Ia.fromBufferAttribute(r,c),l.uv=Gn.getInterpolation(Pa,no,io,ro,Ra,Ca,Ia,new $e)),o&&(Ra.fromBufferAttribute(o,a),Ca.fromBufferAttribute(o,u),Ia.fromBufferAttribute(o,c),l.uv1=Gn.getInterpolation(Pa,no,io,ro,Ra,Ca,Ia,new $e),l.uv2=l.uv1),s&&(kp.fromBufferAttribute(s,a),Vp.fromBufferAttribute(s,u),zp.fromBufferAttribute(s,c),l.normal=Gn.getInterpolation(Pa,no,io,ro,kp,Vp,zp,new N),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const h={a,b:u,c,normal:new N,materialIndex:0};Gn.getNormal(no,io,ro,h.normal),l.face=h}return l}class ra extends er{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const u=[],c=[],l=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(u),this.setAttribute("position",new ti(c,3)),this.setAttribute("normal",new ti(l,3)),this.setAttribute("uv",new ti(h,2));function g(v,m,d,S,y,x,T,C,w,H,E){const A=x/w,q=T/H,ee=x/2,ie=T/2,P=C/2,G=w+1,Y=H+1;let W=0,ce=0;const J=new N;for(let $=0;$<Y;$++){const D=$*q-ie;for(let k=0;k<G;k++){const me=k*A-ee;J[v]=me*S,J[m]=D*y,J[d]=P,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[d]=C>0?1:-1,l.push(J.x,J.y,J.z),h.push(k/w),h.push(1-$/H),W+=1}}for(let $=0;$<H;$++)for(let D=0;D<w;D++){const k=f+D+G*$,me=f+D+G*($+1),ye=f+(D+1)+G*($+1),Ee=f+(D+1)+G*$;u.push(k,me,Ee),u.push(me,ye,Ee),ce+=6}a.addGroup(p,ce,E),p+=ce,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Go(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function un(n){const e={};for(let t=0;t<n.length;t++){const i=Go(n[t]);for(const r in i)e[r]=i[r]}return e}function bT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Uy(n){return n.getRenderTarget()===null?n.outputColorSpace:at.workingColorSpace}const TT={clone:Go,merge:un};var MT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends uc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MT,this.fragmentShader=wT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Go(e.uniforms),this.uniformsGroups=bT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Oy extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fn extends Oy{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ps*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const u=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/u,t-=s.offsetY*i/c,r*=s.width/u,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oo=-90,so=1;class AT extends Ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(oo,so,e,t);r.layers=this.layers,this.add(r);const o=new Fn(oo,so,e,t);o.layers=this.layers,this.add(o);const s=new Fn(oo,so,e,t);s.layers=this.layers,this.add(s);const a=new Fn(oo,so,e,t);a.layers=this.layers,this.add(a);const u=new Fn(oo,so,e,t);u.layers=this.layers,this.add(u);const c=new Fn(oo,so,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,u]=t;for(const c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Mu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,u,c,l]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,u),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,l),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Fy extends En{constructor(e,t,i,r,o,s,a,u,c,l){e=e!==void 0?e:[],t=t!==void 0?t:ko,super(e,t,i,r,o,s,a,u,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class RT extends Ir{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(gs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Sr?Bt:Bn),this.texture=new Fy(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ra(5,5,5),o=new Dr({name:"CubemapFromEquirect",uniforms:Go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Hi});o.uniforms.tEquirect.value=t;const s=new vi(r,o),a=t.minFilter;return t.minFilter===Us&&(t.minFilter=mn),new AT(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}}const Zc=new N,CT=new N,IT=new Ye;class Li{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Zc.subVectors(i,t).cross(CT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Zc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||IT.getNormalMatrix(e),r=this.coplanarPoint(Zc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new cf,Na=new N;class By{constructor(e=new Li,t=new Li,i=new Li,r=new Li,o=new Li,s=new Li){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],u=r[3],c=r[4],l=r[5],h=r[6],f=r[7],p=r[8],g=r[9],v=r[10],m=r[11],d=r[12],S=r[13],y=r[14],x=r[15];if(i[0].setComponents(u-o,f-c,m-p,x-d).normalize(),i[1].setComponents(u+o,f+c,m+p,x+d).normalize(),i[2].setComponents(u+s,f+l,m+g,x+S).normalize(),i[3].setComponents(u-s,f-l,m-g,x-S).normalize(),i[4].setComponents(u-a,f-h,m-v,x-y).normalize(),t===gi)i[5].setComponents(u+a,f+h,m+v,x+y).normalize();else if(t===Mu)i[5].setComponents(a,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Na.x=r.normal.x>0?e.max.x:e.min.x,Na.y=r.normal.y>0?e.max.y:e.min.y,Na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ky(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function PT(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,l){const h=c.array,f=c.usage,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function o(c,l,h){const f=l.array,p=l.updateRange;n.bindBuffer(h,c),p.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),l.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=i.get(c);l&&(n.deleteBuffer(l.buffer),i.delete(c))}function u(c,l){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,l)):h.version<c.version&&(o(h.buffer,c,l),h.version=c.version)}return{get:s,remove:a,update:u}}class hf extends er{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(i),u=Math.floor(r),c=a+1,l=u+1,h=e/a,f=t/u,p=[],g=[],v=[],m=[];for(let d=0;d<l;d++){const S=d*f-s;for(let y=0;y<c;y++){const x=y*h-o;g.push(x,-S,0),v.push(0,0,1),m.push(y/a),m.push(1-d/u)}}for(let d=0;d<u;d++)for(let S=0;S<a;S++){const y=S+c*d,x=S+c*(d+1),T=S+1+c*(d+1),C=S+1+c*d;p.push(y,x,C),p.push(x,T,C)}this.setIndex(p),this.setAttribute("position",new ti(g,3)),this.setAttribute("normal",new ti(v,3)),this.setAttribute("uv",new ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hf(e.width,e.height,e.widthSegments,e.heightSegments)}}var DT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,FT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$T=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,JT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sM="gl_FragColor = linearToOutputTexel( gl_FragColor );",aM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,uM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,CM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,OM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,FM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,XM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ew=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ow=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,vw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_w=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ew=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ow=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Fw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hw=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ww=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$w=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oA=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:DT,alphahash_pars_fragment:LT,alphamap_fragment:NT,alphamap_pars_fragment:UT,alphatest_fragment:OT,alphatest_pars_fragment:FT,aomap_fragment:BT,aomap_pars_fragment:kT,begin_vertex:VT,beginnormal_vertex:zT,bsdfs:GT,iridescence_fragment:HT,bumpmap_pars_fragment:WT,clipping_planes_fragment:qT,clipping_planes_pars_fragment:jT,clipping_planes_pars_vertex:XT,clipping_planes_vertex:KT,color_fragment:YT,color_pars_fragment:$T,color_pars_vertex:QT,color_vertex:ZT,common:JT,cube_uv_reflection_fragment:eM,defaultnormal_vertex:tM,displacementmap_pars_vertex:nM,displacementmap_vertex:iM,emissivemap_fragment:rM,emissivemap_pars_fragment:oM,colorspace_fragment:sM,colorspace_pars_fragment:aM,envmap_fragment:uM,envmap_common_pars_fragment:cM,envmap_pars_fragment:lM,envmap_pars_vertex:hM,envmap_physical_pars_fragment:bM,envmap_vertex:fM,fog_vertex:dM,fog_pars_vertex:pM,fog_fragment:mM,fog_pars_fragment:gM,gradientmap_pars_fragment:vM,lightmap_fragment:yM,lightmap_pars_fragment:_M,lights_lambert_fragment:EM,lights_lambert_pars_fragment:SM,lights_pars_begin:xM,lights_toon_fragment:TM,lights_toon_pars_fragment:MM,lights_phong_fragment:wM,lights_phong_pars_fragment:AM,lights_physical_fragment:RM,lights_physical_pars_fragment:CM,lights_fragment_begin:IM,lights_fragment_maps:PM,lights_fragment_end:DM,logdepthbuf_fragment:LM,logdepthbuf_pars_fragment:NM,logdepthbuf_pars_vertex:UM,logdepthbuf_vertex:OM,map_fragment:FM,map_pars_fragment:BM,map_particle_fragment:kM,map_particle_pars_fragment:VM,metalnessmap_fragment:zM,metalnessmap_pars_fragment:GM,morphcolor_vertex:HM,morphnormal_vertex:WM,morphtarget_pars_vertex:qM,morphtarget_vertex:jM,normal_fragment_begin:XM,normal_fragment_maps:KM,normal_pars_fragment:YM,normal_pars_vertex:$M,normal_vertex:QM,normalmap_pars_fragment:ZM,clearcoat_normal_fragment_begin:JM,clearcoat_normal_fragment_maps:ew,clearcoat_pars_fragment:tw,iridescence_pars_fragment:nw,opaque_fragment:iw,packing:rw,premultiplied_alpha_fragment:ow,project_vertex:sw,dithering_fragment:aw,dithering_pars_fragment:uw,roughnessmap_fragment:cw,roughnessmap_pars_fragment:lw,shadowmap_pars_fragment:hw,shadowmap_pars_vertex:fw,shadowmap_vertex:dw,shadowmask_pars_fragment:pw,skinbase_vertex:mw,skinning_pars_vertex:gw,skinning_vertex:vw,skinnormal_vertex:yw,specularmap_fragment:_w,specularmap_pars_fragment:Ew,tonemapping_fragment:Sw,tonemapping_pars_fragment:xw,transmission_fragment:bw,transmission_pars_fragment:Tw,uv_pars_fragment:Mw,uv_pars_vertex:ww,uv_vertex:Aw,worldpos_vertex:Rw,background_vert:Cw,background_frag:Iw,backgroundCube_vert:Pw,backgroundCube_frag:Dw,cube_vert:Lw,cube_frag:Nw,depth_vert:Uw,depth_frag:Ow,distanceRGBA_vert:Fw,distanceRGBA_frag:Bw,equirect_vert:kw,equirect_frag:Vw,linedashed_vert:zw,linedashed_frag:Gw,meshbasic_vert:Hw,meshbasic_frag:Ww,meshlambert_vert:qw,meshlambert_frag:jw,meshmatcap_vert:Xw,meshmatcap_frag:Kw,meshnormal_vert:Yw,meshnormal_frag:$w,meshphong_vert:Qw,meshphong_frag:Zw,meshphysical_vert:Jw,meshphysical_frag:eA,meshtoon_vert:tA,meshtoon_frag:nA,points_vert:iA,points_frag:rA,shadow_vert:oA,shadow_frag:sA,sprite_vert:aA,sprite_frag:uA},de={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Qn={basic:{uniforms:un([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:un([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new dt(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:un([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:un([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:un([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new dt(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:un([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:un([de.points,de.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:un([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:un([de.common,de.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:un([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:un([de.sprite,de.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:un([de.common,de.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:un([de.lights,de.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Qn.physical={uniforms:un([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ua={r:0,b:0,g:0};function cA(n,e,t,i,r,o,s){const a=new dt(0);let u=o===!0?0:1,c,l,h=null,f=0,p=null;function g(m,d){let S=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?t:e).get(y)),y===null?v(a,u):y&&y.isColor&&(v(y,1),S=!0);const x=n.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===oc)?(l===void 0&&(l=new vi(new ra(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:Go(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=at.getTransfer(y.colorSpace)!==ht,(h!==y||f!==y.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new vi(new hf(2,2),new Dr({name:"BackgroundMaterial",uniforms:Go(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=at.getTransfer(y.colorSpace)!==ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,d){m.getRGB(Ua,Uy(n)),i.buffers.color.setClear(Ua.r,Ua.g,Ua.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),u=d,v(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(m){u=m,v(a,u)},render:g}}function lA(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},u=m(null);let c=u,l=!1;function h(P,G,Y,W,ce){let J=!1;if(s){const $=v(W,Y,G);c!==$&&(c=$,p(c.object)),J=d(P,W,Y,ce),J&&S(P,W,Y,ce)}else{const $=G.wireframe===!0;(c.geometry!==W.id||c.program!==Y.id||c.wireframe!==$)&&(c.geometry=W.id,c.program=Y.id,c.wireframe=$,J=!0)}ce!==null&&t.update(ce,n.ELEMENT_ARRAY_BUFFER),(J||l)&&(l=!1,H(P,G,Y,W),ce!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ce).buffer))}function f(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function p(P){return i.isWebGL2?n.bindVertexArray(P):o.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):o.deleteVertexArrayOES(P)}function v(P,G,Y){const W=Y.wireframe===!0;let ce=a[P.id];ce===void 0&&(ce={},a[P.id]=ce);let J=ce[G.id];J===void 0&&(J={},ce[G.id]=J);let $=J[W];return $===void 0&&($=m(f()),J[W]=$),$}function m(P){const G=[],Y=[],W=[];for(let ce=0;ce<r;ce++)G[ce]=0,Y[ce]=0,W[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:W,object:P,attributes:{},index:null}}function d(P,G,Y,W){const ce=c.attributes,J=G.attributes;let $=0;const D=Y.getAttributes();for(const k in D)if(D[k].location>=0){const ye=ce[k];let Ee=J[k];if(Ee===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(Ee=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(Ee=P.instanceColor)),ye===void 0||ye.attribute!==Ee||Ee&&ye.data!==Ee.data)return!0;$++}return c.attributesNum!==$||c.index!==W}function S(P,G,Y,W){const ce={},J=G.attributes;let $=0;const D=Y.getAttributes();for(const k in D)if(D[k].location>=0){let ye=J[k];ye===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(ye=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(ye=P.instanceColor));const Ee={};Ee.attribute=ye,ye&&ye.data&&(Ee.data=ye.data),ce[k]=Ee,$++}c.attributes=ce,c.attributesNum=$,c.index=W}function y(){const P=c.newAttributes;for(let G=0,Y=P.length;G<Y;G++)P[G]=0}function x(P){T(P,0)}function T(P,G){const Y=c.newAttributes,W=c.enabledAttributes,ce=c.attributeDivisors;Y[P]=1,W[P]===0&&(n.enableVertexAttribArray(P),W[P]=1),ce[P]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),ce[P]=G)}function C(){const P=c.newAttributes,G=c.enabledAttributes;for(let Y=0,W=G.length;Y<W;Y++)G[Y]!==P[Y]&&(n.disableVertexAttribArray(Y),G[Y]=0)}function w(P,G,Y,W,ce,J,$){$===!0?n.vertexAttribIPointer(P,G,Y,ce,J):n.vertexAttribPointer(P,G,Y,W,ce,J)}function H(P,G,Y,W){if(i.isWebGL2===!1&&(P.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const ce=W.attributes,J=Y.getAttributes(),$=G.defaultAttributeValues;for(const D in J){const k=J[D];if(k.location>=0){let me=ce[D];if(me===void 0&&(D==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),D==="instanceColor"&&P.instanceColor&&(me=P.instanceColor)),me!==void 0){const ye=me.normalized,Ee=me.itemSize,Le=t.get(me);if(Le===void 0)continue;const Ge=Le.buffer,Ie=Le.type,nt=Le.bytesPerElement,Vt=i.isWebGL2===!0&&(Ie===n.INT||Ie===n.UNSIGNED_INT||me.gpuType===_y);if(me.isInterleavedBufferAttribute){const qe=me.data,U=qe.stride,Ct=me.offset;if(qe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<k.locationSize;Pe++)T(k.location+Pe,qe.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Pe=0;Pe<k.locationSize;Pe++)x(k.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Pe=0;Pe<k.locationSize;Pe++)w(k.location+Pe,Ee/k.locationSize,Ie,ye,U*nt,(Ct+Ee/k.locationSize*Pe)*nt,Vt)}else{if(me.isInstancedBufferAttribute){for(let qe=0;qe<k.locationSize;qe++)T(k.location+qe,me.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let qe=0;qe<k.locationSize;qe++)x(k.location+qe);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let qe=0;qe<k.locationSize;qe++)w(k.location+qe,Ee/k.locationSize,Ie,ye,Ee*nt,Ee/k.locationSize*qe*nt,Vt)}}else if($!==void 0){const ye=$[D];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(k.location,ye);break;case 3:n.vertexAttrib3fv(k.location,ye);break;case 4:n.vertexAttrib4fv(k.location,ye);break;default:n.vertexAttrib1fv(k.location,ye)}}}}C()}function E(){ee();for(const P in a){const G=a[P];for(const Y in G){const W=G[Y];for(const ce in W)g(W[ce].object),delete W[ce];delete G[Y]}delete a[P]}}function A(P){if(a[P.id]===void 0)return;const G=a[P.id];for(const Y in G){const W=G[Y];for(const ce in W)g(W[ce].object),delete W[ce];delete G[Y]}delete a[P.id]}function q(P){for(const G in a){const Y=a[G];if(Y[P.id]===void 0)continue;const W=Y[P.id];for(const ce in W)g(W[ce].object),delete W[ce];delete Y[P.id]}}function ee(){ie(),l=!0,c!==u&&(c=u,p(c.object))}function ie(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:ee,resetDefaultState:ie,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:q,initAttributes:y,enableAttribute:x,disableUnusedAttributes:C}}function hA(n,e,t,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,l){n.drawArrays(o,c,l),t.update(l,o,1)}function u(c,l,h){if(h===0)return;let f,p;if(r)f=n,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](o,c,l,h),t.update(l,o,h)}this.setMode=s,this.render=a,this.renderInstances=u}function fA(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const u=o(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const c=s||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,x=s||e.has("OES_texture_float"),T=y&&x,C=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:T,maxSamples:C}}function dA(n){const e=this;let t=null,i=0,r=!1,o=!1;const s=new Li,a=new Ye,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){o=!0,l(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){t=l(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||o&&!m)o?l(null):c();else{const S=o?0:i,y=S*4;let x=d.clippingState||null;u.value=x,x=l(g,f,y,p);for(let T=0;T!==y;++T)x[T]=t[T];d.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function l(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=u.value,g!==!0||m===null){const d=p+v*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==v;++y,x+=4)s.copy(h[y]).applyMatrix4(S,a),s.normal.toArray(m,x),m[x+3]=s.constant}u.value=m,u.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function pA(n){let e=new WeakMap;function t(s,a){return a===Ol?s.mapping=ko:a===Fl&&(s.mapping=Vo),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Ol||a===Fl)if(e.has(s)){const u=e.get(s).texture;return t(u,s.mapping)}else{const u=s.image;if(u&&u.height>0){const c=new RT(u.height/2);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class mA extends Oy{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=l*this.view.offsetY,u=a-l*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const go=4,Gp=[.125,.215,.35,.446,.526,.582],hr=20,Jc=new mA,Hp=new dt;let el=null;const cr=(1+Math.sqrt(5))/2,ao=1/cr,Wp=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,cr,ao),new N(0,cr,-ao),new N(ao,0,cr),new N(-ao,0,cr),new N(cr,ao,0),new N(-cr,ao,0)];class qp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){el=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(el),e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ko||e.mapping===Vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),el=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Os,format:Wn,colorSpace:xi,depthBuffer:!1},r=jp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gA(o)),this._blurMaterial=vA(o,e,t)}return r}_compileMaterial(e){const t=new vi(this._lodPlanes[0],e);this._renderer.compile(t,Jc)}_sceneToCubeUV(e,t,i,r){const a=new Fn(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,f=l.toneMapping;l.getClearColor(Hp),l.toneMapping=Wi,l.autoClear=!1;const p=new lf({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new vi(new ra,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Hp),v=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(a.up.set(0,u[d],0),a.lookAt(c[d],0,0)):S===1?(a.up.set(0,0,u[d]),a.lookAt(0,c[d],0)):(a.up.set(0,u[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;Oa(r,S*y,d>2?y:0,y,y),l.setRenderTarget(r),v&&l.render(g,a),l.render(e,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=f,l.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ko||e.mapping===Vo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xp());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new vi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const u=this._cubeSize;Oa(t,0,0,3*u,2*u),i.setRenderTarget(t),i.render(s,Jc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Wp[(r-1)%Wp.length];this._blur(e,r-1,r,o,s)}t.autoClear=i}_blur(e,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){const u=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,h=new vi(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*hr-1),v=o/g,m=isFinite(o)?1+Math.floor(l*v):hr;m>hr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);const d=[];let S=0;for(let w=0;w<hr;++w){const H=w/v,E=Math.exp(-H*H/2);d.push(E),w===0?S+=E:w<m&&(S+=2*E)}for(let w=0;w<d.length;w++)d[w]=d[w]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const x=this._sizeLods[r],T=3*x*(r>y-go?r-y+go:0),C=4*(this._cubeSize-x);Oa(t,T,C,3*x,2*x),u.setRenderTarget(t),u.render(h,Jc)}}function gA(n){const e=[],t=[],i=[];let r=n;const o=n-go+1+Gp.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let u=1/a;s>n-go?u=Gp[s-n+go-1]:s===0&&(u=0),i.push(u);const c=1/(a-2),l=-c,h=1+c,f=[l,l,h,l,h,h,l,l,h,h,l,h],p=6,g=6,v=3,m=2,d=1,S=new Float32Array(v*g*p),y=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,H=C>2?0:-1,E=[w,H,0,w+2/3,H,0,w+2/3,H+1,0,w,H,0,w+2/3,H+1,0,w,H+1,0];S.set(E,v*g*C),y.set(f,m*g*C);const A=[C,C,C,C,C,C];x.set(A,d*g*C)}const T=new er;T.setAttribute("position",new ei(S,v)),T.setAttribute("uv",new ei(y,m)),T.setAttribute("faceIndex",new ei(x,d)),e.push(T),r>go&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function jp(n,e,t){const i=new Ir(n,e,t);return i.texture.mapping=oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function vA(n,e,t){const i=new Float32Array(hr),r=new N(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Xp(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Kp(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function ff(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const u=a.mapping,c=u===Ol||u===Fl,l=u===ko||u===Vo;if(c||l)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new qp(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||l&&h&&r(h)){t===null&&(t=new qp(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",o),f.texture}else return null}}}return a}function r(a){let u=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&u++;return u===c}function o(a){const u=a.target;u.removeEventListener("dispose",o);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function _A(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function EA(n,e,t,i){const r={},o=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}f.removeEventListener("dispose",s),delete r[f.id];const p=o.get(f);p&&(e.remove(p),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function u(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let y=0,x=S.length;y<x;y+=3){const T=S[y+0],C=S[y+1],w=S[y+2];f.push(T,C,C,w,w,T)}}else if(g!==void 0){const S=g.array;v=g.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const T=y+0,C=y+1,w=y+2;f.push(T,C,C,w,w,T)}}else return;const m=new(wy(f)?Ny:Ly)(f,1);m.version=v;const d=o.get(h);d&&e.remove(d),o.set(h,m)}function l(h){const f=o.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:u,getWireframeAttribute:l}}function SA(n,e,t,i){const r=i.isWebGL2;let o;function s(f){o=f}let a,u;function c(f){a=f.type,u=f.bytesPerElement}function l(f,p){n.drawElements(o,p,a,f*u),t.update(p,o,1)}function h(f,p,g){if(g===0)return;let v,m;if(r)v=n,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](o,p,a,f*u,g),t.update(p,o,g)}this.setMode=s,this.setIndex=c,this.render=l,this.renderInstances=h}function xA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bA(n,e){return n[0]-e[0]}function TA(n,e){return Math.abs(e[1])-Math.abs(n[1])}function MA(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,s=new Ht,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function u(c,l,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=g!==void 0?g.length:0;let m=o.get(l);if(m===void 0||m.count!==v){let G=function(){ie.dispose(),o.delete(l),l.removeEventListener("dispose",G)};var p=G;m!==void 0&&m.texture.dispose();const y=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,T=l.morphAttributes.color!==void 0,C=l.morphAttributes.position||[],w=l.morphAttributes.normal||[],H=l.morphAttributes.color||[];let E=0;y===!0&&(E=1),x===!0&&(E=2),T===!0&&(E=3);let A=l.attributes.position.count*E,q=1;A>e.maxTextureSize&&(q=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const ee=new Float32Array(A*q*4*v),ie=new Cy(ee,A,q,v);ie.type=Vi,ie.needsUpdate=!0;const P=E*4;for(let Y=0;Y<v;Y++){const W=C[Y],ce=w[Y],J=H[Y],$=A*q*4*Y;for(let D=0;D<W.count;D++){const k=D*P;y===!0&&(s.fromBufferAttribute(W,D),ee[$+k+0]=s.x,ee[$+k+1]=s.y,ee[$+k+2]=s.z,ee[$+k+3]=0),x===!0&&(s.fromBufferAttribute(ce,D),ee[$+k+4]=s.x,ee[$+k+5]=s.y,ee[$+k+6]=s.z,ee[$+k+7]=0),T===!0&&(s.fromBufferAttribute(J,D),ee[$+k+8]=s.x,ee[$+k+9]=s.y,ee[$+k+10]=s.z,ee[$+k+11]=J.itemSize===4?s.w:1)}}m={count:v,texture:ie,size:new $e(A,q)},o.set(l,m),l.addEventListener("dispose",G)}let d=0;for(let y=0;y<f.length;y++)d+=f[y];const S=l.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",S),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let v=i[l.id];if(v===void 0||v.length!==g){v=[];for(let x=0;x<g;x++)v[x]=[x,0];i[l.id]=v}for(let x=0;x<g;x++){const T=v[x];T[0]=x,T[1]=f[x]}v.sort(TA);for(let x=0;x<8;x++)x<g&&v[x][1]?(a[x][0]=v[x][0],a[x][1]=v[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(bA);const m=l.morphAttributes.position,d=l.morphAttributes.normal;let S=0;for(let x=0;x<8;x++){const T=a[x],C=T[0],w=T[1];C!==Number.MAX_SAFE_INTEGER&&w?(m&&l.getAttribute("morphTarget"+x)!==m[C]&&l.setAttribute("morphTarget"+x,m[C]),d&&l.getAttribute("morphNormal"+x)!==d[C]&&l.setAttribute("morphNormal"+x,d[C]),r[x]=w,S+=w):(m&&l.hasAttribute("morphTarget"+x)===!0&&l.deleteAttribute("morphTarget"+x),d&&l.hasAttribute("morphNormal"+x)===!0&&l.deleteAttribute("morphNormal"+x),r[x]=0)}const y=l.morphTargetsRelative?1:1-S;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:u}}function wA(n,e,t,i){let r=new WeakMap;function o(u){const c=i.render.frame,l=u.geometry,h=e.get(u,l);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),r.set(u,c))),u.isSkinnedMesh){const f=u.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function s(){r=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const Vy=new En,zy=new Cy,Gy=new hT,Hy=new Fy,Yp=[],$p=[],Qp=new Float32Array(16),Zp=new Float32Array(9),Jp=new Float32Array(4);function Zo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Yp[r];if(o===void 0&&(o=new Float32Array(r),Yp[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cc(n,e){let t=$p[e];t===void 0&&(t=new Int32Array(e),$p[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function AA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function CA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function IA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function PA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Lt(t,i))return;Jp.set(i),n.uniformMatrix2fv(this.addr,!1,Jp),Nt(t,i)}}function DA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Lt(t,i))return;Zp.set(i),n.uniformMatrix3fv(this.addr,!1,Zp),Nt(t,i)}}function LA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Lt(t,i))return;Qp.set(i),n.uniformMatrix4fv(this.addr,!1,Qp),Nt(t,i)}}function NA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function UA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function OA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function FA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function BA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function VA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function zA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function GA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Vy,r)}function HA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Gy,r)}function WA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hy,r)}function qA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zy,r)}function jA(n){switch(n){case 5126:return AA;case 35664:return RA;case 35665:return CA;case 35666:return IA;case 35674:return PA;case 35675:return DA;case 35676:return LA;case 5124:case 35670:return NA;case 35667:case 35671:return UA;case 35668:case 35672:return OA;case 35669:case 35673:return FA;case 5125:return BA;case 36294:return kA;case 36295:return VA;case 36296:return zA;case 35678:case 36198:case 36298:case 36306:case 35682:return GA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return WA;case 36289:case 36303:case 36311:case 36292:return qA}}function XA(n,e){n.uniform1fv(this.addr,e)}function KA(n,e){const t=Zo(e,this.size,2);n.uniform2fv(this.addr,t)}function YA(n,e){const t=Zo(e,this.size,3);n.uniform3fv(this.addr,t)}function $A(n,e){const t=Zo(e,this.size,4);n.uniform4fv(this.addr,t)}function QA(n,e){const t=Zo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ZA(n,e){const t=Zo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function JA(n,e){const t=Zo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eR(n,e){n.uniform1iv(this.addr,e)}function tR(n,e){n.uniform2iv(this.addr,e)}function nR(n,e){n.uniform3iv(this.addr,e)}function iR(n,e){n.uniform4iv(this.addr,e)}function rR(n,e){n.uniform1uiv(this.addr,e)}function oR(n,e){n.uniform2uiv(this.addr,e)}function sR(n,e){n.uniform3uiv(this.addr,e)}function aR(n,e){n.uniform4uiv(this.addr,e)}function uR(n,e,t){const i=this.cache,r=e.length,o=cc(t,r);Lt(i,o)||(n.uniform1iv(this.addr,o),Nt(i,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Vy,o[s])}function cR(n,e,t){const i=this.cache,r=e.length,o=cc(t,r);Lt(i,o)||(n.uniform1iv(this.addr,o),Nt(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Gy,o[s])}function lR(n,e,t){const i=this.cache,r=e.length,o=cc(t,r);Lt(i,o)||(n.uniform1iv(this.addr,o),Nt(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Hy,o[s])}function hR(n,e,t){const i=this.cache,r=e.length,o=cc(t,r);Lt(i,o)||(n.uniform1iv(this.addr,o),Nt(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||zy,o[s])}function fR(n){switch(n){case 5126:return XA;case 35664:return KA;case 35665:return YA;case 35666:return $A;case 35674:return QA;case 35675:return ZA;case 35676:return JA;case 5124:case 35670:return eR;case 35667:case 35671:return tR;case 35668:case 35672:return nR;case 35669:case 35673:return iR;case 5125:return rR;case 36294:return oR;case 36295:return sR;case 36296:return aR;case 35678:case 36198:case 36298:case 36306:case 35682:return uR;case 35679:case 36299:case 36307:return cR;case 35680:case 36300:case 36308:case 36293:return lR;case 36289:case 36303:case 36311:case 36292:return hR}}class dR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=jA(t.type)}}class pR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=fR(t.type)}}class mR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],i)}}}const tl=/(\w+)(\])?(\[|\.)?/g;function em(n,e){n.seq.push(e),n.map[e.id]=e}function gR(n,e,t){const i=n.name,r=i.length;for(tl.lastIndex=0;;){const o=tl.exec(i),s=tl.lastIndex;let a=o[1];const u=o[2]==="]",c=o[3];if(u&&(a=a|0),c===void 0||c==="["&&s+2===r){em(t,c===void 0?new dR(a,n,e):new pR(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new mR(a),em(t,h)),t=h}}}class Xa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);gR(o,s,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],u=i[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function tm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let vR=0;function yR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}function _R(n){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(n);let i;switch(e===t?i="":e===Tu&&t===bu?i="LinearDisplayP3ToLinearSRGB":e===bu&&t===Tu&&(i="LinearSRGBToLinearDisplayP3"),n){case xi:case sc:return[i,"LinearTransferOETF"];case Bt:case af:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function nm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+yR(n.getShaderSource(e),s)}else return r}function ER(n,e){const t=_R(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function SR(n,e){let t;switch(e){case vb:t="Linear";break;case yb:t="Reinhard";break;case _b:t="OptimizedCineon";break;case Eb:t="ACESFilmic";break;case Sb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xR(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(us).join(`
`)}function bR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function TR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),s=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function us(n){return n!==""}function im(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(n){return n.replace(MR,AR)}const wR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AR(n,e){let t=Xe[e];if(t===void 0){const i=wR.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gl(t)}const RR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function om(n){return n.replace(RR,CR)}function CR(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function sm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function IR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===py?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function PR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ko:case Vo:e="ENVMAP_TYPE_CUBE";break;case oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Vo:e="ENVMAP_MODE_REFRACTION";break}return e}function LR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vy:e="ENVMAP_BLENDING_MULTIPLY";break;case mb:e="ENVMAP_BLENDING_MIX";break;case gb:e="ENVMAP_BLENDING_ADD";break}return e}function NR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function UR(n,e,t,i){const r=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const u=IR(t),c=PR(t),l=DR(t),h=LR(t),f=NR(t),p=t.isWebGL2?"":xR(t),g=bR(o),v=r.createProgram();let m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(us).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(us).join(`
`),d.length>0&&(d+=`
`)):(m=[sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),d=[p,sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Wi?SR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,ER("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(us).join(`
`)),s=Gl(s),s=im(s,t),s=rm(s,t),a=Gl(a),a=im(a,t),a=rm(a,t),s=om(s),a=om(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=S+m+s,x=S+d+a,T=tm(r,r.VERTEX_SHADER,y),C=tm(r,r.FRAGMENT_SHADER,x);if(r.attachShader(v,T),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const E=r.getProgramInfoLog(v).trim(),A=r.getShaderInfoLog(T).trim(),q=r.getShaderInfoLog(C).trim();let ee=!0,ie=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,C);else{const P=nm(r,T,"vertex"),G=nm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+P+`
`+G)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(A===""||q==="")&&(ie=!1);ie&&(this.diagnostics={runnable:ee,programLog:E,vertexShader:{log:A,prefix:m},fragmentShader:{log:q,prefix:d}})}r.deleteShader(T),r.deleteShader(C);let w;this.getUniforms=function(){return w===void 0&&(w=new Xa(r,v)),w};let H;return this.getAttributes=function(){return H===void 0&&(H=TR(r,v)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vR++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=C,this}let OR=0;class FR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new BR(e),t.set(e,i)),i}}class BR{constructor(e){this.id=OR++,this.code=e,this.usedTimes=0}}function kR(n,e,t,i,r,o,s){const a=new Py,u=new FR,c=[],l=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function m(E,A,q,ee,ie){const P=ee.fog,G=ie.geometry,Y=E.isMeshStandardMaterial?ee.environment:null,W=(E.isMeshStandardMaterial?t:e).get(E.envMap||Y),ce=!!W&&W.mapping===oc?W.image.height:null,J=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const $=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,D=$!==void 0?$.length:0;let k=0;G.morphAttributes.position!==void 0&&(k=1),G.morphAttributes.normal!==void 0&&(k=2),G.morphAttributes.color!==void 0&&(k=3);let me,ye,Ee,Le;if(J){const lt=Qn[J];me=lt.vertexShader,ye=lt.fragmentShader}else me=E.vertexShader,ye=E.fragmentShader,u.update(E),Ee=u.getVertexShaderID(E),Le=u.getFragmentShaderID(E);const Ge=n.getRenderTarget(),Ie=ie.isInstancedMesh===!0,nt=!!E.map,Vt=!!E.matcap,qe=!!W,U=!!E.aoMap,Ct=!!E.lightMap,Pe=!!E.bumpMap,He=!!E.normalMap,Be=!!E.displacementMap,ct=!!E.emissiveMap,Ke=!!E.metalnessMap,We=!!E.roughnessMap,it=E.anisotropy>0,It=E.clearcoat>0,Ut=E.iridescence>0,M=E.sheen>0,_=E.transmission>0,B=it&&!!E.anisotropyMap,re=It&&!!E.clearcoatMap,te=It&&!!E.clearcoatNormalMap,oe=It&&!!E.clearcoatRoughnessMap,Me=Ut&&!!E.iridescenceMap,le=Ut&&!!E.iridescenceThicknessMap,ge=M&&!!E.sheenColorMap,I=M&&!!E.sheenRoughnessMap,se=!!E.specularMap,X=!!E.specularColorMap,Ne=!!E.specularIntensityMap,we=_&&!!E.transmissionMap,Re=_&&!!E.thicknessMap,be=!!E.gradientMap,R=!!E.alphaMap,he=E.alphaTest>0,ae=!!E.alphaHash,pe=!!E.extensions,fe=!!G.attributes.uv1,Q=!!G.attributes.uv2,xe=!!G.attributes.uv3;let Oe=Wi;return E.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(Oe=n.toneMapping),{isWebGL2:l,shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:me,fragmentShader:ye,defines:E.defines,customVertexShaderID:Ee,customFragmentShaderID:Le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,instancing:Ie,instancingColor:Ie&&ie.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ge===null?n.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:xi,map:nt,matcap:Vt,envMap:qe,envMapMode:qe&&W.mapping,envMapCubeUVHeight:ce,aoMap:U,lightMap:Ct,bumpMap:Pe,normalMap:He,displacementMap:f&&Be,emissiveMap:ct,normalMapObjectSpace:He&&E.normalMapType===Ub,normalMapTangentSpace:He&&E.normalMapType===Nb,metalnessMap:Ke,roughnessMap:We,anisotropy:it,anisotropyMap:B,clearcoat:It,clearcoatMap:re,clearcoatNormalMap:te,clearcoatRoughnessMap:oe,iridescence:Ut,iridescenceMap:Me,iridescenceThicknessMap:le,sheen:M,sheenColorMap:ge,sheenRoughnessMap:I,specularMap:se,specularColorMap:X,specularIntensityMap:Ne,transmission:_,transmissionMap:we,thicknessMap:Re,gradientMap:be,opaque:E.transparent===!1&&E.blending===yo,alphaMap:R,alphaTest:he,alphaHash:ae,combine:E.combine,mapUv:nt&&v(E.map.channel),aoMapUv:U&&v(E.aoMap.channel),lightMapUv:Ct&&v(E.lightMap.channel),bumpMapUv:Pe&&v(E.bumpMap.channel),normalMapUv:He&&v(E.normalMap.channel),displacementMapUv:Be&&v(E.displacementMap.channel),emissiveMapUv:ct&&v(E.emissiveMap.channel),metalnessMapUv:Ke&&v(E.metalnessMap.channel),roughnessMapUv:We&&v(E.roughnessMap.channel),anisotropyMapUv:B&&v(E.anisotropyMap.channel),clearcoatMapUv:re&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:I&&v(E.sheenRoughnessMap.channel),specularMapUv:se&&v(E.specularMap.channel),specularColorMapUv:X&&v(E.specularColorMap.channel),specularIntensityMapUv:Ne&&v(E.specularIntensityMap.channel),transmissionMapUv:we&&v(E.transmissionMap.channel),thicknessMapUv:Re&&v(E.thicknessMap.channel),alphaMapUv:R&&v(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(He||it),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:fe,vertexUv2s:Q,vertexUv3s:xe,pointsUvs:ie.isPoints===!0&&!!G.attributes.uv&&(nt||R),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ie.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:k,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:nt&&E.map.isVideoTexture===!0&&at.getTransfer(E.map.colorSpace)===ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===di,flipSided:E.side===_n,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:pe&&E.extensions.derivatives===!0,extensionFragDepth:pe&&E.extensions.fragDepth===!0,extensionDrawBuffers:pe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const q in E.defines)A.push(q),A.push(E.defines[q]);return E.isRawShaderMaterial===!1&&(S(A,E),y(A,E),A.push(n.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function S(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function y(E,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),E.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function x(E){const A=g[E.type];let q;if(A){const ee=Qn[A];q=TT.clone(ee.uniforms)}else q=E.uniforms;return q}function T(E,A){let q;for(let ee=0,ie=c.length;ee<ie;ee++){const P=c[ee];if(P.cacheKey===A){q=P,++q.usedTimes;break}}return q===void 0&&(q=new UR(n,A,E,o),c.push(q)),q}function C(E){if(--E.usedTimes===0){const A=c.indexOf(E);c[A]=c[c.length-1],c.pop(),E.destroy()}}function w(E){u.remove(E)}function H(){u.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:T,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:H}}function VR(){let n=new WeakMap;function e(o){let s=n.get(o);return s===void 0&&(s={},n.set(o,s)),s}function t(o){n.delete(o)}function i(o,s,a){n.get(o)[s]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function zR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function am(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function um(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(h,f,p,g,v,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function a(h,f,p,g,v,m){const d=s(h,f,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function u(h,f,p,g,v,m){const d=s(h,f,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||zR),i.length>1&&i.sort(f||am),r.length>1&&r.sort(f||am)}function l(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:u,finish:l,sort:c}}function GR(){let n=new WeakMap;function e(i,r){const o=n.get(i);let s;return o===void 0?(s=new um,n.set(i,[s])):r>=o.length?(s=new um,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function HR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new dt};break;case"SpotLight":t={position:new N,direction:new N,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function WR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qR=0;function jR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function XR(n,e){const t=new HR,i=WR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new N);const o=new N,s=new jt,a=new jt;function u(l,h){let f=0,p=0,g=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let v=0,m=0,d=0,S=0,y=0,x=0,T=0,C=0,w=0,H=0,E=0;l.sort(jR);const A=h===!0?Math.PI:1;for(let ee=0,ie=l.length;ee<ie;ee++){const P=l[ee],G=P.color,Y=P.intensity,W=P.distance,ce=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=G.r*Y*A,p+=G.g*Y*A,g+=G.b*Y*A;else if(P.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(P.sh.coefficients[J],Y);E++}else if(P.isDirectionalLight){const J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity*A),P.castShadow){const $=P.shadow,D=i.get(P);D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,r.directionalShadow[v]=D,r.directionalShadowMap[v]=ce,r.directionalShadowMatrix[v]=P.shadow.matrix,x++}r.directional[v]=J,v++}else if(P.isSpotLight){const J=t.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(G).multiplyScalar(Y*A),J.distance=W,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,r.spot[d]=J;const $=P.shadow;if(P.map&&(r.spotLightMap[w]=P.map,w++,$.updateMatrices(P),P.castShadow&&H++),r.spotLightMatrix[d]=$.matrix,P.castShadow){const D=i.get(P);D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,r.spotShadow[d]=D,r.spotShadowMap[d]=ce,C++}d++}else if(P.isRectAreaLight){const J=t.get(P);J.color.copy(G).multiplyScalar(Y),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),r.rectArea[S]=J,S++}else if(P.isPointLight){const J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity*A),J.distance=P.distance,J.decay=P.decay,P.castShadow){const $=P.shadow,D=i.get(P);D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,r.pointShadow[m]=D,r.pointShadowMap[m]=ce,r.pointShadowMatrix[m]=P.shadow.matrix,T++}r.point[m]=J,m++}else if(P.isHemisphereLight){const J=t.get(P);J.skyColor.copy(P.color).multiplyScalar(Y*A),J.groundColor.copy(P.groundColor).multiplyScalar(Y*A),r.hemi[y]=J,y++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const q=r.hash;(q.directionalLength!==v||q.pointLength!==m||q.spotLength!==d||q.rectAreaLength!==S||q.hemiLength!==y||q.numDirectionalShadows!==x||q.numPointShadows!==T||q.numSpotShadows!==C||q.numSpotMaps!==w||q.numLightProbes!==E)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=S,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=C+w-H,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=E,q.directionalLength=v,q.pointLength=m,q.spotLength=d,q.rectAreaLength=S,q.hemiLength=y,q.numDirectionalShadows=x,q.numPointShadows=T,q.numSpotShadows=C,q.numSpotMaps=w,q.numLightProbes=E,r.version=qR++)}function c(l,h){let f=0,p=0,g=0,v=0,m=0;const d=h.matrixWorldInverse;for(let S=0,y=l.length;S<y;S++){const x=l[S];if(x.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(d),f++}else if(x.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(d),g++}else if(x.isRectAreaLight){const T=r.rectArea[v];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),a.identity(),s.copy(x.matrixWorld),s.premultiply(d),a.extractRotation(s),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:u,setupView:c,state:r}}function cm(n,e){const t=new XR(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(h){i.push(h)}function a(h){r.push(h)}function u(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:u,setupLightsView:c,pushLight:s,pushShadow:a}}function KR(n,e){let t=new WeakMap;function i(o,s=0){const a=t.get(o);let u;return a===void 0?(u=new cm(n,e),t.set(o,[u])):s>=a.length?(u=new cm(n,e),a.push(u)):u=a[s],u}function r(){t=new WeakMap}return{get:i,dispose:r}}class YR extends uc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Db,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $R extends uc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JR(n,e,t){let i=new By;const r=new $e,o=new $e,s=new Ht,a=new YR({depthPacking:Lb}),u=new $R,c={},l=t.maxTextureSize,h={[Ki]:_n,[_n]:Ki,[di]:di},f=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:QR,fragmentShader:ZR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new er;g.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new vi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=py;let d=this.type;this.render=function(T,C,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const H=n.getRenderTarget(),E=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Hi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ee=d!==hi&&this.type===hi,ie=d===hi&&this.type!==hi;for(let P=0,G=T.length;P<G;P++){const Y=T[P],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ce=W.getFrameExtents();if(r.multiply(ce),o.copy(W.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(o.x=Math.floor(l/ce.x),r.x=o.x*ce.x,W.mapSize.x=o.x),r.y>l&&(o.y=Math.floor(l/ce.y),r.y=o.y*ce.y,W.mapSize.y=o.y)),W.map===null||ee===!0||ie===!0){const $=this.type!==hi?{minFilter:ln,magFilter:ln}:{};W.map!==null&&W.map.dispose(),W.map=new Ir(r.x,r.y,$),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const J=W.getViewportCount();for(let $=0;$<J;$++){const D=W.getViewport($);s.set(o.x*D.x,o.y*D.y,o.x*D.z,o.y*D.w),q.viewport(s),W.updateMatrices(Y,$),i=W.getFrustum(),x(C,w,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===hi&&S(W,w),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(H,E,A)};function S(T,C){const w=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ir(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,w,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,w,p,v,null)}function y(T,C,w,H){let E=null;const A=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)E=A;else if(E=w.isPointLight===!0?u:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const q=E.uuid,ee=C.uuid;let ie=c[q];ie===void 0&&(ie={},c[q]=ie);let P=ie[ee];P===void 0&&(P=E.clone(),ie[ee]=P),E=P}if(E.visible=C.visible,E.wireframe=C.wireframe,H===hi?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,w.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const q=n.properties.get(E);q.light=w}return E}function x(T,C,w,H,E){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===hi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const ee=e.update(T),ie=T.material;if(Array.isArray(ie)){const P=ee.groups;for(let G=0,Y=P.length;G<Y;G++){const W=P[G],ce=ie[W.materialIndex];if(ce&&ce.visible){const J=y(T,ce,H,E);n.renderBufferDirect(w,null,ee,J,T,W)}}}else if(ie.visible){const P=y(T,ie,H,E);n.renderBufferDirect(w,null,ee,P,T,null)}}const q=T.children;for(let ee=0,ie=q.length;ee<ie;ee++)x(q[ee],C,w,H,E)}}function e1(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const he=new Ht;let ae=null;const pe=new Ht(0,0,0,0);return{setMask:function(fe){ae!==fe&&!R&&(n.colorMask(fe,fe,fe,fe),ae=fe)},setLocked:function(fe){R=fe},setClear:function(fe,Q,xe,Oe,Et){Et===!0&&(fe*=Oe,Q*=Oe,xe*=Oe),he.set(fe,Q,xe,Oe),pe.equals(he)===!1&&(n.clearColor(fe,Q,xe,Oe),pe.copy(he))},reset:function(){R=!1,ae=null,pe.set(-1,0,0,0)}}}function o(){let R=!1,he=null,ae=null,pe=null;return{setTest:function(fe){fe?Ge(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(fe){he!==fe&&!R&&(n.depthMask(fe),he=fe)},setFunc:function(fe){if(ae!==fe){switch(fe){case ub:n.depthFunc(n.NEVER);break;case cb:n.depthFunc(n.ALWAYS);break;case lb:n.depthFunc(n.LESS);break;case Ul:n.depthFunc(n.LEQUAL);break;case hb:n.depthFunc(n.EQUAL);break;case fb:n.depthFunc(n.GEQUAL);break;case db:n.depthFunc(n.GREATER);break;case pb:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=fe}},setLocked:function(fe){R=fe},setClear:function(fe){pe!==fe&&(n.clearDepth(fe),pe=fe)},reset:function(){R=!1,he=null,ae=null,pe=null}}}function s(){let R=!1,he=null,ae=null,pe=null,fe=null,Q=null,xe=null,Oe=null,Et=null;return{setTest:function(lt){R||(lt?Ge(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(lt){he!==lt&&!R&&(n.stencilMask(lt),he=lt)},setFunc:function(lt,Yn,on){(ae!==lt||pe!==Yn||fe!==on)&&(n.stencilFunc(lt,Yn,on),ae=lt,pe=Yn,fe=on)},setOp:function(lt,Yn,on){(Q!==lt||xe!==Yn||Oe!==on)&&(n.stencilOp(lt,Yn,on),Q=lt,xe=Yn,Oe=on)},setLocked:function(lt){R=lt},setClear:function(lt){Et!==lt&&(n.clearStencil(lt),Et=lt)},reset:function(){R=!1,he=null,ae=null,pe=null,fe=null,Q=null,xe=null,Oe=null,Et=null}}}const a=new r,u=new o,c=new s,l=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,v=[],m=null,d=!1,S=null,y=null,x=null,T=null,C=null,w=null,H=null,E=!1,A=null,q=null,ee=null,ie=null,P=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const ce=n.getParameter(n.VERSION);ce.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ce)[1]),Y=W>=1):ce.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),Y=W>=2);let J=null,$={};const D=n.getParameter(n.SCISSOR_BOX),k=n.getParameter(n.VIEWPORT),me=new Ht().fromArray(D),ye=new Ht().fromArray(k);function Ee(R,he,ae,pe){const fe=new Uint8Array(4),Q=n.createTexture();n.bindTexture(R,Q),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<ae;xe++)i&&(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(he+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return Q}const Le={};Le[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),Ge(n.DEPTH_TEST),u.setFunc(Ul),Be(!1),ct(qd),Ge(n.CULL_FACE),Pe(Hi);function Ge(R){f[R]!==!0&&(n.enable(R),f[R]=!0)}function Ie(R){f[R]!==!1&&(n.disable(R),f[R]=!1)}function nt(R,he){return p[R]!==he?(n.bindFramebuffer(R,he),p[R]=he,i&&(R===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=he),R===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function Vt(R,he){let ae=v,pe=!1;if(R)if(ae=g.get(he),ae===void 0&&(ae=[],g.set(he,ae)),R.isWebGLMultipleRenderTargets){const fe=R.texture;if(ae.length!==fe.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,xe=fe.length;Q<xe;Q++)ae[Q]=n.COLOR_ATTACHMENT0+Q;ae.length=fe.length,pe=!0}}else ae[0]!==n.COLOR_ATTACHMENT0&&(ae[0]=n.COLOR_ATTACHMENT0,pe=!0);else ae[0]!==n.BACK&&(ae[0]=n.BACK,pe=!0);pe&&(t.isWebGL2?n.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function qe(R){return m!==R?(n.useProgram(R),m=R,!0):!1}const U={[ho]:n.FUNC_ADD,[Qx]:n.FUNC_SUBTRACT,[Zx]:n.FUNC_REVERSE_SUBTRACT};if(i)U[Yd]=n.MIN,U[$d]=n.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(U[Yd]=R.MIN_EXT,U[$d]=R.MAX_EXT)}const Ct={[Jx]:n.ZERO,[eb]:n.ONE,[tb]:n.SRC_COLOR,[my]:n.SRC_ALPHA,[ab]:n.SRC_ALPHA_SATURATE,[ob]:n.DST_COLOR,[ib]:n.DST_ALPHA,[nb]:n.ONE_MINUS_SRC_COLOR,[gy]:n.ONE_MINUS_SRC_ALPHA,[sb]:n.ONE_MINUS_DST_COLOR,[rb]:n.ONE_MINUS_DST_ALPHA};function Pe(R,he,ae,pe,fe,Q,xe,Oe){if(R===Hi){d===!0&&(Ie(n.BLEND),d=!1);return}if(d===!1&&(Ge(n.BLEND),d=!0),R!==$x){if(R!==S||Oe!==E){if((y!==ho||C!==ho)&&(n.blendEquation(n.FUNC_ADD),y=ho,C=ho),Oe)switch(R){case yo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jd:n.blendFunc(n.ONE,n.ONE);break;case Xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case yo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}x=null,T=null,w=null,H=null,S=R,E=Oe}return}fe=fe||he,Q=Q||ae,xe=xe||pe,(he!==y||fe!==C)&&(n.blendEquationSeparate(U[he],U[fe]),y=he,C=fe),(ae!==x||pe!==T||Q!==w||xe!==H)&&(n.blendFuncSeparate(Ct[ae],Ct[pe],Ct[Q],Ct[xe]),x=ae,T=pe,w=Q,H=xe),S=R,E=!1}function He(R,he){R.side===di?Ie(n.CULL_FACE):Ge(n.CULL_FACE);let ae=R.side===_n;he&&(ae=!ae),Be(ae),R.blending===yo&&R.transparent===!1?Pe(Hi):Pe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),u.setFunc(R.depthFunc),u.setTest(R.depthTest),u.setMask(R.depthWrite),a.setMask(R.colorWrite);const pe=R.stencilWrite;c.setTest(pe),pe&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),We(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ge(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(R){A!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),A=R)}function ct(R){R!==Xx?(Ge(n.CULL_FACE),R!==q&&(R===qd?n.cullFace(n.BACK):R===Kx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),q=R}function Ke(R){R!==ee&&(Y&&n.lineWidth(R),ee=R)}function We(R,he,ae){R?(Ge(n.POLYGON_OFFSET_FILL),(ie!==he||P!==ae)&&(n.polygonOffset(he,ae),ie=he,P=ae)):Ie(n.POLYGON_OFFSET_FILL)}function it(R){R?Ge(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function It(R){R===void 0&&(R=n.TEXTURE0+G-1),J!==R&&(n.activeTexture(R),J=R)}function Ut(R,he,ae){ae===void 0&&(J===null?ae=n.TEXTURE0+G-1:ae=J);let pe=$[ae];pe===void 0&&(pe={type:void 0,texture:void 0},$[ae]=pe),(pe.type!==R||pe.texture!==he)&&(J!==ae&&(n.activeTexture(ae),J=ae),n.bindTexture(R,he||Le[R]),pe.type=R,pe.texture=he)}function M(){const R=$[J];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function _(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function B(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function I(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function X(R){me.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),me.copy(R))}function Ne(R){ye.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),ye.copy(R))}function we(R,he){let ae=h.get(he);ae===void 0&&(ae=new WeakMap,h.set(he,ae));let pe=ae.get(R);pe===void 0&&(pe=n.getUniformBlockIndex(he,R.name),ae.set(R,pe))}function Re(R,he){const pe=h.get(he).get(R);l.get(he)!==pe&&(n.uniformBlockBinding(he,pe,R.__bindingPointIndex),l.set(he,pe))}function be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},J=null,$={},p={},g=new WeakMap,v=[],m=null,d=!1,S=null,y=null,x=null,T=null,C=null,w=null,H=null,E=!1,A=null,q=null,ee=null,ie=null,P=null,me.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:Ge,disable:Ie,bindFramebuffer:nt,drawBuffers:Vt,useProgram:qe,setBlending:Pe,setMaterial:He,setFlipSided:Be,setCullFace:ct,setLineWidth:Ke,setPolygonOffset:We,setScissorTest:it,activeTexture:It,bindTexture:Ut,unbindTexture:M,compressedTexImage2D:_,compressedTexImage3D:B,texImage2D:I,texImage3D:se,updateUBOMapping:we,uniformBlockBinding:Re,texStorage2D:le,texStorage3D:ge,texSubImage2D:re,texSubImage3D:te,compressedTexSubImage2D:oe,compressedTexSubImage3D:Me,scissor:X,viewport:Ne,reset:be}}function t1(n,e,t,i,r,o,s){const a=r.isWebGL2,u=r.maxTextures,c=r.maxCubemapSize,l=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(M,_){return d?new OffscreenCanvas(M,_):Au("canvas")}function y(M,_,B,re){let te=1;if((M.width>re||M.height>re)&&(te=re/Math.max(M.width,M.height)),te<1||_===!0)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){const oe=_?wu:Math.floor,Me=oe(te*M.width),le=oe(te*M.height);v===void 0&&(v=S(Me,le));const ge=B?S(Me,le):v;return ge.width=Me,ge.height=le,ge.getContext("2d").drawImage(M,0,0,Me,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Me+"x"+le+")."),ge}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function x(M){return zl(M.width)&&zl(M.height)}function T(M){return a?!1:M.wrapS!==Hn||M.wrapT!==Hn||M.minFilter!==ln&&M.minFilter!==mn}function C(M,_){return M.generateMipmaps&&_&&M.minFilter!==ln&&M.minFilter!==mn}function w(M){n.generateMipmap(M)}function H(M,_,B,re,te=!1){if(a===!1)return _;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let oe=_;if(_===n.RED&&(B===n.FLOAT&&(oe=n.R32F),B===n.HALF_FLOAT&&(oe=n.R16F),B===n.UNSIGNED_BYTE&&(oe=n.R8)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(oe=n.R8UI),B===n.UNSIGNED_SHORT&&(oe=n.R16UI),B===n.UNSIGNED_INT&&(oe=n.R32UI),B===n.BYTE&&(oe=n.R8I),B===n.SHORT&&(oe=n.R16I),B===n.INT&&(oe=n.R32I)),_===n.RG&&(B===n.FLOAT&&(oe=n.RG32F),B===n.HALF_FLOAT&&(oe=n.RG16F),B===n.UNSIGNED_BYTE&&(oe=n.RG8)),_===n.RGBA){const Me=te?xu:at.getTransfer(re);B===n.FLOAT&&(oe=n.RGBA32F),B===n.HALF_FLOAT&&(oe=n.RGBA16F),B===n.UNSIGNED_BYTE&&(oe=Me===ht?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function E(M,_,B){return C(M,B)===!0||M.isFramebufferTexture&&M.minFilter!==ln&&M.minFilter!==mn?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function A(M){return M===ln||M===Qd||M===Cc?n.NEAREST:n.LINEAR}function q(M){const _=M.target;_.removeEventListener("dispose",q),ie(_),_.isVideoTexture&&g.delete(_)}function ee(M){const _=M.target;_.removeEventListener("dispose",ee),G(_)}function ie(M){const _=i.get(M);if(_.__webglInit===void 0)return;const B=M.source,re=m.get(B);if(re){const te=re[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(M),Object.keys(re).length===0&&m.delete(B)}i.remove(M)}function P(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const B=M.source,re=m.get(B);delete re[_.__cacheKey],s.memory.textures--}function G(M){const _=M.texture,B=i.get(M),re=i.get(_);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),s.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(B.__webglFramebuffer[te]))for(let oe=0;oe<B.__webglFramebuffer[te].length;oe++)n.deleteFramebuffer(B.__webglFramebuffer[te][oe]);else n.deleteFramebuffer(B.__webglFramebuffer[te]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[te])}else{if(Array.isArray(B.__webglFramebuffer))for(let te=0;te<B.__webglFramebuffer.length;te++)n.deleteFramebuffer(B.__webglFramebuffer[te]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let te=0;te<B.__webglColorRenderbuffer.length;te++)B.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[te]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let te=0,oe=_.length;te<oe;te++){const Me=i.get(_[te]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),s.memory.textures--),i.remove(_[te])}i.remove(_),i.remove(M)}let Y=0;function W(){Y=0}function ce(){const M=Y;return M>=u&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+u),Y+=1,M}function J(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function $(M,_){const B=i.get(M);if(M.isVideoTexture&&It(M),M.isRenderTargetTexture===!1&&M.version>0&&B.__version!==M.version){const re=M.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(B,M,_);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function D(M,_){const B=i.get(M);if(M.version>0&&B.__version!==M.version){nt(B,M,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function k(M,_){const B=i.get(M);if(M.version>0&&B.__version!==M.version){nt(B,M,_);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function me(M,_){const B=i.get(M);if(M.version>0&&B.__version!==M.version){Vt(B,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}const ye={[Bl]:n.REPEAT,[Hn]:n.CLAMP_TO_EDGE,[kl]:n.MIRRORED_REPEAT},Ee={[ln]:n.NEAREST,[Qd]:n.NEAREST_MIPMAP_NEAREST,[Cc]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[xb]:n.LINEAR_MIPMAP_NEAREST,[Us]:n.LINEAR_MIPMAP_LINEAR},Le={[Fb]:n.NEVER,[Wb]:n.ALWAYS,[Bb]:n.LESS,[Vb]:n.LEQUAL,[kb]:n.EQUAL,[Hb]:n.GEQUAL,[zb]:n.GREATER,[Gb]:n.NOTEQUAL};function Ge(M,_,B){if(B?(n.texParameteri(M,n.TEXTURE_WRAP_S,ye[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ye[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ye[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Ee[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Ee[_.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==Hn||_.wrapT!==Hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,A(_.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,A(_.minFilter)),_.minFilter!==ln&&_.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Le[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===ln||_.minFilter!==Cc&&_.minFilter!==Us||_.type===Vi&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Os&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(M,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function Ie(M,_){let B=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",q));const re=_.source;let te=m.get(re);te===void 0&&(te={},m.set(re,te));const oe=J(_);if(oe!==M.__cacheKey){te[oe]===void 0&&(te[oe]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,B=!0),te[oe].usedTimes++;const Me=te[M.__cacheKey];Me!==void 0&&(te[M.__cacheKey].usedTimes--,Me.usedTimes===0&&P(_)),M.__cacheKey=oe,M.__webglTexture=te[oe].texture}return B}function nt(M,_,B){let re=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(re=n.TEXTURE_3D);const te=Ie(M,_),oe=_.source;t.bindTexture(re,M.__webglTexture,n.TEXTURE0+B);const Me=i.get(oe);if(oe.version!==Me.__version||te===!0){t.activeTexture(n.TEXTURE0+B);const le=at.getPrimaries(at.workingColorSpace),ge=_.colorSpace===Bn?null:at.getPrimaries(_.colorSpace),I=_.colorSpace===Bn||le===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);const se=T(_)&&x(_.image)===!1;let X=y(_.image,se,!1,l);X=Ut(_,X);const Ne=x(X)||a,we=o.convert(_.format,_.colorSpace);let Re=o.convert(_.type),be=H(_.internalFormat,we,Re,_.colorSpace,_.isVideoTexture);Ge(re,_,Ne);let R;const he=_.mipmaps,ae=a&&_.isVideoTexture!==!0,pe=Me.__version===void 0||te===!0,fe=E(_,X,Ne);if(_.isDepthTexture)be=n.DEPTH_COMPONENT,a?_.type===Vi?be=n.DEPTH_COMPONENT32F:_.type===ki?be=n.DEPTH_COMPONENT24:_.type===_r?be=n.DEPTH24_STENCIL8:be=n.DEPTH_COMPONENT16:_.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Er&&be===n.DEPTH_COMPONENT&&_.type!==sf&&_.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=ki,Re=o.convert(_.type)),_.format===zo&&be===n.DEPTH_COMPONENT&&(be=n.DEPTH_STENCIL,_.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=_r,Re=o.convert(_.type))),pe&&(ae?t.texStorage2D(n.TEXTURE_2D,1,be,X.width,X.height):t.texImage2D(n.TEXTURE_2D,0,be,X.width,X.height,0,we,Re,null));else if(_.isDataTexture)if(he.length>0&&Ne){ae&&pe&&t.texStorage2D(n.TEXTURE_2D,fe,be,he[0].width,he[0].height);for(let Q=0,xe=he.length;Q<xe;Q++)R=he[Q],ae?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,R.width,R.height,we,Re,R.data):t.texImage2D(n.TEXTURE_2D,Q,be,R.width,R.height,0,we,Re,R.data);_.generateMipmaps=!1}else ae?(pe&&t.texStorage2D(n.TEXTURE_2D,fe,be,X.width,X.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,X.width,X.height,we,Re,X.data)):t.texImage2D(n.TEXTURE_2D,0,be,X.width,X.height,0,we,Re,X.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ae&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,be,he[0].width,he[0].height,X.depth);for(let Q=0,xe=he.length;Q<xe;Q++)R=he[Q],_.format!==Wn?we!==null?ae?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,R.width,R.height,X.depth,we,R.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,be,R.width,R.height,X.depth,0,R.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,R.width,R.height,X.depth,we,Re,R.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,be,R.width,R.height,X.depth,0,we,Re,R.data)}else{ae&&pe&&t.texStorage2D(n.TEXTURE_2D,fe,be,he[0].width,he[0].height);for(let Q=0,xe=he.length;Q<xe;Q++)R=he[Q],_.format!==Wn?we!==null?ae?t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,R.width,R.height,we,R.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,be,R.width,R.height,0,R.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,R.width,R.height,we,Re,R.data):t.texImage2D(n.TEXTURE_2D,Q,be,R.width,R.height,0,we,Re,R.data)}else if(_.isDataArrayTexture)ae?(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,be,X.width,X.height,X.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,we,Re,X.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,X.width,X.height,X.depth,0,we,Re,X.data);else if(_.isData3DTexture)ae?(pe&&t.texStorage3D(n.TEXTURE_3D,fe,be,X.width,X.height,X.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,we,Re,X.data)):t.texImage3D(n.TEXTURE_3D,0,be,X.width,X.height,X.depth,0,we,Re,X.data);else if(_.isFramebufferTexture){if(pe)if(ae)t.texStorage2D(n.TEXTURE_2D,fe,be,X.width,X.height);else{let Q=X.width,xe=X.height;for(let Oe=0;Oe<fe;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,be,Q,xe,0,we,Re,null),Q>>=1,xe>>=1}}else if(he.length>0&&Ne){ae&&pe&&t.texStorage2D(n.TEXTURE_2D,fe,be,he[0].width,he[0].height);for(let Q=0,xe=he.length;Q<xe;Q++)R=he[Q],ae?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,we,Re,R):t.texImage2D(n.TEXTURE_2D,Q,be,we,Re,R);_.generateMipmaps=!1}else ae?(pe&&t.texStorage2D(n.TEXTURE_2D,fe,be,X.width,X.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Re,X)):t.texImage2D(n.TEXTURE_2D,0,be,we,Re,X);C(_,Ne)&&w(re),Me.__version=oe.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Vt(M,_,B){if(_.image.length!==6)return;const re=Ie(M,_),te=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+B);const oe=i.get(te);if(te.version!==oe.__version||re===!0){t.activeTexture(n.TEXTURE0+B);const Me=at.getPrimaries(at.workingColorSpace),le=_.colorSpace===Bn?null:at.getPrimaries(_.colorSpace),ge=_.colorSpace===Bn||Me===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const I=_.isCompressedTexture||_.image[0].isCompressedTexture,se=_.image[0]&&_.image[0].isDataTexture,X=[];for(let Q=0;Q<6;Q++)!I&&!se?X[Q]=y(_.image[Q],!1,!0,c):X[Q]=se?_.image[Q].image:_.image[Q],X[Q]=Ut(_,X[Q]);const Ne=X[0],we=x(Ne)||a,Re=o.convert(_.format,_.colorSpace),be=o.convert(_.type),R=H(_.internalFormat,Re,be,_.colorSpace),he=a&&_.isVideoTexture!==!0,ae=oe.__version===void 0||re===!0;let pe=E(_,Ne,we);Ge(n.TEXTURE_CUBE_MAP,_,we);let fe;if(I){he&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,R,Ne.width,Ne.height);for(let Q=0;Q<6;Q++){fe=X[Q].mipmaps;for(let xe=0;xe<fe.length;xe++){const Oe=fe[xe];_.format!==Wn?Re!==null?he?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,Oe.width,Oe.height,Re,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,R,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,Oe.width,Oe.height,Re,be,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,R,Oe.width,Oe.height,0,Re,be,Oe.data)}}}else{fe=_.mipmaps,he&&ae&&(fe.length>0&&pe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,R,X[0].width,X[0].height));for(let Q=0;Q<6;Q++)if(se){he?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,X[Q].width,X[Q].height,Re,be,X[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,R,X[Q].width,X[Q].height,0,Re,be,X[Q].data);for(let xe=0;xe<fe.length;xe++){const Et=fe[xe].image[Q].image;he?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,Et.width,Et.height,Re,be,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,R,Et.width,Et.height,0,Re,be,Et.data)}}else{he?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Re,be,X[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,R,Re,be,X[Q]);for(let xe=0;xe<fe.length;xe++){const Oe=fe[xe];he?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,Re,be,Oe.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,R,Re,be,Oe.image[Q])}}}C(_,we)&&w(n.TEXTURE_CUBE_MAP),oe.__version=te.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function qe(M,_,B,re,te,oe){const Me=o.convert(B.format,B.colorSpace),le=o.convert(B.type),ge=H(B.internalFormat,Me,le,B.colorSpace);if(!i.get(_).__hasExternalTextures){const se=Math.max(1,_.width>>oe),X=Math.max(1,_.height>>oe);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,oe,ge,se,X,_.depth,0,Me,le,null):t.texImage2D(te,oe,ge,se,X,0,Me,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),it(_)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,te,i.get(B).__webglTexture,0,We(_)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,te,i.get(B).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(M,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer&&!_.stencilBuffer){let re=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||it(_)){const te=_.depthTexture;te&&te.isDepthTexture&&(te.type===Vi?re=n.DEPTH_COMPONENT32F:te.type===ki&&(re=n.DEPTH_COMPONENT24));const oe=We(_);it(_)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,re,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,re,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(_.depthBuffer&&_.stencilBuffer){const re=We(_);B&&it(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,_.width,_.height):it(_)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const re=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let te=0;te<re.length;te++){const oe=re[te],Me=o.convert(oe.format,oe.colorSpace),le=o.convert(oe.type),ge=H(oe.internalFormat,Me,le,oe.colorSpace),I=We(_);B&&it(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,I,ge,_.width,_.height):it(_)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I,ge,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ge,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ct(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const re=i.get(_.depthTexture).__webglTexture,te=We(_);if(_.depthTexture.format===Er)it(_)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(_.depthTexture.format===zo)it(_)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Pe(M){const _=i.get(M),B=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ct(_.__webglFramebuffer,M)}else if(B){_.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[re]),_.__webglDepthbuffer[re]=n.createRenderbuffer(),U(_.__webglDepthbuffer[re],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),U(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(M,_,B){const re=i.get(M);_!==void 0&&qe(re.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Pe(M)}function Be(M){const _=M.texture,B=i.get(M),re=i.get(_);M.addEventListener("dispose",ee),M.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=_.version,s.memory.textures++);const te=M.isWebGLCubeRenderTarget===!0,oe=M.isWebGLMultipleRenderTargets===!0,Me=x(M)||a;if(te){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let ge=0;ge<_.mipmaps.length;ge++)B.__webglFramebuffer[le][ge]=n.createFramebuffer()}else B.__webglFramebuffer[le]=n.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)B.__webglFramebuffer[le]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(oe)if(r.drawBuffers){const le=M.texture;for(let ge=0,I=le.length;ge<I;ge++){const se=i.get(le[ge]);se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&it(M)===!1){const le=oe?_:[_];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ge=0;ge<le.length;ge++){const I=le[ge];B.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ge]);const se=o.convert(I.format,I.colorSpace),X=o.convert(I.type),Ne=H(I.internalFormat,se,X,I.colorSpace,M.isXRRenderTarget===!0),we=We(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Ne,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,B.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),U(B.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,_,Me);for(let le=0;le<6;le++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let ge=0;ge<_.mipmaps.length;ge++)qe(B.__webglFramebuffer[le][ge],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else qe(B.__webglFramebuffer[le],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);C(_,Me)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const le=M.texture;for(let ge=0,I=le.length;ge<I;ge++){const se=le[ge],X=i.get(se);t.bindTexture(n.TEXTURE_2D,X.__webglTexture),Ge(n.TEXTURE_2D,se,Me),qe(B.__webglFramebuffer,M,se,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),C(se,Me)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?le=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,re.__webglTexture),Ge(le,_,Me),a&&_.mipmaps&&_.mipmaps.length>0)for(let ge=0;ge<_.mipmaps.length;ge++)qe(B.__webglFramebuffer[ge],M,_,n.COLOR_ATTACHMENT0,le,ge);else qe(B.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,le,0);C(_,Me)&&w(le),t.unbindTexture()}M.depthBuffer&&Pe(M)}function ct(M){const _=x(M)||a,B=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let re=0,te=B.length;re<te;re++){const oe=B[re];if(C(oe,_)){const Me=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(oe).__webglTexture;t.bindTexture(Me,le),w(Me),t.unbindTexture()}}}function Ke(M){if(a&&M.samples>0&&it(M)===!1){const _=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],B=M.width,re=M.height;let te=n.COLOR_BUFFER_BIT;const oe=[],Me=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(M),ge=M.isWebGLMultipleRenderTargets===!0;if(ge)for(let I=0;I<_.length;I++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let I=0;I<_.length;I++){oe.push(n.COLOR_ATTACHMENT0+I),M.depthBuffer&&oe.push(Me);const se=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(se===!1&&(M.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ge&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[I]),se===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),ge){const X=i.get(_[I]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,X,0)}n.blitFramebuffer(0,0,B,re,0,0,B,re,te,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let I=0;I<_.length;I++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.RENDERBUFFER,le.__webglColorRenderbuffer[I]);const se=i.get(_[I]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function We(M){return Math.min(h,M.samples)}function it(M){const _=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function It(M){const _=s.render.frame;g.get(M)!==_&&(g.set(M,_),M.update())}function Ut(M,_){const B=M.colorSpace,re=M.format,te=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Vl||B!==xi&&B!==Bn&&(at.getTransfer(B)===ht?a===!1?e.has("EXT_sRGB")===!0&&re===Wn?(M.format=Vl,M.minFilter=mn,M.generateMipmaps=!1):_=Ay.sRGBToLinear(_):(re!==Wn||te!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}this.allocateTextureUnit=ce,this.resetTextureUnits=W,this.setTexture2D=$,this.setTexture2DArray=D,this.setTexture3D=k,this.setTextureCube=me,this.rebindTextures=He,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=qe,this.useMultisampledRTT=it}function n1(n,e,t){const i=t.isWebGL2;function r(o,s=Bn){let a;const u=at.getTransfer(s);if(o===qi)return n.UNSIGNED_BYTE;if(o===Ey)return n.UNSIGNED_SHORT_4_4_4_4;if(o===Sy)return n.UNSIGNED_SHORT_5_5_5_1;if(o===bb)return n.BYTE;if(o===Tb)return n.SHORT;if(o===sf)return n.UNSIGNED_SHORT;if(o===_y)return n.INT;if(o===ki)return n.UNSIGNED_INT;if(o===Vi)return n.FLOAT;if(o===Os)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Mb)return n.ALPHA;if(o===Wn)return n.RGBA;if(o===wb)return n.LUMINANCE;if(o===Ab)return n.LUMINANCE_ALPHA;if(o===Er)return n.DEPTH_COMPONENT;if(o===zo)return n.DEPTH_STENCIL;if(o===Vl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Rb)return n.RED;if(o===xy)return n.RED_INTEGER;if(o===Cb)return n.RG;if(o===by)return n.RG_INTEGER;if(o===Ty)return n.RGBA_INTEGER;if(o===Ic||o===Pc||o===Dc||o===Lc)if(u===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Ic)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Ic)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Pc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Dc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Lc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Zd||o===Jd||o===ep||o===tp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Zd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Jd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===ep)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===tp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Ib)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===np||o===ip)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===np)return u===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===ip)return u===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===rp||o===op||o===sp||o===ap||o===up||o===cp||o===lp||o===hp||o===fp||o===dp||o===pp||o===mp||o===gp||o===vp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===rp)return u===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===op)return u===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===sp)return u===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===ap)return u===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===up)return u===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===cp)return u===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===lp)return u===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===hp)return u===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===fp)return u===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===dp)return u===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===pp)return u===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===mp)return u===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===gp)return u===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===vp)return u===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Nc||o===yp||o===_p)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Nc)return u===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===yp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===_p)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Pb||o===Ep||o===Sp||o===xp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Nc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Ep)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Sp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===xp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===_r?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class i1 extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fa extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r1={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null;const a=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=l.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(r1)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class o1 extends En{constructor(e,t,i,r,o,s,a,u,c,l){if(l=l!==void 0?l:Er,l!==Er&&l!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===Er&&(i=ki),i===void 0&&l===zo&&(i=_r),super(null,r,o,s,a,u,l,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=u!==void 0?u:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class s1 extends zr{constructor(e,t){super();const i=this;let r=null,o=1,s=null,a="local-floor",u=1,c=null,l=null,h=null,f=null,p=null,g=null;const v=t.getContextAttributes();let m=null,d=null;const S=[],y=[],x=new Fn;x.layers.enable(1),x.viewport=new Ht;const T=new Fn;T.layers.enable(2),T.viewport=new Ht;const C=[x,T],w=new i1;w.layers.enable(1),w.layers.enable(2);let H=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let k=S[D];return k===void 0&&(k=new nl,S[D]=k),k.getTargetRaySpace()},this.getControllerGrip=function(D){let k=S[D];return k===void 0&&(k=new nl,S[D]=k),k.getGripSpace()},this.getHand=function(D){let k=S[D];return k===void 0&&(k=new nl,S[D]=k),k.getHandSpace()};function A(D){const k=y.indexOf(D.inputSource);if(k===-1)return;const me=S[k];me!==void 0&&(me.update(D.inputSource,D.frame,c||s),me.dispatchEvent({type:D.type,data:D.inputSource}))}function q(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",ee);for(let D=0;D<S.length;D++){const k=y[D];k!==null&&(y[D]=null,S[D].disconnect(k))}H=null,E=null,e.setRenderTarget(m),p=null,f=null,h=null,r=null,d=null,$.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){o=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",q),r.addEventListener("inputsourceschange",ee),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:p}),d=new Ir(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let k=null,me=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=v.stencil?zo:Er,me=v.stencil?_r:ki);const Ee={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:o};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ee),r.updateRenderState({layers:[f]}),d=new Ir(f.textureWidth,f.textureHeight,{format:Wn,type:qi,depthTexture:new o1(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Le=e.properties.get(d);Le.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(u),c=null,s=await r.requestReferenceSpace(a),$.setContext(r),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ee(D){for(let k=0;k<D.removed.length;k++){const me=D.removed[k],ye=y.indexOf(me);ye>=0&&(y[ye]=null,S[ye].disconnect(me))}for(let k=0;k<D.added.length;k++){const me=D.added[k];let ye=y.indexOf(me);if(ye===-1){for(let Le=0;Le<S.length;Le++)if(Le>=y.length){y.push(me),ye=Le;break}else if(y[Le]===null){y[Le]=me,ye=Le;break}if(ye===-1)break}const Ee=S[ye];Ee&&Ee.connect(me)}}const ie=new N,P=new N;function G(D,k,me){ie.setFromMatrixPosition(k.matrixWorld),P.setFromMatrixPosition(me.matrixWorld);const ye=ie.distanceTo(P),Ee=k.projectionMatrix.elements,Le=me.projectionMatrix.elements,Ge=Ee[14]/(Ee[10]-1),Ie=Ee[14]/(Ee[10]+1),nt=(Ee[9]+1)/Ee[5],Vt=(Ee[9]-1)/Ee[5],qe=(Ee[8]-1)/Ee[0],U=(Le[8]+1)/Le[0],Ct=Ge*qe,Pe=Ge*U,He=ye/(-qe+U),Be=He*-qe;k.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Be),D.translateZ(He),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const ct=Ge+He,Ke=Ie+He,We=Ct-Be,it=Pe+(ye-Be),It=nt*Ie/Ke*ct,Ut=Vt*Ie/Ke*ct;D.projectionMatrix.makePerspective(We,it,It,Ut,ct,Ke),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function Y(D,k){k===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(k.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;w.near=T.near=x.near=D.near,w.far=T.far=x.far=D.far,(H!==w.near||E!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),H=w.near,E=w.far);const k=D.parent,me=w.cameras;Y(w,k);for(let ye=0;ye<me.length;ye++)Y(me[ye],k);me.length===2?G(w,x,T):w.projectionMatrix.copy(x.projectionMatrix),W(D,w,k)};function W(D,k,me){me===null?D.matrix.copy(k.matrixWorld):(D.matrix.copy(me.matrixWorld),D.matrix.invert(),D.matrix.multiply(k.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(k.projectionMatrix),D.projectionMatrixInverse.copy(k.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Fs*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return u},this.setFoveation=function(D){u=D,f!==null&&(f.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)};let ce=null;function J(D,k){if(l=k.getViewerPose(c||s),g=k,l!==null){const me=l.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ye=!1;me.length!==w.cameras.length&&(w.cameras.length=0,ye=!0);for(let Ee=0;Ee<me.length;Ee++){const Le=me[Ee];let Ge=null;if(p!==null)Ge=p.getViewport(Le);else{const nt=h.getViewSubImage(f,Le);Ge=nt.viewport,Ee===0&&(e.setRenderTargetTextures(d,nt.colorTexture,f.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(d))}let Ie=C[Ee];Ie===void 0&&(Ie=new Fn,Ie.layers.enable(Ee),Ie.viewport=new Ht,C[Ee]=Ie),Ie.matrix.fromArray(Le.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Le.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Ee===0&&(w.matrix.copy(Ie.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ye===!0&&w.cameras.push(Ie)}}for(let me=0;me<S.length;me++){const ye=y[me],Ee=S[me];ye!==null&&Ee!==void 0&&Ee.update(ye,k,c||s)}ce&&ce(D,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),g=null}const $=new ky;$.setAnimationLoop(J),this.setAnimationLoop=function(D){ce=D},this.dispose=function(){}}}function a1(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Uy(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,S,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),h(m,d)):d.isMeshPhongMaterial?(o(m,d),l(m,d)):d.isMeshStandardMaterial?(o(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(o(m,d),g(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),v(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?u(m,d,S,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===_n&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===_n&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=e.get(d).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function u(m,d,S,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===_n&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function u1(n,e,t,i){let r={},o={},s=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(S,y){const x=y.program;i.uniformBlockBinding(S,x)}function c(S,y){let x=r[S.id];x===void 0&&(g(S),x=l(S),r[S.id]=x,S.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(S,T);const C=e.render.frame;o[S.id]!==C&&(f(S),o[S.id]=C)}function l(S){const y=h();S.__bindingPointIndex=y;const x=n.createBuffer(),T=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,T,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function h(){for(let S=0;S<a;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=r[S.id],x=S.uniforms,T=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,w=x.length;C<w;C++){const H=x[C];if(p(H,C,T)===!0){const E=H.__offset,A=Array.isArray(H.value)?H.value:[H.value];let q=0;for(let ee=0;ee<A.length;ee++){const ie=A[ee],P=v(ie);typeof ie=="number"?(H.__data[0]=ie,n.bufferSubData(n.UNIFORM_BUFFER,E+q,H.__data)):ie.isMatrix3?(H.__data[0]=ie.elements[0],H.__data[1]=ie.elements[1],H.__data[2]=ie.elements[2],H.__data[3]=ie.elements[0],H.__data[4]=ie.elements[3],H.__data[5]=ie.elements[4],H.__data[6]=ie.elements[5],H.__data[7]=ie.elements[0],H.__data[8]=ie.elements[6],H.__data[9]=ie.elements[7],H.__data[10]=ie.elements[8],H.__data[11]=ie.elements[0]):(ie.toArray(H.__data,q),q+=P.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,E,H.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,y,x){const T=S.value;if(x[y]===void 0){if(typeof T=="number")x[y]=T;else{const C=Array.isArray(T)?T:[T],w=[];for(let H=0;H<C.length;H++)w.push(C[H].clone());x[y]=w}return!0}else if(typeof T=="number"){if(x[y]!==T)return x[y]=T,!0}else{const C=Array.isArray(x[y])?x[y]:[x[y]],w=Array.isArray(T)?T:[T];for(let H=0;H<C.length;H++){const E=C[H];if(E.equals(w[H])===!1)return E.copy(w[H]),!0}}return!1}function g(S){const y=S.uniforms;let x=0;const T=16;let C=0;for(let w=0,H=y.length;w<H;w++){const E=y[w],A={boundary:0,storage:0},q=Array.isArray(E.value)?E.value:[E.value];for(let ee=0,ie=q.length;ee<ie;ee++){const P=q[ee],G=v(P);A.boundary+=G.boundary,A.storage+=G.storage}if(E.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=x,w>0){C=x%T;const ee=T-C;C!==0&&ee-A.boundary<0&&(x+=T-C,E.__offset=x)}x+=A.storage}return C=x%T,C>0&&(x+=T-C),S.__size=x,S.__cache={},this}function v(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const x=s.indexOf(y.__bindingPointIndex);s.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function d(){for(const S in r)n.deleteBuffer(r[S]);s=[],r={},o={}}return{bind:u,update:c,dispose:d}}class Wy{constructor(e={}){const{canvas:t=sT(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=s;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const d=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this._useLegacyLights=!1,this.toneMapping=Wi,this.toneMappingExposure=1;const y=this;let x=!1,T=0,C=0,w=null,H=-1,E=null;const A=new Ht,q=new Ht;let ee=null;const ie=new dt(0);let P=0,G=t.width,Y=t.height,W=1,ce=null,J=null;const $=new Ht(0,0,G,Y),D=new Ht(0,0,G,Y);let k=!1;const me=new By;let ye=!1,Ee=!1,Le=null;const Ge=new jt,Ie=new $e,nt=new N,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return w===null?W:1}let U=i;function Ct(b,L){for(let V=0;V<b.length;V++){const O=b[V],z=t.getContext(O,L);if(z!==null)return z}return null}try{const b={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${of}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",pe,!1),U===null){const L=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&L.shift(),U=Ct(L,b),U===null)throw Ct(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Pe,He,Be,ct,Ke,We,it,It,Ut,M,_,B,re,te,oe,Me,le,ge,I,se,X,Ne,we,Re;function be(){Pe=new _A(U),He=new fA(U,Pe,e),Pe.init(He),Ne=new n1(U,Pe,He),Be=new e1(U,Pe,He),ct=new xA(U),Ke=new VR,We=new t1(U,Pe,Be,Ke,He,Ne,ct),it=new pA(y),It=new yA(y),Ut=new PT(U,He),we=new lA(U,Pe,Ut,He),M=new EA(U,Ut,ct,we),_=new wA(U,M,Ut,ct),I=new MA(U,He,We),Me=new dA(Ke),B=new kR(y,it,It,Pe,He,we,Me),re=new a1(y,Ke),te=new GR,oe=new KR(Pe,He),ge=new cA(y,it,It,Be,_,f,u),le=new JR(y,_,He),Re=new u1(U,ct,He,Be),se=new hA(U,Pe,ct,He),X=new SA(U,Pe,ct,He),ct.programs=B.programs,y.capabilities=He,y.extensions=Pe,y.properties=Ke,y.renderLists=te,y.shadowMap=le,y.state=Be,y.info=ct}be();const R=new s1(y,U);this.xr=R,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(G,Y,!1))},this.getSize=function(b){return b.set(G,Y)},this.setSize=function(b,L,V=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,Y=L,t.width=Math.floor(b*W),t.height=Math.floor(L*W),V===!0&&(t.style.width=b+"px",t.style.height=L+"px"),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(G*W,Y*W).floor()},this.setDrawingBufferSize=function(b,L,V){G=b,Y=L,W=V,t.width=Math.floor(b*V),t.height=Math.floor(L*V),this.setViewport(0,0,b,L)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,L,V,O){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,L,V,O),Be.viewport(A.copy($).multiplyScalar(W).floor())},this.getScissor=function(b){return b.copy(D)},this.setScissor=function(b,L,V,O){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,L,V,O),Be.scissor(q.copy(D).multiplyScalar(W).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(b){Be.setScissorTest(k=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){J=b},this.getClearColor=function(b){return b.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(b=!0,L=!0,V=!0){let O=0;if(b){let z=!1;if(w!==null){const Se=w.texture.format;z=Se===Ty||Se===by||Se===xy}if(z){const Se=w.texture.type,De=Se===qi||Se===ki||Se===sf||Se===_r||Se===Ey||Se===Sy,ke=ge.getClearColor(),Ve=ge.getClearAlpha(),Ze=ke.r,Fe=ke.g,je=ke.b;De?(p[0]=Ze,p[1]=Fe,p[2]=je,p[3]=Ve,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=Ze,g[1]=Fe,g[2]=je,g[3]=Ve,U.clearBufferiv(U.COLOR,0,g))}else O|=U.COLOR_BUFFER_BIT}L&&(O|=U.DEPTH_BUFFER_BIT),V&&(O|=U.STENCIL_BUFFER_BIT),U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),te.dispose(),oe.dispose(),Ke.dispose(),it.dispose(),It.dispose(),_.dispose(),we.dispose(),Re.dispose(),B.dispose(),R.dispose(),R.removeEventListener("sessionstart",lt),R.removeEventListener("sessionend",Yn),Le&&(Le.dispose(),Le=null),on.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const b=ct.autoReset,L=le.enabled,V=le.autoUpdate,O=le.needsUpdate,z=le.type;be(),ct.autoReset=b,le.enabled=L,le.autoUpdate=V,le.needsUpdate=O,le.type=z}function pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function fe(b){const L=b.target;L.removeEventListener("dispose",fe),Q(L)}function Q(b){xe(b),Ke.remove(b)}function xe(b){const L=Ke.get(b).programs;L!==void 0&&(L.forEach(function(V){B.releaseProgram(V)}),b.isShaderMaterial&&B.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,V,O,z,Se){L===null&&(L=Vt);const De=z.isMesh&&z.matrixWorld.determinant()<0,ke=Qy(b,L,V,O,z);Be.setMaterial(O,De);let Ve=V.index,Ze=1;if(O.wireframe===!0){if(Ve=M.getWireframeAttribute(V),Ve===void 0)return;Ze=2}const Fe=V.drawRange,je=V.attributes.position;let gt=Fe.start*Ze,_t=(Fe.start+Fe.count)*Ze;Se!==null&&(gt=Math.max(gt,Se.start*Ze),_t=Math.min(_t,(Se.start+Se.count)*Ze)),Ve!==null?(gt=Math.max(gt,0),_t=Math.min(_t,Ve.count)):je!=null&&(gt=Math.max(gt,0),_t=Math.min(_t,je.count));const Un=_t-gt;if(Un<0||Un===1/0)return;we.setup(z,O,ke,V,Ve);let ri,St=se;if(Ve!==null&&(ri=Ut.get(Ve),St=X,St.setIndex(ri)),z.isMesh)O.wireframe===!0?(Be.setLineWidth(O.wireframeLinewidth*qe()),St.setMode(U.LINES)):St.setMode(U.TRIANGLES);else if(z.isLine){let Je=O.linewidth;Je===void 0&&(Je=1),Be.setLineWidth(Je*qe()),z.isLineSegments?St.setMode(U.LINES):z.isLineLoop?St.setMode(U.LINE_LOOP):St.setMode(U.LINE_STRIP)}else z.isPoints?St.setMode(U.POINTS):z.isSprite&&St.setMode(U.TRIANGLES);if(z.isInstancedMesh)St.renderInstances(gt,Un,z.count);else if(V.isInstancedBufferGeometry){const Je=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,lc=Math.min(V.instanceCount,Je);St.renderInstances(gt,Un,lc)}else St.render(gt,Un)},this.compile=function(b,L){function V(O,z,Se){O.transparent===!0&&O.side===di&&O.forceSinglePass===!1?(O.side=_n,O.needsUpdate=!0,sa(O,z,Se),O.side=Ki,O.needsUpdate=!0,sa(O,z,Se),O.side=di):sa(O,z,Se)}m=oe.get(b),m.init(),S.push(m),b.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(y._useLegacyLights),b.traverse(function(O){const z=O.material;if(z)if(Array.isArray(z))for(let Se=0;Se<z.length;Se++){const De=z[Se];V(De,b,O)}else V(z,b,O)}),S.pop(),m=null};let Oe=null;function Et(b){Oe&&Oe(b)}function lt(){on.stop()}function Yn(){on.start()}const on=new ky;on.setAnimationLoop(Et),typeof self!="undefined"&&on.setContext(self),this.setAnimationLoop=function(b){Oe=b,R.setAnimationLoop(b),b===null?on.stop():on.start()},R.addEventListener("sessionstart",lt),R.addEventListener("sessionend",Yn),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(L),L=R.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,L,w),m=oe.get(b,S.length),m.init(),S.push(m),Ge.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),me.setFromProjectionMatrix(Ge),Ee=this.localClippingEnabled,ye=Me.init(this.clippingPlanes,Ee),v=te.get(b,d.length),v.init(),d.push(v),pf(b,L,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(ce,J),this.info.render.frame++,ye===!0&&Me.beginShadows();const V=m.state.shadowsArray;if(le.render(V,b,L),ye===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(v,b),m.setupLights(y._useLegacyLights),L.isArrayCamera){const O=L.cameras;for(let z=0,Se=O.length;z<Se;z++){const De=O[z];mf(v,b,De,De.viewport)}}else mf(v,b,L);w!==null&&(We.updateMultisampleRenderTarget(w),We.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(y,b,L),we.resetDefaultState(),H=-1,E=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function pf(b,L,V,O){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||me.intersectsSprite(b)){O&&nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ge);const De=_.update(b),ke=b.material;ke.visible&&v.push(b,De,ke,V,nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||me.intersectsObject(b))){const De=_.update(b),ke=b.material;if(O&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),nt.copy(b.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),nt.copy(De.boundingSphere.center)),nt.applyMatrix4(b.matrixWorld).applyMatrix4(Ge)),Array.isArray(ke)){const Ve=De.groups;for(let Ze=0,Fe=Ve.length;Ze<Fe;Ze++){const je=Ve[Ze],gt=ke[je.materialIndex];gt&&gt.visible&&v.push(b,De,gt,V,nt.z,je)}}else ke.visible&&v.push(b,De,ke,V,nt.z,null)}}const Se=b.children;for(let De=0,ke=Se.length;De<ke;De++)pf(Se[De],L,V,O)}function mf(b,L,V,O){const z=b.opaque,Se=b.transmissive,De=b.transparent;m.setupLightsView(V),ye===!0&&Me.setGlobalState(y.clippingPlanes,V),Se.length>0&&$y(z,Se,L,V),O&&Be.viewport(A.copy(O)),z.length>0&&oa(z,L,V),Se.length>0&&oa(Se,L,V),De.length>0&&oa(De,L,V),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function $y(b,L,V,O){const z=He.isWebGL2;Le===null&&(Le=new Ir(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?Os:qi,minFilter:Us,samples:z?4:0})),y.getDrawingBufferSize(Ie),z?Le.setSize(Ie.x,Ie.y):Le.setSize(wu(Ie.x),wu(Ie.y));const Se=y.getRenderTarget();y.setRenderTarget(Le),y.getClearColor(ie),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();const De=y.toneMapping;y.toneMapping=Wi,oa(b,V,O),We.updateMultisampleRenderTarget(Le),We.updateRenderTargetMipmap(Le);let ke=!1;for(let Ve=0,Ze=L.length;Ve<Ze;Ve++){const Fe=L[Ve],je=Fe.object,gt=Fe.geometry,_t=Fe.material,Un=Fe.group;if(_t.side===di&&je.layers.test(O.layers)){const ri=_t.side;_t.side=_n,_t.needsUpdate=!0,gf(je,V,O,gt,_t,Un),_t.side=ri,_t.needsUpdate=!0,ke=!0}}ke===!0&&(We.updateMultisampleRenderTarget(Le),We.updateRenderTargetMipmap(Le)),y.setRenderTarget(Se),y.setClearColor(ie,P),y.toneMapping=De}function oa(b,L,V){const O=L.isScene===!0?L.overrideMaterial:null;for(let z=0,Se=b.length;z<Se;z++){const De=b[z],ke=De.object,Ve=De.geometry,Ze=O===null?De.material:O,Fe=De.group;ke.layers.test(V.layers)&&gf(ke,L,V,Ve,Ze,Fe)}}function gf(b,L,V,O,z,Se){b.onBeforeRender(y,L,V,O,z,Se),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(y,L,V,O,b,Se),z.transparent===!0&&z.side===di&&z.forceSinglePass===!1?(z.side=_n,z.needsUpdate=!0,y.renderBufferDirect(V,L,O,z,b,Se),z.side=Ki,z.needsUpdate=!0,y.renderBufferDirect(V,L,O,z,b,Se),z.side=di):y.renderBufferDirect(V,L,O,z,b,Se),b.onAfterRender(y,L,V,O,z,Se)}function sa(b,L,V){L.isScene!==!0&&(L=Vt);const O=Ke.get(b),z=m.state.lights,Se=m.state.shadowsArray,De=z.state.version,ke=B.getParameters(b,z.state,Se,L,V),Ve=B.getProgramCacheKey(ke);let Ze=O.programs;O.environment=b.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(b.isMeshStandardMaterial?It:it).get(b.envMap||O.environment),Ze===void 0&&(b.addEventListener("dispose",fe),Ze=new Map,O.programs=Ze);let Fe=Ze.get(Ve);if(Fe!==void 0){if(O.currentProgram===Fe&&O.lightsStateVersion===De)return vf(b,ke),Fe}else ke.uniforms=B.getUniforms(b),b.onBuild(V,ke,y),b.onBeforeCompile(ke,y),Fe=B.acquireProgram(ke,Ve),Ze.set(Ve,Fe),O.uniforms=ke.uniforms;const je=O.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(je.clippingPlanes=Me.uniform),vf(b,ke),O.needsLights=Jy(b),O.lightsStateVersion=De,O.needsLights&&(je.ambientLightColor.value=z.state.ambient,je.lightProbe.value=z.state.probe,je.directionalLights.value=z.state.directional,je.directionalLightShadows.value=z.state.directionalShadow,je.spotLights.value=z.state.spot,je.spotLightShadows.value=z.state.spotShadow,je.rectAreaLights.value=z.state.rectArea,je.ltc_1.value=z.state.rectAreaLTC1,je.ltc_2.value=z.state.rectAreaLTC2,je.pointLights.value=z.state.point,je.pointLightShadows.value=z.state.pointShadow,je.hemisphereLights.value=z.state.hemi,je.directionalShadowMap.value=z.state.directionalShadowMap,je.directionalShadowMatrix.value=z.state.directionalShadowMatrix,je.spotShadowMap.value=z.state.spotShadowMap,je.spotLightMatrix.value=z.state.spotLightMatrix,je.spotLightMap.value=z.state.spotLightMap,je.pointShadowMap.value=z.state.pointShadowMap,je.pointShadowMatrix.value=z.state.pointShadowMatrix);const gt=Fe.getUniforms(),_t=Xa.seqWithValue(gt.seq,je);return O.currentProgram=Fe,O.uniformsList=_t,Fe}function vf(b,L){const V=Ke.get(b);V.outputColorSpace=L.outputColorSpace,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function Qy(b,L,V,O,z){L.isScene!==!0&&(L=Vt),We.resetTextureUnits();const Se=L.fog,De=O.isMeshStandardMaterial?L.environment:null,ke=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:xi,Ve=(O.isMeshStandardMaterial?It:it).get(O.envMap||De),Ze=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Fe=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),je=!!V.morphAttributes.position,gt=!!V.morphAttributes.normal,_t=!!V.morphAttributes.color;let Un=Wi;O.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Un=y.toneMapping);const ri=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,St=ri!==void 0?ri.length:0,Je=Ke.get(O),lc=m.state.lights;if(ye===!0&&(Ee===!0||b!==E)){const Tn=b===E&&O.id===H;Me.setState(O,b,Tn)}let xt=!1;O.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==lc.state.version||Je.outputColorSpace!==ke||z.isInstancedMesh&&Je.instancing===!1||!z.isInstancedMesh&&Je.instancing===!0||z.isSkinnedMesh&&Je.skinning===!1||!z.isSkinnedMesh&&Je.skinning===!0||z.isInstancedMesh&&Je.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Je.instancingColor===!1&&z.instanceColor!==null||Je.envMap!==Ve||O.fog===!0&&Je.fog!==Se||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Me.numPlanes||Je.numIntersection!==Me.numIntersection)||Je.vertexAlphas!==Ze||Je.vertexTangents!==Fe||Je.morphTargets!==je||Je.morphNormals!==gt||Je.morphColors!==_t||Je.toneMapping!==Un||He.isWebGL2===!0&&Je.morphTargetsCount!==St)&&(xt=!0):(xt=!0,Je.__version=O.version);let tr=Je.currentProgram;xt===!0&&(tr=sa(O,L,z));let yf=!1,Jo=!1,hc=!1;const sn=tr.getUniforms(),nr=Je.uniforms;if(Be.useProgram(tr.program)&&(yf=!0,Jo=!0,hc=!0),O.id!==H&&(H=O.id,Jo=!0),yf||E!==b){sn.setValue(U,"projectionMatrix",b.projectionMatrix),sn.setValue(U,"viewMatrix",b.matrixWorldInverse);const Tn=sn.map.cameraPosition;Tn!==void 0&&Tn.setValue(U,nt.setFromMatrixPosition(b.matrixWorld)),He.logarithmicDepthBuffer&&sn.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&sn.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Jo=!0,hc=!0)}if(z.isSkinnedMesh){sn.setOptional(U,z,"bindMatrix"),sn.setOptional(U,z,"bindMatrixInverse");const Tn=z.skeleton;Tn&&(He.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),sn.setValue(U,"boneTexture",Tn.boneTexture,We),sn.setValue(U,"boneTextureSize",Tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fc=V.morphAttributes;if((fc.position!==void 0||fc.normal!==void 0||fc.color!==void 0&&He.isWebGL2===!0)&&I.update(z,V,tr),(Jo||Je.receiveShadow!==z.receiveShadow)&&(Je.receiveShadow=z.receiveShadow,sn.setValue(U,"receiveShadow",z.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(nr.envMap.value=Ve,nr.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Jo&&(sn.setValue(U,"toneMappingExposure",y.toneMappingExposure),Je.needsLights&&Zy(nr,hc),Se&&O.fog===!0&&re.refreshFogUniforms(nr,Se),re.refreshMaterialUniforms(nr,O,W,Y,Le),Xa.upload(U,Je.uniformsList,nr,We)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Xa.upload(U,Je.uniformsList,nr,We),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&sn.setValue(U,"center",z.center),sn.setValue(U,"modelViewMatrix",z.modelViewMatrix),sn.setValue(U,"normalMatrix",z.normalMatrix),sn.setValue(U,"modelMatrix",z.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Tn=O.uniformsGroups;for(let dc=0,e_=Tn.length;dc<e_;dc++)if(He.isWebGL2){const _f=Tn[dc];Re.update(_f,tr),Re.bind(_f,tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tr}function Zy(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function Jy(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,L,V){Ke.get(b.texture).__webglTexture=L,Ke.get(b.depthTexture).__webglTexture=V;const O=Ke.get(b);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=V===void 0,O.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,L){const V=Ke.get(b);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,V=0){w=b,T=L,C=V;let O=!0,z=null,Se=!1,De=!1;if(b){const Ve=Ke.get(b);Ve.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(U.FRAMEBUFFER,null),O=!1):Ve.__webglFramebuffer===void 0?We.setupRenderTarget(b):Ve.__hasExternalTextures&&We.rebindTextures(b,Ke.get(b.texture).__webglTexture,Ke.get(b.depthTexture).__webglTexture);const Ze=b.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(De=!0);const Fe=Ke.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[L])?z=Fe[L][V]:z=Fe[L],Se=!0):He.isWebGL2&&b.samples>0&&We.useMultisampledRTT(b)===!1?z=Ke.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?z=Fe[V]:z=Fe,A.copy(b.viewport),q.copy(b.scissor),ee=b.scissorTest}else A.copy($).multiplyScalar(W).floor(),q.copy(D).multiplyScalar(W).floor(),ee=k;if(Be.bindFramebuffer(U.FRAMEBUFFER,z)&&He.drawBuffers&&O&&Be.drawBuffers(b,z),Be.viewport(A),Be.scissor(q),Be.setScissorTest(ee),Se){const Ve=Ke.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ve.__webglTexture,V)}else if(De){const Ve=Ke.get(b.texture),Ze=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ve.__webglTexture,V||0,Ze)}H=-1},this.readRenderTargetPixels=function(b,L,V,O,z,Se,De){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(ke=ke[De]),ke){Be.bindFramebuffer(U.FRAMEBUFFER,ke);try{const Ve=b.texture,Ze=Ve.format,Fe=Ve.type;if(Ze!==Wn&&Ne.convert(Ze)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Fe===Os&&(Pe.has("EXT_color_buffer_half_float")||He.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Fe!==qi&&Ne.convert(Fe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Vi&&(He.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-O&&V>=0&&V<=b.height-z&&U.readPixels(L,V,O,z,Ne.convert(Ze),Ne.convert(Fe),Se)}finally{const Ve=w!==null?Ke.get(w).__webglFramebuffer:null;Be.bindFramebuffer(U.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(b,L,V=0){const O=Math.pow(2,-V),z=Math.floor(L.image.width*O),Se=Math.floor(L.image.height*O);We.setTexture2D(L,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,b.x,b.y,z,Se),Be.unbindTexture()},this.copyTextureToTexture=function(b,L,V,O=0){const z=L.image.width,Se=L.image.height,De=Ne.convert(V.format),ke=Ne.convert(V.type);We.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment),L.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,b.x,b.y,z,Se,De,ke,L.image.data):L.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,b.x,b.y,L.mipmaps[0].width,L.mipmaps[0].height,De,L.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,O,b.x,b.y,De,ke,L.image),O===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(b,L,V,O,z=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=b.max.x-b.min.x+1,De=b.max.y-b.min.y+1,ke=b.max.z-b.min.z+1,Ve=Ne.convert(O.format),Ze=Ne.convert(O.type);let Fe;if(O.isData3DTexture)We.setTexture3D(O,0),Fe=U.TEXTURE_3D;else if(O.isDataArrayTexture)We.setTexture2DArray(O,0),Fe=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const je=U.getParameter(U.UNPACK_ROW_LENGTH),gt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),_t=U.getParameter(U.UNPACK_SKIP_PIXELS),Un=U.getParameter(U.UNPACK_SKIP_ROWS),ri=U.getParameter(U.UNPACK_SKIP_IMAGES),St=V.isCompressedTexture?V.mipmaps[0]:V.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,St.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,St.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,b.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,b.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,b.min.z),V.isDataTexture||V.isData3DTexture?U.texSubImage3D(Fe,z,L.x,L.y,L.z,Se,De,ke,Ve,Ze,St.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Fe,z,L.x,L.y,L.z,Se,De,ke,Ve,St.data)):U.texSubImage3D(Fe,z,L.x,L.y,L.z,Se,De,ke,Ve,Ze,St),U.pixelStorei(U.UNPACK_ROW_LENGTH,je),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_t),U.pixelStorei(U.UNPACK_SKIP_ROWS,Un),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ri),z===0&&O.generateMipmaps&&U.generateMipmap(Fe),Be.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?We.setTextureCube(b,0):b.isData3DTexture?We.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?We.setTexture2DArray(b,0):We.setTexture2D(b,0),Be.unbindTexture()},this.resetState=function(){T=0,C=0,w=null,Be.reset(),we.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===af?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===sc?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bt?Sr:My}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Sr?Bt:xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class c1 extends Wy{}c1.prototype.isWebGL1Renderer=!0;class l1 extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class h1 extends En{constructor(e,t,i,r,o,s,a,u,c){super(e,t,i,r,o,s,a,u,c),this.isVideoTexture=!0,this.minFilter=s!==void 0?s:mn,this.magFilter=o!==void 0?o:mn,this.generateMipmaps=!1;const l=this;function h(){l.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class df extends er{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const u=Math.min(s+a,Math.PI);let c=0;const l=[],h=new N,f=new N,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){const S=[],y=d/i;let x=0;d===0&&s===0?x=.5/t:d===i&&u===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const C=T/t;h.x=-e*Math.cos(r+C*o)*Math.sin(s+y*a),h.y=e*Math.cos(s+y*a),h.z=e*Math.sin(r+C*o)*Math.sin(s+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(C+x,1-y),S.push(c++)}l.push(S)}for(let d=0;d<i;d++)for(let S=0;S<t;S++){const y=l[d][S+1],x=l[d][S],T=l[d+1][S],C=l[d+1][S+1];(d!==0||s>0)&&p.push(y,x,C),(d!==i-1||u<Math.PI)&&p.push(x,T,C)}this.setIndex(p),this.setAttribute("position",new ti(g,3)),this.setAttribute("normal",new ti(v,3)),this.setAttribute("uv",new ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lm{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:of}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=of);const hm={type:"change"},il={type:"start"},fm={type:"end"},Ba=new Iy,dm=new Li,f1=Math.cos(70*oT.DEG2RAD);class d1 extends zr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:qr.ROTATE,TWO:qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",_),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(hm),i.update(),o=r.NONE},this.update=function(){const I=new N,se=new Pr().setFromUnitVectors(e.up,new N(0,1,0)),X=se.clone().invert(),Ne=new N,we=new Pr,Re=new N,be=2*Math.PI;return function(he=null){const ae=i.object.position;I.copy(ae).sub(i.target),I.applyQuaternion(se),a.setFromVector3(I),i.autoRotate&&o===r.NONE&&q(E(he)),i.enableDamping?(a.theta+=u.theta*i.dampingFactor,a.phi+=u.phi*i.dampingFactor):(a.theta+=u.theta,a.phi+=u.phi);let pe=i.minAzimuthAngle,fe=i.maxAzimuthAngle;isFinite(pe)&&isFinite(fe)&&(pe<-Math.PI?pe+=be:pe>Math.PI&&(pe-=be),fe<-Math.PI?fe+=be:fe>Math.PI&&(fe-=be),pe<=fe?a.theta=Math.max(pe,Math.min(fe,a.theta)):a.theta=a.theta>(pe+fe)/2?Math.max(pe,a.theta):Math.min(fe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(l,i.dampingFactor):i.target.add(l),i.zoomToCursor&&C||i.object.isOrthographicCamera?a.radius=J(a.radius):a.radius=J(a.radius*c),I.setFromSpherical(a),I.applyQuaternion(X),ae.copy(i.target).add(I),i.object.lookAt(i.target),i.enableDamping===!0?(u.theta*=1-i.dampingFactor,u.phi*=1-i.dampingFactor,l.multiplyScalar(1-i.dampingFactor)):(u.set(0,0,0),l.set(0,0,0));let Q=!1;if(i.zoomToCursor&&C){let xe=null;if(i.object.isPerspectiveCamera){const Oe=I.length();xe=J(Oe*c);const Et=Oe-xe;i.object.position.addScaledVector(x,Et),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Oe=new N(T.x,T.y,0);Oe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Q=!0;const Et=new N(T.x,T.y,0);Et.unproject(i.object),i.object.position.sub(Et).add(Oe),i.object.updateMatrixWorld(),xe=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;xe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(xe).add(i.object.position):(Ba.origin.copy(i.object.position),Ba.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ba.direction))<f1?e.lookAt(i.target):(dm.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ba.intersectPlane(dm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Q=!0);return c=1,C=!1,Q||Ne.distanceToSquared(i.object.position)>s||8*(1-we.dot(i.object.quaternion))>s||Re.distanceToSquared(i.target)>0?(i.dispatchEvent(hm),Ne.copy(i.object.position),we.copy(i.object.quaternion),Re.copy(i.target),Q=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",te),i.domElement.removeEventListener("pointerdown",Ke),i.domElement.removeEventListener("pointercancel",it),i.domElement.removeEventListener("wheel",M),i.domElement.removeEventListener("pointermove",We),i.domElement.removeEventListener("pointerup",it),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",_),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new lm,u=new lm;let c=1;const l=new N,h=new $e,f=new $e,p=new $e,g=new $e,v=new $e,m=new $e,d=new $e,S=new $e,y=new $e,x=new N,T=new $e;let C=!1;const w=[],H={};function E(I){return I!==null?2*Math.PI/60*i.autoRotateSpeed*I:2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function q(I){u.theta-=I}function ee(I){u.phi-=I}const ie=function(){const I=new N;return function(X,Ne){I.setFromMatrixColumn(Ne,0),I.multiplyScalar(-X),l.add(I)}}(),P=function(){const I=new N;return function(X,Ne){i.screenSpacePanning===!0?I.setFromMatrixColumn(Ne,1):(I.setFromMatrixColumn(Ne,0),I.crossVectors(i.object.up,I)),I.multiplyScalar(X),l.add(I)}}(),G=function(){const I=new N;return function(X,Ne){const we=i.domElement;if(i.object.isPerspectiveCamera){const Re=i.object.position;I.copy(Re).sub(i.target);let be=I.length();be*=Math.tan(i.object.fov/2*Math.PI/180),ie(2*X*be/we.clientHeight,i.object.matrix),P(2*Ne*be/we.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ie(X*(i.object.right-i.object.left)/i.object.zoom/we.clientWidth,i.object.matrix),P(Ne*(i.object.top-i.object.bottom)/i.object.zoom/we.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Y(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ce(I){if(!i.zoomToCursor)return;C=!0;const se=i.domElement.getBoundingClientRect(),X=I.clientX-se.left,Ne=I.clientY-se.top,we=se.width,Re=se.height;T.x=X/we*2-1,T.y=-(Ne/Re)*2+1,x.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function J(I){return Math.max(i.minDistance,Math.min(i.maxDistance,I))}function $(I){h.set(I.clientX,I.clientY)}function D(I){ce(I),d.set(I.clientX,I.clientY)}function k(I){g.set(I.clientX,I.clientY)}function me(I){f.set(I.clientX,I.clientY),p.subVectors(f,h).multiplyScalar(i.rotateSpeed);const se=i.domElement;q(2*Math.PI*p.x/se.clientHeight),ee(2*Math.PI*p.y/se.clientHeight),h.copy(f),i.update()}function ye(I){S.set(I.clientX,I.clientY),y.subVectors(S,d),y.y>0?Y(A()):y.y<0&&W(A()),d.copy(S),i.update()}function Ee(I){v.set(I.clientX,I.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),G(m.x,m.y),g.copy(v),i.update()}function Le(I){ce(I),I.deltaY<0?W(A()):I.deltaY>0&&Y(A()),i.update()}function Ge(I){let se=!1;switch(I.code){case i.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?ee(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?ee(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),se=!0;break}se&&(I.preventDefault(),i.update())}function Ie(){if(w.length===1)h.set(w[0].pageX,w[0].pageY);else{const I=.5*(w[0].pageX+w[1].pageX),se=.5*(w[0].pageY+w[1].pageY);h.set(I,se)}}function nt(){if(w.length===1)g.set(w[0].pageX,w[0].pageY);else{const I=.5*(w[0].pageX+w[1].pageX),se=.5*(w[0].pageY+w[1].pageY);g.set(I,se)}}function Vt(){const I=w[0].pageX-w[1].pageX,se=w[0].pageY-w[1].pageY,X=Math.sqrt(I*I+se*se);d.set(0,X)}function qe(){i.enableZoom&&Vt(),i.enablePan&&nt()}function U(){i.enableZoom&&Vt(),i.enableRotate&&Ie()}function Ct(I){if(w.length==1)f.set(I.pageX,I.pageY);else{const X=ge(I),Ne=.5*(I.pageX+X.x),we=.5*(I.pageY+X.y);f.set(Ne,we)}p.subVectors(f,h).multiplyScalar(i.rotateSpeed);const se=i.domElement;q(2*Math.PI*p.x/se.clientHeight),ee(2*Math.PI*p.y/se.clientHeight),h.copy(f)}function Pe(I){if(w.length===1)v.set(I.pageX,I.pageY);else{const se=ge(I),X=.5*(I.pageX+se.x),Ne=.5*(I.pageY+se.y);v.set(X,Ne)}m.subVectors(v,g).multiplyScalar(i.panSpeed),G(m.x,m.y),g.copy(v)}function He(I){const se=ge(I),X=I.pageX-se.x,Ne=I.pageY-se.y,we=Math.sqrt(X*X+Ne*Ne);S.set(0,we),y.set(0,Math.pow(S.y/d.y,i.zoomSpeed)),Y(y.y),d.copy(S)}function Be(I){i.enableZoom&&He(I),i.enablePan&&Pe(I)}function ct(I){i.enableZoom&&He(I),i.enableRotate&&Ct(I)}function Ke(I){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",We),i.domElement.addEventListener("pointerup",it)),oe(I),I.pointerType==="touch"?B(I):It(I))}function We(I){i.enabled!==!1&&(I.pointerType==="touch"?re(I):Ut(I))}function it(I){Me(I),w.length===0&&(i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",We),i.domElement.removeEventListener("pointerup",it)),i.dispatchEvent(fm),o=r.NONE}function It(I){let se;switch(I.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Wr.DOLLY:if(i.enableZoom===!1)return;D(I),o=r.DOLLY;break;case Wr.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enablePan===!1)return;k(I),o=r.PAN}else{if(i.enableRotate===!1)return;$(I),o=r.ROTATE}break;case Wr.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enableRotate===!1)return;$(I),o=r.ROTATE}else{if(i.enablePan===!1)return;k(I),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(il)}function Ut(I){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;me(I);break;case r.DOLLY:if(i.enableZoom===!1)return;ye(I);break;case r.PAN:if(i.enablePan===!1)return;Ee(I);break}}function M(I){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(I.preventDefault(),i.dispatchEvent(il),Le(I),i.dispatchEvent(fm))}function _(I){i.enabled===!1||i.enablePan===!1||Ge(I)}function B(I){switch(le(I),w.length){case 1:switch(i.touches.ONE){case qr.ROTATE:if(i.enableRotate===!1)return;Ie(),o=r.TOUCH_ROTATE;break;case qr.PAN:if(i.enablePan===!1)return;nt(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case qr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;qe(),o=r.TOUCH_DOLLY_PAN;break;case qr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;U(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(il)}function re(I){switch(le(I),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ct(I),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Pe(I),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Be(I),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ct(I),i.update();break;default:o=r.NONE}}function te(I){i.enabled!==!1&&I.preventDefault()}function oe(I){w.push(I)}function Me(I){delete H[I.pointerId];for(let se=0;se<w.length;se++)if(w[se].pointerId==I.pointerId){w.splice(se,1);return}}function le(I){let se=H[I.pointerId];se===void 0&&(se=new $e,H[I.pointerId]=se),se.set(I.pageX,I.pageY)}function ge(I){const se=I.pointerId===w[0].pointerId?w[1]:w[0];return H[se.pointerId]}i.domElement.addEventListener("contextmenu",te),i.domElement.addEventListener("pointerdown",Ke),i.domElement.addEventListener("pointercancel",it),i.domElement.addEventListener("wheel",M,{passive:!1}),this.update()}}let fi,Hl,Ni,pm;const p1={apiKey:"AIzaSyCa2RAbKoz1Yq7MxFH2mC6aORNYoPq8FEM",authDomain:"test-5339c.firebaseapp.com",projectId:"test-5339c",storageBucket:"test-5339c.appspot.com",messagingSenderId:"906135165534",appId:"1:906135165534:web:0489a1620e90f1613732cf",measurementId:"G-Y58LXZJ671"};br.apps.length||br.initializeApp(p1);const qy=br.firestore(),m1={iceServers:[{urls:"stun:stun.relay.metered.ca:80"},{urls:"turn:a.relay.metered.ca:80",username:"3c2899b6892a0dd428438fa2",credential:"UjVDP6QSI1bu0yiq"},{urls:"turn:a.relay.metered.ca:80?transport=tcp",username:"3c2899b6892a0dd428438fa2",credential:"UjVDP6QSI1bu0yiq"},{urls:"turn:a.relay.metered.ca:443",username:"3c2899b6892a0dd428438fa2",credential:"UjVDP6QSI1bu0yiq"},{urls:"turn:a.relay.metered.ca:443?transport=tcp",username:"3c2899b6892a0dd428438fa2",credential:"UjVDP6QSI1bu0yiq"}],iceCandidatePoolSize:10},gn=new RTCPeerConnection(m1);let ka=null,rl=null;const ol=document.getElementById("webcamButton"),mm=document.getElementById("webcamVideo"),Ka=document.getElementById("callButton"),jy=document.getElementById("callInput"),Wl=document.getElementById("answerButton"),gm=document.getElementById("remoteVideo"),Eo=document.getElementById("hangupButton"),Xy=document.getElementById("senderButton"),Ky=document.getElementById("receiverButton"),g1=document.getElementById("locStream"),v1=document.getElementById("remStream");var Ru=!0;function y1(){Ru=!Ru}Xy.onclick=async()=>{Ky.disabled=!0};Ky.onclick=async()=>{y1(),Xy.disabled=!0};ol.onclick=async()=>{Ru===!0&&(ka=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0}),ka.getTracks().forEach(n=>{gn.addTrack(n,ka)}),mm.srcObject=ka,Ka.disabled=!1,Wl.disabled=!0,ol.disabled=!0,Eo.disabled=!1,gm.style.display="none",v1.style.display="none"),Ru===!1&&(rl=new MediaStream,gn.ontrack=n=>{n.streams[0].getTracks().forEach(e=>{rl.addTrack(e)})},gm.srcObject=rl,Ka.disabled=!1,Wl.disabled=!1,ol.disabled=!0,Ka.disabled=!0,Eo.disabled=!1,mm.style.display="none",g1.style.display="none",_1(),Yy())};Ka.onclick=async()=>{const n=qy.collection("calls").doc(),e=n.collection("offerCandidates"),t=n.collection("answerCandidates");jy.value=n.id,gn.onicecandidate=o=>{o.candidate&&e.add(o.candidate.toJSON())};const i=await gn.createOffer();await gn.setLocalDescription(i);const r={sdp:i.sdp,type:i.type};await n.set({offer:r}),n.onSnapshot(o=>{const s=o.data();if(!gn.currentRemoteDescription&&(s==null?void 0:s.answer)){const a=new RTCSessionDescription(s.answer);gn.setRemoteDescription(a)}}),t.onSnapshot(o=>{o.docChanges().forEach(s=>{if(s.type==="added"){const a=new RTCIceCandidate(s.doc.data());gn.addIceCandidate(a)}})}),Eo.disabled=!1};Wl.onclick=async()=>{const n=jy.value,e=qy.collection("calls").doc(n),t=e.collection("answerCandidates"),i=e.collection("offerCandidates");gn.onicecandidate=u=>{u.candidate&&t.add(u.candidate.toJSON())};const o=(await e.get()).data().offer;await gn.setRemoteDescription(new RTCSessionDescription(o));const s=await gn.createAnswer();await gn.setLocalDescription(s);const a={type:s.type,sdp:s.sdp};await e.update({answer:a}),i.onSnapshot(u=>{u.docChanges().forEach(c=>{if(console.log(c),c.type==="added"){let l=c.doc.data();gn.addIceCandidate(new RTCIceCandidate(l))}})})};Eo.onclick=async()=>{gn.close(),Eo.innerText=Eo.textContent="CLOSED!!!",console.log("datachannel closed")};function _1(){fi=new Fn(60,window.innerWidth/window.innerHeight,1,1e3),fi.position.set(0,0,.1),Hl=new l1,pm=document.getElementById("remoteVideo");const n=new h1(pm);n.colorSpace=Bt;const e=new df(100,32,32,0);e.scale(-1,1,1);const t=new lf({map:n}),i=new vi(e,t);Hl.add(i),Ni=new Wy,Ni.setPixelRatio(window.devicePixelRatio),Ni.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(Ni.domElement);const r=new d1(fi,Ni.domElement);r.enableZoom=!0,r.enablePan=!0;const o=(s,a,u)=>Math.max(a,Math.min(s,u));Ni.domElement.addEventListener("wheel",s=>{fi.fov=o(fi.fov+s.deltaY/10,10,120),fi.updateProjectionMatrix()}),window.addEventListener("resize",E1)}function E1(){fi.aspect=window.innerWidth/window.innerHeight,fi.updateProjectionMatrix(),Ni.setSize(window.innerWidth,window.innerHeight)}function Yy(){requestAnimationFrame(Yy),Ni.render(Hl,fi)}
