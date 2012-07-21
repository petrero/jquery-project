jQuery(function () {
	$('#add').click(function(e){
		var taskItem = $('#tasks ul li:first').clone();
		taskItem.find('input[type="text"]').val("");
		$('#tasks ul').append(taskItem);
		taskItem.find('input[type="text"]:first').focus();
		return false;		
	});

	$('#add').click().click().text();

	$('#tasks ul').sortable({handle:".handle"});
	
	$('input[type="text"]:first').focus();
});
