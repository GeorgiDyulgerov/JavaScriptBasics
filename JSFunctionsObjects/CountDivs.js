/**
 * Created by Go6koy on 2/19/2016.
 */
function countDiv(html){
    html = html.replace(/[\n\s+]/g, '');
    var regex= new RegExp(/<div/g);
    var count=0;
    var match;

    while(match=regex.exec(html)){
        count++;
    }
    alert('Number of divs: ' + count);
};

var html = document.documentElement.innerHTML;

countDiv(html);