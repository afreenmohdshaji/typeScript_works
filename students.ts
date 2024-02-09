class Students{
    rol:number
    name:string
    course:string

    constructor(rol:number,name:string,course:string){
        this.rol=rol;
        this.name=name;
        this.course=course;
    }

    printDetail(){
        console.log(this.rol,this.name,this.course);
        
    }
}

let st=new Students(2,"rahul","django")
st.printDetail()