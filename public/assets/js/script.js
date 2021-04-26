//じゃんけん用のSCRIPTを書いてください
let yourChoice;
let pcChoice;
let pcChoiceTxt;
let resultMsg;
let resultNum;
let battleTotal = 0;
let drawCounter = 0;
let winCounter = 0;
let loseCounter = 0;

$('#gu_btn').on('click', function () {
  // 総対戦数に1を足す
  battleTotal += 1;
  console.log('battleTotalは' + battleTotal);
  // 背景色初期化処理


  yourChoice = 1;
  pcChoice = Math.random() * 3;
  pcChoice = Math.ceil(pcChoice);
  if (pcChoice == 1) {
    pcChoiceTxt = 'グー';
  } else if (pcChoice == 2) {
    pcChoiceTxt = 'チョキ';
  } else {
    pcChoiceTxt = 'パー';
  }

  // PCの選択をテキストとして、pc_handsのtxtを書き換える
  $('#pc_hands').text(pcChoiceTxt);

  console.log('コンピュータの選択は' + pcChoiceTxt + 'です');
  // console.log(pcChoice);
  // ここまででPCの選択は１から３の整数
  // 自分と相手が引き分けだったら、ドローを返す
  // guのパターン
  if (yourChoice == pcChoice) {
    console.log('draw');
    resultMsg = '引き分けでした';
    drawCounter += 1;
    $('#drawTotal').text(drawCounter);
    $('#result').text(resultMsg);
    $('body').css('background-color', 'green');
    $('#battleTotal').text(battleTotal);
    resultNum = 0;

  } else if (pcChoice == 2) {
    console.log('win');
    resultMsg = '勝ちました';
    winCounter += 1;
    $('#winTotal').text(winCounter);
    $('#result').text(resultMsg);
    $('body').css('background-color', 'red');

    $('#battleTotal').text(battleTotal);
    resultNum = 1;
  } else {
    console.log('lose');
    resultMsg = '負けました';
    loseCounter += 1;
    $('#loseTotal').text(loseCounter);
    $('#result').text(resultMsg);
    $('body').css('background-color', 'blue');
    $('#battleTotal').text(battleTotal);
    resultNum = 2;
  }


});
// ここからチョキ―のパターン
$('#cho_btn').on('click', function () {
  // 総対戦数に1を足す
  battleTotal += 1;
  yourChoice = 2;
  console.log('あなたの選択はチョキです');
  pcChoice = Math.random() * 3;
  pcChoice = Math.ceil(pcChoice);
  console.log('コンピュータの選択は' + pcChoice + 'です');
  // pcChoiceTxtにグー、チョキ―、パーのいずれかを代入
  if (pcChoice == 1) {
    pcChoiceTxt = 'グー';
  } else if (pcChoice == 2) {
    pcChoiceTxt = 'チョキ';
  } else {
    pcChoiceTxt = 'パー';
  }
  // PCの選択をテキストとして、pc_handsのtxtを書き換える
  $('#pc_hands').text(pcChoiceTxt);

  // choのパターン
  if (yourChoice == pcChoice) {
    console.log('draw');
    resultMsg = '引き分けでした';
    drawCounter += 1;
    $('#drawTotal').text(drawCounter);
    $('#result').text(resultMsg);
    $('body').css('background-color', 'green');
    $('#battleTotal').text(battleTotal);
  } else if (pcChoice == 1) {
    console.log('lose');
    resultMsg = '負けました';
    loseCounter += 1;
    $('#loseTotal').text(loseCounter);
    $('#result').text(resultMsg);
    $('body').css('background-color', 'blue');
    $('#battleTotal').text(battleTotal);
  } else {
    console.log('win');
    resultMsg = '勝ちました';
    $('#result').text(resultMsg);
    winCounter += 1;
    $('#winTotal').text(winCounter);
    $('body').css('background-color', 'red');
    $('#battleTotal').text(battleTotal);
  }
});
// ここからパ―のパターン
$('#par_btn').on('click', function () {
  // 総対戦数に1を足す
  battleTotal += 1;
  yourChoice = 3;
  console.log('あなたの選択はパーです');
  pcChoice = Math.random() * 3;
  pcChoice = Math.ceil(pcChoice);
  console.log('コンピュータの選択は' + pcChoice + 'です');
  // pcChoiceTxtにグー、チョキ―、パーのいずれかを代入
  if (pcChoice == 1) {
    pcChoiceTxt = 'グー';
  } else if (pcChoice == 2) {
    pcChoiceTxt = 'チョキ';
  } else {
    pcChoiceTxt = 'パー';
  }
  // PCの選択をテキストとして、pc_handsのtxtを書き換える
  $('#pc_hands').text(pcChoiceTxt);

  // parのパターン
  if (yourChoice == pcChoice) {
    console.log('draw');
    resultMsg = '引き分けでした';
    drawCounter += 1;
    $('#drawTotal').text(drawCounter);
    $('#result').text(resultMsg);
    $('body').css('background-color', 'green');
    $('#battleTotal').text(battleTotal);
  } else if (pcChoice == 1) {
    console.log('win');
    resultMsg = '勝ちました';
    winCounter += 1;
    $('#winTotal').text(winCounter);
    $('#result').text(resultMsg);
    $('body').css('background-color', 'red');
    $('#battleTotal').text(battleTotal);
  } else {
    console.log('lose');
    resultMsg = '負けました';
    loseCounter += 1;
    $('#loseTotal').text(loseCounter);
    $('#result').text(resultMsg);
    $('body').css('background-color', 'blue');
    $('#battleTotal').text(battleTotal);
  }
});

// cpu
const cpu = {
  // property
  hand: null,
  // name: ['Bob', 'Smith'],
  // age: 32,
  // gender: 'male',
  // interests: ['music', 'skiing'],
  // method
  setHand() {
    hand = Math.random() * 3;
    this.hand = Math.ceil(hand);
    console.log(this.hand);
  },

  getHand() {
    return hand;
  }


  //   get this.hand() {
  //   // getter, obj.propName を取得するときにコードが実行されます
  // },

  // bio: function () {
  //   alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  // },
  // greeting: function () {
  //   alert('Hi! I\'m ' + this.name[0] + '.');
  // }

};

const cpuHand = cpu.setHand().getHand();
console.log(cpuHand);
