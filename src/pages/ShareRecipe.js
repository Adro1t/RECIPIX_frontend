import React from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const ShareRecipe = () => {
  const shareUrl = window.location.href;
  return (
    <>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon />
      </FacebookShareButton>
      <FacebookMessengerShareButton url={shareUrl}>
        <FacebookMessengerIcon />
      </FacebookMessengerShareButton>
      <EmailShareButton url={shareUrl}>
        <EmailIcon />
      </EmailShareButton>

      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon />
      </WhatsappShareButton>
      <TwitterShareButton url={shareUrl}>
        <TwitterIcon />
      </TwitterShareButton>
    </>
  );
};

export default ShareRecipe;
