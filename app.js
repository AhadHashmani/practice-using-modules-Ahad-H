/* ==========================================================================
   MODULES & PACKAGE MANAGEMENT - WRITTEN RESPONSES
   ==========================================================================
   
   1. Purpose of package.json in managing dependencies:
      - `package.json` acts as the manifest for a Node.js project. It keeps track 
        of project metadata (name, version, scripts) and explicitly lists all 
        external packages (and their version ranges) required for the project to run.

   2. Why node_modules should NOT be included in version control:
      - The `node_modules` folder contains thousands of nested files and can easily 
        grow to hundreds of megabytes. Including it bloats repository size, slows down 
        Git operations, and can introduce OS-specific binary incompatibilities across 
        team members' machines.

   3. How 'npm install' reinstalls dependencies and its importance:
      - Running `npm install` reads the `package.json` (and `package-lock.json`) file 
        and downloads all listed dependencies into a freshly generated `node_modules` 
        folder. In collaborative environments, developers can clone a lightweight repo, 
        run `npm install`, and instantly recreate an identical development environment.
   ========================================================================== */

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const chalk = require('chalk');

// Parse command-line arguments using yargs
const argv = yargs(hideBin(process.argv))
  .option('city', {
    alias: 'c',
    type: 'string',
    description: 'Name of the city to fetch weather for',
    demandOption: true,
  })
  .help()
  .argv;

// Simulated weather database
const weatherData = {
  'new york': { temp: '72°F', condition: 'Sunny', humidity: '45%' },
  'austin': { temp: '88°F', condition: 'Partly Cloudy', humidity: '55%' },
  'london': { temp: '60°F', condition: 'Light Rain', humidity: '80%' },
  'tokyo': { temp: '68°F', condition: 'Clear', humidity: '50%' },
  'houston': { temp: '85°F', condition: 'Humid & Sunny', humidity: '70%' },
};

// Function to simulate fetching and displaying weather
function getWeather(cityName) {
  const normalizedCity = cityName.trim().toLowerCase();
  const data = weatherData[normalizedCity];

  console.log(chalk.bold.cyan('\n========================================'));
  console.log(chalk.bold.yellow(`     WEATHER REPORT FOR: ${cityName.toUpperCase()}`));
  console.log(chalk.bold.cyan('========================================'));

  if (data) {
    console.log(chalk.green(`  Temperature: `) + chalk.bold.white(data.temp));
    console.log(chalk.blue(`  Condition:   `) + chalk.bold.white(data.condition));
    console.log(chalk.magenta(`  Humidity:    `) + chalk.bold.white(data.humidity));
  } else {
    console.log(chalk.green(`  Temperature: `) + chalk.bold.white('75°F'));
    console.log(chalk.blue(`  Condition:   `) + chalk.bold.white('Sunny with mild breezes'));
    console.log(chalk.magenta(`  Humidity:    `) + chalk.bold.white('50%'));
    console.log(chalk.gray('\n  (Note: Generated default simulated data for this location)'));
  }

  console.log(chalk.bold.cyan('========================================\n'));
}

// Execute app
getWeather(argv.city);