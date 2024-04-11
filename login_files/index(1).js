var info = navigator.userAgent;
var qrcodeUrl = '';
var currentHash = '';
var reg = /^#\/user\/(login|register|register\-result|findback|findtype|changepassword|loginH5|changeresult|findstudentno|findpwdfillno|findsnosuccess|findpwdbyphone|resetPwd|findPwd)/ig


function handleRedirect(data) {
    if (data.success) {
        if (data.redirectUrl != null) {
            localStorage.setItem('type','account');
            window.location.href = data.redirectUrl;
        }else {
            window.location.href = "/cas/loginMsg";
        }

    }else {
        //显示扫码
        loginForBrowser();
    }

}

function contains(str, substr) {
    return str.indexOf(substr) >= 0;
}

function loginForMobile() {
    var rootBox = $('#root'),
        loadingBox = $('#loading-box');
    rootBox.hide();
    loadingBox.show();
    $.ajax({
        type: "get",
        url: "/cas/loginFordingAppConfig",
        success: function (data) {
            if(data.ifYunGu) {
                dd.config({
                    agentId: data.agentId,
                    corpId: data.corpId,
                    timeStamp: data.timeStamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: [
                        'runtime.info',
                        'biz.contact.choose',
                        'device.notification.confirm',
                        'device.notification.alert',
                        'device.notification.prompt',
                        'biz.ding.post',
                        'biz.util.openLink'
                    ]
                });
            } else {
                // alert(`校内：${data.ifYunGu}`)    
            }     
            // alert(`${data.orgId}`)    
            dd.ready(function () {
                dd.runtime.permission.requestAuthCode({
                    corpId: data.corpId,
                    onSuccess: function (info) {
                        var code = info.code;
                        $.getJSON("/cas/loginForCorpApp?code=" + code + '&orgId=' + data.orgId, function (json) {
                            if (json.success) {
                                handleRedirect(json); 
                            } else {
                                loadingBox.hide();
                                rootBox.show();
                            }
                            //window.location.href = json.redirectUrl;
                        });
                        //window.location.href = "/cas/corpAppLogin?code=" + code;

                    },
                    onFail: function (err) {
                        console.log(err, 'err');
                        alert('code error: ' + JSON.stringify(err));
                        loadingBox.hide();
                        rootBox.show();
                    }

                });
            });
            dd.error(function (err) {
                alert('dd error: ' + JSON.stringify(err));
                loadingBox.hide();
                rootBox.show();
                loginForBrowser();
                // alert('dd error: ' + JSON.stringify(err));
            });
        }
    });
}

function fun2() {
    window.location.href='/forGetPassword'
}

function loginForPc() {
    $.ajax({
        type: "get",
        url: "/cas/loginFordingAppConfig",
        success: function (data) {
            // console.log(data);
            DingTalkPC.config({
                agentId: data.agentId,
                corpId: data.corpId,
                timeStamp: data.timeStamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: [
                    'runtime.info',
                    'device.notification.alert',
                    'device.notification.confirm',
                    'device.notification.prompt'
                ]
            });

            DingTalkPC.ready(function () {
                DingTalkPC.runtime.permission.requestAuthCode({
                    corpId: data.corpId,
                    // onSuccess: function (info) {
                    //     console.log(info);
                    //     $('#corpLoginInfo').append(info);
                    //     var code = info.code;
                    //     $.getJSON("/cas/loginForCorpApp?code=" + code,function(json){
                    //         console.log(json);
                    //         handleRedirect(json);
                    //         //window.location.href = json.redirectUrl;
                    //     });
                    //     //window.location.href ="/cas/loginForCorpApp?code=" + code;

                    // },
                    onSuccess: function (info) {
                        console.log("=============================");
                        console.log(info);
                        //window.location.href ="/cas/loginForCorpApp?code=" + code;
                        $('#corpLoginInfo').append(info);
                        var code = info.code;
                        // 获取code之后，发起请求，请求/api/serviceAndOrgId，获取需要跳转的url和orgID
                        $.ajax({
                            type: "get",
                            url: "/out/serviceAndOrgId",
                            success: function (data) {
                                // 获取到需要跳转的url之后，需要拼接当前
                                // [当前域名] + "/api/cas/loginForCorpAppAndRedirect?code=xx&service=xxx&orgId=xxx"
                                //其中code是上面免登获取的code，service是需要跳转的url。
                                //执行之后已经打开了一个浏览器创建，需要处理钉钉应用当前的页面。
                                let _url = window.location.origin
                                var url =_url + "/out/cas/loginForCorpAppAndRedirect?code="
                                    + code + "&service=" + data.service + "&orgId=" + data.orgId;
                                //利用钉钉api唤醒浏览器；
                                // alert(url)
                                if(url.indexOf('dingding') > -1) {
                                    window.location.href = url;
                                } else {
                                    DingTalkPC.biz.util.openLink({
                                        url: url,//要打开链接的地址
                                        onSuccess : function(json) {
                                            // alert(json);
                                            // handleRedirect(json);
                                            // window.history.go(-1);
                                        },
                                        onFail : function() {}
                                    });
                                    // window.history.go(-1);
                                }                     
                            }
                        });
                    },
                    onFail: function (err) {
                        console.log(err);
                        $('#corpLoginInfo').append(err);
                    }

                });
            });
            DingTalkPC.error(function (err) {
                loginForBrowser();
                alert('dd error: ' + JSON.stringify(err));
            });
        }
    });

}

function loginForBrowser() {
    //loginForDingQRCodeConfig
    /*加载二维码*/
    $.getJSON("/cas/loginForDingQRCodeConfig",function(data){
        console.log(data);
        appid=data.appid;
        response_type=data.responseType;
        scope=data.scope;
        state=data.state;
        redirect_uri=encodeURIComponent(window.location.protocol + "//" + window.location.host + data.redirectUri);
        qrcodeUrl = "https://login.dingtalk.com/login/qrcode.htm?goto=https%3A%2F%2Foapi.dingtalk.com%2Fconnect%2Foauth2%2Fsns_authorize%3F" +
            "appid%3D"+appid+"%26" +
            "response_type%3D"+response_type+"%26" +
            "scope%3D"+scope+"%26" +
            "state%3D"+state+"%26" +
            "redirect_uri%3D"+redirect_uri;
        //console.log(qrcodeUrl);


    });
    /*扫码之后*/
    if (typeof window.addEventListener != 'undefined') {
        window.addEventListener('message', hanndleMessage, false);
    } else if (typeof window.attachEvent != 'undefined') {
        //for ie
        window.attachEvent('onmessage', hanndleMessage);
    }

}

function getUrlParam(name, url) {
    // 如果链接没有参数，或者链接中不存在我们要获取的参数，直接返回空
    if (url.indexOf("?") == -1 || url.indexOf(name + '=') == -1) {
        return '';
    }
    // 获取链接中参数部分
    var queryString = url.substring(url.indexOf("?") + 1);
    if (queryString.indexOf('#') > -1) {
        queryString = queryString.substring(0, queryString.indexOf('#'));
    };
    // 分离参数对 ?key=value&key2=value2
    var parameters = queryString.split("&");
    var pos, paraName, paraValue;
    for (var i = 0; i < parameters.length; i++) {
        // 获取等号位置
        pos = parameters[i].indexOf('=');
        if (pos == -1) {
            continue;
        }
        // 获取name 和 value
        paraName = parameters[i].substring(0, pos);
        paraValue = parameters[i].substring(pos + 1);
        // 如果查询的name等于当前name，就返回当前值，同时，将链接中的+号还原成空格
        if (paraName == name) {
            return decodeURIComponent(paraValue.replace("+", " "));
        }
    }
    return '';
}

function showAccounts(data) {
    if (data.success) {
        var corps = data.corps;

        if (corps.length < 1) {
            $("#div3").show();
            $("#div2").hide();
            /*$("#accounts").empty();
            $("#accounts").append("钉钉未绑定系统账号");*/
            window.location.href="/cas/loginError"

        }

        if (corps.length == 1) {
            chooseAccount(corps[0].code);
            return;
        }

        for (var i = 0;i<corps.length ; i++){
            var code = corps[i].code;
            var cropName = corps[i].cropName;
            var pre = '';
            if (i>=1){
                pre = '<br/>';
            }
            //console.log(code)
            //var html = pre+ '<input type="button" value="'+cropName+'" onclick="chooseAccount('+code+')" />';
            var html = pre+ "<button onclick='chooseAccount(\""+ code + "\")'>"+cropName+"</button>";
            console.log(html);
            $("#accounts").append(html);
        }
        $("#div3").show();
        $("#div2").hide();
    }else {
        $("#div3").show();
        $("#div2").hide();
        $("#accounts").empty();
        $("#accounts").append(data.msg);

    }
}

function chooseAccount(code) {
    $.getJSON('/cas/loginForUserAccountCode?code='+code,function(result){
        if (result.code == 0){
            //成功
            handleRedirect(result);
            //window.location.href = result.redirectUrl;
        }else{

        }
    });
}

$(function () {
    currentHash = window.location.hash || '';
    if(!reg.test(currentHash)){
        window.location.hash = '#/user/login';
    }
    if (contains(info, "DingTalk")) {
        $("#corpLoginInfo").show();
        if (contains(info,"AliApp")){
            //移动端
            loginForMobile();
            return;
        }
        //PC端
        loginForPc();
    } else {
        //浏览器
        loginForBrowser();
    }
});

window.hanndleMessage = function (event) {
    var data = event.data;
    var origin = event.origin;
    $.ajax({
        type: "get",
        async: false,
        url: getUrlParam("goto", qrcodeUrl) + "&loginTmpCode=" + data,
        dataType: "jsonp",
        jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
        jsonpCallback:"qrcodeCallBack",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
        success: function(json){
            console.log(data,'success------')
            localStorage.setItem('data',data);
            localStorage.setItem('json',json);
            localStorage.setItem('url',getUrlParam("goto", qrcodeUrl) + "&loginTmpCode=" + data);
            loginByDingTempCode(json.code);
        },
        error: function(){
            console.log(data,'error------')
            localStorage.setItem('errorData',data);
            localStorage.setItem('url',getUrlParam("goto", qrcodeUrl) + "&loginTmpCode=" + data)
            //console.log("fail");
        }
    });
};


function loginByDingTempCode(code) {
    let role = window.localStorage.getItem("login_role") || "teacher";
    let count = role === 'student'? 2 : role==='parent'? 3 : 1
    $.getJSON('/cas/loginByDingCode?role='+count+'&code='+code,function(result){
        if (result.code == 0){
            //成功
            handleRedirect(result);
            //window.location.href = result.redirectUrl;
        }else{

        }
    });
}