import React from 'react';
import pic1 from '../../assets/reviewPic.png';
import ReviewCards from '../reviewCards';

const Review = () => {
    const data = [
        {
            p: "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque ",
            img: pic1,
            compName: "Kuphal LLC",
            name: "Emanuel Boyle"
        },
        {
            p: "Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula ",
            img: pic1,
            compName: "Glover - Orn",
            name: "River Graves"
        },
        {
            p: "Quam neque odio urna euismod felis. Sit egestas magna in quisque fames dapibus quis sapien magna. Nisl non eget sit",
            img: pic1,
            compName: "Haag LLC",
            name: "Ryder Malone"
        }
    ];

    return (
        <div className="bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 overflow-x-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Reviews from our customers</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((review, index) => (
                    <ReviewCards
                        key={index}
                        text={review.p}
                        image={review.img}
                        compName={review.compName}
                        name={review.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Review;
