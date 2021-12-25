module.exports = function (plop) {
  // create your generators here
  // Read more about templates at https://plopjs.com/

  plop.setGenerator("basic template", {
    description: "this is a skeleton plopfile",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "Post Title",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/posts/{{title}}.md",
        templateFile: "plop-templates/post.md",
      },
    ],
  });
};
