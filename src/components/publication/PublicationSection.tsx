import Header from '../general/Header'
import PublicationCard from './PublicationCard'

const PublicationSection = () => {
    return (
        <section id='publications' className='py-20'>
            <div>
                <Header title="Publication" />
            </div>
            <div className='w-[90%] md:w-[70%] flex flex-col gap-8 mx-auto mt-12'>
                <PublicationCard />
            </div>
        </section>
    )
}

export default PublicationSection