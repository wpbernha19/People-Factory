$(document).foundation()

const megaroster = {
  students: [],

  init() {
    this.studentList = document.querySelector('#student-list')
    this.max = 0
    this.setupEventListeners()
  },

  setupEventListeners() {
    document
      .querySelector('#new-student')
      .addEventListener('submit', this.addStudent.bind(this))
  },

  addStudent(ev) {
    ev.preventDefault()
    const f = ev.target
    const student = {
      id: this.max + 1,
      name: f.studentName.value,
    }

    this.students.unshift(student)
    
    const listItem = this.buildListItem(student)
    this.prependChild(this.studentList, listItem)
    
    this.max ++
    f.reset()
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

    return li
  },

  removeStudent(ev) {
    const btn = ev.target
    btn.closest('.student').remove()

    // Remove it from the this.students array
    // this.students.splice(?, 1)
  },

  removeClassName(el, className) {
    el.className = el.className.replace(className, '').trim()
  }
}
megaroster.init()