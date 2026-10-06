# Apex Digital Bank — Complete React Demo

A responsive business-banking frontend prototype with modular React architecture and working demo interactions.

## Structure

```text
src/
├── components/
│   ├── Brand/
│   ├── Navigation/
│   ├── Balance/
│   ├── Accounts/
│   ├── Transactions/
│   ├── QuickActions/
│   └── Modals/
├── pages/
│   ├── Login/
│   ├── Dashboard/
│   ├── Accounts/
│   ├── Payments/
│   ├── Cards/
│   ├── Services/
│   └── Profile/
├── data/
│   └── mock/
├── hooks/
├── lib/
└── App.jsx
```

## Run

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

Demo login: any non-empty Customer ID + password with 4 or more characters.

## Working demo features

- Login validation and biometric simulation
- Persistent demo session, account balances and transactions via localStorage
- Dashboard quick actions
- Account details and demo statements
- Open-account flow
- Transfer and bill-payment flow with validation and balance deduction
- Transaction history and searchable transaction details
- Business card freeze/unfreeze, PIN simulation, replacement request and limit slider
- Business loan/card application flows
- Service navigation and statement actions
- Editable business profile
- Security settings and sign-out
- FAQ accordion and secure support message
- Responsive desktop sidebar and mobile bottom navigation

This is a frontend demonstration only. It does not connect to real banking systems or process real money.
