// todo.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Function to add a new task
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const taskText = input.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Create a completed button
            const completeButton = document.createElement('button');
            completeButton.textContent = '✔';
            completeButton.className = 'complete-button';
            completeButton.addEventListener('click', function() {
                listItem.classList.toggle('completed');
            });

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '✖';
            deleteButton.className = 'delete-button';
            deleteButton.addEventListener('click', function() {
                todoList.removeChild(listItem);
            });

            // Append buttons to the list item
            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);

            // Clear the input field
            input.value = '';
        }
    });
});