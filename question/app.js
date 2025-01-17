//基礎編
//Q1　変数
let nickname = 'れな';
let age = 24;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

//Q2　配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`; // これはテンプレートリテラル
console.log(templateText);

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

user.sayHello = function() {
  console.log('Hello！');
};
// メソッドを呼び出す
user.sayHello();

//Q8　引数
let calc = {};
//空のオブジェクトcalcを使用
calc.add = function(x,y) {
  console.log(x + y);
};
calc.add(2,5);

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
//Math.randomに6をかける...0 ~ 10未満の整数の乱数を生成
//これで0... ~ 9.9999.....の間で乱数が生成され、小数点以下が切り捨てられるという処理


//Q2　コールバック関数
setTimeout(() => {
  console.log('Hello World!');
}, 3000);

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
  numbers.push(i);
}
console.log(numbers);


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