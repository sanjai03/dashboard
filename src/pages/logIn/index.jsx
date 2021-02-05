function LogIn(){
    return(
        <div className="container-fluid bg-primary">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="shadow-md o-hidden my-5 b-0 card">
                        <div className="card-body">
                            <div className="row">
                                <div className ="col-md-6 d-none d-md-block bg-login-image">
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-center text-gray mb-5">Welcome Back!</h1>
                                            <form>
                                                <div className="form-group">
                                                    <input type="email" placeholder="Enter Email Address..." name="email" className="form-control form-control-login" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" placeholder="Password" name="password" className="form-control form-control-login" />
                                                </div>
                                                <div className="form-group">
                                                    
                                                   <div className="custom-control checkbox-login custom-checkbox">
                                                   <input type="checkbox" name="remember_me" className="custom-control-input" />
                                                   <label className="custom-control-label">Remember Me</label>
                                                   </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-block">Log In</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn;