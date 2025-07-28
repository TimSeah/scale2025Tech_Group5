# Project Setup and Installation Guide

## Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/TimSeah/scale2025Tech_Group5.git
cd scale2025Tech_Group5
```

### 2. Install Dependencies
```bash
cd technical-demo
npm install
```

### 3. Start Development Server
```bash
npm start
```

### 4. Open Application
- Open browser to `http://localhost:8080`
- SkyLink Airlines demo should load

## Development Environment Setup

### Required Tools
- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher  
- **Git**: Latest version
- **VS Code**: Recommended IDE with SAP extensions

### SAP UI5 CLI Installation
```bash
npm install -g @sap/ui5-cli
```

### VS Code Extensions (Recommended)
- SAP Fiori tools - Extension Pack
- SAP UI5 Language Assistant
- JavaScript (ES6) code snippets
- Git History

## Project Structure Overview

```
scale2025Tech_Group5/
├── README.md                          # Project overview
├── .gitignore                         # Git ignore rules
├── business-solution/                 # Business strategy docs
│   ├── business-strategy.md           # Strategy documentation
│   └── sap-technology-mapping.md      # SAP tech mapping
├── technical-demo/                    # SAP UI5 application
│   ├── package.json                   # Node.js dependencies
│   ├── ui5.yaml                       # UI5 configuration
│   ├── webapp/                        # UI5 webapp structure
│   │   ├── index.html                 # App entry point
│   │   ├── manifest.json              # App descriptor
│   │   ├── Component.js               # Main component
│   │   ├── view/                      # XML views
│   │   │   ├── App.view.xml           # Main app view
│   │   │   └── Challenge1.view.xml    # Challenge 1 view
│   │   ├── controller/                # Controllers
│   │   │   ├── App.controller.js      # Main controller
│   │   │   └── Challenge1.controller.js # Challenge 1 controller
│   │   ├── model/                     # Data models
│   │   │   └── models.js              # Model factory
│   │   └── css/                       # Stylesheets
│   │       └── style.css              # Custom styles
│   └── src/                           # Business logic
│       └── services/                  # Service classes
│           ├── DataIntegrationService.js    # Challenge 1
│           ├── ForecastingService.js        # Challenge 2
│           └── MaintenanceService.js        # Challenge 3
├── presentation/                      # Pitch materials
│   └── pitch-deck-outline.md          # Presentation outline
└── documentation/                     # Technical docs
    ├── technical-architecture.md      # Architecture guide
    └── development-guide.md           # Development guide
```

## Available Scripts

### Development
```bash
npm start          # Start development server
npm run build      # Build for production
npm run lint       # Run linting
npm test           # Run tests (TODO)
```

### UI5 Commands
```bash
ui5 serve          # Start UI5 development server
ui5 build          # Build UI5 application
ui5 tree           # Show dependency tree
```

## Configuration Files

### package.json
- Node.js project configuration
- Dependencies and scripts
- Project metadata

### ui5.yaml  
- UI5 build and serve configuration
- Library dependencies
- Development middleware

### manifest.json
- SAP UI5 application descriptor
- App metadata and configuration
- Data sources and models

## Next Steps

### For Business Team
1. Review `business-solution/business-strategy.md`
2. Update SAP technology mapping
3. Prepare pitch deck content

### For Technical Team  
1. Implement Challenge 1: Data Integration
2. Implement Challenge 2: Forecasting & Pricing
3. Implement Challenge 3: Predictive Maintenance
4. Test and refine user experience

### For Presentation
1. Review `presentation/pitch-deck-outline.md`
2. Prepare demo scenarios
3. Practice technical demonstration

## Troubleshooting

### Common Issues
- **Port 8080 in use**: Change port in `ui5.yaml` or stop conflicting process
- **Module not found**: Run `npm install` to install dependencies
- **UI5 not loading**: Check console for JavaScript errors
- **CORS issues**: Configure proxy in `ui5.yaml`

### Getting Help
- Check `documentation/development-guide.md` for detailed info
- Review SAP UI5 documentation
- Ask team members for assistance

## Contributing

1. Create feature branch from `main`
2. Make changes following project guidelines  
3. Test changes thoroughly
4. Create pull request for review
5. Merge after approval

Ready to elevate SkyLink Airlines with SAP! 🚀
