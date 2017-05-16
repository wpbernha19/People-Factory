const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = hairColor
  colorDiv.style.height = '50px'
  colorDiv.style.width = '100px'
  return colorDiv
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value

const list = document.createElement('ul')
const title = document.createTextNode('Results')
list.appendChild(title)
details.appendChild(list)


const item1 = document.createElement('li')
const text1 = document.createTextNode('Name: '+personName)
item1.appendChild(text1)
//list.appendChild(item1)

const item2 = document.createElement('li')
const text2 = document.createTextNode('Hair Color: '+hairColor)
//item2.appendChild(colorDiv.outerHTML)
item2.appendChild(text2)
//list.appendChild(item2)
console.log(form.length)
const fun = document.getElementsByTagName('label')
console.log(form[1].value)

const item3 = document.createElement('li')
const text3 = document.createTextNode('Age: '+age)
item3.appendChild(text3)
//list.appendChild(item3)

const item4 = document.createElement('li')
const text4 = document.createTextNode('Birthplace: '+birthplace)
item4.appendChild(text4)
//list.appendChild(item4)

for(let i = 0; i < form.length - 1; i++)
{
  list.appendChild(form[i].value)
}

  const colorDiv = renderColor(hairColor)

  /*details.innerHTML = `
    <ul>
      <li>Name: ${personName}</li>
      <li>Hair Color: ${colorDiv.outerHTML}</li>
      <li>Age: ${age}</li>
      <li>Birthplace: ${birthplace}</li>
    </ul>
  ` */
}

personForm.addEventListener('submit', handleSubmit)