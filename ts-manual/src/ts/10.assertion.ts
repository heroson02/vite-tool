/* 강제로 타입을 지정하는 것 */
const input = document.querySelector('#textField') as HTMLInputElement;
// const input = document.querySelector<HTMLInputElement>('#textField')!;

input.value;

const person = {
	name : 'tiger',
	age:30
} as const
