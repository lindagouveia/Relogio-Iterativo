function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

if (hora >= 0 && hora < 12){

    img.src = 'manha.jpg'
    msg.innerHTML = `Bom dia! Agora sao ${hora}h${min}`
    document.body.style.background = '#B0E0E6'
    document.getElementById('section').style.background = '#ADD8E6' 	
    
} else if (hora  >= 12 && hora < 18) {

    img.src = 'tarde.jpg'
    msg.innerHTML = `Boa tarde! Agora sao ${hora}h${min}`
    document.body.style.background = '#D2691E'
    document.getElementById('section').style.background = '#CD853F'


} else {

    img.src = 'noite.jpg'
    msg.innerHTML = `Boa noite! Agora sao ${hora}h${min}`
    document.body.style.background = '#363636'
    document.getElementById('section').style.background = '#696969'

}
}
