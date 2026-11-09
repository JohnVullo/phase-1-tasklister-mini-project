document.addEventListener("DOMContentLoaded", () => {
  // your code here

//Creates form variable under "create task form" element
const form = document.querySelector("#create-task-form")

function buildToDo(newTaskInput) {

  //Creates variables to create list element and selecting tasks element
  const newTaskDisp = document.createElement("li")
  const taskElement = document.querySelector("#tasks")

  //Adds users task input to newTaskDisp that points to list element
  newTaskDisp.textContent = newTaskInput

  //This appends the created list element to the tasks element
  taskElement.append(newTaskDisp)
}

//This function takes the user input to build the task list
function handleSubmit(event){

  //This prevents the website from refreshing after new data
  event.preventDefault()

  //This takes the data the user entered and stores it in newTask
  const newTask = document.querySelector("#new-task-description").value
  
  //This sends the info to function buildToDo
  buildToDo(newTask)
}

//This takes the input from the user after submit is clicked to function handleSubmit
form.addEventListener("submit", (event) => {
  handleSubmit(event)
})

});
