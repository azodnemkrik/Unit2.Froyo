// Prompt user for order

const order = prompt(
    "Please enter all your desired froyo flavors using a comma to separate them.",
    "Vanilla,banana,Banana,Oreo,Vanilla,chocolate,vanilla,vanilla,oreo,strawberry,oreo,coffee,catnip,dognip,coffee,coffee,chilli,butter pecan,strawberry,butter pecan,coffee,coffee,toffee"
)

let orderStats = {}

function startOrder(array) {
    const flavors = array.split(",")
    for ( let i = 0 ; i < flavors.length ; i++ ){
        // console.log(i)
        // console.log(flavors[i].toLowerCase())
        const singleFlavor = flavors[i].toLowerCase()
        if (orderStats[singleFlavor] == undefined){
            orderStats[singleFlavor] = 0
        }
        orderStats[singleFlavor]++
    }
    
    console.table(orderStats)
}

startOrder(order)
