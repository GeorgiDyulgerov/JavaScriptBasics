/**
 * Created by Go6koy on 2/8/2016.
 */
function calcCircleArea(r){
    var area=Math.PI*r*r;
    return area;
}

document.getElementById("circle1").innerHTML=calcCircleArea(7);
document.getElementById("circle2").innerHTML=calcCircleArea(1.5);
document.getElementById("circle3").innerHTML=calcCircleArea(20);