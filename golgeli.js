// Example URL with a file name
const url = new URL('https://futbolunu.kanitla.online/golgeli.html');

// Remove the last segment (file name) from the pathname
url.pathname = url.pathname.substring(0, url.pathname.lastIndexOf('/')) + "golgeli";

console.log(url.href); // Output: https://www.example.com/path/to

history.pushState({}, '', url);
var secilensorular = [];
let skor = 0;
baslat(secilensorular, skor); 
function baslat(secilensorular, skor, secenekler, sklar, dogrusk){
    document.querySelector("#skor").innerHTML=skor;
    var secenekler = [
        {oyuncu : "Messi", foto : "1.png"},
        {oyuncu : "Ronaldo", foto : "2.png"},
        {oyuncu : "Neymar", foto : "3.png"},
        {oyuncu : "Suarez", foto : "4.png"},
        {oyuncu : "Quaresma", foto : "5.png"},
        {oyuncu : "Mario Gomez", foto : "6.png"},
        {oyuncu : "Valentin Rosier", foto : "7.png"},
        {oyuncu : "Aboubakar", foto : "8.png"},
        {oyuncu : "Mertens", foto : "9.png"},
        {oyuncu : "Semih Kılıçsoy", foto : "10.png"},
        {oyuncu : "Muleka", foto : "11.webp"},
        {oyuncu : "Arda Güler", foto : "12.png"},
        {oyuncu : "Bellingham", foto : "13.png"},
        {oyuncu : "Luka Modric", foto : "14.png"},
        {oyuncu : "Sneijder", foto : "15.png"},
        {oyuncu : "Mbappe", foto : "16.png"},
        {oyuncu : "Harry Kane", foto : "17.png"},
        {oyuncu : "Mohammed Salah", foto : "18.png"},
        {oyuncu : "Ronaldinho", foto : "19.png"},
        {oyuncu : "Lewandowski", foto : "20.png"},
        {oyuncu : "Karim Benzema", foto : "21.png"},
        {oyuncu : "Kevin de Bruyne", foto : "22.png"},
        {oyuncu : "Erling Haaland", foto : "23.png"},
        {oyuncu : "Xavi", foto : "24.png"},
        {oyuncu : "Zlatan Ibrahimovic", foto : "25.png"}
    ];
    if(sklar){
        sklar.forEach((sklar)=>{
            sklar.remove();
        });
    }
    if(dogrusk){
        dogrusk.remove();
    }
    for(let i = 0; i < 4; i++){
        var div = document.createElement("div");
        div.classList.add("sorudiv");
        document.querySelector("#sklar").appendChild(div);
        var sk = document.createElement("h1");
        sk.classList.add("sklar");
        document.querySelectorAll(".sorudiv")[i].appendChild(sk);
    }
    var secilenfoto = secenekler[Math.floor(Math.random() * secenekler.length)].foto;
    if(secilensorular.length == 25){
        alert("bittiknk");
    } else{
        while(secilensorular.includes(secilenfoto)){
            secilenfoto = secenekler[Math.floor(Math.random() * secenekler.length)].foto;
        }
        secilensorular.push(secilenfoto);
        document.querySelector("#resim").setAttribute("src", secilenfoto);
        document.querySelector("#resim").onload = resimloaded();
        function resimloaded(){
            var sklar = [document.querySelectorAll(".sklar")[0], document.querySelectorAll(".sklar")[1], document.querySelectorAll(".sklar")[2], document.querySelectorAll(".sklar")[3]];
            var dogrusk = sklar[Math.floor(Math.random() * sklar.length)];
            sklar.splice(sklar.indexOf(dogrusk), 1);
            dogrusk.innerHTML = secenekler[secenekler.findIndex(item => item.foto === document.querySelector("#resim").getAttribute("src"))].oyuncu;
            secenekler.splice(secenekler.findIndex(item => item.oyuncu === dogrusk.textContent), 1);
            sklar.forEach((sklar) =>{
                sklar.innerHTML=secenekler[Math.floor(Math.random() * secenekler.length)].oyuncu;
                secenekler.splice(secenekler.findIndex(item => item.oyuncu === sklar.textContent), 1);
                sklar.addEventListener("click", ()=>{
                    document.querySelector("#resim").style="filter: brightness(1)";
                    setTimeout(() => {
                        fail(secilensorular, skor, secenekler, sklar, dogrusk);
                    }, 500);
                });
            });
            dogrusk.addEventListener("click", ()=>{
                document.querySelector("#resim").style="filter: brightness(1)";
                skor++;
                setTimeout(() => {
                    document.querySelector("#resim").style="filter: brightness(0)";
                    baslat(secilensorular, skor, secenekler, sklar, dogrusk);
                }, 500);
            });
        }
    }
}
function fail(secilensorular, skor, secenekler, sklar, dogrusk){
    var yeniden = document.createElement("button");
    yeniden.setAttribute("value", "Yeniden Başla");
    yeniden.textContent="Yeniden Başla";
    var referenceElement = document.getElementById("sorualani");
    var dogru = document.createElement("h1");
    dogru.innerHTML = dogrusk.textContent;
    dogru.style="margin-left: 5%";
    document.querySelectorAll(".sorudiv")[0].appendChild(dogru);
    sklar = [document.querySelectorAll(".sklar")[0], document.querySelectorAll(".sklar")[1], document.querySelectorAll(".sklar")[2], document.querySelectorAll(".sklar")[3]];
    sklar.forEach((sklar)=>{
        sklar.remove();
    });
    // Append the new element before the reference element
    document.querySelector("#alan").insertBefore(yeniden, referenceElement);
    yeniden.addEventListener("click", ()=>{
        skor = 0;
        secilensorular = [];
        yeniden.remove();
        dogru.remove();
        document.querySelector("#resim").style="filter: brightness(0)";
        baslat(secilensorular, skor, secenekler, sklar, dogrusk);
    });
}