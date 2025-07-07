import { Component } from "react";
import "./index.css"

class Dashboard extends Component{
    state={userdata:[]}

    componentDidMount(){
        this.getUser()
    }
    getUser=async()=>{
        const resdata=await fetch("https://jsonplaceholder.typicode.com/comments")
        const data=await resdata.json()
        
        if (resdata.ok){
           this.setState(pres=>{
            const listdata=[]
            data.map(each=>listdata.push(each))
            return {userdata:listdata}
           })
           console.log(data)
        }else{
            console.log("error")
        }

    }
    render(){
        const {userdata}=this.state
        console.log("TextDecoderStream",userdata)
        return <div>
            Dashboard
            <div>
                <ul className="Dash-ul-user">
                    {userdata.map(each=><li key={each.id}><ul className="Dash-ul">
                        <li key={each.id}>{each.name}</li>
                        <li key="name">{each.name}</li>
                        <li key="email">{each.email}</li>
                        <li key="comment">{each.body}</li></ul></li>)}
                </ul>
            </div>
        </div>
    }
}

export default Dashboard