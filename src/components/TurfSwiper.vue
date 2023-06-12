<template>
  <div class="slider-container">
    <div
      class="slider"
      ref="slider"
      @mousedown="startDrag"
      @touchstart="startDrag"
    >
      <div
        class="slides"
        :style="{
          transform: `translateX(-${activeSlideIndex * slideWidth}px)`,
        }"
      >
        <div
          class="slide"
          v-for="(slide, index) in slides"
          :key="index"
          @click="setActiveSlide(index)"
        >
          <img :src="slide.image" alt="Slide" class="slide-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSlideIndex: 0,
      slideWidth: 0,
      startX: 0,
      isDragging: false,
      slides: [
        { image: "slide1.jpg" },
        { image: "slide2.jpg" },
        { image: "slide3.jpg" },
      ],
    };
  },
  mounted() {
    this.calculateSlideWidth();
    window.addEventListener("resize", this.calculateSlideWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.calculateSlideWidth);
  },
  methods: {
    setActiveSlide(index) {
      this.activeSlideIndex = index;
    },
    calculateSlideWidth() {
      const containerWidth = this.$refs.slider.offsetWidth;
      this.slideWidth = containerWidth / 3;
    },
    startDrag(event) {
      this.startX = event.touches ? event.touches[0].clientX : event.clientX;
      this.isDragging = true;

      document.addEventListener("mousemove", this.drag);
      document.addEventListener("touchmove", this.drag);
      document.addEventListener("mouseup", this.stopDrag);
      document.addEventListener("touchend", this.stopDrag);
    },
    drag(event) {
      if (!this.isDragging) return;

      const currentX = event.touches ? event.touches[0].clientX : event.clientX;
      const deltaX = currentX - this.startX;

      this.$refs.slider.scrollLeft -= deltaX;
      this.startX = currentX;
    },
    stopDrag() {
      this.isDragging = false;

      document.removeEventListener("mousemove", this.drag);
      document.removeEventListener("touchmove", this.drag);
      document.removeEventListener("mouseup", this.stopDrag);
      document.removeEventListener("touchend", this.stopDrag);

      const scrollLeft = this.$refs.slider.scrollLeft;
      const index = Math.round(scrollLeft / this.slideWidth);
      this.activeSlideIndex = index;
    },
  },
};
</script>

<style scoped>
.slider-container {
  width: 100%;
  overflow: hidden;
}

.slider {
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}

.slides {
  display: flex;
}

.slide {
  flex: 0 0 calc(100% / 3); /* Adjust the width based on the number of slides you want per view */
  scroll-snap-align: start;
}

.slide-image {
  width: 100%;
  height: auto;
}
</style>
