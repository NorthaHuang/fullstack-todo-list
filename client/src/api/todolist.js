import http from './http';

export const getAll = () => {
  return http.get("/todolists");
};

export const getById = (id) =>  {
  return http.get(`/todolist/${id}`);
};

export const create = (data) => {
  return http.post("/todolists", data);
};

export const updateById = (id, data) => {
  return http.put(`/todolists/${id}`, data);
};

export const deleteAll = () => {
  return http.delete(`/todolists`);
};

export const deleteById = (id) => {
  return http.delete(`/todolists/${id}`);
};
