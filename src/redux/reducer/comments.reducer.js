import { COMMENTS_LIST_FAIL, COMMENTS_LIST_REQUEST, COMMENTS_LIST_SUCCESS } from "../actionType";


export const CommentsReducer =(
    state={

        loading:true,
        comments:null

    }
    ,action)=>{

        const {type,payload}=action;

        switch (type) {
            case COMMENTS_LIST_REQUEST:
                return{
                    ...state,
                    loading:true,
                }
            case COMMENTS_LIST_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    comments:payload
                }
            case COMMENTS_LIST_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:payload
                }
        
            default:
            return state;
        }

    }