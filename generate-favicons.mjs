import { favicons } from 'favicons';
import { promises as fs } from 'fs';
import path from 'path';

// --- Configuration ---
const source = 'src/assets/logo.svg'; // <-- UPDATED TO .svg
const configuration = {
  path: '/favicons/',
  appName: 'Glimvia',
  appShortName: 'Glimvia',
  appDescription: 'Mobile-first client for Apache Superset',
  developerName: 'Glimvia Team',
  developerURL: "https://glimvia.app",
  background: '#fff',
  theme_color: '#007aff',
  display: "standalone",
  orientation: "portrait",
  start_url: "/",
  version: "1.0",
  logging: true,
  html: 'react_next_metadata_code.json',
  pipeHTML: true,
  replace: true,
};
const outputDir = './public/favicons/';
// -------------------

async function generate() {
  try {
    console.log('Generating favicons...');
    await fs.mkdir(outputDir, { recursive: true });
    const response = await favicons(source, configuration);

    await Promise.all(
      response.images.map(
        async (image) =>
          await fs.writeFile(path.join(outputDir, image.name), image.contents)
      )
    );

    await Promise.all(
      response.files.map(
        async (file) =>
          await fs.writeFile(path.join(outputDir, file.name), file.contents)
      )
    );
    
    console.log('\n✅ Favicons generated successfully!');
    console.log('\n📋 Copy the following metadata object into your src/app/layout.tsx file:\n');
    console.log(response.html);

  } catch (error) {
    console.error('Error generating favicons:', error.message);
  }
}

generate();