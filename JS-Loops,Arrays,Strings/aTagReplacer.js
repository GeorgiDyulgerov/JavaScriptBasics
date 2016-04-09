/**
 * Created by Go6koy on 2/15/2016.
 */
alert("Open Console F12");
var str='<ul><li><a href=http://softuni.bg>SoftUni</a> </li> </ul>';
var rezult = str.replace( /<a href=/g, "[URL href=");
rezult=rezult.replace((/<a>/g,"][URL]"))

console.log(rezult);
