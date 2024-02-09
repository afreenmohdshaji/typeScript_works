interface Stark{
    name:string;
    age?:number;
}


function stark(name : Stark){
    console.log(name.name);
    
}

stark({name:"eddie"})