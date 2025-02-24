
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.getElementById("completedTasks");

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", updateStats);

        const taskLabel = document.createElement("span");
        taskLabel.innerText = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "delete";
        deleteBtn.classList.add("delete-button");
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            taskItem.remove();
            updateStats();
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = "";
        updateStats();
    }

    function updateStats() {
        const tasks = document.querySelectorAll(".task-item");
        const completed = document.querySelectorAll(".task-item input:checked");

        

        totalTasks.innerText = `Total tasks: ${tasks.length}`;
        completedTasks.innerText = `Completed: ${completed.length}`;

        document.querySelector(".empty-list").style.display =
            tasks.length === 0 ? "block" : "none";
    }

    updateStats();

