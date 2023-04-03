// 구구단 홀수만 출력

for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    if (i * j % 2 !== 0) {
      console.log(i + (' * ') + j + (' = ') + i * j);
    }
  }
}