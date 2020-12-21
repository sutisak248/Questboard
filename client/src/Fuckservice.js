import axios from 'axios';

const url = 'http://localhost:5000/api/posts'
class FuckService{
    static async getfuck(){
        let data = await axios.get(url).then((res)=>{
        console.log(res.data)
        return res.data
        })
        console.log("data in f "+data)
        return data   
    }
    static async postfuck(text){
        alert('text '+text)
        await axios.post(url,{text})
    }
}

export default FuckService
