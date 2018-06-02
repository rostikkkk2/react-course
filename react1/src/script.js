// let arr = [1, 3, 5];
//
// let newArr = arr.map(square => {
//   return square * square - square + square.toString.length;
// });
// console.log(newArr);

// let numToSquare = num => num * num;
// map
// filter
// every
// some
// let lfdj = aaa => {
//   aaa.map(square => {
//     return square * square - square + square.toString.length;
//   });
// }

class Customer {
  constructor(name, prises_arr) {
    this.name = name;
    this.prises_arr = prises_arr;
  }

  totalBuy(){
    let total_price = this.prises_arr.reduce((sum, curent) => sum + curent);
    return total_price - total_price * (this.discount / 100);
  }

}

class UsualCustomer extends Customer{
  get discount(){
    return 0;
  }
}

class BuisenessCustomer extends Customer{
  get discount(){
    return 10;
  }
}

class EliteCustomer extends Customer{
  get discount(){
    return 20;
  }
}
