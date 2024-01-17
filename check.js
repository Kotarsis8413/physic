const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);

window.onload = function() {
    if (isMobile) {
        window.location = "https://kotarsis8413.github.io/physic/mobile";
    }
}