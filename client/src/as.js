let url = 'https://pokeapi.co/api/v2/pokemon/ditto'
let murl = 'http://localhost:5000/api/posts'



async function gg(){
    var da
    console.log('Start')
    da = await axios.get(murl).then((response)=>{
        console.log('fin '+response.data)
        return response.data
    })
    console.log('1'+da)
    
}