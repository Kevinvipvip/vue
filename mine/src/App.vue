<template>
  <div id="app">
    <div class="header-background">
      <div class="header">
        <div class="header-cont left">
          <div class="header-img">
            <img src="./assets/logo.png"/>
          </div>
        </div>
        <div class="header-cont center">
          <div class="mine-brief">
            <p>Hello,</p>
            <p>我是甘荣健,</p>
            <p>一个热衷于编程的程序猿。</p>
            <span>爱好玩游戏、打乒乓球和编程</span>
            <div class="link-box">
              <router-link to="/">mine</router-link>
              <router-link to="/about">resume</router-link>
            </div>
          </div>
        </div>
        <div class="header-cont right">
          <div class="header-img">
            <img src="./assets/logo.png"/>
          </div>
        </div>
      </div>
    </div>
    <!--<div id="nav">-->
    <!--<router-link to="/">mine</router-link>-->
    <!--|-->
    <!--<router-link to="/about">resume</router-link>-->
    <!--</div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul, li {
    list-style: none;
  }

  #app {
    min-height: 100vh;
  }

  .header-background {
    background: url("./assets/bg-body.jpg") no-repeat bottom center;
  }

  .header {
    width: 80vw;
    height: 44vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }

  .header .header-cont {
    width: 32%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .header .left {
    justify-content: flex-end;
  }

  .header .center {
    background-color: rgba(0, 0, 0, 0.5);
    color: #aaa;
    font-size: 24px;
  }

  .mine-brief p {
    margin-bottom: 10px;
    color: #ffffff;
    font-size: 30px;
  }

  .header .right {
    justify-content: flex-start;
  }

  .header-img, .header-img img {
    display: block;
    width: 100%;
  }

  .link-box{
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: #ffffff;
      display: block;
      margin: 20px 50px;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
