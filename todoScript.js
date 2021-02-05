const form = document.getElementById('todo-form');
const input = form.children[0];
const ul = document.querySelector('#list');

let todos = [];
let todo = {
	name: '',
	isComplete: false,
};



const createListItems = () => {
	//create label element
	const label = document.createElement('label');
	//create checkbox element
	const checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	checkbox.className = 'checkbox';
	//create li element
	const li = document.createElement('li');
	li.className = 'list-item';
	//create span element
	const span = document.createElement('span');
	todos.forEach((element) => {
		span.textContent = element.title;
		label.appendChild(checkbox);
		label.appendChild(span);
		li.append(label);
		ul.append(li);
	});
};
const localTodosString = window.localStorage.getItem('todos');
const localTodos = JSON.parse(localTodosString);
localTodos?.forEach(element => {
	todos.push({title:element.title,complete:element.complete})
	createListItems();
});

input.addEventListener('change', (e) => {
	todo.name = e.target.value;
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const title = todo.name;
	if (title.trim().length < 1) {
		alert('Please write anything !');
	} else {
		todos.push({ title: todo.name, complete: todo.isComplete });
		createListItems();
		window.localStorage.setItem('todos',JSON.stringify(todos));
	}
});
