import {Link} from "react-router-dom";

function Home(){
    return <>
        <ul>
            <li>
                <Link to="/about">To the About Page</Link>
            </li>
        </ul>
    </>
}

export default Home