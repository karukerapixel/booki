# Booki - Platform for Finding Accommodations and Activities

Booki is a platform that allows users to search for accommodations and activities in their chosen cities. The project includes essential front-end components such as HTML, CSS (via SASS), and JavaScript to manage data related to accommodations and activities.

## Features

- Search for accommodations and activities in different cities.
- User-friendly design, guided by a mockup provided by our UI Designer, Loïc.
- Responsive layout and optimized styling using SASS.

## Installation

1. **Clone the repository** to your local machine:
   ```
   git clone https://github.com/karukerapixel/booki
   ```
3. **Navigate** to the project directory:
   ```
   cd booki
   ```
4. **Install dependencies**: Make sure you have Node.js installed. Then, run the following command to install the required packages:
   ```
   npm install
   ```
   
6. **Compile SASS files**: After installation, use the following command to compile your SASS styles:
   ```
   npm run sass
   ```

## File Structure

The project folder contains the following structure:
```
📂 root
├── 📄 index.html              # Main HTML structure of the website
├── 📂 assets                  # Folder containing project images
│   └── it contains images for the site
├── 📂 js                      # JavaScript files for functionality
│   ├── accomodations.js       # Manage accommodations data
│   └── activities.js          # Manage activities data
├── 📂 public                  # Shared styles and normalization
│   ├── normalize.css          # CSS reset file
│   └── style.css              # Main stylesheet
└── 📄 package.json            # Project metadata and dependencies
```

## Development

1. Edit `index.html` to modify the main structure of the site.
2. Add images to the `assets` folder.
3. Modify styles by editing the SASS files in the `public` folder. Run `npm run sass` to compile them.
4. Enhance functionality by adding or editing JavaScript code in the `js/` folder.

## Contributing

Feel free to fork the repository and submit pull requests. Please follow best practices when contributing to the project.

## Author

**Karukera Pixel**
