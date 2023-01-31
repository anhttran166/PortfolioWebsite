import React from 'react';

import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsPaperclip } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div style={{alignItems: "center"}}>
    
      <a href="https://www.linkedin.com/in/anhthitramtran/">
      <BsLinkedin />
      </a>
    </div>
    <div style={{alignItems: "center"}}>
      <a href="https://github.com/anhttran166">
      <FaGithub />
      </a>
    </div>
    <div style={{alignItems: "center"}}>
      <a href="https://github.com/anhttran166/RESUME/blob/main/ANH_THI_TRAM_TRAN.pdf">
      <BsPaperclip />
      </a>
    </div>
  </div>
);

export default SocialMedia;