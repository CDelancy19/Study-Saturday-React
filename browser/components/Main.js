import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import axios from "axios";
import StudentList from "./StudentList";
import SingleStudent from "./SingleStudent";

export default class Main extends Component {
	constructor() {
		super();
		this.state = {
			students: [],
      selectedTests: [],
      selectedStudent: []
		};
    this.getSingleStudent = this.getSingleStudent.bind(this),
    this.getStudentTests = this.getStudentTests.bind(this)
	}

  async getSingleStudent (studentId) {
    try{
     const singleStudent = await axios.get(`/student/${studentId}`);
    const selectedStudent = singleStudent.data
    this.setState({ selectedStudent }) 
    }
    catch (err) {
      console.log('Oh noooo!');
    }
  }
  
  async getStudentTests (studentId) {
    try{
     const studentTests = await axios.get(`/test/${studentId}`);
    const selectedTests = studentTests.data
    this.setState({ selectedTests }) 
    }
    catch (err) {
      console.log('Oh no!');
    }
  }

	async componentDidMount() {
    try {
      const { data } = await axios.get("/student");
		this.setState({ students: data });
    }
		catch (err) {
      console.log('OOPS!');
    }
	}

	render() {
		return (
			<div>
				<h1>Students</h1>
				<StudentList students={this.state.students} 
        getSingleStudent={this.getSingleStudent} getStudentTests={this.getStudentTests} />
        <SingleStudent 
        selectedStudent={this.state.selectedStudent} selectedTests={this.state.selectedTests} />
			</div>
		);
	}
}
