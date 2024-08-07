import { measure, once } from "helpful-decorators";

class DateClass {
    private place: string;
    
    constructor(place: string) {
        this.place = place;
    }

   @measure 
    getTime() {
        console.log("get time called");
        return new Date().getTime();
    }
}

const d = new DateClass("India");

console.log(d.getTime());
console.log("hi " +d.getTime());
console.log(d.getTime());
console.log(d.getTime());

