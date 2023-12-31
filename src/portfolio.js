const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Adrian Kasito | Portfolio",
  description:
    "A passionate data scientist with a thirst for knowledge and a love of all things data.",
  og: {
    title: "Adrian KasitoPortfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Hello!",
  sub: "Adrian Kasito",
  logo_name: "Adrian Kasito",
  resumeLink: "",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/adriankasito",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://ug.linkedin.com/in/adrian-kasito-8b22191aa",
    },
    {
      siteName: "Twitter",
      iconifyClassname: "simple-icons:twitter",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://twitter.com/adriankasito?lang=en",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "🎯 Strong knowledge of causal inference, using statistical methods to identify and quantify causal relationships between variables. ⚖️📈📉",
        "🎯 Skilled in time series analysis, using statistical methods to analyze and forecast time series data. 📈📉📊",
        "🎯 Experience with natural language processing (NLP), using machine learning techniques to extract meaning from text and solve real-world problems. 💬🤖🧠",
        "🎯 Expertise in machine learning (ML), training and deploying machine learning models to solve predictive and classification problems. 🤖🧠🦾",
        "🎯 Strong knowledge of deep learning (DL), training and deploying deep learning models to solve complex problems, such as image recognition and natural language processing. 🧠🤖🌌",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I leverage a wide range of cutting-edge technology tools in my projects, with a particular focus on creating Data Science projects and deploying them as web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "TEATH",
      img_path: "project-06.png",
      description:
        "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "TextBlob",
          color: "#820032",
        },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: " ",
      code: "https://github.com/adriankasito",
      linkcolor: "white",
    },

    {
      title: "Voice Gender Detection",
      img_path: "voice.gif",
      description:
        "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "tensorflow",
          color: "#4257f5",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "NeuralViz",
      img_path: "neural.gif",
      description:
        "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "numpy",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "",
      code: "https://github.com/adriankasito",
      linkcolor: "white",
    },
    {
      title: "Semantic Search APP",
      img_path: "project-03.png",
      description:
        "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    // {
    //   title: "Youtube Thumbnail Generator & AutoUploader",
    //   img_path: "project-02.png",
    //   description:
    //     "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
    //   tags: [
    //     {
    //       lang: "internal project",
    //       color: "red",
    //     },
    //     {
    //       lang: "youtube v3 api",
    //       color: "red",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },

    {
      title: "Newsearcher",
      img_path: "news.gif",
      description:
        "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "newspaper3k",
          color: "#303030",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "nltk",
          color: "#051c61",
        },
      ],
      link: "",
      code: "https://github.com/adriankasito",
      linkcolor: "white",
    },
    {
      title: "ActiWeight",
      img_path: "acti.gif",
      description:
        "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "",
      code: "https://github.com/adriankasito",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Data Scientist",
        subtitle: "Nactus India Services Private Limited",
        date: "June 2020 - present",
        content: [
          "Used T5 Transformer Model to build a Question Answering Model which generates questions based on Keywords extracted (WordNet, Sense2Vec) from studyshot notes.",
          "Built an MCQ Generation model using BERT",
          "Developed a personalized Chatbot using Rasa (Botfront.io).",
          "Created an Automatic Thumbnail Generator & Uploader for our youtube videos using Youtube v3 API",
          "Working on OpenAI's semantic search engine.",
          "Created a Clean MaterialUI Design for prototyping and design fixing before production-ready of APP",
          "Created FrontEnd components for StudyShot website",
          "Working on recommendation system for concept notes and questions based on student's behavior on our Flutter App(tracking)",
        ],
      },
      {
        title: "Machine Learning Intern",
        subtitle: "Listnr",
        date: "April 2020 - June 2020",
        content: [
          "My role at Listnr included a lot of research work about Audio Encoders and Vocoders and Speech Synthesis in general.",
          "Worked on some SOTA Inference TTS Models such as TacoTron2, FastSpeech2, and Wavenet.",
          "Also had hands-on with real-time voice cloning algorithm.",
        ],
      },
      {
        title: "Data Science Intern",
        subtitle: "iNeuron.ai",
        date: "Nov 2020 - January 2021",
        content: [
          "Phase 1 included Data Cleaning & Data Annotation for object detection task",
          "Used YOLO v5 for Fire Detection Project",
        ],
      },
      {
        title: "Summer Analytics Participant",
        subtitle: "IIT Guwahati",
        date: "April 2020 - June 2020",
        content: [
          "Learnt & applied various Machine Learning libraries",
          "Had hands-on with Data Visualization techniques using matplotlib, plotly, streamlit",
          "Understood and applied Neural networks using Tensorflow and finally competed in Kaggle Hackathon ranking 135 (top 16 percentile) among 854 Kaggle participants",
          "Ranked 85 out of 1500+ students for overall performance.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Engineering in Information Technology",
          subtitle: "Vidyalankar Institute of Technology, Mumbai",
          date: "2016 - 2020",
          content: ["CGPA: 8.06/10"],
        },
        {
          title: "Higher Secondary Certificate [HSC]",
          subtitle: "Dr. Antonio Da Silva Technical Jr. College, Mumbai",
          date: "2014 - 2016",
          content: ["Precentage: 80%"],
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        {
          title: "Ranks",
          content: [
            "#135/854 in Summer Analytics Kaggle Competition by IITG",
            "#113/5064 in CV-NLP Hackathon by HackerEarth",
          ],
        },
        {
          title: "Achievements",
          content: [
            "Designing Team Head at ACM-VIT",
            "5⭐ Gold Badges for Python & Problem Solving at HackerRank ",
            "Tableau Analyst & Consumer Badge by Tableau Official",
          ],
        },
      ],
    },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Consultancy Website",
          subtitle: "kidsworldeducationconsultants.com",
          content: [
            "Created and hosted a website for consultancy providers in Kids Education Domain",
          ],
        },
        {
          title: "Portfolio Website",
          subtitle: "pranavphulware.netlify.app",
          content: [
            "Built a personal Filmography portfolio for a friend and later hosted it at Netlify",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Tableau Analyst",
      subtitle: "Tableau",
      logo_path: "tabana-01.png",
      certificate_link:
        "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Tableau Consumer",
      subtitle: "Tableau",
      logo_path: "tabcon-01.png",
      certificate_link:
        "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Problem solving",
      subtitle: "HackerRank",
      logo_path: "problem-01.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Python",
      subtitle: "HackerRank",
      logo_path: "python-01.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Certificate of Merit",
      subtitle: "Summer Analytics | IIT Guwahati",
      logo_path: "iitg-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "IITG",
      color_code: "#000000",
    },
    {
      title: "Tableau Desktop Qualified Associate",
      subtitle: "SimpliLearn",
      logo_path: "simplilearn-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Simplilearn",
      color_code: "#000000",
    },
    {
      title: "Question Generation using Transformers",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-259468910985/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Machine Learning",
      subtitle: "Stanford University",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
    {
      title: "Data Visualization",
      subtitle: "University of Michigan",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "University of Michigan",
      color_code: "#000000",
    },
    {
      title: "Data Scientist Career Track",
      subtitle: "DataCamp",
      logo_path: "datacamp-01.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
      alt_name: "DataCamp",
      color_code: "#000000",
    },
    {
      title: "PowerBI Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Tableau Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I'm readily accessible on various social media platforms, and you can expect a response within 24 hours. Feel free to reach out for assistance with Data Science, Machine Learning, Statistics, and Data Analysis.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kampala-Uganda",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+256 701243667",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/adriankasito",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adriankasito/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:adriankc910@gmail.com ",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
