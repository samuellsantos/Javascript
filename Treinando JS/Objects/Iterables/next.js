function myNumbers(){
    let n = 0
    return{
        next: function (){
            n += 10
            return {value: n, done:false}
        }
    }
}

const n = myNumbers();
console.log(n.next())
console.log(n.next())
console.log(n.next())
