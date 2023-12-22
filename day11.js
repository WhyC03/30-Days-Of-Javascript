var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  function listProperties(obj) {
    var result = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result.push(prop);
      }
    }
    return result.join(",");
  }
  
  var propertyList = listProperties(student);
  console.log(propertyList);
  