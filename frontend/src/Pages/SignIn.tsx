

function SignIn(){
    return(

        <div>
            <div>
                <div>
                    <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:'110px'}}></i></h4>
                    <div className="image"></div>

                </div>
                <div className="body-form">
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-lock"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Password" />
                        </div>
                        <button>Signin</button>
                        <div className="message">
                            <div>
                                <input type="checkbox" /> Remember Me
                            </div>
                            <div>
                                <a href="#">Forgot Password</a>
                            </div>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    )
}

    
