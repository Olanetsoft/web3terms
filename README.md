# web3terms

[![GitHub issues](https://img.shields.io/github/issues/Olanetsoft/web3terms?style=plastic)](https://github.com/Olanetsoft/web3terms/issues)
[![GitHub forks](https://img.shields.io/github/forks/Olanetsoft/web3terms?style=plastic)](https://img.shields.io/github/forks/Olanetsoft/web3terms)
[![GitHub stars](https://img.shields.io/github/stars/Olanetsoft/web3terms?style=plastic)](https://img.shields.io/github/stars/Olanetsoft/web3terms)
[![GitHub watchers](https://img.shields.io/github/watchers/Olanetsoft/web3terms?style=plastic&label=Watch)](https://github.com/Olanetsoft/web3terms)
[![GitHub followers](https://img.shields.io/github/followers/Olanetsoft.svg?style=plastic&label=Followers)](https://github.com/Olanetsoft/web3terms)
[![Twitter Follow](https://img.shields.io/twitter/follow/web3terms.svg?style=social)](https://twitter.com/web3terms) 


A twitter bot explaining and simplifying web3 terms to everyone!

## Installation

+ Install [Node.js](http://nodejs.org/)
+ Clone this repo
 
	```bash
	  git clone https://github.com/Olanetsoft/web3terms.git
	```
+ Run 
	```bash
	yarn
	```

	> It will install [Twit](https://github.com/ttezel/twit), the library that lets us talk to Twitter.


## Connecting to Twitter

1. Register a Twitter account and also get its "app info".
	>Twitter doesn't allow you to register multiple twitter accounts on the same email address. I recommend you create a brand new email address (perhaps using Gmail) for the Twitter account. Once you register the account to that email address, wait for the confirmation email.

1. Now go [here](https://dev.twitter.com/apps/new) and log in as the Twitter account for your bot:
1. Fill up the form and submit.
1. Next once the submission completes you will be taken to a page which has the 
	+ "Settings" tab : Update details here
	+ "Permissons" tab :  Enable `Read and Write` 
	+ "Key and Access Token" tab : Click on `Generate access token`. 
1. Create a `.env` file and fill in the generated tokens in the "Key and Access Token" tab.
	It should look like this:
       
            PORT=xxxx
            NODE_ENV=development

            DEV_BASE_URL=http://localhost:$PORT
            PROD_BASE_URL=http://localhost:$PORT

            TWITTER_CONSUMER_KEY=xxxx
            TWITTER_CONSUMER_SECRET=xxxx

            TWITTER_ACCESS_TOKEN=xxxx
            TWITTER_ACCESS_TOKEN_SECRET=xxxx
            
1. Now type the following in the command line in your project directory to start the project

	```bash
	yarn dev
	```

You should have something similar to what is shown below on your terminal.

```javascript
[LOGGING] info: "Connected!"
[LOGGING] info: "Server running on port xxxx"
```

### **Whats Next**

You might want to push this app to a running server , probably [heroku](https://www.heroku.com/).

> Note : Heroku servers would go back to sleep if there is no activity after some time, so you can have a look at [Kaffeine](https://kaffeine.herokuapp.com/) , to keep your server active.
>
> Do not misuse the twitter api to spam or burden the server load for twitter api , as twitter follows a strict rule of closing down accounts that do that. Please read [here for the rules](https://support.twitter.com/articles/18311)

### Contribute
+ **Star** - If you like it
+ **Fork** - If you like to build your own version
+ **File an issue** - If you found a bug
+ **Send a pull request** - If you want to contribute

#### Credits
- [Twit Library](https://github.com/ttezel/twit)
- [Nishant Srivastava](https://github.com/nisrulz)


If you appreciate my work, consider [buying me a cup of :coffee:](https://www.buymeacoffee.com/olanetsoft)  to keep me recharged.
