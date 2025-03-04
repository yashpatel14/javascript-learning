document.addEventListener("DOMContentLoaded", () => {
    addDragAndDropEvents();
});

function addDragAndDropEvents() {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach(task => {
        task.addEventListener("dragstart", dragStart);
    });

    const columns = document.querySelectorAll(".column");
    columns.forEach(column => {
        column.addEventListener("dragover", dragOver);
        column.addEventListener("drop", drop);
    });
}

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.target.classList.add("dragging");
}

function dragOver(event) {
    event.preventDefault(); // Allows dropping
    event.target.classList.add("drag-over");
}

function drop(event) {
    event.preventDefault();
    event.target.classList.remove("drag-over");

    const taskId = event.dataTransfer.getData("text/plain");
    const task = document.getElementById(taskId);

    // Ensure we are dropping into a column, not another task
    let column = event.target.closest(".column");
    if (column) {
        column.insertBefore(task, column.lastElementChild);
    }

    task.classList.remove("dragging");
}

// Modify `addTask` to ensure new tasks get drag events
function addTask(columnId) {
    const taskText = prompt("Enter task name:");
    if (taskText) {
        const task = document.createElement("div");
        task.classList.add("task");
        task.setAttribute("draggable", true);
        task.id = `task-${Math.floor(Math.random() * 1000)}`;
        task.innerHTML = `
            <div class="title">
                ${taskText}
                <button class="delete-task" onclick="deleteTask('${task.id}')">×</button>
            </div>
            <div class="details">
                <span>${task.id}</span>
                <span class="avatar"></span>
            </div>
        `;
        document.getElementById(columnId).insertBefore(task, document.getElementById(columnId).lastElementChild);
        
        // Add drag events to new task
        task.addEventListener("dragstart", dragStart);
    }
}

function deleteTask(taskId) {
    const task = document.getElementById(taskId);
    if (task) {
        task.remove();
    }
}

function removeList(listId) {
    const list = document.getElementById(listId);
    if (list) {
        list.remove();
    }
}
