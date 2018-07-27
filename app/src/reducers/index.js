import { combineReducers } from '../../../../../Users/shimj/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import BooksReducer from './reducer_books';


const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;