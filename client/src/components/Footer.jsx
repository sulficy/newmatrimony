import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="bg-gray-300 text-foreground p-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
              <span className="text-primary text-2xl font-bold">+ Medicare</span>
              <p className="text-sm text-muted-foreground">
                © 2023 developed by Muhibur Rahman. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                Facebook
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-3">I want to:</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Find a Doctor
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Request an Appointment
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Find a Location
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-3">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
