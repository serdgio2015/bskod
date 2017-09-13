/*ф-я валидации и отправки почты*/
function lets_validate(){
	$(".form_btn").click(function(){
		val_form = $(this).closest(".form");
		required = $(this).closest(".form").find(".required");
		req_email = $(this).closest(".form").find($("input[name='email'].required"));
		required.each(function() {
			if ($(this).val() == "") {
				$(this).addClass("needsfilled");
			} else {
				$(this).removeClass("needsfilled");
			}
		});

		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		if(req_email.length > 0) {
			var pattern_email = pattern.test($(req_email).val());
		} else {
			pattern_email = true;
		}
		if(!pattern_email) {
			// alert("укажите правильную почту");
            $("input[name='email'].required").addClass("needsfilled");
		}

		else if(!$(required).hasClass("needsfilled") && pattern_email || (!$(required).hasClass("needsfilled") && pattern_email  == "")) {
			var sum_data = $(val_form).serialize();
			$.ajax({
				url: '/mail.php',
				type: 'POST',
				data: sum_data,
                                success: function(data){

                                    $('#modal_form3 h2').text(data);

                                    $('#modal_form3').modal({
										fadeDuration: 250
                                    });
                                    $('body').css('overflow-y', 'scroll');
                                     $('#modal_form3').css('display', 'inline-block');
                                }
			});

		}
	});
	
	$(".required").focus(function(){						
		$(this).attr('autocomplete', 'off');
		if ($(this).hasClass("needsfilled")) {
			$(this).val("");
			$(this).removeClass("needsfilled");
	   }
	});
}

$(document).ready(function(){
	lets_validate();
        set_mask();
});


function set_mask(){

    if ('mask' in $("[name='phone']")){
        $("[name='phone']").mask("+7 (999) 999-9999");        
        
    }
    
}



