const failureMessage = () => {
  const texts = [
    `Sorry😢, I don't have this term in my collection. I'll be updating my collection shortly, or you can read my bio to learn more about how I reply to mentions.`,
    `I would like to help but i can't at the moment. I'll be updating my collection shortly, or you can read my bio to learn more about how I reply to mentions.`,
    `Sorry, I don't know this term. I'll be updating my collection shortly, or you can read my bio to learn more about how I reply to mentions.`,
  ];

  return texts[Math.floor(Math.random() * text.length)];
};

export default failureMessage;
