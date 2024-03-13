const cron = require('node-cron');
const User = require('../model/user'); // Assuming you have a User model defined

class UserRemover {
  static async run() {
    try {
      // Fetch users whose date_time is older than 24 hours
      const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const usersToDelete = await User.find({ date_time: { $lt: twentyFourHoursAgo } });

      // Iterate over the users and delete them
      for (const user of usersToDelete) {
        await User.findOneAndDelete({ userId: user.userId });
        console.log(`User with userId ${user.userId} deleted.`);
      }
    } catch (error) {
      console.error('Error in cron job:', error);
    }
  }

  static schedule() {
    // Cron job to run every day at midnight
    return cron.schedule('0 0 * * *', async () => {
      await this.run();
    });
  }
}

const userRemoverJob = UserRemover.schedule();
module.exports = userRemoverJob;
