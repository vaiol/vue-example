<template>
  <v-layout justify-center align-center>
    <v-flex shrink>
      <v-tooltip right>
        <v-btn
          icon
          large
          :href="source"
          target="_blank"
          slot="activator"
        >
          <v-icon large>code</v-icon>
        </v-btn>
        <span>Source</span>
      </v-tooltip>
    </v-flex>
  </v-layout>
</template>
