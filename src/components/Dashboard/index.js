import { Component } from "react";
import "./index.css";
import { RiExpandUpDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Header from "../Header";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";



class Dashboard extends Component{
    state={userdata:[],pages:[0,10],tab:1}

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
        const {userdata,pages,tab}=this.state
        
        console.log("TextDecoderStream",userdata,pages,pages[0])
        const k=[];
        let count=pages[0];
        if (userdata.length!==0){
        while (pages[1]>count){
            k.push(userdata[count])
            count+=1
        }}
        console.log("k",k,count)
        return <div className="dash">
            <Header/>
            <div className="dash-card-content">
                <div className="dash-card">
                    <div className="dash-sort-card">
                        <div className="dash-sort"><p>Sort Post ID</p>
                        <RiExpandUpDownLine /></div>
                        <div className="dash-sort">
                            <p>Sort Name</p>
                        <RiExpandUpDownLine /></div>
                        <div className="dash-sort">
                            <p>Sort Email</p>
                        <RiExpandUpDownLine /></div>
                    </div>
                    <div className="search-card">
                        <CiSearch/>
                        <input className="search-input" type="text" placeholder="Search name, email, comment" />
                    </div>
                </div>
                <div className="dash-ul-card">
                <ul className="Dash-ul-default">
                    <li className="Dash-li-default li-id">Post ID</li>
                    <li className="Dash-li-default">Name</li>
                    <li className="Dash-li-default">Email</li>
                    <li className="Dash-li-default">Comment</li>
                </ul>
                <ul className="Dash-ul-user">
                    {k.map(each=>{
                        console.log("each",userdata[1])
                        return <li key={each.id}><ul className="Dash-ul">
                        <li className="Dash-li-default li-id" key={each.id}>{each.postId}</li>
                        <li className="Dash-li-default" key="name">{each.name}</li>
                        <li className="Dash-li-default" key="email">{each.email}</li>
                        <li className="Dash-li-default" key="comment">{each.body}</li></ul></li>})}
                </ul>
                </div>
            <div className="dash-bottom-card">
                <div className="dash-bottom-content">
                    <div className="dash-bottom-card-1"><p><span>{pages[0]+1}</span>-<span>{pages[1]}</span> of {userdata.lenght} items</p></div>
                    <div><SlArrowLeft/><button type="button" className="dash-tab-active">{tab}</button><button type="button" className="dash-tab">{tab+1}</button>......<SlArrowRight/></div>
                    <div className="dash-page">1/10 pages <SlArrowDown/></div>
                </div>
            </div>
            </div>
        </div>
    }
}

export default Dashboard