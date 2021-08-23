import {v4 as uuidv4} from "uuid";

const INITIAL_STATE = { posts: [] };

function sortByVote(posts) {
    return posts.sort((a, b) => b.votes - a.votes);
}

export default function cardReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "GET_TITLES":
            return sortByVote([...action.titles])
        default:
            return state;
    }
}