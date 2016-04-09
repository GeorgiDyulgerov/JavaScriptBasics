/**
 * Created by Go6koy on 2/9/2016.
 */
function calcSuply(age,maxAge,food,foodPerDay){
    var years=maxAge-age;
    var amounOfFood=(years*365)*foodPerDay;
    console.log(amounOfFood+"kg of "+food+" would be enough until i am "+maxAge+" years old.");
}