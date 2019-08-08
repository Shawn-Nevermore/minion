!function() {
    let cssCode = `/**
 * Hello，你好，欢迎来到这里
 * 我叫许骁，是一名前端求职者
 * 
 * 今天天气真好，送你一只小黄人吧~~~
 */

.preview-wrapper {
    background: radial-gradient(ellipse at center, rgba(60, 255, 255, 1) 0%, rgba(50, 50, 250, 1) 100%);
}

/******先画小黄人的皮*******/

#minion-body {
    background: #fce55b;
    border-radius: 100px 100px 60px 60px;
    height: 340px;
    width: 200px;
}

/******再画小黄人的眼睛*******/

#goggles {
    background: #2a2a2a;
    border-radius: 2px;
    height: 26px;
    margin: 80px 0 0 -2px;
    width: 204px;
    z-index: 10;
}
#frame {
    background: #898989;
    border-radius: 2px;
    height: 32px;
    margin: -3px 0 0 46px;
    width: 108px;
    z-index: 11;
}
#lense {
    background: #000;
    border-radius: 50%;
    border: solid 14px #898989;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    height: 100px;
    margin: -36px 0 0 50px;
    width: 100px;
    z-index: 12;
}
#eye-ball {
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 1px 1px 14px rgba(0, 0, 0, 0.5) inset;
    height: 80px;
    margin: -26px 0 0 60px;
    width: 80px;
    z-index: 13;
}
#eye-pupil {
    background: #000000;
    border-radius: 50%;
    border: solid 8px #3F1515;
    height: 26px;
    margin: 30px 0 0 26px;
    width: 26px;
    z-index: 13;
}

/******然后是小黄人的嘴**********/

#mouth {
    background: #640F0F;
    border-radius: 0 0 100px 100px;
    height: 50px;
    margin: 170px 0 0 50px;
    width: 100px;
    z-index: 20;
}
#mouth-shadow {
    border-radius: 0 0 100px 100px;
    box-shadow: 1px 1px 14px rgba(0, 0, 0, 0.5) inset;
    height: 50px;
    width: 100px;
    z-index: 29;
}
.teeth {
    background: #fff;
    border-radius: 0 0 8px 8px;
    float: left;
    height: 14px;
    width: 20px;
    z-index: 22;
}
#tongue {
    background: #D54747;
    border-radius: 50%;
    height: 20px;
    margin: 30px 0 0 23px;
    width: 54px;
    z-index: 20;
}

/********手手**********/

#left-arm {
    transform: rotate(40deg);
    background: #fce55b;
    border-radius: 100px;
    height: 70px;
    margin: 210px 0 0 -20px;
    width: 20px;
    z-index: -30;
}
#left-hand {
    transform: rotate(120deg);
    background: #fce55b;
    border-radius: 100px;
    height: 90px;
    margin: 240px 0 0 -4px;
    width: 20px;
    z-index: 50;
}
#right-arm {
    transform: rotate(-40deg);
    background: #fce55b;
    border-radius: 100px;
    height: 70px;
    margin: 210px 0 0 200px;
    width: 20px;
    z-index: -30;
}
#right-hand {
    transform: rotate(-120deg);
    background: #fce55b;
    border-radius: 100px;
    height: 90px;
    margin: 240px 0 0 190px;
    width: 20px;
    z-index: 50;
}

/********小黄人的工装裤*********/

#dungarees {
    margin: 280px 0 0 0;
}
#left-strap {
    transform: rotate(-50deg);
    background: #336188;
    border-radius: 16px 0 4px 4px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    height: 80px;
    margin: -90px 0 0 18px;
    width: 14px;
    z-index: 50;
}
#right-strap {
    transform: rotate(50deg);
    background: #336188;
    border-radius: 0 16px 4px 4px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    height: 80px;
    margin: -90px 0 0 170px;
    width: 14px;
    z-index: 50;
}
#dungarees-main {
    background: #336188;
    border-radius: 0 0 100px 100px;
    box-shadow: 2px 2px 4px -2px rgba(0, 0, 0, 0.5);
    height: 60px;
    width: 200px;
    z-index: 36;
}
#dungarees-front {
    background: #336188;
    border-radius: 10px 10px 0 0;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    height: 70px;
    margin: -40px 0 0 40px;
    width: 120px;
    z-index: 36;
}
#dungarees-pocket {
    background: #336188;
    border-radius: 0 0 50% 50%;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    height: 40px;
    margin: -14px 0 0 70px;
    width: 60px;
    z-index: 50;
}
#dungarees-pocket-left {
    transform: rotate(-40deg);
    background: #336188;
    border-radius: 0 0 50% 50%;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    height: 36px;
    margin: 10px 0 0 14px;
    width: 40px;
    z-index: 50;
}
#dungarees-pocket-right {
    transform: rotate(40deg);
    background: #336188;
    border-radius: 0 0 50% 50%;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    height: 36px;
    margin: 10px 0 0 146px;
    width: 40px;
    z-index: 50;
}
#dungarees-logo {
    transform: rotate(45deg);
    border: 5px solid;
    height: 20px;
    margin: -6px 0 0 90px;
    width: 20px;
    z-index: 50;
}

/********脚脚************/
#legs {
    margin: 260px 0 0 0;
}
#left-leg, #right-leg {
    background: #336188;
    height: 80px;
    width: 40px;
    z-index: 31;
}
#left-leg {
    margin: 10px 0 0 50px;
}
#right-leg {
    margin: 10px 0 0 110px;
}
#left-foot, #right-foot {
    background: #272727;
    border-bottom: 6px solid black;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    height: 24px;
    width: 50px;
    z-index: 34;
}
#left-foot {
    border-radius: 10px 0 4px 4px;
    margin: 90px 0 0 40px;
}
#right-foot {
    border-radius: 0 10px 4px 4px;
    margin: 90px 0 0 110px;
}

/**
 * 画好了，这只可爱的小黄人就送给你吧
 * 
 * 如果喜欢我的作品，请联系我哟
 */`

    function writeCode(prefix, cssCode, fn) {
        let code = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let duration = 0

        let id = setInterval(() => {
            n++
            code.innerHTML = prefix + cssCode.substring(0, n)
            styleTag.innerHTML = prefix + cssCode.substring(0, n)
            code.scrollTop = code.scrollHeight
            if (n >= cssCode.length) {
                window.clearInterval(id)
                fn && fn.call()
            }
        }, duration)
    }

    writeCode('', cssCode)
}.call()
