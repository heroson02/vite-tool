let arr:number[] = [1, 2, 3];

let strArr:string[] = ['a', 'b', 'c'];


/* generic type 변수 */
let _arr:Array<number> = [1, 2, 3];
let _strArr:Array<string> = ['1', '2', '3'];

/* 유니온 타입 : 명시한 타입이 모두 올 수 있다. 타입이 반드시 올 필요 x, 순서 일치 필요 x*/
let multi:(string | number | boolean)[] = ['hello', 10, true];

/* 튜플 타입 : 명시한 타입이 반드시 와야 하고, 순서도 일치해야 한다. */
let tupleB:[string, number] = ['tiger', 30];

/* 다차원 배열 */
const user: [string, number][] = [
	['first', 1],
	['second', 2],
	['third', 3],
]