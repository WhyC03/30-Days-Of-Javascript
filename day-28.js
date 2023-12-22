const targetObject = {
    name: 'John',
    age: 25,
  };
  
  const loggingProxy = new Proxy(targetObject, {
    get: function (target, property, receiver) {
      console.log(`Accessing property: ${property}`);
  
      return Reflect.get(target, property, receiver);
    },
  });
  
  console.log(loggingProxy.name);
  console.log(loggingProxy.age);
  