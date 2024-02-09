
interface car{
    start(),
    gearSwift(),
    acclerate(),
    stop()
}


class Swift implements car{

    start(){
        console.log("engine start");
        
    }
    gearSwift(){
        console.log("change gear to move");
        
    }
    acclerate(){
        console.log("pedal the accletor to move");
        
    }
    stop(){
        console.log("hit the breaks to stop");
        
    }
}

class Baleno extends Swift implements car{

    
    gearSwift(){
        console.log("change gear to move");
        
    }
    acclerate(){
        console.log("pedal the accletor to move");
        
    }
    
}