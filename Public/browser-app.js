const form = document.getElementById("task-form");
const tasksDOM = document.getElementById("tasks");
const loadingText = document.querySelector(".loading-text");
const input = document.getElementById("input");
const formAlert = document.getElementById("form-alert");

// Load tasks from /api/tasks
const showTasks = async () => {
  loadingText.style.visibility = "visible";
  try {
    const {
      data: { tasks },
    } = await axios.get("/api/tasks");
    if (tasks.length < 1) {
      tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>';
      loadingDOM.style.visibility = "hidden";
      return;
    }
    const allTasks = tasks
      .map((task) => {
        const { id, title, completed } = task;
        return `<div class="single-task ${completed && "task-completed"}">
<h5><span><i class="far fa-check-circle"></i></span>${title}</h5>
<div class="task-links">

<!-- edit link -->
<a href="task.html?id=${id}"  class="edit-link">
<i class="fas fa-edit"></i>
</a>
<!-- delete btn -->
<button type="button" class="delete-btn" data-id="${id}">
<i class="fas fa-trash"></i>
</button>
</div>
</div>`;
  })
      .join("");
    tasksDOM.innerHTML = allTasks;
  } catch (error) {
    tasksDOM.innerHTML =
      '<h5 class="empty-list">There was an error, please try later....</h5>';
  }
  loadingDOM.style.visibility = "hidden";
};

showTasks();

// delete task /api/tasks/:id
tasksDOM.addEventListener("click", async (e) => {
  const el = e.target;
  if (el.parentElement.classList.contains("delete-btn")) {
    loadingDOM.style.visibility = "visible";
    const id = el.parentElement.dataset.id;
    try {
      await axios.delete(`/api/tasks/${id}`);
      showTasks();
    } catch (error) {
      console.log(error);
    }
  }
  loadingDOM.style.visibility = "hidden";
});

// form
formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = input.value;

  try {
    await axios.post("/api/tasks", { title });
    showTasks();
    input.value = "";
    formAlert.style.display = "block";
    formAlert.textContent = `task added successfully`;
    formAlert.classList.add("text-success");
  } catch (error) {
    formAlert.style.display = "block";
    formAlert.innerHTML = `error occured, please try again`;
  }
  setTimeout(() => {
    formAlert.style.display = "none";
    formAlert.classList.remove("text-success");
  }, 3000);
});
