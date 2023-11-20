import {configureStore} from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './components/Reducer';

const locals = configureStore({
    reducer : {
        DataReducer, SelectDataReducer
    }
})

export default locals;