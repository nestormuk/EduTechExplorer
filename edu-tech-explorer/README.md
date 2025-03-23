# EduTechExplorer

EduTechExplorer is a React-based web application designed to help students find universities, training centers, and stay updated on trending technologies. The platform allows users to search for institutions based on location and domain, view details, read reviews, and explore the latest technology trends.

## Features

### University & Training Center Search
- Filter by location, domain, and ratings.
- Display essential details (name, website, location, programs, etc.).
- Fetch data from free public APIs.

### Trending Technologies Feed
- Display the latest trends in AI, software, and hardware.
- Fetch trends using free APIs (Google Trends API, GitHub Trending API, or TechCrunch API).
- Users can view and comment on trends (comments stored locally).

### User Reviews (Stored Locally)
- Users can leave reviews that persist using LocalStorage.
- No backend; data is only saved temporarily on the browser.

### UI Design
- Built with React and Tailwind CSS.
- Clean, responsive design optimized for mobile and desktop.

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js (latest LTS version recommended)
- Git
- npm or yarn

### Clone the Repository
```sh
git clone https://github.com/nestormuk/EduTechExplorer.git
cd EduTechExplorer
```

### Install Dependencies
Using npm:
```sh
npm install
```
Or using yarn:
```sh
yarn install
```

### Run the Project
Using npm:
```sh
npm run dev
```


The application will be available at `http://localhost:3000/`.

## Project Structure
```
EduTechExplorer/
│── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Application pages
│   ├── assets/        # Images, icons, styles
│   ├── App.js         # Main application file
│   ├── index.js       # Entry point
│── public/            # Static assets
│── package.json       # Project metadata and dependencies
│── README.md          # Documentation
```

## Contributing
Feel free to contribute to this project by submitting issues or pull requests.


