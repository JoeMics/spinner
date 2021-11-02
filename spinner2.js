const spinnerFrames = [  '\r|   ',  '\r/   ',  '\r-   ',  '\r\\   ',];
let delay = 100;
for (let i = 0; i < 2; i++) {
  for (const frame of spinnerFrames) {
    setTimeout(() => process.stdout.write(frame), delay);
    delay += 200;
  }
}
setTimeout(() => process.stdout.write(spinnerFrames[0] + '\n'), delay);