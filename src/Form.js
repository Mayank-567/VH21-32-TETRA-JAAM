import './css/Form.css'
function Form() {
    return (
        <form action="" method="post" class='main-form'>
            <h1>Form</h1>
            <div className="personal-info info-div">

                <label htmlFor="dob">Date of Birth</label>
                <input type="date" name="dob" id="dob" />

                <label htmlFor="height">Height</label>
                <input type="number" name="height" id="height" />

                <label htmlFor="weight">Weight</label>
                <input type="number" name="weight" id="weight" />

                <label htmlFor="gender">Gender</label>
                <input type="radio" name="gender" id="gender_male" checked />
                <label htmlFor="gender_male">Male</label>
                <input type="radio" name="gender" id="gender_female" />
                <label htmlFor="gender_female">Female</label>
            </div>

            <div className="main-info info-div">

                <label htmlFor="sbp">Systolic Blood Pressure </label>
                <input type="number" name="sbp" id="sbp" />

                <label htmlFor="dbp">Dystolic Blood Pressure </label>
                <input type="number" name="dbp" id="dbp" />
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
            </div>
            <input type="submit" value="Predict" className="btn"/>
        </form>
    )
}

export default Form