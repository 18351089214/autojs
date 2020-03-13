tLog("火山极速版")
threads.start(function(){
    setTimeout(function(){
        tLog("退出程序");
        home();
        exit();
    }, 7200000);
});

enterMyMainPage();

function tLog(msg){
    toast(msg);
    console.log(msg);
}

function enterMyMainPage(){
    launchApp("火山极速版");
    tLog("火山极速版启动")
    sleep(5000);
    // var bds = id("yh").packageName("com.ss.android.ugc.livelite").findOne().bounds();
    // click(bds.centerX(), bds.centerY());
    // bounds(362, 865, 720, 1441).clickable().click();
    // sleep(1000);
    while (true){
        var random = Math.floor(Math.random() * 32001);
        // sleep(random)
        sleep(22000);
        swipe(120, 1415, 320, 480, 490);
        log("滑动屏幕时间：", Date());
    }
}