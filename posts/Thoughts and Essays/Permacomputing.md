
# Permacomputing
My thoughts on permacomputing, the space its currently in and where it could go in the future

## What is Permacomputing?
Permacomputing is a really interesting concept that I came across sometime around 2021-2022. Its a movement based around environmentally sustainable ways of using computers originating from the ideas behind [Permaculture](https://en.wikipedia.org/wiki/Permaculture) (a set of ideas around sustainable small scale farming and land management.).
Its very much defined by its community who are constantly discussing it and the directions it could take as-well as implementing its concepts into their work. That community's [wiki](http://permacomputing.net/) describes it as so:
>Permacomputing is both a concept and a community of practice oriented around issues of resilience and regenerativity in computer and network technology inspired by permaculture.

The main practises behind it could be outlined as
- Re-using and repurposing old computers, most computers from 2005 onwards have all the power you would need for most small tasks, especially with well written code. So why waste them?
- Repairing and caring for chips and electronics
- Creating simple, low-power code that avoids taking up more power and processing time than needed and does only what it needs to whilst still being scalable and extendable
- Creating resilient code that avoids "[Code Rot](https://en.wikipedia.org/wiki/Software_rot)" by reducing reliance on other programs and external systems and the prioritises an "offline first" approach

## My relations to Permacomputing
I'd been exploring the ideas behind permacomputing for a while before I discovered its community. I'd originally found concepts similar to it through [100 rabbits](https://100r.co/) (a research collective living on a boat, exploring the longevity of computers) and have always been very anxious around the environment and waste. As well as this I was somewhat aware of the concepts of permaculture. 
As I was exploring the internet one day I found the term "Permacomputing" and immediately knew it was a term describing the thoughts I'd been having. I looked into it and very quickly found myself passionately sifting through its wiki's and the websites of community members.

## My thoughts
### Low-power code
I think that permacomputing has some really interesting and strong ideas behind it. What especially holds my attention is its ideas behind reusing old computers and creating low-power code.

There is definitely some truth to the idea that most basic tasks we do today such as browsing social media or word processing could be done by any full-featured computer from the last 20 years or so. A lot of modern programs such as Microsoft Teams or Spotify do very basic jobs but consume unreasonable amounts of processing power (and therefore electricity) due to being buried under layers and layers of abstraction.

There's obviously reasons for this though, we don't just use it for no reason.
- Web-development is very friendly and incredibly flexible
- Web-applications are super portable 
- Developing with the web gives you access to a browsers entire graphics engine, implementing graphical effects becomes very easy

But its worth noting that there is 100% a downside to this, Microsoft Teams is known in most companies to be incredibly slow and prone to breaking, many laptops older than a few years struggle to run it. They're incredibly process hungry for what is realistically somewhat of a small task.

Most of these benefits we've listed aren't exclusive to web development and you could easily get a lot of them through many other languages. for instance, anything that uses a runtime, Java's entire slogan is "Write once, run anywhere"

I think once something has become a standard its easy for it to become the default "go-to" for companies, even if its not necessarily the best idea. When armed with a hammer, everything becomes a nail.

Another example of this could be AI, AI is incredibly useful and is great for solving a large number of problems that we almost definitely have no other way to solve. But nowadays we see it applied in many fields where it just isn't needed. AI is incredibly power hungry and can often require [ethically impossible amounts of manual work](https://www.firstpost.com/world/openai-made-chatgpt-using-underpaid-exploited-kenyan-employees-who-forced-to-see-explicit-graphic-content-12053152.html) to produce, its not something we should be using everywhere but as people get very excited for it they start just trying to apply this everywhere and this is a massive waste of resources. Many things that could be solved with a well written algorithm instead become large AI design projects that produce massive systems that are expensive to power and just unnecessary.

----

I think these are both obviously problems that we can solve and are the easiest of Permacomputing's ideas to argue. A nice thing though is that they are also the easiest to implement at a wider scale. It just relies on companies and developers putting a bit more thought into what they choose and realising that just because we have almost infinite processing power, doesn't mean we shouldn't count our resources.

This has visible benefits to them too, it creates a system they have full control over that will be noticeably much faster. Bugs are easier to solve and code is easier to run when your code isn't relying on booting up an entire browser in the background or using an unreadable black box as its foundation.

### Visible functioning
Another nice point Permacomputing makes is its statements on open-source code and state-visualisation

Computers are tools and I feel like its important we try to avoid hiding that. Whilst we obviously shouldn't make them any less user-friendly or force front-end users to look at code, we can definitely let users know what the computer is doing more whilst keeping that user-friendly face. A good example would just be showing error codes again. A small thing that takes nothing away from the user and gives a lot back.
Other examples could be indicator lights on computers or better named background processes for when things need closing or checking in task manager.
We could even take these things further and modernise them, rather than just reimplementing them, for instance we could use qr-codes for errors (something the windows blue screen now does really well). Or generate public wikis for troubleshooting from our code documentation

This has loads of benefits, it puts ownership and control of the computer back into the users hands, it adds that separation between the digital and the real, but also makes gives users an opportunity to try and fix issues themselves or at the very least ask a friend for help.
There's nothing more frustrating than having an issue and having almost nothing to go off.

From a developer perspective, open-sourcing code is a massive benefit too, it allows ownership of your tools and allows people to create communities around their software but that's a much larger topic and goes beyond the scope of this page.


### Resilience
A final strong point is the "Offline first" approach, prioritising resilient code.
This is something I really like too, whilst obviously this wont work for many things in the modern age, a lot of services nowadays are relying on the cloud for things that they don't necessarily need or are just requiring an internet connection for little reason.

The internet is notoriously unstable, large quantities of information and produced and lost constantly, this isn't necessarily something we can stop (outside of archival efforts). Its an inherent part of the internet. But, if we build systems or infrastructure that relies on these things this becomes a much larger effort to maintain. It goes from finishing code and being able to lessen our focus on it, to having to constantly ensure other factors are always in place to keep the project working. This isn't always an issue but it does objectively cost companies a lot of money and often leads to a lot more work than is needed.

From a customer facing side this is an issue too, products that were paid for can be discontinued without much notice as a company finds its too much money to be worth sustaining and masses of software history can be lost. It creates code that users cannot own and that almost has a digital use-by date.

## Being Positive
When talking about Permacomputing I often find I start feeling like I'm just complaining about the modern world and I think that is can be somewhat true. Permacomputing is very much a rejection of certain aspects of the modern world and a core part of its development is through critique. 

However, I think its really worth looking at the creative and forward thinking side of the community, to see what members are experimenting with and creating. Often building work beyond the aspects that are critiqued and often trying to explore and show other alternatives. A few nice examples are:
- [Solar Protocol](http://solarprotocol.net/), a system the allows solar powered servers to share hosting power depending on which ones have the most power at a current moment in time
- [FarmOS](https://farmos.org/), a database system for farmers to track their work and systems in a centralised and self-owned fomat
- [Uxn](https://100r.co/site/uxn.html), an incredibly low-spec runtime that allows for the creation of graphical programs that run on almost any device

Despite the critiquing, the community very much has a positive view of the future and discuss a lot of really interesting and powerful ideas.

## Critiques
It is worth noting I do have a lot of critiques for Permacomputing as well however. There is definitely a reason I don't identify myself with it. Whilst it talks about a lot of interesting ideas that make me really happy, it also does have a few flaws in my eyes.

### Weird apocalypse stuff
The original text that coined the term Permacomputing was written by someone called [Viznut](http://viznut.fi/en/), who originally defined the term around creating computers that would survive the apocalypse. Although this is mentioned less now, the idea of "Design for Decent" is still very much in the veins of the movement. 

This doesn't invalidate its ideas but its very much worth noting that some of its ideas at their core do come from a fantasy of the modern world collapsing some form of anarchist utopia rising. I feel like this  unrealistic and a bit detached from the real world. Whilst climate change and many other issues do endanger our world, this isn't a sudden change and I feel that we're unlikely to get to a situation where their ideals are going to come true.

### Anti-Progress
Another thing worth noting is that Permacomputing is most likely not going to ever catch on at any wide scale. Its focus is on learning to enjoy and make do with what we have and whilst I do feel like these are really important values (and ones that I personally follow), they're not ideas our society abides by. Telling people to actively stop using things that are benefiting them with little material benefit to doing so doesn't normally lead to much.

As well as this, it often relies on users being very technical and almost always relies on giving up certain aspects of modern technology which most people would never want to. Its ideas normally focus around building specialised systems to be used by groups of people, such as a farming database or digital archive. The things that don't seem to expect people to own and create their own electronics which they create "personal computing stacks" (collections of self made tools and programs) for.

## A summary of where Permacomputing holds strong
In my opinion Permacomputing mostly carries weight in its discussion of efficient, lower-power software, rejecting AI and web frameworks where they aren't actively required and pointing out their high power-consumption and resource inefficiency. Along with this its discussion of reusing old computers also holds very strong. From my experiments with older computers I've found they can often be just as fast as modern computers or even faster, the main limit is often bloat and bulk in operating systems and software.

I think that these ideas can often be implemented. Especially in a personal capacity or within very specific workplaces where they could offer benefits over drawback, such as farms.

Its a fun idea that makes some really valuable points and I hope to continue exploring the aspects I agree with in my own projects but beyond that I'm not entirely sure.
