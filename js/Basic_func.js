//! Function Declaration

function add(a, b) {
	const add = a + b;
	return console.log('Add: ' + add);
}

//! Function Call
add(5, 1);
//! Output = 2;

//! Function expression
const multiply = function(a, b) {
	return console.log('Multiply: ' + a * b);
};

//! Function Call
multiply(2, 4);
