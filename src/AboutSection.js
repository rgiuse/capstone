

function AboutSection({ title, subtitle, images, children }) {
    return (
        <section className="pageSection about">
            <section className="about-box">
                <div className="content">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                {children}
                </div>
                {images && images[0] && <img className="first-chef" src={images[0]} alt="First About" />}
                {images && images[1] && <img className="second-chef" src={images[1]} alt="Second About" />}
            </section>
        </section>


    );

}

export default AboutSection;