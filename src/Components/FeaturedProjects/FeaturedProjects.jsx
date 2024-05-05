import React from 'react';
import { Card } from 'react-bootstrap';
import './FeaturedProjects.css';
import project1 from './media/project1.jpeg';
import project2 from './media/project2.jpeg';
import project3 from './media/project3.jpeg';
import project4 from './media/project4.jpeg';

const FeaturedProjects = () => {
  return (
    <div className="featured-projects">
      <h2 className="projects-title" style={{ marginTop: "10px", fontFamily: 'Roca One', textAlign: 'center' }}>
        Featured Projects
      </h2>
      <div className="project-cards">
        {/* Card 1 */}
        <Card className="project-card">
          <div className="card-image" style={{ backgroundImage: `url(${project1})` }}></div>
          <div className="card-content">
            <h3 className="card-title">MealMinder</h3>
            <p className="card-description">MealMinder is a groundbreaking website that redefines the way individuals approach their nutrition and overall well-being. At its core, it offers a comprehensive, calendar-based meal planner that empowers users to strategically schedule their meals for the week or month ahead.Designed to be intuitive and user-friendly.</p>
            <div className="button-container">
              <a href="https://github.com/oj1o1/MealMinder" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://mealminders.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">Deployment</a>
            </div>
          </div>
        </Card>
        {/* Card 2 */}
        <Card className="project-card">
          <div className="card-image" style={{ backgroundImage: `url(${project3})` }}></div>
          <div className="card-content">
            <h3 className="card-title">BRIEF:Text-Summerizer</h3>
            <p className="card-description">
              This web application offers quick access to summarized content from text or Wikipedia links, enabling users to grasp key information without reading the entire document. Users can input text or links, and the platform utilizes keyword extraction to provide accurate summaries, facilitating efficient information consumption.
            </p>
            <div className="button-container">
              <a href="https://github.com/Zein-Zeus/brief-textsummarizer" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://drive.google.com/file/d/1PyQGQjd1-SlyXxDD4QHLppJHbWYD69hD/view?usp=sharing" target="_blank" rel="noopener noreferrer">Video link</a>
            </div>
          </div>
        </Card>
        {/* Card 3 */}
        <Card className="project-card">
          <div className="card-image" style={{ backgroundImage: `url(${project2})` }}></div>
          <div className="card-content">
            <h3 className="card-title">Breast Cancer Detection</h3>
            <p className="card-description">This project develops a machine learning model for early breast cancer prediction using diverse dataset attributes and preprocessing techniques. The goal is to achieve high accuracy, sensitivity, and specificity to assist healthcare decisions and enhance patient outcomes.</p>
            <div className="button-container">
              <a href="https://github.com/prernads/Hackathon-SpaceSprint" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="deployment_link_2" target="_blank" rel="noopener noreferrer">Deployment</a>
            </div>
          </div>
        </Card>
        {/* Card 4 */}
        <Card className="project-card">
          <div className="card-image" style={{ backgroundImage: `url(${project4})` }}></div>
          <div className="card-content">
            <h3 className="card-title">Aahar</h3>
            <p className="card-description">Aahar is a health and wellness platform offering tools such as a BMI calculator, calorie counter, and personalized dietary recommendations based on individual health metrics and goals. With features like voice journaling and a health bot, users can easily track their progress and receive instant support.</p>
            <div className="button-container">
              <a href="https://github.com/gargiisc/Aahar-Final" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://react-fb-diff-env-ahaar.web.app/" target="_blank" rel="noopener noreferrer">Deployment</a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default FeaturedProjects;
