<template>
    <Single :title="title" :subtitle="subtitle">
        <p>Privasi anda penting bagi kami. Demi melindungi privasi anda, kami menyediakan pemberitahuan ini untuk menjelaskan praktek informasi online kami dan pilihan anda tentang cara informasi dikumpulkan dan digunakan. Agar pemberitahuan ini mudah ditemukan, kami menyediakannya di homepage dan di setiap titik dimana informasi pribadi mungkin akan diminta.</p>
        <h1 class="title">Google Adsense dan Cookie Double Click DART</h1>
        <p>Google, sebagai vendor iklan pihak ketiga, menggunakan cookies untuk menayangkan iklan di situs ini. Penggunaan cookie DART dengan Google memungkinkan mereka untuk melayani iklan kepada pengunjung yang didasarkan pada kunjungan mereka ke situs web ini serta situs lain di internet.</p>
        <p>Untuk memilih keluar dari cookie DART Anda dapat mengunjungi iklan Google dan jaringan konten kebijakan privasi kami di url berikut http://www.google.com/privacy_ads.html Pelacakan dari pengguna melalui mekanisme cookie DART untuk kebijakan privasi Google.</p>
        <p>Lain-lain Pihak Ketiga server iklan atau jaringan iklan juga dapat menggunakan cookie untuk melacak aktivitas pengguna di situs ini untuk mengukur efektivitas iklan dan alasan lainnya yang akan disediakan dalam kebijakan privasi mereka sendiri, www.rspermata.co.id tidak memiliki akses atau kontrol terhadap cookies yang mungkin digunakan oleh pengiklan pihak ketiga.</p>
        <h1 class="title">Komitmen Untuk Privasi Childrens</h1>
        <p>Melindungi privasi sangat muda adalah sangat penting. Untuk itu, www.rspermata.co.id tidak akan pernah mengumpulkan atau menyimpan informasi di website kami dari mereka yang kita benar-benar tahu di bawah 18, dan tidak ada bagian dari situs web kami ini disusun untuk menarik siapa pun di bawah 18. Di bawah Ketentuan Layanan kami, anak-anak di bawah 18 tidak diizinkan untuk mengakses layanan kami.</p>
        <h1 class="title">Pengumpulan Informasi Pribadi</h1>
        <p>Ketika mengunjungi www.rspermata.co.id, alamat IP yang digunakan untuk mengakses situs akan mulai bisa login bersama dengan tanggal dan waktu akses. Informasi ini adalah murni digunakan untuk menganalisis kecenderungan, mengelola situs, melacak perpindahan pengguna dan mengumpulkan informasi demografis yang luas untuk penggunaan internal. Yang terpenting, setiap alamat IP dicatat tidak berhubungan dengan informasi pribadi.</p>
        <p>Link ke situs-situs web pihak ketiga</p>
        <p>Kami telah menyertakan link di situs ini untuk anda gunakan dan referensi. Kami tidak bertanggung jawab atas kebijakan privasi pada situs ini. Anda harus menyadari bahwa kebijakan privasi situs-situs tersebut mungkin berbeda dari kita sendiri.</p>
        <h1 class="title">Perubahan Pernyataan Privasi</h1>
        <p>Isi dari pernyataan ini dapat diubah setiap saat, sesuai kebijaksanaan kami.</p>
    </Single>
</template>

<script>
    import Single from '@/components/Single'
    export default {
        name: 'Privacy & Policy',
        components: {
            Single
        },
        data() {
            return {
                title: "Privacy & Policy",
                subtitle: "lorem dalam situs website ini."
            }
        }
    }
</script>