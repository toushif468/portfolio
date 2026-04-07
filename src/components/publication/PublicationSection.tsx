import { allPublications } from '@/constants/publication'
import Header from '../general/Header'
import PublicationCard from './PublicationCard'

const PublicationSection = () => {
    return (
        <section id='publications' className='py-20'>
            <div>
                <Header title="Publication" />
            </div>
            <div className='w-[90%] md:w-[70%] flex flex-col gap-8 mx-auto mt-12'>
                {
                allPublications.map((publication) => (
                    <PublicationCard
                        key={publication.id}
                        image={publication.image}
                        title={publication.title}
                        description={publication.description}
                        date={publication.date}
                        link={publication.link}
                    />
                ))
                }
            </div>
        </section>
    )
}

export default PublicationSection