import React from "react";
import { BsTwitter, BsLinkedin,BsDownload,BsGithub } from "react-icons/bs";
function Contact() {
   return (
      <div className="app__social">
         <div>
            <a href="https://github.com/codexpression-nj">
                <BsGithub/>
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/jessica-nokwanda-maranjane/">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="https://twitter.com/nokwanda_jm">
               <BsTwitter />
            </a>
         </div>
         <div>
            <a href="">
               <BsDownload />
            </a>
         </div>
        
      </div>
   );
}
export default Contact;