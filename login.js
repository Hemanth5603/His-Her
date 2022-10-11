
$(document).ready(function() {
    $("#signup").click(function(){
        var check = false;
        var contains = $("#mail").val().includes("@");
        var len = $("#mail").val().length;
        var passLen = $("#pass").val().length;
        var passcontains = $("#pass").val().includes("@","_","$");
        if($("#mail").val()==null || $("#pass").val()==null){
            alert("Enter Your Details!!!");
        }
        if(contains==false || len<=5){
            $("#email-response").text("Please Enter a valid email!");
            check = true;
        }
        if(passcontains==false){
            $("#password-response").text("Password should include atleast 1 special character such as @,&,%,$,_ etc.");
            check = true;
        }
        if(passLen<8 ){
            $("#password-response").text("password must be atleast 8 characters");
            check = true;
        }
        if(check==false){
            $("#email-response").text("");
            $("#password-response").text("");
            window.open("index.html");
            
        }
    });
});

$(document).ready(function() {
});