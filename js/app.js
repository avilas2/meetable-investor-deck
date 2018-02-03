$(function(){
    var form = $('#ajax-contact');
    
    var formMessages = $('#form-messages');

    $(form).submit(function(event){
        event.preventDefault();
    
        var formData = $(form).serialize();

        $.post('develop/mail.php',formData,function(){
            alert('success');
        })
        .done(function(response){
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            $(formMessages).text(response);

            $('#name').val('');
            $('#email').val('');
            $('#phone').val('');
            $('#message').val('');
        })

        .fail(function(data){
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            if(data.responseText !== ''){
                $(formMessages).text(data.responseText);

            }
            else{
                $(formMessages).text('Oops! An error occured and the message could not be sent, please try again or email us at info@konecto.xyz!');
            }
        });
    });
});

