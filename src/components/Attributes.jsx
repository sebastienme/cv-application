import { useState } from "react"

export const Card = ({children}) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

/* TODO: Ca fonctionne. Mais il faudrait que je re-factore. Un lift-up.
    Il faudrait une component Parent avec toutes les data.
    Pour qu'en suite je puisse manipuler librement les data dans la section du CV */


export const CardPersonal = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: ''
    })
    
    const handleChange = (e) => {
        const { id, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        })) 
    }

    return (
        <>
            <h2>Personal Details</h2>
            <form id="personnal-details-form">
                <label>Full Name</label>
                <input 
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                />
                <div>{formData.fullName}</div>
                <label>Email</label>
                <input 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <div>{formData.email}</div>
                <label>Phone Number</label>
                <input 
                    id="phone"
                    value={formData.email}
                    onChange={handleChange}
                />
                <div>{formData.phone}</div>
                <label>Address</label>
                <textarea 
                    id="address" 
                    value={formData.address}
                    onChange={handleChange} 
                />
                <div>{formData.address}</div>
            </form>
        </>
    )
}

export const CardEducation = () => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
    })

    const handleChange = (e) => {
        const {id, value} = e.target;
        
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }
    
    return (
        <>
            <h2>Education</h2>
            <form id="education-form">
                <label>School</label>
                <input 
                    id="school"
                    value={formData.school}
                    onChange={handleChange}
                />
                <div>{formData.school}</div>

                <label>Degree</label>
                <input 
                    id="degree"
                    value={formData.degree}
                    onChange={handleChange}
                />
                <div>{formData.degree}</div>

                <label>Start Date</label>
                <input 
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                />
                <div>{formData.startDate}</div>

                <label>End Date</label>
                <input 
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={handleChange}
                />
                <div>{formData.endDate}</div>

                <label>Location</label>
                <input 
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                />
                <div>{formData.location}</div>
            </form>
        </>
    )
}

export const CardJob = () => {
    return (
        <>
            <h2>Experience</h2>
            <form id="experience-form">
                <label for="companyName">Company Name</label>
                <input type="text" id="companyName" name="companyName" />

                <label for="positionTitle">Position Title</label>
                <input type="text" id="positionTitle" name="positionTitle" />

                <label for="startDate">Start Date</label>
                <input type="date" id="startDate" name="startDate" />

                <label for="endDate">End Date</label>
                <input type="date" id="endDate" name="endDate" />

                <label for="location">Location</label>
                <input type="text" id="location" name="location" />

                <label for="description">Description</label>
                <textarea id="description" name="description" rows="4"></textarea>
            </form>
        </>
    )
}