import './style.css'
import { data } from './data';
import { renderMemo } from './card';
import {handleDragStart, handleDragOver, handleDragEnd} from './handler.ts'

export const main = document.querySelector('main') as HTMLElement;

//fetchMemo 사용하기

export function fetchMemo(){
	data.forEach(data => {
		renderMemo(main, data);
	});
}

window.addEventListener('DOMContentLoaded',()=>{
  fetchMemo();
})

main.addEventListener('dragstart',handleDragStart);
main.addEventListener('dragover',handleDragOver);
main.addEventListener('dragend',handleDragEnd);