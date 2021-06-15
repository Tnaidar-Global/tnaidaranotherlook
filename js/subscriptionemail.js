function subMail(params){
    var tempParams = {
        from_name:document.getElementById("form_name").value,
    }

    emailjs.send('service_8g1jm0f', 'template_e2du99d',tempParams).then(function(res){
        console.log("Success", res.status);
    })
}