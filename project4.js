console.log("This is project 4");
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName = false;
let validEmail = false;
let validPhone = false;

name.addEventListener('blur', () => {
    console.log("name event is fired");
    let regex = /^[a-zA-Z]([a-zA-Z0-9]){1,9}/;
    let str = name.value;
    if (regex.test(str)) {
        console.log("Your name is valid");
        name.classList.remove('is-invalid');
        validName = true;
    }
    else {
        console.log("Your name is invalid.");

        name.classList.add('is-invalid');
        validName = false;
    }


})
email.addEventListener('blur', () => {
    console.log("email event is fired");
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        console.log("Your email is valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log("Your email is invalid.");
        email.classList.add('is-invalid');

        validPhone = false;

    }

})
phone.addEventListener('blur', () => {
    console.log("phone event is fired");
    let regex = /^[789]([0-9]){9}/;
    let str = phone.value;
    if (regex.test(str)) {
        console.log("Your phone number is valid");


        phone.classList.remove('is-invalid');
        validPhone = true;

    }
    else {
        console.log("Your phone number is invalid");

        phone.classList.add('is-invalid');
        validPhone = false;
    }

})

let travelform = document.getElementById('travelform');
travelform.addEventListener('submit', function (e) {
    console.log("You are submitting your form.");

    e.preventDefault();
    console.log(validEmail, validPhone, validName);
    let succfail = document.getElementById('succfail');

    if (validPhone && validName && validEmail) {
        
            succfail.innerHTML = `<div  id="success"class="alert alert-success alert-dismissible fade show" role="alert">
                                      <strong>Yupp:Hurray!!!</strong> Your travel request form has been successfully submitted.
                                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                 <span aria-hidden="true">&times;</span>
                                               </button>
                                     </div>
                                    `
            
    }
    else {
        
            succfail.innerHTML = ` <div id="failure"class="alert alert-danger alert-dismissible fade  show " role="alert">
            <strong>Holy guacamole!</strong> The form has'nt been submitted due to errors.Please try again.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
         </div>`

        



    }
})


