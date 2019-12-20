// AJAX : formulaire

$(function () {

    $('#formulaire').submit(function (e) {

        e.preventDefault();
        $('.error').empty();
        let postdata = $('#formulaire').serialize();

        $.ajax({
            type: 'POST',
            url: 'contact.php',
            data: postdata,
            dataType: 'json',
            success: function (result) {
                if (result.isSuccess) {
                    $("#formulaire").append("<p class='msg'>Mail envoyé</p>");
                    $("#formulaire")[0].reset();
                }
                else {
                    $("#mail + .error").html(result.mailError);
                    $("#Vmail + .error").html(result.vmailError);
                    $("#mess + .error").html(result.messageError);
                }
            }
        });

    });

})