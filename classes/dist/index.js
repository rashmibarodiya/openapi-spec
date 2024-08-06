"use strict";
class DateClass {
    constructor(place) {
        this.place = place;
    }
    getTime() {
        console.log("get time called");
        return new Date().getTime();
    }
}
var d = new DateClass("India");
console.log(d.getTime());
d.getTime();
