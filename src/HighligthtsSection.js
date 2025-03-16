function HighligthtsSection({ title, children }) {
    return (
        <section className="pageSection highligthts">
            <article>
                <h2>{title}</h2>
                <button className="online-menu">Online Menu</button>
                    {children}
            </article>
        </section>
    );
}

export default HighligthtsSection;