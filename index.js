function saturdayFun(todo="roller-skate"){
    return `This Saturday, I want to ${todo}!`
}

function mondayWork(task = "go to the office"){
    return `This Monday, I will ${task}.`
    // return `This Monday, I will ${task? task: "go to the office"}.`
}

const Calculator = {
    name:'My Calculator',
    price: 50,
    add: function(){
        return 1+3
    },
    subtract: function(){
        return 1-3
    },
    multiply: function(){
        return 1*3
    },
    divide: function(){
        return 10/5
    }
    
}

// let motivation = function wrapAdjective(){
//     return function(param = "special"){
//         return `You are ${param}`
//     }
// }

function wrapAdjective(sign = "*"){
    return function(param = "special"){
        let wrapped_param = sign + param + sign
        return `You are ${wrapped_param}!`
    }
}

let actionApplyer = function(start, actions){
    let a = start
    for (let i = 0; i < actions.length; i++){
        a = actions[i](a)
    }
    return a
}

// function actionApplyer(start, actions){
//     if(actions.length > 0){
//         return actions[start]
//     }
//     else{
//         arrayOfTransforms.foreach(transformation)
//     }
//     return (actions.length > 0 ? actions[start] : result)
// }
