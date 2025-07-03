const arr = [1,2,3];

const newArray = arr.map((item, index) => {
	return item * index;
})

type Map = <T, U>(arr:T[], f:(n:T)=>U) => U[];

const map:Map = (arr, f) => {
	let result = [];

	for(const a of arr){
		result.push(f(a))
	}

	return result;
}

const forEach = <T>(arr:T[], f:(a:T, i:number)=>void) => {
	let i = 0;
	for (const a of arr){
		f(a, i++);
	}
}