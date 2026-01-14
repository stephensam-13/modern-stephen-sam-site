import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import project1 from '@/assets/project-1.webp';
import project2 from '@/assets/project-2.webp';
import project3 from '@/assets/project-3.webp';

const projects = [
  {
    title: 'Deploy HTML page Using CloudFront + ACM + Terraform',
    description: 'The full end-to-end setup: S3, SSL, CDN, Terraform, and DNS — with real-world gotchas I faced and how to solve them.',
    image: project1,
    tags: ['AWS', 'S3', 'CloudFront', 'Terraform'],
    link: 'https://medium.com/@stephensam13/host-a-static-html-site-on-s3-with-free-ssl-using-cloudfront-acm-terraform-fe303e660d85',
  },
  {
    title: 'Deploy Dockerized Flask App | Step by Step Guide',
    description: "A beginner's journey into Docker, Flask, and GitHub with Step by Step guide.",
    image: project2,
    tags: ['Docker', 'Flask', 'GitHub'],
    link: 'https://medium.com/@stephensam13/my-first-dockerized-flask-app-from-zero-to-container-c14913a738e8',
  },
  {
    title: 'Deploy Your HTML page to Azure storage with Terraform',
    description: 'A Step-by-Step Guide to deploy a basic HTML page to Azure storage using Terraform IaC.',
    image: project3,
    tags: ['Terraform', 'Azure Storage', 'HTML'],
    link: 'https://medium.com/@stephensam13/deploy-your-html-portfolio-to-azure-with-terraform-a-step-by-step-guide-efc945b2384e',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 md:py-32 bg-card/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title mb-4">
            Latest <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical articles and projects showcasing cloud infrastructure and DevOps practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
