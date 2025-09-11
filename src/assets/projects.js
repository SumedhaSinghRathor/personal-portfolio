import portfolio from "../assets/thumbnails/MY PORTFOLIO.png";
import NKD from "../assets/thumbnails/Notes ki Dukaan.png";
import textTospeech from "../assets/thumbnails/Text to Speech GUI.png";
import importSegment from "../assets/thumbnails/Image Segmentation.png";
import weatherApp from "../assets/thumbnails/weather app.png";
import tetris from "../assets/thumbnails/tetris game.png";
import sliding from "../assets/thumbnails/sliding puzzle.png";
import tictactoe from "../assets/thumbnails/tic-tac-toe.png";
import waterSort from "../assets/thumbnails/water sort.png";
import JJ from "../assets/thumbnails/JOURNEY JOYS.png";
import SquidGame from "../assets/thumbnails/squid game.png";
import ResNet from "../assets/thumbnails/Deep_Learning_Powered_ResNet.png";
import CCDashboard from "../assets/thumbnails/Credit Card Complaint Dashboard.png";
import fetchTVshows from "../assets/thumbnails/Fetch TV Shows.png";
import CRUDBlog from "../assets/thumbnails/CRUD Blog.png";

const projects = [
  {
    title: "My Portfolio",
    thumbnail: portfolio,
    desc: "Contains the the code and necessary items used in the portfolio. This website is made using only React.js (using the GSAP library for animations).",
    link: "https://sumedhasinghrathor.vercel.app/",
    type: ["Front End"],
    frameworks: ["React.js"],
    tools: ["GSAP", "Chart.js"],
    language: ["JavaScript"],
  },
  {
    title: "CRUD Blog",
    thumbnail: CRUDBlog,
    desc: "A dynamic blog platform built with Next.js and MongoDB, enabling seamless creation, editing, and deletion of posts.",
    link: "https://nextjsmongodb-fullstack-blog.vercel.app/",
    type: ["Full Stack"],
    frameworks: ["Next.js"],
    tools: ["MongoDB", "Tailwind CSS"],
    language: ["JavaScript"],
  },
  {
    title: "Fetch TV Shows",
    thumbnail: fetchTVshows,
    desc: "This is a TV show fetching app built using Next.js and Tailwind CSS. It allows users to search for their favorite TV shows and view details about them.",
    link: "https://fetch-tv-shows.vercel.app/",
    type: ["Front End"],
    frameworks: ["Next.js"],
    tools: ["Tailwind CSS"],
    language: ["JavaScript"],
  },
  {
    title: "Credit Card Complaint Dashboard",
    thumbnail: CCDashboard,
    desc: "Comprehensive and visual analysis of credit card complaints recieved",
    link: "https://public.tableau.com/app/profile/sumedha.singh.rathor/viz/CreditCardComplaintDashboard_17464209913510/CREDITCARDCOMPLAINT",
    type: ["Data Analysis", "Data Visualization"],
    frameworks: [],
    tools: ["Tableau"],
    language: [],
  },
  {
    title: "Deep Learning Powered ResNet",
    thumbnail: ResNet,
    desc: "This project is a deep learning model that uses a ResNet architecture to classify images from the prostate cancer image dataset. The model is trained using TensorFlow and Keras.",
    link: "https://github.com/SumedhaSinghRathor/Deep-Learning-Powered-ResNet/blob/main/Deep_Learning_Powered_ResNet.ipynb",
    type: ["Machine Learning", "Neural Network"],
    frameworks: [],
    tools: ["Tensorflow"],
    language: ["Python"],
  },
  {
    title: "Notes Ki Dukaan",
    thumbnail: NKD,
    desc: "A new note sharing app where students can upload their own notes as well as view, rate and download notes from other faculties.",
    link: "https://www.behance.net/gallery/218824067/Notes-Ki-Dukaan",
    type: ["UI Prototype", "UX Case Study"],
    frameworks: [],
    tools: ["Figma"],
    language: [],
  },
  {
    title: "Text to Speech GUI",
    thumbnail: textTospeech,
    desc: "This is a Python project where we can convert written text to voice on Tkinter GUI using Python",
    link: "https://github.com/SumedhaSinghRathor/Text-to-Speech",
    type: [],
    frameworks: [],
    tools: ["Tkinter"],
    language: ["Python"],
  },
  {
    title: "Image Segmentation",
    thumbnail: importSegment,
    desc: "Color segmentation compares the color feature of each pixel with the color features of surrounding pixels or a trained color classifier to segment an image into color regions. This notebook uses different images of fishes (clownfishes) to segment them from their background.",
    link: "https://github.com/SumedhaSinghRathor/Image-Segmentation-using-color-spaces/blob/main/Image_Segmentation.ipynb",
    type: [],
    frameworks: [],
    tools: ["OpenCV"],
    language: ["Python"],
  },
  {
    title: "Weather App",
    thumbnail: weatherApp,
    desc: "This weather app, built with the OpenWeatherMap API and React.js, features allows users to easily access current conditions, humidity, and temperature for any location.",
    link: "https://sumedhasinghrathor-weatherdashboard.vercel.app/",
    type: ["Front End"],
    frameworks: ["React.js"],
    tools: ["Tailwind CSS"],
    language: ["JavaScript"],
  },
  {
    title: "Tetris Game Clone",
    thumbnail: tetris,
    desc: "Tetris Game Clone created with p5.js, players complete lines by moving differently shaped pieces, which descend onto the playing field. The completed lines disappear and grant the player points, and the player can proceed to fill the vacated spaces. The game ends when the uncleared lines reach the top of the playing field.",
    link: "https://sumedhasinghrathor.github.io/TetrisGame/",
    type: ["Game Clone"],
    frameworks: ["Basic HTML"],
    tools: ["p5.js"],
    language: ["JavaScript"],
  },
  {
    title: "Sliding Puzzle",
    thumbnail: sliding,
    desc: "Created with Java, a sliding puzzle is a combination puzzle that challenges a player to slide pieces along certain routes to establish a certain end-configuration. The pieces to be moved consist of numbers from 1 to 15.",
    link: "",
    type: ["Game Clone"],
    tools: [],
    frameworks: ["Swing"],
    language: ["Java"],
  },
  {
    title: "Tic-Tac-Toe",
    thumbnail: tictactoe,
    desc: "Python version of the popular game Tic Tac Toe. This project, where the player plays against the AI, provides an entertaining and engaging way to play the classic game versus a computer opponent.",
    link: "",
    type: ["Game Clone", "AI"],
    frameworks: [],
    tools: ["PyGame"],
    language: ["Python"],
  },
  {
    title: "WaterSort",
    thumbnail: waterSort,
    desc: "This game is an engaging puzzle game available online that tests players' ability to reason and solve problems. Sorting variously colored water droplets into their appropriate containers using JavaScript based mechanisms is the aim of the game.",
    link: "https://sumedhasinghrathor.github.io/Water-Sort/",
    type: ["Game Clone"],
    tools: [],
    frameworks: ["Basic HTML"],
    language: ["JavaScript"],
  },
  {
    title: "Journey Joys",
    thumbnail: JJ,
    desc: "A case study on a travel app that redefines travel planning with curated recommendations and personalized itineraries.",
    link: "https://www.behance.net/gallery/180870069/Journey-Joys",
    type: ["UI Prototype", "UX Case Study"],
    tools: ["Figma"],
    frameworks: [],
    language: [],
  },
  {
    title: "Squid Game",
    thumbnail: SquidGame,
    desc: "Similar to the one shown in the popular web series ‘Squid Game’, it uses pixel change to detect motion and eliminate the player",
    link: "",
    type: ["Game Clone"],
    tools: ["OpenCV"],
    frameworks: [],
    language: ["Python"],
  },
];

export default projects;
