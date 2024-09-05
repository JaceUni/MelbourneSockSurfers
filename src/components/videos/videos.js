import React from 'react';
import './videos.css';

function Videos() {
  return (
    <section className="sectionWhite">
        <a id="vid" className="anchor"></a>
        <div className="small-line"></div>
        <div className="sectionheading">LATEST VIDEOS</div>
        <div className="video-container">
            <div className="video-wrapper">
                <video className="video" controls>
                    <source src="../../../assets/videos/MelbourneSockSurfers.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="video-wrapper">
                <video className="video" controls>
                    <source src="../../../assets/videos/SockSliding.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="video-wrapper">
                    <iframe className="video" title="Sock Sliding Video" src="https://www.youtube.com/embed/njv-lHx0C-E?start=4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="video-wrapper">
                    <iframe className="video" title="Sock Sliding Video" src="https://www.youtube.com/embed/hIeU6a9YBxM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    </section>
  );
}

export default Videos;
