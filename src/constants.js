// ================= SKILLS =================

import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import sqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import linuxLogo from './assets/tech_logo/linux.png';
import azureLogo from './assets/tech_logo/azure.png';
import ansibleLogo from './assets/tech_logo/ansible.png';
import kubernetesLogo from './assets/tech_logo/kubernetes.png';
import dockerLogo from './assets/tech_logo/docker.png';
import terraform from "./assets/tech_logo/terra.png";
import jenkins from "./assets/tech_logo/jen.png";

// Experience Logo
import pinnacleLogo from './assets/company_logo/pinnacle.png';

// Education Logo
import nitLogo from './assets/education_logo/Narula.png';

// Project Logos
import cicdLogo from './assets/work_logo/cicd.png';
import chatbotLogo from './assets/work_logo/chatbot.png';
import mlLogo from './assets/work_logo/ml1.png';
import jenkinsLogo from "./assets/work_logo/jenkins.png";
import terraformLogo from "./assets/work_logo/terraform.png";
import diabetesLogo from "./assets/work_logo/diabetes.png";

export const SkillsInfo = [
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Terraform", logo: terraform },
      { name: "Ansible", logo: ansibleLogo },
      { name: "Jenkins", logo: jenkins},
      { name: "Docker", logo: dockerLogo },
      { name: "Kubernetes", logo: kubernetesLogo },
      { name: "Azure", logo: azureLogo },
    
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "SQL", logo: sqlLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },

  {
    title: "Tools & Environment",
    skills: [
      { name: "Linux", logo: linuxLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "VS Code", logo: vscodeLogo },
    ],
  },
];
// ================= EXPERIENCE =================

export const experiences = [
  {
    id: 0,
    img: pinnacleLogo,
    role: "Java Developer Intern",
    company: "Pinnacle Labs",
    date: "Aug 2025 - Sep 2025",
    desc: "Worked on Java-based backend tasks in a Linux environment. Assisted in reviewing application logs, identifying runtime issues, and supporting debugging at the application level. Gained practical exposure to backend systems and troubleshooting workflows.",
    skills: [
      "Java",
      "Linux",
      "Backend Development",
      "Debugging",
      "Log Analysis"
    ],
  },
];


// ================= EDUCATION =================

export const education = [
  {
    id: 0,
    img: nitLogo,
    school: "Narula Institute of Technology, Kolkata",
    date: "Sep 2022 - Jun 2026",
    grade: "CGPA: 7.57 (Till 7th Semester)",
    desc: "B.Tech in Computer Science & Engineering (AI & ML). Studied core subjects including Data Structures, Operating Systems, DBMS, Computer Networks, and Machine Learning. Built practical exposure through backend and cloud-based projects.",
    degree: "B.Tech - CSE (AI & ML)",
  },
];

export const certificates = [
  {
    id: 1,
    title: "SAP Certified Associate – Back-End Developer (ABAP Cloud)",
    issuer: "SAP",
    date: "2025",
    link: "https://www.credly.com/badges/47a09ecc-29df-4f7e-972a-ea73919372ea/linked_in?t=t19zeu", // add certificate link if available
  },
  {
    id: 2,
    title: "Oracle Cloud Infrastructure 2025 – Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=9A70BB4906E1BF3E734279EFBEADA30AF6E6FE1CFFA08A9AEFA801AB36D19855",
  },
  {
    id: 3,
    title: "Hacktoberfest 2025 – Supercontributor",
    issuer: "DigitalOcean",
    date: "2025",
    link: "https://lnkd.in/gFykSNgb",
  },
];


// ================= PROJECTS =================
export const projects = [

  // ================= DEVOPS PROJECTS =================

  {
    id: 0,
    title: "Terraform + Azure: Infrastructure as Code Automation",
    description:
      "Automated Azure infrastructure provisioning using Terraform (IaC). Deployed Resource Group, VNet, Subnet, NIC, and Ubuntu VM via declarative configurations. Integrated Azure CLI for end-to-end automation and implemented cost-control workflows using terraform destroy.",
    image: terraformLogo,
    tags: ["Terraform", "Azure", "IaC", "Azure CLI", "Cloud Automation"],
    link: "https://www.linkedin.com/posts/debrajsaha-devops_terraform-azure-devops-activity-7392539085011050497-Ffl8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETCD5UBoQYvrwAEIrkjC3MVZsJ_t4QIoVk",
    type: "DevOps",
  },

  {
    id: 1,
    title: "Ansible + Azure: Multi-Node CI/CD Pipeline",
    description:
      "Implemented a multi-node CI/CD pipeline on Azure using Ansible. Provisioned a control node and two web servers, automated Tomcat setup, GitHub source retrieval, Maven build, and .war deployment across nodes.",
    image: cicdLogo,
    tags: ["Ansible", "Azure", "CI/CD", "GitHub", "Maven", "Tomcat"],
    link: "https://www.linkedin.com/posts/debrajsaha-devops_devops-azure-github-activity-7390228615390674944-5Rh3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETCD5UBoQYvrwAEIrkjC3MVZsJ_t4QIoVk",
    type: "DevOps",
  },

  {
    id: 2,
    title: "Jenkins + Docker + Django: CI/CD Automation",
    description:
      "Built and deployed a Django application using Jenkins pipelines and Docker containers. Automated builds and deployments with GitHub integration, demonstrating CI/CD orchestration and container-based workflows.",
    image: jenkinsLogo,
    tags: ["Jenkins", "Docker", "Django", "CI/CD", "GitHub"],
    link: "https://www.linkedin.com/posts/debrajsaha-devops_devops-jenkins-docker-activity-7393142459905634304-aWBP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETCD5UBoQYvrwAEIrkjC3MVZsJ_t4QIoVk",
    type: "DevOps",
  },

  // ================= MACHINE LEARNING PROJECTS =================

  {
    id: 3,
    title: "ECDSS-Heart: Explainable Clinical Decision Support System",
    description:
      "Developed an explainable stacking ensemble (RF, XGBoost, CatBoost → Logistic Regression) for high-sensitivity heart disease screening. Achieved 0.95 Recall and 0.95 ROC-AUC across four international cohorts using SMOTE-Tomek balancing and robust preprocessing.",
    image: mlLogo,
    tags: ["Python", "Machine Learning", "XGBoost", "Model Ensemble"],
    link: "https://github.com/debraj-80/ECDSS-Heart-Explainable-Clinical-Decision-Support-System/tree/main",
    type: "ML",
  },

  {
    id: 4,
    title: "ML-Diabetes-Classifier",
    description:
      "Built a diabetes prediction system comparing multiple ML classifiers. Achieved 0.88 ROC-AUC using Gradient Boosting and visualized performance using ROC curves and confusion matrices.",
    image: diabetesLogo,
    tags: ["Python", "scikit-learn", "XGBoost", "Data Visualization"],
    link: "https://github.com/debraj-80/ML-Diabetes-Classifier",
    type: "ML",
  },

  // ================= BACKEND PROJECT =================

  {
    id: 5,
    title: "AI-Integrated Chatbot",
    description:
      "Developed backend APIs using Node.js and MongoDB to power an AI-integrated chatbot with REST architecture and data persistence.",
    image: chatbotLogo,
    tags: ["Node.js", "MongoDB", "REST API", "Backend"],
    link: "https://github.com/debraj-80/AI_ChatBot",
    type: "Backend",
  },
];
