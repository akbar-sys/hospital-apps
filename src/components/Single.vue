<template>
    <div>
        <div class="hero is-medium is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1 has-text-weight-thin">
                        {{ title }}
                    </h1>
                    <h1 class="subtitle is-6">{{ subtitle }}</h1>            
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
    name: 'Single',
    props: {
        title: String,
        subtitle: String
    }
}
</script>
