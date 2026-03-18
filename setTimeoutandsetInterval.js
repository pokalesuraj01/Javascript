function greet() {
  setTimeout(() => {
    console.log("happy new year");
  }, 2000);
}
greet();

function greet1() {
  let count = 0;
  let interval = setInterval(() => {
    count = count + 1;
    console.log(count);
    console.log("happy new year");
    if (count == 4) {
      clearInterval(interval);
    }
  }, 1000);
}
greet1();
