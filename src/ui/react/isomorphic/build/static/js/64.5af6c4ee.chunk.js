webpackJsonp([64],{1944:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function a(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),c=t.n(i),l=t(158),s=t(52),p=t(193),u=t(2894),d=t(409),h=t(161),m=t(198),b=t(776),g=t(267),f=t(3150),x=t(86),v=t(4190),y=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),k=h.a.login,w=m.a.clearMenu,E=function(n){function e(){var n,t,a,i;r(this,e);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return t=a=o(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(l))),a.state={redirectToReferrer:!1},a.handleLogin=function(){var n=a.props,e=n.login,t=n.clearMenu;e(),t(),a.props.history.push("/dashboard")},i=t,o(a,i)}return a(e,n),y(e,[{key:"componentWillReceiveProps",value:function(n){this.props.isLoggedIn!==n.isLoggedIn&&!0===n.isLoggedIn&&this.setState({redirectToReferrer:!0})}},{key:"render",value:function(){var n=this;return c.a.createElement(v.a,{className:"isoSignUpPage"},c.a.createElement("div",{className:"isoSignUpContentWrapper"},c.a.createElement("div",{className:"isoSignUpContent"},c.a.createElement("div",{className:"isoLogoWrapper"},c.a.createElement(l.a,{to:"/dashboard"},c.a.createElement(x.a,{id:"page.signUpTitle"}))),c.a.createElement("div",{className:"isoSignUpForm"},c.a.createElement("div",{className:"isoInputWrapper isoLeftRightComponent"},c.a.createElement(p.d,{size:"large",placeholder:"First name"}),c.a.createElement(p.d,{size:"large",placeholder:"Last name"})),c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement(p.d,{size:"large",placeholder:"Username"})),c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement(p.d,{size:"large",placeholder:"Email"})),c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement(p.d,{size:"large",type:"password",placeholder:"Password"})),c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement(p.d,{size:"large",type:"password",placeholder:"Confirm Password"})),c.a.createElement("div",{className:"isoInputWrapper",style:{marginBottom:"50px"}},c.a.createElement(u.b,null,c.a.createElement(x.a,{id:"page.signUpTermsConditions"}))),c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement(d.b,{type:"primary"},c.a.createElement(x.a,{id:"page.signUpButton"}))),c.a.createElement("div",{className:"isoInputWrapper isoOtherLogin"},c.a.createElement(d.b,{onClick:this.handleLogin,type:"primary btnFacebook"},c.a.createElement(x.a,{id:"page.signUpFacebook"})),c.a.createElement(d.b,{onClick:this.handleLogin,type:"primary btnGooglePlus"},c.a.createElement(x.a,{id:"page.signUpGooglePlus"})),b.a.isValid&&c.a.createElement(d.b,{onClick:function(){b.a.login(n.handleLogin)},type:"primary btnAuthZero"},c.a.createElement(x.a,{id:"page.signUpAuth0"})),g.a.isValid&&c.a.createElement(f.a,{signup:!0,login:this.handleLogin})),c.a.createElement("div",{className:"isoInputWrapper isoCenterComponent isoHelperWrapper"},c.a.createElement(l.a,{to:"/signin"},c.a.createElement(x.a,{id:"page.signUpAlreadyAccount"})))))))}}]),e}(i.Component);e.default=Object(s.b)(function(n){return{isLoggedIn:null!==n.Auth.idToken}},{login:k,clearMenu:w})(E)},2894:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(34),o=t(2895),a=Object(o.a)(r.j),i=r.j.Group;e.b=a},2895:function(n,e,t){"use strict";var r=t(46),o=t(68),a=(t.n(o),function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n\n    .ant-checkbox {\n      top: inherit;\n    }\n\n    .ant-checkbox-checked .ant-checkbox-inner,\n    .ant-checkbox-indeterminate .ant-checkbox-inner {\n      background-color: ",";\n      border-color: ",";\n    }\n\n    .ant-checkbox:hover .ant-checkbox-inner,\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ",";\n    }\n\n    &:hover {\n      .ant-checkbox-inner {\n        border-color: ",";\n      }\n    }\n  }\n"],["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n\n    .ant-checkbox {\n      top: inherit;\n    }\n\n    .ant-checkbox-checked .ant-checkbox-inner,\n    .ant-checkbox-indeterminate .ant-checkbox-inner {\n      background-color: ",";\n      border-color: ",";\n    }\n\n    .ant-checkbox:hover .ant-checkbox-inner,\n    .ant-checkbox-input:focus + .ant-checkbox-inner {\n      border-color: ",";\n    }\n\n    &:hover {\n      .ant-checkbox-inner {\n        border-color: ",";\n      }\n    }\n  }\n"])),i=function(n){return Object(r.b)(n)(a,Object(o.palette)("text",1),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0))};e.a=i},3150:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function a(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var i=t(0),c=t.n(i),l=t(409),s=t(193),p=t(749),u=t(422),d=t(267),h=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),m=function(n){function e(){var n,t,a,i;r(this,e);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return t=a=o(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(l))),a.state={visible:!1,email:"demo@gmail.com",password:"demodemo",confirmLoading:!1},a.showModal=function(){a.setState({visible:!0})},a.handleCancel=function(n){a.setState({visible:!1})},a.handleLogin=function(){var n=a.state,e=n.email,t=n.password;if(!e||!t)return void Object(u.c)("error","Please fill in email. and password");a.setState({confirmLoading:!0});var r=a,o=!1;d.a.login(d.a.EMAIL,{email:e,password:t}).catch(function(n){var e=n&&n.message?n.message:"Sorry Some error occurs";Object(u.c)("error",e),r.setState({confirmLoading:!1}),o=!0}).then(function(n){if(!o)if(!n||n.message){var e=n&&n.message?n.message:"Sorry Some error occurs";Object(u.c)("error",e),r.setState({confirmLoading:!1})}else r.setState({visible:!1,confirmLoading:!1}),a.props.login()})},a.resetPassword=function(){var n=a.state.email;if(!n)return void Object(u.c)("error","Please fill in email.");d.a.resetPassword(n).then(function(){return Object(u.c)("success","Password reset email sent to "+n+".")}).catch(function(n){return Object(u.c)("error","Email address not found.")})},i=t,o(a,i)}return a(e,n),h(e,[{key:"render",value:function(){var n=this;return c.a.createElement("div",null,c.a.createElement(l.b,{type:"primary",onClick:this.showModal,className:"btnFirebase"},this.props.signup?"Sign up with Firebase":"Sign in with Firebase"),c.a.createElement(p.a,{title:"Sign in with Firebase",visible:this.state.visible,confirmLoading:this.state.confirmLoading,onCancel:this.handleCancel,onOk:this.handleLogin,className:"isoFirebaseLoginModal",cancelText:"Cancel",okText:"Login"},c.a.createElement("form",null,c.a.createElement("div",{className:"isoInputWrapper"},c.a.createElement("label",null,"Email"),c.a.createElement(s.d,{ref:function(e){return n.email=e},size:"large",placeholder:"Email",value:this.state.email,onChange:function(e){n.setState({email:e.target.value})}})),c.a.createElement("div",{className:"isoInputWrapper",style:{marginBottom:10}},c.a.createElement("label",null,"Password"),c.a.createElement(s.d,{type:"password",size:"large",placeholder:"Password",value:this.state.password,onChange:function(e){n.setState({password:e.target.value})}})),c.a.createElement("span",{className:"isoResetPass",onClick:this.resetPassword},"Reset Password"))))}}]),e}(i.Component);e.a=m},4190:function(n,e,t){"use strict";var r=t(46),o=t(68),a=(t.n(o),t(4191)),i=t.n(a),c=t(75),l=function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background: url(",") no-repeat center center;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.6);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: ",";\n    right: ",";\n  }\n\n  .isoSignUpContentWrapper {\n    width: 500px;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 10;\n    position: relative;\n  }\n\n  .isoSignUpContent {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 70px 50px;\n    position: relative;\n    background-color: #ffffff;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n      padding: 70px 20px;\n    }\n\n    .isoLogoWrapper {\n      width: 100%;\n      display: flex;\n      margin-bottom: 50px;\n      justify-content: center;\n      flex-shrink: 0;\n\n      a {\n        font-size: 24px;\n        font-weight: 300;\n        line-height: 1;\n        text-transform: uppercase;\n        color: ",";\n      }\n    }\n\n    .isoSignUpForm {\n      width: 100%;\n      flex-shrink: 0;\n      display: flex;\n      flex-direction: column;\n\n      .isoInputWrapper {\n        margin-bottom: 15px;\n\n        &:last-child {\n          margin-bottom: 0;\n        }\n\n        input {\n          &::-webkit-input-placeholder {\n            color: ",";\n          }\n\n          &:-moz-placeholder {\n            color: ",";\n          }\n\n          &::-moz-placeholder {\n            color: ",";\n          }\n          &:-ms-input-placeholder {\n            color: ",";\n          }\n        }\n      }\n\n      .isoLeftRightComponent {\n        input {\n          width: calc(100% - 10px);\n\n          &:first-child {\n            margin-right: ",";\n            margin-left: ",";\n          }\n        }\n      }\n\n      .isoHelperWrapper {\n        margin-top: 35px;\n        flex-direction: column;\n      }\n\n      .isoForgotPass {\n        font-size: 12px;\n        color: ",";\n        margin-bottom: 10px;\n\n        &:hover {\n          color: ",";\n        }\n      }\n\n      button {\n        font-weight: 500;\n        width: 100%;\n        height: 42px;\n        border: 0;\n\n        &.btnFacebook {\n          background-color: ",";\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnGooglePlus {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnAuthZero {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnFirebase {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n      }\n    }\n  }\n"],["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background: url(",") no-repeat center center;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.6);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: ",";\n    right: ",";\n  }\n\n  .isoSignUpContentWrapper {\n    width: 500px;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 10;\n    position: relative;\n  }\n\n  .isoSignUpContent {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 70px 50px;\n    position: relative;\n    background-color: #ffffff;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n      padding: 70px 20px;\n    }\n\n    .isoLogoWrapper {\n      width: 100%;\n      display: flex;\n      margin-bottom: 50px;\n      justify-content: center;\n      flex-shrink: 0;\n\n      a {\n        font-size: 24px;\n        font-weight: 300;\n        line-height: 1;\n        text-transform: uppercase;\n        color: ",";\n      }\n    }\n\n    .isoSignUpForm {\n      width: 100%;\n      flex-shrink: 0;\n      display: flex;\n      flex-direction: column;\n\n      .isoInputWrapper {\n        margin-bottom: 15px;\n\n        &:last-child {\n          margin-bottom: 0;\n        }\n\n        input {\n          &::-webkit-input-placeholder {\n            color: ",";\n          }\n\n          &:-moz-placeholder {\n            color: ",";\n          }\n\n          &::-moz-placeholder {\n            color: ",";\n          }\n          &:-ms-input-placeholder {\n            color: ",";\n          }\n        }\n      }\n\n      .isoLeftRightComponent {\n        input {\n          width: calc(100% - 10px);\n\n          &:first-child {\n            margin-right: ",";\n            margin-left: ",";\n          }\n        }\n      }\n\n      .isoHelperWrapper {\n        margin-top: 35px;\n        flex-direction: column;\n      }\n\n      .isoForgotPass {\n        font-size: 12px;\n        color: ",";\n        margin-bottom: 10px;\n\n        &:hover {\n          color: ",";\n        }\n      }\n\n      button {\n        font-weight: 500;\n        width: 100%;\n        height: 42px;\n        border: 0;\n\n        &.btnFacebook {\n          background-color: ",";\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnGooglePlus {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnAuthZero {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnFirebase {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n      }\n    }\n  }\n"]),s=r.b.div(l,i.a,function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(o.palette)("secondary",2),Object(o.palette)("grayscale",0),Object(o.palette)("grayscale",0),Object(o.palette)("grayscale",0),Object(o.palette)("grayscale",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"20px"},function(n){return"rtl"===n["data-rtl"]?"20px":"inherit"},Object(o.palette)("text",2),Object(o.palette)("primary",0),Object(o.palette)("color",7),Object(o.palette)("color",8),Object(o.palette)("color",9),Object(o.palette)("color",10),Object(o.palette)("color",11),Object(o.palette)("color",12),Object(o.palette)("color",5),Object(o.palette)("color",6));e.a=Object(c.a)(s)},4191:function(n,e,t){n.exports=t.p+"static/media/work.56bf9122.jpg"}});