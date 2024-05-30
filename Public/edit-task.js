const editForm = document.getElementById('single-task')
const taskID = document.getElementById('taskId')
const taskName = document.getElementById('taskTitle')
const taskCompleted = document.getElementById('completed')
const editBtn = document.getElementById('edit')
const formAlert = document.getElementById('form-alert')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
let tempName

const showTask = async () => {
  try {
    const {
      data: { task },
    } = await axios.get(`/api/tasks/${id}`)
    const { id, title, completed } = task

    taskID.textContent = id
    taskName.value = title
    tempName = title
    if (completed) {
      taskCompleted.checked = true
    }
  } catch (error) {
    console.log(error)
  }
}

showTask()

editForm.addEventListener('submit', async (e) => {
  editBtn.textContent = 'Loading...'
  e.preventDefault()
  try {
    const taskName = taskName.value
    const taskCompleted = taskCompleted.checked
    const {
      data: { task },
    } = await axios.patch(`/api/tasks/${id}`, {
      name: taskName,
      completed: taskCompleted,
    })

    const { id, title, completed } = task

    taskID.textContent = task
    taskName.value = title
    tempName = title
    if (completed) {
      taskCompleted.checked = true
    }
    formAlert.style.display = 'block'
    formAlert.textContent = ` edite Success`
    formAlert.classList.add('text-success')
  } catch (error) {
    console.error(error)
    taskName.value = tempName
    formAlert.style.display = 'block'
    formAlert.innerHTML = `error, please try again`
  }
  editBtn.textContent = 'Edit'
  setTimeout(() => {
    formAlert.style.display = 'none'
    formAlert.classList.remove('text-success')
  }, 3000)
})
