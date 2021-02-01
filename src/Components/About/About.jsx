import React from 'react';
import './About.css';

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Vad är vårat mål som företag?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <p>
            Det vi som företag vill åstadkomma är en simpel och användarvänlig onlinebutik där du som privatkund kan handla av andra människor, en av våra främsta styrkor är att annonser inte har något pris utan det är helt gratis att använda våran tjänst!            </p>
          </div>
          <div className="title">
            <h3>Hur använder du våran tjänst?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">Användning</h4>
            <p>
            Du använder våran hemsida via annons knappen som finns högst upp eller i menyn, du kan även maila bilder till den angivna mailadressen längst ner på hemsidan.
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Fördelar med våran tjänst</h4>
            <p>
            Du stödjer också en del fördelar när du handlar hos oss, till exempel, bra för miljön, COVID-19 vänligt, gratis annonsering.            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
