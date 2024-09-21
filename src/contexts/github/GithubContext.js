import { createContext  , useReducer} from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({children})=>{

    const [state , dispatch] = useReducer(GithubReducer,{
        users:[],
        user:{},
        repos:[],
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
    const getUser = async (login)=>{
        setLoading();
        const response = await fetch(`${GITHUB_URL}users/${login}`)
        const data = await response.json()
        dispatch({
            type:'GET_USER',
            payload: data,
        })
    }
    function setClear (){
        dispatch({
            type:'CLEAR_USERS'
        })
    }

    function setLoading(){
        dispatch({
            type:'SET_LOADING',
        })
    }

    const getUserRepos = async (login)=>{
        setLoading();
        const params = new URLSearchParams({
            sort:'created',
            per_pages:10
        })
        const response = await fetch(`${GITHUB_URL}users/${login}/repos?${params}`)
        const data = await response.json();

        dispatch({
            type:'GET_REPOS',
            payload: data,
        })
    }

    return <GithubContext.Provider value={{
    users : state.users,
    loading:state.loading,  
    user:state.user,
    fetchUsers,
    setClear,
    getUser,
    getUserRepos,
    repos : state.repos
    }}>
        {children}
    </GithubContext.Provider>
        
}
export default GithubContext