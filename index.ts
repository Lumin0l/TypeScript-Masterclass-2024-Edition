type FetchDataFunction = (URL: string, ...queries: string[]) => Promise<string[]>

const fetchData: FetchDataFunction = async (URL, ...queries) => {
  const fullQuery = URL + "?" + queries.join("&");

  const response = await fetch(fullQuery);
  const data = await response.json();
  return data;
}

type User = {
  firstName: string;
  lastName: string;
  age: number;
}

const user: User = {
  firstName: "John",
  lastName: "Doe",
  age: 30
}

function getUserInfo({ firstName, lastName, age }: User) {
  return `User: ${firstName} ${lastName}, Age: ${age}`
}
