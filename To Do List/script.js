document.getElementById('addTaskBtn').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="deleteTask(this)">🗑️</button>`;
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
  } else {
    alert('Tugas tidak boleh kosong!');
  }
});

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}