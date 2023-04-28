import axios from 'axios'
import {ref} from 'vue'


async function getData() { 
    let isError = false;
    let isLoading = true;
    let data = ref("")

    try {
        
<<<<<<< HEAD
        let response = await axios.get('https://todo-back-6klq.onrender.com/errands')
=======
        let response = await axios.get('https://todolist-json.onrender.com/errands')
>>>>>>> bc42ffbc4256c6d11b1ee374b7c9e6ea35dddfa5
        data.value= await response.data

    }catch (error){
        isError = true;
    }
    isLoading = false;

    return {isError, isLoading, data}
}





export default {getData}

