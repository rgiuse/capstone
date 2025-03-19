import { useNavigate } from "react-router";

function HeroSection({ title, subtitle, image, children }) {
    let navigate = useNavigate();


    return (
        <section className="pageSection hero">
            <section>
                <article>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                    {children}
                <button className="reserve-table" onClick={() =>  navigate('/booking') } >Reserve a table</button>
                </article>
                <img src={image} alt="Hero Article" />
            </section>
        </section>
    );
}

export default HeroSection;