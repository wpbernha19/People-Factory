$(document).foundation()

const megaroster = {
  students: [],

  init() {
    this.studentList = document.querySelector('#student-list')
    this.max = 0
    this.setupEventListeners()
    this.load()
  },

  setupEventListeners() {
    document
      .querySelector('#new-student')
      .addEventListener('submit', this.addStudentViaForm.bind(this))
  },

  load() {
    const rosterString = localStorage.getItem('roster')
    const rosterArray = JSON.parse(rosterString)
    if (rosterArray) {
      rosterArray
        .reverse()
        .map(this.addStudent.bind(this))
    }
  },

  addStudentViaForm(ev) {
    ev.preventDefault()
    const f = ev.target
    const student = {
      id: this.max + 1,
      name: f.studentName.value,
    }
    this.addStudent(student)
    f.reset()
  },

  addStudent(student) {
    this.students.unshift(student)
    
    const listItem = this.buildListItem(student)
    this.prependChild(this.studentList, listItem)
    
    this.max ++
    this.save()
  },

  prependChild(parent, child) {
    parent.insertBefore(child, parent.firstChild)
  },

  buildListItem(student) {
    const template = document.querySelector('.student.template')
    const li = template.cloneNode(true)
    li.querySelector('.student-name').textContent = student.name
    li.dataset.id = student.id
    this.removeClassName(li, 'template')

    li
      .querySelector('button.remove')
      .addEventListener('click', this.removeStudent.bind(this))

    li
      .querySelector('button.warning')
      .addEventListener('click', this.promoteStudent.bind(this))

    return li
  },

  save() {
      localStorage.setItem('roster', JSON.stringify(this.students))
  },

  removeStudent(ev) {
    const btn = ev.target
    const li = btn.closest('.student')

    for (let i=0; i < this.students.length; i++) {
      let currentId = this.students[i].id.toString()
      if (currentId === li.dataset.id) {
        this.students.splice(i, 1)
        break
      }
    }

    li.remove()
    this.save()
  },

  save() {
      localStorage.setItem('roster', JSON.stringify(this.students))
  },

  editedListItem(student) {
    const li2 = this.buildListItem(student)

    li2
      .querySelector('button.round')
      .addEventListener('click', this.promoteStudent.bind(this))
      
    return li2
  },
  
  moveUp(student) {
    const li3 = this.editedListItem(student)

    li3
      .querySelector('button.up')
      .addEventListener('click', this.itemUp.bind(this))
    
    return li3
  },

  moveDown() {

  },

  removeStudent(ev) {
    const btn = ev.target
    const li = btn.closest('.student')

    for (let i=0; i < this.students.length; i++) {
      let currentId = this.students[i].id.toString()
      if (currentId === li.dataset.id) {
        this.students.splice(i, 1)
        break
      }
    }

    li.remove()
    this.save()
  },

  promoteStudent(ev) {
        const btn = ev.target

        let color = '#'; // hexadecimal starting symbol
        let borderColor = '#'
        let letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; //Set your colors here
        color += letters[Math.floor(Math.random() * letters.length)]
        borderColor += letters[Math.floor(Math.random() * letters.length)]
        btn.closest('.student').style.backgroundColor = color
        btn.closest('.student').style.border = 'thick solid '+borderColor

    },

    itemUp(ev) {
        const btn = ev.target
        const student = btn.closest('.student')
        student.prependChild(student.parentChild, student)

    }, 

    itemDown(ev) {

    },

  removeClassName(el, className) {
    el.className = el.className.replace(className, '').trim()
  }
}
megaroster.init()
