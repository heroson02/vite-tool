import './style.css'
import { renderMemo } from './card';
import {handleDragStart, handleDragOver, handleDragEnd, handleDelete, handleOpenpop, handleClosepop, handleCreate} from './handler.ts'
import { supabase } from './supabase/supabase.ts';

export const main = document.querySelector('main') as HTMLElement;
const create = document.querySelector('.create') as HTMLButtonElement;
const done = document.querySelector('.done') as HTMLButtonElement;
const close = document.querySelector('.close') as HTMLButtonElement;

//fetchMemo 사용하기

export async function fetchMemo(){
	const {data} = await supabase.from('memo').select();

	main.innerHTML = '';

	data && data.forEach((d) =>{
		renderMemo(main, d);
	})
}

window.addEventListener('DOMContentLoaded',()=>{
  fetchMemo();
})

main.addEventListener('dragstart',handleDragStart);
main.addEventListener('dragover',handleDragOver);
main.addEventListener('dragend',handleDragEnd);
main.addEventListener('click',handleDelete);

create.addEventListener('click', handleOpenpop);
close.addEventListener('click', handleClosepop);
done.addEventListener('click', handleCreate);