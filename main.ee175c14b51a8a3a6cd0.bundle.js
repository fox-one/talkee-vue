(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Talkee_Talkee}));var _dec,_dec2,_dec3,_dec4,_dec5,_dec6,_dec7,_dec8,_dec9,_dec10,_dec11,_dec12,_dec13,_class,_class2,_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5,_descriptor6,_descriptor7,_descriptor8,_descriptor9,initializerDefineProperty=__webpack_require__(49),initializerDefineProperty_default=__webpack_require__.n(initializerDefineProperty),classCallCheck=__webpack_require__(325),classCallCheck_default=__webpack_require__.n(classCallCheck),createClass=__webpack_require__(326),createClass_default=__webpack_require__.n(createClass),assertThisInitialized=__webpack_require__(39),assertThisInitialized_default=__webpack_require__.n(assertThisInitialized),inherits=__webpack_require__(327),inherits_default=__webpack_require__.n(inherits),possibleConstructorReturn=__webpack_require__(328),possibleConstructorReturn_default=__webpack_require__.n(possibleConstructorReturn),getPrototypeOf=__webpack_require__(201),getPrototypeOf_default=__webpack_require__.n(getPrototypeOf),applyDecoratedDescriptor=__webpack_require__(40),applyDecoratedDescriptor_default=__webpack_require__.n(applyDecoratedDescriptor),lib=(__webpack_require__(775),__webpack_require__(16)),es=__webpack_require__(329),defineProperty=__webpack_require__(66),defineProperty_default=__webpack_require__.n(defineProperty),node_modules_classnames=__webpack_require__(330),classnames_default=__webpack_require__.n(node_modules_classnames),utils_classnames=function classnames(prefix){return function(suffix,className){var _classNames;return classnames_default()((_classNames={},defineProperty_default()(_classNames,"".concat(prefix),!!prefix&&!suffix),defineProperty_default()(_classNames,"".concat(prefix,"-").concat(suffix),!!prefix&&!!suffix),_classNames),className)}};function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=getPrototypeOf_default()(Derived);if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return possibleConstructorReturn_default()(this,result)}}var Talkee_Talkee=(_dec=Object(lib.b)({type:String,default:""}),_dec2=Object(lib.b)({type:String,default:""}),_dec3=Object(lib.b)({type:String,default:"talkee"}),_dec4=Object(lib.b)({type:Number,default:1}),_dec5=Object(lib.b)({type:[String,Number],default:void 0}),_dec6=Object(lib.b)({type:Boolean,default:!0}),_dec7=Object(lib.b)({type:Array,default:function _default(){return[]}}),_dec8=Object(lib.b)({type:Function,default:function _default(talkee){console.info("init talkee: ",talkee)}}),_dec9=Object(lib.b)({type:Object,default:function _default(){}}),_dec10=Object(lib.d)("siteId"),_dec11=Object(lib.d)("slug"),_dec12=Object(lib.d)("apiBase"),_dec13=Object(lib.d)("loginUrl"),Object(lib.a)((_class2=function(_Vue){inherits_default()(Talkee,_Vue);var _super=_createSuper(Talkee);function Talkee(){var _this;classCallCheck_default()(this,Talkee);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),initializerDefineProperty_default()(_this,"apiBase",_descriptor,assertThisInitialized_default()(_this)),initializerDefineProperty_default()(_this,"loginUrl",_descriptor2,assertThisInitialized_default()(_this)),initializerDefineProperty_default()(_this,"prefixCls",_descriptor3,assertThisInitialized_default()(_this)),initializerDefineProperty_default()(_this,"siteId",_descriptor4,assertThisInitialized_default()(_this)),initializerDefineProperty_default()(_this,"slug",_descriptor5,assertThisInitialized_default()(_this)),initializerDefineProperty_default()(_this,"expandable",_descriptor6,assertThisInitialized_default()(_this)),initializerDefineProperty_default()(_this,"tweetTags",_descriptor7,assertThisInitialized_default()(_this)),initializerDefineProperty_default()(_this,"onInit",_descriptor8,assertThisInitialized_default()(_this)),initializerDefineProperty_default()(_this,"renderOpts",_descriptor9,assertThisInitialized_default()(_this)),_this.talkee=void 0,_this.size={width:0,height:0},_this.observer=void 0,_this}return createClass_default()(Talkee,[{key:"classes",get:function get(){return utils_classnames(this.prefixCls)}},{key:"initObserver",value:function initObserver(){var talkee=this.$refs.talkee,self=this,observer=new MutationObserver((function(mutations){mutations.forEach((function(mutation){var w=talkee.offsetWidth,h=talkee.offsetHeight;self.size.width===w&&self.size.height===h||(self.size.width=w,self.size.height=h,self.$emit("resize"))}))}));observer.observe(talkee,{attributes:!0,childList:!0,substree:!0}),this.observer=observer}},{key:"initTalkee",value:function initTalkee(){if(!this.talkee){if(!(this.siteId&&this.slug&&this.apiBase&&this.loginUrl))return console.error("\n        siteId: ".concat(this.siteId,",\n        slug: ").concat(this.slug,",\n        apiBase: ").concat(this.apiBase,",\n        loginUrl: ").concat(this.loginUrl,"\n      ")),void console.error("The [siteId], [slug], [apiBase] and [loginUrl] is required!");this.talkee=new es.a({siteId:this.siteId,slug:this.slug,commentSelector:"#talkee",prefixCls:this.prefixCls,expandable:this.expandable,tweetTags:this.tweetTags,apiBase:this.apiBase,loginUrl:this.loginUrl,render:this.renderOpts}),null==this||this.onInit(this.talkee)}}},{key:"mounted",value:function mounted(){this.initTalkee(),this.initObserver()}},{key:"beforeDestroy",value:function beforeDestroy(){this.observer&&this.observer.disconnect()}},{key:"render",value:function render(h){return h("div",{staticClass:this.classes("wrapper"),domProps:{id:"talkee"},ref:"talkee"})}},{key:"updateTalkee",value:function updateTalkee(){this.talkee?this.talkee.setOptions({siteId:this.siteId,slug:this.slug,apiBase:this.apiBase,loginUrl:this.loginUrl}):this.initTalkee()}}]),Talkee}(lib.c),_descriptor=applyDecoratedDescriptor_default()(_class2.prototype,"apiBase",[_dec],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor2=applyDecoratedDescriptor_default()(_class2.prototype,"loginUrl",[_dec2],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor3=applyDecoratedDescriptor_default()(_class2.prototype,"prefixCls",[_dec3],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor4=applyDecoratedDescriptor_default()(_class2.prototype,"siteId",[_dec4],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor5=applyDecoratedDescriptor_default()(_class2.prototype,"slug",[_dec5],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor6=applyDecoratedDescriptor_default()(_class2.prototype,"expandable",[_dec6],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor7=applyDecoratedDescriptor_default()(_class2.prototype,"tweetTags",[_dec7],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor8=applyDecoratedDescriptor_default()(_class2.prototype,"onInit",[_dec8],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_descriptor9=applyDecoratedDescriptor_default()(_class2.prototype,"renderOpts",[_dec9],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),applyDecoratedDescriptor_default()(_class2.prototype,"updateTalkee",[_dec10,_dec11,_dec12,_dec13],Object.getOwnPropertyDescriptor(_class2.prototype,"updateTalkee"),_class2.prototype),_class=_class2))||_class)},331:function(module,exports,__webpack_require__){__webpack_require__(332),__webpack_require__(490),module.exports=__webpack_require__(491)},399:function(module,exports){},491:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(23),__webpack_require__(20),__webpack_require__(26),__webpack_require__(31),__webpack_require__(32);var _storybook_vue__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(107),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(318),_storybook_addon_console__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(319),storybook_readme_vue__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(320);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(storybook_readme_vue__WEBPACK_IMPORTED_MODULE_8__.addReadme),Object(_storybook_addon_console__WEBPACK_IMPORTED_MODULE_7__.setConsoleOptions)({panelExclude:[]}),Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_6__.withOptions)({name:"talkee-vue"});var req=__webpack_require__(754);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_5__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(248)(module))},754:function(module,exports,__webpack_require__){var map={"./Talkee/__stories__/index.stories.ts":755};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=754},755:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(107),_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(321),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(322),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(108);__webpack_require__(776);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Talkee",module).addParameters({readme:{sidebar:__webpack_require__(781).default,highlightSidebar:!0,codeTheme:"github"},options:{theme:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.themes.light},viewport:{viewports:_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_1__.INITIAL_VIEWPORTS,defaultViewport:"iphone6"}}).add("Basic",(function(){var redirect_url=encodeURIComponent(window.location.href+"&");return{components:{Talkee:___WEBPACK_IMPORTED_MODULE_3__.a},template:'<talkee\n      :siteId="6"\n      :slug="1234"\n      apiBase="https://talkee-test-api.firesbox.com/api"\n      loginUrl="https://mixin-oauth.firesbox.com/?client_id=65fdd5af-5d3f-496a-9d62-b5cdb4d8396f&scope=PROFILE:READ+PHONE:READ&response_type=code&redirect_url='.concat(redirect_url,'"\n    />')}})).add("Without Reply",(function(){var redirect_url=encodeURIComponent(window.location.href+"&");return{components:{Talkee:___WEBPACK_IMPORTED_MODULE_3__.a},template:'<talkee\n      :siteId="6"\n      :slug="1234"\n      apiBase="https://talkee-test-api.firesbox.com/api"\n      loginUrl="https://mixin-oauth.firesbox.com/?client_id=65fdd5af-5d3f-496a-9d62-b5cdb4d8396f&scope=PROFILE:READ+PHONE:READ&response_type=code&redirect_url='.concat(redirect_url,'"\n      :renderOpts="{\n        reply: false\n      }"\n    />')}})).add("With [talkee-group] Theme",(function(){var redirect_url=encodeURIComponent(window.location.href+"&");return{components:{Talkee:___WEBPACK_IMPORTED_MODULE_3__.a},template:'<talkee\n      :siteId="6"\n      :slug="1234"\n      prefixCls="talkee-group"\n      apiBase="https://talkee-test-api.firesbox.com/api"\n      loginUrl="https://mixin-oauth.firesbox.com/?client_id=65fdd5af-5d3f-496a-9d62-b5cdb4d8396f&scope=PROFILE:READ+PHONE:READ&response_type=code&redirect_url='.concat(redirect_url,'"\n      :renderOpts="{\n        reply: false,\n        tweet: false,\n      }"\n    />')}})).add("With Japan Env",(function(){return{components:{Talkee:___WEBPACK_IMPORTED_MODULE_3__.a},template:'<talkee\n      :siteId="4"\n      :slug="234455"\n      apiBase="https://links-login.chrove.com/api"\n      loginUrl="https://oauth.chrove.com/?client_id=bf07d6d6-4d15-46ab-b5e4-6e66fac1151ef&scope=PROFILE:READ+PHONE:READ"\n    />'}}))}.call(this,__webpack_require__(248)(module))},776:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(777),__webpack_require__(779)},777:function(module,exports,__webpack_require__){var api=__webpack_require__(315),content=__webpack_require__(778);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},778:function(module,exports,__webpack_require__){(exports=__webpack_require__(316)(!1)).push([module.i,".talkee-wrapper {\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n",""]),module.exports=exports},779:function(module,exports,__webpack_require__){var api=__webpack_require__(315),content=__webpack_require__(780);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},780:function(module,exports,__webpack_require__){(exports=__webpack_require__(316)(!1)).push([module.i,".talkee-group {\n  position: relative;\n  margin: 0 auto;\n  padding: 20px 0;\n  font-family: inherit;\n}\n.talkee-group.expandable {\n  max-height: 600px;\n  overflow: hidden;\n}\n.talkee-group.expandable .talkee-group-expansion-panel {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  height: 120px;\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 40%);\n}\n.talkee-group-button {\n  height: 42px;\n  margin: 0 4px;\n  margin: 0;\n  padding: 8px 12px;\n  font-size: inherit;\n  background: transparent;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.talkee-group-button.talkee-group-meta-like-button,\n.talkee-group-button.talkee-group-meta-reply-button,\n.talkee-group-button.talkee-group-meta-tweet-button {\n  display: inline-block;\n  min-width: 24px;\n  height: 24px;\n  padding: 0;\n  font-size: 13px;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  background-size: 24px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n.talkee-group-button.talkee-group-meta-like-button {\n  padding-left: 24px;\n  color: #000;\n  font-size: 0;\n}\n.talkee-group-button.talkee-group-meta-like-button.favored {\n  color: #5a97a6;\n  opacity: 1;\n}\n.talkee-group-button.talkee-group-pagination-button {\n  box-sizing: border-box;\n  height: 42px;\n  margin: 0 2px;\n  padding: 8px 10px;\n  font-size: 14px;\n  background: transparent;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.talkee-group-button.talkee-group-pagination-button[disabled] {\n  cursor: default;\n  opacity: 0.5;\n}\n.talkee-group-expansion-panel {\n  display: none;\n}\n.talkee-group-expansion-panel-inner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.talkee-group-expand-button {\n  margin: 40px auto;\n}\n.talkee-group-editor {\n  position: relative;\n  display: flex;\n  width: 100%;\n  background: transparent;\n  border-radius: 8px;\n}\n.talkee-group-editor-left {\n  flex-basis: 48px;\n}\n.talkee-group-editor-right {\n  flex: 1;\n}\n.talkee-group-editor-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n.talkee-group-editor-area {\n  width: 100%;\n  min-height: 50px;\n  max-height: 300px;\n  padding: 6px 12px;\n  overflow: hidden;\n  line-height: 1.3;\n  background-color: #f5f5f5;\n  border: none;\n  border-radius: 4px;\n  outline: none;\n  resize: none;\n}\n.talkee-group-editor-area::placeholder {\n  font-size: 12px;\n}\n.talkee-group-editor-hint {\n  color: tomato;\n  font-size: 13px;\n  visibility: hidden;\n}\n.talkee-group-editor-ctrl {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0;\n}\n.talkee-group-editor-submit {\n  align-items: center;\n  justify-content: center;\n  height: 42px;\n  color: #1EA0FF;\n  font-size: 14px;\n  white-space: nowrap;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  transition: all 0.3s ease;\n}\n.talkee-group-editor-submit[disabled] {\n  color: #000;\n  opacity: 0.3;\n}\n.talkee-group-editor-mask {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f8fafc;\n}\n.talkee-group-tap-to-login {\n  display: flex;\n  align-items: center;\n  height: 42px;\n  padding: 0 20px;\n  padding-left: 50px;\n  color: white;\n  font-weight: bold;\n  font-weight: normal;\n  text-decoration: none;\n  background-color: #00CEB7;\n  background-repeat: no-repeat;\n  background-position: 16px 10px;\n  background-size: 25px 20px;\n  border-radius: 6px;\n}\n.talkee-group-comments {\n  margin-top: 0;\n}\n.talkee-group-comments-ul .talkee-group-comment:nth-last-of-type(2) .talkee-group-comment-right {\n  border: none;\n}\n.talkee-group-comment {\n  display: flex;\n  padding: 10px 0 0;\n}\n.talkee-group-comment-left {\n  flex-basis: 48px;\n}\n.talkee-group-comment-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n.talkee-group-comment-right {\n  position: relative;\n  flex: 1;\n  padding-bottom: 15px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.talkee-group-comment-right-top {\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  font-size: 14px;\n}\n.talkee-group-comment-name {\n  margin-right: 10px;\n  font-weight: bold;\n}\n.talkee-group-comment-time {\n  font-weight: normal;\n  font-size: 12px;\n  opacity: 0.6;\n}\n.talkee-group-comment-reward {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: flex-end;\n  color: #eba131;\n}\n.talkee-group-comment-reward-icon {\n  width: 24px;\n  height: 24px;\n  background: transparent none 0 0 no-repeat;\n  background-size: 24px;\n}\n.talkee-group-comment-reply-button {\n  float: right;\n}\n.talkee-group-comment-content {\n  margin-top: 8px;\n  font-size: 14px;\n  line-height: 1.4;\n  white-space: pre-line;\n  word-break: break-word;\n}\n.talkee-group-comment-content-more {\n  line-height: 1.4;\n  cursor: pointer;\n}\n.talkee-group-no-comment-hint {\n  text-align: center;\n  opacity: 0.6;\n}\n.talkee-group-comment-meta {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.talkee-group-meta-like-button-wrapper {\n  margin-left: -4px;\n  font-size: 13px;\n}\n.talkee-group-meta-like-count {\n  font-size: 0;\n}\n.talkee-group-meta-reply-button-wrapper {\n  display: flex;\n  justify-content: center;\n}\n.talkee-group-pagination {\n  display: flex;\n  justify-content: center;\n  font-size: 16px;\n}\n.talkee-group-sort-bar {\n  display: none;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  font-size: 13px;\n}\n.talkee-group-sort-bar-left {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.talkee-group-sort-bar-right {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.talkee-group-sort-bar-comment-icon {\n  width: 24px;\n  height: 24px;\n  background-size: 24px;\n}\n.talkee-group-button.talkee-group-sort-button {\n  margin-right: 10px;\n  padding: 0;\n  font-size: inherit;\n  background: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  opacity: 0.5;\n}\n.talkee-group-sort-prefix {\n  display: none;\n  margin-right: 10px;\n}\n.talkee-group-sort-icon {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  margin-right: 4px;\n  background-size: 24px;\n}\n.talkee-group-button.talkee-group-sort-button[disabled] {\n  color: #5a97a6;\n  font-weight: bold;\n  opacity: 1;\n}\n.talkee-group-sort-by-id-asc-button {\n  margin-right: 0;\n}\n.talkee-group-button.talkee-group-menu-button {\n  width: 32px;\n  height: 24px;\n  margin-right: -10px;\n  background-repeat: no-repeat;\n  background-position: center;\n  border: none;\n  outline: none;\n}\n.talkee-group-menu {\n  position: absolute;\n  top: 52px;\n  right: 0;\n  z-index: 10;\n  display: none;\n  padding: 8px 0;\n  list-style: none;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.talkee-group-menu-item {\n  display: block;\n  padding: 4px 16px;\n  cursor: pointer;\n}\n.talkee-group-menu-item:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.talkee-group-sub-comments {\n  margin: 12px 0;\n  padding: 12px;\n  background-color: #f8fafc;\n  border-radius: 4px;\n}\n.talkee-group-sub-comments-editor-wrapper {\n  position: relative;\n}\n.talkee-group-sub-comments-editor {\n  width: 100%;\n  min-height: 40px;\n  margin-bottom: 8px;\n  padding: 4px 8px;\n  font-size: 13px;\n  border: none;\n}\n.talkee-group-sub-comments-ul {\n  margin-top: 16px;\n  padding: 0;\n}\n.talkee-group-sub-comments talkee-group-comment {\n  display: flex;\n  margin-bottom: 32px;\n}\n.talkee-group-sub-comments talkee-group-comment.sub {\n  margin-bottom: 10px;\n}\n.talkee-group-sub-comments talkee-group-comment.sub:last-child {\n  margin-bottom: 0;\n}\n.talkee-group-sub-comments talkee-group-comment.sub-avatar {\n  width: 24px;\n  height: 24px;\n}\n.talkee-group-sub-comments talkee-group-comment.sub-left {\n  flex-basis: 32px;\n}\n.talkee-group-sub-comments talkee-group-comment.sub-right-top {\n  font-size: 10px;\n}\n.talkee-group-sub-comments talkee-group-comment.sub-content {\n  font-size: 12px;\n}\n.talkee-group-sub-comments talkee-group-comment.sub-meta {\n  margin-top: 2px;\n}\n.talkee-group-sub-comments talkee-group-comment.sub-content-more {\n  font-size: 12px;\n}\n.talkee-group-sub-comments talkee-group-sub-load-more-button {\n  display: block;\n  width: 100%;\n  margin-top: 12px;\n}\n@media screen and (max-width: 768px) {\n  .talkee-group {\n    padding: 12px 16px 0;\n  }\n}\n",""]),module.exports=exports},781:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='# Talkee\n\n## Example\n\n```vue\n<template>\n  <div>\n    <h2 class="title">{{ title }}</h2>\n    <div>帖子内容</div>\n    <talkee\n      :siteId="1"\n      :slug="1234"\n      apiBase="https://talkee-test-api.firesbox.com/api"\n      loginUrl="https://mixin-oauth.firesbox.com/?client_id=65fdd5af-5d3f-496a-9d62-b5cdb4d8396f&scope=PROFILE:READ+PHONE:READ&redirect_url="\n      @resize="handleResize"\n      :renderOpts="{\n        reply: false\n      }"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    data: {\n      title: \'帖子标题\'\n    },\n    method: {\n      handleResize: function () {\n        console.info(\'resize!\');\n      }\n    }\n  }\n<\/script>\n\n<style lang="scss" scoped>\n.title {\n  font-size: 20px;\n}\n</style>\n```\n'}},[[331,1,2]]]);
//# sourceMappingURL=main.ee175c14b51a8a3a6cd0.bundle.js.map