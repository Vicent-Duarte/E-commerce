import axios from "axios";

const useAuth = () => {

    const postApi = (url, data) => {
        return axios.post(url, data)
            .then(res => {
                console.log(res.data);
                'token' in res.data && localStorage.setItem('token', res.data.token)
            })
            .catch(err => console.log(err))
    }
    return postApi;
}

export default useAuth;