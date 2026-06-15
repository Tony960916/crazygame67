// leaderboard.js
// 排行榜功能已整合到 index.html 內的「排行榜模組」。
// 這個檔案保留為相容用途，避免重複宣告 firebaseConfig / db 造成頁面錯誤。

window.CyberArcadeLeaderboard = window.CyberArcadeLeaderboard || {
  saveScore(playerName, score, gameId) {
    if (typeof window.submitGameScore === 'function') {
      return window.submitGameScore(gameId, playerName, score);
    }
    console.warn('submitGameScore 尚未載入，請確認 index.html 的排行榜模組已執行。');
    return Promise.resolve(false);
  }
};
