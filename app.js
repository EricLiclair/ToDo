let placeholder = document.getElementById('task-add');
let addButton = document.getElementById('add-button');
let taskView = document.getElementById('task-display');


addButton.addEventListener('click', function() {
  if (placeholder.value == "") {
    return ;
  }
  document.getElementById('task-viewer').style.display="flex";
  var task = document.createElement('li');
  task.setAttribute('id', 'tasks');
  task.innerText = placeholder.value;
  taskView.appendChild(task);
  placeholder.value = null ;
  task.style.cursor = 'pointer';
  task.addEventListener('click', function() {
    task.style.textDecorationLine="line-through";
  })

  task.addEventListener('dblclick', function() {
    taskView.removeChild(task);
  })
  
})