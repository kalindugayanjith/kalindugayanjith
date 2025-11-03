import Footer from "./footer";
import Navbar from "./navbar";

export default function AppLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
