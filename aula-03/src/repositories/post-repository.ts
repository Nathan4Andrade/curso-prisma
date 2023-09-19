import { Posts } from "@prisma/client";
import prisma from "../database/database";

export type CreatePost = Omit<Posts, "id">;

async function getPosts() {
  const posts = await prisma.posts.findMany();
  return posts;
}

async function getPost(id: number) {
  const post = await prisma.posts.findUnique({ where: { id } });
  return post;
}

async function createPost(post: CreatePost) {
  return prisma.posts.create({ data: post });
}

async function deletePost(id: number) {
  return prisma.posts.delete({ where: { id } });
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost,
};

export default postRepository;
