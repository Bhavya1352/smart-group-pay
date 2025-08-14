import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Calendar,
  Receipt,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const mockGroups = [
  {
    id: 1,
    name: "Weekend Trip",
    members: 4,
    balance: 125.50,
    expenses: 8,
    status: "active"
  },
  {
    id: 2,
    name: "Apartment Rent",
    members: 3,
    balance: -45.00,
    expenses: 12,
    status: "settled"
  },
  {
    id: 3,
    name: "Office Lunch",
    members: 6,
    balance: 23.25,
    expenses: 5,
    status: "active"
  }
];

const recentExpenses = [
  {
    id: 1,
    description: "Dinner at Italian Restaurant",
    amount: 89.50,
    paidBy: "John",
    group: "Weekend Trip",
    date: "2024-01-15",
    category: "Food"
  },
  {
    id: 2,
    description: "Uber Ride",
    amount: 24.75,
    paidBy: "Sarah",
    group: "Weekend Trip",
    date: "2024-01-15",
    category: "Transport"
  },
  {
    id: 3,
    description: "Grocery Shopping",
    amount: 156.30,
    paidBy: "Mike",
    group: "Apartment Rent",
    date: "2024-01-14",
    category: "Groceries"
  }
];

const DashboardPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Financial
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a complete overview of all your shared expenses, group balances, and recent activity at a glance.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-slide-up">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                <DollarSign className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">+$103.75</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success">+12%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Groups</CardTitle>
                <Users className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-primary">+1</span> new group
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Month</CardTitle>
                <TrendingUp className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,247</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-warning">+8%</span> vs last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Expenses</CardTitle>
                <Receipt className="h-4 w-4 text-info" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">25</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-info">5</span> pending approval
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Groups */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-scale-in">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Your Groups</CardTitle>
                  <CardDescription>Manage your expense groups</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Group
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockGroups.map((group, index) => (
                  <div 
                    key={group.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-gradient-hero">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {group.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {group.members} members • {group.expenses} expenses
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-medium ${group.balance > 0 ? 'text-success' : 'text-destructive'}`}>
                        {group.balance > 0 ? '+' : ''}${Math.abs(group.balance).toFixed(2)}
                      </div>
                      <Badge variant={group.status === 'active' ? 'default' : 'secondary'} className="text-xs">
                        {group.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Expenses */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-scale-in">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Recent Expenses</CardTitle>
                  <CardDescription>Latest activity across all groups</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Expense
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentExpenses.map((expense, index) => (
                  <div 
                    key={expense.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-gradient-accent">
                        <Receipt className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {expense.description}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {expense.group} • Paid by {expense.paidBy}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${expense.amount}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(expense.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="group">
                <CreditCard className="h-5 w-5 mr-2" />
                Settle Payments
                <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
              <Button variant="accent" size="lg" className="group">
                <Receipt className="h-5 w-5 mr-2" />
                Upload Receipt
                <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <TrendingUp className="h-5 w-5 mr-2" />
                Export Report
                <ArrowDownRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;