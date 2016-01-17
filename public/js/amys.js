_.templateSettings = {
	interpolate: /\{\{(.+?)\}\}/g
};

function showNewStudentInputs() {
	$('#student-entry-line > *').toggleClass('hidden');
}

function addStudent() {
	var firstName = $('#new-student-first-name').val();
	var lastName = $('#new-student-last-name').val();

	console.log("Adding " + firstName + " " + lastName);

	$('section.students').append(createNewStudentEntry(firstName, lastName));
}


function createNewStudentEntry(first, last) {
	var render = _.template($('#new-student-template').html());
	return render({firstName: first, lastName: last});
}