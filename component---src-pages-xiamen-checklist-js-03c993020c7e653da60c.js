(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{273:function(e,t,n){"use strict";n.r(t);n(337);var i,a=n(9),o=n.n(a),s=n(0),r=n.n(s),l=n(287),c=("undefined"!=typeof window&&window).localStorage,m={todoListVersion:1,todoList:[{name:"身份证",finished:!1},{name:"银行卡",finished:!1},{name:"充电器",finished:!1},{name:"充电宝(容量小于等于10000毫安)",finished:!1},{name:"杯子",finished:!1},{name:"雨伞",finished:!1},{name:"毛巾",finished:!1},{name:"牙刷",finished:!1},{name:"防晒霜",finished:!1},{name:"面膜",finished:!1},{name:"护肤品",finished:!1},{name:"卸妆水",finished:!1},{name:"纸巾",finished:!1},{name:"姨妈巾",finished:!1},{name:"隐形眼镜",finished:!1},{name:"太阳镜",finished:!1},{name:"睡衣",finished:!1},{name:"内衣",finished:!1},{name:"长袖",finished:!1},{name:"长裤",finished:!1},{name:"短袖",finished:!1},{name:"中裤or裙子",finished:!1},{name:"长袜子",finished:!1},{name:"短袜子",finished:!1},{name:"帽子",finished:!1},{name:"拖鞋",finished:!1},{name:"运动鞋",finished:!1}]},d=c&&c.getItem&&c.getItem("todo"),f=c&&c.getItem&&c.getItem("todoVersion");d&&parseInt(f)===parseInt(m.todoListVersion)?i=JSON.parse(d).todoList:(i=m.todoList,c&&c.setItem&&c.setItem("todo",JSON.stringify(m)),c&&c.setItem&&c.setItem("todoVersion",m.todoListVersion));var h=function(e){function t(t){var n;return(n=e.call(this,t)||this).changeHandler=function(e){var t=[].concat(i);t[e].finished=!t[e].finished,n.setState({todoList:t}),c&&c.setItem&&c.setItem("todo",JSON.stringify({todoList:t}))},n.state={todoList:i},n}return o()(t,e),t.prototype.render=function(){var e=this,t=i.map(function(t,n){return r.a.createElement("li",{key:n,onClick:function(){return e.changeHandler(n)},style:{textDecoration:t.finished?"line-through":"none",color:t.finished?"#ccc":"#333",margin:0,lineHeight:2.5}},r.a.createElement("input",{style:{marginRight:"12px"},type:"checkbox",checked:t.finished,readOnly:!0}),t.name)});return r.a.createElement(l.a,{seo:{title:"旅游-厦门",description:"旅游-厦门",keywords:"旅游 厦门"},nav:{title:"出行清单",back:"/xiamen/"}},r.a.createElement("div",{className:"content"},r.a.createElement("p",{style:{marginBottom:"8px"}},"列出了依我所见比较重要的项目，可以借此排查下有无遗漏物件："),r.a.createElement("ul",{style:{margin:0,listStyle:"none"}},t)))},t}(s.Component);t.default=h},287:function(e,t,n){"use strict";var i=n(290),a=n(0),o=n.n(a),s=n(1),r=n.n(s),l=n(291),c=n.n(l),m=n(9),d=n.n(m),f=n(54),h=n.n(f),p=n(83),u=n(292),g=n.n(u),y=n(293),w=n.n(y),b=n(288),v=n.n(b),E=n(294),k=n.n(E),x=n(295),I=n.n(x),N=n(296),L=n.n(N),B=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,n=e.title,i=e.back;return o.a.createElement("div",{className:t.root},o.a.createElement(g.a,{position:"fixed"},o.a.createElement(w.a,null,i?o.a.createElement(h.a,{to:i,style:{color:"white",textDecoration:"none"}},o.a.createElement(k.a,{className:t.leftButton,color:"inherit","aria-label":"Back"},o.a.createElement(I.a,null))):o.a.createElement(k.a,{className:t.leftButton,color:"inherit","aria-label":"Back"},o.a.createElement(L.a,null)),o.a.createElement(v.a,{variant:"h6",color:"inherit",className:t.flex},n))))},t}(o.a.Component);B.propTypes={classes:r.a.object.isRequired,title:r.a.string,back:r.a.string};var S=Object(p.withStyles)({root:{flexGrow:1},flex:{flexGrow:1},leftButton:{marginLeft:-12,marginRight:20}})(B),J=n(486),O=n(487),C=(n(297),J.a.Content),V={root:"top-nav"},j=function(e){var t=e.className,n=e.children,i=e.seo,a=void 0===i?{title:"Jin's Github Page",description:"Build with Blazing fast modern site generator for React —— Gatsby",keywords:"jin github page gatsby life"}:i,s=e.nav;return o.a.createElement(J.a,{className:t},a&&o.a.createElement(c.a,{title:a.title,meta:[{name:"description",content:a.description},{name:"keywords",content:a.keywords}]}),s&&o.a.createElement(S,{classes:V,title:s.title,back:s.back}),o.a.createElement(C,{className:"main",id:"main"},o.a.createElement(O.a,{target:function(){return document.getElementById("main")}}),n))};j.propTypes={children:r.a.any};var G=j,R=Object(i.a)(G).withConfig({displayName:"styled__Layout",componentId:"pznffm-0"})(["position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;overflow:hidden;> .top-nav{position:absolute;top:0;left:0;right:0;width:100%;+ .main{top:56px;@media screen and (min-width:600px){top:64px;}}}> .main{position:absolute;top:0;bottom:0;left:0;right:0;overflow-x:hidden;overflow-y:auto;}"]);t.a=R},337:function(e,t,n){var i=n(39).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(25)&&i(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-xiamen-checklist-js-03c993020c7e653da60c.js.map