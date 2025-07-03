/* generic type */

// 제네릭은 C++의 템플릿과 비슷하다.
type User<T, U> = {name:T, age:U}

const user:User<string, number> = {
	name:'tiger',
	age:30,
}


function fn<T>(value:T):T{
	return value;
}

fn(10);


/*
	제네릭에서 세부조건을 주려면 extends를 사용하자. length:number가 있는 데이터타입만 받게 된다. 
*/
function getLength<T extends {length:number}>(arr:T):number{
	return arr.length;
}

//조건부 연산자(?)를 사용해서 T를 동적으로 설정할 수 있다.
type Response<T> = T extends string ? {type:string;content:string} : {type:string;content:T};

getLength([1,2,3]);
getLength('hello');