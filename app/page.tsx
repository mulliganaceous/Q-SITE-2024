import Image from "next/image";
import NavBar from "./navbar";
import Starter from "./starter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section id="home" className="text-center mt-20">
        <h1 className="text-6xl font-bold">2024 Q-SITE Conference</h1>
        <p className="text-xl mt-4">Fri Sept 27th - Sun Sept 29th, 2024</p>
        <p className="text-md">
          Location: University of Toronto (St. George Campus)
        </p>
        <p className="mt-10 text-gray-400">
          15+ Guest Speakers | 10+ Technical Talks and Keynotes | 7 Industry
          Workshops
        </p>
        <p className="text-gray-400">
          1 Hackathon, Lab tours, and Student Poster Session
        </p>
      </section>

      {/* Placeholder for Other Sections */}
      <section id="program" className="mt-24">
        {/* Program content will go here */}
      </section>

      <section id="blog" className="mt-24">
        {/* Blog content will go here */}
      </section>

      <section id="about" className="mt-24">
        {/* About content will go here */}
      </section>

      <section id="contact" className="mt-24">
        {/* Contact content will go here */}
      </section>

      <section id="register" className="mt-24">
        {/* Register content will go here */}
      </section>

      <section id="starter" className="mt-24">
        <Starter />
      </section>
    </main>
  );
}
