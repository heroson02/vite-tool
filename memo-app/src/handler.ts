import { main } from "./main";

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