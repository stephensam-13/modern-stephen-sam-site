import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImage from '@/assets/about-image.jpeg';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="section-title mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Stephen Sam, a passionate DevOps Engineer with a knack for streamlining 
                development workflows and building robust, scalable infrastructure. My journey in 
                tech has been driven by a fascination with automation, cloud computing, and continuous delivery.
              </p>
              <p>
                With a strong foundation in both Linux and DevOps, I specialize in bridging the gap 
                between Dev and Ops teams, fostering a culture of collaboration and efficiency. I have 
                hands-on experience with a wide array of tools and technologies, from cloud platforms 
                like AWS and Azure to containerization with Docker and Kubernetes, and automation with 
                Terraform and Ansible.
              </p>
              <p>
                My goal is to leverage my expertise to contribute to projects that push the boundaries 
                of technology, always seeking to optimize performance, enhance security, and ensure 
                seamless deployments.
              </p>
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-2xl" />
              <img
                src={aboutImage}
                alt="Stephen Sam working"
                className="relative rounded-2xl shadow-elevated w-full aspect-square object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
