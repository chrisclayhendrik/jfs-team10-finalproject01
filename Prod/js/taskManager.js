class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }
    addTask(currentId, name, description, assignedTo, dueDate, status){
        this.currentId++;
        this.tasks.push(currentId, name, description, assignedTo, dueDate, status = 'TODO');
    };
};
