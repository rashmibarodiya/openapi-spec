

class DateClass{
private place :string
    constructor(place : string){
        this.place = place
    }

   
    getTime(){
        console.log("get time called")
        return new Date().getTime();
    }
}

 var d = new DateClass("India")

 console.log(d.getTime())
 d.getTime()
 
