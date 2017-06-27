<template>
  <div id="app">
  	<v-header :seller="seller"></v-header>
  	<div class="tab">
  		<div class="tab-item"><router-link to="/goods">商品</router-link></div>
  		<div class="tab-item"><router-link to="/ratings">评论</router-link></div>
  		<div class="tab-item"><router-link to="/seller">商家</router-link></div>
  	</div>
		<router-view></router-view>
  </div>
</template>

<script>
    import header from './components/header/header.vue'
    const ERR_OK=0
		export default{
			data() {
				return{
					seller:{}
				}
			},
			created(){
				this.$http.get('/api/seller').then((response)=>{
					response=response.body;
					if(response.errno===ERR_OK){
						this.seller=response.data;
						//console.log(this.seller);
					}
				})
			},
		  components:{
			  	'v-header':header
			}
	  }
</script>

<!--<style>
	#app .tab{display: flex;width:100%;height:40px;line-height:40px;border-bottom: 1px solid rgba(7,17,27,.1);}
	#app .tab .tab-item{flex: 1;text-align: center;}
	#app .tab .tab-item a{display:block;font-size: 14px;color: rag(77,85,93);}
	#app .tab .tab-item a.active{color:rgb(240,20,20);}
</style>-->
<style lang="scss" scoped type="text/css">
	$fontSize:14px;
	#app{
	  .tab{
	    display: flex;width:100%;height:40px;line-height:40px;border-bottom: 1px solid rgba(7,17,27,.1);
	    .tab-item{
	    	flex: 1;text-align: center;
	    	a{
	    		display:block;font-size: $fontSize;color: rag(77,85,93);
	    	}
	    	a.active{color:rgb(240,20,20);}
	    }
	  }
	}
	  
	    
</style>