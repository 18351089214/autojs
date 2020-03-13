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
    launchApp("闪电盒子");
    log("闪电盒子")
    sleep(10000);
    // 点击小视频
    var bds = id("text").text("小视频").findOne().bounds();
    click(bds.centerX(), bds.centerY());
    for (var i = 0; i < 150; i++){
        sleep(15000);
        log(i);
        log('滑动时间(小视频)：', Date());
        swipe(120, 1115, 320, 280, 520);
    }
    back(); // 返回首页
    // id("recyvlerview").findOne().children().forEach(child => {
    //     var target = child.findOne(id("btn_get_money"));
    //     target.click();
    //     });
    // sleep(4000);
    // id("img_close").findOne().click();
    // 点击头条咨询
    var bds = id("text").text("头条咨询").findOne().bounds();
    while(true){
        id("recyvlerview").findOne().children().forEach(child => {
            var target = child.findOne(id("title"));
            target.click();
            sleep(15000);
            });
        log('滑动时间(小视频)：', Date());
        swipe(120, 1115, 320, 280, 520);
    }
}