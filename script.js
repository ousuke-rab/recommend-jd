const actresses = [
  { name: "三上悠亜", age: 30, work: "ファーストラブ", likes: 10 },
  { name: "橋本ありな", age: 26, work: "恋するキャンパス", likes: 9 },
  { name: "明日花キララ", age: 35, work: "アフタースクールラブ", likes: 15 },
  { name: "紗倉まな", age: 31, work: "純愛カメラ", likes: 8 },
  { name: "高橋しょう子", age: 30, work: "先生と放課後", likes: 7 },
  { name: "天使もえ", age: 30, work: "もえもえ図書室", likes: 6 },
  { name: "篠田ゆう", age: 34, work: "雨の日の告白", likes: 5 },
  { name: "伊東ちなみ", age: 28, work: "恋と予感", likes: 6 },
  { name: "波多野結衣", age: 38, work: "誘惑マンション", likes: 11 },
  { name: "涼森れむ", age: 26, work: "放課後プレイ", likes: 7 }
];

const list = document.getElementById("list");
const search = document.getElementById("search");

function renderList() {
  const keyword = search.value.toLowerCase();
  list.innerHTML = "";

  actresses
    .filter(a => a.name.includes(keyword) || a.work.includes(keyword))
    .sort((a, b) => b.likes - a.likes)
    .forEach((a, i) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${i + 1}. ${a.name}（${a.age}歳）</h2>
        <p>代表作：${a.work}</p>
        <button class="like-btn" onclick="like('${a.name}')">👍 ${a.likes}</button>
      `;
      list.appendChild(card);
    });
}

function like(name) {
  const a = actresses.find(a => a.name === name);
  if (a) {
    a.likes++;
    renderList();
  }
}

search.addEventListener("input", renderList);
renderList();
