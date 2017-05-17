const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value

  const list = document.createElement('dl')
  const title = document.createTextNode('Definition List')
  list.appendChild(title)
  details.appendChild(list)

  const item1 = document.createElement('li')
  const dt1 = document.createElement('dt')
  const dd1 = document.createElement('dd')
  const text1 = document.createTextNode('First Name: ')
  const def1 = document.createTextNode(personName)
  dt1.appendChild(text1)
  dd1.appendChild(def1)
  item1.appendChild(dt1)
  item1.appendChild(dd1)
  list.appendChild(item1)

  const item2 = document.createElement('li')
  const dt2 = document.createElement('dt')
  const dd2 = document.createElement('dd')
  const text2 = document.createTextNode('Hair Color: ')
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = hairColor
  colorDiv.style.height = '50px'
  colorDiv.style.width = '100px'
  dt2.appendChild(text2)
  dd2.appendChild(colorDiv)
  item2.appendChild(dt2)
  item2.appendChild(dd2)
  list.appendChild(item2)

  const item3 = document.createElement('li')
  const dt3 = document.createElement('dt')
  const dd3 = document.createElement('dd')
  const text3 = document.createTextNode('Age: ')
  const def3 = document.createTextNode(age)
  dt3.appendChild(text3)
  dd3.appendChild(def3)
  item3.appendChild(dt3)
  item3.appendChild(dd3)
  list.appendChild(item3)

  const item4 = document.createElement('li')
  const dt4 = document.createElement('dt')
  const dd4 = document.createElement('dd')
  const text4 = document.createTextNode('Birthplace: ')
  const def4 = document.createTextNode(birthplace)
  dt4.appendChild(text4)
  dd4.appendChild(def4)
  item4.appendChild(dt4)
  item4.appendChild(dd4)
  list.appendChild(item4)

}

personForm.addEventListener('submit', handleSubmit)