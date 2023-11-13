# FP style Element creation

# Create elements

Use `Element.of(type)` to create your elements:

~~~javascript
const imgElement = Element.of("img");
~~~

Each element is lazy evaluated, it does not create the real `dom` element until you call `fold()`

~~~javascript
const imgElement = Element.of("img");
const element = imgElement.fold();
~~~

You can chain operations, each chain will produce a new element without any mutations

~~~javascript
const imgElement = Element('img');
const elementWithId = imgElement.id("one");
const elementWithClass = imgElement.class("class");
const elementWithClassAndId = elementWithId.class("classId", "yes", "ok");

console.log(imgElement.fold());
console.log(elementWithId.fold());
console.log(elementWithClass.fold());
console.log(elementWithClassAndId.fold());
~~~
