$("#container").on("click", ".text", function () {
	$(this).toggleClass("completed");
});

$("#container").on("click", ".trash", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		if($(this).val() !== "") {
			var todoText = $(this).val();
			$(this).val("");
			$("#list").prepend("<div class=\"entry\"><div class=\"trash\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></div><div class=\"text\">" + todoText + "</div></div>");
			trash();
		}
	}
});

$(".fa-plus-circle").click(function() {
	$("input[type='text']").fadeToggle();
});

function trash() {
	var entryHeight = $(".entry").first().css("height");
	$(".fa-trash").first().css("lineHeight", entryHeight);
};

$("#list").prepend("<div class=\"entry\"><div class=\"trash\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></div><div class=\"text completed\">" + "This is an example of crossed-out to-do." + "</div></div>");
trash();

$("#list").prepend("<div class=\"entry\"><div class=\"trash\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></div><div class=\"text\">" + "List your to-dos here. Get organized." + "</div></div>");
trash();