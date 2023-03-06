<script setup>
    import { ref } from 'vue'
    const form = ref(false)
    const email = ref(null)
    const password = ref(null)
    const loading = ref(null)

    function onSubmit() {
        if (!form) return

        loading = true

        setTimeout(() => (loading = false), 2000)
    }
    function required (v) {
        return !!v || 'Field is required'
    }

</script>
<template>
    <v-container class="h-screen d-flex justify-center align-center bg-orange-lighten-4">
        <v-sheet class="" rounded>
            <v-card class="mx-auto py-6 px-6 w-auto" max-width="344">
                <v-img
                    :width="300"
                    aspect-ratio="16/9"
                    cover
                    src="/the-meal-plan-logo.png"
                ></v-img>
                <v-form class="mb-6"
                    v-model="form"
                    @submit.prevent="onSubmit"
                >
                    <v-text-field
                        v-model="email"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Email"
                    ></v-text-field>
            
                    <v-text-field
                        v-model="password"
                        :readonly="loading"
                        :rules="[required]"
                        clearable
                        label="Password"
                        placeholder="Enter your password"
                    ></v-text-field>
                    <v-btn
                        :disabled="!form"
                        :loading="loading"
                        block
                        color="grey-darken-3"
                        size="large"
                        type="submit"
                        variant="elevated"
                    >
                        Sign In
                    </v-btn>
                </v-form>
            </v-card>
        </v-sheet>
    </v-container>
</template>

