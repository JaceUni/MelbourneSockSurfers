import React from 'react';
import './newsletter.css';

function Newsletter() {
  return (
    <section className="sectionGrey">
        <a id="newsletter" className="anchor"></a>
        <div className="small-line"></div>
        <div className="sectionheading">NEWSLETTER</div>
        <div className="newsletter">
            Would you like to stay updated with the latest events and news?<br />
            Sign up to the <i>Melbourne Sock Surfers</i> newsletter here!<br />
            <form action="javascript:void(0);"><br />
            <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                <tr>
                    <td valign="middle" style={{ lineHeight: "1.4rem", padding: "0.3rem" }}>
                        Name:<br />
                        Email:
                    </td>
                    <td valign="top" style={{ padding: "0.3rem" }}>
                        <input type="text" name="name" width="30" required /><br />
                        <input type="text" name="email" width="30" required /><br />
                    </td>
                    <td valign="middle" style={{ padding: "0.3rem" }}>
                        <button type="submit">Submit</button>
                    </td>
                </tr>
            </table>
            </form>
        </div>
    </section>
  );
}

export default Newsletter;
