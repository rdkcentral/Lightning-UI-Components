var LineReaderSync = require('line-reader-sync');
const fs = require('fs');

/**
 * Finds all the elements and patterns and what style value they are using
 * @param {string} component - name of the actual component
 * @param {string} path - file path to get to the component
 * @param {string} name - name of the parent component in case the child component does not have a .mdx file
 * @returns {string} holds the url the user would navigate to when a component is clicked
 */
export function getStorybookLinks(component, path, name) { 
    //get mdx paths
    const originalPath = `./${path}/${component}.mdx`;;
    let modifiedPath = originalPath;
    if (component != name) { //this is incase there are multiple elements nested inside of one folder
        modifiedPath = `./${path}/${name}.mdx`
        if (!fs.existsSync(modifiedPath)) {
            modifiedPath = originalPath; //this is in case there are multiple elements nested inside of one folder but not all of them have .mdx files
        }
    }
    if (!fs.existsSync(modifiedPath)) { //this is if even after all the checks a file is formated weird or does not exist
        return;
    }
    const lrs = new LineReaderSync(modifiedPath);
    const storyIdString = '<Story id'; // starting point of the line we're searching for
    const urlStart = '../?path=/docs/'; //beginning url of component's storybook documentation page
    while (true) {
        //start searching for the storybook url line
        const line = lrs.readline();
        if (line.includes(storyIdString)) {
            const firstQuotation = line.indexOf(('"'));
            const firstSubstring = line.substring(firstQuotation + 1, line.length - 1);
            const removeCharacters = firstSubstring.replace(' ', '').replace('"', '').replace('/', '');
            const url = urlStart.concat(removeCharacters);
            return url;
        }
    }
}