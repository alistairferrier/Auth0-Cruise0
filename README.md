Demo Installation

Build Notes Here: https://github.com/alistairferrier/Auth0-Cruise0/blob/3b35711fed106eb7f08fa0d653c7ad3bf42796f2/Cruise0%20Demo%20Customisation%20Notes.docx

Prerequisites:

Node.js https://nodejs.org/en/ 

Node Version Manager (NVM)  https://github.com/coreybutler/nvm-windows/releases/download/1.1.8/nvm-setup.zip

1.	Install Node.js runtime https://nodejs.org/en/
2.	Install the React SDK (installed by npm)
3.	Install NVM  (node version manager)
4.	Visual Studio Code (maybe optional) https://code.visualstudio.com/  (Bash terminal option installed)

5.	Commands for runtime setup (run from VS Code bash terminal in app path)

  npm install
  
  nvm install 12    (note: demo uses v12.22.7)
  
  nvm use 12
  
  npm install @auth0/auth0-react
  
  node –version   ( should be 12.xx)
  
  npm run dev
  
  visit http://localhost:3000/
  
