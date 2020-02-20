threads.start(function(){
    setTimeout(function(){
        tLog("退出程序");
        home();
        exit();
    }, 7200000);
});
enterMyMainPage();

function enterMyMainPage(){
    launchApp("看点快报");
    log("启动看点快报");
    sleep(7000);
    // className("android.widget.TextView").text("视频").depth(13).findOne().click();
    bounds(195,199,333,343).clickable().click();
    log("点击视频按钮");
    sleep(2000);
    for (var i = 0; i < 5; i++){
        id("video_play").find().forEach(function(tv){
            tv.click();
            sleep(5000);
        });
        swipe(Math.random(200, 300), 1126, Math.random(200, 300), 429, 200);
    }
    // bounds(0,199,147,343).clickable().click();
    className("android.widget.TextView").text("推荐").findOne().parent().click();
    log("点击推荐按钮")
    // packageName('com.tencent.reading').findOne().click();
    for(var i = 0; i < 3; i++){
        id("title_text_layout_view_binder").find().forEach(function(tv){
            sleep(2000)
            bd = tv.bounds();
            click(bd.centerX(), bd.centerY());
            sleep(2000);
            scrollDown();
            sleep(2000);
            swipe(Math.random(100, 200), 1169, Math.random(100, 200), 890, 1000);
            sleep(15000);
            swipe(Math.random(100, 200), 1201, Math.random(100, 200), 97, 1000);
            sleep(15000);
            back();
            sleep(1000);
            swipe(Math.random(100, 200), 1199, Math.random(100, 200), 99, 1000);
            sleep(Math.random() * 3000);
        });
        swipe(Math.random(100, 200), 1169, Math.random(100, 200), 78, 1000);
    }
}