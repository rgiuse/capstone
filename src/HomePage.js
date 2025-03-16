import HeroSection from './HeroSection';
import HighligthtsSection from './HighligthtsSection';
import TestimonialsSection from './TestimonialsSection';
import AboutSection from './AboutSection';
import MenuCard from './MenuCard';

import imageSpecial from './assets/restauranfood.jpg'


import greekSalad from './assets/greek salad.jpg'
import lemonDessert from './assets/lemon dessert.jpg'
import bruschetta from './assets/bruschetta.jpg'


import chefA from './assets/Mario and Adrian A.jpg'
import chefB from './assets/restaurant chef B.jpg'
function HomePage() {
    const images = [chefA, chefB]
    return (
        <>

            <HeroSection title="Little Lemon" subtitle="Chicago" image={imageSpecial} >
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
            </HeroSection>
            <HighligthtsSection title="This weeks specials!">
                <MenuCard title="Greek Salad" price="$ 12.99" image={greekSalad} >
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                </MenuCard>
                <MenuCard title="Bruschetta" price="$ 5.99" image={bruschetta} >
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                </MenuCard>
                <MenuCard title="Lemon Dessert" price="$ 5.00" image={lemonDessert} >
                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                </MenuCard>
            </HighligthtsSection>
            <TestimonialsSection title="What do our customers think?" />
            <AboutSection title="Little Lemon" subtitle="Chicago" images={images}>
                <p>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
                </p>
            </AboutSection>
        </>
    );

}
export default HomePage;