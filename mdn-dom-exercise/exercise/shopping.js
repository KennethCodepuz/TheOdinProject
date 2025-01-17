const ulist = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const inputValue = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');

    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    span.textContent = inputValue;
    deleteButton.textContent = 'Delete'
    ulist.append(listItem);

    deleteButton.addEventListener('click', () => {
        ulist.removeChild(listItem);
    });
    input.focus();
});



