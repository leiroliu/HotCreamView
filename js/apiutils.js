

var api = "http://localhost:8080/api"


const API_CODE_SUCCESS = 0;
const PATH_BASE_PATH = "/HotCreamView";
const loginUserTokenKey = "userToken";



function setCookie(key, val){
    document.cookie(key, val);
}
function setLoginCookie(val){
    setCookie(loginUserTokenKey, val);
}

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

function getLoginToken(){

    return getLocal(loginUserTokenKey );
}


function saveLocal(key, val , expire){

    localStorage.setItem(key , JSON.stringify({
        "val":val,
        "saveTime":new Date().getTime(),
        "expire":expire
    }))
}

function getLocal(key){
    var strVal = localStorage.getItem(key);
    var data = JSON.parse(strVal);
    if(data == null){
        return null;
    }
    if(new Date().getTime() < (data.saveTime + (data.expire * 1000))){
        return data.val;
    }
    return null;
}

function post(path , data, callback, errorBack, headerBack){
    var url = api + path;
    var instance = axios.create({

        timeout: 1000,
        headers: {
            'X-Custom-Header': 'foobar',
            "Content-type":"application/json;charset=UTF-8",
            "loginUserToken":getLoginToken()
        },

    });
    instance.post(url, data).then(function(resp){
        if(callback !== undefined){
            callback(resp.data, resp.status);
        }
        if(errorBack !== undefined){
            errorBack(resp.status)
        }
        if(headerBack !== undefined){
            headerBack(resp.headers)
        }
    });
}


function get(){
    alert("execute alert!!")
}
