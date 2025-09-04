import { useEffect, useRef, useState } from "react";
import projects from "../../assets/projects.js";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function ProjectModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const baseColor = "0, 136, 184";

  const [selected, setSelected] = useState(1);

  function setToggle(id) {
    setSelected(id);
  }

  const [barData1, setBarData1] = useState({ datasets: [] });
  const [barOptions1, setBarOptions1] = useState({});
  const [pieData, setPieData] = useState({ datasets: [] });
  const [pieOptions, setPieOptions] = useState({});
  const [doughnutData, setDoughnutData] = useState({ datasets: [] });
  const [doughnutOptions, setDoughnutOptions] = useState({});
  const [barData2, setBarData2] = useState({ datasets: [] });
  const [barOptions2, setBarOptions2] = useState({});

  // Sorting by framworks
  const allFrameworks = projects.flatMap((project) => project.frameworks);

  const frameworksCounts = allFrameworks.reduce((acc, fw) => {
    acc[fw] = (acc[fw] || 0) + 1;
    return acc;
  }, {});

  const frameworkLabels = Object.keys(frameworksCounts);
  const frameworkData = Object.values(frameworksCounts);

  // Sorting by languages
  const allLanguages = projects.flatMap((project) => project.language);

  const langCounts = allLanguages.reduce((acc, lang) => {
    acc[lang] = (acc[lang] || 0) + 1;
    return acc;
  }, {});

  const langLabels = Object.keys(langCounts);
  const langData = Object.values(langCounts);
  const langBackgroundColor = [];

  for (let i = 0; i < langLabels.length; i++) {
    let opacity = 1 - i * (0.8 / (langLabels.length - 1));
    if (langLabels.length === 1) opacity = 1;
    langBackgroundColor.push(`rgba(${baseColor}, ${opacity.toFixed(2)})`);
  }

  // Sorting by type of project
  const allTypes = projects.flatMap((project) => project.type);

  const typeCounts = allTypes.reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const typeLabels = Object.keys(typeCounts);
  const typeData = Object.values(typeCounts);
  const typeBackgroundColor = [];

  for (let i = 0; i < typeLabels.length; i++) {
    let opacity = 1 - i * (0.8 / (typeLabels.length - 1));
    if (typeLabels.length === 1) opacity = 1;
    typeBackgroundColor.push(`rgba(${baseColor}, ${opacity.toFixed(2)})`);
  }

  // Sorting by tools
  const allTools = projects.flatMap((project) => project.tools);

  const toolCounts = allTools.reduce((acc, tool) => {
    acc[tool] = (acc[tool] || 0) + 1;
    return acc;
  }, {});

  const toolLabels = Object.keys(toolCounts);
  const toolData = Object.values(toolCounts);

  let selectedComponent;
  switch (selected) {
    case 2:
      selectedComponent = (
        <Pie data={pieData} options={pieOptions} className="my-2" />
      );
      break;
    case 3:
      selectedComponent = (
        <Doughnut
          data={doughnutData}
          options={doughnutOptions}
          className="my-2"
        />
      );
      break;
    case 4:
      selectedComponent = (
        <Bar data={barData2} options={barOptions2} className="my-2" />
      );
      break;
    default:
      selectedComponent = (
        <Bar data={barData1} options={barOptions1} className="my-2" />
      );
      break;
  }

  useEffect(() => {
    setBarData1({
      labels: frameworkLabels,
      datasets: [
        {
          label: "# of Projects",
          data: frameworkData,
          backgroundColor: `rgb(${baseColor})`,
          borderRadius: 8,
        },
      ],
    });

    setBarOptions1({
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,
      plugins: {
        datalabels: {
          anchor: "end",
          align: "end",
          color: `rgb(${baseColor})`,
          font: { size: 12, family: "Goldman" },
        },
        title: {
          display: false,
        },
        legend: { display: false },
      },
      scales: {
        x: {
          grid: { color: `rgba(${baseColor}, 0.2)` },
          ticks: {
            color: `rgb(${baseColor})`,
            font: {
              family: "Goldman",
              size: 12,
            },
          },
        },
        y: {
          grid: { color: "rgba(0, 136, 184, 0.2)" },
          ticks: {
            color: `rgb(${baseColor})`,
            font: {
              family: "Goldman",
              size: 12,
            },
          },
        },
      },
    });

    setBarData2({
      labels: toolLabels,
      datasets: [
        {
          label: "# to tools",
          data: toolData,
          backgroundColor: `rgb(${baseColor})`,
          borderRadius: 8,
        },
      ],
    });

    setBarOptions2({
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,
      plugins: {
        datalabels: {
          anchor: "end",
          align: "end",
          color: "#0088B8",
          font: { size: 12, family: "Goldman" },
        },
        title: {
          display: false,
        },
        legend: { display: false },
      },
      scales: {
        x: {
          grid: { color: "rgba(0, 136, 184, 0.2)" },
          ticks: {
            color: "#0088B8",
            font: {
              family: "Goldman",
              size: 12,
            },
          },
        },
        y: {
          grid: { color: "rgba(0, 136, 184, 0.2)" },
          ticks: {
            color: "#0088B8",
            font: {
              family: "Goldman",
              size: 12,
            },
          },
        },
      },
    });

    setPieData({
      labels: langLabels,
      datasets: [
        {
          label: "# of languages",
          data: langData,
          backgroundColor: langBackgroundColor,
          borderWidth: 0,
        },
      ],
    });

    setPieOptions({
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,
      plugins: {
        datalabels: {
          display: false,
        },
        title: {
          display: false,
        },
        legend: {
          position: "right",
          labels: {
            color: "#0088B8",
            font: { family: "Goldman" },
          },
        },
      },
    });

    setDoughnutData({
      labels: typeLabels,
      datasets: [
        {
          label: "# of projects",
          data: typeData,
          backgroundColor: typeBackgroundColor,
          borderWidth: 0,
        },
      ],
    });

    setDoughnutOptions({
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,
      plugins: {
        datalabels: { display: false },
        title: { display: false },
        legend: {
          position: "right",
          labels: { color: "#0088b8", font: { family: "Goldman" } },
        },
      },
    });
  }, []);

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 flex justify-center items-center p-5 bg-black/45 backdrop-blur-sm"
    >
      <div className="bg-black text-blue border border-blue p-6 rounded-xl w-lg h-fit">
        <h1 className="text-3xl w-full text-center">Project Analysis</h1>
        <div className="h-fit">{selectedComponent}</div>
        <div className="w-full grid grid-cols-4 gap-2 justify-between mt-4 text-xs">
          <button
            className={`grow border border-blue rounded-sm ${
              selected === 1
                ? "bg-blue text-black"
                : "cursor-pointer hover:bg-blue/20"
            }`}
            onClick={() => setToggle(1)}
          >
            By Framework
          </button>
          <button
            className={`grow border border-blue rounded-sm ${
              selected === 2
                ? "bg-blue text-black"
                : "cursor-pointer hover:bg-blue/20"
            }`}
            onClick={() => setToggle(2)}
          >
            By Language
          </button>
          <button
            className={`grow border border-blue rounded-sm ${
              selected === 3
                ? "bg-blue text-black"
                : "cursor-pointer hover:bg-blue/20"
            }`}
            onClick={() => setToggle(3)}
          >
            By Type
          </button>
          <button
            className={`grow border border-blue rounded-sm ${
              selected === 4
                ? "bg-blue text-black"
                : "cursor-pointer hover:bg-blue/20"
            }`}
            onClick={() => setToggle(4)}
          >
            By Tools
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
