(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9c4bd28"],{"038e":function(e,t,r){},"3e62":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"用户Id"}},[r("el-col",{attrs:{span:11}},[r("el-input",{attrs:{disabled:""},model:{value:e.form.userId,callback:function(t){e.$set(e.form,"userId",t)},expression:"form.userId"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[r("el-col",{attrs:{span:11}},[r("el-input",{model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-col",{attrs:{span:11}},[r("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-col",{attrs:{span:11}},[r("el-input",{attrs:{"show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"角色",prop:"role"}},[r("el-col",{attrs:{span:11}},[r("el-select",{attrs:{clearable:""},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}},e._l(e.roleList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"所属博物馆",prop:"museumId"}},[r("el-col",{attrs:{span:11}},[r("el-input",{model:{value:e.form.museumId,callback:function(t){e.$set(e.form,"museumId",t)},expression:"form.museumId"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"创建者"}},[r("el-col",{attrs:{span:11}},[r("el-input",{attrs:{disabled:""},model:{value:e.form.creator,callback:function(t){e.$set(e.form,"creator",t)},expression:"form.creator"}})],1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("创建")]),e._v(" "),r("el-button",{on:{click:e.handleCancel}},[e._v("取消")])],1)],1)],1)},s=[],o=r("5f87"),u=r("c24f"),l={userId:void 0,userName:"",email:"",password:"",role:"",museumId:"",creator:"",createDate:"",updateDate:"",updater:""},n={props:{isEdit:{type:Boolean,default:!1}},data:function(){var e=this,t=function(t,r,a){""===r?(e.$message({message:t.field+"为必填项",type:"error"}),a(new Error(t.field+"为必填项"))):a()};return{form:Object.assign({},l),rules:{userName:[{validator:t}],email:[{validator:t}],password:[{validator:t}],role:[{validator:t}]},tempRoute:{},roleList:[{label:"管理员",value:"admin"},{label:"用户",value:"user"}]}},created:function(){if(this.isEdit){var e=this.$route.params&&this.$route.params.id;this.getDetails(e)}else this.form=Object.assign({},l);this.tempRoute=Object.assign({},this.$route)},methods:{getDetails:function(e){var t=this;Object(u["d"])({userId:e}).then((function(e){t.form={userId:e.data.userId,userName:e.data.userName,email:e.data.email,password:"",role:e.data.role,museumId:e.data.museumId,creator:e.data.creator,createDate:e.data.createDate},t.setPageTitle()}))},setPageTitle:function(){var e="Edit User";document.title="".concat(e," - ").concat(this.form.userName)},handleSubmit:function(){var e=this;this.form=Object.assign(this.form,{updateDate:(new Date).getTime(),updater:Object(o["b"])()}),this.$refs.form.validate((function(t){if(!t)return console.log("err submit"),!1;e.isEdit?(console.log(e.form),Object(u["c"])(Object(o["b"])(),e.form).then((function(t){200===t.code?(e.$notify({title:"成功",message:"用户信息已编辑",type:"success",duration:2e3}),e.$router.push("/user/user-list")):e.$notify({title:"Error",type:"error",duration:2e3})}))):Object(u["a"])(Object(o["b"])(),e.form).then((function(t){200===t.code?(e.$notify({title:"成功",message:"用户已创建",type:"success",duration:2e3}),e.$router.push("/user/user-list")):e.$notify({title:"Error",type:"error",duration:2e3})}))}))},handleCancel:function(){this.$router.go(-1)}}},i=n,c=(r("c5b1"),r("2877")),m=Object(c["a"])(i,a,s,!1,null,"074508fb",null);t["a"]=m.exports},c24f:function(e,t,r){"use strict";r.d(t,"e",(function(){return s})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return n}));var a=r("b775");function s(e){return Object(a["a"])({url:"/museum-user/api/user/list",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/museum-user/api/user/",method:"get",params:e})}function u(e,t){return Object(a["a"])({url:"/museum-user/api/user?currentUserId=".concat(e),method:"put",data:t})}function l(e,t){return Object(a["a"])({url:"/museum-user/api/user?currentUserId=".concat(e),method:"post",data:t})}function n(e){return Object(a["a"])({url:"/museum-user/api/user",method:"delete",params:e})}},c5b1:function(e,t,r){"use strict";var a=r("038e"),s=r.n(a);s.a},c75d:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("user",{attrs:{"is-edit":!1}})},s=[],o=r("3e62"),u={name:"CreateUser",components:{User:o["a"]}},l=u,n=r("2877"),i=Object(n["a"])(l,a,s,!1,null,null,null);t["default"]=i.exports}}]);