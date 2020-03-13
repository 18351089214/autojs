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
    launchApp("追看视频");
    log("追看视频")
    sleep(10000);
    while (true){
        id("a_m").className("androidx.recyclerview.widget.RecyclerView").scrollable(true).findOne().children().forEach(child => {
            var target = child.findOne(id("video_play_button"));
            if (target){
                target.click();
                log("开始播放视频");
                sleep(60000);
            }
            });
        log('滑动时间：', Date());
        swipe(120, 1115, 320, 280, 520);
    }
}