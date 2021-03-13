/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  let jobs = [];
  for (let i = 0; i < startTime.length; i++) {
    jobs.push({
      startTime: startTime[i],
      endTime: endTime[i],
      profit: profit[i],
    });
  }
  jobs.sort((a, b) => a.startTime - b.startTime);

  let dp = Array(jobs.length);
  dp[dp.length - 1] = jobs[jobs.length - 1];

  for (let i = jobs.length - 2; i >= 0; i--) {
    let currentJob = jobs[i];

    // find the next index such that startTime job at dp[j] >= currentJob endTime
    let j = i + 1;
    while (dp[j] && dp[j].startTime < currentJob.endTime) {
      j++;
    }

    // if the currentJob ends after the startTime of the last job, the remainder profit is 0
    let maxProfitAtFollowingTime = dp[j] !== undefined ? dp[j].profit : 0;

    let maxProfitAtCurrentTime = Math.max(
      dp[i + 1].profit,
      jobs[i].profit + maxProfitAtFollowingTime
    );
    currentJob.profit = maxProfitAtCurrentTime;
    // job at dp[i] has the maximun profit for jobScheduling starting at index i
    dp[i] = currentJob;
  }

  return dp[0].profit;
};
