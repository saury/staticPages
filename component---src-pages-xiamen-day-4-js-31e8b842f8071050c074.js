(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(157),o=a(443);t.default=function(){return r.a.createElement(i.a,{seo:{title:"旅游-厦门",description:"旅游-厦门",keywords:"旅游 厦门"},nav:{title:"第四天",back:"/xiamen/"}},r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"最后一天啦，返程的一天。想必昨天玩的很累睡到很晚才醒吧。退房的时候不要遗漏物品。"),r.a.createElement("p",null,"中山路逛逛吃吃买买就要回来了。那里附近好多骑楼，是挺有特色的建筑，逛的时候可以留意下。"),r.a.createElement("img",{style:{marginBottom:"8px",display:"block"},src:o}),r.a.createElement("small",{style:{marginBottom:"8px",textAlign:"center",display:"block"}},"（骑楼）"),r.a.createElement("p",null,"早点吃过中饭就要赶去火车站了，不要迟到啦，没记错的话还挺远的，打车不划算，可以坐BRT（这种车类似上海的71路，但是全程高架上，没有红绿灯阻碍，还是挺便捷舒适的）到火车站。"),r.a.createElement("p",null,"火车上就吃吃睡睡玩玩手机看看书吧，到家记得给我消息。")))}},154:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},155:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(50),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},156:function(e,t,a){},157:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(163),s=a.n(c),u=a(7),d=a.n(u),p=a(153),m=a.n(p),f=a(170),h=a(165),y=a.n(h),g=a(166),b=a.n(g),v=a(160),w=a.n(v),E=a(167),x=a.n(E),k=a(168),q=a.n(k),B=a(169),R=a.n(B),N=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.title,n=e.back;return i.a.createElement("div",{className:t.root},i.a.createElement(y.a,{position:"fixed"},i.a.createElement(b.a,null,n?i.a.createElement(m.a,{to:n,style:{color:"white",textDecoration:"none"}},i.a.createElement(x.a,{className:t.leftButton,color:"inherit","aria-label":"Back"},i.a.createElement(q.a,null))):i.a.createElement(x.a,{className:t.leftButton,color:"inherit","aria-label":"Back"},i.a.createElement(R.a,null)),i.a.createElement(w.a,{variant:"h6",color:"inherit",className:t.flex},a))))},t}(i.a.Component);N.propTypes={classes:l.a.object.isRequired,title:l.a.string,back:l.a.string};var j=Object(f.withStyles)({root:{flexGrow:1},flex:{flexGrow:1},leftButton:{marginLeft:-12,marginRight:20}})(N),G=a(457),T=a(458),C=(a(156),G.a.Content),P={root:"top-nav"},S=function(e){var t=e.className,a=e.children,n=e.seo,r=void 0===n?{title:"Jin's Github Page",description:"Build with Blazing fast modern site generator for React —— Gatsby",keywords:"jin github page gatsby life"}:n,o=e.nav;return i.a.createElement(G.a,{className:t},r&&i.a.createElement(s.a,{title:r.title,meta:[{name:"description",content:r.description},{name:"keywords",content:r.keywords}]}),o&&i.a.createElement(j,{classes:P,title:o.title,back:o.back}),i.a.createElement(C,{className:"main",id:"main"},i.a.createElement(T.a,{target:function(){return document.getElementById("main")}}),a))};S.propTypes={children:l.a.any};var L=S,I=Object(n.a)(L).withConfig({displayName:"styled__Layout",componentId:"pznffm-0"})(["position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;overflow:hidden;> .top-nav{position:absolute;top:0;left:0;right:0;width:100%;+ .main{top:56px;@media screen and (min-width:600px){top:64px;}}}> .main{position:absolute;top:0;bottom:0;left:0;right:0;overflow-x:hidden;overflow-y:auto;}"]);t.a=I},164:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(153),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(154),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(34);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},443:function(e,t,a){e.exports=a.p+"static/qilou-618a5e976c85dbe0a136ed77c1c4eb23.jpg"}}]);
//# sourceMappingURL=component---src-pages-xiamen-day-4-js-31e8b842f8071050c074.js.map