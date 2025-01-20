//基礎編
//Q1　変数
let nickname = 'れな';
let age = 24;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

//Q2　配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`; // これはテンプレートリテラル
console.log(templateText);

//テンプレートリテラルを用いて、文章の中に ${変数名} を書くことで、その位置で変数の中身を展開することができるため
//変数に格納されている0番目の要素である'JavaScript'と3番目の要素である'Python'を表示させるためにこの記述を行った。


//Q3　オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);


//Q4　配列 ✕ オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

//Q5　四則演算
let total = playerList.reduce((sum, item) => sum + item.age, 0);
let average = total / playerList.length;
console.log(average);

//reduceというメソッドを用いて配列の合計値を求める処理を行った。sumには前の処理の結果（合計値）が渡され、item
// には現在の要素の値が順番に渡されるので、最終的に配列のすべての要素を足し合わせた値が返される。
//itemにはplayerListという変数に格納されている配列の中のすべてのオブジェクトからageというキーの値の合計値を
//求めたかったので0番目のオブジェクトから順番に取得させるために、itemにage, 0を指定した。
//平均を求めるためにaverageという変数を定義し、先ほど求めた合計値を要素数で割りたかったためplayerList.length;でplayerListの要素数を取得するための
//記述を行った。


//Q6　関数
function sayHello() {
  let text = 'Hello';
  console.log(text);
}

sayHello();

let sayWorld = function(){
  console.log('World');
};

sayWorld();

//Q7　メソッド
user.birthday = '2000-09-27';
console.log(user.birthday);
//userという既存の変数にbirthdayというプロパティを追加するためにドット記法を用いて記述を行った。

user.sayHello = function() {
  console.log('Hello！');
};
// メソッドを呼び出して実行
user.sayHello();

//Q8　引数
let calc = {};
//空のオブジェクトcalcを使用
calc.add = function(x,y) {
  console.log(x + y);
};
calc.add(2,5);
//2つの引数 x, y の和をコンソールに出力するadd メソッド

calc.subtract = function(x,y) {
  console.log(x - y);
};
calc.subtract(16,6);

calc.multiply = function(x,y) {
  console.log(x * y);
};
calc.multiply(7,7);

calc.divide = function(x,y) {
  console.log(x / y);
};
calc.divide(15,3);

//Q9 返り値
function remainder(x,y) {
  let rem = x % y;
  return rem;
};
a = 5;
b = 3;
console.log(a + 'を' + b + 'で割った余りは' + remainder(a,b) + 'です');


//Q10 スコープ
//この記述では、関数fooを定義してその関数の中で変数xを定義しているが、
//JavaScriptでは、関数内だけスコープが有効なため関数の中で定義した変数は関数の中でしか使えずエラーになってしまう。
//値は関数の中で代入したいが、その関数の外で使いたい場合は変数の定義を外で行うことで
//関数の中で変更した変数の値を関数の外でも参照することができる。
//関数の中で定義した変数はその関数内でしか使えないが
//関数の外で定義した変数は関数の中からでも参照することができる。


//応用編
//Q1 標準組み込みオブジェクト
console.log(Math.floor(Math.random() * 10));

//Math.floor( )で小数点以下を切り捨て
//Math.random( )で0 ~ 1未満の乱数を生成
//Math.randomに10をかける...0 ~ 10未満の整数の乱数を生成
//これで0... ~ 9.9999.....の間で乱数が生成され、小数点以下が切り捨てられるという処理


//Q2　コールバック関数
function callback(){
  console.log('Hello World!');
}
setTimeout(callback, 3000);

//3秒後に表示されるように指定したかったため、setTimeout関数を用いて
// 時間切れになると関数または指定されたコードの断片を実行するタイマーを設定した。
//この関数は時間をミリ秒単位で指定するため、3000という記述をした。

//Q3 if
let num = 0;
if(0 < num) {

  console.log('num is greater than 0');

} else if(0 > num) {

  console.log('num is less than 0');

} else {

  console.log('num is 0');

}


//Q4 for
let numbers = [];
for (let i = 0; i <= 99; i++) {
  numbers[i] = i ;
}
console.log(numbers);

//変数iが0から99へfor文で繰り返し処理されて追加できるようにこの記述を行った。
//numbersの配列の中に、変数iの値が代入されるようにnumbers[i] = i ;を指定した。

//Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {

  if(typeof mixed[i] === 'string') {

    console.log('not number');

  } else if(mixed[i] % 2 === 0) {

    console.log('even');

  } else {

    console.log('odd');

}};

//まず、すべての要素を取り出して仕分けるためにfor文を用いて要素すべてに繰り返し処理を行うための記述をした。
//仕分ける条件を指定するためにif文を使用し
// typeofというデータ型を判定する演算子を用いて変数mixedに格納されている配列の要素がstring型の場合not numberを表示させる
//条件定義を行い、偶数の場合はevenを表示させたかったのでelse ifで2で割り切れる場合を条件指定した。
//奇数の場合はoddと表示させるために上記のどちらの条件にも当てはまらない場合は、oddと表示させるためにelse文を用いて記述を行った。