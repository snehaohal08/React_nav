import React, { useEffect } from "react";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
    // Initialize AOS animations
    useEffect(() => {
        Aos.init({ duration: 2000 }); // Animation duration is 2000ms
    }, []);

    return (
        <>
            <div className="home">
                <div data-aos="flip-up">
                    <h1>Hii Sneha</h1>
                </div>
                <div  data-aos="slide-left">
                    <h1>welcome to react js</h1>
                </div>
            {/* <div data-aos="slide-right" className="image-container">
                <img src="net1.jpg" alt="Beautiful Scenery"  width="60%" height="40%" />
            </div> */}
            </div>
        </>
    );
}

export default Home;
