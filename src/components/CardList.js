import React from 'react';
import Card from './Card';

const CardList = (props) => {
  const { robots } = props;

  return (
    <div>
      {robots.map((robot) => {
        return <Card key={robot.id} id={robot.id} robot={robot} />;
      })}
    </div>
  );
};

export default CardList;
