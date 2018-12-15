<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="800"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide img-src="https://funnywash.com/wp-content/uploads/2018/09/Every-Task-a-Customer-Service-Rep-Must-Do-opengraph.png">
       <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://subiz.com/blog/wp-content/uploads/2018/11/how-to-improve-customer-service-header-1.jpg">
        <h1>Project II</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/05/customerdata-1200x618.jpg">
      <h1>WorkShop FullStack</h1>
      </b-carousel-slide>
    </b-carousel>

  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

