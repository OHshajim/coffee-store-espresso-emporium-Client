
const Tags = () => {
    return (
        <div className="bg-[#ECEAE3]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  py-10 max-w-[1600px] mx-auto gap-5">
                <div>
                    <img src="../icons/1.png" alt="cup" className="w-14" />
                    <h3 className="text-3xl py-2">Awesome Aroma</h3>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src="../icons/2.png" alt="cup" className="w-14" />
                    <h3 className="text-3xl py-2">High Quality</h3>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div>
                    <img src="../icons/3.png" alt="cup" className="w-14" />
                    <h3 className="text-3xl py-2">Pure Grades</h3>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div>
                    <img src="../icons/4.png" alt="cup" className="w-14" />
                    <h3 className="text-3xl py-2">Proper Roasting</h3>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Tags;