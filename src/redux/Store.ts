import {configureStore} from '@reduxjs/toolkit';
import {authReducer, messageReducer} from './Reducer';
import {combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
// export default rootReducer;
export default store;
