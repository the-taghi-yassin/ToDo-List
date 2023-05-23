const allBoxs = document.querySelectorAll('.box')
const allTasks = document.querySelectorAll('.task')

allTasks.forEach(task => {
    task.addEventListener('dragstart', () => {
        task.classList.add('is-dragging')
    })
    task.addEventListener('dragend', () => {
        task.classList.remove('is-dragging')
    })
})

allBoxs.forEach(box => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();

        const curTask = document.querySelector('.is-dragging')
        box.appendChild(curTask)
    })
})


//addind new task

const form = document.querySelector('#add-form')
const input = document.querySelector('#todo-input')
const todoBox = document.querySelector('#to-do')

form.addEventListener('submit', e => {
    e.preventDefault();
    const newTaskText = input.value;
    if(!newTaskText) return;

    const newTask = document.createElement('p')
    newTask.classList.add('task')
    newTask.setAttribute('draggable', 'true')
    newTask.innerHTML = newTaskText

    newTask.addEventListener('dragstart', () => {
        newTask.classList.add('is-dragging')
    })
    newTask.addEventListener('dragend', () => {
        newTask.classList.remove('is-dragging')
    })

    todoBox.appendChild(newTask)
    input.value = '';
})