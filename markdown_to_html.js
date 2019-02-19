const showdown = require("showdown");
const fs = require("fs");

const markdown = fs.readFileSync("README.md", {
  encoding: "UTF-8"
});

showdown.setFlavor("github");

const converter = new showdown.Converter();

const html = converter.makeHtml(markdown);

console.log(html);
