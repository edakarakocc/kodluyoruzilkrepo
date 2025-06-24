/*
1- prompt ile aldığın bilgiye göre aşağıdaki yapıyı kullanarak notun bilgisini #info'ya yazdır.
AA  90-100
BA  85-89
BB  80-84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  0-49

2- Kullanıcının girdiği verinin istediğimiz aralıkta olup olmadığını kontrol et.
3- FF bilgisinde üzgün surat diğerlerinde gülümseyen surat kullan.
4- FF class bilgisi text-danger, diğerleri text-primary olsun.
*/

let Grade = prompt("Please enter your grade (0-100): ");
let textInfo;
let info =document.querySelector("#info");

if (Grade >=0 && Grade <=100){
    info.classList.add('text-primary');
    if (Grade >= 90 && Grade <= 100) {
        textInfo = "AA";
    } else if (Grade >= 85 && Grade < 90) {
        textInfo = "BA";
    } else if (Grade >= 80 && Grade < 85) {
        textInfo = "BB";
    } else if (Grade >= 75 && Grade < 80) {
        textInfo = "CB";
    } else if (Grade >= 70 && Grade < 75) {
        textInfo = "CC";
    } else if (Grade >= 65 && Grade < 70) {
        textInfo = "DC";
    } else if (Grade >= 60 && Grade < 65) {
        textInfo = "DD";
    } else if (Grade >= 50 && Grade < 60) {
        textInfo = "FD";
    } else if (Grade >= 0 && Grade < 50) {
        textInfo = "FF";
        info.classList.remove('text-primary');
        info.classList.add('text-danger');
    }
}
else {
    textInfo = "Invalid input. Please enter a number between 0 and 100.";
}

info.innerHTML = `${textInfo} -> ${Grade}`; 