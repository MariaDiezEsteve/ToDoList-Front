import axios from 'axios'
import {ref} from 'vue'


async function getData() { 
    let isError = false;
    let isLoading = true;
    let data = ref("")

    try {
        
        let response = await axios.get('https://todolist-json.onrender.com/errands')
        data.value= await response.data

    }catch (error){
        isError = true;
    }
    isLoading = false;

    return {isError, isLoading, data}
}





export default {getData}

