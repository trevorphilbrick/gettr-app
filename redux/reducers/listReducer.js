const initialState = [];

const listitems = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case "ADD_LISTITEM":
      return [...state, payload];
    case "REMOVE_LISTITEM":
      return state.filter((listItem) => listItem.id != payload.id);
  }
};

export default listitems;

// DATA STRUCTURE
// {
//   id: "wefew23rfef324",
//   listItemName: "Carrots",
//   listItemCategory: "Produce",
//   listItemQuantity: "4",
//   isChecked: false,
// },
// {
//   id: "wefew23rfef3333",
//   listItemName: "Onion",
//   listItemCategory: "Produce",
//   listItemQuantity: "1",
//   isChecked: true,
// },
