
interface bike{
    name:string
    ride()
}

class PassionPro implements bike{
    name:string
    constructor(name){
        this.name=name
    }
    ride(){
        console.log(this.name,"rides");
        
    }
}

class Hunter  implements bike{
    name:string
    constructor(name){
        this.name=name
    }
    ride(){
        console.log(this.name,"rides");
        
    }
}

class Person {

    vehicleObj:bike
    constructor(vehicle){
        this.vehicleObj=vehicle
    }
    rider(){
        this.vehicleObj.ride()
        
    }
}

var hunterObj=new Hunter("hunter")

var personObj=new Person(hunterObj)
personObj.rider()


