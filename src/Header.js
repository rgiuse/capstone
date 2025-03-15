import logo from  "./assets/Logo.svg"
function Header({children}){
    return (
        <header>
            <img src={logo} alt="logo" />
            {children}
        </header>
    );
}

export default Header;