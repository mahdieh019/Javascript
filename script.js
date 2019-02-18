//alert('Welcome to DCI');
// function showhide(){
//     if (document.getElementById('img').style.display=='block'){
//         document.getElementById('img').style.display='none';
//         document.getElementById('showhide').innerHTML='Show';
//     }
//     else{
//         document.getElementById('img').style.display='block';
//         document.getElementById('showhide').innerHTML='Hide';
//     }
// }

function changestyle(){
     newborder='28px';
     document.body.style.background='lightgray'; 
     document.getElementById('first').style.background='lightblue';
     document.getElementById('first').style.borderRadius=newborder;
     document.getElementById('first').style.fontFamily='arial';
     document.getElementById('first').style.color='red';
     document.getElementById('first').style.backgroundcolor='red';
     // document.getElementsByClassName('j').style.backgroundColor='blue';
     var newwidth="200px";
     var welcome= 'Welcome to DCI';
    
     //  alert(welcome);
     document.getElementById('first').innerHTML=welcome ;
}
function changelanguage(){
     var wilkommen='Wilkommen bei DCI';
     var fname='mah';
     var lname='nas';
     wilkommen='wilkommen'+' '+fname+' '+lname+' '+'bei DCI';
     document.getElementById('first').innerHTML=wilkommen ;
}
function welcome( fname, lname){
     var wilkommen='Wilkommen bei DCI';
     document.getElementById('first').innerHTML=wilkommen+' '+fname+' '+lname;
}


function submitButtonStyle(_this) {
    _this.style.backgroundColor = "red";
  }