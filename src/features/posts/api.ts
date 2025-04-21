import { Post, User } from "@/entities/post";
import axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com'

export const fetchGetPosts = async (): Promise<Post[]> => {
  const { data: posts } = await axios.get<Post[]>(`${URL}/posts`)
  return posts
}

export const fetchGetPost = async (id: string): Promise<Post> => {
  const { data: post } = await axios.get<Post>(`${URL}/posts/${id}`)
  return post
}

export const fetchGetUser = async (id: number): Promise<User> => {
  const { data: user } = await axios.get<User>(`${URL}/users/${id}`)
  return user
}