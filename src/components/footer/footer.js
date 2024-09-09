import React, { useState } from 'react';
import './footer.css';

function Footer({ userClicked }) {
  return (
    <>
      <footer>
        <ul className="ulfooter">
          <li className="lifooter">
            <a href="javascript:void(0);" onClick={(event) => userClicked(event, 'terms')}>TERMS OF USE</a>     {/* Event Listener 'onClick' with name 'event' */}
          </li>
          <li className="lifooter">
            <a href="javascript:void(0);" onClick={(event) => userClicked(event, 'privacy')}>PRIVACY</a>
          </li>
          <li className="lifooter">
            <a href="javascript:void(0);" onClick={(event) => userClicked(event, 'careers')}>CAREERS</a>
          </li>
          <li className="lifooter">
            <a href="javascript:void(0);" onClick={(event) => userClicked(event, 'contact')}>CONTACT US</a>
          </li>
        </ul>
        <div className="copyright">Copyright © 2024 Melbourne Sock Surfers</div>
      </footer>

      <section id="terms">
        <p><strong>Terms of Use</strong></p>
        <p>By accessing or using the Melbourne Sock Surfers website, you agree to the following terms:</p>
        <p>All content is provided for informational and entertainment purposes. Unauthorized use of any materials, including copying or distribution, is prohibited.</p>
        <p>This website may contain links to external sites. We are not responsible for the content or practices of those sites.</p>
        <p>We reserve the right to modify these terms at any time without prior notice. Continued use of the site indicates your acceptance of any changes.</p>
        <p>Thank you for visiting the Melbourne Sock Surfers website.</p>
      </section>
      
      <section id="privacy">
        <p><strong>Privacy Policy</strong></p>
        <p>Your privacy is important to us. This policy outlines how we collect, use, and protect your information.</p>
        <p>We may collect personal information such as names and email addresses when you interact with the site. This information is used solely for communication purposes and is not shared with third parties.</p>
        <p>Cookies may be used to enhance your browsing experience. You can disable cookies through your browser settings.</p>
        <p>We take reasonable measures to protect your data, but cannot guarantee absolute security. By using this site, you acknowledge and accept this risk.</p>
        <p>We reserve the right to update this policy at any time. Continued use of the site indicates your acceptance of any changes.</p>
        <p>If you have any questions about this policy, please contact us.</p>
      </section>
      
      <section id="careers">
        <p><strong>Jobs & Careers</strong></p>
        <p>At Melbourne Sock Surfers, we're always looking for passionate and creative individuals to join our team. Whether you're an expert in sliding techniques or digital content creation, we'd love to hear from you.</p>
        <p>Current Opportunities:</p>
        <p><strong>1. Slide Coach</strong><br />Develop training programs to help our athletes perfect their sliding form and increase their distance. Experience in coaching or athletic training preferred.</p>
        <p><strong>2. Social Media Manager</strong><br />Create and manage content for our social media platforms to engage with our fans and build our online community. Strong communication skills required.</p>
        <p>If you're interested in joining the Melbourne Sock Surfers team, please contact us!</p>
      </section>
      
      <section id="contact" style={{ display: "none", maxWidth: "90%" }}>
        <p><strong>Contact Us</strong></p>
        <p>If you would like to contact us, please use the form below.</p>
        <form action="javascript:void(0);">
          <table style={{ width: "80%" }}>
            <tr>
              <td valign="top" style={{ lineHeight: "1.4rem" }}>
                Name:<br />
                Email:<br />
                Message:<br />
              </td>
              <td valign="top">
                <input type="text" name="name" style={{ width: "15rem" }} required /><br />
                <input type="email" name="email" style={{ width: "15rem" }} required /><br />
                <textarea rows="4" cols="50" name="message" required></textarea><br />
                <button type="submit">Send</button>
              </td>
            </tr>
          </table>
        </form>
      </section>
    </>
  );
}

// HOC for the popup dialogs!
function withPopup(DialogPopup) {
  return function Popup(props) {
    const [showPopup, setShowPopup] = useState(false);    // useState hook to control the visibility of the popup.
    const [popupContent, setPopupContent] = useState('');   // useState hook to store the content shown in the popup.

    const userClicked = (event, contentId) => {   // Define what happens when the user clicks one of the associated links.
      event.preventDefault();     // Stop the page from scrolling to the top when the <a> link is pressed.
      const contentHtml = document.getElementById(contentId).innerHTML;     // Get the content of the specific contentId.
      setPopupContent(contentHtml);     // Create the content for the popup.
      setShowPopup(true);       // Show the popup.
    };

    const closePopup = () => {
      setShowPopup(false);    // Update state to hide popup.
      setPopupContent('');    // Clear the content of the popup.
    };

    return (
      <>
        <DialogPopup userClicked={userClicked} {...props} />   {/* Pass userClicked function and props into DialogPopup component */}
        {showPopup && (
          <div id="popupOverlay" className="Overlay" style={{ display: 'flex' }}>
            <div className="popupContent">
              <div dangerouslySetInnerHTML={{ __html: popupContent }}></div>    {/* Insert the popup dialog code into the DOM when associated <a> is clicked */}
              <button id="closeButton" onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </>
    );
  };
}

export default withPopup(Footer);
