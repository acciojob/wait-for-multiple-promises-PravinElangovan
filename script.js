//your JS code here. If required.
function waitRandomTime() {
        const delay = Math.floor(Math.random() * 3) + 1;
        return new Promise(resolve => setTimeout(resolve, delay * 1000));
      }

      // Create an array of 3 Promises that resolve after a random time between 1 and 3 seconds
      const promises = [waitRandomTime(), waitRandomTime(), waitRandomTime()];

      // Wait for all Promises to resolve using Promise.all
      Promise.all(promises)
        .then(results => {
          // Remove the loading text
          const loadingRow = document.getElementById("loading");
          loadingRow.parentNode.removeChild(loadingRow);

          // Populate the table with the results
          const table = document.querySelector("table");
          for (let i = 0; i < results.length; i++) {
            const row = table.insertRow();
            const promiseCell = row.insertCell(0);
            const timeCell = row.insertCell(1);
            promiseCell.textContent = `Promise ${i + 1}`;
            timeCell.textContent = (results[i] / 1000).toFixed(3);
          }

          // Add a row with the total time taken to resolve all Promises
          const totalTime = results.reduce((total, time) => total + time, 0);
          const totalRow = table.insertRow();
          const totalCell = totalRow.insertCell(0);
          const timeTakenCell = totalRow.insertCell(1);
          totalCell.textContent = "Total";
          timeTakenCell.textContent = (totalTime / 1000).toFixed(3);
        });