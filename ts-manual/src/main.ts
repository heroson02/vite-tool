import { _sum } from "./sub";

const a = 10;

const b = _sum(2, 4);

const all = (a : number, b : number) => {
	return a + b;
}

function greeting(user : string){
	return `${user}님 안녕하세요.`;
}