import OymakApi from "../services/oymakApi"
import { Dispatch } from "redux"
import { addNewCategory } from "../redux/actions"

/**
 * Api'den kategoriler çekilip redux'a gönderiliyor
 */
export const fetchCategories = () => {
  return function(dispatch: Dispatch) {
    return OymakApi.getCategoryList()
      .then(data => {
        data.list.map(item => {
          dispatch(addNewCategory(item.Name))
        })
      })
      .catch(error => {
        console.log("error: ", error)
      })
  }
}
