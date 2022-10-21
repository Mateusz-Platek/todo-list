import './style.css'

export class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export class Project {
    constructor(title) {
        this.title = title;
        this.todos = [];
    }
}

let projects = [];
let selected;

let projectsList = document.querySelector('.projects-list');
let addProject = document.querySelector('.add-project');
let projectBox = document.querySelector('.project-box');
let applyProject = document.querySelector('.apply-project');
let projTitle = document.querySelector('#proj-title');
let projName = document.querySelector('.proj-name');
let todosList = document.querySelector('.todos-list');
let addTodo = document.querySelector('.add-todo');
let todoBox = document.querySelector('.todo-box');
let applyTodo = document.querySelector('.apply-todo');
let todoTitle = document.querySelector('#todo-title');
let todoDescription = document.querySelector('#todo-description');
let todoDate = document.querySelector('#todo-date');
let todoPriority = document.querySelector('#todo-priority');

// let createTodo = function(name, description, date, priority) {
//     let todo = document.createElement('div');
//     let nameTodo = document.createElement('div');
//     nameTodo.textContent = name;
//     todo.appendChild(nameTodo);
//     let descriptionTodo = document.createElement('div');
//     descriptionTodo.textContent = description;
//     todo.appendChild(descriptionTodo);
//     let dateTodo = document.createElement('div');
//     dateTodo.textContent = date;
//     todo.appendChild(dateTodo);
//     let priorityTodo = document.createElement('div');
//     priorityTodo.textContent = priority;
//     todo.appendChild(priorityTodo);
//     let removeTodo = document.createElement('button');
//     removeTodo.textContent = 'Remove';
//     removeTodo.addEventListener('click', () => {
//         todosList.removeChild(todo);
//     });
//     todo.appendChild(removeTodo);
//     todosList.appendChild(todo);
// }

let createTodos = function() {
    for(let i = 0; i < projects.length; i++) {
        if(projects[i].title == selected) {
            todosList.textContent = '';
            for(let j = 0; j < projects[i].todos.length; j++) {
                let todo = document.createElement('div');
                let nameTodo = document.createElement('div');
                nameTodo.textContent = 'Title: ' + projects[i].todos[j].title;
                todo.appendChild(nameTodo);
                let descriptionTodo = document.createElement('div');
                descriptionTodo.textContent = 'Description: ' + projects[i].todos[j].description;
                todo.appendChild(descriptionTodo);
                let dateTodo = document.createElement('div');
                dateTodo.textContent = 'Date: ' + projects[i].todos[j].dueDate;
                todo.appendChild(dateTodo);
                let priorityTodo = document.createElement('div');
                priorityTodo.textContent = 'Priority: ' + projects[i].todos[j].priority;
                todo.appendChild(priorityTodo);
                let removeTodo = document.createElement('button');
                removeTodo.textContent = 'Remove';
                removeTodo.addEventListener('click', () => {
                    projects[i].todos = projects[i].todos.filter(todo => {
                        for(let k = 0; k < projects[i].todos.length; k++) {
                            return todo.title != projects[i].todos[k].title
                        }
                    });
                    todosList.removeChild(todo);
                });
                todo.appendChild(removeTodo);
                todosList.appendChild(todo);
            }
        }
    }
}

addTodo.addEventListener('click', () => {
    todoBox.classList.remove('hidden');
});

applyTodo.addEventListener('click', () => {
    todoBox.classList.add('hidden');
    let title = todoTitle.value;
    let description = todoDescription.value;
    let date = todoDate.value;
    let priority = todoPriority.value;
    let todo = new ToDo(title, description, date, priority);
    for(let i = 0; i < projects.length; i++) {
        if(projects[i].title == selected) {
            projects[i].todos.push(todo);
        }
    }
    todoTitle.value = '';
    todoDescription.value = '';
    todoDate.value = '';
    todoPriority.value = 'high';
    createTodos();
});

let showProject = function(name) {
    let project = document.createElement('div');
    let title = document.createElement('div');
    title.textContent = name;
    project.appendChild(title);
    projName.textContent = '';
    projName.appendChild(project);
    addTodo.removeAttribute('disabled');
    createTodos();
}

let createProject = function(name) {
    selected = name;
    let singleProject = document.createElement('div');
    singleProject.classList.add('single-project');
    let projectName = document.createElement('div');
    projectName.classList.add('project-name');
    projectName.textContent = name;
    let removeProject = document.createElement('button');
    removeProject.textContent = 'Remove';
    removeProject.addEventListener('click', () => {
        projectsList.removeChild(singleProject);
        projects = projects.filter(project => project.title != name);
        projName.textContent = '';
        todosList.textContent = '';
        addTodo.setAttribute('disabled', '');
    });
    singleProject.appendChild(projectName);
    singleProject.appendChild(removeProject);
    projectName.addEventListener('click', () => {
        projName.textContent = '';
        todosList.textContent = '';
        selected = name;
        showProject(selected);
    });
    projectsList.appendChild(singleProject);
    showProject(selected);
}

let displayProjects = function() {
    projectsList.textContent = '';
    for(let i = 0; i < projects.length; i++) {
        createProject(projects[i].title);
    }
}

addProject.addEventListener('click', () => {
    projectBox.classList.remove('hidden');
});

applyProject.addEventListener('click', () => {
    projectBox.classList.add('hidden');
    let title = projTitle.value;
    if(title == '') {
        return;
    }
    let project = new Project(title);
    projTitle.value = '';
    projects.push(project);
    displayProjects();
});