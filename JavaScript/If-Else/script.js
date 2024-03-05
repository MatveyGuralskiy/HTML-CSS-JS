/*  If and Else Script  */
const password=1010;
if (password===1010) {
    console.log("Your password is correct");
    console.log("Connection status: "+true);
} else if (password===1110){
    console.log("Please check your password");
    console.log("Connection status: "+true);
} else {
    console.log("Try later please")
    console.log("Connection status: "+false)
}


let nickname="Thomas";
if (nickname==="Thomas" || nickname==="Michael") {
    console.log("Welcome to the system "+nickname);
} else {
    console.log("Please try later or call to admin")
}


function grade(score){
    /* Show what's your grade status */
    if (80<=score && score<90){
        console.log("You have a great grade, congratulations!");
    } else if (90<=score){
        console.log("Wow your grade is so high!");
    } else if (79>=score) {
        console.log("Don't be sad, but your grade is not pass");
    } else {
        console.log("Try again to enter your grade");
    };
};
grade(91);
