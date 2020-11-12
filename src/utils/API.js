import axios from 'axios';

export default {
  getUsers: function () {
    return axios.get('https://randomuser.me/api/?results=5&nat=us&inc=name,email,phone,id,picture');
  }
}