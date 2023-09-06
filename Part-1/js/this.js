// ================= THIS keyword ==================
// Used with Object Only...
console.log(typeof this);//object
console.log(typeof window);//object

console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(window); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

console.log(this === window); // true


