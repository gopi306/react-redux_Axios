import axios from 'axios';

const API = axios.create({
  baseURL:"https://jsonplaceholder.typicode.com"
});

export const getPost =()=>{
    
  return API.get('/posts');
}

export const deletePost = (id)=>{
  return API.delete(`/posts/${id}`);
};