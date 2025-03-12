// Prompt user for order

const order = prompt(
    "Please enter all your desired froyo flavors using a comma to separate them.",
    "vanilla,banana,Banana,oreo,vanilla,chocolate,vanilla,vanilla,oreo,strawberry,oreo,coffee,catnip,dognip,coffee,coffee,chilli,butter pecan,strawberry,butter pecan,coffee,coffee,toffee"
)

let orderStats = {}

function startOrder(myFlavors) {
    const flavors = myFlavors.split(",")
    for ( let i = 0 ; i < flavors.length ; i++ ){
        console.log(i)
        console.log(flavors[i].toLowerCase())
        if (orderStats[flavors[i].toLowerCase()] == undefined){
            orderStats[flavors[i].toLowerCase()] = 0
        }
        orderStats[flavors[i].toLowerCase()]++
    }
    
    console.table(orderStats)
}

startOrder(order)
