(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{201:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Talkee_Talkee}));var _dec,_dec2,_dec3,_dec4,_dec5,_dec6,_dec7,_dec8,_class,_class2,_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5,_descriptor6,_descriptor7,_descriptor8,initializerDefineProperty=__webpack_require__(56),initializerDefineProperty_default=__webpack_require__.n(initializerDefineProperty),classCallCheck=__webpack_require__(323),classCallCheck_default=__webpack_require__.n(classCallCheck),createClass=__webpack_require__(324),createClass_default=__webpack_require__.n(createClass),assertThisInitialized=__webpack_require__(47),assertThisInitialized_default=__webpack_require__.n(assertThisInitialized),inherits=__webpack_require__(325),inherits_default=__webpack_require__.n(inherits),possibleConstructorReturn=__webpack_require__(326),possibleConstructorReturn_default=__webpack_require__.n(possibleConstructorReturn),getPrototypeOf=__webpack_require__(200),getPrototypeOf_default=__webpack_require__.n(getPrototypeOf),applyDecoratedDescriptor=__webpack_require__(57),applyDecoratedDescriptor_default=__webpack_require__.n(applyDecoratedDescriptor),lib=(__webpack_require__(773),__webpack_require__(38)),es=__webpack_require__(327),defineProperty=__webpack_require__(66),defineProperty_default=__webpack_require__.n(defineProperty),node_modules_classnames=__webpack_require__(328),classnames_default=__webpack_require__.n(node_modules_classnames),utils_classnames=function classnames(prefix){return function(suffix,className){var _classNames;return classnames_default()((_classNames={},defineProperty_default()(_classNames,"".concat(prefix),!!prefix&&!suffix),defineProperty_default()(_classNames,"".concat(prefix,"-").concat(suffix),!!prefix&&!!suffix),_classNames),className)}};function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=getPrototypeOf_default()(Derived);if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return possibleConstructorReturn_default()(this,result)}}var Talkee_Talkee=(_dec=Object(lib.b)({type:String,default:""}),_dec2=Object(lib.b)({type:String,default:""}),_dec3=Object(lib.b)({type:String,default:""}),_dec4=Object(lib.b)({type:String,default:"talkee"}),_dec5=Object(lib.b)({type:Number,default:1}),_dec6=Object(lib.b)({type:Number,default:void 0}),_dec7=Object(lib.b)({type:Boolean,default:!0}),_dec8=Object(lib.b)({type:Array,default:function _default(){return[]}}),Object(lib.a)((_class2=function(_Vue){inherits_default()(Talkee,_Vue);var _super=_createSuper(Talkee);function Talkee(){var _this;classCallCheck_default()(this,Talkee);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),initializerDefineProperty_default()(_this,"apiBase",_descriptor,assertThisInitialized_default()(_this)),initializerDefineProperty_default()(_this,"loginBase",_descriptor2,assertThisInitialized_default()(_this)),initializerDefineProperty_default()(_this,"clientId",_descriptor3,assertThisInitialized_default()(_this)),initializerDefineProperty_default()(_this,"prefixCls",_descriptor4,assertThisInitialized_default()(_this)),initializerDefineProperty_default()(_this,"siteId",_descriptor5,assertThisInitialized_default()(_this)),initializerDefineProperty_default()(_this,"slug",_descriptor6,assertThisInitialized_default()(_this)),initializerDefineProperty_default()(_this,"expandable",_descriptor7,assertThisInitialized_default()(_this)),initializerDefineProperty_default()(_this,"tweetTags",_descriptor8,assertThisInitialized_default()(_this)),_this.size={width:0,height:0},_this.observer=void 0,_this}return createClass_default()(Talkee,[{key:"classes",get:function get(){return utils_classnames(this.prefixCls)}},{key:"initObserver",value:function initObserver(){var talkee=this.$refs.talkee,self=this,observer=new MutationObserver((function(mutations){mutations.forEach((function(mutation){var w=talkee.offsetWidth,h=talkee.offsetHeight;self.size.width===w&&self.size.height===h||(self.size.width=w,self.size.height=h,self.$emit("resize"))}))}));observer.observe(talkee,{attributes:!0,childList:!0,substree:!0}),this.observer=observer}},{key:"mounted",value:function mounted(){this.siteId&&this.slug&&this.apiBase&&this.loginBase&&this.clientId?(new es.a({siteId:this.siteId,slug:this.slug,commentSelector:"#talkee",prefixCls:this.prefixCls,expandable:this.expandable,tweetTags:this.tweetTags,apiBase:this.apiBase,loginBase:this.loginBase,clientId:this.clientId}),this.initObserver()):console.error("The [siteId], [slug], [apiBase], [clientId] and [loginBase] is required!")}},{key:"beforeDestroy",value:function beforeDestroy(){this.observer&&this.observer.disconnect()}},{key:"render",value:function render(h){return h("div",{staticClass:this.classes("wrapper"),domProps:{id:"talkee"},ref:"talkee"})}}]),Talkee}(lib.c),_descriptor=applyDecoratedDescriptor_default()(_class2.prototype,"apiBase",[_dec],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor2=applyDecoratedDescriptor_default()(_class2.prototype,"loginBase",[_dec2],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor3=applyDecoratedDescriptor_default()(_class2.prototype,"clientId",[_dec3],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor4=applyDecoratedDescriptor_default()(_class2.prototype,"prefixCls",[_dec4],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor5=applyDecoratedDescriptor_default()(_class2.prototype,"siteId",[_dec5],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor6=applyDecoratedDescriptor_default()(_class2.prototype,"slug",[_dec6],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor7=applyDecoratedDescriptor_default()(_class2.prototype,"expandable",[_dec7],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor8=applyDecoratedDescriptor_default()(_class2.prototype,"tweetTags",[_dec8],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_class=_class2))||_class)},329:function(module,exports,__webpack_require__){__webpack_require__(330),__webpack_require__(488),module.exports=__webpack_require__(489)},397:function(module,exports){},489:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(22),__webpack_require__(19),__webpack_require__(25),__webpack_require__(30),__webpack_require__(31);var _storybook_vue__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(107),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(316),_storybook_addon_console__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(317),storybook_readme_vue__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(318);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(storybook_readme_vue__WEBPACK_IMPORTED_MODULE_8__.addReadme),Object(_storybook_addon_console__WEBPACK_IMPORTED_MODULE_7__.setConsoleOptions)({panelExclude:[]}),Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_6__.withOptions)({name:"talkee-vue"});var req=__webpack_require__(752);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_5__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(248)(module))},752:function(module,exports,__webpack_require__){var map={"./Talkee/__stories__/index.stories.ts":753};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=752},753:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(107),_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(319),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(320),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(201);__webpack_require__(774);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Talkee",module).addParameters({readme:{sidebar:__webpack_require__(779).default,highlightSidebar:!0,codeTheme:"github"},options:{theme:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.themes.light},viewport:{viewports:_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_1__.INITIAL_VIEWPORTS,defaultViewport:"iphone6"}}).add("China Dev",(function(){return{components:{Talkee:___WEBPACK_IMPORTED_MODULE_3__.a},template:'<talkee\n      :siteId="6"\n      :slug="1234"\n      apiBase="https://talkee-test-api.firesbox.com/api"\n      loginBase="https://mixin-oauth.firesbox.com"\n      clientId="65fdd5af-5d3f-496a-9d62-b5cdb4d8396f"\n    />'}})).add("Japan Dev",(function(){return{components:{Talkee:___WEBPACK_IMPORTED_MODULE_3__.a},template:'<talkee\n      :siteId="4"\n      :slug="234455"\n      apiBase="https://links-login.chrove.com/api"\n      loginBase="https://oauth.chrove.com"\n      clientId="bf07d6d6-4d15-46ab-b5e4-6e66fac1151e"\n    />'}}))}.call(this,__webpack_require__(248)(module))},774:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(775)},775:function(module,exports,__webpack_require__){var api=__webpack_require__(776),content=__webpack_require__(777);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},777:function(module,exports,__webpack_require__){(exports=__webpack_require__(778)(!1)).push([module.i,".talkee-wrapper {\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n",""]),module.exports=exports},779:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='# Talkee\n\n## Example\n\n```vue\n<template>\n  <div>\n    <h2 class="title">{{ title }}</h2>\n    <div>帖子内容</div>\n    <talkee\n      :siteId="1"\n      :slug="1234"\n      apiBase="https://talkee-test-api.firesbox.com/api"\n      loginBase="https://mixin-oauth.firesbox.com"\n      clientId="2827d81f-6ae0-4842-b92f-6576afe36863"\n      @resize="handleResize"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    data: {\n      title: \'帖子标题\'\n    },\n    method: {\n      handleResize: function () {\n        console.info(\'resize!\');\n      }\n    }\n  }\n<\/script>\n\n<style lang="scss" scoped>\n.title {\n  font-size: 20px;\n}\n</style>\n```\n'}},[[329,1,2]]]);
//# sourceMappingURL=main.3b579831fb9c034abe65.bundle.js.map