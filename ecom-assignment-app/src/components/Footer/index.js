import React from "react";

function Footer() {
    return (
      <footer className="bg-dark text-info">
        <p className="mt-2">Follow us:</p>
        <p>
            <a className="btn-sm btn-light mr-2 text-decoration-none" href="https://www.facebook.com" >FB</a>
            <a className="btn-sm btn-light mr-2 text-decoration-none" href="https://www.twitter.com" >TW</a>
            <a className="btn-sm btn-light mr-2 text-decoration-none" href="https://www.instagram.com" >IG</a>
        </p>
        <p>&copy;2024 eCOM Ltd</p>
      </footer>
    );
  }
  
  export default Footer;