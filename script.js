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
  function changestyle2(){
       document.getElementById('mydiv').style.transition='all 3s';
  }
  function changestyle3(){
     //   document.getElementById('mydiv').style.transform='rotate(720deg)';
     //   document.getElementById('mydiv').style.transform='rotatex(90deg)';
     //   document.getElementById('mydiv').style.borderRadius='500';
     document.getElementById('mydiv').style.border= '10px dotted green ';
     }
  function changestyle4(){
       var newname=prompt('please enter your name','mah nas');
     //   console.log(newname);
     // document.getElementById('Fullname').innerHTML='<h1>'+newname+'</h1>';
     // document.getElementById('h1').innerHTML=newname;
     if(newname !=''){
          document.getElementById('h1').innerHTML=newname;
     }
  }