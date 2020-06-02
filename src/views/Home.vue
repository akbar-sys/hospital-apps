<template>
  <div class="home">
    <!-- banner -->
    <!-- carousel -->
    <template>
      <section>
        <b-carousel
            v-model="carousel"
            :animated="animated"
            :has-drag="drag"
            :autoplay="autoPlay"
            :pause-hover="pauseHover"
            :pause-info="pauseInfo"
            :pause-info-type="pauseType"
            :interval="interval"
            :repeat="repeat"
            >
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section :class="`hero is-clipped is-fullheight is-relative is-${carousel.color} is-bold`">
                    <img :src="`${carousel.image}`" class="c c-right is-hidden-touch">  
                    <div class="hero-body">
                      <div class="container">
                        <div class="columns">
                          <div class="column is-one-third">
                            <h1 class="title is-1 has-text-weight-bold">
                              {{carousel.title}}
                            </h1>
                            <p class="subtitle is-size-7">
                              {{carousel.subtitle}}
                            </p>
                            <b-button :type="`is-${carousel.color}`" outlined inverted>Get Started</b-button>
                            <!-- <a href="" :class="`button is-${carousel.color}`">Get Started</a> -->
                          </div>
                        </div>
                      </div>
                    </div>
                </section>
            </b-carousel-item>
        </b-carousel>
      </section>
    </template>
    
    <section class="hero">     
      <div class="hero-body">
        <div class="container">
          <figure class="image is-3by1">
            <img src="../assets/undraw_welcome.svg" data-aos="fade-right">
          </figure>
        </div>
      </div>
    </section>
    <!-- some grid -->
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container is-fluid">
          <div class="columns is-multiline">
            <div class="column is-3" v-for="(carousel, i) in items" :key="i">
              <div class="box">
                <figure class="image is-square">
                  <img src="../assets/undraw_welcome.svg" data-aos="fade-right">
                </figure>
                <h1 class="subtitle is-7 has-color-light">@{{ carousel.title }}</h1>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
    <!-- carosel -->
    <template>
      <b-carousel-list v-model="test" :data="items" :items-to-show="2" :class="`hero is-primary`">
          <template slot="item" slot-scope="props">
              <div class="hero is-medium">
                  <div class="hero-body">
                      <div class="container" data-aos="fade-right">
                          <p class="title is-1">{{ props.list.title }}</p>
                          <p class="subtitle is-7">@{{ props.title }} </p>
                      </div>
                  </div>
              </div>
          </template>
      </b-carousel-list>
    </template>

    <!-- Faq -->
    <template>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title has-text-weight-light has-text-centered" data-aos="fade-up">[ F.A.Q ] Frequently Ask Questions</h1>
              <b-collapse
                  class="card"
                  animation="slide"
                  v-for="(collapse, index) of collapses"
                  :key="index"
                  :open="isOpen == index"
                  @open="isOpen = index">
                  <div
                      slot="trigger"
                      slot-scope="props"
                      class="card-header is-clipped"
                      role="button">
                      <p class="card-header-title">
                          {{ collapse.title }}
                      </p>
                      <a class="card-header-icon">
                          <b-icon
                              :icon="props.open ? 'menu-down' : 'menu-up'">
                          </b-icon>
                      </a>
                  </div>
                  <div class="card-content">
                      <div class="content">
                          {{ collapse.text }}
                      </div>
                  </div>
              </b-collapse>
          </div>
        </div>
      </section>
    </template>
    <!-- Maps -->
    <Maps class="map is-block"/>
    
  </div>
</template>

<script>
  import Maps from '@/components/Maps'
  export default {
      name: 'Home',
      components: {
        Maps
      },
      data() {
          return {
            // slide banner
              carousel: 0,
              animated: 'slide',
              drag: true,
              autoPlay: true,
              pauseHover: false,
              pauseInfo: false,
              repeat: true,
              pauseType: 'is-primary',
              interval: 3000,
              carousels: [
                  { title: 'Slide 1', color: 'twitter', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In!', image: require('../assets/undraw_medicine.svg')},
                  { title: 'Slide 2', color: 'primary', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In!', image: require('../assets/undraw_doctor.svg')},
                  { title: 'Slide 3', color: 'info', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In!', image: require('../assets/undraw_welcome.svg')},
                  { title: 'Slide 4', color: 'success', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In!', image: require('../assets/undraw_folder.svg')},
                  { title: 'Slide 5', color: 'warning', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In!', image: require('../assets/undraw_map.svg')},
                  { title: 'Slide 6', color: 'danger', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In!', image: require('../assets/undraw_connected_world.svg')}
              ],
            // slide gk jelas
              test: 0,
              items: [
                  {
                      title: 'Slide 1',
                      image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                      rating: 4.4
                  },
                  {
                      title: 'Slide 2',
                      image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                      rating: 3.5
                  },
                  {
                      title: 'Slide 3',
                      image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                      rating: 5
                  },
                  {
                      title: 'Slide 4',
                      image: 'https://buefy.org/static/img/placeholder-1280x960.png'
                  },
                  {
                      title: 'Slide 5',
                      image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                      rating: 5
                  },
                  {
                      title: 'Slide 6',
                      image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                      rating: 4
                  },
                  {
                      title: 'Slide 7',
                      image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                      rating: 2.7
                  },
                  {
                      title: 'Slide 8',
                      image: 'https://buefy.org/static/img/placeholder-1280x960.png',
                      rating: 1.5
                  }
              ],
              // Faq
              isOpen: 0,
                collapses: [
                {
                    title: 'Apa saja prosedur berobat rawat jalan menggunakan BPJS?',
                    text: 'Untuk berobat menggunakan BPJS pasien harus membawa Katru BPJS Asli, KTP Asli, dan Surat Rujukan dari Faskes 2 (RSUD/ RS Swasta yang bekerja sama dengan BPJS).'
                },
                {
                    title: 'Bagaimana jika pasien pindah kelas rawat ke yang lebih tinggi?',
                    text: 'Selisih biaya menjadi beban pasien dan/atau asuransi swasta yang diikuti pasien..'
                },
                {
                    title: 'Dokumen apa saja yang perlu saya bawa untuk mengambil salinan Rekam Medis saya?',
                    text: 'Kartu identitas yang SAH dan berkekuatan hukum serta Surat pengantar yang SAH dari Pihak Perusahaan/Asuransi/Dokter/Pengacara yang membutuhkan Rekam Medis anda'
                },
                {
                    title: 'Bagaimana cara dan ditujukan kepada siapa, apabila saya (Perusahaan/Asuransi/Lembaga) ingin mengajukan Perjanjian Kerja Sama dengan RS Lehospitale?',
                    text: 'Kirimkan Draft MOU/Kerja Sama ditujukan kepada Direktur RS Lehospitale melalui Email Marketing kami : marketing@lehospitale.co.id.'
                },
                {
                    title: 'Metode pembayaran di RS Lehospitale?',
                    text: 'Kami menerima pembayaran secara tunai, kartu debit ataupun kredit, serta asuransi dan perusahaan rekanan RS Lehospitale.'
                },
                {
                    title: 'Apakah anak-anak diperbolehkan mengunjungi pasien di RS Lehospitale?',
                    text: 'Anak-anak usia di atas 5 tahun diperbolehkan berkunjung dengan didampingi orang dewasa. Untuk beberapa area, anak-anak dilarang masuk, pengecualian dapat dilakukan dalam kasus - kasus tertentu.'
                }
                ]
          }
      },
      methods: {
        //
      }
  }
</script>


<style scoped>
  .map {
    width: 100vw;
    height: 400px;
  }
  .c {
  position: absolute;
  top: 0;
  min-width: 300px;
  min-height: 300px;
  width: 480px;
  height: 320px;
  }
  .c-left {
  left: 0;
  bottom: 0;
  min-height: 105vh;
  width: auto !important;
  max-width: none;
  }
  .c-right {
  height: 70vh;
  right: 10vw;
  top: 50%;
  transform: translateY(-50%)
  }
</style>
