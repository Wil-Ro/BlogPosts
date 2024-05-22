P
first installed:
- gcc, libc-dev, make
- a file complained about not finding "linux/types.h", made it "sys/types.h"
  this pointed it to /usr/include/sys/types.h
- needed a gpio library, added this one and prayed https://pkgs.alpinelinux.org/package/edge/testing/armv7/pigpio
- added apk add linux-headers
- installed lgpio from here https://github.com/joan2937/lg/tree/master, had a few issues but still installed
- code ran but didnt accept Alpine, had to edit line 260-ish in lib/Config/DEV_Config.c, grep the error message from the binary
- IT ACTUALLY WORKED I AM THE MOST HAPPY

note you may need to reinstall lgpio if your using diskless alpine as it wont install it somewhere itll save
alternatively, use lbu include to ensure its saved
