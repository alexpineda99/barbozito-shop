import React from 'react';
import  ReactDOM  from  'react-dom';
import {SocialMediaIconsReact} from 'social-media-icons-react';

function Footer() {

  const Ig = <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="icon" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="29" />;
  const Fb = <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="icon" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="29" />;
  const Tw = <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="icon" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="29" />;

    return (
      <div className="main-footer">
        <div className="footer-container">
          <div className="footer-row-left"> <div>&copy;2022</div> <div> Andres Barboza </div> <div> All Rights Reserved </div> </div>
          <div className="footer-row-center"> <div> Miami, Florida </div><div>  4652 Rinehart Road </div><div> 305-389-1999</div> </div>
          <div className="footer-row-right"> <div> {Fb} {Tw} {Ig} </div> </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  