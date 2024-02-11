document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const newTaskInput = document.querySelector("#new-task-input");
    const taskList = document.querySelector(".task-list");
  
    function addTask(task) {
      const taskItem = document.createElement("li");
      taskItem.className = "task-item";
  
      const taskText = document.createElement("span");
      taskText.className = "task-text";
      taskText.textContent = task;
      taskItem.appendChild(taskText);
  
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });
      taskItem.appendChild(deleteButton);
  
      taskList.appendChild(taskItem);
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!newTaskInput.value.trim()) return;
      addTask(newTaskInput.value.trim());
      newTaskInput.value = "";
    });
  
   
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    existingTasks.forEach((task) => addTask(task));
  
    
    taskList.addEventListener("change", () => {
      localStorage.setItem("tasks", JSON.stringify(Array.from(taskList.children).map((li) => li.textContent.trim())));
    });
  });