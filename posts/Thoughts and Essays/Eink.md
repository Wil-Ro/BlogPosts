P
# E-Ink Screens
E-Ink has been somewhat of a fixation of mine for a while now, as a technology it not only offers an environmentally friendly and power sparing form of output but it also offers some really interesting challenges in its application. I want to talk about this a bit and explore it here.

## Low Refresh Rate
The first big interesting thing about E-Ink Screens is their refresh-rate. These screens normally have a refresh rate of 5fps at most (the highest I've ever seen was around 11fps), the larger they get the slower this gets. This obviously restricts our uses of them, we can't show video, fast changing animations or anything that updates too fast.

This is interesting though, we don't actually need this that often. Anything beyond video we can't massively process at a speed faster than this, text changing at high isn't readable so text works quite well here. Static images and diagrams too. As you think about this you start to realise there isn't much data we generally need to display that needs a high refresh rate. Even fast changing data, you don't need to see it that fast, all you really need is to be able to see a slice of that data that updates every second or so.

Our main challenge is input, if we're interacting with our computers we want them to respond to changes in our actions in good time and we want to be able to change our minds about our input and have those changes recognised. This offers some really interesting problems in UI design, something I used to enjoy thinking about a lot. What would good UI look like on an E-Ink display? What uses can we put these devices to and what uses should we avoid?

Before we think about this, its worth noting E-Inks other strengths and weaknesses.

## Visibility
E-Ink is named so because it looks like paper. This means it has as insanely large viewing angle (essentially the full 170~) and more interestingly it uses ambient light. Normal displays create their own light, be it through a backlight (LCD) or through the emmissive effect of pixels (OLED). E-Ink doesn't do this, it changes its reflectivity through raising and lowing tiny particles of ink and becomes visible by reflecting different amounts of light off that ink. The effect of this being that how well you can see it depends on the light levels around you.

In other words, this means that unlike normal displays, E-Ink performs best in high light levels, like the outside world. This is why you see it in things like kindles and shop displays, things used in naturally bright areas.

I love technology but one place I feel that it always fails is its ability to keep us interacting with the real world. Technology keeps us inside most of the time and I really believe we should be using it in more ways that encourage us to interact with the outside world. E-Ink feels like something that could do this.

## Low Power Requirements
As mentioned lightly earlier, E-Ink works through raising and sinking particles of ink. This system essentially holds particles in tiny oil filled cells and charges them positively or negatively to cause them to move upwards towards the surface or downwards away from it. Once this charge is given it doesn't change, the result of this being that the display holds its image naturally, no power required. Power is only needed to change the display and the power needed for this is tiny.

This means E-Ink displays have a very low power-use, especially when they aren't changing regularly. A nice use of this I've seen recently is at bus-stops. The welsh government has started a roll-out of E-Ink displays at bus-stops. These displays are a perfect example of a good use of E-Ink, they hardly change ever, I don't think I've ever seen one change. But they remove the need for someone to go to each stop and swap out the time-tables.

## Uses
So all of this leaves us with a small list of strengths and weaknesses:
- low refresh rate 
- low power draw
- image maintained without effort
- high visibility it high light levels, low visibility in low light levels

What kind of uses does this give us?

We'll in my mind, this makes these displays perfect for a number of things, in my mind two good examples are peripheral displays and out-door computers.

Using computers outside is hellish, screens are hard to see in light and when our main way of understanding our computers is through these screens we hit a lot of issues.

Peripheral displays are essentially just displays that don't get much use but still need to exist. For instance if a robot or machine needs the ability to report and log things, a small lcd display would be very power-hungry for their purpose. Our normal solution is a internal log that can be accessed through an external computer or network connection. This is fine but we want to build our machines to be accessible and maintainable by anyone, with ease. A small low cost screen with no power cost is a perfect way to report basic issues to users who can fix these things themselves.

### What we shouldn't be doing with E-Ink
This feels obvious but high refresh rate. people think its good for the eyes and push these things too far, burn-in is real fam

**Mention burn-in**

mention it in here aswell as in other places!! Talk about how we shouldnt be driving for faster screens but instead screens that last longer. We shouldnt prioritise speed over longevity.

## E-Inks flaws and what needs improving
burnout is main one
vunlerability to direct sunlight
