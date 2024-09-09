import React, { useState } from 'react';
import './newsletter.css';

function Newsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false);      // useState hook to track whether the user has subscribed or not

  const handleSubmit = (event) => {     // handleSubmit is an arrow function that takes 'event' from the form submission and prevents the default behavior using the row below.
    event.preventDefault();     // Prevent the usual action of submitting the form (so now the page won't automatically refresh)...
    setIsSubscribed(true);      // ... and instead just show the "Thanks for subscribing" message.
  };

  return (
    <section className="sectionGrey">
        <a id="newsletter" className="anchor"></a>
        <div className="small-line"></div>
        <div className="sectionheading">NEWSLETTER</div>
        <div className="newsletter">
            {isSubscribed ? (       // If user is subscribed then show thanks text ...
                <div>Thanks for subscribing!</div>
            ) : (       // ... otherwise show the form.
                <>      {/* "React fragment", like a <div> but not a <div>. Can be used to open and close a section, but <> adds no additional code to the HTML. */}
                    Would you like to stay updated with the latest events and news?<br />
                    Sign up to the <i>Melbourne Sock Surfers</i> newsletter here!<br />
                    <form onSubmit={handleSubmit}><br />
                    <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <tr>
                            <td valign="middle" style={{ lineHeight: "1.4rem", padding: "0.3rem" }}>
                                Name:<br />
                                Email:
                            </td>
                            <td valign="top" style={{ padding: "0.3rem" }}>
                                <input type="text" name="name" width="30" required /><br />
                                <input type="email" name="email" width="30" required /><br />
                            </td>
                            <td valign="middle" style={{ padding: "0.3rem" }}>
                                <button type="submit">Submit</button>
                            </td>
                        </tr>
                    </table>
                    </form>
                </>
            )}
        </div>
    </section>
  );
}

export default Newsletter;
