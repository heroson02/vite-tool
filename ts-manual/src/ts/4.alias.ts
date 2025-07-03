/* alias 방법 2가지 : type, interface */



type User1 = { //type을 선언할 때는 PascalCase를 사용한다.
	id:number;
	name:string;
	auth:string;
	isPaid:boolean;	
}

type User2 = User1 &  {adress:string}; //User1에 adress:string 옵션을 추가한 타입.

const user1:User1 = {
	id:1,
	name:"Son",
	auth:"auth1",
	isPaid:true
}

const user2:User1 & {adress:string} = {
	id:1,
	name:"Son",
	auth:"auth1",
	isPaid:true,
	adress:'Hi'
}

/* interface */

interface User3 {
	id:number;
	name:string;
	auth:string;
	isPaid:boolean;
}

const user3 : User3 =  {
	id:1,
	name:"Son",
	auth:"auth1",
	isPaid:true
}

//User3를 확장한 인터페이스 User4
interface User4 extends User3 {
	adress : string
}

const user4 : User4 = {
	id:1,
	name:"Son",
	auth:"auth1",
	isPaid:true,
	adress:'Hi'
}

/* 객체의 키가 동적으로 결정될 때 유용하게 사용할 수 있는 */

type Person = {
	name:string;
	age:number;
	email:string;
	[key : string] : string | number;
}