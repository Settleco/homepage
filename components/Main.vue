<template>
  <div class="flex items-center justify-center my-20 text-white">
    <div class="md:w-9/12 w-11/12">
      <div class="flex items-center">
        <div>
          <img class="w-20 h-auto" src="/meta/logo_transparant.png" alt="">  
        </div>
        <div class="ml-2">
          <p class="text-4xl font-semibold">Settleco.</p>
          <div class="">
            <p class="text-stone-400 lg:flex">A tiny development company in 
              <a href="https://wikipedia.org/wiki/%C4%B0zmir" class=" hover:text-stone-500 transition ease-in flex">
                <svg class="w-6 h-6 lg:mx-1 mr-1 flex" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                  </path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
                  </path>
                </svg>
                Turkey, Izmir.</a></p>
          </div>
        </div>
      </div>
      <div v-if="$route.path === `/`">
        <div class="mt-10">
          <div class="flex items-center">
            <p class="text-2xl font-medium">What we are doing??</p>
            <p class=" text-xs text-stone-700 ml-2 md:visible">tbh we dont know too! (jk)</p>
          </div>
          <div class="ml-5 text-stone-400 md:w-2/3 w-10/12">
            <li >We have a team that consists of 1-5 people</li>
            <li>We are a relatively small company(for now) that aims to grow by making new projects.</li>
          </div>
        </div>
        <div class="mt-10">
          <div class="">
            <p class="text-2xl font-medium">Selected Work</p>
          </div>
          <div class="ml-5 text-stone-400 md:w-2/3 w-10/12">
            <li><a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="https://openani.me">OpenAnime</a>, is an open source anime platform that aims on community, security and speed. It provides some of the unique features that you will rarely see on an anime platform.</li>
            <li><a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="">Crdvisit</a>, is a social media platform where you can donate, get donate and use as your portfolio.</li>
            <li><a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="https://mergeapp.dev">MergeApp</a>, is a messaging app that respects your privacy and allows you to chat securely.</li>
          </div>
        </div>
        <div class="mt-10">
          <div class="">
            <p class="text-2xl font-medium">Special Thanks</p>
          </div>
          <div class="ml-5 text-stone-400 md:w-2/3 w-10/12">
            <li>To be honest, i really got inspired from the company <a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="https://neatnik.net">Neatnik</a> and i tried to use the principles that they embraced.</li>
            <li>We use <a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="https://figma.com">Figma</a>, <a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="https://adobe.com">Adobe Softwares</a> and <a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="https://code.visualstudio.com/">VSC</a> to make things spicy. So thanks to these companies.</li>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="mt-10">
          <div class="flex items-center">
            <p class="text-2xl font-medium">Ne yap??yoruz ve amac??m??z ne??</p>
            <p class=" text-xs text-stone-700 ml-2 md:visible invisible">a????kcas?? biz de bilmiyoruz (!)</p>
          </div>
          <div class="ml-5 text-stone-400 md:w-2/3 w-10/12">
            <li >1-5 ki??iden olu??an bir ekibimiz var</li>
            <li>Biz yeni projeler yaparak b??y??meyi ama??layan k??????k(??imdilik) bir ??irketiz</li>
          </div>
        </div>
        <div class="mt-10">
          <div class="">
            <p class="text-2xl font-medium">Yapt??????m??z i??ler</p>
          </div>
          <div class="ml-5 text-stone-400 md:w-2/3 w-10/12">
            <li><a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="">MergeApp</a>, gizlili??inize sayg?? duyan ve g??venle mesajla??abilece??iniz bir mesajla??ma uygulamas??</li>
            <li><a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="">RepeatPay</a>, websiteleriniz i??in yenilikci bir ??deme sistemi.</li>
            <li><a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="">Constani</a>, bir ??ok eklenti ile Anime izleyebilece??iniz bir website.</li>
          </div>
        </div>
        <div class="mt-10">
          <div class="">
            <p class="text-2xl font-medium">??zel te??ekk??rler!</p>
          </div>
          <div class="ml-5 text-stone-400 md:w-2/3 w-10/12">
            <li>A????kcas??, <a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="https://neatnik.net">Neatnik</a> ??irketinden ??ok ilham ald??m ve onlar??n da benimsedi??i ilkeleri kullanmaya ??al????t??m</li>
            <li>Biz ??irketimizde <a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="https://figma.com">Figma</a>, <a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="https://adobe.com">Adobe Yaz??l??mlar??</a> ve <a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="https://code.visualstudio.com/">VSC</a> gibi yaz??l??mlar?? kulland??k. Yani o ??irketlere ??ok te??ekk??r ederiz.</li>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>