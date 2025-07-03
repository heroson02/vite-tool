import type {Pokemon} from 'type.ts';

const END_POINT = 'https://pokeapi.co/api/v2/pokemon/3';

async function fetchData(link : string):Promise<Pokemon>{
	const response = fetch(link);
	const data = (await response).json();
	return data;
}

fetchData(END_POINT);


//createCard

interface Data{
	name : string;
	age : number;
	email : string;
}

function createCard(data : Data) : string{
	const innerHTML = `
		<h1>${data.name}</h1>
		<h2>${data.age}</h2>
		<h2>${data.email}</h2>
	`

	return innerHTML;
}

//renderCard

function renderCard(html : string){
	let input = document.createElement('li');
	input.innerHTML = html;

	document.appendChild(input);
}