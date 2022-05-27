import React from 'react';
import minePic from '../../images/278738339_2145712062248674_3455900153573825163_n.jpg';

const Portfolio = () => {
    return (
        <div className="">
            <div className="mx-auto mt-10">
                <img className="w-56 h-56 mx-auto rounded-full border-4 border-slate-100" src={minePic} alt="" />
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-center">Md. Rabiul Hasan Tanvir</h1>

                </div>
            </div>
            <div className="lg:flex gap-5">
                <div className="md:text-3xl text-lg text-justify md:p-20 p-10  lg:w-1/2">
                    <h1 className="text-center text-2xl text-accent uppercase font-bold lg:my-10"> Summary</h1>
                    I am Md Rabiul Hasan TANVIR, a computer science graduate from Bangladesh University of Business and Technology
                    in the Department of Computer Science and Engineering. My career focuses on Web development,
                    Blockchain application development, and Machine learning. Moreover,
                    I am proficient in prominent frameworks and libraries, including TensorFlow, Keras,
                    NumPy, Matplotlib, Bootstrap, Tailwind, React.Js, and Express.js, etc. I have experience working in
                    famous languages, including Python and C++.
                </div>
                <div className="md:text-3xl text-lg text-justify md:p-20 p-10 w-1/2">
                    <h1 className="text-center text-2xl text-accent uppercase font-bold my-10"> Education</h1>
                    <div className="lg:flex gap-10 items-center">
                        <div className="whitespace-nowrap font-bold text-blue-900"> B.Sc. in Computer Science</div>
                        <div className="">
                            <h2><span className="font-bold whitespace-nowrap">Bangladesh University of Business and Technology</span></h2>
                            <small> <h2>CGPA:<span className="font-bold"> 3.68 out of 4.00</span></h2></small>
                            <small> <h2>Passing Year:<span className="font-bold">2021</span></h2></small>
                        </div>
                    </div>
                    <div className="lg:flex gap-10 items-center">
                        <div className="whitespace-nowrap font-bold text-blue-900">Higher Secondary Ceretificate</div>
                        <div>
                            <h2><span className="font-bold whitespace-nowrap">Comilla Govt. College</span></h2>
                            <small> <h2>GPA:<span className="font-bold"> 4.25 out of 5.00</span></h2></small>
                            <small> <h2>Passing Year:<span className="font-bold">2015</span></h2></small>
                        </div>
                    </div>
                    <div className="lg:flex gap-10 items-center">
                        <div className="whitespace-nowrap font-bold text-blue-900">  Secondary School Ceretificate</div>
                        <div>
                            <h2><span className="font-bold whitespace-nowrap">Comilla Victoria Collegiate School</span></h2>
                            <small> <h2>GPA:<span className="font-bold"> 4.44 out of 5.00</span></h2></small>
                            <small> <h2>Passing Year:<span className="font-bold">2013</span></h2></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;