import gsap from "gsap";
import { fetchMemo, main } from "./main";
import { supabase } from "./supabase/supabase";
import { insertMemo } from "./service";
import type { Tables } from "./supabase/database.types";

let draggingEl : HTMLElement | null = null;

export function handleDragStart(e:DragEvent){
	console.log('drag start');
	const target = e.target as HTMLElement;
	const memo = target.closest('.memo');

	if (memo && e.dataTransfer)
	{
	draggingEl = memo as HTMLElement;
	e.dataTransfer!.effectAllowed = 'move';

	memo.classList.add('dragging');}
}
export function handleDragOver(e:DragEvent){
	e.preventDefault();

	const afterElement = getDragAfterElement(main,e.clientY);

  if(!draggingEl) return;

  if(afterElement === null){
    main.appendChild(draggingEl)
  }else{
    main.insertBefore(draggingEl,afterElement)
  }
  
}
export function handleDragEnd(){
	console.log('drag end');
	if (draggingEl){
		draggingEl.classList.remove('dragging');
		draggingEl = null;
	}
}

function getDragAfterElement(container:HTMLElement,y:number):HTMLElement | null{
  const draggableElements = [...container.querySelectorAll('.memo:not(.dragging)')] as HTMLElement[];

  return draggableElements.reduce((closest,child)=>{
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    
    if(offset < 0 && offset > closest.offset){
      return {offset, element:child}
    }else{
      return closest;
    }
  },{offset: -Infinity, element: null as HTMLElement | null}).element;
}

export async function handleDelete(e : MouseEvent){
	const target = e.target as HTMLElement;
	const btn = target.closest('button');
	const article = target.closest('article');

	if (!(article && btn))
		return ;
	if (confirm("정말 삭제하시겠습니까?"))
		deleteMemo(+article.dataset.id!);
}

async function deleteMemo(id : number)
{
	console.log(await supabase.from('memo').delete().eq('id', id).select(), ' 삭제 완료');
	fetchMemo();
}

export function handleOpenpop(){
	console.log('popUpBtn');
	const tl = gsap.timeline()
	.to('#dialog', {autoAlpha : 1, duration:0.2})
	.to('.pop', {y:0, ease:'power3.inOut'});
	console.log('clicked');
}
export function handleClosepop(){
	console.log('closeBtn');
	
	const tl = gsap.timeline()
	.to('.pop', {y:'100%', ease:'power3.inOut'})
	.to('#dialog', {autoAlpha : 0, duration:0.2});
}
export function handleCreate(e:MouseEvent){
	e.preventDefault();
	
	const title = document.querySelector('#title') as HTMLInputElement;
	const description = document.querySelector('#description') as HTMLInputElement;
	const priority = document.querySelector('#priority') as HTMLSelectElement;

	insertMemo({
		title : title.value,
		description : description.value,
		priority : priority.value as Tables<'memo'>['priority']
	})

	title.value = '';
	description.value = '';
	priority.value = '';
}