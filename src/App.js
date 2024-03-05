import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import SearchSection from '../src/components/SearchSection'; // Adjust the path if your file is in a different directory

function App() {
  return (
    <>
      <NavigationBar />
      <Container className="mt-5">
        
        {/* Carousel Component */}
        <Carousel className="mb-5">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=First+slide"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Second+slide"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Third+slide"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <section className="text-section mt-4">
          <h2>Why water tank cleaning is a professional job?</h2>
          <p>
            Home water tank cleaning can be a professional job for several reasons. Here are some reasons why:
          </p>
          <ul>
            <li><strong>Safety concerns:</strong> Water tanks can contain harmful bacteria, viruses, and other contaminants. If not cleaned properly, these contaminants can cause health problems, especially for people with weak immune systems. Professionals have the necessary skills, knowledge, and equipment to ensure that the tank is thoroughly cleaned and disinfected.</li>
            <li><strong>Technical expertise:</strong> Water tanks come in various types and sizes, and each requires different cleaning methods. Professionals have the technical expertise to identify the type of tank and the appropriate cleaning method to use. They also have the necessary equipment and tools to get the job done efficiently.</li>
            <li><strong>Compliance with regulations:</strong> In some areas, there are regulations and standards that water tanks must meet to ensure the safety of the water supply. Professional water tank cleaners are familiar with these regulations and can ensure that the tank is cleaned and maintained to meet them.</li>
            <li><strong>Access to chemicals and cleaning agents:</strong> Professional cleaners have access to specialized cleaning chemicals and agents that are effective in removing bacteria, viruses, and other contaminants. These chemicals are not always available to the general public and require specific handling and safety measures.</li>
          </ul>
          
        </section>
        <SearchSection />
      </Container>
      <Footer />
    </>
  );
}

export default App;
