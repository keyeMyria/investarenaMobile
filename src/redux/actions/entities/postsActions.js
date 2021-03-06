import { GET_REFRESH_POSTS_REQUEST,
    GET_NEXT_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_ERROR,
    UPDATE_POST_REQUEST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_ERROR,
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_ERROR } from '../../constansActions';

export function getRefreshPostsRequest () {
    return { type: GET_REFRESH_POSTS_REQUEST };
}

export function getNextPostsRequest () {
    return { type: GET_NEXT_POSTS_REQUEST };
}

export function getPostsSuccess (data) {
    return { type: GET_POSTS_SUCCESS, payload: data };
}

export function getPostsError () {
    return { type: GET_POSTS_ERROR };
}

export function createPostRequest (clientPostId, data) {
    return { type: CREATE_POST_REQUEST, payload: {clientPostId, data} };
}

export function createPostSuccess (clientPostId, data) {
    return { type: CREATE_POST_SUCCESS, payload: {clientPostId, data} };
}

export function createPostError () {
    return { type: CREATE_POST_ERROR };
}

export function updatePostRequest (postId, data) {
    return { type: UPDATE_POST_REQUEST, payload: {postId, data} };
}

export function updatePostSuccess (data) {
    return { type: UPDATE_POST_SUCCESS, payload: data };
}

export function updatePostError () {
    return { type: UPDATE_POST_ERROR };
}

export function deletePostRequest (postId) {
    return { type: DELETE_POST_REQUEST, payload: postId };
}

export function deletePostSuccess (postId) {
    return { type: DELETE_POST_SUCCESS, payload: postId };
}

export function deletePostError () {
    return { type: DELETE_POST_ERROR };
}
