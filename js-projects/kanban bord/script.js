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

function addTask(columnId) {
    const taskText = prompt("Enter task name:");
    if (taskText) {
        const task = document.createElement("div");
        task.classList.add("task");
        task.setAttribute("draggable", true);
        task.id = `task-${Math.floor(Math.random() * 1000)}`;

        task.innerHTML = `
            <div class="title">
                <span class="task-text">${taskText}</span> <!-- FIXED: Added class "task-text" -->
                <button class="edit-task">✎</button>
                <button class="delete-task" onclick="deleteTask('${task.id}')">×</button>
            </div>
            <div class="details">
                <span>${task.id}</span>
                <span class="avatar"></span>
            </div>
        `;

        document.getElementById(columnId).insertBefore(task, document.getElementById(columnId).lastElementChild);

        task.querySelector(".edit-task").addEventListener("click", function () {
            editTask(task);
        });

        // Add drag events to new task
        task.addEventListener("dragstart", dragStart);
        let taskIds = task.id
        saveTaskToLocalStorage(columnId, taskIds, taskText);
    }
}

function saveTaskToLocalStorage(columnId, taskId, taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || {};
    
    if (!tasks[columnId]) {
        tasks[columnId] = [];
    }

    tasks[columnId].push({ id: taskId, text: taskText });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskInLocalStorage(taskId, newText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || {};
    
    for (let column in tasks) {
        tasks[column] = tasks[column].map(task =>
            task.id === taskId ? { ...task, text: newText } : task
        );
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskId) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || {};
    
    for (let column in tasks) {
        tasks[column] = tasks[column].filter(task => task.id !== taskId);
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function editTask(task) {
    const taskTextElement = task.querySelector(".task-text");
    if (taskTextElement) {
        const newText = prompt("Edit task name:", taskTextElement.textContent);
        if (newText) {
            taskTextElement.textContent = newText;
            updateTaskInLocalStorage(task.id, newText);
        }
    }
}


function deleteTask(taskId) {
    const task = document.getElementById(taskId);
    if (task) {
        task.remove();
        removeTaskFromLocalStorage(taskId);
    }
}

function removeList(listId) {
    const list = document.getElementById(listId);
    if (list) {
        list.remove();
    }
}
