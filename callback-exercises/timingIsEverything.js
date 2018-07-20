class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    
    this.printTime();
    let clock = this;
    setInterval(function() {
      clock._tick();
    }, 1000);
  }
  
  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }
  
  _tick() {
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    } else {
      this.seconds++;
    }
    
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours++;
    }
    
    if (this.hours === 24) {
      this.hours = 0;
    } 
    
    this.printTime();
  }
}
 const clock = new Clock();