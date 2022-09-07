import React, { useContext, useEffect, useState } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const CocktailContext = React.createContext()

const CocktailProvider = ({ children }) => {
	const [loading, setLoading] = useState(true)
	const [searchTerm, setSearchTerm] = useState('a')
	const [cocktails, setCocktails] = useState([])
	const [singleCocktail, setSingleCocktail] = useState({})

	
	const getSingleCocktail = async (id = 11007) => {
		try {
			setLoading(true)
			const res = await fetch(
				`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
			)
			const data = await res.json()
			if (data.drinks) {
				setSingleCocktail(data.drinks[0])
			} else {
				setCocktails([])
			}
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}
	useEffect(() => {
        const searchCockTail = async () => {
            try {
                setLoading(true)
    
                fetch(`${url}${searchTerm}`)
                    .then((response) => {
                        if (!response.ok) {
                            throw response
                        }
                        return response.json()
                    })
                    .then((data) => {
                        if (data.drinks) {
                            setCocktails(data.drinks)
                        } else {
                            setCocktails([])
                        }
                        setLoading(false)
                    })
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
		searchCockTail()
	}, [searchTerm])

	return (
		<CocktailContext.Provider
			value={{
				loading,
				searchTerm,
				setSearchTerm,
				cocktails,
				singleCocktail,
				getSingleCocktail,
			}}
		>
			{children}
		</CocktailContext.Provider>
	)
}

export const useCocktailGlobalContext = () => {
	return useContext(CocktailContext)
}

export { CocktailContext, CocktailProvider }
