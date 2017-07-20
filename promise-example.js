function gettem(location){
	return new Promise(function (resolve,reject) {
		if (location === "beijing") {
			resolve("temp 39")
		}
		reject("location not match")
	});
}

gettem("beijing").then(function(tmp) {
	console.log(tmp);
},function(err) {
	console.log(err);
})
