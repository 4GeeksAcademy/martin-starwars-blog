import React from "react";

const DetailPlanet = ({ name, population, climate, orbitalPeriod, rotationPeriod, diameter }) => {
    return (
        <div className="container mt-5">
            <div className="d-flex align-items-center">
                
                <div 
                    className="bg-secondary d-flex justify-content-center align-items-center text-white"
                    style={{ width: "800px", height: "600px" }}
                >
                    <h3>Planet Image</h3>
                </div>

                
                <div className="ms-4" style={{ maxWidth: "600px", flexGrow: 1 }}>
                    <h1 className="mb-3">{name}</h1> 

                    <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing, elit massa aliquam venenatis vehicula, sed magnis risus rutrum platea. Imperdiet sollicitudin pellentesque eros molestie sociosqu bibendum malesuada tempus eget inceptos fusce dictumst in morbi nascetur placerat parturient, risus mi ullamcorper curabitur vel sociis phasellus mattis vivamus dictum magnis etiam facilisis donec per. Suspendisse elementum maecenas magna duis eget curae urna penatibus, pretium lacinia cras dis dapibus tempor quis rutrum, erat nulla a cum per felis taciti.

                    Ultricies sapien mi sem mollis nec justo rutrum cubilia vulputate penatibus pretium, tempus nisi ad sociosqu duis leo sodales et habitant. Luctus primis semper lobortis varius at elementum vel quisque vestibulum, habitasse ligula sagittis sollicitudin hendrerit auctor scelerisque curabitur, inceptos et donec vivamus litora nisl arcu nunc. Vivamus netus tristique sapien consequat dignissim ultrices integer, curabitur cubilia justo velit rhoncus nisl duis, habitant pretium potenti senectus placerat dictumst sed, penatibus a scelerisque elementum eu vestibulum.
                    </p>
                </div>
            </div>

            
            <div className="mt-4" style={{ borderTop: "3px solid red", width: "100%", paddingTop: "20px" }}>
                <div className="d-flex justify-content-around text-danger fw-bold">
                    <p>Population: {population}</p>
                    <p>Climate: {climate}</p>
                    <p>Orbital Period: {orbitalPeriod}</p>
                    <p>Rotation Period: {rotationPeriod}</p>
                    <p>Diameter: {diameter}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailPlanet;





        


