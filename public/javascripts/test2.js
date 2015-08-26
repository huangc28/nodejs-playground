define(function(){

	var _counter;

	function generateId(){
		return 'customID' + _counter++;
	};

	function create(tagName, id){
		var el = document.createElement(tagName);
		el.id = id || generateId(); 
		return el;
	};

	return{
		generateId: generateId,
		create: create
	};
});	