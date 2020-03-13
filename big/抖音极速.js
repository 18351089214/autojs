threads.start(function(){
    setTimeout(function(){
        tLog("退出程序");
        home();
        exit();
    }, 10800000);
});
enterMyMainPage();

function tLog(msg){
    toast(msg);
    console.log(msg);
}

function enterMyMainPage(){
    launchApp("抖音极速版");
    tLog("抖音极速版启动")
    sleep(5000);
    flag = true
    while (true){
        var random = Math.floor(Math.random() * 30001);
        sleep(random);
        swipe(120, 1415, 320, 480, 490);
        tLog("滑动屏幕");
        if (flag) {
            back();
            tLog("已返回");
            flag = false
        }
    }
}