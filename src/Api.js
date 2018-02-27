import fetch from "isomorphic-fetch";

const SERVER_URL = "";

const callApi=(endpoint, params)=>{
    const fullUrl = (endpoint.indexOf(SERVER_URL) === -1) ? SERVER_URL + endpoint : endpoint;
    return fetch(fullUrl, params)
        .then(response =>
            response.json().then(json => ({ json, response }))
        ).then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json)
            }
            return json
        })
        .catch(error => {throw error});
};

export const apiFetchList=()=>callApi("/studios.json");
