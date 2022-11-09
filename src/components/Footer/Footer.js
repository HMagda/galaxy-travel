import React from "react";
import styles from "./Footer.module.scss";
import {FaFacebook, FaTwitter, FaYoutube, FaTiktok} from "react-icons/fa";
import {Link} from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import SocialIcon from "../SocialIcon/SocialIcon";
import {initialState} from "../../redux/store";

function toUrlSlug(string) {
  return "/" + encodeURI(string.toLowerCase().trim().replaceAll(" ", "-"));
}

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const subPages = initialState.subPages;

  return (
    <div className={styles.wrapper}>
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

      <div className={styles.links_container}>
        <h1>Useful links</h1>

        {subPages.map((subPage) => (
          <Link to={toUrlSlug(subPage)} key={subPage} className={styles.link}>
            {subPage}
          </Link>
        ))}
      </div>

      <div className={styles.newsletter_container}>
        <form onSubmit={handleSubmit}>
          <FormInput name="username" placeholder="Name" value="name" />
          <FormInput name="email" placeholder="Email" value="email" />
          <button className={styles.btn}>subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
