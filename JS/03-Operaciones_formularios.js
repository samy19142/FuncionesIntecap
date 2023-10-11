const opciones = document.getElementById('opciones');
const resultado = document.getElementById('resultado');


opciones.addEventListener('click',(e)=>{
    e.preventDefault();
    let identificador = e.target.value;
    Operaciones(identificador);
    
});


const Operaciones=(opcion="")=>{
if(!opcion){
    return 0;
}

const numero1 = parseFloat(document.getElementById('numero1').value);
const numero2 = parseFloat(document.getElementById('numero2').value);

switch (opcion){
    case "S":
        resultado.value =numero1+numero2;
        break;
    case "R":
        resultado.value =numero1-numero2;
        break;
    case "M":
        resultado.value =numero1*numero2;
        break;
    case "D":
        if(numero2===0){
            return;
        }
        resultado.value =numero1/numero2;
        break;

        default:
            return;
            break
}

}