import genePic from '../../static/dna.jpg';
import seriousPepper from '../../static/serious-pepper.jpg';
import runwayPepper from '../../static/pepper-touch.jpg';
import gym from '../../static/gym.jpg';
import productive from '../../static/productive.jpg';
import compress from '../../static/compress.jpg';

const projects = [
  {
    title: 'GraphKB',
    subtitle: 'React, ag-Grid, D3, MUI',
    picture: genePic,
    link: 'temp'
  },
  {
    title: 'Telepresence',
    subtitle: 'Python, Dialog, Javascript, Andriod',
    picture: seriousPepper,
    link: 'https://github.com/ddkpham/Telepresence'
  },
  {
    title: 'Compression Visualizer',
    subtitle: 'React, Python, Bootstrap, Flask',
    picture: compress,
    link: 'https://github.com/ddkpham/multimedia_website'
  },
  {
    title: 'Affective Computing',
    subtitle: 'Python, Dialog, Javascript, C++',
    picture: runwayPepper,
    link: 'temp'
  },
  {
    title: 'FitTrkr',
    subtitle: 'Python, Flask, SQL, Bootstrap',
    picture: gym,
    link: 'https://github.com/ddkpham/FitTrkr'
  },
  {
    title: 'Boost',
    subtitle: 'Python, Tkinter',
    picture: productive,
    link: 'https://github.com/ddkpham/productivity_booster'
  }
];

export default projects;
