
(function()
{
    'use strict';
    console.log('It\'s runing Now');
    setInterval(function()
    {
        if(document.getElementsByClassName("dialog-box").length!=0)
        {
            console.log("检测到20分钟限制，去除限制");
            document.getElementsByClassName("dialog-button-container")[0].children[0].click();
        }
        console.log("检测中");
    },3000);
})();
