import { combineReducers } from 'redux';
import dealsReducer from './dealsReducer';
import favoritesReducer from './favoritesReducer';
import headersReducer from './headersReducer';
import postsReducer from './postsReducer';
import quotesReducer from './quotesReducer';
import quotesSettingsReducer from './quotesSettingsReducer';
import userReducer from './userReducer';
import usersStatusReducer from './usersStatusReducer';

export default combineReducers({
    deals: dealsReducer,
    favorites: favoritesReducer,
    headers: headersReducer,
    posts: postsReducer,
    quotes: quotesReducer,
    quotesSettings: quotesSettingsReducer,
    user: userReducer,
    usersStatus: usersStatusReducer
});
