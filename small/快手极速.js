tLog("快手极速版")
//启用按键监听
// events.observeKey();
//监听音量上键弹起
// events.onKeyUp("volume_up", function(event){
//     toast("退出程序");
//     tLog("退出程序");
//     exit();
// });
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
    launchApp("快手极速版");
    tLog("快手极速版启动")
    sleep(5000);
    while (true){
        var random = Math.floor(Math.random() * 25001);
        sleep(random);
        swipe(230, 2100, 480, 560, 490);
        tLog("滑动屏幕时间：");
        tLog(Date());
    }
}