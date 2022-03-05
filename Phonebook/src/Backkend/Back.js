import axios from 'axios'
const baseUrl = 'http://localhost:3001/person'




const getAll = () => {
return axios.get(baseUrl).then(res => res.data)
}


const deletePerson = id => {
  return axios.delete(`${baseUrl}/${id}`).then(res => res.data)

}


const update = (id, newContact) => {
  return axios.put(`${baseUrl}/${id}`, newContact)
}


const create = (newContact) => {
 const request = axios.post(baseUrl, newContact)
 return request.then(res => res.data)
}


export default {
  create,
  deletePerson,
  getAll, 
  update
}