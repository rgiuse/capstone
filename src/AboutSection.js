

function AboutSection({title, subtitle, images, children}) {
    return (
        <section className="pageSection about">
            <section>
                <h2>{title}</h2>
            <h3>{subtitle}</h3>
            {children}
            {images && images[0] && <img src={images[0]} alt="First About" />}
            {images && images[1] &&  <img src={images[1]} alt="Second About" />}
            </section>
        </section>


    );

}

export default AboutSection;