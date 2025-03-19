import TestimonialCard from "../../components/TestimonialCard";

import carloPic from '../../assets/testimonial-1.jpg'
import anitaPic from '../../assets/testimonial-2.png'
import francescaPic from '../../assets/testimonial-3.jpg'
import violaPic from '../../assets/testimonial-4.png'

function TestimonialsSection({ title, numTestimonial }) {
    return (
        <section className="pageSection testimonials">
            <section>
                <h2>
                    {title}
                </h2>
                <div className="cards">
                    <TestimonialCard name="Viola" image={violaPic} rating={5}>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia soluta minima veritatis rerum, beatae, quo, quod exercitationem itaque totam esse laudantium? Sapiente neque vel, corporis et est non repudiandae suscipit?
                        </p>
                    </TestimonialCard>
                    <TestimonialCard name="Carlo" image={carloPic} rating={5}>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia soluta minima veritatis rerum, beatae, quo, quod exercitationem itaque totam esse laudantium? Sapiente neque vel, corporis et est non repudiandae suscipit?
                        </p>

                    </TestimonialCard>
                    <TestimonialCard name="Anita" image={anitaPic} rating={5}>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia soluta minima veritatis rerum, beatae, quo, quod exercitationem itaque totam esse laudantium? Sapiente neque vel, corporis et est non repudiandae suscipit?
                        </p>

                    </TestimonialCard>
                    <TestimonialCard name="Francesca" image={francescaPic} rating={5}>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia soluta minima veritatis rerum, beatae, quo, quod exercitationem itaque totam esse laudantium? Sapiente neque vel, corporis et est non repudiandae suscipit?
                        </p>
                    </TestimonialCard>
                </div>
            </section>
        </section>
    );

}
export default TestimonialsSection;