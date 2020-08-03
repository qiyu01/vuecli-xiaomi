SET NAMES UTF8;
DROP DATABASE IF EXISTS xiaomi;
CREATE DATABASE xiaomi CHARSET=UTF8;
USE xiaomi;

/**所有商品的细分类**/
CREATE TABLE product_category(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32)
);
/**所有商品主要信息**/
CREATE TABLE product(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32),
  img_src VARCHAR(256),
  title VARCHAR(256),
  /**商品最低价格，作为商品list里显示**/
  price  INT,
  shotdesc VARCHAR(256),
  longdesc TINYTEXT,
  cid INT,
  FOREIGN KEY(cid) REFERENCES product_category(id)
);
/**商品规格(内存多少G)**/
CREATE TABLE product_spec(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32),
  price INT,
  delprice INT,
  hasgift BOOL,
  pid INT,
  FOREIGN KEY(pid) REFERENCES product(id)
);
/**商品颜色**/
CREATE TABLE product_color(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32),
  sid INT,
  pid INT,
  FOREIGN KEY(sid) REFERENCES product_spec(id),
  FOREIGN KEY(pid) REFERENCES product(id)
);

/**商品颜色的图片**/
CREATE TABLE product_img(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_src VARCHAR(256),
  /**cid为自定义的颜色id，1代表product页面颜色列表里面的第一个颜色**/
  /**切换颜色时会拿到对应下表i来查询对应的颜色图片**/
  cid INT,
  pid INT,
  FOREIGN KEY(pid) REFERENCES product(id)
);



/**首页导航的分类**/
CREATE TABLE category(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  cname VARCHAR(32)
);

/**大分类下的小分类（小图片）**/
CREATE TABLE category_list(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  lname VARCHAR(32),
  clid INT,
  img_src VARCHAR(256),
  FOREIGN KEY(clid) REFERENCES category(cid)
);
