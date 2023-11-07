import './App.css';
import { useEffect, useState } from "react";
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Footer from './Components/Footer';

function App() {
  const [primary, setPrimary] = useState('white');
  const [secondary, setSecondary] = useState('black');
  
  return (
    <>
      <div style={{ background: 'linear-gradient(LightSkyBlue, black)'}}>
        <Navbar />
        <div className="text-center row align-content-center justify-content-center">
          <p className="heading border-bottom" >Heaveon</p>
          <h1 className='my-3'>Welcome to the Future!</h1>
          <span className='text-wrap w-50'>Prepare for a mind-blowing experience with InnovElite's cutting-edge IT solutions. We're the trailblazers of tech, fusing science fiction with reality.</span>
          <div className="container features">
            <h1 className='my-3'>Our Features</h1>
            <span className='w-50'>Discover the unique features that set us apart</span>
            <div className="d-flex flex-column my-4">
              <Card align='start' primary={primary} secondary={secondary} title='Cloud-based Solutions' caption='Leverage the power of the cloud to streamline your operations and increase efficiency.' url='#' />
              <Card align='end' primary={primary} secondary={secondary} title='Cutting-edge Technology' caption='Stay ahead of the curve with our advanced technological solutions tailored to your business.' url='#' />
              <Card align='start' primary={primary} secondary={secondary} title='Personalized Approach' caption='We understand that every business is unique, and we provide customized solutions to meet your specific requirements.' url='#' />
              <Card align='end' primary={primary} secondary={secondary} title='24/7 Support' caption='Our dedicated support team is available round the clock to assist you with any queries or issues.' url='#' />
              <Card align='start' primary={primary} secondary={secondary} title='Data Security' caption='Rest assured that your data is safe and secure with our robust security measures.' url='#' />
              <Card align='end' primary={primary} secondary={secondary} title='Seamless Integration' caption='Integrate our solutions seamlessly with your existing systems for a smooth transition.' url='#' />
            </div>
            <div class="row my-5" style={{ color: primary }}>
              <div class="col-4">
                <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4">
                  <nav class="nav nav-pills flex-column">
                    <span className='fs-1 fw-bolder'> Frequently Asked Questions</span>
                    <a class="nav-link fst-italic fw-semibold"  style={{ color: primary }} href="#item-1">How can I contact your support team?</a>
                    <a class="nav-link fst-italic fw-semibold"  style={{ color: primary }} href="#item-2">Do you offer a free trial?</a>
                    <a class="nav-link fst-italic fw-semibold"  style={{ color: primary }} href="#item-3">What industries do you cater to?</a>
                    <a class="nav-link fst-italic fw-semibold"  style={{ color: primary }} href="#item-4">Can you customize your solutions according to my business needs?</a>
                    <a class="nav-link fst-italic fw-semibold"  style={{ color: primary }} href="#item-5">What are your pricing plans?</a>
                    <a class="nav-link fst-italic fw-semibold"  style={{ color: primary }} href="#item-6">Are my data and information secure with Heaveon?</a>
                  </nav>
                </nav>
              </div>

              <div class="col-8">
                <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2 text-start" tabindex="0">
                  <div id="item-1">
                    <span className='pb-0 fs-3 fw-bold mb-0'>How can I contact your support team?</span>
                    <p>You can reach our support team by emailing support@heaveon.com or calling our helpline at +1-123-456-7890.</p>
                  </div>
                  <div id="item-2">
                    <span className='pb-0 fs-3 fw-bold mb-0'>Do you offer a free trial?</span>
                    <p>Yes, we offer a free trial period for you to experience our services before making a commitment.</p>
                  </div>
                  <div id="item-3">
                    <span className='pb-0 fs-3 fw-bold mb-0'>What industries do you cater to?</span>
                    <p>We cater to a wide range of industries including technology, healthcare, finance, and more.</p>
                  </div>
                  <div id="item-4">
                    <span className='pb-0 fs-3 fw-bold mb-0'>Can you customize your solutions according to my business needs?</span>
                    <p>Absolutely! We understand that every business has unique requirements, and we provide personalized solutions tailored to your specific needs.</p>
                  </div>
                  <div id="item-5">
                    <span className='pb-0 fs-3 fw-bold mb-0'>What are your pricing plans?</span>
                    <p>We offer flexible pricing plans based on the scale and requirements of your business. Please contact our sales team for detailed information.</p>
                  </div>
                  <div id="item-6">
                    <span className='pb-0 fs-3 fw-bold mb-0'>Are my data and information secure with Heaveon?</span>
                    <p>Yes, we prioritize data security and have robust measures in place to ensure the confidentiality and integrity of your information.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer primary='transparent' secondary={primary} />
      </div>

    </>
  );
}

export default App;
