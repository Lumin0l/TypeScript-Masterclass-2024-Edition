// We can use Type declarations using Type Alias
type Post = {
    title: string; // Type Annotations using semi-colons instead of commas
    content: string;
    date: Date;
  };
  
  let post: Post = {
    title: "This is a blog post",
    content: "Content of the post",
    date: new Date(),
  };
  
  // Advantage of type declaration, can be recycled
  let post2: Post = {
    title: "This is a blog post 2",
    content: "Content of the post 2",
    date: new Date(),
  };