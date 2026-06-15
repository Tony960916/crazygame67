// leaderboard.js 檔案內容

// 1. Firebase 設定
const firebaseConfig = {
    apiKey: "AIzaSyAj7ilt1Q7u4gCDloEg63rLJgNZl62ykLQ",
    authDomain: "crazygames-765e7.firebaseapp.com",
    projectId: "crazygames-765e7",
    storageBucket: "crazygames-765e7.firebasestorage.app",
    messagingSenderId: "503764823908",
    appId: "1:503764823908:web:81cf7abedc6b465f859471",
    measurementId: "G-Y1KB57B4QJ"
  };
  
  // 2. 初始化
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // 3. 排行榜功能
  function saveScore(playerName, score, gameId) {
    db.collection("leaderboards").add({
      name: playerName,
      score: score,
      game: gameId,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      console.log("分數上傳成功！");
    });
  }