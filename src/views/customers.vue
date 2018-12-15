<template>

    <div>
      <br>
        <h1>Customers List</h1>
<br>

     <b-row>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn align="center" :disabled="!filter" @click = "filter = ''">Search</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
        </b-row>
<br>
        <b-table striped hover :items="customers" :fields="fields" :per-page="pageSize" :current-page="pageIndex"></b-table>
        
        <b-pagination align="center" size="md" :total-rows="customers.length" :per-page="pageSize" v-model="pageIndex">
        </b-pagination>
    </div>
</template>


<script>
import axios from "axios";

export default {
  name: "customers",

  data() {
    return {
      message: "Project 2",
      customers: [],
      pageSize: 10,
      pageIndex: 1,
      fields: [
        {
          key: "customer_id",
          sortable: true
        },
        {
          key: "company_name",
          sortable: true
        },
        {
          key: "contact_name",
          sortable: true,
         
        },
        {
          key: "phone",
          sortable: true,
          variant: "info"
        }
      ]
    };
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  mounted() {
    var instance = this;
    axios
      .get("https://pure-ravine-91237.herokuapp.com/api/customers/")
      .then(function(response) {
        console.log(response.data);
        instance.customers = response.data.data;
      });
  }
};
</script>

