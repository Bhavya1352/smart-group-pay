import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Receipt, 
  CreditCard, 
  Smartphone, 
  Globe, 
  Bot,
  FileText,
  Bell
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Group Management",
    description: "Create and manage expense groups for trips, roommates, or any shared costs.",
    color: "text-primary"
  },
  {
    icon: Receipt,
    title: "Receipt Tracking",
    description: "Upload and attach receipts to expenses for complete record keeping.",
    color: "text-accent"
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Settle balances instantly with Stripe-powered secure online payments.",
    color: "text-success"
  },
  {
    icon: Globe,
    title: "Multi-Currency",
    description: "Support for multiple currencies with real-time conversion rates.",
    color: "text-info"
  },
  {
    icon: Bot,
    title: "AI Categorization",
    description: "Smart expense categorization powered by OpenAI for better organization.",
    color: "text-warning"
  },
  {
    icon: FileText,
    title: "Export Reports",
    description: "Generate detailed PDF and CSV reports for all your expense data.",
    color: "text-primary"
  },
  {
    icon: Smartphone,
    title: "Real-time Updates",
    description: "Get instant notifications when expenses are added or payments made.",
    color: "text-accent"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Email and push notifications keep everyone in the loop automatically.",
    color: "text-success"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Split Smart</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to make expense sharing effortless and transparent for everyone involved.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-xl bg-gradient-hero group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;