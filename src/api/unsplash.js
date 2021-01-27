import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: "Client-ID OOXgpJep-U0YYehyWBQVK2IWdauRILQQp8vAIhunGnM"
  } 
});