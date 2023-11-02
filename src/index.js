const taskForm = document.getElementById("create-task-form")


document.addEventListener("DOMContentLoaded", () => {
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let whatIamAdd = e.target.description.value
    fillList(whatIamAdd)

  })



  function fillList(task) {
    console.log(task)
    const toDos = document.getElementById("list")
    const li = document.createElement("li");
    li.textContent = task;


    toDos.append(li)

  }


});



