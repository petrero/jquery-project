jQuery(function () {
	$('#add').click(function(e){
		var taskItem = $('#tasks ul li:first').clone();
		taskItem.find('input[type="text"]').val("");
		$('#tasks ul').append(taskItem);
		taskItem.find('input[type="text"]:first').focus();
		return false;		
	});
	
	$('input[type="text"]:first').focus();
});
