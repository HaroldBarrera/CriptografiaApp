const loginPage = () => {

    const logUser = () => {
        fetch('http://localhost:5000/api/usuarios')
        .then(res => res.json())
        .then(allUsuarios => console.log(allUsuarios));
    };

    logUser();

    return(
        <main>
            <h1>LOGIN</h1>
            <hr/>
        </main>
    );
};

export default loginPage;