import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create Backup which will be restored after publishing
fs.rename(path.resolve(__dirname, '../package-bak.json'), path.resolve(__dirname, '../package.json'), () =>{});
