function HeroSection({ title, subtitle, image, children }) {
    return (
        <section className="pageSection hero">
            <section>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                    {children}
                <img src={image} alt="Hero Article" />
            </section>
        </section>
    );
}

export default HeroSection;