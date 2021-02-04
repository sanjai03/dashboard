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