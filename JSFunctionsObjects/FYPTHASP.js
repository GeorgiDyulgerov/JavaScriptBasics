/**
 * Created by Go6koy on 2/19/2016.
 */
function findYoungestPerson(people){
    var person;
    people.sort(function(a, b){
        return a['age']>b['age'];
    });
    for (person in people){
        if(people[person]['hasSmartphone']){
            console.log("The youngest person is "+people[person]['firstname']+" "+people[person]['lastname']);
            break;
        };
    };
};

var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
];
findYoungestPerson(people);