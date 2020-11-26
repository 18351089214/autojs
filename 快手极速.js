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
    var count = 0;
    while (true){
        count += 1;
        var random = Math.floor(Math.random() * 30001);
        swipe(device.width/2, device.height - 300, 150, 200, 800);
        tLog("滑动屏幕");
        sleep(random + 5000);
        if (count >= 100){
            home();
            exit();
        }
    }
}