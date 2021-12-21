const posts = [
  { title: "How to solve sudoku", author: "John D." },
  { title: "My favourite movies", author: "Emma K." },
  { title: "How I teached myself Javascript", author: "Brian C." },
];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.title);
  });
};

console.log("OLD LIST");
listPosts();
console.log();

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost);
    //reject("HATA: Post eklenemedi!")
    resolve("Post ekleme başarılı.");
  });

  return promise1;
};

addPost({ title: "How to cook like a chef", author: "Jessica M." })
  .then((value) => {
    console.log(value);
    console.log();
    console.log("NEW LIST");
    listPosts();
  })
  .catch((error) => {
    console.log(error);
  });
