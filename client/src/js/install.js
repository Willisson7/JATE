const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
});

butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;

        if (choiceResult.outcome === 'accepted') {
            console.log('PWA installed successfully!');
          } else {
            console.log('PWA installation declined.');
          }
          deferredPrompt = null;
          butInstall.style.display = 'none';
        } catch (error) {
          console.error('Error prompting installation', error);
        }
    }
});

window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed.');
});
