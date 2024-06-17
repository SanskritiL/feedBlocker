document.addEventListener('DOMContentLoaded', function () {
    const linkedinToggle = document.getElementById('linkedinToggle');
    const instagramToggle = document.getElementById('instagramToggle');
    const twitterToggle = document.getElementById('twitterToggle');

    // Check if the chrome.storage API is available
    if (chrome && chrome.storage && chrome.storage.sync) {
        // Load saved settings
        chrome.storage.sync.get(['linkedinBlocked', 'instagramBlocked', 'twitterBlocked'], function (result) {
            linkedinToggle.checked = result.linkedinBlocked || false;
            instagramToggle.checked = result.instagramBlocked || false;
            twitterToggle.checked = result.twitterBlocked || false;
        });

        linkedinToggle.addEventListener('change', function () {
            chrome.storage.sync.set({ linkedinBlocked: linkedinToggle.checked });
            // Add your logic here to block/unblock LinkedIn feed
        });

        instagramToggle.addEventListener('change', function () {
            chrome.storage.sync.set({ instagramBlocked: instagramToggle.checked });
            // Add your logic here to block/unblock Instagram feed
        });

        twitterToggle.addEventListener('change', function () {
            chrome.storage.sync.set({ twitterBlocked: twitterToggle.checked });
            // Add your logic here to block/unblock Twitter feed
        });
    } else {
        console.error('chrome.storage.sync is not available.');
    }
});