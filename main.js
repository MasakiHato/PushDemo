const messaging = firebase.messaging();

document.getElementById('subscribe').addEventListener('click', async () => {
  try {
    const token = await messaging.getToken({
      vapidKey: 'BHDoMfTOJ1tHC2PMpqRkSqeIqYI-yI3YBDCBk5vXai8295tb3X2pBnJ7sjG0jb3ZIMJPk_W6-TPsROo7xcJROLQ'
    });
    console.log('FCM Token:', token);
    alert('通知を許可しました！');
    // サーバーにこのtokenを送信して保存しましょう
  } catch (err) {
    console.error('Token取得失敗:', err);
  }
});

messaging.onMessage((payload) => {
  console.log('メッセージを受信:', payload);
  alert(`通知内容: ${payload.notification.title}`);
});
