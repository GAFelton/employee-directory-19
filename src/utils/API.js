import axios from 'axios';

export default function getUsers() { 
  return axios.get('https://randomuser.me/api/?results=5&nat=us&inc=name,email,phone,picture');
};