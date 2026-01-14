import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Workflow, Container, Code2, Terminal, Activity, GitBranch, Shield } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: [
      'AWS (EC2, S3, Lambda, VPC, RDS, EKS, SES, SNS, ElastiCache)',
      'Microsoft Azure (VMs, Blob Storage, Azure DevOps, App Service, Redis Cache, Front Door & CDN)',
    ],
  },
  {
    title: 'CI/CD & Automation',
    icon: Workflow,
    skills: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'Azure Pipelines'],
  },
  {
    title: 'Containerization & Orchestration',
    icon: Container,
    skills: ['Docker', 'Kubernetes (K8s)', 'Amazon EKS', 'Helm'],
  },
  {
    title: 'Infrastructure as Code',
    icon: Code2,
    skills: ['Terraform', 'Ansible', 'CloudFormation'],
  },
  {
    title: 'Scripting & Programming',
    icon: Terminal,
    skills: ['Bash'],
  },
  {
    title: 'Monitoring & Logging',
    icon: Activity,
    skills: ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch'],
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
  },
  {
    title: 'Networking & Security',
    icon: Shield,
    skills: ['TCP/IP', 'DNS', 'Firewalls', 'Security Best Practices'],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build scalable infrastructure and automate deployments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
