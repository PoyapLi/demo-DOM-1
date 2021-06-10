const div = dom.find('#test>.red')[0]  //获取对应元素
dom.style(div, 'color', 'red') // 设置元素样式
console.log(div)

// const div1 = dom.find('#test>.red')[0]  //获取对应元素
// dom.style(div1, 'color')       // 获取元素样式里的颜色
// console.log(dom.style(div1, 'color'))  

// const div2 = dom.find('#test>.red')[2] //获取对应元素
// console.log(div2)  
// dom.style(div2,{color:'red'})  //更改获取元素样式里的颜色

const divList = dom.find('.red')  //获取所有div.red元素
console.log(divList)
dom.each(divList, (n)=>console.log(n))  //遍历divList里所有元素