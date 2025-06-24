let username = prompt("Adınızı Girin:");
document.querySelector("#name").innerHTML = username;

function showTime(){
    let date = new Date();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let hour= date.getHours().toString().padStart(2, '0');
    let minute = date.getMinutes().toString().padStart(2, '0');
    let second = date.getSeconds().toString().padStart(2, '0');
    let day = days[date.getDay()];
    let time = `${hour}:${minute}:${second},${day} `;
    document.querySelector("#time").innerHTML = time;
}
setInterval(showTime, 1000);
showTime(); 
