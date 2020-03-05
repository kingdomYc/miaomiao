<template>
  <div class="msgBox">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <div>
          <div @touchstart="handleCancel">{{ cancel }}</div>
          <div @touchstart="handleOk">{{ ok }}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'MsgBox'
}
</script>

<style scoped>
.msgBox{ width:200px; height:120px; border:1px #ccc solid; border-radius: 4px; background:white; box-shadow: 3px 3px 3px 3px #ccc; position: absolute; left: 50%; top: 50%; margin:-60px 0 0 -100px;}
.msgBox h2{ text-align: center; line-height: 40px; font-size: 18px;}
.msgBox p{ text-align: center; line-height:40px;}
.msgBox > div{ display: flex; position: absolute; bottom: 0; width:100%; border-top:1px #ccc solid;}
.msgBox > div div{ flex:1; text-align: center; line-height: 30px; border-right:1px #ccc solid;}
.msgBox > div div:last-child{ border:none;}
/* .msgBox{
    width: 200px;
    width: 140px;
    border: 1px solid #ccc;
    border-radius:4px;
    background: white;
    box-shadow: 3px 3px 3px 3px #ccc;
    position: absolute;
    left:50%;
    top:50%;
    margin: -70px 0 0 -100px;
}
.msgBox h2{
    text-align: center;
    line-height: 40px;
    font-size: 18px;
}
.msgBox p{
    text-align: center;
    line-height: 40px;
}
.msgBox > div{
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ccc;
}
.msgBox > div div:last-child{
    border: none;
} */
</style>