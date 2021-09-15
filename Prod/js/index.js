let taskManager = new TaskManager();

function validFormFieldInput(data) {

    const newTaskNameInput = document.querySelector("#newTaskNameInput");
    const name = newTaskNameInput.value;
    console.log('name: ' + name);

    const newTaskDescriptionInput = document.querySelector("#newTaskDescriptionInput");
    const description = newTaskDescriptionInput.value;
    console.log('description: ' + description);

    const newAssignedToInput = document.querySelector("#newAssignedToInput");
    const assignedTo = newAssignedToInput.value;
    console.log('assignedTo: ' + assignedTo);

    const newDueDateInput = document.querySelector("#newDueDateInput");
    const dueDate = newDueDateInput.value;
    console.log('dueDate: ' + dueDate);

    const newStatus = document.querySelector("#newStatusInput");
    const status = newStatus.value;
    console.log('status: ' + status);
   
    taskManager.addTask(name, description, assignedTo, dueDate, status);
    

};

document.querySelector('#inputForm').addEventListener("submit", (event) => {
    event.preventDefault();
    validFormFieldInput();
    document.querySelector('#inputForm').reset();
      
});
console.log(taskManager.tasks);