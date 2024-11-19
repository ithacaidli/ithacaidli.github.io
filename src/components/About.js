import React from "react";

const About = () => (
  <main>
    <section className="about-us-section">
      <h1>Meet the Founders</h1>
      <div className="founders">
        <img
          src={`${process.env.PUBLIC_URL}/founders.JPG`}
          alt="The Founders"
        />
        <p>
          We are a group of four passionate food enthusiasts dedicated to
          bringing the authentic taste of South Indian cuisine to Ithaca. Our
          shared love for food and community led to the creation of Ithaca Idli,
          where we celebrate tradition, quality, and inclusivity.
        </p>
      </div>
    </section>

    <section className="about-us-section">
      <h1>Why We Started</h1>
      <p>
        Our mission is to provide the Ithaca community with a taste of home and
        authenticity. We started Ithaca Idli to share the joy of South Indian
        cuisine with everyone while preserving its rich culinary heritage.
      </p>
      <img
        className="idli"
        src={`${process.env.PUBLIC_URL}/idli.jpg`}
        alt="Delicious Idlis"
      />
    </section>

    <section className="about-us-section">
      <h1>Philanthropic Efforts</h1>
      <p>
        At Ithaca Idli, we believe in giving back. A portion of our profits goes
        towards supporting local food banks and educational initiatives in
        underserved communities. Together, we aim to create a meaningful impact
        and foster a culture of sharing and inclusivity.
      </p>
    </section>
  </main>
);

export default About;
