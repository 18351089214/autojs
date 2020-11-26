enterMyMainPage();

function tLog(msg){
    toast(msg);
    console.log(msg);
}

function enterMyMainPage(){
    launchApp("追看视频");
    tLog("追看视频")
    sleep(8000);
    var count = 0;
    while (true){
        count += 1;
        var t = Math.floor(Math.random() * 30001);
        sleep(5000 + t);
        tLog("播放时间：" + t)
        swipe(device.width/2, device.height - 300, 150, 200, 1000);
        if (count>=100){
            home();
            exit();
        }
        else{
            tLog("滑动：" + count + '次');
        }
    }
}