type Author = {
    name: string;
    age: number;
    email: string;
  };

type AwardDetails = {
    name: string;
    date: Date;
  };
  
  type Awards = {
    [keyof: string]: AwardDetails; // we don't know the key names or how many there will be, so we use keyof string to allow any string key, but all values must be of type AwardDetails
  };
  
  type Post = {
    title: string; // Type Annotations using semi-colons instead of commas
    content: string;
    date: Date;
    author: Author; // Assign Author type to author property on Post type
    awards: Awards;
  };
  
  let post: Post = {
    title: "This is a blog post",
    content: "Content of the post",
    date: new Date(),
    author: {
      name: "John",
      age: 32,
      email: "john@doe.com",
    },
    awards: {
      web: {
        name: "Wed Awards",
        date: new Date(),
      },
      web3: {
        name: "Web 3",
        date: new Date(),
      },
    },
  };