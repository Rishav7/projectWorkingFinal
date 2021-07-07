import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'



import { userLoginReducer , userRegisterReducer ,userDetailsReducer,userUpdateProfileReducer,forgotPasswordReducer,uploadProfilePicReducer } from './reducers/userReducers'
import { orderListMyReducer } from './reducers/orderReducers'
import { wishlistListMyReducer } from './reducers/wishlistReducers'

const reducer = combineReducers({
  
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails:userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  forgotPassword: forgotPasswordReducer,
  userUpdateProfilePic: uploadProfilePicReducer,
  orderListMy: orderListMyReducer,
  wishlistListMy:wishlistListMyReducer,
})



const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null



const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
  
}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
