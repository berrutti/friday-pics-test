import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostByFilename(filename: string) {
  const fullPath = join(postsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const content = JSON.parse(fileContents);

  const post = {
    date: content.date,
    preview: content.preview,
    pics: content.pics,
  };

  return post;
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory).reverse();

  return fileNames.map((filename) => getPostByFilename(filename));
}
