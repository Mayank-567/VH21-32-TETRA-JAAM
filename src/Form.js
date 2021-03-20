import './css/Form.css'
function Form() {

    const send_data = (e) =>{
        e.preventDefault()
        var attribute_data = new FormData(e.target)
        var dataObject = Object.fromEntries(attribute_data)
        console.log(dataObject)
        fetch('http://127.0.0.1:8000/send/',
        {
            method:'POST',
            headers : { 

                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body : JSON.stringify({'data' : dataObject })
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data.status)
        })
    }
    return (
        <div className="Form">
            <h1>Cardiovascular Disease Prediction</h1>
        <form onSubmit={send_data} action="" method="post" className='main-form'>
            <h2>Attribute Information Form</h2>
            <div className="personal-info info-div">

                <label htmlFor="dob">Age (years) </label>
                <input required type="number" name="age" id="age" />

                <label htmlFor="height">Height</label>
                <input required type="number" name="height" id="height" />

                <label htmlFor="weight">Weight</label>
                <input required type="number" name="weight" id="weight" />

                <label htmlFor="gender">Gender</label>
                <div className="gender-div">

                    <input type="radio" value="1" name="gender" id="gender_male" checked />
                    <label htmlFor="gender_male">Male</label>
                    <input type="radio" value="2" name="gender" id="gender_female" />
                    <label htmlFor="gender_female">Female</label>
                </div>
            </div>

            <div className="main-info info-div">

                <label htmlFor="sbp">Systolic Blood Pressure </label>
                <input required type="number" name="sbp" id="sbp" />

                <label htmlFor="dbp">Dystolic Blood Pressure </label>
                <input required type="number" name="dbp" id="dbp" />
            </div>
            <div className="other-info info-div">

                <label htmlFor="cholestrol">Cholestrol</label>
                <select name="cholestrol" id="cholestrol">
                    <option value="normal">Normal</option>
                    <option value="a-normal">Above Normal</option>
                    <option value="wa-normal">Well above normal</option>
                </select>
                <label htmlFor="glucose">Glucose</label>
                <select name="glucose" id="glucose">
                    <option value="normal">Normal</option>
                    <option value="a-normal">Above Normal</option>
                    <option value="wa-normal">Well above normal</option>
                </select>
                <label htmlFor="">Physically Active</label>
                <div className="physically-active-div">

                    <input type="radio" value="1" name="physically-active" id="active" checked />
                    <label htmlFor="active">Active</label>
                    <input type="radio" value="2" name="physically-active" id="non-active" />
                    <label htmlFor="non-active">Not Active</label>
                </div>

            </div>
            <input type="submit" value="Predict" className="btn"/>
        </form>
        </div>
    )
}

export default Form