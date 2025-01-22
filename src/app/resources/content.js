import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Sylvain",
  lastName: "Costes",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Engineer • Étudiant MIAGE",
  avatar: "/images/avatarss.png", // à remplacer par ton URL d'avatar si nécessaire
  location: "Europe/Paris",
  languages: ["Français", "Anglais"],
};

const newsletter = {
  display: true,
  title: <>S'abonner à ma Newsletter</>,
  description: (
    <>
      Découvrez mes réflexions sur le développement, le Cloud, et l'innovation technologique.
    </>
  ),
};

const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sylvaincs",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/SylvainCostes",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:sylcos@proton.me",
  },
];

const home = {
  label: "Accueil",
  title: `${person.name} • Portfolio & Expériences`,
  description: `Profil LinkedIn de ${person.name} – ${person.role}`,
  headline: <>Étudiant en informatique passionné par le développement, le Cloud et l’innovation</>,
  subline: (
    <>
      Bonjour, je suis {person.firstName} et je développe des solutions innovantes chez Optic 2000,
      tout en poursuivant mes études en MIAGE. <br />
      Je partage ici mes projets, expériences et compétences en Full Stack, DevOps et Cloud.
    </>
  ),
};

const about = {
  label: "À propos",
  title: "Profil & Parcours",
  description: `Découvrez le parcours de ${person.name} : étudiant MIAGE, Full Stack Engineer, et passionné par la technologie.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/costes", // si tu souhaites ajouter un lien pour prendre rendez-vous
  },
  intro: {
    display: true,
    title: "À propos de moi",
    description: (
      <>
        Étudiant en informatique passionné par le développement et les technologies Cloud, je suis motivé
        par les défis techniques et l'innovation. Mon objectif est de continuer à développer mes compétences
        en développement, DevOps et en architecture technique, tout en contribuant à des projets d'envergure.
      </>
    ),
  },
  work: {
    display: true,
    title: "Expériences Professionnelles",
    experiences: [
      {
        company: "Audioptic Trade Services",
        timeframe: "sept. 2024 - aujourd’hui · 5 mois",
        role: "Full Stack Engineer (Contrat en alternance)",
        achievements: [
          <>
            Développement d'applications Full Stack serverless sur AWS,
            mise en place d'un pipeline DevOps avec Terraform et Bitbucket.
          </>,
          <>
            Automatisation des tests avec Cypress, et implémentation d'un SSO via Okta en OIDC.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg", // à remplacer par une image pertinente
            alt: "Optic 2000",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Réalisation de projet personnel",
        timeframe: "Never Ending ∞",
        role: "Solution Architect",
        achievements: [
          <>Réalisation de divers projets personnels en Full Stack.</>,
        ],
        images: [],
      },
      {
        company: "Stage chez Optic 2000",
        timeframe: "avril 2024 - août 2024 · 5 mois",
        role: "Full-Stack Developer",
        achievements: [
          <>Développement Full-Stack en serverless</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Parcours Académique",
    institutions: [
      {
        name: "Université Paris-X",
        description: (
          <>
            Master en informatique (MIAGE) – Axé sur la gestion et la transformation digitale. Spé DevOps
          </>
        ),
      },
      {
        name: "Université Paris 12",
        description: (
          <>
            Licence en Informatique – Activités associatives : Club de Cinéma, CrossFit, Savate boxe française.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Compétences Techniques",
    skills: [
      {
        title: "Java, Spring Boot & Lombok",
        description: <>Développement d'applications robustes pour le back-end.</>,
        images: [],
      },
      {
        title: "React / Next.js / TypeScript",
        description: <>Création d'interfaces modernes et responsives.</>,
        images: [],
      },
      {
        title: "AWS & DevOps",
        description: <>Déploiement sur le Cloud avec AWS (Lambda, S3, etc.), Docker, Terraform, et CI/CD.</>,
        images: [],
      },
    ],
  },
  certifications: {
    display: true,
    title: "Certifications & Formations",
    items: [
      {
        title: "AWS Certified Cloud Practitioner",
        description: (
          <>
            Certification AWS CLF-C01 – Praticien du Cloud certifié AWS
          </>
        ),
        date: "juil. 2024 · juil. 2027",
        issuer: "Amazon Web Services (AWS)",
        image: "/images/certificates/ccpp.png",
        pdfLink: "https://www.credly.com/badges/e4ebd475-8f41-4b27-8c12-3af69b9d8be0/public_url",
      },
      {
        title: "AWS Certified Solutions Architect – Associate",
        description: (
          <>
            Certification AWS SAA-C02 – Architecte de solutions certifié AWS
          </>
        ),
        date: "En cours",
        issuer: "Amazon Web Services (AWS)",
        image: "/trademark/aws.svg",
        pdfLink: "https://www.credly.com/badges/e4ebd475-8f41-4b27-8c12-3af69b9d8be0/public_url",
      },
    ],
  },
};

const blog = {
  label: "Articles",
  title: "Mes réflexions & tutoriels",
  description: `Retrouvez les articles et projets partagés par ${person.name}.`,
  // Pour créer un nouvel article, ajoutez un fichier .mdx dans le dossier approprié.
};

const work = {
  label: "Projets",
  title: "Mes Réalisations",
  description: `Découvrez les projets réalisés par ${person.name} durant mon parcours en développement et DevOps.`,
  // Pour ajouter un nouveau projet, créez un fichier .mdx dans le dossier dédié.
};

const gallery = {
  label: "Gallery",
  title: "Galerie Photo",
  description: `A photo collection by ${person.name}`,
  // Images tirées de pexels.com ou autres sources
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
