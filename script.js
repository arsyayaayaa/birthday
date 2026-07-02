const btn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

btn.onclick = () => {

    music.play();

    window.scrollTo({

        top: window.innerHeight,

        behavior: "smooth"

    });

};

const text =
`Happy Birthday!

Hari ini adalah hari yang spesial.

Semoga semua impianmu tercapai.

Terima kasih sudah menjadi seseorang yang luar biasa. ❤️`;

let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,40);

    }

}

typing();
