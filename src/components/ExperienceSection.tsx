import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Grozeo International Pvt Ltd',
    location: 'Trivandrum',
    role: 'Cloud & DevOps Engineer',
    period: 'Jul 2022 – Present',
    current: true,
  },
  {
    company: 'Sherji Tech Pvt LTD',
    location: 'Trivandrum',
    role: 'Senior System Administrator',
    period: 'March 2020 – June 2022',
    current: false,
  },
  {
    company: 'IntegralHost',
    location: 'Kochi',
    role: 'Jr. Linux Administrator',
    period: 'June 2017 – May 2018',
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in DevOps and system administration.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 top-6 w-3 h-3 -ml-1.5 rounded-full bg-primary shadow-glow hidden md:block" />

                <div className="glass rounded-xl p-6 md:ml-16 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
