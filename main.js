/* Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato) */


const light = document.getElementById('light')
console.log(light);

const myButton = document.getElementById('myButton')
console.log(myButton);


myButton.addEventListener('click', function(){

  light.src = './assets/img/yellow_lamp.png'

} )

