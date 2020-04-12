document.getElementById("form").addEventListener('submit', function(e) {
	e.preventDefault();
	window.setTimeout(function(){
		document.getElementById("notification").classList.remove('hidden');
		document.getElementById("message").value = '';
	}, 300);
	window.setTimeout(function(){
		document.getElementById("notification").classList.add('hidden');
	}, 4000);


});
