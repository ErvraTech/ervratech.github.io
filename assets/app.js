(function(){
  const year = new Date().getFullYear();
  const el = document.querySelector('[data-year]');
  if(el) el.textContent = String(year);

  // simple "demo" score randomization (stable per session)
  const seed = (Math.random()*1e9)|0;
  const scoreEl = document.querySelector('[data-score]');
  const verdictEl = document.querySelector('[data-verdict]');
  if(scoreEl && verdictEl){
    const score = 62 + (seed % 31); // 62..92
    scoreEl.textContent = String(score);
    verdictEl.textContent = score >= 80 ? "🟢 stable" : (score >= 70 ? "🟡 watch" : "🔴 investigate");
  }
})();
