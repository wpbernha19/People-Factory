const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = value
    colorDiv.style.width = '100px'
    colorDiv.style.height = '20px'
    return colorDiv
  }

  const renderItem = (name, value) => {
    const item = document.createElement('li')
    item.innerHTML = `${name}: ${value}`
    return item
  }

const renderList = (person) => {
  const list = document.createElement('ul')
  Array.from(person).map((input, _i, _formElements) => {
    if (input.value){
    const li = renderItem(input.name, input.value)
    list.appendChild(li)
    }
  })
  return list
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const list = renderList(form.elements)
  details.appendChild(list)

}

personForm.addEventListener('submit', handleSubmit)