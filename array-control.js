const arr = ['a', 'd', 'c', 'd', 'e', 'd'];

// arr 배열에서 indexOf와 splice를 이용하여 d 모두 제거
let dIndex = arr.indexOf('d');

while (dIndex > -1) {
  arr.splice(dIndex, 1)
  dIndex = arr.indexOf('d');
}