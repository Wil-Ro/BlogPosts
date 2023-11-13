
# Plant Watering System
## Summary
This documents my attempts to build a smart system to maintain plants. This has mostly been a chance to develop skills with electronics whilst letting me experiment with concepts near automated farming in a small form-factor I can work on in my flat at home. It's being build entirely out of second-hand, reused parts from old electronics.

## The Ideas Behind This
I first began this project when I initially came across the idea of automated farming. It was a really intriguing idea to me and I spent almost a year thinking through concepts but didn't act on them. Eventually I got to a point where I really wanted to just try and build something physical to experiment with my ideas so this project came to light as a small way for me to try this.

Around the same time, I'd been reading around [Permacomputing](permacomputing.html) for half a year or so and although this didn't massively align with its ideas I wanted to try and implement some of its main concepts in my work. This being the reuse of old computers and the production of independent and resilient technology.

From this I came up with the fun idea of building it using only reused parts from broken machines. This also felt like a good test of my electronics skills, re-purposing and re-wiring old components to work outside of their original purpose.


## Process
### The pump
While this idea was first developing I was staying home for the Christmas break and found a broken cat water-feeder in our shed. This was essentially a broken ceramic bowl with a fountain and a still fully functional mains-powered water pump. Finding this kind of solidified my ideas and made me commit to the project.

Along with this I had: 
- a [Rpi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/) a friend had given me from their old electric bike
- a mains relay from an old electronics project of my dads
- piping taken from a beer brewing kit I had been given a few years back

These parts were enough to get the pump working at a bare minimum. You can see a post about this along with a video of the pump running [here](https://fosstodon.org/@Wi__Ro/110231382934272477). Its worth noting this still lacked a proper codebase for interacting with the pump outside of turning it on and off for set amounts of time.

My next aim was to create code to allow the circuit to push specific amounts of water. As I'd not bought the pump I was using, I had little idea of how much water it was able to move so I set up a small experiment. This just required code which turned the pump on and off for different set amounts of time and had me measuring the amount of water it pumped. From this I was be able to realise it had a rate of 30/ml a second.

![image of pot of water with pump and pipe leading into measuring beaker](experiment.jpg)

While testing this I met an interesting issue. I ran the code with different lengths of time for the pump to run in and I found that when I then worked out the average and tried to use it to pump specific amounts of water it would always be slightly off. At first I thought the pump was just old or inconsistent but as I was testing it again I realised the water levels in the measuring cup kept rising even after the pump stopped. At this point I realised my mistake, the two containers were level with each other and a siphon-ing effect was causing their water levels to balance out!

I ran the test without the pumps water pipe sitting within the beaker and found my average started to actually work, despite my tests having been run with the siphoning effect in place. My assumption here is that since the movement of the water was quite slow and I was taking measurements as soon as the pump finished, I was getting values before any reasonable amount of water was being misplaced. This also explains why I hadn't noticed before testing my final values.

### Measuring moisture
My next aim was a moisture monitoring system to feed into the pump. For this I needed a moisture sensor. I felt that this would be a rare enough component that I may need to buy one myself and looked around somewhat but couldn't find any likely solutions so ended up buying an open source sensor as a compromise. I was kind of unhappy with this solution but felt there wasn't entirely another option. However, a month or so later I was discussing this issue with a friend and they pointed out that the basic theory behind the sensors was actually very simple and I could in theory make one myself. I noted this as something to come back to when I found myself needing more sensors.

From this sensor I soldered and build a very rough system that would measure soil moisture every few hours and if it went below a certain threshold would run the pump for 2 seconds. This had few functional uses but was a good proof of concept that the two components could work together.

For a proper system I hit some interesting problems. Namely how would I give quantity to how moist the soil was? The sensor gave a 1 to 0 real number representing its capacitivity but what this actually represented in terms of the soil was something I was pretty unsure of. The system didn't need this to function, a number of other systems would have still worked such as the one currently implemented. However I felt as I had the knowledge of a farming university to hand I may as well try and find out.

### The Case
Whilst thinking this problem though, I started working on a case for the circuit. I initially build a small long housing that just held the pico and mains relay. Printing this taught me some interesting lessons. I had build the case as two separate halves that fit together but after printing it I found my printers tolerances were too big and the parts didn't fit each other.

I reprinted this a few times and eventually talked to another student with more experience in 3D design and she helped me work out the printers tolerances and take them into account. This resulted in a case that correctly clicked together.

The case itself was not water-proof to required a resin coating and finalised electronics that would allow me to put sealant around the holes for the pump and sensor cables. This has yet to be done.

![an image of me holding the two halves of the case](caseopen.jpg)
![an image of my holding the two halves together](caseshut.jpg)
![a cad file of the case](plantsystemcase.png)


## Still To Do
This is as far as I have got so far. The project somewhat took a break as my searching for an industrial year placement took priority over it.

However I want to keep working on this project and have a list of planned out next steps including:
- Solve the currently mentioned issues around quantifying soil moisture
- Un-hardcoding the water thresholds by setting averages and allowing the user to point out when the plant is in a good condition
- Allowing the pump to run on battery power, its a mains pump but only actually required 5v/12a so this could easily be done
- Cleaning up and finalising the electronics into a smaller portable system 
- Exploring building my own capacitive moisture sensors
- Exploring creating a modular system that could monitor and water multiple plants

## Critiques
The design I have in mind for this project has a few interesting flaws. Firstly this is in no way scalable when built with scrap. Its even slightly a valid circuit for larger farming systems. They would have to produce it with ordered parts if not use an entirely different system.

Secondly, if expanded, this system would require individual modules for each plant that it monitored. This feels inefficient and a much better system would involve one, more complex, tool. This would be moved between plants being used on all of them, as opposed to the current collection of "dumb" modules that are spread between each plant.
This is definitely feasible but not at my scale. This does still feel like a good way to develop skills towards creating this.

>Its worth noting, this is my first steps towards making something a bit more realistically usable, you can find my first designs towards that [here](PlantCareV2.html)