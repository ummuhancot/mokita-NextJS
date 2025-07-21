"use client";
import React from "react";
import turkish from "@/helpers/data/turkish-literature.json";
import { Card, Col, Row } from "react-bootstrap";
import Link from "next/link";

const TurkishLiterature = () => {
  return (
    <Row xs={1} /* sm={2} */ md={2} lg={4} className="g-4" style={{display:"flex",
      flexDirection:"row",
      alignItems:"center"
    }}>
      {turkish.map((book) => (
        <Col key={book.id}>
          <Link
            href={`/turkish-literature/${book.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={book.img}
                alt={book.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {book.writer}
                </Card.Subtitle>
                <Card.Text style={{ fontSize: "0.9rem" }}>
                  {book.text.substring(0, 100)}...
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default TurkishLiterature;
