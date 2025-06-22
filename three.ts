interface User {
  id: number;
  name: string;
  email?: string; 
}

const user: User = {
  id: 1,
  name: "Alice",
};

function printUser(user: User): void {
  console.log(`ID: ${user.id}, Name: ${user.name}`);
}

printUser(user); // Output: "ID: 1, Name: Alice"
