import React from 'react';
import Profile from './Profile';


function Gallary() {
    const student = [{
        pic: 'im.jpg',
        name: 'Nikhil Maurya',
        branch: 'IT',
        section: 'C'

    },
    {
        pic: 'im.jpg',
        name: 'Rohit',
        branch: 'IT',
        section: 'C'

    },
    {
        pic: 'im.jpg',
        name: 'Parth',
        branch: 'IT',
        section: 'C'

    },
    {
        pic: 'im.jpg',
        name: 'Mayank',
        branch: 'IT',
        section: 'C'

    }]

    return (
        <div>
            {/* <Profile data={student} /> */}

            {
                student.map((ele, index) => (
                    <Profile data={ele} key={index} />

                ))
            }
        </div>
    )

}

export default Gallary;
