import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCocktailGlobalContext } from '../CocktailContext'
import Loading from '../components/Loading'
export default function CocktailDetail() {
	let { id } = useParams()
	const {
		singleCocktail: {
			strDrink,
			strDrinkThumb,
			strGlass,
			strCategory,
			strInstructions,
			strIngredient1,
			strIngredient2,
			strIngredient3,
		},
		loading,
		getSingleCocktail,
	} = useCocktailGlobalContext()
	useEffect(() => {
		getSingleCocktail(id)
	}, [id])

	return (
		<div>
			{loading ? (
				<Loading />
			) : (
				<div className='text-center tracking-widest'>
					<div className='my-10'>
						<Link
							to='/'
							className='px-3 py-1 bg-green-200 rounded-md '
						>
							Go Back
						</Link>
					</div>

					<h1 className='text-3xl font-bold'>{strDrink}</h1>
					<div className='flex flex-col justify-center  mx-auto mt-10 md:flex-row md:mx-auto items-center'>
						<img
							src={strDrinkThumb}
							alt={strGlass}
							className='max-w-sm rounded-md mx-5 lg:max-w-lg'
						/>
						<div className='flex flex-col gap-3 font-medium text-start text-lg max-w-2xl ml-5 mt-5'>
							<p>
								<span className='font-bold py-1 px-2 rounded-md bg-green-200 mr-2'>
									Name
								</span>
								{strDrink}
							</p>
							<p>
								<span className='font-bold py-1 px-2 rounded-md bg-green-200 mr-2'>
									Category
								</span>
								{strCategory}
							</p>
							<p>
								<span className='font-bold py-1 px-2 rounded-md bg-green-200 mr-2'>
									Glass
								</span>
								{strGlass}
							</p>
							<p>
								<span className='font-bold py-1 px-2 rounded-md bg-green-200 mr-2'>
									Instructions
								</span>
								{strInstructions}
							</p>
							<p>
								<span className='font-bold py-1 px-2 rounded-md bg-green-200 mr-2'>
									Ingredient
								</span>
								{strIngredient1 && strIngredient1},{' '}
								{strIngredient2 && strIngredient2},{' '}
								{strIngredient3 && strIngredient3}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
