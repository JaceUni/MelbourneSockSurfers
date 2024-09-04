import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';

function PhotoGallery() {
    return (
        <section className="sectionWhite">
            <a id="carousel" className="anchor"></a>
            <div className="small-line"></div>
            <div className="sectionheading">PHOTO GALLERY</div>
            <div className="carouselGallery">
                <div className="carouselSlide">
                    <Carousel 
                        autoPlay            // Enables automatic scrolling
                        interval={4000}     // Sets the interval time (measured in milliseconds)
                        infiniteLoop        // Enables infinite looping of the carousel
                        showThumbs={false}  // Hides the thumbnail navigation (optional)
                        showStatus={false}  // Hides the status indicators (optional)
                    >
                        <div className="carouselItem">
                            <img src="../../assets/images/carousel1.jpg" className="carousel-image" alt="Sliding at the international championships" />
                            <figcaption>Sliding at the international championships</figcaption>
                        </div>
                        <div className="carouselItem">
                            <img src="../../assets/images/carousel2.jpg" className="carousel-image" alt="The 2024 championship team" />
                            <figcaption>The 2024 championship team</figcaption>
                        </div>
                        <div className="carouselItem">
                            <img src="../../assets/images/carousel3.jpg" alt="Getting ready to slide" />
                            <figcaption>Getting ready to slide</figcaption>
                        </div>
                        <div className="carouselItem">
                            <img src="../../assets/images/carousel4.jpg" alt="The first sliding team, dated 1856" />
                            <figcaption>The first sliding team, dated 1856</figcaption>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default PhotoGallery;
