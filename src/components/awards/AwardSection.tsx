import AwardCard from './AwardCard'
import Header from '../general/Header'

const AwardSection = () => {
    return (
        <section id="awards" className="py-20">
            <div className='text-center mb-16'>

                <Header title="Awards & Recognitions" />

            </div>
            <div className=' w-[90%] md:w-[70%] grid md:grid-cols-2 gap-8 mx-auto '>
                <AwardCard />
                <AwardCard />
                <AwardCard />

            </div>
        </section>
    )
}

export default AwardSection