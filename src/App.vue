<template>
  <router-view v-slot="{ Component, route }">
    <div :key="route.name">  
      <component :is="Component"></component>
    </div>
  </router-view>
</template>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Montserrat:wght@300;400;500;600;700;900&display=swap');

:root{
  --SmoothBlack: #1E1E1E;
  --LightSmoothBlack: #272727;
  --Black: #090909;
  --CoolMint: #2BD8B7;
  --White: #ffffff;
  --Gray: #A5A5A5;
  --DarkGray: #616161;
  --DarkCoolMint: #098177;
  --borderRadius: 1em;
  --Red: #D82B4A;
}

.page{
  color-scheme: dark light;
}

.text{
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  margin: 0;
  color: var(--Gray);
  line-height: 150%;
}

.text_small{
  font-size: 1rem;
}

.headline{
  font-family: 'Montserrat', sans-serif;
  font-size: 2.25rem;
  margin: 0;
  color: var(--White);
}

.headline_big{
  font-size: 4rem;
}

.headline_medium{
  font-size: 1.5rem;
}

.headline_small{
  font-size: 1.25rem;
}

.headline_extra-small{
  font-size: 1rem;
}

.headline_black{
  color: var(--SmoothBlack);
}

.body-content{
  background-color: var(--SmoothBlack);
}

.link{
  text-decoration: none;
  color: var(--Gray);
}

.link:hover{
  color: var(--White);
}

.link__text{
  margin: 0;
  color: inherit;
}

.container_main{
  width: 75%;
  max-width: 1440px;
  margin: 0 auto;
  /* align-items: center; */
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 12.5rem;
}

.padding-top{
  box-sizing: border-box;
  padding-top: 6.25rem;
}

.padding-top_big{
  padding-top: 9.375rem;
}

.padding-top_small{
  padding-top: 3.125rem;
}

.page-block{
  display: flex;
  flex-direction: column;
  gap: 4.375rem;
}


.page-container{
  display: flex;
  flex-direction: column;
  gap: 9.375rem;
}

/* @media screen and (max-width: 1439px) {
  .page{
    font-size: 0.8em;
  }
} */

@media screen and (max-width: 1023px) {
  .page{
    font-size: 0.8em;
  }

  .page-container{
    padding-top: 4rem;
  }

  .headline_big{
    font-size: 3rem;
  }

  .container_main:nth-first-child{
    padding-top: 0;
  }
}

@media screen and (max-width: 425px) {

  .headline_big{
    font-size: 2.5rem;
  }
}

</style>
