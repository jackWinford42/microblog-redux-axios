import React from "react";
import {
  Card, CardBody
} from 'reactstrap';
import {
  Link
} from "react-router-dom";

export default function PostCard({id, title, description}) {
  return (
    <Link to={`/${id}`}>
      <Card>
        <CardBody>
          <h3>{title}</h3>
          <span>{description}</span>
        </CardBody>
      </Card>
    </Link>
  )
} 