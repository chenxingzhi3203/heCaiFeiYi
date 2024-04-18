<template>
  <div class="hello">
    <h1><img alt="logo" style="height: 24px;width: 24px;" src="@/assets/commonImg/logo.png">{{ msg }}</h1>
    <div>
      <el-switch v-model="modelValue" class="mb-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        active-text="博物馆模式" inactive-text="教学模式" />
    </div>
    <div class="card-wrap">
      <!-- vue的遍历，目的是创造data.length个数的card -->
      <div class="card-context" v-for="item in cards" :key="item.name">
        <div class="card-item">
          <div class="card-toolbar">
            <span class="card-name">{{ item.name }}</span>
            <button class="custom-btn btn card-lesson" v-if="!modelValue">{{ item.lesson }}</button>
            <span class="more">
              <router-link :to="`/goods?name=${item.name}`">
                <img src="@/assets/commonImg/more-two.svg" style="width: 20px;height: 20px;" />
              </router-link>
            </span>
          </div>
          <div class="card-info"
            :style="{ backgroundImage: 'url(' + item.img + ')', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeiyiWorld",
  data() {
    return {
      // 数据
      msg: '欢迎来到安徽非遗',
      modelValue: true,//默认博物馆模式
      cards: [
        { name: "凤阳花鼓", img: require("@/assets/fenyanghuagu.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "徽墨制造工艺", img: require("@/assets/huimozhizuo/huimozhizuojy.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "界首彩陶烧制技艺", img: require("@/assets/jieshoucaitaozhizhuogongyi/jieshoucaitao.jpg"), btnImg: "go" },
        { name: "目连戏（徽州目连戏）", img: require("@/assets/hzmlx/hzmlx.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "徽剧（黄山市）", img: require("@/assets/hjhss/hjhss.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "徽剧（省徽京剧院）", img: require("@/assets/hjshjjy/hjshjjy.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "庐剧（合肥市）", img: require("@/assets/ljhfs/ljhfs.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "庐剧（六安市）", img: require("@/assets/ljlas/ljlas.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "泗州戏（宿州市）", img: require("@/assets/szxszs/szxszs.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "巢湖民歌", img: require("@/assets/chmg/chmg.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "当涂民歌", img: require("@/assets/dtmg/dtmg.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "高腔（岳西高腔）", img: require("@/assets/gqyxgq/gqyxgq.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "泗州戏（蚌埠市）", img: require("@/assets/szxbbs/szxbbs.jpg"), btnImg: "go", lesson: '第一课时' },

        { name: "徽州三雕", img: require("@/assets/huizhousandiao/huizhousandiao.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "万安罗盘制作技艺", img: require("@/assets/wananluopanzhizuojiyi/wananluopanzhizuojiyi.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "歙砚制作技艺", img: require("@/assets/sheyanzhizuojiyi/sheyanzhizuojiyi.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "徽墨制作技艺", img: require("@/assets/huimozhizuojiyi/huimozhizuojiyi.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "徽墨制作技艺（黄山市歙县）", img: require("@/assets/shexianhmzzjy/shexianhmzzjy.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "芜湖铁画锻制技艺", img: require("@/assets/wuhutiehua/wuhutiehua.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "花鼓灯（蚌埠市）", img: require("@/assets/bbhgd/bbhgd.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "宣纸制作技艺", img: require("@/assets/xzzzjy/xzzzjy.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "花鼓灯（阜阳市颍上县）", img: require("@/assets/fyhgd/fyhgd.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "花鼓灯（淮南市凤台县）", img: require("@/assets/hnhgd/hnhgd.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "黄梅戏（安庆市））", img: require("@/assets/aqhmx/aqhmx.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "傩戏（池州傩戏）", img: require("@/assets/chizhounuoxi/chizhounuoxi.jpg"), btnImg: "go", lesson: '第一课时' },
        { name: "青阳腔", img: require("@/assets/qyj/qyj.jpg"), btnImg: "go", lesson: '第一课时' },

      ],

    };
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mb-2 {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: fit-content;
}

.card-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}

.card-context {
  flex: 1;
  width: 300px;
  min-width: 300px;
  height: 214px;
  margin: 10px 0;
}

.more {
  float: right;
  margin-right: 4px;
}

.card-item {
  display: flex;
  flex-direction: column;
}

.card-item:hover {
  transform: scale(1.02);
  transition: all 600ms linear;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.card-toolbar {
  background-color: #dbf4f4;
  margin: 0 10px;
}

.card-name {
  float: left;
  margin-left: 6px;
}

.card-lesson {
  background-color: #fff;
  padding: 2px;
  border: 1px solid #9c9c9c;
}

.card-context.no-border {
  border: none;
}

.card-info {
  margin: auto;
  width: 94%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(190, 195, 199, 0.5);
  /* border-radius: 2px; */
}


.custom-btn {
  width: 90px;
  height: 20px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.5s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
  outline: none;
}

.btn {
  background: linear-gradient(0deg, rgba(255, 151, 0, 1) 0%, rgba(251, 75, 2, 1) 100%);
  line-height: 20px;
  padding: 0;
  border: none;
}

.btn span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn:before,
.btn:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  /* background: rgba(251, 75, 2, 1); */
  background: #409eff;

  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, .9),
    -4px -4px 5px 0px rgba(255, 255, 255, .9),
    7px 7px 20px 0px rgba(0, 0, 0, .2),
    4px 4px 5px 0px rgba(0, 0, 0, .3);
  transition: all 0.3s ease;
}

.btn:before {
  height: 0%;
  width: 2px;
}

.btn:after {
  width: 0%;
  height: 2px;
}

.btn:hover {
  /* color: rgba(251, 75, 2, 1); */

  color: #409eff;
  background: transparent;
}

.btn:hover:before {
  height: 100%;
}

.btn:hover:after {
  width: 100%;
}

.btn span:before,
.btn span:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  /* background: rgba(251, 75, 2, 1); */
  background: #409eff;

  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, .9),
    -4px -4px 5px 0px rgba(255, 255, 255, .9),
    7px 7px 20px 0px rgba(0, 0, 0, .2),
    4px 4px 5px 0px rgba(0, 0, 0, .3);
  transition: all 0.3s ease;
}

.btn span:before {
  width: 2px;
  height: 0%;
}

.btn span:after {
  height: 2px;
  width: 0%;
}

.btn span:hover:before {
  height: 100%;
}

.btn span:hover:after {
  width: 100%;
}
</style>