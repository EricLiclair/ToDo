let placeholder = document.getElementById('task-add');
let addButton = document.getElementById('add-button');
let taskView = document.getElementById('task-display');

fetch('./trial_data.json')
.then(function (data) {
  return data.json();
})
.then(function(data) {
  let CId = data.clientId;
  let url = "https://api.unsplash.com/photos/?query=black&client_id=" + CId;

  //creating a random value
  var random = Math.floor(Math.random() * 10);

  //fetch the image url from Unsplash API
  fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(data) {
    let imageSrc = data[random].urls.full;
    document.getElementById('body').style.backgroundImage="url('" + imageSrc + "')";
  })
})

//function to add the tasks previously stored in the local storage
function addFromLocalStorage (value, taskStatus) {
  let task = document.createElement('li');
  task.setAttribute('id', 'tasks');
  task.innerText = value;
  task.style.cursor = 'pointer';
  if (taskStatus == "Done") {
    task.style.textDecorationLine="line-through";
  }
  taskView.appendChild(task);
  task.addEventListener('click', function() {
    task.style.textDecorationLine="line-through";
    localStorage.setItem(value, "Done");
  })

  task.addEventListener('dblclick', function() {
    localStorage.removeItem(value);
    taskView.removeChild(task);
  })

}


for (let i = 0; i < localStorage.length; i++) {
  document.getElementById('task-viewer').style.display="flex";
  let value = localStorage.key(i);
  let taskStatus = localStorage.getItem(value);
  addFromLocalStorage(value, taskStatus);
}



//function to add a new task from the input
function addNewToDo() {
  let value = placeholder.value;
  if (value == "") {
    return ;
  }
  document.getElementById('task-viewer').style.display="flex";
  let task = document.createElement('li');
  task.setAttribute('id', 'tasks');
  task.innerText = value;
  localStorage.setItem(value, "To Do");
  taskView.appendChild(task);
  placeholder.value = null ;
  task.style.cursor = 'pointer';
  task.addEventListener('click', function() {
    task.style.textDecorationLine="line-through";
    localStorage.setItem(value, "Done");

  })

  task.addEventListener('dblclick', function() {
    localStorage.removeItem(value);
    taskView.removeChild(task);
  })
  
}

addButton.addEventListener('click', function() {
  addNewToDo();  
 })