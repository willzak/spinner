const spinning = () => {
  let spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
  let delay = 100;
  for (let item of spinner) {
    setTimeout(() => {
      process.stdout.write('\r' + item + '   ');
    }, delay)
    delay += 200;
  };

  setTimeout(() => {
    console.log('');
  }, delay);
};

spinning();