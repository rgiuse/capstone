
import AboutSection from './sections/AboutSection';


import chefA from '../assets/Mario and Adrian A.jpg'
import chefB from '../assets/restaurant chef B.jpg'
function AboutPage() {
    const images = [chefA, chefB]
    return (
        <>
            <AboutSection title="Little Lemon" subtitle="Chicago" images={images}>
                <p data-testid="about-page-test-id">
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
                </p>
            </AboutSection>
        </>
    );

}
export default AboutPage;