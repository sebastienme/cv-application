/* eslint-disable react/prop-types */
import { useState } from "react"
import { CV } from "./CV"
import { Button } from "./Utilities"
import { v4 as uuidv4 } from 'uuid';

export const Card = ({children}) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

// TODO: ajouter des fonctionnalites pour ajouter ou supprimer des emplois ou education. Faire fonctionner les boutons

export const UserForm = () => {
    const initialData = {
        fullName: 'François Pignon',
        email: 'francois.pignon@gmail.com',
        phone: '514-222-2222',
        address: 'Montréal, Qc, Canada',
        education: [{
            id: uuidv4(),
            school: 'Université du Québec à Montréal',
            degree: 'Maîtrise en fiscalité',
            startDate: 'Septembre 1978',
            endDate: 'Mai 1982',
            location: 'Montréal, Qc'
        }],
        work: [{
            id: uuidv4(),
            companyName: 'Gouvernement du Québec',
            positionTitle: `Chef, à l'impôt`,
            workStartDate: 'Janvier 1984',
            wordEndDate: `Aujourd'hui`,
            workLocation: 'Montréal, Qc',
            description: `Superviser et coordonner les activités liées à la collecte des impôts dans la province. 
                        Responsable de la gestion des équipes chargées de l'application des lois fiscales, de veiller à la conformité des contribuables
                        et de mettre en œuvre des politiques visant à maximiser les recettes tout en assurant l'équité et la transparence dans le système fiscal.` 
        }]
    }
    
    const [data, setData] = useState(initialData)

    const handleChange = (e, index, category) => {
        const { id, value } = e.target;
      
        setData((prevData) => {
          const newData = { ...prevData };
      
          if (category === 'education') {
            newData.education[index] = {
              ...newData.education[index],
              [id]: value,
            };
          } else if (category === 'work') {
            newData.work[index] = {
              ...newData.work[index],
              [id]: value,
            };
          } else {
            newData[id] = value;
          }
      
          return newData;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(data.education[0].school)
    }

    const clearForm = () => {
        setData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          education: [{
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
          }],
          work: [{
            companyName: '',
            positionTitle: '',
            workStartDate: '',
            workEndDate: '',
            workLocation: '',
            description: '',
          }]
        });
      };

      const goBackToInitialData = () => {
        setData(initialData);
      }

    return (
        <>
            <div className="form-side">
                <div className="form-side__style">
                    <Card>
                        <div>bla bla</div>
                    </Card>
                </div>
                <div className="form-side__content">
                    <Card>
                        <ClearCard
                            clearForm={clearForm}
                            initialData={goBackToInitialData}
                        />
                    </Card>
                    <Card>
                        <h2>Détails Personnels</h2>
                        <CardPersonal
                            data={data}
                            handleChange={handleChange}
                        />         
                    </Card>
                    <Card>
                        <h2>Éducation</h2>
                        <CardEducation
                            data={data}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />         
                    </Card>
                    <Card>
                        <h2>Expérience</h2>
                        <CardJob
                            data={data}
                            handleChange={handleChange}
                        />
                    </Card>
                </div>
            </div>
            <div className="cv-side">
                <CV
                    data={data}
                />
            </div>
        </>
    )
}

const ClearCard = ({clearForm, initialData}) => {
    return (
        <>
            <div className="clear-card">
                <div 
                    className="clear-resume"
                    onClick={clearForm} 
                ><img src="../public/delete.png" alt="" /> Effacer le CV</div>
                <button
                    className="btn btn-example"
                    onClick={initialData}
                >Charger l'Exemple</button>
            </div>
        </>
    )
}

export const CardPersonal = ({data, handleChange}) => {
    return (
        <>
            <form id="personnal-details-form">
                <label>Nom Complet</label>
                <input 
                    id="fullName"
                    value={data.fullName}
                    onChange={handleChange}
                />

                <label>Courriel</label>
                <input 
                    id="email"
                    value={data.email}
                    onChange={handleChange}
                />

                <label>Téléphone</label>
                <input 
                    id="phone"
                    value={data.phone}
                    onChange={handleChange}
                />

                <label>Adresse</label>
                <input 
                    id="address" 
                    value={data.address}
                    onChange={handleChange} 
                />
            </form>
        </>
    )
}

export const CardEducation = ({data, handleChange, handleSubmit}) => {
    return (
        <>
            <form id="education-form">
                {data.education.map((item, index) => (
                <div key={item.id}>
                    <label>École</label>
                    <input 
                        id="school"
                        value={item.school}
                        onChange={(e) => handleChange(e, index, 'education')}
                    />
    
                    <label>Diplôme</label>
                    <input 
                        id="degree"
                        value={item.degree}
                        onChange={(e) => handleChange(e, index, 'education')}
                    />
                    <div className="date-pick">
                        <div className="date-pick__start">
                            <label>Date de Début</label>
                            <input 
                                id="startDate"
                                value={item.startDate}
                                onChange={(e) => handleChange(e, index, 'education')}
                            />
                        </div>
                        <div className="date-pick__end">
                            <label>Date de Fin</label>
                            <input 
                                id="endDate"
                                value={item.endDate}
                                onChange={(e) => handleChange(e, index, 'education')}
                            />
                        </div>
                    </div>
                    <label>Emplacement</label>
                    <input 
                        id="location"
                        value={item.location}
                        onChange={(e) => handleChange(e, index, 'education')}
                    />
                </div>  
                ))}
                <div className="edit-buttons">
                    <div className="edit-buttons__delete">
                        <Button
                            className="edit-btn btn-plain"
                            text="Supprimer"
                        />
                    </div>
                    <div className="edit-buttons__other">
                        <Button
                            className="edit-btn btn-plain"
                            text="Annuler"
                        /> 
                        <Button
                            className="edit-btn btn-full"
                            text="Sauvegarder"
                            type="submit"
                            handleSubmit={handleSubmit}
                        /> 
                    </div>
                </div>
            </form>
            
        </>
    )
}

export const CardJob = ({data, handleChange}) => {
    return (
        <>
            <form id="experience-form">
                <label>Nom de l'Entreprise</label>
                <input 
                    id="companyName"
                    value={data.companyName}
                    onChange={handleChange}
                />

                <label>Position</label>
                <input 
                    id="positionTitle"
                    value={data.positionTitle}
                    onChange={handleChange}
                />
                <div className="date-pick">
                    <div className="date-pick__start">
                        <label>Date de Début</label>
                        <input 
                            id="workStartDate"
                            value={data.workStartDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="date-pick__start">
                        <label>Date de Fin</label>
                        <input 
                            id="workEndDate"
                            value={data.workEndDate}
                            onChange={handleChange}
                        />
                </div>
                </div>
                <label>Emplacement</label>
                <input 
                    id="workLocation"
                    value={data.workLocation}
                    onChange={handleChange}
                />

                <label>Description</label>
                <textarea
                    id="description"
                    value={data.description}
                    onChange={handleChange}
                />
            </form>
        </>
    )
}