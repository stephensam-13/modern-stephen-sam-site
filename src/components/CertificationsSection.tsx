import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';
import certRhcsa from '@/assets/cert-rhcsa.webp';
import certAzure from '@/assets/cert-azure.webp';

const certifications = [
  {
    title: 'Red Hat Certified System Administrator (RHCSA)',
    credential: 'Credential ID: 170-073-266',
    status: 'Issued: January 2022 (Expired)',
    image: certRhcsa,
  },
  {
    title: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
    credential: '(Pursuing)',
    status: 'Credential not yet issued',
    image: certAzure,
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-20 md:py-32 bg-background">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications validating expertise in cloud and system administration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
              <p className="text-primary text-sm font-medium mb-1">{cert.credential}</p>
              <p className="text-muted-foreground text-sm">{cert.status}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
