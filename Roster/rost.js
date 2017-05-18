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
        const button = document.createElement('button')
        button.innerText = 'Delete'
        list.appendChild(button)
        button.onclick=function(){
            list.removeChild(list.options[list.selectedIndex]);
        };
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