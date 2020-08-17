const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//console.log(pool);
//创建路由器对象
const router = express.Router();
//往路由器对象添加路由


//获取category列表
router.get("/v1/category_restful", (req, res) => {
    // console.log(_uname + "~~~~~" + _upwd);
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var sql = "select * from category";
    pool.query(sql, [], (err, result) => {

        if (err) throw err;
        if (result.length > 0) {

            res.send(result);
        } else {
            res.send("0");
        }
    });
});
router.get("/v1/category_list", (req, res) => {
    // console.log(_uname + "~~~~~" + _upwd);
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var sql = "select * from category_list";
    pool.query(sql, [], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("0");
        }
    });
});
// 根据id返回商品主要信息
router.get("/v1/getProductById", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var _pid = req.query.pid;
    var sql = `select * from product where id=${_pid}`;
    pool.query(sql, [], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("0");
        }
    });
});

// 根据id返回版本
router.get("/v1/product_version", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var _pid = req.query.pid;
    var sql = `select * from product_spec where pid=${_pid}`;
    pool.query(sql, [], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("0");
        }
    });
});
// 根据id返回所有版本的颜色
router.get("/v1/product_color", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var _pid = req.query.pid;
    var sql = `select * from product_color where pid=${_pid}`;
    pool.query(sql, [], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("0");
        }
    });
});
// 根id返回所颜色的图片
router.get("/v1/product_banner", (req, res) => {
    var _pid = req.query.pid;
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var sql = `select * from product_img where pid=${_pid}`;
    pool.query(sql, [], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("0");
        }
    });
});
// 根用户id返回购物车所有商品
router.get("/v1/cart", (req, res) => {
    // console.log(_uname + "~~~~~" + _upwd);
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var sql = "select * from cart where uid=1";
    pool.query(sql, [], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("0");
        }
    });
});
// 根用购物车里的商品id返回商品信息
router.get("/v1/cart_product/:pid", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var _pid = req.params.pid;
    var pid = _pid.split(",");
    var value = [];
    for (let i of pid) {
        value.push("id=" + i)
    }
    value = value.join(" or ")
    // console.log(_uname + "~~~~~" + _upwd);
    var sql = "select * from product where " + value;
    pool.query(sql, [], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("0");
        }
    });
});

// 根据购物车里的商品id返回这些商品所有的服务
router.get("/v1/service/:pid", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var _pid = req.params.pid;
    var pid = _pid.split(",");
    var value = [];
    for (let i of pid) {
        value.push("pid=" + i)
    }
    value = value.join(" or ")
    // console.log(value)
    // console.log(_uname + "~~~~~" + _upwd);
    var sql = "select * from service where " + value;
    pool.query(sql, [], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("0");
        }
    });
});

// 根用商品id加入购物车
router.get("/v1/addcart", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var _pid = req.query.pid;
    var _uid = req.query.uid;
    // console.log(_pid)
    // console.log(_uname + "~~~~~" + _upwd);
    var num = 1;

    var sql = "select * from cart where pid=? and uid=?";
    pool.query(sql, [_pid, _uid], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {

            num += result[0].num;
            var cid = result[0].id;
            var sql = `update cart set num=${num} where id=${cid}`;
            pool.query(sql, [], (err, result) => {
                if (err) throw err;
                if (result.affectedRows > 0) {
                    res.send("1");
                } else {
                    res.send("0");
                }
            });
        } else {
            var post = {
                id: "null",
                uid: _uid,
                pid: _pid,
                num: num,
                img_src: "product" + _pid + ".jpg",
                isselected: true
            };
            var sql = "insert into cart set ?";
            pool.query(sql, post, (err, result) => {
                if (err) throw err;
                if (result.affectedRows > 0) {
                    res.send("1");
                } else {
                    res.send("0");
                }
            });
        }
    });




});

// 根据购物车id删除对应的数据
router.get("/v1/cart_delete", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var _cid = req.query.cid;
    // console.log(value)
    // console.log(_uname + "~~~~~" + _upwd);
    var sql = "delete from cart where id=?";
    pool.query(sql, [_cid], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("0");
        }
    });
});

// 返回推荐商品
router.get("/v1/recommend", (req, res) => {
    // console.log(_uname + "~~~~~" + _upwd);
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var sql = "select * from recommend";
    pool.query(sql, [], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("0");
        }
    });
});
// 搜索商品根据keywords和category_id,pageSize为需要返回的页码
router.get("/v1/searchProduct", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var _kw = req.query.keywords;
    var _cid = req.query.category_id;
    var _pageSize = req.query.pageSize;
    var pageCount=20  //每页多少条数据
    var start = (_pageSize - 1) * pageCount;
    // total对象会push到每次返回的数据里面返回给客户端，作为分页相关数据(有多少页，现在处于第几页)
    var total = {};
    total.currentPage = _pageSize;


    // 判断_kw的关键字是不是本身就属于分类（比如"手机"，"电视"）这种关键字，
    var isCategory = false;
    var match = [];
    var sql = `select * from product_category`;
    pool.query(sql, [], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            for (let i of result) {
                if (i.name.search(_kw) != -1) {
                    isCategory = true
                    match.push(i.id)
                }
            }
            if (isCategory && _kw!="小米") {
                // 如果_kw是分类的关键字,直接拿找到符合的分类进行查询
                var value=match.join();
                if(_cid){
                    var sql1 = `select * from product where cid=${_cid}`;
                var sql2 = `select * from product where cid=${_cid} LIMIT ${start},${pageCount}`;
                queryAll(sql1, sql2)
                }else{
                    var sql1 = `select * from product where cid in (${value})`;
                var sql2 = `select * from product where cid in (${value}) LIMIT ${start},${pageCount}`;
                queryAll(sql1, sql2)
                }
                

            } else {
                // 如果_kw不是分类的关键字,就判断前端设置的参数状态，
                if (_kw && _cid) {
                    //前端设置了keword和分类的id，那意味着需要查询对应的分类里商品名称包含关键字的数据
                    var sql1 = `select * from product where cid=${_cid} and (name like '%${_kw}%')`;
                    var sql2 = `select * from product where cid=${_cid} and (name like '%${_kw}%') LIMIT ${start},${pageCount}`;
                    queryAll(sql1, sql2)
                } else if (_kw && !_cid) {
                    //前端设置了keword，分类的id=null，那意味着只需要查询所有的商品名称里包含关键字的数据
                    var sql1 = `select * from product where name like '%${_kw}%'`;
                    var sql2 = `select * from product where name like '%${_kw}%' LIMIT ${start},${pageCount}`;
                    queryAll(sql1, sql2)
                } else if (!_kw && _cid) {
                    //前端设置的keword=null，分类的id不是null，那意味着只需要查询对应的分类所有的数据
                    var sql1 = `select * from product where cid=${_cid}`;
                    var sql2 = `select * from product where cid=${_cid} LIMIT ${start},${pageCount}`;
                    queryAll(sql1, sql2)
                } else {
                    //前端设置的keword=null而且id=null，意味着查询的是全部商品
                    var sql1 = `select * from product`;
                    var sql2 = `select * from product LIMIT ${start},${pageCount}`;
                    queryAll(sql1, sql2)
                }

            }
        }
    });



    function queryAll(sql_1, sql_2) {
        // 第一次query返回全部符合的数据条数，以便作为total参数附加的返回的数据里面的总页数num，如果没有符合的数据，直接send(0)
        pool.query(sql_1, [], (err, result) => {
            if (err) throw err;
            if (result.length > 0) {
                total.num = result.length;
                // 在第一次query查到有数据后，开始按照要求返回对应的页数的数据
                pool.query(sql_2, [], (err, result) => {
                    if (err) throw err;
                    if (result.length > 0) {
                        // 在数据末尾加入total对象，储存总符合的数据有多少条和当前页码
                        result.push(total);
                        res.send(result);
                    } else {
                        res.send("0");
                    }
                });
            } else {
                res.send("0");
            }
        });
    }

});

// 搜索商品根据商品id返回800px大图
router.get("/v1/goods_img_bg", (req, res) => {
    // console.log(_uname + "~~~~~" + _upwd);
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var _pid = req.query.pidAll;

    var sql = "select * from goods_item_color where pid in (" + _pid + ")";
    pool.query(sql, [], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("0");
        }
    });
});

// 首页brick里的商品展示，手机类返回14条数据，电脑类返回两个7条数据，智能返回21条数据
router.get("/v1/brick_product", (req, res) => {
    // console.log(_uname + "~~~~~" + _upwd);
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var sql1 = "select * from product where cid=1 LIMIT 0,8";
    var sql2 = "select * from product where cid=3 LIMIT 0,14";
    var sql3 = "select * from product where cid=11 LIMIT 0,21";

    var promise1=new Promise((resolve,reject)=>{
        queryProduct(sql1,resolve)
    })
    var promise2=new Promise((resolve,reject)=>{
        queryProduct(sql2,resolve)
    })
    var promise3=new Promise((resolve,reject)=>{
        queryProduct(sql3,resolve)
    })

    Promise.all([promise1,promise2,promise3]).then((data)=>{
        res.send(data)
    })

    function queryProduct(sql,resolve){
        pool.query(sql, [], (err, result) => {
            if (err) throw err;
            if (result.length > 0) {
                resolve(result)
            } 
        });
    }

    
});



//使用用户名登录
router.get("/v1/login", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var _uname = req.query.name;
    var _upwd = req.query.pwd;
    var sql = "select * from user where name=? and pwd=?";
    pool.query(sql, [_uname, _upwd], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result);
        } else {
            var sql = "select * from user where email=? and pwd=?";
            pool.query(sql, [_uname, _upwd], (err, result) => {
                if (err) throw err;
                if (result.length > 0) {
                    res.send(result);
                } else {
                    var sql = "select * from user where phone=? and pwd=?";
                    pool.query(sql, [_uname, _upwd], (err, result) => {
                        if (err) throw err;
                        if (result.length > 0) {
                            res.send(result);
                        } else {
                            res.send("0");
                        }
                    });
                }
            });


        }
    });
});
//使用手机号码登录
router.get("/v1/phoneLogin", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8081");
    var phone = req.query.phone;
    var code = req.query.code;
    var sql = "select * from user where phone=? and code=?";
    pool.query(sql, [phone,code], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send("1");
        } else {
            res.send("0");
        }
    });
});

// 用户注册步骤1--输入手机号
router.get("/v1/register_restful/:uphone", (req, res) => {
    // 获取参数变量,看见冒号
    var _uphone = req.params.uphone;
    // var _upwd=req.params.upwd;
    //// console.log(_uphone+"~~~~~"+_upwd);
    var phone_exist = "select * from xiaomi_user where phone=?"

    pool.query(phone_exist, _uphone, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send("2");
        } else {
            var post = {
                uname: "null",
                upwd: "null",
                email: "null",
                phone: _uphone,
                verifycode: "1314"
            };
            var sql = "insert into xiaomi_user set ?";
            pool.query(sql, post, (err, result) => {
                if (err) throw err;
                if (result.affectedRows > 0) {
                    res.send("1");
                } else {
                    res.send("0");
                }
            });
        }
    });

});

//用户注册步骤2--通过输入的手机号获取验证码
router.get("/v1/register_verifycode/:uphone", (req, res) => {
    var _uphone = req.params.uphone;
    // var _uphone="18814127200";
    var sql = "select * from xiaomi_user where phone=?";
    pool.query(sql, [_uphone], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("0");
        }
        // console.log(typeof(result));

    });
});

// 用户注册步骤3--确认密码
router.get("/v1/confirm_restful/:uname&:uphone&:upwd&:verifycode", (req, res) => {
    // 获取参数变量,看见冒号
    var _uname = req.params.uname;
    // console.log(_uname);
    var _uphone = req.params.uphone;
    var _upwd = req.params.upwd;
    var _verifycode = req.params.verifycode;
    // console.log(_uphone + "~~~~~" + _upwd);
    var post = {
        uname: _uname,
        upwd: _upwd,
        email: "phoneregister@qq.com",
        phone: _uphone,
        verifycode: _verifycode
    };
    var sql = `UPDATE xiaomi_user SET upwd=?,uname=? where phone=?`;
    pool.query(sql, [_upwd, _uname, _uphone], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.send("1");
        } else {
            res.send("0");
        }
    });
});

//查询图片模块

router.get('/v1/searchPic/:pid', (req, res) => {
    let _pid = req.params.pid;
    //// console.log(req.params + '444444444444444444');//[object Object]444444444444444444

    let sql = 'select * from xiaomi_phone_pic where pid=?'
    pool.query(sql, [_pid], (err, result) => {
        if (err) throw err;
        res.send(result);
    })
});
//查询规格模块
router.get('/v1/searchEdi/:lid', (req, res) => {
    let _lid = req.params.lid;

    let sql = 'select * from xiaomi_phone where lid=?'
    pool.query(sql, [_lid], (err, result) => {
        if (err) throw err;
        res.send(result);
    })
});
//修改密码
router.put('/v1/update', (req, res) => {
    let _uname = req.body.uname;
    //// console.log(_uname);
    let _oldUpwd = req.body.oldUpwd;
    let _newUpwd = req.body.newUpwd;
    let _reUpwd = req.body.reUpwd;
    //// console.log(_reUpwd);
    pool.query('select * from xiaomi_user where uname=? and upwd=?', [_uname, _oldUpwd], (err, result) => {
        if (err) throw err;
        //console.log(result);

        if (result.length > 0) {
            pool.query('update xiaomi_user set upwd=? where uname=? ', [_reUpwd, _uname], (err, result) => {

                if (err) throw err;
                //console.log(result);
                if (result.changedRows > 0) {
                    res.send('1')
                } else {
                    res.send('2')
                }
            })
        } else {
            res.send('0')
        }
    });
});
//支付界面地址（活跃地址查询）
router.get('/v1/determineAdd/:uname', (req, res) => {
    let _uname = req.params.uname;
    // console.log(_uname);

    //// console.log(req.params + '444444444444444444');//[object Object]444444444444444444
    pool.query('select uid from xiaomi_user where uname=?', [_uname], (err, result) => {
        if (err) throw err;
        // res.send(result);
        let _uid = result[0].uid;
        //// console.log(_uid);


        let sql = 'select * from xiaomi_receiver_address where user_id=? and add_active=?'
        pool.query(sql, [_uid, '1'], (err, result) => {
            if (err) throw err;

            res.send(result);
        })

    })

});
//查询用户下所有的地址
router.get('/v1/searchAdd/:uname', (req, res) => {
    let _uname = req.params.uname;
    // console.log(_uname);

    //// console.log(req.params + '444444444444444444');//[object Object]444444444444444444
    pool.query('select uid from xiaomi_user where uname=?', [_uname], (err, result) => {
        if (err) throw err;
        // res.send(result);
        let _uid = result[0].uid;
        //// console.log(_uid);
        let sql = 'select * from xiaomi_receiver_address where user_id=? '
        pool.query(sql, [_uid], (err, result) => {
            if (err) throw err;

            res.send(result);
        })

    })

});
//查询订单
router.get('/v1/searchPro/:uname', (req, res) => {
    let _uname = req.params.uname;
    let arr = [];
    //// console.log(_uname);
    pool.query('select uid from xiaomi_user where uname=?', [_uname], (err, result) => {
        if (err) throw err;
        // res.send(result);
        if (result.length > 0) {
            let _uid = result[0].uid;
            //// console.log(_uid);
            pool.query('select product_id,p_id,count from xiaomi_shoppingcart_item where user_id=? and is_checked=?', [_uid, 1], (err, result) => {
                if (err) throw err;
                // //console.log(result);
                if (result.length > 0) {
                    pool.query(`SELECT pid,lid,price,title,spec,m1,pic_spec,count,(price*count) FROM xiaomi_phone,xiaomi_phone_pic,xiaomi_shoppingcart_item where lid=product_id and pid=p_id and user_id=? and is_checked=1;`, [_uid], (err, result) => {
                        if (err) throw err;
                        //console.log(result);
                        res.send(result);
                    })
                }
            })
        }
    })
});
//加入购物车模块
router.post('/v1/insert', (req, res) => {
    let _uname = req.body.uname;
    let _lid = req.body.lid;
    let _pid = req.body.pid;
    // console.log(_uname, _lid, _pid);
    // let _price = req.body.price;
    //// console.log(_lid, _pid + '*****');
    pool.query('select uid from xiaomi_user where uname=?', [_uname], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {

            //// console.log(result[0].uid);
            let _uid = result[0].uid;
            // console.log(_uid);

            //// console.log(_uid);
            //// console.log('***fsad');

            // //console.log(result);
            //// console.log(result.length);
            pool.query('select iid from xiaomi_shoppingcart_item where user_id=?', [_uid], (err, result) => {
                if (err) throw err;
                // console.log(result.length + '数量');
                if (result.length > 0) {
                    pool.query('select count from xiaomi_shoppingcart_item where product_id=? and p_id=? and user_id=? ', [_lid, _pid, _uid], (err, result) => {
                        if (err) throw err;
                        // //console.log(result);
                        //// console.log(result[0].count);
                        if (result.length > 0) {
                            let _count = result[0].count + 1;
                            // console.log(_count);
                            // let $lid = result[0].product_id;
                            // let $p_id = result[0].p_id;
                            // console.log('修改uid:' + _uid, _count);
                            pool.query('update xiaomi_shoppingcart_item set count=? where product_id=? and p_id=? and user_id=?', [_count, _lid, _pid, _uid], (err, result) => {
                                if (err) throw err;
                                // //console.log(result);
                                // console.log('修改成功');
                            });
                        } else {
                            // console.log('插入uid:' + _uid);
                            pool.query('insert into xiaomi_shoppingcart_item(user_id,product_id,p_id) values(?,?,?)', [_uid, _lid, _pid], (err, result) => {
                                if (err) throw err;
                                // //console.log(result);
                                // console.log('插入成功');
                            })
                        }
                    })
                } else {
                    pool.query('insert into xiaomi_shoppingcart_item(user_id,product_id,p_id) values(?,?,?)', [_uid, _lid, _pid], (err, result) => {
                        if (err) throw err;
                        // console.log('插入');
                        // //console.log(result);
                    })
                }
            });
        }
    })
});

// 查询购物车
// router.get('/v1/searchcart/:uname', (req, res) => {
//     let _uname = req.params.uname;
//    // console.log(_uname);


//     pool.query('select uid from xiaomi_user where uname=?', [_uname], (err, result) => {
//         if (err) throw err;
//         let _uid = result[0].uid;
//        // console.log(_uid);
//        // console.log('***');

//         pool.query('select product_id,p_id from xiaomi_shoppingcart_item where user_id=?', [_uid], (err, result) => {
//             if (err) throw err;

//             if (result.length > 0) {
//                 let sql = 'SELECT price, m1, spec, pic_spec, title, iid, user_id, product_id, p_id, count, is_checked FROM xiaomi_phone, xiaomi_shoppingcart_item, xiaomi_phone_pic where lid = product_id and pid = p_id and user_id=?';
//                 pool.query(sql, [_uid], (err, result) => {
//                     if (err) throw err;
//                     if (result.length == 0) {
//                         res.send('0');
//                     } else {
//                         res.send(result);
//                         // //console.log(result);
//                     }
//                 })
//             }
//         })


//     })
//    // console.log('***');

// });

// 查询购物车
router.get('/v1/searchcart/:uname', (req, res) => {
    let _uname = req.params.uname;
    // console.log(_uname);


    pool.query('select uid from xiaomi_user where uname=?', [_uname], (err, result) => {
        if (err) throw err;
        let _uid = result[0].uid;
        // console.log(_uid);
        // console.log('***');

        pool.query('select product_id,p_id from xiaomi_shoppingcart_item where user_id=?', [_uid], (err, result) => {
            if (err) throw err;
            if (result.length > 0) {
                let sql = '(SELECT  iid, m1, spec, pic_spec, title, price, user_id, product_id, p_id, count, is_checked FROM xiaomi_phone, xiaomi_shoppingcart_item, xiaomi_phone_pic where lid = product_id and pid = p_id and user_id=?)ORDER BY iid ASC';
                pool.query(sql, [_uid], (err, result) => {
                    if (err) throw err;
                    if (result.length == 0) {
                        res.send('0');
                    } else {
                        res.send(result);
                        //console.log(result);
                    }
                })
            }
        })


    })


});


//删除购物车商品
router.delete('/v1/del/:iid', (req, res) => {

    let str = req.params.iid;
    let arr = str.split('&')
    var $iid = arr[0];
    let $uname = arr[1];
    console.log('*****');

    console.log($iid, $uname);
    console.log('*****');
    pool.query('select uid from xiaomi_user where uname=?', [$uname], (err, result) => {
        if (err) throw err;
        // res.send(result);

        let $uid = result[0].uid;
        console.log($uid);

        pool.query('select  iid from  xiaomi_shoppingcart_item where user_id=?', [$uid], (err, result) => {
            if (err) throw err;
            $iidr = result[0].iid;
            // console.log($iidr);
            var $iid = arr[0];
            var $iid = parseInt($iid) + parseInt($iidr) - 1;
            console.log($iid);

            let sql = 'DELETE FROM xiaomi_shoppingcart_item WHERE iid=? and user_id=?';
            pool.query(sql, [$iid, $uid], (err, result) => {
                if (err) throw err;
                if (result.affectedRows > 0) {
                    res.send('1');
                    // console.log('删除成功');
                } else {
                    res.send('0');
                }
            });

        })
    })
});


//插入地址
router.post('/v1/insertAdd', (req, res) => {
    let _uname = req.body.uname;
    // console.log(_uname);
    pool.query('select uid from xiaomi_user where uname=?', [_uname], (err, result) => {
        if (err) throw err;
        // res.send(result);
        let _uid = result[0].uid;

        //// console.log(req.body);
        let receiver = req.body.receiver;
        let cellphone = req.body.cellphone;
        let address = req.body.address;
        let province = req.body.province;
        let city = req.body.city;
        let county = req.body.county;

        pool.query('insert into xiaomi_receiver_address(user_id,receiver,cellphone,address,province,city,county) values(?,?,?,?,?,?,?)', [_uid, receiver, cellphone, address, province, city, county], (err, result) => {
            if (err) throw err;
            //console.log(result);

        })

    });

});
//结算页面地址（订单寄到地址）
router.put('/v1/insertAddr', (req, res) => {
    let _uname = req.body.uname;

    // console.log(_uname);
    // var _aid = req.body.aid;
    //// console.log('******+++++++++********');
    //// console.log(_aid);
    //// console.log(_uname, _aid);
    pool.query('select uid from xiaomi_user where uname=?', [_uname], (err, result) => {
        if (err) throw err;
        // //console.log(result);
        //// console.log(result[0].uid);
        var _uid = result[0].uid;
        //// console.log(_uid);
        //// console.log('uid');
        pool.query('select  aid from xiaomi_receiver_address where user_id=?', [_uid], (err, result) => {
            if (err) throw err;
            // console.log(result[0].aid);
            var _aid = req.body.aid;
            //// console.log(_aid);
            var _aidr = parseInt(result[0].aid) + parseInt(_aid) - 1;
            //// console.log(_aidr);
            // update xiaomi_receiver_address set add_active = 0 where user_id = 1;
            pool.query('update xiaomi_receiver_address set add_active=? where user_id=?', [0, _uid], (err, result) => {
                if (err) throw err;
                pool.query('update xiaomi_receiver_address set add_active=? where aid=? and user_id=? ', [1, _aidr, _uid], (err, result) => {
                    if (err) throw err;
                    // //console.log(result);
                    if (result.changedRows > 0) {
                        res.send('1')
                    } else {
                        res.send('0')
                    }
                })
            })
        });



    })

});

// 根据复选按钮选中情况改变数据库的is_checked值
router.put('/v1/allupd/:uname', (req, res) => {
    let _uname = req.params.uname;
    pool.query('select uid from xiaomi_user where uname=?', [_uname], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            // res.send(result);
            let _uid = result[0].uid;
            //// console.log(_uname);
            let $is_checked = req.body.is_checked;
            let sql = 'update xiaomi_shoppingcart_item set is_checked=? where user_id=?'
            pool.query(sql, [$is_checked, _uid], (err, result) => {
                if (err) throw err;

                if (result.changedRows > 0) {
                    res.send('1');
                    //// console.log('修改is_check成功');
                } else {
                    res.send('0');
                }
            })
        }

    })


});

//复选框请求改变is_checked
router.put('/v1/upd', (req, res) => {
    let $uname = req.body.uname;
    // console.log($uname);

    let $is_checked = req.body.is_checked;
    // console.log('----------');

    // console.log($is_checked);
    // console.log('----------');
    let $count = req.body.count;
    pool.query('select uid from xiaomi_user where uname=?', [$uname], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            // res.send(result);
            let _uid = result[0].uid;
            let $is_checked = req.body.is_checked;
            pool.query('select iid  from xiaomi_shoppingcart_item where user_id=?', [_uid], (err, result) => {
                let $iidr = req.body.iid;

                var $iid = parseInt(result[0].iid) + parseInt($iidr) - 1;

                pool.query('update xiaomi_shoppingcart_item set count=?,is_checked=? where iid=? ', [$count, $is_checked, $iid], (err, result) => {
                    if (err) throw err;
                    //// console.log(99);
                    if (result.changedRows > 0) {
                        res.send('1')
                        //// console.log(88);
                    } else {
                        res.send('0')
                    }
                })
            })
        }
    })
});

router.put('/v1/upcount', (req, res) => {
    let $uname = req.body.uname;
    // let $iid = req.body.iid;
    let $count = req.body.count;
    console.log('******');
    console.log($uname, $count);

    console.log('******');

    pool.query('select uid from xiaomi_user where uname=?', [$uname], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            let $uid = result[0].uid;
            pool.query('select iid  from xiaomi_shoppingcart_item where user_id=?', [$uid], (err, result) => {
                if (err) throw err;
                let $iidr = req.body.iid;
                console.log($iidr);

                let $iid = parseInt(result[0].iid) + parseInt($iidr) - 1;
                pool.query('update xiaomi_shoppingcart_item set count=? where iid=? ', [$count, $iid], (err, result) => {
                    if (err) throw err;
                    // console.log(result);

                    // console.log(99);
                    if (result.affectedRows > 0) {
                        pool.query(' select count from xiaomi_shoppingcart_item where user_id=? and iid=?', [$uid, $iid], (err, result) => {
                            if (err) throw err;
                            console.log(result);
                            res.send(result)
                        })
                    } else {
                        res.send('0')
                    }
                })
            })
        }
    })
});
//路由器对象导出
module.exports = router;