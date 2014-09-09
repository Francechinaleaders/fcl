
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

/*
Template.Home.events({
'submit #searche': function(event) {
 event.preventDefault();
 var worde = $('#searche input[name=srch-term]').val();
 var word  = new RegExp(worde, "gi");
 var exit = document.body.innerHTML.match(word);
 var you = document.body.innerHTML.replace(word, '<span style="background-color: yellow;">$1</span>');
 alert(RegExp$1);
}
});
*/


