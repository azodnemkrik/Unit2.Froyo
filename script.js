// Prompt user for order

const order = prompt(
    "Please enter your froyo flavors.",
    "vanilla,banana,banana,oreo,vanilla,chocolate,vanilla,vanilla,oreo,strawberry,oreo,coffee,catnip,dognip,coffee,coffee,chilli,butter pecan,strawberry,butter pecan,coffee,coffee,toffee"
)

let orderStats = {}

function startOrder(myFlavors) {
    const flavors = myFlavors.split(",")
    for ( let i = 0 ; i < flavors.length ; i++ ){
        console.log(i)
        console.log(flavors[i])
        if (orderStats[flavors[i]] == undefined){
            orderStats[flavors[i]] = 0
        }
        orderStats[flavors[i]]++
    }
    
    console.table(orderStats)
}

startOrder(order)
