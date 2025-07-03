/* any type */

let obj : any;

/*
	js처럼 모든 데이터타입을 입력받을 수 있다.
	그러나 해당 특징을 벗어나기 위해 사용하는 TS에서 굳이 쓸 필요 x
*/

obj = 1;
obj = 'a';
obj = {x:10};
obj = [1, 2, 3];


/*
	unknown
		- any보다는 성의가 있는 형태지만, 큰 차이가 없다.
		- 데이터타입 전용 함수를 사용할 수 없다.
*/
let arr : unknown;

arr = 1;
arr = 'hello';

/* 타입 좁히기 (narrowing) */
if (typeof arr === 'number'){
	arr.toFixed();
}