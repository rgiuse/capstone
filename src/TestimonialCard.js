import { FaStar } from "react-icons/fa6";

function TestimonialCard({ name, rating, image, children }) {


    return (
        <article class="review">
            <div>
                {rating >= 1 && <FaStar color="#f4ce14"></FaStar>}
                {rating >= 2 && <FaStar color="#f4ce14"></FaStar>}
                {rating >= 3 && <FaStar color="#f4ce14"></FaStar>}
                {rating >= 4 && <FaStar color="#f4ce14"></FaStar>}
                {rating === 5 && <FaStar color="#f4ce14"></FaStar>}
                {rating < 5 && <FaStar></FaStar>}
                {rating < 4 && <FaStar></FaStar>}
                {rating < 3 && <FaStar></FaStar>}
                {rating < 2 && <FaStar></FaStar>}
                {rating < 1 && <FaStar></FaStar>}
            </div>
            <div className="image-box">

                <img src={image} alt="Testimonial Pic" />

                <div>
                    {name}
                </div>
            </div>

            {children}
        </article>
    );
}

export default TestimonialCard;