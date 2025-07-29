import { Loader2 } from 'lucide-react'
import { useState } from 'react'

const Image = ({ index = 0 }) => {
    const [loading, setLoading] = useState(true)
    return (
        <div className='relative'>
            {loading ? <Loader2 className='size-10 lg:size-14 animate-spin absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' /> : null}
            <img src={`https://picsum.photos/seed/${index}/800/800.webp`} alt={`Image ${index + 1}`} width={800} height={800} loading="lazy" onLoad={() => setLoading(false)} className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`} />
        </div>
    )
}

export default Image
