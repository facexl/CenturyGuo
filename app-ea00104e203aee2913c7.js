webpackJsonp([0xd2a57dc1d883],{67:function(e,n){"use strict";function o(e,n,o){var t=r.map(function(o){if(o.plugin[e]){var t=o.plugin[e](n,o.options);return t}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:o?[o]:[]}function t(e,n,o){return r.reduce(function(o,t){return t.plugin[e]?o.then(function(){return t.plugin[e](n,t.options)}):o},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=t;var r=[]},181:function(e,n,o){"use strict";n.components={"component---src-pages-posts-js":o(292),"component---src-templates-post-js":o(293),"component---src-pages-404-js":o(290),"component---src-pages-index-js":o(291)},n.json={"layout-index.json":o(294),"posts-静心打磨手中利刃.json":o(326),"posts-node.json":o(305),"posts-docker.json":o(301),"posts-promise.json":o(308),"posts-es.json":o(304),"posts-react.json":o(309),"posts-redux.json":o(312),"posts-webpack.json":o(322),"posts-wepy.json":o(323),"posts-小程序.json":o(325),"posts-translate.json":o(315),"posts-overreacted.json":o(306),"posts-egg.json":o(303),"posts-calm-to-polish-sword-express.json":o(299),"posts-calm-to-polish-sword-ghost-to-passport.json":o(300),"posts-docker-my-fontend-project.json":o(302),"posts-pre-deep-into-egg-core.json":o(307),"posts-read-code-es-promise-polyfill.json":o(310),"posts-read-react-redux.json":o(311),"posts-settle-react-es-6.json":o(313),"posts-shallow-into-wepy-source-code.json":o(314),"posts-translate-overreacted-how-does-react-tell-a-class-from-a-function.json":o(316),"posts-translate-overreacted-how-does-setstate-know-what-to-do.json":o(317),"posts-translate-overreacted-my-wishlist-for-hot-reloading.json":o(318),"posts-translate-overreacted-optimized-for-change.json":o(319),"posts-translate-overreacted-why-do-react-elements-have-typeof-property.json":o(320),"posts-translate-overreacted-why-do-we-write-super-props.json":o(321),"posts-what-make-rules-of-directory-for-egg-project.json":o(324),"404.json":o(295),"index.json":o(297),"posts.json":o(298),"404-html.json":o(296)},n.layouts={"layout---index":o(289)}},182:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function s(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},c=o(2),i=t(c),l=o(7),p=t(l),d=o(112),f=t(d),m=o(49),h=t(m),g=o(67),y=o(425),j=t(y),v=function(e){var n=e.children;return i.default.createElement("div",null,n())},x=function(e){function n(o){r(this,n);var t=a(this,e.call(this)),s=o.location;return f.default.getPage(s.pathname)||(s=u({},s,{pathname:"/404.html"})),t.state={location:s,pageResources:f.default.getResourcesForPathname(s.pathname)},t}return s(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var o=f.default.getResourcesForPathname(e.location.pathname);if(o)this.setState({location:e.location,pageResources:o});else{var t=e.location;f.default.getPage(t.pathname)||(t=u({},t,{pathname:"/404.html"})),f.default.getResourcesForPathname(t.pathname,function(e){n.setState({location:t,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){f.default.getPage(e.state.location.pathname)&&n.page.path===f.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||(!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path)||(0,j.default)(this,e,n)))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:u({},this.props,{pageResources:this.state.pageResources}),loader:d.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,c.createElement)(this.state.pageResources.component,u({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,u({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(i.default.Component);x.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},n.default=x,e.exports=n.default},49:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o(406),a=t(r),s=(0,a.default)();e.exports=s},183:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o(62),a=o(113),s=t(a),u={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),a=(0,s.default)(t,n);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),u[a])return u[a];var c=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return c=e,u[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return c=e,u[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return c=e,u[a]=e,!0}return!1}),c}}},184:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o(177),a=t(r),s=o(67),u=(0,s.apiRunner)("replaceHistory"),c=u[0],i=c||(0,a.default)();e.exports=i},296:function(e,n,o){o(1),e.exports=function(e){return o.e(0xa2868bfb69fc,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(372)})})}},295:function(e,n,o){o(1),e.exports=function(e){return o.e(0xe70826b53c04,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(373)})})}},297:function(e,n,o){o(1),e.exports=function(e){return o.e(0x81b8806e4260,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(374)})})}},294:function(e,n,o){o(1),e.exports=function(e){return o.e(60335399758886,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(109)})})}},299:function(e,n,o){o(1),e.exports=function(e){return o.e(0x61a71c1a9776,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(375)})})}},300:function(e,n,o){o(1),e.exports=function(e){return o.e(0x9db57ea482cf,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(376)})})}},302:function(e,n,o){o(1),e.exports=function(e){return o.e(0x93f63f4199a1,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(377)})})}},301:function(e,n,o){o(1),e.exports=function(e){return o.e(0x630fc95b42bd,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(378)})})}},303:function(e,n,o){o(1),e.exports=function(e){return o.e(0xbcd503076831,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(379)})})}},304:function(e,n,o){o(1),e.exports=function(e){return o.e(0xe6186ce8201c,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(380)})})}},305:function(e,n,o){o(1),e.exports=function(e){return o.e(0x8da08a51a3cc,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(381)})})}},306:function(e,n,o){o(1),e.exports=function(e){return o.e(29362442043640,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(382)})})}},307:function(e,n,o){o(1),e.exports=function(e){return o.e(52675627763808,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(383)})})}},308:function(e,n,o){o(1),e.exports=function(e){return o.e(0xc4ab4d0d9404,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(384)})})}},309:function(e,n,o){o(1),e.exports=function(e){return o.e(34712125554247,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(385)})})}},310:function(e,n,o){o(1),e.exports=function(e){return o.e(0xd6b09dcb5be1,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(386)})})}},311:function(e,n,o){o(1),e.exports=function(e){return o.e(0xf5bda1fd8e90,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(387)})})}},312:function(e,n,o){o(1),e.exports=function(e){return o.e(0x858adef2dab8,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(388)})})}},313:function(e,n,o){o(1),e.exports=function(e){return o.e(54342248932196,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(389)})})}},314:function(e,n,o){o(1),e.exports=function(e){return o.e(0x953c5a151f4d,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(390)})})}},316:function(e,n,o){o(1),e.exports=function(e){return o.e(9756229565306,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(391)})})}},317:function(e,n,o){o(1),e.exports=function(e){return o.e(0xce11357aef0a,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(392)})})}},318:function(e,n,o){o(1),e.exports=function(e){return o.e(39107087938240,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(393)})})}},319:function(e,n,o){o(1),e.exports=function(e){return o.e(28556145262928,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(394)})})}},320:function(e,n,o){o(1),e.exports=function(e){return o.e(99838320125203,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(395)})})}},321:function(e,n,o){o(1),e.exports=function(e){return o.e(60536836248096,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(396)})})}},315:function(e,n,o){o(1),e.exports=function(e){return o.e(0xb812c239b9c7,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(397)})})}},322:function(e,n,o){o(1),e.exports=function(e){return o.e(0xab38b1c4f686,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(398)})})}},323:function(e,n,o){o(1),e.exports=function(e){return o.e(0x8d316447dc3f,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(399)})})}},324:function(e,n,o){o(1),e.exports=function(e){return o.e(0xf4e0ea0707c,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(400)})})}},325:function(e,n,o){o(1),e.exports=function(e){return o.e(0xebff228e3c4d,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(401)})})}},326:function(e,n,o){o(1),e.exports=function(e){return o.e(52128937219153,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(402)})})}},298:function(e,n,o){o(1),e.exports=function(e){return o.e(0x802d931d3bc0,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(403)})})}},289:function(e,n,o){o(1),e.exports=function(e){return o.e(0x67ef26645b2a,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(185)})})}},112:function(e,n,o){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=o(2),a=(t(r),o(183)),s=t(a),u=o(49),c=t(u),i=o(113),l=t(i),p=void 0,d={},f={},m={},h={},g={},y=[],j=[],v={},x="",w=[],C={},N=function(e){return e&&e.default||e},b=void 0,k=!0,R=[],_={},P={},E=5;b=o(186)({getNextQueuedResources:function(){return w.slice(-1)[0]},createResourceDownload:function(e){L(e,function(){w=w.filter(function(n){return n!==e}),b.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){b.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){b.onPostLoadPageResources(e)});var T=function(e,n){return C[e]>C[n]?1:C[e]<C[n]?-1:0},O=function(e,n){return v[e]>v[n]?1:v[e]<v[n]?-1:0},L=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[n])e.nextTick(function(){o(null,h[n])});else{var t=void 0;t="component---"===n.slice(0,12)?f.components[n]:"layout---"===n.slice(0,9)?f.layouts[n]:f.json[n],t(function(e,t){h[n]=t,R.push({resource:n,succeeded:!e}),P[n]||(P[n]=e),R=R.slice(-E),o(e,t)})}},S=function(n,o){g[n]?e.nextTick(function(){o(null,g[n])}):P[n]?e.nextTick(function(){o(P[n])}):L(n,function(e,t){if(e)o(e);else{var r=N(t());g[n]=r,o(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=R.find(function(e){return e.succeeded});return!!n},D=function(e,n){console.log(n),_[e]||(_[e]=n),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},M=1,W={empty:function(){j=[],v={},C={},w=[],y=[],x=""},addPagesArray:function(e){y=e,p=(0,s.default)(e,x)},addDevRequires:function(e){d=e},addProdRequires:function(e){f=e},dequeue:function(){return j.pop()},enqueue:function(e){var n=(0,l.default)(e,x);if(!y.some(function(e){return e.path===n}))return!1;var o=1/M;M+=1,v[n]?v[n]+=1:v[n]=1,W.has(n)||j.unshift(n),j.sort(O);var t=p(n);return t.jsonName&&(C[t.jsonName]?C[t.jsonName]+=1+o:C[t.jsonName]=1+o,w.indexOf(t.jsonName)!==-1||h[t.jsonName]||w.unshift(t.jsonName)),t.componentChunkName&&(C[t.componentChunkName]?C[t.componentChunkName]+=1+o:C[t.componentChunkName]=1+o,w.indexOf(t.componentChunkName)!==-1||h[t.jsonName]||w.unshift(t.componentChunkName)),w.sort(T),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:w,resourcesCount:C}},getPages:function(){return{pathArray:j,pathCount:v}},getPage:function(e){return p(e)},has:function(e){return j.some(function(n){return n===e})},getResourcesForPathname:function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,o=Array.isArray(n),t=0,n=o?n:n[Symbol.iterator]();;){var r;if(o){if(t>=n.length)break;r=n[t++]}else{if(t=n.next(),t.done)break;r=t.value}var a=r;a.unregister()}window.location.reload()}})),k=!1;if(_[n])return D(n,'Previously detected load failure for "'+n+'"'),o();var t=p(n);if(!t)return D(n,"A page wasn't found for \""+n+'"'),o();if(n=t.path,m[n])return e.nextTick(function(){o(m[n]),c.default.emit("onPostLoadPageResources",{page:t,pageResources:m[n]})}),m[n];c.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,s=void 0,u=function(){if(r&&a&&(!t.layoutComponentChunkName||s)){m[n]={component:r,json:a,layout:s,page:t};var e={component:r,json:a,layout:s,page:t};o(e),c.default.emit("onPostLoadPageResources",{page:t,pageResources:e})}};return S(t.componentChunkName,function(e,n){e&&D(t.path,"Loading the component for "+t.path+" failed"),r=n,u()}),S(t.jsonName,function(e,n){e&&D(t.path,"Loading the JSON for "+t.path+" failed"),a=n,u()}),void(t.layoutComponentChunkName&&S(t.layout,function(e,n){e&&D(t.path,"Loading the Layout for "+t.path+" failed"),s=n,u()}))},peek:function(e){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(e){return j.length-j.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:W.getResourcesForPathname};n.default=W}).call(n,o(111))},404:function(e,n){e.exports=[{componentChunkName:"component---src-pages-posts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-静心打磨手中利刃.json",path:"/posts/静心打磨手中利刃"},{componentChunkName:"component---src-pages-posts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-node.json",path:"/posts/node"},{componentChunkName:"component---src-pages-posts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-docker.json",path:"/posts/docker"},{componentChunkName:"component---src-pages-posts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-promise.json",path:"/posts/Promise"},{componentChunkName:"component---src-pages-posts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-es.json",path:"/posts/ES"},{componentChunkName:"component---src-pages-posts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-react.json",path:"/posts/react"},{componentChunkName:"component---src-pages-posts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-redux.json",path:"/posts/redux"},{componentChunkName:"component---src-pages-posts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-webpack.json",path:"/posts/webpack"},{componentChunkName:"component---src-pages-posts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-wepy.json",path:"/posts/wepy"},{componentChunkName:"component---src-pages-posts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-小程序.json",path:"/posts/小程序"},{componentChunkName:"component---src-pages-posts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-translate.json",path:"/posts/translate"},{componentChunkName:"component---src-pages-posts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-overreacted.json",path:"/posts/overreacted"},{componentChunkName:"component---src-pages-posts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-egg.json",path:"/posts/egg"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-calm-to-polish-sword-express.json",path:"/posts/calm-to-polish-sword-express"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-calm-to-polish-sword-ghost-to-passport.json",path:"/posts/calm-to-polish-sword-ghost-to-passport"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-docker-my-fontend-project.json",path:"/posts/docker-my-fontend-project"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-pre-deep-into-egg-core.json",path:"/posts/pre-deep-into-egg-core"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-read-code-es-promise-polyfill.json",path:"/posts/read-code-es-promise-polyfill"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-read-react-redux.json",path:"/posts/read-react-redux"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-settle-react-es-6.json",path:"/posts/settle-react-es6"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-shallow-into-wepy-source-code.json",path:"/posts/shallow-into-wepy-source-code"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-translate-overreacted-how-does-react-tell-a-class-from-a-function.json",path:"/posts/translate-overreacted-how-does-react-tell-a-class-from-a-function"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-translate-overreacted-how-does-setstate-know-what-to-do.json",path:"/posts/translate-overreacted-how-does-setstate-know-what-to-do"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-translate-overreacted-my-wishlist-for-hot-reloading.json",path:"/posts/translate-overreacted-my-wishlist-for-hot-reloading"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-translate-overreacted-optimized-for-change.json",path:"/posts/translate-overreacted-optimized-for-change"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-translate-overreacted-why-do-react-elements-have-typeof-property.json",path:"/posts/translate-overreacted-why-do-react-elements-have-typeof-property"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-translate-overreacted-why-do-we-write-super-props.json",path:"/posts/translate-overreacted-why-do-we-write-super-props"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts-what-make-rules-of-directory-for-egg-project.json",path:"/posts/what-make-rules-of-directory-for-egg-project"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-posts-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"posts.json",path:"/posts"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},186:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,o=e.createResourceDownload,t=[],r=[],a=function(){var e=n();e&&(r.push(e),o(e))},s=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(e){s({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){s({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){s({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){s({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:r}},empty:function(){t=[],r=[]}}}},0:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},a=o(67),s=o(2),u=t(s),c=o(179),i=t(c),l=o(62),p=o(330),d=o(285),f=t(d),m=o(18),h=o(184),g=t(h),y=o(49),j=t(y),v=o(404),x=t(v),w=o(405),C=t(w),N=o(182),b=t(N),k=o(181),R=t(k),_=o(112),P=t(_);o(204),window.___history=g.default,window.___emitter=j.default,P.default.addPagesArray(x.default),P.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=C.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),T=function(e){var n=E[e];return null!=n&&(g.default.replace(n.toPath),!0)};T(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&c!==!1||(window.___history=e,c=!0,e.listen(function(e,n){T(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})},0)}))}function n(e,n){var o=n.location.pathname,t=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:o});if(t.length>0)return t[0];if(e){var r=e.location.pathname;if(r===o)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&o(187);var t=function(e,n){function o(e){e.page.path===P.default.getPage(r).path&&(j.default.off("onPostLoadPageResources",o),clearTimeout(c),u(t))}var t=(0,m.createLocation)(e,null,null,g.default.location),r=t.pathname,a=E[r];a&&(r=a.toPath);var s=window.location;if(s.pathname!==t.pathname||s.search!==t.search||s.hash!==t.hash){var u=n?window.___history.replace:window.___history.push,c=setTimeout(function(){j.default.off("onPostLoadPageResources",o),j.default.emit("onDelayedLoadPageResources",{pathname:r}),u(t)},1e3);P.default.getResourcesForPathname(r)?(clearTimeout(c),u(t)):j.default.on("onPostLoadPageResources",o)}};window.___push=function(e){return t(e,!1)},window.___replace=function(e){return t(e,!0)},window.___navigateTo=window.___push,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var c=!1,d=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(e){var n=e.children;return u.default.createElement(l.Router,{history:g.default},n)},y=(0,l.withRouter)(b.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,s.createElement)(d?d:h,null,(0,s.createElement)(p.ScrollContext,{shouldUpdateScroll:n},(0,s.createElement)(y,{layout:!0,children:function(n){return(0,s.createElement)(l.Route,{render:function(o){e(o.history);var t=n?n:o;return P.default.getPage(t.location.pathname)?(0,s.createElement)(b.default,r({page:!0},t)):(0,s.createElement)(b.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,a.apiRunner)("wrapRootComponent",{Root:o},o)[0],c=(0,a.apiRunner)("replaceHydrateFunction",void 0,i.default.render)[0];(0,f.default)(function(){return c(u.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},405:function(e,n){e.exports=[]},187:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o(49),a=t(r),s="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(s+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},113:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},285:function(e,n,o){!function(n,o){e.exports=o()}("domready",function(){var e,n=[],o=document,t=o.documentElement.doScroll,r="DOMContentLoaded",a=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return a||o.addEventListener(r,e=function(){for(o.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},1:function(e,n,o){"use strict";function t(){function e(e){var n=t.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,t=document.querySelector("head"),r=o.e,a=o.s;o.e=function(t,s){var u=!1,c=!0,i=function(e){s&&(s(o,e),s=null)};return!a&&n&&n[t]?void i(!0):(r(t,function(){u||(u=!0,c?setTimeout(function(){i()}):i())}),void(u||(c=!1,e(function(){u||(u=!0,a?a[t]=void 0:(n||(n={}),n[t]=!0),i(!0))}))))}}t()},406:function(e,n){function o(e){return e=e||Object.create(null),{on:function(n,o){(e[n]||(e[n]=[])).push(o)},off:function(n,o){e[n]&&e[n].splice(e[n].indexOf(o)>>>0,1)},emit:function(n,o){(e[n]||[]).slice().map(function(e){e(o)}),(e["*"]||[]).slice().map(function(e){e(n,o)})}}}e.exports=o},111:function(e,n){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(p===clearTimeout)return clearTimeout(e);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(n){try{return p.call(null,e)}catch(n){return p.call(this,e)}}}function s(){h&&f&&(h=!1,f.length?m=f.concat(m):g=-1,m.length&&u())}function u(){if(!h){var e=r(s);h=!0;for(var n=m.length;n;){for(f=m,m=[];++g<n;)f&&f[g].run();g=-1,n=m.length}f=null,h=!1,a(e)}}function c(e,n){this.fun=e,this.array=n}function i(){}var l,p,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(e){l=o}try{p="function"==typeof clearTimeout?clearTimeout:t}catch(e){p=t}}();var f,m=[],h=!1,g=-1;d.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)n[o-1]=arguments[o];m.push(new c(e,n)),1!==m.length||h||r(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=i,d.addListener=i,d.once=i,d.off=i,d.removeListener=i,d.removeAllListeners=i,d.emit=i,d.prependListener=i,d.prependOnceListener=i,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},421:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=!("undefined"==typeof window||!window.document||!window.document.createElement),t=Date,r="function"==typeof setTimeout?setTimeout:void 0,a="function"==typeof clearTimeout?clearTimeout:void 0,s="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,u="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0,c="object"==typeof performance&&"function"==typeof performance.now;if(n.unstable_now=void 0,c){var i=performance;n.unstable_now=function(){return i.now()}}else n.unstable_now=function(){return t.now()};if(n.unstable_scheduleWork=void 0,n.unstable_cancelScheduledWork=void 0,o){var l=null,p=null,d=-1,f=!1,m=!1,h=void 0,g=void 0,y=function(e){h=s(function(n){a(g),e(n)}),g=r(function(){u(h),e(n.unstable_now())},100)},j=0,v=33,x=33,w={
didTimeout:!1,timeRemaining:function(){var e=j-n.unstable_now();return 0<e?e:0}},C=function(e,o){var t=e.scheduledCallback,r=!1;try{t(o),r=!0}finally{n.unstable_cancelScheduledWork(e),r||(f=!0,window.postMessage(N,"*"))}},N="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(e){if(e.source===window&&e.data===N&&(f=!1,null!==l)){if(null!==l){var o=n.unstable_now();if(!(-1===d||d>o)){e=-1;for(var t=[],r=l;null!==r;){var a=r.timeoutTime;-1!==a&&a<=o?t.push(r):-1!==a&&(-1===e||a<e)&&(e=a),r=r.next}if(0<t.length)for(w.didTimeout=!0,o=0,r=t.length;o<r;o++)C(t[o],w);d=e}}for(e=n.unstable_now();0<j-e&&null!==l;)e=l,w.didTimeout=!1,C(e,w),e=n.unstable_now();null===l||m||(m=!0,y(b))}},!1);var b=function(e){m=!1;var n=e-j+x;n<x&&v<x?(8>n&&(n=8),x=n<v?v:n):v=n,j=e+x,f||(f=!0,window.postMessage(N,"*"))};n.unstable_scheduleWork=function(e,o){var t=-1;return null!=o&&"number"==typeof o.timeout&&(t=n.unstable_now()+o.timeout),(-1===d||-1!==t&&t<d)&&(d=t),e={scheduledCallback:e,timeoutTime:t,prev:null,next:null},null===l?l=e:(o=e.prev=p,null!==o&&(o.next=e)),p=e,m||(m=!0,y(b)),e},n.unstable_cancelScheduledWork=function(e){if(null!==e.prev||l===e){var n=e.next,o=e.prev;e.next=null,e.prev=null,null!==n?null!==o?(o.next=n,n.prev=o):(n.prev=null,l=n):null!==o?(o.next=null,p=o):p=l=null}}}else{var k=new Map;n.unstable_scheduleWork=function(e){var n={scheduledCallback:e,timeoutTime:0,next:null,prev:null},o=r(function(){e({timeRemaining:function(){return 1/0},didTimeout:!1})});return k.set(e,o),n},n.unstable_cancelScheduledWork=function(e){var n=k.get(e.scheduledCallback);k.delete(e),a(n)}}},422:function(e,n,o){"use strict";e.exports=o(421)},425:function(e,n){"use strict";function o(e,n){for(var o in e)if(!(o in n))return!0;for(var t in n)if(e[t]!==n[t])return!0;return!1}n.__esModule=!0,n.default=function(e,n,t){return o(e.props,n)||o(e.state,t)},e.exports=n.default},290:function(e,n,o){o(1),e.exports=function(e){return o.e(0x9427c64ab85d,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(191)})})}},291:function(e,n,o){o(1),e.exports=function(e){return o.e(35783957827783,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(192)})})}},292:function(e,n,o){o(1),e.exports=function(e){return o.e(0xed74cf750429,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(193)})})}},293:function(e,n,o){o(1),e.exports=function(e){return o.e(0xb1abc741118f,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(194)})})}}});
//# sourceMappingURL=app-ea00104e203aee2913c7.js.map