import React from "react"
import PersonTable from './table'
import './UserManagerView.css'

var person_list = {
    "person":[
      {"idx":1, "name":"Jane Flower", "job":"Software engineer", "age":"37", "address":"Mexico", "speciality":"JavaScript", "selected":false},
      {"idx":2, "name":"David Lee", "job":"Software engineer", "age":"29", "address":"Los Angeles", "speciality":"Python", "selected":false},
      {"idx":3, "name":"Jenny Marilyn", "job":"Sales Manager", "age":"30", "address":"Virginia", "speciality":"Mathematics", "selected":false}
    ]
}
function setAllUnselected() {
    for(let i = 0; i < person_list.person.length; i++)
        person_list.person[i].selected = false;
}
function addPerson(person) {
    setAllUnselected();
    person_list.person.push(person);
}

function removePerson(sel) {
    setAllUnselected();
    person_list.person.splice(sel, 1);
}

export default class UserManagerView extends React.Component{
    currIdx = 0;
    username = "";
    job = "";
    age = "";
    address = "";
    speciality = "";
    constructor(props){
        super(props);
        this.state = {currentUser:person_list.person[-1], sel:-1};
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeJob = this.handleChangeJob.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeSpeciality = this.handleChangeSpeciality.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChangeUsername(e) {
        this.username = e.target.value;
        this.setState({sel:-1});
        this.props.changeNameHandler(this.username);
    }
    handleChangeJob(e) {
        this.job = e.target.value;
        this.setState({sel:-1});
    }
    handleChangeAge(e) {
        this.age = e.target.value;
        this.setState({sel:-1});
    }
    handleChangeAddress(e) {
        this.address = e.target.value;
        this.setState({sel:-1});
    }
    handleChangeSpeciality(e) {
        this.speciality = e.target.value;
        this.setState({sel:-1});
    }
    handleAddClick = () => {
        var idx = (person_list.person.length > 0)?person_list.person[person_list.person.length-1].idx+1:1;
        var aperson = {idx:idx, name:this.username, job:this.job, age:this.age, address:this.address, speciality:this.speciality, selected:true};
        addPerson(aperson);
        this.setState({currentUser:aperson});
        this.setState({sel:person_list.person.length-1});
    }
    handleDeleteClick = () => {
        if(this.state.sel === -1)
            return;
        removePerson(this.state.sel);
        this.setState({currentUser:person_list.person[-1], sel:-1});
    }
    handleClick = (idx) => {
        let sel=-1;
        setAllUnselected();
        for(let i=0; i < person_list.person.length; i++)
        {
            if(person_list.person[i].idx===idx)
            {
                person_list.person[i].selected = true;
                this.currIdx = person_list.person[i].idx;
                sel = i;
            }    
            else
                person_list.person[i].selected = false;
        }
        this.username = (sel!==-1) ? person_list.person[sel].name : "";
        this.job = (sel!==-1) ? person_list.person[sel].job : "";
        this.age = (sel!==-1) ? person_list.person[sel].age : "";
        this.address = (sel!==-1) ? person_list.person[sel].address : "";
        this.speciality = (sel!==-1) ? person_list.person[sel].speciality : "";
        this.setState({currentUser:person_list.person[sel], sel:sel});
        this.props.changeNameHandler(this.username);
   }
    render(){
        const Username = this.username;
        const Job = this.job;
        const Age = this.age;
        const Address = this.address;
        const Speciality = this.speciality;
        return(
            <div className="UserManagerView">
                <label for="name">NAME</label>
                <input type="text" id="name" value={Username} onChange={this.handleChangeUsername}/>
                <label for="job">JOB</label>
                <input type="text" id="job" value={Job} onChange={this.handleChangeJob}/>
                <label for="age">AGE</label>
                <input type="text" id="age" value={Age} onChange={this.handleChangeAge}/>
                <label for="addr">ADDRESS</label>
                <input type="text" id="address" value={Address} onChange={this.handleChangeAddress}/>
                <label for="speciality">SKILL</label>
                <input type="text" id="speciality" value={Speciality} onChange={this.handleChangeSpeciality}/>
                <button onClick={this.handleAddClick}>ADD</button>
                <button onClick={this.handleDeleteClick}>REMOVE</button>
                <PersonTable person_list={person_list} clickHandler={this.handleClick}/>
            </div>
        )
    }
}