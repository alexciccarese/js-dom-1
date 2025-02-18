/* Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via... */


const light = document.getElementById('light')
console.log(light);

const myButton = document.getElementById('myButton')
console.log(myButton);


myButton.addEventListener('click', function(){

  if (light.src.includes('white_lamp.png')) {
    light.src = './assets/img/yellow_lamp.png'
    myButton.textContent = 'Spegni'

  } else {
    light.src = './assets/img/white_lamp.png'
    myButton.textContent = 'Accendi'
  }

} )
