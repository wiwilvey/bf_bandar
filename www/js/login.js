$(document).ready(function(){
    $("#submit").click( function(){
        $.post( server + 'userauth.php',{
            username: $('#username').val(),
            password: $('#password').val()
        },function(resp){
            let authdata = JSON.parse(resp);
            console.log( authdata.username);
            if( authdata.status == 'success' ){
                localStorage.setItem('loginData',authdata.username);
                window.location = 'index.html';
            }
        })
    })
})