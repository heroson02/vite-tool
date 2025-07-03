//number, string, boolean, null, undefined

/* number */
let num1:number = 10;
let num2 = 50;

num1 = 150;

/* string type */

let str1 = 'hi';
let str2 = 'hello';

str2 = '123';


/* boolean type */
let boo1 : boolean = true;

/* null type */
let nullA:null = null;

nullA = null; //그 외는 할당 불가.

/* undefined */

let undef : undefined = undefined;

/* literal type */

let numA:10 = 10; //타입에 값을 넣어서 해당 값만 받을 수 있도록 한다. 
let strA:'hello' = 'hello';
let boolA:true = true;

// numA = 100; //error

/* unknown type */
let unknown:unknown;

/* never type */
let never:never; //어떠한 값도 내보내지 않는다. console 혹은 error 전용 함수. 

/* any type */
let any:any;