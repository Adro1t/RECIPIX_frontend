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
import "./ShareRecipe.css";

const ShareRecipe = () => {
  const shareUrl = window.location.href;
  return (
    <>
    <div className="d-flex gap-3">
      <FacebookShareButton  url={shareUrl}>
        <FacebookIcon className="share shadow" />
      </FacebookShareButton>
      <FacebookMessengerShareButton url={shareUrl}>
        <FacebookMessengerIcon className="share shadow" />
      </FacebookMessengerShareButton>
      <EmailShareButton url={shareUrl}>
        <EmailIcon className="share shadow" />
      </EmailShareButton>

      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon className="share shadow" />
      </WhatsappShareButton>
      <TwitterShareButton  url={shareUrl}>
        <TwitterIcon className="share shadow"/>
      </TwitterShareButton>
    </div>
    </>
  );
};

export default ShareRecipe;
