
const taskManager = new TaskManager();
const inputForm = document.getElementById("#inputForm");


function validFormFieldInput(data) {
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const name = newTaskNameInput.value;
    console.log("name: " + name);

    const newTaskDescriptionInput = document.querySelector('#newTaskDescriptionInput');
    const description = newTaskDescriptionInput.value;
    console.log("description: " + description);

    const newAssignedToInput = document.querySelector('#newAssignedToInput');
    const assignedTo = newAssignedToInput.value;
    console.log("assignedTo: " + assignedTo);

    const newDueDateInput = document.querySelector('#newDueDateInput');
    const dueDate = newDueDateInput.value;
    console.log("dueDate: " + dueDate);

    const newStatusInput = document.querySelector('#newStatusInput');
    const status = newStatusInput.value;
    console.log("status: " + status);
};


document.getElementById("#newTaskButton").addEventListener("click", function() {
    inputForm.submit();
    taskManager.addTask(currentId, name, description, assignedTo, dueDate, status);
}); 

console.log(taskManager.tasks);