const subscribeWorker = async () => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    const registration = await navigator.serviceWorker.ready;

    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: import.meta.env.VITE_WEB_PUSH_PUBLIC_KEY
    });
    // setSubscription(sub);
    console.dir(sub);
    // notify('test', 2000);

    //& 서버에 구독 정보 전송
    // if (isConnected) {
    //   console.log('??????');
    //   console.log(sub);
    //   emit('sub', JSON.stringify(sub));
    //   emit('test', 'lorem');
    // }
    // await fetch('/api/subscribe', {
    //   method: 'POST',
    //   body: JSON.stringify(sub),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
  }
};

export default subscribeWorker;
