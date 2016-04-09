/**
 * Created by Go6koy on 2/15/2016.
 */
function NumberFilter(number){
    return !isNaN(number);
}
function MostFrequentElement(arr){
    var maxCount=0;
    var count=0;
    var maxOcurence;
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count++;
                if(count>maxCount){
                    maxCount=count;
                    maxOcurence=arr[i];
                }
            }
        }
        count=0;
    }
    return maxOcurence;
}
//alert("Open Console F12");
var objArray=["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];
var numberArr = objArray.filter(NumberFilter);
numberArr.sort(function(a,b){
    return a<b;
});
console.log('Min number: '+ numberArr[numberArr.length-1]);
console.log('Max number: '+ numberArr[0]);
console.log('Most frequent number: '+ MostFrequentElement(numberArr));
console.log(numberArr);
