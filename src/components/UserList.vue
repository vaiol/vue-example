<template>
  <v-layout row>
    <v-flex xs12 sm10 lg8 xl6 offset-sm1 offset-lg2 offset-xl3)>
      <v-card>
        <v-list>
          <v-list-tile avatar v-for="item in items" :key="item.title" @click="deleteDialog(item)">
            <v-list-tile-action>
              <v-icon color="red">delete</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-dialog v-model="dialog" max-width="400">
            <v-card>
              <v-card-title class="headline">Delete User?</v-card-title>
              <v-card-text v-if="element">Are you sure you want to delete {{ element.title }}? <br>
                Lorem ipsum trali vali! Chto delat dalshe yo?</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
                <v-btn color="green darken-1" flat="flat" @click="deleteItem()">Agree</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    element: null,
    items: [
      { id: 1, title: 'vaiol.ans@gmail.com' },
      { id: 2, title: 'alexander.stepano@gmail.com' },
      { id: 3, title: 'al2@hoockah.com' },
      { id: 4, title: 'fumari228@kiling.fl' }
    ]
  }),
  methods: {
    deleteDialog (el) {
      this.dialog = true
      this.element = el
    },
    deleteItem () {
      let arr = this.items
      console.log(arr)
      for (let i = 0, max = arr.length; i < max; i++) {
        if (arr[i].id === this.element.id) {
          arr.splice(i, 1)
          break
        }
      }
      this.dialog = false
      this.element = null
    }
  }
}
</script>

<style scoped>

</style>
