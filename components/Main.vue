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
            <li><a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="https://github.com/Settleco/crdvisit">Crdvisit</a>, is a social media platform where you can donate, get donate and use as your portfolio.</li>
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
            <p class="text-2xl font-medium">Ne yapıyoruz ve amacımız ne??</p>
            <p class=" text-xs text-stone-700 ml-2 md:visible invisible">açıkcası biz de bilmiyoruz (!)</p>
          </div>
          <div class="ml-5 text-stone-400 md:w-2/3 w-10/12">
            <li >1-5 kişiden oluşan bir ekibimiz var</li>
            <li>Biz yeni projeler yaparak büyümeyi amaçlayan küçük(şimdilik) bir şirketiz</li>
          </div>
        </div>
        <div class="mt-10">
          <div class="">
            <p class="text-2xl font-medium">Yaptığımız işler</p>
          </div>
          <div class="ml-5 text-stone-400 md:w-2/3 w-10/12">
            <li><a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="">MergeApp</a>, gizliliğinize saygı duyan ve güvenle mesajlaşabileceğiniz bir mesajlaşma uygulaması</li>
            <li><a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="">RepeatPay</a>, websiteleriniz için yenilikci bir ödeme sistemi.</li>
            <li><a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="">Constani</a>, bir çok eklenti ile Anime izleyebileceğiniz bir website.</li>
          </div>
        </div>
        <div class="mt-10">
          <div class="">
            <p class="text-2xl font-medium">Özel teşekkürler!</p>
          </div>
          <div class="ml-5 text-stone-400 md:w-2/3 w-10/12">
            <li>Açıkcası, <a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="https://neatnik.net">Neatnik</a> şirketinden çok ilham aldım ve onların da benimsediği ilkeleri kullanmaya çalıştım</li>
            <li>Biz şirketimizde <a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="https://figma.com">Figma</a>, <a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="https://adobe.com">Adobe Yazılımları</a> ve <a class="text-white underline decoration-solid underline-offset-2 hover:underline-offset-4 transition" href="https://code.visualstudio.com/">VSC</a> gibi yazılımları kullandık. Yani o şirketlere çok teşekkür ederiz.</li>
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
