
# Camera Butchering/Revival 
A number of experiments that eventually lead to some cool photos and a neat camera.

> Note this page is a draft and definitely will contain spelling mistakes and general nonsense

## It begins
In 2022 I found [640by480](https://640by480.com/), this (along with [a very similar site](https://640x480.net/album.php?posn=last&size=small)) is a website where people post photos taken using old digital cameras. I found the energy of these photos really appealing, and as a fan of re-using outdated tech I wanted to give it a go. However, I try to own as little as possible generally, especially when it comes to tech, so I didn't find myself going out and getting one. I decided to just keep it in the back of my mind and hope I eventually came across something in the future.

A year or two later, fate finally dropped one in my lap! I came across it in a charity shop, its battery was far beyond over-drained and it required an obsolete proprietary memory card, which it didn't come with. No one else would be using it so I didn't feel too bad buying it and saving it from landfill.

It was a fujifilm mx-2700 I don't know much about it or how it compares to other cameras of the time but I'm not super bothered. Its what I'd been given and part of the appeal of old tech is the challenge of working with that.

![The front of a camera, it has a small rectangular body with a lense in the top right corner](camera1.jpg)
![The back of a camera, it has a viewfinder in the top left corner, a small screen lcd screen and a dial to change its setting](camera3.jpg)


This page logs the series of experiments I did on the poor thing.

## Power!
First things first, getting it turning on. It originally didn't, and I had no way of knowing if this was a dead battery (forgive my hardware-baby ignorance), a broken screen or something much more complicated. My first plan was to get power running into it to see what happened. It had a barrel plug for charging and for battery battery free use. This plug was marked as 5v and in my genius mind a plan formed.

"Okay, a barrel plug is just a positive and a negative, this runs at 5v. USB does power the exact same way. What if I just remove this plug and wire a USB plug into it instead"

USB runs at 0.5A 5V, this plug ran at 7.5W aka 5V 1.5A. My brain decided this wasn't important information until much later on and I got started!

I removed the plug and added what in my mind should be the new standard for USB plugs and nothing happened. It didn't work.  

![The side of a camera, the hole in the case for the power port is empty and just has two wires coming out, at the end of the wires is a small circuit board with a rubber cap](camera2.jpg)

I spoke to some friends and we did some testing, firstly, that barrel plug was only for charging the battery, not for running batteryless. It was here my friend pointed out to me that we could test the battery with a multimeter. We checked the it and it was way beyond saving. That thing was never charging again :P. I didn't want to buy a new battery for what was possibly a broken camera, so we used a power station to directly put power into the battery contacts and it turned on! (For anyone following at home, note that it won't turn on if the SmartMedia Card slot is open, if its disassembled, there's a switch near that port you should hold down).

This meant it worked! So I decided it would be worth the investment to buy a battery, I bought a battery and one of its weird little storage cards (A SmartMedia card, whatever that is).

These arrived and the device was working! I could take photos! But they were being held hostage from me! I couldn't get the photos off the weird little storage card. 

## Reading the weird little storage card
> Fun Fact: Most modern computers do not have SmartMedia card slots

In the year 2000 fujifilm created the perfect storage medium and "big sd card" have spent the last 20 years trying to systematically eradicate it from the face of the earth because they fear its cool wiggly line. 

![A SmartMedia card, similar to an SD card but twice the size, its metal contacts are cut in a wavy pattern](SmartMediaCard.jpg)

You can't buy USB SmartMedia card readers, I personally couldn't find any original ones that came with the cameras online. This was a dilemma but my saving grace was EMFCamp2024. [EMFCamp](https://www.emfcamp.org/) is a hacker festival that goes on every two years in Britain. It has a great second hand store where people can donate old tech they want to get rid of, that ranges from server racks to radioactive isotopes (see the toot [here](orphanedSourceToot.png), see the Wikipedia entry [here](https://en.wikipedia.org/wiki/List_of_orphan_source_incidents#2020s)). Someone happened to be selling a front panel for a tower pc that had a slot for a SmartMedia card!! It was designed to plug directly into a motherboard but it was better than nothing!

I took it home and realised it plugged into the USB section of the motherboard. After a bit of research I realised this plug had the exact same layout as a USB cable. I figured I'd try to wire it to a different weird USB plug I had, since that went so well last time. It didn't work, I got that classic power surge error and not much more. A few days later I was walking down a street and saw a bin filled with a load of identical circuit boards with USB cables coming off them (?????). Like the gremlin I am I grabbed one and cut the cable off it, took it home and wired it up. For some reason this one worked!

![image of SmartMedia Reader, an old computer front panel with slots for different old media cards](SmartMediaReader1.jpg)
![image of SmartMedia Reader cable, a beige cable cut half way with a black usb cable replacing the second half](SmartMediaReader2.jpg)
![image of the whole SmartMedia Reader, a large panel with a long cable coming from the back, the second half of the cable has been replaced with a USB cable](SmartMediaReader3.jpg)

After this there was only one problem left to solve.

## Recharging the new battery
That's right, I didn't have a charger. Luckily I did have a [generic Li-Po charging circuit](https://shop.pimoroni.com/products/lipo-amigo?variant=39779302506579) from a previous project. After some googling, I was confident this would work. I tried it, just holding some wires to the battery's contacts and it started charging! This was perfect! I just needed to make a proper shape to hold the battery and build proper contacts and I'd be done!. The circuit even had a fast charge mode!

...

The fast charge mode burnt out the board. 

I intended to fix this, but that would take a while, so as a temporary solution I tried something a bit unhinged. I removed the old battery cell from the case of the dead battery that came with the camera. Attached an 18650 of similar specs to its contacts and lied to the camera about where its power was coming from. 

![An old proprietary battery case with two wires coming out of a tape covered hole in its back](batteryLies1.jpg)
![A tape covered battery with wires coming out the back, connecting to a new 18650 in a holder](batteryLies2.jpg)
![A retro digital camera with wires coming from its battery slot, the wires connect to a new 18650 in its holder](batteryLies3.jpg)

This worked but only slightly. The camera would boot but couldn't switch modes and would crash when I tried to take a photo. My guess it is wasn't providing enough power or the tiny little circuit board attached to the old cell might have actually been more than just an over-discharge protection circuit.

Weirdly, re-trying this a day later it worked so my guess is the connection was just off, here's a photo, taken with the camera, of the battery whilst its powering the camera. 

![a photo of a 18650 battery cell, it sits in a small battery seat with a wire coming off either end. Its backed by a colorful carpet](cameraBattery.jpg)

This is where we're up to, will update when I've got further!

## Photos!
Here's the initial pictures I took on my first battery charge.
![A photo of a bedroom, the quality is grainy and the colour is slightly yellow, in the room is a bed with a large cluster of posters behind it, cushions and a large stuffed shark rest on top of it.](oldPhoto1.jpg)
![A photo of me, the quality is grainy and the colour is slightly yellow, I'm close up to the camera, head overly tilted, looking serious](oldPhoto2.jpg)
![A photo of my reflection in a window above my bed, in the reflection Im lying on my bed, holding the camera and taking the photo. The quality is grainy and the colour is slightly yellow](oldPhoto3.jpg)
![A blurry photo of myself, my hands rest on my hips against a bland wall with a door in the background,the image is out of focus](oldPhoto4.jpg)



Notes:
talk about how cool the internals of this camera are
mention this lad: http://people.surfaceeffect.com/pete/tech/nouserservice/mx2700/


 
