
const Url ="https://dummyjson.com/"

 const GET =  async (endpoint) => {
        const res = await fetch(Url + endpoint );
        return res.json();

        

}

export {GET}