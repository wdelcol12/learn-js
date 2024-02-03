// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 

function logMsg() {
    console.log("The error message is as follows: ", this.errMsg);
}

testObj1 = {
    errMsg: "This is testObj1",
    logMsg: logMsg
}
testObj2 = {
    errMsg: "This is testObj2",
    logMsg: logMsg
}
testObj3 = {
    errMsg: "This is testObj3",
    logMsg: logMsg
}

testObj1.logMsg()
testObj2.logMsg()
testObj3.logMsg()