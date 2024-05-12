
# Understanding Waveshare's E-Paper C Drivers


Waveshare don't explain their drivers, and as far as I can tell no one online has either. The drivers themselves aren't too complicated, you could probably work them out within half an hour or so, but that's no reason not to explain it a bit and save someone that time.

# What are we given?
The C drivers aren't too wild, every device has a similar set of methods:
- Initialise the device
- Display given image
- Display partial image at coordinates
- Clear screen
- Sleep

Any more complex behaviour is driven by our code, altering an image and eventually drawing it to the screen. Luckily, waveshare have made a set of helper tools, the main two being GUI_BMP and GUI_Paint. GUI_BMP is relatively simple, it takes a bmp file and loads it in the correct format for us to just display directly using the display method. The Paint toolset is worth describing in a bit more detail.

# GUI_Paint
GUI_Paint is a small set of tools that let us alter and create images before we push them to the device. Its main focus is on a struct called Paint, this holds a pointer to your image (set with Paint_SelectImage()), subsequently called paint methods will alter this data, adding text, shapes and bitmaps to it. You can then access this and draw it through the original pointer you gave the SelectImage method, it seems to always directly edit the image data so there's no need to apply it, just call your devices display method on that pointer. 

GUI_Paint also offers the ability to rotate, scale and mirror the image, the methods for setting mirror, scale and rotation don't actually do anything other than set a value in the Paint struct and I haven't found any method to apply those settings to a given image, flipping it or such.
The one thing I have found is that if you call a method called Paint_NewImage() (this fills the image buffer with blank memory and resets it for use), it will use the rotate data to swap the width and height but that's it. 

The best way to learn this library, as with all C, is to give the header file a look and get a summary of all the methods, hopefully this overview will give you a head-start on understanding what you're reading though. The file is in lib/GUI/GUI_Paint.h.

# A little more detail on the general driver methods
As I said, the drivers are pretty bare-bones, essentially just letting us write images to the screen. Its worth going a little more in-depth though, we have an extra file not mentioned yet, this is DEV_Config. DEV_Config uses a few other files and essentially sets up our computer to communicate with the display, it works out what gpio drivers our device has and sets ups its methods to use whatever they can. This is something definitely worth calling as soon as your program starts up, before even calling our normal Init() method.

With that in-mind here's a list of actual methods we're given:

EPD_7in5_V2.h (or any other driver):
- EPD_7IN5_V2_Init(), sets up device parameters
- EPD_7IN5_V2_Init_Fast(), ¯\\\_(ツ)_/¯
- EPD_7IN5_V2_Init_Part(), sets up device to do partial refresh, can be called anytime before partial refresh is used aka doesn't have to be at the start with Init()
- EPD_7IN5_V2_Clear(), draws white image to screen
- EPD_7IN5_V2_ClearBlack(), draws black image to screen
- EPD_7IN5_V2_Display(), displays given bytes
- EPD_7IN5_V2_Display_Part(), draws an image at a given location
- EPD_7IN5_V2_Sleep(), puts the screen in deep sleep, essentially a way to turn it off and make it take less power while still having it plugged into power.

DEV_Config.h:
- DEV_Module_Init(), sets up spi communication for your computer, checking what drivers you have and using what it can
- DEV_Module_Exit(), essentially closes anything its opened
