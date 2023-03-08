const express = require("express");
const speedTest = require("speedtest-net");

const app = express();

// Home Route
app.get("/", async (req, res) => {
  try {
    var data = await speedTest();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
  var result = data.download.bandwidth * 0.000008;
  res.send("Download speed " + result + "\n " + data.download.bandwidth);
});

// Server
app.listen(4000, () => {
  console.log("Server running on port - 4000");
});
