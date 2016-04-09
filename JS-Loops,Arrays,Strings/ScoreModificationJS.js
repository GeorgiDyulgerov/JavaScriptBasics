/**
 * Created by Go6koy on 2/15/2016.
 */
function ValidScores(number){
    if (number>=0&&number<=400) {
        return number;
    }
}
function Modify(arr){

    for(var num in arr){
        arr[num]-=(arr[num]*(20/100));
    }
    return arr;
}
alert("Open Console F12");
var scoreArr=[200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];
var validScores= scoreArr.filter(ValidScores);
Modify(validScores);
validScores.sort(function(a,b){
    return a>b;
});
console.log(validScores);