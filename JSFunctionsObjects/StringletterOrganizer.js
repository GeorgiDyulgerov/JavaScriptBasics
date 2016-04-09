/**
 * Created by Go6koy on 2/19/2016.
 */
function sortLetters(string,boolean){
    if(boolean){
        string = string.split('').sort(function(a,b){
            var alower = a.toLowerCase();
            var blower = b.toLowerCase();
            return alower > blower? 1 : (alower < blower? -1 : 0);
        }).join('');
    }
    else {
        string= string.toString().split('').sort(function(a,b){
            var alower = a.toLowerCase();
            var blower = b.toLowerCase();
            return alower < blower? 1 : (alower > blower? -1 : 0);
        }).join('');
    }
    console.log(string);


};

var text='HelloWorld';
sortLetters(text, true);
sortLetters(text, false);
