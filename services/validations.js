const validateTweet = (user, text, retweet_status) => {
  if (
    user?.screen_name !== 'web3terms' &&
    text.toLowerCase().includes('explain') &&
    retweet_status === undefined
  ) {
    return true;
  }
  return false;
};

export default validateTweet;
