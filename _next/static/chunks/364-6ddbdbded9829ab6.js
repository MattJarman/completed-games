(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{1633:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=n(3236))&&i.__esModule?i:{default:i},u=n(5217),l=n(7810),s=n(6587);function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f={};function d(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var p=a.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,i=void 0===r?!0!==Boolean(!1):r,p=e.href,m=e.as,v=e.children,h=e.prefetch,g=e.passHref,b=e.replace,y=e.shallow,E=e.scroll,w=e.locale,x=e.onClick,I=e.onMouseEnter,R=c(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=v,i&&"string"===typeof n&&(n=a.default.createElement("a",null,n));var S,T=!1!==h,M=l.useRouter(),L=a.default.useMemo((function(){var e=o(u.resolveHref(M,p,!0),2),t=e[0],n=e[1];return{href:t,as:m?u.resolveHref(M,m):n||t}}),[M,p,m]),C=L.href,O=L.as,P=a.default.useRef(C),N=a.default.useRef(O);i&&(S=a.default.Children.only(n));var k=i?S&&"object"===typeof S&&S.ref:t,A=o(s.useIntersection({rootMargin:"200px"}),3),F=A[0],D=A[1],j=A[2],H=a.default.useCallback((function(e){N.current===O&&P.current===C||(j(),N.current=O,P.current=C),F(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[O,k,C,j,F]);a.default.useEffect((function(){var e=D&&T&&u.isLocalURL(C),t="undefined"!==typeof w?w:M&&M.locale,n=f[C+"%"+O+(t?"%"+t:"")];e&&!n&&d(M,C,O,{locale:t})}),[O,C,D,w,T,M]);var U={ref:H,onClick:function(e){i||"function"!==typeof x||x(e),i&&S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:a}))}(e,M,C,O,b,y,E,w)},onMouseEnter:function(e){i||"function"!==typeof I||I(e),i&&S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),u.isLocalURL(C)&&d(M,C,O,{priority:!0})}};if(!i||g||"a"===S.type&&!("href"in S.props)){var z="undefined"!==typeof w?w:M&&M.locale,_=M&&M.isLocaleDomain&&u.getDomainLocale(O,z,M&&M.locales,M&&M.domainLocales);U.href=_||u.addBasePath(u.addLocale(O,z,M&&M.defaultLocale))}return i?a.default.cloneElement(S,U):a.default.createElement("a",Object.assign({},R,U),n)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1773:function(e,t,n){e.exports=n(1633)},8781:function(e,t,n){"use strict";n.d(t,{u:function(){return N}});var r=n(3236);const o=new Set,i=new WeakMap,a=new WeakMap,u=new WeakMap,l=new WeakMap,s=new WeakMap,c=new WeakMap,f=new WeakMap,d=new WeakSet;let p;const m="__aa_tgt",v="__aa_del",h=e=>{const t=function(e){const t=e.reduce(((e,t)=>[...e,...Array.from(t.addedNodes),...Array.from(t.removedNodes)]),[]);return!t.every((e=>"#comment"===e.nodeName))&&e.reduce(((e,t)=>{if(!1===e)return!1;if(t.target instanceof Element){if(I(t.target),!e.has(t.target)){e.add(t.target);for(let n=0;n<t.target.children.length;n++){const r=t.target.children.item(n);if(r){if(v in r)return!1;I(t.target,r),e.add(r)}}}if(t.removedNodes.length)for(let n=0;n<t.removedNodes.length;n++){const r=t.removedNodes[n];if(v in r)return!1;r instanceof Element&&(e.add(r),I(t.target,r),a.set(r,[t.previousSibling,t.nextSibling]))}}return e}),new Set)}(e);t&&t.forEach((e=>function(e){var t;const n=p.contains(e),r=i.has(e);n&&a.has(e)&&a.delete(e);u.has(e)&&(null===(t=u.get(e))||void 0===t||t.cancel());r&&n?function(e){const t=i.get(e),n=S(e);if(!C(e))return i.set(e,n);let r;if(!t)return;const o=M(e);if("function"!==typeof o){const i=t.left-n.left,a=t.top-n.top,[u,l,s,c]=T(e,t,n),f={transform:`translate(${i}px, ${a}px)`},d={transform:"translate(0, 0)"};u!==l&&(f.width=`${u}px`,d.width=`${l}px`),s!==c&&(f.height=`${s}px`,d.height=`${c}px`),r=e.animate([f,d],{duration:o.duration,easing:o.easing})}else r=new Animation(o(e,"remain",t,n)),r.play();u.set(e,r),i.set(e,n),r.addEventListener("finish",b.bind(null,e))}(e):r&&!n?function(e){var t;if(!a.has(e)||!i.has(e))return;const[n,r]=a.get(e);Object.defineProperty(e,v,{value:!0}),r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(e,r):n&&n.parentNode?n.parentNode.appendChild(e):null===(t=L(e))||void 0===t||t.appendChild(e);function o(){var t;e.remove(),i.delete(e),a.delete(e),u.delete(e),null===(t=l.get(e))||void 0===t||t.disconnect()}if(!C(e))return o();const[s,c,f,d]=function(e){const t=i.get(e),[n,,r]=T(e,t,S(e));let o=e.parentElement;for(;o&&("static"===getComputedStyle(o).position||o instanceof HTMLBodyElement);)o=o.parentElement;o||(o=document.body);const a=getComputedStyle(o),u=i.get(o)||S(o),l=Math.round(t.top-u.top)-R(a.borderTopWidth),s=Math.round(t.left-u.left)-R(a.borderLeftWidth);return[l,s,n,r]}(e),p=M(e),m=i.get(e);let h;Object.assign(e.style,{position:"absolute",top:`${s}px`,left:`${c}px`,width:`${f}px`,height:`${d}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),"function"!==typeof p?h=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:p.duration,easing:"ease-out"}):(h=new Animation(p(e,"remove",m)),h.play());u.set(e,h),h.addEventListener("finish",o)}(e):function(e){const t=S(e);i.set(e,t);const n=M(e);if(!C(e))return;let r;"function"!==typeof n?r=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*n.duration,easing:"ease-in"}):(r=new Animation(n(e,"add",t)),r.play());u.set(e,r),r.addEventListener("finish",b.bind(null,e))}(e)}(e)))},g=e=>{e.forEach((e=>{e.target===p&&(clearTimeout(f.get(p)),f.set(p,setTimeout((()=>{o.forEach((e=>O(e,(e=>E((()=>b(e)))))))}),100))),i.has(e.target)&&b(e.target)}))};function b(e){clearTimeout(f.get(e));const t=M(e),n="function"===typeof t?500:t.duration;f.set(e,setTimeout((async()=>{const t=u.get(e);t&&!(await t.finished)||(i.set(e,S(e)),function(e){const t=l.get(e);null===t||void 0===t||t.disconnect();let n=i.get(e),r=0;n||(n=S(e),i.set(e,n));const{offsetWidth:o,offsetHeight:a}=p,u=[n.top-5,o-(n.left+5+n.width),a-(n.top+5+n.height),n.left-5].map((e=>-1*Math.floor(e)+"px")).join(" "),s=new IntersectionObserver((()=>{++r>1&&b(e)}),{root:p,threshold:1,rootMargin:u});s.observe(e),l.set(e,s)}(e))}),n))}function y(e){setTimeout((()=>{s.set(e,setInterval((()=>E(b.bind(null,e))),2e3))}),Math.round(2e3*Math.random()))}function E(e){"function"===typeof requestIdleCallback?requestIdleCallback((()=>e())):requestAnimationFrame((()=>e()))}let w,x;function I(e,t){t||m in e?t&&!(m in t)&&Object.defineProperty(t,m,{value:e}):Object.defineProperty(e,m,{value:e})}function R(e){return Number(e.replace(/[^0-9.\-]/g,""))}function S(e){const t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}}function T(e,t,n){let r=t.width,o=t.height,i=n.width,a=n.height;const u=getComputedStyle(e);if("content-box"===u.getPropertyValue("box-sizing")){const e=R(u.paddingTop)+R(u.paddingBottom)+R(u.borderTopWidth)+R(u.borderBottomWidth),t=R(u.paddingLeft)+R(u.paddingRight)+R(u.borderRightWidth)+R(u.borderLeftWidth);r-=t,i-=t,o-=e,a-=e}return[r,i,o,a].map(Math.round)}function M(e){return m in e&&c.has(e[m])?c.get(e[m]):{duration:250,easing:"ease-in-out"}}function L(e){if(m in e)return e[m]}function C(e){const t=L(e);return!!t&&d.has(t)}function O(e,...t){t.forEach((t=>t(e,c.has(e))));for(let n=0;n<e.children.length;n++){const r=e.children.item(n);r&&t.forEach((e=>e(r,c.has(r))))}}function P(e,t={}){if(w&&x){window.matchMedia("(prefers-reduced-motion: reduce)").matches&&"function"!==typeof t&&!t.disrespectUserMotionPreference||(d.add(e),"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),O(e,b,y,(e=>null===x||void 0===x?void 0:x.observe(e))),"function"===typeof t?c.set(e,t):c.set(e,{duration:250,easing:"ease-in-out",...t}),w.observe(e,{childList:!0}),o.add(e))}return Object.freeze({parent:e,enable:()=>{d.add(e)},disable:()=>{d.delete(e)},isEnabled:()=>d.has(e)})}"undefined"!==typeof window&&(p=document.documentElement,w=new MutationObserver(h),x=new ResizeObserver(g),x.observe(p));function N(e){const t=(0,r.useRef)(null),[n,o]=(0,r.useState)();return(0,r.useEffect)((()=>{t.current instanceof HTMLElement&&o(P(t.current,e||{}))}),[]),[t,e=>{n&&(e?n.enable():n.disable())}]}},6928:function(e,t,n){"use strict";n.d(t,{v:function(){return Y}});var r=n(3236),o=n(5293),i=n(9649),a=n(2501),u=n(593),l=n(2690),s=n(3498),c=n(6782),f=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(f||{});var d,p=((d=p||{})[d.First=0]="First",d[d.Previous=1]="Previous",d[d.Next=2]="Next",d[d.Last=3]="Last",d[d.Specific=4]="Specific",d[d.Nothing=5]="Nothing",d);function m(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=null!=r?r:-1,i=(()=>{switch(e.focus){case 0:return n.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=n.slice().reverse().findIndex(((e,n,r)=>!(-1!==o&&r.length-n-1>=o)&&!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 2:return n.findIndex(((e,n)=>!(n<=o)&&!t.resolveDisabled(e)));case 3:{let e=n.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 4:return n.findIndex((n=>t.resolveId(n)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===i?r:i}function v(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}function h(e){return"undefined"==typeof window?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let g=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var b,y,E,w=((E=w||{})[E.First=1]="First",E[E.Previous=2]="Previous",E[E.Next=4]="Next",E[E.Last=8]="Last",E[E.WrapAround=16]="WrapAround",E[E.NoScroll=32]="NoScroll",E),x=((y=x||{})[y.Error=0]="Error",y[y.Overflow=1]="Overflow",y[y.Success=2]="Success",y[y.Underflow=3]="Underflow",y),I=((b=I||{})[b.Previous=-1]="Previous",b[b.Next=1]="Next",b);var R=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(R||{});function S(e,t=0){var n;return e!==(null==(n=h(e))?void 0:n.body)&&(0,o.E)(t,{0:()=>e.matches(g),1(){let t=e;for(;null!==t;){if(t.matches(g))return!0;t=t.parentElement}return!1}})}["textarea","input"].join(",");function T(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}var M=n(3667);function L(e,t,n){let o=(0,M.E)(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}function C(e,t,n=!0){let o=(0,r.useRef)(!1);function i(n,r){if(!o.current||n.defaultPrevented)return;let i=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),a=r(n);if(null!==a&&a.ownerDocument.documentElement.contains(a)){for(let e of i){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(a))return}return!S(a,R.Loose)&&-1!==a.tabIndex&&n.preventDefault(),t(n,a)}}(0,r.useEffect)((()=>{requestAnimationFrame((()=>{o.current=n}))}),[n]),L("click",(e=>i(e,(e=>e.target))),!0),L("blur",(e=>i(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}var O=n(7634);function P(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function N(e,t){let[n,o]=(0,r.useState)((()=>P(e)));return(0,l.e)((()=>{o(P(e))}),[e.type,e.as]),(0,l.e)((()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")}),[n,t]),n}var k,A=n(2042),F=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(F||{}),D=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(D||{}),j=((k=j||{})[k.OpenMenu=0]="OpenMenu",k[k.CloseMenu=1]="CloseMenu",k[k.GoToItem=2]="GoToItem",k[k.Search=3]="Search",k[k.ClearSearch=4]="ClearSearch",k[k.RegisterItem=5]="RegisterItem",k[k.UnregisterItem=6]="UnregisterItem",k);function H(e,t=(e=>e)){let n=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,r=T(t(e.items.slice()),(e=>e.dataRef.current.domRef.current)),o=n?r.indexOf(n):null;return-1===o&&(o=null),{items:r,activeItemIndex:o}}let U={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,t)=>{var n;let r=H(e),o=m(t,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:o,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),o=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find((e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))&&!e.dataRef.current.disabled})),i=o?e.items.indexOf(o):-1;return-1===i||i===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:i,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let n=H(e,(e=>[...e,{id:t.id,dataRef:t.dataRef}]));return{...e,...n}},6:(e,t)=>{let n=H(e,(e=>{let n=e.findIndex((e=>e.id===t.id));return-1!==n&&e.splice(n,1),e}));return{...e,...n,activationTrigger:1}}},z=(0,r.createContext)(null);function _(e){let t=(0,r.useContext)(z);if(null===t){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,_),t}return t}function W(e,t){return(0,o.E)(t.type,U,e,t)}z.displayName="MenuContext";let $=r.Fragment,B=(0,i.yV)((function(e,t){let n=(0,r.useReducer)(W,{menuState:1,buttonRef:(0,r.createRef)(),itemsRef:(0,r.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:u,buttonRef:l},c]=n,f=(0,s.T)(t);C([l,u],((e,t)=>{var n;c({type:1}),S(t,R.Loose)||(e.preventDefault(),null==(n=l.current)||n.focus())}),0===a);let d=(0,r.useMemo)((()=>({open:0===a})),[a]),p=e,m={ref:f};return r.createElement(z.Provider,{value:n},r.createElement(O.up,{value:(0,o.E)(a,{0:O.ZM.Open,1:O.ZM.Closed})},(0,i.sY)({ourProps:m,theirProps:p,slot:d,defaultTag:$,name:"Menu"})))})),V=(0,i.yV)((function(e,t){var n;let[o,a]=_("Menu.Button"),l=(0,s.T)(o.buttonRef,t),d=`headlessui-menu-button-${(0,c.M)()}`,m=(0,u.G)(),h=(0,A.z)((e=>{switch(e.key){case f.Space:case f.Enter:case f.ArrowDown:e.preventDefault(),e.stopPropagation(),a({type:0}),m.nextFrame((()=>a({type:2,focus:p.First})));break;case f.ArrowUp:e.preventDefault(),e.stopPropagation(),a({type:0}),m.nextFrame((()=>a({type:2,focus:p.Last})))}})),g=(0,A.z)((e=>{if(e.key===f.Space)e.preventDefault()})),b=(0,A.z)((t=>{if(v(t.currentTarget))return t.preventDefault();e.disabled||(0===o.menuState?(a({type:1}),m.nextFrame((()=>{var e;return null==(e=o.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(t.preventDefault(),a({type:0})))})),y=(0,r.useMemo)((()=>({open:0===o.menuState})),[o]),E=e,w={ref:l,id:d,type:N(e,o.buttonRef),"aria-haspopup":!0,"aria-controls":null==(n=o.itemsRef.current)?void 0:n.id,"aria-expanded":e.disabled?void 0:0===o.menuState,onKeyDown:h,onKeyUp:g,onClick:b};return(0,i.sY)({ourProps:w,theirProps:E,slot:y,defaultTag:"button",name:"Menu.Button"})})),q=i.AN.RenderStrategy|i.AN.Static,Z=(0,i.yV)((function(e,t){var n,o;let[d,m]=_("Menu.Items"),v=(0,s.T)(d.itemsRef,t),g=function(...e){return(0,r.useMemo)((()=>h(...e)),[...e])}(d.itemsRef),b=`headlessui-menu-items-${(0,c.M)()}`,y=(0,u.G)(),E=(0,O.oJ)(),w=null!==E?E===O.ZM.Open:0===d.menuState;(0,r.useEffect)((()=>{let e=d.itemsRef.current;!e||0===d.menuState&&e!==(null==g?void 0:g.activeElement)&&e.focus({preventScroll:!0})}),[d.menuState,d.itemsRef,g]),function({container:e,accept:t,walk:n,enabled:o=!0}){let i=(0,r.useRef)(t),a=(0,r.useRef)(n);(0,r.useEffect)((()=>{i.current=t,a.current=n}),[t,n]),(0,l.e)((()=>{if(!e||!o)return;let t=h(e);if(!t)return;let n=i.current,r=a.current,u=Object.assign((e=>n(e)),{acceptNode:n}),l=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,u,!1);for(;l.nextNode();)r(l.currentNode)}),[e,o,i,a])}({container:d.itemsRef.current,enabled:0===d.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let x=(0,A.z)((e=>{var t,n;switch(y.dispose(),e.key){case f.Space:if(""!==d.searchQuery)return e.preventDefault(),e.stopPropagation(),m({type:3,value:e.key});case f.Enter:if(e.preventDefault(),e.stopPropagation(),m({type:1}),null!==d.activeItemIndex){let{dataRef:e}=d.items[d.activeItemIndex];null==(n=null==(t=e.current)?void 0:t.domRef.current)||n.click()}(0,a.k)().nextFrame((()=>{var e;return null==(e=d.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case f.ArrowDown:return e.preventDefault(),e.stopPropagation(),m({type:2,focus:p.Next});case f.ArrowUp:return e.preventDefault(),e.stopPropagation(),m({type:2,focus:p.Previous});case f.Home:case f.PageUp:return e.preventDefault(),e.stopPropagation(),m({type:2,focus:p.First});case f.End:case f.PageDown:return e.preventDefault(),e.stopPropagation(),m({type:2,focus:p.Last});case f.Escape:e.preventDefault(),e.stopPropagation(),m({type:1}),(0,a.k)().nextFrame((()=>{var e;return null==(e=d.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case f.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(m({type:3,value:e.key}),y.setTimeout((()=>m({type:4})),350))}})),I=(0,A.z)((e=>{if(e.key===f.Space)e.preventDefault()})),R=(0,r.useMemo)((()=>({open:0===d.menuState})),[d]),S=e,T={"aria-activedescendant":null===d.activeItemIndex||null==(n=d.items[d.activeItemIndex])?void 0:n.id,"aria-labelledby":null==(o=d.buttonRef.current)?void 0:o.id,id:b,onKeyDown:x,onKeyUp:I,role:"menu",tabIndex:0,ref:v};return(0,i.sY)({ourProps:T,theirProps:S,slot:R,defaultTag:"div",features:q,visible:w,name:"Menu.Items"})})),Q=r.Fragment,K=(0,i.yV)((function(e,t){let{disabled:n=!1,...o}=e,[u,f]=_("Menu.Item"),d=`headlessui-menu-item-${(0,c.M)()}`,m=null!==u.activeItemIndex&&u.items[u.activeItemIndex].id===d,v=(0,r.useRef)(null),h=(0,s.T)(t,v);(0,l.e)((()=>{if(0!==u.menuState||!m||0===u.activationTrigger)return;let e=(0,a.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=v.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[v,m,u.menuState,u.activationTrigger,u.activeItemIndex]);let g=(0,r.useRef)({disabled:n,domRef:v});(0,l.e)((()=>{g.current.disabled=n}),[g,n]),(0,l.e)((()=>{var e,t;g.current.textValue=null==(t=null==(e=v.current)?void 0:e.textContent)?void 0:t.toLowerCase()}),[g,v]),(0,l.e)((()=>(f({type:5,id:d,dataRef:g}),()=>f({type:6,id:d}))),[g,d]);let b=(0,A.z)((e=>{if(n)return e.preventDefault();f({type:1}),(0,a.k)().nextFrame((()=>{var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))})),y=(0,A.z)((()=>{if(n)return f({type:2,focus:p.Nothing});f({type:2,focus:p.Specific,id:d})})),E=(0,A.z)((()=>{n||m||f({type:2,focus:p.Specific,id:d,trigger:0})})),w=(0,A.z)((()=>{n||!m||f({type:2,focus:p.Nothing})})),x=(0,r.useMemo)((()=>({active:m,disabled:n})),[m,n]);return(0,i.sY)({ourProps:{id:d,ref:h,role:"menuitem",tabIndex:!0===n?void 0:-1,"aria-disabled":!0===n||void 0,disabled:void 0,onClick:b,onFocus:y,onPointerMove:E,onMouseMove:E,onPointerLeave:w,onMouseLeave:w},theirProps:o,slot:x,defaultTag:Q,name:"Menu.Item"})})),Y=Object.assign(B,{Button:V,Items:Z,Item:K})},6944:function(e,t,n){"use strict";n.d(t,{u:function(){return D}});var r=n(3236),o=n(9649),i=n(7634),a=n(5293);var u=n(6782),l=n(2690);function s(){let e=(0,r.useRef)(!1);return(0,l.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var c=n(3667),f=n(3501),d=n(3498);var p=n(2501);function m(e,...t){e&&t.length>0&&e.classList.add(...t)}function v(e,...t){e&&t.length>0&&e.classList.remove(...t)}var h,g=((h=g||{}).Ended="ended",h.Cancelled="cancelled",h);function b(e,t,n,r){let o=n?"enter":"leave",i=(0,p.k)(),u=void 0!==r?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(r):()=>{},l=(0,a.E)(o,{enter:()=>t.enter,leave:()=>t.leave}),s=(0,a.E)(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=(0,a.E)(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return v(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),m(e,...l,...c),i.nextFrame((()=>{v(e,...c),m(e,...s),function(e,t){let n=(0,p.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[i,a]=[r,o].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t}));if(i+a!==0){let r=[];r.push(n.addEventListener(e,"transitionrun",(o=>{o.target===o.currentTarget&&(r.splice(0).forEach((e=>e())),r.push(n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t("ended"),r.splice(0).forEach((e=>e())))})),n.addEventListener(e,"transitioncancel",(e=>{e.target===e.currentTarget&&(t("cancelled"),r.splice(0).forEach((e=>e())))}))))})))}else t("ended");n.add((()=>t("cancelled"))),n.dispose}(e,(n=>("ended"===n&&(v(e,...l),m(e,...t.entered)),u(n))))})),i.dispose}var y=n(593),E=n(2042);function w({container:e,direction:t,classes:n,events:r,onStart:o,onStop:i}){let u=s(),f=(0,y.G)(),d=(0,c.E)(t),m=(0,E.z)((()=>(0,a.E)(d.current,{enter:()=>r.current.beforeEnter(),leave:()=>r.current.beforeLeave(),idle:()=>{}}))),v=(0,E.z)((()=>(0,a.E)(d.current,{enter:()=>r.current.afterEnter(),leave:()=>r.current.afterLeave(),idle:()=>{}})));(0,l.e)((()=>{let t=(0,p.k)();f.add(t.dispose);let r=e.current;if(r&&"idle"!==d.current&&u.current)return t.dispose(),m(),o.current(d.current),t.add(b(r,n.current,"enter"===d.current,(e=>{t.dispose(),(0,a.E)(e,{[g.Ended](){v(),i.current(d.current)},[g.Cancelled]:()=>{}})}))),t.dispose}),[t])}function x(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let I=(0,r.createContext)(null);I.displayName="TransitionContext";var R,S=((R=S||{}).Visible="visible",R.Hidden="hidden",R);let T=(0,r.createContext)(null);function M(e){return"children"in e?M(e.children):e.current.filter((({state:e})=>"visible"===e)).length>0}function L(e){let t=(0,c.E)(e),n=(0,r.useRef)([]),i=s(),u=(0,E.z)(((e,r=o.l4.Hidden)=>{let u=n.current.findIndex((({id:t})=>t===e));-1!==u&&((0,a.E)(r,{[o.l4.Unmount](){n.current.splice(u,1)},[o.l4.Hidden](){n.current[u].state="hidden"}}),function(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}((()=>{var e;!M(n)&&i.current&&(null==(e=t.current)||e.call(t))})))})),l=(0,E.z)((e=>{let t=n.current.find((({id:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):n.current.push({id:e,state:"visible"}),()=>u(e,o.l4.Unmount)}));return(0,r.useMemo)((()=>({children:n,register:l,unregister:u})),[l,u,n])}function C(){}T.displayName="NestingContext";let O=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function P(e){var t;let n={};for(let r of O)n[r]=null!=(t=e[r])?t:C;return n}let N=o.AN.RenderStrategy,k=(0,o.yV)((function(e,t){let{beforeEnter:n,afterEnter:l,beforeLeave:s,afterLeave:p,enter:m,enterFrom:v,enterTo:h,entered:g,leave:b,leaveFrom:y,leaveTo:E,...R}=e,S=(0,r.useRef)(null),C=(0,d.T)(S,t),[O,k]=(0,r.useState)("visible"),A=R.unmount?o.l4.Unmount:o.l4.Hidden,{show:F,appear:D,initial:j}=function(){let e=(0,r.useContext)(I);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:H,unregister:U}=function(){let e=(0,r.useContext)(T);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),z=(0,r.useRef)(null),_=(0,u.M)();(0,r.useEffect)((()=>{if(_)return H(_)}),[H,_]),(0,r.useEffect)((()=>{if(A===o.l4.Hidden&&_){if(F&&"visible"!==O)return void k("visible");(0,a.E)(O,{hidden:()=>U(_),visible:()=>H(_)})}}),[O,_,H,U,F,A]);let W=(0,c.E)({enter:x(m),enterFrom:x(v),enterTo:x(h),entered:x(g),leave:x(b),leaveFrom:x(y),leaveTo:x(E)}),$=function(e){let t=(0,r.useRef)(P(e));return(0,r.useEffect)((()=>{t.current=P(e)}),[e]),t}({beforeEnter:n,afterEnter:l,beforeLeave:s,afterLeave:p}),B=(0,f.H)();(0,r.useEffect)((()=>{if(B&&"visible"===O&&null===S.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[S,O,B]);let V=j&&!D,q=!B||V||z.current===F?"idle":F?"enter":"leave",Z=(0,r.useRef)(!1),Q=L((()=>{Z.current||(k("hidden"),U(_))}));w({container:S,classes:W,events:$,direction:q,onStart:(0,c.E)((()=>{Z.current=!0})),onStop:(0,c.E)((e=>{Z.current=!1,"leave"===e&&!M(Q)&&(k("hidden"),U(_))}))}),(0,r.useEffect)((()=>{!V||(A===o.l4.Hidden?z.current=null:z.current=F)}),[F,V,O]);let K=R,Y={ref:C};return r.createElement(T.Provider,{value:Q},r.createElement(i.up,{value:(0,a.E)(O,{visible:i.ZM.Open,hidden:i.ZM.Closed})},(0,o.sY)({ourProps:Y,theirProps:K,defaultTag:"div",features:N,visible:"visible"===O,name:"Transition.Child"})))})),A=(0,o.yV)((function(e,t){let{show:n,appear:u=!1,unmount:s,...c}=e,p=(0,r.useRef)(null),m=(0,d.T)(p,t);(0,f.H)();let v=(0,i.oJ)();if(void 0===n&&null!==v&&(n=(0,a.E)(v,{[i.ZM.Open]:!0,[i.ZM.Closed]:!1})),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[h,g]=(0,r.useState)(n?"visible":"hidden"),b=L((()=>{g("hidden")})),[y,E]=(0,r.useState)(!0),w=(0,r.useRef)([n]);(0,l.e)((()=>{!1!==y&&w.current[w.current.length-1]!==n&&(w.current.push(n),E(!1))}),[w,n]);let x=(0,r.useMemo)((()=>({show:n,appear:u,initial:y})),[n,u,y]);(0,r.useEffect)((()=>{if(n)g("visible");else if(M(b)){let e=p.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&g("hidden")}else g("hidden")}),[n,b]);let R={unmount:s};return r.createElement(T.Provider,{value:b},r.createElement(I.Provider,{value:x},(0,o.sY)({ourProps:{...R,as:r.Fragment,children:r.createElement(k,{ref:m,...R,...c})},theirProps:{},defaultTag:r.Fragment,features:N,visible:"visible"===h,name:"Transition"})))})),F=(0,o.yV)((function(e,t){let n=null!==(0,r.useContext)(I),o=null!==(0,i.oJ)();return r.createElement(r.Fragment,null,!n&&o?r.createElement(A,{ref:t,...e}):r.createElement(k,{ref:t,...e}))})),D=Object.assign(A,{Child:F,Root:A})},593:function(e,t,n){"use strict";n.d(t,{G:function(){return i}});var r=n(3236),o=n(2501);function i(){let[e]=(0,r.useState)(o.k);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}},2042:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=n(3236),o=n(3667);let i=function(e){let t=(0,o.E)(e);return r.useCallback(((...e)=>t.current(...e)),[t])}},6782:function(e,t,n){"use strict";n.d(t,{M:function(){return s}});var r,o=n(3236),i=n(2690),a=n(3501);let u=0;function l(){return++u}let s=null!=(r=o.useId)?r:function(){let e=(0,a.H)(),[t,n]=o.useState(e?l:null);return(0,i.e)((()=>{null===t&&n(l())}),[t]),null!=t?""+t:void 0}},2690:function(e,t,n){"use strict";n.d(t,{e:function(){return o}});var r=n(3236);let o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},3667:function(e,t,n){"use strict";n.d(t,{E:function(){return i}});var r=n(3236),o=n(2690);function i(e){let t=(0,r.useRef)(e);return(0,o.e)((()=>{t.current=e}),[e]),t}},3501:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});var r=n(3236);let o={serverHandoffComplete:!1};function i(){let[e,t]=(0,r.useState)(o.serverHandoffComplete);return(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>{!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),e}},3498:function(e,t,n){"use strict";n.d(t,{T:function(){return a}});var r=n(3236),o=n(2042);let i=Symbol();function a(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,o.z)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[i])))?void 0:n}},7634:function(e,t,n){"use strict";n.d(t,{ZM:function(){return a},oJ:function(){return u},up:function(){return l}});var r=n(3236);let o=(0,r.createContext)(null);o.displayName="OpenClosedContext";var i,a=((i=a||{})[i.Open=0]="Open",i[i.Closed=1]="Closed",i);function u(){return(0,r.useContext)(o)}function l({value:e,children:t}){return r.createElement(o.Provider,{value:e},t)}},2501:function(e,t,n){"use strict";function r(){let e=[],t=[],n={enqueue(e){t.push(e)},addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add((()=>e.removeEventListener(t,r,o)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>n.requestAnimationFrame((()=>n.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return n.add((()=>clearTimeout(t)))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[t]=e.splice(n,1);t()}}),dispose(){for(let t of e.splice(0))t()},async workQueue(){for(let e of t.splice(0))await e()}};return n}n.d(t,{k:function(){return r}})},5293:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:function(){return r}})},9649:function(e,t,n){"use strict";n.d(t,{AN:function(){return u},l4:function(){return l},sY:function(){return s},yV:function(){return d}});var r,o,i=n(3236),a=n(5293),u=((o=u||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),l=((r=l||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function s({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:u}){let l=f(t,e);if(i)return c(l,n,r,u);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=l;if(e)return c(t,n,r,u)}if(1&s){let{unmount:e=!0,...t}=l;return(0,a.E)(e?0:1,{0:()=>null,1:()=>c({...t,hidden:!0,style:{display:"none"}},n,r,u)})}return c(l,n,r,u)}function c(e,t={},n,r){let{as:o=n,children:a,refName:u="ref",...l}=m(e,["unmount","static"]),s=void 0!==e.ref?{[u]:e.ref}:{},c="function"==typeof a?a(t):a;l.className&&"function"==typeof l.className&&(l.className=l.className(t));let d={};if(o===i.Fragment&&Object.keys(p(l)).length>0){if(!(0,i.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,i.cloneElement)(c,Object.assign({},f(c.props,p(m(l,["ref"]))),d,s))}return(0,i.createElement)(o,Object.assign({},m(l,["ref"]),o!==i.Fragment&&s,o!==i.Fragment&&d),c)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let o=n[r];for(let n of o){if(e.defaultPrevented)return;n(e,...t)}}});return t}function d(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function m(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}},3444:function(e,t,n){"use strict";var r=n(3236);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}));t.Z=o},9033:function(e,t,n){"use strict";var r=n(3236);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.Z=o},2778:function(e,t,n){"use strict";var r=n(3236);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}))}));t.Z=o},3053:function(e,t,n){"use strict";var r=n(3236);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z",clipRule:"evenodd"}))}));t.Z=o}}]);