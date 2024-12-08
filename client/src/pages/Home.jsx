import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dctr1 from '../assets/dctr1.jpg'
import dctr2 from '../assets/dctr2.jpg'
import dctr3 from '../assets/dctr3.jpg'
import mee from '../assets/mee.jpg'
import { Link } from 'react-router-dom';


function Home() {

  const token = sessionStorage.getItem("token")
  console.log(token);
  


  return (
    <div className="bg-background text-foreground">
      <Header  className=""/>
      
      <section className="container mx-auto p-8 lg:p-16 bg-background text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0 lg:space-x-16">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold mb-4">We help patients live a healthy, longer life.</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quaerat cumque fugit, perspiciatis cum nemo aperiam, aut quia earum amet architecto, modi odio. Soluta unde ducimus perferendis?
            </p>
            {token?
            <Link to="/doctors">
            <button className="bg-blue-600  hover:bg-primary/80 transition-all px-6 py-3 rounded-lg shadow-lg">
              Request an Appointment
            </button>
            </Link>
            :
            <Link to="/login">
            <button className="bg-blue-600  hover:bg-primary/80 transition-all px-6 py-3 rounded-lg shadow-lg">
              Get start...
            </button>
            </Link>
            
          }
            
            <div className="mt-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
              <Stat label="Years of Experience" value="30+" />
              <Stat label="Clinic Locations" value="15+" />
              <Stat label="Patient Satisfaction" value="100%" />
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center items-center space-x-4">
            <img className="rounded-lg shadow-lg w-1/3" src={dctr1} alt="Doctor" />
            <img className="rounded-lg shadow-lg w-1/3" src={dctr2} alt="Doctor" />
            <img className="rounded-lg shadow-lg w-1/3" src={dctr3} alt="Doctor" />
          </div>
        </div>
      </section>
      
      <section className="bg-background py-16">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-primary">Providing the best medical services</h2>
          <p className="text-muted-foreground">World-class care for everyone. Our health system offers unmatched, expert health care.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard icon="👨‍⚕️" title="Find a Doctor" description="World-class care for everyone. Our health System offers unmatched, expert health care." />
            <ServiceCard icon="📍" title="Find a Location" description="Find the nearest clinic for quick access to healthcare services." />
            <ServiceCard icon="📅" title="Book Appointment" description="Book an appointment at your convenience and ensure timely medical care." />
          </div>
        </div>
      </section>
      
      <TestimonialSection />
      <Footer />
    </div>
  );
}

const Stat = ({ label, value }) => (
  <div className="text-center">
    <span className="text-3xl font-bold text-foreground">{value}</span>
    <p className="text-muted-foreground">{label}</p>
  </div>
);

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-card p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-primary">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const TestimonialSection = () => (
  <section className="py-16 bg-background ">
    <div className="max-w-5xl mx-auto text-center space-y-6">
      <h2 className="text-3xl font-bold text-foreground">What our patients say</h2>
      <p className="text-muted-foreground">World-class care for everyone. Our health system offers unmatched, expert health care.</p>
      <div className="flex flex-wrap justify-center gap-6 mt-8 transition-transform transform hover:scale-105 text-center">
        <Testimonial name="Muhibur Rahman" rating={4} review="I have taken medical services from them. They treat so well and they are providing the best medical services." />
        <Testimonial name="Alfaz Ahmed" rating={5} review="The best experience with healthcare professionals! Highly recommend their services." />
        <Testimonial name="Regina Albert" rating={4} review="They are dedicated and provide excellent care. Truly a trusted place for health services." />
      </div>
    </div>
  </section>
);

const Testimonial = ({ name, rating, review }) => (
  <div className="p-6 border border-border rounded-lg shadow-md bg-card w-64">
    <div className="flex items-center mb-4">
      <img className="w-12 h-12 rounded-full" src={mee} alt="Patient Avatar" />
      <div className="ml-3">
        <h3 className="font-semibold text-foreground">{name}</h3>
        <div className="flex space-x-1">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? "text-yellow-400" : "text-zinc-300"}>★</span>
          ))}
        </div>
      </div>
    </div>
    <p className="text-muted-foreground">{review}</p>
  </div>
);

export default Home;
