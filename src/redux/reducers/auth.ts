import { Auth } from "../../store/appInterfaces"
import { Reducer } from "redux"
const initialState = {
  id: "",
  name: "",
  token: ""
}

const auth: Reducer<Auth> = (state: Auth = initialState, action) => state

export default auth
