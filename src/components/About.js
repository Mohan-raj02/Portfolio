import Aboutimg from '../portfolioimg/About.png'

export default function About(){
    const config = {
        line1: 'Passionate web developer specializing in React JS, with a strong track record of enhancing performance and user experience.',
        line2: 'Developed a mini e-commerce site with a 95% performance boost and a restaurant landing page that increased reservations by 50%.',
        line3: 'Dedicated to creating dynamic, responsive websites and optimizing front-end solutions for improved efficiency. Committed to continuous learning and applying best practices to deliver exceptional web experiences.'
    };
    


    return <section className="flex flex-col md:flex-row bg-secondary px-5 justify-center" id='About'>
        <div className='py-5 md:w-1/2'>
            <img src={Aboutimg}/>
        </div>
        <div className='md:w-1/2 flex justify-center text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}