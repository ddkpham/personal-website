import React from 'react';

import './index.scss';

function EducationView() {
  return (
    <div className="education-view__content">
      <div className="education-view__content--title">
        <h1>Education</h1>
      </div>
      <div className="education-view__content--info">
        <div className="education-info">
          <div className="education-info__ubc">
            <h1>University of British Columbia</h1>
            <h2>Bachelors of Science (2011-2015)</h2>
            <h3>Microbiology and Immunology</h3>
            <p>
              Course work in Genetics, Virology, Immunology, Industrial
              Microbiology, Bacterial Pathogenesis, Microbial Ecology, Organic
              Chemisty, Physical Chemistry, Physics
            </p>
          </div>
          <div className="education-info__sfu">
            <h1>Simon Fraser University</h1>
            <h2>Bachelors of Computer Science (2017-2020)</h2>
            <p>
              Course work in Software Engineering, Software Development Methods,
              Compiler Design, Machine Learning, Cloud architecture, Parallel
              and concurrent programming, Web Development, Artificial
              Intelligence, Bioinformatics, Operating Systems, Databases,
              Algorithmic Design and Analysis, Discrete Mathematics, Numerical
              Analysis,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationView;
