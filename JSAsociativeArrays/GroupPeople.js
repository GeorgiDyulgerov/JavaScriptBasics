/**
 * Created by Go6koy on 2/19/2016.
 */
"use strict";

function Person(firstName, lastName,age){
    this.firstName= firstName,
    this.lastName= lastName,
    this.age= age;
    this.makeString = function(){
        return this.firstName+" "+this.lastName+"( age "+this.age+" )";
    }
};
   function groupBy(arg){
       var selectedByCreteria={};
       var i=0;

       while(i<people.length){
            var key='Group '+ people[i][arg].toString();
           if(typeof(selectedByCreteria[key]) === "undefined"){
               selectedByCreteria[key]=[];
           }
           selectedByCreteria[key].push(people[i].makeString());
           i++;
       };
       for(var k in selectedByCreteria){
           console.log(k+" : ["+selectedByCreteria[k]+"]");
       }

};
var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Liberty", 57),
    new Person("Jon", "Skeet", 38)
];
groupBy('firstName');
groupBy('age');

