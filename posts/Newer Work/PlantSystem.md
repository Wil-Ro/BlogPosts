
# Plant Watering System
## Summary
This documents my attempts to build a smart system to maintain plants. This has mostly been a chance to develop skills with electronics whilst letting me experiment with concepts near automated farming in a small form-factor I can work on in my flat at home. It's being build entirely out of second-hand, reused parts from old electronics.

## The Ideas Behind This
I first began this project when I initially came across the idea of automated farming. It was a really intriguing idea to me and I spent a long time thinking through concepts in my head but didn't act on them for a decent few months. Eventually I got to a point where I really wanted to just try and build something physical to experiment with my ideas so this project came to light as a small way for me to try this.

Around the same time, I'd been reading around [Permacomputing](permacomputing.html) for half a year or so and although this didn't massively align with its ideas I wanted to try and implement some of its main concepts in my work. This being the reuse of old computers and the production of independent and resilient technology.

From this I came up with the fun idea of building it using only reused parts from broken machines. This also felt like a good test of my electronics skills, re-purposing and re-wiring old components to work outside of their original purpose.


## Process
While this idea was first developing I was staying home for the Christmas break and found a broken cat water-feeder in our shed. This was essentially a broken ceramic bowl with a fountain and a still fully functional mains-powered water pump. Finding this kind of solidified my ideas and made me commit to the project.

Along with this I had: 
- a [Rpi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/) a friend had given me from their old electric bike
- a mains relay from an old electronics project of my dads
- piping taken from a beer brewing kit I had been given a few years back

These parts were enough to get the pump working at a bare minimum. You can see a post about this along with a video of the pump running [here](https://fosstodon.org/@Wi__Ro/110231382934272477). Its worth noting this still lacked a proper codebase for interacting with the pump outside of turning it on and off for set amounts of time.

My next aim was a moisture monitoring system to feed into the pump. For this I needed a moisture sensor. I felt that this would be a rare enough component that I may need to buy one myself and looked around somewhat but couldn't find any likely solutions so ended up buying an open source sensor as a compromise. I was kind of unhappy with this solution but felt there wasn't entirely another option. However, a month or so later I was discussing this issue with a friend and they pointed out that the basic theory behind the sensors was actually very simple and I could in theory make one myself. I noted this as something to come back to when I found myself needing more.

From this sensor I soldered and build a very rough system that would measure soil moisture every few hours and if it went below a certain threshold would run the pump for 2 seconds. This had few functional uses but was a good proof of concept that the two components could work together.

## Still To Do
This is as far as I have got so far. The project somewhat took a break as my searching for an industrial year placement took priority over it. However I want to keep working on this project and have a list of planned out next steps including:
- Building more advanced ways of working with the pump, i.e. measuring its throughput and creating methods to specify how much water to pump
- Un-hardcoding the water thresholds by setting averages and allowing the user to point out when the plant is in a good condition
- Allowing the pump to run on battery power, its a mains pump but only actually required 5v/12a so this could easily be done
- Cleaning up and finalising the electronics into a smaller portable system 
- Exploring building my own capacitive moisture sensors
- Exploring creating a modular system that could monitor and water multiple plants

## Critiques
The design I have in mind for this project has a few interesting flaws. Firstly this is in no way scalable when built with scrap. Its not entirely a valid experiment for larger farming systems, they would have to produce it with ordered parts.

Secondly, if expanded, this system would require individual modules for each plant that it monitored. This feels inefficient and a much better system would involve one, more complex, tool. This would be moved between plants being used on all of them, as opposed to the current collection of "dumb" modules that are spread between each plant.
This is definitely feasible but not at my scale. This does still feel like a good way to develop skills towards creating this.

>Its worth noting, this is my first steps towards making something a bit more realistically usable, you can find my first designs towards that [here](PlantCareV2.md)