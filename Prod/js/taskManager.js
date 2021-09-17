/*
const createTaskHtml = (id,name, description, assignedTo, dueDate, status) => {
    const html = `<li class="list-group-item">
                        <div class="card" id="${id}">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <li class="list-group-item">${description}</li>
                                <li class="list-group-item">${assignedTo}</li>
                                <li class="list-group-item">${dueDate}</li>
				<li class="list-group-item">${status}</li>
				<input type="button" id="markDoneBtn" class="done-button" value="Mark Done">				
                            </div>
                        </div>
                    </li>`
    return html;
}
*/

const createTaskHtml = (id,name,desc,assignedTo,dueDate,status) => {
	const html = `
		      <li class="list-group-item">	
              <div class="col pl-40">
                        <div class="card border-primary">
                                <div class="card-body" id="${id}">
                                        <h4 class="card-title">${name}</h4>
                                        <p class="card-text">${desc}</p>
                                        <p class="card-text">${assignedTo}</p>
                                        <p class="card-text">${dueDate}</p>
                                        <p class="card-text">${status}</p>
				        <input type="button" id="markDoneBtn" class="done-button" value="Mark Done">
                                </div>
                        </div>      
              </div> 
	      </li>`;
	return html;

};



/*
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
*/
class TaskManager {
	constructor(){
  	this._currentId = 0;
		this._tasks = [];
	}
  get currentId(){
  	return this._currentId;
  }
  set currentId(cid){
  	this._currentId = cid;
  }
  get tasks(){
  	return this._tasks;
  }
  addTask(name,description,assignedTo,dueDate,status){
  	const cid = this.currentId;
  	let task = {
    	id:cid,
      name:name,
      description:description,
      assignedTo:assignedTo,
      dueDate:dueDate,
      status:status //'TODO'
	};
    //let task = [10];
    this._tasks.push(task);
    this.currentId += 1;
  }

  render(){
	  let tasksHTMLList = [];
	  let taskHTML ;
	  this._tasks.forEach(function(task) {
		//date = new Date(task[dueDate]);
		//formattedDate = 
		taskHTML = createTaskHtml(task.id,task.name,task.description,task.assignedTo,task.dueDate,task.status);
		//alert(taskHTML);
		tasksHTMLList.push(taskHTML);
	  });

	  let taskHtmlStr = tasksHTMLList.join('\n');

	  let taskListGroupElem = document.getElementById('taskListGroupId');
	  taskListGroupElem.innerHTML = taskHtmlStr;
  }

  getTaskById(taskId){
	  let foundTask ;
	  //alert('In class ' + taskId);
	  this._tasks.forEach(function(task) {
	          //alert('Task Id ' + task.id);
		  if(task.id == taskId){
	                  //alert('Matched');
			  foundTask = task;
	                  //alert('Found task' + foundTask.id);
			  //break;
		  }
	  });
	  return foundTask;
  }

} //end class TaskManager

