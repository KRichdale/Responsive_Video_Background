function closure() {
	const n = 'Name';
	function name() {
		return console.log(n);
	}
	return name();
}

closure();
