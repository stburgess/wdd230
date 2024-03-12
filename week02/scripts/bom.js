const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
  const deleteButton = document.createElement('button');
  const li = document.createElement('li');
  deleteButton.textContent = '❌';
  if (input.value != '') {
    li.textContent = input.value;
    li.append(deleteButton);
    list.appendChild(li);
  }
  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.value = '';
    input.focus();
  });
});

