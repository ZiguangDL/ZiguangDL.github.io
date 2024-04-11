(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.DingTalkPC = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";var frameTalkClient=require("@ali/frame-talk/client"),ua=require("./libs/ua/ua");exports.config=require("./libs/config"),exports.ready=require("./libs/ready").ready,exports.error=require("./libs/error").error,exports.device={},exports.device.notification={},exports.device.notification.alert=require("./libs/device/notification/alert"),exports.device.notification.confirm=require("./libs/device/notification/confirm"),exports.device.notification.toast=require("./libs/device/notification/toast"),exports.device.notification.prompt=require("./libs/device/notification/prompt"),exports.device.notification.actionSheet=require("./libs/device/notification/actionSheet"),exports.biz={},exports.biz.util={},exports.biz.util.open=require("./libs/biz/util/open"),exports.biz.util.openModal=require("./libs/biz/util/openModal"),exports.biz.util.openSlidePanel=require("./libs/biz/util/openSlidePanel"),exports.biz.util.uploadImage=require("./libs/biz/util/uploadImage"),exports.biz.util.downloadFile=require("./libs/biz/util/downloadFile"),exports.biz.util.openLocalFile=require("./libs/biz/util/openLocalFile"),exports.biz.util.isLocalFileExist=require("./libs/biz/util/isLocalFileExist"),exports.biz.util.previewImage=require("./libs/biz/util/previewImage"),exports.biz.util.previewFile=require("./libs/biz/util/previewFile"),exports.biz.util.openLink=require("./libs/biz/util/openLink"),exports.biz.util.uploadAttachment=require("./libs/biz/util/uploadAttachment"),exports.biz.util.ut=require("./libs/biz/util/ut"),exports.biz.util.encrypt=require("./libs/biz/util/encrypt"),exports.biz.util.decrypt=require("./libs/biz/util/decrypt"),exports.biz.util.createVoipConference=require("./libs/biz/util/createVoipConference"),exports.biz.util.queryConferenceList=require("./libs/biz/util/queryConferenceList"),exports.biz.navigation={},exports.biz.navigation.setTitle=require("./libs/biz/navigation/setTitle"),exports.biz.navigation.quit=require("./libs/biz/navigation/quit"),exports.biz.navigation.setLeft=require("./libs/biz/navigation/setLeft"),exports.biz.oauth={},exports.biz.oauth.authorize=require("./libs/biz/oauth/authorize"),exports.biz.contact={},exports.biz.contact.choose=require("./libs/biz/contact/choose"),exports.biz.contact.pickCustomer=require("./libs/biz/contact/pickCustomer"),exports.biz.contact.externalComplexPicker=require("./libs/biz/contact/externalComplexPicker"),exports.biz.contact.useTagPicker=require("./libs/biz/contact/useTagPicker"),exports.biz.customContact={},exports.biz.customContact.choose=require("./libs/biz/customContact/choose"),exports.biz.customContact.multipleChoose=require("./libs/biz/customContact/multipleChoose"),exports.biz.chat={},exports.biz.chat.chooseConversation=require("./libs/biz/chat/chooseConversation"),exports.biz.ding={},exports.biz.ding.post=require("./libs/biz/ding/post"),exports.biz.cspace={},exports.biz.cspace.preview=require("./libs/biz/cspace/preview"),exports.biz.user={},exports.biz.user.get=require("./libs/biz/user/get"),exports.ua=ua,exports.runtime={},exports.runtime.permission={},exports.runtime.permission.requestAuthCode=require("./libs/runtime/permission/requestAuthCode"),exports.runtime.permission.requestOperateAuthCode=require("./libs/runtime/permission/requestOperateAuthCode"),exports.addEventListener=frameTalkClient.addEventListener,exports.removeEventListener=frameTalkClient.removeEventListener,document.addEventListener("click",function(e){require("./libs/_private/event")({event:"click"})},!1),ua.isInDingTalk&&(window.alert=window.prompt=window.confirm=function(){console.log("暂时不允许使用 alert, prompt, confirm")});
},{"./libs/_private/event":2,"./libs/biz/chat/chooseConversation":3,"./libs/biz/contact/choose":4,"./libs/biz/contact/externalComplexPicker":5,"./libs/biz/contact/pickCustomer":6,"./libs/biz/contact/useTagPicker":7,"./libs/biz/cspace/preview":8,"./libs/biz/customContact/choose":9,"./libs/biz/customContact/multipleChoose":10,"./libs/biz/ding/post":11,"./libs/biz/navigation/quit":12,"./libs/biz/navigation/setLeft":13,"./libs/biz/navigation/setTitle":14,"./libs/biz/oauth/authorize":15,"./libs/biz/user/get":16,"./libs/biz/util/createVoipConference":17,"./libs/biz/util/decrypt":18,"./libs/biz/util/downloadFile":19,"./libs/biz/util/encrypt":20,"./libs/biz/util/isLocalFileExist":21,"./libs/biz/util/open":22,"./libs/biz/util/openLink":23,"./libs/biz/util/openLocalFile":24,"./libs/biz/util/openModal":25,"./libs/biz/util/openSlidePanel":26,"./libs/biz/util/previewFile":27,"./libs/biz/util/previewImage":28,"./libs/biz/util/queryConferenceList":29,"./libs/biz/util/uploadAttachment":30,"./libs/biz/util/uploadImage":31,"./libs/biz/util/ut":32,"./libs/config":33,"./libs/device/notification/actionSheet":34,"./libs/device/notification/alert":35,"./libs/device/notification/confirm":36,"./libs/device/notification/prompt":37,"./libs/device/notification/toast":38,"./libs/error":39,"./libs/ready":47,"./libs/runtime/permission/requestAuthCode":48,"./libs/runtime/permission/requestOperateAuthCode":49,"./libs/ua/ua":50,"@ali/frame-talk/client":51}],2:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="_private.event";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],3:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.chat.chooseConversation";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],4:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.contact.choose";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],5:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.contact.externalComplexPicker";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],6:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.contact.pickCustomer";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],7:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.contact.useTagPicker";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],8:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.cspace.preview";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],9:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.customContact.choose";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],10:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.customContact.multipleChoose";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],11:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.ding.post";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],12:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.navigation.quit";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],13:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.navigation.setLeft";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],14:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.navigation.setTitle";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],15:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.oauth.authorize";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],16:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.user.get";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],17:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.createVoipConference";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],18:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.decrypt";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],19:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.downloadFile";module.exports=function(e){var o=e.onProgress||function(){};delete e.onProgress;var n=invokeAPI(methodName,e);return n.addEventListener("onProgress",function(e){o(e)}),n};


},{"../../libs/invokeAPI":41}],20:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.encrypt";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],21:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.isLocalFileExist";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],22:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.open";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],23:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.openLink",ua=require("../../ua/ua");module.exports=function(e){return ua.isDesktop?invokeAPI(methodName,e):e.url?(window.open(e.url),{result:Promise.resolve()}):{result:Promise.reject()}};


},{"../../libs/invokeAPI":41,"../../ua/ua":50}],24:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.openLocalFile";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],25:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.openModal";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],26:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.openSlidePanel";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],27:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.previewFile";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],28:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.previewImage";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],29:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.queryConferenceList";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],30:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.uploadAttachment";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],31:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.uploadImage";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],32:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="biz.util.ut";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],33:[function(require,module,exports){
"use strict";var invokeAPI=require("./libs/invokeAPI"),changeToReady=require("./ready").changeToReady,changeToError=require("./error").changeToError,devState=require("./libs/devState"),methodName="config";module.exports=function(e){e.version=require("../package.json").version,e.url=window.location.href.split("#")[0];var t=invokeAPI(methodName,e);devState.CONFIG_ING=!0,devState.HAD_CONFIG=!0,devState.LAST_CONFIG_TIME=new Date,t.result.then(function(e){devState.CONFIG_ING=!1,devState.CONFIG_SUCCESS=!0,devState.CONFIG_ERROR=!1,devState.AUTHORIZED_API_LIST=e.authorizedAPIList,devState.UNAUTHORIZED_API_LIST=e.unauthorizedAPIList,changeToReady(e)},function(e){devState.CONFIG_ING=!1,devState.CONFIG_ERROR=!0,devState.CONFIG_ERROR_LOG=e,changeToError(e)})};


},{"../package.json":61,"./error":39,"./libs/devState":40,"./libs/invokeAPI":41,"./ready":47}],34:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="device.notification.actionSheet";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],35:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="device.notification.alert";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],36:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="device.notification.confirm";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],37:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="device.notification.prompt";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],38:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="device.notification.toast";module.exports=function(e){return invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],39:[function(require,module,exports){
"use strict";var cacheCallbacks=[],errorState=0,_errMsg,changeToError=function(r){_errMsg=r,errorState=1,cacheCallbacks.forEach(function(r){setTimeout(function(){r(_errMsg)},0)})},error=function(r){1===errorState?setTimeout(function(){r(_errMsg)},0):cacheCallbacks.push(r)};exports.error=error,exports.changeToError=changeToError;


},{}],40:[function(require,module,exports){
module.exports={HAD_CONFIG:!1,CONFIG_ING:!1,CONFIG_ERROR:!1,CONFIG_ERROR_LOG:{},CONFIG_SUCCESS:!1,LAST_CONFIG_TIME:null,AUTHORIZED_API_LIST:[],UNAUTHORIZED_API_LIST:[]};


},{}],41:[function(require,module,exports){
var frameTalkClient=require("@ali/frame-talk/client"),deal404Middleware=require("./middleware/deal404"),deal401Middleware=require("./middleware/deal401"),deal408Middleware=require("./middleware/deal408"),logMiddleWare=require("./middleware/log"),dealPromiseMiddleware=require("./middleware/dealPromise"),_invokeAPI=function(e,d){var l=frameTalkClient.invokeAPI(e,d);return deal404Middleware(l),deal401Middleware(l),deal408Middleware(l),logMiddleWare(l),dealPromiseMiddleware(l,d),l};module.exports=_invokeAPI;


},{"./middleware/deal401":42,"./middleware/deal404":43,"./middleware/deal408":44,"./middleware/dealPromise":45,"./middleware/log":46,"@ali/frame-talk/client":51}],42:[function(require,module,exports){
var deal401Middleware=function(e){return e.result=e.result.catch(function(e){return"401"==e.code&&(e.docUrl="https://open-doc.dingtalk.com/doc2/detail?spm=0.0.0.0.F3gGdE&treeId=176&articleId=104958&docType=1",e.errorCode="401",e.errorMessage="访问权限错误",e.tips=["请确保当前的网页的是在从钉钉PC端，钉钉PC modal, 钉钉PC slidePanel 的入口打开"]),Promise.reject(e)}),e};module.exports=deal401Middleware;


},{}],43:[function(require,module,exports){
var devState=require("./../devState"),tipsMap={notConfig:["你还未调用过config方法，请尝试调用DingTalkPC.config方法后再尝试使用此API"],configIng:["在你调用此API时，你的DingTalkPC.config方法还在运行，请检查你的API方法是否在Ready之后执行"],configError:["你上一次的config失败了，请查看config失败日志后再重新尝试config"],notIncludeAPIList:["你当前调用的接口方法不包含在apiList里，请确保DingTalkPC.config里的apiList是否包含当前api接口"],noAuthAPI:["你当前调用的接口方法授权失败，请确保你是否有权限申请此API"]},deal404Middleware=function(t){return t.result=t.result.catch(function(e){return"404"==e.code&&(e.docUrl="https://open-doc.dingtalk.com/doc2/detail.htm?spm=a219a.7629140.0.0.dvoU0l&treeId=176&articleId=104955&docType=1#s2",e.errorCode="404",e.errorMessage="找不到"+t.methodName+"接口方法",devState.HAD_CONFIG?devState.HAD_CONFIG&&devState.CONFIG_ING&&!devState.CONFIG_ERROR&&!devState.CONFIG_SUCCESS?e.tips=tipsMap.configIng:devState.HAD_CONFIG&&!devState.CONFIG_ING&&devState.CONFIG_ERROR?(e.tips=tipsMap.configError,e.tips.push("config错误日志:"+JSON.stringify(devState.CONFIG_ERROR_LOG))):devState.HAD_CONFIG&&!devState.CONFIG_ING&&devState.CONFIG_SUCCESS&&(devState.AUTHORIZED_API_LIST.indexOf(t.methodName)<0?e.tips=tipsMap.notIncludeAPIList:devState.UNAUTHORIZED_API_LIST.indexOf(t.methodName)>-1?e.tips=tipsMap.noAuthAPI:e.tips=tipsMap.noAuthAPI):e.tips=tipsMap.notConfig),Promise.reject(e)}),t};module.exports=deal404Middleware;


},{"./../devState":40}],44:[function(require,module,exports){
var deal408Middleware=function(e){return e.result=e.result.catch(function(r){return"408"==r.code&&(r.docUrl="https://open-doc.dingtalk.com/doc2/detail?spm=0.0.0.0.F3gGdE&treeId=176&articleId=104958&docType=1",r.errorCode="408",r.errorMessage="调用"+e.methodName+"接口响应超时",r.tips=["请检查网络是否异常"]),Promise.reject(r)}),e};module.exports=deal408Middleware;


},{}],45:[function(require,module,exports){
"use strict";var delPromise=function(n,o){var e=o.onSuccess&&"function"==typeof o.onSuccess,t=o.onFail&&"function"==typeof o.onFail;return(e||t)&&(n.result=n.result.then(function(n){e&&o.onSuccess(n)},function(n){t&&o.onFail(n)})),n};module.exports=delPromise;


},{}],46:[function(require,module,exports){
var logMiddleWare=function(o){return o.result=o.result.catch(function(e){var r='font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: red; font-size: 13px; padding: 3px 0 background: #444; border-radius: 4px; line-height: 18px',l='font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 13px; color: #444; padding: 3px 0; line-height: 18px';return console.group("%c调用 "+o.methodName+" 时发生了错误",r),"string"==typeof e?console.log("错误信息："+e):"object"==typeof e&&(e.errorCode&&console.log("错误码："+e.errorCode),e.errorMessage&&console.log("错误信息："+e.errorMessage),e.tips&&(console.group("%c帮助信息：",l),e.tips.forEach(function(o,e){console.log(e+1+"、"+o)}),console.groupEnd()),e.docUrl&&console.log("相关文档地址："+e.docUrl),console.log("返回错误对象如下："),console.dir(e)),console.log("如果以上信息还未能解决你的问题，请访问 https://bbs.aliyun.com/thread/276.html 发帖咨询"),console.groupEnd(),Promise.reject(e)}),o};module.exports=logMiddleWare;


},{}],47:[function(require,module,exports){
"use strict";var cacheCallbacks=[],readyState=0,_res,changeToReady=function(e){_res=e,readyState=1,cacheCallbacks.forEach(function(e){setTimeout(function(){e(_res)},0)})},ready=function(e){1===readyState?setTimeout(function(){e(_res)},0):cacheCallbacks.push(e)};exports.ready=ready,exports.changeToReady=changeToReady;


},{}],48:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="runtime.permission.requestAuthCode";module.exports=function(e){return e.url=window.location.href.split("#")[0],invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],49:[function(require,module,exports){
"use strict";var invokeAPI=require("../../libs/invokeAPI"),methodName="runtime.permission.requestOperateAuthCode";module.exports=function(e){return e.url=window.location.href.split("#")[0],invokeAPI(methodName,e)};


},{"../../libs/invokeAPI":41}],50:[function(require,module,exports){
var ua=window.navigator.userAgent,isMac=ua.indexOf("Mac")!==-1,isNw=ua.indexOf("nw")!==-1,isWin=ua.indexOf("Win")!==-1,isDingTalkWin=ua.indexOf("dingtalk-win")!==-1,frameName=window.name,containerId=null,hostVersion="*",language="*";try{if(frameName){var frameConf=JSON.parse(frameName);containerId=frameConf.containerId,hostVersion=frameConf.hostVersion,language=frameConf.language||"*"}}catch(n){}module.exports={isDesktop:isNw||isDingTalkWin,isInDingTalk:!!containerId,isWeb:!isNw,isWin:isWin,isMac:isMac,hostVersion:hostVersion,language:language};


},{}],51:[function(require,module,exports){
"use strict";var RequestMsg=require("./libs/RequestMsg"),ResponseMsg=require("./libs/ResponseMsg"),PendingMsgs=require("./libs/PendingMsgs"),SYS_METHOD_NAME=require("./libs/SysMethodsName"),pendingMsgs=new PendingMsgs,isTrust=!1,hostOrigin="",containerId=null,trustTopDomain=".dingtalk.com",frameConf={};try{var frameConf=JSON.parse(window.name)}catch(e){frameConf={}}if(frameConf.hostOrigin){var hostName=frameConf.hostOrigin.split(":")[1];hostName.slice(0-trustTopDomain.length)===trustTopDomain&&frameConf.containerId?(isTrust=!0,hostOrigin=frameConf.hostOrigin,containerId=frameConf.containerId):console.error("Not in DingTalk PC webview")}else console.error("Not in DingTalk PC webview");var _p={},getHostPromise=new Promise(function(e,n){_p._resolve=e,_p._reject=n}),SYS_REQUEST_HANDLE={},hostWindow=null;window.top!==window&&(hostWindow=window.top,_p._resolve()),SYS_REQUEST_HANDLE[SYS_METHOD_NAME.SYS_INIT]=function(e){hostWindow=e.frameWindow,_p._resolve(),e.respond({})},window.addEventListener("message",function(e){var n=e.data,s=e.origin;if(s===hostOrigin)if("response"===n.type&&n.msgId){var t=n.msgId,i=pendingMsgs.getMsyById(t);i&&i.receiveResponse(n.body,!n.success)}else if("event"===n.type&&n.msgId){var t=n.msgId,i=pendingMsgs.getMsyById(t);i&&i.receiveEvent(n.eventName,n.body)}else if("request"===n.type&&n.msgId){var i=new ResponseMsg(e.source,s,n);SYS_REQUEST_HANDLE[i.methodName]&&SYS_REQUEST_HANDLE[i.methodName](i)}}),exports.invokeAPI=function(e,n){var s=new RequestMsg(containerId,e,n);return isTrust&&getHostPromise.then(function(){hostWindow&&hostWindow.postMessage(s.getPayload(),hostOrigin),pendingMsgs.addPending(s)}),s};var eventClientMsg=null;exports.addEventListener=function(e,n){eventClientMsg||(eventClientMsg=exports.invokeAPI(SYS_METHOD_NAME.SYS_EVENT,{})),eventClientMsg.addEventListener(e,n)},exports.removeEventListener=function(e,n){eventClientMsg&&eventClientMsg.removeEventListener(e,n)};


},{"./libs/PendingMsgs":52,"./libs/RequestMsg":53,"./libs/ResponseMsg":54,"./libs/SysMethodsName":55}],52:[function(require,module,exports){
"use strict";var PendingMsgs=function(){this.pendingMsgs={}};PendingMsgs.prototype.addPending=function(n){this.pendingMsgs[n.id]=n;var s=function(){delete this.pendingMsgs[n.id],n.removeEventListener("_finish",s)}.bind(this);n.addEventListener("_finish",s)},PendingMsgs.prototype.getMsyById=function(n){return this.pendingMsgs[n]},module.exports=PendingMsgs;


},{}],53:[function(require,module,exports){
"use strict";var _cloneDeep=require("lodash.clonedeep"),_assign=require("lodash.assign"),genMsgId=function(){return(new Date).getTime()+Math.ceil(1e3*Math.random())},TIMEOUT_MSG={code:408,reason:"timeout"},EVENTS_NAME={TIMEOUT:"_timeout",FINISH:"_finish"},defaultOption={timeout:-1},RequestMsg=function(e,t,i,s){this.id=genMsgId(),this.methodName=t,this.containerId=e,this.option=_assign({},defaultOption,s);var i=i||{};this._p={},this.result=new Promise(function(e,t){this._p._resolve=e,this._p._reject=t}.bind(this)),this.callbacks={},this.plainMsg=this._handleMsg(i),this._eventsHandle={},this._timeoutTimer=null,this._initTimeout(),this.isFinish=!1};RequestMsg.prototype._initTimeout=function(){this._clearTimeout(),this.option.timeout>0&&(this._timeoutTimer=setTimeout(function(){this.receiveEvent(EVENTS_NAME.TIMEOUT),this.receiveResponse(TIMEOUT_MSG,!0)}.bind(this),this.option.timeout))},RequestMsg.prototype._clearTimeout=function(){clearTimeout(this._timeoutTimer)},RequestMsg.prototype._handleMsg=function(e){var t={};return Object.keys(e).forEach(function(i){var s=e[i];"function"==typeof s&&"on"===i.slice(0,2)?this.callbacks[i]=s:t[i]=_cloneDeep(s)}.bind(this)),t},RequestMsg.prototype.getPayload=function(){return{msgId:this.id,containerId:this.containerId,methodName:this.methodName,body:this.plainMsg,type:"request"}},RequestMsg.prototype.receiveEvent=function(e,t){if(this.isFinish&&e!==EVENTS_NAME.FINISH)return!1;e!==EVENTS_NAME.FINISH&&e!==EVENTS_NAME.TIMEOUT&&this._initTimeout(),Array.isArray(this._eventsHandle[e])&&this._eventsHandle[e].forEach(function(e){try{e(t)}catch(e){console.error(t)}});var i="on"+e.charAt(0).toUpperCase()+e.slice(1);return this.callbacks[i]&&this.callbacks[i](t),!0},RequestMsg.prototype.addEventListener=function(e,t){if(!e||"function"!=typeof t)throw"eventName is null or handle is not a function, addEventListener fail";Array.isArray(this._eventsHandle[e])||(this._eventsHandle[e]=[]),this._eventsHandle[e].push(t)},RequestMsg.prototype.removeEventListener=function(e,t){if(!e||!t)throw"eventName is null or handle is null, invoke removeEventListener fail";if(Array.isArray(this._eventsHandle[e])){var i=this._eventsHandle[e].indexOf(t);i!==-1&&this._eventsHandle[e].splice(i,1)}},RequestMsg.prototype.receiveResponse=function(e,t){if(this.isFinish===!0)return!1;this._clearTimeout();var t=!!t;return t?this._p._reject(e):this._p._resolve(e),setTimeout(function(){this.receiveEvent(EVENTS_NAME.FINISH)}.bind(this),0),this.isFinish=!0,!0},module.exports=RequestMsg;


},{"lodash.assign":56,"lodash.clonedeep":59}],54:[function(require,module,exports){
"use strict";var ResponseMsg=function(s,e,t){if(this._msgId=t.msgId,this.frameWindow=s,this.methodName=t.methodName,this.clientOrigin=e,this.containerId=t.containerId,this.params=t.body,!this._msgId)throw"msgId not exist";if(!this.frameWindow)throw"frameWindow not exist";if(!this.methodName)throw"methodName not exits";if(!this.clientOrigin)throw"clientOrigin not exist";this.hasResponded=!1};ResponseMsg.prototype.respond=function(s,e){var e=!!e;if(this.hasResponded!==!0){var t={type:"response",success:!e,body:s,msgId:this._msgId};this.frameWindow.postMessage(t,this.clientOrigin),this.hasResponded=!0}},ResponseMsg.prototype.emit=function(s,e){var t={type:"event",eventName:s,body:e,msgId:this._msgId};this.frameWindow.postMessage(t,this.clientOrigin)},module.exports=ResponseMsg;


},{}],55:[function(require,module,exports){
"use strict";module.exports={SYS_EVENT:"SYS_openAPIContainerInitEvent",SYS_INIT:"SYS_openAPIContainerInit"};


},{}],56:[function(require,module,exports){
function assignValue(e,t,n){var r=e[t];hasOwnProperty.call(e,t)&&eq(r,n)&&(void 0!==n||t in e)||(e[t]=n)}function baseProperty(e){return function(t){return null==t?void 0:t[e]}}function copyObject(e,t,n,r){n||(n={});for(var o=-1,i=t.length;++o<i;){var u=t[o],s=r?r(n[u],e[u],u,n,e):e[u];assignValue(n,u,s)}return n}function createAssigner(e){return rest(function(t,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,u=o>2?n[2]:void 0;for(i=e.length>3&&"function"==typeof i?(o--,i):void 0,u&&isIterateeCall(n[0],n[1],u)&&(i=o<3?void 0:i,o=1),t=Object(t);++r<o;){var s=n[r];s&&e(t,s,r,i)}return t})}function isIndex(e,t){return t=null==t?MAX_SAFE_INTEGER:t,!!t&&("number"==typeof e||reIsUint.test(e))&&e>-1&&e%1==0&&e<t}function isIterateeCall(e,t,n){if(!isObject(n))return!1;var r=typeof t;return!!("number"==r?isArrayLike(n)&&isIndex(t,n.length):"string"==r&&t in n)&&eq(n[t],e)}function isPrototype(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||objectProto;return e===n}function eq(e,t){return e===t||e!==e&&t!==t}function isArrayLike(e){return null!=e&&isLength(getLength(e))&&!isFunction(e)}function isFunction(e){var t=isObject(e)?objectToString.call(e):"";return t==funcTag||t==genTag}function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var keys=require("lodash.keys"),rest=require("lodash.rest"),MAX_SAFE_INTEGER=9007199254740991,funcTag="[object Function]",genTag="[object GeneratorFunction]",reIsUint=/^(?:0|[1-9]\d*)$/,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,objectToString=objectProto.toString,propertyIsEnumerable=objectProto.propertyIsEnumerable,nonEnumShadows=!propertyIsEnumerable.call({valueOf:1},"valueOf"),getLength=baseProperty("length"),assign=createAssigner(function(e,t){if(nonEnumShadows||isPrototype(t)||isArrayLike(t))return void copyObject(t,keys(t),e);for(var n in t)hasOwnProperty.call(t,n)&&assignValue(e,n,t[n])});module.exports=assign;


},{"lodash.keys":57,"lodash.rest":58}],57:[function(require,module,exports){
function baseTimes(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n}function overArg(r,e){return function(t){return r(e(t))}}function arrayLikeKeys(r,e){var t=isArray(r)||isArguments(r)?baseTimes(r.length,String):[],n=t.length,o=!!n;for(var i in r)!e&&!hasOwnProperty.call(r,i)||o&&("length"==i||isIndex(i,n))||t.push(i);return t}function baseKeys(r){if(!isPrototype(r))return nativeKeys(r);var e=[];for(var t in Object(r))hasOwnProperty.call(r,t)&&"constructor"!=t&&e.push(t);return e}function isIndex(r,e){return e=null==e?MAX_SAFE_INTEGER:e,!!e&&("number"==typeof r||reIsUint.test(r))&&r>-1&&r%1==0&&r<e}function isPrototype(r){var e=r&&r.constructor,t="function"==typeof e&&e.prototype||objectProto;return r===t}function isArguments(r){return isArrayLikeObject(r)&&hasOwnProperty.call(r,"callee")&&(!propertyIsEnumerable.call(r,"callee")||objectToString.call(r)==argsTag)}function isArrayLike(r){return null!=r&&isLength(r.length)&&!isFunction(r)}function isArrayLikeObject(r){return isObjectLike(r)&&isArrayLike(r)}function isFunction(r){var e=isObject(r)?objectToString.call(r):"";return e==funcTag||e==genTag}function isLength(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=MAX_SAFE_INTEGER}function isObject(r){var e=typeof r;return!!r&&("object"==e||"function"==e)}function isObjectLike(r){return!!r&&"object"==typeof r}function keys(r){return isArrayLike(r)?arrayLikeKeys(r):baseKeys(r)}var MAX_SAFE_INTEGER=9007199254740991,argsTag="[object Arguments]",funcTag="[object Function]",genTag="[object GeneratorFunction]",reIsUint=/^(?:0|[1-9]\d*)$/,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,objectToString=objectProto.toString,propertyIsEnumerable=objectProto.propertyIsEnumerable,nativeKeys=overArg(Object.keys,Object),isArray=Array.isArray;module.exports=keys;


},{}],58:[function(require,module,exports){
function apply(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function baseRest(e,t){return t=nativeMax(void 0===t?e.length-1:t,0),function(){for(var r=arguments,n=-1,o=nativeMax(r.length-t,0),i=Array(o);++n<o;)i[n]=r[t+n];n=-1;for(var a=Array(t+1);++n<t;)a[n]=r[n];return a[t]=i,apply(e,this,a)}}function rest(e,t){if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT);return t=void 0===t?t:toInteger(t),baseRest(e,t)}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function isObjectLike(e){return!!e&&"object"==typeof e}function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&objectToString.call(e)==symbolTag}function toFinite(e){if(!e)return 0===e?e:0;if(e=toNumber(e),e===INFINITY||e===-INFINITY){var t=e<0?-1:1;return t*MAX_INTEGER}return e===e?e:0}function toInteger(e){var t=toFinite(e),r=t%1;return t===t?r?t-r:t:0}function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return NAN;if(isObject(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(reTrim,"");var r=reIsBinary.test(e);return r||reIsOctal.test(e)?freeParseInt(e.slice(2),r?2:8):reIsBadHex.test(e)?NAN:+e}var FUNC_ERROR_TEXT="Expected a function",INFINITY=1/0,MAX_INTEGER=1.7976931348623157e308,NAN=NaN,symbolTag="[object Symbol]",reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt,objectProto=Object.prototype,objectToString=objectProto.toString,nativeMax=Math.max;module.exports=rest;


},{}],59:[function(require,module,exports){
function cloneDeep(e){return baseClone(e,!0,!0)}var baseClone=require("lodash._baseclone");module.exports=cloneDeep;


},{"lodash._baseclone":60}],60:[function(require,module,exports){
(function (global){
function addMapEntry(e,t){return e.set(t[0],t[1]),e}function addSetEntry(e,t){return e.add(t),e}function arrayEach(e,t){for(var a=-1,r=e.length;++a<r&&t(e[a],a,e)!==!1;);return e}function arrayPush(e,t){for(var a=-1,r=t.length,n=e.length;++a<r;)e[n+a]=t[a];return e}function arrayReduce(e,t,a,r){var n=-1,o=e.length;for(r&&o&&(a=e[++n]);++n<o;)a=t(a,e[n],n,e);return a}function baseTimes(e,t){for(var a=-1,r=Array(e);++a<e;)r[a]=t(a);return r}function checkGlobal(e){return e&&e.Object===Object?e:null}function isHostObject(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function mapToArray(e){var t=-1,a=Array(e.size);return e.forEach(function(e,r){a[++t]=[r,e]}),a}function setToArray(e){var t=-1,a=Array(e.size);return e.forEach(function(e){a[++t]=e}),a}function Hash(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{}}function hashDelete(e){return this.has(e)&&delete this.__data__[e]}function hashGet(e){var t=this.__data__;if(nativeCreate){var a=t[e];return a===HASH_UNDEFINED?void 0:a}return hasOwnProperty.call(t,e)?t[e]:void 0}function hashHas(e){var t=this.__data__;return nativeCreate?void 0!==t[e]:hasOwnProperty.call(t,e)}function hashSet(e,t){var a=this.__data__;return a[e]=nativeCreate&&void 0===t?HASH_UNDEFINED:t,this}function ListCache(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}function listCacheClear(){this.__data__=[]}function listCacheDelete(e){var t=this.__data__,a=assocIndexOf(t,e);if(a<0)return!1;var r=t.length-1;return a==r?t.pop():splice.call(t,a,1),!0}function listCacheGet(e){var t=this.__data__,a=assocIndexOf(t,e);return a<0?void 0:t[a][1]}function listCacheHas(e){return assocIndexOf(this.__data__,e)>-1}function listCacheSet(e,t){var a=this.__data__,r=assocIndexOf(a,e);return r<0?a.push([e,t]):a[r][1]=t,this}function MapCache(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}function mapCacheClear(){this.__data__={hash:new Hash,map:new(Map||ListCache),string:new Hash}}function mapCacheDelete(e){return getMapData(this,e).delete(e)}function mapCacheGet(e){return getMapData(this,e).get(e)}function mapCacheHas(e){return getMapData(this,e).has(e)}function mapCacheSet(e,t){return getMapData(this,e).set(e,t),this}function Stack(e){this.__data__=new ListCache(e)}function stackClear(){this.__data__=new ListCache}function stackDelete(e){return this.__data__.delete(e)}function stackGet(e){return this.__data__.get(e)}function stackHas(e){return this.__data__.has(e)}function stackSet(e,t){var a=this.__data__;return a instanceof ListCache&&a.__data__.length==LARGE_ARRAY_SIZE&&(a=this.__data__=new MapCache(a.__data__)),a.set(e,t),this}function assignValue(e,t,a){var r=e[t];hasOwnProperty.call(e,t)&&eq(r,a)&&(void 0!==a||t in e)||(e[t]=a)}function assocIndexOf(e,t){for(var a=e.length;a--;)if(eq(e[a][0],t))return a;return-1}function baseAssign(e,t){return e&&copyObject(t,keys(t),e)}function baseClone(e,t,a,r,n,o,c){var s;if(r&&(s=o?r(e,n,o,c):r(e)),void 0!==s)return s;if(!isObject(e))return e;var i=isArray(e);if(i){if(s=initCloneArray(e),!t)return copyArray(e,s)}else{var u=getTag(e),l=u==funcTag||u==genTag;if(isBuffer(e))return cloneBuffer(e,t);if(u==objectTag||u==argsTag||l&&!o){if(isHostObject(e))return o?e:{};if(s=initCloneObject(l?{}:e),!t)return copySymbols(e,baseAssign(s,e))}else{if(!cloneableTags[u])return o?e:{};s=initCloneByTag(e,u,baseClone,t)}}c||(c=new Stack);var g=c.get(e);if(g)return g;if(c.set(e,s),!i)var f=a?getAllKeys(e):keys(e);return arrayEach(f||e,function(n,o){f&&(o=n,n=e[o]),assignValue(s,o,baseClone(n,t,a,r,o,e,c))}),s}function baseCreate(e){return isObject(e)?objectCreate(e):{}}function baseGetAllKeys(e,t,a){var r=t(e);return isArray(e)?r:arrayPush(r,a(e))}function baseHas(e,t){return hasOwnProperty.call(e,t)||"object"==typeof e&&t in e&&null===getPrototype(e)}function baseKeys(e){return nativeKeys(Object(e))}function baseProperty(e){return function(t){return null==t?void 0:t[e]}}function cloneBuffer(e,t){if(t)return e.slice();var a=new e.constructor(e.length);return e.copy(a),a}function cloneArrayBuffer(e){var t=new e.constructor(e.byteLength);return new Uint8Array(t).set(new Uint8Array(e)),t}function cloneDataView(e,t){var a=t?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}function cloneMap(e,t,a){var r=t?a(mapToArray(e),!0):mapToArray(e);return arrayReduce(r,addMapEntry,new e.constructor)}function cloneRegExp(e){var t=new e.constructor(e.source,reFlags.exec(e));return t.lastIndex=e.lastIndex,t}function cloneSet(e,t,a){var r=t?a(setToArray(e),!0):setToArray(e);return arrayReduce(r,addSetEntry,new e.constructor)}function cloneSymbol(e){return symbolValueOf?Object(symbolValueOf.call(e)):{}}function cloneTypedArray(e,t){var a=t?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}function copyArray(e,t){var a=-1,r=e.length;for(t||(t=Array(r));++a<r;)t[a]=e[a];return t}function copyObject(e,t,a,r){a||(a={});for(var n=-1,o=t.length;++n<o;){var c=t[n],s=r?r(a[c],e[c],c,a,e):e[c];assignValue(a,c,s)}return a}function copySymbols(e,t){return copyObject(e,getSymbols(e),t)}function getAllKeys(e){return baseGetAllKeys(e,keys,getSymbols)}function getMapData(e,t){var a=e.__data__;return isKeyable(t)?a["string"==typeof t?"string":"hash"]:a.map}function getNative(e,t){var a=e[t];return isNative(a)?a:void 0}function getPrototype(e){return nativeGetPrototype(Object(e))}function getSymbols(e){return getOwnPropertySymbols(Object(e))}function getTag(e){return objectToString.call(e)}function initCloneArray(e){var t=e.length,a=e.constructor(t);return t&&"string"==typeof e[0]&&hasOwnProperty.call(e,"index")&&(a.index=e.index,a.input=e.input),a}function initCloneObject(e){return"function"!=typeof e.constructor||isPrototype(e)?{}:baseCreate(getPrototype(e))}function initCloneByTag(e,t,a,r){var n=e.constructor;switch(t){case arrayBufferTag:return cloneArrayBuffer(e);case boolTag:case dateTag:return new n(+e);case dataViewTag:return cloneDataView(e,r);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(e,r);case mapTag:return cloneMap(e,r,a);case numberTag:case stringTag:return new n(e);case regexpTag:return cloneRegExp(e);case setTag:return cloneSet(e,r,a);case symbolTag:return cloneSymbol(e)}}function indexKeys(e){var t=e?e.length:void 0;return isLength(t)&&(isArray(e)||isString(e)||isArguments(e))?baseTimes(t,String):null}function isIndex(e,t){return t=null==t?MAX_SAFE_INTEGER:t,!!t&&("number"==typeof e||reIsUint.test(e))&&e>-1&&e%1==0&&e<t}function isKeyable(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function isPrototype(e){var t=e&&e.constructor,a="function"==typeof t&&t.prototype||objectProto;return e===a}function toSource(e){if(null!=e){try{return funcToString.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function eq(e,t){return e===t||e!==e&&t!==t}function isArguments(e){return isArrayLikeObject(e)&&hasOwnProperty.call(e,"callee")&&(!propertyIsEnumerable.call(e,"callee")||objectToString.call(e)==argsTag)}function isArrayLike(e){return null!=e&&isLength(getLength(e))&&!isFunction(e)}function isArrayLikeObject(e){return isObjectLike(e)&&isArrayLike(e)}function isFunction(e){var t=isObject(e)?objectToString.call(e):"";return t==funcTag||t==genTag}function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function isObjectLike(e){return!!e&&"object"==typeof e}function isNative(e){if(!isObject(e))return!1;var t=isFunction(e)||isHostObject(e)?reIsNative:reIsHostCtor;return t.test(toSource(e))}function isString(e){return"string"==typeof e||!isArray(e)&&isObjectLike(e)&&objectToString.call(e)==stringTag}function keys(e){var t=isPrototype(e);if(!t&&!isArrayLike(e))return baseKeys(e);var a=indexKeys(e),r=!!a,n=a||[],o=n.length;for(var c in e)!baseHas(e,c)||r&&("length"==c||isIndex(c,o))||t&&"constructor"==c||n.push(c);return n}function constant(e){return function(){return e}}var LARGE_ARRAY_SIZE=200,HASH_UNDEFINED="__lodash_hash_undefined__",MAX_SAFE_INTEGER=9007199254740991,argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",genTag="[object GeneratorFunction]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",promiseTag="[object Promise]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reFlags=/\w*$/,reIsHostCtor=/^\[object .+?Constructor\]$/,reIsUint=/^(?:0|[1-9]\d*)$/,cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=!0,cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=!1;var objectTypes={function:!0,object:!0},freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType?exports:void 0,freeModule=objectTypes[typeof module]&&module&&!module.nodeType?module:void 0,moduleExports=freeModule&&freeModule.exports===freeExports?freeExports:void 0,freeGlobal=checkGlobal(freeExports&&freeModule&&"object"==typeof global&&global),freeSelf=checkGlobal(objectTypes[typeof self]&&self),freeWindow=checkGlobal(objectTypes[typeof window]&&window),thisGlobal=checkGlobal(objectTypes[typeof this]&&this),root=freeGlobal||freeWindow!==(thisGlobal&&thisGlobal.window)&&freeWindow||freeSelf||thisGlobal||Function("return this")(),arrayProto=Array.prototype,objectProto=Object.prototype,funcToString=Function.prototype.toString,hasOwnProperty=objectProto.hasOwnProperty,objectToString=objectProto.toString,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Buffer=moduleExports?root.Buffer:void 0,Symbol=root.Symbol,Uint8Array=root.Uint8Array,getOwnPropertySymbols=Object.getOwnPropertySymbols,objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,nativeGetPrototype=Object.getPrototypeOf,nativeKeys=Object.keys,DataView=getNative(root,"DataView"),Map=getNative(root,"Map"),Promise=getNative(root,"Promise"),Set=getNative(root,"Set"),WeakMap=getNative(root,"WeakMap"),nativeCreate=getNative(Object,"create"),dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap),symbolProto=Symbol?Symbol.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;Hash.prototype.clear=hashClear,Hash.prototype.delete=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet,ListCache.prototype.clear=listCacheClear,ListCache.prototype.delete=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet,MapCache.prototype.clear=mapCacheClear,MapCache.prototype.delete=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet,Stack.prototype.clear=stackClear,Stack.prototype.delete=stackDelete,Stack.prototype.get=stackGet,Stack.prototype.has=stackHas,Stack.prototype.set=stackSet;var getLength=baseProperty("length");getOwnPropertySymbols||(getSymbols=function(){return[]}),(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map)!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set)!=setTag||WeakMap&&getTag(new WeakMap)!=weakMapTag)&&(getTag=function(e){var t=objectToString.call(e),a=t==objectTag?e.constructor:void 0,r=a?toSource(a):void 0;if(r)switch(r){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag}return t});var isArray=Array.isArray,isBuffer=Buffer?function(e){return e instanceof Buffer}:constant(!1);module.exports=baseClone;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],61:[function(require,module,exports){
module.exports={
  "name": "dingtalk-pc-api",
  "version": "2.6.2",
  "description": "",
  "main": "index.js",
  "scripts": {
    "prestart": "tnpm install",
    "start": "ding-server -s -S 8443 -N dev2.dingtalk.com -n g2-assets.daily.taobao.net",
    "start-nossl": "ding-server -p 8443 -N dev2.dingtalk.com -n g2-assets.daily.taobao.net",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dingTalk": {
    "mode": "browserify",
    "entry": [
      "example/index.js",
      "example/openIndex.js",
      "example/slidePanel.js",
      "example/modal.js"
    ],
    "cssOutput": [
      "example/index.css"
    ],
    "UMDEntry": [
      {
        "fpath": "./index.js",
        "namespace": "DingTalkPC"
      }
    ],
    "htmlRoot": "example"
  },
  "dingTalkUMD": {
    "namespace": "DingTalkPC",
    "src": "./index.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@ali/ding-server": "~2.7.0"
  },
  "dependencies": {
    "@ali/frame-talk": "~3.2.0",
    "codemirror": "~5.7.0",
    "jquery": "~2.1.4",
    "js-beautify": "~1.5.10",
    "lodash": "~3.10.0",
    "lodash.assign": "~3.2.0",
    "lodash.clonedeep": "~3.0.2"
  }
}

},{}]},{},[1])(1)
});