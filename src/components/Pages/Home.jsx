import UserResults from "../Users/userResults"
import SearchUsers from "../Users/SearchUsers"
import Alert from "../layout/Alert"
const Home = ()=>{
    return(
        <div>
            <Alert />
            <SearchUsers />
            <UserResults />
        </div>
    )
}

export default Home