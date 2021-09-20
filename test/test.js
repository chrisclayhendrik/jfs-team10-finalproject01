const assert = require('assert');
const process = require('process');
const TaskManager = require('../Prod/js/taskManager.js');
const addTask = TaskManager.addTask;
const deleteTask = TaskManager.deleteTask;
const getTaskById = TaskManager.getTaskById;    

describe('TaskManager', () => {
    describe('addTask', () => {
        it('Calls addTask on TaskManager', () => {
            const tracker = new assert.CallTracker();

            function addTask(task) {}
            const callsfunc = tracker.calls(addTask, 1);

            callsfunc();
            process.on('exit', () => {
            tracker.verify();
            });
        });
    });
    describe('deleteTask', () => {
        it('Calls deleteTask on TaskManager', () => {
            const tracker = new assert.CallTracker();

            function deleteTask(task) {}
            const callsfunc = tracker.calls(deleteTask, 1);

            callsfunc();
            process.on('exit', () => {
            tracker.verify();
            });
        });
    });
    describe('getTaskById', () => {
        it('returns a task object with the given id', () => {
            
        });
    });
});