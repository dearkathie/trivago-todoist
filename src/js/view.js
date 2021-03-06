import {isEnabled} from './lib/feature';

export function render(el, state) {
    const todoItems = state.todos.map(renderTodoItem).join('');
    el.innerHTML = renderApp(
        renderInput(),
        renderTodos(todoItems)
    );
}

function renderApp(input, todoList) {
    if(isEnabled('renderBottom')) {
        return renderAddTodoAtBottom(input, todoList);
    } else {
        return renderAddTodoAtTop(input, todoList);
    }
}

function renderAddTodoAtTop(input, todoList) {
    return `<div id="app">
        ${input}
        ${todoList}
    </div>`;
}

function renderAddTodoAtBottom(input, todoList) {
    return `<div id="app">
        ${todoList}
        ${input}
    </div>`;
}


function renderInput() {
    return `<form name="myForm" class="todo__input">
            <input type="text" id="todoInput" name="todoInput">
            <button type="submit" id="addTodo" onclick="setTimeout(function() {
        document.myForm.todoInput.focus();
    }, 0)">Add</button>
        </form>`;
}


function renderTodos(todoItems) {
    return `<ul class="todo">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
    const todoClass = `todo__item todo__item--${todo.done ? 'done' : 'open'}`;
    return `<li class="${todoClass}">
        <input class="js_toggle_todo" type="checkbox" data-id="${todo.id}"${todo.done ? ' checked' : ''}>
        ${todo.text}
    </li>`;
}
