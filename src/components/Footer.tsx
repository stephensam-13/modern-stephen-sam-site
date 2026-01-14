import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-muted-foreground">
            <img src={logo} alt="Stephen Sam Logo" className="h-8 w-auto" />
            <span className="text-sm">© {new Date().getFullYear()} Stephen Sam. All rights reserved.</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built with passion for DevOps & Cloud
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
