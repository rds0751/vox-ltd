$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
$(document).ready(function() {
    $('#contactformcx').on('blur input', function(e) {
        e.preventDefault();
        return false;
    });
    $('form').attr("autocomplete", "off");
    $('.input_effect').attr("autocomplete", "off");
    var this_field_is_required = $('#this_field_is_required').val();
    var please_enter_a_valid_number = $('#please_enter_a_valid_number').val();
    var enter_a_valid = $('#enter_a_valid').val();
    jQuery.validator.addMethod("validEmail", function(value, element) {
        return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
    }, enter_a_valid);
    $("#contactformcx").validate({
        errorElement: 'div',
        errorClass: 'error-field',
        validClass: "has-content",
        highlight: function(element, errorClass, validClass) {
            $('#contactformcx input').each(function() {
                if ($(this).val()) {
                    console.log("hi");
                    $(this).addClass('has-content');
                } else {
                    $(this).removeClass('has-content');
                }
            })
        },
        unhighlight: function(element, errorClass, validClass) {
            $('#contactformcx input').each(function() {
                if ($(this).val()) {
                    console.log("un");
                    $(this).addClass('has-content');
                } else {
                    $(this).removeClass('has-content');
                }
            })
        },
        rules: {
            "first_name": {
                required: true
            },
            "number": {
                required: true,
                digits: true,
            },
            "email": {
                required: true,
                email: true,
                validEmail: true
            },
            "country_code": {
                required: true
            },
            "message": {
                required: true
            },
            "captcha": {
                required: true
            }
        },
        messages: {
            "first_name": {
                required: this_field_is_required,
            },
            "number": {
                required: this_field_is_required,
                digits: please_enter_a_valid_number
            },
            "email": {
                required: this_field_is_required,
                email: enter_a_valid,
            },
            "country_code": {
                required: this_field_is_required
            },
            "message": {
                required: this_field_is_required
            },
            "captcha": {
                required: this_field_is_required
            },
        },
        submitHandler: function(e) {
            e.preventDefault();
            contactformasubmit();
            return false;
        }
    });
});
$('#contactformcx').submit(function(e) {
    e.stopPropagation();
    e.preventDefault();
    contactformasubmit();
});
var invalidChars = ["-", "e", "+", "E"];
$("input[type='number']").on("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});

function _errorMsgdiv(msg) {
    var openDiv = '<div class="error-field">' + msg + '</div>';
    return openDiv;
}

function errorSuccessdiv(msg) {
    var openDiv = '<div class="success-field">' + msg + '</div>';
    return openDiv;
}

function contactformasubmit() {
    if ($("#contactformcx").valid()) {
        var processing = $('#processing').val();
        var saveurl = $('#contact_path').val();
        var dataSerial = $('#contactformcx').serialize();
        var message_sent = $('#message_sent').val();
        $('#submitButton').addClass('btn-warning').prop('disabled', true).html(processing);
        $('#captcha').next("div.error-field").remove();
        $('.contact_msg').removeClass('alert alert-success text-center').html('');
        $('.contact_msg').removeClass('alert alert-danger text-center').html('');
        $.ajax({
            type: 'POST',
            url: saveurl,
            data: dataSerial,
            success: function(data) {
                if (data.hasOwnProperty('error_captcha')) {
                    $('#captcha').after(_errorMsgdiv(data.error_captcha));
                    $('#submitButton').removeClass('btn-warning').prop('disabled', false).html(message_sent);
                } else if (data.hasOwnProperty('error')) {
                    $('.contact_msg').addClass('alert alert-danger text-center').html(data.error);
                    $('#submitButton').removeClass('btn-warning').prop('disabled', false).html(message_sent);
                } else {
                    $('.contact_msg').addClass('alert alert-success text-center').html(data.success);
                    setTimeout(function(){ window.location.href = window.location.href}, 3000);
                    $('#after_action').hide();
                }
            },
            error: function(data) {
                $('#submitButton').removeClass('btn-warning').prop('disabled', false).html(message_sent);
            }
        });
    } else {
        console.log("Hello AB");
    }
}