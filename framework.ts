
interface framework{
    name:string
    architecture:string
    roadMap()
}

class Django implements framework{
    name:string
    architecture:string
    constructor(name,architecture){
        this.name=name
        this.architecture=architecture
    }
    roadMap(){
        console.log(this.name,"is a",this.architecture,"framework");
        
    }
}
class Angular implements framework{
    name:string
    architecture:string
    constructor(name,architecture){
        this.name=name
        this.architecture=architecture
    }
    roadMap(){
        console.log(this.name,"is a",this.architecture,"framework");
        
    }
}

class Student{
    frameworkObj:framework
    constructor(frameork){
        this.frameworkObj=frameork

    }
    learn(){
        this.frameworkObj.roadMap()
    }
}

var obj=new Django("django","mvt")

var obj2=new Student(obj)
obj2.learn()