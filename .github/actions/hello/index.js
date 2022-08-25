const core = require("@actions/core");
const github = require("@actions/github");

try {
  const name = core.getInput("who-to-great");
  //throw new Error("dummy error to test workflow");
  console.log(`Hellpo ${name}`);

  const time = new Date();
  core.setOutput("time", time.toString());

  console.log(JSON.stringify(github, null, "\t"));
} catch (error) {
  core.setFailed(error.message);
}
