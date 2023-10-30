
# AardvarkXR

## Overview
Aardvark was an open-source virtual reality project I joined and worked on for around 2 years between 2019 and 2021. I started out writing small add-ons for it and eventually ended up working with the main developer on creating core parts of the system.

## What is AardvarkXR?
[Aardvark](https://github.com/aardvarkxr/aardvark) is a framework that allows users to open small apps (known as gadgets) over the top of other virtual reality programs. Its program agnostic so runs in any other app. You could think of it as a mobile phone for use within other VR applications. Its main focus is providing small utilities such as calculators or note taking apps. Developers can create apps for Aardvark using web code (React and Typescript) which it then renders over the users view, these renders can be 3D which is a big positive as most core VR systems don't support 3D rendering on overlays so Aardvark does this itself. 

Due to all the code being web-based and run on servers, all gadgets are innately multi-user (with a small amount of work from the developer) and when in social VR apps, people can open gadgets that will be seen by all other users within that program using Aardvark.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pux6RbySUMU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## My Work
I was first introduced to Aardvark through a hackathon the developers ran on its initial release. When taking part in the first hackathon I had no experience with typescript, so I was required to teach myself over the course of the 3 days.

I worked on an audio visualiser tool that ran in the background of users environments as they worked and also helped other developers, designing and creating 3D models for their work, such as icons for a playing card app; one of the first apps to be published on the platform.

________

Around 4 months later I was working on some 3D art in VR and realised it would be really useful to be able to bring reference images into my VR space. I remembered Aardvark and revisited it create a photo viewing app. This was originally a personal project but became a team effort with another member of the community who offered to join development.

The app allowed users to upload images which were stored using [ipfs](https://en.wikipedia.org/wiki/InterPlanetary_File_System) and had multi-user functionality allowing different people to show each other photos.

<iframe width="560" height="315" src="https://www.youtube.com/embed/E3gw_GXHH1s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

After this I also found I was enjoying working with Aardvark and after talking to the main developer ended up working on the base code of the project itself. 

Originally Aardvark had the user open its UI through a button on their hand which took up valuable visual space used by a lot of other programs.

I was tasked with creating a more intuitive solution which ended up being a gesture based system. With little to no guidance I had to read and gain a full understanding of the projects mid-level inner workings and
rewrite large sections of it. After a week or so I produced a gesture system that allowed the user to bump the ends of their controllers together to open and close the menu. I also created a developer tool to allow developers to tweak the gesture to ensure it worked for their specific controllers.

<div style="display:flex; gap: 10px;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/9uG2HSavA1U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/FzQcE9UeOao" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Looking Back
Aardvark slowly fizzled out as it never gained much traction from developers although it did become somewhat known in the VR space for a while. The main developer moved on to other projects and after that it fell quiet. Although I'm less invested in VR development nowadays looking back I still feel like it had a lot of potential and I'm somewhat sad it didn't take off. I still use it when working on 3D models in VR but past that it doesn't see regular use.

Aardvark was my first open-source project and I feel that I learnt a lot from it. It helped me learn to prioritise what I did and didn't create pull requests for and ask for help around, showing me how valuable the main developers time was. In terms of project management it taught me a lot of things to aim for and avoid.
