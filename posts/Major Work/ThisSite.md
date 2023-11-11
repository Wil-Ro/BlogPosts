
# This Site

This site is a small project I worked on over the course of a few weeks while first returning back to university during my second year. Its hosted on a small [lighttpd](https://www.lighttpd.net/) server running on an old laptop from around 2003. I wrote a small C++ program that takes in MarkDown files and builds them into webpages. During start-up, or alternatively on request, the server pulls this code along with the markdown from separate repos, builds the code and runs it. This then builds the website from that markdown and puts the pages in a folder for Lighttpd to host.

## The Thoughts Behind This

During my first year at university I read a lot around the concept of [Permacomputing](http://permacomputing.net/). This is a set of ideas around reusing old computers and writing small systems that avoid [code rot](https://en.wikipedia.org/wiki/Software_rot) whilst using as little power as possible.
The driving idea behind this being that we've had computers that are powerful enough for most small jobs for quite a long time and realistically a lot of old e-waste is still perfectly good for these kind of small personal, low-risk jobs. Permacomputing experiments with whether using these would be environmentally friendly if done correctly. I'd been reading into Permacomputing for a decent while but never properly had the chance to experiment with my thoughts on it.

Along with that I'd also spent time doing a module in my first year on the history of the internet and found the www's origins really inspiring, the idea of a language/system that was easy for just about anyone to learn, that was incredibly simple but super flexible. When learning about this I'd kind of started to feel like we'd lost that part of the internet. Websites are always generated with insane complexity which feels almost unnecessary when we still have that simple flexible system its all built on top of. I wanted to try and use that simple system again, to experience it for myself.

## The Code
### The Server Backend
I wanted the system to be as lightweight and fast as it could be, hopefully leading to a very power-efficient result. I decided to use C++ as it was my main language and was also very fast. 

I was planning on writing the server code myself, exploring libraries such as [oat++](https://oatpp.io/) or [crow](https://crowcpp.org/master/) but as I researched them I realised they were built for large scale systems. Whilst this is very much a strong point for them, this server was only meant to host a small static site that would see very little traffic and using these large libraries felt unnecessary and unwieldy.

Whilst researching I also found Lighttpd, a relatively old and incredibly light weight server program build to host static pages with high demand but on a small scale system wise. This felt like the right solution to my problem as it didn't implement large frameworks that wouldn't get used but would still allow my server to be reliable.

### The Parser
I initially planned to write a markdown parser and spent a day or two working on one, writing a [SAX-Style](https://en.wikipedia.org/wiki/Simple_API_for_XML) parser. I was unsure whether this was a workable idea for markdown but through thinking about it and planning how it would work I felt quite confident it would be much faster than a DOM parser. I was however, aware that creating a full-spec markdown parser would take most of my time up and I only wanted this to be a small project. 

I looked online and found [md4c][https://github.com/mity/md4c], a simple and insanely fast parser written in very low level c. I ran some benchmarks and found it could parse incredibly large documents in less than a millisecond which convinced me pretty quickly. It seemed much faster than any other option but also much simpler. After starting to implement this I discovered it actually parsed markdown text in the same SAX-Style system as I had planned to which made me very happy.

From here I implemented md4c along with code to read the filesystem and combine the resulting html with a template. This took a few revisions as I wanted to make it as flexible and reusable as possible, making little to no assumptions about the template being given. By default the code searched for an empty `<article>` body and placed the generated html within it and a similar thing for the `<nav>` menu. This could then be overwritten by handing in other identifiers to look for.

The code would collect every markdown file, generate a nav menu summarising it then go through each page copying the template and adding that along with its matching markdown/html and writing it to a given file.

## The Hardware And Its OS
A few months before this project, I found an laptop in a "free to a good home" box outside someone's house. It was very old and originally ran windows vista but someone had tried to update it to windows 10 and broken it. I took it home as a chance to take it apart and mess around with it but in the end found myself needing a server for this project and this felt perfect.

The main difficulty however was its power-consumption. Its power consumption felt like it would be much higher than newly bought lightweight hardware such as a raspberry pi. I spent a lot of time weighing up the differences and decided to try the laptop and measure its power consumption over a length of time. I'm doing this at the moment and will update this section soon.

The other big issue I hit was the operating system. I wanted something as lightweight as possible with little to no unneeded features. These being things like a desktop or the additional packages you would find in something like stock ubuntu. A big difficulty here was my lack of knowledge around operating systems, until that summer I had always used windows, only then switching to Pop_OS. I had almost no knowledge of other systems but weighed up a few well known options including:

- Base Debian
- Raspberry Pi OS Lite (very stripped down Pi OS)
- Arch

These each had their own issues. I was unsure what was included in base Debian and what Raspberry Pi OS Lite actually involved (Rpi OS Lite has almost no documentation online). I talked to a friend with more Linux experience than I and he pointed me to [Alpine Linux](https://www.alpinelinux.org/). A massively stripped down Linux distribution built specifically for lightweight servers and with its own package manager that offered a Lighttpd install!

I decided to go for this very quickly as it seemed built specifically for the ideas I was wanting to test out.

### Alpine Linux
Alpine Linux was my first non-debian Linux experience. I really enjoyed learning about it and found its documentation really helpful and detailed with almost everything I needed. The OS itself was really simple and friendly too which was very nice. 
Using it was a really educational experience for me, I was very surprised by what wasn't included as I slowly learnt what came from Debian and what didn't. Alpine didn't have sudo, any sort of file transfer systems or any of bash's basic features. Realising this and understanding the lower-level commands they were built out of was really interesting (for example sudo seems like its just a complex wrapper for su, a command that switches users).

Alpine essentially, from a users perspective, is made of Busybox (a very basic shell that I also found runs within ubuntu after a kernel panic) and OpenRC which just controls how background services run. These two programs did everything I needed with OpenRC managing Lighttpd and Busybox letting me interact with the OS and running a startup script for me to pull from Github and rebuild/run the C++ code.

## Summary
I've finished this project for now and I'm very happy with it, it has all the features I wanted it to have and a few extra. I've yet to test its power-consumption yet though so I hope to do this soon. I think this site is a really good exploration of some interesting ideas. It feels very unique though I do worry if its basic visual style is putting some people off it and also possibly causing accessibility issues for certain people.

### Still To Do
Outside of this there's still a few things I'd like to add at some point, a big one would be basic video sharing. At the moment this website relies on other servers to store and share files, such as YouTube or Mastodon. A core principle of Permacomputing is avoiding reliance's like these and whilst this isn't a principle I'm super invested it it feels like it could be fun to try to implement and would mean I wouldn't need to worry about my website becoming outdated over time.

### Stability
I ran a few basic tests on the servers stability and found some interesting points. First, its stability is quite good, I hear horror stories of people always having to check in on and debug their servers. At the time of writing this server has been running for almost a month without issue, having been down only once when a flat-mate unplugged it.

A second point worth making though is that despite running Lighttpd, the hardware greatly limits the traffic it can take. From some benchmarks with [httperf](https://github.com/httperf/httperf) it can handle about 10 page requests a second before one request will fail, I'm unsure whether this is caused by the laptop or my home router. I intend to look into this at some point.

## Fun stuff
- You can still see the first test article for this website [here](TestFullArticle.md).
- You can see the website I used for a decent few years before this [here](https://github.com/Wil-Ro/Portfolio). I cant host it as it takes priority over my current site on most search engines. Its CSS is much more modern and has some really fun quirks, for instance the [gallery page](https://wil-ro.github.io/Portfolio/pages/AllProjects.html) which has no JavaScript, its 100% pure CSS.

