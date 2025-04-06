const counterEl = document.querySelectorAll(".counter");

// Because we Have to pass through the numbers
counterEl.forEach((counter) => {
  counter.innerText = "0";
  incrementCounter();

  function incrementCounter() {
    let currentNow = +counter.innerText;
    let dataCeil = counter.getAttribute("data-ceil");
    // To get the data ceil value and used 15 for the smooth and faster animation
    let increment = dataCeil / 15;
    // It give a round integer || number 0 + 10
    currentNow = Math.ceil(currentNow + increment);

    // ===Condition is not true   ===
    if (currentNow < dataCeil) {
      counter.innerText = currentNow;
      // setTimeout will still run even the condition is false  because it is e asyncronoush function 
      setTimeout(incrementCounter, 50);
    } else {
      counter.innerText = dataCeil;
    }
  }
});
