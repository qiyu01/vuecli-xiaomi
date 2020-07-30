<template>
  <div class="home-brick-box xm-plain-box">
    <div class="box-hd">
      <slot name="title">
        <h2 class="title">手机</h2>
      </slot>
      <div class="more">
        <slot name="more"></slot>
      </div>
    </div>
    <div class="box-bd clearfix">
      <div class="span4">
        <ul class="brick-promo-list">
          <slot name="promo">
            <li class="brick-item">
              <a href>
                <img src="images/promo1.webp" alt />
              </a>
            </li>
          </slot>
        </ul>
      </div>
      <div class="span16">
        <slot name="bricklist1">
          <ul class="brick-list clearfix">
            <li v-for="i in 7" :key="i" class="brick-item">
              <a href>
                <div class="figure">
                  <img src="images/brick-list1.webp" alt />
                </div>
                <h3 class="title">小米10 青春版 5G</h3>
                <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                <p class="price">
                  <span class="num">1899</span>元
                  <span>起</span>
                  <del>
                    <span class="num">2099</span>
                    元
                  </del>
                </p>
              </a>
            </li>
            <slot name="brickitem">
              <li class="brick-item">
                <a href>
                  <div class="figure">
                    <img src="images/brick-list1.webp" alt />
                  </div>
                  <h3 class="title">小米10 青春版 5G</h3>
                  <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                  <p class="price">
                    <span class="num">1899</span>元
                    <span>起</span>
                    <del>
                      <span class="num">2099</span>
                      元
                    </del>
                  </p>
                </a>
              </li>
            </slot>
          </ul>
        </slot>
        <slot name="bricklist2">
          <ul class="brick-list clearfix">
            <li v-for="i in 7" :key="i" class="brick-item">
              <a href>
                <div class="figure">
                  <img src="images/brick-list6.webp" alt />
                </div>
                <h3 class="title">小米10 青春版 5G</h3>
                <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                <p class="price">
                  <span class="num">1899</span>元
                  <span>起</span>
                  <del>
                    <span class="num">2099</span>
                    元
                  </del>
                </p>
              </a>
            </li>
            <li class="brick-item-s brick-item">
              <a href>
                <div class="figure">
                  <img src="images/brick-item-s2.webp" alt />
                </div>
                <h3 class="title">Air 13.3" 2019款</h3>
                <p class="price">
                  <span class="num">5699</span>元
                  <span>起</span>
                </p>
              </a>
            </li>
            <li class="brick-item-s brick-item">
              <a href>
                <div class="figure figure-more">
                  <i class="iconfont icon-yuanquanjiantouyou
                   "></i>
                </div>
                <div class="more">
                  浏览更多
                  <small>电视影音</small>
                </div>
              </a>
            </li>
          </ul>
        </slot>
        <slot name="bricklist3">
          <ul class="brick-list clearfix">
            <li v-for="i in 7" :key="i" class="brick-item">
              <a href>
                <div class="figure">
                  <img src="images/brick-list3.webp" alt />
                </div>
                <h3 class="title">小米10 青春版 5G</h3>
                <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                <p class="price">
                  <span class="num">1899</span>元
                  <span>起</span>
                  <del>
                    <span class="num">2099</span>
                    元
                  </del>
                </p>
              </a>
            </li>
            <li class="brick-item-s brick-item">
              <a href>
                <div class="figure">
                  <img src="images/brick-item-s2.webp" alt />
                </div>
                <h3 class="title">Air 13.3" 2019款</h3>
                <p class="price">
                  <span class="num">5699</span>元
                  <span>起</span>
                </p>
              </a>
            </li>
            <li class="brick-item-s brick-item">
              <a href>
                <div class="figure figure-more">
                  <i class="iconfont icon-yuanquanjiantouyou
                   "></i>
                </div>
                <div class="more">
                  浏览更多
                  <small>电视影音</small>
                </div>
              </a>
            </li>
          </ul>
        </slot>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Homebrick",
  props: {
    msg: String
  },
  mounted() {
    var _this = this;
    _this.$(".home-brick-box .tab-list li").mouseenter(function() {
      _this
        .$(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
      var target = _this.$(this).index();
      _this
        .$(this)
        .parents(".xm-plain-box")
        .find("ul.brick-list")
        .eq(target)
        .css("display", "block")
        .siblings()
        .css("display", "none");
    });
  }
};
</script>


<style>
/* page-main下各个模块的标题统一样式 */
.xm-plain-box .box-hd {
  position: relative;
  height: 58px;
  -webkit-font-smoothing: antialiased;
}
.xm-plain-box .box-hd .title {
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
}
.xm-plain-box .box-hd .more {
  position: absolute;
  top: 0;
  right: 0;
}
.xm-plain-box .box-hd .more a {
  font-size: 16px;
  line-height: 58px;
  color: #424242;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}
.xm-plain-box .box-hd .more a:hover {
  color: #ff6700;
}
.xm-plain-box .box-hd .more a i {
  width: 12px;
  height: 12px;
  padding: 4px;
  margin-left: 8px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 12px;
  background: #b0b0b0;
  color: #fff;
  vertical-align: 1px;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  text-align: center;
}
.xm-plain-box .box-hd .more a:hover i {
  background-color: #ff6700;
}

/* home-brick-box */
.home-brick-box {
  margin-bottom: 8px;
}
.home-brick-box .span4 {
  margin-left: 0;
}
.home-brick-box .span4 .brick-item {
  float: left;
  margin-bottom: 14px;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.home-brick-box .span4 .brick-item img {
  width: 234px;
  height: 614px;
}
.home-brick-box .span4 .brick-item-m {
  height: 300px;
}
.home-brick-box .span4 .brick-item-m img {
  height: 300px;
}
.home-brick-box .span16 {
  /* margin-left: 14px; */
  float: left;
  width: 992px;
}
.home-brick-box .brick-list {
  height: 614px;
}
.home-brick-box .brick-list + .brick-list {
  display: none;
}
.home-brick-box .brick-list .brick-item {
  height: 260px;
  padding: 20px 0;
  text-align: center;
  position: relative;
  z-index: 1;
  float: left;
  width: 234px;
  margin-left: 14px;
  margin-bottom: 14px;
  background: #fff;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.home-brick-box .brick-item:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
}
.home-brick-box .brick-item .figure {
  margin: 0 auto 18px;
}
.home-brick-box .brick-item .figure img {
  width: 160px;
  height: 160px;
}
.home-brick-box .brick-item .title {
  margin: 0 10px 2px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  font-size: 14px;
  font-weight: 400;
  color: #333;
}
.home-brick-box .brick-item .desc {
  margin: 0 10px 10px;
  height: 18px;
  font-size: 12px;
  color: #b0b0b0;

  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.home-brick-box .brick-item .price {
  margin: 0 10px 14px;
  color: #ff6700;
}
.home-brick-box .brick-item .price del {
  margin-left: 0.5em;
  color: #b0b0b0;
}

/* 家电 */
/* 家电模块大标题右侧tab，后面的模块的标题都是此样式 */

.xm-plain-box .box-hd .more .tab-list {
  margin: 0;
  padding: 16px 0 0;
  list-style-type: none;
  font-size: 16px;
}
.xm-plain-box .box-hd .more .tab-list li {
  display: inline-block;
  padding: 0;
  margin: 0 0 0 30px;
  color: #424242;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  -webkit-transition: border 0.3s;
  transition: border 0.3s;
  cursor: pointer;
}
.xm-plain-box .box-hd .more .tab-list li.active,
.xm-plain-box .box-hd .more .tab-list li:hover {
  color: #ff6700;
  border-bottom: 2px solid #ff6700;
}

.home-brick-box .brick-item.brick-item-s {
  height: 93px;
  padding: 0;
  padding-top: 50px;
}
.home-brick-box .brick-item.brick-item-s .figure {
  position: absolute;
  right: 20px;
  top: 32px;
  width: 80px;
  height: 80px;
}
.home-brick-box .brick-item.brick-item-s .figure img {
  width: 80px;
  height: 80px;
}
.home-brick-box .brick-item.brick-item-s .title {
  margin: -10px 110px 5px 30px;
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
}
.home-brick-box .brick-item.brick-item-s .price {
  margin: 0 110px 0 30px;
  text-align: left;
}
.home-brick-box .brick-item.brick-item-s .figure.figure-more {
  position: absolute;
  right: 35px;
  top: 48px;
  width: 48px;
  height: 48px;
  line-height: 48px;
  color: #ff6700;
  font-size: 45px;
  /* font-weight: 100; */
}
.home-brick-box .brick-item.brick-item-s .figure-more i {
  font-size: 48px;
}
.home-brick-box .brick-item.brick-item-s div.more {
  display: block;
  margin: 0 110px 0 30px;
  font-size: 18px;
  color: #333;
  text-align: left;
}
.home-brick-box .brick-item.brick-item-s div.more small {
  display: block;
  font-size: 12px;
  color: #757575;
}
</style>