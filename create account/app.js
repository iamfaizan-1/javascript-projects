
const createAccount = (fullname) =>{
let balance = 0;
return{

    deposit:(amount)=> {
        if(amount<=0){
            alert("can't deposit this amount,should be greater than 0")
        }
        else{
            balance += amount;
        }

    },
    withdraw:(amount)=> {

        if(amount <=0){
            alert("can't withdraw amount below or equal to zero")
        }
        else{
            balance -= amount;
        }
    },
    getbalance:()=> {
        console.log(`your current balance is: ${balance} for the account: ${fullname}` )

    }


}

}



const account1 = createAccount("faizan");

account1.getbalance();
account1.deposit(50000);
account1.getbalance();