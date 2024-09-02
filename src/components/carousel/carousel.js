import React from 'react';
import './carousel.css';

function Carousel() {
  return (
    <section class="sectionWhite">
        <a id="carousel" class="anchor"></a>
        <div class="small-line"></div>
        <div class="sectionheading">PHOTO GALLERY</div>
        <div class="carousel">
            <div class="carousel-slide">
                <div class="carousel-item">
                    <img src="../../assets/images/carousel1.jpg" class="carousel-image" alt="Sliding at the international championships" />
                    <figcaption>Sliding at the international championships</figcaption>
                </div>
                <div class="carousel-item">
                    <img src="../../assets/images/carousel2.jpg" class="carousel-image" alt="The 2024 championship team" />
                    <figcaption>Our championship team for 2024!</figcaption>
                </div>
                <div class="carousel-item">
                    <img src="../../assets/images/carousel3.jpg" class="carousel-image" alt="Getting ready to slide" />
                    <figcaption>Getting ready to slide!</figcaption>
                </div>
                <div class="carousel-item">
                    <img src="../../assets/images/carousel4.jpg" class="carousel-image" alt="The first sliding team, dated 1856" />
                    <figcaption>The first sliding team in 1856</figcaption>
                </div>
                <div class="carousel-item">
                    <img src="../../assets/images/carousel1.jpg" class="carousel-image" alt="Sliding at the international championships" />
                    <figcaption>Sliding at the international championships</figcaption>
                </div>
            </div>
        </div>
    </section>
);
}

export default Carousel;
