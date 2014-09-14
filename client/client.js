
Template.HOME.rendered = function(){
	 $(function() {
	$('#carousel').carouFredSel({
		responsive: false,
		scroll: 1,
		items: {
			size: null,
			visible: {
				min: 1,
				max: 5,
			}
		}
	});
}); 
}; 
