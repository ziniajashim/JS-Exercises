/* JavaScript code here */
console.log("External JS")
//task 2
function sumArray(arr){
    var sum = 0;
    arr.foreach(function(value,index){
        sum += value;
    });
    return sum;
}
console.log(sumArray([1,2,3,4]));
console.log(sumArray([1,20,-3,45]));
//task 3
function checkEmail(emailString){
    var emailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match = emailFormat.test(emailString);
    return match;
}
console.log(checkEmail("john@smith.com"));
console.log(checkEmail("johnsmith@gmail.com"));
 

