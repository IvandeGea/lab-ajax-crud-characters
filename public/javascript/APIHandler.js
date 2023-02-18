// import axios from "axios"

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(this.BASE_URL + "/characters")
      .then((response) => {
        console.log("data: ", response.data);
        return response.data;
      })
      .catch((err) => console.log(err))
  }

  getOneRegister(id) {
    return axios
      .get(this.BASE_URL + `/characters/${id}`)
      .then((response) => {
        return response.data;
        //todo lo que te devuelva un axios, necesitas un .data
      })
      .catch((err) => console.log(err))
  }

  createOneRegister({ name, occupation, cartoon, weapon }) {
    return axios
      .post(this.BASE_URL + "/characters", { name, occupation, cartoon, weapon })
      .then((response) => {
        return response.data;

      })
      .catch((err) => console.log(err))
  }

  updateOneRegister(id, { name, occupation, cartoon, weapon }) {
    this.getOneRegister(id)
      .then(result => {
        if (result.length == 0) alert("Usuario not found")
        else {
          return axios.put(this.BASE_URL + `/characters/${id}`, { name, occupation, cartoon, weapon })
            .then(response => {
              return response.data
            })
            .catch(err => next(err))
        }
      })
      .catch(err => next(err))
  }

  deleteOneRegister(id) {
    return axios
      .delete(this.BASE_URL + `/characters/${id}`)
      .then(response => {
        if (!response.data) { alert("Character has been successfully deleted") }
      })
      .catch(err => next(err))
  }
}

// module.exports = APIHandler();