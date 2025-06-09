import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, MessageCircle, Github } from 'lucide-react';
import Container from '../shared/Container';
import RatMascot from '../shared/RatMascot';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gradient-to-t from-background-dark to-background relative z-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <RatMascot size="sm" animated={false} />
              <span className="text-xl font-display font-bold gradient-text">SolRat</span>
            </Link>
            <p className="text-text-muted mb-4">
              Small but mighty in the Solana ecosystem.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label="Discord"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-text-muted hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-text-muted hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/roadmap" className="text-text-muted hover:text-accent transition-colors">Roadmap</Link></li>
              <li><Link to="/tokenomics" className="text-text-muted hover:text-accent transition-colors">Tokenomics</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/nft" className="text-text-muted hover:text-accent transition-colors">NFT</Link></li>
              <li><Link to="/dao" className="text-text-muted hover:text-accent transition-colors">DAO</Link></li>
              <li><a href="https://pump.fun" className="text-text-muted hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Pump.fun</a></li>
              <li><a href="https://solana.com" className="text-text-muted hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Solana</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <p className="text-text-muted mb-2">
              <a href="mailto:support@solrat.xyz" className="hover:text-accent transition-colors">
                support@solrat.xyz
              </a>
            </p>
            <Link to="/contact" className="text-accent hover:text-accent-light transition-colors">
              Contact Form
            </Link>
          </div>
        </div>
        
        <div className="border-t border-text-muted/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} SolRat. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-text-muted hover:text-accent text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-text-muted hover:text-accent text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;