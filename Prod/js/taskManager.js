const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    const html = `<li class="list-group-item">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${assignedTo}</li>
            <li class="list-group-item">${dueDate}</li>
            <li class="list-group-item">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button"
                        id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        ${status}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button class="btn btn-success dropdown-item"
                                type="button">Action</button></li>
                        <li><button class="dropdown-item" type="button">Another action</button></li>
                        <li><button class="dropdown-item" type="button">Something else here</button>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</li>`
    return html;
}




class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    };
    addTask(name, description, assignedTo, dueDate, status = 'TODO') {
        this.currentId++;
        this.tasks.push(this.currentId, name, description, assignedTo, dueDate, status);
    };
};