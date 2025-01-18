const {app, BrowserWindow} = require('electron')
const path = require('path'); // Import the path module


let splashWindow;
const createWindow = () => {
  const win = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile(path.join(__dirname, 'build/index.html')); // Correctly point to the built React app
}

const createSplashWindow = () => {
    splashWindow = new BrowserWindow({
        width: 400,
        height: 300,
        frame: false, // Remove the window frame
        alwaysOnTop: true, // Keep the splash window on top
        resizable: false, // Disable resizing
        transparent: true, // Allow transparency if needed
        webPreferences: {
        nodeIntegration: true,
        contextIsolation: false, // Allow unrestricted communication
        autoplayPolicy: 'no-user-gesture-required', // Allow autoplay
        },
    })
    
    splashWindow.loadFile(path.join(__dirname, 'splash.html')); // Load a custom HTML file for the splash screen

    // Automatically close the splash screen after the video duration
    setTimeout(() => {
        splashWindow.close();
        splashWindow = null;
        createWindow(); // Open the main window after the splash screen
    }, 5000); // Adjust the duration to match your video length (in milliseconds)
}

// This method will be called wnpmhen Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

// App lifecycle
app.whenReady().then(() => {
    createSplashWindow();
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });


/*
git restore .  # This discards all changes in tracked files.
git clean -fd  # This removes untracked files (like `.DS_Store` and `src/index.html`).
*/