const button = document.querySelector('.submit-button');
const inputTask = document.querySelector('.input-new-task');
const task = document.querySelector('.tasks');

button.addEventListener('click', function () {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

function createBtnDel(li) {
    const buttonDel = document.createElement('button');
    buttonDel.innerHTML = 'Apagar';
    li.innerText += ' ';
    buttonDel.setAttribute('class', 'apagar')
    li.appendChild(buttonDel);
}

function cleanInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createLi() {
    const li = document.createElement('li');
    return li;
}

function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    task.appendChild(li);
    cleanInput();
    createBtnDel(li);
    saveTask();
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        saveTask();
    }
});

function saveTask() {
    const liTasks = task.querySelectorAll('li');
    const listTasks = [];

    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        listTasks.push(taskText);
    }

    const tasksJSON = JSON.stringify(listTasks);
    localStorage.setItem('tasks', tasksJSON);

    console.log(tasksJSON)
}

function addSaveTasks() {
    const tasks = localStorage.getItem('tasks')
    const tasksList = JSON.parse(tasks);

    for (let task of tasksList) {
        createTask(task);
    }
}

addSaveTasks();
