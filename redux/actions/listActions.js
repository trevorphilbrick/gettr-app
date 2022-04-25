export const addListItem = (payload) => {
  return { type: "ADD_LISTITEM", payload: payload };
};

export const removeListItem = (payload) => {
  return { type: "REMOVE_LISTITEM", payload: payload };
};
