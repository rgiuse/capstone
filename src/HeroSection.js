function HeroSection({ title, subtitle, image, children }) {
    return (
        <section className="pageSection hero">
            <section>
                <article>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                    {children}
                <button className="reserve-table">Reserve a table</button>
                </article>
                <img src={image} alt="Hero Article" />
            </section>
        </section>
    );
}

export default HeroSection;