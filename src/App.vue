<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.title" @click="$router.push(item.link)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ applicationName }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; {{ year }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    applicationName: 'Tester',
    drawer: true,
    year: 2018,
    items: [
      { title: 'Dashboard', icon: 'dashboard', link: '/' },
      { title: 'Register', icon: 'account_box', link: 'register' }
    ]
  }),
  props: {
    source: String
  }
}
</script>
