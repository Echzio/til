const Array = {
  name: 'me',
  value: 10,
}

function F () {
  // console.log(this.name);
  // console.log(this.value);
}

F.call(Array);

const NewExt = F.bind(Array);
NewExt();

F.prototype = Array;

F.prototype.say = function () {
  console.log(this.name);
  console.log(this.value);
}

const NewExt2 = new F();

NewExt2.say();