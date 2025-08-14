import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full px-6 py-2 border border-border">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Ready to get started?</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Start Splitting Expenses
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Like a Pro
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of users who trust Smart Expense Splitter to manage their shared finances. 
              Set up your first group in under 2 minutes.
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                <span>Bank-level security</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>2-minute setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span>Instant settlements</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                variant="premium" 
                size="xl" 
                className="group min-w-[200px]"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="min-w-[200px] border-border/50 bg-card/20 backdrop-blur-sm hover:bg-card/40"
              >
                Schedule Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-8 text-sm text-muted-foreground">
              <p>No credit card required • Free 14-day trial • Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;