$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

function filtercountry() {
    var countryInput = $("#countryInput").val();
    var country_search_slug = $('#country_search_slug').val();
    $.ajax({
        type:'POST',
        url:country_search_slug+"?input="+countryInput,
        success:function(data){
            if (data.hasOwnProperty('view')) {
                $('#searching_id').html(data.view);             
                $('#country_dropdown').hide();
            }
        }
    });
}

function setCountry(country_id,flag,name,callingcode) {
    $('#country_code').val(country_id);
    $("#country_flag").attr("src",flag);
    $('#country_name').html(name);
    $('#calling_code').val(callingcode);
}

    
function _errorMsg(msg) {
    var openDiv = '<div class="invalid-feedback d-flex">'+msg+'</div>';
    return openDiv; 
}


$.fn.restrictInputs = function(restrictPattern){
    var targets = $(this);
    var pattern = restrictPattern || /[^a-zA-Z0-9 !\\"#$%&'()+,\-.\/:;<=>?@\[\]^_`{|}~]/g; // some default pattern

    var restrictHandler = function(){
        var val = $(this).val();
        var newVal = val.replace(pattern,'');
        // console.log('newVal ',newVal);
        // console.log('val ',val);
        if (val !== newVal) { // To prevent selection and keyboard navigation issues
            $(this).val(newVal);
        }else{
            return '';
        }
    };

    targets.on('keyup', restrictHandler);
    targets.on('paste', restrictHandler);
    targets.on('change', restrictHandler);
};


$('.txtOnly').restrictInputs();



function saveButtons() {
    var register_btn_string = $('#register_btn_string').val();
    console.log('register_btn_string ',register_btn_string);
    var processing = $('#marketing_processing').val();
    var somethingwrong = $('#something_went_wrong').val();

    $('.msg').removeClass('alert alert-success text-center').html('');
    $('.msg').removeClass('alert alert-danger text-center').html('');
    $('#submitB').addClass('btn-warning').prop('disabled',true).html(processing);
    var dataSerial = $('#ActivityForm').serialize();
    var saveurl = $('#saveurl').val();
    $('#val_full_name').html('');
    $('#val_mobile').html('');
    $('#val_email').html('');
    $('#val_mobile').html('');
    $.ajax({
        type:'POST',
        url:saveurl,
        data:dataSerial,
        success:function(data){
            if (data.hasOwnProperty('error_view')) {
                if (data.error_view.hasOwnProperty('full_name')) {
                    $('#val_full_name').html(_errorMsg(data.error_view.full_name));
                }
                if (data.error_view.hasOwnProperty('mobile')) {
                    $('#val_mobile').html(_errorMsg(data.error_view.mobile));
                }
                if (data.error_view.hasOwnProperty('email')) {
                    $('#val_email').html(_errorMsg(data.error_view.email));
                }
                if (data.error_view.hasOwnProperty('country_code')) {
                    $('#val_mobile').html(_errorMsg(data.error_view.country_code));
                }
                $('#submitB').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
            else if (data.hasOwnProperty('success')) {
                $('#ActivityForm').addClass('d-none');
                $('#PinForm').removeClass('d-none');
                $('#user_id').val(data.id);
                $('#user_pwd').val(data.pwd);
                // $('#submitB').removeClass('btn-warning').prop('disabled',false).html('Redirect...');
                // $('.msg').addClass('alert alert-success text-center').html("Redirecting to Payment Gateway. Please don't close window");
                // window.location.href = data.success;
            }
            else if (data.hasOwnProperty('error')){
                $('.msg').addClass('alert alert-danger text-center').html(data.error);
                $('#submitB').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
            else{
                $('.msg').addClass('alert alert-danger text-center').html(somethingwrong);
                $('#submitB').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
        },
        error:function(data){
            $('.msg').html(data.error_view);
            $('#submitB').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
        }
  });
}


function saveVerification() {
    var register_btn_string = $('#marketing_activate_btn').val();
    var processing = $('#marketing_processing').val();
    var somethingwrong = $('#something_went_wrong').val();

    $('.msg_verification').removeClass('alert alert-success text-center').html('');
    $('.msg_verification').removeClass('alert alert-danger text-center').html('');
    $('#val_verification_code').html('');
    $('#submitVerification').addClass('btn-warning').prop('disabled',true).html(processing);
    var dataSerial = $('#PinForm').serialize();
    var saveurl = $('#ajax-verify').val();
    var redirectPath = $('#redirectPath').val();
    $.ajax({
        type:'POST',
        url:saveurl,
        data:dataSerial,
        success:function(data){
            if (data.hasOwnProperty('error_view')) {
                if (data.error_view.hasOwnProperty('verification_code')) {
                    $('#val_verification_code').html(_errorMsg(data.error_view.verification_code));
                }
                $('#submitVerification').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
            else if (data.hasOwnProperty('success')) {
                $('#ActivityForm').addClass('d-none');
                $('#PinForm').removeClass('d-none');
                $('#submitVerification').removeClass('btn-warning').prop('disabled',false).html(processing);
                $('.msg_verification').addClass('alert alert-success text-center').html(data.msg);
                
                window.location.href = redirectPath;
            }
            else if (data.hasOwnProperty('error')){
                // $('.msg_verification').addClass('alert alert-danger text-center').html(data.error);
                $('#submitVerification').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
                $('#val_verification_code').html(_errorMsg(data.error));
            }
            else{
                // $('.msg_verification').addClass('alert alert-danger text-center').html(somethingwrong);
                $('#val_verification_code').html(_errorMsg(somethingwrong));
                $('#submitVerification').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
        },
        error:function(data){
            $('.msg_verification').html(data.error_view);
            $('#submitVerification').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
        }
  });
}


function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function onlyAlpha_forName(key,e){
    if (navigator.appName =="Microsoft Internet Explorer"){
        var oKey = event.keyCode;
        
        if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 32) || (oKey == 46) || (oKey == 39))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else{
        var oKey = e.charCode;
        
        if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 0) || (oKey == 32) || (oKey == 46) || (oKey == 39))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

function isNumber(key,event){
    var keyCode;
    var isIE;

    if(navigator.appName == "Microsoft Internet Explorer" || navigator.appName == "Netscape"){  
        keyCode = event.keyCode;

        isIE = 1;
        if(navigator.appName == "Netscape"){
            keyCode = event.charCode;          
            isIE = 0;
        }
    }else{
        keyCode = event.charCode;
        isIE = 0;
    }

    if(isIE == 1 ){
        if(!((keyCode >= 48 && keyCode <= 57) ))
        {
            return false;
        }
    }
    else{
        if(!((keyCode >= 48 && keyCode <= 57) || keyCode == 0))
        {

            event.preventDefault();                             
        }

    }
}

function onlyEmail(key,e){
if (navigator.appName =="Microsoft Internet Explorer"){
    var oKey = event.keyCode;
    
    if(oKey == 45 || oKey == 46 || oKey == 95 || (oKey > 47 && oKey <58) || (oKey >= 64 && oKey < 91) || (oKey > 96 && oKey < 123))
    {
        return true;
    }
    else
    {

    }}else{

        var oKey = e.charCode;


        if(oKey == 45 || oKey == 46 || oKey == 95 || (oKey > 47 && oKey <58) || (oKey >= 64 && oKey < 91) || (oKey > 96 && oKey < 123 || oKey==0))
        {
            return true;
        }
        else
        {
            return false;
        }

    }
}


function edValueKeyPress(class_name) {
    $('.' + class_name).addClass('has-content');
    $('.' + class_name).removeClass('error-field');
    $('#' + class_name + '-error').hide();
    if (class_name == "email_address") {
        if ($('#email_address').val()) {
            $('.email_address').addClass('has-content');
        }
        else{
            $('.email_address').addClass('error-field').removeClass('has-content');
        }
    }
    else if(class_name == "ph_number"){
        if ($('#ph_number').val()) {
            $('.ph_number').addClass('has-content');
        }
        else{
            $('#ph_number').addClass('error-field').removeClass('has-content');
        }
    }
    else if(class_name == "full_name"){
        if ($('#full_name').val()) {
            $('.full_name').addClass('has-content');
        }
        else{
            $('#full_name').removeClass('has-content')
        }
    }
    else if(class_name == "verification_code"){
        if (!$('#verification_code').val()) {
            $('.verification_code').addClass('error-field').removeClass('has-content');
            $('#verification_code-error').show();
        }
    }
}

function resendCode() {
    $('.msg_verification').removeClass('alert alert-success text-center').html('');
    $('.msg_verification').removeClass('alert alert-danger text-center').html('');
    var register_pin_resend = $('#register_pin_resend').val();
    var register_wrong = $('#register_wrong').val();
    var cur_lng = $('#cur_lng').val();


    var ajaxResend = $('#ajax-resend').val();
    $.ajax({
        url : ajaxResend,
        type: "POST",
        data:   {
                    'id': $('#user_id').val(),
                    'cur_lng':cur_lng
                },
        success: function(data) {
            if(data.status) {
                $('.msg_verification').addClass('alert alert-success text-center').html(register_pin_resend);
            }
        },
        error: function() {
            $('.msg_verification').addClass('alert alert-danger text-center').html(register_wrong);
        },
        complete: function() {
            // $('#loader-wrapper').hide();
        }
    });
}

$(document).ready(function () {
    var enter_a_valid = $('#enter_a_valid').val();
    // var enter_a_valid = $('#enter_a_valid').val();
    var this_field_is_required = $('#this_field_is_required').val();
    var please_enter_a_valid_email_address = $('#enter_a_valid').val();
    var please_enter_a_valid_number = $('#please_enter_a_valid_number').val();
    jQuery.validator.addMethod("validEmail", function (value, element) {
        return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
    }, enter_a_valid);


    $("#ActivityForm").validate({
        errorElement: 'div',
        errorClass: 'error-field',
        rules: {
            "full_name": {
                required: true
            },
            "mobile": {
                required: true,
                digits : true,
            },
            "email": {
                required: true,
                email: true,
                validEmail: true
            },
            "agree": {
                required: true
            }
        },
        messages: {
            "full_name": {
                required: this_field_is_required,
            },
            "mobile": {
                required: this_field_is_required,
                digits: please_enter_a_valid_number
            },
            "email": {
                required: this_field_is_required,
                email:please_enter_a_valid_email_address,
            }, 
            "agree": {
                required: this_field_is_required
            }
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            var register_btn_string = $('#register_btn_string').val();
            //console.log('register_btn_string ', register_btn_string);
            var processing = $('#marketing_processing').val();
            var somethingwrong = $('#something_went_wrong').val();

            $('.msg').removeClass('alert alert-success text-center').html('');
            $('.msg').removeClass('alert alert-danger text-center').html('');
            $('#submitB').addClass('btn-warning').prop('disabled', true).html(processing);
            var dataSerial = $('#ActivityForm').serialize();
            var saveurl = $('#saveurl').val();
            $('#val_full_name').html('');
            $('#val_mobile').html('');
            $('#val_email').html('');
            $('#val_mobile').html('');
            $.ajax({
                type: 'POST',
                url: saveurl,
                data: dataSerial,
                success: function (data) {
                    if (data.hasOwnProperty('error_view')) {
                        if (data.error_view.hasOwnProperty('full_name')) {
                            $('#val_full_name').html(_errorMsg(data.error_view.full_name));
                        }
                        if (data.error_view.hasOwnProperty('mobile')) {
                            $('#val_mobile').html(_errorMsg(data.error_view.mobile));
                        }
                        if (data.error_view.hasOwnProperty('email')) {
                            $('#val_email').html(_errorMsg(data.error_view.email));
                        }
                        if (data.error_view.hasOwnProperty('country_code')) {
                            $('#val_mobile').html(_errorMsg(data.error_view.country_code));
                        }
                        $('#submitB').removeClass('btn-warning').prop('disabled', false).html(register_btn_string);
                    } else if (data.hasOwnProperty('success')) {
                        $('#ActivityForm').addClass('d-none');
                        $('#PinForm').removeClass('d-none');
                        $('#user_id').val(data.id);
                        $('#user_pwd').val(data.pwd);
                        // $('#submitB').removeClass('btn-warning').prop('disabled',false).html('Redirect...');
                        // $('.msg').addClass('alert alert-success text-center').html("Redirecting to Payment Gateway. Please don't close window");
                        // window.location.href = data.success;
                    } else if (data.hasOwnProperty('error')) {
                        $('.msg').addClass('alert alert-danger text-center').html(data.error);
                        $('#submitB').removeClass('btn-warning').prop('disabled', false).html(register_btn_string);
                    } else {
                        $('.msg').addClass('alert alert-danger text-center').html(somethingwrong);
                        $('#submitB').removeClass('btn-warning').prop('disabled', false).html(register_btn_string);
                    }
                },
                error: function (data) {
                    $('.msg').html(data.error_view);
                    $('#submitB').removeClass('btn-warning').prop('disabled', false).html(register_btn_string);
                }
            });
        }

    });
});

function loadnews() {
    var load_more_path  = $('#load_more_path').val();
    var current_locale  = $('#current_locale').val();
    var category_name   = $('#category_name').val();
    var current_count   = $('#current_count').val();
    
    $.ajax({
            type: 'POST',
            url: load_more_path,
            data: {
                current_locale:current_locale,
                category_name:category_name,
                current_count:current_count,
            },
            success: function (data) {
                if (data.hasOwnProperty('view')) {
                    $('#ajax_more').append(data.view);
                    $('#current_count').val(data.counting_current);
                    if (data.counting_current == data.moreexist) {
                        $('#loaddiv').hide();
                    }
                }
            },
            error: function (data) {
                
            }
        });
}