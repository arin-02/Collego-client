import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './Reducer';
import {combineReducers} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
// export default rootReducer;
export default store;
