const AddStore = () => {
    const showData: any = (data: Object, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(data)} 
    return(
        <div className="AddStore">
            <h2>Add store</h2>
            <form action="" onClick={showData}>
                <label htmlFor="">Name <input type="text" /></label>
                <label htmlFor="">Open Time <input type="time" name="" id="" /></label>

                <label htmlFor="">Close Time</label>
                <input type="number" name="" id="" />
                <label htmlFor="">Delivery distance</label>
                <input type="number" />
                <label htmlFor="">Special</label>
                <input type="checkbox" name="" id="" />
                <input type="submit" value="create" />
            </form>
        </div>
    )
}

export default AddStore