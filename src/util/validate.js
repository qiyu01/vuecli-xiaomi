function validate(string,reg){
    if(!string){
        return 1
    }else if(reg && !reg.test(string)){
        return 2
    }else{return 0}

}
// removeAll  传入一个数组，数组里的元素必须有isactive属性和name属性，该函数会把isactive属性全部变成false。name变成空字符串，
//add  前面removeAll数组里想要单个改变isactive属性为true的某个对象  一般用来控制需要加错误边框的input框
//remove  前面removeAll数组里想要单个改变isactive属性为false的某个对象   一般用来移除有错误边框的input框的边框颜色
//msg 传入需要设置警告信息的对象，该对象也必须要有isactive属性和name属性。一般用来控制显示提示消息的div
//content 字符串 把msg的name属性设置为content  作为消息提示div里显示的内容
// 不需要该操作的的对象请传入null或者不传
function setError(removeAll,add,remove,msg,content){
    if(removeAll){
        for(let i of removeAll){
            i.isactive=false
            i.name=""
        }
    }
    if(add){add.isactive=true}
    if(remove){remove.isactive=false}
    if(msg){
        msg.isactive=true,msg.name=content
    }
}

export{
    validate,
    setError
}