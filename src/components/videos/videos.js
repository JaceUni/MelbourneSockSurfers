import React from 'react';
import './videos.css';

function Videos() {
  return (
    <section class="sectionWhite">
        <a id="vid" class="anchor"></a>
        <div class="small-line"></div>
        <div class="sectionheading">LATEST VIDEOS</div>
        <div class="video-container">
            <div class="video-wrapper">
                <video class="video" controls>
                    <source src="../../assets/videos/MelbourneSockSurfers.mp4" type="video/mp4" />
                </video>
            </div>
            <div class="video-wrapper">
                <video class="video" controls>
                    <source src="../../assets/videos/SockSliding.mp4" type="video/mp4" />
                </video>
            </div>
            <div class="video-wrapper">
                    <iframe class="video" src="https://www.youtube.com/embed/njv-lHx0C-E?start=4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="video-wrapper">
                    <iframe class="video" src="https://www.youtube.com/embed/hIeU6a9YBxM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </section>
);
}

export default Videos;
