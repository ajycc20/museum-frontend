(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48bc6c60"],{"1ee3":function(t,e,s){},"3d70":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-header"},[a("el-menu",{staticClass:"el-menu",attrs:{mode:"horizontal"}},[a("el-menu-item",{staticClass:"menu-logo-holder"},[a("img",{staticClass:"menu-logo",attrs:{src:s("84fe")}})]),t._v(" "),a("router-link",{attrs:{to:{name:"Index"}}},[a("div",{staticClass:"float-left"},[a("el-menu-item",{staticClass:"disable-element-hover"},[t._v("首页")])],1)]),t._v(" "),a("router-link",{attrs:{to:{name:"Explore"}}},[a("div",{staticClass:"float-left"},[a("el-menu-item",{staticClass:"disable-element-hover"},[t._v("浏览")])],1)]),t._v(" "),a("router-link",{attrs:{to:{name:"Nearby"}}},[a("div",{staticClass:"float-left"},[a("el-menu-item",{staticClass:"disable-element-hover"},[t._v("附近")])],1)]),t._v(" "),t.isLogin?t._e():a("router-link",{attrs:{to:{name:"Login"}}},[a("div",{staticClass:"float-right"},[a("el-menu-item",{staticClass:"disable-element-hover"},[t._v("登录")])],1)]),t._v(" "),t.isLogin?a("router-link",{attrs:{to:{name:"Dashboard"}}},[a("div",{staticClass:"float-right"},[a("el-menu-item",{staticClass:"disable-element-hover"},[t._v("后台管理")])],1)]):t._e(),t._v(" "),a("router-link",{attrs:{to:{name:"Search"}}},[a("div",{staticClass:"float-right"},[a("el-menu-item",{staticClass:"disable-element-hover"},[t._v("专业搜索")])],1)]),t._v(" "),a("div",{staticClass:"float-right"},[a("el-menu-item",{staticClass:"disable-element-hover"},[a("el-input",{attrs:{size:"small",placeholder:"请输入内容"}},[a("el-button",{staticClass:"search-button",attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1)],1)],1)],1)},n=[],i=s("db72"),r=s("2f62"),o=(s("6762"),s("2fdb"),s("4360")),l={inserted:function(t,e,s){var a=e.value,n=o["a"].getters&&o["a"].getters.roles;if(!(a&&a instanceof Array&&a.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var i=a,r=n.some((function(t){return i.includes(t)}));r||t.parentNode&&t.parentNode.removeChild(t)}},c=function(t){t.directive("permission",l)};window.Vue&&(window["permission"]=l,Vue.use(c)),l.install=c;var d=l,u={directives:{permission:d},data:function(){return{isLogin:!1}},computed:Object(i["a"])({},Object(r["b"])(["token"])),mounted:function(){this.loadUser()},methods:{loadUser:function(){this.token?this.isLogin=!0:this.isLogin=!1}}},m=u,v=(s("9aef"),s("2877")),p=Object(v["a"])(m,a,n,!1,null,"039b8a00",null);e["a"]=p.exports},"55a4":function(t,e,s){t.exports=s.p+"static/img/footer-logo.f69d8ba5.png"},"63e4":function(t,e,s){"use strict";var a=s("e4c4"),n=s.n(a);n.a},6905:function(t,e,s){"use strict";var a=s("77cf"),n=s.n(a);n.a},7277:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-footer"},[a("div",{staticClass:"view-times"},[a("div",{staticClass:"views"},[t._v("网站访问量")]),t._v(" "),a("div",{staticClass:"num"},[t._v("1")]),t._v(" "),a("div",{staticClass:"num"},[t._v("2")]),t._v(" "),a("div",{staticClass:"num"},[t._v("3")]),t._v(" "),a("div",{staticClass:"num"},[t._v("4")]),t._v(" "),a("div",{staticClass:"num"},[t._v("5")])]),t._v(" "),a("div",{staticClass:"menu"},[a("a",{attrs:{href:"#"}},[t._v("网站地图")]),a("a",{attrs:{href:"#"}},[t._v("友情链接")]),a("a",{attrs:{href:"#"}},[t._v("隐私政策")]),a("a",{attrs:{href:"#"}},[t._v("常见问题")]),a("a",{attrs:{href:"#"}},[t._v("关于我们")]),a("a",{attrs:{href:"#"}},[t._v("联系我们")])]),t._v(" "),a("div",{staticClass:"copyright"},[t._v("COPYRIGHT ©  2019数字博物馆云平台  ALL RIGHTS RESERVED\n  ")]),t._v(" "),a("img",{staticClass:"logo",attrs:{src:s("55a4")}})])}],i=(s("6905"),s("2877")),r={},o=Object(i["a"])(r,a,n,!1,null,"d665f330",null);e["a"]=o.exports},"77cf":function(t,e,s){},"832d":function(t,e,s){"use strict";var a=s("a0f2"),n=s.n(a);n.a},"84fe":function(t,e,s){t.exports=s.p+"static/img/menu-logo.9d415e7c.png"},9637:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-login"},[s("main-header"),t._v(" "),s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[t._v("登录")])]),t._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),s("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),s("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),t._v(" "),s("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1),t._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("Login")]),t._v(" "),s("div",{staticClass:"tips"},[s("span",{staticStyle:{"margin-right":"20px"}},[t._v("username: admin")]),t._v(" "),s("span",[t._v(" password: any")])])],1)],1),t._v(" "),s("main-footer")],1)},n=[],i=s("61f7"),r=s("3d70"),o=s("7277"),l={name:"Login",components:{MainHeader:r["a"],MainFooter:o["a"]},data:function(){var t=function(t,e,s){Object(i["b"])(e)?s():s(new Error("Please enter the correct user name"))},e=function(t,e,s){e.length<6?s(new Error("The password can not be less than 6 digits")):s()};return{loginForm:{username:"admin",password:"12345677"},loginRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:e}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},methods:{showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("auth/login",t.loginForm).then((function(){t.$router.push({path:"/dashboard"}),t.loading=!1})).catch((function(){t.loading=!1}))}))}}},c=l,d=(s("832d"),s("63e4"),s("2877")),u=Object(d["a"])(c,a,n,!1,null,"edb9bce2",null);e["default"]=u.exports},"9aef":function(t,e,s){"use strict";var a=s("1ee3"),n=s.n(a);n.a},a0f2:function(t,e,s){},e4c4:function(t,e,s){}}]);