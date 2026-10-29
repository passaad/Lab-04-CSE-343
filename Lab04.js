"use strict";
const input = document.getElementById("t1");
const button = document.getElementById("b1");
const taskList = document.getElementById("tasks");
let tasks = [];
function addTask() {
    let task = input.value;
    tasks.push(task);
    input.value = "";
    renderTasks();
}
function renderTasks() {
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let p = document.createElement("p");
        p.textContent = tasks[i];
        taskList.appendChild(p);
    }
}
button.addEventListener("click", addTask);
