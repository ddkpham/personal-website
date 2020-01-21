import React from 'react';

import VideoBackground from '../../components/video-background';
import mountainPic from '../../static/mountain.jpg';
import firePic from '../../static/bonfire.jpg';
import './index.scss';
function About(props) {
  const { isMobile } = props;

  return (
    <>
      <section className={`about-view__content`} id="about">
        <div className={`about-view__info`}>
          <div className={`about-view__info--picture`}>
            <img src={mountainPic} alt="cool picture" />
          </div>
          <div className={`about-view__info--description`}>
            <div className="subtitle">
              <h1>A few fun facts about myself.</h1>
            </div>
            <div className="info">
              <p>
                {' '}
                I’m a developer from Vancouver, BC. Soul music and podcasts make
                up about 45% of my personality on a bad day. In my spare time,
                if I’m not learning about a new technology or a new song to
                stumble through, I’m hanging out with my dog, Nala. I wouldn’t
                say I’m obsessed with sushi, but people in my life would.
              </p>
            </div>
          </div>
        </div>
        <div className={`about-view__info`}>
          <div
            className={`about-view__info--description ${
              isMobile ? 'reorder' : ''
            }`}
          >
            <div className="subtitle">
              <h1>More fun facts. That's what you're here for right?</h1>
            </div>
            <div className="info">
              <p>
                {' '}
                Before I really sunk my teeth into technology, I was a health
                science geek. I loved any fun fact that I could find about the
                biological sciences and hearing about the puzzles being solved
                in that space. I still hold that spirit and love to this day,
                gravitating towards those problems when I can. I’ve even worked
                at a couple genome research and sequencing centers.
              </p>
            </div>
          </div>
          <div
            className={`about-view__info--picture ${
              isMobile ? 'reorder2' : ''
            }`}
          >
            <img src={firePic} alt="cool picture" width="100%" height="100%" />
          </div>
        </div>
      </section>
      <div className={`about-view__header`}>
        {!isMobile ? (
          <>
            <VideoBackground path="/autumn.mp4" />
            <div className="title-display">
              <h1>Calming image.</h1>
              <h1>A reminder to take life less seriously.</h1>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default About;
