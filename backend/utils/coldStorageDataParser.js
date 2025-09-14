const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

/**
 * Parse the state-wise cold storage CSV data
 * @returns {Promise<Array>} Parsed data
 */
const parseStatewiseColdStorageData = () => {
  return new Promise((resolve, reject) => {
    const results = [];
    
    fs.createReadStream(path.join(__dirname, '../data/coldStorage/statewise-data.csv'))
      .pipe(csv())
      .on('data', (data) => {
        // Clean up the data
        const cleanedData = {
          slNo: data['Sl. No.'],
          state: data['State'],
          // Projects and Capacity data by year
          '2017-18': {
            projects: parseInt(data['2017-18 - P']) || 0,
            capacity: parseInt(data['2017-18 - CP']) || 0,
          },
          '2018-19': {
            projects: parseInt(data['2018-19 - P']) || 0,
            capacity: parseInt(data['2018-19 - CP']) || 0,
          },
          '2019-20': {
            projects: parseInt(data['2019-20 - P']) || 0,
            capacity: parseInt(data['2019-20 - CP']) || 0,
          },
          '2020-21': {
            projects: parseInt(data['2020-21 - P']) || 0,
            capacity: parseInt(data['2020-21 - CP']) || 0,
          },
          '2021-22': {
            projects: parseInt(data['2021-22 - P']) || 0,
            capacity: parseInt(data['2021-22 - CP']) || 0,
          },
          // Total projects and capacity
          totalProjects: parseInt(data['Total - P']) || 0,
          totalCapacity: parseInt(data['Total - CP']) || 0,
        };
        
        // Skip the total row
        if (data['State'] !== 'Total') {
          results.push(cleanedData);
        }
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

/**
 * Get summary statistics from the state-wise cold storage data
 * @param {Array} data The parsed CSV data
 * @returns {Object} Summary statistics
 */
const getColdStorageSummary = (data) => {
  const summary = {
    totalProjects: 0,
    totalCapacity: 0,
    stateWithMostProjects: '',
    maxProjects: 0,
    stateWithHighestCapacity: '',
    maxCapacity: 0,
    yearlyGrowth: [],
    projectsByState: [],
    capacityByState: [],
  };

  // Calculate total projects and capacity
  data.forEach((item) => {
    summary.totalProjects += item.totalProjects;
    summary.totalCapacity += item.totalCapacity;

    // Find state with most projects
    if (item.totalProjects > summary.maxProjects) {
      summary.maxProjects = item.totalProjects;
      summary.stateWithMostProjects = item.state;
    }

    // Find state with highest capacity
    if (item.totalCapacity > summary.maxCapacity) {
      summary.maxCapacity = item.totalCapacity;
      summary.stateWithHighestCapacity = item.state;
    }

    // Add to projects by state
    summary.projectsByState.push({
      state: item.state,
      projects: item.totalProjects,
    });

    // Add to capacity by state
    summary.capacityByState.push({
      state: item.state,
      capacity: item.totalCapacity,
    });
  });

  // Sort projects and capacity by state
  summary.projectsByState.sort((a, b) => b.projects - a.projects);
  summary.capacityByState.sort((a, b) => b.capacity - a.capacity);

  // Calculate yearly growth
  const years = ['2017-18', '2018-19', '2019-20', '2020-21', '2021-22'];
  years.forEach((year) => {
    const yearData = {
      year,
      projects: 0,
      capacity: 0,
    };

    data.forEach((item) => {
      yearData.projects += item[year].projects;
      yearData.capacity += item[year].capacity;
    });

    summary.yearlyGrowth.push(yearData);
  });

  return summary;
};

module.exports = {
  parseStatewiseColdStorageData,
  getColdStorageSummary,
};
