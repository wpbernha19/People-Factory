//Roster Method
const rost = {
    init() {
        const personForm = document.querySelector('form')
        personForm.addEventListener('submit', this.handleSubmit.bind(this))
    },

    renderItem(value) {
      const item = document.createElement('li')
      item.innerHTML = `${value}`
      return item
    },

    renderList(person) {
        const list = document.createElement('ul')
        Array.from(person).map((input, _i, _formElements) => {
            if (input.value){
                let value = input.value
                const li = this.renderItem(value)
                list.appendChild(li)
            }
        })
        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'
        list.appendChild(deleteButton)
        deleteButton.addEventListener('click', () => {
            list.parentNode.removeChild(list)
        })
        const promoteButton = document.createElement('button')
        promoteButton.innerText = 'Promote'
        list.appendChild(promoteButton)
        promoteButton.addEventListener('click', () => {
            let color = '#'; // hexadecimal starting symbol
            let borderColor = '#'
            let letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; //Set your colors here
            color += letters[Math.floor(Math.random() * letters.length)]
            borderColor += letters[Math.floor(Math.random() * letters.length)]
            list.style.backgroundColor = color
            list.style.border = 'thick solid '+borderColor
            //list.style.borderColor = borderColor
        })
        return list
    },

    // renderButton(list) {
    //     const button = document.createElement('button')
    //     button.innerText = 'Delete'
    //     list.appendChild(button)
    // },

    handleSubmit(ev) {
        ev.preventDefault()
        const form = ev.target
        const details = document.querySelector('.details')

        const list = this.renderList(form.elements)
        const listLength = document.querySelectorAll('li')
        const length = listLength.length
        if(length < 1) {
            details.appendChild(list)
        }
        else {
            details.insertBefore(list,details.childNodes[0])
        }
    },

}
//Run the Roster Method (Main Method)
rost.init()