const initialState = [
  {
    name: "A Random List",
    id: 1,
    date: "Sat, Mar 12, 2022 10:52 AM",
    list: [
      {
        id: "wefew23rfef324",
        listItemName: "Carrots",
        listItemCategory: "Produce",
        listItemQuantity: "4",
        isChecked: false,
      },
      {
        id: "wefew23rfef3333",
        listItemName: "Steak",
        listItemCategory: "Meat",
        listItemQuantity: "1",
        isChecked: true,
      },
    ],
  },
  {
    name: "My Second List",
    id: 2,
    date: "Sat, Mar 12, 2022 10:55 AM",
    list: [
      {
        id: "wefew23rfef324",
        listItemName: "Potatoes",
        listItemCategory: "Produce",
        listItemQuantity: "4",
        isChecked: false,
      },
      {
        id: "wefew23rfef3333",
        listItemName: "Onion",
        listItemCategory: "Produce",
        listItemQuantity: "1",
        isChecked: true,
      },
      {
        id: "wefew23rfef321",
        listItemName: "Potatoes",
        listItemCategory: "Produce",
        listItemQuantity: "4",
        isChecked: false,
      },
      {
        id: "wefew23rfef3",
        listItemName: "Onion",
        listItemCategory: "Produce",
        listItemQuantity: "1",
        isChecked: true,
      },
    ],
  },
];

const listGroup = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case "ADD_LIST":
      return [...state, payload];
    // case "REMOVE_LIST":
    //   return state.filter((list) => list.id != payload.id);
  }
};

export default listGroup;

// DATA STRUCTURE

// {
//   name: "listName",
//   id: 1,
//   date: "Sat, Mar 12, 2022 10:52 AM",
//   list: [
//     {
//       id: "wefew23rfef324",
//       listItemName: "Carrots",
//       listItemCategory: "Produce",
//       listItemQuantity: "4",
//       isChecked: false,
//     },
//     {
//       id: "wefew23rfef3333",
//       listItemName: "Steak",
//       listItemCategory: "Meat",
//       listItemQuantity: "1",
//       isChecked: true,
//     },
//   ],
// },
// {
//   name: "listName",
//   id: 2,
//   date: "Sat, Mar 12, 2022 10:52 AM",
//   list: [
//     {
//       id: "wefew23rfef324",
//       listItemName: "Potatoes",
//       listItemCategory: "Produce",
//       listItemQuantity: "4",
//       isChecked: false,
//     },
//     {
//       id: "wefew23rfef3333",
//       listItemName: "Onion",
//       listItemCategory: "Produce",
//       listItemQuantity: "1",
//       isChecked: true,
//     },
//   ],
// },
