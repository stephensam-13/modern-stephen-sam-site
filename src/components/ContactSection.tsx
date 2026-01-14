import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const contactLinks = [
  {
    title: 'Email Me',
    value: 'stephensam13@gmail.com',
    href: 'mailto:stephensam13@gmail.com',
    icon: Mail,
  },
  {
    title: 'Connect on LinkedIn',
    value: 'Stephen Sam',
    href: 'https://www.linkedin.com/in/stephen-sam-a47949376/',
    icon: Linkedin,
  },
  {
    title: 'View My GitHub',
    value: 'GitHub Profile',
    href: 'https://github.com/stephensam13',
    icon: Github,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to connect? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <link.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{link.title}</h3>
              <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                {link.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
