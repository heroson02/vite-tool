import { type Todo, type TodoList } from "./type.ts";
import S from "./style.module.css";
import { addTodo, deleteTodo, toggleTodo } from "./todo.ts";
import { loadStorage } from "./storage.ts";

const tag = `
  <div class="${S.container}">
    <form>
      <label for="todo">할 일 : </label>
      <input type="text" id="todo"/>
      <button type="submit">추가</button>
    </form>
    <hr />
    <ul id="renderPlace">
    </ul>
  </div>
`
document.querySelector('#app')?.insertAdjacentHTML('beforeend',tag);



const input = document.querySelector('#todo') as HTMLInputElement;
const list = document.querySelector('#renderPlace') as HTMLUListElement;


const form = document.querySelector('form');

function handleSubmit(e:SubmitEvent){
  e.preventDefault()
	const value = input.value.trim();
	if (!value) return ;
  console.log( input.value );
  addTodo(value);
  render()
  
}

// todos 데이터를 2개 이상 추가해서 리스트 렌더링 바꿔주세요.

function render(){

const todos:TodoList = loadStorage();
  
list.innerHTML = '';
  todos.forEach(element => {
		const li = makeTag(element);
		list.appendChild(li)
		
		const delButton = li.querySelector('.delete') as HTMLButtonElement;
		const checkBox = li.querySelector('.input[type="checkbox"]')!;
		const span = li.querySelector('span')!;
	
		delButton.addEventListener('click', () => {
			console.log('buttonClicked');
		deleteTodo(element.id);
		render();
	});

	checkBox.addEventListener('change', () => {
		toggleTodo(element.id);
		render();
	})

	span.addEventListener('blur', () => {

	})
	});

}

function makeTag(value : Todo):Element
{
	const li = document.createElement('li');
  li.dataset.id = String(Date.now());
  li.innerHTML = `
    <input name="checkbox" type="checkbox" ${value.completed ? 'checked' : ''} />
    <span>${value.content}</span>
    <button type="button" class="delete">삭제</button>
  `
	return li;
}

//삭제 버튼을 클릭했을 때 데이터 삭제.


form?.addEventListener('submit',handleSubmit)

render();
