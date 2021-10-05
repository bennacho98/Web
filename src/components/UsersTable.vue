<template>
    <div>
        <b-table striped hover :items="users" :fields="fields"></b-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            fields: [{key:'gender', sortable: true}, {key: 'name.first', sortable: true}, 'phone', 'cell']
        }
    },
    props:{
        users:{
            type: Array,
            default: () => []
        }
    }
}
</script>