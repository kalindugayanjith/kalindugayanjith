import ProfilePage from "./partials/profile";
import Hero from "./partials/hero";

export default function HomePage() {


  return (
    <>
     <div className="page-wrapper">
       <Hero />
      <ProfilePage />
     </div>
    </>
  );
}
