# Electron + React Desktop Application

This project demonstrates an Electron desktop application integrated with React, featuring a custom splash screen.

## Features
- **Splash Screen**: Displays an introductory video while the application loads.
- **Electron Framework**: Built using Electron, enabling cross-platform desktop application development with web technologies.
- **React Integration**: The main application window is implemented using a React app.

---

## Prerequisites
Before setting up the project, ensure you have the following installed:
- **Node.js** (version 16 or higher recommended)
- **npm** (or **yarn**)
- **Electron** (installed globally or locally via npm)

---

## File Structure
The file structure for the application is as follows:
- **`main.js`**: The main entry point for the Electron application. Handles the app lifecycle and window creation.
- **`splash.html`**: The HTML file for the splash screen.
- **`preload.js`**: Preloads scripts for communication between the Electron main process and the renderer process.
- **`assets/intro.mp4`**: The video file used in the splash screen.
- **`build/`**: Contains the built React application.

---

## Getting Started
Follow these steps to set up the application:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
2. **Clone the repository**:
   ```bash
   npm install
3. **Install dependencies**:
   ```bash
   npm start   
