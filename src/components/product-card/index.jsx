import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledProductCard } from "../../styles/styled-components/product-card";
import { MainButton } from "../../styles/styled-components/buttons";

/* eslint-disable react/prop-types */

function ProductCard({ image, alt, title, course, description, github, live }) {
  return (
    <StyledProductCard>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p>{course}</p>
        <Card.Img variant="top" src={image} alt={alt} className="mb-3" />
        <div>
          <p>{description}</p>
        </div>
        <Link to={github} target="_blank">
          <MainButton>Github</MainButton>
        </Link>
        <Link to={live} target="_blank">
          <MainButton>Live site</MainButton>
        </Link>
      </Card.Body>
    </StyledProductCard>
  );
}

export { ProductCard };
