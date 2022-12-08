

function showCityPage(){
    console.log("hiiiiii")
    document.getElementById("bigWrapper").style.marginLeft= "-100%";

    document.getElementById("leftdot").style.width= "8px";
    document.getElementById("leftdot").style.height= "8px";
    document.getElementById("rightdot").style.width= "12px";
    document.getElementById("rightdot").style.height= "12px";



}

function showNaturePage(){
    document.getElementById("bigWrapper").style.marginLeft= "0";
    document.getElementById("leftdot").style.width= "12px";
    document.getElementById("leftdot").style.height= "12px";
    document.getElementById("rightdot").style.width= "8px";
    document.getElementById("rightdot").style.height= "8px";
}