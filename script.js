
function getKeys(obj){
	return Object.keys(obj);
}
const student1 = {
	name: "John",
	age: 23,
	city: "Iceland"
};

const student2 = {
	name: "John"
};
console.log(getKeys(student1));
console.log(getKeys(student2));