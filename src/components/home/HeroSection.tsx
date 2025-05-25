import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Container from '../shared/Container';
import Button from '../shared/Button';
import RatMascot from '../shared/RatMascot';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Maze properties
    const gridSize = 20;
    const cellSize = Math.min(canvas.width, canvas.height) / gridSize;
    
    // Rat properties
    let ratX = cellSize;
    let ratY = canvas.height / 2;
    const ratSpeed = 2;
    let animationStarted = false;
    
    // Draw city grid
    const drawCity = () => {
      ctx.strokeStyle = 'rgba(108, 0, 255, 0.2)';
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Add some "buildings"
      ctx.fillStyle = 'rgba(0, 200, 255, 0.1)';
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * cellSize * 2 + cellSize;
        ctx.fillRect(x, y, size, size);
      }
    };
    
    // Draw rat
    const drawRat = () => {
      ctx.save();
      ctx.translate(ratX, ratY);
      
      // Draw a simple rat silhouette
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.ellipse(0, 0, 20, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw tail
      ctx.beginPath();
      ctx.moveTo(-15, 0);
      ctx.quadraticCurveTo(-30, -10, -40, 0);
      ctx.stroke();
      
      ctx.restore();
    };
    
    // Draw cheese
    const drawCheese = () => {
      ctx.save();
      ctx.translate(canvas.width - cellSize * 2, canvas.height / 2);
      
      ctx.fillStyle = 'rgba(255, 200, 0, 0.8)';
      ctx.beginPath();
      ctx.moveTo(0, -15);
      ctx.lineTo(30, -15);
      ctx.lineTo(30, 15);
      ctx.lineTo(0, 15);
      ctx.closePath();
      ctx.fill();
      
      ctx.restore();
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCity();
      drawCheese();
      
      if (animationStarted) {
        ratX += ratSpeed;
        drawRat();
      }
      
      requestAnimationFrame(animate);
    };
    
    // Start animation after 5 seconds
    setTimeout(() => {
      animationStarted = true;
    }, 5000);
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="min-h-screen pt-24 flex items-center relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ filter: 'blur(1px)' }}
      />
      
      <Container className="flex flex-col md:flex-row items-center justify-between py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="block">Welcome to</span>
            <span className="gradient-text glow-text">SolRat</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-xl">
            Small but mighty in the Solana ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              href="https://pump.fun" 
              variant="primary" 
              externalLink
            >
              Join $SOLRAT on Pump.fun
            </Button>
            
            <Button 
              to="/about" 
              variant="outline"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
        >
          <div className="relative">
            <RatMascot size="xl" />
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ 
                boxShadow: [
                  '0 0 40px rgba(108, 0, 255, 0.4)', 
                  '0 0 80px rgba(0, 200, 255, 0.6)', 
                  '0 0 40px rgba(108, 0, 255, 0.4)'
                ] 
              }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            ></motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;