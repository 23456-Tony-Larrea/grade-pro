<template>
  <Fieldset legend="Bienvenido" class="rotated-fieldset">
    <div class="d-flex justify-end">
    <Card>
        <template #title>Simple Card</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
    </Card>
</div>
  </Fieldset>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Fieldset from 'primevue/Fieldset';
  import Button from 'primevue/button';
  import image from '../assets/image/teacher.png'
  import Card from 'primevue/card';
  export default defineComponent({
    name: 'HomeView',
    components: {
      Button,
      Fieldset,
      Card
    },
    data() {
    return {
      image,
    };
  }
  });
  </script>
  
  <style scoped>
  </style>