let el = document.querySelector('.content');

function showAd() {
  console.log('-------------------');
  console.log('--------AD---------');
  console.log('-------------------');
}
showAd();

function showAd2(msg = '何もなかった時表示') { // 仮引数 =  仮置き
  console.log('-------------------');
  console.log(`------${msg}-----`); // `xxx` テンプレートリテラル
  console.log('-------------------');
}
showAd2('ナイスな広告'); // 実引数
