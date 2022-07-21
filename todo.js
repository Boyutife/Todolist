const addForm = document.querySelector('.add');

const add = document.querySelector('.todolist');

addForm.addEventListener('submit', e =>{

  e.preventDefault();
  const todo = addForm.add.value.trim();

  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
`;

  add.innerHTML += html;

  
});