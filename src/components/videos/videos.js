import React from 'react';
import './videos.css';

import video1 from '../../assets/videos/MelbourneSockSurfers.mp4';      /* Create variable called video1 with URL of video */
import video2 from '../../assets/videos/SockSliding.mp4';               /* And another for video2 */

function Videos() {
  return (
    <section className="sectionWhite">
        <a id="vid" className="anchor"></a>
        <div className="small-line"></div>
        <div className="sectionheading">LATEST VIDEOS</div>
        <div className="video-container">
            <div className="video-wrapper">
                <video className="video" controls>
                    <source src={video1} type="video/mp4" />        {/* Use the variable */}
                </video>
            </div>
            <div className="video-wrapper">
                <video className="video" controls>
                    <source src={video2} type="video/mp4" />
                </video>
            </div>
            <div className="video-wrapper">
                <iframe className="video" title="Sock Sliding Video" src="https://www.youtube.com/embed/njv-lHx0C-E?start=4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="video-wrapper">
                <iframe className="video" title="Sock Sliding Video" src="https://www.youtube.com/embed/hIeU6a9YBxM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    </section>
  );
}

export default Videos;
