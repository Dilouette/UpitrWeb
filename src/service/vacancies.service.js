import axios from "axios";
const basePath = "vacancies";

const VacancyService = {
  all() {
    return new Promise((resolve, reject) => {
      axios
        .get(`/${basePath}`)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response);
          } else {
            reject(new Error(error));
          }
        });
    });
  },
  single(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/${basePath}/${id}`)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response);
          } else {
            reject(new Error(error));
          }
        });
    });
  },
  create(payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/${basePath}`, payload)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response);
          } else {
            reject(new Error(error));
          }
        });
    });
  },
  update(id, payload) {
    return new Promise((resolve, reject) => {
      axios
        .put(`/${basePath}/${id}`, payload)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response);
          } else {
            reject(new Error(error));
          }
        });
    });
  },
  publish(id) {
    return new Promise((resolve, reject) => {
      axios
        .put(`/${basePath}/publish/${id}`)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response);
          } else {
            reject(new Error(error));
          }
        });
    });
  },
  unPublish(id) {
    return new Promise((resolve, reject) => {
      axios
        .put(`/${basePath}/unpublish/${id}`)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response);
          } else {
            reject(new Error(error));
          }
        });
    });
  },
  delete(id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/${basePath}/${id}`)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response);
          } else {
            reject(new Error(error));
          }
        });
    });
  },
  createQuestion(payload) {
    return new Promise((resolve, reject) => {
      axios
        .post("/vacancy-questions", payload)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response);
          } else {
            reject(new Error(error));
          }
        });
    });
  },
  deleteQuestion(id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/vacancy-questions/${id}`)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response);
          } else {
            reject(new Error(error));
          }
        });
    });
  },
  candidates(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/candidates?vacancy_id=${id}`)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          if (error.response) {
            reject(error.response);
          } else {
            reject(new Error(error));
          }
        });
    });
  },
};

export default VacancyService;
