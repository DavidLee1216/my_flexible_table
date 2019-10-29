import React from "react";
import './table.css';

const tableItems = {"name":"NAME", "job":"JOB", "age":"AGE", "addr":"ADDRESS", "speciality":"SKILL"};

class PersonItem extends React.Component {
    constructor(props)
    {
        super(props);
 //       aPerson = props.person;
        this.state = {aPerson:props.person, selected:props.person.selected};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        this.setState({selected:true});
        this.props.clickHandler(this.props.person.idx);
    }
    render(){
        return (
            <tr className="divTableRow" sel={this.props.person.selected.toString()}  idx={this.props.person.idx} onClick={this.handleClick}>
            <td className="divTableCell">{this.props.person.name}</td>
            <td className="divTableCell">{this.props.person.job}</td>
            <td className="divTableCell">{this.props.person.age}</td>
            <td className="divTableCell">{this.props.person.address}</td>
            <td className="divTableCell">{this.props.person.speciality}</td>
            </tr>
        );
    }

}
class PersonItemList extends React.Component{
    constructor(props){
        super(props);
        const personItemList = this.props.person;
        const listItems = personItemList.map((aperson)=>
        <PersonItem person={aperson} clickHandler={this.handleClick}></PersonItem>);
        this.state = {listItems:listItems};
    }
    handleClick = (idx) => {
        this.props.clickHandler(idx);
   }
    render(){
        const personItemList1 = this.props.person;
 //       alert(personItemList1[1].name);
        const listItems = personItemList1.map((aperson)=>
        <PersonItem person={aperson} clickHandler={this.handleClick}></PersonItem>);
        this.state.listItems = listItems;
 //       alert(listItems[1].name);
       return (
            <tbody class="divTableBody">{listItems}</tbody>
        )
    }
}
class PersonTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {list:this.props.person_list.person, idx:-1};
    }
    handleClick = (idx) => {
        this.props.clickHandler(idx);
    }
    render(){
        return (
            <table class="blueTable">
            <thead>
            <tr>
            <th>{tableItems.name}</th>
            <th>{tableItems.job}</th>
            <th>{tableItems.age}</th>
            <th>{tableItems.addr}</th>
            <th>{tableItems.speciality}</th>
            </tr>
            </thead>
            <PersonItemList person={this.state.list} clickHandler={this.handleClick}/>
            </table>
        )
    }
}

export default PersonTable;