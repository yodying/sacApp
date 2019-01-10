import axios from 'axios';

export const Get = async (...queries) => {
    let { url, endpoint, body } = queries[0];
    let request = await axios.get(url + endpoint, {params: body});
    return request.data;
}

export const Post = async (...params) => {
    let { url, endpoint, body } = params[0];
    let queryString = require('query-string');
    let request = await axios.post(url + endpoint, queryString.stringify(body));
    return request.data;
}