import React from "react";
import Title from "./Title";
import team from "../constants/team";
const Team = () => {
  return (
    <section className="section" max-width="1000px">
      <Title title="Our team" />
      <div className="underline"></div>
      <div className="section-center services-center">
        {team.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article key={id} className="service">
              {icon}
              <p>{text}</p>
              <h5>{title}</h5>
              {/* <div className="underline"></div> */}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
