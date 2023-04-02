let submitButton=document.getElementById("submitButton");
let errors={};

submitButton.addEventListener("click",function(e){
    e.preventDefault();
    errors={};
    let signupform=document.forms["signupform"]; 
    let firstNameInput=signupform.firstName;
    let lastNameInput=signupform.lastName;
    let EmailInput=signupform.Email;
    let passwordInput=signupform.password;
    
    if(firstNameInput.value==""){
        errors.firstName="firstname should not be empty"
       // let firstnameGroup=document.getElementById('firstnameGroup');
       // let firstnameMessage=document.querySelector("#firstnameGroup .message");
        //firstnameGroup.classList.add("error");
       // firstnameMessage.textContent="firstname should not be empty";

    }
    if(lastNameInput.value==""){
        errors.lastName="lastname should not be empty";
        //let laststnameGroup=document.getElementById('lastnameGroup');
        //let lastnameMessage=document.querySelector("#lastnameGroup .message");
        //lastnameGroup.classList.add("error");
      // lastnameMessage.textContent="lastname should not be empty";
    }
    if(EmailInput.value==""){
        errors.Email="Email should not be empty";
    }
    if(passwordInput.value==""){
        errors.password="password should not be empty";
    }
    if(passwordInput.value.length<=5){
        errors.password="minimum 6 character are needed";
    }
    console.log(errors);
    for(let error in errors){
        let lastNameGroup=document.getElementById(`${error}Group`);
        let lastNameMessage=document.querySelector(`#${error}Group .message`);
        lastNameGroup.classList.add("error");
       lastNameMessage.textContent=errors[error];
    
    }
if(Object.keys(errors).length==0){
    signupform.submit();
}
    
    
});
