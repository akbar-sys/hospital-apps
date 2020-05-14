<template>
    <Single :title="title" :subtitle="subtitle">
        <h1 class="title">Tetap terhubung dengan kami</h1>
        <div class="tile is-anchestor has-background-primary">
            <div class="tile is-parent">
                    <template>
                        <section class="box container">
                            <b-field label="E-mail" type="is-primary">
                                <b-input placeholder="Email" type="email"></b-input>
                            </b-field>

                            <b-field label="Phone" type="is-primary">
                                <b-input placeholder="Number"
                                    type="number"
                                    min="10"
                                    max="20">
                                </b-input>
                            </b-field>

                            <b-field label="Name" type="is-primary">
                                <b-input placeholder="Name"
                                type="text"
                                required
                                validation-message="Only lowercase is allowed"
                                pattern="[a-z]*">
                                </b-input>
                            </b-field>
                            <b-field label="Message" type="is-primary">
                                <b-input type="textarea"
                                    minlength="10"
                                    maxlength="100"
                                    placeholder="Maxlength automatically counts characters">
                                </b-input>
                            </b-field>
                            <b-button type="is-primary" expanded>Contact Us</b-button>
                        </section>
                    </template>
            </div>
            <Maps class="tile" />
        </div>
    </Single>
</template>

<script>
    import Maps from '@/components/Maps'
    import Single from '@/components/Single'
    export default {
        name: 'Contact Us',
        components: {
            Maps,Single
        },
        data() {
            return {
                title: "Contact Us",
                subtitle: "Jangan ragu menghubungi kami."
            }
        }
    }
</script>
