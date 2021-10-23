

(function() {
    'use strict';

    // Your code here...
    function sx(){window.location.reload()}

function newWin(url) {
  var aElement = document.createElement("a");
  aElement.setAttribute("href", url);
  aElement.setAttribute("target", "_blank");
  aElement.click();
}
function Kaishi(){
    if(document.URL.search('circleIndexRedirect.do')){
    var Ls=window.sessionStorage
    var wcs=document.getElementsByClassName('progress-value progress-value-full').length
    console.log(wcs)
    console.log(Ls.getItem('key'))

    if ( Ls.getItem('key')!=wcs+""){
        console.log('课程发生变化')
        Ls.setItem('key',wcs)
        var page = document.querySelectorAll('tbody>tr>td.last-cell.text-center>a')[wcs].getAttribute('data-vurl')
        page = "https://study.enaea.edu.cn"+ page
        newWin(page)
        setTimeout(sx,300000)

        clearInterval(k1)
    }else {
       if (wcs !=0){
          setTimeout(sx,300000)}
        clearInterval(k1)
    };
}
 }
setInterval(Kaishi,15000)
       function kc(){

         var JD= document.getElementsByClassName('cvtb-MCK-CsCt-studyProgress')
    if (JD.length){
    for (var i=0;i<JD.length;i++){
        if(JD[i].innerText!=='100%'){
            //JD[i].click()
            console.log(i)
            break;
        }else if (i==JD.length-1){window.close()}
    };
    }
           console.log('kc')
    }

   function ss(){

        document.getElementsByClassName('customcur-tab-text')[0].click();
                }
 setInterval(ss,10000)


})();
