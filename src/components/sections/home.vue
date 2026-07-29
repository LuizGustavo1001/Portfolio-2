<template>
  <section class="main-section flex-05 flex-column justify-center align-center">
    <div class="content flex-05 flex-column align-center">
      <div class="content-wrapper">
        <div class="title relative">
          <h1>Portfolio.</h1>
          <div class="markup absolute"></div>
        </div>

        <div class="sub-title flex-05 flex-column medium-weight">
          <p>- <strong>Luiz Gustavo</strong> de Almeida Lopes -</p>

          <i18n-t keypath="home.role"
                  tag="p"
                  scope="global"

                  class="right">
            <template #role>
              - <strong>Full-Stack</strong> -
            </template>
          </i18n-t>
        </div>
      </div>

      <img class="pfp" src="/src/assets/images/me.jpg" alt=""/>
    </div>
  </section>
</template>

<style scoped>
  .content{
    width: calc(100dvw - 1em);
    max-width: 1500px;
    padding: 1em;

    justify-content: center;

    animation: fade-in-upper 0.75s cubic-bezier(.45,-0.04,0,.95);

    text-align: center;
  }
  .content h1{
    text-transform: uppercase;
    font-size: clamp(3.8em, 8vw, 8em);
  }
  .content p{
    font-size: clamp(1em, 2dvw, 1.3em);
  }
  .content .pfp{
    width: 50dvw;
    max-width: 400px;

    border-radius: 24px;

    box-shadow: 0 0 20px var(--shadow);
  }

  .title{
    width: fit-content;
    margin: 0 auto;
  }

  .markup{
    width: 50%;
    height: 30%;
    background: #f8e4d0;

    bottom: 10px;
    right: 0;
    z-index: -1;
  }

  @media(min-width: 1024px){
    .content{
      text-align: inherit;
      justify-content: space-between;
      flex-direction: row;
    }
    .content-wrapper{
      width: fit-content;
    }
    .right{
      text-align: right;
    }
  }

  @keyframes fade-in-upper{
    from{
      opacity: 0;
      transform: rotate(7.5deg) translateY(10dvh);
    }
    to{
      opacity: 1;
      transform: rotate(0) translateY(0);
    }
  }
</style>