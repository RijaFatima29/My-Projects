const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addTask');
const list = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const task = input.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span class="tickIcon"></span>
    <span class="taskText">${task}</span>
    <button class="editBtn">✏️</button>
    <button class="deleteBtn">🗑️</button>
    <button class="doneBtn">✅</button>
  `;

  // ✅ Toggle completion on the whole item
  li.addEventListener('click', () => li.classList.toggle('done'));

  // ✅ Mark as completed on done button
  li.querySelector(".doneBtn").addEventListener("click", (e) => {
    e.stopPropagation(); // prevent parent click
    li.classList.toggle("completed");
  });

  // ✅ Delete task
  li.querySelector(".deleteBtn").addEventListener("click", (e) => {
    e.stopPropagation(); 
    li.remove();
  });

  list.appendChild(li);
  input.value = '';
});

