const fs = require('fs');
const path = require('path');
const { fork } = require('child_process');

console.log('   __ _       _     _         _                    _____  ');
console.log('  / /(_) __ _| |__ | |_ _ __ (_)_ __   __ _ /\\ /\\  \\_   \\ ');
console.log(" / / | |/ _` | '_ \\| __| '_ \\| | '_ \\ / _` / / \\ \\  / /\\/ ");
console.log('/ /__| | (_| | | | | |_| | | | | | | | (_| \\ \\_/ /\\/ /_   ');
console.log('\\____/_|\\__, |_| |_|\\__|_| |_|_|_| |_|\\__, |\\___/\\____/   ');
console.log('        |___/                         |___/               ');
console.log(' ');
console.log(
  '========================================================='
);
console.log(' ');
const child = fork(path.resolve(__dirname, './generate-style-docs.js'));

const std = process.stdout;
const colors = {
  yellow: [33, 89],
  blue: [34, 89],
  green: [32, 89]
};

const spinners = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './spinners.json')).toString()
);

class Spinner {
  constructor(message) {
    this.timer = null;
    this.colorTxt = {
      start: '',
      stop: ''
    };
    this._message = message || '';
  }

  set message(v) {
    this._message = v;
  }

  get message() {
    return this._message;
  }

  spin(spinnerName) {
    process.stdout.write('\x1B[?25l');
    const spin = spinners[spinnerName];
    const spinnerFrames = spin.frames;
    const spinnerTimeInterval = spin.interval;
    let index = 0;
    this.timer = setInterval(() => {
      let now = spinnerFrames[index];
      if (now == undefined) {
        index = 0;
        now = spinnerFrames[index];
      }
      std.clearLine();
      std.write(
        this.colorTxt.start + now + this.colorTxt.stop + ' ' + this.message
      );
      std.cursorTo(0);
      index = index >= spinnerFrames.length ? 0 : index + 1;
    }, spinnerTimeInterval);
    return this;
  }

  destroy() {
    std.clearLine();
    std.cursorTo(0);
    process.stderr.write('\x1B[?25h');
  }

  color(colorName) {
    colorName = colors[colorName];
    this.setColor(colorName);
    return this;
  }

  setColor(colorName) {
    this.colorTxt.start = '\x1b[' + colorName[0] + 'm';
    this.colorTxt.stop = '\x1b[' + colorName[1] + 'm\x1b[0m';
  }
}

const progress = new Spinner().color('yellow').spin('line');

child.on('message', message => {
  progress.message = message;
});

child.on('close', () => {
  progress.destroy();
  process.exit();
});
