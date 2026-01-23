<h1>Set Up:</h1>
<p>Download the latest version of Node.js: https://nodejs.org/en/download</p>

<h2>Install Tailwind CSS v4 on CLI</h2>
<ol>
  <li>Initialize a JavaScript/Node.js Project</li>
  
  `npm init -y`
  
  <li>Install Tailwind CSS</li>

  `npm install tailwindcss @tailwindcss/cli`
  
  <li>Create New Directory for CSS Styles</li>

    project
    ├── src 
    ├──── input.css 
    
  <li>Import in <b>input.css</b>File</li>

  `@import "tailwindcss";`

  <li>Create Directory and move <b>index.html</b> to the new directory</li>

    project
    ├── src 
    ├──── input.css 
    ├──── index.html 

  <li>Paste as script, in <b>package.json</b> File</li>

  `"dev": "npx @tailwindcss/cli -i ./src/input.css -o ./src/styles.css --watch"`
  
</ol>

<h2>Install (Backend)</h2>
<ol>
  <li>Install Node.js Frameworks</li>

  `npm install express nodemailer cors`
  
  <li>Paste as script, in <b>package.json</b> File</li>

  `"start": "node server.js"`
  
</ol>

<h2>Run</h2>
<ul>
  <li>Run:</li>

  `npm run dev`
</ul>