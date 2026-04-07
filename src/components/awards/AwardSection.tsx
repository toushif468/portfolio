import AwardCard from './AwardCard'
import Header from '../general/Header'
import { allAwards } from '@/constants/awards'

const AwardSection = () => {
    return (
        <section id="awards" className="py-20">
            <div className='text-center mb-16'>

                <Header title="Awards & Recognitions" />

            </div>
            <div className=' w-[90%] md:w-[70%] grid md:grid-cols-2 gap-8 mx-auto '>
                {
                    allAwards.map((award) => (
                        <AwardCard
                            key={award.id}
                            image={award.image}
                            title={award.title}
                            description={award.description}
                            date={award.date}
                        />
                    ))
                }

            </div>
        </section>
    )
}

export default AwardSection