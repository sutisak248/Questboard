import axios from 'axios';

const url = 'http://localhost:5000/api/auth/login'
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
        
        let a = await axios.post(url,text).then(res=> {return res})
        console.log(a.data.token)
    }
}

export default FuckService
