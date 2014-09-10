
Template.HOME.rendered = function(){
	 $(function() {
	$('#carousel').carouFredSel({
		responsive: false,
		scroll: 1,
		items: {
			size: null,
			visible: {
				min: 2,
				max: 5,
			}
		}
	});
}); 
}; 
