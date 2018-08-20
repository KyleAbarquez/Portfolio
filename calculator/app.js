var btnWrap = document.getElementById('button-wrap')
var myOutput = document.getElementById('output');
var myCal = '';
var myCom = false;
var mySwitch = false;
var myOpe = ['+', '-', '*', '/'];

btnWrap.addEventListener('click', (e) => {
    if(e.target.className == 'btn btn-primary cbutton'){
        //This variable represents the value of the button clicked by the user
        var myValue = e.target.innerHTML;
        console.log(myValue);
        //The statement checks if the myCom flag has been triggered or if MyCal is 0.  We reset the myCal string to an empty string in order to even calculations starting with 0.
        if(myCom || myCal == '0'){
            myCom = false;
            myCal = '';
        }
        
        //Handling cases in which user presses an operator button
        if (myValue == "+" || myValue == "-" || myValue == "*" || myValue == "/"){
            //MySwitch will only be true if a operator button has been pressed previously. The following code runs in this case.
            if (mySwitch) {
                //Reset the flag
                mySwitch = false;
                //if the last character of the current output is an operator, this if statement removes that character. It is then replaced later on (line ) with the latest operator button pressed by the user.
                if (myOpe.indexOf(myOutput.innerHTML.slice(-1)) > -1) {
                    myCal = myCal.substring(0, myCal.length - 1);
                } 
                //If the last character in the current output is not a operator symbol, the equation is evaluated and set as the myCal statement.
                else {
                    myCal = eval(myCal);
                }
            }
            mySwitch = true;
        }
        
        //Handle cases in which = is pressed
        if (myValue == "=") {
            //myValue is set to an empty string so that nothing is added to myCal before it is evaluated
            myValue = '';
            //if the last character in the current output is not an operator symbol, myCal is evaluated.
            if (myOpe.indexOf(myOutput.innerHTML.slice(-1)) == -1) {
                myCal = eval(myCal);
            }
        }
        else if (myValue == 'C'){
            myCal = '0';
            myCom = true;
        } else {
            console.log('else block ran')
            myCal = myCal + myValue;
        }
        //My output is updated after each click
        myOutput.innerHTML = myCal;
    }
})

//COMMENTED VERSION

//var btnWrap = document.getElementById('button-wrap')
//var myOutput = document.getElementById('output');
//var myCal = '';
//var myCom = false;
//var mySwitch = false;
//var myOpe = ['+', '-', '*', '/'];
//
//btnWrap.addEventListener('click', (e) => {
//    if(e.target.className == 'btn btn-primary cbutton'){
//        
//        var myValue = e.target.innerHTML;
//        
//        if(myCom || myCal == '0'){
//            myCom = false;
//            myCal = '';
//        }
//        
//        if (myValue == "+" || myValue == "-" || myValue == "*" || myValue == "/") {
//            if (mySwitch) {
//                mySwitch = false;
//                if (myOpe.indexOf(myOutput.innerHTML.slice(-1)) > -1) {
//                    myCal = myCal.substring(0, myCal.length - 1);
//                } else {
//                    myCal = eval(myCal);
//                }
//            }
//            mySwitch = true;
//        }
//        
//        if (myValue == "=") {
//            myValue = '';
//            if (myOpe.indexOf(myOutput.innerHTML.slice(-1)) == -1) {
//                myCal = eval(myCal);
//            }
//        } else if (myValue == 'C'){
//            myCal = '0';
//            myCom = true;
//        } else {
//            myCal = myCal + myValue;
//        }
//        
//        myOutput.innerHTML = myCal;
//    }
//})


