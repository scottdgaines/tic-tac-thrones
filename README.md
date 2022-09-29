# [Tic-Tac-Thrones](https://scottdgaines.github.io/tic-tac-thrones/)

## Overview

The fate of Westeros is at stake as two opposing dynasties battle for the claim to the Iron Throne. Who will win?

![2022-09-28 18 22 42](https://user-images.githubusercontent.com/103966650/192911489-84f566ca-7537-41cc-ab60-f5dfeb532302.gif)

## Project Context
I am currently studying Front End Developement at the Turing School of Software and Design. This Tic-Tac-Toe app is the final solo project for Mod 1, meaning I have been a software developer for just over 5 weeks!

Goals for this project included:

- Solidify and demonstrate your understanding of:
  - DRY JavaScript
  - Event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Iterate through/filter DOM elements using for loops
- Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

[Full Project Description](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo-v2.html)

## Installation Steps

1. Fork and ```clone``` this repo to your local machine.
2. Run ```cd tic-tac-thrones``` to move into the root directory.
3. Run ```open index.html``` to open the application in your browser.

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
