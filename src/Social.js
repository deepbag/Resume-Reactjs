import React from 'react';

function Social() {
    return( 
    <>
        <div className="mt-4 p-2">
          <h4 className="pt-2">Social Network</h4>
          <hr />
          <a href="https://www.facebook.com/deep.bagh.509/" style={{color: '#3a5794'}} className="px-2 fa-2x"><i class="fab fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/er.deepbag/"  style={{color: '#ec602d'}} className="px-2 fa-2x"><i class="fab fa-instagram"></i></a>
          <a href="https://twitter.com/erdeepbag" style={{color: '#1c9cea'}} className="px-2 fa-2x"><i class="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/deep-bag-360764170/" style={{color: '#0e72a3'}} className="px-2 fa-2x"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/deepbag" style={{color: '#211F1F'}} className="px-2 fa-2x"><i class="fab fa-github"></i></a>
          <a href="https://www.youtube.com/channel/UC0TtPJV3yoejv_8CJuHKAQg?view_as=subscriber" style={{color: '#FF0000'}} className="px-2 fa-2x"><i class="fab fa-youtube"></i></a>
          <a href="tel:+919893993028" style={{color: '#42b537'}} className="px-2 fa-2x"><i class="fas fa-phone-volume"></i></a>
          <a href="mailto:deepbag92@gmail.com" style={{color: '#d4473a'}} className="px-2 fa-2x"><i class="fas fa-envelope"></i></a>
        </div>
    </>
    )
}

export default Social;