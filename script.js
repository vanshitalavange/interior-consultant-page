
function eventHandler(){
    var deviceWidth = document.body.clientWidth;
    if(deviceWidth>480){
        document.location.href = "index.html";
    }
}

window.addEventListener("resize", eventHandler)