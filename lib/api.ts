import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostByDate(date: string) {
  const fullPath = join(postsDirectory, date);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const content = JSON.parse(fileContents);

  const post = {
    date: date,
    preview: content.preview,
    pics: content.pics,
  };

  return post;
}

export function getAllPosts() {
  const postNames = fs.readdirSync(postsDirectory).reverse();

  return postNames.map((name) => getPostByDate(name));
}
