## Setup using Dev Containers

1. Make sure you have Docker installed and running.
2. Install the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension for VS Code.
3. Clone the repo, then open the folder using VS Code.
4. Open the VS Code command palette using Ctrl+Shift+P
5. Select the command: "Dev Containers: Reopen in Container". This will spin up a container and install dependencies.
6. Once the container is live, you can use 'Run and Debug' -> 'Vitepress' 
7. Alternately, you can run ```npm run dev``` in the VS Code terminal, then open http://localhost:5173 in your browser.


# devtalk

Scripts for running and debugging are located in package.json (npm run dev) 

config.js under .vitepress describes site layout

.vitepress -> theme -> index.js is for importing arbitrary customizations 
