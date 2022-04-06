const failureMessage = () => {
  const texts = [
    `Sorry😢, I don't have this term in my collection. I will update my collection soon.`,
    `I would like to help but i can't at the moment. I will update my collection soon.`,
    `Sorry, I don't know this term. I will update my collection soon.`,
  ];

  return texts[Math.floor(Math.random() * 3)];
};

export default failureMessage;
