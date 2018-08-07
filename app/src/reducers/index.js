import { combineReducers } from '../../../../../Users/shimj/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';


const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;