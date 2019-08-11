import { Auth } from "../../store/appInterfaces"
import { Reducer } from "redux"
const initialState = {
  id: "1111",
  name: "Serhan"
}

const auth: Reducer<Auth> = (state: Auth = initialState, action) => state

export default auth
