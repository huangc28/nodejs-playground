// console.log(requirejs);


requirejs(["test2"], function(dom){
	console.log('dddd');
	var el = dom.create('div');
	var el2 = dom.create('div');

	console.log(el.id);
	console.log(el2.id);
}); 