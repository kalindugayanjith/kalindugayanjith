import ProfilePage from "./partials/profile";
import HeroPage from "./partials/hero";
import SkillsPage from "./partials/skills";
import ExperiencePage from "./partials/experience";
import KeyskillPage from "./partials/keySkills";
import EducationPage from "./partials/education";
import ContributionPage from "./partials/contribution";
import ProjectPage from "./partials/projects";
import ContactPage from "./partials/contact";


export default function HomePage() {


  return (
    <>
     <div className="page-wrapper parallax-container">
       <HeroPage />
      <ProfilePage />
      <SkillsPage />
      <ExperiencePage />
      <KeyskillPage />
      <EducationPage />
      <ContributionPage />
      <ProjectPage />
      <ContactPage />
     </div>
    </>
  );
}
