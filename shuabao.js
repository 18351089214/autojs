tLog("准备启动刷宝")
registEvent();

threads.start(function(){
    setTimeout(function(){
        tLog("退出程序");
        home();
        exit();
    }, 14400000);
});

enterMyMainPage();

function tLog(msg){
    toast(msg);
    console.log(msg);
}

function registEvent() {
    events.observeKey();
    events.onKeyDown("KEYCODE_VOLUME_UP", function(event){
        tLog("脚本手动退出");
        exit();
    });
}

function enterMyMainPage(){
    launchApp("刷宝短视频");
    tLog("等待刷宝视频启动")
    sleep(6000);
    var num = Math.floor(Math.random() * 21);
    while (true){
        var random = Math.floor(Math.random() * 12001);
        swipe(120, 1275, 320, 190, 490);
        sleep(random);
        if (num >= 0){
            var posb = id("image_view").findOne().bounds();
            click(posb.centerX(), posb.centerY());
            tLog("点赞成功")
            random = Math.floor(Math.random() * 12001);
            sleep(random);
            num = Math.floor(Math.random() * 11);
        }
        num--;
        random = Math.floor(Math.random() * 12001);
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