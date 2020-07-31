import genePic from '../../static/dna.jpg';
import compilerPic from '../../static/translation_lady.jpg';
import seriousPepper from '../../static/serious-pepper.jpg';
import runwayPepper from '../../static/pepper-touch.jpg';
import gym from '../../static/gym.jpg';
import productive from '../../static/productive.jpg';
import compress from '../../static/compress.jpg';
import lucidImage from '../../static/lucid_image.jpg';
import dhyanaImage from '../../static/dhyana.jpg';
import proteinImage from '../../static/protein.jpg';
import wsbImage from '../../static/wallstreet.jpg';
import covidImage from '../../static/covid.jpg';

const projects = [
  {
    title: 'PikaCompiler',
    subtitle: 'Java, JUnit',
    picture: compilerPic,
    link: 'https://github.com/ddkpham/pikaCompiler',
  },
  {
    title: 'Lucid Images',
    subtitle: 'Golang, React, Python, RabbitMQ',
    picture: lucidImage,
    link: 'https://github.com/ddkpham/polyglot-image-processor',
  },
  {
    title: 'Dhyana',
    subtitle: 'React, Node, Sequelize, Docker',
    picture: dhyanaImage,
    link: 'https://github.com/ddkpham/dhyana',
  },
  {
    title: 'Protein Visualizer',
    subtitle: 'React, D3',
    picture: proteinImage,
    link: 'https://github.com/ddkpham/protein-visualizer',
  },
  {
    title: 'Stock Prediction',
    subtitle: 'TensorFlow 2, Python, GloVe',
    picture: wsbImage,
    link: 'https://github.com/alik604/CMPT-419L',
  },
  {
    title: 'Covid Dash',
    subtitle: 'Preact, ChartJS',
    picture: covidImage,
    link: 'https://github.com/ddkpham/preact-covid-dash',
  },
  {
    title: 'GraphKB',
    subtitle: 'React, ag-Grid, D3, MUI',
    picture: genePic,
    link: 'temp',
  },
  {
    title: 'Telepresence',
    subtitle: 'Python, Dialog, Javascript, Andriod',
    picture: seriousPepper,
    link: 'https://github.com/ddkpham/Telepresence',
  },
  {
    title: 'Compression Visualizer',
    subtitle: 'React, Python, Bootstrap, Flask',
    picture: compress,
    link: 'https://ddkpham.github.io/multimedia_website/#/huffman',
  },
  {
    title: 'Affective Computing',
    subtitle: 'Python, Dialog, Javascript, C++',
    picture: runwayPepper,
    link: 'temp',
  },
  {
    title: 'FitTrkr',
    subtitle: 'Python, Flask, SQL, Bootstrap',
    picture: gym,
    link: 'https://github.com/ddkpham/FitTrkr',
  },
  {
    title: 'Boost',
    subtitle: 'Python, Tkinter',
    picture: productive,
    link: 'https://github.com/ddkpham/productivity_booster',
  },
];

export default projects;
