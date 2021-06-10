function sendMail(params) {
    var tempParams = {
        from_name:document.getElementById("form_name").value,
        to_name:document.getElementById("form_email").value,
        message:document.getElementById("form_message").value,
    };

    emailjs.send('service_wlvno8a','template_e66e88h', tempParams).then(function(res){
        console.log("Success", res.status);
    })
}