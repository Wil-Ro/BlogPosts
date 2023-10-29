
# SDL Uno
## Summary
When first starting out at university I found I had a decent chunk of spare time. The previous year spare time had been hard to come by so I decided to use this as well as possible and teach myself a new library for C++ and possibly try and make my first proper large C++ project. This started out with a number of experiments with [SDL](https://www.libsdl.org/) but eventually became a digital replication of the Uno card game with basic ai opponents. You can see the github for this project [here](https://github.com/Wil-Ro/SDLUno).

<img alt="An image of the game playing" src="uno.png" style="width:100%">


## The learning curve of C++ projects
This was my first major C++ project and it was a really interesting challenge. I came into it with 2 years C# experience, 4 years Python experience on and off and light C++ experience from slowly working through a book on the subject. Actually applying it in a large project with classes in different files and having them interact with each other was a really interesting learning experience. Previously all my work had just been making single files and learning the basic alphabet of the language. This was my first time making words.

For beginners, C++ has a somewhat complex compiler. Where interpreted and runtime languages let us off easy with simple compile options or often just a single default button to compile code with, C++ requires a decent few flags and often relies on a strong understanding of the processes going on under the hood (just like when writing with it).
Without this I found myself hitting a lot of linker errors with little direction or explanation as to their cause.

I barely understood what a linker was to begin with so errors felt very arbitrary and I got very little from them. This often resulted in relying on trial and error, compiling individual parts of the codebase or commenting out sections of code, trying to work out what was causing the error. Eventually however I came across [a really lovely explanation of header files](https://stackoverflow.com/questions/1686204/why-should-i-not-include-cpp-files-and-instead-use-a-header/1686421#1686421) on StackOverflow. Reading this really made what the linker did click for me and since then I've had very few issues. I've actually found myself sharing this post with friends and class-mates whenever I hear people struggling around headers or the compilation process in general.

Aside from compiling, C++ lets you do a lot of things that at first seem fine and wont be met with any complaints but later on can lead to issues (memory leaks for instance). Other languages will limit or warn you of these issues but C++ very much leaves you to it and assumes you know what you're doing. My lacking in knowledge of some of these issues are definitely somewhat obvious looking back at the code, whilst I knew about reclaiming memory and actively tried to use it wherever needed I've definitely missed certain areas, especially where it was used implicitly.

This meant that there was a lot of going back and refactoring as the process went on and the code still has a major few flaws even in its finished state. I'd like to go back and rewrite a lot of this sometime but that's not happened yet.

I would say that despite this, I really found myself enjoying having to think about memory when working on this. I was really proud of myself for how I handled a lot of resource usage. I managed to only instantiate each the Uno card texture once and use that amongst all the cards which I was very proud of. Using deconstructors for the first time had a similar rewarding feeling.

## The final result
This program was my main project for the first few months of university. I feel like it taught me an incredibly large amount and I really got a lot from it even if the final result isn't super polished.

It was a really good chance for me to try building a large system of classes that all interact with each other and better learn to consistently name things. Since this project I've started coming up with the terms I use to refer to things by before I code.