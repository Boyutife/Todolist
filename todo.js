const addForm = document.querySelector('.add');

const add = document.querySelector('.todolist');

const newTemplate = todo =>{

  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;

  add.innerHTML += html;

};

addForm.addEventListener('submit', e =>{

  e.preventDefault();
  const todo = addForm.add.value.trim();

  if(todo.length){
    newTemplate(todo);
    addForm.reset();
  };
  
});

add.addEventListener('click', e=> {

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  };
  
});