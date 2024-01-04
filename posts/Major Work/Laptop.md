
# Self-built Laptop
## How it started
I have a small shoulder-bag I take everywhere. I often find myself wanting to take just that bag with me somewhere but also needing to take a laptop and having to take a whole backpack just for that laptop.
Separately from this, during my summer last year, I often found myself sitting outside and programming. Sat on the grass outside my dormitory or on the local hillsides with friends. Around the time I'd started experimenting with E-Ink Screens for a small project I was considering starting and I realised they would be perfect for programming outdoors in bright environments.
I'd also around this time wanted to try and create electronics that were resilient to outdoor environments.

From these 3 ideas I decided to try and create my own laptop that would fit within the 20x20cm space of my bag and was fully usable outside whilst remaining low-power enough for long trips.

## The initial design
My first plan for this computer was a small rectangular slab, made of various layers of components and each made of an identical standardised frame. Each layer screwing together to form a sandwich of parts. The idea behind this being that it would be incredibly modular and simple to design and expand.
This idea stuck around for a while but eventually got dropped as I hoped to make the electronics somewhat more accessible and because wanted a computer that wasn't just a flat slab of plastic.

My second idea was a flat rectangle but with its upper third on a friction hinge to allow it to be tilted and tightened. This idea has stuck around and is currently my main driving design. Whilst its somewhat more fragile, its a much more human and open design and in theory shouldn't be too much more complex to design.

![Initial sketch](LaptopSketch.jpg)


## The components
Most parts needed I've currently got or have bought, including:
- A raspberry pi 2 b+ I've had lying around for years
- An E-Ink screen bought for a previous project (more on this screen in a bit)
- 4 18650 Li-Ion batteries and a battery board for charging and power management
- A sim-card board for roaming data

### E-ink display
The E-Ink display is a core part of this project and something I'm very excited for. I have a strong love of E-ink displays as things that are incredibly energy efficient, usable in almost any conditions and are a bit slower than normal screens proposing some really interesting challenges in terms of UI design.

As a basic summary, these screens are black and white displays that look very similar to paper. They don't use lights to produce colours and instead change their reflectiveness by controlling the charge of ink particles in little chambers of oil in their surface. This has a really nice effect of allowing them to work with the ambient light around them. The outcome of this being that they're are visible just about anywhere you can read paper and have an amazing viewing angle. Their only drawback being a slow refresh rate and a very small colour range, each added colour adds around 1-5 seconds to the refresh rate so generally they come in black and white only.

I find this limited refresh rate a really interesting challenge and in terms of what I'd be using this laptop for (programming) it wouldn't be too big of a drawback.

People have been experimenting with E-Ink screens a lot in the past few years and even got them to a point where they can display [functional desktops](https://www.youtube.com/watch?v=J5WbhSV2E_U), which I think is really amazing. However despite this I feel that a terminal would be a really interesting limit to put on myself when using this laptop. As well as this, the screen I have bought is incredibly small (2.13 inches diagonally) and I am somewhat determined to work with it, this making desktops somewhat harder to use.

I spent a long time working with E-ink displays and rewriting their drivers for this project. I'll be writing and attaching a blog-post on this soon.

### The battery pack
The power source for this laptop is just a set of 4 Li-Ion batteries, googling this setup most people claim it could power a raspberry pi with a display for around an hour, and for around 10 hours without a display out outputs.

This wouldn't be a great battery life for most devices but using an E-ink display runs means we can run the display directly from the Rpi's 3v gpio pin and it only ever consumes power on refreshes so I think this could last much longer. Its something I definitely want to try and measure once this project is finished.

### The sim-card
If I'm wanting to use this laptop outdoors, it would be nice to be able to do so without having to tether it to my phones Wi-Fi hotspot. After a bit of research I found hats and boards for the raspberry that support sim-cards and support most protocols. This seems like a really fun chance to explore a technology I've barely ever touched.


## The Keyboard
The keyboard has by far been the biggest challenge of this project, There are no keyboards small enough for what I'm wanting whilst still having big enough keys for what I want. My two options I have at the moment are:
- Bring a bluetooth keyboard
- Design my own

Bringing a bluetooth keyboard seems like the most realistic option and is most likely the one I will go with, but I have done research into keyboard layouts I could use, including a really unique one a friend suggested which I ended up testing out.

The first physical result of this whole project has been a model of the laptop with a sticky surface for me to move keys around on. This has allowed me to experiment with different layouts and see how they feel in my hands. Using this I feel that I have somewhat come across a design I like but I've yet to decide whether its worth buying a large amount of switches and keycaps to solve a problem I already have a solution for (bluetooth keyboard).

![cardboard keyboard prototype](KeyboardPrototype1.jpg)
![cardboard keyboard prototype](KeyboardPrototype2.jpg)

## Progress Update 4/1/2024
Over this Christmas break a number of large steps have been taken, leaving me pretty close to finishing this project!
- I was given a SIM7600E hat for my Pi as a gift, meaning I now have the final missing piece of my hardware! Getting this working took a few days but its now ready to give my laptop 4G data. In theory it could also allow for phone calls and GPS tracking but I don't really have the time to write the programs for these at the moment and it feels like something I wouldn't use too much.
- The final decision has been made on the keyboard, I have a bluetooth one I'm happy using. This keeps my project a bit more realistic as designing a keyboard would likely double the amount of work for this.
- A final CAD design has been made and checked with an engineer friend, images below. I've created two versions. The first follows the original design as still holds space for a keyboard or other form of expansion. The second has removed this space but is slightly thicker as it places the hat on the pi. I'm really happy with these and they're essentially ready to be built.
- I met up with a friend who will help me with the wood working, we talked through tweaks needed to make the design more realistic to machine and the processes we would use for each part. This turned out better than I could have hoped and its turned out we'll get to do some really fun work, for instance we plan to do some wood bending which is something I've always wanted to try!

![image of laptop cad design](LaptopCad1.png)
![image of laptop cad design without cover](LaptopCad2.png)
![image of alternative laptop cad design](LaptopCad3.png)
![image of alternative laptop cad design without cover](LaptopCad4.png)

I'm really happy with my progress over this two week break. Its a shame the final wood work will have to wait till Easter but its just how things are with exams.

## Summary
This project was being worked on at the same time as my [plant monitoring system](PlantSystem.html) though at a somewhat slower pace. Now my final design is finished and ready I hope to build it physically soon. I have plans to do this over the Easter break with a friend.