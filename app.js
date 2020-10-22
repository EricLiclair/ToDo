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