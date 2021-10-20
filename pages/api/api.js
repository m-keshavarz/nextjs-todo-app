import axios from "axios";

const instance = axios.create({
  baseURL: "https://616eaa7f715a630017b3975c.mockapi.io",
  timeout: 10000
});

export const getAPI = (url) => {
	return instance.get(url);
}

export const postAPI = (url, body) => {
	return instance.post(url, body)
}