import React, { Component } from 'react';
import PDF from './PDF';

class Post extends Component {
    state = {
        content: '',
        firstname: '',
        lastname:'',
        email:'',
        age:'',
        school:'',
        class:'',
        studentid:'',
        test1:'',
        test2:'',
        test3:'',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.firstname || !this.state.content|| !this.state.lastname|| !this.state.age|| !this.state.school|| !this.state.test1|| !this.state.test2|| !this.state.test3){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Add new Post</legend>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('firstname')} name="firstname" type="text" placeholder="firstname" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('lastname')} name="lastname" type="text" placeholder="lastname" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('email')} name="email" type="text" placeholder="email" className="form-control" />
                                                </div> 
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('age')} name="age" type="text" placeholder="age" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('school')} name="school" type="text" placeholder="school" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('class')} name="class" type="text" placeholder="class" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('studentid')} name="studentid" type="text" placeholder="studentid" className="form-control" />
                                                </div> 
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('test1')} name="test1" type="text" placeholder="test1" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('test2')} name="test2" type="text" placeholder="test2" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('test3')} name="test3" type="text" placeholder="test3" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('content')} className="form-control" name="content" placeholder="Enter your text here" rows="7"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Submit</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF  content={this.state.content} firstname={this.state.firstname} lastname={this.state.lastname} email={this.state.email} age={this.state.age} school={this.state.school} class={this.state.class} studentid={this.state.studentid} test1={this.state.test1} test2={this.state.test2} test3={this.state.test3} />
                    )
                }
            </>
        );
    }
}

export default Post;