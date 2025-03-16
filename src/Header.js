import logo from  "./assets/Logo.svg"
function Header({children}){
    return (
        <header className="pageSection">
            <section>
            <img src={logo} alt="logo" />
            {children}
            </section>
        </header>
    );
}

export default Header;