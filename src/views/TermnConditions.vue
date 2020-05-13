<template>
  <Single :title="title" :subtitle="subtitle">
      <h1 class="title">Sayarat Penggunaan</h1>
      <p>Situs ini dan semua situs bawahannya dipublikasikan dan dipertahankan oleh Le Hospitale Kelompok 6, anda membuka situs ini menunjukkan bahwa anda setuju untuk menerima syarat yang tertulis dalam ketentuan hukum. Jika anda tidak menerima syarat tersebut, mohon berhenti buka situs ini.</p>
      <p>Pihak kami bisa saja memperbarui atau memperbaiki syarat penggunaan sewaktu-waktu. Maka dari itu, setiap kali anda membuka situs ini, seharusnya juga membaca halaman syarat penggunaan. Apabila setelah perusahaan kami mengganti atau memperbaiki syarat ketentuan anda lanjut menggunakan situs ini, juga menunjukkan bahwa anda setuju untuk menerima syarat penggunaan yang baru.</p>
      <h1 class="title">Hak Cipta</h1>
      <p>Kandungan layanan Internet yang disediakan Le Hospitale Kelompok 6 mungkin termasuk : tulisan, software, suara, gambar, video, tabel, dll. Semua kandungan ini di bawah hak cipta, merek dagang dan undang-undang hak kepemilikkan lainnya. Siapapun yang belum mendapat izin tertulis dari Le Hospitale Kelompok 6, dilarang mengedarkan atau download, membagikan atau mempergunakan kandungan dan data situs ini.</p>
      <p>Jika kandungan situs ini diedarkan, hak cipta kembali ke penulis asli, jika penulis ada hak cipta kepemilikkan atau artikel yang dikutip dari hak kepemilikkan penulis lainnya, maka hak cipta kembali ke penulis asalnya. Badan unit atau per orangan siapapun yang mengira adanya pelanggaran atau menyangkut kepentingan hukum, mohon hubungi pihak kami, kami akan secepat mungkin menangani masalah kandungan tersebut.</p>
      <h1 class="title">Penolakan</h1>
      <p>Semua informasi dan data yang disediakan situs ini hanya sebagai rujukan. Tidak dapat dianggap sebagai pendapat dari dokter, juga tidak seharusnya digunakan sebagai tujuan diagnosa atau pengobatan. Apabila anda memiliki pertanyaan kesehatan, mohon tanyakan pada pakar medis kita.</p>
      <p>Le Hospitale Kelompok 6 tidak bertanggung jawab atas kesalahan apapun atau kekurangan yang terdapat dalam kandungan situs ini, Le Hospitale Kelompok 6 tidak menanggung resiko apapun terhadap penggunaan anda pada situs ini. Rujukan cara pengobatan, produk atau pelayanan, tidak berarti adalah saran atau pengakuan Le Hospitale Kelompok 6.</p>
      <h1 class="title">Kebijakan Privasi</h1>
      <p>Menjaga privasi pengguna adalah salah satu kebijakan Le Hospitale Kelompok 6, setelah kami menerima data anda, data tersebut akan disimpan secara tepat di dalam sistem kami, sebelum mendapat persetujuan anda, Le Hospitale Kelompok 6 menjamin tidak akan mengumumkan atau menyediakan data pribadi pengguna ke pihak ke-3.</p>
  </Single>
</template>

<script>
    import Single from '@/components/Single'
    export default {
        name: 'Term & Conditions',
        components: {
            Single
        },
        data() {
            return {
                title: "Term & Conditions",
                subtitle: "Syarat dan Ketentuan."
            }
        }
    }
</script>

<style>

</style>