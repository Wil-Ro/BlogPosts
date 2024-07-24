
# Linux Troubleshooting
I've been using Linux for a while and I pretty regularly find myself hitting issues I know I've hit before but not remembering the solution and have to go slogging through stack-overflow to find it again. I now have this, this is a list of all the issues I hit and how I resolved them. For future me but also maybe you? :)

## Networking
### Unable to connect to internet but able to connect to local network
Try ping googles dns server at 8.8.8.8, if this doesn't work then problem is outside your pc, if this does work but you cant get to other sites then check /etc/resolv.conf. This file holds pointers to dns servers, it might be wrong?

## Alpine Linux
### Setting up apk repos
Go to /etc/apk/repositories, add extra ones there. put @name before it to give it a name so you can specify you want to use that repository:
```
echo "@testing https://reposito.ry" > /etc/apk/repositories
apk add package@testing
```
