import React, { Component } from "react";
import { FaFacebook, FaGooglePlus } from "react-icons/fa";
import Title from "../components/Title";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contact-info">
          <article className="reservation">
            <Title title="Rezervace" />
            <p>volejte</p>
            <h4>
              <a href="tel://+420773977006">(+420) 773 977 006</a>
            </h4>
            <span>
              <a
                href="https://www.facebook.com/MrL%C3%AA-Restaurace-112500186825893/"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.google.com/maps/uv?hl=vi&pb=!1s0x476d55c09a710c37%3A0x7a7a5456944142e3!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNQp1AJLhW8Y0r2zscS0cs6e4LUdUEixduH33KJ%3Dw284-h160-k-no!5smr%20le%20znojmo%20-%20T%C3%ACm%20v%E1%BB%9Bi%20Google!15sCAQ&imagekey=!1e10!2sAF1QipNQp1AJLhW8Y0r2zscS0cs6e4LUdUEixduH33KJ&sa=X&ved=2ahUKEwj-zpfr55DoAhUUHMAKHXMmDqwQoiowCnoECBcQBg"
                target="_blank"
              >
                <FaGooglePlus />
              </a>
            </span>
          </article>
          <article className="address">
            <Title title="Adresa" />
            <p>mr.le restaurace</p>
            <p>dr. m. horákové 862/13, 669 02 znojmo</p>
          </article>
          <article className="openning">
            <Title title="Otevírací doba" />
            <p>Otevřeno denně včetně svátků</p>
            <h4>10:00 - 22:00</h4>
          </article>
        </div>
      </section>

      <div className="mapy-cz">
        <iframe src="https://en.frame.mapy.cz/s/namejudeba"></iframe>
      </div>
    </>
  );
};

export default Contact;
