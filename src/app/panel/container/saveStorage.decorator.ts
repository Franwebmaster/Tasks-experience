export function saveStorage() {
	
	return function(target, key, descriptor) {
		
		const methodOriginal = descriptor.value;

		descriptor.value = function(...args){

			methodOriginal.apply(this, args);

			localStorage.setItem('tarefas', _arrayParser(this.tarefas));
		}
		return descriptor;
	}
}

function _arrayParser(array) {
	return JSON.stringify(array)
}