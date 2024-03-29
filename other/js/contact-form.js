(function ($, window, document, undefined) {
    'use strict';
    var $form = $('#contact-form');
    $form.submit(function (e) {
      
        $('.form-input').removeClass('has-error');
        $('.help-block').remove();
     
        var formData = {
            'name' : $('input[name="form-name"]').val(),
            'email' : $('input[name="form-email"]').val(),
            'phone' : $('input[name="form-phone"]').val(),
            'website' : $('input[name="form-website"]').val(),
            'message' : $('textarea[name="form-message"]').val()
        };
   
        $.ajax({
            type : 'POST',
            url  : 'process.php',
            data : formData,
            dataType : 'json',
            encode : true
        }).done(function (data) {
        
            if (!data.success) {
                if (data.errors.name) {
                    $('#form-name').addClass( 'has-error' );
                    $('#form-name').parent('.form-input').append('<span class="help-block">' + data.errors.name + '</span>');
                }
                if (data.errors.email) {
                    $('#form-email').addClass( 'has-error' );
                    $('#form-email').parent('.form-input').append('<span class="help-block">' + data.errors.email + '</span>');
                }
                if (data.errors.phone) {
                    $('#form-phone').addClass('has-error');
                    $('#form-phone').parent('.form-input').append('<span class="help-block">' + data.errors.phone + '</span>');
                }
                if (data.errors.message) {
                    $('#form-message').addClass('has-error');
                    $('#form-message').parent('.form-input').append('<span class="help-block">' + data.errors.message + '</span>');
                }
            } else {
          
                $form.html('<div class="alert alert-success">' + data.message + '</div>');
            }
        }).fail(function (data) {
         
            console.log(data)
        });

        e.preventDefault();
    });
}(jQuery, window, document));