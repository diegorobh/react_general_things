const rootReducer = (state, action)=>{
    switch (action.type) {
        case "FETCH_POSTS":
            return ({
                ...state,
                listPosts:action.payload
            });
        default:
            return ({
                ...state
            });
    }
}
export default rootReducer;