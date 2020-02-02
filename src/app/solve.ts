export function solve(N: number): number[][] {
  //результирующий массив
  let result: number[][] = [];

  function isValid(colPos: number[]): boolean {
    //последний элемент массива colPos, где colPos - массив позиций точке по оси Оy
    const rowId = colPos.length - 1;

    for (let i = 0; i < rowId; ++i) {
      //расстояние между позициями Оy
      const difference = Math.abs(colPos[i] - colPos[rowId]);

      //проверка на то, чтобы линию атаки
      if (difference === 0 || difference === rowId - i) {
        return false;
      }
    }
    return true;
  }

  function solveNQueens(n: number, row: number, colPos: number[]) {
    //заполняет массив result
    if (n === row) {
      //заносим массив временных позиций в результирующий массив.
      result.push([...colPos]);
    } else {
      for (let i = 0; i < n; ++i) {
        //проходим по всем клеткам
        colPos.push(i);
        if (isValid(colPos)) {
          //проверка на валидность и рекурсивный вызов
          solveNQueens(n, row + 1, colPos);
        }
        //удаление последнего символа
        colPos.pop();
      }
    }
  }
  //запуск рекурсии
  solveNQueens(N, 0, []);
  return result;
}
