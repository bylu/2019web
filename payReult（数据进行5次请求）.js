function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

var count = 1;
var timer;
function sentData() {
    timer = setTimeout(getInfo, 2000);
}
function getInfo() {
    var status=0;
    var Request = new GetRequest();
    var queryOrder = Request['queryOrder'];
    $(".loadEffect").css("display","block");
    $(".payResult").css("display","none");
    if (count >= 5) {
        if(status == 0){
            $(".loadEffect").css("display","none");
            $(".payResult").css("display","block");
            $(".errorPayContent").css("display","block");
        }else{
            $(".loadEffect").css("display","none");
            $(".payResult").css("display","block");
            $(".successPayContent").css("display","block");
        }
        return;
    }

    $.post(
        "",
        {},
        function (json) {
            status = json.data.status;
            if(json.data.status==1){

            }else{
                count += 1;
                sentData();
            }
        }, "json"
    );
}

$(function(){
    sentData();

});