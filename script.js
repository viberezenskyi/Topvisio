const taskList = document.getElementById('task-list');
const taskTotalSpan = document.getElementById('task-total');
const taskPendingSpan = document.getElementById('task-pending');

let taskId = 100;
let tasks = loadTasks();

function loadTasks() {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createNewTask() {
  let taskText = prompt('Введіть нову задачу');
  if (taskText) {
    let task = { id: taskId++, text: taskText, completed: false };
    tasks.push(task);
    saveTasks();
    renderTasks();
    updateCounters();
  }
}

function removeTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  saveTasks();
  renderTasks();
  updateCounters();
}

function toggleTaskStatus(taskId) {
  const task = tasks.find(task => task.id === taskId);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
  }
  renderTasks();
  updateCounters();
}

function updateCounters() {
  taskTotalSpan.textContent = tasks.length;
  const pendingTasks = tasks.filter(task => !task.completed).length;
  taskPendingSpan.textContent = pendingTasks;
}

function renderTasks() {
  taskList.innerHTML = tasks.map(task => renderTask(task)).join("");
}

function renderTask(task) {
  return `
    <li class="list-group-item">
      <input type="checkbox" class="form-check-input me-2" id="${task.id}" ${task.completed ? 'checked' : ''} onchange="toggleTaskStatus(${task.id})"/>
      <label for="${task.id}">
        <span>${task.text}${task.completed ? '<span class="label-completed">- Завдання виконано</span>' : ''}</span>
      </label>
      <button class="btn btn-danger btn-sm float-end" onclick="removeTask(${task.id})">Видалити</button>
    </li>
  `;
}

renderTasks();
updateCounters();
