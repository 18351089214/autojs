tLog("准备启动趣头条")
registEvent();

threads.start(function(){
    setTimeout(function(){
        tLog("退出程序");
        home();
        exit();
    }, 3600000);
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
    launchApp("趣头条");
    tLog("等待趣头条启动")
    sleep(8000);
    var num = Math.floor(Math.random() * 21);
    id("bu4").text("视频").findOne().click();
    tLog("点击视频菜单");
    sleep(1500);
    while (true){
        var lingquan = id("y").packageName("com.jifen.qukan").text("");
        if (lingquan.exists())
        {
            lingquan.click();
            tLog("点击领取");
            sleep(1500);
        }
        var egg = id("aub").packageName("com.jifen.qukan");
        if (egg.exists())
        {
            var bds = egg.findOne().bounds();
            click(bds.centerX(), bds.centerY());
            tLog("点击阅读奖励");
            sleep(1500);
            id("a52").findOne().click();
        }
        sleep(1000);
        var posb = id("q5").findOne().bounds();
        click(posb.centerX(), posb.centerY());
        random = Math.floor(Math.random() * 35551);
        sleep(random);
        swipe(120, 1275, 320, 190, 490);
        sleep(1500);
    }
}