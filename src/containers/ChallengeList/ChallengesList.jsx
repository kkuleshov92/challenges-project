import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ChallengesContext } from "../../ChallengesContext";

import "./ChallengeList.scss";

export const ChallengesList = () => {
  const { challenges } = useContext(ChallengesContext);

  return (
    <main>
      <section className="challenge">
        <h2 className="challenge__title">Challenges</h2>

        <ul className="challenge__list">
          {Object.keys(challenges).map((id) => (
            <li key={id}>
              <Link to={`/challenge/${id}`} className="challenge__item">
                {challenges[id].name}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/new-challenge" className="challenge__btn">
          <b>Create new challenge</b>
        </Link>
      </section>
    </main>
  );
};
