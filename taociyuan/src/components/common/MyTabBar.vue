<template>
    <div class="my-tabBar-box">
        <ul>
            <li
                v-for="v in tab" :id="v.id"
                :class="type == v.id?'on':''"
                @mouseover="overShow(v.id)"
                @mouseout="outHide"
                @click="changeNavId(v.id)"
            >{{v.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MyTabBar",
        props:{
            tab:Array
        },
        data(){
            return {
                type:1,
                historyNavId:1
            }
        },
        methods:{
            overShow(num){
                this.historyNavId=this.type;
                this.type = num;
            },
            outHide(){
                this.type = this.historyNavId;
            },
            changeNavId(id){
                this.historyNavId=id;
                this.type = id;
                this.$emit("setTypeId",id)

            }
        }
    }
</script>

<style scoped>
    .my-tabBar-box{
        margin-top: 40px;
    }
    .my-tabBar-box ul{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        line-height: 30px;
    }
    .my-tabBar-box ul li{
        margin: 0 5px;
        width: 160px;
        height: 100%;
        text-align: center;
        background: #e7d7bd;
        cursor: pointer;
        color: #984b15;
    }
    .my-tabBar-box ul li span{
        display: block;
    }
    .my-tabBar-box ul .on{
        background: #905223;
        color: #fff;
    }

</style>
