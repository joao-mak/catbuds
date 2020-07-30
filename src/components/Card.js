import React from 'react';

const Card = (props) => {
  const {
    id,
    robot: { name, email },
  } = props;
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="robot"
        src={`https://robohash.org/${id}?set=set4`}
        width="200px"
        height="200px"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
