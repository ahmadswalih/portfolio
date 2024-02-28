import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://github.com/ahmadswalih/portfolio/blob/master/src/Assets/resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={"mailto:ahmadswalih777@gmail.com"}
            target="_blank"
            style={{
              maxWidth: "250px",
              marginBottom: "300px",
              marginTop: "120px",
            }}
          >
            <AiOutlineDownload />
            &nbsp;Mail Me
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
