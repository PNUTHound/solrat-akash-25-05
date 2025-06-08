import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Container from '../shared/Container';
import Button from '../shared/Button';
import RatMascot from '../shared/RatMascot';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = [
      '#14F195', '#9333EA', '#3B82F6', '#F59E0B', '#10B981'
    ];

    const particles: Particle[] = [];
    const numParticles = 40;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        radius: Math.random() * 2 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="min-h-screen pt-24 flex items-center relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ filter: 'blur(0.8px)' }}
      />

      <Container className="flex flex-col md:flex-row items-center justify-between py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="block text-text">Welcome to</span>
            <span className="gradient-text glow-text">SolRat</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-muted mb-8 max-w-xl">
            Small but mighty in the Solana ecosystem.
          </p>
          <p className="text-xl md:text-1xl text-text-muted mb-8 max-w-xl">
            CA:-4dPY9VD4J2zvebvY9bUwngmVNQewhwFEMKV8uQStpump.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              href="https://pump.fun/coin/4dPY9VD4J2zvebvY9bUwngmVNQewhwFEMKV8uQStpump" 
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
          transition={{ duration: 0.8, delay: 2.2 }}
          className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
        >
          <div className="relative">
            <RatMascot size="xl" />
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ 
                boxShadow: [
                  '0 0 40px rgba(var(--color-primary), 0.4)', 
                  '0 0 80px rgba(var(--color-accent), 0.6)', 
                  '0 0 40px rgba(var(--color-primary), 0.4)'
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
