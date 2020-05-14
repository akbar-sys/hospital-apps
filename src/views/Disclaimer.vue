<template>
    <Single :title="title" :subtitle="subtitle">
        <p>
            Situs website ini dimiliki oleh Rumah Sakit Le Hospitale Kelompok 6. Anda dapat mengunduh isi yang ditampilkan dalam situs website ini hanya untuk digunakan oleh anda dan tidak diperbolehkan untuk mendistribusikan, memodifikasi atau menggunakan isi dari situs website ini untuk tujuan publikasi maupun komersial, termasuk logo-logo, gambar-gambar, artikel-artikel, audio dan video tanpa izin tertulis terlebih dahulu dari Rumah Sakit Le Hospitale Kelompok 6. Rumah Sakit Le Hospitale Kelompok 6 tidak menjamin dan tidak bertanggungjawab atas kerugian atau kerusakan yang timbul dari penggunaan situs website ini. Dengan menggunakan situs website ini, anda setuju atas syarat-syarat penggunaan. Situs website ini mungkin dimodifikasi atau dikombinasi dengan situs-situs website lainnya yang tidak dioperasikan oleh Rumah Sakit Le Hospitale Kelompok 6. Rumah Sakit Le Hospitale Kelompok 6 tidak bertanggung jawab atas isi dari situs-situs website lain tersebut. Syarat-syarat dan isi dari dalam situs website ini setiap saat dapat berubah tanpa pemberitahuan terlebih dahulu untuk penyempurnaan. Anda terikat oleh setiap perubahan tersebut, oleh karena itu anda sebaiknya secara rutin melihat dan mempelajari syarat-syarat serta isi yang berlaku dalam situs website ini.
          </p>
    </Single>
</template>

<script>
    import Single from '@/components/Single'
    export default {
        name: 'Disclaimer',
        components: {
            Single
        },
        data() {
            return {
                title: "Disclaimer",
                subtitle: "Orang cerdass taat hukum."
            }
        }
    }
</script>
