import {API_NOTES} from "./constants";

export const fetchNotes = () =>
  fetch(API_NOTES, { method: "GET" }).then((response) => {
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  });

export const addNotes = (data) => {
  const opt = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return fetch(API_NOTES, opt)
    .then((res) => res.json())
    .catch((error) => {
      console.log("error", error);
    });
};

export const deleteNotes = (id) => {
  return fetch(`${API_NOTES}/${id}`, { method: "DELETE" })
    .then((res) => res.json())
    .catch((error) => {
      console.log("error", error);
    });
};
