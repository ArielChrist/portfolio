import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowUpRight, BrainCircuit, BriefcaseBusiness, Cloud,
  Code2, Database, Download, Github, GraduationCap, Linkedin, Mail,
  MapPin, Menu, Phone, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
const cvFrUrl = `${import.meta.env.BASE_URL}cv-fr.pdf`;
const cvEnUrl = `${import.meta.env.BASE_URL}cv-en.pdf`;
import brainImage from "@/assets/project-brain.jpg";
import profilImage from "@/assets/profil_pro.jpeg"
import networkImage from "@/assets/project-network.jpg";
import bigDataImage from "@/assets/project-bigdata.jpg";
import cloudImage from "@/assets/project-cloud.jpg";

type Language = "fr" | "en";

const content = {
  fr: {
    nav: ["Profil", "Projets", "Parcours", "Compétences"], available: "Disponible pour de nouvelles opportunités",
    role: "Data Scientist · Data Analyst", intro: "Diplômé d’un Master en Data Science et Intelligence Artificielle, je transforme des données complexes en analyses, modèles prédictifs et solutions concrètes.",
    projectsCta: "Découvrir mes projets", cv: "Télécharger le CV", location: "Nairobi, Kenya",
    profileLabel: "01 / Profil", profileTitle: "De la donnée brute à la décision utile.", profileText: "Mon parcours relie l’ingénierie informatique, l’analyse de données et l’intelligence artificielle. J’aime construire le chemin complet : collecte, traitement, modélisation, API et interface de restitution.",
    projectsLabel: "02 / Projets sélectionnés", projectsTitle: "Des systèmes data conçus pour être compris et utilisés.", projectsIntro: "Une sélection de travaux en intelligence artificielle, machine learning, cloud et ingénierie des données.", projectCta: "Voir le dépôt",
    projects: [
      { title: "Détection de tumeurs cérébrales", tag: "Deep Learning", description: "Modèle hybride U-Net et DeepLabV3+ pour segmenter et détecter des tumeurs cérébrales à partir d’images médicales.", stack: "PyTorch · U-Net · DeepLabV3+", url: "https://github.com/ArielChrist/projet-memoire-diagnostic-tumeur-cerebrale" },
      { title: "Détection d’anomalies réseau", tag: "Machine Learning", description: "Modèle LightGBM pour identifier les anomalies dans le trafic réseau, servi par FastAPI avec une interface React.", stack: "LightGBM · FastAPI · React", url: "https://github.com/ArielChrist/projet-mlops" },
      { title: "Plateforme Big Data", tag: "Data Engineering", description: "Plateforme conteneurisée pour stocker, préparer et analyser des données à grande échelle.", stack: "Docker · MinIO · PostgreSQL · Polars", url: "https://github.com/ArielChrist/Projet-bigdata-spark-polars" },
      { title: "Pipeline Cloud vers BigQuery", tag: "Cloud", description: "Automatisation de l’envoi et du traitement de données depuis Google Cloud Storage vers BigQuery.", stack: "GCP · Cloud Storage · BigQuery", url: "https://github.com/ArielChrist/Projet-GC-storage-bigquery" },
    ],
    pathLabel: "03 / Parcours", pathTitle: "Formation & certifications",
    educationItems: [
      { date: "2023 — 2025", title: "Master Data Science & Intelligence Artificielle", place: "Institut Supérieur d’Informatique · Dakar, Sénégal" },
      { date: "2019 — 2023", title: "Licence en Génie Informatique", place: "IST / Université de Bangui · Réseaux et systèmes" },
    ],
    certTitle: "Certifications", certs: ["Cours d’anglais · Graffingstone Training College, Nairobi · depuis mars 2026",  "KoboToolsBox · Humanitarian Needs Assessment E-Learning Program", "AWS · Introduction to Amazon DynamoDB", "AWS · Getting Started with AWS Systems Manager", "AWS · Building a Machine Learning-Ready Organization"],
    skillsLabel: "04 / Expertise", skillsTitle: "Une pratique de bout en bout.",
    skillGroups: [["Analyse & IA", "Python, R, Machine Learning, Deep Learning, séries temporelles, TensorFlow, PyTorch"], ["Data Engineering", "SQL, ETL, Airflow, dbt, Spark, Polars, PostgreSQL, BigQuery"], ["Visualisation", "Power BI, Tableau, Streamlit, Matplotlib, Seaborn, Shiny, Excel"], ["Cloud & développement", "GCP, Docker, Git, FastAPI, Django, Flask, React"]],
    contactLabel: "05 / Contact", contactTitle: "Construisons quelque chose d’utile avec les données.", contactText: "Je suis ouvert aux opportunités en Data Science, Data Analysis et Data Engineering.", write: "M’écrire", footer: "Data Science · Analyse · Ingénierie", menu: "Ouvrir le menu",
  },
  en: {
    nav: ["Profile", "Projects", "Background", "Skills"], available: "Available for new opportunities",
    role: "Data Scientist · Data Analyst", intro: "With a Master’s in Data Science and Artificial Intelligence, I turn complex data into analyses, predictive models and practical solutions.",
    projectsCta: "Explore my projects", cv: "Download résumé", location: "Nairobi, Kenya",
    profileLabel: "01 / Profile", profileTitle: "From raw data to useful decisions.", profileText: "My background connects computer engineering, data analysis and artificial intelligence. I enjoy building the full journey: collection, processing, modeling, APIs and clear interfaces.",
    projectsLabel: "02 / Selected projects", projectsTitle: "Data systems designed to be understood and used.", projectsIntro: "Selected work across artificial intelligence, machine learning, cloud and data engineering.", projectCta: "View repository",
    projects: [
      { title: "Brain tumor detection", tag: "Deep Learning", description: "A hybrid U-Net and DeepLabV3+ model for segmenting and detecting brain tumors from medical images.", stack: "PyTorch · U-Net · DeepLabV3+", url: "https://github.com/ArielChrist/projet-memoire-diagnostic-tumeur-cerebrale" },
      { title: "Network anomaly detection", tag: "Machine Learning", description: "A LightGBM model that identifies anomalies in network traffic, served through FastAPI with a React interface.", stack: "LightGBM · FastAPI · React", url: "https://github.com/ArielChrist/projet-mlops" },
      { title: "Big Data platform", tag: "Data Engineering", description: "A containerized platform for storing, preparing and analyzing data at scale.", stack: "Docker · MinIO · PostgreSQL · Polars", url: "https://github.com/ArielChrist/Projet-bigdata-spark-polars" },
      { title: "Cloud to BigQuery pipeline", tag: "Cloud", description: "Automated data ingestion and processing from Google Cloud Storage into BigQuery.", stack: "GCP · Cloud Storage · BigQuery", url: "https://github.com/ArielChrist/Projet-GC-storage-bigquery" },
    ],
    pathLabel: "03 / Background", pathTitle: "Education & certifications",
    educationItems: [
      { date: "2023 — 2025", title: "Master’s in Data Science & Artificial Intelligence", place: "Higher Institute of Computer Science · Dakar, Senegal" },
      { date: "2019 — 2023", title: "Bachelor’s in Computer Engineering", place: "IST / University of Bangui · Networks and systems" },
    ],
    certTitle: "Certifications", certs: ["English course · Graffingstone Training College, Nairobi · since March 2026", "KoboToolsBox · Humanitarian Needs Assessment E-Learning Program", "AWS · Introduction to Amazon DynamoDB", "AWS · Getting Started with AWS Systems Manager", "AWS · Building a Machine Learning-Ready Organization"],
    skillsLabel: "04 / Expertise", skillsTitle: "An end-to-end practice.",
    skillGroups: [["Analytics & AI", "Python, R, Machine Learning, Deep Learning, time series, TensorFlow, PyTorch"], ["Data Engineering", "SQL, ETL, Airflow, dbt, Spark, Polars, PostgreSQL, BigQuery"], ["Visualization", "Power BI, Tableau, Streamlit, Matplotlib, Seaborn, Shiny, Excel"], ["Cloud & development", "GCP, Docker, Git, FastAPI, Django, Flask, React"]],
    contactLabel: "05 / Contact", contactTitle: "Let’s build something useful with data.", contactText: "I am open to opportunities in Data Science, Data Analysis and Data Engineering.", write: "Send an email", footer: "Data Science · Analytics · Engineering", menu: "Open menu",
  },
} as const;

const projectImages = [brainImage, networkImage, bigDataImage, cloudImage];
const skillIcons = [BrainCircuit, Database, Code2, Cloud];

const Index = () => {
  const [language, setLanguage] = useState<Language>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[language];
  const cvUrl = language === "fr" ? cvFrUrl : cvEnUrl;

  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const switchLanguage = (next: Language) => { setLanguage(next); setMenuOpen(false); };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background px-3 py-3 text-foreground sm:px-6 sm:py-8 lg:py-14">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-border bg-card shadow-panel">
        <header className="relative z-50 flex min-h-20 items-center justify-between px-5 sm:px-8 md:px-12">
          <a href="#top" className="flex items-center gap-3 font-display text-sm font-extrabold uppercase">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">AC</span>
            <span className="hidden sm:inline">Ariel Christ</span></a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label={language === "fr" ? "Navigation principale" : "Main navigation"}>{t.nav.map((item, index) => <a key={item} href={["#about", "#projects", "#path", "#skills"][index]} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-secondary">{item}</a>)}</nav>
          <div className="flex items-center gap-2">
            <div className="flex rounded-md border border-border bg-muted p-1" aria-label="Language selector">
              {(["fr", "en"] as const).map((item) => <Button key={item} onClick={() => switchLanguage(item)} variant={language === item ? "outline" : "ghost"} size="sm" className="h-8 px-3 font-mono text-[11px] uppercase shadow-none" aria-pressed={language === item}>{item}</Button>)}
              </div>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={t.menu}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
          {menuOpen && <nav className="absolute inset-x-0 top-full border-y border-border bg-card px-5 py-3 shadow-panel lg:hidden">
            {t.nav.map((item, index) => <a key={item} onClick={() => setMenuOpen(false)} href={["#about", "#projects", "#path", "#skills"][index]} className="block border-b border-border py-3 text-sm font-semibold text-muted-foreground last:border-0">{item}</a>)}</nav>}
        </header>

        <section id="top" className="grid border-y border-border lg:grid-cols-12">
          <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:col-span-7 lg:px-16 lg:py-20 xl:px-20">
            <p className="mb-6 flex w-fit items-center gap-2 rounded-full bg-accent px-3 py-1.5 font-mono text-[10px] uppercase text-accent-foreground">
              <span className="h-2 w-2 rounded-full bg-success" />{t.role}</p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.04] sm:text-6xl xl:text-7xl">
              Ariel Christ Austhen<br />
            <span className="text-secondary">Ngato Ndamokoziade</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{t.intro}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="h-12 rounded-md px-6"><a href="#projects">{t.projectsCta}<ArrowDown /></a></Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-md px-5"><a href={cvUrl} target="_blank" rel="noreferrer"><Download />{t.cv}</a></Button>
              <Button asChild variant="ghost" size="icon"><a href="https://github.com/ArielChrist/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a></Button>
              <Button asChild variant="ghost" size="icon"><a href="https://www.linkedin.com/in/ariel-christ-austhen-ngato-8b9895290" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></Button>
            </div>
          </div>
          <div className="relative min-h-[380px] sm:min-h-[420px] overflow-hidden bg-muted lg:col-span-5 lg:min-h-[250px]">
            <img src={profilImage} alt="Portrait d’Ariel Christ Austhen" className="absolute inset-0 h-full w-full object-cover object-top grayscale transition duration-700 hover:grayscale-0" />
            <div className="absolute inset-x-0 bottom-0 bg-primary/90 px-5 py-4 sm:px-7 sm:py-6 text-primary-foreground backdrop-blur-sm"><p className="font-mono text-[10px] uppercase text-blue-foreground">{t.location}</p><p className="mt-2 font-display text-base sm:text-lg font-semibold">{t.available}</p></div>
          </div>
        </section>

        <section id="about" className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div><p className="section-label">{t.profileLabel}</p>
          <h2 className="section-title mt-5">{t.profileTitle}</h2></div>
          <div><p className="text-lg leading-8 text-muted-foreground">{t.profileText}</p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <div className="info-line"><MapPin /><span>{t.location}</span></div>
            <div className="info-line"><GraduationCap /><span>Master Data Science & IA</span>
            </div>
            </div>
            </div></section>

        <section id="projects" className="border-y border-border bg-muted/60"><div className="section-shell"><div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-label">{t.projectsLabel}</p><h2 className="section-title mt-5 max-w-3xl">{t.projectsTitle}</h2></div><p className="max-w-sm text-muted-foreground">{t.projectsIntro}</p></div>
          <div className="grid gap-10 md:grid-cols-2">{t.projects.map((project, index) => <article key={project.title} className={`group ${index % 2 === 1 ? "md:translate-y-12" : ""}`}><a href={project.url} target="_blank" rel="noreferrer" className="block"><div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-card shadow-sm transition duration-500 group-hover:-translate-y-2 group-hover:shadow-panel"><img src={projectImages[index]} alt="" loading="lazy" width={1200} height={750} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" /><span className="absolute left-5 top-5 rounded-full bg-card/90 px-4 py-2 font-mono text-[10px] uppercase text-primary backdrop-blur">{project.tag}</span></div><div className="mt-6 flex items-start justify-between gap-5"><div><h3 className="font-display text-xl font-bold sm:text-2xl">{project.title}</h3><p className="mt-2 leading-7 text-muted-foreground">{project.description}</p><p className="mt-3 font-mono text-xs text-secondary">{project.stack}</p></div><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-primary transition group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground" aria-label={t.projectCta}><ArrowUpRight className="h-4 w-4" /></span></div></a></article>)}</div>
        </div></section>

        <section id="path" className="section-shell"><p className="section-label">{t.pathLabel}</p><h2 className="section-title mt-5">{t.pathTitle}</h2><div className="mt-12 grid gap-12 lg:grid-cols-2"><div>{t.educationItems.map((item) => <article key={item.date} className="grid gap-3 border-t border-border py-7 sm:grid-cols-[130px_1fr]"><p className="font-mono text-xs text-secondary">{item.date}</p><div><h3 className="font-display text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm text-muted-foreground">{item.place}</p></div></article>)}</div><div className="rounded-lg bg-primary p-7 text-primary-foreground sm:p-9"><div className="mb-5 flex items-center gap-3"><BriefcaseBusiness className="h-5 w-5"/><h3 className="font-display text-lg font-semibold">{t.certTitle}</h3></div><div className="divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">{t.certs.map((cert) => <p key={cert} className="py-4 text-sm leading-6 text-primary-foreground/70">{cert}</p>)}</div></div></div></section>

        <section id="skills" className="border-y border-border bg-muted/60"><div className="section-shell"><p className="section-label">{t.skillsLabel}</p><h2 className="section-title mt-5">{t.skillsTitle}</h2><div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">{t.skillGroups.map(([title, skills], index) => { const Icon = skillIcons[index]; return <article key={title} className="bg-card p-7 sm:p-8"><Icon className="h-6 w-6 text-secondary"/><h3 className="mt-6 font-display text-lg font-semibold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{skills}</p></article>; })}</div></div></section>

        <section id="contact" className="m-3 rounded-lg bg-primary px-6 py-14 text-center text-primary-foreground sm:m-8 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-16 lg:text-left"><div><p className="font-mono text-xs uppercase text-blue-foreground">{t.contactLabel}</p><h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">{t.contactTitle}</h2><p className="mt-4 text-primary-foreground/70">{t.contactText}</p></div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:mt-0 lg:justify-end">
        <Button asChild size="lg" variant="outline" className="h-12 rounded-md border-primary-foreground/30 bg-transparent px-5 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href="tel:+254700477731"><Phone />+254 7 004 777 31</a></Button> 
        <Button asChild size="lg" variant="outline" className="h-12 rounded-md border-primary-foreground/30 bg-transparent px-5 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href="tel:+236 72255212"><Phone />+236 72 25 52 12</a></Button>
        <Button asChild size="lg" variant="secondary" className="h-12 rounded-md px-6"><a href="mailto:arielchristngato@outlook.fr">{t.write}<Mail /></a></Button>
         
        </div></section>

        <footer className="flex flex-col gap-3 border-t border-border px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-12"><p>© 2026 Ariel Christ Austhen NGATO NDAMOKOZIADE</p><p>{t.footer}</p></footer>
      </div>
    </main>
  );
};

export default Index;