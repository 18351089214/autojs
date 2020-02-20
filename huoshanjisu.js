tLog("火山极速版")
threads.start(function(){
    setTimeout(function(){
        tLog("退出程序");
        home();
        exit();
    }, 4200000);
});

enterMyMainPage();

function tLog(msg){
    toast(msg);
    console.log(msg);
}

function enterMyMainPage(){
    launchApp("火山极速版");
    tLog("火山极速版启动")
    sleep(3000);
    // bounds(36,997,501,1142).clickable().click();
    var bds = id("yh").packageName("com.ss.android.ugc.livelite").findOne().bounds();
    click(bds.centerX(), bds.centerY());
    sleep(1000);
    while (true){
        var random = Math.floor(Math.random() * 22001);
        swipe(120, 1415, 320, 480, 490);
        tLog("滑动屏幕");
        sleep(random);
        // sleep(22000);
    }
}