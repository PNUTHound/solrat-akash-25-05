import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Twitter, MessageCircle, Mail, Send } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import Container from '../shared/Container';
import AnimatedSection from '../shared/AnimatedSection';
import Button from '../shared/Button';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase configuration is missing');
      }

      const { error: supabaseError, data } = await supabase
        .from('contacts')
        .insert([formData])
        .select();
      
      if (supabaseError) {
        throw supabaseError;
      }
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(
        err instanceof Error 
          ? err.message 
          : 'Failed to submit form. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const socialLinks = [
    {
      icon: <Twitter size={24} />,
      name: 'Twitter',
      url: 'https://twitter.com'
    },
    {
      icon: <MessageCircle size={24} />,
      name: 'Telegram',
      url: 'https://t.me'
    },
    {
      icon: <Mail size={24} />,
      name: 'Email',
      url: 'mailto:support@solrat.xyz'
    }
  ];

  return (
    <section className="section-padding relative">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Have questions or want to join the SolRat community? Reach out to us.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection direction="left">
            <div className="glassmorphism rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold gradient-text mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-lg font-medium mb-2">Our Communities</h4>
                  <p className="text-text-muted">
                    Join our active communities across various platforms to stay updated and connect with other SolRat enthusiasts.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Support</h4>
                  <p className="text-text-muted">
                    Need help or have questions? Our support team is available 24/7 to assist you.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Partnerships</h4>
                  <p className="text-text-muted">
                    Interested in partnering with SolRat? Contact our team to discuss potential collaborations.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-medium mb-2">Connect With Us</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-secondary/60 hover:bg-secondary transition-colors px-4 py-3 rounded-lg text-text"
                      whileHover={{ y: -3 }}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right">
            <div className="glassmorphism rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold gradient-text mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-accent/20 text-accent p-6 rounded-lg text-center h-[400px] flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mb-4">
                    <Send size={32} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-text-muted">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/20 text-red-500 p-4 rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-text-muted mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary/60 border border-primary/30 focus:border-accent focus:outline-none transition-colors text-text"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-text-muted mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary/60 border border-primary/30 focus:border-accent focus:outline-none transition-colors text-text"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-text-muted mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary/60 border border-primary/30 focus:border-accent focus:outline-none transition-colors text-text"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Support">Support</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-text-muted mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/60 border border-primary/30 focus:border-accent focus:outline-none transition-colors resize-none text-text"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;