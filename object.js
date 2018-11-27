var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = "<p>Hello. My Name is " + person.name + "</p>";
message += "<p>I live in the " + person.country + "</p>";
person.name = "Rainbow";
message += "<p>But I wish my name was " + person.name + "</p>";
person.dateOfBirth = 1965;
message += "<p> I was born in the year " + person.dateOfBirth + "</p>";
person.age += 2;
message += "<p> I am now " + person.age + "years old and have " + person.skills.length + " technical skills under my belt - ";
// good way of using objects within objects, with the .length method accessing the skills values in the person object.
message += person.skills.join(", ") + "</p>";
print(message);