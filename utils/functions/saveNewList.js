import { store } from "../../redux/reduxStore";
import { addList } from "../../redux/actions/listGroupActions";
import moment from "moment";

/**
 *
 * @param {Array} currentList
 *
 */

const saveNewList = (currentList) => {
  const listGroup = store.getState().listGroup;

  const newListObj = {
    name: "listName",
    id: listGroup.length,
    date: moment().format("llll"),
    list: currentList,
  };

  return store.dispatch(addList(newListObj));
};

export default saveNewList;
