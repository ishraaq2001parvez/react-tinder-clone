import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://tinder-backend-0456.herokuapp.com/'
})

export default instance