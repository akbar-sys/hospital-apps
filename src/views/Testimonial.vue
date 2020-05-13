<template>
    <Single :title="title" :subtilte="subtitle" >
        <div class="columns is-multiline">
            <div class="column is-4" v-for="(testimoni, i) in testimonial" :key="i">
                <div class="card">
                    <div class="card-image is-hidden-mobile">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="image">
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="image" class="image is-48x48">
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
                {user: 'Andika', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur adipisicing elit. Sequi?'},
                {user: 'Akbar', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur adipisicing elit. Sequi?'},
                {user: 'Pratama', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur adipisicing elit. Sequi?'},
                {user: 'Jumina', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur adipisicing elit. Sequi?'},
                {user: 'Cahyani', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur adipisicing elit. Sequi?'},
                {user: 'Jihan', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur adipisicing elit. Sequi?'},
                {user: 'Silvi', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur adipisicing elit. Sequi?'},
                {user: 'R', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur adipisicing elit. Sequi?'},
                {user: 'Sakti', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur adipisicing elit. Sequi?'},
                {user: 'Pujo', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur adipisicing elit. Sequi?'},
                {user: 'Edi', msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consectetur adipisicing elit. Sequi?'}
            ]
        }
    }
}
</script>

<style>

</style>
