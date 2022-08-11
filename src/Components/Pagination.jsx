const Pagination = ({notesPerPage, totalNotes, paginate , currentPage}) => {
    const pageNumbers = []

    for (let i = 1 ; i<= Math.ceil(totalNotes / notesPerPage) ; i++){
        pageNumbers.push(i)
    }

    return(
        <div className="pagination">
            {
                pageNumbers.map(pgNo => (
                    <a onClick={() => paginate(pgNo)} href = '!#'>
                        {pgNo}
                    </a>
                ))
            }
        </div>

    )
}

export default Pagination