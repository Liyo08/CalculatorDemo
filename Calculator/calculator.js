function buttonclick(value) {
    document.getElementById("screentext").value += value;
    value = document.getElementById("screentext").value;
}

function clears(value){
    document.getElementById("screentext").value = "";
}

function answerclick(){
    var text = document.getElementById("screentext").value;
   result=eval(text);
    document.getElementById("screentext").value = result;
}