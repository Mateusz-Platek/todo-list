import './style.css'
import ToDo from './todo.js';
import Project from './project.js';

let projects = [];
let selected;

projects = JSON.parse(localStorage.getItem("projects") || "[]");

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

let sortTodos = function() {
    for(let i = 0; i < projects.length; i++) {
        for(let j = 0; j < projects[i].todos.length; j++) {
            for(let k = 0; k < projects[i].todos.length - j - 1; k++) {
                if((projects[i].todos[k].priority == 'low' && (projects[i].todos[k + 1].priority == 'medium' || projects[i].todos[k + 1].priority == 'high')) || (projects[i].todos[k].priority == 'medium' && projects[i].todos[k + 1].priority == 'high')) {
                    console.log(projects[i].todos[k]);
                    let tmp = projects[i].todos[k];
                    console.log(projects[i].todos[k + 1]);
                    projects[i].todos[k] = projects[i].todos[k + 1];
                    projects[i].todos[k + 1] = tmp;
                }
            }
        }
    }
}

let createTodos = function() {
    sortTodos();
    localStorage.removeItem('projects');
    for(let i = 0; i < projects.length; i++) {
        if(projects[i].title == selected) {
            todosList.textContent = '';
            for(let j = 0; j < projects[i].todos.length; j++) {
                let todo = document.createElement('div');
                todo.classList.add('todo');
                let nameTodo = document.createElement('div');
                nameTodo.classList.add('left-name');
                nameTodo.textContent = 'Title: ' + projects[i].todos[j].title;
                todo.appendChild(nameTodo);
                let descriptionTodo = document.createElement('div');
                descriptionTodo.classList.add('mid-desc');
                descriptionTodo.textContent = 'Description: ' + projects[i].todos[j].description;
                todo.appendChild(descriptionTodo);
                let dateTodo = document.createElement('div');
                dateTodo.classList.add('mid-date');
                dateTodo.textContent = 'Date: ' + projects[i].todos[j].dueDate;
                todo.appendChild(dateTodo);
                let priorityTodo = document.createElement('div');
                priorityTodo.classList.add('left-prio');
                priorityTodo.textContent = 'Priority: ' + projects[i].todos[j].priority;
                if(projects[i].todos[j].priority == 'high') {
                    todo.classList.add('high');
                } else if(projects[i].todos[j].priority == 'medium') {
                    todo.classList.add('medium');
                } else {
                    todo.classList.add('low');
                }
                todo.appendChild(priorityTodo);
                let removeTodo = document.createElement('button');
                removeTodo.textContent = 'Remove';
                removeTodo.addEventListener('click', () => {
                    localStorage.removeItem('projects');
                    projects[i].todos = projects[i].todos.filter(todo => {
                        for(let k = 0; k < projects[i].todos.length; k++) {
                            return todo.title != projects[i].todos[k].title
                        }
                    });
                    todosList.removeChild(todo);
                    localStorage.setItem('projects', JSON.stringify(projects));
                });
                todo.appendChild(removeTodo);
                todosList.appendChild(todo);
            }
        }
    }
    localStorage.setItem('projects', JSON.stringify(projects));
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
    if(title == '' || description == '' || date == '') {
        return;
    }
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
        localStorage.removeItem('projects');
        projectsList.removeChild(singleProject);
        projects = projects.filter(project => project.title != name);
        projName.textContent = '';
        todosList.textContent = '';
        addTodo.setAttribute('disabled', '');
        localStorage.setItem('projects', JSON.stringify(projects));
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

displayProjects();