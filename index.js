import { execSync } from 'child_process';

// const core = require('@actions/core');
// const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  // const nameToGreet = core.getInput('who-to-greet');
  // console.log(`Hello ${nameToGreet}!`);

  const pwd = execSync(`pwd`).toString().trim();
  console.log(`PWD ${pwd}`);

  // const ls = execSync(`ls -al`).toString().trim();
  // console.log(`LS ${ls}`);

  // const remote = execSync(`git remote -v`).toString().trim();
  // console.log(`Remote ${remote}`);


  // const sha = execSync(`git rev-parse HEAD`).toString().trim();
  // console.log(`Sha ${sha}`);

  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);
  // // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
} catch (error) {
   console.log(error)
  // core.setFailed(error.message);
}
