(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{7387:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let i=r(2430),o=r(1778),n=r(2676),s=o._(r(5271)),l=i._(r(967)),a=i._(r(9384)),u=r(6504),d=r(1588),c=r(4172);r(4267);let f=r(3256),g=i._(r(4083)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,i,o,n,s){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function h(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:o,height:l,width:a,decoding:u,className:d,style:c,fetchPriority:f,placeholder:g,loading:p,unoptimized:v,fill:w,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:x,setShowAltText:S,sizesInput:j,onLoad:z,onError:_,...C}=e;return(0,n.jsx)("img",{...C,...h(f),loading:p,width:a,height:l,decoding:u,"data-nimg":w?"fill":"1",className:d,style:c,sizes:o,srcSet:i,src:r,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&m(e,g,b,y,x,v,j))},[r,g,b,y,x,_,v,j,t]),onLoad:e=>{m(e.currentTarget,g,b,y,x,v,j)},onError:e=>{S(!0),"empty"!==g&&x(!0),_&&_(e)}})});function w(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,i),null):(0,n.jsx)(a.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(f.RouterContext),i=(0,s.useContext)(c.ImageConfigContext),o=(0,s.useMemo)(()=>{let e=p||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:l,onLoadingComplete:a}=e,m=(0,s.useRef)(l);(0,s.useEffect)(()=>{m.current=l},[l]);let h=(0,s.useRef)(a);(0,s.useEffect)(()=>{h.current=a},[a]);let[b,y]=(0,s.useState)(!1),[x,S]=(0,s.useState)(!1),{props:j,meta:z}=(0,u.getImgProps)(e,{defaultLoader:g.default,imgConf:o,blurComplete:b,showAltText:x});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{...j,unoptimized:z.unoptimized,placeholder:z.placeholder,fill:z.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:S,sizesInput:e.sizes,ref:t}),z.priority?(0,n.jsx)(w,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6504:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(4267);let i=r(2124),o=r(1588);function n(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,a,u,{src:d,sizes:c,unoptimized:f=!1,priority:g=!1,loading:p,className:m,quality:h,width:v,height:w,fill:b=!1,style:y,overrideSrc:x,onLoad:S,onLoadingComplete:j,placeholder:z="empty",blurDataURL:_,fetchPriority:C,layout:E,objectFit:P,objectPosition:R,lazyBoundary:O,lazyRoot:M,...I}=e,{imgConf:k,showAltText:B,blurComplete:N,defaultLoader:A}=t,D=k||o.imageConfigDefault;if("allSizes"in D)l=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);l={...D,allSizes:e,deviceSizes:t}}if(void 0===A)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let V=I.loader||A;delete I.loader,delete I.srcSet;let L="__next_img_default"in V;if(L){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=V;V=t=>{let{config:r,...i}=t;return e(i)}}if(E){"fill"===E&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!c&&(c=t)}let F="",G=s(v),H=s(w);if("object"==typeof(r=d)&&(n(r)||void 0!==r.src)){let e=n(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,_=_||e.blurDataURL,F=e.src,!b){if(G||H){if(G&&!H){let t=G/e.width;H=Math.round(e.height*t)}else if(!G&&H){let t=H/e.height;G=Math.round(e.width*t)}}else G=e.width,H=e.height}}let W=!g&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:F)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,W=!1),l.unoptimized&&(f=!0),L&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),g&&(C="high");let T=s(h),U=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:R}:{},B?{}:{color:"transparent"},y),Z=N||"empty"===z?null:"blur"===z?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:G,heightInt:H,blurWidth:a,blurHeight:u,blurDataURL:_||"",objectFit:U.objectFit})+'")':'url("'+z+'")',q=Z?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Z}:{},J=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:n,sizes:s,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,s),d=a.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:a.map((e,i)=>l({config:t,src:r,quality:n,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:l({config:t,src:r,quality:n,width:a[d]})}}({config:l,src:d,unoptimized:f,width:G,quality:T,sizes:c,loader:V});return{props:{...I,loading:W?"lazy":p,fetchPriority:C,width:G,height:H,decoding:"async",className:m,style:{...U,...q},sizes:J.sizes,srcSet:J.srcSet,src:x||J.src},meta:{unoptimized:f,priority:g,placeholder:z,fill:b}}}},2124:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:n,objectFit:s}=e,l=i?40*i:t,a=o?40*o:r,u=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},8797:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return l}});let i=r(2430),o=r(6504),n=r(7387),s=i._(r(4083));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=n.Image},4083:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},9124:function(e,t,r){e.exports=r(9384)},2195:function(e,t,r){e.exports=r(8797)},3058:function(e,t,r){"use strict";var i=r(5271);let o=i.forwardRef(function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"}))});t.Z=o},687:function(e,t,r){"use strict";var i=r(5271);let o=i.forwardRef(function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"}))});t.Z=o},4610:function(e,t,r){"use strict";var i=r(5271);let o=i.forwardRef(function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"}))});t.Z=o}}]);