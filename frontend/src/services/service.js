import http from "../http-common";

class Req {
  getAll() {
    return http.get("/product");
  }

  getId() {
    return http.get("/saleprice");
  }

  update(id, data) {
    return http.put(`/saleprice/${id}`, data);
  }
}

export default new Req();
