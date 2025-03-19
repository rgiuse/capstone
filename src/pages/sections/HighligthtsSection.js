function HighligthtsSection({ title, children }) {
    return (
        <section className="pageSection highligthts">
            <article>
                <div className="title">

                <h2>{title}</h2>
                <button className="online-menu">Online Menu</button>
                </div>
                <div className="cards">
                {children}
                </div>

            </article>
        </section>
    );
}

export default HighligthtsSection;