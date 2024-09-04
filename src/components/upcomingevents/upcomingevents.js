import React from 'react';
import './upcomingevents.css';

function UpcomingEvents() {
  return (
    <section class="sectionGrey smallPadding1">
        <div class="small-line"></div>
        <div class="sectionheading">UPCOMING EVENTS</div>
        <a id="upcoming" class="anchor"></a>
        <div class="upcoming">
            <span class="date">14 Sep 2024 at 10:00am</span><br />
            Melbourne Sock Surfers<br />
            vs<br />
            Gold Coast Rockets<br />
            <span class="date"><br />Gold Coast Sports & Leisure Centre</span>
        </div>
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7045.332731860604!2d153.36111885207117!3d-28.004102149175022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b911a91a5445ef7%3A0x6f7feb38414d9f16!2sGold%20Coast%20Sports%20and%20Leisure%20Centre!5e0!3m2!1sen!2sau!4v1722941724490!5m2!1sen!2sau" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
);
}

export default UpcomingEvents;
