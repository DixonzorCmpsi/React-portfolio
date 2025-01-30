import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/oldport.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Some of the projects i've worked on so far.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Mini-computer store"
              description="In this project, I designed a mini computer store database management system, which consists of a
various different schemas. The system stores products and brands, manages supplier relationships, and allows products to be linked
to suppliers. It includes tables for users with defined admin roles and secure authentication and more."
              ghLink="https://github.com/DixonzorCmpsi/Database-management-system"
              demoLink="https://github.com/DixonzorCmpsi/Database-management-system"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="old portfolio website"
              description="My old personal website"
              ghLink="https://github.com/DixonzorCmpsi/Portfolio-Website/blob/main/index.html"
              demoLink="https://raw.githack.com/DixonzorCmpsi/Portfolio-Website/main/index.html"
            />
          </Col>

          <Col md={4} className="Eye Tracker Data Analysis">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="This notebook is for the analysis of pupil data, focusing on high-confidence data (confidence > 0.9) to ensure accurate and reliable results. The analysis includes fixation detection, pupil movement trends, and various fixation visualizations."
              ghLink="https://github.com/DixonzorCmpsi/Data-Analysis-eyetracker/blob/main/pupil_data_analysis_ThiccLab.ipynb"
              demoLink="https://github.com/DixonzorCmpsi/Data-Analysis-eyetracker/blob/main/pupil_data_analysis_ThiccLab.ipynb"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
