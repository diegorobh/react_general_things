
import Axios from 'axios';

/*
Así sería sin el uso de redux-thunk
Usar redux thunk nos permite implementar el retorno de action creators, que
lo que hacen es retornar una función que usa el metodo dispatch para retornar su objeto
relacionado
export const fetch_posts = ()=>{
    //const { data } = await Axios.get("https://jsonplaceholder.typicode.com/posts");
    return ({
        type:"FETCH_POSTS",
        payload:
        //data

        
        [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            }
        ]

    })
}*/

export const fetch_posts = (store)=>{
    //let { data } = Promise.resolve(Axios.get("https://jsonplaceholder.typicode.com/posts"));
    //console.log("data",data);
    //console.log("store =",store);
    return dispatch => {
        Axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(".then es ",res)   
            dispatch({
                type:"FETCH_POSTS",
                payload:res.data
            })        
        })
    }



    }