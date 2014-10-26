Use this code for inspecting when the Android keyboard is up in browsers.
I believe that sharing this function will help others, as there is no equivalent code out there.

IMPORTANT: Make sure that the keyboard is down before calling the function.

The logic works on web sites where the viewport equals to the dimensions of the device. i.e. the site must use <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0,maximum-scale=1.0">

Uploaded two files:

1. inspectKeyboardState.js - The file which holds the basic logic. You should extend it.

2. proof.html - Run it on your Android device to see that it acually works. The red div grows with the flex property, but doesnt change its height due to keyboard state changes.

Enjoy
