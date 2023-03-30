let submitButton=document.getElementById("submitButton");
let errors={};

submitButton.addEventListener("click",function(e){
    e.preventDefault();
    let signupform=document.forms["signupform"]; 
    let FirstnameInput=signupform.Firstname;
    let lastnameInput=signupform.Lastname;
    
    if(FirstnameInput.value==""){
        errors.Firstname="firstname should not be empty"
       // let firstnameGroup=document.getElementById('firstnameGroup');
       // let firstnameMessage=document.querySelector("#firstnameGroup .message");
        //firstnameGroup.classList.add("error");
       // firstnameMessage.textContent="firstname should not be empty";

    }
    if(lastnameInput.value==""){
        errors.lastname="lastname should not be empty"
        //let laststnameGroup=document.getElementById('lastnameGroup');
        //let lastnameMessage=document.querySelector("#lastnameGroup .message");
        //lastnameGroup.classList.add("error");
       // lastnameMessage.textContent="lastname should not be empty";
    }
    console.log(errors)
    for(let error in errors){}
});
