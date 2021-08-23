import {v4 as uuidv4} from "uuid";

const INITIAL_STATE = { posts: {} };

export default function postReducer(state = INITIAL_STATE, action) {
  let p = state[action.postId];
  switch (action.type) {
    case "ADD_POST":
        return { ...state, [uuidv4()]: action.post };
    case "UPDATE_POST":
        const oldComments = state[action.postid].comments;
        return {...state, [action.postid]: {...action.formData, comments: oldComments}}
    case "DELETE_POST":
        let posts = { ...state };
        delete posts[action.postid];
        return posts;
    case "ADD_COMMENT":
        return {
            ...state,
            [action.postId]: { ...p, comments: [...p.comments, action.comment] }
        };
    case "REMOVE_COMMENT":
        return {
            ...state,
            [action.postId]: {
              ...p, comments: p.comments.filter(c => c.id !== action.commentId)
            }
        };
    default:
        return state;
  }
}