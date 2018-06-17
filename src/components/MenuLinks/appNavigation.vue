<template>
     <v-navigation-drawer v-model="sideNav" temporary absolute width="150">
      <v-list>
        <v-list-title v-for="item in menuItems" :key="item.title" router :to="item.link" width="140" height="40">
          <v-list-tile-acton>
            <v-icon left>{{item.icon}}</v-icon>
          </v-list-tile-acton>
          <v-list-title-content>{{item.title}}</v-list-title-content>
          <v-divider></v-divider>
        </v-list-title>
      </v-list>
      <!-- <v-list class="pt-0" dense>
            <v-divider></v-divider>
            </v-list>
            -->
    </v-navigation-drawer>
</template>
<script>
export default {
    
}
</script>

