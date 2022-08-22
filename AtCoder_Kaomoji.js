// ==UserScript==
// @name        AtCoder_Kaomoji
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description レートが増えたら:)を、減ったら:(を、増減なしなら:|を、差分の横に追加します
// @author      arad
// @match       https://atcoder.jp/users/*/history*
// ==/UserScript==

var tds = document.getElementsByTagName('td');
var length = tds.length;
for(var i = 0;i < length;i++){
    var str = new String(tds[i].textContent);
    if(str.length <= 1) continue;
    if(str.substring(0,1) === '+'){
        tds[i].innerHTML = str+'&nbsp;&nbsp;:)';
    }
    if(str.substring(0,1) === '-'){
        tds[i].innerHTML = str+'&nbsp;&nbsp;:(';
    }
    if(str.substring(0,1) === '±'){
        tds[i].innerHTML = str+'&nbsp;&nbsp;:|';
    }
}