
# Self-built Laptop
## How it started
I have a small shoulder-bag I take everywhere and I often find myself wanting to take just that bag with me somewhere but wanting to take a laptop and having to take a whole backpack just for that laptop.
Separately from this, during my summer last year, I often found myself sitting outside and programming. Sat on the grass outside my dormitory or on the local hillsides with friends. Around the time I'd started experimenting with E-Ink Screens for a small project I was considering starting and I realised they would be perfect for programming outdoors in bright environments.
I'd also around this time wanted to try and create electronics that were resilient to outdoor environments.

From these 3 ideas I decided to try and create my own laptop that would fit within the 20x20cm space of my bag and was fully usable outside whilst remaining low-power enough for long trips outdoors.

## The initial design
My first plan for this computer was a small rectangular slab made of various layers of components and with an identical standardised frame for each layer that would screw together to for a sandwich of parts. The idea behind this being that it would be incredibly modular and simple to design and expand.
This idea stuck around for a while but eventually got dropped as I hoped to make the electronics somewhat more accessible and wanted a computer that wasn't just a flat slab of plastic.

My second idea was a flat rectangle but with its upper third on a friction hinge to allow it to be tilted and tightened. This idea has stuck around and is currently my main driving design. Whilst its somewhat more fragile, its a much more human and open design and in theory shouldn't be too much more complex to design.

![Initial sketch](LaptopSketch.jpg)


## The components
Most parts needed I've currently got or have bought, including:
- A raspberry pi 2 b+ I've had lying around for years
- An E-Ink screen bought for a previous project (more on this screen in a bit)
- 4 18650 Li-Ion batteries and a battery board for charging and power management
- A sim-card board for roaming data (to be picked)

### E-ink display
The E-Ink display is a core part of this project and something I'm very excited for. I have a strong love of E-ink displays as things that are incredibly energy efficient, usable in almost any conditions and are a bit slower than normal screens proposing some really interesting challenges in terms of software.

A basic summary of these screens is that they are black and white displays that look very similar to paper. They don't use lights to produce colours and instead change their reflectiveness by controlling the charge of ink particles in little chambers of oil in their surface. This has a really nice effect of allowing them to work from the ambient light around them. The outcome of this being that are visible just about anywhere you can read paper and have an amazing viewing angle. Their only drawback being a slow refresh rate and a very small colour range, each added colour adds around 1-5 seconds to the refresh rate so generally they come in black and white only.

I find this limited refresh rate a really interesting challenge and in terms of what I'd be using this laptop for (programming) it wouldn't be too big of a drawback.

People have been experimenting with E-Ink screens a lot in the past few years and even got them to a point where they can display [functional desktops](https://www.youtube.com/watch?v=J5WbhSV2E_U), which I think is really amazing. However despite this I feel that a terminal would be a really interesting limit to put on myself when using this laptop. As well as this, the screen I have bought is incredibly small (2.13 inches diagonally) and I am somewhat determined to work with it, this making desktops somewhat harder to use.

I spent a long time working with E-ink displays and rewriting their drivers for this project. For more information on that I'll be writing a blog-post soon.

### The battery pack
The power source for this laptop is just a set of 4 Li-Ion batteries, googling this setup most people claim it could power a raspberry pi with a display for around an hour, and for around 10 hours without a display out outputs.

This wouldn't be a great battery life for most devices but using an E-ink display runs means we can run the display directly from the Rpi's 3v gpio pin and it only ever consumes power on refreshes so I think this could last much longer. Its something I definitely want to try and measure once this project is finished.

### The sim-card
If I'm wanting to use this laptop outdoors, it would be nice to be able to do so without having to tether it to my phones Wi-Fi hotspot. After a bit of research I found hats and boards for the raspberry that support sim-cards and support most protocols. This seems like a really fun chance to explore a technology I've barely ever touched, but I'm currently yet to finish looking into its feasibility and whether its worth buying a board for.


## The Keyboard
The keyboard has by far been the biggest challenge of this project, There are no keyboards small enough for what I'm wanting whilst still having big enough keys for what I want. My two options I have at the moment are:
- Bring a bluetooth keyboard
- Design my own

Bringing a bluetooth keyboard seems like the most realistic option and is most likely the one I will go with, but I have done research into keyboard layouts I could use including a really unique one a friend suggested and I ended up testing out.

The first physical result of this whole project has been a model of the laptop with a sticky surface for me to move keys around on to experiment with different layouts. Using this I feel that I have somewhat come across a design I like but I've yet to decide whether its worth buying a large amount of switches and keycaps to solve a problem I already have a bluetooth keyboard in a cupboard to act as a solution for. I think its most likely I'll use the bluetooth keyboard in the end.

![cardboard keyboard prototype](KeyboardPrototype1.jpg)
![cardboard keyboard prototype](KeyboardPrototype2.jpg)

## Summary
This project was being worked on at the same time as my [plant monitoring system](PlantSystem.html) though at a somewhat slower pace. Since my industrial year search has started up both projects have somewhat slowed down but I hope to get back to them both soon! Especially since I have all the components, its just a matter of attaching them to a case