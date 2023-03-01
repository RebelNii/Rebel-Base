<template>
  <div class="md:px-4 mb-2">
    <div class="bg-gradient-to-b from-blue-700 via-blue-300 to-sky-200  rounded-md py-4 px-5 ">
      <h1 class="text-base md:text-lg lg:text-2xl font-bold mb-5">What we offer.</h1>
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 py-2">
        <div class="bg-gradient-to-t from-indigo-900 to-blue-900 rounded-lg  border-none">
          <h1 class="s1 md:text-2xl font-semibold border-b-2">Website</h1>
          <p class="s2 px-2 py-1 break-words mt-1">
            Having a website is no longer a luxury, it's a necessity for any
            business that wants to stay ahead in today's digital world. A
            website provides your business with a professional online presence
            that can reach a global audience. Investing in a website is a smart
            business decision that can help increase visibility, credibility,
            and reach, while also improving the overall customer experience. So,
            if you want to take your business to the next level, consider having
            a website today.
          </p>
        </div>
        <div class="bg-gradient-to-tl from-lime-500 rounded-lg py-2 border-none">
          <h1 class="s1 lg:text-2xl font-semibold border-b-2">Web Apps</h1>
          <p class="s2 mt-1 px-2 py-1 break-words">
            Investing in a web app is a smart business move for any company
            looking to stay ahead in today's digital world. Web apps provide
            businesses with a flexible, scalable, and cost-effective platform
            for delivering innovative solutions and enhancing their online
            presence.
          </p>
        </div>
        <div class="bg-gradient-to-bl from-orange-700 to-orange-700 rounded-lg py-2 border-none">
          <h1 class="s1 md:text-lg lg:text-2xl font-semibold border-b-2">E-commerce</h1>
          <p class="s2 px-2 py-1 break-words">
            In today's fast-paced and technology-driven world, having an
            e-commerce website is a must for businesses that want to grow and
            succeed. An e-commerce web application can help you reach a wider
            audience, increase your sales and revenue, and streamline your
            business operations. An e-commerce web app is an investment that can
            deliver significant returns for your business. By providing your
            customers with a convenient and engaging shopping experience, you
            can increase sales, improve customer satisfaction, and grow your
            business.
          </p>
        </div>
        <div class="bg-gradient-to-l from-green-500 to-blue-500 rounded-lg py-2 border-none">
          <h1 class="s1 md:text-lg lg:text-2xl font-semibold border-b-2">Web Maintenance</h1>
          <p class="s2 px-2 py-1 mt-1 break-words">
            Regular web maintenance is essential for any business looking to
            maintain a strong online presence and stay ahead of the competition.
            Without regular maintenance, your website can become outdated, slow,
            and vulnerable to security threats, which can negatively impact your
            brand and reputation. By investing in regular web maintenance, you
            can avoid costly repairs and downtime, and ensure that your website
            remains a valuable asset to your business. In conclusion, regular
            web maintenance is an investment that can deliver significant
            returns for your business. By providing your website with the
            attention it deserves, you can keep your website running smoothly,
            enhance your online presence, and grow your business.
          </p>
        </div>
        <div class="bg-gradient-to-r from-yellow-500 to-green-500 rounded-lg py-2 border-none ">
          <h1 class="s1 md:text-lg lg:text-2xl font-semibold border-b-2">API Development</h1>
          <p class="s2 px-2 py-1 mt-1">
            APIs, or application programming interfaces, are becoming
            increasingly important for businesses in today's digital world. They
            allow different software systems to communicate and exchange data,
            enabling businesses to create more efficient and streamlined
            processes. Investing in API development can have a major impact on
            the success of your business. By enabling your systems to
            communicate more effectively and streamlining your processes, APIs
            can help you increase efficiency, improve the user experience, and
            stay ahead of the competition.
          </p>
        </div>
        <div class="bg-gradient-to-b from-rose-500 to-pink-400 rounded-lg py-2 border-none">
          <h1 class="s1 z-[2px] md:text-lg lg:text-2xl font-semibold border-b-2">
            Front-end Development
          </h1>
          <p class="s2 px-2 py-1 mt-1 break-words z-[2px]">
            A well-designed front-end is critical for the success of any website
            or web application. The front-end is the first thing that users see
            and interact with, and it can greatly impact their overall
            experience. Investing in front-end development can have a
            significant impact on the success of your website or web
            application. A well-designed front-end can improve user experience,
            increase engagement, and create a better overall image for your
            brand. So if you want to ensure that your website or web application
            stands out from the competition, consider investing in front-end
            development today.
          </p>
        </div>
      </div>
      <div class="mt-3 flex justify-center">
        <router-link
          class="p-2 md:hover:bg-green-700 transition-all bg-green-900 flex w-fit  items-center rounded-md gap-1 border-none uppercase"
          :to="{ name: 'Services' }"
        >
          <h2>Read More</h2>
          <span class="animate-here">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mini",
  components: {},
  methods: {},
};
</script>

<style>
.s1 {
  font-family: "Poppins", sans-serif;
}

.s2 {
  font-family: "Poppins", sans-serif;
}

.bgg{
  background: rgb(174,132,201);
background: linear-gradient(180deg, rgba(174,132,201,1) 29%, rgba(29,218,253,1) 52%, rgba(149,217,226,1) 77%);
}
</style>
