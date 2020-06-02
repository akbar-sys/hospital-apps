<template>
    <Single :title="title" :subtilte="subtitle" >
        <div class="columns is-multiline">
            <div class="column is-4" v-for="(testimoni, i) in testimonial" :key="i">
                <div class="card">
                    <div class="card-image is-hidden-mobile">
                        <img src="../assets/testimoni.svg" alt="image">
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <img src="../assets/profile_logo.svg" alt="image" class="image is-48x48">
                            </div>
                            <div class="media-content">
                                <p class="title is-4">
                                {{testimoni.user}}
                                </p>
                                <p class="subtitle has-text-primary">
                                @{{testimoni.user}}
                                </p>
                            </div>
                        </div>
                        <div class="content">
                            <p class="subtitle is-6 has-text-centered">"{{testimoni.msg}}"</p>
                        </div>
                    </div>
                        
                    
                </div>
            </div>
        </div>
    </Single>
</template>

<script>

import Single from '@/components/Single'
export default {
    name: 'Testimoni',
    components: {
        Single
    },
    data() {
        return {
            title: "Testimoni",
            subtitle: "lorem dalam situs website ini.",
            testimonial: [
                {user: 'Andika', msg: 'Pelayanannya bagus!'},
                {user: 'Akbar', msg: 'Jadwal Dokter yang diberikan sangat membantu!'},
                {user: 'Pratama', msg: 'Respon sangat cepat!'},
                {user: 'Jumina', msg: 'Informasi yang diberikan sangat lengap!'},
                {user: 'Cahyani', msg: 'Rumah Sakitnya bagus!'},
                {user: 'Jihan', msg: 'Dokter, Perawat, dan Petugasnya semua sangat baik dan ramah.'},
                {user: 'Silvi', msg: 'Melayani pasien layaknya keluarga sendiri!'},
                {user: 'Rahma', msg: 'Penanganannya cepat dan akurat!'},
                {user: 'Sakti', msg: 'Pelayanan terbaik tanpa membeda-bedakan.'},
                {user: 'Pujo', msg: 'Pelayanannya sangat responsif!'},
                {user: 'Edi', msg: 'Fasilitasnya sangat lengkap!'}
            ]
        }
    }
}
</script>

<style>

</style>
