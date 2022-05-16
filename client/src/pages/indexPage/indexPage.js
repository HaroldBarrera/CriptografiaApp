import { Link } from 'react-router-dom';

const indexPage = () => {
    return(
        <main className='container'>
            <div class='container-fluid'>
                <h1 className='display-4'>INDEX</h1>
                <hr className='my-4'/>
                <Link to="/login">
                    <button class="btn btn-primary">
                        Ir Login
                    </button>
                </Link>
                <Link to="/register">
                    <button className="btn btn-danger">
                        Ir Register
                    </button>
                </Link>
            </div>
        </main>
    );
};

export default indexPage;