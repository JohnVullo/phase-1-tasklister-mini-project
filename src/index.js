document.addEventListener("DOMContentLoaded", () => {
  // your code here

const form = document.querySelector("#create-task-form")

function buildToDo(newTaskInput) {
  const newTaskDisp = document.createElement("li")
  const taskElement = document.querySelector("#tasks")

  newTaskDisp.textContent = newTaskInput
  taskElement.append(newTaskDisp)
}

function handleSubmit(event){
  event.preventDefault()
  const newTask = document.querySelector("#new-task-description").value
  buildToDo(newTask)
}

form.addEventListener("submit", (event) => {
  handleSubmit(event)
})

});
