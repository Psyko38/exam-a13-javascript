function estDivisible(a, b) {
	if (parseFloat(a) % parseFloat(b) === 0) return true;
	return false;
}

console.log(estDivisible(10, 2)); // Résultat attendu : true
console.log(estDivisible(10, 3)); // Résultat attendu : false
console.log(estDivisible(10, 10)); // true
console.log(estDivisible(2, 4)); // false
