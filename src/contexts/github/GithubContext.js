import { createContext  , useReducer} from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({children})=>{

    const [state , dispatch] = useReducer(GithubReducer,{
        users:[],
        loading:false
    })
    
    const fetchUsers = async (name)=>{
        setLoading();
        const response = await fetch(`${GITHUB_URL}search/users?q=${name}`)
        const {items} = await response.json()
        
        dispatch({
            type:'GET_USERS',
            payload: items,
        })
    }

    function setLoading(){
        dispatch({
            type:'SET_LOADING',
        })
    }
    return <GithubContext.Provider value={{
    users : state.users,
    loading:state.loading,  
    fetchUsers
    }}>
        {children}
    </GithubContext.Provider>
        
}
export default GithubContext