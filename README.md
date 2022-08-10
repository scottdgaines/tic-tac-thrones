# [Tic-Tac-Thrones](https://scottdgaines.github.io/tic-tac-thrones/)
Mod 1, Final Project (solo)

## Overview

The fate of Westeros is at stake as two opposing dynasties battle for the claim to the Iron Throne. Who will win?

This version of Tic-Tac-Toe was designed and built by Scott Gaines from a spec provided by the Turing School of Software and Design. It's architecture includes:
* README.md
* index.html
* styles.css
* main.js
* Game.js
* Player.js
* An assets directory containing all images

![Preview Image](assets/tic-tac-thrones-screenshot.png)

# Installation Steps

1. Fork and clone this repo to your local machine.
2. Run 'cd tic-tac-toe' to move into the root directory.
3. Run 'open index.html' to open the application in your browser.

## Using the App

1. With your arch nemesis, decide where your alliances lie and pick a player.
2. When it is your turn, click a tile on the grid to claim it for your House.
3. Claim three tiles in a row (vertical, horizontal, or diagonal) to stake your claim to the Iron Throne!
4. A draw will be declared if all nine tiles are selected without three in a row being claimed by a single house.
5. Ready to wipe the slate clean and start fresh? Click the "Winter is Coming" button.

## Developer Contact
Scott Gaines
+ scottdgaines@gmail.com
+ Slack: @Scott Gaines
+ LinkedIn: www.linkedin.com/in/scottdgainesfe
+ GitHub: https://github.com/scottdgaines

## Developer Notes

This project assignment included only the functionality and architecture requirements, leaving the theme and design up to the developer.

Overall, the project was a very productive process for me in continuing to practice and solidify concepts, and in further developing my process as a developer for both approaching a project from scratch and debugging issues in my script. I am still rusty when it comes to strategically debugging css styling issues, but overall my approach to building out the styles document had improved a lot since my last. As for javascript, I had to reach out for help with one feature (checkWinConditions()), but otherwise, I was able to tackle multiple bugs and some spicy logic problems independently, which was encouraging.

Though all the required functionality is there, there is one small bug I did not have the time to address, but that I plan on resolving in the future: when a game is won on the 9th tile, both the winning banner and the draw banner will display simultaneously. I suspect this has to do with the logic / syntax in the checkWinConditions()'s else if statement.

Other updates I plan on implementing in the future include:
  * Toggling the grid background image between fire and ice after each round.
  * Displaying an image from the series in place of the grid whenever a round is won.
  * Giving users the option to select their player from a list of Westeros Houses before the game begins.
