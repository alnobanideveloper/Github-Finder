import { useState , useContext} from "react"
import GithubContext from "../../contexts/github/GithubContext"

const SearchUsers = () => {
    const {users , fetchUsers} = useContext(GithubContext);

    const [text , setText] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(text === ''){
            alert('please Enter something')
        }
        else{
            fetchUsers(text);
            setText('');
        }
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                                placeholder="Search"
                                value={text}
                                onChange={(e)=>setText(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {users.lenght > 0 && 
            <div>
                <button className="btn btn-ghost btn-lg">clear</button>
            </div>
            }
        </div>
    )
}
export default SearchUsers