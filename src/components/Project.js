import WebsiteImg1 from '../portfolioimg/ecommerce-website1.png'
import WebsiteImg2 from '../portfolioimg/restaurant_img.png'
import WebsiteImg3 from '../portfolioimg/food-ecommerce1.png'

export default function Project() {
    const config = {
        projects : [
            {
                images: WebsiteImg1,
                description: 'An online shopping ecommerce website. Built with React JS and MangoDB.',
                link: 'https://github.com/Mohan-raj02/React_ecom.git'
            },
            {
                images: WebsiteImg2,
                description: 'An Restaurant landing page. Built with React JS',
                link: 'https://vocal-dieffenbachia-2c97b5.netlify.app/'
            },
            {
                images: WebsiteImg3,
                description: 'Food spices ecommerce website like swiggy, built with Boostrap & HTML',
                link: 'https://sprightly-rugelach-d4abfd.netlify.app/'
            }
        ]
    }


    return <section className="flex flex-col px-5 py-20 justify-center bg-primary text-white" id='Projects'>
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
                <p>These are some of my best projects. I have built these with React/ Mern and venilla Css. check them out.</p>
            </div>
        </div>

        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                    <a href = {project.link}>
                        <div className='relative'>
                            <img className='h-[200px] w-[500px]' src={project.images}/>
                            <div className='Project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}

            </div>
        </div>

    </section>
}
