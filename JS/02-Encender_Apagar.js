const LUZ_ESTADO={
    ENCENDER:'./images/On.gif',
    APAGAR:'./images/Off.gif'
}

const ImgLuz= document.getElementById('img-luz');


const Encender = document.getElementById('Encender').addEventListener('click',(e)=>{
e.preventDefault();
ImgLuz.src='./images/On.gif'
})

const Apagar = document.getElementById('Apagar').addEventListener('click',(e)=>{
    e.preventDefault();
    ImgLuz.src='./images/Off.gif'
    })

