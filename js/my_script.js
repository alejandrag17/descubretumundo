
$(document).ready(function () {
	$ ("#name").keyup( function (e) {
		var nameValue= $("#name").val();
		setStudentName(nameValue);

	});

	var setStudentName = function (name) {
		$("#student-name").html(name);
	};

	setStudentName("Debe definir el nombre");

});

$(document).ready(function () {
	$ ("#years").keyup( function (e) {
		var yearsValue= $("#years").val();
		setStudentYears(yearsValue);

	});

	var setStudentYears = function (years) {
		$("#student-years").html(years);
	};

	setStudentYears("Debe definir la edad");

});

$(document).ready(function () {
	$ ("#curse").keyup( function (e) {
		var curseValue= $("#curse").val();
		setStudentCurse(curseValue);

	});

	var setStudentCurse = function (curse) {
		$("#student-curse").html(curse);
	};

	setStudentCurse("Debe definir el curso");

});

$(document).ready(function () {
	$ ("#school").keyup( function (e) {
		var schoolValue= $("#school").val();
		setStudentschool(schoolValue);

	});

	var setStudentschool = function (school) {
		$("#student-school").html(school);
	};

	setStudentschool("Debe definir la institucion");

	$(".subject").click(function(){
		$('#favorite-subjects').append($(this));

	});

});


