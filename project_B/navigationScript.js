

function showCityPage(){
    console.log("hiiiiii")
    document.getElementById("bigWrapper").style.marginLeft= "-100%";

    document.getElementById("leftdot").style.width= "14px";
    document.getElementById("leftdot").style.height= "14px";
    document.getElementById("rightdot").style.width= "16px";
    document.getElementById("rightdot").style.height= "16px";



}

function showNaturePage(){
    document.getElementById("bigWrapper").style.marginLeft= "0";
    document.getElementById("leftdot").style.width= "16px";
    document.getElementById("leftdot").style.height= "16px";
    document.getElementById("rightdot").style.width= "14px";
    document.getElementById("rightdot").style.height= "14px";
}