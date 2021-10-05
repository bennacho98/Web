<template>
    <div class="container">
        <UsersTable v-if="false" :users="users"></UsersTable>
        <users v-bind:users="users"></users>
    </div>
</template>

<script>
import api from '@/api';
import Users from '@/components/Users.vue';
import UsersTable from '@/components/UsersTable';
export default {
    components: {
        Users,
        UsersTable
    },
    data(){
        return {
            users: []
        }
    },
    created(){
        // api.getUsersPromise().then(data => this.users = data);
        // api.getUsersPromise().then(data => console.log(data));
        (async () => {this.users = await api.getUsersAsync()})();
    }
}
</script>