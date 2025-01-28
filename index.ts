type Cat = {
    name: string;
    purrs: boolean;
    color: string;
  };
  
  type Dog = {
    name: string;
    barks: boolean;
    color: string;
  };
  
  type HybridAnimal = Dog & Cat;
  
  const hybridAnimal: HybridAnimal = { // Must have all properties of both Cat and Dog
    name: "Max",
    color: "White",
    barks: true,
    purrs: false,
  };