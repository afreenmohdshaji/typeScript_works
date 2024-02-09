

class Parent{
    parentMethod(){
        console.log("parent is defined");
        
    }
}

class Parent2 extends Parent{
    secondParent(){
        console.log("second parent");
        
    }
    
}

class Child extends Parent2{
    childMethod(){
        console.log("child is defined");
        
    }
}

var ch=new Child()
ch.childMethod()
ch.parentMethod()
ch.secondParent()