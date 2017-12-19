<template>
  <div>
    <div v-for="item in movie">
      电影名字：{{item.title}}
      图片 <img :src="item.images.medium">
    </div>
    电影：
  </div>
</template>
<script>
  import axios from 'axios'
  // var axios =  require('axios')
  export default{
    data(){
      return{
        DailList:'',
        movie:''
      }
    },
    created(){
      // this.getDailList()
      this.getDailMove()

    },
    methods:{
      getDailMove(){
        // axios.get('https://news-at.zhihu.com/api/4/news/latest')
        axios.get('https://easy-mock.com/mock/59664d4d58618039284c7710/example/movie')
        .then(res=>{
          this.movie = res.data.subjects;
          console.log(this.movie);
        })
      },
      getDailList(){
        axios.get('https://news-at.zhihu.com/api/4/news/latest')
        .then(res=>{
          console.log(res);
        })
      }
    }
  }
</script>