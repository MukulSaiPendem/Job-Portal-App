import React from 'react';
import { Card } from 'react-bootstrap';

function CardComponent(props) {
  return (
    <Card style={{ width: '18rem' }}>
      {props.imageUrl && <Card.Img variant="top" src={props.imageUrl} />} {/* Use props.imageUrl */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;

