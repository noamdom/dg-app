import React from 'react';
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai'



const HomePage = () => (
    <>
        <div className="container text-center">



        </div>

        <div className="row justify-content-center">
            <div className="col-10 col-md-10 col-lg-8 col-xl-7">
                <div className="display-4 text-primary mt-3 mb-2">
                    Recipe App
                    </div>
                <p className="lead">
                    This final project app is about creating dynamic recipes with focus
                    on aroma and taste profile and sustainble process in our cooking dish procss
                    </p>

                <a href="/register" className="btn btn-outline-primary mr-2">
                    Register
                    </a>
                <a href="/login" className="btn btn-outline-primary mr-2">
                    Log In
                    </a>
                <a href="/meetings" className="btn btn-primary">
                    Cooking
                    </a>
            </div>

        </div>
      


         




    </>
)


export default HomePage;