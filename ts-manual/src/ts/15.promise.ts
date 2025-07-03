type User = {name:string,age:number}

type Options = {
  timeout:number;
  condition:boolean;
  data:User[]
}

const defaultOptions = {
  timeout:1000,
  condition:false,
  data:[{name:'tiger',age:30}]
}


function delayP(options:Partial<Options>):Promise<User[]>{

  const {timeout,condition,data} = {...defaultOptions,...options}

  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(condition) resolve(data);
        else reject({message:'error!'})
      }, timeout);
  })

}

delayP({
  timeout:1000,
  data:[{name:'tiger',age:30}],
  condition:false,
})
