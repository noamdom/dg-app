import axios from "axios";


const BASE_URL = process.env.NODE_ENV !== 'production' ?
                "http://127.0.0.1:8000":
                "https://dg-backend.herokuapp.com/" ;


                
export default {




    async retrieveMenu() {
        return new Promise((reslove) => {
            axios.get('api/recipesnames/').then(res => {
                reslove(res.data);
            });
        });
    },


    async retrieveRecipe(id) {
        return new Promise((reslove) => {
            axios.get('metarecipe/' + id + '/').then(res => {
                reslove(res.data);
            });
        });
    },



}