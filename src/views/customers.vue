<template>
    <div>
        <h1>Customers List</h1>
     
        <b-table striped hover :items="customers" :fields="fields" :per-page="pageSize" :current-page="pageIndex"></b-table>
        
        <b-pagination size="md" :total-rows="customers.length" :per-page="pageSize" v-model="pageIndex">
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
          variant: "danger"
        }
      ]
    };
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

