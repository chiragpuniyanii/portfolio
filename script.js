
var typed = new Typed('#element', {
    strings: ["Frontend Developer" , "Network Administrator","Linux Administrator"],
    typeSpeed: 50,
    backSpeed : 10,
    backDelay : 1000,
    loop:true
});

// const form=document.querySelector("form");
// const name=document.getElementById("name");
// const email=document.getElementById("email");
// const subject=document.getElementById("subject");
// const message=document.getElementById("message");

// function sendEmail(){
//     const bodyMessage = 'Full Name: ${name.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${message.value}';
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "chiragpuniyani0777@gmail.com",
//         Password : "D51D29653C05ACA2F0D77BDA1901B79B2BEA",
//         To : 'chiragpuniyani0777@gmail.com',
//         From : "chiragpuniyani0777@gmail.com",
//         Subject : subject.value,
//         Body : bodyMessage
//     }).then(
//       message => alert(message)
//     );
// }


// form.addEventListener("submit", (e)=>{
//     e.preventDefault();

//     sendEmail();
// });

// ---------------------disable right click and text Selection----------------------------

document.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
})
document.addEventListener('selectstart',(e)=>{
    e.preventDefault();
})