const palabras = {
  es : {
    "0": [ "arroz", "frijol", "carro","mesa", "barco", "queso","mapa","pino","salsa","pito","pc"],
    "1": ["maletin", "camiseta", "astronauta","tamarindo", "pepinillo", "autobus", "colegio","telefono", "tetero", "platano"],
    "2": ["murcielago", "ecocardiografia", "habichuela","cinematografica", "macroecomicas", "mecanografia","quebrantahuesos","ornamentaciones","jurisprudencia","imperativamente","definitivamente"],
  },
  en : {
    "0": ["else","good","god","life","door","wife","nice","city","dog","house","park","bed"],
    "1": ["actress","control","trinity","account","elephant","applications","examples","database","request","history","business","website"],
    "2": ["acropigmentation","agriculturalists","butterfingeredly","accustomations","accountability","prothonotarial"]
  }
}

let palabra
let palabraVacia
const contenedorPalabra = document.getElementById('palabra')
const img = document.getElementById('img')
const msm = document.getElementById('msm')
let intentos = 0 

function jugar () {
  document.getElementById('juego').style.display = 'block'
  intentos = 0
  const nivel = document.getElementById('level').value 
  const idioma = document.getElementById('idioma').value
  const array = palabras[idioma][nivel]
  palabra = array[Math.floor(Math.random() * array.length)] 
  palabra = palabra.split('')
  const numLetras = palabra.length
  palabraVacia = new Array(numLetras).fill('_')
  contenedorPalabra.innerHTML = palabraVacia.join(' ')
  img.innerHTML = '<img src="./imagenes/base.png" />'
  msm.innerHTML = ''
  document.addEventListener("keydown", modificarPalabra)
  console.log(palabra)
}

function modificarPalabra(event) {
  let letra = event.key
  let iguales = []
  palabra.map((item, idx) => {
    if (item === letra) {
      iguales.push(idx)
      palabraVacia[idx] = letra
    }   
  })

  contenedorPalabra.innerHTML = palabraVacia.join(' ')
  if (!palabraVacia.includes('_')) {
    msm.innerHTML = 'Ganaste! :)'
    intentos = 0
  } else validarErrror(iguales)

}

function validarErrror (vector) {

  if (vector.length === 0)
  { 
    intentos++
    switch (intentos) {
      case 1:
        img.innerHTML = '<img src="./imagenes/error.png" />'
        break
      case 2:
        img.innerHTML = '<img src="./imagenes/error2.png" />'
        break
      case 3:
        img.innerHTML = '<img src="./imagenes/error3.png" />'
        break
      case 4:
        img.innerHTML = '<img src="./imagenes/error4.png" />'
        break
      case 5:
        img.innerHTML = '<img src="./imagenes/error5.png" />'
        msm.innerHTML = 'Perdiste! :('
        intentos = 0
        break 
    }
  } 
}
  



 


