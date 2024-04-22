import { useState } from "react"
import { Header } from "../../common/header/Header"
import { Button } from "../../common/buttons/Button"
import { Typography } from "../../common/typography/Typography"
import { PAGE, STEP, STEPS, TOTAL_RESULTS, genreList } from "../../utils/constans"
import { Select } from "../../common/select/Select"
import { Input } from "../../common/input/Input"
import { NotFound } from "../../common/not-found/NotFound"
import { isValidValue } from "../../utils/check-input-value"
import { STORAGE_KEYS, setStorageValue } from "../../utils/local-storage"
import { useGetMoviesQuery } from "../../app/api/hooks"
import { Card } from "../../common/card/Card"
import { Loader } from "../../common/loader/Loader"
import { PrevNextButtons } from "../../common/buttons/prev-next-buttons/PrevNextButtons"
import styles from "./Steps.module.css"

export const Steps = () => {

    const [step, setStep] = useState<number>(STEP)
    const [page, setPage] = useState<number>(PAGE)
    const [selectedGenre, setSelectedGenre] = useState<string>('')
    const [selectedMovie, setSelectedMovie] = useState<string>('')
    const [inputValue, setInputValue] = useState<string>('')
    const [titleMovies, setTitleMovies] = useState<string>('')
    
    const isInputError = isValidValue(inputValue)

    // Get movies list
    const { data: movies, isLoading, isFetching } = useGetMoviesQuery(
        { title: titleMovies, page }, 
        { skip: !titleMovies.length || isInputError }
    )
    
    // Change steps
    const handleNextStep = () => {
        if (step === STEPS.first && selectedGenre) {
            // Addition a selected genre to localStorage
            setStorageValue(STORAGE_KEYS.genre, selectedGenre)
        } else if (step === STEPS.second) {
            setTitleMovies(inputValue)
        }

        setStep(prevStep => prevStep + 1)
    }
    const handlePrevStep = () => setStep(prevStep => prevStep - 1)

    // Pagination
    const handleNextPage = () => setPage(prevPage => prevPage + 1)
    const handlePrevPage = () => setPage(prevPage => prevPage - 1)

    // Select movie and genre
    const onSelectGenre = (genre: string) => setSelectedGenre(genre)
    const onSelectMovie = (movie: string) => setSelectedMovie(movie)

    const handleInputChange = (value: string) => setInputValue(value)

    const isDisabledButton = !selectedGenre || step === STEPS.fourth || (step === STEPS.third && !movies?.Search?.length && !selectedMovie.length) || (step === STEPS.third && !selectedMovie.length) ||  (step === STEPS.second && !inputValue.length || isInputError)
    
    return (
        <>
            <Header currentStep={step} onClick={handlePrevStep} disabled={step === STEPS.first} />
            <div className={styles.container}>
                <>
                    <div className={styles.title}>
                        <Typography text={step === STEPS.first ? 'Your favorite movie genre?' : step === STEPS.second ? 'Enter movie title and choose it' : ''} />
                        {step === STEPS.third && movies?.Search?.length && <PrevNextButtons onClickNext={handleNextPage} onClickBack={handlePrevPage} disabledBack={page === PAGE} disabledNext={!!movies?.totalResults && +movies?.totalResults < TOTAL_RESULTS} />}
                    </div>
                    {step === STEPS.first && (
                        genreList.map(({ genre, icon }) => (
                            <Select 
                                key={genre} 
                                text={genre} 
                                icon={icon} 
                                active={selectedGenre === genre} 
                                onClick={() => onSelectGenre(genre)} 
                            />
                        ))
                    )}

                    {step === STEPS.second && (
                        <Input onChange={handleInputChange} value={inputValue} error={isInputError} placeholder='Movie title here' errorText='Error text' />
                    )}

                    {step === STEPS.third && (
                        isLoading || isFetching ? <Loader /> : (
                            movies?.Search?.length ? (
                                <div className={styles.cards}>
                                    {movies?.Search?.map(({ Title, Year, Poster }) => (
                                        <Card 
                                            key={`${Title}_${Year}`} 
                                            url={Poster} 
                                            title={Title} 
                                            year={Year} 
                                            active={selectedMovie === Title} 
                                            onClick={() => onSelectMovie(Title)}
                                        />
                                    ))}
                                </div>
                            ) : <NotFound />
                        )
                    )}

                    {step === STEPS.fourth && (
                        <div className={styles.result}>
                            <Typography text='Thanks! Your favorite movie and genre:' />
                            <span>- {selectedMovie}</span>
                            <span>- {selectedGenre}</span>
                        </div>
                    )}
                </>
            </div>
            <div className={styles.buttonWrapper}>
            <Button 
                text={step !== STEPS.third ? 'Continue' : 'Complete'} 
                disabled={isDisabledButton} 
                onClick={handleNextStep}
            />
            </div>
        </>
    )
}