import { toast } from "react-toastify";

export const getAcounts = () => {
   return fetch('https://62b42d8a530b26da4cb832bf.mockapi.io/user', {
            method: 'GET', // or 'PUT'
            })
            .then(response => response.json())
           
}