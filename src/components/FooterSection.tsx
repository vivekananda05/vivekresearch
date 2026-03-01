import { Github, Linkedin, Mail } from "lucide-react";

const FooterSection = () => (
  <footer id="contact" className="section-padding border-t border-border">
    <div className="container max-w-4xl text-center">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Interested in collaboration or discussing research? Feel free to reach out.
      </p>
      <div className="flex justify-center gap-6 mb-12">
        <a href="mailto:vivekananda@iitb.ac.in" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <Mail size={18} /> Email
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} /> GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} /> LinkedIn
        </a>
      </div>
      <p className="text-xs text-muted-foreground/50">
        © 2025 Vivekananda Giri. Built with precision.
      </p>
    </div>
  </footer>
);

export default FooterSection;
