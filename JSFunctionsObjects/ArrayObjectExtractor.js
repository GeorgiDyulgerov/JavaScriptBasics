/**
 * Created by Go6koy on 2/19/2016.
 */
function extractObject(array){
    var objectRegx= new RegExp("\{(.*?)\}");
    var extractedArray=[];
    var i=0;
    while(i<array.length) {
        if(typeof (array[i]) === 'object' && !Array.isArray(array[i])){
            extractedArray.push(array[i]);
        }
        i++;
    };
    console.log(extractedArray);
}

var arr =["Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
];
extractObject(arr);