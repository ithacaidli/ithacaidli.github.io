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
          We are a group of 4 seniors at Cornell who have all grown up on 
          South Indian Cuisine. We are passionate and dedicated to bringing the 
          authentic taste of South Indian cuisine to Ithaca. Our
          shared love for food and community led to the creation of Ithaca Idli!
        </p>
      </div>
    </section>

    <section className="about-us-section">
      <h1>Why We Started</h1>
      <p>
        Growing up in South Asian Households and coming to Cornell, we noticed
        a lack of South Indian cuisine throughout Ithaca. Yet, there was still
        a large demand. We decided to take matters into our own hand and provide
        the greater Cornell community with authentic South Indian cuisine in the 
        form of Idli!
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
