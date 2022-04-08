<template>
  <div>
    <v-card elevation="2 text-center pb-2">
      <v-avatar color="primary" size="52" class="white--text">FZ</v-avatar>
      <v-list disabled>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-btn depressed dark>
        See More
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [{ text: 'Fahriz Dimasqy' }, { text: 'Frontend Developer' }],
  }),
  name: 'About',
}
</script>
