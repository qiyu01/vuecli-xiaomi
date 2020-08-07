for(let i of data[1]){
    var service=[];
    if(i.pid==pid){
        // console.log(pid)
        // console.log(i)
        //这里主要是想构造一个结构为[[{},{},{}...],[{},{}...],[{},{}...],[{},{}...]]的service数组

        //service[0]就是type为1的数组（包含基础保修类型的项目） service[1就是type为2]的数组（包含增加保修的类型项目）......

        // 这样构造主要是为了到时候把这些service插入对应的商品下时可以分组，第一组是product.service[0],也就是基础保修类型，第二组是product.service[1]，也就是增加保修时长类型。service[2]是云空间类型，service[3]是加价购类型.
        // 然后，继续v-for这个product.service[0],在对应的类型下插入具体内容，具体请看dom结构
        var serviceType1=[];
        var serviceType2=[];
        var serviceType3=[];
        var serviceType4=[];
        
        switch(i.type){
                case 1:
                    serviceType1.push(i)
                    service[0]=serviceType1
                    break;
                case 2:
                    serviceType2.push(i)
                    service[1]=serviceType2
                    break;
                case 3:
                    serviceType3.push(i)
                    service[2]=serviceType3
                    break;
                case 4:
                    serviceType4.push(i)
                    service[3]=serviceType4
                    break;

        }
        
    }
    console.log(service)
    
}