<template>
    <div class="hello">
        <div class="back"> <el-button type="primary" @click="handleClickBack">返回</el-button> </div>

        <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane name="first">
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon color="#409efc" class="no-inherit">
                            <Reading />
                        </el-icon>
                        <span>{{ curIntangibleCulturalHeritage }}简介</span>
                    </span>
                </template>

                {{ introduceData }}</el-tab-pane>
            <el-tab-pane name="second">
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon color="#409efc" class="no-inherit">
                            <User />
                        </el-icon>
                        <span>传承人</span>
                    </span>
                </template>

                {{ inheritorData }}</el-tab-pane>
            <el-tab-pane name="third">
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon color="#409efc" class="no-inherit">
                            <Camera />
                        </el-icon>
                        <span>图片</span>
                    </span>
                </template>
                <div class="card_wrap">

                    <!-- vue的遍历，目的是创造data.length个数的card -->
                    <div class="c_item" v-for="(imgurl, index) in imgs" :key="index">
                        <div class="c_item"
                            :style="{ backgroundImage: 'url(' + imgurl + ')', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }">
                            <span class="imgDes"> {{ index + 1 }} </span>
                        </div>

                    </div>
                </div>

            </el-tab-pane>
            <el-tab-pane name="fourth">
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon color="#409efc" class="no-inherit">
                            <Handbag />
                        </el-icon>
                        <span>文创周边</span>
                    </span>
                </template>
                <div class="store">
                    <ul>
                        <li class="peerStore">
                            <div> <img src="@/assets/commonImg/storeImg.svg" style="width: 160px;height: 160px;" />
                            </div>
                            <div>柴桑区滨奇百货贸易商行 </div>
                            <div><a
                                    href="https://detail.1688.com/offer/775555935842.html?spm=a261b.2187593.0.0.18603032vsYLh0">去看看</a>
                            </div>
                        </li>
                        <li>
                            <div>柴桑区滨奇百货贸易商行 </div>
                            <div><a
                                    href="https://detail.1688.com/offer/775555935842.html?spm=a261b.2187593.0.0.18603032vsYLh0">去看看</a>
                            </div>
                        </li>

                        <li>
                            <div>柴桑区滨奇百货贸易商行 </div>
                            <div><a
                                    href="https://detail.1688.com/offer/775555935842.html?spm=a261b.2187593.0.0.18603032vsYLh0">去看看</a>
                            </div>
                        </li>

                        <li>
                            <div>柴桑区滨奇百货贸易商行 </div>
                            <div><a
                                    href="https://detail.1688.com/offer/775555935842.html?spm=a261b.2187593.0.0.18603032vsYLh0">去看看</a>
                            </div>
                        </li>
                        <li>
                            <div>柴桑区滨奇百货贸易商行 </div>
                            <div><a
                                    href="https://detail.1688.com/offer/775555935842.html?spm=a261b.2187593.0.0.18603032vsYLh0">去看看</a>
                            </div>
                        </li>

                        <li>
                            <div>柴桑区滨奇百货贸易商行 </div>
                            <div><a
                                    href="https://detail.1688.com/offer/775555935842.html?spm=a261b.2187593.0.0.18603032vsYLh0">去看看</a>
                            </div>
                        </li>

                    </ul>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import introduceInfo from '@/assets/detailData/introduce.js'
import inheritor from '@/assets/detailData/inheritor.js'
import imgs from '@/assets/detailData/imgs.js'
export default {
    name: "DetailView",

    mounted() {
        const route = useRoute(); // 引入 Route
        this.curIntangibleCulturalHeritage = route.query.name
        this.introduceData = introduceInfo[route.query.name]
        this.inheritorData = inheritor[route.query.name]
        this.imgs = imgs[route.query.name]
    },
    data() {
        return {
            activeName: 'first',
            curIntangibleCulturalHeritage: '',
            introduceData: '',
            inheritorData: '',
            imgs: []
        };
    },

    methods: {
        handleClick() {
            console.log(' handleClick')
        },
        handleClickBack() {
            //返回上一页
            window.history.back()
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back {
    display: inline-block;
    float: right;
    position: relative;
    z-index: 10;
}

.no-inherit {
    margin: 4px
}

.card_wrap {
    width: 98%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.c_item {

    flex: 1;
    height: 400px;
    margin: 0 5px 5px 0;
    background-color: #fff;
    /* width: calc((100% - 10px) / 2);
    min-width: calc((100% - 10px) / 2);
    max-width: calc((100% - 10px) / 2); */
    width: calc((100vw - 80px) / 2);

    &:nth-child(2n) {

        margin-right: 0;
    }

}

.imgDes {
    border-radius: 8px 0 8px 8px;
    color: #fff;
    padding: 0 4px;
    background-color: #8aa3a3;
}

.store {
    zoom: 1;
    clear: both;
    margin-bottom: 8px;
    margin-left: -20px;
}

ul {
    list-style: none;
}

li {

    height: 150px;
    background-color: #e4ebea;
    margin: 10px 0;
}

.peerStore {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>