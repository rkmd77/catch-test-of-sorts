import facebookIcon from "../../images/social/facebook.svg";
import instagramIcon from "../../images/social/instagram.svg";
import youtubeIcon from "../../images/social/youtube.svg";

function Footer() {
  return (
    <div className="catch-footer">
      <div className="catch-footer-container">
        <div className="social-and-info">
          <div className="social__icons title">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookIcon} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="icon-instagram"
              target="_blank"
              rel="noreferrer"
            >
              {/* the instagram svg I copied from sketch was broken, missing circle border */}
              <img src={instagramIcon} alt="instagram" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img src={youtubeIcon} alt="youtube" />
            </a>
          </div>
          <p className="social_info">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh.
          </p>
        </div>
        <div className="address-details">
          <div className="title">Main Office</div>
          <div>6235 Thalia Terrace Apt. 695</div>
          <div>Frederikfurt</div>
          <div>Jamaica</div>
        </div>
        <div className="contact-details">
          <div className="title">Contact</div>
          <div>735-421-6378</div>
          <div>
            <a
              className="link"
              href="mailto:myname@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              myname@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
