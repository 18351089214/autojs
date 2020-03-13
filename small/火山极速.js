tLog("火山极速版")
threads.start(function(){
    setTimeout(function(){
        tLog("退出程序");
        home();
        exit();
    }, 6000000);
});

enterMyMainPage();

function tLog(msg){
    toast(msg);
    console.log(msg);
}

function enterMyMainPage(){
    launchApp("火山极速版");
    tLog("火山极速版启动")
    sleep(7000);
    // var bps = id("ys").findOne().bounds();
    // click(bps.centerX(), bps.centerY());
    // bounds(543,1095,1080,1959).clickable().click();
    // sleep(1000);
    while (true){
        var random = Math.floor(Math.random() * 32001);
        sleep(random);
        swipe(120, 1915, 320, 480, 490);
        log("滑动屏幕时间：", Date());
    }
}