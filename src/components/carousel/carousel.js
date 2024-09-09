import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';

/* Create 4 variables that each hold URL of carousel image */
import carousel1 from '../../assets/images/carousel1.jpg';
import carousel2 from '../../assets/images/carousel2.jpg';
import carousel3 from '../../assets/images/carousel3.jpg';
import carousel4 from '../../assets/images/carousel4.jpg';

function PhotoGallery() {
    return (
        <section className="sectionWhite">
            <a id="carousel" className="anchor"></a>
            <div className="small-line"></div>
            <div className="sectionheading">PHOTO GALLERY</div>
            <div className="carouselGallery">
                <div className="carouselSlide">
                    <Carousel 
                        autoPlay            // Automatically skip to next image
                        interval={4000}     // How long to show each image before changing to next image (in milliseconds)
                        infiniteLoop        // Enables infinite looping of the carousel
                        showThumbs={false}  // Show the thumbnails below the carousel
                        showStatus={false}  // Show photo number (eg, 3 of 4)
                    >
                        <div className="carouselItem">
                            <img src={carousel1} className="carousel-image" alt="Sliding at the international championships" />     {/* Use {carousel1} variable for URL */}
                            <figcaption>Sliding at the international championships</figcaption>
                        </div>
                        <div className="carouselItem">
                            <img src={carousel2} className="carousel-image" alt="The 2024 championship team" />     {/* Same as above */}
                            <figcaption>The 2024 championship team</figcaption>
                        </div>
                        <div className="carouselItem">
                            <img src={carousel3} className="carousel-image" alt="Getting ready to slide" />     {/* Same as above */}
                            <figcaption>Getting ready to slide</figcaption>
                        </div>
                        <div className="carouselItem">
                            <img src={carousel4} className="carousel-image" alt="The first sliding team, dated 1856" />     {/* Same as above */}
                            <figcaption>The first sliding team, dated 1856</figcaption>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default PhotoGallery;
