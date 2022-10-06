# web3terms

[![GitHub issues](https://img.shields.io/github/issues/Olanetsoft/web3terms?style=plastic)](https://github.com/Olanetsoft/web3terms/issues)
[![GitHub forks](https://img.shields.io/github/forks/Olanetsoft/web3terms?style=plastic)](https://img.shields.io/github/forks/Olanetsoft/web3terms)
[![GitHub stars](https://img.shields.io/github/stars/Olanetsoft/web3terms?style=plastic)](https://img.shields.io/github/stars/Olanetsoft/web3terms)
[![GitHub watchers](https://img.shields.io/github/watchers/Olanetsoft/web3terms?style=plastic&label=Watch)](https://github.com/Olanetsoft/web3terms)
[![Twitter Follow](https://img.shields.io/twitter/follow/web3terms.svg?style=social)](https://twitter.com/web3terms) 


A Twitter bot explaining and simplifying web3 terms to everyone!

<img width="600" alt="Screenshot 2022-04-07 at 22 58 40" src="https://user-images.githubusercontent.com/45847909/162620196-98c4c249-de0b-42de-bb8e-bdb19062d64e.png">

## 🏆 Features

+ Web3 terms explanation ✅
+ Daily Web3 terms tweet ✅
+ Acknowledgement tweet ✅
+ Test Coverage ✅
+ Endpoint `/terms` to retrieve all terms ✅
    + Response:
    ```json
        {
            "previousPage": null,
            "nextPage": "11",
            "total": 203, // Updated regularly
            "totalPages": 102, // Updated regularly
            "items": [
                {
                    "term": "abi",
                    "meaning": "ABI is the standard way to interact with contracts in the Ethereum ecosystem, both from outside the blockchain and for contract-to-contract interaction."
                },
                
                //...
            ]
        }
   ```
## 🛠 Installation

+ Install [Node.js](http://nodejs.org/) on your PC
+ Start by making a fork of the repository. Click on the "Fork" symbol at the top right corner
+ Clone this repo
```bash
git clone https://github.com/Olanetsoft/web3terms.git
```
+ Run 
```bash
yarn
```

> It will install [Twit](https://github.com/ttezel/twit), the library that lets us talk to Twitter.


## 🥂 After making a change
1. Sort the file
```
yarn run sort
```

2. Run a test to check all definition length
```
yarn test
```

3. Create a new branch
```bash
git checkout -b <Your-branch-name>
```

4. Add changes 
```bash
git add .
```

5. Add a commit message
```bash
git commit -m "<your message>"
```

6. Push your changes
```bash
git push --set-upstream origin <branch-name>
```

7. Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

8. Congratulations 🙌🏼


## 🔀 Connecting to Twitter

1. Register a Twitter account and also get its "app info".
>Twitter doesn't allow you to register multiple twitter accounts on the same email address. I recommend you create a brand new email address (perhaps using Gmail) for the Twitter account. Once you register the account to that email address, wait for the confirmation email.

2. Now go [here](https://dev.twitter.com/apps/new) and log in as the Twitter account for your bot:
3. Fill up the form and submit.
4. Next once the submission completes you will be taken to a page which has the 
+ "Settings" tab : Update details here
+ "Permissons" tab :  Enable `Read and Write` 
+ "Key and Access Token" tab : Click on `Generate access token`. 
5. Create a `.env` file and fill in the generated tokens in the "Key and Access Token" tab.

It should look like this:
```sh
PORT=xxxx
NODE_ENV=development

DEV_BASE_URL=http://localhost:$PORT
PROD_BASE_URL=http://localhost:$PORT

TWITTER_CONSUMER_KEY=xxxx
TWITTER_CONSUMER_SECRET=xxxx

TWITTER_ACCESS_TOKEN=xxxx
TWITTER_ACCESS_TOKEN_SECRET=xxxx
```
6. Type the following in the command line in your project directory to start the project

```bash
yarn dev
```

You should have something similar to what is shown below on your terminal.

```javascript
[LOGGING] info: "Connected!"
[LOGGING] info: "Server running on port xxxx"
```

## 👨‍👩‍👦 Community
Don't forget to follow [Web3terms](https://twitter.com/web3terms) on twitter


### 🧑‍💻 Contributing

- Contributions make the open source community such an amazing place to learn, inspire, and create.
- Any contributions you make are greatly appreciated.
- Check out our contribution guidelines for more information.

+ **Star** - If you like it
+ **Fork** - If you like to build your own version
+ **File an issue** - If you found a bug
+ **Send a pull request** - If you want to contribute


### **Whats Next**

You might want to push this app to a running server, [here is a curated list you can checkout.](https://www.heroku.com/).

> Do not misuse the twitter api to spam or burden the server load for twitter api , as twitter follows a strict rule of closing down accounts that do that. Please read [here for the rules](https://support.twitter.com/articles/18311)

### **Note to Contributors**

+ All web3 terms in the ```data/terms.json``` directory should be in lower case.
+ Look to ensure that newly added terms aren't already available to avoid repitition of terms and key words.


### 🫂 Credits

- [Twit Library](https://github.com/ttezel/twit)
- [Nishant Srivastava](https://github.com/nisrulz)
- [Ugwu Stanley](https://github.com/ugwustanley) the creator of [Decode Abbreviation](https://twitter.com/decode_abbr)


### Thanks to all Contributors 💪 

Thanks a lot for spending your time helping Web3Terms Bot grow. Happy Hacking 🍻

[![Contributors](https://contrib.rocks/image?repo=Olanetsoft/web3terms)](https://github.com/Olanetsoft/web3terms/edit/develop/README.md)

### Thanks to all Stargazers ⭐️

[![Thanks to all stargazers](https://git-lister.onrender.com/api/stars/Olanetsoft/web3terms?limit=15)](https://github.com/Olanetsoft/web3terms)
