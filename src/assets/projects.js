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

const projects = [
  {
    title: "My Portfolio",
    tags: ["Front End", "React.js", "GSAP"],
    thumbnail: portfolio,
    desc: "Contains the the code and necessary items used in the portfolio. This website is made using only React.js (using the GSAP library for animations).",
    link: "https://sumedhasinghrathor.vercel.app/",
  },
  {
    title: "Fetch TV Shows",
    tags: ["Front End", "Next.js", "Tailwind CSS"],
    thumbnail: fetchTVshows,
    desc: "This is a TV show fetching app built using Next.js and Tailwind CSS. It allows users to search for their favorite TV shows and view details about them.",
    link: "https://fetch-tv-shows.vercel.app/",
  },
  {
    title: "Credit Card Complaint Dashboard",
    thumbnail: CCDashboard,
    tags: ["Data Analysis", "Tableau", "Data Visualization"],
    desc: "Comprehensive and visual analysis of credit card complaints recieved",
    link: "https://public.tableau.com/app/profile/sumedha.singh.rathor/viz/CreditCardComplaintDashboard_17464209913510/CREDITCARDCOMPLAINT",
  },
  {
    title: "Deep Learning Powered ResNet",
    tags: ["DL", "CNN", "Neural Networks", "Python", "TensorFlow"],
    thumbnail: ResNet,
    desc: "This project is a deep learning model that uses a ResNet architecture to classify images from the prostate cancer image dataset. The model is trained using TensorFlow and Keras.",
    link: "https://github.com/SumedhaSinghRathor/Deep-Learning-Powered-ResNet/blob/main/Deep_Learning_Powered_ResNet.ipynb",
  },
  {
    title: "Notes Ki Dukaan",
    tags: ["UX Case Study", "Figma", "UI Prototype"],
    thumbnail: NKD,
    desc: "A new note sharing app where students can upload their own notes as well as view, rate and download notes from other faculties.",
    link: "https://www.behance.net/gallery/218824067/Notes-Ki-Dukaan",
  },
  {
    title: "Text to Speech GUI",
    tags: ["Python", "Tkinter"],
    thumbnail: textTospeech,
    desc: "This is a Python project where we can convert written text to voice on Tkinter GUI using Python",
    link: "https://github.com/SumedhaSinghRathor/Text-to-Speech",
  },
  {
    title: "Image Segmentation",
    tags: ["OpenCV", "Python"],
    thumbnail: importSegment,
    desc: "Color segmentation compares the color feature of each pixel with the color features of surrounding pixels or a trained color classifier to segment an image into color regions. This notebook uses different images of fishes (clownfishes) to segment them from their background.",
    link: "https://github.com/SumedhaSinghRathor/Image-Segmentation-using-color-spaces/blob/main/Image_Segmentation.ipynb",
  },
  {
    title: "Weather App",
    tags: ["React.js", "Tailwind CSS", "OpenWeather API"],
    thumbnail: weatherApp,
    desc: "This weather app, built with the OpenWeatherMap API and React.js, features allows users to easily access current conditions, humidity, and temperature for any location.",
    link: "https://sumedhasinghrathor-weatherdashboard.vercel.app/",
  },
  {
    title: "Tetris Game Clone",
    tags: ["HTML / CSS / JS", "p5.js", "Game Dev"],
    thumbnail: tetris,
    desc: "Tetris Game Clone created with p5.js, players complete lines by moving differently shaped pieces, which descend onto the playing field. The completed lines disappear and grant the player points, and the player can proceed to fill the vacated spaces. The game ends when the uncleared lines reach the top of the playing field.",
    link: "https://sumedhasinghrathor.github.io/TetrisGame/",
  },
  {
    title: "Sliding Puzzle",
    tags: ["Java", "Swing", "Game Dev"],
    thumbnail: sliding,
    desc: "Created with Java, a sliding puzzle is a combination puzzle that challenges a player to slide pieces along certain routes to establish a certain end-configuration. The pieces to be moved consist of numbers from 1 to 15.",
    link: "",
  },
  {
    title: "Tic-Tac-Toe",
    tags: ["Python", "PyGame", "Game Dev", "AI"],
    thumbnail: tictactoe,
    desc: "Python version of the popular game Tic Tac Toe. This project, where the player plays against the AI, provides an entertaining and engaging way to play the classic game versus a computer opponent.",
    link: "",
  },
  {
    title: "WaterSort",
    tags: ["HTML / CSS / JS", "Game Dev"],
    thumbnail: waterSort,
    desc: "This game is an engaging puzzle game available online that tests players' ability to reason and solve problems. Sorting variously colored water droplets into their appropriate containers using JavaScript based mechanisms is the aim of the game.",
    link: "https://sumedhasinghrathor.github.io/Water-Sort/",
  },
  {
    title: "Journey Joys",
    tags: ["UX Case Study", "Figma", "UI Prototype"],
    thumbnail: JJ,
    desc: "A case study on a travel app that redefines travel planning with curated recommendations and personalized itineraries.",
    link: "https://www.behance.net/gallery/180870069/Journey-Joys",
  },
  {
    title: "Squid Game",
    tags: ["Python", "OpenCV", "Game Dev"],
    thumbnail: SquidGame,
    desc: "Similar to the one shown in the popular web series ‘Squid Game’, it uses pixel change to detect motion and eliminate the player",
    link: "",
  },
];

export default projects;
