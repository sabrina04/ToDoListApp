// $('li').click( function() {
// 	// if this list item is already gray and line-through, then turn it normal
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 			"color": "black",
// 			"textDecoration": "none"
// 		});
// 	}
// 	else {
// 		$(this).css({
// 			"color": "gray",
// 			"textDecoration": "line-through"
// 		});
// 	}
// });

$('ul').on("click", 'li', function() {
	$(this).toggleClass("completed");
});

$('ul').on("click", 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$('input[type="text"]').keypress(function(event) {
	if(event.which === 13){
		var text = $(this).val();
		$(this).val("");
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + text + "</li>");
	}
});

(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});