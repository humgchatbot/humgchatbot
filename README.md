## HUMG Chatible

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

#### Chatible clone written in TypeScript, based on Node, Express and Mongo

Demo: https://m.me/humgbotchat

## Basic instruction

- Deploy to Heroku using the deploy button.
- Create a cluster on MongoDB Atlas. Whitelist IP addresses.
- Create an app on Facebook. Install Webhook. Get app secret and tokens.
- Set Heroku's `Config Vars`. Check [here](src/config/index.ts) to know which variables you need to set.
- Enjoy!

## Features

- Admin dashboard ([code](https://github.com/humgchatbot/humgchatbot.github.io))
- Pair by gender (e.g. male with female)
- Send cute dog/cat pictures
- Customizable message templates
- Cache database in memory to increase performance
- Developed with performance in mind

## Planned features

- Allow editing profile via Messenger Webview
- Limiting rate of requests sent out to avoid being converted to [high-MPS](https://developers.facebook.com/docs/messenger-platform/send-messages/high-mps) page

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

