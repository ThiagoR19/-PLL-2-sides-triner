const buttons = document.getElementById('buttons')
const image = document.getElementById('image')
const h1 = document.getElementById('h1')
const h2 = document.getElementById('h2')
const h3 = document.getElementById('h3')
const image_prev = document.getElementById('img_prev')

let points = 0
let cases = ['Aa','Ab','E','F','Ga','Gb','Gc','Gd','H','Ja','Jb','Na','Nb','Ra','Rb','T','Ua','Ub','V','Y','Z']
let fragment = document.createDocumentFragment()
let imageSelected = document.createElement('IMG')
let [randomCase, randomImage] = setRandomValues()

function setRandomValues () {
  let randomCase = Math.floor(Math.random() * cases.length)
  let randomImage = Math.floor(Math.random()*4 + 1)
  return [randomCase, randomImage]
}

for (let i = 0; i < cases.length; i++) {
  let button = document.createElement('BUTTON')
  button.innerHTML = cases[i]
  button.classList.add('buttons')
  button.setAttribute('id',`${cases[i].toLowerCase()}`)

  button.addEventListener('click',()=>{
    if (cases[i].toLowerCase() == cases[randomCase].toLowerCase()) {
      points++
      h1.innerHTML = points
      h2.innerHTML = `El anterior era: ${cases[randomCase]}`  
      image_prev.setAttribute('src', `Cases/${cases[randomCase].toLowerCase()}/${cases[randomCase].toLowerCase()}_${randomImage}.jpeg`);
      h3.innerHTML = "¡¡Correcto!!"
      h3.classList.remove('h3')
      h3.classList.remove('class','incorrect')
      h3.classList.add('correct')
    } else {
      h2.innerHTML = `El anterior era: ${cases[randomCase]}` 
      image_prev.setAttribute('src', `Cases/${cases[randomCase].toLowerCase()}/${cases[randomCase].toLowerCase()}_${randomImage}.jpeg`);
      h3.innerHTML = "¡¡Incorrecto!!"
      h3.classList.remove('h3')
      h3.classList.remove('correct')
      h3.classList.add('incorrect')
    }

    h2.classList.add('h2')
    [randomCase, randomImage] = setRandomValues()
    imageSelected.setAttribute('src', `Cases/${cases[randomCase].toLowerCase()}/${cases[randomCase].toLowerCase()}_${randomImage}.jpeg`);
      
  })
  fragment.appendChild(button)
}

buttons.appendChild(fragment)

imageSelected.setAttribute('src', `Cases/${cases[randomCase].toLowerCase()}/${cases[randomCase].toLowerCase()}_${randomImage}.jpeg`);
image.appendChild(imageSelected)