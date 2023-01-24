// Primitive: number, string and boolean
// arrays and objects
// function types and parameters

type Person = {
  name: string;
  age: number;
};

let age: number = 23;

let username: string = "asdasd";

let array: string[] = ["asdasd", "asdasd"];

let igor: Person = {
  name: "igor",
  age: 23,
};

let people: {
  name: string;
  age: number;
}[];

let course: string | number = "React";

course = 89334;

function add(a: number, b: number): number {
  return a + b;
}
function show(value: any) {
  console.log(value);
}
const arrayDemo = [1, 2, 3];

function putOnTheBeggining<T>(array: T[], value: T) {
  return [value, ...array];
}

const a = putOnTheBeggining(arrayDemo, 1);
const b = putOnTheBeggining(["a", "b"], "c");
