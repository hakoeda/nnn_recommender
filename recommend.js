'use strict'
const nyobi = {
  data: [
    { title:'プログラミング体験をしてみよう', textNo: 5181, videoNo: 482531223},
    { title:'はじめてのHTML', textNo: 5182, videoNo: 482531225},
    { title:'さまざまなHTMLタグ', textNo: 5183, videoNo: 482531227},
    { title:'HTMLで作る自己紹介ページ', textNo: 5184, videoNo: 482531229},
    { title:'はじめてのJavaScript', textNo: 5185, videoNo: 482531231},
    { title:'JavaScriptでの計算', textNo: 5186, videoNo: 482531233},
    { title:'JavaScriptで論理を扱う', textNo: 5187, videoNo: 482531235},
    { title:'JavaScriptのループ', textNo: 5188, videoNo: 482531237},
    { title:'JavaScriptのコレクション', textNo: 5189, videoNo: 482531239},
    { title:'JavaScriptの関数', textNo: 5190, videoNo: 482531241},
    { title:'JavaScriptのオブジェクト', textNo: 5191, videoNo: 482531243},
    { title:'はじめてのCSS', textNo: 5192, videoNo: 482531245},
    { title:'CSS を使ったプログラミング', textNo: 5193, videoNo: 482531247},
    { title:'Web ページの企画とデザイン', textNo: 5194, videoNo: 482531249},
    { title:'診断機能の開発', textNo: 5195, videoNo: 482531251},
    { title:'診断機能の組込み', textNo: 5196, videoNo: 482531253},
    { title:'ツイート機能の開発', textNo: 5197, videoNo: 482531255},
    { title:'GitHub で Web サイト公開', textNo: 5198, videoNo: 482531257},
  ],
  getReccomend: (name) => {
    // 全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode = name.split("").map( e => e.charCodeAt() ).reduce( (acc, cur) => acc + cur , 0);
    // 文字のコード番号の合計を回答の数で割って添字の数値を求める
    return nyobi.data[sumOfCharCode % nyobi.data.length];
  }
};

// 診断ボタンが押されたときの処理
const id = id => document.getElementById(id);
id('input-name').oninput = () => {
  const name = id('input-name').value; // ユーザー入力を取得
  const reccomend = nyobi.getReccomend(name); // オススメテキストを取得
  id('name').innerText = name; // 入力内容を表示
  id('text_url').setAttribute('href', `https://www.nnn.ed.nico/contents/guides/` + reccomend.textNo); // 授業URL
  id('text_title').innerText = reccomend.title; // 授業タイトル
  id('video_url').setAttribute('href', `https://www.nnn.ed.nico/lessons/` + reccomend.videoNo); // 授業動画
  id('result-area').style.display = name ? "block" : "none"; // 結果の表示
}