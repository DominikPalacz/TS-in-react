// enum-y - grupy stałych którymi się będziemy posługiwać (centralizujemy w jednym miejscu)
//0,1,2,...
enum Colors {
  Read = "read",
  Green = "green",
  Blue = "blue",
}

const hobbies: Array<string> = ["book", "TV", "JS"];
const hobbies2: string[] = ["book", "TV", "JS"];
const colors: Colors = Colors.Blue;
const colors2: Colors = "green" as Colors;
// Ctrl + Shift + l

// typowanie parametrów i wartości zwracanej //! (day: number, who: string): string
function learnTypeScript(day: number, who: string): string {
  const plural = day > 1 ? "s" : "";
  return `${who} is lerning Typescript in ${day} day${plural}`;
}

console.log(learnTypeScript(1, "Dominik"));

interface Things {
  hobbies: string[];
  hobbies2: string[];
  colors: Colors;
  colors2: Colors;
}

const things: Things = {
  hobbies: ["book", "TV", "JS"],
  hobbies2: ["book", "TV", "JS"],
  colors: Colors.Blue,
  colors2: "green" as Colors,
};

function getThings(things: Things) {
  return things.hobbies;
}

console.log(
  "🚀 ~ file: index.ts ~ line 38 ~ getThings ~ function getThings(things",
  getThings(things)
);

interface Validator {
  isValid(thing: Things): boolean;
}

class ColorsValidator implements Validator {
  isValid({ colors }: Things): boolean {
    return colors != null;
  }
}

class HobbiesValidator implements Validator {
  constructor(protected readonly minLength: number) {}

  isValid({ hobbies }: Things): boolean {
      console.log(`hobbies.length`, hobbies.length)
    return hobbies != null && hobbies.length > this.minLength;
  }
}

const validators = [new ColorsValidator(), new HobbiesValidator(1)];
const isValid = validators.every((validators) => validators.isValid(things));
console.warn(isValid);

// typy specjalne 38