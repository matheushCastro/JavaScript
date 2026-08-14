var agora =new Date()

var hora=agora.getHours()

console.log(`Hora exata neste momento ${hora} hrs`)

if ( hora >= 6 && hora <= 11){
    console.log(`esta no periodo da manha`)
 
}else if(hora >= 11  && hora <=18){
    console.log(`esta no periodo da tarde `)

}else if (hora > 18  && hora <= 23){
    console.log("Esta de noite ")
}else {
    console.log("Madrugada")
}
