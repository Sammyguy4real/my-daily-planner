function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }
    };
    li.appendChild(checkbox);

    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
    li.appendChild(taskText);

    var deleteButton = document.createElement("span");
    deleteButton.textContent = "❌";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
        li.remove();
    };
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}