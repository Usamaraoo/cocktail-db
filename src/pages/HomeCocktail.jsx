import { useCocktailGlobalContext } from '../CocktailContext'
import CocktailCard from '../components/CocktailCard'
import SearchCocktail from '../components/SearchCocktail'
import Loading from '../components/Loading'

export default function HomeCocktail() {
	const { loading, cocktails } = useCocktailGlobalContext()
	return (
		<div>
			<SearchCocktail />
			{/* List of cocktails */}
			{loading ? (
				<Loading />
			) : (
				<div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:grid-cols-3 mx-auto max-w-full md:max-w-6xl gap-y-10 gap-x-5  mt-20 px-10'>
					{cocktails.length > 0 &&
						cocktails.map((cock, i) => {
							return <CocktailCard key={i} {...cock} />
						})}
				</div>
			)}
            { cocktails.length === 0 && <div>
                {!loading && <p className='text-center'>No result found</p>}
            </div> }
		</div>
	)
}
