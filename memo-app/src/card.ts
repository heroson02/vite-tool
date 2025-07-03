export type MemoData = {
	id : number,
	priority : 'high' | 'medium' | 'easy',
	title : string,
	description : string,
	hits:number,
}

//createMemo

export function createMemo(data_ : MemoData):string{
	return /* html */`
	<article class="memo ${data_.priority}" data-id="${data_.id}" draggable="true">
					<header class="memo-header">
						<span class="badge">${data_.priority}</span>
						<button type="button" class="delete">
							<img src="/trash.svg" alt="삭제 아이콘" />
						</button>
					</header>
					<div class="contents">
						<h2>${data_.title}</h2>
						<p>${data_.description}</p>
					</div>
					<footer class="memo-footer">
						<img src="/user.svg" alt="유저 아이콘" />
						<span class="hit">${data_.hits}</span> watch
						<img class="drag" src="/drag.svg" alt="드래그 아이콘" />
					</footer>
				</article>
	`;
}

//renderMemo

export function renderMemo(target : HTMLElement, data : MemoData){
	target.insertAdjacentHTML('beforeend', createMemo(data));
}

