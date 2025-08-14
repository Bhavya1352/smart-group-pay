# Smart Expense Splitter

A full-stack web application for splitting expenses among groups with payment integration, multi-currency support, and AI categorization.

## Features

- **Authentication**: Email/password & Google OAuth
- **Group Management**: Create/manage expense groups
- **Expense Tracking**: Add expenses with receipts, auto-categorization (OpenAI)
- **Multi-Currency**: Auto conversion (CurrencyLayer/Fixer API)
- **Payments**: Stripe integration for settlements
- **Reports**: PDF/CSV export
- **Notifications**: Email & push notifications

## Tech Stack

**Frontend**: React/Next.js, TailwindCSS, React Query
**Backend**: Node.js, Express/NestJS, PostgreSQL, Prisma
**Services**: Stripe, OpenAI, CurrencyLayer, SendGrid

## Quick Setup

```bash
# Clone repo
git clone https://github.com/yourusername/smart-expense-splitter.git
cd smart-expense-splitter

# Backend setup
cd backend
npm install
cp .env.example .env  # Configure your API keys
npx prisma migrate dev
npm run dev

# Frontend setup (new terminal)
cd frontend
npm install
cp .env.local.example .env.local  # Configure environment
npm run dev
```

## Environment Variables

**Backend (.env)**
```env
DATABASE_URL="postgresql://..."
JWT_SECRET="your-secret"
STRIPE_SECRET_KEY="sk_..."
OPENAI_API_KEY="sk-..."
CURRENCYLAYER_API_KEY="..."
SENDGRID_API_KEY="..."
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
```

**Frontend (.env.local)**
```env
NEXT_PUBLIC_API_URL="http://localhost:5000"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_..."
```

## Database Schema

- **User**: Authentication & profile
- **Group**: Expense groups
- **GroupMember**: Group membership
- **Expense**: Individual expenses
- **Settlement**: Payment records
- **Notification**: User notifications

## Key API Endpoints

- `POST /api/auth/login` - Authentication
- `GET /api/groups` - User groups
- `POST /api/groups/:id/expenses` - Add expense
- `GET /api/groups/:id/balances` - Group balances
- `POST /api/settlements/:id/pay` - Process payment

## Deployment

**Frontend**: Vercel/Netlify
**Backend**: Render/Railway
**Database**: Supabase/Neon.tech

## Contributing

1. Fork the repo
2. Create feature branch
3. Submit pull request

## License

MIT License
