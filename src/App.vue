<template slot="items" slot-scope="props">
  <v-app>
  
    <!-- <v-layout wrap style="height: 200px;"> -->
    <!-- <v-container>
              <v-layout justify-center>
                <v-btn dark color="pink" @click.stop="drawer = !drawer">Toggle</v-btn>
              </v-layout>
            </v-container> -->
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
    <!-- </v-layout> -->
    <v-toolbar color="light-green lighten-4">
  
      <v-toolbar-side-icon @click.native="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <!-- <v-toolbar-title 
              class="white--text" 
              slot="extension"> -->
      <v-toolbar-title>
  
        <router-link to="/" tag="span" style="cursor: pointer">
          <img src="@/assets/logo.png" alt="Arcides Studio" style="margin-top:1px;padding:1px;width:12em">
  
        </router-link>
      </v-toolbar-title>
  
      <v-spacer></v-spacer>
  
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link" >
          <v-icon left color="dark darken-2">{{item.icon}}</v-icon>
          {{item.title}}</v-btn>
        <!-- <v-btn flat>facebook</v-btn>
              <v-btn flat>Twitter</v-btn>
              <v-btn flat>Linkedin</v-btn>
        
              <v-btn flat>
                <v-icon large color="dark darken-2">perm_identity</v-icon>
                Login</v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer height="auto">
      <v-card flat tile class="flex">
        <v-card-title class="teal white--text">
          <strong class="subheading">Get connected with us on social networks!</strong>
          <v-spacer></v-spacer>
          <v-btn v-for="icon in icons" :key="icon" icon dark class="mx-3">
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="grey lighten-3">
          <v-layout>
            <v-flex v-for="(col, i) in rows" :key="i" xs3>
              <span class="body-2" v-text="col.title.toUpperCase()"></span>
              <div v-for="(child, i) in col.children" :key="i" v-text="child"></div>
            </v-flex>
            <v-flex xs3 layout column>
              <span class="body-2">CONTACT</span>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-home</v-icon>
                B-5/255, IInd Floor
              </div>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
                info@arcides-stuio.com
              </div>
  
              <div>
                <v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
                +91-9810-665-547
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions class="grey lighten-2 justify-center">
          &copy;2018 — <strong><router-link to="www.gadgets-care.com"><a target="_blank" tag="span" style="cursor: pointer">Gadgets Care</a></router-link></strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        sideNav: false,
        menuItems: [{
            icon: 'home',
            title: 'Home',
            link: '/'
          },
          {
            icon: 'work',
            title: 'Projects',
            link: '/hello'
          },
          {
            icon: 'supervisor_account',
            title: 'Vendor Zone',
            link: ''
          },
          {
            icon: 'assignment_turned_in',
            title: 'Testiomonial',
            link: ''
          },
          {
            icon: 'contact_support',
            title: 'About Us',
            link: ''
          },
          {
            icon: 'contact_mail',
            title: 'Contact Us',
            link: ''
          }
          // ,{icon:'location_on',title:'Location'}
        ],
        icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
        rows: [{
            title: 'Company Name',
            children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit']
          },
          {
            title: 'Products',
            children: ['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular']
          },
          {
            title: 'Useful Links',
            children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
          }
        ]
        // clipped: false,
        // drawer: false,
        // fixed: false,
        // items: [{
        //   icon: "bubble_chart",
        //   title: "Inspire"
        // }],
        // miniVariant: false,
        // right: true,
        // rightDrawer: false,
        // title: "Vuetify.js"
      }
    },
    name: 'App'
  }
</script>

<style lang="stylus">
@import './stylus/main'
</style>
