import { Link } from 'react-router-dom';

const indexPage = () => {
    return(
        <main>
            <h1>INDEX</h1>
            <hr/>
            <Link to="/login">LOGIN</Link>
            <Link to="/register">REGISTER</Link>
        </main>
    );
};

export default indexPage;