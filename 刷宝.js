auto.waitFor()
tLog("准备启动刷宝")

enterMyMainPage();

function tLog(msg){
    toast(msg);
    console.log(msg);
}

function closeApp() {
    let packageName = currentPackage();
    app.openAppSetting(packageName);
    text(app.getAppName(packageName)).waitFor();  
    let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
    if (is_sure.enabled()) {
        textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
        sleep(1500);
        textMatches(/(.*确.*|.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
        tLog(app.getAppName(packageName) + "应用已被关闭");
        sleep(1500);
        back();
    } else {
        tLog(app.getAppName(packageName) + "应用不能被正常关闭或不在后台运行");
        back();
    }
}


function enterMyMainPage(){
    tLog("启动刷宝视频");
    launchApp("刷宝短视频");
    sleep(8000);
    var count = 0;
    var ad_count = 0;
    while (true){
        count += 1;
        try {
            var clo1 = id("btn_close");
            if (clo1.exists()){
                clo1.click();
            }
            sleep(2000);
            var clo2 = id("iv_close");
            if (clo2.exists()){
                clo2.click();
            }
        } catch (error) {
            tLog("非直播页面");
        }
        var random = 5000 + Math.floor(Math.random() * 25001);
        tLog('滑动时间： ', Date());
        swipe(device.width / 2, 500, device.width / 2, device.height - 200, 700);
        sleep(random);
        if (count % 30 == 0){
            ad_count += 1;
            if (ad_count > 7){
                tLog("已完成任务");
            } else {
                try {
                    click("任务");
                    tLog("点击任务");

                    sleep(2000);
                    var close = id("imgClose");
                    if (close.exists()){
                        close.click();
                    }
                    tLog("关闭弹窗");
                    sleep(2500);
                    if(className("android.widget.Button").text("立即签到").clickable(true).exists()){
                        tLog("立即签到");
                        sleep(1500);
                        className("android.view.View").text("看视频签到").findOne().click();
                        sleep(35000);
                        id("tt_video_ad_close_layout").findOne().click();
                        sleep(1500);
                        tLog("点击首页");
                        id("tv_tab_title").className("android.widget.TextView").text("首页").findOne().parent().parent().click();
                        sleep(1000);
                    } else {
                        tLog("点击提现");
                        className("android.widget.Button").text("提现").findOne().click();
                        sleep(3000);
                        tLog("点击立即提现");
                        className("android.widget.Button").text("立即提现").findOne().click();
                        sleep(2000);
                        tLog("点击¥0.5元");
                        className("android.view.View").text("¥0.5元").findOne().parent().click();
                        sleep(2000);
                        if(className("android.widget.Button").text("今日完成").exists()){
                            tLog("今日已完成任务");
                        } else {
                            tLog("点击看视频");
                            className("android.widget.Button").text("看视频").findOne().click();
                            sleep(33000);
                            tLog("关闭视频广告");
                            id("tt_video_ad_close_layout").findOne().click();
                        }
                        sleep(2000);
                        tLog("返回");
                        id("btn_back").findOne().click();
                        sleep(2000);
                        tLog("返回");
                        id("btn_back").findOne().click();
                        sleep(3000);
                        tLog("点击首页");
                        id("tv_tab_title").className("android.widget.TextView").text("首页").findOne().parent().parent().click();
                        sleep(1000);
                        tLog("观看视频完成");
                    }
                } catch (error) {
                    tLog("观看视频失败");
                }
            }
        }
        if (count % 25 == 0){
            try {
                id("list").findOne().children().forEach(child => {
                    var target = child.findOne(id("image_view"));
                    target.click();
                    });
            } catch (error) {
                tLog("点赞失败");
            }
        }
        if (count >= 300){
            tLog("点击首页");
            id("tv_tab_title").className("android.widget.TextView").text("首页").findOne().parent().parent().click();
            sleep(1100);
            closeApp();
            sleep(1200);
            home();
            exit();
        }
    }
}