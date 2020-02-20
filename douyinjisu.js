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
    launchApp("抖音极速版");
    tLog("抖音极速版启动")
    sleep(5000);
    while (true){
        var random = Math.floor(Math.random() * 20001);
        swipe(120, 1415, 320, 480, 490);
        tLog("滑动屏幕");
        sleep(random);
    }
}

function randomTest(){
    var i = 0;
    for (i = 0; i < 10; i++){
        tLog(random)
        sleep(1000);
    }
}