const Header = () => {
    return (
        <header>
            <nav>
                <a href="/categories">nos catégories</a>
                <a href="/home"><img alt="logo" src={process.env.PUBLIC_URL + '/logo.svg'}></img></a>
            </nav>
        </header>
    )
}

export default Header;