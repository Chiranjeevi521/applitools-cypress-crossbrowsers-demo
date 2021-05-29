module.exports = {
  concurrency: 1,
  apiKey: 'your applitools api key',
  browserCombo: [
    // Add browsers with different viewports
    { width: 1200, height: 800, name: 'chrome' },
    { width: 1200, height: 800, name: 'firefox' },
    { width: 1200, height: 800, name: 'edgechromium' },
    { width: 1200, height: 800, name: 'safari' },

    // Add mobile emulation devices in Portrait mode
    { deviceName: 'iPhone X', screenOrientation: 'portrait' },
  ],
  // set batch name to the configuration
  batchName: 'Testing Lifecycle',
};
