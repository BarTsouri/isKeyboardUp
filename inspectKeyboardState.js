// make sure that the keyboard is down before calling the function

function inspectKeyboardState() {
    var originalHeight = window.innerHeight,
        originalWidth = window.innerWidth,
        isCurrentOrientationPortrait = window.innerHeight > window.innerWidth,
        isKeyboardOpen = false,
        addressbarHeight;

    window.addEventListener('resize', function(){window.requestAnimationFrame(onResize)}, true);

    function onResize(){

        if (isKeyboardStateChanged()) {

            if (isKeyboardHeightSlightlyChanged()){
                console.log('keyboard height was slightly changed');
                return;
            }

            console.log('keyboard state changed');
            setKeyboardState();
            if (isKeyboardOpen) {

                console.log('keyboard is opened');
                onKeyboardUp();
            } else {

                console.log('keyboard is closed');
                onKeyboardDown();
            }
        } else {

            console.log('orientation changed');
            onOrientationChange();

            // the view was rotated while the keyboard was open
            if (isKeyboardOpen){
                console.log('the view was rotated while the keyboard was open');
                onOrientationChangeAndKeyboardUp();
            }
        }
    }

    /**
     * when the orientation changes, I can deduce the address bar size
     */
    function onOrientationChange(){
        if (!addressbarHeight){
            addressbarHeight = window.innerWidth - originalHeight;
        }

        isCurrentOrientationPortrait = !isCurrentOrientationPortrait;
        prevHeight = window.innerHeight;
        console.log('orientation is:' +(isCurrentOrientationPortrait? 'portrait' : 'landscape'))
    }


    var prevWidth = window.innerWidth;

    /**
     * the keyboard state is changed when resize is triggered and the width didn't change
     */
    function isKeyboardStateChanged(){
        var isOK = !isWidthChanged();
        prevWidth = window.innerWidth;
        return isOK;
    }

    /**
     * resize can be triggered even when changing the keyboard mode to symbols - which is a slight change
     * resize can be trgirred after orientation change, where the keyboard height slightly change
     * E.g galaxy tab
     * Keyboards usually have different height
     */
    function isKeyboardHeightSlightlyChanged(){
        return Math.abs(prevHeight - window.innerHeight) < 40;
    }

    function isWidthChanged(){
        return prevWidth != window.innerWidth;
    }

    var prevHeight = window.innerHeight;

    /**
     * determines if the keyboard is on or not
     */
    function setKeyboardState(){
        isKeyboardOpen = prevHeight > window.innerHeight;
        prevHeight = window.innerHeight;
    }

    /**
     * set the body with constant height
     */
    function onKeyboardUp(){
        // add whatever logic
    }

    function onKeyboardDown(){
        // add whatever logic
    }

    function onOrientationChangeAndKeyboardUp(){
        // add whatever logic
    }
}