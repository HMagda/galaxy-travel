import React from "react";
import styles from "./Footer.module.scss";
import {FaFacebook, FaTwitter, FaYoutube, FaTiktok} from "react-icons/fa";
import {Link} from "react-router-dom";
import SignupForm from "../SignupForm/SignupForm";
import SocialIcon from "../SocialIcon/SocialIcon";
import {initialState} from "../../redux/store";

function toUrlSlug(string) {
  return "/" + encodeURI(string.toLowerCase().trim().replaceAll(" ", "-"));
}

const Footer = () => {
  const subPages = initialState.subPages;

  return (
    <div className={styles.wrapper}>
      <div className={styles.socials_wrapper}>
        <h1>Follow us!</h1>
        <div className={styles.socials_container}>
          <SocialIcon url="https://facebook.com" name="Facebook">
            <FaFacebook className={styles.social_icon} />
          </SocialIcon>

          <SocialIcon url="https://twitter.com" name="Twitter">
            <FaTwitter className={styles.social_icon} />
          </SocialIcon>

          <SocialIcon url="https://youtube.com" name="Youtube">
            <FaYoutube className={styles.social_icon} />
          </SocialIcon>

          <SocialIcon url="https://tiktok.com" name="TikTok">
            <FaTiktok className={styles.social_icon} />
          </SocialIcon>
        </div>
      </div>

      <div className={styles.newsletter_container}>
        <h1>Stay updated!</h1>
        <SignupForm />
      </div>

      <div className={styles.links_wrapper}>
        <h1>Useful links</h1>

        <div className={styles.links_container}>
          {subPages.map((subPage) => (
            <Link to={toUrlSlug(subPage)} key={subPage} className={styles.link}>
              {subPage}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
