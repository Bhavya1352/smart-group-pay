import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  Heart,
  CreditCard,
  Shield,
  Smartphone
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <CreditCard className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Smart Expense Splitter</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The most intuitive way to split expenses with friends, roommates, and travel companions.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Features</div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Pricing</div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">API</div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Mobile App</div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Integrations</div>
            </div>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">About Us</div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Blog</div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Careers</div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Contact</div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Press Kit</div>
            </div>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Help Center</div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Documentation</div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Community</div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Status</div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Report Bug</div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</div>
            <div className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</div>
            <div className="hover:text-foreground transition-colors cursor-pointer">Cookie Policy</div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Secured by Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span>Mobile Ready</span>
            </div>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by the Smart Expense Splitter team
          </p>
          <p className="mt-2">© 2024 Smart Expense Splitter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;