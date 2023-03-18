setTimeout(function OpeningCeremony() {
    console.log("Let the games begin");
    var score = { red: 0, blue: 0, green: 0, yellow: 0 };
  
    setTimeout(function Race100M() {
      console.log("100M Race started.");
      console.log("Previous Score:", score);
      const times = {};
      const colors = Object.keys(score);
  
      colors.forEach((color) => {
        times[color] = Math.floor(Math.random() * 6 + 10); // random time between 10 to 15 seconds
      });
  
      const sortedColors = colors.sort((a, b) => times[a] - times[b]);
  
      score[sortedColors[0]] += 50;
      score[sortedColors[1]] += 25;
  
      console.log("New Score:", score);
      console.log(sortedColors[0] + " WON 100M Race.");
  
      setTimeout(function LongJump() {
        console.log("Long Jump Race started.");
        console.log("Previous Score:", score);
        const colors = Object.keys(score);
        const winner = colors[Math.floor(Math.random() * colors.length)];
        score[winner] += 150;
        console.log("New Score:", score);
        console.log(winner + " WON Long Jump Race.");
  
        setTimeout(function HighJump() {
          console.log("HighJump Race started");
          console.log("Previous Score:", score);
          const colors = Object.keys(score);
  
          const answer = prompt("What colour secured the highest jump?");
  
          if (colors.includes(answer)) {
            score[answer] += 100;
          } else if (answer === null || answer === "") {
            console.log("Event was cancelled");
          } else {
            console.log("Wrong colour entered");
          }
  
          console.log("New Score:", score);
  
  
  
          console.log(answer + " WON High Jump Race.");
          
  
          setTimeout(function AwardCeremony() {
            console.log("AwardCeremony started, score:", score);
  
            const colors = Object.keys(score);
            const sortedColors = colors.sort((a, b) => score[b] - score[a]);
  
            console.log(
              "1st place:",
              sortedColors[0],
              "with",
              score[sortedColors[0]],
              "points"
            );
            console.log(
              "2nd place:",
              sortedColors[1],
              "with",
              score[sortedColors[1]],
              "points"
            );
            console.log(
              "3rd place:",
              sortedColors[2],
              "with",
              score[sortedColors[2]],
              "points"
            );
          });
        });
      }, 2000);
    }, 3000);
  }, 1000);